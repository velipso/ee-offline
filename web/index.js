var ignorePlayerInput; // TODO: delete
let defaultScreen, eeGame, gamepadController, menuBack;
const rootFolder = new GenericFolder('root');

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

class OptionsFolder extends FSFolder {
  sortIndex = 2;
  iconSrc = 'options.png';

  constructor(){
    super('Options');
  }

  async list(){
    return {more: false, listing: [{kind: 'page', page: this.page}]};
  }

  page = menu => {
    if (!eeGame){
      menu.appendChild(document.createTextNode('No game loaded :('));
      return;
    }

    const opt = eeGame.getOptions();

    const table = document.createElement('table');
    table.className = 'options-table';
    menu.appendChild(table);

    function addBool(name, key){
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
        eeGame.setOptions(opt);
      });
      inpTd.appendChild(check);
      tr.appendChild(nameTd);
      tr.appendChild(inpTd);
      table.appendChild(tr);
    }

    function addGenericSelect(name, options, value, onSelect){
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
      table.appendChild(tr);
    }

    function addSelect(name, options, key){
      addGenericSelect(name, options, opt[key], index => {
        opt[key] = options[index];
        eeGame.setOptions(opt);
      });
    }

    {
      const tr = document.createElement('tr');
      const nameTd = document.createElement('td');
      nameTd.appendChild(document.createTextNode('Zoom (F1 / F2)'));
      const inpTd = document.createElement('td');
      inpTd.appendChild(createButton('In', () => {
        opt.zoom *= 1.1;
        eeGame.setOptions(opt);
        opt.zoom = eeGame.getOptions().zoom;
      }));
      inpTd.appendChild(createButton('Out', () => {
        opt.zoom *= 1 / 1.1;
        eeGame.setOptions(opt);
        opt.zoom = eeGame.getOptions().zoom;
      }));
      tr.appendChild(nameTd);
      tr.appendChild(inpTd);
      table.appendChild(tr);
    }

    addGenericSelect(
      'Gamepads',
      ['Disable', 'Enable'],
      gamepadController ? 'Enable' : 'Disable',
      index => {
        if (index === 1 && !gamepadController){
          gamepadController = createGamepadController();
          eeGame.attachController(gamepadController);
        }
        else if (index === 0 && gamepadController){
          eeGame.detachController(gamepadController);
          gamepadController = false;
        }
      }
    );

    addSelect('Resolution', Screen.resolutions, 'screenResolution');
    addBool('Show FPS', 'showFPS');
    addBool('Full Screen', 'screenFull');
    addBool('Draw Background', 'worldBackground');
    addBool('Debug Mode', 'screenDebug');
    addBool('EEO TAS Bugs', 'eeotasBugs');
    addBool('Ice Bugs', 'iceBugs');

    menu.appendChild(table);
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

async function loadResources(){
  const dpr = window.devicePixelRatio || 1;
  const cnv = document.createElement('canvas');
  document.body.appendChild(cnv);
  const ctx = cnv.getContext('2d');

  defaultScreen = new Screen(cnv, ctx, dpr);

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
            eeGame.screenMultiplyZoom(1.1);
            return true;
          }
          break;
        case 'F2':
          if (eeGame){
            eeGame.screenMultiplyZoom(1 / 1.1);
            return true;
          }
          break;
        case 'F3':
          if (eeGame){
            if (gamepadController){
              eeGame.detachController(gamepadController);
              gamepadController = false;
            }
            else{
              gamepadController = createGamepadController();
              eeGame.attachController(gamepadController);
            }
            return true;
          }
          break;
        case 'F4':
          if (eeGame){
            eeGame.screenNextResolution();
            return true;
          }
          break;
        case 'F7':
          if (eeGame){
            eeGame.setOption({showFPS: !eeGame.getOption().showFPS});
            return true;
          }
          break;
        case 'F8':
          if (eeGame){
            eeGame.screenToggleFull();
            return true;
          }
          break;
        case 'F9':
          if (eeGame){
            eeGame.worldToggleBackground();
            return true;
          }
          break;
        case 'F10':
          if (eeGame){
            eeGame.screenToggleDebug();
            return true;
          }
          break;
        case 'Escape':
          menuToggle();
          return true;
        case 'KeyG':
          if (eeGame){
            eeGame.playerToggleGodMode();
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
  if (eeGame)
    eeGame.setPause(true);
  return false;
}

function menuClose(){
  document.getElementById('menu-wrap2').style.display = 'none';
  document.getElementById('menu-closed').style.display = '';
  if (eeGame)
    eeGame.setPause(false);
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

function createGamepadController(){
  return new GamepadController(() => { if (eeGame) eeGame.playerToggleGodMode(); }, menuToggle);
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
  if (eeGame)
    eeGame.destroy();
  eeGame = new EverybodyEdits(defaultScreen, world, new EEWorldResolver(world, container), spawnId);
  eeGame.attachController(new KeyboardController(window));
  if (gamepadController)
    eeGame.attachController(gamepadController);
  eeGame.run();
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
