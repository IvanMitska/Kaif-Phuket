var e,t,r,n,s=Object.defineProperty,i=(e,t,r)=>((e,t,r)=>t in e?s(e,t,{enumerable:1,configurable:1,writable:1,value:r}):e[t]=r)(e,"symbol"!=typeof t?t+"":t,r)
import{g as o,r as a,R as c}from"./react-core-CV8k_GRh.js"
import{X as l,Y as u}from"./vendor-misc-Bm4JrmXh.js"
const p=o(function(){function e(r,n){if(r===n)return 1
if(r&&n&&"object"==typeof r&&"object"==typeof n){if(r.constructor!==n.constructor)return 0
var a,c,l,u
if(Array.isArray(r)){if((a=r.length)!=n.length)return 0
for(c=a;0!==c--;)if(!e(r[c],n[c]))return 0
return 1}if(s&&r instanceof Map&&n instanceof Map){if(r.size!==n.size)return 0
for(u=r.entries();!(c=u.next()).done;)if(!n.has(c.value[0]))return 0
for(u=r.entries();!(c=u.next()).done;)if(!e(c.value[1],n.get(c.value[0])))return 0
return 1}if(i&&r instanceof Set&&n instanceof Set){if(r.size!==n.size)return 0
for(u=r.entries();!(c=u.next()).done;)if(!n.has(c.value[0]))return 0
return 1}if(o&&ArrayBuffer.isView(r)&&ArrayBuffer.isView(n)){if((a=r.length)!=n.length)return 0
for(c=a;0!==c--;)if(r[c]!==n[c])return 0
return 1}if(r.constructor===RegExp)return r.source===n.source&&r.flags===n.flags
if(r.valueOf!==Object.prototype.valueOf&&"function"==typeof r.valueOf&&"function"==typeof n.valueOf)return r.valueOf()===n.valueOf()
if(r.toString!==Object.prototype.toString&&"function"==typeof r.toString&&"function"==typeof n.toString)return r.toString()===n.toString()
if((a=(l=Object.keys(r)).length)!==Object.keys(n).length)return 0
for(c=a;0!==c--;)if(!Object.prototype.hasOwnProperty.call(n,l[c]))return 0
if(t&&r instanceof Element)return 0
for(c=a;0!==c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!r.$$typeof)&&!e(r[l[c]],n[l[c]]))return 0
return 1}return r!=r&&n!=n}if(n)return r
n=1
var t="undefined"!=typeof Element,s="function"==typeof Map,i="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView
return r=function(t,r){try{return e(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return 0
throw n}}}())
var h=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(h||{}),f={rel:["amphtml","canonical","alternate"]},d={type:["application/ld+json"]},m={charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},y=Object.values(h),g={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},b=Object.entries(g).reduce((e,[t,r])=>(e[r]=t,e),{}),T="data-rh",A=(e,t)=>{for(let r=e.length-1;r>=0;r-=1){const n=e[r]
if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},O=e=>{let t=A(e,"title")
const r=A(e,"titleTemplate")
if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,()=>t)
const n=A(e,"defaultTitle")
return t||n||void 0},v=e=>A(e,"onChangeClientState")||(()=>{}),C=(e,t)=>t.filter(t=>void 0!==t[e]).map(t=>t[e]).reduce((e,t)=>({...e,...t}),{}),w=(e,t)=>t.filter(e=>void 0!==e.base).map(e=>e.base).reverse().reduce((t,r)=>{if(!t.length){const n=Object.keys(r)
for(let s=0;s<n.length;s+=1){const i=n[s].toLowerCase()
if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}}return t},[]),x=(e,t,r)=>{const n={}
return r.filter(t=>Array.isArray(t[e])?1:(void 0!==t[e]&&(t[e],console&&console.warn),0)).map(t=>t[e]).reverse().reduce((e,r)=>{const s={}
r.filter(e=>{let r
const i=Object.keys(e)
for(let n=0;n<i.length;n+=1){const s=i[n],o=s.toLowerCase();-1===t.indexOf(o)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===o&&"stylesheet"===e[o].toLowerCase()||(r=o),-1===t.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!e[r])return 0
const o=e[r].toLowerCase()
return n[r]||(n[r]={}),s[r]||(s[r]={}),n[r][o]?0:(s[r][o]=1,1)}).reverse().forEach(t=>e.push(t))
const i=Object.keys(s)
for(let t=0;t<i.length;t+=1){const e=i[t],r={...n[e],...s[e]}
n[e]=r}return e},[]).reverse()},S=(e,t)=>{if(Array.isArray(e)&&e.length)for(let r=0;r<e.length;r+=1)if(e[r][t])return 1
return 0},$=e=>Array.isArray(e)?e.join(""):e,k=(e,t)=>Array.isArray(e)?e.reduce((e,r)=>(((e,t)=>{const r=Object.keys(e)
for(let n=0;n<r.length;n+=1)if(t[r[n]]&&t[r[n]].includes(e[r[n]]))return 1
return 0})(r,t)?e.priority.push(r):e.default.push(r),e),{priority:[],default:[]}):{default:e,priority:[]},j=(e,t)=>({...e,[t]:void 0}),E=["noscript","script","style"],M=(e,t=1)=>0==t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),L=e=>Object.keys(e).reduce((t,r)=>{const n=void 0!==e[r]?`${r}="${e[r]}"`:`${r}`
return t?`${t} ${n}`:n},""),D=(e,t={})=>Object.keys(e).reduce((t,r)=>(t[g[r]||r]=e[r],t),t),H=(e,t)=>t.map((t,r)=>{const n={key:r,[T]:1}
return Object.keys(t).forEach(e=>{const r=g[e]||e
if("innerHTML"===r||"cssText"===r){const e=t.innerHTML||t.cssText
n.dangerouslySetInnerHTML={__html:e}}else n[r]=t[e]}),c.createElement(e,n)}),P=(e,t,r=1)=>{switch(e){case"title":return{toComponent:()=>((e,t,r)=>{const n=D(r,{key:t,[T]:1})
return[c.createElement("title",n,t)]})(0,t.title,t.titleAttributes),toString:()=>((e,t,r,n)=>{const s=L(r),i=$(t)
return s?`<${e} ${T}="true" ${s}>${M(i,n)}</${e}>`:`<${e} ${T}="true">${M(i,n)}</${e}>`})(e,t.title,t.titleAttributes,r)}
case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>D(t),toString:()=>L(t)}
default:return{toComponent:()=>H(e,t),toString:()=>((e,t,r=1)=>t.reduce((t,n)=>{const s=n,i=Object.keys(s).filter(e=>!("innerHTML"===e||"cssText"===e)).reduce((e,t)=>{const n=void 0===s[t]?t:`${t}="${M(s[t],r)}"`
return e?`${e} ${n}`:n},""),o=s.innerHTML||s.cssText||"",a=-1===E.indexOf(e)
return`${t}<${e} ${T}="true" ${i}${a?"/>":`>${o}</${e}>`}`},""))(e,t,r)}}},I=e=>{const{baseTag:t,bodyAttributes:r,encode:n=1,htmlAttributes:s,noscriptTags:i,styleTags:o,title:a="",titleAttributes:c,prioritizeSeoTags:l}=e
let{linkTags:u,metaTags:p,scriptTags:h}=e,y={toComponent:()=>{},toString:()=>""}
return l&&({priorityMethods:y,linkTags:u,metaTags:p,scriptTags:h}=(({metaTags:e,linkTags:t,scriptTags:r,encode:n})=>{const s=k(e,m),i=k(t,f),o=k(r,d)
return{priorityMethods:{toComponent:()=>[...H("meta",s.priority),...H("link",i.priority),...H("script",o.priority)],toString:()=>`${P("meta",s.priority,n)} ${P("link",i.priority,n)} ${P("script",o.priority,n)}`},metaTags:s.default,linkTags:i.default,scriptTags:o.default}})(e)),{priority:y,base:P("base",t,n),bodyAttributes:P("bodyAttributes",r,n),htmlAttributes:P("htmlAttributes",s,n),link:P("link",u,n),meta:P("meta",p,n),noscript:P("noscript",i,n),script:P("script",h,n),style:P("style",o,n),title:P("title",{title:a,titleAttributes:c},n)}},U=[],N=!("undefined"==typeof window||!window.document||!window.document.createElement),R=class{constructor(e,t){i(this,"instances",[]),i(this,"canUseDOM",N),i(this,"context"),i(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?U:this.instances,add:e=>{(this.canUseDOM?U:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?U:this.instances).indexOf(e);(this.canUseDOM?U:this.instances).splice(t,1)}}}),this.context=e,this.canUseDOM=t||0,t||(e.helmet=I({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},q=c.createContext({}),z=(e=class extends a.Component{constructor(t){super(t),i(this,"helmetData"),this.helmetData=new R(this.props.context||{},e.canUseDOM)}render(){return c.createElement(q.Provider,{value:this.helmetData.value},this.props.children)}},i(e,"canUseDOM",N),e),B=(e,t)=>{const r=document.head||document.querySelector("head"),n=r.querySelectorAll(`${e}[${T}]`),s=[].slice.call(n),i=[]
let o
return t&&t.length&&t.forEach(t=>{const r=document.createElement(e)
for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))if("innerHTML"===e)r.innerHTML=t.innerHTML
else if("cssText"===e)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText))
else{const n=e,s=void 0===t[n]?"":t[n]
r.setAttribute(e,s)}r.setAttribute(T,"true"),s.some((e,t)=>(o=t,r.isEqualNode(e)))?s.splice(o,1):i.push(r)}),s.forEach(e=>{var t
return null==(t=e.parentNode)?void 0:t.removeChild(e)}),i.forEach(e=>r.appendChild(e)),{oldTags:s,newTags:i}},_=(e,t)=>{const r=document.getElementsByTagName(e)[0]
if(!r)return
const n=r.getAttribute(T),s=n?n.split(","):[],i=[...s],o=Object.keys(t)
for(const a of o){const e=t[a]||""
r.getAttribute(a)!==e&&r.setAttribute(a,e),-1===s.indexOf(a)&&s.push(a)
const n=i.indexOf(a);-1!==n&&i.splice(n,1)}for(let a=i.length-1;a>=0;a-=1)r.removeAttribute(i[a])
s.length===i.length?r.removeAttribute(T):r.getAttribute(T)!==o.join(",")&&r.setAttribute(T,o.join(","))},Y=(e,t)=>{const{baseTag:r,bodyAttributes:n,htmlAttributes:s,linkTags:i,metaTags:o,noscriptTags:a,onChangeClientState:c,scriptTags:l,styleTags:u,title:p,titleAttributes:h}=e
_("body",n),_("html",s),((e,t)=>{void 0!==e&&document.title!==e&&(document.title=$(e)),_("title",t)})(p,h)
const f={baseTag:B("base",r),linkTags:B("link",i),metaTags:B("meta",o),noscriptTags:B("noscript",a),scriptTags:B("script",l),styleTags:B("style",u)},d={},m={}
Object.keys(f).forEach(e=>{const{newTags:t,oldTags:r}=f[e]
t.length&&(d[e]=t),r.length&&(m[e]=f[e].oldTags)}),t&&t(),c(e,d,m)},F=null,V=class extends a.Component{constructor(){super(...arguments),i(this,"rendered",0)}shouldComponentUpdate(e){return!u(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context
e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context
let r=null
const n=(s=e.get().map(e=>{const t={...e.props}
return delete t.context,t}),{baseTag:w(["href"],s),bodyAttributes:C("bodyAttributes",s),defer:A(s,"defer"),encode:A(s,"encodeSpecialCharacters"),htmlAttributes:C("htmlAttributes",s),linkTags:x("link",["rel","href"],s),metaTags:x("meta",["name","charset","http-equiv","property","itemprop"],s),noscriptTags:x("noscript",["innerHTML"],s),onChangeClientState:v(s),scriptTags:x("script",["src","innerHTML"],s),styleTags:x("style",["cssText"],s),title:O(s),titleAttributes:C("titleAttributes",s),prioritizeSeoTags:S(s,"prioritizeSeoTags")})
var s,i
z.canUseDOM?(i=n,F&&cancelAnimationFrame(F),i.defer?F=requestAnimationFrame(()=>{Y(i,()=>{F=null})}):(Y(i),F=null)):I&&(r=I(n)),t(r)}init(){if(this.rendered)return
this.rendered=1
const{helmetInstances:e}=this.props.context
e.add(this),this.emitChange()}render(){return this.init(),null}},K=(t=class extends a.Component{shouldComponentUpdate(e){return!p(j(this.props,"helmetData"),j(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null
switch(e.type){case"script":case"noscript":return{innerHTML:t}
case"style":return{cssText:t}
default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,r,n){return{...t,[e.type]:[...t[e.type]||[],{...r,...this.mapNestedChildrenToProps(e,n)}]}}mapObjectTypeChildren(e,t,r,n){switch(e.type){case"title":return{...t,[e.type]:n,titleAttributes:{...r}}
case"body":return{...t,bodyAttributes:{...r}}
case"html":return{...t,htmlAttributes:{...r}}
default:return{...t,[e.type]:{...r}}}}mapArrayTypeChildrenToProps(e,t){let r={...t}
return Object.keys(e).forEach(t=>{r={...r,[t]:e[t]}}),r}warnOnInvalidChildren(e,t){return l(y.some(t=>e.type===t),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${y.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),l(!t||"string"==typeof t||Array.isArray(t)&&!t.some(e=>"string"!=typeof e),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),1}mapChildrenToProps(e,t){let r={}
return c.Children.forEach(e,e=>{if(!e||!e.props)return
const{children:n,...s}=e.props,i=Object.keys(s).reduce((e,t)=>(e[b[t]||t]=s[t],e),{})
let{type:o}=e
switch("symbol"==typeof o?o=o.toString():this.warnOnInvalidChildren(e,n),o){case"Symbol(react.fragment)":t=this.mapChildrenToProps(n,t)
break
case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(e,r,i,n)
break
default:t=this.mapObjectTypeChildren(e,t,i,n)}}),this.mapArrayTypeChildrenToProps(r,t)}render(){const{children:e,...t}=this.props
let r={...t},{helmetData:n}=t
return e&&(r=this.mapChildrenToProps(e,r)),!n||n instanceof R||(n=new R(n.context,1),delete r.helmetData),n?c.createElement(V,{...r,context:n.value}):c.createElement(q.Consumer,null,e=>c.createElement(V,{...r,context:e}))}},i(t,"defaultProps",{defer:1,encodeSpecialCharacters:1,prioritizeSeoTags:0}),t)
export{z as H,K as a}
