(function(){
if(window.__rpap>=26)return;window.__rpap=26;
/* ===== v9: NEW-TAB KILLER (gate arolinks same-tab khole — WebView me chain chale) ===== */
try{
 window.open=function(u){if(u){try{var _s=String(u);
  if(/wa\.me|whatsapp\.com|t\.me|telegram\.me|messenger\.com/i.test(_s)){try{location.href=_s;}catch(e){}return {closed:false,close:function(){},focus:function(){},postMessage:function(){},opener:window};}
  try{location.href=_s;}catch(e){}}catch(e){}}return null;};
}catch(e){}
try{
 var SHORT2=/arolink|vplink|vplinks|ouo\.|adf\.ly|linkvertise|droplink|gyanilinks|shrinkme|shorteno|adrinol|tnshort|shareus|mintdown|exelink|ez4short|cutpaid|earnify|gplink|shrinkforearn|link1s|shrinkearn|adpaylink|adfoc|shorte\.st|clk\.|kekolink|cosmiclink|payskip|jobzsp|flashlink|rocklinks|veblinks|teralink|directlink|getlink|donkeylink|godeshort|lootlinks/i;
 function stripT(){
  try{
   var as=document.querySelectorAll('a[target],form[target]');
   for(var i=0;i<as.length;i++){try{var _h=as[i].getAttribute('href')||'';if(/wa\.me|whatsapp\.com|t\.me|telegram\.me|messenger\.com/i.test(_h))continue;as[i].removeAttribute('target');}catch(e){}}
   var as2=document.querySelectorAll('a[href]');
   for(var j=0;j<as2.length;j++){var h2=as2[j].getAttribute('href')||'';
    if(SHORT2.test(h2)){try{as2[j].removeAttribute('target');}catch(e){}}}
  }catch(e){}
 }
 setInterval(stripT,900);
 try{new MutationObserver(stripT).observe(document.documentElement,{childList:true,subtree:true});}catch(e){}
}catch(e){}
var LS=['expected_app_key','generated_access_key','vg_access_key','access_key','app_access_key','user_key','app_key','active_app_key','license_key','last_key_code'];
var SS=['generated_access_key','expected_app_key','access_key'];
function rnd(n){var c='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',m='';for(var i=0;i<n;i++)m+=c.charAt(Math.floor(Math.random()*c.length));return m;}
function keys(){return ['MAD'+rnd(14)+'AKP','MAD'+rnd(14)+'APP','#L_'+rnd(10),rnd(16)];}
var NAT=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;
function setVal(el,v){el.__rpap=1;NAT.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));try{el.dispatchEvent(new KeyboardEvent('keyup',{bubbles:true,key:'a'}));}catch(e){}}
function txt(el){return ((el.textContent||'')+' '+(el.value||'')+' '+(el.getAttribute('aria-label')||''));}
function visible(el){try{var r=el.getBoundingClientRect();return r.width>5&&r.height>5;}catch(e){return false;}}
function isKeyField(el){
 var s=((el.name||'')+' '+(el.id||'')+' '+(el.placeholder||'')+' '+(el.getAttribute('aria-label')||'')+' '+(el.className||'')).toLowerCase();
 if(!/key|token|code|licen|access|unlock|activ|#l_/.test(s))return false;
 if(/search|coupon|promo|referr|otp|captcha|phone|mobile|email|pincode|zipcode|postal/.test(s))return false;
 return true;}
function fmtFor(el){var p=(el.placeholder||'');
 if(/#l_/i.test(p))return '#L_'+rnd(10);
 if(/mad/i.test(p))return 'MAD'+rnd(14)+'AKP';
 return keys()[2];}
function fillForms(){
 try{
  var ins=document.querySelectorAll('input[type=text],input[type=tel],input[type=search],input[type=number],input:not([type])');
  for(var i=0;i<ins.length;i++){var el=ins[i];
   if(el.__rpap||el.disabled||el.readOnly||!visible(el))continue;
   if(!isKeyField(el))continue;
   setVal(el,fmtFor(el));
   setTimeout(clickAction,400);
   return;}
 }catch(e){}}
function clickAction(){
 try{
  var bs=document.querySelectorAll('button,input[type=submit],[role=button]');
  var acts=/submit|unlock|verif|activat|continue|proceed|open|start|generat|enter|apply|access/i;
  var no=/download|share|whatsapp|telegram|youtube|install|watch/i;
  for(var j=0;j<bs.length;j++){var t=txt(bs[j]);
   if(acts.test(t)&&!no.test(t)&&!bs[j].disabled){bs[j].disabled=false;bs[j].click();break;}}
 }catch(e){}}
function freePass(){
 try{
  var gtxt=(document.body?document.body.innerText:'');
  if(!/free\s*pass|24[-\s]?hour|unlock.*access/i.test(gtxt))return;
  var bs=document.querySelectorAll('button,a,[role=button]');
  for(var i=0;i<bs.length;i++){var t=txt(bs[i]);
   if(/get\s*\d*[\s-]*(hour[\s-]*)?free[\s-]*pass|free[\s-]*pass/i.test(t)){
    bs[i].disabled=false;bs[i].click();
    return;}}
 }catch(e){}}
function popups(){
 try{
  var bs=document.querySelectorAll('button,a,[role=button],span[role=button],div[role=button]');
  for(var i=0;i<bs.length;i++){if(bs[i].__rppp)continue;
   var t=txt(bs[i]).toLowerCase().trim();
   if(/continue to (website|app)|skip ad|maybe later|not now|no thanks|close/i.test(t)||(t==='×'||t==='x'||t==='✕'||t==='skip')){
    bs[i].__rppp=1;bs[i].click();return;}}
 }catch(e){}}
/* ===== v6-1: UNIVERSAL AD-CHAIN SOLVER (koi bhi shortener, behavior-se) ===== */
var SHORT=/arolink|vplink|vplinks|ouo\.|adf\.ly|linkvertise|droplink|gyanilinks|shrinkme|shorteno|adrinol|tnshort|shareus|mintdown|exelink|ez4short|cutpaid|earnify|gplink|shrinkforearn|link1s|shrinkearn|adpaylink|adfoc|shorte\.st|clk\.|kekolink|cosmiclink|payskip|jobzsp|flashlink|rocklinks|veblinks|teralink/i;
function chainPage(){
 try{
  if(SHORT.test(location.href))return true;
  var t=document.body?document.body.innerText:'';
  var cd=/\b\d{1,3}\s*(second|sec|s\b)|please\s*wait|redirect(ed|ing)|almost there|wait\s+\d+|generating your link|hold on/i.test(t);
  var verb=0,links=0;
  var bs=document.querySelectorAll('button,a,[role=button]');
  for(var i=0;i<bs.length;i++){
   var tt=txt(bs[i]).toLowerCase();
   if(/skip|continue|get\s*(link|code)|proceed|next|verify|unlock|click here/i.test(tt))verb++;
   if(bs[i].tagName==='A')links++;
  }
  return cd&&verb>0&&links<25;
 }catch(e){return false;}}
function chainSolve(){
 try{
  if(!chainPage())return;
  var bs=document.querySelectorAll('button,a,[role=button]');
  var acts=/^(skip( ad)?|skipads?|continue|get link|get code|proceed|next|click here|verify|unlock|open link|re ?direct)$/i;
  for(var i=0;i<bs.length;i++){
   var t=txt(bs[i]).trim();
   if(!t||bs[i].disabled)continue;
   if(acts.test(t)||/skip|continue|get (link|code)/i.test(t)&&visible(bs[i])){
    if(visible(bs[i])){bs[i].click();return;}}}
 }catch(e){}}
/* ===== v6-2: URL se token capture (gate wapas aane pe seed ho jaye) ===== */
function captureURLTok(){
 try{
  if(location.__rpu)return;location.__rpu=1;
  var q=new URLSearchParams(location.search),hit=false;
  q.forEach(function(v,k){
   if(/token|code|key|access|pass/i.test(k)&&v&&v.length>3&&!/captcha|csrf|session|order|track/i.test(k)){
    try{localStorage.setItem(k,v);localStorage.setItem('generated_access_key',v);}catch(e){}
    try{sessionStorage.setItem(k,v);}catch(e){}
    hit=true;}});
 }catch(e){}}
/* ===== v6-3: code-dikhne pe capture + app me wapas ===== */
function captureCode(){
 try{
  if(sessionStorage.getItem('__rpback'))return;
  var t=document.body?document.body.innerText:'';
  if(!/key code|access code|verification code|your code|copy code/i.test(t))return;
  var m=t.match(/#?L_[A-Z0-9]{6,12}\b|\b[A-Z0-9]{18,28}\b/);
  if(!m)return;
  var c=m[0];
  try{localStorage.setItem('generated_access_key',c);localStorage.setItem('last_key_code',c);localStorage.setItem('expected_app_key',c);}catch(e){}
  try{sessionStorage.setItem('generated_access_key',c);sessionStorage.setItem('__rpback','1');}catch(e){}
  setTimeout(function(){try{history.back();}catch(e){}},900);
 }catch(e){}}
function skipAds(){chainSolve();}
function autoLogin(){
 try{
  var ps=document.querySelectorAll('input[type=password]');
  for(var i=0;i<ps.length;i++){var pw=ps[i];if(pw.__rpap)continue;pw.__rpap=1;
   var cfg=null;try{cfg=JSON.parse(window.__RAJNISH_AUTOPASS__||'null');}catch(e){}
   if(!cfg||!cfg.user)return;
   var all=document.querySelectorAll('input');var user=null;
   for(var j=0;j<all.length;j++){var t=(all[j].type||'').toLowerCase();
    if(all[j]!==pw&&t!=='hidden'&&t!=='checkbox'&&t!=='radio'&&t!=='password'){user=all[j];break;}}
   if(!user)return;
   NAT.call(user,cfg.user);user.dispatchEvent(new Event('input',{bubbles:true}));
   NAT.call(pw,cfg.pass||'');pw.dispatchEvent(new Event('input',{bubbles:true}));
   setTimeout(function(){var bs=document.querySelectorAll('button,input[type=submit],[role=button]');
    for(var k=0;k<bs.length;k++){var t=((bs[k].textContent||'')+(bs[k].value||'')).toLowerCase();
     if(/login|sign in|log in/.test(t)){bs[k].disabled=false;bs[k].click();break;}}},450);
   return;}
 }catch(e){}}
function stuckGen(){
 try{
  var t=(document.body?document.body.innerText:'');
  if(/generating\s*(verification|link)?|please\s*wait/i.test(t)){
   if(!window.__rpgt)window.__rpgt=Date.now();
   else if(Date.now()-window.__rpgt>6000){window.__rpgt=Date.now();clickAction();freePass();chainSolve();}
  }else window.__rpgt=0;
 }catch(e){}}
function seedExpiry(){
 try{
  var H=24*3600*1000,fut=Date.now()+H,now=Date.now();
  var ls=localStorage;
  for(var i=0;i<ls.length;i++){
   var k=ls.key(i);
   if(!k)continue;
   if(/(_key)?_?expires?_at$|_expiry$|_valid_until$/i.test(k)){
    var v=Number(ls.getItem(k));
    if(isNaN(v)||v<now+3600*1000){ls.setItem(k,String(fut));}
   }
  }
  var must=['vg_key_expires_at','key_expires_at','access_expires_at','pass_expires_at'];
  for(var j=0;j<must.length;j++){
   var k2=must[j],v2=Number(ls.getItem(k2));
   if(isNaN(v2)||v2<now+3600*1000){try{ls.setItem(k2,String(fut));}catch(e){}}
  }
 }catch(e){}}
/* ===== v7: STUDY-MATE PLATFORM MODULE (study-mate.in x Sunny / l2rkgs.edgeone.dev / kgs-web family) ===== */
var SMP=/study-mate\.in|l2rkgs\.edgeone\.dev|kgs-web\.vercel\.app|studyapkmodkgs|darkuniversekgs/i;
function smApi(){try{return location.hostname.indexOf('study-mate.in')>-1?'':'https://www.study-mate.in';}catch(e){return '';}}
function smStudy(){
 try{
  if(!SMP.test(location.href))return;
  /* 1) verify/TG-gate overlay hatao + batchFrame force-load */
  var ov=document.getElementById('verifyOverlay');
  if(ov&&ov.style.display!=='none'){try{ov.style.display='none';}catch(e){}}
  var fr=document.getElementById('batchFrame');
  if(fr&&!fr.getAttribute('src')){var cu=window.currentBatchUrl||'';if(cu){try{fr.setAttribute('src',cu);}catch(e){}}}
  /* 2) gate-buttons auto-click (verify/unlock/watch/open/continue) */
  var bs=document.querySelectorAll('button,.btn,a[class*=btn],[role=button]');
  for(var i=0;i<bs.length;i++){var el=bs[i];if(!visible(el))continue;
   var t=txt(el).toLowerCase();
   if(/(verify|unlock|watch|open|continue|proceed|start|access)/.test(t)&&!/telegram|whatsapp|channel|share|download|login|sign/.test(t)){try{el.click();}catch(e){}}}
  /* 3) lesson-page: keyless public API se DIRECT-PLAY list inject */
  var m=location.href.match(/lesson[_/-]?id=(\d+)/i)||location.href.match(/\/lesson\/(\d+)/i);
  if(m&&!document.getElementById('rpapSmList')){
   var api=smApi()+'/api/lesson/'+m[1];
   fetch(api).then(function(r){return r.json();}).then(function(d){
    try{
     var vids=(d&&(d.videos||d.lessons||(d.data&&(d.data.videos||d.data.lessons))))||[];
     if(!vids.length||document.getElementById('rpapSmList'))return;
     var box=document.createElement('div');box.id='rpapSmList';
     box.style.cssText='position:fixed;left:0;right:0;bottom:0;max-height:40%;overflow:auto;background:#0b0f14;color:#fff;z-index:2147483647;font:13px sans-serif;padding:6px;border-top:2px solid #e50914';
     var hd=document.createElement('div');hd.textContent='⚡ AutoPass DIRECT — '+vids.length+' videos';
     hd.style.cssText='font-weight:700;padding:4px;color:#e50914';box.appendChild(hd);
     for(var q=0;q<vids.length;q++){(function(v){
      var it=document.createElement('div');it.textContent='▶ '+(v.name||v.title||('Video '+(v.id||'')));
      it.style.cssText='padding:9px 6px;border-bottom:1px solid #1e2630;cursor:pointer';
      it.onclick=function(){try{
        var vid=v.id||v.video_id;
        fetch(smApi()+'/api/video/'+vid).then(function(r){return r.json();}).then(function(w){
         var u=(w&&(w.hd_video_url||w.video_url))||'';
         if(!u)return;
         if(/\.pdf(\?|$)/i.test(u)&&u.indexOf('/view-pdf')<0){location.href=smApi()+'/view-pdf?url='+encodeURIComponent(u);}
         else{location.href=u;}
        }).catch(function(){});
       }catch(e){}};
      box.appendChild(it);})(vids[q]);}
     document.body.appendChild(box);
    }catch(e){}
   }).catch(function(){});
  }
 }catch(e){}
}
/* ===== v8: UNIVERSAL TOKEN-GATE KILLER (36h/24h pass-gates — TG/new-tab ke bina) ===== */
function gateBypass(){
 try{
  var bt=(document.body?document.body.innerText:'')||'';
  if(!/unlock.{0,50}(access|hour|pass)|free pass|access key|key code|generating secure|paste your key|enter key/i.test(bt))return;
  var now=Date.now(),fut=now+48*3600*1000;
  /* 1) UNI-SEED: har timestamp-key future kar do (koi bhi naam ho) */
  function uni(st){
   for(var i=0;i<st.length;i++){var k=st.key(i),v=st.getItem(k)||'';
    if(/^\d{10,13}$/.test(v)&&Number(v)<now+3600*1000){try{st.setItem(k,String(fut));}catch(e){}}
    else if(/\d{4}-\d{2}-\d{2}/.test(v)){try{var dd=Date.parse(v);if(dd&&dd<now+3600*1000)st.setItem(k,new Date(fut).toISOString());}catch(e){}}}
   var pf=['vg_','tb_','kgs_','grumpy_','l2r_','sm_','app_','vidya_','vply_','key_','access_','pass_','license_','gate_','user_','device_',''];
   var mid=['key_expires_at','access_expires_at','expires_at','key_expiry','expiry','valid_until','valid_till','unlock_until','free_pass_until','pass_expires_at','token_expires_at','premium_until','verified_until','access_until','key_valid'];
   for(var a=0;a<pf.length;a++)for(var b=0;b<mid.length;b++){var nm=pf[a]+mid[b];try{var ex=st.getItem(nm);if(ex===null||ex===''||(/^\d{10,13}$/.test(ex)&&Number(ex)<now+3600*1000))st.setItem(nm,String(fut));}catch(e){}}
  }
  try{uni(localStorage);}catch(e){}
  try{uni(sessionStorage);}catch(e){}
  /* 2) STUCK-DETECT: "Generating..." → ek baar reload (seed ke baad gate pass dikhayega) */
  var els=document.querySelectorAll('button,a,.btn,[role=button]');
  for(var j=0;j<els.length;j++){
   if(/generating|please wait|processing|loading key/i.test(txt(els[j]))){
    if(!sessionStorage.getItem('__rpapGrl')){try{sessionStorage.setItem('__rpapGrl','1');}catch(e){}
     setTimeout(function(){location.reload();},1200);}
    return;}}
  /* 3) PLACEHOLDER-FORMAT CODE autofill+unlock (E.g. TC/XXXXX/XXXX → TC/A7K2M/9QX4) */
  var inp=document.querySelectorAll('input');
  for(var q=0;q<inp.length;q++){var el=inp[q];
   if(!visible(el))continue;
   var ph=el.placeholder||el.getAttribute('aria-label')||'';
   if(/key|code|pass/i.test(ph)&&/X.*X/.test(ph)&&!el.value){
    var gen=ph.replace(/[Xx]/g,function(){var c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';return c.charAt(Math.floor(Math.random()*c.length));});
    setVal(el,gen);
    var ub=null,bs2=document.querySelectorAll('button,a,.btn,[role=button]');
    for(var u=0;u<bs2.length;u++){var t2=txt(bs2[u]).toLowerCase();if(/unlock|submit|verify|activate|apply/.test(t2)&&!/get|generat/.test(t2)){ub=bs2[u];break;}}
    if(ub)setTimeout(function(){try{ub.click();}catch(e){}},700);
    return;}}
 }catch(e){}
}
/* ===== v12: CROSS-DOMAIN DWELL (window.name packet — sessionStorage domain-locked hota hai!) ===== */
function _rpPack(url){try{window.name='RPP|'+encodeURIComponent(url)+'|'+Date.now();}catch(e){}}
function _rpUnpack(){
 try{
  var w=window.name||'';
  if(w.indexOf('RPP|')!==0)return null;
  var parts=w.split('|');
  return {u:decodeURIComponent(parts[1]),t:+parts[2]};
 }catch(e){return null;}
}
function stepFlow(){
 try{
  var bt=document.body?document.body.innerText:'';
  var now=Date.now();
  var m=bt.match(/step\s*(\d{1,2})\s*\/\s*(\d{1,2})/i);
  if(m){
   /* STEP-PAGE (own domain): pack karke ad-click, continue-click */
   var su=location.href.split('#')[0];
   try{
    var pr=window.name||'';
    if(pr.indexOf('RPP|')!==0||_rpUnpack().u!==su)_rpPack(su);
   }catch(e){_rpPack(su);}
   try{
    var sn=(m?bt.match(/step\s*(\d{1,2})/i)[1]:'V');
    if(sessionStorage.getItem('__rpStepNo')!==sn){sessionStorage.setItem('__rpStepNo',sn);sessionStorage.removeItem('__rpAdClicked');}
    sessionStorage.removeItem('__rpDw');
   }catch(e){}
   if(now-(+(sessionStorage.getItem('__rpDwellEnd')||0))<2500)return;
   var adCl=null;try{adCl=sessionStorage.getItem('__rpAdClicked');}catch(e){}
   if(!adCl){
    /* VF: GET LINK pehle (ready ho to) */
    var gBtn=null,gAs=document.querySelectorAll('a[href],button,[role=button]');
    for(var gi=0;gi<gAs.length;gi++){var gt=txt(gAs[gi]).toLowerCase();
     if(/(^| )get link( |$)|get link now|get link!/.test(gt)&&gt.length<40){gBtn=gAs[gi];break;}}
    if(gBtn){try{gBtn.removeAttribute('target');sessionStorage.removeItem('__rpAdClicked');gBtn.click();}catch(e){}return;}
    var as=document.querySelectorAll('a[href],button,[role=button]');
    for(var i=0;i<as.length;i++){var el2=as[i];var h=el2.getAttribute&&el2.getAttribute('href')||'';
     var t=txt(el2).toLowerCase();
     var hit=(/^https?:/i.test(h)&&!/javascript|#/.test(h)&&/download|generate.?ad|click.?here|\.pdf|\bad\b|watch|press/.test(t))
       ||/click to verify/.test(t);
     if(hit){
      try{el2.removeAttribute&&el2.removeAttribute('target');sessionStorage.setItem('__rpAdClicked','1');_rpPack(su);el2.click();}catch(e){}
      return;}}
    try{window.scrollBy(0,420);}catch(e){}
   }else{
    var bs=document.querySelectorAll('button,a,[role=button]');
    for(var j=0;j<bs.length;j++){var t2=txt(bs[j]).toLowerCase();
     if(/(click here to )?continue|get link|next step/.test(t2)&&t2.length<50){
      try{bs[j].removeAttribute('target');sessionStorage.removeItem('__rpAdClicked');bs[j].click();}catch(e){}
      return;}}
   }
   }else{
   /* NON-STEP PAGE: ho sakta hai AD ho (window.name me RPP ho) */
   var pk=_rpUnpack();
   if(!pk)return;
   var cur=location.href.split('#')[0];
   if(cur.indexOf(pk.u)===0)return; /* wapas step-par aa chuke — kuch nahi */
   try{
    var dw=sessionStorage.getItem('__rpDw');
    if(dw===null){sessionStorage.setItem('__rpDw',String(now));
     try{
      var _b=document.getElementById('__rpapCd')||document.createElement('div');
      _b.id='__rpapCd';
      _b.style.cssText='position:fixed;top:0;left:0;right:0;z-index:2147483647;background:#0b0f14;color:#ffd166;font:bold 14px sans-serif;padding:8px 10px;text-align:center;border-bottom:2px solid #e50914';
      _b.textContent='⏳ AutoPass: ad dekh rahe hain — 15s me wapas jayenge…';
      (document.body||document.documentElement).appendChild(_b);
     }catch(e){}
     return;}
    var el=now-(+dw);
    var left=Math.max(0,Math.ceil((15500-el)/1000));
    try{var _b2=document.getElementById('__rpapCd');if(_b2)_b2.textContent='⏳ AutoPass: '+left+'s baad step-page par wapas…';}catch(e){}
    if(el>=15500){
     try{var _b3=document.getElementById('__rpapCd');if(_b3)_b3.textContent='↩ AutoPass: wapas ja rahe hain…';}catch(e){}
     var n=+(sessionStorage.getItem('__rpAdN')||0)+1;
     try{sessionStorage.setItem('__rpAdN',String(n));}catch(e){}
     if(n<=12){_rpPack(pk.u);setTimeout(function(){location.href=pk.u;},350);}
     else{try{window.name='';}catch(e){}}
    }
   }catch(e){}
  }
 }catch(e){}
}
/* ===== v15: DEAD-GATE HONESTY (TB-server suspended — rulaane-wala spinner ka ilaaj) ===== */
function deadGate(){
 try{
  if(!/ashrafcyberx-tb\.vercel\.app/i.test(location.href))return;
  var bt=(document.body?document.body.innerText:'')||'';
  if(!/Get 36-Hour Free Pass|Generating Secure Link|paste your key/i.test(bt))return;
  var t0=sessionStorage.getItem('__rpapTbT0');
  if(t0===null){sessionStorage.setItem('__rpapTbT0',String(Date.now()));return;}
  if(Date.now()-(+t0)<6000)return;
  if(document.getElementById('__rpapDead'))return;
  var d=document.createElement('div');d.id='__rpapDead';
  d.style.cssText='position:fixed;inset:0;z-index:2147483647;background:rgba(4,10,18,.96);color:#fff;font:14px sans-serif;padding:26px 18px;text-align:center;overflow:auto';
  d.innerHTML='<div style="font-size:34px">🎯</div><div style="font:bold 17px sans-serif;color:#ff6b6b;margin:10px 0">TARGET BOARD ka server band hai</div>'
   +'<div style="color:#bcd; line-height:1.7; font-size:13px; text-align:left; max-width:420px; margin:8px auto">'
   +'Host ne inka key-server <b>studyapkmod.free.nf</b> suspend kar diya hai (humne khud crack karke dekha — "Domain Suspended" milta hai).<br><br>'
   +'✔️ App theek hai — <b>ye site ki kami hai</b><br>✔️ TB-wala naya server laate hi ye card <b>khud chalega</b> (engine ready baitha hai)<br>✔️ Filhaal baaki cards use karo — VIDYAGRAM/KGS/YES sab live hain</div>'
   +'<div style="margin-top:14px"><span onclick="document.getElementById(\'__rpapDead\').remove()" style="display:inline-block;background:#e50914;color:#fff;padding:10px 26px;border-radius:22px;font-weight:bold;cursor:pointer">Theek hai, samajh gaya</span></div>';
  (document.body||document.documentElement).appendChild(d);
 }catch(e){}
}
/* ===== v16: GYANSARTHI (TARGET BOARD NEW) AUTO-UNLOCK — admin-pass seed, OTP skip ===== */
function gyanUnlock(){
 try{
  if(!/gyanboss-tb-2310\.vercel\.app|gyansarthi/i.test(location.href))return;
  /* MASTER-AUTH: Firebase tb_master_token (boss ka shared account) → localStorage.token */
  if(!localStorage.getItem('token')){
   try{
    var x=new XMLHttpRequest();
    x.open('GET','https://rajnish-prime-faa2b-default-rtdb.europe-west1.firebasedatabase.app/tb_master_token.json',false);
    x.send(null);
    if(x.status===200&&x.responseText&&x.responseText!=='null'&&x.responseText!=='""'){
     var MT=x.responseText.replace(/^"|"$/g,'');
     if(MT.length>20){
      localStorage.setItem('token',MT);
      try{
       var ud=null;try{ud=JSON.parse(localStorage.getItem('userData')||'null');}catch(e){}
       if(!ud)ud={};
       ud.token=MT;ud.isLoggedIn=true;
       if(!ud.fullName)ud.fullName='Rajnish Prime Student';
       if(!ud.mobile)ud.mobile='9262633158';
       localStorage.setItem('userData',JSON.stringify(ud));
      }catch(e){}
      try{window.dispatchEvent(new Event('gyansarthi_pass_updated'));}catch(e){}
     }
    }
   }catch(e){}
  }
  var P=null;
  try{P=JSON.parse(localStorage.getItem('gyansarthi_arolinks_pass_v2')||'null');}catch(e){}
  var ok=P&&P.isVerified&&Number(P.expiresAt)>Date.now();
  var n=Date.now();
  if(!ok){
   var np={isVerified:true,verifiedAt:n,expiresAt:n+30*864e5,token:'admin_bypass_'+n,unlockType:'admin',deviceModel:(navigator.userAgent||'').slice(0,50)};
   try{localStorage.setItem('gyansarthi_arolinks_pass_v2',JSON.stringify(np));}catch(e){}
   try{sessionStorage.removeItem('gyansarthi_pending_token_v2');}catch(e){}
   try{window.dispatchEvent(new CustomEvent('gyansarthi_pass_updated',{detail:np}));}catch(e){}
   P=np;
  }else if(n-(+(localStorage.getItem('__rpapPassT0')||0))>4*3600*1000){
   try{localStorage.setItem('__rpapPassT0',String(n));}catch(e){}
   try{P.expiresAt=n+30*864e5;P.verifiedAt=n;localStorage.setItem('gyansarthi_arolinks_pass_v2',JSON.stringify(P));window.dispatchEvent(new CustomEvent('gyansarthi_pass_updated',{detail:P}));}catch(e){}
  }
  /* ADMIN PASS-KEY FORM: dikh raha hai to khud fill+Apply (boss: admin login kardo) */
  var AD=['gyanboss2026','gyansarthi24h','targetboard24','admin2026'];
  var ins=document.querySelectorAll('input');
  for(var ai=0;ai<ins.length;ai++){
   var ie=ins[ai];
   if(!visible(ie))continue;
   var iph=(ie.placeholder||'')+' '+(ie.getAttribute('aria-label')||'');
   if(/pass.?key|admin|api token/i.test(iph)&&!ie.__rpg){
    ie.__rpg=1;
    setVal(ie,AD[ai%AD.length]);
    setTimeout(function(){
     try{
      var fb=null,fbs=document.querySelectorAll('button,[role=button]');
      for(var fi=0;fi<fbs.length;fi++){var ft=txt(fbs[fi]).toLowerCase();if(/^apply$|submit|unlock/.test(ft)&&ft.length<16){fb=fbs[fi];break;}}
      if(fb)fb.click();
     }catch(e){}
    },600);
    return;
   }
  }
  /* OTP/Join SCREEN DESTROY — har haal me: agar phone-input screen dikhe to user-as-logged-in inject + UI ka auth-flag flip + screen hatao */
  var bt=(document.body?document.body.innerText:'')||'';
  if(/Join TargetBoard|Enter your mobile number/i.test(bt)){
   try{
    if(!localStorage.getItem('userData')){
     var n2=Date.now();
     localStorage.setItem('userData',JSON.stringify({id:'tb_'+n2.toString(36),fullName:'Rajnish Prime Student',mobile:'9876543210',email:'',className:'Class 12th Board 2026-27',stateBoard:'Bihar School Examination Board (BSEB)',token:P.token||'admin_bypass_'+n2,isLoggedIn:true,loginDate:new Date().toLocaleDateString('en-IN'),avatar:'https://api.dicebear.com/7.x/bottts/svg?seed=student'}));
     localStorage.setItem('token',P.token||('admin_bypass_'+n2));
    }
   }catch(e){}
   /* screen-hatav: OTP-card ka parent section/window close nahi hota to home-route par bhejo */
   try{
    var els=document.querySelectorAll('input[placeholder]');
    for(var i=0;i<els.length;i++){
     var ph=(els[i].placeholder||'').toLowerCase();
     if(/mobile|phone/.test(ph)){
      var card=els[i];for(var k=0;k<6&&card;k++)card=card.parentElement;
      if(card&&card.parentElement){card.parentElement.removeChild(card);}
      else if(card){card.style.display='none';}
      try{location.hash='#/';}catch(e){}
      try{window.dispatchEvent(new Event('gyansarthi_pass_updated'));}catch(e){}
      break;
     }
    }
   }catch(e){}
  }
 }catch(e){}
}
try{
 window.addEventListener('message',function(ev){
  try{
   if(ev&&ev.data==='OPEN_TB_LOGIN'){
    gyanUnlock();
    var tk=localStorage.getItem('token')||'';
    if(tk){
     var frs=document.querySelectorAll('iframe');
     for(var wi=0;wi<frs.length;wi++){
      var fsrc=frs[wi].getAttribute('src')||'';
      if(/tpstreams-player|tpstreams\.com/.test(fsrc)){
       try{
        var u2=fsrc;
        if(u2.indexOf('userToken=')<0)u2+=(u2.indexOf('?')<0?'?':'&')+'userToken='+encodeURIComponent(tk);
        if(u2.indexOf('_rp=')<0)u2+='&_rp='+Date.now();
        frs[wi].setAttribute('src',u2);
       }catch(e){}
      }
     }
    }
   }
  }catch(e){}
 },false);
}catch(e){}
/* ===== v22: TB DIRECT-PLAY (server-token khud maango, video khud chalao) ===== */
var _rpTbusy=false;
function tbDirectPlay(){
 try{
  if(!/gyanboss-tb-2310\.vercel\.app|gyansarthi/i.test(location.href))return;
  if(_rpTbusy)return;
  var tk=localStorage.getItem('token')||'';
  if(!tk||tk.length<40)return;
  /* latest asset-id: screen-text se (Lecture ID: XXXX...) ya last Watch-row se */
  var bt=(document.body?document.body.innerText:'')||'';
  var mid=bt.match(/ID:\s*([A-Za-z0-9_-]{8,20})/);
  if(!mid)return;
  var aid=rpExpandAsset(mid[1]);
  var key='__rpTok_'+aid;
  if(sessionStorage.getItem(key))return; /* is asset ke liye try ho chuka */
  _rpTbusy=true;
  try{sessionStorage.setItem(key,'1');}catch(e){}
  var x=new XMLHttpRequest();
  x.open('POST','/api/tb/tpstreams/token/'+encodeURIComponent(aid),true);
  x.setRequestHeader('Content-Type','application/json');
  x.setRequestHeader('Authorization','Bearer '+tk);
  x.onload=function(){
   _rpTbusy=false;
   try{
    if(x.status!==200)return;
    var r=JSON.parse(x.responseText);
    var u=r&&(r.playback_url||'');
    if(!u)return;
    /* fullscreen player overlay bana ke chalao */
    var old=document.getElementById('__rpapPlay');if(old)old.remove();
    var w=document.createElement('div');w.id='__rpapPlay';
    w.style.cssText='position:fixed;inset:0;z-index:2147483647;background:#000';
    var cls=document.createElement('div');cls.textContent='✕';
    cls.style.cssText='position:absolute;top:8px;right:14px;z-index:2;color:#fff;font:26px sans-serif;cursor:pointer;background:rgba(0,0,0,.6);width:40px;height:40px;text-align:center;line-height:40px;border-radius:20px';
    cls.onclick=function(){w.remove();};
    var f=document.createElement('iframe');
    f.src=u;f.allow='autoplay; fullscreen; encrypted-media';
    f.setAttribute('allowfullscreen','true');
    f.style.cssText='position:absolute;inset:0;width:100%;height:100%;border:0';
    w.appendChild(f);w.appendChild(cls);
    (document.body||document.documentElement).appendChild(w);
   }catch(e){}
  };
  x.onerror=function(){_rpTbusy=false;};
  x.send('{}');
 }catch(e){}
}
/* ===== v23: APNA WATCH-BUTTON (har lecture ke neeche engine-ka-apna) ===== */
function myWatch(){
 try{
  if(!/gyanboss-tb-2310\.vercel\.app|gyansarthi/i.test(location.href))return;
  var tk=localStorage.getItem('token')||'';
  if(tk.length<40)return;
  var rows=document.querySelectorAll('div');
  for(var i=0;i<rows.length;i++){
   var row=rows[i];
   var t=row.innerText||'';
   /* lecture-row detect: title + Lecture# + Watch baaki engines ka */
   if(!/Lecture\s*#\s*\d+/.test(t)||t.length>500)continue;
   if(row.querySelector('.__rpRow'))continue;
   /* row ka seedha-parent (jisme Watch bhi hai) pakdo */
   var tgt=null;
   try{
    var kids=row.querySelectorAll('button');
    for(var k=0;k<kids.length;k++){if(/watch/i.test(kids[k].innerText||'')){tgt=kids[k].closest('div[class]')||kids[k].parentElement;break;}}
   }catch(e){}
   if(!tgt)continue;
   if(tgt.querySelector('.__rpRow'))continue;
   /* asset-id row-text se */
   var mid=t.match(/ID:\s*([A-Za-z0-9_-]{8,20})/);
   if(!mid)continue;
   var bar=document.createElement('div');
   bar.className='__rpRow';
   bar.style.cssText='margin-top:6px';
   var b=document.createElement('button');
   b.textContent='▶ PLAY (AutoPass — always works)';
   b.style.cssText='width:100%;background:linear-gradient(90deg,#e50914,#ff512f);color:#fff;font:bold 14px sans-serif;padding:12px;border:0;border-radius:12px;cursor:pointer';
   (function(aid){
    b.onclick=function(){
     try{
      b.textContent='⏳ Opening…';
      var tk2=localStorage.getItem('token')||'';
      var x=new XMLHttpRequest();
      x.open('POST','/api/tb/tpstreams/token/'+encodeURIComponent(aid),true);
      x.setRequestHeader('Content-Type','application/json');
      x.setRequestHeader('Authorization','Bearer '+tk2);
      x.onload=function(){
       try{
        if(x.status!==200){b.textContent='⚠ Token fail — dobara dabao';b.onclick=b.onclick;return;}
        var r=JSON.parse(x.responseText);
        var u=r.playback_url||'';
        if(!u){b.textContent='⚠ No url';return;}
        b.textContent='▶ Playing…';
        var old=document.getElementById('__rpapPlay');if(old)old.remove();
        var w=document.createElement('div');w.id='__rpapPlay';
        w.style.cssText='position:fixed;inset:0;z-index:2147483647;background:#000';
        var cls=document.createElement('div');cls.textContent='✕';
        cls.style.cssText='position:absolute;top:8px;right:14px;z-index:2;color:#fff;font:26px sans-serif;cursor:pointer;background:rgba(0,0,0,.6);width:40px;height:40px;text-align:center;line-height:40px;border-radius:20px';
        cls.onclick=function(){w.remove();};
        var f=document.createElement('iframe');
        f.src=u;f.allow='autoplay; fullscreen; encrypted-media';
        f.setAttribute('allowfullscreen','true');
        f.style.cssText='position:absolute;inset:0;width:100%;height:100%;border:0';
        w.appendChild(f);w.appendChild(cls);
        (document.body||document.documentElement).appendChild(w);
       }catch(e){b.textContent='⚠ Error — dobara dabao';}
      };
      x.onerror=function(){b.textContent='⚠ Network — dobara dabao';};
      x.send('{}');
     }catch(e){}
    };
   })(rpExpandAsset(mid[1]));
   bar.appendChild(b);
   tgt.appendChild(bar);
  }
 }catch(e){}
}

/* ===== v24a: GYANSARTHI asset-id EXPANSION (truncated-prefix ko window.STUDY se full-id me badlo) ===== */
function rpExpandAsset(pre){
 try{
  if(!pre||pre.length>=11)return pre;
  var S=window.STUDY;if(!S)return pre;
  var pools=[];
  try{if(S.catalogs)for(var c in S.catalogs){var ca=S.catalogs[c];if(ca&&ca.videos)for(var vi=0;vi<ca.videos.length;vi++){var vv=ca.videos[vi];if(vv&&vv.asset)pools.push(vv.asset);}}}catch(e){}
  try{if(S.trees)for(var t2 in S.trees){var tr=S.trees[t2];(function walk(o){if(!o||pools.length>4000)return;if(typeof o==='string'){if(o.length>=11&&/^[A-Za-z0-9_-]+$/.test(o))pools.push(o);}else if(typeof o==='object'){if(o.asset)pools.push(o.asset);for(var kk in o)walk(o[kk]);}})(tr);}}catch(e){}
  try{if(S.courses)for(var c3 in S.courses){var cr=S.courses[c3];if(cr&&cr.asset)pools.push(cr.asset);}}catch(e){}
  for(var p=0;p<pools.length;p++){if(pools[p].indexOf(pre)===0)return pools[p];}
 }catch(e){}
 return pre;
}
/* ===== v24b: DISHA ONLINE CLASSES (studyhelperdoc.vercel.app) — auto-login + APNA play/pdf ===== */
var _rpDishLog=0;
function dishaLogin(){
 try{
  if(!/studyhelperdoc\.vercel\.app/i.test(location.hostname))return;
  if(_rpDishLog)return;_rpDishLog=1;
  var x=new XMLHttpRequest();
  x.open('GET','/api/auth/session',true);
  x.onload=function(){
   try{
    var r=JSON.parse(x.responseText);
    if(r&&r.ok&&r.loggedIn)return; /* pehle-se logged-in */
    var x2=new XMLHttpRequest();
    x2.open('POST','/api/auth/login',true);
    x2.setRequestHeader('Content-Type','application/json');
    x2.onload=function(){
     try{
      var r2=JSON.parse(x2.responseText);
      if(r2&&r2.ok&&!sessionStorage.getItem('__rpDishR')){
       try{sessionStorage.setItem('__rpDishR','1');}catch(e){}
       location.reload();
      }
     }catch(e){}
    };
    x2.send(JSON.stringify({email:'9262633158',password:'Disha@RajnishPrime2026'}));
   }catch(e){}
  };
  x.send();
 }catch(e){}
}
function rpOverlay(){ /* fullscreen-overlay skeleton */
 var w=document.createElement('div');w.id='__rpapPlay';
 w.style.cssText='position:fixed;inset:0;z-index:2147483647;background:#000';
 var cls=document.createElement('div');cls.textContent='\u2715';
 cls.style.cssText='position:absolute;top:8px;right:14px;z-index:2;color:#fff;font:26px sans-serif;cursor:pointer;background:rgba(0,0,0,.6);width:40px;height:40px;text-align:center;line-height:40px;border-radius:20px';
 cls.onclick=function(){try{w.remove();}catch(e){}};
 return {w:w,cls:cls};
}
function dishaPlay(){
 try{
  if(!/studyhelperdoc\.vercel\.app/i.test(location.hostname))return;
  var m=location.pathname.match(/^\/watch\/([^\/]+)\/([^\/?#]+)/);
  if(!m)return;
  if(document.getElementById('__rpapDishBtn'))return;
  /* site-ke player-card ke neeche APNA red button */
  var tgt=null;
  var mains=document.querySelectorAll('main div,main,#__next div,body div');
  for(var i=0;i<mains.length;i++){
   var el=mains[i];
   var t=(el.innerText||'');
   if(t.length>0&&t.length<400&&/play|watch|lecture/i.test(t)&&el.querySelector&&el.querySelector('video,iframe')){
    tgt=el; /* video-hosting-card */
   }
  }
  if(!tgt){tgt=document.querySelector('main')||document.body;}
  var host=(tgt.parentElement||tgt);
  if(host.querySelector('#__rpapDishBtn'))return;
  var b=document.createElement('button');
  b.id='__rpapDishBtn';
  b.textContent='\u25B6 PLAY (AutoPass \u2014 always works)';
  b.style.cssText='width:100%;background:linear-gradient(90deg,#e50914,#ff512f);color:#fff;font:bold 15px sans-serif;padding:13px;border:0;border-radius:12px;cursor:pointer;margin-top:8px';
  b.onclick=function(){
   try{
    b.textContent='\u23F3 Loading stream\u2026';
    var x=new XMLHttpRequest();
    x.open('GET','/api/video/'+encodeURIComponent(m[1])+'/'+encodeURIComponent(m[2]),true);
    x.onload=function(){
     try{
      var r=JSON.parse(x.responseText);
      if(!r||!r.ok){b.textContent='\u26A0 Fail \u2014 dobara dabao';return;}
      var tg=r.telegramStreamUrl||'',em=r.embedUrl||'';
      if(!tg&&!em){b.textContent='\u26A0 No stream \u2014 dobara dabao';return;}
      b.textContent='\u25B6 Playing\u2026';
      var o=rpOverlay();
      if(tg){
       var v=document.createElement('video');
       v.src=tg;v.controls=true;v.autoplay=true;v.playsInline=true;
       v.style.cssText='position:absolute;inset:0;width:100%;height:100%;background:#000';
       o.w.appendChild(v);
      }else{
       var f=document.createElement('iframe');
       f.src=em;f.allow='autoplay; fullscreen; encrypted-media';
       f.setAttribute('allowfullscreen','true');
       f.style.cssText='position:absolute;inset:0;width:100%;height:100%;border:0';
       o.w.appendChild(f);
      }
      o.w.appendChild(o.cls);
      (document.body||document.documentElement).appendChild(o.w);
     }catch(e){b.textContent='\u26A0 Error \u2014 dobara dabao';}
    };
    x.onerror=function(){b.textContent='\u26A0 Network \u2014 dobara dabao';};
    x.send();
   }catch(e){}
  };
  host.appendChild(b);
 }catch(e){}
}
function dishaPdf(){
 try{
  if(!/studyhelperdoc\.vercel\.app/i.test(location.hostname))return;
  var m=location.pathname.match(/^\/pdf\/([^\/]+)\/([^\/?#]+)/);
  if(!m)return;
  if(document.getElementById('__rpapDishPdf'))return;
  var host=document.querySelector('main')||document.body;
  var b=document.createElement('button');
  b.id='__rpapDishPdf';
  b.textContent='\uD83D\uDCC4 OPEN PDF (AutoPass \u2014 download + open)';
  b.style.cssText='width:100%;background:linear-gradient(90deg,#c62828,#e50914);color:#fff;font:bold 15px sans-serif;padding:13px;border:0;border-radius:12px;cursor:pointer;margin-top:8px';
  b.onclick=function(){
   try{
    b.textContent='\u23F3 PDF fetch\u2026';
    var x=new XMLHttpRequest();
    x.open('GET','/api/pdf/'+encodeURIComponent(m[1])+'/'+encodeURIComponent(m[2]),true);
    x.onload=function(){
     try{
      var r=JSON.parse(x.responseText);
      if(!r||!r.ok){b.textContent='\u26A0 Fail \u2014 dobara dabao';return;}
      var u=r.streamUrl||'';var du=r.directStreamUrl||'';
      if(!u&&!du){b.textContent='\u26A0 No pdf-url';return;}
      b.textContent='\u2B07 Downloading PDF\u2026';
      location.href=u||du; /* DownloadListener pakad lega */
      setTimeout(function(){try{b.textContent='\uD83D\uDCC4 OPEN PDF (AutoPass)';}catch(e){}},3000);
     }catch(e){b.textContent='\u26A0 Error \u2014 dobara dabao';}
    };
    x.onerror=function(){b.textContent='\u26A0 Network \u2014 dobara dabao';};
    x.send();
   }catch(e){}
  };
  host.insertBefore(b,host.firstChild);
 }catch(e){}
}


/* ===== v25: POPUP-WALL KILLER (site-ka "Popup / Channel Link Blocked" anti-mod wall auto-bypass) ===== */
function wallKill(){
 try{
  var bt=(document.body?document.body.innerText:'')||'';
  if(!/Popup\s*\/?\s*Channel\s*Link\s*Blocked|Unauthorized WhatsApp Link|official popup ya|bina ye app nahi chalega/i.test(bt))return;
  var bs=document.querySelectorAll('button,a,[role=button]');
  for(var i=0;i<bs.length;i++){var t=(bs[i].innerText||'').trim();
   if(/join whatsapp|unlock|continue|proceed|open app/i.test(t)){try{bs[i].click();}catch(e){}}}
  if(sessionStorage.getItem('__rpapWall')){ /* 2nd-pass: wall-overlay ko hi uda do */
   try{
    var divs=document.querySelectorAll('div');
    for(var j=0;j<divs.length;j++){
     var el=divs[j],z=0;try{z=parseInt(getComputedStyle(el).zIndex)||0;}catch(e){}
     if(z>500&&el.innerText&&/Blocked/i.test(el.innerText)&&el.id.indexOf('__rpap')!==0&&!el.querySelector('video,iframe')){try{el.remove();}catch(e){}}
    }
   }catch(e){}
  }
  try{sessionStorage.setItem('__rpapWall','1');}catch(e){}
 }catch(e){}
}


/* ===== v26: UNIVERSAL KEY-SYSTEM AUTO-KILL (koi-sa-bhi server/URL — arolinks/vplinks/koi-bhi —
   key-gate AUTO-DETECT ho ke hat jata hai → seed-all + fill/submit-cycle → BATCHES-page-jump) ===== */
function keyish(s){return /key|token|code|pass|licen|serial|activ|unlock|access/i.test(s||'');}
function keyGateScan(){
 try{
  var d=document;
  var inp=d.querySelector('input[name],input[id],input[placeholder]');
  if(!inp)return;
  var ctxs=(inp.name||'')+' '+(inp.id||'')+' '+(inp.placeholder||'')+' '+(d.title||'');
  try{var cf=inp.closest&&inp.closest('form,div');if(cf)ctxs+=' '+String(cf.innerText||'').slice(0,300);}catch(e){}
  if(!/enter.*(key|code|token)|key.*(enter|verify|apply)|activat|licen[cs]e|passcode|access.*(code|key)|unlock/i.test(ctxs))return;
  if(inp.__rpK)return;inp.__rpK=1;
  var sk='__rpKG_'+location.hostname;
  if(sessionStorage.getItem(sk))return;
  /* 1) SAB key-ish storage-slots seed (koi-bhi-server ke koi-bhi key-names) */
  try{for(var i=0;i<localStorage.length;i++){var kn=localStorage.key(i);if(keyish(kn)&&!localStorage.getItem(kn)){try{localStorage.setItem(kn,keys()[0]);}catch(e){}}}}catch(e){}
  try{for(var j=0;j<sessionStorage.length;j++){var sn=sessionStorage.key(j);if(keyish(sn)&&!sessionStorage.getItem(sn)){try{sessionStorage.setItem(sn,keys()[0]);}catch(e){}}}}catch(e){}
  /* 2) fill + submit cycle (keys() + boss-perm + site-admin-codes) */
  var tries=keys().concat(['RP_BOSS_PERMANENT','gyanboss2026','admin2026']);
  var ti=0;
  (function attempt(){
   try{
    setVal(inp,tries[ti%tries.length]);
    var btns=d.querySelectorAll('button,input[type=submit],a[role=button],[role=button]');
    for(var b=0;b<btns.length;b++){var t=(btns[b].innerText||btns[b].value||'');
     if(/verify|apply|submit|unlock|activat|continue|get.?link|proceed/i.test(t)){try{btns[b].click();}catch(e){}break;}}
    ti++;
    if(ti<tries.length)setTimeout(attempt,900);
   }catch(e){}
  })();
  try{sessionStorage.setItem(sk,'1');}catch(e){}
  /* 3) BATCHES-JUMP: 2.6s baad bhi gate dikh raha → seedha batches/courses-page */
  setTimeout(function(){
   try{
    var bt=(d.body?d.body.innerText:'')||'';
    if(!/enter.*(key|code)|verify.*key|activat|passcode|unlock/i.test(bt))return;
    var ln=d.querySelectorAll('a[href]');
    for(var l=0;l<ln.length;l++){var h=ln[l].getAttribute('href')||'';
     if(/batches?|courses?|dashboard|my.?batch/i.test(h)){try{location.href=ln[l].href;return;}catch(e){}}}
    var base=location.origin;
    var cands=['/batches','/my-batches','/courses','/dashboard','#/batches','/'];
    for(var c2=0;c2<cands.length;c2++){try{location.href=base+cands[c2];return;}catch(e){}}
   }catch(e){}
  },2600);
 }catch(e){}
}

var last=0,lastx=0;
function scan(){
 keyGateScan();
 wallKill();
 dishaLogin();
 dishaPlay();
 dishaPdf();
 gyanUnlock();
 myWatch();
 tbDirectPlay();
 deadGate();
 deadGate();var n=Date.now();if(n-last<350)return;last=n;
 var _dw=false;try{var _pk=window.name||'';_dw=_pk.indexOf('RPP|')===0&&location.href.split('#')[0].indexOf(decodeURIComponent(_pk.split('|')[1]))!==0;}catch(e){}
 if(!_dw){popups();captureURLTok();fillForms();freePass();autoLogin();chainSolve();stuckGen();captureCode();gateBypass();}
 stepFlow();
 if(n-lastx>2500){lastx=n;seedExpiry();smStudy();}}
setTimeout(function(){
 try{seedExpiry();var ks=keys(),ch=false;
  for(var i=0;i<LS.length;i++){var k=LS[i];
   if(localStorage.getItem(k)===null||localStorage.getItem(k)===''){localStorage.setItem(k,ks[i%4]);ch=true;}}
  for(var j=0;j<SS.length;j++){var k2=SS[j];
   if(sessionStorage.getItem(k2)===null||sessionStorage.getItem(k2)===''){sessionStorage.setItem(k2,ks[j%4]);ch=true;}}
  document.cookie='expected_app_key='+ks[0]+';path=/;max-age=604800';
  document.cookie='access_key='+ks[1]+';path=/;max-age=604800';
  if(ch)location.reload();
 }catch(e){}},500);
scan();
try{new MutationObserver(scan).observe(document.documentElement,{childList:true,subtree:true});}catch(e){}
setInterval(scan,1000);
})();
