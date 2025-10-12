import{a as e,j as t,ah as i,a5 as r}from"./vendor-react-Udk5_aBK.js";import{d as a}from"./vendor-styles-DIjDOctl.js";import{m as o}from"./vendor-animations-B-vr_HsI.js";import"./vendor-other-CZupzcPt.js";const n=a.section`
  min-height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #111;
  overflow: hidden;
`,s=a.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: url('/images/sports/fight-club/fight-1.jpg');
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
      rgba(0, 0, 0, 0.75) 0%, 
      rgba(0, 0, 0, 0.5) 50%, 
      rgba(0, 0, 0, 0.7) 100%
    );
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%);
  }
`,l=a.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  min-height: 90vh;
`,d=a(o.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  text-align: center;
  max-width: 900px;
  width: 100%;
`;a(o.span)`
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
`;const c=a(o.h1)`
  font-family: ${e=>e.theme.fonts.heading};
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
  position: relative;
  
  span {
    color: #FFFFFF;
    position: relative;
    display: inline-block;
  }
`,p=a(o.p)`
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  font-weight: 300;
  text-align: center;
`,h=a(o.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,m=a(o.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  font-weight: 600;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 15px rgba(210, 155, 132, 0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
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
    box-shadow: 0 8px 25px rgba(210, 155, 132, 0.4);
    transform: translateY(-3px);
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
`,g=a(o.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: transparent;
  color: white;
  font-weight: 600;
  padding: 1.15rem 2.45rem;
  border-radius: 50px;
  cursor: pointer;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.05);
    transition: width 0.3s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-3px);
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
`,x=a(o.div)`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 2rem;
    flex-direction: column;
    align-items: center;
  }
`,f=a(o.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &::before {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background-color: ${e=>e.theme.colors.primary};
    margin-bottom: 1rem;
    border-radius: 3px;
    opacity: 0.7;
  }
`,b=a.span`
  font-size: 2.8rem;
  font-weight: 700;
  font-family: ${e=>e.theme.fonts.heading};
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1;
`,y=a.span`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
`;a(o.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  @media (max-width: 1024px) {
    order: -1;
  }
`,a(o.img)`
  max-width: 100%;
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  
  @media (max-width: 1024px) {
    height: 400px;
    max-width: 90%;
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;const u=()=>{const{t:a}=e();return t.jsxs(n,{children:[t.jsx(s,{}),t.jsx(l,{children:t.jsxs(d,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[t.jsx(c,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},dangerouslySetInnerHTML:{__html:a("sports.hero.title","Превосходи себя в <span>спорте</span> с KAIF")}}),t.jsx(p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5},children:a("sports.hero.subtitle","Современные тренажеры, профессиональные тренеры и атмосфера для достижения ваших спортивных целей")}),t.jsxs(h,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:[t.jsxs(m,{as:"a",href:"https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20на%20тренировку%20в%20KAIF",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.03},whileTap:{scale:.97},children:[a("sports.hero.primary_cta","Записаться на тренировку"),t.jsx(i,{})]}),t.jsxs(g,{as:"a",href:"#facilities",whileHover:{scale:1.03},whileTap:{scale:.97},children:[a("sports.hero.secondary_cta","Узнать подробнее"),t.jsx(r,{})]})]}),t.jsxs(x,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.7},children:[t.jsxs(f,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.4,delay:.8},children:[t.jsx(b,{children:"5+"}),t.jsx(y,{children:a("sports.hero.stats.facilities","Спортивных объектов")})]}),t.jsxs(f,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.4,delay:.9},children:[t.jsx(b,{children:"10+"}),t.jsx(y,{children:a("sports.hero.stats.trainers","Профессиональных тренеров")})]}),t.jsxs(f,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.4,delay:1},children:[t.jsx(b,{children:"70+"}),t.jsx(y,{children:a("sports.hero.stats.access","Современное оборудование")})]})]})]})})]})};export{u as default};
