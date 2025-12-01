import{r as t,R as e,j as i}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-fuCKgGld.js";import{m as o}from"./framer-motion-Ep29qSuC.js";import{S as s,C as a,a as n,b as d,c as l}from"./SportsPage-Dzu5mb6k.js";import{u as c}from"./i18n-core-DrMVsQFB.js";import{y as p,z as m,U as u}from"./heroicons-DSEs4UIN.js";import"./vendor-misc-D8JVgYt7.js";import"./main-UatJz5eD.js";import"./react-dom-client-BkLB9BFi.js";import"./react-dom-Bb3pWfRT.js";import"./vendor-scheduler-9xQDShOA.js";import"./i18n-detector-l8ePocMX.js";import"./react-helmet-BCF-s7y-.js";import"./PageHead-ByG18s83.js";import"./PageScrollReset-BDYyiQ41.js";const y=r.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`,h=r(o.div)`
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
`,g=r(o.button)`
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
`,x=r(o.div)`
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
`,K=r.h4`
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
`,v=r.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`,_=r.div`
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
`,k=r(o.a)`
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
  transition: box-shadow 0.3s ease, color 0.3s ease;
  box-shadow: 0 6px 24px rgba(255, 230, 0, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
  position: relative;
  overflow: hidden;
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

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    box-shadow: 0 8px 32px rgba(255, 230, 0, 0.6);
    color: #FFE600;
  }

  &:hover::before {
    width: 100%;
  }
`,F={monday:[{time:"09:00",titleKey:"yoga_flow",instructor:"Anna K.",duration:60,spots:12},{time:"11:00",titleKey:"hiit_training",instructor:"Michael S.",duration:45,spots:20},{time:"14:00",titleKey:"boxing",instructor:"Sergei T.",duration:60,spots:15},{time:"17:00",titleKey:"stretching",instructor:"Elena G.",duration:45,spots:15},{time:"19:00",titleKey:"crossfit",instructor:"Dmitry L.",duration:60,spots:18}],tuesday:[{time:"09:00",titleKey:"pilates",instructor:"Maria V.",duration:60,spots:12},{time:"11:00",titleKey:"muay_thai",instructor:"Alexey D.",duration:60,spots:15},{time:"15:00",titleKey:"dance_cardio",instructor:"Viktoria Z.",duration:45,spots:20},{time:"18:00",titleKey:"strength_training",instructor:"Ivan P.",duration:60,spots:16},{time:"20:00",titleKey:"yoga_therapy",instructor:"Natalia M.",duration:60,spots:10}],wednesday:[{time:"09:00",titleKey:"functional_training",instructor:"Michael S.",duration:60,spots:18},{time:"11:00",titleKey:"zumba",instructor:"Viktoria Z.",duration:45,spots:25},{time:"14:00",titleKey:"mma_basics",instructor:"Sergei T.",duration:60,spots:12},{time:"17:00",titleKey:"mobility",instructor:"Elena G.",duration:45,spots:15},{time:"19:00",titleKey:"body_pump",instructor:"Dmitry L.",duration:60,spots:20}],thursday:[{time:"09:00",titleKey:"yoga_power",instructor:"Anna K.",duration:60,spots:12},{time:"11:00",titleKey:"boxing_advanced",instructor:"Alexey D.",duration:60,spots:10},{time:"15:00",titleKey:"barre",instructor:"Maria V.",duration:45,spots:15},{time:"18:00",titleKey:"trx_training",instructor:"Ivan P.",duration:45,spots:12},{time:"20:00",titleKey:"stretching_relax",instructor:"Natalia M.",duration:60,spots:15}],friday:[{time:"09:00",titleKey:"hiit_cardio",instructor:"Michael S.",duration:45,spots:20},{time:"11:00",titleKey:"dance_fitness",instructor:"Viktoria Z.",duration:60,spots:25},{time:"14:00",titleKey:"muay_thai_sparring",instructor:"Sergei T.",duration:60,spots:10},{time:"17:00",titleKey:"core_training",instructor:"Elena G.",duration:45,spots:15},{time:"19:00",titleKey:"crossfit_wod",instructor:"Dmitry L.",duration:60,spots:18}],saturday:[{time:"10:00",titleKey:"morning_yoga",instructor:"Anna K.",duration:60,spots:15},{time:"12:00",titleKey:"open_mat_mma",instructor:"Alexey D.",duration:90,spots:12},{time:"15:00",titleKey:"zumba_party",instructor:"Viktoria Z.",duration:60,spots:30},{time:"17:00",titleKey:"strength_conditioning",instructor:"Ivan P.",duration:60,spots:16}],sunday:[{time:"10:00",titleKey:"gentle_yoga",instructor:"Natalia M.",duration:60,spots:15},{time:"12:00",titleKey:"family_fitness",instructor:"Maria V.",duration:45,spots:20},{time:"15:00",titleKey:"recovery_session",instructor:"Elena G.",duration:60,spots:12}]},$=[{key:"monday",labelKey:"monday",shortKey:"mon_short"},{key:"tuesday",labelKey:"tuesday",shortKey:"tue_short"},{key:"wednesday",labelKey:"wednesday",shortKey:"wed_short"},{key:"thursday",labelKey:"thursday",shortKey:"thu_short"},{key:"friday",labelKey:"friday",shortKey:"fri_short"},{key:"saturday",labelKey:"saturday",shortKey:"sat_short"},{key:"sunday",labelKey:"sunday",shortKey:"sun_short"}],ScheduleSectionNew=()=>{const{t:r}=c(),[o,z]=t.useState("monday");return e.useEffect(()=>{z(["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][(new Date).getDay()])},[]),i.jsx(s,{id:"schedule",children:i.jsxs(a,{children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[i.jsx(n,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.5},children:r("sports.schedule.tag","Расписание")}),i.jsx(d,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},dangerouslySetInnerHTML:{__html:r("sports.schedule.title","Расписание <span>занятий</span>")}}),i.jsx(l,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:r("sports.schedule.subtitle","Выберите день недели и запишитесь на занятие")})]}),i.jsxs(y,{children:[i.jsx(h,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:$.map(t=>i.jsxs(g,{active:o===t.key,onClick:()=>z(t.key),whileHover:{scale:1.05},whileTap:{scale:.95},children:[i.jsx("span",{className:"full",children:r(`sports.schedule.days.${t.labelKey}`)}),i.jsx("span",{className:"short",children:r(`sports.schedule.days.${t.shortKey}`)})]},t.key))}),i.jsx(x,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:F[o].map((t,e)=>i.jsxs(f,{children:[i.jsxs(b,{children:[i.jsx(p,{}),i.jsx("span",{children:t.time})]}),i.jsxs(w,{children:[i.jsx(K,{children:r(`sports.schedule.classes.${t.titleKey}`)}),i.jsxs(j,{children:[i.jsx(m,{}),t.instructor]}),i.jsxs(v,{children:[i.jsxs(_,{children:[i.jsx(p,{}),t.duration," ",r("sports.schedule.minutes","мин")]}),i.jsxs(_,{children:[i.jsx(m,{}),t.spots," ",r("sports.schedule.spots","мест")]})]})]}),i.jsxs(k,{as:"button",onClick:()=>(t=>{const e=`Здравствуйте! Хочу записаться на занятие в KAIF.\n\nЗанятие: ${r(`sports.schedule.classes.${t.titleKey}`)}\nДень: ${r(`sports.schedule.days.${o}`)}\nВремя: ${t.time}\nИнструктор: ${t.instructor}`,i=`https://wa.me/66624805877?text=${encodeURIComponent(e)}`;window.open(i,"_blank")})(t),whileHover:{scale:1.05},whileTap:{scale:.95},children:[i.jsx(u,{}),r("sports.schedule.book","Записаться")]})]},e))},o)]})]})})};export{ScheduleSectionNew as default};
