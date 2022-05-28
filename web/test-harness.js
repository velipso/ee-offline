let lastSimulator;

class FakePlayer {
  eePlayer;
  constructor(eePlayer){ this.eePlayer = eePlayer; }
  get worldPosition(){ return {x: (this.eePlayer.x + 8) >> 4, y: (this.eePlayer.y + 8) >> 4}; }
  get position(){ return {x: this.eePlayer.x, y: this.eePlayer.y}; }
  get x(){ return this.eePlayer.x; }
  get y(){ return this.eePlayer.y; }
}

class FakeScreen {
  boundary = {x: 0, y: 0, w: Config.bw, h: Config.bh};
  drawState(state){
    state.draw(this, 0, 0);
  }
  copyPixels(){}
  copyPixelsRotated(){}
  fillRect(){}
  text(){}
  textWrap(){}
  textSign(){}
  debugText(){}
  debugRect(){}
  tick(){}
}

class FakeController extends Controller {
  input = 0;
  attach(){}
  detach(){}
  nextInput(){
    return this.input;
  }
}

class Simulator {
  input;
  controller;
  ee;
  world;
  player;
  goal;
  spawn;
  events = [];
  template;
  mappings;

  constructor(template, mappings){
    this.template = template;
    this.mappings = mappings;
    lastSimulator = this;
    this.controller = new FakeController();
    this.world = new World();

    const lines = template.trim().split('\n');
    const height = lines.length;
    const width = lines[0].trim().length;

    this.world.clearWorld(width, height, 1);
    for (let y = 0; y < height; y++){
      const line = lines[y].trim();
      if (line.length !== width)
        throw new Error('Invalid test, level widths are inconsistent');
      for (let x = 0; x < width; x++){
        const m = mappings[line.charAt(x)];
        if (!m)
          throw new Error(`Unknown character: "${line.charAt(x)}"`);
        const {tile, prop, spawn, goal} = m;
        if (spawn)
          this.world.spawnPoints = [[[x, y]]];
        if (goal)
          this.goal = {x, y};
        if (tile){
          this.world.setTileComplex(
            tile >= 500 && tile < 1000 ? 1 : 0,
            x, y,
            tile,
            prop
          );
        }
      }
    }

    this.ee = new EverybodyEdits(new FakeScreen(), this.world, new EmptyWorldResolver());
    this.ee.attachController(this.controller);
    this.player = new FakePlayer(this.ee.state.player);
  }

  wait(ms){
    this.events.push({kind: 'wait', ms});
    while (ms >= Config.physics_ms_per_tick){
      this.ee.advanceTime(Config.physics_ms_per_tick);
      this.ee.draw();
      ms -= Config.physics_ms_per_tick;
    }
    this.ee.advanceTime(ms);
    return this;
  }

  setKey(key, keyDown){
    this.events.push({kind: 'setKey', key, keyDown});
    if (keyDown)
      this.controller.input |= key;
    else
      this.controller.input &= 0xffff ^ key;
    return this;
  }

  playerX(x){
    this.events.push({kind: 'playerX', x});
    this.ee.state.player.x = x;
    return this;
  }

  playerY(y){
    this.events.push({kind: 'playerY', y});
    this.ee.state.player.y = y;
    return this;
  }

  playerWearsGold(enable){
    this.events.push({kind: 'playerWearsGold', enable});
    this.ee.state.player.wearsGoldSmiley = enable;
    return this;
  }

  noDir(){
    return this
      .setKey(Input.UP   , false)
      .setKey(Input.RIGHT, false)
      .setKey(Input.DOWN , false)
      .setKey(Input.LEFT , false);
  }

  up(){
    return this
      .setKey(Input.UP   , true)
      .setKey(Input.RIGHT, false)
      .setKey(Input.DOWN , false)
      .setKey(Input.LEFT , false);
  }

  upRight(){
    return this
      .setKey(Input.UP   , true)
      .setKey(Input.RIGHT, true)
      .setKey(Input.DOWN , false)
      .setKey(Input.LEFT , false);
  }

  rightUp(){
    return this.upRight();
  }

  right(){
    return this
      .setKey(Input.UP   , false)
      .setKey(Input.RIGHT, true)
      .setKey(Input.DOWN , false)
      .setKey(Input.LEFT , false);
  }

  rightDown(){
    return this
      .setKey(Input.UP   , false)
      .setKey(Input.RIGHT, true)
      .setKey(Input.DOWN , true)
      .setKey(Input.LEFT , false);
  }

  downRight(){
    return this.rightDown();
  }

  down(){
    return this
      .setKey(Input.UP   , false)
      .setKey(Input.RIGHT, false)
      .setKey(Input.DOWN , true)
      .setKey(Input.LEFT , false);
  }

  downLeft(){
    return this
      .setKey(Input.UP   , false)
      .setKey(Input.RIGHT, false)
      .setKey(Input.DOWN , true)
      .setKey(Input.LEFT , true);
  }

  leftDown(){
    return this.downLeft();
  }

  left(){
    return this
      .setKey(Input.UP   , false)
      .setKey(Input.RIGHT, false)
      .setKey(Input.DOWN , false)
      .setKey(Input.LEFT , true);
  }

  leftUp(){
    return this
      .setKey(Input.UP   , true)
      .setKey(Input.RIGHT, false)
      .setKey(Input.DOWN , false)
      .setKey(Input.LEFT , true);
  }

  upLeft(){
    return this.leftUp();
  }

  jump(){
    return this.setKey(Input.JUMP, true);
  }

  noJump(){
    return this.setKey(Input.JUMP, false);
  }

  draw(){
    this.ee.draw();
  }

  clone(){
    return new Simulator(this.template, this.mappings);
  }
}

class ExpectError extends Error {}

class Expect {
  value;

  constructor(value){
    this.value = value;
  }

  toEqual(correct){
    const path = [];
    const eq = (a, b) => {
      if (typeof a !== typeof b)
        return false;
      switch (typeof a){
        case 'number':
        case 'string':
        case 'boolean':
          return a === b;
        case 'object':
          if (a === b)
            return true;
          if (a === null)
            return false;
          if (Array.isArray(a)){
            if (!Array.isArray(b))
              return false;
            for (let i = 0; i < Math.max(a.length, b.length); i++){
              path.push(i);
              if (!eq(a[i], b[i]))
                return false;
              path.pop();
            }
            return true;
          }
          for (const [k, v] of Object.entries(a)){
            path.push(k);
            if (!eq(a[k], b[k]))
              return false;
            path.pop();
          }
          for (const [k, v] of Object.entries(b)){
            path.push(k);
            if (!eq(a[k], b[k]))
              return false;
            path.pop();
          }
          return true;
      }
      throw new Error('Unknown type: ' + typeof a);
    };
    if (!eq(this.value, correct)){
      console.error('Expecting', this.value, 'to be', correct);
      if (path.length > 0)
        console.error(`Object path: this.${path.join('.')}`);
      throw new ExpectError('Values not equal');
    }
  }

  toBeGreaterThanOrEqual(correct){
    if (typeof this.value !== 'number')
      throw new ExpectError('Value isn\'t a number');
    if (this.value < correct){
      console.error('Expecting', this.value, '>=', correct);
      throw new ExpectError('Values not >=');
    }
  }

  toBeLessThanOrEqual(correct){
    if (typeof this.value !== 'number')
      throw new ExpectError('Value isn\'t a number');
    if (this.value > correct){
      console.error('Expecting', this.value, '<=', correct);
      throw new ExpectError('Values not <=');
    }
  }

  toBeCloseTo(correct, dist){
    if (typeof this.value !== 'number')
      throw new ExpectError('Value isn\'t a number');
    if (Math.abs(correct - this.value) >= Math.pow(0.1, dist)){
      console.error('Expecting', this.value, 'to be close to', correct);
      throw new ExpectError('Values not close enough');
    }
  }

  toBeLessThan(correct){
    if (typeof this.value !== 'number')
      throw new ExpectError('Value isn\'t a number');
    if (this.value >= correct){
      console.error('Expecting', this.value, '<', correct);
      throw new ExpectError('Values not <');
    }
  }
}

class TestSuite {
  static desc = '';
  static tests = [];

  static it(name, func){
    TestSuite.tests.push({desc: TestSuite.desc, name, func});
  }

  static expect(value){
    return new Expect(value);
  }

  static async run(){
    const menu = document.getElementById('menu');
    menu.innerHTML = '';
    const table = document.createElement('table');
    menu.appendChild(table);
    const TD = n => {
      const ele = document.createElement('td');
      ele.appendChild(document.createTextNode(n));
      ele.style.backgroundColor = '#333';
      return ele;
    };

    let totalPass = 0;
    let totalFail = 0;
    for (let i = 0; i < TestSuite.tests.length; i++){
      const test = TestSuite.tests[i];
      let pass = true;
      try {
        test.func();
      } catch (e){
        pass = false;
        console.error('Test failed:', test.name);
        console.error(e);
      }

      const simulator = lastSimulator;
      const tr = document.createElement('tr');
      const tdi = TD(`${i + 1}`);
      tdi.style.textAlign = 'right';
      tr.appendChild(tdi);
      tr.appendChild(TD(test.name));
      const td = TD(pass ? 'pass' : 'FAIL');
      td.style.textAlign = 'center';
      if (!pass){
        td.style.color = '#f00';
        td.style.fontWeight = 'bold';
        totalFail++;
      }
      else
        totalPass++;
      tr.appendChild(td);
      const btnTd = TD('');
      tr.appendChild(btnTd);
      const btn = document.createElement('button');
      btn.appendChild(document.createTextNode('Show'));
      btnTd.appendChild(btn);
      btn.addEventListener('click', () => {
        window.sim = simulator.clone();
        window.sim.ee.setScreen(defaultScreen);
        let events = JSON.parse(JSON.stringify(simulator.events));
        const totalTime = events.filter(k => k.kind === 'wait').reduce((v, k) => v + k.ms, 0);
        let timeLeft = totalTime;
        const advanceMs = (dt) => {
          timeLeft -= dt;
          let done = false;
          while (events.length > 0 && !done){
            switch (events[0].kind){
              case 'wait':
                if (events[0].ms > dt){
                  window.sim.wait(dt);
                  events[0].ms -= dt;
                  done = true;
                }
                else{
                  window.sim.wait(events[0].ms);
                  dt -= events[0].ms;
                  events.shift();
                }
                break;
              case 'setKey':
                window.sim.setKey(events[0].key, events[0].keyDown);
                events.shift();
                break;
              case 'playerX':
                window.sim.playerX(events[0].x);
                events.shift();
                break;
              case 'playerY':
                window.sim.playerX(events[0].y);
                events.shift();
                break;
              case 'playerWearsGold':
                window.sim.playerWearsGold(events[0].enable);
                events.shift();
                break;
              default:
                throw new Error(`Unknown event type: ${events[0].kind}`);
            }
          }
        };
        const draw = () => {
          window.sim.draw();
          defaultScreen.drawStatus(timeLeft <= 0
            ? 'Hit R to restart'
            : `Hit Space ${totalTime - timeLeft}/${totalTime}`
          );
        };
        window.onTestKey = key => {
          if (key === 'Space' && timeLeft > 0)
            advanceMs(Math.min(timeLeft, Config.physics_ms_per_tick));
          if (key === 'KeyR'){
            window.sim = simulator.clone();
            window.sim.ee.setScreen(defaultScreen);
            events = JSON.parse(JSON.stringify(simulator.events));
            timeLeft = totalTime;
          }
          draw();
        };
        advanceMs(0);
        draw();
        hideTestMenu();
      });
      table.appendChild(tr);
      await new Promise(resolve => setTimeout(resolve, 0));
    }

    const tr = document.createElement('tr');
    table.appendChild(tr);
    tr.appendChild(TD(''));
    const td = TD('Total Pass:');
    td.style.textAlign = 'right';
    tr.appendChild(td);
    const td2 = TD(`${totalPass} / ${totalPass + totalFail}`);
    td2.colSpan = 2;
    td2.style.textAlign = 'center';
    tr.appendChild(td2);
    if (totalFail > 0)
      document.getElementById('menu').style.backgroundColor = '#f00';

    return totalFail <= 0;
  }
}

async function runTests(){
  // extra config required for tests
  Config.blockSize = 16;
  Config.physics = {
    ms_per_tick: Config.physics_ms_per_tick,
    autoalign_range: 2
  };
  //defaultScreen.debug = true;
  window.addEventListener('keydown', e => {
    if (window.onTestKey)
      window.onTestKey(e.code);
  });
  defaultScreen.drawBanner('Running tests...');
  loadTests(TestSuite.it, TestSuite.expect);
  defaultScreen.drawBanner((await TestSuite.run()) ? 'Pass' : 'Fail');
}

function showTestMenu(){
  document.getElementById('menu').style.display = '';
  document.getElementById('menu-closed').style.display = 'none';
  return false;
}

function hideTestMenu(){
  document.getElementById('menu').style.display = 'none';
  document.getElementById('menu-closed').style.display = '';
  return false;
}

async function loadResources(){
  const dpr = window.devicePixelRatio || 1;
  const cnv = document.createElement('canvas');
  document.body.appendChild(cnv);

  defaultScreen = new Screen(cnv, dpr);

  new ResizeObserver(entries => {
    for (const e of entries) {
      const c = e.contentRect;
      defaultScreen.resize(
        Math.round(c.width - (window.screenRightMargin || 0)), // screen right margin for tas.html
        Math.round(c.height)
      );
    }
  }).observe(document.body);

  window.addEventListener('keydown', e => {
    const result = (() => {
      switch (e.code){
        case 'F10':
          if (window.sim && window.sim.ee){
            window.sim.ee.setOptions({screenDebug: !window.sim.ee.getOptions().screenDebug});
            return true;
          }
          break;
        case 'Escape':
          if (document.getElementById('menu').style.display === '')
            hideTestMenu();
          else
            showTestMenu();
          return true;
      }
      return false;
    })();
    if (result){
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  await EverybodyEdits.init((done, total) => {
    defaultScreen.drawLoading(done, total);
  });
  await document.fonts.ready;
}
