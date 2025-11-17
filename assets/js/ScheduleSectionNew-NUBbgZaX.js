import{r as t,R as i,j as e}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-fuCKgGld.js";import{m as o}from"./framer-motion-Ep29qSuC.js";import{S as a,C as s,a as n,b as l,c as d}from"./SportsPage-BWBOKMpm.js";import{u as p}from"./i18n-core-DrMVsQFB.js";import{y as c,z as m,T as u}from"./heroicons-Dc4hJBDs.js";import"./vendor-misc-D8JVgYt7.js";import"./main-Bin8y1ez.js";import"./react-dom-client-BkLB9BFi.js";import"./react-dom-Bb3pWfRT.js";import"./vendor-scheduler-9xQDShOA.js";import"./i18n-detector-l8ePocMX.js";import"./react-helmet-BCF-s7y-.js";import"./PageHead-ByG18s83.js";import"./PageScrollReset-BDYyiQ41.js";const h=r.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`,g=r(o.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  overflow-x: auto;
  padding: 0;
  background: transparent;
  border-radius: 0;
  scrollbar-width: none;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    justify-content: flex-start;
  }
`,x=r(o.button)`
  flex: 0 0 auto;
  min-width: 140px;
  padding: 1rem 2rem;
  background: ${t=>t.active?"#FFE600":"rgba(255, 255, 255, 0.03)"};
  color: ${t=>t.active?"#000000":"rgba(255, 255, 255, 0.7)"};
  border: none;
  border-radius: 0;
  font-weight: ${t=>t.active?"800":"600"};
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${t=>t.active?"0 8px 24px rgba(255, 230, 0, 0.4)":"none"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  -webkit-font-smoothing: antialiased;

  .short {
    display: none;
  }

  .full {
    display: inline;
  }

  &:hover {
    background: ${t=>t.active?"#FFE600":"rgba(255, 255, 255, 0.05)"};
    color: ${t=>t.active?"#000000":"#FFFFFF"};
  }

  @media (max-width: 768px) {
    min-width: 70px;
    padding: 0.875rem 1rem;
    font-size: 0.85rem;

    .short {
      display: inline;
    }

    .full {
      display: none;
    }
  }
`,y=r(o.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,f=r(o.div)`
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 0;
  border: none;
  box-shadow: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #FFE600;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 0 1px rgba(255, 230, 0, 0.3);
  }

  &:hover::before {
    transform: scaleY(1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,b=r.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: #FFE600;
  border-radius: 0;
  width: fit-content;

  svg {
    width: 18px;
    height: 18px;
    color: #000000;
  }

  span {
    font-weight: 800;
    font-size: 1.1rem;
    color: #000000;
    letter-spacing: 0.5px;
  }
`,w=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`,v=r.h4`
  font-family: ${t=>t.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  -webkit-font-smoothing: antialiased;
`,j=r.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  font-weight: 600;

  svg {
    width: 16px;
    height: 16px;
    color: #FFE600;
  }
`,F=r.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`,k=r.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-weight: 500;

  svg {
    width: 16px;
    height: 16px;
    color: rgba(255, 230, 0, 0.6);
  }
`,M=r(o.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: #FFE600;
  color: #000000;
  border: none;
  border-radius: 0;
  font-weight: 800;
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 6px 24px rgba(255, 230, 0, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
  position: relative;
  overflow: hidden;

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

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    box-shadow: 0 8px 32px rgba(255, 230, 0, 0.6);
  }

  &:hover::before {
    width: 100%;
  }

  &:hover > * {
    color: #FFE600;
  }
`,S={monday:[{time:"09:00",title:"Yoga Flow",instructor:"Anna K.",duration:60,spots:12},{time:"11:00",title:"HIIT Training",instructor:"Michael S.",duration:45,spots:20},{time:"14:00",title:"Boxing",instructor:"Sergei T.",duration:60,spots:15},{time:"17:00",title:"Stretching",instructor:"Elena G.",duration:45,spots:15},{time:"19:00",title:"CrossFit",instructor:"Dmitry L.",duration:60,spots:18}],tuesday:[{time:"09:00",title:"Pilates",instructor:"Maria V.",duration:60,spots:12},{time:"11:00",title:"Muay Thai",instructor:"Alexey D.",duration:60,spots:15},{time:"15:00",title:"Dance Cardio",instructor:"Viktoria Z.",duration:45,spots:20},{time:"18:00",title:"Strength Training",instructor:"Ivan P.",duration:60,spots:16},{time:"20:00",title:"Yoga Therapy",instructor:"Natalia M.",duration:60,spots:10}],wednesday:[{time:"09:00",title:"Functional Training",instructor:"Michael S.",duration:60,spots:18},{time:"11:00",title:"Zumba",instructor:"Viktoria Z.",duration:45,spots:25},{time:"14:00",title:"MMA Basics",instructor:"Sergei T.",duration:60,spots:12},{time:"17:00",title:"Mobility",instructor:"Elena G.",duration:45,spots:15},{time:"19:00",title:"Body Pump",instructor:"Dmitry L.",duration:60,spots:20}],thursday:[{time:"09:00",title:"Yoga Power",instructor:"Anna K.",duration:60,spots:12},{time:"11:00",title:"Boxing Advanced",instructor:"Alexey D.",duration:60,spots:10},{time:"15:00",title:"Barre",instructor:"Maria V.",duration:45,spots:15},{time:"18:00",title:"TRX Training",instructor:"Ivan P.",duration:45,spots:12},{time:"20:00",title:"Stretching & Relax",instructor:"Natalia M.",duration:60,spots:15}],friday:[{time:"09:00",title:"HIIT Cardio",instructor:"Michael S.",duration:45,spots:20},{time:"11:00",title:"Dance Fitness",instructor:"Viktoria Z.",duration:60,spots:25},{time:"14:00",title:"Muay Thai Sparring",instructor:"Sergei T.",duration:60,spots:10},{time:"17:00",title:"Core Training",instructor:"Elena G.",duration:45,spots:15},{time:"19:00",title:"CrossFit WOD",instructor:"Dmitry L.",duration:60,spots:18}],saturday:[{time:"10:00",title:"Morning Yoga",instructor:"Anna K.",duration:60,spots:15},{time:"12:00",title:"Open Mat (MMA)",instructor:"Alexey D.",duration:90,spots:12},{time:"15:00",title:"Zumba Party",instructor:"Viktoria Z.",duration:60,spots:30},{time:"17:00",title:"Strength & Conditioning",instructor:"Ivan P.",duration:60,spots:16}],sunday:[{time:"10:00",title:"Gentle Yoga",instructor:"Natalia M.",duration:60,spots:15},{time:"12:00",title:"Family Fitness",instructor:"Maria V.",duration:45,spots:20},{time:"15:00",title:"Recovery Session",instructor:"Elena G.",duration:60,spots:12}]},T=[{key:"monday",label:"Понедельник",short:"ПН"},{key:"tuesday",label:"Вторник",short:"ВТ"},{key:"wednesday",label:"Среда",short:"СР"},{key:"thursday",label:"Четверг",short:"ЧТ"},{key:"friday",label:"Пятница",short:"ПТ"},{key:"saturday",label:"Суббота",short:"СБ"},{key:"sunday",label:"Воскресенье",short:"ВС"}],ScheduleSectionNew=()=>{const{t:r}=p(),[o,E]=t.useState("monday");return i.useEffect(()=>{E(["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][(new Date).getDay()])},[]),e.jsx(a,{id:"schedule",children:e.jsxs(s,{children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"3rem"},children:[e.jsx(n,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.5},children:r("sports.schedule.tag","Расписание")}),e.jsx(l,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},dangerouslySetInnerHTML:{__html:r("sports.schedule.title","Расписание <span>занятий</span>")}}),e.jsx(d,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:r("sports.schedule.subtitle","Выберите день недели и запишитесь на занятие")})]}),e.jsxs(h,{children:[e.jsx(g,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:T.map(t=>e.jsxs(x,{active:o===t.key,onClick:()=>E(t.key),whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx("span",{className:"full",children:t.label}),e.jsx("span",{className:"short",children:t.short})]},t.key))}),e.jsx(y,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.4},children:S[o].map((t,i)=>e.jsxs(f,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.1*i},whileHover:{y:-5,boxShadow:"0 15px 40px rgba(0, 0, 0, 0.12)"},children:[e.jsxs(b,{children:[e.jsx(c,{}),e.jsx("span",{children:t.time})]}),e.jsxs(w,{children:[e.jsx(v,{children:t.title}),e.jsxs(j,{children:[e.jsx(m,{}),t.instructor]}),e.jsxs(F,{children:[e.jsxs(k,{children:[e.jsx(c,{}),t.duration," ",r("sports.schedule.minutes","мин")]}),e.jsxs(k,{children:[e.jsx(m,{}),t.spots," ",r("sports.schedule.spots","мест")]})]})]}),e.jsxs(M,{as:"a",href:`https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20на%20${t.title}%20в%20${t.time}`,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(u,{}),r("sports.schedule.book","Записаться")]})]},i))},o)]})]})})};export{ScheduleSectionNew as default};
