const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/SpaHeroSection-DNTB63gB.js","assets/js/vendor-react-core-CiytVzfL.js","assets/js/vendor-other-CjR0Saws.js","assets/js/vendor-styled-6ntj7xXP.js","assets/js/YclientsModal-DFlT7eGJ.js","assets/js/vendor-framer-DJEKn808.js","assets/js/SpaServicesSection-BnBlgFoN.js","assets/js/SpaFeaturesSection-9bjeuy79.js","assets/js/SpaBookingSection-CiXFW80p.js","assets/js/vendor-router-BDqfUxHK.js","assets/js/SpaFAQSection-DzwaMPM6.js"])))=>i.map(i=>d[i]);
import{P as e,_ as s}from"./main-tG30qmu8.js"
import{u as o,R as t,j as a,r}from"./vendor-react-core-CiytVzfL.js"
import{d as i}from"./vendor-styled-6ntj7xXP.js"
import{P as n}from"./PageScrollReset-CBLPOmkb.js"
import{m}from"./vendor-framer-DJEKn808.js"
import"./vendor-react-dom-CkSH6ppF.js"
import"./vendor-other-CjR0Saws.js"
import"./vendor-router-BDqfUxHK.js"
import"./vendor-i18n-qu44yWMJ.js"
const p=t.lazy(()=>s(()=>import("./SpaHeroSection-DNTB63gB.js"),__vite__mapDeps([0,1,2,3,4,5]))),l=t.lazy(()=>s(()=>import("./SpaServicesSection-BnBlgFoN.js"),__vite__mapDeps([6,1,2,3,5]))),c=t.lazy(()=>s(()=>import("./SpaFeaturesSection-9bjeuy79.js"),__vite__mapDeps([7,1,2,3,5]))),d=t.lazy(()=>s(()=>import("./SpaBookingSection-CiXFW80p.js"),__vite__mapDeps([8,1,2,3,4,5,9]))),j=t.lazy(()=>s(()=>import("./SpaFAQSection-DzwaMPM6.js"),__vite__mapDeps([10,1,2,3,5]))),_=i(m.div)`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
`,u=()=>null,x=()=>{const{t:s}=o()
return t.useEffect(()=>(document.body.classList.add("spa-page"),window.scrollTo(0,0),()=>{document.body.classList.remove("spa-page")}),[]),a.jsxs(_,{initial:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},transition:{duration:.2},children:[a.jsx(e,{titleKey:"page_titles.spa",description:s("spa.hero.subtitle","Professional SPA treatments in the luxurious atmosphere of KAIF"),keywords:"KAIF spa, massage, beauty treatments, relaxation, wellness, Phuket",ogImage:"/images/spa/spa-hero.jpg"}),a.jsx(n,{}),a.jsxs(r.Suspense,{fallback:a.jsx(u,{}),children:[a.jsx(p,{}),a.jsx(l,{}),a.jsx(c,{})]}),a.jsxs(r.Suspense,{fallback:a.jsx(u,{}),children:[a.jsx(j,{}),a.jsx(d,{})]})]})}
export{x as default}
