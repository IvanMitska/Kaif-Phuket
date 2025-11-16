const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/SpaHeroSection-Cq9A2-Om.js","assets/js/react-core-CV8k_GRh.js","assets/js/styled-components-CMIfAvVS.js","assets/js/vendor-misc-Bm4JrmXh.js","assets/js/YclientsModal-Bu4UZGv9.js","assets/js/framer-motion-h7lgP0Yp.js","assets/js/heroicons-B0mUXsxG.js","assets/js/i18n-core-CSZVPE1N.js","assets/js/SpaServicesSection-CyQaisjv.js","assets/js/SpaFeaturesSection-BEyCoUvw.js","assets/js/SpaBookingSection-DOpUyf7V.js","assets/js/SpaFAQSection-cOIYwyG4.js"])))=>i.map(i=>d[i]);
import{_ as e}from"./main-C1zLyBkI.js"
import{R as s,j as t,r as o}from"./react-core-CV8k_GRh.js"
import{d as a}from"./styled-components-CMIfAvVS.js"
import{P as i}from"./PageScrollReset-CasNnzkC.js"
import{P as r}from"./PageHead-C4ywpL0o.js"
import{u as m}from"./i18n-core-CSZVPE1N.js"
import{m as n}from"./framer-motion-h7lgP0Yp.js"
import"./react-dom-client-fHgFUAUX.js"
import"./react-dom-C7S9v3DL.js"
import"./vendor-scheduler-DKYT7Wy5.js"
import"./vendor-misc-Bm4JrmXh.js"
import"./react-helmet-C_ZFuiA7.js"
const p=s.lazy(()=>e(()=>import("./SpaHeroSection-Cq9A2-Om.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),l=s.lazy(()=>e(()=>import("./SpaServicesSection-CyQaisjv.js"),__vite__mapDeps([8,1,2,3,7,6,5]))),c=s.lazy(()=>e(()=>import("./SpaFeaturesSection-BEyCoUvw.js"),__vite__mapDeps([9,1,2,3,7,6,5]))),j=s.lazy(()=>e(()=>import("./SpaBookingSection-DOpUyf7V.js"),__vite__mapDeps([10,1,2,3,4,5,6,7]))),d=s.lazy(()=>e(()=>import("./SpaFAQSection-cOIYwyG4.js"),__vite__mapDeps([11,1,2,3,7,6,5]))),_=a(n.div)`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
`,u=()=>null,x=()=>{const{t:e}=m()
return s.useEffect(()=>(document.body.classList.add("spa-page"),window.scrollTo(0,0),()=>{document.body.classList.remove("spa-page")}),[]),t.jsxs(_,{initial:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},transition:{duration:.2},children:[t.jsx(r,{titleKey:"page_titles.spa",description:e("spa.hero.subtitle","Professional SPA treatments in the luxurious atmosphere of KAIF"),keywords:"KAIF spa, massage, beauty treatments, relaxation, wellness, Phuket",ogImage:"/images/spa/spa-hero.jpg"}),t.jsx(i,{}),t.jsxs(o.Suspense,{fallback:t.jsx(u,{}),children:[t.jsx(p,{}),t.jsx(l,{}),t.jsx(c,{})]}),t.jsxs(o.Suspense,{fallback:t.jsx(u,{}),children:[t.jsx(d,{}),t.jsx(j,{})]})]})}
export{x as default}
