const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BaseVideo.stories-CJXc8npQ.js","./BaseVideo-BCRQAMYp.js","./jsx-runtime-DWbWqHZ-.js","./index-l2PZgWEW.js","./index-B_cAd6g5.js","./BaseVideo-BkuQ4CKf.css","./demo-Fxo811Zp.js","./Button.stories-BZtC-Mqr.js","./Button-DKsU6LIg.js","./FlexBox-B1-whqXL.js","./assertThisInitialized-Cfdbw4yV.js","./index-BtTJd_qj.js","./objectWithoutPropertiesLoose-CAYKN5F1.js","./isNativeReflectConstruct-gwnEYaHE.js","./FlexBox-CAyoRKk0.css","./Button-CkNwNunr.css","./Popover.stories-qh0kfHXn.js","./Popover-Dh36k8FL.js","./wrapNativeSuper-DYpslqgs.js","./Scene.stories-BRGk_mbf.js","./ThreeVerticalDotsIcon-Bu-o4cGC.js","./Scene-G_uEvB6u.css","./ScenePicker.stories-vnUNWrCA.js","./AddSceneIcon-C87gImTy.js","./Settings.stories-BCLzp2yH.js","./DropdownCollapseIcon-BvMKT3ag.js","./PaddingBox-5Z2Dut0o.js","./PaddingBox-D7JXdE-3.css","./CheckMark-pSO3gK1y.js","./Span-BESuZiTl.js","./Span-DzsBNUNl.css","./Settings-BBgt6dWN.css","./Video.stories-KtwpwJUa.js","./PlayIcon-D7z0okfG.js","./FullScreenIcon-9UtNVhJ6.js","./FullScreenQuitIcon-CAhW7uSq.js","./PauseIcon-BiodG7g_.js","./PIPIcon-uzF21xgW.js","./DownloadIcon-DKm0F-Zg.js","./useVideoContainerSettings-Rlb4ApIP.js","./VolumeLoudIcon-Ck1GtR61.js","./VolumeMuteIcon-CkouZpNU.js","./VolumeSmallIcon-DDanOA1I.js","./WarningIcon-BdzUs7TS.js","./Video-DEn-bCrL.css","./VideoRecorder.stories-Nk-H5sxT.js","./RecordingButton-CsMeXrWg.js","./StopRecordIcon-Ck4h_tsh.js","./RecordingButton-CS8uBB_c.css","./VideoRecorderButton-DbZG05gG.js","./VideoRecorderButton-BAJY9II-.css","./MicrophoneMutedIcon-C96_MmUd.js","./MicrophoneIcon-C4dd8OmY.js","./PhotoIcon-oyIR5Hsv.js","./ToolsIcon-nkm4hPjb.js","./useMessageContext-3Q3LaL_c.js","./const-BFbRbAgg.js","./VideoRecorder-CkbTh_1j.css","./RecordingButton.stories-CNS1s_DG.js","./VideoRecorderButton.stories-OEyJWFzR.js","./Icons-DUf1_nC4.js","./index-DbIxU3Ed.js","./MessageProvider-CYcPpp3E.js","./inheritsLoose-BqTeMkAP.js","./MessageProvider-B851mNMi.css","./Icons-w8mpyUri.css","./entry-preview-rxw2wRxA.js","./chunk-H6MOWX77-DTQOW814.js","./entry-preview-docs-Dxn09qU4.js","./index-BVoBHvaS.js","./index-DrFu-skq.js","./preview-BhhEZcNS.js","./index-D-8MO0q_.js","./preview-D77C14du.js","./preview-BWzBA1C2.js","./preview-CwOut4Xy.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const _ of o.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function m(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=m(r);fetch(r.href,o)}})();const R="modulepreload",f=function(e,i){return new URL(e,i).href},E={},t=function(i,m,a){let r=Promise.resolve();if(m&&m.length>0){const o=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),c=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));r=Promise.allSettled(m.map(s=>{if(s=f(s,a),s in E)return;E[s]=!0;const u=s.endsWith(".css"),O=u?'[rel="stylesheet"]':"";if(!!a)for(let p=o.length-1;p>=0;p--){const l=o[p];if(l.href===s&&(!u||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${O}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":R,u||(n.as="script"),n.crossOrigin="",n.href=s,c&&n.setAttribute("nonce",c),document.head.appendChild(n),u)return new Promise((p,l)=>{n.addEventListener("load",p),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})}))}return r.then(o=>{for(const _ of o||[]){if(_.status!=="rejected")continue;const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=_.reason,window.dispatchEvent(c),!c.defaultPrevented)throw _.reason}return i()})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:V}=__STORYBOOK_MODULE_PREVIEW_API__,d=T({page:"preview"});V.setChannel(d);window.__STORYBOOK_ADDONS_CHANNEL__=d;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=d);const L={"./src/components/BaseVideo/BaseVideo.stories.tsx":async()=>t(()=>import("./BaseVideo.stories-CJXc8npQ.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"./src/components/Button/Button.stories.tsx":async()=>t(()=>import("./Button.stories-BZtC-Mqr.js"),__vite__mapDeps([7,8,2,3,4,9,10,11,12,13,14,15]),import.meta.url),"./src/components/Popover/Popover.stories.tsx":async()=>t(()=>import("./Popover.stories-qh0kfHXn.js"),__vite__mapDeps([16,2,3,17,4,10,9,11,12,13,14,18,8,15]),import.meta.url),"./src/components/Scene/Scene.stories.tsx":async()=>t(()=>import("./Scene.stories-BRGk_mbf.js"),__vite__mapDeps([19,2,3,8,4,9,10,11,12,13,14,15,20,17,18,21]),import.meta.url),"./src/components/ScenePicker/ScenePicker.stories.tsx":async()=>t(()=>import("./ScenePicker.stories-vnUNWrCA.js"),__vite__mapDeps([22,2,3,8,4,9,10,11,12,13,14,15,23]),import.meta.url),"./src/components/Settings/Settings.stories.tsx":async()=>t(()=>import("./Settings.stories-BCLzp2yH.js"),__vite__mapDeps([24,2,3,9,4,10,11,12,13,14,25,26,27,28,29,30,31]),import.meta.url),"./src/components/Video/Video.stories.tsx":async()=>t(()=>import("./Video.stories-KtwpwJUa.js"),__vite__mapDeps([32,2,3,33,8,4,9,10,11,12,13,14,15,34,35,36,37,38,29,30,1,5,39,40,41,42,43,6,44]),import.meta.url),"./src/components/VideoRecorder/VideoRecorder.stories.tsx":async()=>t(()=>import("./VideoRecorder.stories-Nk-H5sxT.js"),__vite__mapDeps([45,2,3,1,4,5,46,47,48,9,10,11,12,13,14,39,49,50,36,33,51,52,53,54,17,18,8,15,55,56,29,30,57]),import.meta.url),"./src/components/VideoRecorder/components/RecordingButton/RecordingButton.stories.tsx":async()=>t(()=>import("./RecordingButton.stories-CNS1s_DG.js"),__vite__mapDeps([58,46,2,3,47,4,48]),import.meta.url),"./src/components/VideoRecorder/components/VideoRecorderButton/VideoRecorderButton.stories.tsx":async()=>t(()=>import("./VideoRecorderButton.stories-OEyJWFzR.js"),__vite__mapDeps([59,49,2,3,4,50,33,36,28]),import.meta.url),"./src/documentation/Icons.mdx":async()=>t(()=>import("./Icons-DUf1_nC4.js"),__vite__mapDeps([60,2,3,61,9,4,10,11,12,13,14,17,18,55,56,62,26,27,63,64,8,15,65]),import.meta.url)};async function P(e){return L[e]()}const{composeConfigs:I,PreviewWeb:y,ClientApi:A}=__STORYBOOK_MODULE_PREVIEW_API__,S=async(e=[])=>{const i=await Promise.all([e.at(0)??t(()=>import("./entry-preview-rxw2wRxA.js"),__vite__mapDeps([66,67,3,11]),import.meta.url),e.at(1)??t(()=>import("./entry-preview-docs-Dxn09qU4.js"),__vite__mapDeps([68,67,69,3,70]),import.meta.url),e.at(2)??t(()=>import("./preview-BhhEZcNS.js"),__vite__mapDeps([71,72]),import.meta.url),e.at(3)??t(()=>import("./preview-bXpabVLv.js"),[],import.meta.url),e.at(4)??t(()=>import("./preview-aVwhiz9X.js"),[],import.meta.url),e.at(5)??t(()=>import("./preview-D77C14du.js"),__vite__mapDeps([73,70]),import.meta.url),e.at(6)??t(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),e.at(7)??t(()=>import("./preview-CFgKly6U.js"),[],import.meta.url),e.at(8)??t(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([74,70]),import.meta.url),e.at(9)??t(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),e.at(10)??t(()=>import("./preview-DVI_gYQC.js"),[],import.meta.url),e.at(11)??t(()=>import("./preview-CwOut4Xy.js"),__vite__mapDeps([75,2,3,62,56,26,4,27,12,10,63,11,64]),import.meta.url)]);return I(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new y(P,S);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
