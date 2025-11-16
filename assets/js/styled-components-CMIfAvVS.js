function t(t,e,n){if(n||2===arguments.length)for(var r,o=0,s=e.length;o<s;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o])
return t.concat(r||Array.prototype.slice.call(e))}function e(t,e,n){return void 0===n&&(n=K),t.theme!==n.theme&&t.theme||e||n.theme}function n(t){return t.replace(V,"-").replace(X,"")}function r(t){var e,n=""
for(e=Math.abs(t);e>52;e=e/52|0)n=et(e%52)+n
return(et(e%52)+n).replace(tt,"$1-$2")}function o(t){return r(rt(t)>>>0)}function s(t){return"string"==typeof t&&1}function i(t){return("type"in(e=t)&&e.type.$$typeof)===st?ut:"$$typeof"in t?lt[t.$$typeof]:at
var e}function a(t,e,n){if("string"!=typeof e){if(mt){var r=yt(e)
r&&r!==mt&&a(t,r,n)}var o=ft(e)
ht&&(o=o.concat(ht(e)))
for(var s=i(t),c=i(e),u=0;u<o.length;++u){var l=o[u]
if(!(l in ct||n&&n[l]||c&&l in c||s&&l in s)){var p=dt(e,l)
try{pt(t,l,p)}catch(f){}}}}return t}function c(t){return"function"==typeof t}function u(t){return"object"==typeof t&&"styledComponentId"in t}function l(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function p(t){if(0===t.length)return""
for(var e=t[0],n=1;n<t.length;n++)e+=t[n]
return e}function f(t){return null!==t&&"object"==typeof t&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function h(t,e,n){if(void 0===n&&(n=0),!n&&!f(t)&&!Array.isArray(t))return e
if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=h(t[r],e[r])
else if(f(e))for(var r in e)t[r]=h(t[r],e[r])
return t}function d(t,e){Object.defineProperty(t,"toString",{value:e})}function y(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}function m(t,e){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(t){return"".concat(e," ").concat(t)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=m(t.children,e)),t})}function g(){return N.useContext(kt)}function v(t){for(var e="",n=0;n<t.length;n++){var r=t[n]
if(1===n&&"-"===r&&"-"===t[0])return t
Lt(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}function S(t,e,n,r){return Yt(t)?[]:u(t)?[".".concat(t.styledComponentId)]:c(t)?!c(o=t)||o.prototype&&o.prototype.isReactComponent||!e?[t]:S(t(e),e,n,r):t instanceof Gt?n?(t.inject(n,r),[t.getName(r)]):[t]:f(t)?Mt(t):Array.isArray(t)?Array.prototype.concat.apply(J,t.map(function(t){return S(t,e,n,r)})):[t.toString()]
var o}function b(t){for(var e=0;e<t.length;e+=1){var n=t[e]
if(c(n)&&!u(n))return 0}return 1}function I(t){var e=R.useContext(Ht),n=N.useMemo(function(){return function(t,e){if(!t)throw y(14)
if(c(t))return t(e)
if(Array.isArray(t)||"object"!=typeof t)throw y(8)
return e?B(B({},e),t):t}(t.theme,e)},[t.theme,e])
return t.children?R.createElement(Ht.Provider,{value:n},t.children):null}function A(t,r,i){function p(t,n){return function(t,n,r){var o=t.attrs,i=t.componentStyle,a=t.defaultProps,u=t.foldedComponentIds,p=t.styledComponentId,f=t.target,h=R.useContext(Ht),d=g(),y=t.shouldForwardProp||d.shouldForwardProp,m=e(n,h,a)||K,v=function(t,e,n){for(var r,o=B(B({},e),{className:void 0,theme:n}),s=0;s<t.length;s+=1){var i=c(r=t[s])?r(o):r
for(var a in i)o[a]="className"===a?l(o[a],i[a]):"style"===a?B(B({},o[a]),i[a]):i[a]}return e.className&&(o.className=l(o.className,e.className)),o}(o,n,m),S=v.as||f,b={}
for(var I in v)void 0===v[I]||"$"===I[0]||"as"===I||"theme"===I&&v.theme===m||("forwardedAs"===I?b.as=v.forwardedAs:y&&!y(I,S)||(b[I]=v[I]))
var A,C,w,P=(A=i,C=v,w=g(),A.generateAndInjectStyles(C,w.styleSheet,w.stylis)),E=l(u,p)
return P&&(E+=" "+P),v.className&&(E+=" "+v.className),b[s(S)&&!Q.has(S)?"class":"className"]=E,r&&(b.ref=r),N.createElement(S,b)}(D,t,n)}var f,y=u(t),m=t,v=!s(t),S=r.attrs,b=void 0===S?J:S,I=r.componentId,A=void 0===I?function(t,e){var r="string"!=typeof t?"sc":n(t)
Ut[r]=(Ut[r]||0)+1
var s="".concat(r,"-").concat(o(W+r+Ut[r]))
return e?"".concat(e,"-").concat(s):s}(r.displayName,r.parentComponentId):I,C=r.displayName,w=void 0===C?s(f=t)?"styled.".concat(f):"Styled(".concat(function(t){return t.displayName||t.name||"Component"}(f),")"):C,P=r.displayName&&r.componentId?"".concat(n(r.displayName),"-").concat(r.componentId):r.componentId||A,E=y&&m.attrs?m.attrs.concat(b).filter(Boolean):b,_=r.shouldForwardProp
if(y&&m.shouldForwardProp){var j=m.shouldForwardProp
if(r.shouldForwardProp){var x=r.shouldForwardProp
_=function(t,e){return j(t,e)&&x(t,e)}}else _=j}var O=new qt(i,P,y?m.componentStyle:void 0)
p.displayName=w
var D=R.forwardRef(p)
return D.attrs=E,D.componentStyle=O,D.displayName=w,D.shouldForwardProp=_,D.foldedComponentIds=y?l(m.foldedComponentIds,m.styledComponentId):"",D.styledComponentId=P,D.target=y?m.target:t,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=y?function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
for(var r=0,o=e;r<o.length;r++)h(t,o[r],1)
return t}({},m.defaultProps,t):t}}),d(D,function(){return".".concat(D.styledComponentId)}),v&&a(D,t,{attrs:1,componentStyle:1,displayName:1,foldedComponentIds:1,shouldForwardProp:1,styledComponentId:1,target:1}),D}function C(t,e){for(var n=[t[0]],r=0,o=e.length;r<o;r+=1)n.push(e[r],t[r+1])
return n}function w(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
if(c(e)||f(e))return Zt(S(C(J,t([e],n,1))))
var o=e
return 0===n.length&&1===o.length&&"string"==typeof o[0]?S(o):Zt(S(C(o,n)))}function P(e,n,r){if(void 0===r&&(r=K),!n)throw y(1,n)
var o=function(o){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i]
return e(n,r,w.apply(void 0,t([o],s,0)))}
return o.attrs=function(t){return P(e,n,B(B({},r),{attrs:Array.prototype.concat(r.attrs,t).filter(Boolean)}))},o.withConfig=function(t){return P(e,n,B(B({},r),t))},o}function E(n){function r(t,n,r,o,s){if(u.isStatic)u.renderStyles(t,Z,r,s)
else{var i=B(B({},n),{theme:e(n,o,l.defaultProps)})
u.renderStyles(t,i,r,s)}}for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i]
var a=w.apply(void 0,t([n],s,0)),c="sc-global-".concat(o(JSON.stringify(a))),u=new Qt(a,c),l=function(t){var e=g(),n=R.useContext(Ht),o=R.useRef(e.styleSheet.allocateGSInstance(c)).current
return e.styleSheet.server&&r(o,t,e.styleSheet,n,e.stylis),R.useLayoutEffect(function(){if(!e.styleSheet.server)return r(o,t,e.styleSheet,n,e.stylis),function(){return u.removeStyles(o,e.styleSheet)}},[o,t,e.styleSheet,n,e.stylis]),null}
return R.memo(l)}function _(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
var s=p(w.apply(void 0,t([e],n,0))),i=o(s)
return new Gt(i,s)}import{R,r as N}from"./react-core-CV8k_GRh.js"
import{Z as j,_ as x,$ as O,a0 as D,a1 as T,a2 as $,a3 as F,a4 as z}from"./vendor-misc-Bm4JrmXh.js"
var B=function(){return B=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])
return t},B.apply(this,arguments)}
"function"==typeof SuppressedError&&SuppressedError
var k,G={},L="undefined"!=typeof process&&void 0!==G&&(G.REACT_APP_SC_ATTR||G.SC_ATTR)||"data-styled",Y="active",M="data-styled-version",W="6.1.19",q="/*!sc*/\n",H="undefined"!=typeof window&&"undefined"!=typeof document,U=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==G&&void 0!==G.REACT_APP_SC_DISABLE_SPEEDY&&""!==G.REACT_APP_SC_DISABLE_SPEEDY?"false"!==G.REACT_APP_SC_DISABLE_SPEEDY&&G.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==G&&void 0!==G.SC_DISABLE_SPEEDY&&""!==G.SC_DISABLE_SPEEDY?"false"!==G.SC_DISABLE_SPEEDY&&G.SC_DISABLE_SPEEDY:0),Z={},J=Object.freeze([]),K=Object.freeze({}),Q=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),V=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,X=/(^-|-$)/g,tt=/(a)(d)/gi,et=function(t){return String.fromCharCode(t+(t>25?39:97))},nt=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n)
return t},rt=function(t){return nt(5381,t)},ot="function"==typeof Symbol&&Symbol.for,st=ot?Symbol.for("react.memo"):60115,it=ot?Symbol.for("react.forward_ref"):60112,at={childContextTypes:1,contextType:1,contextTypes:1,defaultProps:1,displayName:1,getDefaultProps:1,getDerivedStateFromError:1,getDerivedStateFromProps:1,mixins:1,propTypes:1,type:1},ct={name:1,length:1,prototype:1,caller:1,callee:1,arguments:1,arity:1},ut={$$typeof:1,compare:1,defaultProps:1,displayName:1,propTypes:1,type:1},lt=((k={})[it]={$$typeof:1,render:1,defaultProps:1,displayName:1,propTypes:1},k[st]=ut,k),pt=Object.defineProperty,ft=Object.getOwnPropertyNames,ht=Object.getOwnPropertySymbols,dt=Object.getOwnPropertyDescriptor,yt=Object.getPrototypeOf,mt=Object.prototype,gt=function(){function t(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return t.prototype.indexOfGroup=function(t){for(var e=0,n=0;n<t;n++)e+=this.groupSizes[n]
return e},t.prototype.insertRules=function(t,e){if(t>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;t>=o;)if((o<<=1)<0)throw y(16,"".concat(t))
this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o
for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(t+1),a=(s=0,e.length);s<a;s++)this.tag.insertRule(i,e[s])&&(this.groupSizes[t]++,i++)},t.prototype.clearGroup=function(t){if(t<this.length){var e=this.groupSizes[t],n=this.indexOfGroup(t),r=n+e
this.groupSizes[t]=0
for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(t){var e=""
if(t>=this.length||0===this.groupSizes[t])return e
for(var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n,s=r;s<o;s++)e+="".concat(this.tag.getRule(s)).concat(q)
return e},t}(),vt=new Map,St=new Map,bt=1,It=function(t){if(vt.has(t))return vt.get(t)
for(;St.has(bt);)bt++
var e=bt++
return vt.set(t,e),St.set(e,t),e},At=function(t,e){bt=e+1,vt.set(t,e),St.set(e,t)},Ct="style[".concat(L,"][").concat(M,'="').concat(W,'"]'),wt=new RegExp("^".concat(L,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Pt=function(t,e,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&t.registerName(e,r)},Et=function(t,e){for(var n,r=(null!==(n=e.textContent)&&void 0!==n?n:"").split(q),o=[],s=0,i=r.length;s<i;s++){var a=r[s].trim()
if(a){var c=a.match(wt)
if(c){var u=0|parseInt(c[1],10),l=c[2]
0!==u&&(At(l,u),Pt(t,l,c[3]),t.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},_t=function(t){for(var e=document.querySelectorAll(Ct),n=0,r=e.length;n<r;n++){var o=e[n]
o&&o.getAttribute(L)!==Y&&(Et(t,o),o.parentNode&&o.parentNode.removeChild(o))}},Rt=function(t){var e,n,r=document.head,o=t||r,s=document.createElement("style"),i=(e=o,(n=Array.from(e.querySelectorAll("style[".concat(L,"]"))))[n.length-1]),a=void 0!==i?i.nextSibling:null
s.setAttribute(L,Y),s.setAttribute(M,W)
var c="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null
return c&&s.setAttribute("nonce",c),o.insertBefore(s,a),s},Nt=function(){function t(t){this.element=Rt(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet
for(var e=document.styleSheets,n=0,r=e.length;n<r;n++){var o=e[n]
if(o.ownerNode===t)return o}throw y(17)}(this.element),this.length=0}return t.prototype.insertRule=function(t,e){try{return this.sheet.insertRule(e,t),this.length++,1}catch(n){return 0}},t.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},t.prototype.getRule=function(t){var e=this.sheet.cssRules[t]
return e&&e.cssText?e.cssText:""},t}(),jt=function(){function t(t){this.element=Rt(t),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(t,e){if(t<=this.length&&t>=0){var n=document.createTextNode(e)
return this.element.insertBefore(n,this.nodes[t]||null),this.length++,1}return 0},t.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},t.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},t}(),xt=function(){function t(){this.rules=[],this.length=0}return t.prototype.insertRule=function(t,e){return t<=this.length&&(this.rules.splice(t,0,e),this.length++,1)},t.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},t.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},t}(),Ot=H,Dt={isServer:!H,useCSSOMInjection:!U},Tt=function(){function t(t,e,n){void 0===t&&(t=K),void 0===e&&(e={})
var r=this
this.options=B(B({},Dt),t),this.gs=e,this.names=new Map(n),this.server=!!t.isServer,!this.server&&H&&Ot&&(Ot=0,_t(this)),d(this,function(){return function(t){for(var e=t.getTag(),n=e.length,r="",o=function(n){var o,s=(o=n,St.get(o))
if(void 0===s)return"continue"
var i=t.names.get(s),a=e.getGroup(n)
if(void 0===i||!i.size||0===a.length)return"continue"
var c="".concat(L,".g").concat(n,'[id="').concat(s,'"]'),u=""
void 0!==i&&i.forEach(function(t){t.length>0&&(u+="".concat(t,","))}),r+="".concat(a).concat(c,'{content:"').concat(u,'"}').concat(q)},s=0;s<n;s++)o(s)
return r}(r)})}return t.registerId=function(t){return It(t)},t.prototype.rehydrate=function(){!this.server&&H&&_t(this)},t.prototype.reconstructWithOptions=function(e,n){return void 0===n&&(n=1),new t(B(B({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=(t=this.options).useCSSOMInjection,n=t.target,r=t.isServer?new xt(n):e?new Nt(n):new jt(n),new gt(r)))
var t,e,n,r},t.prototype.hasNameForId=function(t,e){return this.names.has(t)&&this.names.get(t).has(e)},t.prototype.registerName=function(t,e){if(It(t),this.names.has(t))this.names.get(t).add(e)
else{var n=new Set
n.add(e),this.names.set(t,n)}},t.prototype.insertRules=function(t,e,n){this.registerName(t,e),this.getTag().insertRules(It(t),n)},t.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},t.prototype.clearRules=function(t){this.getTag().clearGroup(It(t)),this.clearNames(t)},t.prototype.clearTag=function(){this.tag=void 0},t}(),$t=/&/g,Ft=/^\s*\/\/.*$/gm,zt=new Tt,Bt=function(){var t,e,n,r=K,o=r.options,s=void 0===o?K:o,i=r.plugins,a=void 0===i?J:i,c=function(n,r,o){return o.startsWith(e)&&o.endsWith(e)&&o.replaceAll(e,"").length>0?".".concat(t):n},u=a.slice()
u.push(function(t){t.type===x&&t.value.includes("&")&&(t.props[0]=t.props[0].replace($t,e).replace(n,c))}),s.prefix&&u.push(O),u.push(D)
var l=function(r,o,i,a){void 0===o&&(o=""),void 0===i&&(i=""),void 0===a&&(a="&"),t=a,e=o,n=new RegExp("\\".concat(e,"\\b"),"g")
var c=r.replace(Ft,""),l=T(i||o?"".concat(i," ").concat(o," { ").concat(c," }"):c)
s.namespace&&(l=m(l,s.namespace))
var p=[]
return $(l,F(u.concat(z(function(t){return p.push(t)})))),p}
return l.hash=a.length?a.reduce(function(t,e){return e.name||y(15),nt(t,e.name)},5381).toString():"",l}(),kt=R.createContext({shouldForwardProp:void 0,styleSheet:zt,stylis:Bt})
kt.Consumer,R.createContext(void 0)
var Gt=function(){function t(t,e){var n=this
this.inject=function(t,e){void 0===e&&(e=Bt)
var r=n.name+e.hash
t.hasNameForId(n.id,r)||t.insertRules(n.id,r,e(n.rules,r,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=e,d(this,function(){throw y(12,String(n.name))})}return t.prototype.getName=function(t){return void 0===t&&(t=Bt),this.name+t.hash},t}(),Lt=function(t){return t>="A"&&t<="Z"},Yt=function(t){return null==t||0==t||""===t},Mt=function(e){var n,r,o=[]
for(var s in e){var i=e[s]
e.hasOwnProperty(s)&&!Yt(i)&&(Array.isArray(i)&&i.isCss||c(i)?o.push("".concat(v(s),":"),i,";"):f(i)?o.push.apply(o,t(t(["".concat(s," {")],Mt(i),0),["}"],0)):o.push("".concat(v(s),": ").concat((n=s,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in j||n.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o},Wt=rt(W),qt=function(){function t(t,e,n){this.rules=t,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&b(t),this.componentId=e,this.baseHash=nt(Wt,e),this.baseStyle=n,Tt.registerId(e)}return t.prototype.generateAndInjectStyles=function(t,e,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,e,n):""
if(this.isStatic&&!n.hash)if(this.staticRulesId&&e.hasNameForId(this.componentId,this.staticRulesId))o=l(o,this.staticRulesId)
else{var s=p(S(this.rules,t,e,n)),i=r(nt(this.baseHash,s)>>>0)
if(!e.hasNameForId(this.componentId,i)){var a=n(s,".".concat(i),void 0,this.componentId)
e.insertRules(this.componentId,i,a)}o=l(o,i),this.staticRulesId=i}else{for(var c=nt(this.baseHash,n.hash),u="",f=0;f<this.rules.length;f++){var h=this.rules[f]
if("string"==typeof h)u+=h
else if(h){var d=p(S(h,t,e,n))
c=nt(c,d+f),u+=d}}if(u){var y=r(c>>>0)
e.hasNameForId(this.componentId,y)||e.insertRules(this.componentId,y,n(u,".".concat(y),void 0,this.componentId)),o=l(o,y)}}return o},t}(),Ht=R.createContext(void 0)
Ht.Consumer
var Ut={},Zt=function(t){return Object.assign(t,{isCss:1})},Jt=function(t){return P(A,t)},Kt=Jt
Q.forEach(function(t){Kt[t]=Jt(t)})
var Qt=function(){function t(t,e){this.rules=t,this.componentId=e,this.isStatic=b(t),Tt.registerId(this.componentId+1)}return t.prototype.createStyles=function(t,e,n,r){var o=r(p(S(this.rules,e,n,r)),""),s=this.componentId+t
n.insertRules(s,s,o)},t.prototype.removeStyles=function(t,e){e.clearRules(this.componentId+t)},t.prototype.renderStyles=function(t,e,n,r){t>2&&Tt.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,e,n,r)},t}()
export{Kt as d,E as f,_ as m,I as o}
