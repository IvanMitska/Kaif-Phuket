const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/GlobalFontStyle-BdTMFPq2.js","assets/js/styled-components-CMIfAvVS.js","assets/js/react-core-CV8k_GRh.js","assets/js/vendor-misc-Bm4JrmXh.js","assets/js/GlobalStyles-SUYem3hU.js","assets/css/mobile-optimizations-hxN0jyWt.css","assets/css/simple-header-fix-D1Fsl5im.css","assets/css/scroll-fix-B3L6kO06.css","assets/js/Layout-BgJ2Olj2.js","assets/js/i18n-core-CSZVPE1N.js","assets/js/framer-motion-h7lgP0Yp.js","assets/js/heroicons-B0mUXsxG.js","assets/js/main-C1zLyBkI.js","assets/js/react-dom-client-fHgFUAUX.js","assets/js/react-dom-C7S9v3DL.js","assets/js/vendor-scheduler-DKYT7Wy5.js","assets/css/main-CVol-v9f.css","assets/js/react-helmet-C_ZFuiA7.js","assets/js/HomePage-DV5Ch9CH.js","assets/js/PageHead-C4ywpL0o.js","assets/js/RestaurantPage-BdTl5xYK.js","assets/js/PageScrollReset-CasNnzkC.js","assets/js/SpaPage-B9QIdN1R.js","assets/js/SportsPage-BCCUQp0W.js","assets/js/BanyaPage-o-J4UxFE.js","assets/js/ContactsPage-BQK5CdAn.js","assets/js/CommonComponents-BxKEOWPe.js","assets/js/PrivacyPage-F0m9vz6F.js","assets/js/TermsPage-BRrKIZdU.js","assets/js/SurveyPage-rJpCpIRq.js","assets/js/react-icons-DCZb7Iim.js"])))=>i.map(i=>d[i]);
import{_ as e}from"./main-C1zLyBkI.js"
import{r as t,j as a,R as r}from"./react-core-CV8k_GRh.js"
import{d as s,m as n,o as i}from"./styled-components-CMIfAvVS.js"
import{H as o}from"./react-helmet-C_ZFuiA7.js"
import{a5 as l,a6 as m,a7 as c,a8 as p,a9 as d}from"./vendor-misc-Bm4JrmXh.js"
import{u as x}from"./i18n-core-CSZVPE1N.js"
const u=t.createContext()
let g=0
const _=()=>t.useContext(u),f=({children:e})=>{const[r,s]=t.useState(0),[n,i]=t.useState(1),o=t.useRef(0),l=t.useRef(0)
return a.jsx(u.Provider,{value:{isLoading:r,isContentReady:n,showLoading:(e=1e3)=>o.current||l.current||g?Promise.resolve():(g=1,o.current=1,l.current=1,i(0),s(1),new Promise(t=>{setTimeout(()=>{s(0),setTimeout(()=>{i(1),o.current=0,t()},200)},e)})),showContentDirectly:()=>{l.current=1,s(0),i(1),o.current=0},resetLoading:()=>{l.current=0,o.current=0,s(0),i(1)}},children:e})},b=n`
  from { opacity: 0; }
  to { opacity: 1; }
`,j=n`
  from { opacity: 1; }
  to { opacity: 0; }
`,h=n`
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,y=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  
  /* Оптимизированные анимации */
  animation: ${b} 0.2s ease-out forwards;
  
  &.exiting {
    animation: ${j} 0.3s ease-in forwards;
  }
  
  /* Оптимизация производительности */
  will-change: opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
`,A=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,E=s.img`
  width: 180px;
  height: auto;
  object-fit: contain;
  
  /* Упрощенная анимация */
  animation: ${h} 0.6s ease-out 0.1s both;
  
  /* Оптимизация */
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  @media (min-width: 768px) {
    width: 220px;
  }
  
  @media (min-width: 1024px) {
    width: 260px;
  }
`,F=({isVisible:e})=>{const[t,s]=r.useState(e),[n,i]=r.useState(0)
return r.useEffect(()=>{if(e)s(1),i(0)
else if(t){i(1)
const e=setTimeout(()=>{s(0),i(0)},300)
return()=>clearTimeout(e)}},[e,t]),t?a.jsx(y,{className:n?"exiting":"",children:a.jsx(A,{children:a.jsx(E,{src:"/assets/images/logo-header-7WTZC_mL.png",alt:"KAIF",loading:"eager"})})}):null},D=()=>{const{pathname:e}=l()
return t.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"}),setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},0),setTimeout(()=>{window.scrollY>0&&window.scrollTo(0,0)},100)},[e]),null},w={colors:{primary:"#90B3A7",secondary:"#D4A574",tertiary:"#B8C4A8",energy:"#E8734A",power:"#2D5B69",fresh:"#4A90B8",background:"#FFFFFF",surface:"#FFFFFF",surfaceSecondary:"#FDFCFA",text:{primary:"#2C3E2D",secondary:"#5A6B5D",light:"#8B9A8E",white:"#FFFFFF",dark:"#1A2B1D"},zones:{spa:"#90B3A7",restaurant:"#D4A574",fitness:"#E8734A",combat:"#2D5B69",pool:"#4A90B8",banya:"#8B4513",sauna:"#8B7355"},success:"#5CB3CC",warning:"#FFD166",error:"#EF476F",info:"#4A90B8",gradients:{primary:"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)",secondary:"linear-gradient(135deg, #D4A574 0%, #E1B885 100%)",energy:"linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)",power:"linear-gradient(135deg, #2D5B69 0%, #3D7084 100%)",fresh:"linear-gradient(135deg, #4A90B8 0%, #5FA3CC 100%)",spa:"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)",restaurant:"linear-gradient(135deg, #D4A574 0%, #E1B885 100%)",fitness:"linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)",combat:"linear-gradient(135deg, #2D5B69 0%, #3D7084 100%)",pool:"linear-gradient(135deg, #4A90B8 0%, #5FA3CC 100%)",banya:"linear-gradient(135deg, #8B4513 0%, #CD853F 100%)",sauna:"linear-gradient(135deg, #8B7355 0%, #A18A6D 100%)"}},fonts:{primary:'"Inter", -apple-system, BlinkMacSystemFont, sans-serif',heading:'"Playfair Display", Georgia, serif',accent:'"Montserrat", Arial, sans-serif',mono:'"JetBrains Mono", monospace'},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",md:"1.125rem",lg:"1.25rem",xl:"1.5rem","2xl":"1.875rem","3xl":"2.25rem","4xl":"3rem","5xl":"3.75rem","6xl":"4.5rem"},fontWeights:{thin:100,extralight:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},space:{0:"0",.5:"0.125rem",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem",32:"8rem",40:"10rem",48:"12rem",56:"14rem",64:"16rem"},lineHeights:{none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2},sizes:{container:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1400px"}},breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1400px"},radii:{none:"0",sm:"0.125rem",default:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},borders:{none:"none",thin:"1px solid",default:"2px solid",thick:"4px solid"},shadows:{none:"none",xs:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",sm:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",outline:"0 0 0 3px rgba(144, 179, 167, 0.5)",softGlow:"0 5px 15px rgba(144, 179, 167, 0.3)"},zIndex:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},transitions:{default:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",fast:"all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",slow:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",bounce:"all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",elegant:"all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"},animations:{fadeIn:"fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)",fadeOut:"fadeOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)",slideUp:"slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)",slideDown:"slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"}},z=t.lazy(()=>e(()=>import("./GlobalFontStyle-BdTMFPq2.js"),__vite__mapDeps([0,1,2,3]))),B=t.lazy(()=>e(()=>import("./GlobalStyles-SUYem3hU.js"),__vite__mapDeps([4,1,2,3])))
e(()=>Promise.resolve({}),__vite__mapDeps([5])),e(()=>Promise.resolve({}),__vite__mapDeps([6])),e(()=>Promise.resolve({}),__vite__mapDeps([7]))
const P=t.lazy(()=>e(()=>import("./Layout-BgJ2Olj2.js"),__vite__mapDeps([8,2,1,3,9,10,11,4,12,13,14,15,16,17]))),T=t.lazy(()=>e(()=>import("./HomePage-DV5Ch9CH.js"),__vite__mapDeps([18,12,2,13,14,15,16,1,3,19,17,9,10]))),I=t.lazy(()=>e(()=>import("./RestaurantPage-BdTl5xYK.js"),__vite__mapDeps([20,2,17,3,19,9,1,21,11,10]))),L=t.lazy(()=>e(()=>import("./SpaPage-B9QIdN1R.js"),__vite__mapDeps([22,12,2,13,14,15,16,1,3,21,19,17,9,10]))),C=t.lazy(()=>e(()=>import("./SportsPage-BCCUQp0W.js").then(e=>e.d),__vite__mapDeps([23,12,2,13,14,15,16,19,17,3,9,1,10,21]))),S=t.lazy(()=>e(()=>import("./BanyaPage-o-J4UxFE.js"),__vite__mapDeps([24,2,1,3,21,19,17,9,11,10]))),R=t.lazy(()=>e(()=>import("./ContactsPage-BQK5CdAn.js"),__vite__mapDeps([25,2,19,17,3,9,1,10,26,21,11]))),v=t.lazy(()=>e(()=>import("./PrivacyPage-F0m9vz6F.js"),__vite__mapDeps([27,2,1,3,26,10,9]))),O=t.lazy(()=>e(()=>import("./TermsPage-BRrKIZdU.js"),__vite__mapDeps([28,2,1,3,26,10,9]))),V=t.lazy(()=>e(()=>import("./SurveyPage-rJpCpIRq.js"),__vite__mapDeps([29,2,1,3,30,21,19,17,9,10]))),k=()=>null,$=()=>{const e=l()
return a.jsx(t.Suspense,{fallback:a.jsx(k,{}),children:a.jsxs(c,{location:e,children:[a.jsx(p,{path:"/",element:a.jsx(T,{})}),a.jsx(p,{path:"/restaurant",element:a.jsx(I,{})}),a.jsx(p,{path:"/spa",element:a.jsx(L,{})}),a.jsx(p,{path:"/sports",element:a.jsx(C,{})}),a.jsx(p,{path:"/banya",element:a.jsx(S,{})}),a.jsx(p,{path:"/contacts",element:a.jsx(R,{})}),a.jsx(p,{path:"/privacy",element:a.jsx(v,{})}),a.jsx(p,{path:"/terms",element:a.jsx(O,{})}),a.jsx(p,{path:"/survey",element:a.jsx(V,{})}),a.jsx(p,{path:"*",element:a.jsx(d,{to:"/",replace:1})})]})})},G=()=>{const{isLoading:e,isContentReady:r}=_()
return a.jsxs(a.Fragment,{children:[a.jsx(F,{isVisible:e}),a.jsx(D,{}),r&&a.jsx(t.Suspense,{fallback:a.jsx(k,{}),children:a.jsx("div",{className:"App",children:a.jsx(P,{children:a.jsx($,{})})})})]})},K=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const{i18n:e,t:r}=x(),[s,n]=t.useState(0)
return t.useEffect(()=>{const t=()=>{n(e=>e+1)}
return e.on("languageChanged",t),()=>{e.off("languageChanged",t)}},[e]),t.useEffect(()=>{document.documentElement.dir=e.dir(),document.documentElement.lang=e.language,"KAIF | Sauna & Spa"!==document.title&&!document.title.includes("KAIF")&&document.title.includes("|")||(document.title=r("page_titles.home","KAIF | Sauna & Spa"))},[e.language,r,s]),a.jsx(o,{children:a.jsxs(i,{theme:w,children:[a.jsxs(t.Suspense,{fallback:null,children:[a.jsx(z,{}),a.jsx(B,{})]}),a.jsx(f,{children:a.jsx(m,{basename:"/",children:a.jsx(G,{})})})]})},`app-${e.language}-${s}`)}},Symbol.toStringTag,{value:"Module"}))
export{K as A,F as L,_ as u}
