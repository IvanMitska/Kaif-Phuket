import{r as e,j as t}from"./react-core-DWAaPJsY.js";import{u as a,L as i}from"./main-D5fzgQEk.js";import{d as n}from"./styled-components-fuCKgGld.js";import{u as r}from"./i18n-core-DrMVsQFB.js";import{a5 as o,aa as s,ab as l}from"./vendor-misc-D8JVgYt7.js";import{m as d,A as p}from"./framer-motion-Ep29qSuC.js";import{F as c,a as m,b as g}from"./heroicons-DSEs4UIN.js";import h from"./GlobalStyles-BU77DBov.js";import"./react-dom-client-BkLB9BFi.js";import"./react-dom-Bb3pWfRT.js";import"./vendor-scheduler-9xQDShOA.js";import"./i18n-detector-l8ePocMX.js";import"./react-helmet-BCF-s7y-.js";const Header=()=>{const[a,i]=e.useState(!1),[n,l]=e.useState(!1),[c,m]=e.useState(null),[g,h]=e.useState(null),{i18n:x,t:u}=r(),f=o(),b=s(),y=e.useCallback(e=>"/"===e&&"/"===f.pathname||!("/"===e||!f.pathname.startsWith(e)),[f.pathname]),v=e.useCallback(e=>{x.changeLanguage(e),localStorage.setItem("i18nextLng",e),document.documentElement.lang=e,l(!1)},[x]),w=e.useCallback(e=>{g&&clearTimeout(g);const t=setTimeout(()=>{b(e),setTimeout(()=>{window.scrollTo({top:0,left:0,behavior:"instant"}),document.documentElement.scrollTop=0,document.body.scrollTop=0},0),setTimeout(()=>{window.scrollY>0&&window.scrollTo(0,0)},50)},100);h(t)},[b,g]),j=e.useMemo(()=>[{code:"ru",name:"Русский"},{code:"en",name:"English"},{code:"th",name:"ไทย"}],[]),k=e.useMemo(()=>j.find(e=>e.code===x.language)||j[0],[j,x.language]);e.useEffect(()=>{const handleClickOutside=e=>{e.target.closest(".language-selector")||l(!1)};return document.addEventListener("click",handleClickOutside),()=>document.removeEventListener("click",handleClickOutside)},[]),e.useEffect(()=>()=>{g&&clearTimeout(g)},[g]);const C=e.useMemo(()=>[{path:"/",label:u("navigation.home")},{path:"/banya",label:u("navigation.banya")},{path:"/restaurant",label:u("navigation.restaurant")},{path:"/spa",label:u("navigation.spa")},{path:"/sports",label:u("navigation.sports")},{path:"/contacts",label:u("navigation.contacts")}],[u,x.language]),z=e.useCallback(e=>({color:y(e)?"#90B3A7":c===e?"#2C3E2D":"#5A6761",textDecoration:"none",fontSize:"14px",fontWeight:y(e)?"600":"500",fontFamily:'"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',textTransform:"uppercase",letterSpacing:"0.8px",position:"relative",transition:"all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",whiteSpace:"nowrap",height:"65px",display:"flex",alignItems:"center",margin:0,padding:"0 1rem",cursor:"pointer",transform:c===e?"translateY(-1px)":"translateY(0)",textShadow:y(e)?"0 0 8px rgba(144, 179, 167, 0.3)":"none"}),[y,c]);return e.useEffect(()=>{if(a){const e=window.scrollY;document.body.classList.add("mobile-menu-open"),document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${e}px`,document.body.style.width="100%",document.body.setAttribute("data-scroll-lock-position",e.toString())}else{const e=document.body.getAttribute("data-scroll-lock-position");document.body.classList.remove("mobile-menu-open"),document.body.style.overflow="",document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.removeAttribute("data-scroll-lock-position"),e&&window.scrollTo(0,parseInt(e))}return()=>{document.body.classList.remove("mobile-menu-open"),document.body.style.overflow="",document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.removeAttribute("data-scroll-lock-position")}},[a]),e.useEffect(()=>{const handleResize=()=>{window.innerWidth>768&&a&&i(!1)};return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[a]),e.useEffect(()=>{const checkHeaderVisibility=()=>{const e=document.querySelector(".kaif-header");if(e){const t=e.getBoundingClientRect(),a=window.getComputedStyle(e);0===t.top&&0!==t.height&&"fixed"===a.position||(e.style.cssText="\n            position: fixed !important;\n            top: 0px !important;\n            left: 0px !important;\n            right: 0px !important;\n            width: 100% !important;\n            height: 65px !important;\n            z-index: 9999 !important;\n            background-color: #ffffff !important;\n            display: flex !important;\n            visibility: visible !important;\n            opacity: 1 !important;\n            transform: none !important;\n            transition: none !important;\n            animation: none !important;\n            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;\n            align-items: center !important;\n            justify-content: center !important;\n          ")}};checkHeaderVisibility();const e=setInterval(checkHeaderVisibility,500),handleScroll=()=>{checkHeaderVisibility()};return window.addEventListener("scroll",handleScroll,{passive:!0}),()=>{clearInterval(e),window.removeEventListener("scroll",handleScroll)}},[]),t.jsxs(t.Fragment,{children:[t.jsx("header",{className:"kaif-header fixed top-0 left-0 right-0 w-full h-16 z-50 bg-white",style:{position:"fixed",top:"0",left:"0",right:"0",width:"100%",height:"65px",zIndex:"9999",backgroundColor:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)",pointerEvents:"auto",visibility:"visible",opacity:"1",transform:"none",transition:"none",animation:"none"},children:t.jsxs("div",{style:{width:"100%",maxWidth:"1400px",height:"65px",display:"flex",alignItems:"center",padding:"0 2rem",margin:0,boxSizing:"border-box"},children:[t.jsx("div",{style:{flex:"0 0 200px",display:"flex",alignItems:"center",justifyContent:"flex-start",height:"65px",margin:0,padding:0},children:t.jsxs("div",{onClick:()=>w("/"),style:{display:"flex",alignItems:"center",textDecoration:"none",height:"65px",margin:0,padding:0,cursor:"pointer"},itemScope:!0,itemType:"https://schema.org/Organization",children:[t.jsx("meta",{itemProp:"name",content:"KAIF SAUNA & SPA"}),t.jsx("meta",{itemProp:"url",content:"https://kaif-phuket.com"}),t.jsxs("picture",{children:[t.jsx("source",{srcSet:"/images/logos/logo-header-1x.webp",type:"image/webp",sizes:"38px"}),t.jsx("img",{src:"/images/logos/logo-header.png",alt:"KAIF SAUNA & SPA - Phuket",title:"KAIF SAUNA & SPA",style:{height:"38px",width:"auto",display:"block",margin:0,padding:0},loading:"eager",itemProp:"logo"})]})]})}),t.jsx("div",{style:{flex:"1",display:"flex",alignItems:"center",justifyContent:"center",height:"65px",margin:0,padding:"0 1rem"},children:t.jsx("nav",{style:{display:"flex",alignItems:"center",gap:"2rem",height:"65px",margin:0,padding:0,position:"relative"},className:"desktop-nav",children:C.map(e=>t.jsxs("div",{style:z(e.path),onMouseEnter:()=>m(e.path),onMouseLeave:()=>m(null),onClick:()=>w(e.path),children:[e.label,y(e.path)&&t.jsx(d.div,{initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1},transition:{duration:.5,ease:[.25,.46,.45,.94],type:"tween"},style:{position:"absolute",bottom:"-8px",left:"50%",transform:"translateX(-50%)",width:"100%",height:"4px",background:"linear-gradient(90deg, transparent 0%, #90B3A7 20%, #90B3A7 80%, transparent 100%)",borderRadius:"2px",transformOrigin:"center",boxShadow:"0 0 20px rgba(144, 179, 167, 1), 0 4px 12px rgba(144, 179, 167, 0.6)"}}),!y(e.path)&&c===e.path&&t.jsx(d.div,{initial:{scaleX:0,opacity:0,y:4},animate:{scaleX:1,opacity:1,y:0},exit:{scaleX:0,opacity:0,y:4},transition:{duration:.3,ease:[.25,.46,.45,.94],type:"tween"},style:{position:"absolute",bottom:"-8px",left:"50%",transform:"translateX(-50%)",width:"80%",height:"3px",background:"linear-gradient(90deg, transparent 0%, #2C3E2D 20%, #2C3E2D 80%, transparent 100%)",borderRadius:"2px",transformOrigin:"center",boxShadow:"0 0 12px rgba(44, 62, 45, 0.6)"}})]},e.path))})}),t.jsxs("div",{style:{flex:"0 0 200px",display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"1rem",height:"65px",margin:0,padding:"0 1rem 0 0"},children:[t.jsx(d.button,{className:"mobile-burger",onClick:e=>{e&&(e.preventDefault(),e.stopPropagation()),i(!a)},whileHover:{scale:1.05},whileTap:{scale:.95},style:{display:"none",alignItems:"center",justifyContent:"center",width:"2.25rem",height:"2.25rem",padding:0,background:"rgba(144, 179, 167, 0.1)",border:"1px solid rgba(144, 179, 167, 0.2)",borderRadius:"8px",color:"#2C3E2D",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",marginRight:"0"},children:t.jsxs(d.svg,{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",animate:{rotate:a?180:0},transition:{duration:.3,ease:[.23,1,.32,1]},children:[t.jsx(d.line,{x1:"3",y1:"6",x2:"17",y2:"6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",animate:{rotate:a?45:0,y:a?4:0},transition:{duration:.3,ease:[.23,1,.32,1]},style:{transformOrigin:"10px 6px"}}),t.jsx(d.line,{x1:"3",y1:"10",x2:"17",y2:"10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",animate:{opacity:a?0:1,scaleX:a?.3:1},transition:{duration:.2,ease:[.23,1,.32,1]},style:{transformOrigin:"10px 10px"}}),t.jsx(d.line,{x1:"3",y1:"14",x2:"17",y2:"14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",animate:{rotate:a?-45:0,y:a?-4:0},transition:{duration:.3,ease:[.23,1,.32,1]},style:{transformOrigin:"10px 14px"}})]})}),t.jsxs("div",{className:"language-selector",style:{position:"relative",display:"flex",alignItems:"center",height:"65px",margin:0,padding:0,width:"64px",flexShrink:0},children:[t.jsxs(d.button,{onClick:()=>l(!n),whileHover:{scale:1.05,transition:{duration:.2}},whileTap:{scale:.95},style:{background:n?"rgba(144, 179, 167, 0.08)":"rgba(255, 255, 255, 0.9)",border:"1px solid "+(n?"#90B3A7":"rgba(144, 179, 167, 0.2)"),borderRadius:"8px",color:n?"#90B3A7":"#374151",fontSize:"13px",fontWeight:"600",fontFamily:'"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',cursor:"pointer",padding:"8px 12px",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",display:"flex",alignItems:"center",justifyContent:"center",height:"36px",minWidth:"56px",margin:0,position:"relative",boxShadow:n?"0 4px 12px rgba(144, 179, 167, 0.25)":"0 2px 4px rgba(0, 0, 0, 0.05)",backdropFilter:"blur(8px)"},onMouseEnter:e=>{n||(e.target.style.borderColor="#90B3A7",e.target.style.color="#90B3A7",e.target.style.background="rgba(144, 179, 167, 0.06)",e.target.style.boxShadow="0 4px 8px rgba(144, 179, 167, 0.15)")},onMouseLeave:e=>{n||(e.target.style.borderColor="rgba(144, 179, 167, 0.2)",e.target.style.color="#374151",e.target.style.background="rgba(255, 255, 255, 0.9)",e.target.style.boxShadow="0 2px 4px rgba(0, 0, 0, 0.05)")},children:[k.code.toUpperCase(),t.jsx(d.svg,{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",style:{marginLeft:"4px",flexShrink:0,opacity:.7},animate:{rotate:n?180:0},transition:{duration:.3,ease:"easeInOut"},children:t.jsx("path",{d:"M6 9l6 6 6-6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),t.jsx(p,{children:n&&t.jsx(d.div,{initial:{opacity:0,y:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.95},transition:{duration:.2,ease:[.4,0,.2,1]},style:{position:"absolute",top:"calc(100% + 8px)",right:0,background:"rgba(255, 255, 255, 0.95)",border:"1px solid rgba(144, 179, 167, 0.15)",borderRadius:"12px",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(144, 179, 167, 0.08)",padding:"8px",minWidth:"140px",zIndex:999998,transformOrigin:"top right",backdropFilter:"blur(12px)"},children:j.map((e,a)=>t.jsxs(d.button,{initial:{opacity:0,x:8},animate:{opacity:1,x:0,transition:{delay:.05*a}},onClick:()=>v(e.code),style:{width:"100%",padding:"10px 14px",textAlign:"left",background:x.language===e.code?"rgba(144, 179, 167, 0.1)":"transparent",border:"none",color:x.language===e.code?"#90B3A7":"#374151",fontWeight:x.language===e.code?"600":"500",fontSize:"14px",fontFamily:'"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",borderRadius:"8px",display:"flex",alignItems:"center",gap:"10px"},whileHover:{backgroundColor:x.language===e.code?"rgba(144, 179, 167, 0.15)":"rgba(144, 179, 167, 0.08)",x:2},whileTap:{scale:.97},children:[t.jsx("span",{style:{fontSize:"16px"},children:"ru"===e.code?"🇷🇺":"en"===e.code?"🇺🇸":"🇹🇭"}),t.jsx("span",{style:{flex:1},children:e.name}),x.language===e.code&&t.jsx(d.div,{initial:{scale:0},animate:{scale:1},style:{width:"6px",height:"6px",borderRadius:"50%",background:"#90B3A7"}})]},e.code))})})]})]})]})}),t.jsx(p,{children:a&&t.jsxs(t.Fragment,{children:[t.jsx(d.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{position:"fixed",top:"65px",left:0,right:0,bottom:0,background:"rgba(44, 62, 45, 0.5)",backdropFilter:"blur(4px)",zIndex:999996},onClick:e=>{e.preventDefault(),e.stopPropagation(),i(!1)}}),t.jsx(d.div,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:200},style:{position:"fixed",top:"65px",right:0,width:"100%",maxWidth:"20rem",height:"calc(100vh - 65px)",background:"#ffffff",backdropFilter:"blur(20px)",borderLeft:"1px solid rgba(144, 179, 167, 0.1)",zIndex:999997,overflowY:"auto",boxShadow:"-4px 0 20px rgba(0, 0, 0, 0.1)"},children:t.jsxs("div",{style:{padding:"2rem 1.5rem",minHeight:"calc(100vh - 65px)",display:"flex",flexDirection:"column"},children:[t.jsx("ul",{style:{listStyle:"none",margin:0,padding:0,flex:1,paddingTop:"1rem"},children:C.map((e,a)=>t.jsx("li",{style:{marginBottom:"0.5rem"},children:t.jsx(d.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.1*a}},children:t.jsx("div",{onClick:t=>{t.preventDefault(),t.stopPropagation(),e.path!==f.pathname&&w(e.path),i(!1)},style:{display:"flex",alignItems:"center",padding:"1rem",fontFamily:'"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',fontSize:"1.125rem",textDecoration:"none",borderRadius:"12px",transition:"all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",cursor:"pointer",background:y(e.path)?"rgba(144, 179, 167, 0.1)":"transparent",transform:y(e.path)?"translateX(0.25rem)":"translateX(0)",fontWeight:y(e.path)?"600":"500",color:y(e.path)?"#90B3A7":"#2C3E2D"},children:e.label})})},e.path))}),t.jsxs("div",{style:{marginTop:"auto",paddingTop:"2rem",borderTop:"1px solid rgba(144, 179, 167, 0.1)"},children:[t.jsx("h3",{style:{fontFamily:'"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',fontSize:"0.875rem",fontWeight:"600",color:"#8B9A8E",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"1rem"},children:u("common.select_language")}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.5rem"},children:j.map((e,a)=>t.jsx(d.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:t=>{t.preventDefault(),t.stopPropagation(),v(e.code),i(!1)},style:{padding:"0.75rem",background:x.language===e.code?"rgba(144, 179, 167, 0.15)":"rgba(144, 179, 167, 0.05)",border:"1px solid "+(x.language===e.code?"rgba(144, 179, 167, 0.3)":"rgba(144, 179, 167, 0.1)"),borderRadius:"8px",color:x.language===e.code?"#90B3A7":"#2C3E2D",fontFamily:'"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',fontSize:"0.875rem",fontWeight:x.language===e.code?"600":"500",cursor:"pointer",transition:"all 0.3s ease"},children:e.code.toUpperCase()},e.code))})]})]})})]})})]})};if("undefined"!=typeof document&&!document.getElementById("header-responsive-styles")){const e=document.createElement("style");e.id="header-responsive-styles",e.textContent="\n  .kaif-header .desktop-nav {\n    display: flex;\n  }\n  \n  .kaif-header .mobile-burger {\n    display: none;\n  }\n  \n  .kaif-header .language-selector {\n    display: flex;\n  }\n  \n  @media (max-width: 1024px) {\n    .kaif-header .desktop-nav {\n      gap: 1.5rem !important;\n    }\n    \n    .kaif-header .desktop-nav > div {\n      padding: 0 0.75rem !important;\n    }\n  }\n  \n  @media (max-width: 768px) {\n    .kaif-header .desktop-nav {\n      display: none !important;\n    }\n    \n    .kaif-header .mobile-burger {\n      display: flex !important;\n    }\n    \n    .kaif-header .language-selector {\n      display: none !important;\n    }\n    \n    .kaif-header > div {\n      padding: 0 1rem !important;\n    }\n    \n    .kaif-header > div > div:first-child {\n      flex: 0 0 auto !important;\n    }\n    \n    .kaif-header > div > div:last-child {\n      flex: 0 0 auto !important;\n      gap: 0 !important;\n      width: auto !important;\n    }\n  }\n  \n  @media (max-width: 480px) {\n    .kaif-header > div {\n      padding: 0 0.5rem !important;\n    }\n    \n    .kaif-header img {\n      height: 32px !important;\n    }\n  }\n  \n  @media (max-width: 320px) {\n    .kaif-header > div {\n      padding: 0 0.25rem !important;\n    }\n  }\n",document.head.appendChild(e)}const x=n.footer`
  position: relative;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  padding: 3rem 2rem calc(1.5rem + env(safe-area-inset-bottom, 0px));
  color: white;
  z-index: 3;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1rem calc(1.5rem + env(safe-area-inset-bottom, 0px));
  }
`,u=n.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem 0;
  
  @media (min-width: 1024px) {
    padding: 3rem 2rem 0;
  }
`,f=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1.8fr 1fr 1fr 1.2fr;
    gap: 2.5rem;
  }
`,b=n(d.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  @media (max-width: 1023px) {
    text-align: center;
    align-items: center;
    grid-column: 1 / -1;
    margin-bottom: 0.5rem;
  }
`,y=n(d.div)`
  height: auto;
  width: 360px;
  margin-bottom: 1.5rem;
  display: block;
  
  /* Десктопная версия и iPad Pro с отрицательным отступом */
  @media (min-width: 1024px) {
    margin-left: -3.5rem;
    align-self: flex-start;
  }
  
  /* Специальные стили для iPad Pro (1024px и выше по ширине) */
  @media (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) {
    margin-left: -3.2rem;
    width: 320px;
  }
  
  /* Стили для iPad Air и маленьких планшетов (820-900px) */
  @media (min-width: 820px) and (max-width: 900px) {
    margin: 0 auto 1.5rem;
    width: 300px;
    align-self: center;
  }
  
  /* Стили для средних планшетов */
  @media (min-width: 901px) and (max-width: 1023px) {
    margin-left: 0;
    width: 300px;
    align-self: flex-start;
  }
  
  /* Мобильная версия с центрированием */
  @media (max-width: 768px) {
    margin: 0 auto 1.5rem;
    width: 320px;
    align-self: center;
  }
`;n.p`
  font-family: ${({theme:e})=>{var t;return(null==(t=null==e?void 0:e.fonts)?void 0:t.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
`;const v=n.p`
  font-family: ${({theme:e})=>{var t;return(null==(t=null==e?void 0:e.fonts)?void 0:t.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 400px;
  
  @media (max-width: 1023px) {
    max-width: 480px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.05rem;
  }
`,w=n.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 1023px) {
    justify-content: center;
  }
`,j=n(d.a)`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: ${({theme:e})=>{var t,a;return(null==(a=null==(t=null==e?void 0:e.colors)?void 0:t.gradients)?void 0:a.logo)||"linear-gradient(135deg, rgba(255, 99, 71, 0.07) 0%, rgba(255, 99, 71, 0.10) 5%, rgba(206, 128, 114, 0.12) 12%, rgba(157, 157, 157, 0.15) 20%, rgba(108, 186, 200, 0.18) 28%, rgba(0, 180, 216, 0.20) 36%, rgba(71, 168, 203, 0.18) 44%, rgba(142, 157, 188, 0.15) 52%, rgba(214, 145, 173, 0.12) 60%, rgba(255, 105, 180, 0.10) 68%, rgba(219, 140, 149, 0.12) 76%, rgba(183, 175, 118, 0.15) 84%, rgba(147, 210, 95, 0.10) 92%, rgba(92, 184, 72, 0.07) 100%)"}};
    border-color: rgba(255, 255, 255, 0.4);
    color: white;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(144, 179, 167, 0.3);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`,k=n(d.div)`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`,C=n.h3`
  font-family: ${({theme:e})=>{var t;return(null==(t=null==e?void 0:e.fonts)?void 0:t.heading)||'"Playfair Display", serif'}};
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
  color: white;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 40px;
    height: 2px;
    background: linear-gradient(135deg, 
      ${({theme:e})=>{var t;return(null==(t=null==e?void 0:e.colors)?void 0:t.primary)||"#90B3A7"}} 0%, 
      ${({theme:e})=>{var t;return(null==(t=null==e?void 0:e.colors)?void 0:t.secondary)||"#D4A574"}} 100%
    );
  }
  
  @media (max-width: 1023px) {
    text-align: center;
    font-size: 1.3rem;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,z=n(l)`
  display: block;
  font-family: ${({theme:e})=>{var t;return(null==(t=null==e?void 0:e.fonts)?void 0:t.primary)||"Inter, sans-serif"}};
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 0.4rem 0;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateX(4px);
  }
`,S=n(d.div)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  
  @media (max-width: 1023px) {
    justify-content: center;
    text-align: left;
  }
  
  svg {
    width: 1.1rem;
    height: 1.1rem;
    color: rgba(144, 179, 167, 0.8);
    margin-top: 0.125rem;
    flex-shrink: 0;
  }
`,I=n.div`
  font-family: ${({theme:e})=>{var t;return(null==(t=null==e?void 0:e.fonts)?void 0:t.primary)||"Inter, sans-serif"}};
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`,A=n.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`,F=n.div`
  padding: 1.5rem 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`,B=n.p`
  font-family: ${({theme:e})=>{var t;return(null==(t=null==e?void 0:e.fonts)?void 0:t.primary)||"Inter, sans-serif"}};
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  
  .highlight {
    color: rgba(144, 179, 167, 0.8);
    font-weight: 500;
  }
`,T=n.div`
  display: flex;
  gap: 2rem;
  
  a {
    font-family: ${({theme:e})=>{var t;return(null==(t=null==e?void 0:e.fonts)?void 0:t.primary)||"Inter, sans-serif"}};
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`,E=n(d.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${({$variant:e})=>{switch(e){case"secondary":return"linear-gradient(135deg, rgba(212, 165, 116, 0.08) 0%, rgba(184, 196, 168, 0.06) 100%)";case"tertiary":return"linear-gradient(135deg, rgba(184, 196, 168, 0.08) 0%, rgba(144, 179, 167, 0.06) 100%)";default:return"linear-gradient(135deg, rgba(144, 179, 167, 0.08) 0%, rgba(212, 165, 116, 0.06) 100%)"}}};
  filter: blur(60px);
  z-index: 2;
  pointer-events: none;
  
  &.deco-1 {
    top: -50px;
    left: 10%;
  }
  
  &.deco-2 {
    top: 30%;
    right: 5%;
  }
  
  &.deco-3 {
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
  }
`,Footer=()=>{const{t:e}=r(),a={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.46,.45,.94]}}},i={animate:{y:[0,-15,0],transition:{duration:12,repeat:1/0,ease:"easeInOut",repeatType:"mirror"}}},n=(new Date).getFullYear(),o=[{path:"/",label:e("navigation.home"),id:"home"},{path:"/restaurant",label:e("navigation.restaurant"),id:"restaurant"},{path:"/spa",label:e("navigation.spa"),id:"spa"},{path:"/sports",label:e("navigation.sports"),id:"sports-main"},{path:"/contacts",label:e("navigation.contacts"),id:"contacts"}],s=[{path:"/spa",label:e("footer.services.sauna"),id:"spa-sauna"},{path:"/restaurant",label:e("navigation.restaurant"),id:"restaurant"},{path:"/sports",label:e("footer.services.fitness"),id:"sports-fitness"},{path:"/banya",label:e("navigation.banya"),id:"banya"},{path:"/sports",label:e("footer.services.fight_club"),id:"sports-club"}];return t.jsxs(x,{children:[t.jsx(E,{className:"deco-1",$variant:"primary",variants:i,animate:"animate"}),t.jsx(E,{className:"deco-2",$variant:"secondary",variants:i,animate:"animate",style:{animationDelay:"-4s"}}),t.jsx(E,{className:"deco-3",$variant:"tertiary",variants:i,animate:"animate",style:{animationDelay:"-8s"}}),t.jsx(u,{children:t.jsxs(d.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.2}}},initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[t.jsxs(f,{children:[t.jsxs(b,{variants:a,children:[t.jsx(y,{whileHover:{scale:1.05,transition:{duration:.3,ease:"easeOut"}},children:t.jsxs("picture",{children:[t.jsx("source",{srcSet:"/images/logos/logo-footer-2x.webp 2x, /images/logos/logo-footer-1x.webp 1x",type:"image/webp"}),t.jsx("source",{srcSet:"/images/logos/logo-footer-2x.png 2x, /images/logos/logo-footer-1x.png 1x",type:"image/png"}),t.jsx("img",{src:"/images/logos/logo-footer-1x.png",alt:"KAIF",style:{width:"100%",height:"auto",maxWidth:"360px",filter:"brightness(1.2) contrast(1.1)",imageRendering:"crisp-edges"},loading:"lazy"})]})}),t.jsx(v,{children:e("footer.brand.description")}),t.jsxs(w,{children:[t.jsx(j,{href:"https://www.instagram.com/kaif.phuket/",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.95},children:t.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),t.jsx(j,{href:"https://web.facebook.com/kaifphuketfb?mibextid=LQQJ4d&_rdc=1&_rdr#",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.95},children:t.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),t.jsx(j,{href:"https://t.me/kaifphuketchat",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.95},children:t.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.789l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"})})}),t.jsx(j,{href:"https://www.youtube.com/@KaifPhuket",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.95},children:t.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})}),t.jsx(j,{href:"https://api.whatsapp.com/send/?phone=66624805877&text&type=phone_number&app_absent=0",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.95},children:t.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",width:"16",height:"16",children:t.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"})})})]})]}),t.jsxs(k,{variants:a,children:[t.jsx(C,{children:e("footer.navigation")}),o.map(e=>t.jsx(z,{to:e.path,children:e.label},e.id))]}),t.jsxs(k,{variants:a,children:[t.jsx(C,{children:e("footer.services.title")}),s.map(e=>t.jsx(z,{to:e.path,children:e.label},e.id))]}),t.jsxs(k,{variants:a,children:[t.jsx(C,{children:e("navigation.contacts")}),t.jsxs(S,{children:[t.jsx(c,{}),t.jsxs(I,{children:["73, Baan Chalekiri Village,",t.jsx("br",{}),"6 Pra Phuket Keaw Road, Kathu"]})]}),t.jsxs(S,{children:[t.jsx(m,{}),t.jsx(I,{children:t.jsx(A,{href:"tel:+66624805877",children:"+66 62 480 5877"})})]}),t.jsxs(S,{children:[t.jsx(g,{}),t.jsxs(I,{children:[e("footer.schedule.daily"),t.jsx("br",{}),e("footer.schedule.hours")]})]})]})]}),t.jsxs(F,{children:[t.jsxs(B,{children:["© ",n," ",t.jsx("span",{className:"highlight",children:"KAIF"}),".",e("footer.copyright")]}),t.jsxs(T,{children:[t.jsx(l,{to:"/privacy",children:e("footer.legal.privacy")}),t.jsx(l,{to:"/terms",children:e("footer.legal.terms")})]})]})]})})]})},L=n.div`
  width: 100%;
  position: relative;
  z-index: 1;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: transparent;

  @media (max-width: 768px) {
    overflow: visible !important;
  }
`,P=n.main`
  width: 100%;
  position: relative;
  z-index: 0;
  flex: 1 0 auto;
  margin: 0;
  padding: 65px 0 0 0;
  background: #FFFFFF;

  @media (max-width: 768px) {
    overflow: visible !important;
    min-height: auto !important;
  }
`,Layout=({children:n})=>{const r=o(),[s,l]=e.useState(!0),d=e.useRef(!0),{isLoading:p}=a();return e.useEffect(()=>{if(d.current)return d.current=!1,void l(!0);l(!1),window.scrollTo(0,0);const e=setTimeout(()=>{l(!0)},500);return()=>clearTimeout(e)},[r.pathname]),t.jsxs(t.Fragment,{children:[t.jsx(h,{}),t.jsx(i,{isVisible:!s&&!p}),t.jsx(Header,{}),t.jsxs(L,{children:[t.jsx(P,{children:n}),s&&t.jsx(Footer,{})]})]})};export{Layout as default};
