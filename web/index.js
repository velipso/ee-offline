let defaultScreen, eeGame, gamepadController, menuBack;
const rootFolder = new GenericFolder('root');
const editingAllowed = false; // TODO: allow once the feature is complete

class HelpFolder extends FSFolder {
  sortIndex = 1;
  iconSrc = 'help.png';
  isSorted = true;

  constructor(){
    super('Help');
  }

  async list(){
    return {
      more: false,
      listing: [
        {
          kind: 'p',
          text: 'Navigate through the folders to select a level to play, or upload your own levels.'
        },
        {
          kind: 'p',
          text: 'Supported Uploads:'
        },
        {
          kind: 'p',
          text: `
            &nbsp;&nbsp;.eelvl - Single level
            &nbsp;&nbsp;.eelvls - Multiple levels
            &nbsp;&nbsp;.zip - Multiple levels
            &nbsp;&nbsp;.sqlite3 - Database of levels ([ArchivEE](https://forums.everybodyedits.com/viewtopic.php?id=47348))`
        },
        {
          kind: 'p',
          text: (gamepadController ? 'Keyboard ' : '') + 'Controls:'
        },
        {
          kind: 'p',
          text: `
            &nbsp;&nbsp;Move: W / S / A / D / Arrows
            &nbsp;&nbsp;Jump: Space
            &nbsp;&nbsp;Pause: Escape
            &nbsp;&nbsp;Retry: Shift + R
            &nbsp;&nbsp;God Mode: G
            &nbsp;&nbsp;Confirm Prompts: Y`
        },
        {
          kind: 'p',
          hidden: !gamepadController,
          text: 'Gamepad Controls:'
        },
        {
          kind: 'p',
          hidden: !gamepadController,
          text: `
            &nbsp;&nbsp;Move: D-pad
            &nbsp;&nbsp;Jump: Bottom Button
            &nbsp;&nbsp;Pause: Start
            &nbsp;&nbsp;Retry: Select
            &nbsp;&nbsp;God Mode: Top Button
            &nbsp;&nbsp;Confirm Prompts: Right Button`
        },
        {
          kind: 'p',
          text: `Web port by [velipso](https://sean.cm) ([GitHub](https://github.com/velipso/ee-offline)).`
        },
        {
          kind: 'p',
          text: `Based on [ee-offline](https://github.com/Seb-135/ee-offline) from Seb135 and LuciferX.`
        }
      ]
    };
  }
}

class ModeFolder extends FSFolder {
  refresh = () => {};
  sortIndex = 2;
  iconSrc = 'mode-play.png';
  mode = 'play';

  constructor(){
    super('Mode: Play');
  }

  async list(){
    return {more: false, listing: [{kind: 'page', page: this.page}]};
  }

  setMode(mode){
    this.mode = mode;
    eeGame.setMode(mode);
    if (!isMenuOpen())
      document.getElementById('menu-bricks').style.display = eeGame.mode === 'edit' ? '' : 'none';
    this.refresh();
  }

  page = (menu) => {
    const addMode = (hint, mode, desc) => {
      const btn = createButton(hint, () => { this.setMode(mode); });
      btn.style.width = '120px';
      btn.style.marginRight = '10px';
      btn.firstChild.style.paddingRight = '14px';
      const img = iconImg(`mode-${mode}.png`);
      img.style.transform = 'translate(0, 3px)';
      img.style.marginRight = '5px';
      btn.firstChild.insertBefore(img, btn.firstChild.firstChild);
      const p = document.createElement('p');
      p.appendChild(btn);
      p.appendChild(document.createTextNode(desc));
      menu.appendChild(p);
      return btn;
    };

    const btnPlay = addMode('Play', 'play', 'Play through levels and have fun');
    const btnEdit = addMode('Edit', 'edit', 'Edit and download new levels');
    const btnTAS  = addMode('TAS' , 'tas' , 'Go frame by frame for speedruns');

    this.refresh = () => {
      switch (this.mode){
        case 'play':
          this.iconSrc = 'mode-play.png';
          this.name = 'Mode: Play';
          break;
        case 'edit':
          this.iconSrc = 'mode-edit.png';
          this.name = 'Mode: Edit';
          break;
        case 'tas':
          this.iconSrc = 'mode-tas.png';
          this.name = 'Mode: TAS';
          break;
      }
      btnPlay.disabled = this.mode === 'play';
      btnPlay.className = this.mode === 'play' ? 'selected' : '';
      btnPlay.blur();
      btnEdit.disabled = this.mode === 'edit';
      btnEdit.className = this.mode === 'edit' ? 'selected' : '';
      btnEdit.blur();
      btnTAS.disabled = this.mode === 'tas';
      btnTAS.className = this.mode === 'tas' ? 'selected' : '';
      btnTAS.blur();
      setMenuTitle(this.name);
    };

    this.refresh();
  };
}

class OptionsFolder extends FSFolder {
  sortIndex = 3;
  iconSrc = 'options.png';
  table;

  constructor(){
    super('Options');
  }

  async list(){
    return {more: false, listing: [{kind: 'page', page: this.page}]};
  }

  redraw(){
    this.table.innerHTML = '';

    const opt = eeGame.getOptions();
    const setOptions = () => {
      persistOptions(opt);
      restoreOptions();
    };

    const addBool = (name, key) => {
      if (!(key in opt))
        return;
      const tr = document.createElement('tr');
      const nameTd = document.createElement('td');
      nameTd.appendChild(document.createTextNode(name));
      const inpTd = document.createElement('td');
      const check = document.createElement('input');
      check.type = 'checkbox';
      check.checked = opt[key];
      check.style.width = '20px';
      check.style.height = '20px';
      check.addEventListener('input', () => {
        opt[key] = check.checked;
        setOptions();
        this.redraw();
      });
      inpTd.appendChild(check);
      tr.appendChild(nameTd);
      tr.appendChild(inpTd);
      this.table.appendChild(tr);
    };

    const addText = (name, key) => {
      if (!(key in opt))
        return;
      const tr = document.createElement('tr');
      const nameTd = document.createElement('td');
      nameTd.appendChild(document.createTextNode(name));
      const inpTd = document.createElement('td');
      const text = document.createElement('input');
      text.type = 'text';
      text.value = opt[key];
      text.addEventListener('input', () => {
        opt[key] = text.value;
        setOptions();
      });
      inpTd.appendChild(text);
      tr.appendChild(nameTd);
      tr.appendChild(inpTd);
      this.table.appendChild(tr);
    };

    const addGenericSelect = (name, options, value, onSelect) => {
      const tr = document.createElement('tr');
      const nameTd = document.createElement('td');
      nameTd.appendChild(document.createTextNode(name));
      const inpTd = document.createElement('td');
      const select = document.createElement('select');
      select.style.margin = '0 4px';
      for (const o of options){
        const option = document.createElement('option');
        option.appendChild(document.createTextNode(o));
        if (value === o)
          option.selected = true;
        select.appendChild(option);
      }
      select.addEventListener('input', () => {
        onSelect(select.selectedIndex);
      });
      inpTd.appendChild(select);
      tr.appendChild(nameTd);
      tr.appendChild(inpTd);
      this.table.appendChild(tr);
    };

    const addSelect = (name, options, key) => {
      if (!(key in opt))
        return;
      addGenericSelect(name, options, opt[key], index => {
        opt[key] = options[index];
        setOptions();
      });
    };

    const addNumberSelect = (name, low, high, key) => {
      if (!(key in opt))
        return;
      const options = [];
      for (let i = low; i <= high; i++)
        options.push(`${i}`);
      addGenericSelect(name, options, `${opt[key]}`, index => {
        opt[key] = low + index;
        setOptions();
      });
    };

    const addHeader = (text) => {
      for (let i = 0; i < 2; i++){
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.appendChild(i === 0
          ? document.createElement('hr')
          : document.createTextNode(text));
        td.colSpan = 2;
        td.style.textAlign = 'center';
        if (i === 1)
          td.style.paddingBottom = '15px';
        tr.appendChild(td);
        this.table.appendChild(tr);
      }
    };

    if ('zoom' in opt){
      const tr = document.createElement('tr');
      const nameTd = document.createElement('td');
      nameTd.appendChild(document.createTextNode('Zoom (F1 / F2)'));
      const inpTd = document.createElement('td');
      inpTd.appendChild(createButton('In', () => {
        opt.zoom = eeGame.screen.clampZoom(opt.zoom * 1.1);
        setOptions();
      }));
      inpTd.appendChild(createButton('Out', () => {
        opt.zoom = eeGame.screen.clampZoom(opt.zoom / 1.1);
        setOptions();
      }));
      tr.appendChild(nameTd);
      tr.appendChild(inpTd);
      this.table.appendChild(tr);
    }

    addBool('Gamepads', 'gamepads');
    addSelect('Resolution', Screen.resolutions, 'screenResolution');
    {
      const options = [
        ['10%', 0.1],
        ['25%', 0.25],
        ['50%', 0.5],
        ['75%', 0.75],
        ['100%', 1],
        ['125%', 1.25],
        ['150%', 1.5],
        ['200%', 2]
      ];
      addGenericSelect(
        'Simulation Speed',
        options.map(o => o[0]),
        options.find(o => o[1] === opt.simSpeed)[0],
        index => {
          opt.simSpeed = options[index][1];
          setOptions();
        }
      );
    }
    addBool('Sound', 'playSound');
    addBool('Cap FPS', 'capFPS');
    addBool('Show FPS', 'showFPS');
    addBool('Full Screen', 'screenFull');
    addBool('Draw Background', 'worldBackground');
    addBool('Instant Death', 'instantDeath');
    addBool('Debug Mode', 'screenDebug');
    addBool('EEO TAS Bugs', 'eeotasBugs');
    addBool('Ice Bugs', 'iceBugs');

    addHeader('Keyboard Options');
    addText('Jump Key', 'jumpKey');
    addText('Up Key', 'upKey');
    addText('Right Key', 'rightKey');
    addText('Down Key', 'downKey');
    addText('Left Key', 'leftKey');
    addText('Confirmation Key', 'riskyKey');
    addText('Retry Key', 'retryKey');
    addText('Pause Key', 'pauseKey');
    addText('God Key', 'godKey');
    addText('Checkpoint Key', 'cpKey');
    addText('Edit Key', 'editKey');

    if (opt.gamepads){
      addHeader('Gamepad Options');
      addBool('Use Joystick Axis', 'directionAxis');
      addNumberSelect('Jump Button', 0, 16, 'jumpButton');
      addNumberSelect('Up Button', 0, 16, 'upButton');
      addNumberSelect('Right Button', 0, 16, 'rightButton');
      addNumberSelect('Down Button', 0, 16, 'downButton');
      addNumberSelect('Left Button', 0, 16, 'leftButton');
      addNumberSelect('Confirmation Button', 0, 16, 'riskyButton');
      addNumberSelect('Retry Button', 0, 16, 'retryButton');
      addNumberSelect('Pause Button', 0, 16, 'pauseButton');
      addNumberSelect('God Button', 0, 16, 'godButton');
      addNumberSelect('Checkpoint Button', 0, 16, 'cpButton');
    }

    {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      tr.appendChild(td);
      td.colSpan = 2;
      td.style.textAlign = 'center';
      td.style.paddingTop = '15px';
      td.appendChild(createButton('Reset Defaults', () => {
        if (confirm('Are you sure?')){
          const cnv = document.createElement('canvas');
          const s = new Screen(cnv, 1);
          const w = new World();
          w.clearWorld(1, 1, 1);
          const ee = new EverybodyEdits(s, w, new EmptyWorldResolver(), 0);
          ee.attachController(new KeyboardController(cnv, ()=>{}, ()=>{}));
          ee.attachController(new GamepadController(()=>{}, ()=>{}));
          Object.assign(opt, ee.getOptions());
          ee.destroy();
          setOptions();
          this.redraw();
        }
      }));
      this.table.appendChild(tr);
    }
  }

  page = (menu) => {
    if (!eeGame){
      menu.appendChild(document.createTextNode('No game loaded :('));
      return;
    }
    this.table = document.createElement('table');
    this.table.className = 'options-table';
    menu.appendChild(this.table);
    this.redraw();
  };
}

class EEWorldResolver extends WorldResolver {
  currentWorld;
  container;

  constructor(currentWorld, container){
    super();
    this.currentWorld = currentWorld;
    this.container = container;
  }

  async findFromContainer(id){
    const world = await this.container.findWorld(id);
    if (world)
      return world;
    // try public resolvers
    const rootItems = await rootFolder.list();
    for (const item of rootItems.listing){
      if (item.isPublicIdResolver && item !== this.container){
        const world2 = await item.findWorld(id);
        if (world2)
          return world2;
      }
    }
    return false;
  }

  async findName(id){
    if (id === 'Current')
      return this.currentWorld.worldName;
    const worldItem = await this.findFromContainer(id);
    return worldItem ? worldItem.name : false;
  }

  async loadWorld(id, spawnId){
    if (!eeGame)
      return false;
    if (id === 'Current'){
      eeGame.setPause(true);
      loadWorldIntoEE(this.currentWorld, this.container, spawnId);
      return true;
    }
    eeGame.setPause(true);
    const worldItem = await this.findFromContainer(id);
    if (!worldItem){
      eeGame.setPause(false);
      return false;
    }
    const world = await worldItem.load();
    loadWorldIntoEE(world, this.container, spawnId);
    return true;
  }
}

function loadBlob(url){
  return fetch(url).then(response => response.blob());
}

function blobToZipObj(blob){
  const exts = ['.eelvl', '.info', '.png'];
  return JSZip.loadAsync(blob).then(zip => {
    const promises = [];
    zip.forEach((name, info) => {
      if (info.dir)
        return;
      if (exts.some(ext => info.name.toLowerCase().endsWith(ext))){
        promises.push(zip.file(info.name).async('uint8array').then(data => (
          {name, data: new FlashByteArray(data)}
        )));
      }
    });
    return Promise.all(promises);
  });
}

function installMouseListeners(cnv){
  let downButton = false, downX, downY;

  const getWorldPos = (clientX, clientY) => {
    const r = cnv.getBoundingClientRect();
    return [
      defaultScreen.screenToWorldX(clientX * cnv.width / r.width),
      defaultScreen.screenToWorldY(clientY * cnv.height / r.height)
    ];
  };

  const placeTiles = (clientX, clientY) => {
    const [x, y] = getWorldPos(clientX, clientY);
    eeGame.placeTiles(x, y);
  };

  cnv.addEventListener('mousedown', e => {
    e.preventDefault();
    e.stopPropagation();
    if (!eeGame)
      return;
    downButton = e.which;
    downX = e.clientX;
    downY = e.clientY;
    if (e.which === 1)
      placeTiles(e.clientX, e.clientY);
    else if (e.which === 2)
      eeGame.dragWorld(0, 0);
    else if (e.which === 3){
      const [x, y] = getWorldPos(e.clientX, e.clientY);
      eeGame.startSelection(x, y);
    }
  });

  cnv.addEventListener('mousemove', e => {
    e.preventDefault();
    e.stopPropagation();
    if (!eeGame)
      return;
    if (downButton === false){
      const [x, y] = getWorldPos(e.clientX, e.clientY);
      eeGame.state.mouseOver(x, y);
    }
    else if (downButton === 1) // left drag
      placeTiles(e.clientX, e.clientY);
    else if (downButton === 2){ // middle drag
      const [sx, sy] = getWorldPos(downX, downY);
      const [ex, ey] = getWorldPos(e.clientX, e.clientY);
      downX = e.clientX;
      downY = e.clientY;
      eeGame.dragWorld(ex - sx, ey - sy);
    }
    else if (downButton === 3){ // right drag
      const [x, y] = getWorldPos(e.clientX, e.clientY);
      eeGame.dragSelection(x, y);
    }
  });

  cnv.addEventListener('mouseup', e => {
    e.preventDefault();
    e.stopPropagation();
    downButton = false;
    if (!eeGame)
      return;
  });

  cnv.addEventListener('mouseout', e => {
    e.preventDefault();
    e.stopPropagation();
    downButton = false;
    if (!eeGame)
      return;
    eeGame.state.mouseOut();
  });

  cnv.addEventListener('contextmenu', e => {
    e.preventDefault();
    e.stopPropagation();
    if (!eeGame)
      return;
    downButton = 3;
    downX = e.clientX;
    downY = e.clientY;
    const [x, y] = getWorldPos(e.clientX, e.clientY);
    eeGame.startSelection(x, y);
  });
}

async function loadResources(){
  const dpr = window.devicePixelRatio || 1;
  const cnv = document.createElement('canvas');
  document.body.appendChild(cnv);

  defaultScreen = new Screen(cnv, dpr);

  installMouseListeners(cnv);

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
        case 'F1':
          if (eeGame){
            eeGame.setOptions({
              zoom: eeGame.screen.clampZoom(eeGame.getOptions().zoom * 1.1)
            });
            return true;
          }
          break;
        case 'F2':
          if (eeGame){
            eeGame.setOptions({
              zoom: eeGame.screen.clampZoom(eeGame.getOptions().zoom / 1.1)
            });
            return true;
          }
          break;
        case 'F3':
          if (eeGame){
            const cur = eeGame.getOptions().screenResolution;
            eeGame.setOptions({
              screenResolution: Screen.resolutions[
                (Screen.resolutions.indexOf(cur) + 1) % Screen.resolutions.length
              ]
            });
            return true;
          }
          break;
        case 'F7':
          if (eeGame){
            eeGame.setOptions({showFPS: !eeGame.getOptions().showFPS});
            return true;
          }
          break;
        case 'F8':
          if (eeGame){
            eeGame.setOptions({screenFull: !eeGame.getOptions().screenFull});
            return true;
          }
          break;
        case 'F9':
          if (eeGame){
            eeGame.setOptions({worldBackground: !eeGame.getOptions().worldBackground});
            return true;
          }
          break;
        case 'F10':
          if (eeGame){
            eeGame.setOptions({screenDebug: !eeGame.getOptions().screenDebug});
            return true;
          }
          break;
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

  defaultScreen.drawBanner('Loading campaigns...');
  const campaignZip = await blobToZipObj(await loadBlob('../media/campaigns/campaigns.zip'));
  const campaignFolder = new CampaignFolder(campaignZip);
  rootFolder.add(campaignFolder);
  rootFolder.add(new HelpFolder());
  if (editingAllowed)
    rootFolder.add(new ModeFolder());
  rootFolder.add(new OptionsFolder());
  await loadWorld(campaignFolder.listing[0].listing[0], campaignFolder);
  menuOpen();
  menuRoot();
}

function isMenuOpen(){
  return document.getElementById('menu-wrap2').style.display === '';
}

function menuToggle(){
  if (isMenuOpen())
    menuClose();
  else
    menuOpen();
}

function menuOpen(){
  document.getElementById('menu-wrap2').style.display = '';
  document.getElementById('menu-closed').style.display = 'none';
  document.getElementById('menu-bricks').style.display = 'none';
  if (eeGame)
    eeGame.setPause(true);
  return false;
}

function menuClose(){
  document.getElementById('menu-wrap2').style.display = 'none';
  document.getElementById('menu-closed').style.display = '';
  if (eeGame){
    eeGame.setPause(false);
    document.getElementById('menu-bricks').style.display = eeGame.mode === 'edit' ? '' : 'none';
  }
  else
    document.getElementById('menu-bricks').style.display = 'none';
  return false;
}

function setMenuBack(cb){
  document.getElementById('menu-back').style.visibility = cb ? '' : 'hidden';
  if (cb)
    menuBack = () => { cb(); return false; };
  else
    menuBack = false;
}

function setMenuTitle(title){
  document.getElementById('menu-title').innerText = title;
}

function createButton(text, onClick){
  const btn = document.createElement('button');
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  btn.appendChild(div);
  if (onClick)
    btn.addEventListener('click', onClick);
  return btn;
}

function menuRoot(message){
  setMenuBack();
  setMenuTitle('Welcome');
  const menu = document.getElementById('menu');
  menu.innerHTML = '';
  const fileInp = document.createElement('input');
  fileInp.type = 'file';
  fileInp.hidden = true;
  const uploadBtn = createButton('Upload', () => {
    fileInp.click();
  });
  uploadBtn.style.position = 'absolute';
  uploadBtn.style.top = '55px';
  uploadBtn.style.right = '15px';
  fileInp.addEventListener('input', async () => {
    if (fileInp.files.length <= 0)
      return;
    const file = fileInp.files[0];
    menu.innerHTML = '';
    menu.appendChild(createLoading(true));
    const basename = file.name.replace(/\.[^.]*$/, '');
    const ext = file.name.toLowerCase();
    const data = await new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onloadend = e => { resolve(e.target.result); };
      r.readAsArrayBuffer(file);
    });
    let folder;
    if (ext.endsWith('.sqlite') || ext.endsWith('.sqlite3')){
      folder = new SqliteFolder(basename, data);
      folder.markPublic();
    }
    else if (ext.endsWith('.eelvls'))
      folder = new EelvlsFolder(basename, await blobToZipObj(data));
    else if (ext.endsWith('.zip'))
      folder = new ZipFolder(basename, await blobToZipObj(data));
    else if (ext.endsWith('.eelvl')){
      folder = new GenericFolder(basename);
      folder.addEelvl(basename, new FlashByteArray(new Uint8Array(data)));
    }
    if (folder){
      rootFolder.add(folder);
      let subfolder = () => {
        setMenuBack(menuRoot);
        menuShowFolder(folder, subfolder, folder);
      };
      subfolder();
    }
    else
      menuRoot(`Unsupported file: ${file.name}`);
  });
  if (message){
    const p = document.createElement('p');
    p.style.marginRight = '100px';
    p.appendChild(document.createTextNode(message));
    menu.appendChild(p);
  }
  menu.appendChild(fileInp);
  menu.appendChild(uploadBtn);
  menuAddFolder(rootFolder, 0, menuRoot, false);
}

function createLoading(block){
  const div = document.createElement('div');
  div.appendChild(document.createElement('div'));
  div.appendChild(document.createElement('div'));
  div.className = 'loading';
  if (block){
    div.style.display = 'block';
    div.style.margin = '10px auto';
  }
  return div;
}

function createLink(children, onClick){
  const a = document.createElement('a');
  for (const ch of children){
    if (typeof ch === 'string')
      a.appendChild(document.createTextNode(ch));
    else
      a.appendChild(ch);
  }
  a.href = '#';
  if (onClick){
    a.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      try {
        onClick();
      } catch (err){}
      return false;
    });
  }
  return a;
}

function iconImg(src){
  const img = document.createElement('img');
  img.src = src;
  img.width = 24;
  img.height = 18;
  img.style.marginRight = '10px';
  img.style.imageRendering = 'pixelated';
  return img;
}

function menuShowFolder(folder, onHere, rootContainer){
  const menu = document.getElementById('menu');
  menu.innerHTML = '';
  setMenuTitle(folder.name);
  menuAddFolder(folder, 0, onHere, rootContainer);
}

function godToggle(){
  if (eeGame)
    eeGame.playerToggleGod();
}

function cpToggle(){
  if (eeGame)
    eeGame.playerSetCheckpoint();
}

function editToggle(){
  if (!editingAllowed)
    return;
  if (eeGame){
    let newMode = false;
    if (eeGame.mode === 'play')
      newMode = 'edit';
    else if (eeGame.mode === 'edit')
      newMode = 'play';
    if (newMode)
      rootFolder.listing.find(f => f instanceof ModeFolder)?.setMode(newMode);
  }
}

async function loadWorld(worldItem, container, spawnId){
  const menu = document.getElementById('menu');
  menu.innerHTML = '';
  const loading = createLoading(true);
  menu.appendChild(loading);
  const world = await worldItem.load();
  loadWorldIntoEE(world, container, spawnId);
}

function loadWorldIntoEE(world, container, spawnId){
  defaultScreen.drawBanner('Loading level...');
  if (eeGame){
    eeGame.destroy();
    gamepadController = false;
  }
  eeGame = new EverybodyEdits(defaultScreen, world, new EEWorldResolver(world, container), spawnId);
  eeGame.attachController(new KeyboardController(window, godToggle, cpToggle, menuToggle,
    editToggle));
  restoreOptions();
  rootFolder.listing.find(f => f instanceof ModeFolder)?.setMode(eeGame.mode);
  eeGame.run();
}

function persistOptions(opt){
  opt._eev = 1;
  window.eeOptions = opt;
  try {
    localStorage.setItem('eeOptions', JSON.stringify(opt));
  } catch (e) {}
}

function restoreOptions(){
  try {
    const data = JSON.parse(localStorage.getItem('eeOptions'));
    if ('_eev' in data && data._eev === 1)
      window.eeOptions = data;
  } catch (e){}
  if ('eeOptions' in window){
    eeGame.setOptions(window.eeOptions);
    if (window.eeOptions.gamepads && !gamepadController){
      gamepadController = new GamepadController(godToggle, cpToggle, menuToggle, editToggle);
      eeGame.attachController(gamepadController);
    }
    else if (!window.eeOptions.gamepads && gamepadController){
      eeGame.detachController(gamepadController);
      gamepadController = false;
    }
  }
}

async function menuAddFolder(folder, page, onHere, rootContainer){
  const menu = document.getElementById('menu');
  if (folder.desc){
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(folder.desc));
    menu.appendChild(p);
  }
  const loading = createLoading(true);
  menu.appendChild(loading);
  const {listing, more} = await folder.list(page);
  menu.removeChild(loading);
  if (!folder.isSorted){
    listing.sort((a, b) => {
      if (a.sortIndex !== b.sortIndex){
        if (a.sortIndex && !b.sortIndex)
          return -1;
        if (b.sortIndex && !a.sortIndex)
          return 1;
        return a.sortIndex - b.sortIndex;
      }
      if (a.kind === 'folder' && b.kind !== 'folder')
        return -1;
      if (a.kind !== 'folder' && b.kind === 'folder')
        return 1;
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
  }
  if (folder.search){
    const form = document.createElement('form');
    form.style.display = 'block';
    form.style.margin = '0 0 10px';
    const termInp = document.createElement('input');
    termInp.placeholder = 'Search';
    termInp.type = 'text';
    form.appendChild(termInp);
    const submitBtn = createButton('Search');
    submitBtn.type = 'submit';
    form.appendChild(submitBtn);
    form.addEventListener('submit', () => {
      const term = termInp.value.trim();
      if (term.length > 0){
        const item = folder.search(term);
        function subfolder(){
          setMenuBack(onHere);
          menuShowFolder(item, subfolder, rootContainer);
        }
        subfolder();
      }
    });
    menu.appendChild(form);
  }
  if (listing.length <= 0){
    const p = document.createElement('p');
    p.style.textAlign = 'center';
    p.appendChild(document.createTextNode('Empty'));
    menu.appendChild(p);
  }
  else{
    const ul = document.createElement('ul');
    ul.className = 'listing';
    menu.appendChild(ul);
    for (const item of listing){
      const li = document.createElement('li');
      ul.appendChild(li);
      switch (item.kind){
        case 'folder':
          li.appendChild(createLink([iconImg(item.iconSrc || 'folder.png'), item.name],
            () => {
              function subfolder(){
                setMenuBack(onHere);
                menuShowFolder(item, subfolder, rootContainer || item);
              }
              subfolder();
            }
          ));
          break;
        case 'world':
          li.appendChild(createLink([iconImg('play.png'), item.name], async () => {
            await loadWorld(item, rootContainer);
            onHere();
            menuClose();
          }));
          if (item.owner && item.ownerId && rootContainer && rootContainer.findByOwner){
            li.appendChild(document.createTextNode(' by '));
            li.appendChild(createLink(item.owner, () => {
              function subfolder(){
                setMenuBack(onHere);
                menuShowFolder(
                  rootContainer.findByOwner(item.ownerId),
                  subfolder,
                  rootContainer || item
                );
              }
              subfolder();
            }));
          }
          if (item.desc){
            const p = document.createElement('p');
            p.appendChild(document.createTextNode(item.desc));
            p.style.margin = '0 0 10px 35px';
            li.appendChild(p);
          }
          break;
        case 'p':{
          if (item.hidden)
            break;
          const p = document.createElement('p');
          const lines = item.text.trim().split('\n');
          for (let i = 0; i < lines.length; i++){
            if (i > 0)
              p.appendChild(document.createElement('br'));
            const text = lines[i].trim().replace(/&nbsp;/g, '\xa0');
            let state = 0, textVal = '', hrefVal = '';
            for (let chi = 0; chi < text.length; chi++){
              const ch = text.charAt(chi);
              switch (state){
                case 0:
                  if (ch === '['){
                    if (textVal){
                      p.appendChild(document.createTextNode(textVal));
                      textVal = '';
                    }
                    hrefVal = '';
                    state = 1;
                  }
                  else
                    textVal += ch;
                  break;
                case 1:
                  if (ch === ']')
                    state = 2;
                  else
                    textVal += ch;
                  break;
                case 2:
                  if (ch !== '(')
                    throw new Error(`Malformed paragraph text: ${text}`);
                  state = 3;
                  break;
                case 3:
                  if (ch === ')'){
                    const a = document.createElement('a');
                    a.href = hrefVal;
                    a.target = '_blank';
                    a.appendChild(document.createTextNode(textVal));
                    p.appendChild(a);
                    textVal = '';
                    state = 0;
                  }
                  else
                    hrefVal += ch;
                  break;
              }
            }
            if (textVal)
              p.appendChild(document.createTextNode(textVal));
          }
          li.appendChild(p);
          break;
        }
        case 'page':
          item.page(menu);
          break;
        default:
          console.error('Unknown item kind:', item.kind);
      }
    }
    if (more){
      const moreBtn = createButton('More', () => {
        menu.removeChild(moreBtn);
        menuAddFolder(folder, page + 1, onHere, rootContainer);
      });
      moreBtn.style.display = 'block';
      moreBtn.style.margin = '10px auto 0';
      menu.appendChild(moreBtn);
    }
  }
}

loadResources();
