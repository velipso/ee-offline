let defaultScreen, defaultInput, eeGame;
let campaignsZip, campaignsLoaded = false, lastCampaign = {c: 0, w: 0}, ignorePlayerInput = false;
let lastSqlFile = false;
const sqlWorker = new Worker('worker.sql-wasm.js');

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
  defaultInput = new Input();

  window.addEventListener('keydown', e => {
    if (ignorePlayerInput)
      return;
    e.preventDefault();
    e.stopPropagation();
    defaultInput.down(e.code);
    if (typeof window.onTestKey === 'function') // hack for tests and tas
      window.onTestKey(e.code, true);
  });

  window.addEventListener('keyup', e => {
    e.preventDefault();
    e.stopPropagation();
    defaultInput.up(e.code);
    if (typeof window.onTestKey === 'function') // hack for tests and tas
      window.onTestKey(e.code, false);
  });

  window.addEventListener('blur', () => {
    defaultInput.blur();
  });

  new ResizeObserver(entries => {
    for (const e of entries) {
      const c = e.contentRect;
      defaultScreen.resize(
        Math.round(c.width - (window.screenRightMargin || 0)), // screen right margin for tas.html
        Math.round(c.height)
      );
    }
  }).observe(document.body);

  await EverybodyEdits.init((done, total) => {
    defaultScreen.drawLoading(done, total);
  });
  await document.fonts.ready;

  defaultScreen.drawBanner('Loading campaigns...');
  campaignsZip = await blobToZipObj(await loadBlob('../media/campaigns/campaigns.zip'));
}

function restoreMenu(){
  if (sessionStorage.getItem('hideMenu') === 'true')
    hideMenu();
  else
    showMenu();
}

function hideMenu(){
  if (document.getElementById('menu')){
    document.getElementById('menu').style.display = 'none';
    document.getElementById('menu-closed').style.display = '';
    sessionStorage.setItem('hideMenu', 'true');
  }
  return false;
}

function hideWorlds(){
  document.getElementById('worlds').style.display = 'none';
  restoreMenu();
  return false;
}

function showWorlds(){
  document.getElementById('worlds').style.display = '';
  document.getElementById('world-list').scrollTop = 0;
  if (document.getElementById('menu')){
    document.getElementById('menu').style.display = 'none';
    document.getElementById('menu-closed').style.display = 'none';
  }
}

function showMenu(){
  if (document.getElementById('menu')){
    document.getElementById('menu').style.display = '';
    document.getElementById('menu-closed').style.display = 'none';
    sessionStorage.removeItem('hideMenu');
  }
  return false;
}

async function playFile(file){
  if (!file)
    return;
  const ext = file.name.toLowerCase();
  const isSqlite = ext.endsWith('.sqlite') || ext.endsWith('.sqlite3');
  if (isSqlite && lastSqlFile === file.name){
    // use cached file
    loadSqlite(true);
    return;
  }
  const data = await new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onloadend = e => {
      resolve(e.target.result);
    };
    r.readAsArrayBuffer(file);
  });
  if (isSqlite){
    lastSqlFile = file.name;
    loadSqlite(data);
  }
  else if (ext.endsWith('.zip') || ext.endsWith('.eelvls'))
    loadZipObj(await blobToZipObj(data), false);
  else
    loadEelvl(new FlashByteArray(new Uint8Array(data)));
}

async function playURL(url){
  loadZipObj(await blobToZipObj(await loadBlob(url)), false);
}

function playCampaigns(){
  loadZipObj(campaignsZip, true);
}

const createElement = (name, children) => {
  const p = document.createElement(name);
  if (Array.isArray(children))
    children.forEach(c => p.appendChild(typeof c === 'string' ? document.createTextNode(c) : c));
  else if (typeof children === 'string')
    p.appendChild(document.createTextNode(children));
  else if (children)
    p.appendChild(children);
  return p;
};
const P   = c => createElement('p'  , c);
const DIV = c => createElement('div', c);
const H1  = c => createElement('h1' , c);
const H2  = c => createElement('h2' , c);
const H3  = c => createElement('h3' , c);
const UL  = c => createElement('ul' , c);
const LI  = c => createElement('li' , c);
const A   = (c, click) => {
  const ele = createElement('a', c);
  ele.href = '#';
  ele.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    click();
    return false;
  });
  return ele;
};

function loadSqlite(buffer){
  const list = document.getElementById('world-list');

  const showText = (text, close) => {
    list.innerHTML = '';
    const loading = P(text);
    loading.style.margin = '20px';
    loading.style.textAlign = 'center';
    list.appendChild(loading);
    if (close){
      const btn = createElement('button', [DIV('Close')]);
      btn.style.display = 'block';
      btn.style.margin = '0 auto';
      btn.addEventListener('click', () => {
        query('', 0);
      });
      list.appendChild(btn);
    }
  };

  showText('Loading...');
  showWorlds();

  const query = (like, page, random) => {
    showText('Searching...', true);
    sqlWorker.onmessage = m => {
      const results = m.data.results;
      if (!results){
        showText('Error: No results', true);
        return;
      }
      list.innerHTML = '';

      const topBar = DIV();
      topBar.style.marginTop = '10px';
      list.appendChild(topBar);
      const search = createElement('input');
      search.addEventListener('focus', () => { ignorePlayerInput = true; });
      search.addEventListener('blur', () => { ignorePlayerInput = false; });
      search.addEventListener('keydown', e => {
        if (e.code === 'Enter')
          query(search.value, 0);
      });
      search.type = 'text';
      search.placeholder = 'Search terms';
      search.value = like;
      topBar.appendChild(search);
      const btn = createElement('button', [DIV('Search')]);
      btn.addEventListener('click', () => {
        query(search.value, 0);
      });
      topBar.appendChild(btn);
      const rnd = createElement('button', [DIV('Random')]);
      rnd.addEventListener('click', () => {
        query('', 0, true);
      });
      topBar.appendChild(rnd);
      const pp = createElement('button', [DIV('< Prev')]);
      topBar.appendChild(pp);
      pp.disabled = page <= 0;
      pp.addEventListener('click', () => {
        query(like, page - 1);
      });
      const np = createElement('button', [DIV('Next >')]);
      topBar.appendChild(np);
      np.addEventListener('click', () => {
        query(like, page + 1);
      });

      if (results.length < 0 || results[0].values.length <= 0)
        list.appendChild(P('No results'));
      else{
        for (const row of results[0].values){
          const [id, name, owner, crew, desc, width, height, gravity, data] = row;
          list.appendChild(P([A(name || 'Untitled', () => {
            lastCampaign.c = -1;
            hideWorlds();
            const decoder = new LZMA.Decoder();
            const header = decoder.decodeHeader(new LZMA.iStream(
              [93, 0, 0, 16, 0, 255, 255, 255, 255]));
            const output = new LZMA.oStream();
            decoder.setProperties(header);
            if (decoder.decodeBody(new LZMA.iStream(data), output, header.uncompressedSize)){
              const decomp = output.toUint8Array();
              defaultScreen.drawBanner('Loading level...');
              if (eeGame)
                eeGame.stop();
              const world = new World();
              world.clearWorld(width, height, gravity);
              world.loadLayerData(new FlashByteArray(decomp));
              eeGame = new EverybodyEdits(defaultScreen, defaultInput, world);
              eeGame.run();
            }
            else
              showText('Failed to decompress data', true);
          })]));
          const ul = UL();
          if (desc)
            ul.appendChild(LI(desc));
          ul.appendChild(LI(`ID: ${id}`));
          ul.appendChild(LI(`Owner: ${owner}`));
          if (crew)
            ul.appendChild(LI(`Crew: ${crew}`));
          list.appendChild(ul);
        }
      }
    };
    sqlWorker.postMessage({
      action: 'exec',
      sql: random ? `
SELECT world.id,world.name,player.name,crew.name,description,width,height,gravity,data
FROM world
INNER JOIN player ON world.owner = player.rowid
INNER JOIN crew ON world.crew = crew.rowid
ORDER BY RANDOM()
LIMIT 1
` : `
SELECT world.id,world.name,player.name,crew.name,description,width,height,gravity,data
FROM world
INNER JOIN player ON world.owner = player.rowid
INNER JOIN crew ON world.crew = crew.rowid
${like.trim() ? `
WHERE
  world.id LIKE $like OR
  world.name LIKE $like OR
  description LIKE $like OR
  player.name LIKE $like OR
  crew.name LIKE $like
` : ``}
LIMIT ${page * 30},30;
`,
      params: { '$like': like ? `%${like.trim()}%` : '' }
    });
  };

  if (buffer !== true){
    sqlWorker.onerror = e => {
      console.error(e);
      showText(`Error: ${e}`);
    };
    sqlWorker.onmessage = m => {
      if (m && m.data && m.data.ready)
        query('', 0);
      else
        showText('Error: Failed to load');
    };
    try {
      sqlWorker.postMessage({ action: 'open', buffer }, [buffer]);
    } catch (e) {
      console.error(e);
      sqlWorker.postMessage({ action: 'open', buffer });
    }
  }
  else{
    // already loaded, so use what's in memory
    query('', 0);
  }
}

function loadZipObj(zipObj, campaigns){
  const list = document.getElementById('world-list');
  list.innerHTML = '';

  if (campaigns){
    // campaigns zip has specific format
    list.appendChild(H1('Campaigns'));
    const cats = CampaignPage.getCampaigns(zipObj);
    for (let c = 0; c < cats.length; c++){
      const cat = cats[c];
      const ul = UL();
      for (let w = 0; w < cat.worlds.length; w++){
        const world = cat.worlds[w];
        const li = LI([
          `${c + 1}.${w + 1}. `,
          A(world.name, () => {
            lastCampaign = {c, w};
            hideWorlds();
            loadEelvl(world.eelvl);
          })
        ]);
        if (lastCampaign.c === c && lastCampaign.w === w)
          li.style.textDecoration = 'underline';
        ul.appendChild(li);
      }
      list.appendChild(DIV([
        H2(`${c + 1}. ${cat.name}`),
        P(`${cat.desc} [${cat.diff}]`),
        ul
      ]));
    }
    showWorlds();
    if (!campaignsLoaded){
      campaignsLoaded = true;
      loadEelvl(cats[0].worlds[0].eelvl);
    }
  }
  else{
    // generic file... make directory structure
    const root = [];
    for (const file of zipObj){
      const path = file.name.split('/');
      let here = {files: root};
      while (path.length > 0){
        const name = path.shift();
        if (path.length === 0){
          // file
          here.files.push({dir: false, name, data: file.data});
        }
        else{
          // directory
          const sub = here.files.find(d => d.dir && d.name === name);
          if (sub)
            here = sub;
          else{
            const sub2 = {dir: true, name, files: []};
            here.files.push(sub2);
            here = sub2;
          }
        }
      }
    }
    const sortFiles = dir => {
      dir.sort(
        (a, b) =>
          a.dir && !b.dir ? 1 :
          !a.dir && b.dir ? -1 :
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
      for (const f of dir)
        if (f.dir) sortFiles(f.files);
    };
    sortFiles(root);
    const containsEelvl = dir => {
      for (const f of dir){
        if (f.dir){
          if (containsEelvl(f.files))
            return true;
        }
        else if (f.name.toLowerCase().endsWith('.eelvl'))
          return true;
      }
      return false;
    };
    let nextLevel = 1;
    const outputFiles = (dir, depth) => {
      for (const file of dir){
        if (file.dir){
          if (containsEelvl(file.files)){
            list.appendChild(
              (([H1, H2, H3])[Math.min(2, depth)])(file.name)
            );
            outputFiles(file.files, depth + 1);
          }
        }
        else if (file.name.toLowerCase().endsWith('.png')){
          const img = document.createElement('img');
          img.src = URL.createObjectURL(new Blob([file.data.data]));
          img.title = file.name;
          img.style.display = 'block';
          img.style.maxWidth = '50%';
          img.style.height = 'auto';
          list.appendChild(img);
        }
        else if (file.name.toLowerCase().endsWith('.eelvl')){
          const ul = UL(LI([`${nextLevel++}. `, A(file.name, () => {
            lastCampaign.c = -1;
            hideWorlds();
            loadEelvl(file.data);
          })]));
          ul.style.paddingLeft = '0';
          list.appendChild(ul);
        }
      }
    };
    if (!containsEelvl(root))
      list.appendChild(H2('No levels found'));
    else
      outputFiles(root, 0);
    showWorlds();
  }
}
