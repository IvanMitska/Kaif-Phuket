import{j as e}from"./react-core-CV8k_GRh.js"
import{d as t}from"./styled-components-CMIfAvVS.js"
import{m as i}from"./framer-motion-h7lgP0Yp.js"
import{S as r,C as o,a as s,b as a}from"./SportsPage-DpeWI65E.js"
import{u as n}from"./i18n-core-CSZVPE1N.js"
import{e as p,M as d,y as l,Q as c,i as m,R as h}from"./heroicons-B0mUXsxG.js"
import"./vendor-misc-Bm4JrmXh.js"
import"./main-CL3FGD6u.js"
import"./react-dom-client-fHgFUAUX.js"
import"./react-dom-C7S9v3DL.js"
import"./vendor-scheduler-DKYT7Wy5.js"
import"./i18n-detector-DpBHbpfO.js"
import"./react-helmet-C_ZFuiA7.js"
import"./PageHead-C4ywpL0o.js"
import"./PageScrollReset-CasNnzkC.js"
const f=t.div`
  width: 100%;
  position: relative;
  z-index: 2;
`,b=t(i.div)`
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
`,g=t(i.div)`
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
`,x=t.div`
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
`,u=t.h3`
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
`,y=t.p`
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 400;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,w=t(i.div)`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
`,v=[{icon:p,titleKey:"sports.benefits.premium.title",descriptionKey:"sports.benefits.premium.description",defaultTitle:"Премиальное оборудование",defaultDescription:"Тренажеры от ведущих мировых производителей Technogym и Life Fitness",color:"#D29B84"},{icon:d,titleKey:"sports.benefits.trainers.title",descriptionKey:"sports.benefits.trainers.description",defaultTitle:"Профессиональные тренеры",defaultDescription:"Сертифицированные специалисты с международным опытом",color:"#90B3A7"},{icon:l,titleKey:"sports.benefits.schedule.title",descriptionKey:"sports.benefits.schedule.description",defaultTitle:"Гибкое расписание",defaultDescription:"Открыты с 07:00 до 22:00 каждый день недели",color:"#C8A8E9"},{icon:c,titleKey:"sports.benefits.technology.title",descriptionKey:"sports.benefits.technology.description",defaultTitle:"Современные технологии",defaultDescription:"Мониторинг прогресса и персональные программы тренировок",color:"#D29B84"},{icon:m,titleKey:"sports.benefits.atmosphere.title",descriptionKey:"sports.benefits.atmosphere.description",defaultTitle:"Комфортная атмосфера",defaultDescription:"Просторные залы с кондиционированием и панорамными окнами",color:"#90B3A7"},{icon:h,titleKey:"sports.benefits.safety.title",descriptionKey:"sports.benefits.safety.description",defaultTitle:"Безопасность превыше всего",defaultDescription:"Страхование, медицинский контроль и соблюдение всех стандартов",color:"#C8A8E9"}],j={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},F={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},K=()=>{const{t}=n()
return e.jsxs(r,{children:[e.jsx(w,{style:{top:"10%",left:"5%",width:"200px",height:"200px",background:"radial-gradient(circle, rgba(210, 155, 132, 0.1) 0%, transparent 70%)"},animate:{y:[0,30,0],scale:[1,1.1,1],opacity:[.3,.5,.3]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}}),e.jsx(w,{style:{bottom:"10%",right:"5%",width:"150px",height:"150px",background:"radial-gradient(circle, rgba(144, 179, 167, 0.1) 0%, transparent 70%)"},animate:{y:[0,-30,0],scale:[1,1.15,1],opacity:[.3,.6,.3]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),e.jsxs(o,{children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"4rem"},children:[e.jsx(s,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:1,amount:.3},transition:{duration:.5},children:t("sports.benefits.tag","Почему выбирают нас")}),e.jsx(a,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:1,amount:.3},transition:{duration:.7},dangerouslySetInnerHTML:{__html:t("sports.benefits.title","Преимущества <span>спортивного комплекса</span> KAIF")}})]}),e.jsx(f,{children:e.jsx(b,{variants:j,initial:"hidden",whileInView:"visible",viewport:{once:1,amount:.2},children:v.map((i,r)=>{const o=i.icon
return e.jsxs(g,{variants:F,whileHover:{y:-10,boxShadow:"0 20px 40px rgba(0, 0, 0, 0.15)",transition:{duration:.3}},children:[e.jsx(x,{color:i.color,children:e.jsx(o,{})}),e.jsx(u,{children:t(i.titleKey,i.defaultTitle)}),e.jsx(y,{children:t(i.descriptionKey,i.defaultDescription)})]},r)})})})]})]})}
export{K as default}
