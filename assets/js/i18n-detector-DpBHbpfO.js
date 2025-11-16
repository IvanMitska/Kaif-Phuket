const{slice:e,forEach:t}=[],o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,n={create(e,t,n,i,r){let s=arguments.length>4&&void 0!==r?r:{path:"/",sameSite:"strict"}
n&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+60*n*1e3)),i&&(s.domain=i),document.cookie=function(e,t,n){const i=arguments.length>2&&void 0!==n?n:{path:"/"}
let r=`${e}=${encodeURIComponent(t)}`
if(i.maxAge>0){const e=i.maxAge-0
if(Number.isNaN(e))throw new Error("maxAge should be a Number")
r+=`; Max-Age=${Math.floor(e)}`}if(i.domain){if(!o.test(i.domain))throw new TypeError("option domain is invalid")
r+=`; Domain=${i.domain}`}if(i.path){if(!o.test(i.path))throw new TypeError("option path is invalid")
r+=`; Path=${i.path}`}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw new TypeError("option expires is invalid")
r+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(r+="; HttpOnly"),i.secure&&(r+="; Secure"),i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case 1:case"strict":r+="; SameSite=Strict"
break
case"lax":r+="; SameSite=Lax"
break
case"none":r+="; SameSite=None"
break
default:throw new TypeError("option sameSite is invalid")}return i.partitioned&&(r+="; Partitioned"),r}(e,t,s)},read(e){const t=`${e}=`,o=document.cookie.split(";")
for(let n=0;n<o.length;n++){let e=o[n]
for(;" "===e.charAt(0);)e=e.substring(1,e.length)
if(0===e.indexOf(t))return e.substring(t.length,e.length)}return null},remove(e,t){this.create(e,"",-1,t)}}
var i={name:"cookie",lookup(e){let{lookupCookie:t}=e
if(t&&"undefined"!=typeof document)return n.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:o,cookieMinutes:i,cookieDomain:r,cookieOptions:s}=t
o&&"undefined"!=typeof document&&n.create(o,e,i,r,s)}},r={name:"querystring",lookup(e){var t
let o,{lookupQuerystring:n}=e
if("undefined"!=typeof window){let{search:e}=window.location
!window.location.search&&(null==(t=window.location.hash)?void 0:t.indexOf("?"))>-1&&(e=window.location.hash.substring(window.location.hash.indexOf("?")))
const i=e.substring(1).split("&")
for(let t=0;t<i.length;t++){const e=i[t].indexOf("=")
e>0&&i[t].substring(0,e)===n&&(o=i[t].substring(e+1))}}return o}},s={name:"hash",lookup(e){var t
let o,{lookupHash:n,lookupFromHashIndex:i}=e
if("undefined"!=typeof window){const{hash:e}=window.location
if(e&&e.length>2){const r=e.substring(1)
if(n){const e=r.split("&")
for(let t=0;t<e.length;t++){const i=e[t].indexOf("=")
i>0&&e[t].substring(0,i)===n&&(o=e[t].substring(i+1))}}if(o)return o
if(!o&&i>-1){const o=e.match(/\/([a-zA-Z-]*)/g)
if(!Array.isArray(o))return
return null==(t=o["number"==typeof i?i:0])?void 0:t.replace("/","")}}}return o}}
let a=null
const l=()=>{if(null!==a)return a
try{if(a="undefined"!=typeof window&&null!==window.localStorage,!a)return 0
const e="i18next.translate.boo"
window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(e){a=0}return a}
var c={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e
if(t&&l())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:o}=t
o&&l()&&window.localStorage.setItem(o,e)}}
let u=null
const d=()=>{if(null!==u)return u
try{if(u="undefined"!=typeof window&&null!==window.sessionStorage,!u)return 0
const e="i18next.translate.boo"
window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(e){u=0}return u}
var h={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e
if(t&&d())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:o}=t
o&&d()&&window.sessionStorage.setItem(o,e)}},g={name:"navigator",lookup(e){const t=[]
if("undefined"!=typeof navigator){const{languages:e,userLanguage:o,language:n}=navigator
if(e)for(let i=0;i<e.length;i++)t.push(e[i])
o&&t.push(o),n&&t.push(n)}return t.length>0?t:void 0}},p={name:"htmlTag",lookup(e){let t,{htmlTag:o}=e
const n=o||("undefined"!=typeof document?document.documentElement:null)
return n&&"function"==typeof n.getAttribute&&(t=n.getAttribute("lang")),t}},f={name:"path",lookup(e){var t
let{lookupFromPathIndex:o}=e
if("undefined"==typeof window)return
const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g)
return Array.isArray(n)?null==(t=n["number"==typeof o?o:0])?void 0:t.replace("/",""):void 0}},m={name:"subdomain",lookup(e){var t,o
let{lookupFromSubdomainIndex:n}=e
const i="number"==typeof n?n+1:1,r="undefined"!=typeof window&&(null==(o=null==(t=window.location)?void 0:t.hostname)?void 0:o.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i))
if(r)return r[i]}}
let w=0
try{document.cookie,w=1}catch(S){}const v=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"]
w||v.splice(1,1)
class k{constructor(e,t){let o=arguments.length>1&&void 0!==t?t:{}
this.type="languageDetector",this.detectors={},this.init(e,o)}init(o,n,a){let l=arguments.length>0&&void 0!==o?o:{languageUtils:{}},u=arguments.length>1&&void 0!==n?n:{},d=arguments.length>2&&void 0!==a?a:{}
this.services=l,this.options=function(o){return t.call(e.call(arguments,1),e=>{if(e)for(const t in e)void 0===o[t]&&(o[t]=e[t])}),o}(u,this.options||{},{order:v,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e}),"string"==typeof this.options.convertDetectedLanguage&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=e=>e.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=d,this.addDetector(i),this.addDetector(r),this.addDetector(c),this.addDetector(h),this.addDetector(g),this.addDetector(p),this.addDetector(f),this.addDetector(m),this.addDetector(s)}addDetector(e){return this.detectors[e.name]=e,this}detect(e){let t=arguments.length>0&&void 0!==e?e:this.options.order,o=[]
return t.forEach(e=>{if(this.detectors[e]){let t=this.detectors[e].lookup(this.options)
t&&"string"==typeof t&&(t=[t]),t&&(o=o.concat(t))}}),o=o.filter(e=>{return null!=e&&!("string"==typeof(t=e)&&[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(e=>e.test(t)))
var t}).map(e=>this.options.convertDetectedLanguage(e)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?o:o.length>0?o[0]:null}cacheUserLanguage(e,t){let o=arguments.length>1&&void 0!==t?t:this.options.caches
o&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||o.forEach(t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)}))}}k.type="languageDetector"
export{k as B}
