let lastSimulator;

class FakePlayer {
  eePlayer;
  constructor(eePlayer){ this.eePlayer = eePlayer; }
  get worldPosition(){ return {x: (this.eePlayer.x + 8) >> 4, y: (this.eePlayer.y + 8) >> 4}; }
  get position(){ return {x: this.eePlayer.x, y: this.eePlayer.y}; }
  get x(){ return this.eePlayer.x; }
  get y(){ return this.eePlayer.y; }
}

class Simulator {
  input;
  ee;
  world;
  player;
  goal;
  spawn;
  events = [];
  template;

  constructor(template){
    this.template = template;
    lastSimulator = this;
    this.input = new Input();
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
        const ch = line.charAt(x);
        let placeTile = false;
        let properties;
        switch (ch){
          case ' ': break;
          case '#': placeTile = 1088; break; // block
          case '^': placeTile =    2; break; // gravity up
          case '>': placeTile =    3; break; // gravity right
          case '<': placeTile =    1; break; // gravity left
          case '.': placeTile =    4; break; // dot
          case 'U': placeTile =  116; break; // boost up
          case 'R': placeTile =  115; break; // boost right
          case 'D': placeTile =  117; break; // boost down
          case 'L': placeTile =  114; break; // boost left
          case 'k': placeTile =    6; break; // red key
          case 'd': placeTile =   23; break; // red door
          case 'g': placeTile =   26; break; // red gate
          case '[': placeTile = 1116; properties = {rotation: 2}; break; // half slab left
          case ']': placeTile = 1116; properties = {rotation: 0}; break; // half slab right
          case '{': placeTile = 1092; properties = {rotation: 0}; break; // one way left
          case '}': placeTile = 1092; properties = {rotation: 2}; break; // one way right
          case 'X': // goal
            if (this.goal)
              throw new Error('Cannot set goal twice');
            this.goal = {x, y};
            placeTile = 5;
            break;
          case 'p': // player spawn
            this.world.spawnPoints = [[[x, y]]];
            break;
          default:
            throw new Error(`Unknown test tile: ${ch}`);
        }
        if (placeTile){
          this.world.setTileComplex(
            placeTile >= 500 && placeTile < 1000 ? 1 : 0,
            x, y,
            placeTile,
            properties
          );
        }
      }
    }

    this.ee = new EverybodyEdits(defaultScreen, this.input, this.world);
    this.player = new FakePlayer(this.ee.state.player);
  }

  wait(ms){
    this.events.push({kind: 'wait', ms});
    this.ee.advanceTime(ms);
    return this;
  }

  setKey(key, keyDown){
    this.events.push({kind: 'setKey', key, keyDown});
    if (keyDown)
      this.input.down(key);
    else
      this.input.up(key);
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

  noDir(){
    return this
      .setKey('ArrowUp', false)
      .setKey('ArrowRight', false)
      .setKey('ArrowDown', false)
      .setKey('ArrowLeft', false);
  }

  up(){
    return this
      .setKey('ArrowUp', true)
      .setKey('ArrowRight', false)
      .setKey('ArrowDown', false)
      .setKey('ArrowLeft', false);
  }

  upRight(){
    return this
      .setKey('ArrowUp', true)
      .setKey('ArrowRight', true)
      .setKey('ArrowDown', false)
      .setKey('ArrowLeft', false);
  }

  rightUp(){
    return this.upRight();
  }

  right(){
    return this
      .setKey('ArrowUp', false)
      .setKey('ArrowRight', true)
      .setKey('ArrowDown', false)
      .setKey('ArrowLeft', false);
  }

  rightDown(){
    return this
      .setKey('ArrowUp', false)
      .setKey('ArrowRight', true)
      .setKey('ArrowDown', true)
      .setKey('ArrowLeft', false);
  }

  downRight(){
    return this.rightDown();
  }

  down(){
    return this
      .setKey('ArrowUp', false)
       .setKey('ArrowRight', false)
      .setKey('ArrowDown', true)
      .setKey('ArrowLeft', false);
  }

  downLeft(){
    return this
      .setKey('ArrowUp', false)
      .setKey('ArrowRight', false)
      .setKey('ArrowDown', true)
      .setKey('ArrowLeft', true);
  }

  leftDown(){
    return this.downLeft();
  }

  left(){
    return this
      .setKey('ArrowUp', false)
      .setKey('ArrowRight', false)
      .setKey('ArrowDown', false)
      .setKey('ArrowLeft', true);
  }

  leftUp(){
    return this
      .setKey('ArrowUp', true)
      .setKey('ArrowRight', false)
      .setKey('ArrowDown', false)
      .setKey('ArrowLeft', true);
  }

  upLeft(){
    return this.leftUp();
  }

  jump(){
    return this.setKey('Space', true);
  }

  noJump(){
    return this.setKey('Space', false);
  }

  draw(){
    this.ee.draw();
  }

  clone(){
    return new Simulator(this.template);
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
        if (e instanceof ExpectError){
          pass = false;
          console.error('Test failed:', test.name);
          console.error(e);
        }
        else
          throw e;
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
                window.sim.playerX(events[0].Y);
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
