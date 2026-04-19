import{r as e,j as r}from"./react-core-DWAaPJsY.js";import{d as i}from"./styled-components-BY9Yozyu.js";import{m as a,n as s,o as t,q as n}from"./react-icons-BMdwLQZI.js";import{B as o}from"./BookingModal-D1wbjBVS.js";import{u as c}from"./i18n-core-DrMVsQFB.js";import{a9 as p}from"./vendor-misc-Dpgsgh4W.js";const l=i.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,m=i.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,g=i.div`
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
`,u=i.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,d=i.p`
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
`,f=i.div`
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
`,b=i.button`
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
`,h=i.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(19, 50, 56, 0.45);
  margin-bottom: 2rem;
  font-weight: 400;
`,x=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,w=i.div`
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

  ${e=>e.$popular&&"\n    border-color: #133238;\n    box-shadow: 0 10px 40px rgba(19, 50, 56, 0.08);\n  "}

  &:hover {
    border-color: rgba(19, 50, 56, 0.2);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }

  @media (max-width: 768px) {
    padding: 1.75rem 1.5rem;
  }
`,y=i.div`
  position: absolute;
  top: 0;
  right: 1.75rem;
  transform: translateY(-50%);
  background: #133238;
  color: #fffef6;
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.45rem 0.9rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  z-index: 2;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #fffef6;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    right: 1.25rem;
    font-size: 0.6rem;
    padding: 0.4rem 0.8rem;
  }
`,v=i.div`
  margin-bottom: 1.75rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(19, 50, 56, 0.06);
`,j=i.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(19, 50, 56, 0.4);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.75rem;
`,$=i.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #133238;
  margin: 0;
  letter-spacing: -0.01em;
  text-transform: uppercase;
`,k=i.div`
  margin-bottom: 2rem;
`,A=i.div`
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
`,C=i.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  color: rgba(19, 50, 56, 0.4);
  margin-top: 0.35rem;
  font-weight: 400;
`,P=i.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`,z=i.li`
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
`,M=i.button`
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
`,S=i.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`,B=i.button`
  font-family: 'Jost', sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #133238;
  border: 1px solid rgba(19, 50, 56, 0.25);
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    background-color 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.45s cubic-bezier(0.16, 1, 0.3, 1);

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    background: #133238;
    color: #fffef6;
    border-color: #133238;

    svg { transform: translateX(4px); }
  }

  &:active { transform: scale(0.98); }
`,PricingSection=()=>{const{t:i}=c(),J=p(),[I,_]=e.useState("dayPass"),[R,D]=e.useState(!1),[T,L]=e.useState(null),W={dayPass:{icon:r.jsx(a,{}),title:i("pricing.categories.dayPass"),subtitle:i("pricing.subtitles.dayPass"),plans:[{name:"Day Pass",duration:i("pricing.durations.fullDay"),price:"590",features:[i("pricing.features.gymCardio"),i("pricing.features.swimmingPool"),i("pricing.features.steamRoom"),i("pricing.features.iceBarrel"),i("pricing.features.russianSauna")+" & "+i("pricing.features.japanesePool"),i("pricing.features.groupSteamIncluded"),i("pricing.features.towelsIncluded")],perMonth:null,popular:!0},{name:"1 Week Pass",duration:i("pricing.durations.week"),price:"1,990",features:[i("pricing.features.gymCardio"),i("pricing.features.swimmingPool"),i("pricing.features.steamRoom"),i("pricing.features.iceBarrel"),i("pricing.features.russianSauna")+" & "+i("pricing.features.japanesePool"),i("pricing.features.groupSteamIncluded"),i("pricing.features.towelsIncluded")],perMonth:null}]},clubAccess:{icon:r.jsx(s,{}),title:"Club Access",subtitle:i("pricing.subtitles.withoutBanya"),plans:[{name:"Club Access",duration:i("pricing.durations.month"),price:"2,000",features:[i("pricing.features.gymCardio"),i("pricing.features.swimmingPool"),i("pricing.features.steamRoom"),i("pricing.features.iceBarrel")],perMonth:null},{name:"Club Access",duration:i("pricing.durations.months_3"),price:"4,800",features:[i("pricing.features.gymCardio"),i("pricing.features.swimmingPool"),i("pricing.features.steamRoom"),i("pricing.features.iceBarrel"),`${i("pricing.features.savings")} 20%`],perMonth:"1,600 ฿/мес",featured:!1,popular:!1},{name:"Club Access",duration:i("pricing.durations.months_6"),price:"9,900",features:[i("pricing.features.gymCardio"),i("pricing.features.swimmingPool"),i("pricing.features.steamRoom"),i("pricing.features.iceBarrel"),`${i("pricing.features.savings")} 17%`],perMonth:"1,650 ฿/мес"},{name:"Club Access",duration:i("pricing.durations.months_12"),price:"18,000",features:[i("pricing.features.gymCardio"),i("pricing.features.swimmingPool"),i("pricing.features.steamRoom"),i("pricing.features.iceBarrel"),`${i("pricing.features.maxSavings")} 25%`],perMonth:"1,500 ฿/мес"}]},premium:{icon:r.jsx(t,{}),title:"Club Access+",subtitle:i("pricing.subtitles.allPlusBanya"),plans:[{name:"Club Access+",duration:i("pricing.durations.month"),price:"3,800",features:[i("pricing.features.unlimitedAccess"),i("pricing.features.gymAndBanya"),i("pricing.features.swimmingPool"),i("pricing.features.groupSteamIncluded"),i("pricing.features.towelsIncluded")],perMonth:null},{name:"Club Access+",duration:i("pricing.durations.months_3"),price:"9,400",features:[i("pricing.features.unlimitedAccess"),i("pricing.features.gymAndBanya"),i("pricing.features.groupSteamIncluded"),i("pricing.features.towelsIncluded"),`${i("pricing.features.savings")} 18%`],perMonth:"3,133 ฿/мес",featured:!1,popular:!1},{name:"Club Access+",duration:i("pricing.durations.months_6"),price:"17,800",features:[i("pricing.features.unlimitedAccess"),i("pricing.features.gymAndBanya"),i("pricing.features.groupSteamIncluded"),i("pricing.features.towelsIncluded"),`${i("pricing.features.savings")} 22%`],perMonth:"2,967 ฿/мес"},{name:"Club Access+",duration:i("pricing.durations.months_12"),price:"29,000",features:[i("pricing.features.unlimitedAccess"),i("pricing.features.gymAndBanya"),i("pricing.features.groupSteamIncluded"),i("pricing.features.towelsIncluded"),`${i("pricing.features.maxSavings")} 36%`],perMonth:"2,417 ฿/мес"}]},clubAccessSport:{icon:r.jsx(s,{}),title:"Club Access Sport",subtitle:i("pricing.subtitles.clubAccessSport","Club Access+ + групповые тренировки"),plans:[{name:"Club Access Sport",duration:i("pricing.durations.month"),price:"4,900",features:[i("pricing.features.gymCardio"),i("pricing.features.swimmingPool"),i("pricing.features.steamRoom"),i("pricing.features.iceBarrel"),i("pricing.features.unlimitedDanceAndFight","Неограниченные тренировки в танцевальной студии и файт-клабе")],perMonth:null}]},swimming:{icon:r.jsx(n,{}),title:i("pricing.categories.swimming"),subtitle:i("pricing.subtitles.swimmingSchool"),plans:[{name:i("pricing.categories.swimming"),duration:i("pricing.durations.single"),price:"800",features:[i("pricing.features.dayAccess"),i("pricing.features.individualApproach"),i("pricing.features.certifiedInstructor")],perMonth:null},{name:i("pricing.categories.swimming"),duration:i("pricing.durations.classes_8"),price:"3,800",features:[`475 ฿ ${i("pricing.features.perClass")}`,i("pricing.features.validMonths_2"),i("pricing.features.trainingProgram"),`${i("pricing.features.savings")} 41%`],perMonth:null,featured:!1,popular:!1},{name:i("pricing.categories.swimming"),duration:i("pricing.durations.classes_12"),price:"5,500",features:[`458 ฿ ${i("pricing.features.perClass")}`,i("pricing.features.validMonths_3"),i("pricing.features.fullProgram"),`${i("pricing.features.savings")} 43%`],perMonth:null}]}},X=[{key:"dayPass",label:i("pricing.categories.dayPass"),icon:r.jsx(a,{})},{key:"clubAccess",label:i("pricing.categories.clubAccess"),icon:r.jsx(s,{})},{key:"premium",label:i("pricing.categories.clubAccessPlus"),icon:r.jsx(t,{})},{key:"clubAccessSport",label:"Club Access Sport",icon:r.jsx(s,{})},{key:"swimming",label:i("pricing.categories.swimming"),icon:r.jsx(n,{})}],Y=W[I];return r.jsxs(l,{id:"pricing",children:[r.jsxs(m,{children:[r.jsx(g,{children:i("pricing.overline","Memberships")}),r.jsx(u,{children:i("pricing.title")}),r.jsx(d,{children:i("pricing.subtitle")}),r.jsx(f,{children:X.map(e=>r.jsxs(b,{$active:I===e.key,onClick:()=>(e=>{const r=window.scrollY;_(e),setTimeout(()=>{window.scrollTo(0,r)},0)})(e.key),children:[e.icon,e.label]},e.key))}),Y.subtitle&&r.jsx(h,{children:Y.subtitle}),r.jsx(x,{children:Y.plans.map((e,a)=>r.jsxs(w,{$featured:e.featured,$popular:e.popular,children:[e.popular&&r.jsx(y,{children:i("pricing.mostPopular","Most Popular")}),r.jsxs(v,{children:[r.jsx(j,{children:e.duration}),r.jsx($,{children:e.name})]}),r.jsxs(k,{children:[r.jsxs(A,{children:[e.price," ",r.jsx("span",{children:"฿"})]}),e.perMonth&&r.jsx(C,{children:e.perMonth})]}),r.jsx(P,{children:e.features.map((e,i)=>r.jsx(z,{children:e},i))}),r.jsx(M,{onClick:()=>(e=>{L(e),D(!0)})(e),$featured:e.featured,children:i("pricing.select_plan")})]},`${I}-${a}`))}),r.jsx(S,{children:r.jsxs(B,{onClick:()=>{J("/services"),window.scrollTo({top:0,behavior:"instant"})},children:[i("pricing.view_all_prices","Все услуги и цены"),r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",children:r.jsx("path",{d:"M3 7h8M8 4l3 3-3 3",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]}),r.jsx(o,{isOpen:R,onClose:()=>D(!1),service:T?`${T.name} - ${T.duration}`:"",source:"Home - Pricing"})]})};export{PricingSection as default};
