function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(){return ze||(ze=1,Xe.exports=(Ne||(Ne=1,function(e){function t(e,t){var n=e.length
e.push(t)
e:for(;0<n;){var r=n-1>>>1,i=e[r]
if(!(0<s(i,t)))break e
e[r]=t,e[n]=i,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null
var t=e[0],n=e.pop()
if(n!==t){e[0]=n
e:for(var r=0,i=e.length,a=i>>>1;r<a;){var o=2*(r+1)-1,u=e[o],l=o+1,c=e[l]
if(0>s(u,n))l<i&&0>s(c,u)?(e[r]=c,e[l]=n,r=l):(e[r]=u,e[o]=n,r=o)
else{if(!(l<i&&0>s(c,n)))break e
e[r]=c,e[l]=n,r=l}}}return t}function s(e,t){var n=e.sortIndex-t.sortIndex
return 0!==n?n:e.id-t.id}function i(e){for(var s=n(m);null!==s;){if(null===s.callback)r(m)
else{if(!(s.startTime<=e))break
r(m),s.sortIndex=s.expirationTime,t(p,s)}s=n(m)}}function a(e){if(T=0,i(e),!w)if(null!==n(p))w=1,A||(A=1,f())
else{var t=n(m)
null!==t&&l(a,t.startTime-e)}}function o(){return k?1:e.unstable_now()-O<$?0:1}function u(){if(k=0,A){var t=e.unstable_now()
O=t
var s=1
try{e:{w=0,T&&(T=0,M(E),E=-1),b=1
var u=g
try{t:{for(i(t),y=n(p);null!==y&&!(y.expirationTime>t&&o());){var c=y.callback
if("function"==typeof c){y.callback=null,g=y.priorityLevel
var h=c(y.expirationTime<=t)
if(t=e.unstable_now(),"function"==typeof h){y.callback=h,i(t),s=1
break t}y===n(p)&&r(p),i(t)}else r(p)
y=n(p)}if(null!==y)s=1
else{var d=n(m)
null!==d&&l(a,d.startTime-t),s=0}}break e}finally{y=null,g=u,b=0}s=void 0}}finally{s?f():A=0}}}function l(t,n){E=x(function(){t(e.unstable_now())},n)}if(e.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var c=performance
e.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now()
e.unstable_now=function(){return h.now()-d}}var f,p=[],m=[],v=1,y=null,g=3,b=0,w=0,T=0,k=0,x="function"==typeof setTimeout?setTimeout:null,M="function"==typeof clearTimeout?clearTimeout:null,S="undefined"!=typeof setImmediate?setImmediate:null,A=0,E=-1,$=5,O=-1
if("function"==typeof S)f=function(){S(u)}
else if("undefined"!=typeof MessageChannel){var P=new MessageChannel,C=P.port2
P.port1.onmessage=u,f=function(){C.postMessage(null)}}else f=function(){x(u,0)}
e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e||($=0<e?Math.floor(1e3/e):5)},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_next=function(e){switch(g){case 1:case 2:case 3:var t=3
break
default:t=g}var n=g
g=t
try{return e()}finally{g=n}},e.unstable_requestPaint=function(){k=1},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break
default:e=3}var n=g
g=e
try{return t()}finally{g=n}},e.unstable_scheduleCallback=function(r,s,i){var o=e.unstable_now()
switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?o+i:o,r){case 1:var u=-1
break
case 2:u=250
break
case 5:u=1073741823
break
case 4:u=1e4
break
default:u=5e3}return r={id:v++,callback:s,priorityLevel:r,startTime:i,expirationTime:u=i+u,sortIndex:-1},i>o?(r.sortIndex=i,t(m,r),null===n(p)&&r===n(m)&&(T?(M(E),E=-1):T=1,l(a,i-o))):(r.sortIndex=u,t(p,r),w||b||(w=1,A||(A=1,f()))),r},e.unstable_shouldYield=o,e.unstable_wrapCallback=function(e){var t=g
return function(){var n=g
g=t
try{return e.apply(this,arguments)}finally{g=n}}}}(qe)),qe)),Xe.exports}function n(e){return e.trim()}function r(e,t){return(e=t.exec(e))?e[0]:e}function s(e,t,n){return e.replace(t,n)}function i(e,t,n){return e.indexOf(t,n)}function a(e,t){return 0|e.charCodeAt(t)}function o(e,t,n){return e.slice(t,n)}function u(e){return e.length}function l(e){return e.length}function c(e,t){return t.push(e),e}function h(e,t){return e.filter(function(e){return!r(e,t)})}function d(e,t,n,r,s,i,a,o){return{value:e,root:t,parent:n,type:r,props:s,children:i,line:ot,column:ut,length:a,return:"",siblings:o}}function f(e,t){return at(d("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function p(e){for(;e.root;)e=f(e.root,{children:[e]})
c(e,e.siblings)}function m(){return ht=ct>0?a(dt,--ct):0,ut--,10===ht&&(ut=1,ot--),ht}function v(){return ht=ct<lt?a(dt,ct++):0,ut++,10===ht&&(ut=1,ot++),ht}function y(){return a(dt,ct)}function g(){return ct}function b(e,t){return o(dt,e,t)}function w(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5
case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4
case 58:return 3
case 34:case 39:case 40:case 91:return 2
case 41:case 93:return 1}return 0}function T(e){return n(b(ct-1,M(91===e?e+2:40===e?e+1:e)))}function k(e){for(;(ht=y())&&ht<33;)v()
return w(e)>2||w(ht)>3?"":" "}function x(e,t){for(;--t&&v()&&!(ht<48||ht>102||ht>57&&ht<65||ht>70&&ht<97););return b(e,g()+(t<6&&32==y()&&32==v()))}function M(e){for(;v();)switch(ht){case e:return ct
case 34:case 39:34!==e&&39!==e&&M(ht)
break
case 40:41===e&&M(e)
break
case 92:v()}return ct}function S(e,t){for(;v()&&e+ht!==57&&(e+ht!==84||47!==y()););return"/*"+b(t,ct-1)+"*"+it(47===e?e:v())}function A(e){for(;!w(y());)v()
return b(e,ct)}function E(e){return function(e){return dt="",e}($("",null,null,null,[""],e=function(e){return ot=ut=1,lt=u(dt=e),ct=0,[]}(e),0,[0],e))}function $(e,t,n,r,o,l,h,d,f){for(var p=0,b=0,w=h,M=0,E=0,F=0,I=1,R=1,D=1,V=0,_="",L=o,K=l,N=r,z=_;R;)switch(F=V,V=v()){case 40:if(108!=F&&58==a(z,w-1)){-1!=i(z+=s(T(V),"&","&\f"),"&\f",st(p?d[p-1]:0))&&(D=-1)
break}case 34:case 39:case 91:z+=T(V)
break
case 9:case 10:case 13:case 32:z+=k(F)
break
case 92:z+=x(g()-1,7)
continue
case 47:switch(y()){case 42:case 47:c(P(S(v(),g()),t,n,f),f)
break
default:z+="/"}break
case 123*I:d[p++]=u(z)*D
case 125*I:case 59:case 0:switch(V){case 0:case 125:R=0
case 59+b:-1==D&&(z=s(z,/\f/g,"")),E>0&&u(z)-w&&c(E>32?C(z+";",r,n,w-1,f):C(s(z," ","")+";",r,n,w-2,f),f)
break
case 59:z+=";"
default:if(c(N=O(z,t,n,p,b,o,d,_,L=[],K=[],w,l),l),123===V)if(0===b)$(z,t,N,N,L,l,w,d,K)
else switch(99===M&&110===a(z,3)?100:M){case 100:case 108:case 109:case 115:$(e,N,N,r&&c(O(e,N,N,0,0,o,d,_,o,L=[],w,K),K),o,K,w,d,r?L:K)
break
default:$(z,N,N,N,[""],K,0,d,K)}}p=b=E=0,I=D=1,_=z="",w=h
break
case 58:w=1+u(z),E=F
default:if(I<1)if(123==V)--I
else if(125==V&&0==I++&&125==m())continue
switch(z+=it(V),V*I){case 38:D=b>0?1:(z+="\f",-1)
break
case 44:d[p++]=(u(z)-1)*D,D=1
break
case 64:45===y()&&(z+=T(v())),M=y(),b=w=u(_=z+=A(g())),V++
break
case 45:45===F&&2==u(z)&&(I=0)}}return l}function O(e,t,r,i,a,u,c,h,f,p,m,v){for(var y=a-1,g=0===a?u:[""],b=l(g),w=0,T=0,k=0;w<i;++w)for(var x=0,M=o(e,y+1,y=st(T=c[w])),S=e;x<b;++x)(S=n(T>0?g[x]+" "+M:s(M,/&\f/g,g[x])))&&(f[k++]=S)
return d(e,t,r,0===a?tt:h,f,p,m,v)}function P(e,t,n,r){return d(e,t,n,et,it(ht),o(e,2,-2),0,r)}function C(e,t,n,r,s){return d(e,t,n,nt,o(e,0,r),o(e,r+1,-1),r,s)}function F(e,t,n){switch(function(e,t){return 45^a(e,0)?(((t<<2^a(e,0))<<2^a(e,1))<<2^a(e,2))<<2^a(e,3):0}(e,t)){case 5103:return Qe+"print-"+e+e
case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Qe+e+e
case 4789:return Je+e+e
case 5349:case 4246:case 4810:case 6968:case 2756:return Qe+e+Je+e+He+e+e
case 5936:switch(a(e,t+11)){case 114:return Qe+e+He+s(e,/[svh]\w+-[tblr]{2}/,"tb")+e
case 108:return Qe+e+He+s(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e
case 45:return Qe+e+He+s(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Qe+e+He+e+e
case 6165:return Qe+e+He+"flex-"+e+e
case 5187:return Qe+e+s(e,/(\w+).+(:[^]+)/,Qe+"box-$1$2"+He+"flex-$1$2")+e
case 5443:return Qe+e+He+"flex-item-"+s(e,/flex-|-self/g,"")+(r(e,/flex-|baseline/)?"":He+"grid-row-"+s(e,/flex-|-self/g,""))+e
case 4675:return Qe+e+He+"flex-line-pack"+s(e,/align-content|flex-|-self/g,"")+e
case 5548:return Qe+e+He+s(e,"shrink","negative")+e
case 5292:return Qe+e+He+s(e,"basis","preferred-size")+e
case 6060:return Qe+"box-"+s(e,"-grow","")+Qe+e+He+s(e,"grow","positive")+e
case 4554:return Qe+s(e,/([^-])(transform)/g,"$1"+Qe+"$2")+e
case 6187:return s(s(s(e,/(zoom-|grab)/,Qe+"$1"),/(image-set)/,Qe+"$1"),e,"")+e
case 5495:case 3959:return s(e,/(image-set\([^]*)/,Qe+"$1$`$1")
case 4968:return s(s(e,/(.+:)(flex-)?(.*)/,Qe+"box-pack:$3"+He+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Qe+e+e
case 4200:if(!r(e,/flex-|baseline/))return He+"grid-column-align"+o(e,t)+e
break
case 2592:case 3360:return He+s(e,"template-","")+e
case 4384:case 3616:return n&&n.some(function(e,n){return t=n,r(e.props,/grid-\w+-end/)})?~i(e+(n=n[t].value),"span",0)?e:He+s(e,"-start","")+e+He+"grid-row-span:"+(~i(n,"span",0)?r(n,/\d+/):+r(n,/\d+/)-+r(e,/\d+/))+";":He+s(e,"-start","")+e
case 4896:case 4128:return n&&n.some(function(e){return r(e.props,/grid-\w+-start/)})?e:He+s(s(e,"-end","-span"),"span ","")+e
case 4095:case 3583:case 4068:case 2532:return s(e,/(.+)-inline(.+)/,Qe+"$1$2")+e
case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(u(e)-1-t>6)switch(a(e,t+1)){case 109:if(45!==a(e,t+4))break
case 102:return s(e,/(.+:)(.+)-([^]+)/,"$1"+Qe+"$2-$3$1"+Je+(108==a(e,t+3)?"$3":"$2-$3"))+e
case 115:return~i(e,"stretch",0)?F(s(e,"stretch","fill-available"),t,n)+e:e}break
case 5152:case 5920:return s(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,s,i,a,o){return He+n+":"+r+o+(s?He+n+"-span:"+(i?a:+a-+r)+o:"")+e})
case 4949:if(121===a(e,t+6))return s(e,":",":"+Qe)+e
break
case 6444:switch(a(e,45===a(e,14)?18:11)){case 120:return s(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Qe+(45===a(e,14)?"inline-":"")+"box$3$1"+Qe+"$2$3$1"+He+"$2box$3")+e
case 100:return s(e,":",":"+He)+e}break
case 5719:case 2647:case 2135:case 3927:case 2391:return s(e,"scroll-","scroll-snap-")+e}return e}function I(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||""
return n}function R(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break
case"@import":case nt:return e.return=e.return||e.value
case et:return""
case rt:return e.return=e.value+"{"+I(e.children,r)+"}"
case tt:if(!u(e.value=e.props.join(",")))return""}return u(n=I(e.children,r))?e.return=e.value+"{"+n+"}":""}function D(e){var t=l(e)
return function(n,r,s,i){for(var a="",o=0;o<t;o++)a+=e[o](n,r,s,i)||""
return a}}function V(e){return function(t){t.root||(t=t.return)&&e(t)}}function _(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case nt:return void(e.return=F(e.value,e.length,n))
case rt:return I([f(e,{value:s(e.value,"@","@"+Qe)})],i)
case tt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(r(t,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":p(f(e,{props:[s(t,/:(read-\w+)/,":-moz-$1")]})),p(f(e,{props:[t]})),at(e,{props:h(n,i)})
break
case"::placeholder":p(f(e,{props:[s(t,/:(plac\w+)/,":"+Qe+"input-$1")]})),p(f(e,{props:[s(t,/:(plac\w+)/,":-moz-$1")]})),p(f(e,{props:[s(t,/:(plac\w+)/,He+"input-$1")]})),p(f(e,{props:[t]})),at(e,{props:h(n,i)})}return""})}}function L(e,t){-1===e.indexOf(t)&&e.push(t)}function K(e,t){const n=e.indexOf(t)
n>-1&&e.splice(n,1)}function N(e){return"object"==typeof e&&null!==e}function z(e){let t
return()=>(void 0===t&&(t=e()),t)}function j(e,t){return t?e*(1e3/t):0}function W(e,t,n,r){return e===t&&n===r?bt:s=>0===s||1===s?s:At(function(e,t,n,r,s){let i,a,o=0
do{a=t+(n-t)/2,i=At(a,r,s)-e,i>0?n=a:t=a}while(Math.abs(i)>1e-7&&++o<12)
return a}(s,0,1,e,n),t,r)}function Y(e,t){let n=0,r=1
const s={delta:0,timestamp:0,isProcessing:0},i=()=>n=1,a=jt.reduce((e,n)=>(e[n]=function(e,t){function n(t){o.has(t)&&(c.schedule(t),e()),l++,t(u)}let r=new Set,s=new Set,i=0,a=0
const o=new WeakSet
let u={delta:0,timestamp:0,isProcessing:0},l=0
const c={schedule:(e,t=0,n=0)=>{const a=n&&i?r:s
return t&&o.add(e),a.has(e)||a.add(e),e},cancel:e=>{s.delete(e),o.delete(e)},process:e=>{u=e,i?a=1:(i=1,[r,s]=[s,r],r.forEach(n),t&&Wt.value&&Wt.value.frameloop[t].push(l),l=0,r.clear(),i=0,a&&(a=0,c.process(e)))}}
return c}(i,t?n:void 0),e),{}),{setup:o,read:u,resolveKeyframes:l,preUpdate:c,update:h,preRender:d,render:f,postRender:p}=a,m=()=>{const i=vt.useManualTiming?s.timestamp:performance.now()
n=0,vt.useManualTiming||(s.delta=r?1e3/60:Math.max(Math.min(i-s.timestamp,40),1)),s.timestamp=i,s.isProcessing=1,o.process(s),u.process(s),l.process(s),c.process(s),h.process(s),d.process(s),f.process(s),p.process(s),s.isProcessing=0,n&&t&&(r=0,e(m))}
return{schedule:jt.reduce((t,i)=>{const o=a[i]
return t[i]=(t,i=0,a=0)=>(n||(n=1,r=1,s.isProcessing||e(m)),o.schedule(t,i,a)),t},{}),cancel:e=>{for(let t=0;t<jt.length;t++)a[jt[t]].cancel(e)},state:s,steps:a}}function X(){Ut=void 0}function q(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},s=[]
let i=0
const a=t.replace(Sn,e=>(Tn.test(e)?(r.color.push(i),s.push(Mn),n.push(Tn.parse(e))):e.startsWith("var(")?(r.var.push(i),s.push("var"),n.push(e)):(r.number.push(i),s.push(xn),n.push(parseFloat(e))),++i,"${}")).split("${}")
return{values:n,split:a,indexes:r,types:s}}function B(e){return q(e).values}function U(e){const{split:t,types:n}=q(e),r=t.length
return e=>{let s=""
for(let i=0;i<r;i++)if(s+=t[i],void 0!==e[i]){const t=n[i]
s+=t===xn?sn(e[i]):t===Mn?Tn.transform(e[i]):e[i]}return s}}function G(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Z(e,t){return n=>n>0?t:e}function H(e){const t=(n=e,Pn.find(e=>e.test(n)))
var n
if(!Boolean(t))return 0
let r=t.parse(e)
return t===wn&&(r=function({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,n/=100
let s=0,i=0,a=0
if(t/=100){const r=n<.5?n*(1+t):n+t-n*t,o=2*n-r
s=G(o,r,e+1/3),i=G(o,r,e),a=G(o,r,e-1/3)}else s=i=a=n
return{red:Math.round(255*s),green:Math.round(255*i),blue:Math.round(255*a),alpha:r}}(r)),r}function J(e,t){return n=>$n(e,t,n)}function Q(e){return"number"==typeof e?J:"string"==typeof e?Qt(e)?Z:Tn.test(e)?Cn:In:Array.isArray(e)?ee:"object"==typeof e?Tn.test(e)?Cn:te:Z}function ee(e,t){const n=[...e],r=n.length,s=e.map((e,n)=>Q(e)(e,t[n]))
return e=>{for(let t=0;t<r;t++)n[t]=s[t](e)
return n}}function te(e,t){const n={...e,...t},r={}
for(const s in n)void 0!==e[s]&&void 0!==t[s]&&(r[s]=Q(e[s])(e[s],t[s]))
return e=>{for(const t in r)n[t]=r[t](e)
return n}}function ne(e,t,n){return"number"==typeof e&&"number"==typeof t&&"number"==typeof n?$n(e,t,n):Q(e)(e,t)}function re(e){let t=0,n=e.next(t)
for(;!n.done&&t<Vn;)t+=50,n=e.next(t)
return t>=Vn?1/0:t}function se(e,t,n){const r=Math.max(t-5,0)
return j(n-e(r),t-r)}function ie(e,t){return e*Math.sqrt(1-t*t)}function ae(e,t){return t.some(t=>void 0!==e[t])}function oe(e=Wn,t=jn){const n="object"!=typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e
let{restSpeed:r,restDelta:s}=n
const i=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],o={done:0,value:i},{stiffness:u,damping:l,mass:c,duration:h,velocity:d,isResolvedFromDuration:f}=function(e){let t={velocity:Nn,stiffness:_n,damping:Ln,mass:Kn,isResolvedFromDuration:0,...e}
if(!ae(e,Qn)&&ae(e,Jn))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),s=r*r,i=2*mt(.05,1,1-(e.bounce||0))*Math.sqrt(s)
t={...t,mass:Kn,stiffness:s,damping:i}}else{const n=function({duration:e=zn,bounce:t=jn,velocity:n=Nn,mass:r=Kn}){let s,i,a=1-t
a=mt(Un,Gn,a),e=mt(qn,Bn,St(e)),a<1?(s=t=>{const r=t*a,s=r*e,i=r-n,o=ie(t,a),u=Math.exp(-s)
return Zn-i/o*u},i=t=>{const r=t*a*e,i=r*n+n,o=Math.pow(a,2)*Math.pow(t,2)*e,u=Math.exp(-r),l=ie(Math.pow(t,2),a)
return(-s(t)+Zn>0?-1:1)*((i-o)*u)/l}):(s=t=>Math.exp(-t*e)*((t-n)*e+1)-.001,i=t=>Math.exp(-t*e)*(e*e*(n-t)))
const o=function(e,t,n){let r=n
for(let s=1;s<Hn;s++)r-=e(r)/t(r)
return r}(s,i,5/e)
if(e=Mt(e),isNaN(o))return{stiffness:_n,damping:Ln,duration:e}
{const t=Math.pow(o,2)*r
return{stiffness:t,damping:2*a*Math.sqrt(r*t),duration:e}}}(e)
t={...t,...n,mass:Kn},t.isResolvedFromDuration=1}return t}({...n,velocity:-St(n.velocity||0)}),p=d||0,m=l/(2*Math.sqrt(u*c)),v=a-i,y=St(Math.sqrt(u/c)),g=Math.abs(v)<5
let b
if(r||(r=g?Yn.granular:Yn.default),s||(s=g?Xn.granular:Xn.default),m<1){const e=ie(y,m)
b=t=>{const n=Math.exp(-m*y*t)
return a-n*((p+m*y*v)/e*Math.sin(e*t)+v*Math.cos(e*t))}}else if(1===m)b=e=>a-Math.exp(-y*e)*(v+(p+y*v)*e)
else{const e=y*Math.sqrt(m*m-1)
b=t=>{const n=Math.exp(-m*y*t),r=Math.min(e*t,300)
return a-n*((p+m*y*v)*Math.sinh(r)+e*v*Math.cosh(r))/e}}const w={calculatedDuration:f&&h||null,next:e=>{const t=b(e)
if(f)o.done=e>=h
else{let n=0===e?p:0
m<1&&(n=0===e?Mt(p):se(b,e,t))
const i=Math.abs(n)<=r,u=Math.abs(a-t)<=s
o.done=i&&u}return o.value=o.done?a:t,o},toString:()=>{const e=Math.min(re(w),Vn),t=Dn(t=>w.next(e*t).value,e,30)
return e+"ms "+t},toTransition:()=>{}}
return w}function ue({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:s=10,bounceStiffness:i=500,modifyTarget:a,min:o,max:u,restDelta:l=.5,restSpeed:c}){const h=e[0],d={done:0,value:h},f=e=>void 0===o?u:void 0===u||Math.abs(o-e)<Math.abs(u-e)?o:u
let p=n*t
const m=h+p,v=void 0===a?m:a(m)
v!==m&&(p=v-h)
const y=e=>-p*Math.exp(-e/r),g=e=>v+y(e),b=e=>{const t=y(e),n=g(e)
d.done=Math.abs(t)<=l,d.value=d.done?v:n}
let w,T
const k=e=>{var t
t=d.value,(void 0!==o&&t<o||void 0!==u&&t>u)&&(w=e,T=oe({keyframes:[d.value,f(d.value)],velocity:se(g,e,d.value),damping:s,stiffness:i,restDelta:l,restSpeed:c}))}
return k(0),{calculatedDuration:null,next:e=>{let t=0
return T||void 0!==w||(t=1,b(e),k(e)),void 0!==w&&e>=w?T.next(e-w):(!t&&b(e),d)}}}function le({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const s=(e=>Array.isArray(e)&&"number"!=typeof e[0])(r)?r.map(zt):zt(r),i={done:0,value:t[0]},a=function(e,t){return e.map(e=>e*t)}(n&&n.length===t.length?n:function(e){const t=[0]
return function(e,t){const n=e[e.length-1]
for(let r=1;r<=t;r++){const s=kt(0,t,r)
e.push($n(n,1,s))}}(t,e.length-1),t}(t),e),o=function(e,t,{clamp:n=1,ease:r,mixer:s}={}){const i=e.length
if(t.length,1===i)return()=>t[0]
if(2===i&&t[0]===t[1])return()=>t[1]
const a=e[0]===e[1]
e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse())
const o=function(e,t,n){const r=[],s=n||vt.mix||ne,i=e.length-1
for(let a=0;a<i;a++){let n=s(e[a],e[a+1])
if(t){const e=Array.isArray(t)?t[a]||bt:t
n=Tt(e,n)}r.push(n)}return r}(t,r,s),u=o.length,l=n=>{if(a&&n<e[0])return t[0]
let r=0
if(u>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const s=kt(e[r],e[r+1],n)
return o[r](s)}
return n?t=>l(mt(e[0],e[i-1],t)):l}(a,t,{ease:Array.isArray(s)?s:(u=t,l=s,u.map(()=>l||Lt).splice(0,u.length-1))})
var u,l
return{calculatedDuration:e,next:t=>(i.value=o(t),i.done=t>=e,i)}}function ce(e,{repeat:t,repeatType:n="loop"},r,s=1){const i=e.filter(er),a=s<0||t&&"loop"!==n&&t%2==1?0:i.length-1
return a&&void 0!==r?r:i[a]}function he(e){"string"==typeof e.type&&(e.type=tr[e.type])}function de(e){return e.includes("scale")?1:0}function fe(e,t){if(!e||"none"===e)return de(t)
const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u)
let r,s
if(n)r=hr,s=n
else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u)
r=or,s=t}if(!s)return de(t)
const i=r[t],a=s[1].split(",").map(pe)
return"function"==typeof i?i(a):a[i]}function pe(e){return parseFloat(e.trim())}function me(){if(Tr){const e=Array.from(br).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map
t.forEach(e=>{const t=function(e){const t=[]
return yr.forEach(n=>{const r=e.getValue(n)
void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}(e)
t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render()
const t=n.get(e)
t&&t.forEach(([t,n])=>{var r
null==(r=e.getValue(t))||r.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}Tr=0,wr=0,br.forEach(e=>e.complete(kr)),br.clear()}function ve(){br.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Tr=1)})}function ye(e,t){const n=z(e)
return()=>Sr[t]??n()}function ge(e,t){return e?"function"==typeof e?Ar()?Dn(e,t):"ease-out":Kt(e)?Er(e):Array.isArray(e)?e.map(e=>ge(e,t)||$r.easeOut):$r[e]:void 0}function be(e,t,n,{delay:r=0,duration:s=300,repeat:i=0,repeatType:a="loop",ease:o="easeOut",times:u}={},l){const c={[t]:n}
u&&(c.offset=u)
const h=ge(o,s)
Array.isArray(h)&&(c.easing=h)
const d={delay:r,duration:s,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:i+1,direction:"reverse"===a?"alternate":"normal"}
return l&&(d.pseudoElement=l),e.animate(c,d)}function we(e){return"function"==typeof e&&"applyToOptions"in e}function Te(e){return N(e)&&"offsetHeight"in e}function ke(e,t,n=1){const[r,s]=function(e){const t=Vr.exec(e)
if(!t)return[,]
const[,n,r,s]=t
return[`--${n??r}`,s]}(e)
if(!r)return
const i=window.getComputedStyle(t).getPropertyValue(r)
if(i){const e=i.trim()
return yt(e)?parseFloat(e):e}return Qt(s)?ke(s,t,n+1):s}function xe(e,t){return(null==e?void 0:e[t])??(null==e?void 0:e.default)??e}function Me(e){return"number"==typeof e?0===e:null!==e?"none"===e||"0"===e||gt(e):1}function Se(e){const[t,n]=e.slice(0,-1).split("(")
if("drop-shadow"===t)return e
const[r]=n.match(an)||[]
if(!r)return e
const s=n.replace(r,"")
let i=zr.has(t)?1:0
return r!==n&&(i*=100),t+"("+i+s+")"}function Ae(e,t){let n=Br(e)
return n!==Wr&&(n=En),n.getAnimatableNone?n.getAnimatableNone(t):void 0}function Ee(e){if(e instanceof EventTarget)return[e]
if("string"==typeof e){const t=document.querySelectorAll(e)
return t?Array.from(t):[]}return Array.from(e)}function $e(e,t){return new Hr(e,t)}function Oe(){return Qr.x||Qr.y}function Pe(e){return"x"===e||"y"===e?Qr[e]?null:(Qr[e]=1,()=>{Qr[e]=0}):Qr.x||Qr.y?null:(Qr.x=Qr.y=1,()=>{Qr.x=Qr.y=0})}function Ce(e,t){const n=Ee(e),r=new AbortController
return[n,{passive:1,...t,signal:r.signal},()=>r.abort()]}function Fe(e){return!("touch"===e.pointerType||Oe())}function Ie(e,t,n={}){const[r,s,i]=Ce(e,n),a=e=>{if(!Fe(e))return
const{target:n}=e,r=t(n,e)
if("function"!=typeof r||!n)return
const i=e=>{Fe(e)&&(r(e),n.removeEventListener("pointerleave",i))}
n.addEventListener("pointerleave",i,s)}
return r.forEach(e=>{e.addEventListener("pointerenter",a,s)}),i}function Re(e){return t=>{"Enter"===t.key&&e(t)}}function De(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:1,bubbles:1}))}function Ve(e){return ts(e)&&!Oe()}function _e(e,t,n={}){const[r,s,i]=Ce(e,n),a=e=>{const r=e.currentTarget
if(!Ve(e))return
rs.add(r)
const i=t(r,e),a=(e,t)=>{window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",u),rs.has(r)&&rs.delete(r),Ve(e)&&"function"==typeof i&&i(e,{success:t})},o=e=>{a(e,r===window||r===document||n.useGlobalTarget||es(r,e.target))},u=e=>{a(e,0)}
window.addEventListener("pointerup",o,s),window.addEventListener("pointercancel",u,s)}
return r.forEach(e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",a,s),Te(e)&&(e.addEventListener("focus",e=>((e,t)=>{const n=e.currentTarget
if(!n)return
const r=Re(()=>{if(rs.has(n))return
De(n,"down")
const e=Re(()=>{De(n,"up")})
n.addEventListener("keyup",e,t),n.addEventListener("blur",()=>De(n,"cancel"),t)})
n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)})(e,s)),t=e,ns.has(t.tagName)||-1!==t.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))}),i}function Le(e){return N(e)&&"ownerSVGElement"in e}function Ke(e){return Le(e)&&"svg"===e.tagName}var Ne,ze,je,We,Ye,Xe={exports:{}},qe={},Be={}
!function(){function e(e,t,n){do{const n=e.charCodeAt(t)
if(32!==n&&9!==n)return t}while(++t<n)
return n}function t(e,t,n){for(;t>n;){const n=e.charCodeAt(--t)
if(32!==n&&9!==n)return t+1}return n}function n(e){if(-1===e.indexOf("%"))return e
try{return decodeURIComponent(e)}catch(t){return e}}if(je)return Be
je=1,Object.defineProperty(Be,"__esModule",{value:1}),Be.parse=function(r,s){const i=new u,a=r.length
if(a<2)return i
const o=(null==s?void 0:s.decode)||n
let l=0
do{const n=r.indexOf("=",l)
if(-1===n)break
const s=r.indexOf(";",l),u=-1===s?a:s
if(n>u){l=r.lastIndexOf(";",n-1)+1
continue}const c=e(r,l,n),h=t(r,n,c),d=r.slice(c,h)
if(void 0===i[d]){let s=e(r,n+1,u),a=t(r,u,s)
const l=o(r.slice(s,a))
i[d]=l}l=u+1}while(l<a)
return i},Be.serialize=function(e,t,n){const u=(null==n?void 0:n.encode)||encodeURIComponent
if(!r.test(e))throw new TypeError(`argument name is invalid: ${e}`)
const l=u(t)
if(!s.test(l))throw new TypeError(`argument val is invalid: ${t}`)
let c=e+"="+l
if(!n)return c
if(void 0!==n.maxAge){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`)
c+="; Max-Age="+n.maxAge}if(n.domain){if(!i.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`)
c+="; Domain="+n.domain}if(n.path){if(!a.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`)
c+="; Path="+n.path}if(n.expires){if(!function(e){return"[object Date]"===o.call(e)}(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`)
c+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(c+="; HttpOnly"),n.secure&&(c+="; Secure"),n.partitioned&&(c+="; Partitioned"),n.priority)switch("string"==typeof n.priority?n.priority.toLowerCase():void 0){case"low":c+="; Priority=Low"
break
case"medium":c+="; Priority=Medium"
break
case"high":c+="; Priority=High"
break
default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case 1:case"strict":c+="; SameSite=Strict"
break
case"lax":c+="; SameSite=Lax"
break
case"none":c+="; SameSite=None"
break
default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return c}
const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const e=function(){}
return e.prototype=Object.create(null),e})()}()
const Ue=e(Ye?We:(Ye=1,We=function(e,t,n,r){var s=n?n.call(r,e,t):void 0
if(void 0!==s)return!!s
if(e===t)return 1
if("object"!=typeof e||!e||"object"!=typeof t||!t)return 0
var i=Object.keys(e),a=Object.keys(t)
if(i.length!==a.length)return 0
for(var o=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var l=i[u]
if(!o(l))return 0
var c=e[l],h=t[l]
if(0==(s=n?n.call(r,c,h,l):void 0)||void 0===s&&c!==h)return 0}return 1}))
var Ge,Ze,He="-ms-",Je="-moz-",Qe="-webkit-",et="comm",tt="rule",nt="decl",rt="@keyframes",st=Math.abs,it=String.fromCharCode,at=Object.assign,ot=1,ut=1,lt=0,ct=0,ht=0,dt="",ft={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}
const pt=e(Ze?Ge:(Ze=1,Ge=function(e,t,n,r,s,i,a,o){if(!e){var u
if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var l=[n,r,s,i,a,o],c=0;(u=new Error(t.replace(/%s/g,function(){return l[c++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}})),mt=(e,t,n)=>n>t?t:n<e?e:n,vt={},yt=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),gt=e=>/^0[^.\s]+$/u.test(e),bt=e=>e,wt=(e,t)=>n=>t(e(n)),Tt=(...e)=>e.reduce(wt),kt=(e,t,n)=>{const r=t-e
return 0===r?1:(n-e)/r}
class xt{constructor(){this.subscriptions=[]}add(e){return L(this.subscriptions,e),()=>K(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length
if(r)if(1===r)this.subscriptions[0](e,t,n)
else for(let s=0;s<r;s++){const r=this.subscriptions[s]
r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Mt=e=>1e3*e,St=e=>e/1e3,At=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Et=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,$t=e=>t=>1-e(1-t),Ot=W(.33,1.53,.69,.99),Pt=$t(Ot),Ct=Et(Pt),Ft=e=>(e*=2)<1?.5*Pt(e):.5*(2-Math.pow(2,-10*(e-1))),It=e=>1-Math.sin(Math.acos(e)),Rt=$t(It),Dt=Et(It),Vt=W(.42,0,1,1),_t=W(0,0,.58,1),Lt=W(.42,0,.58,1),Kt=e=>Array.isArray(e)&&"number"==typeof e[0],Nt={linear:bt,easeIn:Vt,easeInOut:Lt,easeOut:_t,circIn:It,circInOut:Dt,circOut:Rt,backIn:Pt,backInOut:Ct,backOut:Ot,anticipate:Ft},zt=e=>{if(Kt(e)){e.length
const[t,n,r,s]=e
return W(t,n,r,s)}return"string"==typeof e?Nt[e]:e},jt=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],Wt={value:null},{schedule:Yt,cancel:Xt,state:qt,steps:Bt}=Y("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:bt,1)
let Ut
const Gt={now:()=>(void 0===Ut&&Gt.set(qt.isProcessing||vt.useManualTiming?qt.timestamp:performance.now()),Ut),set:e=>{Ut=e,queueMicrotask(X)}},Zt=e=>t=>"string"==typeof t&&t.startsWith(e),Ht=Zt("--"),Jt=Zt("var(--"),Qt=e=>Jt(e)?en.test(e.split("/*")[0].trim()):0,en=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,tn={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},nn={...tn,transform:e=>mt(0,1,e)},rn={...tn,default:1},sn=e=>Math.round(1e5*e)/1e5,an=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,on=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,un=(e,t)=>n=>Boolean("string"==typeof n&&on.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),ln=(e,t,n)=>r=>{if("string"!=typeof r)return r
const[s,i,a,o]=r.match(an)
return{[e]:parseFloat(s),[t]:parseFloat(i),[n]:parseFloat(a),alpha:void 0!==o?parseFloat(o):1}},cn={...tn,transform:e=>Math.round((e=>mt(0,255,e))(e))},hn={test:un("rgb","red"),parse:ln("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+cn.transform(e)+", "+cn.transform(t)+", "+cn.transform(n)+", "+sn(nn.transform(r))+")"},dn={test:un("#"),parse:function(e){let t="",n="",r="",s=""
return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),s=e.substring(4,5),t+=t,n+=n,r+=r,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}},transform:hn.transform},fn=e=>({test:t=>"string"==typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),pn=fn("deg"),mn=fn("%"),vn=fn("px"),yn=fn("vh"),gn=fn("vw"),bn=(()=>({...mn,parse:e=>mn.parse(e)/100,transform:e=>mn.transform(100*e)}))(),wn={test:un("hsl","hue"),parse:ln("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+mn.transform(sn(t))+", "+mn.transform(sn(n))+", "+sn(nn.transform(r))+")"},Tn={test:e=>hn.test(e)||dn.test(e)||wn.test(e),parse:e=>hn.test(e)?hn.parse(e):wn.test(e)?wn.parse(e):dn.parse(e),transform:e=>"string"==typeof e?e:e.hasOwnProperty("red")?hn.transform(e):wn.transform(e),getAnimatableNone:e=>{const t=Tn.parse(e)
return t.alpha=0,Tn.transform(t)}},kn=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,xn="number",Mn="color",Sn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu,An=e=>"number"==typeof e?0:Tn.test(e)?Tn.getAnimatableNone(e):e,En={test:function(e){var t,n
return isNaN(e)&&"string"==typeof e&&((null==(t=e.match(an))?void 0:t.length)||0)+((null==(n=e.match(kn))?void 0:n.length)||0)>0},parse:B,createTransformer:U,getAnimatableNone:function(e){const t=B(e)
return U(e)(t.map(An))}},$n=(e,t,n)=>e+(t-e)*n,On=(e,t,n)=>{const r=e*e,s=n*(t*t-r)+r
return s<0?0:Math.sqrt(s)},Pn=[dn,hn,wn],Cn=(e,t)=>{const n=H(e),r=H(t)
if(!n||!r)return Z(e,t)
const s={...n}
return e=>(s.red=On(n.red,r.red,e),s.green=On(n.green,r.green,e),s.blue=On(n.blue,r.blue,e),s.alpha=$n(n.alpha,r.alpha,e),hn.transform(s))},Fn=new Set(["none","hidden"]),In=(e,t)=>{const n=En.createTransformer(t),r=q(e),s=q(t)
return r.indexes.var.length===s.indexes.var.length&&r.indexes.color.length===s.indexes.color.length&&r.indexes.number.length>=s.indexes.number.length?Fn.has(e)&&!s.values.length||Fn.has(t)&&!r.values.length?function(e,t){return Fn.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):Tt(ee(function(e,t){const n=[],r={color:0,var:0,number:0}
for(let s=0;s<t.values.length;s++){const i=t.types[s],a=e.indexes[i][r[i]],o=e.values[a]??0
n[s]=o,r[i]++}return n}(r,s),s.values),n):Z(e,t)},Rn=e=>{const t=({timestamp:t})=>e(t)
return{start:(e=1)=>Yt.update(t,e),stop:()=>Xt(t),now:()=>qt.isProcessing?qt.timestamp:Gt.now()}},Dn=(e,t,n=10)=>{let r=""
const s=Math.max(Math.round(t/n),2)
for(let i=0;i<s;i++)r+=Math.round(1e4*e(i/(s-1)))/1e4+", "
return`linear(${r.substring(0,r.length-2)})`},Vn=2e4,_n=100,Ln=10,Kn=1,Nn=0,zn=800,jn=.3,Wn=.3,Yn={granular:.01,default:2},Xn={granular:.005,default:.5},qn=.01,Bn=10,Un=.05,Gn=1,Zn=.001,Hn=12,Jn=["duration","bounce"],Qn=["stiffness","damping","mass"]
oe.applyToOptions=e=>{const t=function(e,t=100){const n=oe({...e,keyframes:[0,t]}),r=Math.min(re(n),Vn)
return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:St(r)}}(e,100)
return e.ease=t.ease,e.duration=Mt(t.duration),e.type="keyframes",e}
const er=e=>null!==e,tr={decay:ue,inertia:ue,tween:le,keyframes:le,spring:oe}
class nr{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const rr=e=>e/100
class sr extends nr{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=0,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var e,t
const{motionValue:n}=this.options
n&&n.updatedAt!==Gt.now()&&this.tick(Gt.now()),this.isStopped=1,"idle"!==this.state&&(this.teardown(),null==(t=(e=this.options).onStop)||t.call(e))},this.options=e,this.initAnimation(),this.play(),0==e.autoplay&&this.pause()}initAnimation(){const{options:e}=this
he(e)
const{type:t=le,repeat:n=0,repeatDelay:r=0,repeatType:s,velocity:i=0}=e
let{keyframes:a}=e
const o=t||le
o!==le&&"number"!=typeof a[0]&&(this.mixKeyframes=Tt(rr,ne(a[0],a[1])),a=[0,100])
const u=o({...e,keyframes:a})
"mirror"===s&&(this.mirroredGenerator=o({...e,keyframes:[...a].reverse(),velocity:-i})),null===u.calculatedDuration&&(u.calculatedDuration=re(u))
const{calculatedDuration:l}=u
this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=u}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed
null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=0){const{generator:n,totalDuration:r,mixKeyframes:s,mirroredGenerator:i,resolvedDuration:a,calculatedDuration:o}=this
if(null===this.startTime)return n.next(0)
const{delay:u=0,keyframes:l,repeat:c,repeatType:h,repeatDelay:d,type:f,onUpdate:p,finalKeyframe:m}=this.options
this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e)
const v=this.currentTime-u*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?v<0:v>r
this.currentTime=Math.max(v,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=r)
let g=this.currentTime,b=n
if(c){const e=Math.min(this.currentTime,r)/a
let t=Math.floor(e),n=e%1
!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,c+1),Boolean(t%2)&&("reverse"===h?(n=1-n,d&&(n-=d/a)):"mirror"===h&&(b=i)),g=mt(0,1,n)*a}const w=y?{done:0,value:l[0]}:b.next(g)
s&&(w.value=s(w.value))
let{done:T}=w
y||null===o||(T=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0)
const k=null===this.holdTime&&("finished"===this.state||"running"===this.state&&T)
return k&&f!==ue&&(w.value=ce(l,this.options,m,this.speed)),p&&p(w.value),k&&this.finish(),w}then(e,t){return this.finished.then(e,t)}get duration(){return St(this.calculatedDuration)}get time(){return St(this.currentTime)}set time(e){var t
e=Mt(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),null==(t=this.driver)||t.start(0)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Gt.now())
const t=this.playbackSpeed!==e
this.playbackSpeed=e,t&&(this.time=St(this.currentTime))}play(){var e,t
if(this.isStopped)return
const{driver:n=Rn,startTime:r}=this.options
this.driver||(this.driver=n(e=>this.tick(e))),null==(t=(e=this.options).onPlay)||t.call(e)
const s=this.driver.now()
"finished"===this.state?(this.updateFinished(),this.startTime=s):null!==this.holdTime?this.startTime=s-this.holdTime:this.startTime||(this.startTime=r??s),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Gt.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t
this.notifyFinished(),this.teardown(),this.state="finished",null==(t=(e=this.options).onComplete)||t.call(e)}cancel(){var e,t
this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),null==(t=(e=this.options).onCancel)||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,1)}attachTimeline(e){var t
return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),null==(t=this.driver)||t.stop(),e.observe(this)}}const ir=e=>180*e/Math.PI,ar=e=>{const t=ir(Math.atan2(e[1],e[0]))
return ur(t)},or={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:ar,rotateZ:ar,skewX:e=>ir(Math.atan(e[1])),skewY:e=>ir(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},ur=e=>((e%=360)<0&&(e+=360),e),lr=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),cr=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),hr={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:lr,scaleY:cr,scale:e=>(lr(e)+cr(e))/2,rotateX:e=>ur(ir(Math.atan2(e[6],e[5]))),rotateY:e=>ur(ir(Math.atan2(-e[2],e[0]))),rotateZ:ar,rotate:ar,skewX:e=>ir(Math.atan(e[4])),skewY:e=>ir(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2},dr=(e,t)=>{const{transform:n="none"}=getComputedStyle(e)
return fe(n,t)},fr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],pr=(()=>new Set(fr))(),mr=e=>e===tn||e===vn,vr=new Set(["x","y","z"]),yr=fr.filter(e=>!vr.has(e)),gr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>fe(t,"x"),y:(e,{transform:t})=>fe(t,"y")}
gr.translateX=gr.x,gr.translateY=gr.y
const br=new Set
let wr=0,Tr=0,kr=0
class xr{constructor(e,t,n,r,s,i=0){this.state="pending",this.isAsync=0,this.needsMeasurement=0,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=s,this.isAsync=i}scheduleResolve(){this.state="scheduled",this.isAsync?(br.add(this),wr||(wr=1,Yt.read(ve),Yt.resolveKeyframes(me))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this
if(null===e[0]){const s=null==r?void 0:r.get(),i=e[e.length-1]
if(void 0!==s)e[0]=s
else if(n&&t){const r=n.readValue(t,i)
null!=r&&(e[0]=r)}void 0===e[0]&&(e[0]=i),r&&void 0===s&&r.set(e[0])}!function(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=0){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),br.delete(this)}cancel(){"scheduled"===this.state&&(br.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}const Mr=z(()=>void 0!==window.ScrollTimeline),Sr={},Ar=ye(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(e){return 0}return 1},"linearEasing"),Er=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,$r={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Er([0,.65,.55,1]),circOut:Er([.55,0,1,.45]),backIn:Er([.31,.01,.66,-.59]),backOut:Er([.33,1.53,.69,.99])}
class Or extends nr{constructor(e){if(super(),this.finishedTime=null,this.isStopped=0,!e)return
const{element:t,name:n,keyframes:r,pseudoElement:s,allowFlatten:i=0,finalKeyframe:a,onComplete:o}=e
this.isPseudoElement=Boolean(s),this.allowFlatten=i,this.options=e,e.type
const u=function({type:e,...t}){return we(e)&&Ar()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}(e)
this.animation=be(t,n,r,u,s),0==u.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const e=ce(r,this.options,a,this.speed)
this.updateMotionValue?this.updateMotionValue(e):function(e,t,n){(e=>e.startsWith("--"))(t)?e.style.setProperty(t,n):e.style[t]=n}(t,n,e),this.animation.cancel()}null==o||o(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t
null==(t=(e=this.animation).finish)||t.call(e)}cancel(){try{this.animation.cancel()}catch(e){}}stop(){if(this.isStopped)return
this.isStopped=1
const{state:e}=this
"idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,t
this.isPseudoElement||null==(t=(e=this.animation).commitStyles)||t.call(e)}get duration(){var e,t
const n=(null==(t=null==(e=this.animation.effect)?void 0:e.getComputedTiming)?void 0:t.call(e).duration)||0
return St(Number(n))}get time(){return St(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Mt(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){var n
return this.allowFlatten&&(null==(n=this.animation.effect)||n.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Mr()?(this.animation.timeline=e,bt):t(this)}}const Pr={anticipate:Ft,backInOut:Ct,circInOut:Dt}
class Cr extends Or{constructor(e){var t
"string"==typeof(t=e).ease&&t.ease in Pr&&(t.ease=Pr[t.ease]),he(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:n,onComplete:r,element:s,...i}=this.options
if(!t)return
if(void 0!==e)return void t.set(e)
const a=new sr({...i,autoplay:0}),o=Mt(this.finishedTime??this.time)
t.setWithVelocity(a.sample(o-10).value,a.sample(o).value,10),a.stop()}}const Fr=(e,t)=>"zIndex"===t?0:"number"==typeof e||Array.isArray(e)?1:"string"!=typeof e||!En.test(e)&&"0"!==e||e.startsWith("url(")?0:1,Ir=new Set(["opacity","clipPath","filter","transform"]),Rr=z(()=>Object.hasOwnProperty.call(Element.prototype,"animate"))
class Dr extends nr{constructor({autoplay:e=1,delay:t=0,type:n="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:i="loop",keyframes:a,name:o,motionValue:u,element:l,...c}){var h
super(),this.stop=()=>{var e,t
this._animation&&(this._animation.stop(),null==(e=this.stopTimeline)||e.call(this)),null==(t=this.keyframeResolver)||t.cancel()},this.createdAt=Gt.now()
const d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:s,repeatType:i,name:o,motionValue:u,element:l,...c},f=(null==l?void 0:l.KeyframeResolver)||xr
this.keyframeResolver=new f(a,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),o,u,l),null==(h=this.keyframeResolver)||h.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0
const{name:s,type:i,velocity:a,delay:o,isHandoff:u,onUpdate:l}=n
this.resolvedAt=Gt.now(),function(e,t,n,r){const s=e[0]
if(null===s)return 0
if("display"===t||"visibility"===t)return 1
const i=e[e.length-1],a=Fr(s,t),o=Fr(i,t)
return a&&o?function(e){const t=e[0]
if(1===e.length)return 1
for(let n=0;n<e.length;n++)if(e[n]!==t)return 1}(e)||("spring"===n||we(n))&&r:0}(e,s,i,a)||(!vt.instantAnimations&&o||null==l||l(ce(e,n,t)),e[0]=e[e.length-1],n.duration=0,n.repeat=0)
const c={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},h=!u&&function(e){var t
const{motionValue:n,name:r,repeatDelay:s,repeatType:i,damping:a,type:o}=e
if(!Te(null==(t=null==n?void 0:n.owner)?void 0:t.current))return 0
const{onUpdate:u,transformTemplate:l}=n.owner.getProps()
return Rr()&&r&&Ir.has(r)&&("transform"!==r||!l)&&!u&&!s&&"mirror"!==i&&0!==a&&"inertia"!==o}(c)?new Cr({...c,element:c.motionValue.owner.current}):new sr(c)
h.finished.then(()=>this.notifyFinished()).catch(bt),this.pendingTimeline&&(this.stopTimeline=h.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=h}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e
return this._animation||(null==(e=this.keyframeResolver)||e.resume(),kr=1,ve(),me(),kr=0),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e
this._animation&&this.animation.cancel(),null==(e=this.keyframeResolver)||e.cancel()}}const Vr=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,_r=new Set(["width","height","top","left","right","bottom",...fr]),Lr=e=>t=>t.test(e),Kr=[tn,vn,mn,pn,gn,yn,{test:e=>"auto"===e,parse:e=>e}],Nr=e=>Kr.find(Lr(e)),zr=new Set(["brightness","contrast","saturate","opacity"]),jr=/\b([a-z-]*)\(.*?\)/gu,Wr={...En,getAnimatableNone:e=>{const t=e.match(jr)
return t?t.map(Se).join(" "):e}},Yr={...tn,transform:Math.round},Xr={borderWidth:vn,borderTopWidth:vn,borderRightWidth:vn,borderBottomWidth:vn,borderLeftWidth:vn,borderRadius:vn,radius:vn,borderTopLeftRadius:vn,borderTopRightRadius:vn,borderBottomRightRadius:vn,borderBottomLeftRadius:vn,width:vn,maxWidth:vn,height:vn,maxHeight:vn,top:vn,right:vn,bottom:vn,left:vn,padding:vn,paddingTop:vn,paddingRight:vn,paddingBottom:vn,paddingLeft:vn,margin:vn,marginTop:vn,marginRight:vn,marginBottom:vn,marginLeft:vn,backgroundPositionX:vn,backgroundPositionY:vn,rotate:pn,rotateX:pn,rotateY:pn,rotateZ:pn,scale:rn,scaleX:rn,scaleY:rn,scaleZ:rn,skew:pn,skewX:pn,skewY:pn,distance:vn,translateX:vn,translateY:vn,translateZ:vn,x:vn,y:vn,z:vn,perspective:vn,transformPerspective:vn,opacity:nn,originX:bn,originY:bn,originZ:vn,zIndex:Yr,fillOpacity:nn,strokeOpacity:nn,numOctaves:Yr},qr={...Xr,color:Tn,backgroundColor:Tn,outlineColor:Tn,fill:Tn,stroke:Tn,borderColor:Tn,borderTopColor:Tn,borderRightColor:Tn,borderBottomColor:Tn,borderLeftColor:Tn,filter:Wr,WebkitFilter:Wr},Br=e=>qr[e],Ur=new Set(["auto","none","0"])
class Gr extends xr{constructor(e,t,n,r,s){super(e,t,n,r,s,1)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this
if(!t||!t.current)return
super.readKeyframes()
for(let o=0;o<e.length;o++){let n=e[o]
if("string"==typeof n&&(n=n.trim(),Qt(n))){const r=ke(n,t.current)
void 0!==r&&(e[o]=r),o===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!_r.has(n)||2!==e.length)return
const[r,s]=e,i=Nr(r),a=Nr(s)
if(i!==a)if(mr(i)&&mr(a))for(let o=0;o<e.length;o++){const t=e[o]
"string"==typeof t&&(e[o]=parseFloat(t))}else gr[n]&&(this.needsMeasurement=1)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[]
for(let r=0;r<e.length;r++)(null===e[r]||Me(e[r]))&&n.push(r)
n.length&&function(e,t,n){let r,s=0
for(;s<e.length&&!r;){const t=e[s]
"string"==typeof t&&!Ur.has(t)&&q(t).values.length&&(r=e[s]),s++}if(r&&n)for(const i of t)e[i]=Ae(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this
if(!e||!e.current)return
"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=gr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin
const r=t[t.length-1]
void 0!==r&&e.getValue(n,r).jump(r,0)}measureEndState(){var e
const{element:t,name:n,unresolvedKeyframes:r}=this
if(!t||!t.current)return
const s=t.getValue(n)
s&&s.jump(this.measuredOrigin,0)
const i=r.length-1,a=r[i]
r[i]=gr[n](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==a&&void 0===this.finalKeyframe&&(this.finalKeyframe=a),(null==(e=this.removedTransforms)?void 0:e.length)&&this.removedTransforms.forEach(([e,n])=>{t.getValue(e).set(n)}),this.resolveNoneKeyframes()}}const Zr=(e,t)=>t&&"number"==typeof e?t.transform(e):e
class Hr{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(e,t=1)=>{var n,r
const s=Gt.now()
if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(null==(n=this.events.change)||n.notify(this.current),this.dependents))for(const i of this.dependents)i.dirty()
t&&(null==(r=this.events.renderRequest)||r.notify(this.current))},this.hasAnimated=0,this.setCurrent(e),this.owner=t.owner}setCurrent(e){var t
this.current=e,this.updatedAt=Gt.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new xt)
const n=this.events[e].add(t)
return"change"===e?()=>{n(),Yt.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=1){t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=1){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e
null==(e=this.events.change)||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Gt.now()
if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0
const t=Math.min(this.updatedAt-this.prevUpdatedAt,30)
return j(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=1,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t
null==(e=this.dependents)||e.clear(),null==(t=this.events.destroy)||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}const{schedule:Jr}=Y(queueMicrotask,0),Qr={x:0,y:0},es=(e,t)=>t?e===t?1:es(e,t.parentElement):0,ts=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:0!=e.isPrimary,ns=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]),rs=new WeakSet,ss=e=>Boolean(e&&e.getVelocity),is=[...Kr,Tn,En],as=e=>is.find(Lr(e))
export{ft as $,Dr as A,L as B,K as C,Gt as D,Rt as E,Le as F,Ke as G,Bt as H,Ie as I,sr as J,_e as K,xr as L,vt as M,yt as N,gt as O,as as P,Ae as Q,Gr as R,xt as S,de as T,dr as U,Br as V,Ee as W,e as X,pt as Y,Ue as Z,t as _,Ht as a,tt as a0,_ as a1,R as a2,E as a3,I as a4,D as a5,V as a6,fr as b,ss as c,$e as d,xe as e,Yt as f,Zr as g,_r as h,Te as i,ts as j,$n as k,qt as l,Jr as m,Xr as n,Tt as o,vn as p,Xt as q,St as r,Mt as s,pr as t,kt as u,mt as v,Pe as w,mn as x,bt as y,En as z}
