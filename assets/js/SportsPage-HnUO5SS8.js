const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/FacilitySectionNew-CgBcwfbN.js","assets/js/react-core-DWAaPJsY.js","assets/js/styled-components-CfKEYav0.js","assets/js/vendor-misc-DORsZxsB.js","assets/js/i18n-core-DrMVsQFB.js","assets/js/heroicons-lHooInKB.js","assets/js/SportsPricingSection-wz3C7FE1.js","assets/js/BenefitsSection-DQk3dBc6.js","assets/js/ScheduleSectionNew-BYIWKXF6.js","assets/js/CTASection-3PCZp8Rm.js"])))=>i.map(i=>d[i]);
import{_ as e}from"./main-Cv4MpGkK.js";import{r as t,j as s}from"./react-core-DWAaPJsY.js";import{P as i}from"./PageHead-Du_bcwsJ.js";import{P as n}from"./PageScrollReset-CpzNA0Jq.js";import{d as r}from"./styled-components-CfKEYav0.js";import{u as o}from"./i18n-core-DrMVsQFB.js";import"./react-dom-client-BkLB9BFi.js";import"./react-dom-Bb3pWfRT.js";import"./vendor-scheduler-9xQDShOA.js";import"./i18n-detector-l8ePocMX.js";import"./react-helmet-B6HjKcxn.js";import"./vendor-misc-DORsZxsB.js";import"./framer-motion-B0peqmRR.js";const a=r.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  background: #000;

  @media (max-width: 768px) {
    height: 100svh;
  }
`,l=r.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`,m=r.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 2s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.6) 0%,
      rgba(0,0,0,0.4) 50%,
      rgba(0,0,0,0.5) 100%
    );
    z-index: 2;
    pointer-events: none;
  }
`,c=r.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,p=r.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  @media (max-width: 480px) {
    padding: 0 1.5rem;
  }
`,d=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,g=r.span`
  display: block;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(4.5rem, 12vw, 9rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(4rem, 20vw, 7rem);
    line-height: 1.05;
  }

  @media (max-width: 480px) {
    font-size: clamp(3.5rem, 22vw, 6rem);
  }
`,x=r.span`
  display: block;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.35em;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    font-size: 0.65rem;
    margin-top: 2rem;
  }
`,f=["/images/sports/gym/gym-1.jpg","/images/sports/fight-club/fight-1.jpg","/images/sports/gym/gym-2.jpg","/images/sports/fight-club/fight-2.jpg"],j=t.memo(()=>{const{t:e}=o(),[i,n]=t.useState(0);return t.useEffect(()=>{const e=setInterval(()=>{n(e=>(e+1)%f.length)},6e3);return()=>clearInterval(e)},[]),s.jsxs(a,{children:[s.jsx(l,{children:f.map((e,t)=>s.jsx(m,{style:{backgroundImage:`url(${e})`,opacity:i===t?1:0,zIndex:i===t?2:1}},t))}),s.jsx(c,{children:s.jsx(p,{children:s.jsxs(d,{children:[s.jsx(g,{children:e("sports.hero.title","Sports")}),s.jsx(x,{children:e("sports.hero.location","Phuket")})]})})})]})}),h=t.lazy(()=>e(()=>import("./FacilitySectionNew-CgBcwfbN.js"),__vite__mapDeps([0,1,2,3,4,5]))),u=t.lazy(()=>e(()=>import("./SportsPricingSection-wz3C7FE1.js"),__vite__mapDeps([6,1,2,3,4,5]))),y=t.lazy(()=>e(()=>import("./BenefitsSection-DQk3dBc6.js"),__vite__mapDeps([7,1,2,3,4,5]))),_=t.lazy(()=>e(()=>import("./ScheduleSectionNew-BYIWKXF6.js"),__vite__mapDeps([8,1,2,3,4,5]))),b=t.lazy(()=>e(()=>import("./CTASection-3PCZp8Rm.js"),__vite__mapDeps([9,1,2,3,4]))),SectionLoader=()=>null,SportsPage=()=>{const{t:e}=o();return s.jsxs(s.Fragment,{children:[s.jsx(i,{titleKey:"page_titles.sports",description:e("sports.hero.subtitle","Modern equipment, professional trainers and atmosphere to achieve your sporting goals"),keywords:"KAIF sports, gym, fitness, martial arts, MMA, boxing, training, Phuket",ogImage:"/images/sports/gym/gym-main.jpg"}),s.jsx(n,{}),s.jsx(j,{}),s.jsx(t.Suspense,{fallback:s.jsx(SectionLoader,{}),children:s.jsx(h,{})}),s.jsx(t.Suspense,{fallback:s.jsx(SectionLoader,{}),children:s.jsx(u,{})}),s.jsx(t.Suspense,{fallback:s.jsx(SectionLoader,{}),children:s.jsx(y,{})}),s.jsx(t.Suspense,{fallback:s.jsx(SectionLoader,{}),children:s.jsx(_,{})}),s.jsx(t.Suspense,{fallback:s.jsx(SectionLoader,{}),children:s.jsx(b,{})})]})};export{SportsPage as default};
