let tasController, nextFrameInput = 0;
let tasHistory = [], lastInputRow, lastEelvl, playingIndex = false;
const listDiv = document.getElementById('list');

function inputText(row){
  return `\xa0\xa0\xa0\xa0\xa0${row.toString()}`.substr(-5) + '\xa0' +
    (nextFrameInput & Input.JUMP  ? 'O' : '\xa0') + '\xa0' +
    (nextFrameInput & Input.LEFT  ? '<' : '\xa0') + '\xa0' +
    (nextFrameInput & Input.UP    ? '^' : '\xa0') + '\xa0' +
    (nextFrameInput & Input.RIGHT ? '>' : '\xa0') + '\xa0' +
    (nextFrameInput & Input.DOWN  ? 'v' : '\xa0');
}

class TASController {
  input = 0;
  attach(){}
  detach(){}
  blur(){
    this.input = 0;
  }
  nextInput(){
    return this.input;
  }
}

function advanceTime(){
  tasController.input = nextFrameInput;
  tasHistory.push({ input: nextFrameInput, node: lastInputRow });
  lastInputRow.innerText = inputText(tasHistory.length - 1);
  lastInputRow.className = 'list-row';
  lastInputRow = document.createElement('div');
  lastInputRow.className = 'list-row list-current';
  listDiv.appendChild(lastInputRow);
  eeGame.advanceTime(Config.physics_ms_per_tick);
}

function runTAS(){
  Config.eeotasBugs = true;
  tasController = new TASController();

  const onKeyCode = (code, down) => {
    if (playingIndex !== false)
      return;
    const onKey = b => {
      if (down)
        nextFrameInput |= b;
      else
        nextFrameInput &= 0x1f ^ b;
    };
    if      (code === 'KeyW' || code === 'ArrowUp'   ) onKey(Input.UP);
    else if (code === 'KeyD' || code === 'ArrowRight') onKey(Input.RIGHT);
    else if (code === 'KeyS' || code === 'ArrowDown' ) onKey(Input.DOWN);
    else if (code === 'KeyA' || code === 'ArrowLeft' ) onKey(Input.LEFT);
    else if (code === 'Space') onKey(Input.JUMP);
    else if (code === 'Backspace' && down){
      if (tasHistory.length > 0){
        const world = new World();
        world.loadEelvl(lastEelvl);
        if (eeGame)
          eeGame.destroy();
        eeGame = new EverybodyEdits(defaultScreen, world);
        eeGame.attachController(tasController);
        tasController.blur();
        const rem = tasHistory.pop();
        rem.node.parentElement.removeChild(rem.node);
        for (const inp of tasHistory){
          tasController.input = inp.input;
          eeGame.advanceTime(Config.physics_ms_per_tick);
        }
        eeGame.draw();
      }
    }
    else if (down){
      advanceTime();
      eeGame.draw();
    }
    lastInputRow.innerText = inputText(tasHistory.length);
    listDiv.scrollTop = listDiv.scrollHeight;
  };

  window.addEventListener('keydown', e => { onKeyCode(e.code, true); });
  window.addEventListener('keyup', e => { onKeyCode(e.code, false); });

  loadZipObj(campaignsZip, true);
}

function clearHistory(){
  tasHistory = [];
  lastInputRow = document.createElement('div');
  lastInputRow.className = 'list-row list-current';
  lastInputRow.innerText = inputText(0);
  listDiv.innerHTML = '';
  listDiv.appendChild(lastInputRow);
}

function loadEelvl(eelvl){
  clearHistory();
  lastEelvl = eelvl;
  defaultScreen.drawBanner('Loading level...');
  const world = new World();
  world.loadEelvl(eelvl);
  if (eeGame)
    eeGame.destroy();
  eeGame = new EverybodyEdits(defaultScreen, world);
  eeGame.attachController(tasController);
  eeGame.draw();
}

function playTAS(){
  if (playingIndex === false){
    playingIndex = 0;
    document.getElementById('play').innerText = 'Stop';
    const world = new World();
    world.loadEelvl(lastEelvl);
    if (eeGame)
      eeGame.destroy();
    eeGame = new EverybodyEdits(defaultScreen, world);
    eeGame.attachController(tasController);
    tasController.blur();

    let lastTick = Date.now();
    let accumulatedTime = 0;
    const tick = () => {
      if (playingIndex === false || playingIndex >= tasHistory.length){
        playingIndex = false;
        document.getElementById('play').innerText = 'Play';
      }
      else{
        const now = Date.now();
        let dt = Math.min(15 * Config.physics_ms_per_tick, now - lastTick);
        lastTick = now;
        accumulatedTime += dt;
        while (accumulatedTime >= Config.physics_ms_per_tick && playingIndex < tasHistory.length){
          tasController.input = tasHistory[playingIndex].input;
          playingIndex++;
          eeGame.advanceTime(Config.physics_ms_per_tick);
          accumulatedTime -= Config.physics_ms_per_tick;
        }
        eeGame.draw();
        window.requestAnimationFrame(tick);
      }
    };
    tick();
  }
  else{
    while (playingIndex < tasHistory.length){
      tasController.input = tasHistory[playingIndex++].input;
      eeGame.advanceTime(Config.physics_ms_per_tick);
    }
    eeGame.draw();
    playingIndex = false;
  }
}

async function loadTAS(file){
  const data = await new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onloadend = e => {
      resolve(e.target.result);
    };
    r.readAsText(file);
  });
  clearHistory();
  const world = new World();
  world.loadEelvl(lastEelvl);
  if (eeGame)
    eeGame.destroy();
  eeGame = new EverybodyEdits(defaultScreen, world);
  eeGame.attachController(tasController);
  tasController.blur();
  nextFrameInput = 0;
  for (let i = 0; i < data.length; i++){
    nextFrameInput = data.charCodeAt(i) - 48;
    advanceTime();
  }
  lastInputRow.innerText = inputText(tasHistory.length);
  listDiv.scrollTop = listDiv.scrollHeight;
  eeGame.draw();
}

function saveTAS(){
  const output = tasHistory.map(h => String.fromCharCode(48 + h.input)).join('');
  const blob = new Blob([output], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'tas.eetas';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
