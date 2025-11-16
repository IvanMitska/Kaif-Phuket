const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/HeroSection-BnB03PY3.js","assets/js/vendor-react-core-CiytVzfL.js","assets/js/vendor-other-CjR0Saws.js","assets/js/vendor-styled-6ntj7xXP.js","assets/js/vendor-framer-DJEKn808.js","assets/js/BenefitsSection-BfXN5Z27.js","assets/js/main-tG30qmu8.js","assets/js/vendor-react-dom-CkSH6ppF.js","assets/js/vendor-router-BDqfUxHK.js","assets/js/vendor-i18n-qu44yWMJ.js","assets/css/main-D0mj8cMI.css","assets/js/PageScrollReset-CBLPOmkb.js","assets/js/ScrollingText-5klDWPsv.js","assets/js/vendor-gsap-TCSjVwSf.js","assets/js/FacilitySectionNew-DEQRRZ2D.js","assets/js/ScheduleSectionNew-BI_ZVBKI.js","assets/js/CTASection-BCO697N7.js"])))=>i.map(i=>d[i]);
import{P as e,_ as t}from"./main-tG30qmu8.js"
import{u as o,r,j as i,R as a}from"./vendor-react-core-CiytVzfL.js"
import{d as n}from"./vendor-styled-6ntj7xXP.js"
import{m as s}from"./vendor-framer-DJEKn808.js"
import{P as p}from"./PageScrollReset-CBLPOmkb.js"
const l=n(s.div)`
  background-color: #000000;
  color: #FFFFFF;
  min-height: 100vh;
  font-family: ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
`,d=n.section`
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
`,m=n(s.span)`
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
`,g=n(s.h2)`
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
`,c=n(s.p)`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  max-width: 700px;
  margin: 1.5rem auto 3rem auto;
  line-height: 1.7;
  font-weight: 400;
`,x=n.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,h=n(s.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, ${e=>e.theme.colors.primary}10, ${e=>e.theme.colors.primary}30);
  filter: blur(60px);
  z-index: 1;
`
n(h)`
  width: 500px;
  height: 500px;
  top: -100px;
  right: -100px;
`,n(h)`
  width: 600px;
  height: 600px;
  bottom: -200px;
  left: -200px;
`,n(h)`
  width: 500px;
  height: 500px;
  bottom: -150px;
  right: -150px;
`,n(s.button)`
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
`
const b=a.lazy(()=>t(()=>import("./HeroSection-BnB03PY3.js"),__vite__mapDeps([0,1,2,3,4]))),f=a.lazy(()=>t(()=>import("./BenefitsSection-BfXN5Z27.js"),__vite__mapDeps([5,1,2,3,4,6,7,8,9,10,11]))),u=a.lazy(()=>t(()=>import("./ScrollingText-5klDWPsv.js"),__vite__mapDeps([12,1,2,13,3]))),w=a.lazy(()=>t(()=>import("./FacilitySectionNew-DEQRRZ2D.js"),__vite__mapDeps([14,1,2,3,4,6,7,8,9,10,11]))),_=a.lazy(()=>t(()=>import("./ScheduleSectionNew-BI_ZVBKI.js"),__vite__mapDeps([15,1,2,3,4,6,7,8,9,10,11]))),y=a.lazy(()=>t(()=>import("./CTASection-BCO697N7.js"),__vite__mapDeps([16,1,2,3,4]))),j=()=>null,v=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{t}=o()
return r.useEffect(()=>(document.body.classList.add("sports-page"),window.scrollTo(0,0),()=>{document.body.classList.remove("sports-page")}),[]),i.jsxs(l,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:[i.jsx(e,{titleKey:"page_titles.sports",description:t("sports.hero.subtitle","Modern equipment, professional trainers and atmosphere to achieve your sporting goals"),keywords:"KAIF sports, gym, fitness, martial arts, MMA, boxing, training, Phuket",ogImage:"/images/sports/gym/gym-main.jpg"}),i.jsx(p,{}),i.jsxs(r.Suspense,{fallback:i.jsx(j,{}),children:[i.jsx(b,{}),i.jsx(f,{}),i.jsx(u,{}),i.jsx(w,{}),i.jsx(_,{}),i.jsx(y,{})]})]})}},Symbol.toStringTag,{value:"Module"}))
export{x as C,d as S,m as a,g as b,c,v as d}
