var ignorePlayerInput; // TODO: delete
let defaultScreen, eeGame, controllerGamepad, menuBack;
const rootFolder = new RootFolder();

class HelpFolder extends FSFolder {
  isHelp = true;
  isSorted = true;

  constructor(){
    super('Help', '');
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
            &nbsp;&nbsp;.sqlite3 - Database of levels (ArchivEE)`
        },
        {
          kind: 'p',
          text: 'Controls:'
        },
        {
          kind: 'p',
          text: `
            &nbsp;&nbsp;Move: W / S / A / D / Arrows
            &nbsp;&nbsp;Jump: Space
            &nbsp;&nbsp;God Mode: G
            &nbsp;&nbsp;Debug: F1
            &nbsp;&nbsp;Full screen: F2
            &nbsp;&nbsp;Zoom: F3 / F4
            &nbsp;&nbsp;Resolution: F5
            &nbsp;&nbsp;Hide Background: F6
            &nbsp;&nbsp;Toggle Gamepad: F7`
        }
      ]
    };
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
            eeGame.screenToggleDebug();
            return true;
          }
          break;
        case 'F2':
          if (eeGame){
            eeGame.screenToggleFull();
            return true;
          }
          break;
        case 'F3':
          if (eeGame){
            eeGame.screenMultiplyZoom(1 / 1.1);
            return true;
          }
          break;
        case 'F4':
          if (eeGame){
            eeGame.screenMultiplyZoom(1.1);
            return true;
          }
          break;
        case 'F5':
          if (eeGame){
            eeGame.screenNextResolution();
            return true;
          }
          break;
        case 'F6':
          if (eeGame){
            eeGame.worldToggleBackground();
            return true;
          }
          break;
        case 'F7':
          if (eeGame){
            if (controllerGamepad){
              eeGame.detachController(controllerGamepad);
              controllerGamepad = false;
            }
            else{
              controllerGamepad = new ControllerGamepad();
              eeGame.attachController(controllerGamepad);
            }
          }
          break;
        case 'Escape':
          menuToggle();
          break;
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
  await loadWorld(campaignFolder.camps[0].worlds[0]);
  menuOpen();
  menuRoot();
}

function menuToggle(){
  if (document.getElementById('menu-wrap').style.display === 'none')
    menuOpen();
  else
    menuClose();
}

function menuOpen(){
  document.getElementById('menu-wrap').style.display = '';
  document.getElementById('menu-closed').style.display = 'none';
  if (eeGame)
    eeGame.setPause(true);
}

function menuClose(){
  document.getElementById('menu-wrap').style.display = 'none';
  document.getElementById('menu-closed').style.display = '';
  if (eeGame)
    eeGame.setPause(false);
}

function setMenuBack(cb){
  document.getElementById('menu-back').style.visibility = cb ? '' : 'hidden';
  menuBack = cb;
}

function setMenuTitle(title){
  document.getElementById('menu-title').innerText = title;
}

function menuRoot(message){
  setMenuBack();
  setMenuTitle('Welcome');
  const menu = document.getElementById('menu');
  menu.innerHTML = '';
  const uploadBtn = document.createElement('button');
  const uploadBtnDiv = document.createElement('div');
  uploadBtnDiv.appendChild(document.createTextNode('Upload'));
  uploadBtn.appendChild(uploadBtnDiv);
  uploadBtn.style.position = 'absolute';
  uploadBtn.style.top = '15px';
  uploadBtn.style.right = '15px';
  const fileInp = document.createElement('input');
  fileInp.type = 'file';
  fileInp.hidden = true;
  uploadBtn.addEventListener('click', () => {
    fileInp.click();
  });
  fileInp.addEventListener('input', async () => {
    if (fileInp.files.length <= 0)
      return;
    const file = fileInp.files[0];
    menu.innerHTML = '';
    menu.appendChild(createLoading(true));
    const ext = file.name.toLowerCase();
    const data = await new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onloadend = e => { resolve(e.target.result); };
      r.readAsArrayBuffer(file);
    });
    let folder;
    if (ext.endsWith('.sqlite') || ext.endsWith('.sqlite3'))
      folder = new SqliteFolder(file.name.replace(/\.[^.]*$/, ''), data);
    else if (ext.endsWith('.zip') || ext.endsWith('.eelvls'))
      ;//loadZipObj(await blobToZipObj(data), false);
    else
      ;//loadEelvl(new FlashByteArray(new Uint8Array(data)));
    if (folder){
      rootFolder.add(folder);
      let subfolder = () => {
        setMenuBack(menuRoot);
        menuShowFolder(folder, subfolder);
      };
      subfolder();
    }
    else
      menuRoot(`Unsupported file: ${file.name}`);
  });
  menu.appendChild(fileInp);
  menu.appendChild(uploadBtn);
  if (message){
    const p = document.createElement('p');
    p.style.textAlign = 'center';
    p.appendChild(document.createTextNode(message));
    menu.appendChild(p);
  }
  menuAddFolder(rootFolder, 0, menuRoot);
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

function menuShowFolder(folder, onHere){
  const menu = document.getElementById('menu');
  menu.innerHTML = '';
  setMenuTitle(folder.name);
  menuAddFolder(folder, 0, onHere);
}

async function loadWorld(worldItem){
  const menu = document.getElementById('menu');
  menu.innerHTML = '';
  const loading = createLoading(true);
  menu.appendChild(loading);
  const world = await worldItem.load();
  defaultScreen.drawBanner('Loading level...');
  if (eeGame)
    eeGame.destroy();
  eeGame = new EverybodyEdits(defaultScreen, world);
  eeGame.attachController(new ControllerKeyboard(window));
  if (controllerGamepad)
    eeGame.attachController(controllerGamepad);
  eeGame.run();
}

async function menuAddFolder(folder, page, onHere){
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
      if (a.isHelp && !b.isHelp)
        return -1;
      if (!a.isHelp && b.isHelp)
        return 1;
      if (a.kind === 'folder' && b.kind !== 'folder')
        return -1;
      if (a.kind !== 'folder' && b.kind === 'folder')
        return 1;
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
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
          li.appendChild(createLink([iconImg(item.isHelp ? 'help.png' : 'folder.png'), item.name],
            () => {
              function subfolder(){
                setMenuBack(onHere);
                menuShowFolder(item, subfolder);
              }
              subfolder();
            }
          ));
          break;
        case 'world':
          li.appendChild(createLink([iconImg('play.png'), item.name], async () => {
            await loadWorld(item);
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
          const p = document.createElement('p');
          const lines = item.text.trim().split('\n');
          for (let i = 0; i < lines.length; i++){
            if (i > 0)
              p.appendChild(document.createElement('br'));
            p.appendChild(document.createTextNode(lines[i].trim().replace(/&nbsp;/g, '\xa0')));
          }
          li.appendChild(p);
          break;
        }
        default:
          console.error('Unknown item kind:', item.kind);
      }
    }
    if (more){
      const moreBtnDiv = document.createElement('div');
      moreBtnDiv.appendChild(document.createTextNode('More'));
      const moreBtn = document.createElement('button');
      moreBtn.appendChild(moreBtnDiv);
      moreBtn.addEventListener('click', () => {
        menu.removeChild(moreBtn);
        menuAddFolder(folder, page + 1, onHere);
      });
      moreBtn.style.display = 'block';
      moreBtn.style.margin = '10px auto 0';
      menu.appendChild(moreBtn);
    }
  }
}

loadResources();
