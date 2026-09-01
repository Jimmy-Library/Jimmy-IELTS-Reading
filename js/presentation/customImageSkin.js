/** Local custom image, palette, font and shape settings. */
(function (global) {
    'use strict';
    if (global.__READING_ORIGINAL_UI__ || /reading-practice-unified\.html$/i.test((global.location && global.location.pathname) || '')) return;

    var root = document.documentElement;
    var ID = 'custom';
    var SETTINGS_KEY = 'custom_image_skin_settings_v1';
    var PROFILES_KEY = 'custom_image_skin_profiles_v1';
    var ACTIVE_PROFILE_KEY = 'custom_image_skin_active_profile_v1';
    var THUMB_KEY = 'custom_image_skin_thumb_v1';
    var DB = 'jimmy_image_skin_cache';
    var STORE = 'assets';
    var IMAGE_KEY = 'custom-background';
    var objectUrl = '';
    var currentBlob = null;
    var profilePreviewUrls = [];
    var saveTimer = 0;
    var backgroundTimer = 0;
    var recommendation = null;
    var defaults = { name:'我的自定义', accent:'#6d5bd0', base:'#eeeafd', surface:'#fbfaff', ink:'#292345', scale:100, sizeBasis:'width', positionX:50, positionY:50, opacity:48, font:'rounded', shape:'soft' };
    var fonts = {
        rounded:'"Avenir Next Rounded", "Nunito", "Arial Rounded MT Bold", "PingFang SC", "Microsoft YaHei UI", system-ui, sans-serif',
        modern:'Inter, "SF Pro Display", "Segoe UI", "PingFang SC", "Microsoft YaHei UI", system-ui, sans-serif',
        literary:'Georgia, "Noto Serif SC", "Songti SC", SimSun, serif',
        clean:'Arial, Helvetica, "PingFang SC", "Microsoft YaHei UI", sans-serif',
        playful:'"Comic Sans MS", "YouYuan", "Yuanti SC", "Microsoft YaHei UI", cursive'
    };
    var shapes = {
        soft:{button:'14px',card:'24px'}, pill:{button:'999px',card:'34px'},
        crisp:{button:'6px',card:'12px'}, playful:{button:'6px 20px 6px 20px',card:'12px 32px 12px 32px'}
    };
    var customProperties = ['--skin-accent','--skin-accent-strong','--skin-accent-soft','--skin-ink','--skin-base','--skin-panel-rgb','--skin-panel-alt-rgb','--skin-image','--skin-image-opacity','--skin-image-position','--skin-image-size','--skin-image-filter','--skin-youth-font','--skin-button-radius','--skin-card-radius'];

    function clamp(value,min,max){ value=Number(value); return Number.isFinite(value)?Math.min(max,Math.max(min,value)):min; }
    function hex(value,fallback){ return /^#[0-9a-f]{6}$/i.test(String(value||''))?String(value).toLowerCase():fallback; }
    function rgb(value){ var v=hex(value,'#000000').slice(1); return [parseInt(v.slice(0,2),16),parseInt(v.slice(2,4),16),parseInt(v.slice(4,6),16)]; }
    function rgbHex(value){return '#'+value.map(function(channel){return clamp(Math.round(channel),0,255).toString(16).padStart(2,'0');}).join('');}
    function mix(a,b,weight){ a=rgb(a);b=rgb(b);return '#'+a.map(function(v,i){return Math.round(v*(1-weight)+b[i]*weight).toString(16).padStart(2,'0');}).join(''); }
    function hsl(value){var c=rgb(value).map(function(v){return v/255;}),max=Math.max.apply(null,c),min=Math.min.apply(null,c),delta=max-min,hue=0,light=(max+min)/2,saturation=delta===0?0:delta/(1-Math.abs(2*light-1));if(delta){if(max===c[0])hue=60*(((c[1]-c[2])/delta)%6);else if(max===c[1])hue=60*((c[2]-c[0])/delta+2);else hue=60*((c[0]-c[1])/delta+4);}return {h:(hue+360)%360,s:saturation,l:light};}
    function normalise(raw){ raw=raw||{}; return {
        name:String(raw.name||defaults.name).trim().slice(0,18)||defaults.name,
        accent:hex(raw.accent,defaults.accent), base:hex(raw.base,defaults.base), surface:hex(raw.surface,defaults.surface), ink:hex(raw.ink,defaults.ink),
        scale:clamp(raw.scale==null?defaults.scale:raw.scale,5,500), sizeBasis:raw.sizeBasis==='height'?'height':'width', positionX:clamp(raw.positionX==null?50:raw.positionX,0,100), positionY:clamp(raw.positionY==null?50:raw.positionY,0,100), opacity:clamp(raw.opacity==null?48:raw.opacity,15,85),
        font:fonts[raw.font]?raw.font:defaults.font, shape:shapes[raw.shape]?raw.shape:defaults.shape
    }; }
    function readSettings(){ try{return normalise(JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}'));}catch(_){return normalise();} }
    var settings=readSettings();
    function readProfiles(){try{var value=JSON.parse(localStorage.getItem(PROFILES_KEY)||'[]');return Array.isArray(value)?value.filter(function(item){return item&&item.id;}).map(function(item){return {id:String(item.id),name:String(item.name||'已保存皮肤').slice(0,18),settings:normalise(item.settings||{})};}):[];}catch(_){return [];}}
    var profiles=readProfiles();
    var activeProfileId='';
    try{activeProfileId=localStorage.getItem(ACTIVE_PROFILE_KEY)||'';}catch(_){}
    if(activeProfileId&&!profiles.some(function(profile){return profile.id===activeProfileId;}))activeProfileId='';
    function persistNow(){try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings));}catch(_){} }
    function persistProfiles(){try{localStorage.setItem(PROFILES_KEY,JSON.stringify(profiles));if(activeProfileId)localStorage.setItem(ACTIVE_PROFILE_KEY,activeProfileId);else localStorage.removeItem(ACTIVE_PROFILE_KEY);}catch(_){} }
    function save(){ clearTimeout(saveTimer);saveTimer=setTimeout(function(){try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings));}catch(_){}},80); }
    function refreshBackground(){ clearTimeout(backgroundTimer);backgroundTimer=setTimeout(function(){if(root.getAttribute('data-image-skin')===ID&&typeof global.switchBgTheme==='function')global.switchBgTheme(ID);},140); }
    function imageSource(){ if(objectUrl)return objectUrl;try{return localStorage.getItem(THUMB_KEY)||'';}catch(_){return '';} }
    function imageSize(value){var source=value||settings;return source.sizeBasis==='height'?'auto '+source.scale+'%':source.scale+'% auto';}
    function clearAppearance(){ customProperties.forEach(function(name){root.style.removeProperty(name);}); }
    function applyAppearance(){
        if(root.getAttribute('data-image-skin')!==ID)return;
        var strong=mix(settings.accent,'#101322',.46), soft=rgb(settings.accent), alt=mix(settings.surface,settings.base,.38), shape=shapes[settings.shape], source=imageSource();
        var values={
            '--skin-accent':settings.accent,'--skin-accent-strong':strong,'--skin-accent-soft':'rgba('+soft.join(', ')+', .20)','--skin-ink':settings.ink,'--skin-base':settings.base,
            '--skin-panel-rgb':rgb(settings.surface).join(', '),'--skin-panel-alt-rgb':rgb(alt).join(', '),'--skin-image':source?'url("'+source.replace(/"/g,'%22')+'")':'linear-gradient(145deg,'+settings.surface+','+settings.base+')',
            '--skin-image-opacity':String(settings.opacity/100),'--skin-image-position':settings.positionX+'% '+settings.positionY+'%','--skin-image-size':imageSize(),'--skin-image-filter':'saturate(1.02) contrast(1.01)',
            '--skin-youth-font':fonts[settings.font],'--skin-button-radius':shape.button,'--skin-card-radius':shape.card
        };
        Object.keys(values).forEach(function(name){root.style.setProperty(name,values[name]);});updatePreview();
    }
    function dbOpen(){return new Promise(function(resolve,reject){if(!global.indexedDB)return reject();var req=indexedDB.open(DB,1);req.onupgradeneeded=function(){if(!req.result.objectStoreNames.contains(STORE))req.result.createObjectStore(STORE);};req.onsuccess=function(){resolve(req.result);};req.onerror=function(){reject(req.error);};});}
    function dbPut(blob,key){return dbOpen().then(function(db){return new Promise(function(resolve,reject){var tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(blob,key||IMAGE_KEY);tx.oncomplete=function(){db.close();resolve();};tx.onerror=function(){db.close();reject(tx.error);};});});}
    function dbGet(key){return dbOpen().then(function(db){return new Promise(function(resolve,reject){var req=db.transaction(STORE).objectStore(STORE).get(key||IMAGE_KEY);req.onsuccess=function(){db.close();resolve(req.result||null);};req.onerror=function(){db.close();reject(req.error);};});});}
    function profileImageKey(id){return 'custom-profile-image:'+id;}
    function uniqueName(wanted,excludeId){var base=String(wanted||defaults.name).trim().slice(0,18)||defaults.name,name=base,index=2;while(profiles.some(function(profile){return profile.id!==excludeId&&profile.name===name;})){var suffix=' '+index++;name=base.slice(0,18-suffix.length)+suffix;}return name;}
    function syncProfileCardState(){document.querySelectorAll('[data-custom-profile-card]').forEach(function(card){var active=card.dataset.customProfileCard===activeProfileId;card.classList.toggle('is-active',active);card.setAttribute('aria-pressed',active?'true':'false');});}
    function syncProfileSelector(){var select=document.querySelector('[data-custom-profile]'),update=document.querySelector('[data-action="update-profile"]');if(!select)return;select.innerHTML='<option value="">当前草稿（未另存）</option>';profiles.forEach(function(profile){var option=document.createElement('option');option.value=profile.id;option.textContent=profile.name;select.appendChild(option);});select.value=activeProfileId;if(update)update.disabled=!activeProfileId;syncProfileCardState();}
    function buildProfileCard(profile){
        var button=document.createElement('button');button.type='button';button.className='skin-option custom-profile-option';button.dataset.skin='custom-profile-'+profile.id;button.dataset.customProfileCard=profile.id;button.setAttribute('aria-label','应用并编辑自定义皮肤：'+profile.name);
        button.style.setProperty('--preview-position',profile.settings.positionX+'% '+profile.settings.positionY+'%');button.style.setProperty('--preview-size',imageSize(profile.settings));button.style.setProperty('--preview-opacity',String(profile.settings.opacity/100));button.style.setProperty('--preview-fallback','linear-gradient(145deg,'+profile.settings.surface+','+profile.settings.accent+')');
        var copy=document.createElement('span');copy.className='skin-option__copy';var text=document.createElement('span'),name=document.createElement('span'),note=document.createElement('span'),check=document.createElement('span');name.className='skin-option__name';name.textContent=profile.name;note.className='skin-option__note';note.textContent='已保存 · 点击编辑';check.className='skin-option__check';check.innerHTML='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m5 12 4 4L19 6"/></svg>';text.appendChild(name);text.appendChild(note);copy.appendChild(text);copy.appendChild(check);button.appendChild(copy);
        button.addEventListener('click',function(){selectProfile(profile.id);var editor=document.querySelector('.custom-skin-editor');if(editor)editor.open=true;});
        dbGet(profileImageKey(profile.id)).then(function(blob){if(!blob||!button.isConnected)return;var url=URL.createObjectURL(blob);profilePreviewUrls.push(url);button.style.setProperty('--preview-image','url("'+url+'")');}).catch(function(){});
        return button;
    }
    function renderProfileCards(){profilePreviewUrls.forEach(function(url){URL.revokeObjectURL(url);});profilePreviewUrls=[];document.querySelectorAll('[data-custom-profile-card]').forEach(function(card){card.remove();});var anchor=document.querySelector('.skin-option[data-skin="custom"]');if(!anchor)return;profiles.forEach(function(profile){var card=buildProfileCard(profile);anchor.insertAdjacentElement('afterend',card);anchor=card;});syncProfileCardState();}
    function clearImage(){if(objectUrl)URL.revokeObjectURL(objectUrl);objectUrl='';currentBlob=null;try{localStorage.removeItem(THUMB_KEY);}catch(_){}applyAppearance();updatePreview();}
    function selectProfile(id){var profile=profiles.find(function(item){return item.id===id;});activeProfileId=profile?id:'';persistProfiles();if(!profile){syncProfileSelector();return status('已切换到当前草稿。');}settings=normalise(profile.settings);persistNow();syncEditor();clearImage();if(global.ImageSkins&&global.ImageSkins.current()!==ID)global.ImageSkins.apply(ID);syncProfileSelector();status('正在载入“'+profile.name+'”…');dbGet(profileImageKey(profile.id)).then(function(blob){if(blob){useBlob(blob);dbPut(blob).catch(function(){});inspectImage(blob).then(function(result){if(result.thumbnail){try{localStorage.setItem(THUMB_KEY,result.thumbnail);}catch(_){}}});}applyAppearance();syncProfileCardState();status('已载入“'+profile.name+'”，可以修改后点击更新。');}).catch(function(){status('已载入设置，但图片读取失败。',true);});}
    function saveAsProfile(){settings=normalise(settings);settings.name=uniqueName(settings.name);var id='skin-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,6),profile={id:id,name:settings.name,settings:normalise(settings)};profiles.push(profile);activeProfileId=id;persistNow();persistProfiles();syncEditor();syncProfileSelector();updatePreview();var task=currentBlob?dbPut(currentBlob,profileImageKey(id)):Promise.resolve();task.then(function(){renderProfileCards();status('已另存为新皮肤“'+profile.name+'”，并生成独立卡片。');}).catch(function(){renderProfileCards();status('设置和卡片已保存，但图片副本保存失败。',true);});}
    function updateProfile(){var profile=profiles.find(function(item){return item.id===activeProfileId;});if(!profile)return status('请先从“已保存皮肤”中选择一项。',true);settings=normalise(settings);settings.name=uniqueName(settings.name,profile.id);profile.name=settings.name;profile.settings=normalise(settings);persistNow();persistProfiles();syncEditor();syncProfileSelector();updatePreview();var task=currentBlob?dbPut(currentBlob,profileImageKey(profile.id)):Promise.resolve();task.then(function(){renderProfileCards();status('已更新保存过的皮肤“'+profile.name+'”及其卡片。');}).catch(function(){renderProfileCards();status('设置和卡片已更新，但图片更新失败。',true);});}
    function styleName(color,averageLight){var tone=hsl(color);if(tone.s<.16)return averageLight<.42?'深灰中性色 · 沉静高级':'柔雾中性色 · 简约克制';var family=tone.h<18||tone.h>=345?'珊瑚红调':tone.h<52?'暖金橙调':tone.h<78?'明亮黄调':tone.h<158?'自然绿调':tone.h<202?'清透青调':tone.h<258?'宁静蓝调':tone.h<315?'梦幻紫调':'柔美粉调';return family+' · '+(averageLight<.38?'深邃沉浸':tone.s>.58?'鲜活元气':'柔和耐看');}
    function analyseCanvas(canvas){
        try{
            var ctx=canvas.getContext('2d',{willReadFrequently:true}),data=ctx.getImageData(0,0,canvas.width,canvas.height).data,bins={},sum=[0,0,0],count=0,step=Math.max(4,4*Math.ceil((canvas.width*canvas.height)/7000));
            for(var i=0;i<data.length;i+=step){if(data[i+3]<160)continue;var r=data[i],g=data[i+1],b=data[i+2],key=(r>>4)+'-'+(g>>4)+'-'+(b>>4),entry=bins[key]||(bins[key]={count:0,sum:[0,0,0]});entry.count++;entry.sum[0]+=r;entry.sum[1]+=g;entry.sum[2]+=b;sum[0]+=r;sum[1]+=g;sum[2]+=b;count++;}
            var average=count?sum.map(function(v){return v/count;}):[109,91,208],best=null,bestScore=-1;
            Object.keys(bins).forEach(function(key){var item=bins[key],color=rgbHex(item.sum.map(function(v){return v/item.count;})),tone=hsl(color);if(tone.l<.08||tone.l>.94)return;var score=item.count*(.34+tone.s)*(1.22-Math.abs(tone.l-.52));if(score>bestScore){bestScore=score;best=color;}});
            best=best||rgbHex(average);var avgLight=hsl(rgbHex(average)).l;
            return {style:styleName(best,avgLight),accent:best,base:mix(best,'#ffffff',avgLight<.35?.78:.84),surface:mix(best,'#ffffff',.94),ink:mix(best,'#080b16',.72)};
        }catch(_){return null;}
    }
    function inspectImage(file){return new Promise(function(resolve){var url=URL.createObjectURL(file),img=new Image();img.onload=function(){var ratio=Math.min(1,720/Math.max(img.naturalWidth,img.naturalHeight)),canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(img.naturalWidth*ratio));canvas.height=Math.max(1,Math.round(img.naturalHeight*ratio));canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);URL.revokeObjectURL(url);var thumb='';try{thumb=canvas.toDataURL('image/jpeg',.76);}catch(_){}resolve({thumbnail:thumb,recommendation:analyseCanvas(canvas)});};img.onerror=function(){URL.revokeObjectURL(url);resolve({thumbnail:'',recommendation:null});};img.src=url;});}
    function status(message,error){var el=document.querySelector('.custom-skin-status');if(el){el.textContent=message;el.classList.toggle('is-error',!!error);}}
    function useBlob(blob){if(!blob)return;currentBlob=blob;if(objectUrl)URL.revokeObjectURL(objectUrl);objectUrl=URL.createObjectURL(blob);applyAppearance();updatePreview();}
    function upload(file){
        if(!file||!/^image\//i.test(file.type))return status('请选择图片文件。',true);
        if(file.size>30*1024*1024)return status('图片请控制在 30 MB 以内。',true);
        status('正在保存并识别图片色彩…');Promise.all([dbPut(file),inspectImage(file)]).then(function(result){var inspected=result[1];if(inspected.thumbnail){try{localStorage.setItem(THUMB_KEY,inspected.thumbnail);}catch(_){}}recommendation=inspected.recommendation;showRecommendation();useBlob(file);if(global.ImageSkins)global.ImageSkins.apply(ID);status(recommendation?'图片已保存，并生成了推荐色系。':'图片已保存在本机，刷新后仍会应用。');}).catch(function(){status('保存失败，请换一张较小图片重试。',true);});
    }
    function showRecommendation(){var box=document.querySelector('.custom-skin-recommendation');if(!box)return;box.hidden=!recommendation;if(!recommendation)return;box.querySelector('b').textContent=recommendation.style;['accent','base','surface','ink'].forEach(function(key,index){box.querySelectorAll('i')[index].style.background=recommendation[key];});}
    function updatePreview(){
        var source=imageSource(),image=source?'url("'+source.replace(/"/g,'%22')+'")':'linear-gradient(145deg,'+settings.surface+','+settings.accent+')',option=document.querySelector('.skin-option[data-skin="custom"]');
        if(option){option.style.setProperty('--preview-image',source?'url("'+source.replace(/"/g,'%22')+'")':'none');option.style.setProperty('--preview-position',settings.positionX+'% '+settings.positionY+'%');option.style.setProperty('--preview-size',imageSize());option.style.setProperty('--preview-opacity',String(settings.opacity/100));option.style.setProperty('--preview-fallback','linear-gradient(145deg,'+settings.surface+','+settings.accent+')');var name=option.querySelector('.skin-option__name');if(name)name.textContent=settings.name;}
        var live=document.querySelector('.custom-live-preview');if(live){live.style.setProperty('--live-image',image);live.style.setProperty('--live-position',settings.positionX+'% '+settings.positionY+'%');live.style.setProperty('--live-size',imageSize());live.style.setProperty('--live-opacity',String(settings.opacity/100));live.style.setProperty('--live-surface',settings.surface);live.style.setProperty('--live-accent',settings.accent);live.style.setProperty('--live-ink',settings.ink);live.style.setProperty('--live-font',fonts[settings.font]);live.style.setProperty('--live-button-radius',shapes[settings.shape].button);live.style.setProperty('--live-card-radius',shapes[settings.shape].card);live.querySelector('b').textContent=settings.name;}
    }
    function field(label,control){return '<label class="custom-skin-field"><span>'+label+'</span>'+control+'</label>';}
    function markup(){return '<details class="custom-skin-editor"><summary><span><b>自定义工作台</b><small>所有设置仅保存在这台设备</small></span><i>⌄</i></summary><div class="custom-skin-editor__body">'+
        '<label class="custom-profile-picker"><span>已保存皮肤</span><select data-custom-profile><option value="">当前草稿（未另存）</option></select></label>'+
        '<div class="custom-skin-name">'+field('皮肤名称','<input data-setting="name" type="text" maxlength="18" placeholder="给皮肤起个名字">')+'</div>'+
        '<div class="custom-live-preview"><span class="custom-live-preview__art"></span><span class="custom-live-preview__content"><b>我的自定义</b><small>实时预览 · LIVE</small><em>开始练习</em></span></div>'+
        '<label class="custom-skin-upload"><input type="file" accept="image/*"><span>＋ 上传背景图片</span></label><div class="custom-skin-status" role="status">支持 JPG、PNG、WebP，最大 30 MB。</div>'+
        '<div class="custom-skin-recommendation" hidden><span><small>图片智能识别</small><b>推荐色彩风格</b></span><span class="custom-skin-swatches"><i></i><i></i><i></i><i></i></span><button type="button" data-action="recommend">应用推荐色系</button></div>'+
        '<section><h4>图片布局</h4><div class="custom-skin-controls">'+field('大小 <output data-output="scale"></output>','<input data-setting="scale" type="range" min="5" max="500" step="1">')+field('缩放基准','<select data-setting="sizeBasis"><option value="width">按宽度等比</option><option value="height">按高度等比</option></select>')+field('横向位置 <output data-output="positionX"></output>','<input data-setting="positionX" type="range" min="0" max="100">')+field('纵向位置 <output data-output="positionY"></output>','<input data-setting="positionY" type="range" min="0" max="100">')+field('透明度 <output data-output="opacity"></output>','<input data-setting="opacity" type="range" min="15" max="85">')+'</div></section>'+
        '<section><h4>专属调色板</h4><div class="custom-skin-palette">'+field('主题色','<input data-setting="accent" type="color">')+field('底色','<input data-setting="base" type="color">')+field('卡片色','<input data-setting="surface" type="color">')+field('文字色','<input data-setting="ink" type="color">')+'</div></section>'+
        '<section class="custom-skin-two"><h4>字体与形状</h4>'+field('字体风格','<select data-setting="font"><option value="rounded">青春圆体</option><option value="modern">现代简约</option><option value="literary">文艺衬线</option><option value="clean">清晰无衬线</option><option value="playful">俏皮手写感</option></select>')+field('UI 形状','<select data-setting="shape"><option value="soft">柔和圆角</option><option value="pill">胶囊圆润</option><option value="crisp">利落方正</option><option value="playful">灵动不对称</option></select>')+'</section>'+
        '<div class="custom-skin-actions"><button type="button" data-action="reset">恢复默认</button><button type="button" data-action="save-profile">另存为新皮肤</button><button type="button" data-action="update-profile">更新所选皮肤</button><button type="button" class="primary" data-action="apply">应用皮肤</button></div></div></details>';}
    function syncEditor(){var editor=document.querySelector('.custom-skin-editor');if(!editor)return;Object.keys(settings).forEach(function(key){var input=editor.querySelector('[data-setting="'+key+'"]'),output=editor.querySelector('[data-output="'+key+'"]');if(input)input.value=settings[key];if(output)output.textContent=settings[key]+'%';});}
    function install(){
        var grid=document.querySelector('#image-skin-panel .skin-grid');if(!grid||document.querySelector('.custom-skin-editor'))return;grid.insertAdjacentHTML('afterend',markup());var editor=document.querySelector('.custom-skin-editor');syncEditor();syncProfileSelector();renderProfileCards();updatePreview();showRecommendation();
        editor.querySelector('[data-custom-profile]').addEventListener('change',function(){selectProfile(this.value);});
        editor.querySelector('input[type="file"]').addEventListener('change',function(){upload(this.files&&this.files[0]);this.value='';});
        editor.querySelectorAll('[data-setting]').forEach(function(input){input.addEventListener('input',function(){settings[input.dataset.setting]=input.type==='range'?Number(input.value):input.value;settings=normalise(settings);syncEditor();save();if(global.ImageSkins&&global.ImageSkins.current()!==ID)global.ImageSkins.apply(ID);else applyAppearance();if(input.type==='color')refreshBackground();});});
        editor.querySelector('[data-action="reset"]').addEventListener('click',function(){settings=normalise(defaults);save();syncEditor();applyAppearance();refreshBackground();status('设置已恢复默认，上传的图片仍保留。');});
        editor.querySelector('[data-action="save-profile"]').addEventListener('click',saveAsProfile);
        editor.querySelector('[data-action="update-profile"]').addEventListener('click',updateProfile);
        editor.querySelector('[data-action="recommend"]').addEventListener('click',function(){if(!recommendation)return;settings.accent=recommendation.accent;settings.base=recommendation.base;settings.surface=recommendation.surface;settings.ink=recommendation.ink;settings=normalise(settings);save();syncEditor();applyAppearance();refreshBackground();status('已应用图片推荐色系：'+recommendation.style);});
        editor.querySelector('[data-action="apply"]').addEventListener('click',function(){if(global.ImageSkins)global.ImageSkins.apply(ID);refreshBackground();editor.open=true;status('自定义皮肤已应用并自动保存。');});
        var option=document.querySelector('.skin-option[data-skin="custom"]');if(option)option.addEventListener('click',function(){editor.open=true;});
    }
    function skinChanged(event){var id=event&&event.detail&&event.detail.id;if(id===ID){applyAppearance();refreshBackground();var editor=document.querySelector('.custom-skin-editor');if(editor)editor.open=true;}else clearAppearance();}
    function init(){install();document.addEventListener('imageskinchange',skinChanged);if(root.getAttribute('data-image-skin')===ID)applyAppearance();else clearAppearance();dbGet().then(function(blob){if(blob)useBlob(blob);}).catch(function(){});}
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
    global.CustomImageSkin={apply:applyAppearance,settings:function(){return Object.assign({},settings);}};
})(typeof window!=='undefined'?window:this);
