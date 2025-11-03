const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/HeroSection-C6rxDyNz.js","assets/js/vendor-react-FHR7Sy-E.js","assets/js/vendor-other-CZupzcPt.js","assets/js/vendor-styles-DcQt-q6S.js","assets/js/vendor-animations-BsFJxBmq.js","assets/js/FacilitySection-CwA6ehEO.js","assets/js/main-BF39YShs.js","assets/js/vendor-i18n-C4kh69yx.js","assets/css/main-B6SPH4aj.css","assets/js/PageScrollReset-Jvg3lmV2.js","assets/js/ScheduleSection-BjTWlWRQ.js"])))=>i.map(i=>d[i]);
import{P as o,_ as e}from"./main-BF39YShs.js";import{a as t,r,j as i,R as a}from"./vendor-react-FHR7Sy-E.js";import{d as s}from"./vendor-styles-DcQt-q6S.js";import{m as n}from"./vendor-animations-BsFJxBmq.js";import{P as l}from"./PageScrollReset-Jvg3lmV2.js";const m=s(n.div)`
  background-color: ${o=>o.theme.colors.background};
  color: ${o=>o.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${o=>o.theme.fonts.primary};
  overflow-x: hidden;
`,p=s.section`
  padding: 9rem 2rem;
  background-color: ${o=>o.bgColor||o.theme.colors.background};
  position: relative;
  overflow: hidden;
  
  &:nth-child(even) {
    background-color: ${o=>o.bgColor||o.theme.colors.surface};
  }
`,d=s(n.span)`
  display: inline-block;
  background-color: rgba(210, 155, 132, 0.1);
  color: ${o=>o.theme.colors.primary};
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`,c=s(n.h2)`
  font-family: ${o=>o.theme.fonts.heading};
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  color: ${o=>o.theme.colors.text.primary};
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 700;
  
  span {
    color: ${o=>o.theme.colors.primary};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.08em;
      background-color: ${o=>o.theme.colors.primary};
      opacity: 0.15;
      border-radius: 2px;
    }
  }
`,h=s(n.p)`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: ${o=>o.theme.colors.text.secondary};
  text-align: center;
  max-width: 800px;
  margin: 2.5rem auto 4.5rem auto;
  line-height: 1.8;
  font-weight: 300;
`,g=s.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,x=s(n.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, ${o=>o.theme.colors.primary}10, ${o=>o.theme.colors.primary}30);
  filter: blur(60px);
  z-index: 1;
`,b=s(x)`
  width: 500px;
  height: 500px;
  top: -100px;
  right: -100px;
`;s(x)`
  width: 600px;
  height: 600px;
  bottom: -200px;
  left: -200px;
`,s(x)`
  width: 500px;
  height: 500px;
  bottom: -150px;
  right: -150px;
`;const f=s(n.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: ${o=>o.theme.colors.primary};
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
`,u=a.lazy(()=>e(()=>import("./HeroSection-C6rxDyNz.js"),__vite__mapDeps([0,1,2,3,4]))),y=a.lazy(()=>e(()=>import("./FacilitySection-CwA6ehEO.js"),__vite__mapDeps([5,1,2,3,4,6,7,8,9]))),w=a.lazy(()=>e(()=>import("./ScheduleSection-BjTWlWRQ.js"),__vite__mapDeps([10,1,2,3,6,7,4,8,9]))),v=()=>null,j=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{t:e}=t();return r.useEffect(()=>(document.body.classList.add("sports-page"),window.scrollTo(0,0),()=>{document.body.classList.remove("sports-page")}),[]),i.jsxs(m,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:[i.jsx(o,{titleKey:"page_titles.sports",description:e("sports.hero.subtitle","Modern equipment, professional trainers and atmosphere to achieve your sporting goals"),keywords:"KAIF sports, gym, fitness, martial arts, MMA, boxing, training, Phuket",ogImage:"/images/sports/gym/gym-main.jpg"}),i.jsx(l,{}),i.jsxs(r.Suspense,{fallback:i.jsx(v,{}),children:[i.jsx(u,{}),i.jsx(y,{}),i.jsx(w,{})]})]})}},Symbol.toStringTag,{value:"Module"}));export{f as B,g as C,p as S,b as T,d as a,c as b,h as c,j as d};
