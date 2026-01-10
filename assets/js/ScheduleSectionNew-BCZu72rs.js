import{r as e,R as t,j as i}from"./react-core-DWAaPJsY.js";import{d as a}from"./styled-components-fuCKgGld.js";import{m as r}from"./framer-motion-DOblPXrY.js";import{S as o,C as n,a as s,b as d,c as l}from"./SportsPage-h0yTZTjA.js";import{u as m}from"./i18n-core-DrMVsQFB.js";import{y,U as u}from"./heroicons-DSEs4UIN.js";import"./vendor-misc-D8JVgYt7.js";import"./main-DSfhzP27.js";import"./react-dom-client-BkLB9BFi.js";import"./react-dom-Bb3pWfRT.js";import"./vendor-scheduler-9xQDShOA.js";import"./i18n-detector-l8ePocMX.js";import"./react-helmet-BCF-s7y-.js";import"./PageHead-ByG18s83.js";import"./PageScrollReset-CpzNA0Jq.js";const c=a.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`,p=a(r.div)`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  scrollbar-width: none;
  justify-content: center;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0.75rem;
  }
`,h=a(r.button)`
  flex: 0 0 auto;
  min-width: 120px;
  padding: 0.875rem 1.5rem;
  background: ${e=>e.active?"#FFE600":"transparent"};
  color: ${e=>e.active?"#000000":"#FFFFFF"};
  border: 2px solid ${e=>e.active?"#FFE600":"rgba(255, 255, 255, 0.3)"};
  border-radius: 6px;
  font-weight: ${e=>e.active?"700":"500"};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
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
    background: ${e=>e.active?"#FFE600":"rgba(255, 230, 0, 0.15)"};
    border-color: #FFE600;
    color: ${e=>e.active?"#000000":"#FFE600"};
  }

  @media (max-width: 768px) {
    min-width: auto;
    padding: 0.75rem 1rem;
    font-size: 0.8rem;
    flex: 0 1 auto;

    .short {
      display: inline;
    }

    .full {
      display: none;
    }
  }
`,g=a(h)`
  @media (max-width: 768px) {
    .short {
      display: none;
    }

    .full {
      display: inline;
    }
  }
`,x=a(r.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`,K=a(r.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 4px solid #FFE600;
  box-shadow: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 230, 0, 0.5);
    border-left-color: #FFE600;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`,f=a.div`
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
`,b=a.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`,w=a.h4`
  font-family: ${e=>e.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  -webkit-font-smoothing: antialiased;
`;a.div`
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
`;const j=a.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`,_=a.div`
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
`,k=a(r.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: #FFE600;
  color: #000000;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  -webkit-font-smoothing: antialiased;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: #fff;
    transform: scale(1.02);
  }
`,v={swim:{monday:[{time:"18:00",titleKey:"kids_5_8",duration:60}],tuesday:[{time:"09:00",titleKey:"adults_group",duration:60},{time:"10:00",titleKey:"aqua_aerobics",duration:60}],wednesday:[{time:"17:00",titleKey:"kids_7_12",duration:60},{time:"18:00",titleKey:"kids_5_8",duration:60}],thursday:[{time:"09:00",titleKey:"adults_group",duration:60},{time:"10:00",titleKey:"aqua_aerobics",duration:60}],friday:[{time:"17:00",titleKey:"kids_7_12",duration:60},{time:"18:00",titleKey:"kids_5_8",duration:60}],saturday:[]},dance:{monday:[{time:"09:00",titleKey:"yoga",duration:60},{time:"13:10",titleKey:"yoga_pro",duration:50},{time:"17:00",titleKey:"zumba_step",duration:60},{time:"18:00",titleKey:"tabata",duration:60},{time:"19:00",titleKey:"yoga",duration:60}],tuesday:[{time:"09:00",titleKey:"stretching",duration:60},{time:"10:00",titleKey:"barre",duration:60},{time:"16:00",titleKey:"high_heels",duration:60},{time:"17:00",titleKey:"fitness",duration:60},{time:"18:00",titleKey:"stretching",duration:60},{time:"19:00",titleKey:"kids_dance",duration:60}],wednesday:[{time:"09:00",titleKey:"circl_mobility",duration:60},{time:"10:00",titleKey:"zumba_toning",duration:60},{time:"13:10",titleKey:"yoga_pro",duration:50},{time:"18:00",titleKey:"tabata",duration:60}],thursday:[{time:"09:00",titleKey:"stretching",duration:60},{time:"10:00",titleKey:"barre",duration:60},{time:"16:00",titleKey:"high_heels",duration:60},{time:"17:00",titleKey:"fitness",duration:60},{time:"18:00",titleKey:"stretching",duration:60},{time:"19:00",titleKey:"yoga",duration:60}],friday:[{time:"09:00",titleKey:"yoga",duration:60},{time:"13:10",titleKey:"yoga_pro",duration:50},{time:"17:00",titleKey:"circl_mobility",duration:60},{time:"18:00",titleKey:"zumba",duration:60}],saturday:[{time:"12:00",titleKey:"kids_dance",duration:60},{time:"13:10",titleKey:"yoga",duration:50},{time:"14:00",titleKey:"girli_hiphop",duration:60},{time:"18:00",titleKey:"hiphop",duration:60}]},fight:{monday:[{time:"11:00",titleKey:"kickboxing",duration:60},{time:"13:00",titleKey:"jiujitsu_nogi",duration:60},{time:"17:00",titleKey:"jiujitsu_kids",duration:60},{time:"18:00",titleKey:"jiujitsu_gi",duration:60},{time:"19:00",titleKey:"muay_thai",duration:60}],tuesday:[{time:"09:30",titleKey:"boxing",duration:60},{time:"15:00",titleKey:"boxing_women",duration:60},{time:"16:00",titleKey:"muay_thai",duration:60},{time:"17:30",titleKey:"muay_thai_kids",duration:60}],wednesday:[{time:"11:00",titleKey:"kickboxing",duration:60},{time:"13:00",titleKey:"jiujitsu_nogi",duration:60},{time:"17:00",titleKey:"jiujitsu_kids",duration:60},{time:"18:00",titleKey:"jiujitsu_gi",duration:60},{time:"19:00",titleKey:"muay_thai",duration:60}],thursday:[{time:"09:30",titleKey:"boxing",duration:60},{time:"16:00",titleKey:"muay_thai",duration:60},{time:"17:30",titleKey:"muay_thai_kids",duration:60}],friday:[{time:"11:00",titleKey:"kickboxing",duration:60},{time:"13:00",titleKey:"jiujitsu_nogi",duration:60},{time:"17:00",titleKey:"jiujitsu_kids",duration:60},{time:"18:00",titleKey:"jiujitsu_gi",duration:60},{time:"19:00",titleKey:"muay_thai",duration:60}],saturday:[{time:"09:30",titleKey:"boxing",duration:60},{time:"11:00",titleKey:"muay_thai_family",duration:60}]}},F=[{key:"swim",labelKey:"swim"},{key:"dance",labelKey:"dance_studio"},{key:"fight",labelKey:"fight_club"}],$=[{key:"monday",labelKey:"monday",shortKey:"mon_short"},{key:"tuesday",labelKey:"tuesday",shortKey:"tue_short"},{key:"wednesday",labelKey:"wednesday",shortKey:"wed_short"},{key:"thursday",labelKey:"thursday",shortKey:"thu_short"},{key:"friday",labelKey:"friday",shortKey:"fri_short"},{key:"saturday",labelKey:"saturday",shortKey:"sat_short"}],ScheduleSectionNew=()=>{const{t:a}=m(),[r,z]=e.useState("swim"),[E,I]=e.useState("monday");t.useEffect(()=>{const e=["monday","monday","tuesday","wednesday","thursday","friday","saturday"][(new Date).getDay()];I(e)},[]);const S=v[r][E]||[];return i.jsx(o,{id:"schedule",children:i.jsxs(n,{children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[i.jsx(s,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.5},children:a("sports.schedule.tag","Расписание")}),i.jsx(d,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},dangerouslySetInnerHTML:{__html:a("sports.schedule.title","Расписание <span>занятий</span>")}}),i.jsx(l,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:a("sports.schedule.subtitle","Выберите день недели и запишитесь на занятие")})]}),i.jsxs(c,{children:[i.jsx(p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:F.map(e=>i.jsx(g,{active:r===e.key,onClick:()=>z(e.key),whileHover:{scale:1.05},whileTap:{scale:.95},children:i.jsx("span",{className:"full",children:a(`sports.schedule.categories.${e.labelKey}`)})},e.key))}),i.jsx(p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},children:$.map(e=>i.jsxs(h,{active:E===e.key,onClick:()=>I(e.key),whileHover:{scale:1.05},whileTap:{scale:.95},children:[i.jsx("span",{className:"full",children:a(`sports.schedule.days.${e.labelKey}`)}),i.jsx("span",{className:"short",children:a(`sports.schedule.days.${e.shortKey}`)})]},e.key))}),i.jsx(x,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:0===S.length?i.jsx("div",{style:{textAlign:"center",padding:"3rem",color:"rgba(255,255,255,0.6)",fontSize:"1.1rem",gridColumn:"1 / -1"},children:a("sports.schedule.no_classes","Нет занятий в этот день")}):S.map((e,t)=>i.jsxs(K,{children:[i.jsxs(f,{children:[i.jsx(y,{}),i.jsx("span",{children:e.time})]}),i.jsxs(b,{children:[i.jsx(w,{children:a(`sports.schedule.classes.${e.titleKey}`)}),i.jsx(j,{children:i.jsxs(_,{children:[i.jsx(y,{}),e.duration," ",a("sports.schedule.minutes","мин")]})})]}),i.jsxs(k,{as:"button",onClick:()=>(e=>{const t=a(`sports.schedule.classes.${e.titleKey}`),i=a(`sports.schedule.days.${E}`),o=`Здравствуйте! Хочу записаться на занятие в KAIF.\n\nКатегория: ${a(`sports.schedule.categories.${r}`)}\nЗанятие: ${t}\nДень: ${i}\nВремя: ${e.time}`,n=`https://wa.me/66624805877?text=${encodeURIComponent(o)}`;window.open(n,"_blank")})(e),whileHover:{scale:1.05},whileTap:{scale:.95},children:[i.jsx(u,{}),a("sports.schedule.book","Записаться")]})]},t))},`${r}-${E}`)]})]})})};export{ScheduleSectionNew as default};
