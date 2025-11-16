const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/HeroSection-5YvzKadg.js","assets/js/vendor-react-Dj8BKr9E.js","assets/js/vendor-other-CZupzcPt.js","assets/js/vendor-styles-CqEOfFkH.js","assets/js/vendor-animations-DXmTBijG.js","assets/js/BenefitsSection-D1S9eEAK.js","assets/js/main-CdH45h78.js","assets/js/vendor-i18n-C4kh69yx.js","assets/css/main-u34IuCry.css","assets/js/PageScrollReset-BOx4uGe6.js","assets/js/ScrollingText-EtvhTFMl.js","assets/js/FacilitySectionNew-DaJnhQgu.js","assets/js/ScheduleSectionNew-CPj7vWse.js","assets/js/CTASection-BFZ_IhkS.js"])))=>i.map(i=>d[i]);
import{P as e,_ as t}from"./main-CdH45h78.js";import{a as o,r,j as i,R as a}from"./vendor-react-Dj8BKr9E.js";import{d as s}from"./vendor-styles-CqEOfFkH.js";import{m as n}from"./vendor-animations-DXmTBijG.js";import{P as p}from"./PageScrollReset-BOx4uGe6.js";const l=s(n.div)`
  background-color: #000000;
  color: #FFFFFF;
  min-height: 100vh;
  font-family: ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
`,d=s.section`
  padding: 8rem 2rem;
  background-color: ${e=>e.bgColor||"#000000"};
  position: relative;
  overflow: hidden;

  &:nth-child(even) {
    background: linear-gradient(180deg, #000000 0%, #0a0a0a 100%);
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
`,m=s(n.span)`
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
`,g=s(n.h2)`
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
  }
`,c=s(n.p)`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  max-width: 700px;
  margin: 1.5rem auto 3rem auto;
  line-height: 1.7;
  font-weight: 400;
`,x=s.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,h=s(n.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, ${e=>e.theme.colors.primary}10, ${e=>e.theme.colors.primary}30);
  filter: blur(60px);
  z-index: 1;
`;s(h)`
  width: 500px;
  height: 500px;
  top: -100px;
  right: -100px;
`,s(h)`
  width: 600px;
  height: 600px;
  bottom: -200px;
  left: -200px;
`,s(h)`
  width: 500px;
  height: 500px;
  bottom: -150px;
  right: -150px;
`,s(n.button)`
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
`;const b=a.lazy(()=>t(()=>import("./HeroSection-5YvzKadg.js"),__vite__mapDeps([0,1,2,3,4]))),f=a.lazy(()=>t(()=>import("./BenefitsSection-D1S9eEAK.js"),__vite__mapDeps([5,1,2,3,4,6,7,8,9]))),u=a.lazy(()=>t(()=>import("./ScrollingText-EtvhTFMl.js"),__vite__mapDeps([10,1,2,4,3]))),w=a.lazy(()=>t(()=>import("./FacilitySectionNew-DaJnhQgu.js"),__vite__mapDeps([11,1,2,3,4,6,7,8,9]))),_=a.lazy(()=>t(()=>import("./ScheduleSectionNew-CPj7vWse.js"),__vite__mapDeps([12,1,2,3,4,6,7,8,9]))),y=a.lazy(()=>t(()=>import("./CTASection-BFZ_IhkS.js"),__vite__mapDeps([13,1,2,3,4]))),j=()=>null,v=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{t}=o();return r.useEffect(()=>(document.body.classList.add("sports-page"),window.scrollTo(0,0),()=>{document.body.classList.remove("sports-page")}),[]),i.jsxs(l,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:[i.jsx(e,{titleKey:"page_titles.sports",description:t("sports.hero.subtitle","Modern equipment, professional trainers and atmosphere to achieve your sporting goals"),keywords:"KAIF sports, gym, fitness, martial arts, MMA, boxing, training, Phuket",ogImage:"/images/sports/gym/gym-main.jpg"}),i.jsx(p,{}),i.jsxs(r.Suspense,{fallback:i.jsx(j,{}),children:[i.jsx(b,{}),i.jsx(f,{}),i.jsx(u,{}),i.jsx(w,{}),i.jsx(_,{}),i.jsx(y,{})]})]})}},Symbol.toStringTag,{value:"Module"}));export{x as C,d as S,m as a,g as b,c,v as d};
