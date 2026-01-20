import{r as e,j as t}from"./react-core-DWAaPJsY.js";import{d as i}from"./styled-components-fuCKgGld.js";import{m as r}from"./framer-motion-DOblPXrY.js";import{u as a}from"./i18n-core-DrMVsQFB.js";import{e as o,O as n,P as s}from"./heroicons-JeCSnvNC.js";import"./vendor-misc-D8JVgYt7.js";const d=i.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #000000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 100px 0 30px 0;

  @media (max-width: 768px) {
    min-height: 100vh;
    min-height: 100dvh;
    padding: 80px 0 40px 0;
    align-items: flex-start;
    padding-top: 100px;
    background-position: center top;
  }
`,l=i.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }
`,p=i(r.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #FFFFFF;
  text-align: left;
  width: 100%;
  max-width: 700px;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    max-width: 100%;
  }
`;i(r.span)`
  display: inline-block;
  background-color: rgba(210, 155, 132, 0.3);
  color: ${e=>e.theme.colors.primary};
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(210, 155, 132, 0.3);
`;const m=i(r.h1)`
  font-family: ${e=>e.theme.fonts.heading};
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
  position: relative;
  text-transform: uppercase;
  letter-spacing: -0.04em;
  text-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  span {
    color: #FFFFFF;
    position: relative;
    display: inline-block;
  }

  @media (max-width: 1024px) {
    font-size: clamp(3rem, 8vw, 5rem);
    line-height: 0.95;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 9vw, 3.5rem);
    line-height: 1;
  }
`,g=i(r.p)`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 0;
  font-weight: 400;
  text-align: left;
  max-width: 550px;
  position: relative;
  padding-bottom: 1.5rem;
  -webkit-font-smoothing: antialiased;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #FFE600 0%, #D29B84 100%);
    border-radius: 3px;
    box-shadow: 0 0 20px rgba(255, 230, 0, 0.5);
  }

  @media (max-width: 1024px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,c=i(r.div)`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    width: 100%;
  }
`,x=i(r.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background: #FFE600;
  color: #000000;
  font-weight: 800;
  font-size: 1rem;
  padding: 1.2rem 2.5rem;
  border-radius: 0;
  cursor: pointer;
  border: none;
  box-shadow: 0 8px 30px rgba(255, 230, 0, 0.4);
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease, color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #000000;
    transition: width 0.3s ease;
    z-index: -1;
  }

  &:hover {
    box-shadow: 0 12px 40px rgba(255, 230, 0, 0.6);
    color: #FFE600;
  }

  &:hover::before {
    width: 100%;
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }

  &:hover svg:last-child {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: 1.2rem 2.2rem;
    font-size: 0.95rem;
    letter-spacing: 1px;
  }
`,h=i(r.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: 800;
  font-size: 1rem;
  padding: 1.2rem 2.5rem;
  border-radius: 0;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    transition: width 0.3s ease;
    z-index: -1;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 1);
    color: #000000;
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
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    padding: 1.2rem 2.2rem;
    font-size: 0.95rem;
    letter-spacing: 1px;
  }
`;i(r.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`,i(r.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem 1rem;
  background: rgba(20, 20, 20, 0.8);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease, border-color 0.3s ease;

  svg {
    margin-bottom: 0.75rem;
  }

  &:hover {
    background: rgba(30, 30, 30, 0.9);
    border-color: rgba(210, 155, 132, 0.4);
  }
`,i.span`
  font-size: 3rem;
  font-weight: 900;
  font-family: ${e=>e.theme.fonts.heading};
  background: linear-gradient(135deg, #D29B84 0%, #C8A8E9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,i.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;const b=i(r.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 500px;

  @media (max-width: 1024px) {
    height: 400px;
    max-height: 400px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,f=i(r.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(210, 155, 132, 0.3);
  border: 2px solid rgba(210, 155, 132, 0.3);
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    border-radius: 24px;
  }
`,u=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(210, 155, 132, 0.2) 0%, transparent 70%);
  z-index: 1;
  pointer-events: none;
`,y=i(r.div)`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border: 3px solid rgba(210, 155, 132, 0.2);
  border-radius: 36px;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 1024px) {
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
  }
`,w=["/images/sports/gym/gym-1.jpg","/images/sports/fight-club/fight-1.jpg","/images/sports/gym/gym-2.jpg","/images/sports/fight-club/fight-2.jpg"],HeroSection=()=>{const{t:i}=a(),[v,j]=e.useState(0);return e.useEffect(()=>{const e=setInterval(()=>{j(e=>(e+1)%w.length)},5e3);return()=>clearInterval(e)},[]),t.jsx(d,{style:{backgroundImage:`linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.7) 100%), url(${w[v]})`},children:t.jsxs(l,{children:[t.jsxs(p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[t.jsxs(r.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{duration:.2},style:{display:"inline-flex",alignItems:"center",gap:"0.6rem",background:"#FFE600",padding:"0.7rem 1.4rem",borderRadius:"0",border:"none",marginBottom:"1.5rem",fontSize:"0.85rem",fontWeight:"800",color:"#000000",textTransform:"uppercase",letterSpacing:"2px",boxShadow:"0 6px 24px rgba(255, 230, 0, 0.4)"},children:[t.jsx(o,{style:{width:"18px",height:"18px",color:"#000000"}}),i("sports.hero.tag","YOUR ELITE FITNESS")]}),t.jsxs(m,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.25,delay:.05},children:[i("sports.hero.main_title_1","YOUR"),t.jsx("br",{}),t.jsx(r.span,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,delay:.1},style:{background:"linear-gradient(135deg, #FFE600 0%, #FFA500 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"inline-block"},children:i("sports.hero.main_title_2","ELITE")}),t.jsx("br",{}),i("sports.hero.main_title_3","FITNESS"),t.jsx("br",{}),t.jsx(r.span,{style:{fontSize:"0.5em",fontWeight:"400",color:"rgba(255, 255, 255, 0.7)",letterSpacing:"0.1em"},children:i("sports.hero.main_title_4","EXPERIENCE")})]}),t.jsx(g,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,delay:.1},children:i("sports.hero.subtitle","Современные тренажеры, профессиональные тренеры и атмосфера для достижения ваших спортивных целей")}),t.jsxs(c,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,delay:.15},children:[t.jsxs(x,{as:"button",onClick:()=>{const e=encodeURIComponent("Здравствуйте! Хочу записаться на тренировку в KAIF.");window.open(`https://wa.me/66624805877?text=${e}`,"_blank")},whileHover:{scale:1.05,boxShadow:"0 15px 50px rgba(210, 155, 132, 0.6)"},whileTap:{scale:.95},children:[t.jsx(n,{}),i("sports.hero.primary_cta","BOOK A TRAINING")]}),t.jsx(h,{as:"a",href:"#facilities",whileHover:{scale:1.05,borderColor:"rgba(255, 255, 255, 1)"},whileTap:{scale:.95},children:i("sports.hero.secondary_cta","LEARN MORE")})]}),t.jsxs(r.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,delay:.2},style:{display:"flex",gap:"2rem",marginTop:"2rem",flexWrap:"wrap"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"0",background:"#FFE600",border:"none",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(s,{style:{width:"20px",height:"20px",color:"#000000"}})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"1.3rem",fontWeight:"900",color:"#FFF",lineHeight:"1"},children:"70+"}),t.jsx("div",{style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.6)",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.05em"},children:i("sports.hero.equipment_count","Equipment")})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"0",background:"#FFE600",border:"none",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(o,{style:{width:"20px",height:"20px",color:"#000000"}})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"1.3rem",fontWeight:"900",color:"#FFF",lineHeight:"1"},children:"10+"}),t.jsx("div",{style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.6)",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.05em"},children:i("sports.hero.trainers_count","Pro Trainers")})]})]})]})]}),t.jsxs(b,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[t.jsx(u,{}),t.jsx(y,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,delay:.1}}),t.jsx(f,{src:"/images/sports/gym/gym-1.jpg",alt:"Elite Fitness",loading:"eager"}),t.jsxs(r.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,delay:.2},style:{position:"absolute",bottom:"20px",right:"20px",background:"#FFFFFF",padding:"1.2rem 2rem",borderRadius:"0",border:"none",boxShadow:"0 10px 40px rgba(255, 255, 255, 0.3)",zIndex:3},className:"hero-badge-right",children:[t.jsx("div",{style:{fontSize:"2.2rem",fontWeight:"900",color:"#000000",lineHeight:"1",marginBottom:"0.3rem",letterSpacing:"-0.02em"},children:"500+"}),t.jsx("div",{style:{fontSize:"0.7rem",fontWeight:"800",color:"#000000",textTransform:"uppercase",letterSpacing:"0.15em"},children:i("sports.hero.members_badge","MEMBERS")})]})]})]})})};export{HeroSection as default};
