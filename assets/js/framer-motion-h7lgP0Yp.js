function t(t){const e=ye.useRef(null)
return null===e.current&&(e.current=t()),e.current}function e({children:t,isPresent:e,anchorX:i}){const n=ye.useId(),s=ye.useRef(null),o=ye.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:r}=ye.useContext(vi)
return ye.useInsertionEffect(()=>{const{width:t,height:a,top:l,left:u,right:h}=o.current
if(e||!s.current||!t||!a)return
const c="left"===i?`left: ${u}`:`right: ${h}`
s.current.dataset.motionPopId=n
const d=document.createElement("style")
return r&&(d.nonce=r),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${a}px !important;\n            ${c}px !important;\n            top: ${l}px !important;\n          }\n        `),()=>{document.head.contains(d)&&document.head.removeChild(d)}},[e]),ve.jsx(xi,{isPresent:e,childRef:s,sizeRef:o,children:ye.cloneElement(t,{ref:s})})}function i(){return new Map}function n(t=1){const e=ye.useContext(yi)
if(null===e)return[1,null]
const{isPresent:i,onExitComplete:n,register:s}=e,o=ye.useId()
ye.useEffect(()=>{if(t)return s(o)},[t])
const r=ye.useCallback(()=>t&&n&&n(o),[o,n,t])
return!i&&n?[0,r]:[1]}function s(t){const e=[]
return ye.Children.forEach(t,t=>{ye.isValidElement(t)&&e.push(t)}),e}function o(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Ai.has(t)}function r(t){if("undefined"==typeof Proxy)return t
const e=new Map
return new Proxy((...e)=>t(...e),{get:(i,n)=>"create"===n?t:(e.has(n)||e.set(n,t(n)),e.get(n))})}function a(t){return null!==t&&"object"==typeof t&&"function"==typeof t.start}function l(t){return"string"==typeof t||Array.isArray(t)}function u(t){return a(t.animate)||bi.some(e=>l(t[e]))}function h(t){return Boolean(u(t)||t.variants)}function c(t){return Array.isArray(t)?t.join(" "):t}function d(t){return t&&"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}function p(t,e,i){return ye.useCallback(n=>{n&&t.onMount&&t.onMount(n),e&&(n?e.mount(n):e.unmount()),i&&("function"==typeof i?i(n):d(i)&&(i.current=n))},[e])}function m(t,e,i,n,s){var o,r
const{visualElement:a}=ye.useContext(Ri),l=ye.useContext(Ti),u=ye.useContext(yi),h=ye.useContext(vi).reducedMotion,c=ye.useRef(null)
n=n||l.renderer,!c.current&&n&&(c.current=n(t,{visualState:e,parent:a,props:i,presenceContext:u,blockInitialAnimation:u?0==u.initial:0,reducedMotionConfig:h}))
const p=c.current,m=ye.useContext(ki)
!p||p.projection||!s||"html"!==p.type&&"svg"!==p.type||function(t,e,i,n){const{layoutId:s,layout:o,drag:r,dragConstraints:a,layoutScroll:l,layoutRoot:u,layoutCrossfade:h}=e
t.projection=new i(t.latestValues,e["data-framer-portal-id"]?void 0:f(t.parent)),t.projection.setOptions({layoutId:s,layout:o,alwaysMeasureLayout:Boolean(r)||a&&d(a),visualElement:t,animationType:"string"==typeof o?o:"both",initialPromotionConfig:n,crossfade:h,layoutScroll:l,layoutRoot:u})}(c.current,i,s,m)
const g=ye.useRef(0)
ye.useInsertionEffect(()=>{p&&g.current&&p.update(i,u)})
const y=i[Bi],v=ye.useRef(Boolean(y)&&!(null==(o=window.MotionHandoffIsComplete)?void 0:o.call(window,y))&&(null==(r=window.MotionHasOptimisedAnimation)?void 0:r.call(window,y)))
return gi(()=>{p&&(g.current=1,window.MotionIsMounted=1,p.updateFeatures(),Pe.render(p.render),v.current&&p.animationState&&p.animationState.animateChanges())}),ye.useEffect(()=>{p&&(!v.current&&p.animationState&&p.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var t
null==(t=window.MotionHandoffMarkAsComplete)||t.call(window,y)}),v.current=0))}),p}function f(t){if(t)return 0!=t.options.allowProjection?t.projection:f(t.parent)}function g({layoutId:t}){const e=ye.useContext(mi).id
return e&&void 0!==t?e+"-"+t:t}function y(t,{layout:e,layoutId:i}){return we.has(t)||t.startsWith("origin")||(e||void 0!==i)&&(!!Fi[t]||"opacity"===t)}function v(t,e,i){const{style:n,vars:s,transformOrigin:o}=t
let r=0,a=0
for(const l in e){const t=e[l]
if(we.has(l))r=1
else if(Se(l))s[l]=t
else{const e=Ce(t,Ve[l])
l.startsWith("origin")?(a=1,o[l]=e):n[l]=e}}if(e.transform||(r||i?n.transform=function(t,e,i){let n="",s=1
for(let o=0;o<Oi;o++){const r=Te[o],a=t[r]
if(void 0===a)continue
let l=1
if(l="number"==typeof a?a===(r.startsWith("scale")?1:0):0===parseFloat(a),!l||i){const t=Ce(a,Ve[r])
l||(s=0,n+=`${Ii[r]||r}(${t}) `),i&&(e[r]=t)}}return n=n.trim(),i?n=i(e,s?"":n):s&&(n="none"),n}(e,t.transform,i):n.transform&&(n.transform="none")),a){const{originX:t="50%",originY:e="50%",originZ:i=0}=o
n.transformOrigin=`${t} ${e} ${i}`}}function x(t,e,i){for(const n in e)Ae(e[n])||y(n,i)||(t[n]=e[n])}function P(t,e){const i={},n=function(t,e){const i={}
return x(i,t.style||{},t),Object.assign(i,function({transformTemplate:t},e){return ye.useMemo(()=>{const i={style:{},transform:{},transformOrigin:{},vars:{}}
return v(i,e,t),Object.assign({},i.vars,i.style)},[e])}(t,e)),i}(t,e)
return t.drag&&0!=t.dragListener&&(i.draggable=0,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=1==t.drag?"none":"pan-"+("x"===t.drag?"y":"x")),void 0===t.tabIndex&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=n,i}function S(t,{attrX:e,attrY:i,attrScale:n,pathLength:s,pathSpacing:o=1,pathOffset:r=0,...a},l,u,h){if(v(t,a,u),l)return void(t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox))
t.attrs=t.style,t.style={}
const{attrs:c,style:d}=t
c.transform&&(d.transform=c.transform,delete c.transform),(d.transform||c.transformOrigin)&&(d.transformOrigin=c.transformOrigin??"50% 50%",delete c.transformOrigin),d.transform&&(d.transformBox=(null==h?void 0:h.transformBox)??"fill-box",delete c.transformBox),void 0!==e&&(c.x=e),void 0!==i&&(c.y=i),void 0!==n&&(c.scale=n),void 0!==s&&function(t,e,i=1,n=0,s=1){t.pathLength=1
const o=s?Ui:Wi
t[o.offset]=Ee.transform(-n)
const r=Ee.transform(e),a=Ee.transform(i)
t[o.array]=`${r} ${a}`}(c,s,o,r,0)}function w(t,e,i,n){const s=ye.useMemo(()=>{const i=$i()
return S(i,e,Ni(n),t.transformTemplate,t.style),{...i.attrs,style:{...i.style}}},[e])
if(t.style){const e={}
x(e,t.style,t),s.style={...e,...s.style}}return s}function T(t){return"string"!=typeof t||t.includes("-")?0:Hi.indexOf(t)>-1||/[A-Z]/u.test(t)?1:0}function C(t=0){return(e,i,n,{latestValues:s},r)=>{const a=(T(e)?w:P)(i,s,r,e),l=function(t,e,i){const n={}
for(const s in t)"values"===s&&"object"==typeof t.values||(Ei(s)||1==i&&o(s)||!e&&!o(s)||t.draggable&&s.startsWith("onDrag"))&&(n[s]=t[s])
return n}(i,"string"==typeof e,t),u=e!==ye.Fragment?{...l,...a,ref:n}:{},{children:h}=i,c=ye.useMemo(()=>Ae(h)?h.get():h,[h])
return ye.createElement(e,{...u,children:c})}}function V(t){const e=[{},{}]
return null==t||t.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function A(t,e,i,n){if("function"==typeof e){const[s,o]=V(n)
e=e(void 0!==i?i:t.custom,s,o)}if("string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e){const[s,o]=V(n)
e=e(void 0!==i?i:t.custom,s,o)}return e}function E(t){return Ae(t)?t.get():t}function D(t,e,i,n){const s={},o=n(t,{})
for(const a in o)s[a]=E(o[a])
let{initial:r,animate:l}=t
const c=u(t),d=h(t)
e&&d&&!c&&0!=t.inherit&&(void 0===r&&(r=e.initial),void 0===l&&(l=e.animate))
let p=i?0==i.initial:0
p=p||0==r
const m=p?l:r
if(m&&"boolean"!=typeof m&&!a(m)){const e=Array.isArray(m)?m:[m]
for(let i=0;i<e.length;i++){const n=A(t,e[i])
if(n){const{transitionEnd:t,transition:e,...i}=n
for(const n in i){let t=i[n]
Array.isArray(t)&&(t=t[p?t.length-1:0]),null!==t&&(s[n]=t)}for(const n in t)s[n]=t[n]}}}return s}function R(t,e,i){var n
const{style:s}=t,o={}
for(const r in s)(Ae(s[r])||e.style&&Ae(e.style[r])||y(r,t)||void 0!==(null==(n=null==i?void 0:i.getValue(r))?void 0:n.liveStyle))&&(o[r]=s[r])
return o}function M(t,e,i){const n=R(t,e,i)
for(const s in t)(Ae(t[s])||Ae(e[s]))&&(n[-1!==Te.indexOf(s)?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s]=t[s])
return n}function b(t,e){return function(i,{forwardMotionProps:n}={forwardMotionProps:0}){return function({preloadedFeatures:t,createVisualElement:e,useRender:i,useVisualState:n,Component:s}){function o(t,o){let r
const a={...ye.useContext(vi),...t,layoutId:g(t)},{isStatic:h}=a,d=function(t){const{initial:e,animate:i}=function(t,e){if(u(t)){const{initial:e,animate:i}=t
return{initial:0==e||l(e)?e:void 0,animate:l(i)?i:void 0}}return 0!=t.inherit?e:{}}(t,ye.useContext(Ri))
return ye.useMemo(()=>({initial:e,animate:i}),[c(e),c(i)])}(t),f=n(t,h)
if(!h&&fi){ye.useContext(Ti).strict
const t=function(t){const{drag:e,layout:i}=Vi
if(!e&&!i)return{}
const n={...e,...i}
return{MeasureLayout:(null==e?void 0:e.isEnabled(t))||(null==i?void 0:i.isEnabled(t))?n.MeasureLayout:void 0,ProjectionNode:n.ProjectionNode}}(a)
r=t.MeasureLayout,d.visualElement=m(s,f,a,e,t.ProjectionNode)}return ve.jsxs(Ri.Provider,{value:d,children:[r&&d.visualElement?ve.jsx(r,{visualElement:d.visualElement,...a}):null,i(s,t,p(f,d.visualElement,o),f,h,d.visualElement)]})}t&&function(t){for(const e in t)Vi[e]={...Vi[e],...t[e]}}(t),o.displayName=`motion.${"string"==typeof s?s:`create(${s.displayName??s.name??""})`}`
const r=ye.forwardRef(o)
return r[ji]=s,r}({...T(i)?Yi:Xi,preloadedFeatures:t,useRender:C(n),createVisualElement:e,Component:i})}}function j(t,e,i){const n=t.getProps()
return A(n,e,void 0!==i?i:n.custom,t)}function L(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,De(i))}function B(t){return Ki(t)?t[t.length-1]||0:t}function k(t,e){const i=t.getValue("willChange")
if(n=i,Boolean(Ae(n)&&n.add))return i.add(e)
if(!i&&Re.WillChange){const i=new Re.WillChange("auto")
t.addValue("willChange",i),i.add(e)}var n}function F(t){return t.props[Bi]}function I({protectedKeys:t,needsAnimating:e},i){const n=t.hasOwnProperty(i)&&1!=e[i]
return e[i]=0,n}function O(t,e,{delay:i=0,transitionOverride:n,type:s}={}){let{transition:o=t.getDefaultTransition(),transitionEnd:r,...a}=e
n&&(o=n)
const l=[],u=s&&t.animationState&&t.animationState.getState()[s]
for(const h in a){const e=t.getValue(h,t.latestValues[h]??null),n=a[h]
if(void 0===n||u&&I(u,h))continue
const s={delay:i,...Me(o||{},h)},r=e.get()
if(void 0!==r&&!e.isAnimating&&!Array.isArray(n)&&n===r&&!s.velocity)continue
let c=0
if(window.MotionHandoffAnimation){const e=F(t)
if(e){const t=window.MotionHandoffAnimation(e,h,je)
null!==t&&(s.startTime=t,c=1)}}k(t,h),e.start(Qi(h,e,n,t.shouldReduceMotion&&ke.has(h)?{type:0}:s,t,c))
const d=e.animation
d&&l.push(d)}return r&&Promise.all(l).then(()=>{je.update(()=>{r&&function(t,e){const i=j(t,e)
let{transitionEnd:n={},transition:s={},...o}=i||{}
o={...o,...n}
for(const r in o)L(t,r,B(o[r]))}(t,r)})}),l}function U(t,e,i={}){var n
const s=j(t,e,"exit"===i.type?null==(n=t.presenceContext)?void 0:n.custom:void 0)
let{transition:o=t.getDefaultTransition()||{}}=s||{}
i.transitionOverride&&(o=i.transitionOverride)
const r=s?()=>Promise.all(O(t,s,i)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(n=0)=>{const{delayChildren:s=0,staggerChildren:r,staggerDirection:a}=o
return function(t,e,i=0,n=0,s=1,o){const r=[],a=(t.variantChildren.size-1)*n,l=1===s?(t=0)=>t*n:(t=0)=>a-t*n
return Array.from(t.variantChildren).sort(W).forEach((t,n)=>{t.notify("AnimationStart",e),r.push(U(t,e,{...o,delay:i+l(n)}).then(()=>t.notify("AnimationComplete",e)))}),Promise.all(r)}(t,e,s+n,r,a,i)}:()=>Promise.resolve(),{when:l}=o
if(l){const[t,e]="beforeChildren"===l?[r,a]:[a,r]
return t().then(()=>e())}return Promise.all([r(),a(i.delay)])}function W(t,e){return t.sortNodePosition(e)}function $(t,e){if(!Array.isArray(e))return 0
const i=e.length
if(i!==t.length)return 0
for(let n=0;n<i;n++)if(e[n]!==t[n])return 0
return 1}function N(t){if(!t)return
if(!t.isControllingVariants){const e=t.parent&&N(t.parent)||{}
return void 0!==t.props.initial&&(e.initial=t.props.initial),e}const e={}
for(let i=0;i<tn;i++){const n=bi[i],s=t.props[n];(l(s)||0==s)&&(e[n]=s)}return e}function H(t){function e(e){const{props:r}=t,u=N(t.parent)||{},h=[],c=new Set
let d={},p=1/0
for(let i=0;i<nn;i++){const m=en[i],f=n[m],g=void 0!==r[m]?r[m]:u[m],y=l(g),v=m===e?f.isActive:null
0==v&&(p=i)
let x=g===u[m]&&g!==r[m]&&y
if(x&&s&&t.manuallyAnimateOnMount&&(x=0),f.protectedKeys={...d},!f.isActive&&null===v||!g&&!f.prevProp||a(g)||"boolean"==typeof g)continue
const P=z(f.prevProp,g)
let S=P||m===e&&f.isActive&&!x&&y||i>p&&y,w=0
const T=Array.isArray(g)?g:[g]
let C=T.reduce(o(m),{})
0==v&&(C={})
const{prevResolvedValues:V={}}=f,A={...V,...C},E=e=>{S=1,c.has(e)&&(w=1,c.delete(e)),f.needsAnimating[e]=1
const i=t.getValue(e)
i&&(i.liveStyle=0)}
for(const t in A){const e=C[t],i=V[t]
if(d.hasOwnProperty(t))continue
let n=0
n=Ki(e)&&Ki(i)?!$(e,i):e!==i,n?null!=e?E(t):c.add(t):void 0!==e&&c.has(t)?E(t):f.protectedKeys[t]=1}f.prevProp=g,f.prevResolvedValues=C,f.isActive&&(d={...d,...C}),s&&t.blockInitialAnimation&&(S=0),S&&(!x||!P||w)&&h.push(...T.map(t=>({animation:t,options:{type:m}})))}if(c.size){const e={}
if("boolean"!=typeof r.initial){const i=j(t,Array.isArray(r.initial)?r.initial[0]:r.initial)
i&&i.transition&&(e.transition=i.transition)}c.forEach(i=>{const n=t.getBaseTarget(i),s=t.getValue(i)
s&&(s.liveStyle=1),e[i]=n??null}),h.push({animation:e})}let m=Boolean(h.length)
return!s||0!=r.initial&&r.initial!==r.animate||t.manuallyAnimateOnMount||(m=0),s=0,m?i(h):Promise.resolve()}let i=function(t){return e=>Promise.all(e.map(({animation:e,options:i})=>function(t,e,i={}){let n
if(t.notify("AnimationStart",e),Array.isArray(e)){const s=e.map(e=>U(t,e,i))
n=Promise.all(s)}else if("string"==typeof e)n=U(t,e,i)
else{const s="function"==typeof e?j(t,e,i.custom):e
n=Promise.all(O(t,s,i))}return n.then(()=>{t.notify("AnimationComplete",e)})}(t,e,i)))}(t),n=Y(),s=1
const o=e=>(i,n)=>{var s
const o=j(t,n,"exit"===e?null==(s=t.presenceContext)?void 0:s.custom:void 0)
if(o){const{transition:t,transitionEnd:e,...n}=o
i={...i,...n,...e}}return i}
return{animateChanges:e,setActive:function(i,s){var o
if(n[i].isActive===s)return Promise.resolve()
null==(o=t.variantChildren)||o.forEach(t=>{var e
return null==(e=t.animationState)?void 0:e.setActive(i,s)}),n[i].isActive=s
const r=e(i)
for(const t in n)n[t].protectedKeys={}
return r},setAnimateFunction:function(e){i=e(t)},getState:()=>n,reset:()=>{n=Y(),s=1}}}function z(t,e){return"string"==typeof e?e!==t:Array.isArray(e)?!$(e,t):0}function X(t=0){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Y(){return{animate:X(1),whileInView:X(),whileHover:X(),whileTap:X(),whileDrag:X(),whileFocus:X(),exit:X()}}function G(t,e,i,n={passive:1}){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i)}function K(t){return{point:{x:t.pageX,y:t.pageY}}}function q(t,e,i,n){return G(t,e,(t=>e=>Fe(e)&&t(e,K(e)))(i),n)}function Z({top:t,left:e,right:i,bottom:n}){return{x:{min:e,max:i},y:{min:t,max:n}}}function _(t){return t.max-t.min}function J(t,e,i,n=.5){t.origin=n,t.originPoint=Ie(e.min,e.max,t.origin),t.scale=_(i)/_(e),t.translate=Ie(i.min,i.max,t.origin)-t.originPoint,(t.scale>=.9999&&t.scale<=1.0001||isNaN(t.scale))&&(t.scale=1),(t.translate>=-.01&&t.translate<=.01||isNaN(t.translate))&&(t.translate=0)}function Q(t,e,i,n){J(t.x,e.x,i.x,n?n.originX:void 0),J(t.y,e.y,i.y,n?n.originY:void 0)}function tt(t,e,i){t.min=i.min+e.min,t.max=t.min+_(e)}function et(t,e,i){t.min=e.min-i.min,t.max=t.min+_(e)}function it(t,e,i){et(t.x,e.x,i.x),et(t.y,e.y,i.y)}function nt(t){return[t("x"),t("y")]}function st(t){return void 0===t||1===t}function ot({scale:t,scaleX:e,scaleY:i}){return!st(t)||!st(e)||!st(i)}function rt(t){return ot(t)||at(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function at(t){return lt(t.x)||lt(t.y)}function lt(t){return t&&"0%"!==t}function ut(t,e,i){return i+e*(t-i)}function ht(t,e,i,n,s){return void 0!==s&&(t=ut(t,s,n)),ut(t,i,n)+e}function ct(t,e=0,i=1,n,s){t.min=ht(t.min,e,i,n,s),t.max=ht(t.max,e,i,n,s)}function dt(t,{x:e,y:i}){ct(t.x,e.translate,e.scale,e.originPoint),ct(t.y,i.translate,i.scale,i.originPoint)}function pt(t,e){t.min=t.min+e,t.max=t.max+e}function mt(t,e,i,n,s=.5){ct(t,e,i,Ie(t.min,t.max,s),n)}function ft(t,e){mt(t.x,e.x,e.scaleX,e.scale,e.originX),mt(t.y,e.y,e.scaleY,e.scale,e.originY)}function gt(t,e){return Z(function(t,e){if(!e)return t
const i=e({x:t.left,y:t.top}),n=e({x:t.right,y:t.bottom})
return{top:i.y,left:i.x,bottom:n.y,right:n.x}}(t.getBoundingClientRect(),e))}function yt(t,e){return e?{point:e(t.point)}:t}function vt(t,e){return{x:t.x-e.x,y:t.y-e.y}}function xt({point:t},e){return{point:t,delta:vt(t,St(e)),offset:vt(t,Pt(e)),velocity:wt(e,.1)}}function Pt(t){return t[0]}function St(t){return t[t.length-1]}function wt(t,e){if(t.length<2)return{x:0,y:0}
let i=t.length-1,n=null
const s=St(t)
for(;i>=0&&(n=t[i],!(s.timestamp-n.timestamp>be(e)));)i--
if(!n)return{x:0,y:0}
const o=$e(s.timestamp-n.timestamp)
if(0===o)return{x:0,y:0}
const r={x:(s.x-n.x)/o,y:(s.y-n.y)/o}
return r.x===1/0&&(r.x=0),r.y===1/0&&(r.y=0),r}function Tt(t,e,i){return{min:void 0!==e?t.min+e:void 0,max:void 0!==i?t.max+i-(t.max-t.min):void 0}}function Ct(t,e){let i=e.min-t.min,n=e.max-t.max
return e.max-e.min<t.max-t.min&&([i,n]=[n,i]),{min:i,max:n}}function Vt(t,e,i){return{min:At(t,e),max:At(t,i)}}function At(t,e){return"number"==typeof t?t:t[e]||0}function Et(t,e,i){return!(1!=e&&e!==t||null!==i&&i!==t)}function Dt(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}function Rt(t){const[e,i]=n(),s=ye.useContext(mi)
return ve.jsx(Sn,{...t,layoutGroup:s,switchLayoutGroup:ye.useContext(ki),isPresent:e,safeToRemove:i})}function Mt(t,e){return void 0!==t[e]?t[e]:t.borderRadius}function bt(t,e,i){return n=>n<t?0:n>e?1:i(Ne(t,e,n))}function jt(t,e){t.min=e.min,t.max=e.max}function Lt(t,e){jt(t.x,e.x),jt(t.y,e.y)}function Bt(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function kt(t,e,i,n,s){return t=ut(t-=e,1/i,n),void 0!==s&&(t=ut(t,1/s,n)),t}function Ft(t,e,[i,n,s],o,r){!function(t,e=0,i=1,n=.5,s,o=t,r=t){if(Xe.test(e)&&(e=parseFloat(e),e=Ie(r.min,r.max,e/100)-r.min),"number"!=typeof e)return
let a=Ie(o.min,o.max,n)
t===o&&(a-=e),t.min=kt(t.min,e,i,a,s),t.max=kt(t.max,e,i,a,s)}(t,e[i],e[n],e[s],e.scale,o,r)}function It(t,e,i,n){Ft(t.x,e,bn,i?i.x:void 0,n?n.x:void 0),Ft(t.y,e,jn,i?i.y:void 0,n?n.y:void 0)}function Ot(t){return 0===t.translate&&1===t.scale}function Ut(t){return Ot(t.x)&&Ot(t.y)}function Wt(t,e){return t.min===e.min&&t.max===e.max}function $t(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Nt(t,e){return $t(t.x,e.x)&&$t(t.y,e.y)}function Ht(t){return _(t.x)/_(t.y)}function zt(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Xt(t,e,i,n){const{latestValues:s}=e
s[t]&&(i[t]=s[t],e.setStaticValue(t,0),n&&(n[t]=0))}function Yt(t){if(t.hasCheckedOptimisedAppear=1,t.root===t)return
const{visualElement:e}=t.options
if(!e)return
const i=F(e)
if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:e,layoutId:n}=t.options
window.MotionCancelOptimisedAnimation(i,"transform",je,!(e||n))}const{parent:n}=t
n&&!n.hasCheckedOptimisedAppear&&Yt(n)}function Gt({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:n,resetTransform:s}){return class{constructor(t={},i=(null==e?void 0:e())){this.id=Fn++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=0,this.isAnimationBlocked=0,this.isLayoutDirty=0,this.isProjectionDirty=0,this.isSharedProjectionDirty=0,this.isTransformDirty=0,this.updateManuallyBlocked=0,this.updateBlockedByResize=0,this.isUpdating=0,this.isSVG=0,this.needsReset=0,this.shouldResetTransform=0,this.hasCheckedOptimisedAppear=0,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=0,this.updateScheduled=0,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=0,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=0,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=0,this.nodes.forEach(Zt),this.nodes.forEach(ne),this.nodes.forEach(se),this.nodes.forEach(_t)},this.resolvedRelativeTargetAt=0,this.hasProjected=0,this.isVisible=1,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=t,this.root=i?i.root||i:this,this.path=i?[...i.path,i]:[],this.parent=i,this.depth=i?i.depth+1:0
for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=1
this.root===this&&(this.nodes=new Cn)}addEventListener(t,e){return this.eventHandlers.has(t)||this.eventHandlers.set(t,new Je),this.eventHandlers.get(t).add(e)}notifyListeners(t,...e){const i=this.eventHandlers.get(t)
i&&i.notify(...e)}hasListeners(t){return this.eventHandlers.has(t)}mount(e){if(this.instance)return
this.isSVG=Qe(e)&&!ti(e),this.instance=e
const{layoutId:i,layout:n,visualElement:s}=this.options
if(s&&!s.current&&s.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(n||i)&&(this.isLayoutDirty=1),t){let i
const n=()=>this.root.updateBlockedByResize=0
t(e,()=>{this.root.updateBlockedByResize=1,i&&i(),i=function(t){const e=Ze.now(),i=({timestamp:n})=>{const s=n-e
s>=250&&(We(i),t(s-250))}
return je.setup(i,1),()=>We(i)}(n),vn.hasAnimatedSinceResize&&(vn.hasAnimatedSinceResize=0,this.nodes.forEach(ie))})}i&&this.root.registerSharedNode(i,this),0!=this.options.animate&&s&&(i||n)&&this.addEventListener("didUpdate",({delta:t,hasLayoutChanged:e,hasRelativeLayoutChanged:i,layout:n})=>{if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0)
const o=this.options.transition||s.getDefaultTransition()||In,{onLayoutAnimationStart:r,onLayoutAnimationComplete:a}=s.getProps(),l=!this.targetLayout||!Nt(this.targetLayout,n),u=!e&&i
if(this.options.layoutRoot||this.resumeFrom||u||e&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0)
const e={...Me(o,"layout"),onPlay:r,onComplete:a};(s.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=0),this.startAnimation(e),this.setAnimationOrigin(t,u)}else e||ie(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete()
this.targetLayout=n})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this)
const t=this.getStack()
t&&t.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),We(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=1}unblockUpdate(){this.updateManuallyBlocked=0}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||0}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=1,this.nodes&&this.nodes.forEach(oe),this.animationId++)}getTransformTemplate(){const{visualElement:t}=this.options
return t&&t.getProps().transformTemplate}willUpdate(t=1){if(this.root.hasTreeAnimated=1,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete())
if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Yt(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return
this.isLayoutDirty=1
for(let s=0;s<this.path.length;s++){const t=this.path[s]
t.shouldResetTransform=1,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(0)}const{layoutId:e,layout:i}=this.options
if(void 0===e&&!i)return
const n=this.getTransformTemplate()
this.prevTransformTemplateValue=n?n(this.latestValues,""):void 0,this.updateSnapshot(),t&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=0,this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Qt)
if(this.animationId<=this.animationCommitId)return void this.nodes.forEach(te)
this.isUpdating||this.nodes.forEach(te),this.animationCommitId=this.animationId,this.isUpdating=0,this.nodes.forEach(ee),this.nodes.forEach(Kt),this.nodes.forEach(qt),this.clearAllSnapshots()
const t=Ze.now()
Oe.delta=He(0,1e3/60,t-Oe.timestamp),Oe.timestamp=t,Oe.isProcessing=1,ei.update.process(Oe),ei.preRender.process(Oe),ei.render.process(Oe),Oe.isProcessing=0}didUpdate(){this.updateScheduled||(this.updateScheduled=1,Pe.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Jt),this.sharedNodes.forEach(re)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=1,je.preRender(this.updateProjection,0,1))}scheduleCheckAfterUnmount(){je.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||_(this.snapshot.measuredBox.x)||_(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return
if(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty))return
if(this.resumeFrom&&!this.resumeFrom.instance)for(let i=0;i<this.path.length;i++)this.path[i].updateScroll()
const t=this.layout
this.layout=this.measure(0),this.layoutCorrected=ln(),this.isLayoutDirty=0,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox)
const{visualElement:e}=this.options
e&&e.notify("LayoutMeasure",this.layout.layoutBox,t?t.layoutBox:void 0)}updateScroll(t="measure"){let e=Boolean(this.options.layoutScroll&&this.instance)
if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===t&&(e=0),e&&this.instance){const e=n(this.instance)
this.scroll={animationId:this.root.animationId,phase:t,isRoot:e,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:e}}}resetTransform(){if(!s)return
const t=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,e=this.projectionDelta&&!Ut(this.projectionDelta),i=this.getTransformTemplate(),n=i?i(this.latestValues,""):void 0,o=n!==this.prevTransformTemplateValue
t&&this.instance&&(e||rt(this.latestValues)||o)&&(s(this.instance,n),this.shouldResetTransform=0,this.scheduleRender())}measure(t=1){const e=this.measurePageBox()
let i=this.removeElementScroll(e)
var n
return t&&(i=this.removeTransform(i)),he((n=i).x),he(n.y),{animationId:this.root.animationId,measuredBox:e,layoutBox:i,latestValues:{},source:this.id}}measurePageBox(){var t
const{visualElement:e}=this.options
if(!e)return ln()
const i=e.measureViewportBox()
if(!(null==(t=this.scroll)?void 0:t.wasRoot)&&!this.path.some(de)){const{scroll:t}=this.root
t&&(pt(i.x,t.offset.x),pt(i.y,t.offset.y))}return i}removeElementScroll(t){var e
const i=ln()
if(Lt(i,t),null==(e=this.scroll)?void 0:e.wasRoot)return i
for(let n=0;n<this.path.length;n++){const e=this.path[n],{scroll:s,options:o}=e
e!==this.root&&s&&o.layoutScroll&&(s.wasRoot&&Lt(i,t),pt(i.x,s.offset.x),pt(i.y,s.offset.y))}return i}applyTransform(t,e=0){const i=ln()
Lt(i,t)
for(let n=0;n<this.path.length;n++){const t=this.path[n]
!e&&t.options.layoutScroll&&t.scroll&&t!==t.root&&ft(i,{x:-t.scroll.offset.x,y:-t.scroll.offset.y}),rt(t.latestValues)&&ft(i,t.latestValues)}return rt(this.latestValues)&&ft(i,this.latestValues),i}removeTransform(t){const e=ln()
Lt(e,t)
for(let i=0;i<this.path.length;i++){const t=this.path[i]
if(!t.instance)continue
if(!rt(t.latestValues))continue
ot(t.latestValues)&&t.updateSnapshot()
const n=ln()
Lt(n,t.measurePageBox()),It(e,t.latestValues,t.snapshot?t.snapshot.layoutBox:void 0,n)}return rt(this.latestValues)&&It(e,this.latestValues),e}setTargetDelta(t){this.targetDelta=t,this.root.scheduleUpdateProjection(),this.isProjectionDirty=1}setOptions(t){this.options={...this.options,...t,crossfade:void 0!==t.crossfade?t.crossfade:1}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=0}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Oe.timestamp&&this.relativeParent.resolveTargetDelta(1)}resolveTargetDelta(t=0){var e
const i=this.getLead()
this.isProjectionDirty||(this.isProjectionDirty=i.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=i.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=i.isSharedProjectionDirty)
const n=Boolean(this.resumingFrom)||this!==i
if(!(t||n&&this.isSharedProjectionDirty||this.isProjectionDirty||(null==(e=this.parent)?void 0:e.isProjectionDirty)||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return
const{layout:s,layoutId:o}=this.options
if(this.layout&&(s||o)){if(this.resolvedRelativeTargetAt=Oe.timestamp,!this.targetDelta&&!this.relativeTarget){const t=this.getClosestProjectingParent()
t&&t.layout&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ln(),this.relativeTargetOrigin=ln(),it(this.relativeTargetOrigin,this.layout.layoutBox,t.layout.layoutBox),Lt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}var r,a,l
if((this.relativeTarget||this.targetDelta)&&(this.target||(this.target=ln(),this.targetWithTransforms=ln()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),r=this.target,a=this.relativeTarget,l=this.relativeParent.target,tt(r.x,a.x,l.x),tt(r.y,a.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Lt(this.target,this.layout.layoutBox),dt(this.target,this.targetDelta)):Lt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=0
const t=this.getClosestProjectingParent()
t&&Boolean(t.resumingFrom)===Boolean(this.resumingFrom)&&!t.options.layoutScroll&&t.target&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ln(),this.relativeTargetOrigin=ln(),it(this.relativeTargetOrigin,this.target,t.target),Lt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(this.parent&&!ot(this.parent.latestValues)&&!at(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var t
const e=this.getLead(),i=Boolean(this.resumingFrom)||this!==e
let n=1
if((this.isProjectionDirty||(null==(t=this.parent)?void 0:t.isProjectionDirty))&&(n=0),i&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=0),this.resolvedRelativeTargetAt===Oe.timestamp&&(n=0),n)return
const{layout:s,layoutId:o}=this.options
if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!s&&!o)return
Lt(this.layoutCorrected,this.layout.layoutBox)
const r=this.treeScale.x,a=this.treeScale.y
!function(t,e,i,n=0){const s=i.length
if(!s)return
let o,r
e.x=e.y=1
for(let a=0;a<s;a++){o=i[a],r=o.projectionDelta
const{visualElement:s}=o.options
s&&s.props.style&&"contents"===s.props.style.display||(n&&o.options.layoutScroll&&o.scroll&&o!==o.root&&ft(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),r&&(e.x*=r.x.scale,e.y*=r.y.scale,dt(t,r)),n&&rt(o.latestValues)&&ft(t,o.latestValues))}e.x<hn&&e.x>un&&(e.x=1),e.y<hn&&e.y>un&&(e.y=1)}(this.layoutCorrected,this.treeScale,this.path,i),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms=ln())
const{target:l}=e
l?(this.projectionDelta&&this.prevProjectionDelta?(Bt(this.prevProjectionDelta.x,this.projectionDelta.x),Bt(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),Q(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.treeScale.x===r&&this.treeScale.y===a&&zt(this.projectionDelta.x,this.prevProjectionDelta.x)&&zt(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=1,this.scheduleRender(),this.notifyListeners("projectionUpdate",l))):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=0}show(){this.isVisible=1}scheduleRender(t=1){var e
if(null==(e=this.options.visualElement)||e.scheduleRender(),t){const t=this.getStack()
t&&t.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=an(),this.projectionDelta=an(),this.projectionDeltaWithTransform=an()}setAnimationOrigin(t,e=0){const i=this.snapshot,n=i?i.latestValues:{},s={...this.latestValues},o=an()
this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!e
const r=ln(),a=(i?i.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,h=Boolean(a&&!u&&1==this.options.crossfade&&!this.path.some(ue))
let c
this.animationProgress=0,this.mixTargetDelta=e=>{const i=e/1e3
var l,d,p,m,f,g
ae(o.x,t.x,i),ae(o.y,t.y,i),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(it(r,this.layout.layoutBox,this.relativeParent.layout.layoutBox),p=this.relativeTarget,m=this.relativeTargetOrigin,f=r,g=i,le(p.x,m.x,f.x,g),le(p.y,m.y,f.y,g),c&&(l=this.relativeTarget,d=c,Wt(l.x,d.x)&&Wt(l.y,d.y))&&(this.isProjectionDirty=0),c||(c=ln()),Lt(c,this.relativeTarget)),a&&(this.animationValues=s,function(t,e,i,n,s,o){s?(t.opacity=Ie(0,i.opacity??1,Rn(n)),t.opacityExit=Ie(e.opacity??1,0,Mn(n))):o&&(t.opacity=Ie(e.opacity??1,i.opacity??1,n))
for(let r=0;r<An;r++){const s=`border${Vn[r]}Radius`
let o=Mt(e,s),a=Mt(i,s)
void 0===o&&void 0===a||(o||(o=0),a||(a=0),0===o||0===a||Dn(o)===Dn(a)?(t[s]=Math.max(Ie(En(o),En(a),n),0),(Xe.test(a)||Xe.test(o))&&(t[s]+="%")):t[s]=a)}(e.rotate||i.rotate)&&(t.rotate=Ie(e.rotate||0,i.rotate||0,n))}(s,n,this.latestValues,i,h,u)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=i},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(t){var e,i,n
this.notifyListeners("animationStart"),null==(e=this.currentAnimation)||e.stop(),null==(n=null==(i=this.resumingFrom)?void 0:i.currentAnimation)||n.stop(),this.pendingAnimation&&(We(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=je.update(()=>{vn.hasAnimatedSinceResize=1,this.motionValue||(this.motionValue=De(0)),this.currentAnimation=function(t,e,i){const n=Ae(t)?t:De(t)
return n.start(Qi("",n,[0,1e3],i)),n.animation}(this.motionValue,0,{...t,velocity:0,isSync:1,onUpdate:e=>{this.mixTargetDelta(e),t.onUpdate&&t.onUpdate(e)},onStop:()=>{},onComplete:()=>{t.onComplete&&t.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0)
const t=this.getStack()
t&&t.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const t=this.getLead()
let{targetWithTransforms:e,target:i,layout:n,latestValues:s}=t
if(e&&i&&n){if(this!==t&&this.layout&&n&&ce(this.options.animationType,this.layout.layoutBox,n.layoutBox)){i=this.target||ln()
const e=_(this.layout.layoutBox.x)
i.x.min=t.target.x.min,i.x.max=i.x.min+e
const n=_(this.layout.layoutBox.y)
i.y.min=t.target.y.min,i.y.max=i.y.min+n}Lt(e,i),ft(e,s),Q(this.projectionDeltaWithTransform,this.layoutCorrected,e,s)}}registerSharedNode(t,e){this.sharedNodes.has(t)||this.sharedNodes.set(t,new Ln),this.sharedNodes.get(t).add(e)
const i=e.options.initialPromotionConfig
e.promote({transition:i?i.transition:void 0,preserveFollowOpacity:i&&i.shouldPreserveFollowOpacity?i.shouldPreserveFollowOpacity(e):void 0})}isLead(){const t=this.getStack()
return t?t.lead===this:1}getLead(){var t
const{layoutId:e}=this.options
return e&&(null==(t=this.getStack())?void 0:t.lead)||this}getPrevLead(){var t
const{layoutId:e}=this.options
return e?null==(t=this.getStack())?void 0:t.prevLead:void 0}getStack(){const{layoutId:t}=this.options
if(t)return this.root.sharedNodes.get(t)}promote({needsReset:t,transition:e,preserveFollowOpacity:i}={}){const n=this.getStack()
n&&n.promote(this,i),t&&(this.projectionDelta=void 0,this.needsReset=1),e&&this.setOptions({transition:e})}relegate(){const t=this.getStack()
return t?t.relegate(this):0}resetSkewAndRotation(){const{visualElement:t}=this.options
if(!t)return
let e=0
const{latestValues:i}=t
if((i.z||i.rotate||i.rotateX||i.rotateY||i.rotateZ||i.skewX||i.skewY)&&(e=1),!e)return
const n={}
i.z&&Xt("z",t,n,this.animationValues)
for(let s=0;s<Bn.length;s++)Xt(`rotate${Bn[s]}`,t,n,this.animationValues),Xt(`skew${Bn[s]}`,t,n,this.animationValues)
t.render()
for(const s in n)t.setStaticValue(s,n[s]),this.animationValues&&(this.animationValues[s]=n[s])
t.scheduleRender()}getProjectionStyles(t){if(!this.instance||this.isSVG)return
if(!this.isVisible)return kn
const e={visibility:""},i=this.getTransformTemplate()
if(this.needsReset)return this.needsReset=0,e.opacity="",e.pointerEvents=E(null==t?void 0:t.pointerEvents)||"",e.transform=i?i(this.latestValues,""):"none",e
const n=this.getLead()
if(!this.projectionDelta||!this.layout||!n.target){const e={}
return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=E(null==t?void 0:t.pointerEvents)||""),this.hasProjected&&!rt(this.latestValues)&&(e.transform=i?i({},""):"none",this.hasProjected=0),e}const s=n.animationValues||n.latestValues
this.applyTransformsToTarget(),e.transform=function(t,e,i){let n=""
const s=t.x.translate/e.x,o=t.y.translate/e.y,r=(null==i?void 0:i.z)||0
if((s||o||r)&&(n=`translate3d(${s}px, ${o}px, ${r}px) `),1===e.x&&1===e.y||(n+=`scale(${1/e.x}, ${1/e.y}) `),i){const{transformPerspective:t,rotate:e,rotateX:s,rotateY:o,skewX:r,skewY:a}=i
t&&(n=`perspective(${t}px) ${n}`),e&&(n+=`rotate(${e}deg) `),s&&(n+=`rotateX(${s}deg) `),o&&(n+=`rotateY(${o}deg) `),r&&(n+=`skewX(${r}deg) `),a&&(n+=`skewY(${a}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y
return 1===a&&1===l||(n+=`scale(${a}, ${l})`),n||"none"}(this.projectionDeltaWithTransform,this.treeScale,s),i&&(e.transform=i(s,e.transform))
const{x:o,y:r}=this.projectionDelta
e.transformOrigin=`${100*o.origin}% ${100*r.origin}% 0`,n.animationValues?e.opacity=n===this?s.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:s.opacityExit:e.opacity=n===this?void 0!==s.opacity?s.opacity:"":void 0!==s.opacityExit?s.opacityExit:0
for(const a in Fi){if(void 0===s[a])continue
const{correct:t,applyTo:i,isCSSVariable:o}=Fi[a],r="none"===e.transform?s[a]:t(s[a],n)
if(i){const t=i.length
for(let n=0;n<t;n++)e[i[n]]=r}else o?this.options.visualElement.renderState.vars[a]=r:e[a]=r}return this.options.layoutId&&(e.pointerEvents=n===this?E(null==t?void 0:t.pointerEvents)||"":"none"),e}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(t=>{var e
return null==(e=t.currentAnimation)?void 0:e.stop()}),this.root.nodes.forEach(Qt),this.root.sharedNodes.clear()}}}function Kt(t){t.updateLayout()}function qt(t){var e
const i=(null==(e=t.resumeFrom)?void 0:e.snapshot)||t.snapshot
if(t.isLead()&&t.layout&&i&&t.hasListeners("didUpdate")){const{layoutBox:e,measuredBox:n}=t.layout,{animationType:s}=t.options,o=i.source!==t.layout.source
"size"===s?nt(t=>{const n=o?i.measuredBox[t]:i.layoutBox[t],s=_(n)
n.min=e[t].min,n.max=n.min+s}):ce(s,i.layoutBox,e)&&nt(n=>{const s=o?i.measuredBox[n]:i.layoutBox[n],r=_(e[n])
s.max=s.min+r,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=1,t.relativeTarget[n].max=t.relativeTarget[n].min+r)})
const r=an()
Q(r,e,i.layoutBox)
const a=an()
o?Q(a,t.applyTransform(n,1),i.measuredBox):Q(a,e,i.layoutBox)
const l=!Ut(r)
let u=0
if(!t.resumeFrom){const n=t.getClosestProjectingParent()
if(n&&!n.resumeFrom){const{snapshot:s,layout:o}=n
if(s&&o){const r=ln()
it(r,i.layoutBox,s.layoutBox)
const a=ln()
it(a,e,o.layoutBox),Nt(r,a)||(u=1),n.options.layoutRoot&&(t.relativeTarget=a,t.relativeTargetOrigin=r,t.relativeParent=n)}}}t.notifyListeners("didUpdate",{layout:e,snapshot:i,delta:a,layoutDelta:r,hasLayoutChanged:l,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:e}=t.options
e&&e()}t.options.transition=void 0}function Zt(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=Boolean(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function _t(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=0}function Jt(t){t.clearSnapshot()}function Qt(t){t.clearMeasurements()}function te(t){t.isLayoutDirty=0}function ee(t){const{visualElement:e}=t.options
e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function ie(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=1}function ne(t){t.resolveTargetDelta()}function se(t){t.calcProjection()}function oe(t){t.resetSkewAndRotation()}function re(t){t.removeLeadSnapshot()}function ae(t,e,i){t.translate=Ie(e.translate,0,i),t.scale=Ie(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function le(t,e,i,n){t.min=Ie(e.min,i.min,n),t.max=Ie(e.max,i.max,n)}function ue(t){return t.animationValues&&void 0!==t.animationValues.opacityExit}function he(t){t.min=Un(t.min),t.max=Un(t.max)}function ce(t,e,i){return"position"===t||"preserve-aspect"===t&&(n=Ht(e),s=Ht(i),!(Math.abs(n-s)<=.2))
var n,s}function de(t){var e
return t!==t.root&&(null==(e=t.scroll)?void 0:e.wasRoot)}function pe(t,e,i){const{props:n}=t
t.animationState&&n.whileHover&&t.animationState.setActive("whileHover","Start"===i)
const s=n["onHover"+i]
s&&je.postRender(()=>s(e,K(e)))}function me(t,e,i){const{props:n}=t
if(t.current instanceof HTMLButtonElement&&t.current.disabled)return
t.animationState&&n.whileTap&&t.animationState.setActive("whileTap","Start"===i)
const s=n["onTap"+("End"===i?"":i)]
s&&je.postRender(()=>s(e,K(e)))}function fe(t,{style:e,vars:i},n,s){Object.assign(t.style,e,s&&s.getProjectionStyles(n))
for(const o in i)t.style.setProperty(o,i[o])}function ge(t,{root:e,margin:i,amount:n,once:s=0,initial:o=0}={}){const[r,a]=ye.useState(o)
return ye.useEffect(()=>{if(!t.current||s&&r)return
const o={root:e&&e.current||void 0,margin:i,amount:n}
return function(t,e,{root:i,margin:n,amount:s="some"}={}){const o=pi(t),r=new WeakMap,a=new IntersectionObserver(t=>{t.forEach(t=>{const i=r.get(t.target)
if(t.isIntersecting!==Boolean(i))if(t.isIntersecting){const i=e(t.target,t)
"function"==typeof i?r.set(t.target,i):a.unobserve(t.target)}else"function"==typeof i&&(i(t),r.delete(t.target))})},{root:i,rootMargin:n,threshold:"number"==typeof s?s:as[s]})
return o.forEach(t=>a.observe(t)),()=>a.disconnect()}(t.current,()=>(a(1),s?void 0:()=>a(0)),o)},[e,t,i,s,n]),r}import{r as ye,j as ve}from"./react-core-CV8k_GRh.js"
import{i as xe,m as Pe,a as Se,t as we,b as Te,g as Ce,n as Ve,c as Ae,p as Ee,d as De,M as Re,e as Me,s as be,f as je,J as Le,A as Be,h as ke,j as Fe,k as Ie,l as Oe,o as Ue,q as We,r as $e,u as Ne,v as He,w as ze,x as Xe,y as Ye,z as Ge,B as Ke,C as qe,D as Ze,E as _e,S as Je,F as Qe,G as ti,H as ei,I as ii,K as ni,L as si,N as oi,O as ri,P as ai,Q as li,R as ui,T as hi,U as ci,V as di,W as pi}from"./vendor-misc-Bm4JrmXh.js"
const mi=ye.createContext({}),fi="undefined"!=typeof window,gi=fi?ye.useLayoutEffect:ye.useEffect,yi=ye.createContext(null),vi=ye.createContext({transformPagePoint:t=>t,isStatic:0,reducedMotion:"never"})
class xi extends ye.Component{getSnapshotBeforeUpdate(t){const e=this.props.childRef.current
if(e&&t.isPresent&&!this.props.isPresent){const t=e.offsetParent,i=xe(t)&&t.offsetWidth||0,n=this.props.sizeRef.current
n.height=e.offsetHeight||0,n.width=e.offsetWidth||0,n.top=e.offsetTop,n.left=e.offsetLeft,n.right=i-n.width-n.left}return null}componentDidUpdate(){}render(){return this.props.children}}const Pi=({children:n,initial:s,isPresent:o,onExitComplete:r,custom:a,presenceAffectsLayout:l,mode:u,anchorX:h})=>{const c=t(i),d=ye.useId()
let p=1,m=ye.useMemo(()=>(p=0,{id:d,initial:s,isPresent:o,custom:a,onExitComplete:t=>{c.set(t,1)
for(const e of c.values())if(!e)return
r&&r()},register:t=>(c.set(t,0),()=>c.delete(t))}),[o,c,r])
return l&&p&&(m={...m}),ye.useMemo(()=>{c.forEach((t,e)=>c.set(e,0))},[o]),ye.useEffect(()=>{!o&&!c.size&&r&&r()},[o]),"popLayout"===u&&(n=ve.jsx(e,{isPresent:o,anchorX:h,children:n})),ve.jsx(yi.Provider,{value:m,children:n})},Si=t=>t.key||"",wi=({children:e,custom:i,initial:o=1,onExitComplete:r,presenceAffectsLayout:a=1,mode:l="sync",propagate:u=0,anchorX:h="left"})=>{const[c,d]=n(u),p=ye.useMemo(()=>s(e),[e]),m=u&&!c?[]:p.map(Si),f=ye.useRef(1),g=ye.useRef(p),y=t(()=>new Map),[v,x]=ye.useState(p),[P,S]=ye.useState(p)
gi(()=>{f.current=0,g.current=p
for(let t=0;t<P.length;t++){const e=Si(P[t])
m.includes(e)?y.delete(e):1!=y.get(e)&&y.set(e,0)}},[P,m.length,m.join("-")])
const w=[]
if(p!==v){let t=[...p]
for(let e=0;e<P.length;e++){const i=P[e],n=Si(i)
m.includes(n)||(t.splice(e,0,i),w.push(i))}return"wait"===l&&w.length&&(t=w),S(s(t)),x(p),null}const{forceRender:T}=ye.useContext(mi)
return ve.jsx(ve.Fragment,{children:P.map(t=>{const e=Si(t),n=u&&!c?0:p===P||m.includes(e)
return ve.jsx(Pi,{isPresent:n,initial:!f.current||o?void 0:0,custom:i,presenceAffectsLayout:a,mode:l,onExitComplete:n?void 0:()=>{if(!y.has(e))return
y.set(e,1)
let t=1
y.forEach(e=>{e||(t=0)}),t&&(null==T||T(),S(g.current),u&&(null==d||d()),r&&r())},anchorX:h,children:t},e)})})},Ti=ye.createContext({strict:0}),Ci={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Vi={}
for(const ls in Ci)Vi[ls]={isEnabled:t=>Ci[ls].some(e=>!!t[e])}
const Ai=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"])
let Ei=t=>!o(t)
try{"function"==typeof(Di=require("@emotion/is-prop-valid").default)&&(Ei=t=>t.startsWith("on")?!o(t):Di(t))}catch{}var Di
const Ri=ye.createContext({}),Mi=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],bi=["initial",...Mi],ji=Symbol.for("motionComponentSymbol"),Li=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Bi="data-"+Li("framerAppearId"),ki=ye.createContext({}),Fi={},Ii={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Oi=Te.length,Ui={offset:"stroke-dashoffset",array:"stroke-dasharray"},Wi={offset:"strokeDashoffset",array:"strokeDasharray"},$i=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),Ni=t=>"string"==typeof t&&"svg"===t.toLowerCase(),Hi=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"],zi=e=>(i,n)=>{const s=ye.useContext(Ri),o=ye.useContext(yi),r=()=>function({scrapeMotionValuesFromProps:t,createRenderState:e},i,n,s){return{latestValues:D(i,n,s,t),renderState:e()}}(e,i,s,o)
return n?r():t(r)},Xi={useVisualState:zi({scrapeMotionValuesFromProps:R,createRenderState:()=>({style:{},transform:{},transformOrigin:{},vars:{}})})},Yi={useVisualState:zi({scrapeMotionValuesFromProps:M,createRenderState:$i})},Gi=r(b()),Ki=t=>Array.isArray(t),qi=t=>null!==t,Zi={type:"spring",stiffness:500,damping:25,restSpeed:10},_i={type:"keyframes",duration:.8},Ji={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Qi=(t,e,i,n={},s,o)=>r=>{const a=Me(n,t)||{},l=a.delay||n.delay||0
let{elapsed:u=0}=n
u-=be(l)
const h={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:t=>{e.set(t),a.onUpdate&&a.onUpdate(t)},onComplete:()=>{r(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:o?void 0:s};(function({when:t,delay:e,delayChildren:i,staggerChildren:n,staggerDirection:s,repeat:o,repeatType:r,repeatDelay:a,from:l,elapsed:u,...h}){return!!Object.keys(h).length})(a)||Object.assign(h,((t,{keyframes:e})=>e.length>2?_i:we.has(t)?t.startsWith("scale")?{type:"spring",stiffness:550,damping:0===e[1]?2*Math.sqrt(550):30,restSpeed:10}:Zi:Ji)(t,h)),h.duration&&(h.duration=be(h.duration)),h.repeatDelay&&(h.repeatDelay=be(h.repeatDelay)),void 0!==h.from&&(h.keyframes[0]=h.from)
let c=0
if((0==h.type||0===h.duration&&!h.repeatDelay)&&(h.duration=0,0===h.delay&&(c=1)),(Re.instantAnimations||Re.skipAnimations)&&(c=1,h.duration=0,h.delay=0),h.allowFlatten=!a.type&&!a.ease,c&&!o&&void 0!==e.get()){const t=function(t,{repeat:e,repeatType:i="loop"}){const n=t.filter(qi)
return n[e&&"loop"!==i&&e%2==1?0:n.length-1]}(h.keyframes,a)
if(void 0!==t)return void je.update(()=>{h.onUpdate(t),h.onComplete()})}return a.isSync?new Le(h):new Be(h)},tn=bi.length,en=[...Mi].reverse(),nn=Mi.length
class sn{constructor(t){this.isMounted=0,this.node=t}update(){}}let on=0
const rn={animation:{Feature:class extends sn{constructor(t){super(t),t.animationState||(t.animationState=H(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps()
a(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{}
t!==e&&this.updateAnimationControlsSubscription()}unmount(){var t
this.node.animationState.reset(),null==(t=this.unmountControls)||t.call(this)}}},exit:{Feature:class extends sn{constructor(){super(...arguments),this.id=on++}update(){if(!this.node.presenceContext)return
const{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{}
if(!this.node.animationState||t===i)return
const n=this.node.animationState.setActive("exit",!t)
e&&!t&&n.then(()=>{e(this.id)})}mount(){const{register:t,onExitComplete:e}=this.node.presenceContext||{}
e&&e(this.id),t&&(this.unmount=t(this.id))}unmount(){}}}},an=()=>({x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}),ln=()=>({x:{min:0,max:0},y:{min:0,max:0}}),un=.999999999999,hn=1.0000000000001,cn=({current:t})=>t?t.ownerDocument.defaultView:null,dn=(t,e)=>Math.abs(t-e)
class pn{constructor(t,e,{transformPagePoint:i,contextWindow:n,dragSnapToOrigin:s=0}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return
const t=xt(this.lastMoveEventInfo,this.history),e=null!==this.startEvent,i=function(t,e){const i=dn(t.x,e.x),n=dn(t.y,e.y)
return Math.sqrt(i**2+n**2)}(t.offset,{x:0,y:0})>=3
if(!e&&!i)return
const{point:n}=t,{timestamp:s}=Oe
this.history.push({...n,timestamp:s})
const{onStart:o,onMove:r}=this.handlers
e||(o&&o(this.lastMoveEvent,t),this.startEvent=this.lastMoveEvent),r&&r(this.lastMoveEvent,t)},this.handlePointerMove=(t,e)=>{this.lastMoveEvent=t,this.lastMoveEventInfo=yt(e,this.transformPagePoint),je.update(this.updatePoint,1)},this.handlePointerUp=(t,e)=>{this.end()
const{onEnd:i,onSessionEnd:n,resumeAnimation:s}=this.handlers
if(this.dragSnapToOrigin&&s&&s(),!this.lastMoveEvent||!this.lastMoveEventInfo)return
const o=xt("pointercancel"===t.type?this.lastMoveEventInfo:yt(e,this.transformPagePoint),this.history)
this.startEvent&&i&&i(t,o),n&&n(t,o)},!Fe(t))return
this.dragSnapToOrigin=s,this.handlers=e,this.transformPagePoint=i,this.contextWindow=n||window
const o=yt(K(t),this.transformPagePoint),{point:r}=o,{timestamp:a}=Oe
this.history=[{...r,timestamp:a}]
const{onSessionStart:l}=e
l&&l(t,xt(o,this.history)),this.removeListeners=Ue(q(this.contextWindow,"pointermove",this.handlePointerMove),q(this.contextWindow,"pointerup",this.handlePointerUp),q(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),We(this.updatePoint)}}const mn=.35,fn=new WeakMap
class gn{constructor(t){this.openDragLock=null,this.isDragging=0,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=0,this.hasMutatedConstraints=0,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=t}start(t,{snapToCursor:e=0}={}){const{presenceContext:i}=this.visualElement
if(i&&0==i.isPresent)return
const{dragSnapToOrigin:n}=this.getProps()
this.panSession=new pn(t,{onSessionStart:t=>{const{dragSnapToOrigin:i}=this.getProps()
i?this.pauseAnimation():this.stopAnimation(),e&&this.snapToCursor(K(t).point)},onStart:(t,e)=>{const{drag:i,dragPropagation:n,onDragStart:s}=this.getProps()
if(i&&!n&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ze(i),!this.openDragLock))return
this.isDragging=1,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=1,this.visualElement.projection.target=void 0),nt(t=>{let e=this.getAxisMotionValue(t).get()||0
if(Xe.test(e)){const{projection:i}=this.visualElement
if(i&&i.layout){const n=i.layout.layoutBox[t]
n&&(e=_(n)*(parseFloat(e)/100))}}this.originPoint[t]=e}),s&&je.postRender(()=>s(t,e)),k(this.visualElement,"transform")
const{animationState:o}=this.visualElement
o&&o.setActive("whileDrag",1)},onMove:(t,e)=>{const{dragPropagation:i,dragDirectionLock:n,onDirectionLock:s,onDrag:o}=this.getProps()
if(!i&&!this.openDragLock)return
const{offset:r}=e
if(n&&null===this.currentDirection)return this.currentDirection=function(t,e=10){let i=null
return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}(r),void(null!==this.currentDirection&&s&&s(this.currentDirection))
this.updateAxis("x",e.point,r),this.updateAxis("y",e.point,r),this.visualElement.render(),o&&o(t,e)},onSessionEnd:(t,e)=>this.stop(t,e),resumeAnimation:()=>nt(t=>{var e
return"paused"===this.getAnimationState(t)&&(null==(e=this.getAxisMotionValue(t).animation)?void 0:e.play())})},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:n,contextWindow:cn(this.visualElement)})}stop(t,e){const i=this.isDragging
if(this.cancel(),!i)return
const{velocity:n}=e
this.startAnimation(n)
const{onDragEnd:s}=this.getProps()
s&&je.postRender(()=>s(t,e))}cancel(){this.isDragging=0
const{projection:t,animationState:e}=this.visualElement
t&&(t.isAnimationBlocked=0),this.panSession&&this.panSession.end(),this.panSession=void 0
const{dragPropagation:i}=this.getProps()
!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),e&&e.setActive("whileDrag",0)}updateAxis(t,e,i){const{drag:n}=this.getProps()
if(!i||!Et(t,n,this.currentDirection))return
const s=this.getAxisMotionValue(t)
let o=this.originPoint[t]+i[t]
this.constraints&&this.constraints[t]&&(o=function(t,{min:e,max:i},n){return void 0!==e&&t<e?t=n?Ie(e,t,n.min):Math.max(t,e):void 0!==i&&t>i&&(t=n?Ie(i,t,n.max):Math.min(t,i)),t}(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t
const{dragConstraints:e,dragElastic:i}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(0):null==(t=this.visualElement.projection)?void 0:t.layout,s=this.constraints
e&&d(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=e&&n?function(t,{top:e,left:i,bottom:n,right:s}){return{x:Tt(t.x,i,s),y:Tt(t.y,e,n)}}(n.layoutBox,e):0,this.elastic=function(t=mn){return 0==t?t=0:1==t&&(t=mn),{x:Vt(t,"left","right"),y:Vt(t,"top","bottom")}}(i),s!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&nt(t=>{0!=this.constraints&&this.getAxisMotionValue(t)&&(this.constraints[t]=function(t,e){const i={}
return void 0!==e.min&&(i.min=e.min-t.min),void 0!==e.max&&(i.max=e.max-t.min),i}(n.layoutBox[t],this.constraints[t]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:e}=this.getProps()
if(!t||!d(t))return 0
const i=t.current,{projection:n}=this.visualElement
if(!n||!n.layout)return 0
const s=function(t,e,i){const n=gt(t,i),{scroll:s}=e
return s&&(pt(n.x,s.offset.x),pt(n.y,s.offset.y)),n}(i,n.root,this.visualElement.getTransformPagePoint())
let o=function(t,e){return{x:Ct(t.x,e.x),y:Ct(t.y,e.y)}}(n.layout.layoutBox,s)
if(e){const t=e(function({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}(o))
this.hasMutatedConstraints=!!t,t&&(o=Z(t))}return o}startAnimation(t){const{drag:e,dragMomentum:i,dragElastic:n,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:r}=this.getProps(),a=this.constraints||{},l=nt(r=>{if(!Et(r,e,this.currentDirection))return
let l=a&&a[r]||{}
o&&(l={min:0,max:0})
const u=n?200:1e6,h=n?40:1e7,c={type:"inertia",velocity:i?t[r]:0,bounceStiffness:u,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...s,...l}
return this.startAxisValueAnimation(r,c)})
return Promise.all(l).then(r)}startAxisValueAnimation(t,e){const i=this.getAxisMotionValue(t)
return k(this.visualElement,t),i.start(Qi(t,i,0,e,this.visualElement,0))}stopAnimation(){nt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){nt(t=>{var e
return null==(e=this.getAxisMotionValue(t).animation)?void 0:e.pause()})}getAnimationState(t){var e
return null==(e=this.getAxisMotionValue(t).animation)?void 0:e.state}getAxisMotionValue(t){const e=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps()
return i[e]||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){nt(e=>{const{drag:i}=this.getProps()
if(!Et(e,i,this.currentDirection))return
const{projection:n}=this.visualElement,s=this.getAxisMotionValue(e)
if(n&&n.layout){const{min:i,max:o}=n.layout.layoutBox[e]
s.set(t[e]-Ie(i,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return
const{drag:t,dragConstraints:e}=this.getProps(),{projection:i}=this.visualElement
if(!d(e)||!i||!this.constraints)return
this.stopAnimation()
const n={x:0,y:0}
nt(t=>{const e=this.getAxisMotionValue(t)
if(e&&0!=this.constraints){const i=e.get()
n[t]=function(t,e){let i=.5
const n=_(t),s=_(e)
return s>n?i=Ne(e.min,e.max-n,t.min):n>s&&(i=Ne(t.min,t.max-s,e.min)),He(0,1,i)}({min:i,max:i},this.constraints[t])}})
const{transformTemplate:s}=this.visualElement.getProps()
this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),nt(e=>{if(!Et(e,t,null))return
const i=this.getAxisMotionValue(e),{min:s,max:o}=this.constraints[e]
i.set(Ie(s,o,n[e]))})}addListeners(){if(!this.visualElement.current)return
fn.set(this.visualElement,this)
const t=q(this.visualElement.current,"pointerdown",t=>{const{drag:e,dragListener:i=1}=this.getProps()
e&&i&&this.start(t)}),e=()=>{const{dragConstraints:t}=this.getProps()
d(t)&&t.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,n=i.addEventListener("measure",e)
i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),je.read(e)
const s=G(window,"resize",()=>this.scalePositionWithinConstraints()),o=i.addEventListener("didUpdate",({delta:t,hasLayoutChanged:e})=>{this.isDragging&&e&&(nt(e=>{const i=this.getAxisMotionValue(e)
i&&(this.originPoint[e]+=t[e].translate,i.set(i.get()+t[e].translate))}),this.visualElement.render())})
return()=>{s(),t(),n(),o&&o()}}getProps(){const t=this.visualElement.getProps(),{drag:e=0,dragDirectionLock:i=0,dragPropagation:n=0,dragConstraints:s=0,dragElastic:o=mn,dragMomentum:r=1}=t
return{...t,drag:e,dragDirectionLock:i,dragPropagation:n,dragConstraints:s,dragElastic:o,dragMomentum:r}}}const yn=t=>(e,i)=>{t&&je.postRender(()=>t(e,i))},vn={hasAnimatedSinceResize:1,hasEverUpdated:0},xn={correct:(t,e)=>{if(!e.target)return t
if("string"==typeof t){if(!Ee.test(t))return t
t=parseFloat(t)}return`${Dt(t,e.target.x)}% ${Dt(t,e.target.y)}%`}},Pn={correct:(t,{treeScale:e,projectionDelta:i})=>{const n=t,s=Ge.parse(t)
if(s.length>5)return n
const o=Ge.createTransformer(t),r="number"!=typeof s[0]?1:0,a=i.x.scale*e.x,l=i.y.scale*e.y
s[0+r]/=a,s[1+r]/=l
const u=Ie(a,l,.5)
return"number"==typeof s[2+r]&&(s[2+r]/=u),"number"==typeof s[3+r]&&(s[3+r]/=u),o(s)}}
class Sn extends ye.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:i,layoutId:n}=this.props,{projection:s}=t
!function(t){for(const e in t)Fi[e]=t[e],Se(e)&&(Fi[e].isCSSVariable=1)}(wn),s&&(e.group&&e.group.add(s),i&&i.register&&n&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),vn.hasEverUpdated=1}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:i,drag:n,isPresent:s}=this.props,{projection:o}=i
return o?(o.isPresent=s,n||t.layoutDependency!==e||void 0===e||t.isPresent!==s?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||je.postRender(()=>{const t=o.getStack()
t&&t.members.length||this.safeToRemove()})),null):null}componentDidUpdate(){const{projection:t}=this.props.visualElement
t&&(t.root.didUpdate(),Pe.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:i}=this.props,{projection:n}=t
n&&(n.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(n),i&&i.deregister&&i.deregister(n))}safeToRemove(){const{safeToRemove:t}=this.props
t&&t()}render(){return null}}const wn={borderRadius:{...xn,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xn,borderTopRightRadius:xn,borderBottomLeftRadius:xn,borderBottomRightRadius:xn,boxShadow:Pn},Tn=(t,e)=>t.depth-e.depth
class Cn{constructor(){this.children=[],this.isDirty=0}add(t){Ke(this.children,t),this.isDirty=1}remove(t){qe(this.children,t),this.isDirty=1}forEach(t){this.isDirty&&this.children.sort(Tn),this.isDirty=0,this.children.forEach(t)}}const Vn=["TopLeft","TopRight","BottomLeft","BottomRight"],An=Vn.length,En=t=>"string"==typeof t?parseFloat(t):t,Dn=t=>"number"==typeof t||Ee.test(t),Rn=bt(0,.5,_e),Mn=bt(.5,.95,Ye),bn=["x","scaleX","originX"],jn=["y","scaleY","originY"]
class Ln{constructor(){this.members=[]}add(t){Ke(this.members,t),t.scheduleRender()}remove(t){if(qe(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const t=this.members[this.members.length-1]
t&&this.promote(t)}}relegate(t){const e=this.members.findIndex(e=>t===e)
if(0===e)return 0
let i
for(let n=e;n>=0;n--){const t=this.members[n]
if(0!=t.isPresent){i=t
break}}return i?(this.promote(i),1):0}promote(t,e){const i=this.lead
if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,e&&(t.resumeFrom.preserveOpacity=1),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=1)
const{crossfade:n}=t.options
0==n&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:e,resumingFrom:i}=t
e.onExitComplete&&e.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(0)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Bn=["","X","Y","Z"],kn={visibility:"hidden"}
let Fn=0
const In={duration:.45,ease:[.4,0,.1,1]},On=t=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Un=On("applewebkit/")&&!On("chrome/")?Math.round:Ye,Wn=Gt({attachResizeListener:(t,e)=>G(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>1}),$n={current:void 0},Nn=Gt({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!$n.current){const t=new Wn({})
t.mount(window),t.setOptions({layoutScroll:1}),$n.current=t}return $n.current},resetTransform:(t,e)=>{t.style.transform=void 0!==e?e:"none"},checkIsScrollRoot:t=>Boolean("fixed"===window.getComputedStyle(t).position)}),Hn={pan:{Feature:class extends sn{constructor(){super(...arguments),this.removePointerDownListener=Ye}onPointerDown(t){this.session=new pn(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:cn(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:e,onPan:i,onPanEnd:n}=this.node.getProps()
return{onSessionStart:yn(t),onStart:yn(e),onMove:i,onEnd:(t,e)=>{delete this.session,n&&je.postRender(()=>n(t,e))}}}mount(){this.removePointerDownListener=q(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends sn{constructor(t){super(t),this.removeGroupControls=Ye,this.removeListeners=Ye,this.controls=new gn(t)}mount(){const{dragControls:t}=this.node.getProps()
t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ye}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Nn,MeasureLayout:Rt}},zn=new WeakMap,Xn=new WeakMap,Yn=t=>{const e=zn.get(t.target)
e&&e(t)},Gn=t=>{t.forEach(Yn)},Kn={some:0,all:1},qn={inView:{Feature:class extends sn{constructor(){super(...arguments),this.hasEnteredView=0,this.isInView=0}startObserver(){this.unmount()
const{viewport:t={}}=this.node.getProps(),{root:e,margin:i,amount:n="some",once:s}=t,o={root:e?e.current:void 0,rootMargin:i,threshold:"number"==typeof n?n:Kn[n]}
return function(t,e,i){const n=function({root:t,...e}){const i=t||document
Xn.has(i)||Xn.set(i,{})
const n=Xn.get(i),s=JSON.stringify(e)
return n[s]||(n[s]=new IntersectionObserver(Gn,{root:t,...e})),n[s]}(e)
return zn.set(t,i),n.observe(t),()=>{zn.delete(t),n.unobserve(t)}}(this.node.current,o,t=>{const{isIntersecting:e}=t
if(this.isInView===e)return
if(this.isInView=e,s&&!e&&this.hasEnteredView)return
e&&(this.hasEnteredView=1),this.node.animationState&&this.node.animationState.setActive("whileInView",e)
const{onViewportEnter:i,onViewportLeave:n}=this.node.getProps(),o=e?i:n
o&&o(t)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return
const{props:t,prevProps:e}=this.node;["amount","margin","root"].some(function({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}(t,e))&&this.startObserver()}unmount(){}}},tap:{Feature:class extends sn{mount(){const{current:t}=this.node
t&&(this.unmount=ni(t,(t,e)=>(me(this.node,e,"Start"),(t,{success:e})=>me(this.node,t,e?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends sn{constructor(){super(...arguments),this.isActive=0}onFocus(){let t=0
try{t=this.node.current.matches(":focus-visible")}catch(e){t=1}t&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",1),this.isActive=1)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",0),this.isActive=0)}mount(){this.unmount=Ue(G(this.node.current,"focus",()=>this.onFocus()),G(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends sn{mount(){const{current:t}=this.node
t&&(this.unmount=ii(t,(t,e)=>(pe(this.node,e,"Start"),t=>pe(this.node,t,"End"))))}unmount(){}}}},Zn={layout:{ProjectionNode:Nn,MeasureLayout:Rt}},_n={current:null},Jn={current:0},Qn=new WeakMap,ts=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"]
class es{scrapeMotionValuesFromProps(t,e,i){return{}}constructor({parent:t,props:e,presenceContext:i,reducedMotionConfig:n,blockInitialAnimation:s,visualState:o},r={}){this.current=null,this.children=new Set,this.isVariantNode=0,this.isControllingVariants=0,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=si,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const t=Ze.now()
this.renderScheduledAt<t&&(this.renderScheduledAt=t,je.render(this.render,0,1))}
const{latestValues:a,renderState:l}=o
this.latestValues=a,this.baseTarget={...a},this.initialValues=e.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=e,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=n,this.options=r,this.blockInitialAnimation=Boolean(s),this.isControllingVariants=u(e),this.isVariantNode=h(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current)
const{willChange:c,...d}=this.scrapeMotionValuesFromProps(e,{},this)
for(const u in d){const t=d[u]
void 0!==a[u]&&Ae(t)&&t.set(a[u],0)}}mount(t){this.current=t,Qn.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,e)=>this.bindToMotionValue(e,t)),Jn.current||function(){if(Jn.current=1,fi)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>_n.current=t.matches
t.addListener(e),e()}else _n.current=0}(),this.shouldReduceMotion="never"===this.reducedMotionConfig?0:"always"===this.reducedMotionConfig?1:_n.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),We(this.notifyUpdate),We(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this)
for(const t in this.events)this.events[t].clear()
for(const t in this.features){const e=this.features[t]
e&&(e.unmount(),e.isMounted=0)}this.current=null}bindToMotionValue(t,e){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)()
const i=we.has(t)
i&&this.onBindTransform&&this.onBindTransform()
const n=e.on("change",e=>{this.latestValues[t]=e,this.props.onUpdate&&je.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=1)}),s=e.on("renderRequest",this.scheduleRender)
let o
window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,()=>{n(),s(),o&&o(),e.owner&&e.stop()})}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}updateFeatures(){let t="animation"
for(t in Vi){const e=Vi[t]
if(!e)continue
const{isEnabled:i,Feature:n}=e
if(!this.features[t]&&n&&i(this.props)&&(this.features[t]=new n(this)),this.features[t]){const e=this.features[t]
e.isMounted?e.update():(e.mount(),e.isMounted=1)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e
for(let i=0;i<ts.length;i++){const e=ts[i]
this.propEventSubscriptions[e]&&(this.propEventSubscriptions[e](),delete this.propEventSubscriptions[e])
const n=t["on"+e]
n&&(this.propEventSubscriptions[e]=this.on(e,n))}this.prevMotionValues=function(t,e,i){for(const n in e){const s=e[n],o=i[n]
if(Ae(s))t.addValue(n,s)
else if(Ae(o))t.addValue(n,De(s,{owner:t}))
else if(o!==s)if(t.hasValue(n)){const e=t.getValue(n)
1==e.liveStyle?e.jump(s):e.hasAnimated||e.set(s)}else{const e=t.getStaticValue(n)
t.addValue(n,De(void 0!==e?e:s,{owner:t}))}}for(const n in i)void 0===e[n]&&t.removeValue(n)
return e}(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const e=this.getClosestVariantNode()
if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){const i=this.values.get(t)
e!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t)
const e=this.valueSubscriptions.get(t)
e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t]
let i=this.values.get(t)
return void 0===i&&void 0!==e&&(i=De(null===e?void 0:e,{owner:this}),this.addValue(t,i)),i}readValue(t,e){let i=void 0===this.latestValues[t]&&this.current?this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options):this.latestValues[t]
return null!=i&&("string"==typeof i&&(oi(i)||ri(i))?i=parseFloat(i):!ai(i)&&Ge.test(e)&&(i=li(t,e)),this.setBaseTarget(t,Ae(i)?i.get():i)),Ae(i)?i.get():i}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var e
const{initial:i}=this.props
let n
if("string"==typeof i||"object"==typeof i){const s=A(this.props,i,null==(e=this.presenceContext)?void 0:e.custom)
s&&(n=s[t])}if(i&&void 0!==n)return n
const s=this.getBaseTargetFromProps(this.props,t)
return void 0===s||Ae(s)?void 0!==this.initialValues[t]&&void 0===n?void 0:this.baseTarget[t]:s}on(t,e){return this.events[t]||(this.events[t]=new Je),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class is extends es{constructor(){super(...arguments),this.KeyframeResolver=ui}sortInstanceNodePosition(t,e){return 2&t.compareDocumentPosition(e)?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:i}){delete e[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription)
const{children:t}=this.props
Ae(t)&&(this.childSubscription=t.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class ns extends is{constructor(){super(...arguments),this.type="html",this.renderInstance=fe}readValueFromInstance(t,e){var i,n
if(we.has(e))return(null==(i=this.projection)?void 0:i.isProjecting)?hi(e):ci(t,e)
{const i=(n=t,window.getComputedStyle(n)),s=(Se(e)?i.getPropertyValue(e):i[e])||0
return"string"==typeof s?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:e}){return gt(t,e)}build(t,e,i){v(t,e,i.transformTemplate)}scrapeMotionValuesFromProps(t,e,i){return R(t,e,i)}}const ss=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"])
class os extends is{constructor(){super(...arguments),this.type="svg",this.isSVGTag=0,this.measureInstanceViewportBox=ln}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(we.has(e)){const t=di(e)
return t&&t.default||0}return e=ss.has(e)?e:Li(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,i){return M(t,e,i)}build(t,e,i){S(t,e,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(t,e,i,n){!function(t,e,i,n){fe(t,e,void 0,n)
for(const s in e.attrs)t.setAttribute(ss.has(s)?s:Li(s),e.attrs[s])}(t,e,0,n)}mount(t){this.isSVGTag=Ni(t.tagName),super.mount(t)}}const rs=r(b({...rn,...qn,...Hn,...Zn},(t,e)=>T(t)?new os(e):new ns(e,{allowProjection:t!==ye.Fragment}))),as={some:0,all:1}
export{wi as A,Gi as a,rs as m,ge as u}
