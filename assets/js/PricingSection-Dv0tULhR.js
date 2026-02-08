import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-CfKEYav0.js";import{m as s,n as a,o as t,p as n}from"./react-icons-BDz5tVot.js";import{B as o}from"./BookingModal-D1wbjBVS.js";import{u as c}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-DORsZxsB.js";const l=r.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,p=r.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,m=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(19, 50, 56, 0.25);
    margin-right: 1rem;
  }
`,g=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,u=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  max-width: 550px;
  margin: 0 0 3rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`,f=r.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.4rem;
    margin-bottom: 2rem;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 0.5rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`,d=r.button`
  font-family: 'Jost', sans-serif;
  padding: 0.6rem 1.25rem;
  background: ${e=>e.$active?"#133238":"transparent"};
  color: ${e=>e.$active?"#fffef6":"rgba(19, 50, 56, 0.5)"};
  border: 1px solid ${e=>e.$active?"#133238":"rgba(19, 50, 56, 0.15)"};
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: ${e=>e.$active?"500":"400"};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;

  svg {
    font-size: 0.85rem;
    opacity: ${e=>e.$active?"1":"0.5"};
  }

  &:hover {
    color: ${e=>e.$active?"#fffef6":"#133238"};
    border-color: ${e=>e.$active?"#133238":"rgba(19, 50, 56, 0.4)"};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
`,h=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(19, 50, 56, 0.45);
  margin-bottom: 2rem;
  font-weight: 400;
`,b=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,x=r.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2.25rem 2rem;
  border: 1px solid rgba(19, 50, 56, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transition: all 0.3s ease;

  ${e=>e.$featured&&"\n    border-color: #133238;\n  "}

  &:hover {
    border-color: rgba(19, 50, 56, 0.2);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }

  @media (max-width: 768px) {
    padding: 1.75rem 1.5rem;
  }
`,w=r.div`
  margin-bottom: 1.75rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(19, 50, 56, 0.06);
`,y=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(19, 50, 56, 0.4);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.75rem;
`,$=r.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #133238;
  margin: 0;
  letter-spacing: -0.01em;
  text-transform: uppercase;
`,v=r.div`
  margin-bottom: 2rem;
`,j=r.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 2.75rem;
  font-weight: 800;
  color: #133238;
  line-height: 1;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;

  span {
    font-family: 'Jost', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    color: rgba(19, 50, 56, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;

    span {
      font-size: 1rem;
    }
  }
`,A=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  color: rgba(19, 50, 56, 0.4);
  margin-top: 0.35rem;
  font-weight: 400;
`,k=r.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`,C=r.li`
  font-family: 'Jost', sans-serif;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: rgba(19, 50, 56, 0.7);
  font-size: 0.9rem;
  line-height: 1.5;
  font-weight: 400;

  &::before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    min-width: 5px;
    border-radius: 50%;
    background: rgba(19, 50, 56, 0.2);
    margin-top: 0.5rem;
  }
`,P=r.button`
  font-family: 'Jost', sans-serif;
  display: block;
  width: 100%;
  padding: 1rem;
  background: ${e=>e.$featured?"#133238":"transparent"};
  color: ${e=>e.$featured?"#fffef6":"#133238"};
  border: 1px solid ${e=>e.$featured?"#133238":"rgba(19, 50, 56, 0.2)"};
  border-radius: 50px;
  text-align: center;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.25s ease;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: auto;
  cursor: pointer;

  &:hover {
    background: ${e=>e.$featured?"#1a4a52":"#133238"};
    color: #fffef6;
    border-color: ${e=>e.$featured?"#1a4a52":"#133238"};
  }

  &:active {
    transform: scale(0.98);
  }
`,PricingSection=()=>{const{t:r}=c(),[M,z]=e.useState("premium"),[S,B]=e.useState(!1),[J,_]=e.useState(null),R={dayPass:{icon:i.jsx(s,{}),title:r("pricing.categories.dayPass"),subtitle:r("pricing.subtitles.dayPass"),plans:[{name:"Day Pass",duration:r("pricing.durations.fullDay"),price:"590",features:[r("pricing.features.gymCardio"),r("pricing.features.swimmingPool"),r("pricing.features.steamRoom"),r("pricing.features.iceBarrel"),r("pricing.features.russianSauna")+" & "+r("pricing.features.japanesePool"),r("pricing.features.towelsIncluded")],perMonth:null},{name:"1 Week Pass",duration:r("pricing.durations.week"),price:"1,990",features:[r("pricing.features.gymCardio"),r("pricing.features.swimmingPool"),r("pricing.features.steamRoom"),r("pricing.features.iceBarrel"),r("pricing.features.russianSauna")+" & "+r("pricing.features.japanesePool"),r("pricing.features.towelsIncluded")],perMonth:null}]},clubAccess:{icon:i.jsx(a,{}),title:"Club Access",subtitle:r("pricing.subtitles.withoutBanya"),plans:[{name:"Club Access",duration:r("pricing.durations.month"),price:"2,000",features:[r("pricing.features.gymCardio"),r("pricing.features.swimmingPool"),r("pricing.features.steamRoom"),r("pricing.features.iceBarrel")],perMonth:null},{name:"Club Access",duration:r("pricing.durations.months_3"),price:"4,800",features:[r("pricing.features.gymCardio"),r("pricing.features.swimmingPool"),r("pricing.features.steamRoom"),r("pricing.features.iceBarrel"),`${r("pricing.features.savings")} 20%`],perMonth:"1,600 ฿/мес",featured:!1,popular:!1},{name:"Club Access",duration:r("pricing.durations.months_6"),price:"9,900",features:[r("pricing.features.gymCardio"),r("pricing.features.swimmingPool"),r("pricing.features.steamRoom"),r("pricing.features.iceBarrel"),`${r("pricing.features.savings")} 17%`],perMonth:"1,650 ฿/мес"},{name:"Club Access",duration:r("pricing.durations.months_12"),price:"18,000",features:[r("pricing.features.gymCardio"),r("pricing.features.swimmingPool"),r("pricing.features.steamRoom"),r("pricing.features.iceBarrel"),`${r("pricing.features.maxSavings")} 25%`],perMonth:"1,500 ฿/мес"}]},premium:{icon:i.jsx(t,{}),title:"Club Access+",subtitle:r("pricing.subtitles.allPlusBanya"),plans:[{name:"Club Access+",duration:r("pricing.durations.month"),price:"3,800",features:[r("pricing.features.unlimitedAccess"),r("pricing.features.gymAndBanya"),r("pricing.features.swimmingPool"),r("pricing.features.towelsIncluded")],perMonth:null},{name:"Club Access+",duration:r("pricing.durations.months_3"),price:"9,400",features:[r("pricing.features.unlimitedAccess"),r("pricing.features.gymAndBanya"),r("pricing.features.towelsIncluded"),`${r("pricing.features.savings")} 18%`],perMonth:"3,133 ฿/мес",featured:!1,popular:!1},{name:"Club Access+",duration:r("pricing.durations.months_6"),price:"17,800",features:[r("pricing.features.unlimitedAccess"),r("pricing.features.gymAndBanya"),r("pricing.features.towelsIncluded"),`${r("pricing.features.savings")} 22%`],perMonth:"2,967 ฿/мес"},{name:"Club Access+",duration:r("pricing.durations.months_12"),price:"29,000",features:[r("pricing.features.unlimitedAccess"),r("pricing.features.gymAndBanya"),r("pricing.features.towelsIncluded"),`${r("pricing.features.maxSavings")} 36%`],perMonth:"2,417 ฿/мес"}]},clubAccessSport:{icon:i.jsx(a,{}),title:"Club Access Sport",subtitle:r("pricing.subtitles.clubAccessSport","Club Access + групповые тренировки"),plans:[{name:"Club Access Sport",duration:r("pricing.durations.month"),price:"4,900",features:[r("pricing.features.gymCardio"),r("pricing.features.swimmingPool"),r("pricing.features.steamRoom"),r("pricing.features.iceBarrel"),r("pricing.features.unlimitedGroupTraining","Безлимитные групповые тренировки"),"Fight Club & Motion"],perMonth:null,featured:!0}]},swimming:{icon:i.jsx(n,{}),title:r("pricing.categories.swimming"),subtitle:r("pricing.subtitles.swimmingSchool"),plans:[{name:r("pricing.categories.swimming"),duration:r("pricing.durations.single"),price:"800",features:[r("pricing.features.dayAccess"),r("pricing.features.individualApproach"),r("pricing.features.certifiedInstructor")],perMonth:null},{name:r("pricing.categories.swimming"),duration:r("pricing.durations.classes_8"),price:"3,800",features:[`475 ฿ ${r("pricing.features.perClass")}`,r("pricing.features.validMonths_2"),r("pricing.features.trainingProgram"),`${r("pricing.features.savings")} 41%`],perMonth:null,featured:!1,popular:!1},{name:r("pricing.categories.swimming"),duration:r("pricing.durations.classes_12"),price:"5,500",features:[`458 ฿ ${r("pricing.features.perClass")}`,r("pricing.features.validMonths_3"),r("pricing.features.fullProgram"),`${r("pricing.features.savings")} 43%`],perMonth:null}]}},I=[{key:"dayPass",label:r("pricing.categories.dayPass"),icon:i.jsx(s,{})},{key:"clubAccess",label:r("pricing.categories.clubAccess"),icon:i.jsx(a,{})},{key:"premium",label:r("pricing.categories.clubAccessPlus"),icon:i.jsx(t,{})},{key:"clubAccessSport",label:"Club Access Sport",icon:i.jsx(a,{})},{key:"swimming",label:r("pricing.categories.swimming"),icon:i.jsx(n,{})}],T=R[M];return i.jsxs(l,{id:"pricing",children:[i.jsxs(p,{children:[i.jsx(m,{children:r("pricing.overline","Memberships")}),i.jsx(g,{children:r("pricing.title")}),i.jsx(u,{children:r("pricing.subtitle")}),i.jsx(f,{children:I.map(e=>i.jsxs(d,{$active:M===e.key,onClick:()=>(e=>{const i=window.scrollY;z(e),setTimeout(()=>{window.scrollTo(0,i)},0)})(e.key),children:[e.icon,e.label]},e.key))}),T.subtitle&&i.jsx(h,{children:T.subtitle}),i.jsx(b,{children:T.plans.map((e,s)=>i.jsxs(x,{$featured:e.featured,children:[i.jsxs(w,{children:[i.jsx(y,{children:e.duration}),i.jsx($,{children:e.name})]}),i.jsxs(v,{children:[i.jsxs(j,{children:[e.price," ",i.jsx("span",{children:"฿"})]}),e.perMonth&&i.jsx(A,{children:e.perMonth})]}),i.jsx(k,{children:e.features.map((e,r)=>i.jsx(C,{children:e},r))}),i.jsx(P,{onClick:()=>(e=>{_(e),B(!0)})(e),$featured:e.featured,children:r("pricing.select_plan")})]},`${M}-${s}`))})]}),i.jsx(o,{isOpen:S,onClose:()=>B(!1),service:J?`${J.name} - ${J.duration}`:"",source:"Home - Pricing"})]})};export{PricingSection as default};
