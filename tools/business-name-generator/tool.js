(function(){
  var LIMIT = 3;
  var STORAGE_KEY = 'bos_tool_uses';
  var TOOLS_KEY = 'bos_tool_slugs';
  var currentSlug = "business-name-generator";

  function readCount(){
    try { return parseInt(localStorage.getItem(STORAGE_KEY)||'0',10)||0; } catch(e){ return 0; }
  }
  function writeCount(n){
    try { localStorage.setItem(STORAGE_KEY, String(n)); } catch(e){}
  }
  function readSeen(){
    try { var raw = localStorage.getItem(TOOLS_KEY) || ''; return raw ? raw.split(',') : []; }
    catch(e){ return []; }
  }
  function markSeen(){
    try {
      var seen = readSeen();
      if (seen.indexOf(currentSlug) === -1){ seen.push(currentSlug); localStorage.setItem(TOOLS_KEY, seen.join(',')); return true; }
      return false;
    } catch(e){ return false; }
  }
  function alreadyUsedThisTool(){ return readSeen().indexOf(currentSlug) !== -1; }

  var fields = ["keyword"];
  var dateFields = [];
  var out = document.getElementById('tool-output');
  var form = document.getElementById('tool-form');
  var copyBtn = document.getElementById('tool-copy');
  var wall = document.getElementById('tool-wall');
  var usage = document.getElementById('tool-usage');
  var usageText = document.getElementById('tool-usage-text');
  var interacted = false;

  dateFields.forEach(function(id){
    var el = document.getElementById('f-'+id);
    if (el && !el.value) el.value = new Date().toISOString().slice(0,10);
  });
  function readValues(){
    var v = {};
    fields.forEach(function(id){ var el=document.getElementById('f-'+id); if(el) v[id]=el.value; });
    return v;
  }
  function compute(v){
      const k=(v.keyword||'').trim(); if(!k) return 'Enter a keyword';
      const parts=k.split(/\s+/);
      const base=parts[0]||k;
      const prefixes=['Neo','Meta','Aero','Nova','Lumen','Quill','Ember','Vantage','Halo','Onyx'];
      const suffixes=['Labs','Works','Studio','Co','& Co','Forge','Hub','Craft','Cloud','Stack'];
      const patterns=[
        prefixes.map(p=>p+' '+cap(base)),
        suffixes.map(s=>cap(base)+' '+s),
        [cap(base)+'ify', cap(base)+'ly', cap(base)+'io', cap(base)+' + Co', 'The '+cap(base)+' Company'],
      ].flat();
      function cap(x){return x.charAt(0).toUpperCase()+x.slice(1);}
      return patterns.slice(0,20).join('\n');
    }
  function refreshUsageBadge(){
    var count = readCount();
    var left = Math.max(0, LIMIT - count);
    if (count >= LIMIT){
      usage.hidden = false;
      usageText.textContent = "You've used all " + LIMIT + " free tries — sign up to continue.";
      usage.className = 'tool-usage tool-usage-empty';
    } else if (count > 0){
      usage.hidden = false;
      usageText.textContent = left + ' free ' + (left===1?'try':'tries') + ' left';
      usage.className = 'tool-usage';
    } else {
      usage.hidden = true;
    }
  }
  function showWall(){
    if (wall) wall.hidden = false;
    if (form) form.style.opacity = '0.4';
    if (form) form.style.pointerEvents = 'none';
  }
  function tryCompute(){
    var count = readCount();
    if (count >= LIMIT && !alreadyUsedThisTool()){ showWall(); return; }
    try { out.textContent = compute(readValues()); }
    catch(e){ out.textContent = 'Error: '+e.message; }
  }
  function onInteract(){
    if (!interacted){
      interacted = true;
      // Only bump the counter once per tool per browser
      if (!alreadyUsedThisTool()){
        // New tool — check if there's room BEFORE marking
        var currentCount = readCount();
        if (currentCount >= LIMIT){ showWall(); return; }
        markSeen();
        writeCount(currentCount + 1);
        refreshUsageBadge();
      }
    }
    tryCompute();
  }
  form.addEventListener('input', onInteract);
  form.addEventListener('change', onInteract);
  copyBtn.addEventListener('click', function(){
    try { navigator.clipboard.writeText(out.textContent).then(function(){
      copyBtn.textContent='Copied';
      setTimeout(function(){copyBtn.textContent='Copy';}, 1200);
    }); } catch(e){}
  });
  var embedBtn = document.getElementById('embed-copy');
  var embedCode = document.getElementById('embed-code');
  if (embedBtn && embedCode) {
    embedBtn.addEventListener('click', function(){
      try { navigator.clipboard.writeText(embedCode.textContent).then(function(){
        embedBtn.textContent = 'Copied embed code';
        embedBtn.classList.add('copied');
        setTimeout(function(){ embedBtn.textContent='Copy embed code'; embedBtn.classList.remove('copied'); }, 1800);
      }); } catch(e){}
    });
  }

  // Initial render — show default calculation without incrementing counter
  var count = readCount();
  if (count >= LIMIT && !alreadyUsedThisTool()){
    showWall();
  } else {
    try { out.textContent = compute(readValues()); } catch(e){}
    refreshUsageBadge();
  }
})();
