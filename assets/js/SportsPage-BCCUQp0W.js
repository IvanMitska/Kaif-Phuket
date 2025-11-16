const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/HeroSection-DK-7Cwe-.js","assets/js/react-core-CV8k_GRh.js","assets/js/styled-components-CMIfAvVS.js","assets/js/vendor-misc-Bm4JrmXh.js","assets/js/framer-motion-h7lgP0Yp.js","assets/js/i18n-core-CSZVPE1N.js","assets/js/heroicons-B0mUXsxG.js","assets/js/BenefitsSection-rlBE_KsC.js","assets/js/main-C1zLyBkI.js","assets/js/react-dom-client-fHgFUAUX.js","assets/js/react-dom-C7S9v3DL.js","assets/js/vendor-scheduler-DKYT7Wy5.js","assets/css/main-CVol-v9f.css","assets/js/PageHead-C4ywpL0o.js","assets/js/react-helmet-C_ZFuiA7.js","assets/js/PageScrollReset-CasNnzkC.js","assets/js/ScrollingText-CDXsDXPB.js","assets/js/gsap-ohwTm_ct.js","assets/js/split-type-XdcSdR2h.js","assets/js/FacilitySectionNew-B45FfAkx.js","assets/js/ScheduleSectionNew-CI33_Mf9.js","assets/js/CTASection-30OM6vTu.js"])))=>i.map(i=>d[i]);
import{_ as e}from"./main-C1zLyBkI.js"
import{r as t,j as o,R as r}from"./react-core-CV8k_GRh.js"
import{P as i}from"./PageHead-C4ywpL0o.js"
import{d as a}from"./styled-components-CMIfAvVS.js"
import{m as s}from"./framer-motion-h7lgP0Yp.js"
import{P as n}from"./PageScrollReset-CasNnzkC.js"
import{u as p}from"./i18n-core-CSZVPE1N.js"
const m=a(s.div)`
  background-color: #000000;
  color: #FFFFFF;
  min-height: 100vh;
  font-family: ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
`,l=a.section`
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
`,g=a(s.h2)`
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
`,c=a(s.p)`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  max-width: 700px;
  margin: 1.5rem auto 3rem auto;
  line-height: 1.7;
  font-weight: 400;
`,h=a.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,x=a(s.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, ${e=>e.theme.colors.primary}10, ${e=>e.theme.colors.primary}30);
  filter: blur(60px);
  z-index: 1;
`
a(x)`
  width: 500px;
  height: 500px;
  top: -100px;
  right: -100px;
`,a(x)`
  width: 600px;
  height: 600px;
  bottom: -200px;
  left: -200px;
`,a(x)`
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
`
const f=r.lazy(()=>e(()=>import("./HeroSection-DK-7Cwe-.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),b=r.lazy(()=>e(()=>import("./BenefitsSection-rlBE_KsC.js"),__vite__mapDeps([7,1,2,3,4,5,6,8,9,10,11,12,13,14,15]))),u=r.lazy(()=>e(()=>import("./ScrollingText-CDXsDXPB.js"),__vite__mapDeps([16,1,17,18,2,3,5]))),_=r.lazy(()=>e(()=>import("./FacilitySectionNew-B45FfAkx.js"),__vite__mapDeps([19,1,2,3,4,5,6,8,9,10,11,12,13,14,15]))),w=r.lazy(()=>e(()=>import("./ScheduleSectionNew-CI33_Mf9.js"),__vite__mapDeps([20,1,2,3,4,5,6,8,9,10,11,12,13,14,15]))),y=r.lazy(()=>e(()=>import("./CTASection-30OM6vTu.js"),__vite__mapDeps([21,1,2,3,4,5,6]))),j=()=>null,v=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{t:e}=p()
return t.useEffect(()=>(document.body.classList.add("sports-page"),window.scrollTo(0,0),()=>{document.body.classList.remove("sports-page")}),[]),o.jsxs(m,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:[o.jsx(i,{titleKey:"page_titles.sports",description:e("sports.hero.subtitle","Modern equipment, professional trainers and atmosphere to achieve your sporting goals"),keywords:"KAIF sports, gym, fitness, martial arts, MMA, boxing, training, Phuket",ogImage:"/images/sports/gym/gym-main.jpg"}),o.jsx(n,{}),o.jsxs(t.Suspense,{fallback:o.jsx(j,{}),children:[o.jsx(f,{}),o.jsx(b,{}),o.jsx(u,{}),o.jsx(_,{}),o.jsx(w,{}),o.jsx(y,{})]})]})}},Symbol.toStringTag,{value:"Module"}))
export{h as C,l as S,d as a,g as b,c,v as d}
