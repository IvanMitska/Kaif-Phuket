const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/HeroSection-DfUV5nkp.js","assets/js/react-core-DWAaPJsY.js","assets/js/styled-components-fuCKgGld.js","assets/js/vendor-misc-D8JVgYt7.js","assets/js/framer-motion-DOblPXrY.js","assets/js/i18n-core-DrMVsQFB.js","assets/js/heroicons-DSEs4UIN.js","assets/js/BenefitsSection-Cl0Rah4z.js","assets/js/main-DOmu9RYh.js","assets/js/react-dom-client-BkLB9BFi.js","assets/js/react-dom-Bb3pWfRT.js","assets/js/vendor-scheduler-9xQDShOA.js","assets/js/i18n-detector-l8ePocMX.js","assets/js/react-helmet-BCF-s7y-.js","assets/css/main-CgkTzsIs.css","assets/js/PageHead-ByG18s83.js","assets/js/PageScrollReset-CpzNA0Jq.js","assets/js/ScrollingText-HOc3LKIL.js","assets/js/FacilitySectionNew-Bu2zGHXy.js","assets/js/ScheduleSectionNew-C5Ru7NmC.js","assets/js/CTASection-DR5Wr9L9.js"])))=>i.map(i=>d[i]);
import{_ as e}from"./main-DOmu9RYh.js";import{r as t,j as r,R as o}from"./react-core-DWAaPJsY.js";import{P as i}from"./PageHead-ByG18s83.js";import{d as a}from"./styled-components-fuCKgGld.js";import{m as s}from"./framer-motion-DOblPXrY.js";import{P as n}from"./PageScrollReset-CpzNA0Jq.js";import{u as l}from"./i18n-core-DrMVsQFB.js";const m=a.div`
  background-color: #000000;
  color: #FFFFFF;
  min-height: 100vh;
  font-family: ${e=>e.theme.fonts.primary};
  overflow: visible;
  position: relative;
  z-index: 0;
`,p=a.section`
  padding: 4rem 2rem;
  background-color: ${e=>e.bgColor||"#000000"};
  position: relative;
  overflow: hidden;

  &:nth-child(even) {
    background: linear-gradient(180deg, #000000 0%, #0a0a0a 100%);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`,d=a(s.span)`
  display: inline-block;
  background: #FFE600;
  color: #000000;
  padding: 0.7rem 1.5rem;
  border-radius: 0;
  font-size: 0.85rem;
  font-weight: 800;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: none;
  box-shadow: 0 4px 16px rgba(255, 230, 0, 0.4);

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
`,c=a(s.h2)`
  font-family: ${e=>e.theme.fonts.heading};
  font-size: clamp(3rem, 6vw, 5rem);
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  -webkit-font-smoothing: antialiased;

  span {
    background: linear-gradient(135deg, #FFE600 0%, #FFA500 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    filter: drop-shadow(0 0 30px rgba(255, 230, 0, 0.5));
  }

  @media (max-width: 768px) {
    font-size: clamp(2.2rem, 9vw, 3.5rem);
    margin-bottom: 1rem;
  }
`,g=a(s.p)`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  max-width: 700px;
  margin: 1.5rem auto 3rem auto;
  line-height: 1.7;
  font-weight: 400;

  @media (max-width: 768px) {
    margin: 1rem auto 1.5rem auto;
  }
`,x=a.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,h=a.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, ${e=>e.theme.colors.primary}10, ${e=>e.theme.colors.primary}30);
  filter: blur(40px);
  z-index: 1;
  transform: translateZ(0);
  will-change: opacity;
`;a(h)`
  width: 500px;
  height: 500px;
  top: -100px;
  right: -100px;
`,a(h)`
  width: 600px;
  height: 600px;
  bottom: -200px;
  left: -200px;
`,a(h)`
  width: 500px;
  height: 500px;
  bottom: -150px;
  right: -150px;
`,a(s.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(210, 155, 132, 0.25);
  
  @media (max-width: 768px) {
    margin: 0 auto;
    display: flex;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: width 0.3s ease;
  }
  
  &:hover {
    box-shadow: 0 6px 20px rgba(210, 155, 132, 0.35);
  }
  
  &:hover::before {
    width: 100%;
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;const b=o.lazy(()=>e(()=>import("./HeroSection-DfUV5nkp.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),f=o.lazy(()=>e(()=>import("./BenefitsSection-Cl0Rah4z.js"),__vite__mapDeps([7,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16]))),u=o.lazy(()=>e(()=>import("./ScrollingText-HOc3LKIL.js"),__vite__mapDeps([17,1,2,3,5]))),j=o.lazy(()=>e(()=>import("./FacilitySectionNew-Bu2zGHXy.js"),__vite__mapDeps([18,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16]))),w=o.lazy(()=>e(()=>import("./ScheduleSectionNew-C5Ru7NmC.js"),__vite__mapDeps([19,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16]))),_=o.lazy(()=>e(()=>import("./CTASection-DR5Wr9L9.js"),__vite__mapDeps([20,1,2,3,4,5,6]))),InvisibleLoader=()=>null,y=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{t:e}=l();return t.useEffect(()=>(document.body.classList.add("sports-page"),window.scrollTo(0,0),()=>{document.body.classList.remove("sports-page")}),[]),r.jsxs(m,{children:[r.jsx(i,{titleKey:"page_titles.sports",description:e("sports.hero.subtitle","Modern equipment, professional trainers and atmosphere to achieve your sporting goals"),keywords:"KAIF sports, gym, fitness, martial arts, MMA, boxing, training, Phuket",ogImage:"/images/sports/gym/gym-main.jpg"}),r.jsx(n,{}),r.jsx(t.Suspense,{fallback:r.jsx(InvisibleLoader,{}),children:r.jsx(b,{})}),r.jsx(t.Suspense,{fallback:r.jsx(InvisibleLoader,{}),children:r.jsx(j,{})}),r.jsx(t.Suspense,{fallback:r.jsx(InvisibleLoader,{}),children:r.jsx(f,{})}),r.jsx(t.Suspense,{fallback:r.jsx(InvisibleLoader,{}),children:r.jsx(u,{})}),r.jsx(t.Suspense,{fallback:r.jsx(InvisibleLoader,{}),children:r.jsx(w,{})}),r.jsx(t.Suspense,{fallback:r.jsx(InvisibleLoader,{}),children:r.jsx(_,{})})]})}},Symbol.toStringTag,{value:"Module"}));export{x as C,p as S,d as a,c as b,g as c,y as d};
