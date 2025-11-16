import{a as e,r as t,j as i,m as r,v as a,ao as o,ap as n}from"./vendor-react-Dj8BKr9E.js";import{d as s}from"./vendor-styles-CqEOfFkH.js";import{m as l,A as d}from"./vendor-animations-DXmTBijG.js";import"./vendor-other-CZupzcPt.js";const p=s.section`
  min-height: 100vh;
  max-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  background: #000000;
  overflow: hidden;
  padding: 80px 0 40px 0;

  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 80px 0 20px 0;
  }
`,m=s(l.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg,
      rgba(0, 0, 0, 0.92) 0%,
      rgba(0, 0, 0, 0.75) 40%,
      rgba(0, 0, 0, 0.92) 100%
    );
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(90deg, #000 0%, transparent 15%, transparent 85%, #000 100%),
      radial-gradient(circle at 20% 30%, rgba(210, 155, 132, 0.12) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(200, 168, 233, 0.12) 0%, transparent 50%);
    z-index: 2;
  }
`,g=s.div`
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
  height: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }
`,x=s(l.div)`
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
`;s(l.span)`
  display: inline-block;
  background-color: rgba(210, 155, 132, 0.2);
  color: ${e=>e.theme.colors.primary};
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(210, 155, 132, 0.3);
`;const c=s(l.h1)`
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
`,h=s(l.p)`
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
`,b=s(l.div)`
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
`,f=s(l.button)`
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 1.2px;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #000000;
    transition: width 0.3s ease;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }

  &:hover {
    box-shadow: 0 12px 40px rgba(255, 230, 0, 0.6);
    transform: translateY(-2px);

    & > * {
      color: #FFE600;
    }
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
`,u=s(l.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background-color: transparent;
  color: white;
  font-weight: 800;
  font-size: 1rem;
  padding: 1.2rem 2.5rem;
  border-radius: 0;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 1.2px;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    transition: width 0.3s ease;
  }

  & > * {
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 1);
    transform: translateY(-2px);

    & > * {
      color: #000000;
    }
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
`;s(l.div)`
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
`,s(l.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  svg {
    margin-bottom: 0.75rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(210, 155, 132, 0.4);
    transform: translateY(-5px);
  }
`,s.span`
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
`,s.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;const y=s(l.div)`
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
    height: 320px;
    max-height: 320px;
  }
`,w=s(l.img)`
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
`,v=s(l.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(210, 155, 132, 0.4) 0%, transparent 70%);
  filter: blur(60px);
  z-index: 1;
  pointer-events: none;
`,j=s(l.div)`
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
`,F=["/images/sports/gym/gym-1.jpg","/images/sports/fight-club/fight-1.jpg","/images/sports/gym/gym-2.jpg","/images/sports/fight-club/fight-2.jpg"],k=()=>{const{t:s}=e(),[k,z]=t.useState(0);return t.useEffect(()=>{const e=setInterval(()=>{z(e=>(e+1)%F.length)},5e3);return()=>clearInterval(e)},[]),i.jsxs(p,{children:[i.jsx(d,{mode:"wait",children:i.jsx(m,{style:{backgroundImage:`url(${F[k]})`},initial:{opacity:0,scale:1.05},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.05},transition:{duration:.8}},k)}),i.jsx(l.div,{style:{position:"absolute",top:"20%",right:"10%",width:"300px",height:"300px",background:"radial-gradient(circle, rgba(210, 155, 132, 0.3) 0%, transparent 70%)",filter:"blur(80px)",zIndex:1},animate:{scale:[1,1.2,1],opacity:[.3,.5,.3]},transition:{duration:5,repeat:1/0,ease:"easeInOut"}}),i.jsxs(g,{children:[i.jsxs(x,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[i.jsxs(l.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.4,delay:.2},style:{display:"inline-flex",alignItems:"center",gap:"0.6rem",background:"#FFE600",padding:"0.7rem 1.4rem",borderRadius:"0",border:"none",marginBottom:"1.5rem",fontSize:"0.85rem",fontWeight:"800",color:"#000000",textTransform:"uppercase",letterSpacing:"2px",boxShadow:"0 6px 24px rgba(255, 230, 0, 0.4)"},children:[i.jsx(r,{style:{width:"18px",height:"18px",color:"#000000"}}),s("sports.hero.tag","YOUR ELITE FITNESS")]}),i.jsxs(c,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:[s("sports.hero.main_title_1","YOUR"),i.jsx("br",{}),i.jsx(l.span,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.6},style:{background:"linear-gradient(135deg, #FFE600 0%, #FFA500 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"inline-block",filter:"drop-shadow(0 0 40px rgba(255, 230, 0, 0.6))"},children:s("sports.hero.main_title_2","ELITE")}),i.jsx("br",{}),s("sports.hero.main_title_3","FITNESS"),i.jsx("br",{}),i.jsx(l.span,{style:{fontSize:"0.5em",fontWeight:"400",color:"rgba(255, 255, 255, 0.7)",letterSpacing:"0.1em"},children:s("sports.hero.main_title_4","EXPERIENCE")})]}),i.jsx(h,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5},children:s("sports.hero.subtitle","Современные тренажеры, профессиональные тренеры и атмосфера для достижения ваших спортивных целей")}),i.jsxs(b,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:[i.jsxs(f,{as:"a",href:"https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20на%20тренировку%20в%20KAIF",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05,boxShadow:"0 15px 50px rgba(210, 155, 132, 0.6)"},whileTap:{scale:.95},children:[i.jsx(a,{}),s("sports.hero.primary_cta","BOOK A TRAINING"),i.jsx(o,{})]}),i.jsx(u,{as:"a",href:"#facilities",whileHover:{scale:1.05,borderColor:"rgba(255, 255, 255, 1)"},whileTap:{scale:.95},children:s("sports.hero.secondary_cta","LEARN MORE")})]}),i.jsxs(l.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.8},style:{display:"flex",gap:"2rem",marginTop:"2rem",flexWrap:"wrap"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[i.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"0",background:"#FFE600",border:"none",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(n,{style:{width:"20px",height:"20px",color:"#000000"}})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:"1.3rem",fontWeight:"900",color:"#FFF",lineHeight:"1"},children:"70+"}),i.jsx("div",{style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.6)",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.05em"},children:s("sports.hero.equipment_count","Equipment")})]})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[i.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"0",background:"#FFE600",border:"none",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(r,{style:{width:"20px",height:"20px",color:"#000000"}})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:"1.3rem",fontWeight:"900",color:"#FFF",lineHeight:"1"},children:"10+"}),i.jsx("div",{style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.6)",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.05em"},children:s("sports.hero.trainers_count","Pro Trainers")})]})]})]})]}),i.jsxs(y,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8,delay:.4},children:[i.jsx(v,{animate:{scale:[1,1.2,1],opacity:[.3,.6,.3]},transition:{duration:5,repeat:1/0,ease:"easeInOut"}}),i.jsx(j,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},transition:{duration:1,delay:.6}}),i.jsx(w,{src:"/images/sports/gym/gym-1.jpg",alt:"Elite Fitness",initial:{scale:1.05},animate:{scale:1},transition:{duration:1.2,delay:.5}}),i.jsxs(l.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6,delay:1},style:{position:"absolute",top:"20px",left:"20px",background:"#FFE600",backdropFilter:"blur(20px)",padding:"1.2rem 2rem",borderRadius:"0",border:"none",boxShadow:"0 10px 40px rgba(255, 230, 0, 0.5)",zIndex:3},className:"hero-badge-left",children:[i.jsx("div",{style:{fontSize:"2.2rem",fontWeight:"900",color:"#000000",lineHeight:"1",marginBottom:"0.3rem",letterSpacing:"-0.02em"},children:"24/7"}),i.jsx("div",{style:{fontSize:"0.7rem",fontWeight:"800",color:"#000000",textTransform:"uppercase",letterSpacing:"0.15em"},children:s("sports.hero.access","ACCESS")})]}),i.jsxs(l.div,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.6,delay:1.2},style:{position:"absolute",bottom:"20px",right:"20px",background:"#FFFFFF",backdropFilter:"blur(20px)",padding:"1.2rem 2rem",borderRadius:"0",border:"none",boxShadow:"0 10px 40px rgba(255, 255, 255, 0.3)",zIndex:3},className:"hero-badge-right",children:[i.jsx("div",{style:{fontSize:"2.2rem",fontWeight:"900",color:"#000000",lineHeight:"1",marginBottom:"0.3rem",letterSpacing:"-0.02em"},children:"500+"}),i.jsx("div",{style:{fontSize:"0.7rem",fontWeight:"800",color:"#000000",textTransform:"uppercase",letterSpacing:"0.15em"},children:s("sports.hero.members_badge","MEMBERS")})]})]})]})]})};export{k as default};
