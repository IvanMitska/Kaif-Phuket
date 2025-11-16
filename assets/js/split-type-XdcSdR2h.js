function t(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||0,r.configurable=1,"value"in r&&(r.writable=1),Object.defineProperty(t,r.key,r)}}function e(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:1,configurable:1,writable:1}):t[e]=n,t}function r(t,e){var n=Object.keys(t)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t)
e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{}
e%2?r(Object(o),1).forEach(function(e){n(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=1,o=0,i=void 0
try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=1);}catch(s){o=1,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return s(t,e)
var n=Object.prototype.toString.call(t).slice(8,-1)
return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length)
for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n]
return r}function l(t,e){return Object.getOwnPropertyNames(Object(t)).reduce(function(n,r){var o=Object.getOwnPropertyDescriptor(Object(t),r),i=Object.getOwnPropertyDescriptor(Object(e),r)
return Object.defineProperty(n,r,i||o)},{})}function u(t){return"string"==typeof t}function f(t){return Array.isArray(t)}function p(t){var e,n=arguments.length>0&&void 0!==t?t:{},r=l(n)
return void 0!==r.types?e=r.types:void 0!==r.split&&(e=r.split),void 0!==e&&(r.types=(u(e)||f(e)?String(e):"").split(",").map(function(t){return String(t).trim()}).filter(function(t){return/((line)|(word)|(char))/i.test(t)})),(r.absolute||r.position)&&(r.absolute=r.absolute||/absolute/.test(n.position)),r}function d(t){var e=u(t)||f(t)?String(t):""
return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function h(t){return null!==t&&"object"==typeof t}function y(t){return h(t)&&/^(1|3|11)$/.test(t.nodeType)}function g(t){return f(t)?t:null==t?[]:function(t){return h(t)&&function(t){return"number"==typeof t&&t>-1&&t%1==0}(t.length)}(t)?Array.prototype.slice.call(t):[t]}function v(t){var e=t
return u(t)&&(e=/^(#[a-z]\w+)$/.test(t.trim())?document.getElementById(t.trim().slice(1)):document.querySelectorAll(t)),g(e).reduce(function(t,e){return[].concat(a(t),a(g(e).filter(y)))},[])}function m(t,e,n){if(!h(t))return null
var r=t[W]||(t[W]=++A),i=k[r]||(k[r]={})
return void 0===n?e&&Object.getPrototypeOf(e)===Object.prototype&&(k[r]=o(o({},i),e)):void 0!==e&&(i[e]=n),n}function b(t){var e=h(t)?t[W]:null
return e&&k[e]||{}}function w(t){var e=t&&t[W]
e&&(delete t[e],delete k[e])}function O(t){return Y.test(t)}function C(t,e){var n=document.createElement(t)
return e?(Object.keys(e).forEach(function(t){var r=e[t],o=u(r)?r.trim():r
null!==o&&""!==o&&("children"===t?n.append.apply(n,a(g(o))):n.setAttribute(t,o))}),n):n}function j(t,e){var n=t.nodeType,r={words:[],chars:[]}
if(!/(1|3|11)/.test(n))return r
if(3===n&&/\S/.test(t.nodeValue))return function(t,e){var n,r=d((e=l(_,e)).types),o=e.tagName,i=t.nodeValue,c=document.createDocumentFragment(),s=[]
return/^\s/.test(i)&&c.append(" "),n=function(t,e){var n=arguments.length>1&&void 0!==e?e:" "
return(t?String(t):"").trim().replace(/\s+/g," ").split(n)}(i).reduce(function(t,n,i,l){var f,p
return r.chars&&(p=function(t,e){var n,r=arguments.length>1&&void 0!==e?e:""
return(t=null==(n=t)?"":String(n))&&u(t)&&!r&&O(t)?function(t){return O(t)?function(t){return t.match(X)||[]}(t):function(t){return t.split("")}(t)}(t):t.split(r)}(n).map(function(t){var n=C(o,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:t})
return m(n,"isChar",1),s=[].concat(a(s),[n]),n})),r.words||r.lines?(m(f=C(o,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(r.words&&e.absolute?"position: relative;":""),children:r.chars?p:n}),{isWord:1,isWordStart:1,isWordEnd:1}),c.appendChild(f)):p.forEach(function(t){c.appendChild(t)}),i<l.length-1&&c.append(" "),r.words?t.concat(f):t},[]),/\s$/.test(i)&&c.append(" "),t.replaceWith(c),{words:n,chars:s}}(t,e)
var o=g(t.childNodes)
if(o.length&&(m(t,"isSplit",1),!b(t).isRoot)){t.style.display="inline-block",t.style.position="relative"
var i=t.nextSibling,c=t.previousSibling,s=t.textContent||"",f=i?i.textContent:" ",p=c?c.textContent:" "
m(t,{isWordEnd:/\s$/.test(s)||/^\s/.test(f),isWordStart:/^\s/.test(s)||/\s$/.test(p)})}return o.reduce(function(t,n){var r=j(n,e),o=r.words,i=r.chars
return{words:[].concat(a(t.words),a(o)),chars:[].concat(a(t.chars),a(i))}},r)}function E(t){b(t).isWord?(w(t),t.replaceWith.apply(t,a(t.childNodes))):g(t.children).forEach(function(t){return E(t)})}function S(t,e,n){var r,o,a,c=d(e.types),s=e.tagName,l=t.getElementsByTagName("*"),u=[],f=[],p=null,h=[],y=t.parentElement,v=t.nextElementSibling,w=document.createDocumentFragment(),O=window.getComputedStyle(t),j=O.textAlign,S=.2*parseFloat(O.fontSize)
return e.absolute&&(a={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},o=t.offsetWidth,r=t.offsetHeight,m(t,{cssWidth:t.style.width,cssHeight:t.style.height})),g(l).forEach(function(r){var o=r.parentElement===t,a=function(t,e,n,r){if(!n.absolute)return{top:e?t.offsetTop:null}
var o=t.offsetParent,a=i(r,2),c=a[0],s=a[1],l=0,u=0
if(o&&o!==document.body){var f=o.getBoundingClientRect()
l=f.x+c,u=f.y+s}var p=t.getBoundingClientRect(),d=p.width,h=p.height,y=p.x
return{width:d,height:h,top:p.y+s-u,left:y+c-l}}(r,o,e,n),s=a.width,l=a.height,d=a.top,h=a.left;/^br$/i.test(r.nodeName)||(c.lines&&o&&((null===p||d-p>=S)&&(p=d,u.push(f=[])),f.push(r)),e.absolute&&m(r,{top:d,left:h,width:s,height:l}))}),y&&y.removeChild(t),c.lines&&(h=u.map(function(t){var n=C(s,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(j,"; width: 100%;")})
m(n,"isLine",1)
var r={height:0,top:1e4}
return w.appendChild(n),t.forEach(function(t,e,o){var i=b(t),a=i.isWordEnd,c=i.top,s=i.height,l=o[e+1]
r.height=Math.max(r.height,s),r.top=Math.min(r.top,c),n.appendChild(t),a&&b(l).isWordStart&&n.append(" ")}),e.absolute&&m(n,{height:r.height,top:r.top}),n}),c.words||E(w),t.replaceChildren(w)),e.absolute&&(t.style.width="".concat(t.style.width||o,"px"),t.style.height="".concat(r,"px"),g(l).forEach(function(t){var e=b(t),n=e.isLine,r=e.top,o=e.left,i=e.width,c=e.height,s=b(t.parentElement),l=!n&&s.isLine
t.style.top="".concat(l?r-s.top:r,"px"),t.style.left="".concat(n?a.left:o-(l?a.left:0),"px"),t.style.height="".concat(c,"px"),t.style.width="".concat(n?a.width:i,"px"),t.style.position="absolute"})),y&&(v?y.insertBefore(t,v):y.appendChild(t)),h}!function(){function t(){for(var t=arguments.length,e=0;e<t;e++){var n=e<0||arguments.length<=e?void 0:arguments[e]
1===n.nodeType||11===n.nodeType?this.appendChild(n):this.appendChild(document.createTextNode(String(n)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild)
arguments.length&&this.append.apply(this,arguments)}function n(){for(var t=this.parentNode,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
var o=n.length
if(t)for(o||t.removeChild(this);o--;){var i=n[o]
"object"!=typeof i?i=this.ownerDocument.createTextNode(i):i.parentNode&&i.parentNode.removeChild(i),o?t.insertBefore(this.previousSibling,i):t.replaceChild(i,this)}}"undefined"!=typeof Element&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=n,DocumentFragment.prototype.replaceWith=n))}()
var x=Object.entries,W="_splittype",k={},A=0,P="\\ud800-\\udfff",T="\\u0300-\\u036f\\ufe20-\\ufe23",D="\\u20d0-\\u20f0",N="\\ufe0e\\ufe0f",R="[".concat(P,"]"),$="[".concat(T).concat(D,"]"),B="\\ud83c[\\udffb-\\udfff]",F="(?:".concat($,"|").concat(B,")"),I="[^".concat(P,"]"),L="(?:\\ud83c[\\udde6-\\uddff]){2}",H="[\\ud800-\\udbff][\\udc00-\\udfff]",M="\\u200d",z="".concat(F,"?"),V="[".concat(N,"]?"),q=V+z+"(?:"+M+"(?:"+[I,L,H].join("|")+")"+V+z+")*",U="(?:".concat(["".concat(I).concat($,"?"),$,L,H,R].join("|"),"\n)"),X=RegExp("".concat(B,"(?=").concat(B,")|").concat(U).concat(q),"g"),Y=RegExp("[".concat([M,P,T,D,N].join(""),"]")),_={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:0,tagName:"div"},G=l(_,{}),J=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.isSplit=0,this.settings=l(G,p(n)),this.elements=v(e),this.split()}return e(t,null,[{key:"clearData",value:function(){Object.keys(k).forEach(function(t){delete k[t]})}},{key:"setDefaults",value:function(t){return G=l(G,p(t)),_}},{key:"revert",value:function(t){v(t).forEach(function(t){var e=b(t),n=e.isSplit,r=e.html,o=e.cssWidth,i=e.cssHeight
n&&(t.innerHTML=r,t.style.width=o||"",t.style.height=i||"",w(t))})}},{key:"create",value:function(e,n){return new t(e,n)}},{key:"data",get:function(){return k}},{key:"defaults",get:function(){return G},set:function(t){G=l(G,p(t))}}]),e(t,[{key:"split",value:function(t){var e=this
this.revert(),this.elements.forEach(function(t){m(t,"html",t.innerHTML)}),this.lines=[],this.words=[],this.chars=[]
var n=[window.pageXOffset,window.pageYOffset]
void 0!==t&&(this.settings=l(this.settings,p(t)))
var r=d(this.settings.types)
r.none||(this.elements.forEach(function(t){m(t,"isRoot",1)
var n=j(t,e.settings),r=n.words,o=n.chars
e.words=[].concat(a(e.words),a(r)),e.chars=[].concat(a(e.chars),a(o))}),this.elements.forEach(function(t){if(r.lines||e.settings.absolute){var o=S(t,e.settings,n)
e.lines=[].concat(a(e.lines),a(o))}}),this.isSplit=1,window.scrollTo(n[0],n[1]),x(k).forEach(function(t){var e=i(t,2),n=e[0],r=e[1],o=r.isRoot,a=r.isSplit
o&&a||(k[n]=null,delete k[n])}))}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=0),t.revert(this.elements)}}]),t}()
export{J as S}
