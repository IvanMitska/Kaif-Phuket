import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as t}from"./styled-components-fuCKgGld.js";import{u as r}from"./i18n-core-DrMVsQFB.js";import{l as a,i as n,u as o}from"./heroicons-JeCSnvNC.js";import{ab as s}from"./vendor-misc-D8JVgYt7.js";const l=t.section`
  position: relative;
  padding: 6rem 0;
  background-color: #ffffff;
  overflow: hidden;
  /* ИСПРАВЛЕНИЕ: Не блокируем скролл */
  touch-action: pan-y;
  overscroll-behavior: auto;
  -webkit-overscroll-behavior: auto;
  
  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,m=t.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,d=t.div`
  margin-bottom: 3rem;
`,c=t.div`
  font-family: ${({theme:e})=>{var i;return null==(i=null==e?void 0:e.fonts)?void 0:i.primary}};
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #90B3A7;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: #90B3A7;
    margin-right: 1rem;
  }
`,p=t.h2`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  line-height: 1.2;
  color: ${({theme:e})=>{var i,t;return(null==(t=null==(i=null==e?void 0:e.colors)?void 0:i.text)?void 0:t.primary)||"#2C3E2D"}};
  margin: 0;
`,g=t.div`
  margin-top: 2rem;
`,h=t.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  position: relative;
  
  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background-color: rgba(44, 62, 45, 0.1);
    margin-left: 2rem;
  }
`,x=t.h3`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 300;
  margin: 0;
  color: ${({theme:e})=>{var i,t;return(null==(t=null==(i=null==e?void 0:e.colors)?void 0:i.text)?void 0:t.primary)||"#2C3E2D"}};
  position: relative;
  display: flex;
  align-items: center;
  
  svg {
    width: 24px;
    height: 24px;
    margin-right: 1rem;
    color: #5CB848;
  }
`,f=t.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
  
  @media (max-width: 767px) {
    margin-bottom: 4rem;
  }
`,v=t.div`
  position: relative;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (min-width: 480px) {
    height: 320px;
    border-radius: 20px;
  }

  @media (min-width: 768px) {
    height: 360px;
    border-radius: 24px;
  }

  @media (min-width: 1024px) {
    height: 380px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 1;
  }
`,u=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,b=t.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 2;
  color: #fff;
`,y=t.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  letter-spacing: 0.5px;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`,j=t.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0 0 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  letter-spacing: 0.2px;
`,w=t(s)`
  display: inline-flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: #fff;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  transition: background 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
    margin-left: 0.5rem;
    color: #fff;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-decoration: none;
  }
`,z=t.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,$=t.button`
  background: ${e=>e.$active?"#90B3A7":"#f5f5f5"};
  color: ${e=>e.$active?"white":"#2C3E2D"};
  border: 2px solid ${e=>e.$active?"#90B3A7":"#e0e0e0"};
  border-radius: 50px;
  padding: 1rem 2.5rem;
  font-family: ${({theme:e})=>{var i;return null==(i=null==e?void 0:e.fonts)?void 0:i.primary}};
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: background 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
  margin: 0 0.8rem;
  display: flex;
  align-items: center;
  min-width: 180px;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
    margin-right: 0.6rem;
    color: ${e=>e.$active?"white":"#90B3A7"};
  }

  &:hover {
    background: ${e=>e.$active?"#7fa396":"#e8e8e8"};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
    margin: 0 0 1rem 0;
    min-width: unset;
    padding: 0.9rem 2rem;
  }
`,ExclusiveZones=()=>{const{t:t}=r(),[s,k]=e.useState("all"),C=e.useMemo(()=>[{id:"fitness",name:t("zones.activity.fitness.name"),description:t("zones.activity.fitness.description"),image:"/images/zones/fitness.jpg",path:"/sports"},{id:"combat",name:t("zones.activity.combat.name"),description:t("zones.activity.combat.description"),image:"/images/zones/combat.jpg",path:"/sports"},{id:"pool",name:t("zones.activity.pool.name"),description:t("zones.activity.pool.description"),image:"/images/zones/pool.jpg",path:"/sports"}],[t]),A=e.useMemo(()=>[{id:"spa",name:t("zones.relax.spa.name"),description:t("zones.relax.spa.description"),image:"/images/zones/spa.jpg",path:"/spa"},{id:"banya",name:t("zones.relax.banya.name"),description:t("zones.relax.banya.description"),image:"/assets/images/hero-luxury-DqtV1Zl5.webp",path:"/banya"},{id:"restaurant",name:t("zones.relax.restaurant.name"),description:t("zones.relax.restaurant.description"),image:"/images/zones/restaurant.jpg",path:"/restaurant"}],[t]),renderZones=(e,r)=>e.map(e=>i.jsxs(v,{children:[i.jsx(u,{src:e.image,alt:e.name,loading:"lazy"}),i.jsxs(b,{children:[i.jsx(y,{children:e.name}),i.jsx(j,{children:e.description}),i.jsxs(w,{to:e.path,children:[t("common.exploreMore","Подробнее"),i.jsx(o,{})]})]})]},`${r}-${e.id}`)),handleTabChange=e=>{e!==s&&k(e)};return i.jsx(l,{id:"exclusive-zones",children:i.jsxs(m,{children:[i.jsxs(d,{children:[i.jsx(c,{children:t("zones.overline","Пространства KAIF")}),i.jsx(p,{children:t("zones.title","Всё необходимое для активного отдыха и релаксации")})]}),i.jsxs(z,{children:[i.jsx($,{$active:"all"===s,onClick:()=>handleTabChange("all"),children:t("zones.all","Все зоны")}),i.jsxs($,{$active:"activity"===s,onClick:()=>handleTabChange("activity"),children:[i.jsx(a,{}),t("zones.activity_label","Активити")]}),i.jsxs($,{$active:"relax"===s,onClick:()=>handleTabChange("relax"),children:[i.jsx(n,{}),t("zones.relax_label","Релакс")]})]}),i.jsxs(g,{children:[("all"===s||"activity"===s)&&i.jsxs("div",{children:[i.jsx(h,{children:i.jsxs(x,{children:[i.jsx(a,{}),t("zones.activity_label","Активити")]})}),i.jsx(f,{children:renderZones(C,"activity")})]}),("all"===s||"relax"===s)&&i.jsxs("div",{children:[i.jsx(h,{children:i.jsxs(x,{children:[i.jsx(n,{}),t("zones.relax_label","Релакс")]})}),i.jsx(f,{children:renderZones(A,"relax")})]})]})]})})};export{ExclusiveZones as default};
