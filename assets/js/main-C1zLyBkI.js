const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/css/index-DgLmcGpQ.css","assets/css/fonts-T_1IcmPu.css","assets/css/global-theme-DYsomogX.css","assets/js/i18n-CoXEeCyV.js","assets/js/i18n-core-CSZVPE1N.js","assets/js/react-core-CV8k_GRh.js","assets/js/i18n-detector-DpBHbpfO.js","assets/js/App-F156KX6S.js","assets/js/styled-components-CMIfAvVS.js","assets/js/vendor-misc-Bm4JrmXh.js","assets/js/react-helmet-C_ZFuiA7.js"])))=>i.map(i=>d[i]);
import{j as e}from"./react-core-CV8k_GRh.js"
import{c as t}from"./react-dom-client-fHgFUAUX.js"
import"./react-dom-C7S9v3DL.js"
import"./vendor-scheduler-DKYT7Wy5.js"
!function(){function e(e){if(e.ep)return
e.ep=1
const t=function(e){const t={}
return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e)
fetch(e.href,t)}const t=document.createElement("link").relList
if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t)
new MutationObserver(t=>{for(const r of t)if("childList"===r.type)for(const t of r.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)}).observe(document,{childList:1,subtree:1})}}()
const r={},o=function(e,t){function o(e){const t=new Event("vite:preloadError",{cancelable:1})
if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}let n=Promise.resolve()
if(t&&t.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))}
document.getElementsByTagName("link")
const o=document.querySelector("meta[property=csp-nonce]"),i=(null==o?void 0:o.nonce)||(null==o?void 0:o.getAttribute("nonce"))
n=e(t.map(e=>{if((e=function(e){return"/"+e}(e))in r)return
r[e]=1
const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':""
if(document.querySelector(`link[href="${e}"]${o}`))return
const n=document.createElement("link")
return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script"),n.crossOrigin="",n.href=e,i&&n.setAttribute("nonce",i),document.head.appendChild(n),t?new Promise((t,r)=>{n.addEventListener("load",t),n.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}return n.then(t=>{for(const e of t||[])"rejected"===e.status&&o(e.reason)
return e().catch(o)})}
console.log=console.warn=console.info=()=>{},"serviceWorker"in navigator&&setTimeout(()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})},3e3)
const n=t.createRoot(document.getElementById("root"))
n.render(e.jsx("div",{className:"app-loading",children:e.jsx("div",{className:"loader"})})),(async()=>{await Promise.all([o(()=>Promise.resolve({}),__vite__mapDeps([0])),o(()=>Promise.resolve({}),__vite__mapDeps([1])),o(()=>Promise.resolve({}),__vite__mapDeps([2]))]),await o(()=>import("./i18n-CoXEeCyV.js"),__vite__mapDeps([3,4,5,6]))
const{default:e}=await o(async()=>{const{default:e}=await import("./App-F156KX6S.js").then(e=>e.A)
return{default:e}},__vite__mapDeps([7,5,8,9,10,4]))
return e})().then(t=>{n.render(e.jsx(t,{}))}).catch(()=>{n.render(e.jsx("div",{style:{color:"#fff",padding:"20px",textAlign:"center"},children:"Failed to load application"}))})
export{o as _}
