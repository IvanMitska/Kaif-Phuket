import{r as e,j as t}from"./react-core-DWAaPJsY.js";import{d as i}from"./styled-components-BY9Yozyu.js";import{u as a}from"./i18n-core-DrMVsQFB.js";import{h as r}from"./heroicons-lHooInKB.js";import"./vendor-misc-Dpgsgh4W.js";const s=i.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,o=i.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,n=i.div`
  text-align: center;
  margin-bottom: 3rem;
`,d=i.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 1.25rem;
  display: inline-flex;
  align-items: center;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(19, 50, 56, 0.2);
  }

  &::before { margin-right: 1rem; }
  &::after { margin-left: 1rem; }
`,l=i.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
`,m=i.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,y=i.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`,c=i.button`
  padding: 0.65rem 1.25rem;
  background: ${e=>e.$active?"#133238":"transparent"};
  color: ${e=>e.$active?"#fffef6":"rgba(19, 50, 56, 0.55)"};
  border: 1px solid ${e=>e.$active?"#133238":"rgba(19, 50, 56, 0.15)"};
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: ${e=>e.$active?"600":"400"};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #133238;
    color: ${e=>e.$active?"#fffef6":"#133238"};
  }

  .short { display: none; }
  .full { display: inline; }

  @media (max-width: 768px) {
    padding: 0.55rem 1rem;
    font-size: 0.75rem;
  }
`,h=i(c)`
  @media (max-width: 768px) {
    .short { display: inline; }
    .full { display: none; }
  }
`,p=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  min-height: 220px;
  align-items: start;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    min-height: 220px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    min-height: auto;
  }
`,u=i.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.35s ease both;
  animation-delay: ${e=>e.$delay||"0s"};

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`,f=i.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 800;
  color: #133238;
  background: rgba(19, 50, 56, 0.04);
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  width: fit-content;

  svg {
    width: 14px;
    height: 14px;
    color: rgba(19, 50, 56, 0.4);
  }
`,g=i.h4`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: #133238;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.01em;
`,x=i.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(19, 50, 56, 0.45);

  svg {
    width: 14px;
    height: 14px;
    color: rgba(19, 50, 56, 0.3);
  }
`,b=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.25rem;
  background: transparent;
  color: #133238;
  border: 1px solid rgba(19, 50, 56, 0.15);
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #133238;
    color: #fffef6;
    border-color: #133238;
  }
`,K=i.div`
  text-align: center;
  padding: 3rem;
  animation: fadeInUp 0.35s ease both;
  color: rgba(19, 50, 56, 0.4);
  font-family: 'Jost', sans-serif;
  font-size: 1rem;
  grid-column: 1 / -1;
`,w={swim:{monday:[],tuesday:[],wednesday:[],thursday:[{time:"09:00",titleKey:"adults_group",duration:60}],friday:[],saturday:[]},dance:{monday:[{time:"09:00",titleKey:"yoga",duration:60},{time:"13:10",titleKey:"yoga_pro",duration:50}],tuesday:[{time:"09:00",titleKey:"stretching",duration:60},{time:"16:00",titleKey:"stretching",duration:60},{time:"19:00",titleKey:"high_heels",duration:60},{time:"20:00",titleKey:"girli_hiphop",duration:60}],wednesday:[{time:"13:10",titleKey:"yoga_pro",duration:50}],thursday:[{time:"09:00",titleKey:"stretching",duration:60},{time:"16:00",titleKey:"stretching",duration:60},{time:"19:00",titleKey:"high_heels",duration:60},{time:"20:00",titleKey:"girli_hiphop",duration:60}],friday:[{time:"09:00",titleKey:"yoga",duration:60},{time:"13:10",titleKey:"yoga_pro",duration:50}],saturday:[]},fight:{monday:[{time:"09:30",titleKey:"muay_thai",duration:60},{time:"11:00",titleKey:"kickboxing",duration:60},{time:"18:00",titleKey:"jiujitsu",duration:90}],tuesday:[{time:"09:30",titleKey:"boxing",duration:60}],wednesday:[{time:"09:30",titleKey:"muay_thai",duration:60},{time:"11:00",titleKey:"kickboxing",duration:60},{time:"18:00",titleKey:"jiujitsu",duration:90}],thursday:[{time:"09:30",titleKey:"boxing",duration:60}],friday:[{time:"09:30",titleKey:"muay_thai",duration:60},{time:"11:00",titleKey:"kickboxing",duration:60},{time:"18:00",titleKey:"jiujitsu",duration:90}],saturday:[{time:"09:30",titleKey:"boxing",duration:60}]}},k=[{key:"swim",labelKey:"swim"},{key:"dance",labelKey:"dance_studio"},{key:"fight",labelKey:"fight_club"}],j=[{key:"monday",labelKey:"monday",shortKey:"mon_short"},{key:"tuesday",labelKey:"tuesday",shortKey:"tue_short"},{key:"wednesday",labelKey:"wednesday",shortKey:"wed_short"},{key:"thursday",labelKey:"thursday",shortKey:"thu_short"},{key:"friday",labelKey:"friday",shortKey:"fri_short"},{key:"saturday",labelKey:"saturday",shortKey:"sat_short"}],ScheduleSectionNew=()=>{const{t:i}=a(),[$,v]=e.useState("swim"),[_,z]=e.useState("monday");e.useEffect(()=>{const e=(new Date).getDay();z(["monday","monday","tuesday","wednesday","thursday","friday","saturday"][e])},[]);const J=w[$][_]||[];return t.jsx(s,{id:"schedule",children:t.jsxs(o,{children:[t.jsxs(n,{children:[t.jsx(d,{children:i("sports.schedule.tag","Schedule")}),t.jsx(l,{children:i("sports.schedule.title_plain","Class Schedule")}),t.jsx(m,{children:i("sports.schedule.subtitle","Choose a day and sign up for a class")})]}),t.jsx(y,{children:k.map(e=>t.jsx(c,{$active:$===e.key,onClick:()=>v(e.key),children:t.jsx("span",{className:"full",children:i(`sports.schedule.categories.${e.labelKey}`)})},e.key))}),t.jsx(y,{children:j.map(e=>t.jsxs(h,{$active:_===e.key,onClick:()=>z(e.key),children:[t.jsx("span",{className:"full",children:i(`sports.schedule.days.${e.labelKey}`)}),t.jsx("span",{className:"short",children:i(`sports.schedule.days.${e.shortKey}`)})]},e.key))}),t.jsx(p,{children:0===J.length?t.jsx(K,{children:i("sports.schedule.no_classes","No classes on this day")}):J.map((e,a)=>t.jsxs(u,{$delay:.06*a+"s",children:[t.jsxs(f,{children:[t.jsx(r,{}),t.jsx("span",{children:e.time})]}),t.jsx(g,{children:i(`sports.schedule.classes.${e.titleKey}`)}),t.jsxs(x,{children:[t.jsx(r,{}),e.duration," ",i("sports.schedule.minutes","min")]}),t.jsx(b,{onClick:()=>(e=>{const t=i(`sports.schedule.classes.${e.titleKey}`),a=i(`sports.schedule.days.${_}`),r=`Hello! I would like to book a class at KAIF.\n\nCategory: ${i(`sports.schedule.categories.${$}`)}\nClass: ${t}\nDay: ${a}\nTime: ${e.time}`;window.open(`https://wa.me/66624805877?text=${encodeURIComponent(r)}`,"_blank")})(e),children:i("sports.schedule.book","Sign Up")})]},a))},`${$}-${_}`)]})})};export{ScheduleSectionNew as default};
