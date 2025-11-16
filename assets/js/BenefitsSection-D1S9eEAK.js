import{a as e,j as t,m as i,am as r,M as o,aq as a,q as s,ar as n}from"./vendor-react-Dj8BKr9E.js";import{d as p}from"./vendor-styles-CqEOfFkH.js";import{m as d}from"./vendor-animations-DXmTBijG.js";import{S as l,C as c,a as m,b as h}from"./SportsPage-fyJoDaBv.js";import"./vendor-other-CZupzcPt.js";import"./main-CdH45h78.js";import"./vendor-i18n-C4kh69yx.js";import"./PageScrollReset-BOx4uGe6.js";const f=p.div`
  width: 100%;
  position: relative;
  z-index: 2;
`,b=p(d.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,g=p(d.div)`
  background: rgba(255, 255, 255, 0.03);
  padding: 3rem 2.5rem;
  border-radius: 0;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15);
  border: none;
  backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: #FFE600;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 60px 60px;
    border-color: transparent transparent rgba(255, 230, 0, 0.1) transparent;
    transition: all 0.4s ease;
    opacity: 0;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 0 1px rgba(255, 230, 0, 0.5), 0 20px 60px rgba(0, 0, 0, 0.3);
    transform: translateY(-10px);
  }

  &:hover::before {
    transform: scaleY(1);
  }

  &:hover::after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,x=p.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  background: #FFE600;
  margin-bottom: 2rem;
  position: relative;
  border: none;
  box-shadow: 0 8px 32px rgba(255, 230, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 40px;
    height: 40px;
    color: #000000;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(135deg, #FFE600, #FFA500);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  ${g}:hover & {
    box-shadow: 0 12px 48px rgba(255, 230, 0, 0.6);
    transform: scale(1.1) rotate(5deg);
  }

  ${g}:hover &::before {
    opacity: 0.3;
  }

  ${g}:hover & svg {
    transform: scale(1.15) rotate(-5deg);
  }
`,u=p.h3`
  font-family: ${e=>e.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 900;
  color: #FFFFFF;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  -webkit-font-smoothing: antialiased;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: #FFE600;
    transition: width 0.4s ease;
  }

  ${g}:hover &::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,y=p.p`
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 400;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,v=p(d.div)`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
`,w=[{icon:i,titleKey:"sports.benefits.premium.title",descriptionKey:"sports.benefits.premium.description",defaultTitle:"Премиальное оборудование",defaultDescription:"Тренажеры от ведущих мировых производителей Technogym и Life Fitness",color:"#D29B84"},{icon:r,titleKey:"sports.benefits.trainers.title",descriptionKey:"sports.benefits.trainers.description",defaultTitle:"Профессиональные тренеры",defaultDescription:"Сертифицированные специалисты с международным опытом",color:"#90B3A7"},{icon:o,titleKey:"sports.benefits.schedule.title",descriptionKey:"sports.benefits.schedule.description",defaultTitle:"Гибкое расписание",defaultDescription:"Открыты с 07:00 до 22:00 каждый день недели",color:"#C8A8E9"},{icon:a,titleKey:"sports.benefits.technology.title",descriptionKey:"sports.benefits.technology.description",defaultTitle:"Современные технологии",defaultDescription:"Мониторинг прогресса и персональные программы тренировок",color:"#D29B84"},{icon:s,titleKey:"sports.benefits.atmosphere.title",descriptionKey:"sports.benefits.atmosphere.description",defaultTitle:"Комфортная атмосфера",defaultDescription:"Просторные залы с кондиционированием и панорамными окнами",color:"#90B3A7"},{icon:n,titleKey:"sports.benefits.safety.title",descriptionKey:"sports.benefits.safety.description",defaultTitle:"Безопасность превыше всего",defaultDescription:"Страхование, медицинский контроль и соблюдение всех стандартов",color:"#C8A8E9"}],j={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},F={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},K=()=>{const{t:i}=e();return t.jsxs(l,{children:[t.jsx(v,{style:{top:"10%",left:"5%",width:"200px",height:"200px",background:"radial-gradient(circle, rgba(210, 155, 132, 0.1) 0%, transparent 70%)"},animate:{y:[0,30,0],scale:[1,1.1,1],opacity:[.3,.5,.3]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}}),t.jsx(v,{style:{bottom:"10%",right:"5%",width:"150px",height:"150px",background:"radial-gradient(circle, rgba(144, 179, 167, 0.1) 0%, transparent 70%)"},animate:{y:[0,-30,0],scale:[1,1.15,1],opacity:[.3,.6,.3]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),t.jsxs(c,{children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"4rem"},children:[t.jsx(m,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.5},children:i("sports.benefits.tag","Почему выбирают нас")}),t.jsx(h,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},dangerouslySetInnerHTML:{__html:i("sports.benefits.title","Преимущества <span>спортивного комплекса</span> KAIF")}})]}),t.jsx(f,{children:t.jsx(b,{variants:j,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:w.map((e,r)=>{const o=e.icon;return t.jsxs(g,{variants:F,whileHover:{y:-10,boxShadow:"0 20px 40px rgba(0, 0, 0, 0.15)",transition:{duration:.3}},children:[t.jsx(x,{color:e.color,children:t.jsx(o,{})}),t.jsx(u,{children:i(e.titleKey,e.defaultTitle)}),t.jsx(y,{children:i(e.descriptionKey,e.defaultDescription)})]},r)})})})]})]})};export{K as default};
