function e(e,t){if(0==e||null==e)throw new Error(t)}function t(e,t){if(!e)try{throw new Error(t)}catch(n){}}function n(e,t){return{usr:e.state,key:e.key,idx:t}}function r(e,t,n=null,r){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?o(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function a({pathname:e="/",search:t="",hash:n=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(e+="#"===n.charAt(0)?n:"#"+n),e}function o(e){let t={}
if(e){let n=e.indexOf("#")
n>=0&&(t.hash=e.substring(n),e=e.substring(0,n))
let r=e.indexOf("?")
r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function i(e,t,n="/"){return function(e,t,n){let r=d(("string"==typeof t?o(t):t).pathname||"/",n)
if(null==r)return null
let a=l(e)
!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a)
let i=null
for(let o=0;null==i&&o<a.length;++o){let e=p(r)
i=c(a[o],e,0)}return i}(e,t,n)}function l(t,n=[],r=[],a=""){let o=(t,o,i)=>{let u={relativePath:void 0===i?t.path||"":i,caseSensitive:1==t.caseSensitive,childrenIndex:o,route:t}
u.relativePath.startsWith("/")&&(e(u.relativePath.startsWith(a),`Absolute route path "${u.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(a.length))
let c=te([a,u.relativePath]),h=r.concat(u)
t.children&&t.children.length>0&&(e(1!=t.index,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),l(t.children,n,h,c)),(null!=t.path||t.index)&&n.push({path:c,score:s(c,t.index),routesMeta:h})}
return t.forEach((e,t)=>{var n
if(""!==e.path&&(null==(n=e.path)?void 0:n.includes("?")))for(let r of u(e.path))o(e,t,r)
else o(e,t)}),n}function u(e){let t=e.split("/")
if(0===t.length)return[]
let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"")
if(0===r.length)return a?[o,""]:[o]
let i=u(r.join("/")),l=[]
return l.push(...i.map(e=>""===e?o:[o,e].join("/"))),a&&l.push(...i),l.map(t=>e.startsWith("/")&&""===t?"/":t)}function s(e,t){let n=e.split("/"),r=n.length
return n.some(ee)&&(r+=Z),t&&(r+=G),n.filter(e=>!ee(e)).reduce((e,t)=>e+(V.test(t)?q:""===t?X:Q),r)}function c(e,t,n=0){let{routesMeta:r}=e,a={},o="/",i=[]
for(let l=0;l<r.length;++l){let e=r[l],u=l===r.length-1,s="/"===o?t:t.slice(o.length)||"/",c=h({path:e.relativePath,caseSensitive:e.caseSensitive,end:u},s),p=e.route
if(!c&&u&&n&&!r[r.length-1].route.index&&(c=h({path:e.relativePath,caseSensitive:e.caseSensitive,end:0},s)),!c)return null
Object.assign(a,c.params),i.push({params:a,pathname:te([o,c.pathname]),pathnameBase:ne(te([o,c.pathnameBase])),route:p}),"/"!==c.pathnameBase&&(o=te([o,c.pathnameBase]))}return i}function h(e,n){"string"==typeof e&&(e={path:e,caseSensitive:0,end:1})
let[r,a]=function(e,n=0,r=1){t("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`)
let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(a.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"))
return e.endsWith("*")?(a.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),a]}(e.path,e.caseSensitive,e.end),o=n.match(r)
if(!o)return null
let i=o[0],l=i.replace(/(.)\/+$/,"$1"),u=o.slice(1)
return{params:a.reduce((e,{paramName:t,isOptional:n},r)=>{if("*"===t){let e=u[r]||""
l=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const a=u[r]
return e[t]=n&&!a?void 0:(a||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:l,pattern:e}}function p(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(n){return t(0,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function d(e,t){if("/"===t)return e
if(!e.toLowerCase().startsWith(t.toLowerCase()))return null
let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n)
return r&&"/"!==r?null:e.slice(n)||"/"}function m(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function f(e){let t=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e)
return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function v(t,n,r,a=0){let i
"string"==typeof t?i=o(t):(i={...t},e(!i.pathname||!i.pathname.includes("?"),m("?","pathname","search",i)),e(!i.pathname||!i.pathname.includes("#"),m("#","pathname","hash",i)),e(!i.search||!i.search.includes("#"),m("#","search","hash",i)))
let l,u=""===t||""===i.pathname,s=u?"/":i.pathname
if(null==s)l=r
else{let e=n.length-1
if(!a&&s.startsWith("..")){let t=s.split("/")
for(;".."===t[0];)t.shift(),e-=1
i.pathname=t.join("/")}l=e>=0?n[e]:"/"}let c=function(e,t="/"){let{pathname:n,search:r="",hash:a=""}="string"==typeof e?o(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/")
return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t
return{pathname:i,search:re(r),hash:ae(a)}}(i,l),h=s&&"/"!==s&&s.endsWith("/"),p=(u||"."===s)&&r.endsWith("/")
return c.pathname.endsWith("/")||!h&&!p||(c.pathname+="/"),c}function y(){return null!=Y.useContext(he)}function g(){return e(y(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(he).location}function w(e){Y.useContext(ce).static||Y.useLayoutEffect(e)}function b(){let{isDataRoute:n}=Y.useContext(pe)
return n?function(){let{router:n}=function(){let t=Y.useContext(le)
return e(t,S("useNavigate")),t}(),r=$("useNavigate"),a=Y.useRef(0)
return w(()=>{a.current=1}),Y.useCallback(async(e,o={})=>{t(a.current,me),a.current&&("number"==typeof e?n.navigate(e):await n.navigate(e,{fromRouteId:r,...o}))},[n,r])}():function(){e(y(),"useNavigate() may be used only in the context of a <Router> component.")
let n=Y.useContext(le),{basename:r,navigator:a}=Y.useContext(ce),{matches:o}=Y.useContext(pe),{pathname:i}=g(),l=JSON.stringify(f(o)),u=Y.useRef(0)
return w(()=>{u.current=1}),Y.useCallback((e,o={})=>{if(t(u.current,me),!u.current)return
if("number"==typeof e)return void a.go(e)
let s=v(e,JSON.parse(l),i,"path"===o.relative)
null==n&&"/"!==r&&(s.pathname="/"===s.pathname?r:te([r,s.pathname])),(o.replace?a.replace:a.push)(s,o.state,o)},[r,a,l,i,n])}()}function x(e,{relative:t}={}){let{matches:n}=Y.useContext(pe),{pathname:r}=g(),a=JSON.stringify(f(n))
return Y.useMemo(()=>v(e,JSON.parse(a),r,"path"===t),[e,a,r,t])}function E(n,r,a){var l
e(y(),"useRoutes() may be used only in the context of a <Router> component.")
let{navigator:u}=Y.useContext(ce),{matches:s}=Y.useContext(pe),c=s[s.length-1],h=c?c.params:{},p=c?c.pathname:"/",d=c?c.pathnameBase:"/",m=c&&c.route
{let e=m&&m.path||""
L(p,!m||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let f,v=g()
if(r){let t="string"==typeof r?o(r):r
e("/"===d||(null==(l=t.pathname)?void 0:l.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${t.pathname}" was given in the \`location\` prop.`),f=t}else f=v
let w=f.pathname||"/",b=w
if("/"!==d){let e=d.replace(/^\//,"").split("/")
b="/"+w.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=i(n,{pathname:b})
t(m||null!=x,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),t(null==x||void 0!==x[x.length-1].route.element||void 0!==x[x.length-1].route.Component||void 0!==x[x.length-1].route.lazy,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`)
let E=function(t,n=[],r=null){if(null==t){if(!r)return null
if(r.errors)t=r.matches
else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null
t=r.matches}}let a=t,o=null==r?void 0:r.errors
if(null!=o){let t=a.findIndex(e=>e.route.id&&void 0!==(null==o?void 0:o[e.route.id]))
e(t>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,t+1))}let i=0,l=-1
if(r)for(let e=0;e<a.length;e++){let t=a[e]
if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:n}=r,o=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id])
if(t.route.lazy||o){i=1,a=l>=0?a.slice(0,l+1):[a[0]]
break}}}return a.reduceRight((e,t,u)=>{let s,c=0,h=null,p=null
r&&(s=o&&t.route.id?o[t.route.id]:void 0,h=t.route.errorElement||fe,i&&(l<0&&0===u?(L("route-fallback",0,"No `HydrateFallback` element provided to render during initial hydration"),c=1,p=null):l===u&&(c=1,p=t.route.hydrateFallbackElement||null)))
let d=n.concat(a.slice(0,u+1)),m=()=>{let n
return n=s?h:c?p:t.route.Component?Y.createElement(t.route.Component,null):t.route.element?t.route.element:e,Y.createElement(C,{match:t,routeContext:{outlet:e,matches:d,isDataRoute:null!=r},children:n})}
return r&&(t.route.ErrorBoundary||t.route.errorElement||0===u)?Y.createElement(ve,{location:r.location,revalidation:r.revalidation,component:h,error:s,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:1}}):m()},null)}(x&&x.map(e=>Object.assign({},e,{params:Object.assign({},h,e.params),pathname:te([d,u.encodeLocation?u.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:te([d,u.encodeLocation?u.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),s,a)
return r&&E?Y.createElement(he.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...f},navigationType:"POP"}},E):E}function R(){let t=function(){var t
let n=Y.useContext(de),r=function(){let t=Y.useContext(ue)
return e(t,S("useRouteError")),t}(),a=$("useRouteError")
return void 0!==n?n:null==(t=r.errors)?void 0:t[a]}(),n=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},i={padding:"2px 4px",backgroundColor:a},l=null
return l=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:i},"ErrorBoundary")," or"," ",Y.createElement("code",{style:i},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},n),r?Y.createElement("pre",{style:o},r):null,l)}function C({routeContext:e,match:t,children:n}){let r=Y.useContext(le)
return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),Y.createElement(pe.Provider,{value:e},n)}function S(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $(t){let n=function(t){let n=Y.useContext(pe)
return e(n,S(t)),n}(t),r=n.matches[n.matches.length-1]
return e(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function L(e,n,r){n||ye[e]||(ye[e]=1,t(0,r))}function k({to:n,replace:r,state:a,relative:o}){e(y(),"<Navigate> may be used only in the context of a <Router> component.")
let{static:i}=Y.useContext(ce)
t(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.")
let{matches:l}=Y.useContext(pe),{pathname:u}=g(),s=b(),c=v(n,f(l),u,"path"===o),h=JSON.stringify(c)
return Y.useEffect(()=>{s(JSON.parse(h),{replace:r,state:a,relative:o})},[s,h,o,r,a]),null}function P(){e(0,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function T({basename:n="/",children:r=null,location:a,navigationType:i="POP",navigator:l,static:u=0}){e(!y(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.")
let s=n.replace(/^\/*/,"/"),c=Y.useMemo(()=>({basename:s,navigator:l,static:u,future:{}}),[s,l,u])
"string"==typeof a&&(a=o(a))
let{pathname:h="/",search:p="",hash:m="",state:f=null,key:v="default"}=a,g=Y.useMemo(()=>{let e=d(h,s)
return null==e?null:{location:{pathname:e,search:p,hash:m,state:f,key:v},navigationType:i}},[s,h,p,m,f,v,i])
return t(null!=g,`<Router basename="${s}"> is not able to match the URL "${h}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==g?null:Y.createElement(ce.Provider,{value:c},Y.createElement(he.Provider,{children:r,value:g}))}function N({children:e,location:t}){return E(F(e),t)}function F(t,n=[]){let r=[]
return Y.Children.forEach(t,(t,a)=>{if(!Y.isValidElement(t))return
let o=[...n,a]
if(t.type===Y.Fragment)return void r.push.apply(r,F(t.props.children,o))
e(t.type===P,`[${"string"==typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),e(!t.props.index||!t.props.children,"An index route cannot have child routes.")
let i={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:1==t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy}
t.props.children&&(i.children=F(t.props.children,o)),r.push(i)}),r}function M(e){return null!=e&&"string"==typeof e.tagName}function A(e){return null==e||xe.has(e)?e:(t(0,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${we}"`),null)}function O(e,t){if(0==e||null==e)throw new Error(t)}function D(e){return null==e?0:null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href}function W(e,t,n,r,a,o){let i=(e,t)=>n[t]?e.route.id!==n[t].route.id:1,l=(e,t)=>{var r
return n[t].pathname!==e.pathname||(null==(r=n[t].route.path)?void 0:r.endsWith("*"))&&n[t].params["*"]!==e.params["*"]}
return"assets"===o?t.filter((e,t)=>i(e,t)||l(e,t)):"data"===o?t.filter((t,o)=>{var u
let s=r.routes[t.route.id]
if(!s||!s.hasLoader)return 0
if(i(t,o)||l(t,o))return 1
if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:(null==(u=n[0])?void 0:u.params)||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:1})
if("boolean"==typeof r)return r}return 1}):[]}function B(){let e=Y.useContext(le)
return O(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function U(){let e=Y.useContext(Ee)
return O(e,"You must render this element inside a <HydratedRouter> element"),e}function j(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function _({page:e,...t}){let{router:n}=B(),r=Y.useMemo(()=>i(n.routes,e,n.basename),[n.routes,e,n.basename])
return r?Y.createElement(H,{page:e,matches:r,...t}):null}function H({page:e,matches:t,...n}){let r=g(),{manifest:a,routeModules:o}=U(),{basename:i}=B(),{loaderData:l,matches:u}=function(){let e=Y.useContext(ue)
return O(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}(),s=Y.useMemo(()=>W(e,t,u,a,r,"data"),[e,t,u,a,r]),c=Y.useMemo(()=>W(e,t,u,a,r,"assets"),[e,t,u,a,r]),h=Y.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[]
let n=new Set,u=0
if(t.forEach(e=>{var t
let r=a.routes[e.route.id]
r&&r.hasLoader&&(!s.some(t=>t.route.id===e.route.id)&&e.route.id in l&&(null==(t=o[e.route.id])?void 0:t.shouldRevalidate)||r.hasClientLoader?u=1:n.add(e.route.id))}),0===n.size)return[]
let c=function(e,t){let n="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e
return"/"===n.pathname?n.pathname="_root.data":t&&"/"===d(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}(e,i)
return u&&n.size>0&&c.searchParams.set("_routes",t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(",")),[c.pathname+c.search]},[i,l,r,a,s,t,e,o]),p=Y.useMemo(()=>function(e,t,{includeHydrateFallback:n}={}){return r=e.map(e=>{let r=t.routes[e.route.id]
if(!r)return[]
let a=[r.module]
return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1),[...new Set(r)]
var r}(c,a),[c,a]),m=function(e){let{manifest:t,routeModules:n}=U(),[r,a]=Y.useState([])
return Y.useEffect(()=>{let r=0
return async function(e,t,n){return function(e){let t=new Set
return new Set(void 0),e.reduce((e,n)=>{let r=JSON.stringify(function(e){let t={},n=Object.keys(e).sort()
for(let r of n)t[r]=e[r]
return t}(n))
return t.has(r)||(t.add(r),e.push({key:r,link:n})),e},[])}((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id]
if(r){let e=await async function(e,t){if(e.id in t)return t[e.id]
try{let n=await import(e.module)
return t[e.id]=n,n}catch(n){return window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}(r,n)
return e.links?e.links():[]}return[]}))).flat(1).filter(D).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{r||a(e)}),()=>{r=1}},[e,t,n]),r}(c)
return Y.createElement(Y.Fragment,null,h.map(e=>Y.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n})),p.map(e=>Y.createElement("link",{key:e,rel:"modulepreload",href:e,...n})),m.map(({key:e,link:t})=>Y.createElement("link",{key:e,...t})))}function I(...e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}function z({basename:t,children:o,window:i}){let l=Y.useRef()
null==l.current&&(l.current=function(t={}){return function(t,o,i,l={}){function u(){return(d.state||{idx:null}).idx}function s(){m="POP"
let e=u(),t=null==e?null:e-v
v=e,f&&f({action:m,location:y.location,delta:t})}function c(t){return function(t,n=0){let r="http://localhost"
"undefined"!=typeof window&&(r="null"!==window.location.origin?window.location.origin:window.location.href),e(r,"No window.location.(origin|href) available to create URL")
let o="string"==typeof t?t:a(t)
return o=o.replace(/ $/,"%20"),!n&&o.startsWith("//")&&(o=r+o),new URL(o,r)}(t)}let{window:h=document.defaultView,v5Compat:p=0}=l,d=h.history,m="POP",f=null,v=u()
null==v&&(v=0,d.replaceState({...d.state,idx:v},""))
let y={get action(){return m},get location(){return t(h,d)},listen(e){if(f)throw new Error("A history only accepts one active listener")
return h.addEventListener(K,s),f=e,()=>{h.removeEventListener(K,s),f=null}},createHref:e=>o(h,e),createURL:c,encodeLocation(e){let t=c(e)
return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){m="PUSH"
let a=r(y.location,e,t)
v=u()+1
let o=n(a,v),i=y.createHref(a)
try{d.pushState(o,"",i)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l
h.location.assign(i)}p&&f&&f({action:m,location:y.location,delta:1})},replace:function(e,t){m="REPLACE"
let a=r(y.location,e,t)
v=u()
let o=n(a,v),i=y.createHref(a)
d.replaceState(o,"",i),p&&f&&f({action:m,location:y.location,delta:0})},go:e=>d.go(e)}
return y}(function(e,t){let{pathname:n,search:a,hash:o}=e.location
return r("",{pathname:n,search:a,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:a(t)},0,t)}({window:i,v5Compat:1}))
let u=l.current,[s,c]=Y.useState({action:u.action,location:u.location}),h=Y.useCallback(e=>{Y.startTransition(()=>c(e))},[c])
return Y.useLayoutEffect(()=>u.listen(h),[u,h]),Y.createElement(T,{basename:t,children:o,location:s.location,navigationType:s.action,navigator:u})}function J(t){let n=Y.useContext(le)
return e(n,function(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}(t)),n}import{r as Y}from"./vendor-react-core-CiytVzfL.js"
import"./vendor-other-CjR0Saws.js"
var K="popstate",V=/^:[\w-]+$/,q=3,G=2,X=1,Q=10,Z=-2,ee=e=>"*"===e,te=e=>e.join("/").replace(/\/\/+/g,"/"),ne=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),re=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",ae=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"",oe=["POST","PUT","PATCH","DELETE"]
new Set(oe)
var ie=["GET",...oe]
new Set(ie)
var le=Y.createContext(null)
le.displayName="DataRouter"
var ue=Y.createContext(null)
ue.displayName="DataRouterState"
var se=Y.createContext({isTransitioning:0})
se.displayName="ViewTransition",Y.createContext(new Map).displayName="Fetchers",Y.createContext(null).displayName="Await"
var ce=Y.createContext(null)
ce.displayName="Navigation"
var he=Y.createContext(null)
he.displayName="Location"
var pe=Y.createContext({outlet:null,matches:[],isDataRoute:0})
pe.displayName="Route"
var de=Y.createContext(null)
de.displayName="RouteError"
var me="You should call navigate() in a React.useEffect(), not when your component is first rendered."
Y.createContext(null)
var fe=Y.createElement(R,null),ve=class extends Y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?Y.createElement(pe.Provider,{value:this.props.routeContext},Y.createElement(de.Provider,{value:this.state.error,children:this.props.component})):this.props.children}},ye={}
Y.memo(function({routes:e,future:t,state:n}){return E(e,void 0,n)})
var ge="get",we="application/x-www-form-urlencoded",be=null,xe=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"])
Object.getOwnPropertyNames(Object.prototype).sort().join("\0")
var Ee=Y.createContext(void 0)
Ee.displayName="FrameworkContext"
var Re="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement
try{Re&&(window.__reactRouterVersion="7.6.2")}catch(ke){}var Ce=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Se=Y.forwardRef(function({onClick:n,discover:r="render",prefetch:o="none",relative:i,reloadDocument:l,replace:u,state:s,target:c,to:h,preventScrollReset:p,viewTransition:m,...f},v){let w,{basename:E}=Y.useContext(ce),R="string"==typeof h&&Ce.test(h),C=0
if("string"==typeof h&&R&&(w=h,Re))try{let e=new URL(window.location.href),t=h.startsWith("//")?new URL(e.protocol+h):new URL(h),n=d(t.pathname,E)
t.origin===e.origin&&null!=n?h=n+t.search+t.hash:C=1}catch(ke){t(0,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=function(t,{relative:n}={}){e(y(),"useHref() may be used only in the context of a <Router> component.")
let{basename:r,navigator:a}=Y.useContext(ce),{hash:o,pathname:i,search:l}=x(t,{relative:n}),u=i
return"/"!==r&&(u="/"===i?r:te([r,i])),a.createHref({pathname:u,search:l,hash:o})}(h,{relative:i}),[$,L,k]=function(e,t){let n=Y.useContext(Ee),[r,a]=Y.useState(0),[o,i]=Y.useState(0),{onFocus:l,onBlur:u,onMouseEnter:s,onMouseLeave:c,onTouchStart:h}=t,p=Y.useRef(null)
Y.useEffect(()=>{if("render"===e&&i(1),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{i(e.isIntersecting)})},{threshold:.5})
return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[e]),Y.useEffect(()=>{if(r){let e=setTimeout(()=>{i(1)},100)
return()=>{clearTimeout(e)}}},[r])
let d=()=>{a(1)},m=()=>{a(0),i(0)}
return n?"intent"!==e?[o,p,{}]:[o,p,{onFocus:j(l,d),onBlur:j(u,m),onMouseEnter:j(s,d),onMouseLeave:j(c,m),onTouchStart:j(h,d)}]:[0,p,{}]}(o,f),P=function(e,{target:t,replace:n,state:r,preventScrollReset:o,relative:i,viewTransition:l}={}){let u=b(),s=g(),c=x(e,{relative:i})
return Y.useCallback(h=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(h,t)){h.preventDefault()
let t=void 0!==n?n:a(s)===a(c)
u(e,{replace:t,state:r,preventScrollReset:o,relative:i,viewTransition:l})}},[s,u,c,n,r,t,e,o,i,l])}(h,{replace:u,state:s,target:c,preventScrollReset:p,relative:i,viewTransition:m}),T=Y.createElement("a",{...f,...k,href:w||S,onClick:C||l?n:function(e){n&&n(e),e.defaultPrevented||P(e)},ref:I(v,L),target:c,"data-discover":R||"render"!==r?void 0:"true"})
return $&&!R?Y.createElement(Y.Fragment,null,T,Y.createElement(_,{page:S})):T})
Se.displayName="Link",Y.forwardRef(function({"aria-current":t="page",caseSensitive:n=0,className:r="",end:a=0,style:o,to:i,viewTransition:l,children:u,...s},c){let p=x(i,{relative:s.relative}),m=g(),f=Y.useContext(ue),{navigator:v,basename:y}=Y.useContext(ce),w=null!=f&&function(t,n={}){let r=Y.useContext(se)
e(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?")
let{basename:a}=J("useViewTransitionState"),o=x(t,{relative:n.relative})
if(!r.isTransitioning)return 0
let i=d(r.currentLocation.pathname,a)||r.currentLocation.pathname,l=d(r.nextLocation.pathname,a)||r.nextLocation.pathname
return null!=h(o.pathname,l)||null!=h(o.pathname,i)}(p)&&1==l,b=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,E=m.pathname,R=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null
n||(E=E.toLowerCase(),R=R?R.toLowerCase():null,b=b.toLowerCase()),R&&y&&(R=d(R,y)||R)
const C="/"!==b&&b.endsWith("/")?b.length-1:b.length
let S,$=E===b||!a&&E.startsWith(b)&&"/"===E.charAt(C),L=null!=R&&(R===b||!a&&R.startsWith(b)&&"/"===R.charAt(b.length)),k={isActive:$,isPending:L,isTransitioning:w},P=$?t:void 0
S="function"==typeof r?r(k):[r,$?"active":null,L?"pending":null,w?"transitioning":null].filter(Boolean).join(" ")
let T="function"==typeof o?o(k):o
return Y.createElement(Se,{...s,"aria-current":P,className:S,ref:c,style:T,to:i,viewTransition:l},"function"==typeof u?u(k):u)}).displayName="NavLink",Y.forwardRef(({discover:t="render",fetcherKey:n,navigate:r,reloadDocument:o,replace:i,state:l,method:u=ge,action:s,onSubmit:c,relative:h,preventScrollReset:p,viewTransition:m,...f},v)=>{let y=function(){let{router:e}=J("useSubmit"),{basename:t}=Y.useContext(ce),n=$("useRouteId")
return Y.useCallback(async(r,a={})=>{let{action:o,method:i,encType:l,formData:u,body:s}=function(e,t){let n,r,a,o,i
if(M(l=e)&&"form"===l.tagName.toLowerCase()){let i=e.getAttribute("action")
r=i?d(i,t):null,n=e.getAttribute("method")||ge,a=A(e.getAttribute("enctype"))||we,o=new FormData(e)}else if(function(e){return M(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return M(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form
if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>')
let l=e.getAttribute("formaction")||i.getAttribute("action")
if(r=l?d(l,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||ge,a=A(e.getAttribute("formenctype"))||A(i.getAttribute("enctype"))||we,o=new FormData(i,e),!function(){if(null===be)try{new FormData(document.createElement("form"),0),be=0}catch(ke){be=1}return be}()){let{name:t,type:n,value:r}=e
if("image"===n){let e=t?`${t}.`:""
o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(M(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">')
n=ge,r=null,a=we,i=e}var l
return o&&"text/plain"===a&&(i=o,o=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:o,body:i}}(r,t)
if(0==a.navigate){let t=a.fetcherKey||Le()
await e.fetch(t,n,a.action||o,{preventScrollReset:a.preventScrollReset,formData:u,body:s,formMethod:a.method||i,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:u,body:s,formMethod:a.method||i,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,n])}(),w=function(t,{relative:n}={}){let{basename:r}=Y.useContext(ce),o=Y.useContext(pe)
e(o,"useFormAction must be used inside a RouteContext")
let[i]=o.matches.slice(-1),l={...x(t||".",{relative:n})},u=g()
if(null==t){l.search=u.search
let e=new URLSearchParams(l.search),t=e.getAll("index")
if(t.some(e=>""===e)){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t))
let n=e.toString()
l.search=n?`?${n}`:""}}return t&&"."!==t||!i.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),"/"!==r&&(l.pathname="/"===l.pathname?r:te([r,l.pathname])),a(l)}(s,{relative:h}),b="get"===u.toLowerCase()?"get":"post",E="string"==typeof s&&Ce.test(s)
return Y.createElement("form",{ref:v,method:b,action:w,onSubmit:o?c:e=>{if(c&&c(e),e.defaultPrevented)return
e.preventDefault()
let t=e.nativeEvent.submitter,a=(null==t?void 0:t.getAttribute("formmethod"))||u
y(t||e.currentTarget,{fetcherKey:n,method:a,navigate:r,replace:i,state:l,relative:h,preventScrollReset:p,viewTransition:m})},...f,"data-discover":E||"render"!==t?void 0:"true"})}).displayName="Form"
var $e=0,Le=()=>`__${String(++$e)}__`
export{z as B,Se as L,k as N,N as R,b as a,P as b,g as u}
