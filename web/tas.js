let tasInput, nextFrameInput = {up: false, right: false, down: false, left: false, jump: false};
let tasHistory = [], lastInputRow, lastEelvl, playingIndex = false;
const listDiv = document.getElementById('list');

function pressInput(inp){
  if (inp.up   ) tasInput.down('ArrowUp'   ); else tasInput.up('ArrowUp'   );
  if (inp.right) tasInput.down('ArrowRight'); else tasInput.up('ArrowRight');
  if (inp.down ) tasInput.down('ArrowDown' ); else tasInput.up('ArrowDown' );
  if (inp.left ) tasInput.down('ArrowLeft' ); else tasInput.up('ArrowLeft' );
  if (inp.jump ) tasInput.down('Space'     ); else tasInput.up('Space'     );
}

function inputText(row){
  return `\xa0\xa0\xa0\xa0\xa0${row.toString()}`.substr(-5) + '\xa0' +
    (nextFrameInput.jump  ? 'O' : '\xa0') + '\xa0' +
    (nextFrameInput.left  ? '<' : '\xa0') + '\xa0' +
    (nextFrameInput.up    ? '^' : '\xa0') + '\xa0' +
    (nextFrameInput.right ? '>' : '\xa0') + '\xa0' +
    (nextFrameInput.down  ? 'v' : '\xa0');
}

function advanceTime(){
  pressInput(nextFrameInput);
  tasHistory.push({
    up   : nextFrameInput.up   ,
    right: nextFrameInput.right,
    down : nextFrameInput.down ,
    left : nextFrameInput.left ,
    jump : nextFrameInput.jump ,
    node : lastInputRow
  });
  lastInputRow.innerText = inputText(tasHistory.length - 1);
  lastInputRow.className = 'list-row';
  lastInputRow = document.createElement('div');
  lastInputRow.className = 'list-row list-current';
  listDiv.appendChild(lastInputRow);
  eeGame.advanceTime(Config.physics_ms_per_tick);
}

function runTAS(){
  Config.eeotasCompatibility = true;
  tasInput = new Input();

  window.onTestKey = (code, down) => {
    if (playingIndex !== false)
      return;
    if      (code === 'KeyW' || code === 'ArrowUp'   ) nextFrameInput.up    = down;
    else if (code === 'KeyD' || code === 'ArrowRight') nextFrameInput.right = down;
    else if (code === 'KeyS' || code === 'ArrowDown' ) nextFrameInput.down  = down;
    else if (code === 'KeyA' || code === 'ArrowLeft' ) nextFrameInput.left  = down;
    else if (code === 'Space') nextFrameInput.jump = down;
    else if (code === 'Backspace' && down){
      if (tasHistory.length > 0){
        const world = new World();
        world.loadEelvl(lastEelvl);
        eeGame = new EverybodyEdits(defaultScreen, tasInput, world);
        tasInput.blur();
        const rem = tasHistory.pop();
        rem.node.parentElement.removeChild(rem.node);
        for (const inp of tasHistory){
          pressInput(inp);
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
  eeGame = new EverybodyEdits(defaultScreen, tasInput, world);
  eeGame.draw();
}

function playTAS(){
  if (playingIndex === false){
    playingIndex = 0;
    document.getElementById('play').innerText = 'Stop';
    const world = new World();
    world.loadEelvl(lastEelvl);
    eeGame = new EverybodyEdits(defaultScreen, tasInput, world);
    tasInput.blur();

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
          pressInput(tasHistory[playingIndex]);
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
      pressInput(tasHistory[playingIndex++]);
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
  eeGame = new EverybodyEdits(defaultScreen, tasInput, world);
  tasInput.blur();
  nextFrameInput = {up: false, right: false, down: false, left: false, jump: false};
  /*
  advanceTime();
  advanceTime();
  advanceTime();
  advanceTime();
  advanceTime();
  advanceTime();
  advanceTime();
  advanceTime();
  advanceTime();
  advanceTime();
  advanceTime();
  */
  for (let i = 0; i < data.length; i++){
    const c = data.charCodeAt(i) - 48;
    nextFrameInput.jump  = !!(c & 1);
    nextFrameInput.left  = !!(c & 2);
    nextFrameInput.right = !!(c & 4);
    nextFrameInput.up    = !!(c & 8);
    nextFrameInput.down  = !!(c & 16);
    advanceTime();
  }
  lastInputRow.innerText = inputText(tasHistory.length);
  listDiv.scrollTop = listDiv.scrollHeight;
  eeGame.draw();
}

function saveTAS(){
  const output = tasHistory.map(h =>
    String.fromCharCode(48 + (
      (h.jump  ?  1 : 0) |
      (h.left  ?  2 : 0) |
      (h.right ?  4 : 0) |
      (h.up    ?  8 : 0) |
      (h.down  ? 16 : 0)
    ))
  ).join('');
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
