function e(){return t||(t=1,r.exports=(n||(n=1,function(e){function n(e,n){var t=e.length
e.push(n)
e:for(;0<t;){var r=t-1>>>1,l=e[r]
if(!(0<a(l,n)))break e
e[r]=n,e[t]=l,t=r}}function t(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null
var n=e[0],t=e.pop()
if(t!==n){e[0]=t
e:for(var r=0,l=e.length,i=l>>>1;r<i;){var o=2*(r+1)-1,u=e[o],f=o+1,s=e[f]
if(0>a(u,t))f<l&&0>a(s,u)?(e[r]=s,e[f]=t,r=f):(e[r]=u,e[o]=t,r=o)
else{if(!(f<l&&0>a(s,t)))break e
e[r]=s,e[f]=t,r=f}}}return n}function a(e,n){var t=e.sortIndex-n.sortIndex
return 0!==t?t:e.id-n.id}function l(e){for(var a=t(v);null!==a;){if(null===a.callback)r(v)
else{if(!(a.startTime<=e))break
r(v),a.sortIndex=a.expirationTime,n(y,a)}a=t(v)}}function i(e){if(h=0,l(e),!w)if(null!==t(y))w=1,P||(P=1,p())
else{var n=t(v)
null!==n&&f(i,n.startTime-e)}}function o(){return x?1:e.unstable_now()-M<L?0:1}function u(){if(x=0,P){var n=e.unstable_now()
M=n
var a=1
try{e:{w=0,h&&(h=0,g(C),C=-1),k=1
var u=_
try{n:{for(l(n),m=t(y);null!==m&&!(m.expirationTime>n&&o());){var s=m.callback
if("function"==typeof s){m.callback=null,_=m.priorityLevel
var c=s(m.expirationTime<=n)
if(n=e.unstable_now(),"function"==typeof c){m.callback=c,l(n),a=1
break n}m===t(y)&&r(y),l(n)}else r(y)
m=t(y)}if(null!==m)a=1
else{var b=t(v)
null!==b&&f(i,b.startTime-n),a=0}}break e}finally{m=null,_=u,k=0}a=void 0}}finally{a?p():P=0}}}function f(n,t){C=T(function(){n(e.unstable_now())},t)}if(e.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var s=performance
e.unstable_now=function(){return s.now()}}else{var c=Date,b=c.now()
e.unstable_now=function(){return c.now()-b}}var p,y=[],v=[],d=1,m=null,_=3,k=0,w=0,h=0,x=0,T="function"==typeof setTimeout?setTimeout:null,g="function"==typeof clearTimeout?clearTimeout:null,I="undefined"!=typeof setImmediate?setImmediate:null,P=0,C=-1,L=5,M=-1
if("function"==typeof I)p=function(){I(u)}
else if("undefined"!=typeof MessageChannel){var j=new MessageChannel,q=j.port2
j.port1.onmessage=u,p=function(){q.postMessage(null)}}else p=function(){T(u,0)}
e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e||(L=0<e?Math.floor(1e3/e):5)},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_next=function(e){switch(_){case 1:case 2:case 3:var n=3
break
default:n=_}var t=_
_=n
try{return e()}finally{_=t}},e.unstable_requestPaint=function(){x=1},e.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break
default:e=3}var t=_
_=e
try{return n()}finally{_=t}},e.unstable_scheduleCallback=function(r,a,l){var o=e.unstable_now()
switch(l="object"==typeof l&&null!==l&&"number"==typeof(l=l.delay)&&0<l?o+l:o,r){case 1:var u=-1
break
case 2:u=250
break
case 5:u=1073741823
break
case 4:u=1e4
break
default:u=5e3}return r={id:d++,callback:a,priorityLevel:r,startTime:l,expirationTime:u=l+u,sortIndex:-1},l>o?(r.sortIndex=l,n(v,r),null===t(y)&&r===t(v)&&(h?(g(C),C=-1):h=1,f(i,l-o))):(r.sortIndex=u,n(y,r),w||k||(w=1,P||(P=1,p()))),r},e.unstable_shouldYield=o,e.unstable_wrapCallback=function(e){var n=_
return function(){var t=_
_=n
try{return e.apply(this,arguments)}finally{_=t}}}}(a)),a)),r.exports}var n,t,r={exports:{}},a={}
export{e as r}
