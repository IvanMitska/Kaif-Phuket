import{r as e}from"./react-core-CV8k_GRh.js"
const r=e=>{const r=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()))(e)
return r.charAt(0).toUpperCase()+r.slice(1)},t=(...e)=>e.filter((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim(),o=e=>{for(const r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return 1}
var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}
const s=e.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:n,className:c="",children:l,iconNode:d,...h},m)=>e.createElement("svg",{ref:m,...a,width:s,height:s,stroke:r,strokeWidth:n?24*Number(i)/Number(s):i,className:t("lucide",c),...!l&&!o(h)&&{"aria-hidden":"true"},...h},[...d.map(([r,t])=>e.createElement(r,t)),...Array.isArray(l)?l:[l]])),i=(o,a)=>{const i=e.forwardRef(({className:i,...n},c)=>{return e.createElement(s,{ref:c,iconNode:a,className:t(`lucide-${l=r(o),l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${o}`,i),...n})
var l})
return i.displayName=r(o),i},n=i("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),c=i("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])
export{n as C,c as a}
