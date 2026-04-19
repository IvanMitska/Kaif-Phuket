import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-BY9Yozyu.js";import{m as a,n as s,o as t,p as n,q as o,r as l,s as c,t as p,e as d,u as m,v as g,w as u,x as f,y as h,d as b,z as x,A as v,C as y}from"./react-icons-BMdwLQZI.js";import{P as w}from"./PageScrollReset-CpzNA0Jq.js";import{P as j}from"./PageHead-DVihzIO-.js";import{B as k}from"./BookingModal-D1wbjBVS.js";import{P as _}from"./ParallaxBackground-9F-giXTZ.js";import{g as $}from"./spaData-CEv-faZ5.js";import{u as z}from"./i18n-core-DrMVsQFB.js";import{A as C,m as S}from"./framer-motion-Czr_qtvO.js";import"./vendor-misc-Dpgsgh4W.js";import"./react-helmet-xz8aecK8.js";const P=r.section`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  min-height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  overflow: hidden;
  background: #000;

  @media (max-width: 768px) {
    min-height: 520px;
    height: 85vh;
    height: 85dvh;
  }
`,A=r.div`
  position: absolute;
  inset: 0;
  background-image: url('/images/home/terrace.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
`,M=r.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.45) 50%,
    rgba(0, 0, 0, 0.55) 100%
  );
  z-index: 2;
`,J=r.div`
  position: relative;
  z-index: 3;
  max-width: 820px;
  margin: 0 auto;
  padding: 0 1.25rem;
`,B=r.section`
  background-color: #fffef6;
  padding: 2rem 0 5rem;

  @media (min-width: 768px) {
    padding: 3rem 0 7rem;
  }
`,T=r.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,I=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(255, 255, 255, 0.5);
  }

  &::before { margin-right: 1rem; }
  &::after { margin-left: 1rem; }
`,R=r.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0 0 1.5rem;
`,F=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  margin: 0 auto;
  max-width: 620px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,L=r.div`
  border-top: 1px solid rgba(19, 50, 56, 0.12);
`,D=r.div`
  border-bottom: 1px solid rgba(19, 50, 56, 0.12);
`,K=r.button`
  width: 100%;
  display: grid;
  grid-template-columns: 56px 1fr auto;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 40px 1fr auto;
    gap: 1rem;
    padding: 1.5rem 0.25rem;
  }
`,O=r.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(19, 50, 56, 0.4);
  letter-spacing: 0.1em;
  transition: color 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${K}:hover & { color: #133238; }

  @media (max-width: 768px) { font-size: 0.7rem; }
`,X=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 0;
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;

  ${K}:hover & { transform: translateX(10px); }

  @media (max-width: 768px) {
    ${K}:hover & { transform: translateX(6px); }
  }
`,N=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.35rem, 3.2vw, 2.25rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0;
`,U=r.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;

  @media (max-width: 768px) { font-size: 0.85rem; }
`,W=r.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 768px) { gap: 0.75rem; }
`,Y=r.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.55);
  padding: 0.4rem 0.9rem;
  border: 1px solid rgba(19, 50, 56, 0.15);
  border-radius: 50px;
  white-space: nowrap;
  transition:
    color 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${K}:hover & {
    color: #133238;
    border-color: rgba(19, 50, 56, 0.35);
  }

  @media (max-width: 768px) { display: none; }
`,q=r(S.span)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(19, 50, 56, 0.2);
  border-radius: 50%;
  color: #133238;
  flex-shrink: 0;
  transition:
    background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${K}:hover & {
    border-color: rgba(19, 50, 56, 0.6);
    background-color: rgba(19, 50, 56, 0.06);
  }

  @media (max-width: 768px) { width: 32px; height: 32px; }
`,G=r(S.div)`
  overflow: hidden;
`,H=r.div`
  padding: 0.25rem 0 3rem;

  @media (max-width: 768px) { padding: 0.25rem 0 2rem; }
`,E=r.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.4rem;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 0.5rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }
`,Q=r.button`
  font-family: 'Jost', sans-serif;
  padding: 0.55rem 1.15rem;
  background: ${e=>e.$active?"#133238":"transparent"};
  color: ${e=>e.$active?"#fffef6":"rgba(19, 50, 56, 0.55)"};
  border: 1px solid ${e=>e.$active?"#133238":"rgba(19, 50, 56, 0.15)"};
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: ${e=>e.$active?"500":"400"};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;

  svg { font-size: 0.85rem; opacity: ${e=>e.$active?"1":"0.5"}; }

  &:hover {
    color: ${e=>e.$active?"#fffef6":"#133238"};
    border-color: ${e=>e.$active?"#133238":"rgba(19, 50, 56, 0.4)"};
  }
`,V=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Z=r.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem 1.75rem;
  border: 1px solid rgba(19, 50, 56, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transition: all 0.3s ease;

  ${e=>e.$popular&&"\n    border-color: #133238;\n    box-shadow: 0 10px 40px rgba(19, 50, 56, 0.08);\n  "}

  &:hover {
    border-color: rgba(19, 50, 56, 0.2);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }

  @media (max-width: 768px) {
    padding: 1.75rem 1.5rem;
  }
`,ee=r.div`
  position: absolute;
  top: 0;
  right: 1.5rem;
  transform: translateY(-50%);
  background: #133238;
  color: #fffef6;
  font-family: 'Jost', sans-serif;
  font-size: 0.62rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.4rem 0.85rem;
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
`,ie=r.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(19, 50, 56, 0.06);
`,re=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.72rem;
  color: rgba(19, 50, 56, 0.4);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0 0 0.6rem;
`,ae=r.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: #133238;
  margin: 0;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  line-height: 1.2;
`,se=r.div`
  margin-bottom: 1.5rem;
`,te=r.span`
  display: block;
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 0.35rem;
`,ne=r.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 2.3rem;
  font-weight: 800;
  color: #133238;
  line-height: 1;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  flex-wrap: wrap;

  span.currency {
    font-family: 'Jost', sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
    color: rgba(19, 50, 56, 0.4);
  }

  span.range {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: rgba(19, 50, 56, 0.35);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    span.currency { font-size: 1rem; }
    span.range { font-size: 1.3rem; }
  }
`,oe=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.82rem;
  color: rgba(19, 50, 56, 0.4);
  margin-top: 0.35rem;
  font-weight: 400;
`,le=r.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ce=r.li`
  font-family: 'Jost', sans-serif;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: rgba(19, 50, 56, 0.7);
  font-size: 0.88rem;
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
`,pe=r.button`
  font-family: 'Jost', sans-serif;
  display: block;
  width: 100%;
  padding: 0.9rem;
  background: ${e=>e.$featured?"#133238":"transparent"};
  color: ${e=>e.$featured?"#fffef6":"#133238"};
  border: 1px solid ${e=>e.$featured?"#133238":"rgba(19, 50, 56, 0.2)"};
  border-radius: 50px;
  text-align: center;
  font-weight: 500;
  transition: all 0.25s ease;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: auto;
  cursor: pointer;

  &:hover {
    background: ${e=>e.$featured?"#1a4a52":"#133238"};
    color: #fffef6;
    border-color: ${e=>e.$featured?"#1a4a52":"#133238"};
  }
  &:active { transform: scale(0.98); }
`,de=r.section`
  position: relative;
  background-color: #133238;
  padding: 7rem 0;
  text-align: center;
  color: #fffef6;
  overflow: hidden;
  isolation: isolate;
`,me=r.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
`,ge=r.div`
  position: relative;
  z-index: 2;
`,ue=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
  text-transform: uppercase;
  color: #fffef6;
`,fe=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 254, 246, 0.7);
  max-width: 500px;
  margin: 0 auto 2rem;
`,he=r.button`
  font-family: 'Jost', sans-serif;
  padding: 1rem 2.5rem;
  background: #fffef6;
  color: #133238;
  border: 1px solid #fffef6;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover { background: transparent; color: #fffef6; }
`,Chevron=()=>i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:i.jsx("path",{d:"M3 5l4 4 4-4",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})}),parseBanyaPrice=e=>{if(!e)return"";const i=String(e).match(/([\d.,]+)/);return i?i[1]:e},fmt=e=>"number"==typeof e?e.toLocaleString("ru-RU"):e,spaServiceToPlan=(e,i)=>{let r,a;const s=[];if(e.description&&s.push(e.description),e.durations&&e.durations.length>0){r=e.durations.join(" / ")+` ${i("services_page.min","мин")}`,e.durations.length>1&&s.push(i("services_page.features.multi_duration","Выбор длительности"))}if(null!=e.priceFrom)a={value:fmt(e.priceFrom),from:!0},r=r||i("services_page.from_label","От");else if(null!=e.price)a={value:fmt(e.price)};else if(e.prices&&e.prices.length>0){const i=e.prices[0],r=e.prices[e.prices.length-1];a=i===r?{value:fmt(i)}:{value:fmt(i),range:fmt(r)}}else a={value:"—"};return r||(r=i("services_page.per_visit","За визит")),{id:e.id,overline:r,name:e.name,price:a,features:s,popular:Boolean(e.popular)}},capPopular=e=>{let i=!1;return e.map(e=>e.popular&&!i?(i=!0,e):e.popular?{...e,popular:!1}:e)},CategoryAccordion=({index:e,title:r,subtitle:a,count:s,isOpen:t,onToggle:n,children:o})=>i.jsxs(D,{children:[i.jsxs(K,{onClick:n,"aria-expanded":t,children:[i.jsx(O,{children:String(e).padStart(2,"0")}),i.jsxs(X,{children:[i.jsx(N,{children:r}),a&&i.jsx(U,{children:a})]}),i.jsxs(W,{children:["number"==typeof s&&s>0&&i.jsx(Y,{children:s}),i.jsx(q,{animate:{rotate:t?180:0},transition:{duration:.3,ease:[.16,1,.3,1]},children:i.jsx(Chevron,{})})]})]}),i.jsx(C,{initial:!1,children:t&&i.jsx(G,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.4,ease:[.16,1,.3,1]},children:i.jsx(H,{children:o})},"body")})]}),PlanCard=({plan:e,selectLabel:r,onSelect:a})=>i.jsxs(Z,{$popular:e.popular,children:[e.popular&&i.jsx(ee,{children:r.popular}),i.jsxs(ie,{children:[i.jsx(re,{children:e.overline}),i.jsx(ae,{children:e.name})]}),i.jsxs(se,{children:[i.jsxs(ne,{children:[e.price.from&&i.jsx(te,{children:r.from}),e.price.value," ",i.jsx("span",{className:"currency",children:"฿"}),e.price.range&&i.jsxs("span",{className:"range",children:["– ",e.price.range]})]}),e.perMonth&&i.jsx(oe,{children:e.perMonth})]}),i.jsx(le,{children:e.features.map((e,r)=>i.jsx(ce,{children:e},r))}),i.jsx(pe,{$featured:e.popular,onClick:()=>a(e),children:r.button})]}),be={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05,delayChildren:.05}},exit:{opacity:0,transition:{duration:.18,ease:[.4,0,1,1]}}},xe={hidden:{opacity:0,y:16},visible:{opacity:1,y:0,transition:{duration:.45,ease:[.16,1,.3,1]}},exit:{opacity:0,y:-8,transition:{duration:.18,ease:[.4,0,1,1]}}},ve=r(S.div)`
  display: flex;
  height: 100%;

  & > * { width: 100%; }
`,TabbedGrid=({groups:e,activeKey:r,onTabChange:a,selectLabel:s,onSelect:t})=>{const n=e.length>1,o=e.find(e=>e.key===r)||e[0];return i.jsxs(i.Fragment,{children:[n&&i.jsx(E,{children:e.map(e=>i.jsxs(Q,{$active:r===e.key,onClick:()=>a(e.key),children:[e.icon,e.label]},e.key))}),i.jsx(C,{mode:"wait",initial:!1,children:i.jsx(V,{as:S.div,variants:be,initial:"hidden",animate:"visible",exit:"exit",children:o.plans.map(e=>i.jsx(ve,{variants:xe,children:i.jsx(PlanCard,{plan:e,selectLabel:s,onSelect:t})},e.id||e.name))},o.key)})]})},ServicesPage=()=>{const{t:r}=z(),[C,S]=e.useState(()=>new Set(["memberships"])),[D,K]=e.useState(!1),[O,X]=e.useState(null),[N,U]=e.useState({}),{allServices:W}=e.useMemo(()=>$(r),[r]),Y=e.useCallback((...e)=>W.filter(i=>e.includes(i.category)),[W]),q=e.useMemo(()=>[{key:"dayPass",label:r("pricing.categories.dayPass","Day Pass"),icon:i.jsx(a,{}),plans:[{id:"day-pass",name:"Day Pass",overline:r("pricing.durations.fullDay","Полный день"),price:{value:"590"},features:[r("pricing.features.gymCardio","Тренажерный зал и кардио"),r("pricing.features.swimmingPool","Бассейн"),r("pricing.features.steamRoom","Парная и сауна"),r("pricing.features.iceBarrel","Купель и ледяная бочка"),r("pricing.features.groupSteamIncluded","Групповое парение включено"),r("pricing.features.towelsIncluded","Полотенца включены")],popular:!0},{id:"week-pass",name:"1 Week Pass",overline:r("pricing.durations.week","1 неделя"),price:{value:"1,990"},features:[r("pricing.features.gymCardio"),r("pricing.features.swimmingPool"),r("pricing.features.steamRoom"),r("pricing.features.iceBarrel"),r("pricing.features.groupSteamIncluded"),r("pricing.features.towelsIncluded")]}]},{key:"clubAccess",label:"Club Access",icon:i.jsx(s,{}),plans:[{id:"ca-1m",name:"Club Access",overline:r("pricing.durations.month","1 месяц"),price:{value:"2,000"},features:[r("pricing.features.gymCardio"),r("pricing.features.swimmingPool"),r("pricing.features.steamRoom"),r("pricing.features.iceBarrel")]},{id:"ca-3m",name:"Club Access",overline:r("pricing.durations.months_3","3 месяца"),price:{value:"4,800"},perMonth:"1,600 ฿/мес",features:[r("pricing.features.gymCardio"),r("pricing.features.swimmingPool"),r("pricing.features.steamRoom"),`${r("pricing.features.savings","Экономия")} 20%`]},{id:"ca-6m",name:"Club Access",overline:r("pricing.durations.months_6","6 месяцев"),price:{value:"9,900"},perMonth:"1,650 ฿/мес",features:[r("pricing.features.gymCardio"),r("pricing.features.swimmingPool"),r("pricing.features.steamRoom"),`${r("pricing.features.savings","Экономия")} 17%`]},{id:"ca-12m",name:"Club Access",overline:r("pricing.durations.months_12","12 месяцев"),price:{value:"18,000"},perMonth:"1,500 ฿/мес",features:[r("pricing.features.gymCardio"),r("pricing.features.swimmingPool"),r("pricing.features.steamRoom"),`${r("pricing.features.maxSavings","Макс. экономия")} 25%`],popular:!0}]},{key:"premium",label:"Club Access+",icon:i.jsx(t,{}),plans:[{id:"cap-1m",name:"Club Access+",overline:r("pricing.durations.month"),price:{value:"3,800"},features:[r("pricing.features.unlimitedAccess","Безлимитный доступ"),r("pricing.features.gymAndBanya","Зал и баня"),r("pricing.features.swimmingPool"),r("pricing.features.groupSteamIncluded"),r("pricing.features.towelsIncluded")]},{id:"cap-3m",name:"Club Access+",overline:r("pricing.durations.months_3"),price:{value:"9,400"},perMonth:"3,133 ฿/мес",features:[r("pricing.features.unlimitedAccess"),r("pricing.features.gymAndBanya"),r("pricing.features.groupSteamIncluded"),`${r("pricing.features.savings")} 18%`]},{id:"cap-6m",name:"Club Access+",overline:r("pricing.durations.months_6"),price:{value:"17,800"},perMonth:"2,967 ฿/мес",features:[r("pricing.features.unlimitedAccess"),r("pricing.features.gymAndBanya"),r("pricing.features.groupSteamIncluded"),`${r("pricing.features.savings")} 22%`]},{id:"cap-12m",name:"Club Access+",overline:r("pricing.durations.months_12"),price:{value:"29,000"},perMonth:"2,417 ฿/мес",features:[r("pricing.features.unlimitedAccess"),r("pricing.features.gymAndBanya"),r("pricing.features.groupSteamIncluded"),`${r("pricing.features.maxSavings")} 36%`],popular:!0}]},{key:"clubAccessSport",label:"Club Access Sport",icon:i.jsx(n,{}),plans:[{id:"cas-1m",name:"Club Access Sport",overline:r("pricing.durations.month"),price:{value:"4,900"},features:[r("pricing.features.gymCardio"),r("pricing.features.swimmingPool"),r("pricing.features.steamRoom"),r("pricing.features.iceBarrel"),r("pricing.features.unlimitedDanceAndFight","Неограниченные тренировки в танцевальной студии и файт-клабе")],popular:!0}]},{key:"swimming",label:r("pricing.categories.swimming","Плавание"),icon:i.jsx(o,{}),plans:[{id:"sw-1",name:r("pricing.categories.swimming"),overline:r("pricing.durations.single","Разовое"),price:{value:"800"},features:[r("pricing.features.individualApproach","Индивидуальный подход"),r("pricing.features.certifiedInstructor","Сертифицированный инструктор")]},{id:"sw-8",name:r("pricing.categories.swimming"),overline:r("pricing.durations.classes_8","8 занятий"),price:{value:"3,800"},features:[`475 ฿ ${r("pricing.features.perClass","за занятие")}`,r("pricing.features.validMonths_2","Действует 2 месяца"),r("pricing.features.trainingProgram","Программа тренировок"),`${r("pricing.features.savings")} 41%`]},{id:"sw-12",name:r("pricing.categories.swimming"),overline:r("pricing.durations.classes_12","12 занятий"),price:{value:"5,500"},features:[`458 ฿ ${r("pricing.features.perClass","за занятие")}`,r("pricing.features.validMonths_3","Действует 3 месяца"),r("pricing.features.fullProgram","Полная программа"),`${r("pricing.features.savings")} 43%`],popular:!0}]}],[r]),G=e.useMemo(()=>{const toPlan=e=>e.map(e=>((e,i)=>({id:e.id,overline:e.subtitle,name:e.title,price:{value:parseBanyaPrice(e.price)},features:[e.description,`${e.duration} ${i("services_page.duration_label","длительность")}`].filter(Boolean),popular:!1}))((e=>({id:e,title:r(`banya.services.rituals.${e}.title`),subtitle:r(`banya.services.rituals.${e}.subtitle`),duration:r(`banya.services.rituals.${e}.duration`),price:r(`banya.services.rituals.${e}.price`),description:r(`banya.services.rituals.${e}.description`)}))(e),r));return[{key:"classic",label:r("services_page.banya_groups.classic","Классика"),icon:i.jsx(l,{}),plans:toPlan(["intro","lady","classic"]).map((e,i)=>({...e,popular:2===i}))},{key:"intense",label:r("services_page.banya_groups.intense","Интенсив"),icon:i.jsx(n,{}),plans:toPlan(["artesian","gravity","salt_fire","warrior_path","stalwar"]).map((e,i)=>({...e,popular:0===i}))},{key:"signature",label:r("services_page.banya_groups.signature","Авторские"),icon:i.jsx(c,{}),plans:toPlan(["sports","four_hands","honey","valhalla","royal"]).map((e,i)=>({...e,popular:4===i}))}]},[r]),H=e.useMemo(()=>{const e=Y("massage"),pickById=i=>capPopular(i.map(i=>e.find(e=>e.id===i)).filter(Boolean).map(e=>spaServiceToPlan(e,r)));return[{key:"relax",label:r("services_page.massage_groups.relax","Расслабляющий"),icon:i.jsx(l,{}),plans:pickById(["thai-massage","oil-massage","oil-scrub","foot-massage","face-massage"])},{key:"therapeutic",label:r("services_page.massage_groups.therapeutic","Лечебный"),icon:i.jsx(p,{}),plans:pickById(["deep-thai","sport-massage","shoulders-legs"])},{key:"express",label:r("services_page.massage_groups.express","Экспресс"),icon:i.jsx(a,{}),plans:pickById(["body-scrub"])}]},[Y,r]),E=e.useMemo(()=>{const e=Y("hair-care"),pickById=i=>capPopular(i.map(i=>e.find(e=>e.id===i)).filter(Boolean).map(e=>spaServiceToPlan(e,r)));return[{key:"cuts",label:r("services_page.hair_groups.cuts","Стрижки"),icon:i.jsx(d,{}),plans:pickById(["haircut","bang-trim"])},{key:"coloring",label:r("services_page.hair_groups.coloring","Окрашивание"),icon:i.jsx(m,{}),plans:pickById(["root-coloring","root-coloring-stretch","coloring-short","coloring-medium","coloring-long","total-blond-short","total-blond-medium","total-blond-long"])},{key:"care",label:r("services_page.hair_groups.care","Уход"),icon:i.jsx(l,{}),plans:pickById(["happiness-short","happiness-medium","happiness-long","express-hair-care","vietnamese-head-massage"])}]},[Y,r]),Q=e.useMemo(()=>[{key:"manicure",label:r("spa.services.categories.manicure","Маникюр"),icon:i.jsx(g,{}),plans:capPopular(Y("manicure").map(e=>spaServiceToPlan(e,r)))},{key:"pedicure",label:r("spa.services.categories.pedicure","Педикюр"),icon:i.jsx(u,{}),plans:capPopular(Y("pedicure").map(e=>spaServiceToPlan(e,r)))},{key:"pro-pedicure",label:r("spa.services.categories.pro-pedicure","PRO мастер"),icon:i.jsx(f,{}),plans:capPopular(Y("pro-pedicure").map(e=>spaServiceToPlan(e,r)))}],[Y,r]),V=e.useMemo(()=>[{key:"eyelashes",label:r("spa.services.categories.eyelashes","Ресницы"),icon:i.jsx(h,{}),plans:capPopular(Y("eyelashes").map(e=>spaServiceToPlan(e,r)))},{key:"brows",label:r("spa.services.categories.brows","Брови"),icon:i.jsx(b,{}),plans:capPopular(Y("brows").map(e=>spaServiceToPlan(e,r)))}],[Y,r]),Z=e.useMemo(()=>[{key:"laser",label:r("spa.services.categories.laser","Лазерная эпиляция"),icon:i.jsx(x,{}),plans:capPopular(Y("laser").map(e=>spaServiceToPlan(e,r)))},{key:"laser-complex-3",label:r("services_page.laser_groups.complex3","Комплекс • 3"),icon:i.jsx(v,{}),plans:capPopular(Y("laser-complex-3").map(e=>spaServiceToPlan(e,r)))},{key:"laser-complex-5",label:r("services_page.laser_groups.complex5","Комплекс • 5"),icon:i.jsx(v,{}),plans:capPopular(Y("laser-complex-5").map(e=>spaServiceToPlan(e,r)))},{key:"endosphere",label:r("spa.services.categories.endosphere","Эндосфера"),icon:i.jsx(y,{}),plans:capPopular(Y("endosphere").map(e=>spaServiceToPlan(e,r)))}],[Y,r]),ee=e.useCallback(e=>{S(i=>{const r=new Set(i);return r.has(e)?r.delete(e):r.add(e),r})},[]),ie=e.useCallback(e=>{const i="string"==typeof e?e:`${e.name}${e.overline?" — "+e.overline:""}`;X(i),K(!0)},[]),setTab=e=>i=>U(r=>({...r,[e]:i})),re=e.useMemo(()=>({button:r("pricing.select_plan","Выбрать"),popular:r("pricing.mostPopular","Most Popular"),from:r("services_page.from_label","От")}),[r]),ae=q.reduce((e,i)=>e+i.plans.length,0),se=G.reduce((e,i)=>e+i.plans.length,0),te=H.reduce((e,i)=>e+i.plans.length,0),ne=E.reduce((e,i)=>e+i.plans.length,0),oe=Q.reduce((e,i)=>e+i.plans.length,0),le=V.reduce((e,i)=>e+i.plans.length,0),ce=Z.reduce((e,i)=>e+i.plans.length,0),pe=[{id:"memberships",title:r("services_page.titles.memberships"),subtitle:r("services_page.subtitles.memberships"),count:ae,groups:q,defaultTab:"dayPass"},{id:"banya",title:r("services_page.titles.banya"),subtitle:r("services_page.subtitles.banya"),count:se,groups:G,defaultTab:"classic"},{id:"massage",title:r("services_page.titles.massage"),subtitle:r("services_page.subtitles.massage"),count:te,groups:H,defaultTab:"relax"},{id:"hair",title:r("services_page.titles.hair"),subtitle:r("services_page.subtitles.hair"),count:ne,groups:E,defaultTab:"cuts"},{id:"nails",title:r("services_page.titles.nails"),subtitle:r("services_page.subtitles.nails"),count:oe,groups:Q,defaultTab:"manicure"},{id:"brows",title:r("services_page.titles.brows"),subtitle:r("services_page.subtitles.brows"),count:le,groups:V,defaultTab:"eyelashes"},{id:"laser",title:r("services_page.titles.laser"),subtitle:r("services_page.subtitles.laser"),count:ce,groups:Z,defaultTab:"laser"}];return i.jsxs(i.Fragment,{children:[i.jsx(j,{titleKey:"page_titles.services",defaultTitle:"Услуги и цены | KAIF",description:r("services_page.meta_description"),keywords:"KAIF услуги, цены, абонементы, прайс, баня, СПА, массаж"}),i.jsx(w,{}),i.jsxs(P,{children:[i.jsx(A,{}),i.jsx(M,{}),i.jsxs(J,{children:[i.jsx(I,{children:r("services_page.overline")}),i.jsx(R,{children:r("services_page.title")}),i.jsx(F,{children:r("services_page.subtitle","Выберите категорию, чтобы увидеть полный список услуг и цен.")})]})]}),i.jsx(B,{children:i.jsx(T,{children:i.jsx(L,{children:pe.map((e,r)=>{return i.jsx(CategoryAccordion,{index:r+1,title:e.title,subtitle:e.subtitle,count:e.count,isOpen:C.has(e.id),onToggle:()=>ee(e.id),children:i.jsx(TabbedGrid,{groups:e.groups,activeKey:(a=e.id,s=e.defaultTab,N[a]||s),onTabChange:setTab(e.id),selectLabel:re,onSelect:ie})},e.id);var a,s})})})}),i.jsxs(de,{children:[i.jsx(_,{src:"/images/hero/spa.webp"}),i.jsx(me,{}),i.jsx(ge,{children:i.jsxs(T,{children:[i.jsx(ue,{children:r("services_page.cta.title")}),i.jsx(fe,{children:r("services_page.cta.subtitle")}),i.jsx(he,{onClick:()=>ie(r("services_page.cta.source","Консультация по услугам")),children:r("services_page.cta.button")})]})})]}),i.jsx(k,{isOpen:D,onClose:()=>K(!1),service:O||"",source:"Services Page"})]})};export{ServicesPage as default};
