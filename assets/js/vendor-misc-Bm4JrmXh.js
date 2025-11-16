function e(e,t){if(0==e||null==e)throw new Error(t)}function t(e,t){if(!e)try{throw new Error(t)}catch(n){}}function n(e,t){return{usr:e.state,key:e.key,idx:t}}function r(e,t,n=null,r){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?i(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function a({pathname:e="/",search:t="",hash:n=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(e+="#"===n.charAt(0)?n:"#"+n),e}function i(e){let t={}
if(e){let n=e.indexOf("#")
n>=0&&(t.hash=e.substring(n),e=e.substring(0,n))
let r=e.indexOf("?")
r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function s(e,t,n="/"){return function(e,t,n){let r=p(("string"==typeof t?i(t):t).pathname||"/",n)
if(null==r)return null
let a=o(e)
!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a)
let s=null
for(let i=0;null==s&&i<a.length;++i){let e=d(r)
s=c(a[i],e,0)}return s}(e,t,n)}function o(t,n=[],r=[],a=""){let i=(t,i,s)=>{let l={relativePath:void 0===s?t.path||"":s,caseSensitive:1==t.caseSensitive,childrenIndex:i,route:t}
l.relativePath.startsWith("/")&&(e(l.relativePath.startsWith(a),`Absolute route path "${l.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(a.length))
let c=Kt([a,l.relativePath]),h=r.concat(l)
t.children&&t.children.length>0&&(e(1!=t.index,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),o(t.children,n,h,c)),(null!=t.path||t.index)&&n.push({path:c,score:u(c,t.index),routesMeta:h})}
return t.forEach((e,t)=>{var n
if(""!==e.path&&(null==(n=e.path)?void 0:n.includes("?")))for(let r of l(e.path))i(e,t,r)
else i(e,t)}),n}function l(e){let t=e.split("/")
if(0===t.length)return[]
let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"")
if(0===r.length)return a?[i,""]:[i]
let s=l(r.join("/")),o=[]
return o.push(...s.map(e=>""===e?i:[i,e].join("/"))),a&&o.push(...s),o.map(t=>e.startsWith("/")&&""===t?"/":t)}function u(e,t){let n=e.split("/"),r=n.length
return n.some(Bt)&&(r+=jt),t&&(r+=It),n.filter(e=>!Bt(e)).reduce((e,t)=>e+(Nt.test(t)?Dt:""===t?Wt:Vt),r)}function c(e,t,n=0){let{routesMeta:r}=e,a={},i="/",s=[]
for(let o=0;o<r.length;++o){let e=r[o],l=o===r.length-1,u="/"===i?t:t.slice(i.length)||"/",c=h({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route
if(!c&&l&&n&&!r[r.length-1].route.index&&(c=h({path:e.relativePath,caseSensitive:e.caseSensitive,end:0},u)),!c)return null
Object.assign(a,c.params),s.push({params:a,pathname:Kt([i,c.pathname]),pathnameBase:Ut(Kt([i,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(i=Kt([i,c.pathnameBase]))}return s}function h(e,n){"string"==typeof e&&(e={path:e,caseSensitive:0,end:1})
let[r,a]=function(e,n=0,r=1){t("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`)
let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(a.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"))
return e.endsWith("*")?(a.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),a]}(e.path,e.caseSensitive,e.end),i=n.match(r)
if(!i)return null
let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1)
return{params:a.reduce((e,{paramName:t,isOptional:n},r)=>{if("*"===t){let e=l[r]||""
o=s.slice(0,s.length-e.length).replace(/(.)\/+$/,"$1")}const a=l[r]
return e[t]=n&&!a?void 0:(a||"").replace(/%2F/g,"/"),e},{}),pathname:s,pathnameBase:o,pattern:e}}function d(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(n){return t(0,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function p(e,t){if("/"===t)return e
if(!e.toLowerCase().startsWith(t.toLowerCase()))return null
let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n)
return r&&"/"!==r?null:e.slice(n)||"/"}function m(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function f(e){let t=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e)
return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function v(t,n,r,a=0){let s
"string"==typeof t?s=i(t):(s={...t},e(!s.pathname||!s.pathname.includes("?"),m("?","pathname","search",s)),e(!s.pathname||!s.pathname.includes("#"),m("#","pathname","hash",s)),e(!s.search||!s.search.includes("#"),m("#","search","hash",s)))
let o,l=""===t||""===s.pathname,u=l?"/":s.pathname
if(null==u)o=r
else{let e=n.length-1
if(!a&&u.startsWith("..")){let t=u.split("/")
for(;".."===t[0];)t.shift(),e-=1
s.pathname=t.join("/")}o=e>=0?n[e]:"/"}let c=function(e,t="/"){let{pathname:n,search:r="",hash:a=""}="string"==typeof e?i(e):e,s=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/")
return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t
return{pathname:s,search:zt(r),hash:Yt(a)}}(s,o),h=u&&"/"!==u&&u.endsWith("/"),d=(l||"."===u)&&r.endsWith("/")
return c.pathname.endsWith("/")||!h&&!d||(c.pathname+="/"),c}function y(){return null!=At.useContext(Jt)}function g(){return e(y(),"useLocation() may be used only in the context of a <Router> component."),At.useContext(Jt).location}function w(e){At.useContext(Zt).static||At.useLayoutEffect(e)}function b(){let{isDataRoute:n}=At.useContext(Qt)
return n?function(){let{router:n}=function(){let t=At.useContext(Xt)
return e(t,S("useNavigate")),t}(),r=C("useNavigate"),a=At.useRef(0)
return w(()=>{a.current=1}),At.useCallback(async(e,i={})=>{t(a.current,tn),a.current&&("number"==typeof e?n.navigate(e):await n.navigate(e,{fromRouteId:r,...i}))},[n,r])}():function(){e(y(),"useNavigate() may be used only in the context of a <Router> component.")
let n=At.useContext(Xt),{basename:r,navigator:a}=At.useContext(Zt),{matches:i}=At.useContext(Qt),{pathname:s}=g(),o=JSON.stringify(f(i)),l=At.useRef(0)
return w(()=>{l.current=1}),At.useCallback((e,i={})=>{if(t(l.current,tn),!l.current)return
if("number"==typeof e)return void a.go(e)
let u=v(e,JSON.parse(o),s,"path"===i.relative)
null==n&&"/"!==r&&(u.pathname="/"===u.pathname?r:Kt([r,u.pathname])),(i.replace?a.replace:a.push)(u,i.state,i)},[r,a,o,s,n])}()}function x(e,{relative:t}={}){let{matches:n}=At.useContext(Qt),{pathname:r}=g(),a=JSON.stringify(f(n))
return At.useMemo(()=>v(e,JSON.parse(a),r,"path"===t),[e,a,r,t])}function T(n,r,a){var o
e(y(),"useRoutes() may be used only in the context of a <Router> component.")
let{navigator:l}=At.useContext(Zt),{matches:u}=At.useContext(Qt),c=u[u.length-1],h=c?c.params:{},d=c?c.pathname:"/",p=c?c.pathnameBase:"/",m=c&&c.route
{let e=m&&m.path||""
R(d,!m||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let f,v=g()
if(r){let t="string"==typeof r?i(r):r
e("/"===p||(null==(o=t.pathname)?void 0:o.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${t.pathname}" was given in the \`location\` prop.`),f=t}else f=v
let w=f.pathname||"/",b=w
if("/"!==p){let e=p.replace(/^\//,"").split("/")
b="/"+w.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=s(n,{pathname:b})
t(m||null!=x,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),t(null==x||void 0!==x[x.length-1].route.element||void 0!==x[x.length-1].route.Component||void 0!==x[x.length-1].route.lazy,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`)
let T=function(t,n=[],r=null){if(null==t){if(!r)return null
if(r.errors)t=r.matches
else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null
t=r.matches}}let a=t,i=null==r?void 0:r.errors
if(null!=i){let t=a.findIndex(e=>e.route.id&&void 0!==(null==i?void 0:i[e.route.id]))
e(t>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,t+1))}let s=0,o=-1
if(r)for(let e=0;e<a.length;e++){let t=a[e]
if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(o=e),t.route.id){let{loaderData:e,errors:n}=r,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id])
if(t.route.lazy||i){s=1,a=o>=0?a.slice(0,o+1):[a[0]]
break}}}return a.reduceRight((e,t,l)=>{let u,c=0,h=null,d=null
r&&(u=i&&t.route.id?i[t.route.id]:void 0,h=t.route.errorElement||nn,s&&(o<0&&0===l?(R("route-fallback",0,"No `HydrateFallback` element provided to render during initial hydration"),c=1,d=null):o===l&&(c=1,d=t.route.hydrateFallbackElement||null)))
let p=n.concat(a.slice(0,l+1)),m=()=>{let n
return n=u?h:c?d:t.route.Component?At.createElement(t.route.Component,null):t.route.element?t.route.element:e,At.createElement(E,{match:t,routeContext:{outlet:e,matches:p,isDataRoute:null!=r},children:n})}
return r&&(t.route.ErrorBoundary||t.route.errorElement||0===l)?At.createElement(rn,{location:r.location,revalidation:r.revalidation,component:h,error:u,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:1}}):m()},null)}(x&&x.map(e=>Object.assign({},e,{params:Object.assign({},h,e.params),pathname:Kt([p,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:Kt([p,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),u,a)
return r&&T?At.createElement(Jt.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...f},navigationType:"POP"}},T):T}function k(){let t=function(){var t
let n=At.useContext(en),r=function(){let t=At.useContext(qt)
return e(t,S("useRouteError")),t}(),a=C("useRouteError")
return void 0!==n?n:null==(t=r.errors)?void 0:t[a]}(),n=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a},s={padding:"2px 4px",backgroundColor:a},o=null
return o=At.createElement(At.Fragment,null,At.createElement("p",null,"💿 Hey developer 👋"),At.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",At.createElement("code",{style:s},"ErrorBoundary")," or"," ",At.createElement("code",{style:s},"errorElement")," prop on your route.")),At.createElement(At.Fragment,null,At.createElement("h2",null,"Unexpected Application Error!"),At.createElement("h3",{style:{fontStyle:"italic"}},n),r?At.createElement("pre",{style:i},r):null,o)}function E({routeContext:e,match:t,children:n}){let r=At.useContext(Xt)
return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),At.createElement(Qt.Provider,{value:e},n)}function S(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function C(t){let n=function(t){let n=At.useContext(Qt)
return e(n,S(t)),n}(t),r=n.matches[n.matches.length-1]
return e(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function R(e,n,r){n||an[e]||(an[e]=1,t(0,r))}function $({to:n,replace:r,state:a,relative:i}){e(y(),"<Navigate> may be used only in the context of a <Router> component.")
let{static:s}=At.useContext(Zt)
t(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.")
let{matches:o}=At.useContext(Qt),{pathname:l}=g(),u=b(),c=v(n,f(o),l,"path"===i),h=JSON.stringify(c)
return At.useEffect(()=>{u(JSON.parse(h),{replace:r,state:a,relative:i})},[u,h,i,r,a]),null}function M(){e(0,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function A({basename:n="/",children:r=null,location:a,navigationType:s="POP",navigator:o,static:l=0}){e(!y(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.")
let u=n.replace(/^\/*/,"/"),c=At.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l])
"string"==typeof a&&(a=i(a))
let{pathname:h="/",search:d="",hash:m="",state:f=null,key:v="default"}=a,g=At.useMemo(()=>{let e=p(h,u)
return null==e?null:{location:{pathname:e,search:d,hash:m,state:f,key:v},navigationType:s}},[u,h,d,m,f,v,s])
return t(null!=g,`<Router basename="${u}"> is not able to match the URL "${h}${d}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==g?null:At.createElement(Zt.Provider,{value:c},At.createElement(Jt.Provider,{children:r,value:g}))}function P({children:e,location:t}){return T(O(e),t)}function O(t,n=[]){let r=[]
return At.Children.forEach(t,(t,a)=>{if(!At.isValidElement(t))return
let i=[...n,a]
if(t.type===At.Fragment)return void r.push.apply(r,O(t.props.children,i))
e(t.type===M,`[${"string"==typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),e(!t.props.index||!t.props.children,"An index route cannot have child routes.")
let s={id:t.props.id||i.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:1==t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy}
t.props.children&&(s.children=O(t.props.children,i)),r.push(s)}),r}function L(e){return null!=e&&"string"==typeof e.tagName}function F(e){return null==e||un.has(e)?e:(t(0,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${on}"`),null)}function N(e,t){if(0==e||null==e)throw new Error(t)}function D(e){return null==e?0:null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href}function I(e,t,n,r,a,i){let s=(e,t)=>n[t]?e.route.id!==n[t].route.id:1,o=(e,t)=>{var r
return n[t].pathname!==e.pathname||(null==(r=n[t].route.path)?void 0:r.endsWith("*"))&&n[t].params["*"]!==e.params["*"]}
return"assets"===i?t.filter((e,t)=>s(e,t)||o(e,t)):"data"===i?t.filter((t,i)=>{var l
let u=r.routes[t.route.id]
if(!u||!u.hasLoader)return 0
if(s(t,i)||o(t,i))return 1
if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:(null==(l=n[0])?void 0:l.params)||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:1})
if("boolean"==typeof r)return r}return 1}):[]}function W(){let e=At.useContext(Xt)
return N(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function V(){let e=At.useContext(cn)
return N(e,"You must render this element inside a <HydratedRouter> element"),e}function j(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function B({page:e,...t}){let{router:n}=W(),r=At.useMemo(()=>s(n.routes,e,n.basename),[n.routes,e,n.basename])
return r?At.createElement(K,{page:e,matches:r,...t}):null}function K({page:e,matches:t,...n}){let r=g(),{manifest:a,routeModules:i}=V(),{basename:s}=W(),{loaderData:o,matches:l}=function(){let e=At.useContext(qt)
return N(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}(),u=At.useMemo(()=>I(e,t,l,a,r,"data"),[e,t,l,a,r]),c=At.useMemo(()=>I(e,t,l,a,r,"assets"),[e,t,l,a,r]),h=At.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[]
let n=new Set,l=0
if(t.forEach(e=>{var t
let r=a.routes[e.route.id]
r&&r.hasLoader&&(!u.some(t=>t.route.id===e.route.id)&&e.route.id in o&&(null==(t=i[e.route.id])?void 0:t.shouldRevalidate)||r.hasClientLoader?l=1:n.add(e.route.id))}),0===n.size)return[]
let c=function(e,t){let n="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e
return"/"===n.pathname?n.pathname="_root.data":t&&"/"===p(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}(e,s)
return l&&n.size>0&&c.searchParams.set("_routes",t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(",")),[c.pathname+c.search]},[s,o,r,a,u,t,e,i]),d=At.useMemo(()=>function(e,t,{includeHydrateFallback:n}={}){return r=e.map(e=>{let r=t.routes[e.route.id]
if(!r)return[]
let a=[r.module]
return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1),[...new Set(r)]
var r}(c,a),[c,a]),m=function(e){let{manifest:t,routeModules:n}=V(),[r,a]=At.useState([])
return At.useEffect(()=>{let r=0
return async function(e,t,n){return function(e){let t=new Set
return new Set(void 0),e.reduce((e,n)=>{let r=JSON.stringify(function(e){let t={},n=Object.keys(e).sort()
for(let r of n)t[r]=e[r]
return t}(n))
return t.has(r)||(t.add(r),e.push({key:r,link:n})),e},[])}((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id]
if(r){let e=await async function(e,t){if(e.id in t)return t[e.id]
try{let n=await import(e.module)
return t[e.id]=n,n}catch(n){return window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}(r,n)
return e.links?e.links():[]}return[]}))).flat(1).filter(D).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,n).then(e=>{r||a(e)}),()=>{r=1}},[e,t,n]),r}(c)
return At.createElement(At.Fragment,null,h.map(e=>At.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n})),d.map(e=>At.createElement("link",{key:e,rel:"modulepreload",href:e,...n})),m.map(({key:e,link:t})=>At.createElement("link",{key:e,...t})))}function U(...e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}function z({basename:t,children:i,window:s}){let o=At.useRef()
null==o.current&&(o.current=function(t={}){return function(t,i,s,o={}){function l(){return(p.state||{idx:null}).idx}function u(){m="POP"
let e=l(),t=null==e?null:e-v
v=e,f&&f({action:m,location:y.location,delta:t})}function c(t){return function(t,n=0){let r="http://localhost"
"undefined"!=typeof window&&(r="null"!==window.location.origin?window.location.origin:window.location.href),e(r,"No window.location.(origin|href) available to create URL")
let i="string"==typeof t?t:a(t)
return i=i.replace(/ $/,"%20"),!n&&i.startsWith("//")&&(i=r+i),new URL(i,r)}(t)}let{window:h=document.defaultView,v5Compat:d=0}=o,p=h.history,m="POP",f=null,v=l()
null==v&&(v=0,p.replaceState({...p.state,idx:v},""))
let y={get action(){return m},get location(){return t(h,p)},listen(e){if(f)throw new Error("A history only accepts one active listener")
return h.addEventListener(Ft,u),f=e,()=>{h.removeEventListener(Ft,u),f=null}},createHref:e=>i(h,e),createURL:c,encodeLocation(e){let t=c(e)
return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){m="PUSH"
let a=r(y.location,e,t)
v=l()+1
let i=n(a,v),s=y.createHref(a)
try{p.pushState(i,"",s)}catch(o){if(o instanceof DOMException&&"DataCloneError"===o.name)throw o
h.location.assign(s)}d&&f&&f({action:m,location:y.location,delta:1})},replace:function(e,t){m="REPLACE"
let a=r(y.location,e,t)
v=l()
let i=n(a,v),s=y.createHref(a)
p.replaceState(i,"",s),d&&f&&f({action:m,location:y.location,delta:0})},go:e=>p.go(e)}
return y}(function(e,t){let{pathname:n,search:a,hash:i}=e.location
return r("",{pathname:n,search:a,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:a(t)},0,t)}({window:s,v5Compat:1}))
let l=o.current,[u,c]=At.useState({action:l.action,location:l.location}),h=At.useCallback(e=>{At.startTransition(()=>c(e))},[c])
return At.useLayoutEffect(()=>l.listen(h),[l,h]),At.createElement(A,{basename:t,children:i,location:u.location,navigationType:u.action,navigator:l})}function Y(t){let n=At.useContext(Xt)
return e(n,function(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}(t)),n}function _(e){return e.trim()}function H(e,t){return(e=t.exec(e))?e[0]:e}function X(e,t,n){return e.replace(t,n)}function q(e,t,n){return e.indexOf(t,n)}function G(e,t){return 0|e.charCodeAt(t)}function Z(e,t,n){return e.slice(t,n)}function J(e){return e.length}function Q(e){return e.length}function ee(e,t){return t.push(e),e}function te(e,t){return e.filter(function(e){return!H(e,t)})}function ne(e,t,n,r,a,i,s,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:Pn,column:On,length:s,return:"",siblings:o}}function re(e,t){return An(ne("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ae(e){for(;e.root;)e=re(e.root,{children:[e]})
ee(e,e.siblings)}function ie(){return Nn=Fn>0?G(Dn,--Fn):0,On--,10===Nn&&(On=1,Pn--),Nn}function se(){return Nn=Fn<Ln?G(Dn,Fn++):0,On++,10===Nn&&(On=1,Pn++),Nn}function oe(){return G(Dn,Fn)}function le(){return Fn}function ue(e,t){return Z(Dn,e,t)}function ce(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5
case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4
case 58:return 3
case 34:case 39:case 40:case 91:return 2
case 41:case 93:return 1}return 0}function he(e){return _(ue(Fn-1,me(91===e?e+2:40===e?e+1:e)))}function de(e){for(;(Nn=oe())&&Nn<33;)se()
return ce(e)>2||ce(Nn)>3?"":" "}function pe(e,t){for(;--t&&se()&&!(Nn<48||Nn>102||Nn>57&&Nn<65||Nn>70&&Nn<97););return ue(e,le()+(t<6&&32==oe()&&32==se()))}function me(e){for(;se();)switch(Nn){case e:return Fn
case 34:case 39:34!==e&&39!==e&&me(Nn)
break
case 40:41===e&&me(e)
break
case 92:se()}return Fn}function fe(e,t){for(;se()&&e+Nn!==57&&(e+Nn!==84||47!==oe()););return"/*"+ue(t,Fn-1)+"*"+Mn(47===e?e:se())}function ve(e){for(;!ce(oe());)se()
return ue(e,Fn)}function ye(e){return function(e){return Dn="",e}(ge("",null,null,null,[""],e=function(e){return Pn=On=1,Ln=J(Dn=e),Fn=0,[]}(e),0,[0],e))}function ge(e,t,n,r,a,i,s,o,l){for(var u=0,c=0,h=s,d=0,p=0,m=0,f=1,v=1,y=1,g=0,w="",b=a,x=i,T=r,k=w;v;)switch(m=g,g=se()){case 40:if(108!=m&&58==G(k,h-1)){-1!=q(k+=X(he(g),"&","&\f"),"&\f",$n(u?o[u-1]:0))&&(y=-1)
break}case 34:case 39:case 91:k+=he(g)
break
case 9:case 10:case 13:case 32:k+=de(m)
break
case 92:k+=pe(le()-1,7)
continue
case 47:switch(oe()){case 42:case 47:ee(be(fe(se(),le()),t,n,l),l)
break
default:k+="/"}break
case 123*f:o[u++]=J(k)*y
case 125*f:case 59:case 0:switch(g){case 0:case 125:v=0
case 59+c:-1==y&&(k=X(k,/\f/g,"")),p>0&&J(k)-h&&ee(p>32?xe(k+";",r,n,h-1,l):xe(X(k," ","")+";",r,n,h-2,l),l)
break
case 59:k+=";"
default:if(ee(T=we(k,t,n,u,c,a,o,w,b=[],x=[],h,i),i),123===g)if(0===c)ge(k,t,T,T,b,i,h,o,x)
else switch(99===d&&110===G(k,3)?100:d){case 100:case 108:case 109:case 115:ge(e,T,T,r&&ee(we(e,T,T,0,0,a,o,w,a,b=[],h,x),x),a,x,h,o,r?b:x)
break
default:ge(k,T,T,T,[""],x,0,o,x)}}u=c=p=0,f=y=1,w=k="",h=s
break
case 58:h=1+J(k),p=m
default:if(f<1)if(123==g)--f
else if(125==g&&0==f++&&125==ie())continue
switch(k+=Mn(g),g*f){case 38:y=c>0?1:(k+="\f",-1)
break
case 44:o[u++]=(J(k)-1)*y,y=1
break
case 64:45===oe()&&(k+=he(se())),d=oe(),c=h=J(w=k+=ve(le())),g++
break
case 45:45===m&&2==J(k)&&(f=0)}}return i}function we(e,t,n,r,a,i,s,o,l,u,c,h){for(var d=a-1,p=0===a?i:[""],m=Q(p),f=0,v=0,y=0;f<r;++f)for(var g=0,w=Z(e,d+1,d=$n(v=s[f])),b=e;g<m;++g)(b=_(v>0?p[g]+" "+w:X(w,/&\f/g,p[g])))&&(l[y++]=b)
return ne(e,t,n,0===a?Sn:o,l,u,c,h)}function be(e,t,n,r){return ne(e,t,n,En,Mn(Nn),Z(e,2,-2),0,r)}function xe(e,t,n,r,a){return ne(e,t,n,Cn,Z(e,0,r),Z(e,r+1,-1),r,a)}function Te(e,t,n){switch(function(e,t){return 45^G(e,0)?(((t<<2^G(e,0))<<2^G(e,1))<<2^G(e,2))<<2^G(e,3):0}(e,t)){case 5103:return kn+"print-"+e+e
case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return kn+e+e
case 4789:return Tn+e+e
case 5349:case 4246:case 4810:case 6968:case 2756:return kn+e+Tn+e+xn+e+e
case 5936:switch(G(e,t+11)){case 114:return kn+e+xn+X(e,/[svh]\w+-[tblr]{2}/,"tb")+e
case 108:return kn+e+xn+X(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e
case 45:return kn+e+xn+X(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return kn+e+xn+e+e
case 6165:return kn+e+xn+"flex-"+e+e
case 5187:return kn+e+X(e,/(\w+).+(:[^]+)/,kn+"box-$1$2"+xn+"flex-$1$2")+e
case 5443:return kn+e+xn+"flex-item-"+X(e,/flex-|-self/g,"")+(H(e,/flex-|baseline/)?"":xn+"grid-row-"+X(e,/flex-|-self/g,""))+e
case 4675:return kn+e+xn+"flex-line-pack"+X(e,/align-content|flex-|-self/g,"")+e
case 5548:return kn+e+xn+X(e,"shrink","negative")+e
case 5292:return kn+e+xn+X(e,"basis","preferred-size")+e
case 6060:return kn+"box-"+X(e,"-grow","")+kn+e+xn+X(e,"grow","positive")+e
case 4554:return kn+X(e,/([^-])(transform)/g,"$1"+kn+"$2")+e
case 6187:return X(X(X(e,/(zoom-|grab)/,kn+"$1"),/(image-set)/,kn+"$1"),e,"")+e
case 5495:case 3959:return X(e,/(image-set\([^]*)/,kn+"$1$`$1")
case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,kn+"box-pack:$3"+xn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+kn+e+e
case 4200:if(!H(e,/flex-|baseline/))return xn+"grid-column-align"+Z(e,t)+e
break
case 2592:case 3360:return xn+X(e,"template-","")+e
case 4384:case 3616:return n&&n.some(function(e,n){return t=n,H(e.props,/grid-\w+-end/)})?~q(e+(n=n[t].value),"span",0)?e:xn+X(e,"-start","")+e+xn+"grid-row-span:"+(~q(n,"span",0)?H(n,/\d+/):+H(n,/\d+/)-+H(e,/\d+/))+";":xn+X(e,"-start","")+e
case 4896:case 4128:return n&&n.some(function(e){return H(e.props,/grid-\w+-start/)})?e:xn+X(X(e,"-end","-span"),"span ","")+e
case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,kn+"$1$2")+e
case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(J(e)-1-t>6)switch(G(e,t+1)){case 109:if(45!==G(e,t+4))break
case 102:return X(e,/(.+:)(.+)-([^]+)/,"$1"+kn+"$2-$3$1"+Tn+(108==G(e,t+3)?"$3":"$2-$3"))+e
case 115:return~q(e,"stretch",0)?Te(X(e,"stretch","fill-available"),t,n)+e:e}break
case 5152:case 5920:return X(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,i,s,o){return xn+n+":"+r+o+(a?xn+n+"-span:"+(i?s:+s-+r)+o:"")+e})
case 4949:if(121===G(e,t+6))return X(e,":",":"+kn)+e
break
case 6444:switch(G(e,45===G(e,14)?18:11)){case 120:return X(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+kn+(45===G(e,14)?"inline-":"")+"box$3$1"+kn+"$2$3$1"+xn+"$2box$3")+e
case 100:return X(e,":",":"+xn)+e}break
case 5719:case 2647:case 2135:case 3927:case 2391:return X(e,"scroll-","scroll-snap-")+e}return e}function ke(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||""
return n}function Ee(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break
case"@import":case Cn:return e.return=e.return||e.value
case En:return""
case Rn:return e.return=e.value+"{"+ke(e.children,r)+"}"
case Sn:if(!J(e.value=e.props.join(",")))return""}return J(n=ke(e.children,r))?e.return=e.value+"{"+n+"}":""}function Se(e){var t=Q(e)
return function(n,r,a,i){for(var s="",o=0;o<t;o++)s+=e[o](n,r,a,i)||""
return s}}function Ce(e){return function(t){t.root||(t=t.return)&&e(t)}}function Re(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Cn:return void(e.return=Te(e.value,e.length,n))
case Rn:return ke([re(e,{value:X(e.value,"@","@"+kn)})],r)
case Sn:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(H(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ae(re(e,{props:[X(t,/:(read-\w+)/,":-moz-$1")]})),ae(re(e,{props:[t]})),An(e,{props:te(n,r)})
break
case"::placeholder":ae(re(e,{props:[X(t,/:(plac\w+)/,":"+kn+"input-$1")]})),ae(re(e,{props:[X(t,/:(plac\w+)/,":-moz-$1")]})),ae(re(e,{props:[X(t,/:(plac\w+)/,xn+"input-$1")]})),ae(re(e,{props:[t]})),An(e,{props:te(n,r)})}return""})}}function $e(e,t){-1===e.indexOf(t)&&e.push(t)}function Me(e,t){const n=e.indexOf(t)
n>-1&&e.splice(n,1)}function Ae(e){return"object"==typeof e&&null!==e}function Pe(e){let t
return()=>(void 0===t&&(t=e()),t)}function Oe(e,t){return t?e*(1e3/t):0}function Le(e,t,n,r){return e===t&&n===r?Un:a=>0===a||1===a?a:Gn(function(e,t,n,r,a){let i,s,o=0
do{s=t+(n-t)/2,i=Gn(s,r,a)-e,i>0?n=s:t=s}while(Math.abs(i)>1e-7&&++o<12)
return s}(a,0,1,e,n),t,r)}function Fe(e,t){let n=0,r=1
const a={delta:0,timestamp:0,isProcessing:0},i=()=>n=1,s=dr.reduce((e,n)=>(e[n]=function(e,t){function n(t){o.has(t)&&(c.schedule(t),e()),u++,t(l)}let r=new Set,a=new Set,i=0,s=0
const o=new WeakSet
let l={delta:0,timestamp:0,isProcessing:0},u=0
const c={schedule:(e,t=0,n=0)=>{const s=n&&i?r:a
return t&&o.add(e),s.has(e)||s.add(e),e},cancel:e=>{a.delete(e),o.delete(e)},process:e=>{l=e,i?s=1:(i=1,[r,a]=[a,r],r.forEach(n),t&&pr.value&&pr.value.frameloop[t].push(u),u=0,r.clear(),i=0,s&&(s=0,c.process(e)))}}
return c}(i,t?n:void 0),e),{}),{setup:o,read:l,resolveKeyframes:u,preUpdate:c,update:h,preRender:d,render:p,postRender:m}=s,f=()=>{const i=jn.useManualTiming?a.timestamp:performance.now()
n=0,jn.useManualTiming||(a.delta=r?1e3/60:Math.max(Math.min(i-a.timestamp,40),1)),a.timestamp=i,a.isProcessing=1,o.process(a),l.process(a),u.process(a),c.process(a),h.process(a),d.process(a),p.process(a),m.process(a),a.isProcessing=0,n&&t&&(r=0,e(f))}
return{schedule:dr.reduce((t,i)=>{const o=s[i]
return t[i]=(t,i=0,s=0)=>(n||(n=1,r=1,a.isProcessing||e(f)),o.schedule(t,i,s)),t},{}),cancel:e=>{for(let t=0;t<dr.length;t++)s[dr[t]].cancel(e)},state:a,steps:s}}function Ne(){gr=void 0}function De(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},a=[]
let i=0
const s=t.replace(Xr,e=>(zr.test(e)?(r.color.push(i),a.push(Hr),n.push(zr.parse(e))):e.startsWith("var(")?(r.var.push(i),a.push("var"),n.push(e)):(r.number.push(i),a.push(_r),n.push(parseFloat(e))),++i,"${}")).split("${}")
return{values:n,split:s,indexes:r,types:a}}function Ie(e){return De(e).values}function We(e){const{split:t,types:n}=De(e),r=t.length
return e=>{let a=""
for(let i=0;i<r;i++)if(a+=t[i],void 0!==e[i]){const t=n[i]
a+=t===_r?$r(e[i]):t===Hr?zr.transform(e[i]):e[i]}return a}}function Ve(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function je(e,t){return n=>n>0?t:e}function Be(e){const t=(n=e,Qr.find(e=>e.test(n)))
var n
if(!Boolean(t))return 0
let r=t.parse(e)
return t===Ur&&(r=function({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,n/=100
let a=0,i=0,s=0
if(t/=100){const r=n<.5?n*(1+t):n+t-n*t,o=2*n-r
a=Ve(o,r,e+1/3),i=Ve(o,r,e),s=Ve(o,r,e-1/3)}else a=i=s=n
return{red:Math.round(255*a),green:Math.round(255*i),blue:Math.round(255*s),alpha:r}}(r)),r}function Ke(e,t){return n=>Zr(e,t,n)}function Ue(e){return"number"==typeof e?Ke:"string"==typeof e?kr(e)?je:zr.test(e)?ea:na:Array.isArray(e)?ze:"object"==typeof e?zr.test(e)?ea:Ye:je}function ze(e,t){const n=[...e],r=n.length,a=e.map((e,n)=>Ue(e)(e,t[n]))
return e=>{for(let t=0;t<r;t++)n[t]=a[t](e)
return n}}function Ye(e,t){const n={...e,...t},r={}
for(const a in n)void 0!==e[a]&&void 0!==t[a]&&(r[a]=Ue(e[a])(e[a],t[a]))
return e=>{for(const t in r)n[t]=r[t](e)
return n}}function _e(e,t,n){return"number"==typeof e&&"number"==typeof t&&"number"==typeof n?Zr(e,t,n):Ue(e)(e,t)}function He(e){let t=0,n=e.next(t)
for(;!n.done&&t<ia;)t+=50,n=e.next(t)
return t>=ia?1/0:t}function Xe(e,t,n){const r=Math.max(t-5,0)
return Oe(n-e(r),t-r)}function qe(e,t){return e*Math.sqrt(1-t*t)}function Ge(e,t){return t.some(t=>void 0!==e[t])}function Ze(e=da,t=ha){const n="object"!=typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e
let{restSpeed:r,restDelta:a}=n
const i=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],o={done:0,value:i},{stiffness:l,damping:u,mass:c,duration:h,velocity:d,isResolvedFromDuration:p}=function(e){let t={velocity:ua,stiffness:sa,damping:oa,mass:la,isResolvedFromDuration:0,...e}
if(!Ge(e,Ta)&&Ge(e,xa))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),a=r*r,i=2*Vn(.05,1,1-(e.bounce||0))*Math.sqrt(a)
t={...t,mass:la,stiffness:a,damping:i}}else{const n=function({duration:e=ca,bounce:t=ha,velocity:n=ua,mass:r=la}){let a,i,s=1-t
s=Vn(ya,ga,s),e=Vn(fa,va,qn(e)),s<1?(a=t=>{const r=t*s,a=r*e,i=r-n,o=qe(t,s),l=Math.exp(-a)
return wa-i/o*l},i=t=>{const r=t*s*e,i=r*n+n,o=Math.pow(s,2)*Math.pow(t,2)*e,l=Math.exp(-r),u=qe(Math.pow(t,2),s)
return(-a(t)+wa>0?-1:1)*((i-o)*l)/u}):(a=t=>Math.exp(-t*e)*((t-n)*e+1)-.001,i=t=>Math.exp(-t*e)*(e*e*(n-t)))
const o=function(e,t,n){let r=n
for(let a=1;a<ba;a++)r-=e(r)/t(r)
return r}(a,i,5/e)
if(e=Xn(e),isNaN(o))return{stiffness:sa,damping:oa,duration:e}
{const t=Math.pow(o,2)*r
return{stiffness:t,damping:2*s*Math.sqrt(r*t),duration:e}}}(e)
t={...t,...n,mass:la},t.isResolvedFromDuration=1}return t}({...n,velocity:-qn(n.velocity||0)}),m=d||0,f=u/(2*Math.sqrt(l*c)),v=s-i,y=qn(Math.sqrt(l/c)),g=Math.abs(v)<5
let w
if(r||(r=g?pa.granular:pa.default),a||(a=g?ma.granular:ma.default),f<1){const e=qe(y,f)
w=t=>{const n=Math.exp(-f*y*t)
return s-n*((m+f*y*v)/e*Math.sin(e*t)+v*Math.cos(e*t))}}else if(1===f)w=e=>s-Math.exp(-y*e)*(v+(m+y*v)*e)
else{const e=y*Math.sqrt(f*f-1)
w=t=>{const n=Math.exp(-f*y*t),r=Math.min(e*t,300)
return s-n*((m+f*y*v)*Math.sinh(r)+e*v*Math.cosh(r))/e}}const b={calculatedDuration:p&&h||null,next:e=>{const t=w(e)
if(p)o.done=e>=h
else{let n=0===e?m:0
f<1&&(n=0===e?Xn(m):Xe(w,e,t))
const i=Math.abs(n)<=r,l=Math.abs(s-t)<=a
o.done=i&&l}return o.value=o.done?s:t,o},toString:()=>{const e=Math.min(He(b),ia),t=aa(t=>b.next(e*t).value,e,30)
return e+"ms "+t},toTransition:()=>{}}
return b}function Je({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:a=10,bounceStiffness:i=500,modifyTarget:s,min:o,max:l,restDelta:u=.5,restSpeed:c}){const h=e[0],d={done:0,value:h},p=e=>void 0===o?l:void 0===l||Math.abs(o-e)<Math.abs(l-e)?o:l
let m=n*t
const f=h+m,v=void 0===s?f:s(f)
v!==f&&(m=v-h)
const y=e=>-m*Math.exp(-e/r),g=e=>v+y(e),w=e=>{const t=y(e),n=g(e)
d.done=Math.abs(t)<=u,d.value=d.done?v:n}
let b,x
const T=e=>{var t
t=d.value,(void 0!==o&&t<o||void 0!==l&&t>l)&&(b=e,x=Ze({keyframes:[d.value,p(d.value)],velocity:Xe(g,e,d.value),damping:a,stiffness:i,restDelta:u,restSpeed:c}))}
return T(0),{calculatedDuration:null,next:e=>{let t=0
return x||void 0!==b||(t=1,w(e),T(e)),void 0!==b&&e>=b?x.next(e-b):(!t&&w(e),d)}}}function Qe({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const a=(e=>Array.isArray(e)&&"number"!=typeof e[0])(r)?r.map(hr):hr(r),i={done:0,value:t[0]},s=function(e,t){return e.map(e=>e*t)}(n&&n.length===t.length?n:function(e){const t=[0]
return function(e,t){const n=e[e.length-1]
for(let r=1;r<=t;r++){const a=_n(0,t,r)
e.push(Zr(n,1,a))}}(t,e.length-1),t}(t),e),o=function(e,t,{clamp:n=1,ease:r,mixer:a}={}){const i=e.length
if(t.length,1===i)return()=>t[0]
if(2===i&&t[0]===t[1])return()=>t[1]
const s=e[0]===e[1]
e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse())
const o=function(e,t,n){const r=[],a=n||jn.mix||_e,i=e.length-1
for(let s=0;s<i;s++){let n=a(e[s],e[s+1])
if(t){const e=Array.isArray(t)?t[s]||Un:t
n=Yn(e,n)}r.push(n)}return r}(t,r,a),l=o.length,u=n=>{if(s&&n<e[0])return t[0]
let r=0
if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const a=_n(e[r],e[r+1],n)
return o[r](a)}
return n?t=>u(Vn(e[0],e[i-1],t)):u}(s,t,{ease:Array.isArray(a)?a:(l=t,u=a,l.map(()=>u||lr).splice(0,l.length-1))})
var l,u
return{calculatedDuration:e,next:t=>(i.value=o(t),i.done=t>=e,i)}}function et(e,{repeat:t,repeatType:n="loop"},r,a=1){const i=e.filter(ka),s=a<0||t&&"loop"!==n&&t%2==1?0:i.length-1
return s&&void 0!==r?r:i[s]}function tt(e){"string"==typeof e.type&&(e.type=Ea[e.type])}function nt(e){return e.includes("scale")?1:0}function rt(e,t){if(!e||"none"===e)return nt(t)
const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u)
let r,a
if(n)r=Fa,a=n
else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u)
r=Aa,a=t}if(!a)return nt(t)
const i=r[t],s=a[1].split(",").map(at)
return"function"==typeof i?i(s):s[i]}function at(e){return parseFloat(e.trim())}function it(){if(za){const e=Array.from(Ka).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map
t.forEach(e=>{const t=function(e){const t=[]
return ja.forEach(n=>{const r=e.getValue(n)
void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}(e)
t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render()
const t=n.get(e)
t&&t.forEach(([t,n])=>{var r
null==(r=e.getValue(t))||r.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}za=0,Ua=0,Ka.forEach(e=>e.complete(Ya)),Ka.clear()}function st(){Ka.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(za=1)})}function ot(e,t){const n=Pe(e)
return()=>Xa[t]??n()}function lt(e,t){return e?"function"==typeof e?qa()?aa(e,t):"ease-out":ur(e)?Ga(e):Array.isArray(e)?e.map(e=>lt(e,t)||Za.easeOut):Za[e]:void 0}function ut(e,t,n,{delay:r=0,duration:a=300,repeat:i=0,repeatType:s="loop",ease:o="easeOut",times:l}={},u){const c={[t]:n}
l&&(c.offset=l)
const h=lt(o,a)
Array.isArray(h)&&(c.easing=h)
const d={delay:r,duration:a,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:i+1,direction:"reverse"===s?"alternate":"normal"}
return u&&(d.pseudoElement=u),e.animate(c,d)}function ct(e){return"function"==typeof e&&"applyToOptions"in e}function ht(e){return Ae(e)&&"offsetHeight"in e}function dt(e,t,n=1){const[r,a]=function(e){const t=ii.exec(e)
if(!t)return[,]
const[,n,r,a]=t
return[`--${n??r}`,a]}(e)
if(!r)return
const i=window.getComputedStyle(t).getPropertyValue(r)
if(i){const e=i.trim()
return Bn(e)?parseFloat(e):e}return kr(a)?dt(a,t,n+1):a}function pt(e,t){return(null==e?void 0:e[t])??(null==e?void 0:e.default)??e}function mt(e){return"number"==typeof e?0===e:null!==e?"none"===e||"0"===e||Kn(e):1}function ft(e){const[t,n]=e.slice(0,-1).split("(")
if("drop-shadow"===t)return e
const[r]=n.match(Mr)||[]
if(!r)return e
const a=n.replace(r,"")
let i=ci.has(t)?1:0
return r!==n&&(i*=100),t+"("+i+a+")"}function vt(e,t){let n=vi(e)
return n!==di&&(n=Gr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}function yt(e){if(e instanceof EventTarget)return[e]
if("string"==typeof e){const t=document.querySelectorAll(e)
return t?Array.from(t):[]}return Array.from(e)}function gt(e,t){return new bi(e,t)}function wt(){return Ti.x||Ti.y}function bt(e){return"x"===e||"y"===e?Ti[e]?null:(Ti[e]=1,()=>{Ti[e]=0}):Ti.x||Ti.y?null:(Ti.x=Ti.y=1,()=>{Ti.x=Ti.y=0})}function xt(e,t){const n=yt(e),r=new AbortController
return[n,{passive:1,...t,signal:r.signal},()=>r.abort()]}function Tt(e){return!("touch"===e.pointerType||wt())}function kt(e,t,n={}){const[r,a,i]=xt(e,n),s=e=>{if(!Tt(e))return
const{target:n}=e,r=t(n,e)
if("function"!=typeof r||!n)return
const i=e=>{Tt(e)&&(r(e),n.removeEventListener("pointerleave",i))}
n.addEventListener("pointerleave",i,a)}
return r.forEach(e=>{e.addEventListener("pointerenter",s,a)}),i}function Et(e){return t=>{"Enter"===t.key&&e(t)}}function St(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:1,bubbles:1}))}function Ct(e){return Ei(e)&&!wt()}function Rt(e,t,n={}){const[r,a,i]=xt(e,n),s=e=>{const r=e.currentTarget
if(!Ct(e))return
Ci.add(r)
const i=t(r,e),s=(e,t)=>{window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",l),Ci.has(r)&&Ci.delete(r),Ct(e)&&"function"==typeof i&&i(e,{success:t})},o=e=>{s(e,r===window||r===document||n.useGlobalTarget||ki(r,e.target))},l=e=>{s(e,0)}
window.addEventListener("pointerup",o,a),window.addEventListener("pointercancel",l,a)}
return r.forEach(e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",s,a),ht(e)&&(e.addEventListener("focus",e=>((e,t)=>{const n=e.currentTarget
if(!n)return
const r=Et(()=>{if(Ci.has(n))return
St(n,"down")
const e=Et(()=>{St(n,"up")})
n.addEventListener("keyup",e,t),n.addEventListener("blur",()=>St(n,"cancel"),t)})
n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)})(e,a)),t=e,Si.has(t.tagName)||-1!==t.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))}),i}function $t(e){return Ae(e)&&"ownerSVGElement"in e}function Mt(e){return $t(e)&&"svg"===e.tagName}import{r as At,g as Pt}from"./react-core-CV8k_GRh.js"
var Ot,Lt={}
!function(){function e(e,t,n){do{const n=e.charCodeAt(t)
if(32!==n&&9!==n)return t}while(++t<n)
return n}function t(e,t,n){for(;t>n;){const n=e.charCodeAt(--t)
if(32!==n&&9!==n)return t+1}return n}function n(e){if(-1===e.indexOf("%"))return e
try{return decodeURIComponent(e)}catch(t){return e}}if(Ot)return Lt
Ot=1,Object.defineProperty(Lt,"__esModule",{value:1}),Lt.parse=function(r,a){const i=new l,s=r.length
if(s<2)return i
const o=(null==a?void 0:a.decode)||n
let u=0
do{const n=r.indexOf("=",u)
if(-1===n)break
const a=r.indexOf(";",u),l=-1===a?s:a
if(n>l){u=r.lastIndexOf(";",n-1)+1
continue}const c=e(r,u,n),h=t(r,n,c),d=r.slice(c,h)
if(void 0===i[d]){let a=e(r,n+1,l),s=t(r,l,a)
const u=o(r.slice(a,s))
i[d]=u}u=l+1}while(u<s)
return i},Lt.serialize=function(e,t,n){const l=(null==n?void 0:n.encode)||encodeURIComponent
if(!r.test(e))throw new TypeError(`argument name is invalid: ${e}`)
const u=l(t)
if(!a.test(u))throw new TypeError(`argument val is invalid: ${t}`)
let c=e+"="+u
if(!n)return c
if(void 0!==n.maxAge){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`)
c+="; Max-Age="+n.maxAge}if(n.domain){if(!i.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`)
c+="; Domain="+n.domain}if(n.path){if(!s.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`)
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
const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,a=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const e=function(){}
return e.prototype=Object.create(null),e})()}()
var Ft="popstate",Nt=/^:[\w-]+$/,Dt=3,It=2,Wt=1,Vt=10,jt=-2,Bt=e=>"*"===e,Kt=e=>e.join("/").replace(/\/\/+/g,"/"),Ut=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),zt=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Yt=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"",_t=["POST","PUT","PATCH","DELETE"]
new Set(_t)
var Ht=["GET",..._t]
new Set(Ht)
var Xt=At.createContext(null)
Xt.displayName="DataRouter"
var qt=At.createContext(null)
qt.displayName="DataRouterState"
var Gt=At.createContext({isTransitioning:0})
Gt.displayName="ViewTransition",At.createContext(new Map).displayName="Fetchers",At.createContext(null).displayName="Await"
var Zt=At.createContext(null)
Zt.displayName="Navigation"
var Jt=At.createContext(null)
Jt.displayName="Location"
var Qt=At.createContext({outlet:null,matches:[],isDataRoute:0})
Qt.displayName="Route"
var en=At.createContext(null)
en.displayName="RouteError"
var tn="You should call navigate() in a React.useEffect(), not when your component is first rendered."
At.createContext(null)
var nn=At.createElement(k,null),rn=class extends At.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?At.createElement(Qt.Provider,{value:this.props.routeContext},At.createElement(en.Provider,{value:this.state.error,children:this.props.component})):this.props.children}},an={}
At.memo(function({routes:e,future:t,state:n}){return T(e,void 0,n)})
var sn="get",on="application/x-www-form-urlencoded",ln=null,un=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"])
Object.getOwnPropertyNames(Object.prototype).sort().join("\0")
var cn=At.createContext(void 0)
cn.displayName="FrameworkContext"
var hn="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement
try{hn&&(window.__reactRouterVersion="7.6.2")}catch(Ai){}var dn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pn=At.forwardRef(function({onClick:n,discover:r="render",prefetch:i="none",relative:s,reloadDocument:o,replace:l,state:u,target:c,to:h,preventScrollReset:d,viewTransition:m,...f},v){let w,{basename:T}=At.useContext(Zt),k="string"==typeof h&&dn.test(h),E=0
if("string"==typeof h&&k&&(w=h,hn))try{let e=new URL(window.location.href),t=h.startsWith("//")?new URL(e.protocol+h):new URL(h),n=p(t.pathname,T)
t.origin===e.origin&&null!=n?h=n+t.search+t.hash:E=1}catch(Ai){t(0,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=function(t,{relative:n}={}){e(y(),"useHref() may be used only in the context of a <Router> component.")
let{basename:r,navigator:a}=At.useContext(Zt),{hash:i,pathname:s,search:o}=x(t,{relative:n}),l=s
return"/"!==r&&(l="/"===s?r:Kt([r,s])),a.createHref({pathname:l,search:o,hash:i})}(h,{relative:s}),[C,R,$]=function(e,t){let n=At.useContext(cn),[r,a]=At.useState(0),[i,s]=At.useState(0),{onFocus:o,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:h}=t,d=At.useRef(null)
At.useEffect(()=>{if("render"===e&&s(1),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{s(e.isIntersecting)})},{threshold:.5})
return d.current&&e.observe(d.current),()=>{e.disconnect()}}},[e]),At.useEffect(()=>{if(r){let e=setTimeout(()=>{s(1)},100)
return()=>{clearTimeout(e)}}},[r])
let p=()=>{a(1)},m=()=>{a(0),s(0)}
return n?"intent"!==e?[i,d,{}]:[i,d,{onFocus:j(o,p),onBlur:j(l,m),onMouseEnter:j(u,p),onMouseLeave:j(c,m),onTouchStart:j(h,p)}]:[0,d,{}]}(i,f),M=function(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let l=b(),u=g(),c=x(e,{relative:s})
return At.useCallback(h=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(h,t)){h.preventDefault()
let t=void 0!==n?n:a(u)===a(c)
l(e,{replace:t,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[u,l,c,n,r,t,e,i,s,o])}(h,{replace:l,state:u,target:c,preventScrollReset:d,relative:s,viewTransition:m}),A=At.createElement("a",{...f,...$,href:w||S,onClick:E||o?n:function(e){n&&n(e),e.defaultPrevented||M(e)},ref:U(v,R),target:c,"data-discover":k||"render"!==r?void 0:"true"})
return C&&!k?At.createElement(At.Fragment,null,A,At.createElement(B,{page:S})):A})
pn.displayName="Link",At.forwardRef(function({"aria-current":t="page",caseSensitive:n=0,className:r="",end:a=0,style:i,to:s,viewTransition:o,children:l,...u},c){let d=x(s,{relative:u.relative}),m=g(),f=At.useContext(qt),{navigator:v,basename:y}=At.useContext(Zt),w=null!=f&&function(t,n={}){let r=At.useContext(Gt)
e(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?")
let{basename:a}=Y("useViewTransitionState"),i=x(t,{relative:n.relative})
if(!r.isTransitioning)return 0
let s=p(r.currentLocation.pathname,a)||r.currentLocation.pathname,o=p(r.nextLocation.pathname,a)||r.nextLocation.pathname
return null!=h(i.pathname,o)||null!=h(i.pathname,s)}(d)&&1==o,b=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,T=m.pathname,k=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null
n||(T=T.toLowerCase(),k=k?k.toLowerCase():null,b=b.toLowerCase()),k&&y&&(k=p(k,y)||k)
const E="/"!==b&&b.endsWith("/")?b.length-1:b.length
let S,C=T===b||!a&&T.startsWith(b)&&"/"===T.charAt(E),R=null!=k&&(k===b||!a&&k.startsWith(b)&&"/"===k.charAt(b.length)),$={isActive:C,isPending:R,isTransitioning:w},M=C?t:void 0
S="function"==typeof r?r($):[r,C?"active":null,R?"pending":null,w?"transitioning":null].filter(Boolean).join(" ")
let A="function"==typeof i?i($):i
return At.createElement(pn,{...u,"aria-current":M,className:S,ref:c,style:A,to:s,viewTransition:o},"function"==typeof l?l($):l)}).displayName="NavLink",At.forwardRef(({discover:t="render",fetcherKey:n,navigate:r,reloadDocument:i,replace:s,state:o,method:l=sn,action:u,onSubmit:c,relative:h,preventScrollReset:d,viewTransition:m,...f},v)=>{let y=function(){let{router:e}=Y("useSubmit"),{basename:t}=At.useContext(Zt),n=C("useRouteId")
return At.useCallback(async(r,a={})=>{let{action:i,method:s,encType:o,formData:l,body:u}=function(e,t){let n,r,a,i,s
if(L(o=e)&&"form"===o.tagName.toLowerCase()){let s=e.getAttribute("action")
r=s?p(s,t):null,n=e.getAttribute("method")||sn,a=F(e.getAttribute("enctype"))||on,i=new FormData(e)}else if(function(e){return L(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return L(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let s=e.form
if(null==s)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>')
let o=e.getAttribute("formaction")||s.getAttribute("action")
if(r=o?p(o,t):null,n=e.getAttribute("formmethod")||s.getAttribute("method")||sn,a=F(e.getAttribute("formenctype"))||F(s.getAttribute("enctype"))||on,i=new FormData(s,e),!function(){if(null===ln)try{new FormData(document.createElement("form"),0),ln=0}catch(Ai){ln=1}return ln}()){let{name:t,type:n,value:r}=e
if("image"===n){let e=t?`${t}.`:""
i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,r)}}else{if(L(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">')
n=sn,r=null,a=on,s=e}var o
return i&&"text/plain"===a&&(s=i,i=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:i,body:s}}(r,t)
if(0==a.navigate){let t=a.fetcherKey||yn()
await e.fetch(t,n,a.action||i,{preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||o,flushSync:a.flushSync})}else await e.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||o,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,n])}(),w=function(t,{relative:n}={}){let{basename:r}=At.useContext(Zt),i=At.useContext(Qt)
e(i,"useFormAction must be used inside a RouteContext")
let[s]=i.matches.slice(-1),o={...x(t||".",{relative:n})},l=g()
if(null==t){o.search=l.search
let e=new URLSearchParams(o.search),t=e.getAll("index")
if(t.some(e=>""===e)){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t))
let n=e.toString()
o.search=n?`?${n}`:""}}return t&&"."!==t||!s.route.index||(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),"/"!==r&&(o.pathname="/"===o.pathname?r:Kt([r,o.pathname])),a(o)}(u,{relative:h}),b="get"===l.toLowerCase()?"get":"post",T="string"==typeof u&&dn.test(u)
return At.createElement("form",{ref:v,method:b,action:w,onSubmit:i?c:e=>{if(c&&c(e),e.defaultPrevented)return
e.preventDefault()
let t=e.nativeEvent.submitter,a=(null==t?void 0:t.getAttribute("formmethod"))||l
y(t||e.currentTarget,{fetcherKey:n,method:a,navigate:r,replace:s,state:o,relative:h,preventScrollReset:d,viewTransition:m})},...f,"data-discover":T||"render"!==t?void 0:"true"})}).displayName="Form"
var mn,fn,vn=0,yn=()=>`__${String(++vn)}__`
const gn=Pt(fn?mn:(fn=1,mn=function(e,t,n,r){var a=n?n.call(r,e,t):void 0
if(void 0!==a)return!!a
if(e===t)return 1
if("object"!=typeof e||!e||"object"!=typeof t||!t)return 0
var i=Object.keys(e),s=Object.keys(t)
if(i.length!==s.length)return 0
for(var o=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var u=i[l]
if(!o(u))return 0
var c=e[u],h=t[u]
if(0==(a=n?n.call(r,c,h,u):void 0)||void 0===a&&c!==h)return 0}return 1}))
var wn,bn,xn="-ms-",Tn="-moz-",kn="-webkit-",En="comm",Sn="rule",Cn="decl",Rn="@keyframes",$n=Math.abs,Mn=String.fromCharCode,An=Object.assign,Pn=1,On=1,Ln=0,Fn=0,Nn=0,Dn="",In={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}
const Wn=Pt(bn?wn:(bn=1,wn=function(e,t,n,r,a,i,s,o){if(!e){var l
if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var u=[n,r,a,i,s,o],c=0;(l=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}})),Vn=(e,t,n)=>n>t?t:n<e?e:n,jn={},Bn=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Kn=e=>/^0[^.\s]+$/u.test(e),Un=e=>e,zn=(e,t)=>n=>t(e(n)),Yn=(...e)=>e.reduce(zn),_n=(e,t,n)=>{const r=t-e
return 0===r?1:(n-e)/r}
class Hn{constructor(){this.subscriptions=[]}add(e){return $e(this.subscriptions,e),()=>Me(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length
if(r)if(1===r)this.subscriptions[0](e,t,n)
else for(let a=0;a<r;a++){const r=this.subscriptions[a]
r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Xn=e=>1e3*e,qn=e=>e/1e3,Gn=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Zn=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Jn=e=>t=>1-e(1-t),Qn=Le(.33,1.53,.69,.99),er=Jn(Qn),tr=Zn(er),nr=e=>(e*=2)<1?.5*er(e):.5*(2-Math.pow(2,-10*(e-1))),rr=e=>1-Math.sin(Math.acos(e)),ar=Jn(rr),ir=Zn(rr),sr=Le(.42,0,1,1),or=Le(0,0,.58,1),lr=Le(.42,0,.58,1),ur=e=>Array.isArray(e)&&"number"==typeof e[0],cr={linear:Un,easeIn:sr,easeInOut:lr,easeOut:or,circIn:rr,circInOut:ir,circOut:ar,backIn:er,backInOut:tr,backOut:Qn,anticipate:nr},hr=e=>{if(ur(e)){e.length
const[t,n,r,a]=e
return Le(t,n,r,a)}return"string"==typeof e?cr[e]:e},dr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],pr={value:null},{schedule:mr,cancel:fr,state:vr,steps:yr}=Fe("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:Un,1)
let gr
const wr={now:()=>(void 0===gr&&wr.set(vr.isProcessing||jn.useManualTiming?vr.timestamp:performance.now()),gr),set:e=>{gr=e,queueMicrotask(Ne)}},br=e=>t=>"string"==typeof t&&t.startsWith(e),xr=br("--"),Tr=br("var(--"),kr=e=>Tr(e)?Er.test(e.split("/*")[0].trim()):0,Er=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Sr={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},Cr={...Sr,transform:e=>Vn(0,1,e)},Rr={...Sr,default:1},$r=e=>Math.round(1e5*e)/1e5,Mr=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,Ar=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Pr=(e,t)=>n=>Boolean("string"==typeof n&&Ar.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),Or=(e,t,n)=>r=>{if("string"!=typeof r)return r
const[a,i,s,o]=r.match(Mr)
return{[e]:parseFloat(a),[t]:parseFloat(i),[n]:parseFloat(s),alpha:void 0!==o?parseFloat(o):1}},Lr={...Sr,transform:e=>Math.round((e=>Vn(0,255,e))(e))},Fr={test:Pr("rgb","red"),parse:Or("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Lr.transform(e)+", "+Lr.transform(t)+", "+Lr.transform(n)+", "+$r(Cr.transform(r))+")"},Nr={test:Pr("#"),parse:function(e){let t="",n="",r="",a=""
return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),a=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),a=e.substring(4,5),t+=t,n+=n,r+=r,a+=a),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:a?parseInt(a,16)/255:1}},transform:Fr.transform},Dr=e=>({test:t=>"string"==typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Ir=Dr("deg"),Wr=Dr("%"),Vr=Dr("px"),jr=Dr("vh"),Br=Dr("vw"),Kr=(()=>({...Wr,parse:e=>Wr.parse(e)/100,transform:e=>Wr.transform(100*e)}))(),Ur={test:Pr("hsl","hue"),parse:Or("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Wr.transform($r(t))+", "+Wr.transform($r(n))+", "+$r(Cr.transform(r))+")"},zr={test:e=>Fr.test(e)||Nr.test(e)||Ur.test(e),parse:e=>Fr.test(e)?Fr.parse(e):Ur.test(e)?Ur.parse(e):Nr.parse(e),transform:e=>"string"==typeof e?e:e.hasOwnProperty("red")?Fr.transform(e):Ur.transform(e),getAnimatableNone:e=>{const t=zr.parse(e)
return t.alpha=0,zr.transform(t)}},Yr=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,_r="number",Hr="color",Xr=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu,qr=e=>"number"==typeof e?0:zr.test(e)?zr.getAnimatableNone(e):e,Gr={test:function(e){var t,n
return isNaN(e)&&"string"==typeof e&&((null==(t=e.match(Mr))?void 0:t.length)||0)+((null==(n=e.match(Yr))?void 0:n.length)||0)>0},parse:Ie,createTransformer:We,getAnimatableNone:function(e){const t=Ie(e)
return We(e)(t.map(qr))}},Zr=(e,t,n)=>e+(t-e)*n,Jr=(e,t,n)=>{const r=e*e,a=n*(t*t-r)+r
return a<0?0:Math.sqrt(a)},Qr=[Nr,Fr,Ur],ea=(e,t)=>{const n=Be(e),r=Be(t)
if(!n||!r)return je(e,t)
const a={...n}
return e=>(a.red=Jr(n.red,r.red,e),a.green=Jr(n.green,r.green,e),a.blue=Jr(n.blue,r.blue,e),a.alpha=Zr(n.alpha,r.alpha,e),Fr.transform(a))},ta=new Set(["none","hidden"]),na=(e,t)=>{const n=Gr.createTransformer(t),r=De(e),a=De(t)
return r.indexes.var.length===a.indexes.var.length&&r.indexes.color.length===a.indexes.color.length&&r.indexes.number.length>=a.indexes.number.length?ta.has(e)&&!a.values.length||ta.has(t)&&!r.values.length?function(e,t){return ta.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):Yn(ze(function(e,t){const n=[],r={color:0,var:0,number:0}
for(let a=0;a<t.values.length;a++){const i=t.types[a],s=e.indexes[i][r[i]],o=e.values[s]??0
n[a]=o,r[i]++}return n}(r,a),a.values),n):je(e,t)},ra=e=>{const t=({timestamp:t})=>e(t)
return{start:(e=1)=>mr.update(t,e),stop:()=>fr(t),now:()=>vr.isProcessing?vr.timestamp:wr.now()}},aa=(e,t,n=10)=>{let r=""
const a=Math.max(Math.round(t/n),2)
for(let i=0;i<a;i++)r+=Math.round(1e4*e(i/(a-1)))/1e4+", "
return`linear(${r.substring(0,r.length-2)})`},ia=2e4,sa=100,oa=10,la=1,ua=0,ca=800,ha=.3,da=.3,pa={granular:.01,default:2},ma={granular:.005,default:.5},fa=.01,va=10,ya=.05,ga=1,wa=.001,ba=12,xa=["duration","bounce"],Ta=["stiffness","damping","mass"]
Ze.applyToOptions=e=>{const t=function(e,t=100){const n=Ze({...e,keyframes:[0,t]}),r=Math.min(He(n),ia)
return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:qn(r)}}(e,100)
return e.ease=t.ease,e.duration=Xn(t.duration),e.type="keyframes",e}
const ka=e=>null!==e,Ea={decay:Je,inertia:Je,tween:Qe,keyframes:Qe,spring:Ze}
class Sa{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const Ca=e=>e/100
class Ra extends Sa{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=0,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var e,t
const{motionValue:n}=this.options
n&&n.updatedAt!==wr.now()&&this.tick(wr.now()),this.isStopped=1,"idle"!==this.state&&(this.teardown(),null==(t=(e=this.options).onStop)||t.call(e))},this.options=e,this.initAnimation(),this.play(),0==e.autoplay&&this.pause()}initAnimation(){const{options:e}=this
tt(e)
const{type:t=Qe,repeat:n=0,repeatDelay:r=0,repeatType:a,velocity:i=0}=e
let{keyframes:s}=e
const o=t||Qe
o!==Qe&&"number"!=typeof s[0]&&(this.mixKeyframes=Yn(Ca,_e(s[0],s[1])),s=[0,100])
const l=o({...e,keyframes:s})
"mirror"===a&&(this.mirroredGenerator=o({...e,keyframes:[...s].reverse(),velocity:-i})),null===l.calculatedDuration&&(l.calculatedDuration=He(l))
const{calculatedDuration:u}=l
this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=l}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed
null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=0){const{generator:n,totalDuration:r,mixKeyframes:a,mirroredGenerator:i,resolvedDuration:s,calculatedDuration:o}=this
if(null===this.startTime)return n.next(0)
const{delay:l=0,keyframes:u,repeat:c,repeatType:h,repeatDelay:d,type:p,onUpdate:m,finalKeyframe:f}=this.options
this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e)
const v=this.currentTime-l*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?v<0:v>r
this.currentTime=Math.max(v,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=r)
let g=this.currentTime,w=n
if(c){const e=Math.min(this.currentTime,r)/s
let t=Math.floor(e),n=e%1
!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,c+1),Boolean(t%2)&&("reverse"===h?(n=1-n,d&&(n-=d/s)):"mirror"===h&&(w=i)),g=Vn(0,1,n)*s}const b=y?{done:0,value:u[0]}:w.next(g)
a&&(b.value=a(b.value))
let{done:x}=b
y||null===o||(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0)
const T=null===this.holdTime&&("finished"===this.state||"running"===this.state&&x)
return T&&p!==Je&&(b.value=et(u,this.options,f,this.speed)),m&&m(b.value),T&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return qn(this.calculatedDuration)}get time(){return qn(this.currentTime)}set time(e){var t
e=Xn(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),null==(t=this.driver)||t.start(0)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(wr.now())
const t=this.playbackSpeed!==e
this.playbackSpeed=e,t&&(this.time=qn(this.currentTime))}play(){var e,t
if(this.isStopped)return
const{driver:n=ra,startTime:r}=this.options
this.driver||(this.driver=n(e=>this.tick(e))),null==(t=(e=this.options).onPlay)||t.call(e)
const a=this.driver.now()
"finished"===this.state?(this.updateFinished(),this.startTime=a):null!==this.holdTime?this.startTime=a-this.holdTime:this.startTime||(this.startTime=r??a),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(wr.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t
this.notifyFinished(),this.teardown(),this.state="finished",null==(t=(e=this.options).onComplete)||t.call(e)}cancel(){var e,t
this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),null==(t=(e=this.options).onCancel)||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,1)}attachTimeline(e){var t
return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),null==(t=this.driver)||t.stop(),e.observe(this)}}const $a=e=>180*e/Math.PI,Ma=e=>{const t=$a(Math.atan2(e[1],e[0]))
return Pa(t)},Aa={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ma,rotateZ:Ma,skewX:e=>$a(Math.atan(e[1])),skewY:e=>$a(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Pa=e=>((e%=360)<0&&(e+=360),e),Oa=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),La=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Fa={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Oa,scaleY:La,scale:e=>(Oa(e)+La(e))/2,rotateX:e=>Pa($a(Math.atan2(e[6],e[5]))),rotateY:e=>Pa($a(Math.atan2(-e[2],e[0]))),rotateZ:Ma,rotate:Ma,skewX:e=>$a(Math.atan(e[4])),skewY:e=>$a(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2},Na=(e,t)=>{const{transform:n="none"}=getComputedStyle(e)
return rt(n,t)},Da=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ia=(()=>new Set(Da))(),Wa=e=>e===Sr||e===Vr,Va=new Set(["x","y","z"]),ja=Da.filter(e=>!Va.has(e)),Ba={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>rt(t,"x"),y:(e,{transform:t})=>rt(t,"y")}
Ba.translateX=Ba.x,Ba.translateY=Ba.y
const Ka=new Set
let Ua=0,za=0,Ya=0
class _a{constructor(e,t,n,r,a,i=0){this.state="pending",this.isAsync=0,this.needsMeasurement=0,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=a,this.isAsync=i}scheduleResolve(){this.state="scheduled",this.isAsync?(Ka.add(this),Ua||(Ua=1,mr.read(st),mr.resolveKeyframes(it))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this
if(null===e[0]){const a=null==r?void 0:r.get(),i=e[e.length-1]
if(void 0!==a)e[0]=a
else if(n&&t){const r=n.readValue(t,i)
null!=r&&(e[0]=r)}void 0===e[0]&&(e[0]=i),r&&void 0===a&&r.set(e[0])}!function(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=0){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ka.delete(this)}cancel(){"scheduled"===this.state&&(Ka.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}const Ha=Pe(()=>void 0!==window.ScrollTimeline),Xa={},qa=ot(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(Ai){return 0}return 1},"linearEasing"),Ga=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Za={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ga([0,.65,.55,1]),circOut:Ga([.55,0,1,.45]),backIn:Ga([.31,.01,.66,-.59]),backOut:Ga([.33,1.53,.69,.99])}
class Ja extends Sa{constructor(e){if(super(),this.finishedTime=null,this.isStopped=0,!e)return
const{element:t,name:n,keyframes:r,pseudoElement:a,allowFlatten:i=0,finalKeyframe:s,onComplete:o}=e
this.isPseudoElement=Boolean(a),this.allowFlatten=i,this.options=e,e.type
const l=function({type:e,...t}){return ct(e)&&qa()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}(e)
this.animation=ut(t,n,r,l,a),0==l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const e=et(r,this.options,s,this.speed)
this.updateMotionValue?this.updateMotionValue(e):function(e,t,n){(e=>e.startsWith("--"))(t)?e.style.setProperty(t,n):e.style[t]=n}(t,n,e),this.animation.cancel()}null==o||o(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t
null==(t=(e=this.animation).finish)||t.call(e)}cancel(){try{this.animation.cancel()}catch(Ai){}}stop(){if(this.isStopped)return
this.isStopped=1
const{state:e}=this
"idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,t
this.isPseudoElement||null==(t=(e=this.animation).commitStyles)||t.call(e)}get duration(){var e,t
const n=(null==(t=null==(e=this.animation.effect)?void 0:e.getComputedTiming)?void 0:t.call(e).duration)||0
return qn(Number(n))}get time(){return qn(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Xn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){var n
return this.allowFlatten&&(null==(n=this.animation.effect)||n.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Ha()?(this.animation.timeline=e,Un):t(this)}}const Qa={anticipate:nr,backInOut:tr,circInOut:ir}
class ei extends Ja{constructor(e){var t
"string"==typeof(t=e).ease&&t.ease in Qa&&(t.ease=Qa[t.ease]),tt(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:n,onComplete:r,element:a,...i}=this.options
if(!t)return
if(void 0!==e)return void t.set(e)
const s=new Ra({...i,autoplay:0}),o=Xn(this.finishedTime??this.time)
t.setWithVelocity(s.sample(o-10).value,s.sample(o).value,10),s.stop()}}const ti=(e,t)=>"zIndex"===t?0:"number"==typeof e||Array.isArray(e)?1:"string"!=typeof e||!Gr.test(e)&&"0"!==e||e.startsWith("url(")?0:1,ni=new Set(["opacity","clipPath","filter","transform"]),ri=Pe(()=>Object.hasOwnProperty.call(Element.prototype,"animate"))
class ai extends Sa{constructor({autoplay:e=1,delay:t=0,type:n="keyframes",repeat:r=0,repeatDelay:a=0,repeatType:i="loop",keyframes:s,name:o,motionValue:l,element:u,...c}){var h
super(),this.stop=()=>{var e,t
this._animation&&(this._animation.stop(),null==(e=this.stopTimeline)||e.call(this)),null==(t=this.keyframeResolver)||t.cancel()},this.createdAt=wr.now()
const d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:a,repeatType:i,name:o,motionValue:l,element:u,...c},p=(null==u?void 0:u.KeyframeResolver)||_a
this.keyframeResolver=new p(s,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),o,l,u),null==(h=this.keyframeResolver)||h.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0
const{name:a,type:i,velocity:s,delay:o,isHandoff:l,onUpdate:u}=n
this.resolvedAt=wr.now(),function(e,t,n,r){const a=e[0]
if(null===a)return 0
if("display"===t||"visibility"===t)return 1
const i=e[e.length-1],s=ti(a,t),o=ti(i,t)
return s&&o?function(e){const t=e[0]
if(1===e.length)return 1
for(let n=0;n<e.length;n++)if(e[n]!==t)return 1}(e)||("spring"===n||ct(n))&&r:0}(e,a,i,s)||(!jn.instantAnimations&&o||null==u||u(et(e,n,t)),e[0]=e[e.length-1],n.duration=0,n.repeat=0)
const c={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},h=!l&&function(e){var t
const{motionValue:n,name:r,repeatDelay:a,repeatType:i,damping:s,type:o}=e
if(!ht(null==(t=null==n?void 0:n.owner)?void 0:t.current))return 0
const{onUpdate:l,transformTemplate:u}=n.owner.getProps()
return ri()&&r&&ni.has(r)&&("transform"!==r||!u)&&!l&&!a&&"mirror"!==i&&0!==s&&"inertia"!==o}(c)?new ei({...c,element:c.motionValue.owner.current}):new Ra(c)
h.finished.then(()=>this.notifyFinished()).catch(Un),this.pendingTimeline&&(this.stopTimeline=h.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=h}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e
return this._animation||(null==(e=this.keyframeResolver)||e.resume(),Ya=1,st(),it(),Ya=0),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e
this._animation&&this.animation.cancel(),null==(e=this.keyframeResolver)||e.cancel()}}const ii=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,si=new Set(["width","height","top","left","right","bottom",...Da]),oi=e=>t=>t.test(e),li=[Sr,Vr,Wr,Ir,Br,jr,{test:e=>"auto"===e,parse:e=>e}],ui=e=>li.find(oi(e)),ci=new Set(["brightness","contrast","saturate","opacity"]),hi=/\b([a-z-]*)\(.*?\)/gu,di={...Gr,getAnimatableNone:e=>{const t=e.match(hi)
return t?t.map(ft).join(" "):e}},pi={...Sr,transform:Math.round},mi={borderWidth:Vr,borderTopWidth:Vr,borderRightWidth:Vr,borderBottomWidth:Vr,borderLeftWidth:Vr,borderRadius:Vr,radius:Vr,borderTopLeftRadius:Vr,borderTopRightRadius:Vr,borderBottomRightRadius:Vr,borderBottomLeftRadius:Vr,width:Vr,maxWidth:Vr,height:Vr,maxHeight:Vr,top:Vr,right:Vr,bottom:Vr,left:Vr,padding:Vr,paddingTop:Vr,paddingRight:Vr,paddingBottom:Vr,paddingLeft:Vr,margin:Vr,marginTop:Vr,marginRight:Vr,marginBottom:Vr,marginLeft:Vr,backgroundPositionX:Vr,backgroundPositionY:Vr,rotate:Ir,rotateX:Ir,rotateY:Ir,rotateZ:Ir,scale:Rr,scaleX:Rr,scaleY:Rr,scaleZ:Rr,skew:Ir,skewX:Ir,skewY:Ir,distance:Vr,translateX:Vr,translateY:Vr,translateZ:Vr,x:Vr,y:Vr,z:Vr,perspective:Vr,transformPerspective:Vr,opacity:Cr,originX:Kr,originY:Kr,originZ:Vr,zIndex:pi,fillOpacity:Cr,strokeOpacity:Cr,numOctaves:pi},fi={...mi,color:zr,backgroundColor:zr,outlineColor:zr,fill:zr,stroke:zr,borderColor:zr,borderTopColor:zr,borderRightColor:zr,borderBottomColor:zr,borderLeftColor:zr,filter:di,WebkitFilter:di},vi=e=>fi[e],yi=new Set(["auto","none","0"])
class gi extends _a{constructor(e,t,n,r,a){super(e,t,n,r,a,1)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this
if(!t||!t.current)return
super.readKeyframes()
for(let o=0;o<e.length;o++){let n=e[o]
if("string"==typeof n&&(n=n.trim(),kr(n))){const r=dt(n,t.current)
void 0!==r&&(e[o]=r),o===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!si.has(n)||2!==e.length)return
const[r,a]=e,i=ui(r),s=ui(a)
if(i!==s)if(Wa(i)&&Wa(s))for(let o=0;o<e.length;o++){const t=e[o]
"string"==typeof t&&(e[o]=parseFloat(t))}else Ba[n]&&(this.needsMeasurement=1)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[]
for(let r=0;r<e.length;r++)(null===e[r]||mt(e[r]))&&n.push(r)
n.length&&function(e,t,n){let r,a=0
for(;a<e.length&&!r;){const t=e[a]
"string"==typeof t&&!yi.has(t)&&De(t).values.length&&(r=e[a]),a++}if(r&&n)for(const i of t)e[i]=vt(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this
if(!e||!e.current)return
"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ba[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin
const r=t[t.length-1]
void 0!==r&&e.getValue(n,r).jump(r,0)}measureEndState(){var e
const{element:t,name:n,unresolvedKeyframes:r}=this
if(!t||!t.current)return
const a=t.getValue(n)
a&&a.jump(this.measuredOrigin,0)
const i=r.length-1,s=r[i]
r[i]=Ba[n](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==s&&void 0===this.finalKeyframe&&(this.finalKeyframe=s),(null==(e=this.removedTransforms)?void 0:e.length)&&this.removedTransforms.forEach(([e,n])=>{t.getValue(e).set(n)}),this.resolveNoneKeyframes()}}const wi=(e,t)=>t&&"number"==typeof e?t.transform(e):e
class bi{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(e,t=1)=>{var n,r
const a=wr.now()
if(this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(null==(n=this.events.change)||n.notify(this.current),this.dependents))for(const i of this.dependents)i.dirty()
t&&(null==(r=this.events.renderRequest)||r.notify(this.current))},this.hasAnimated=0,this.setCurrent(e),this.owner=t.owner}setCurrent(e){var t
this.current=e,this.updatedAt=wr.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Hn)
const n=this.events[e].add(t)
return"change"===e?()=>{n(),mr.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=1){t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=1){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e
null==(e=this.events.change)||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=wr.now()
if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0
const t=Math.min(this.updatedAt-this.prevUpdatedAt,30)
return Oe(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=1,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t
null==(e=this.dependents)||e.clear(),null==(t=this.events.destroy)||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}const{schedule:xi}=Fe(queueMicrotask,0),Ti={x:0,y:0},ki=(e,t)=>t?e===t?1:ki(e,t.parentElement):0,Ei=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:0!=e.isPrimary,Si=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]),Ci=new WeakSet,Ri=e=>Boolean(e&&e.getVelocity),$i=[...li,zr,Gr],Mi=e=>$i.find(oi(e))
export{Re as $,ai as A,$e as B,Me as C,wr as D,ar as E,$t as F,Mt as G,yr as H,kt as I,Ra as J,Rt as K,_a as L,jn as M,Bn as N,Kn as O,Mi as P,vt as Q,gi as R,Hn as S,nt as T,Na as U,vi as V,yt as W,Wn as X,gn as Y,In as Z,Sn as _,xr as a,Ee as a0,ye as a1,ke as a2,Se as a3,Ce as a4,g as a5,z as a6,P as a7,M as a8,$ as a9,b as aa,pn as ab,Da as b,Ri as c,gt as d,pt as e,mr as f,wi as g,si as h,ht as i,Ei as j,Zr as k,vr as l,xi as m,mi as n,Yn as o,Vr as p,fr as q,qn as r,Xn as s,Ia as t,_n as u,Vn as v,bt as w,Wr as x,Un as y,Gr as z}
