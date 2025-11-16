import{r as e,j as r}from"./react-core-DWAaPJsY.js";import{d as t}from"./styled-components-fuCKgGld.js";import{u as o}from"./i18n-core-DrMVsQFB.js";import{l as i,i as a,u as n}from"./heroicons-Dc4hJBDs.js";import{m as s}from"./framer-motion-BYP67fZ8.js";import{ab as l}from"./vendor-misc-D8JVgYt7.js";const p=t.section`
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
`,d=t.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,m=t.div`
  margin-bottom: 3rem;
`,c=t(s.div)`
  font-family: ${({theme:e})=>{var r;return null==(r=null==e?void 0:e.fonts)?void 0:r.primary}};
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
    background: ${({theme:e})=>{var r,t;return(null==(t=null==(r=null==e?void 0:e.colors)?void 0:r.gradients)?void 0:t.logo)||"linear-gradient(135deg, #90B3A7 0%, #00B4D8 33%, #90B3A7 66%, #5CB848 100%)"}};
    margin-right: 1rem;
  }
`,h=t(s.h2)`
  font-family: ${({theme:e})=>{var r;return(null==(r=null==e?void 0:e.fonts)?void 0:r.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  line-height: 1.2;
  color: ${({theme:e})=>{var r,t;return(null==(t=null==(r=null==e?void 0:e.colors)?void 0:r.text)?void 0:t.primary)||"#2C3E2D"}};
  margin: 0;
`,g=t.div`
  margin-top: 2rem;
`,x=t.div`
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
`,f=t.h3`
  font-family: ${({theme:e})=>{var r;return(null==(r=null==e?void 0:e.fonts)?void 0:r.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 300;
  margin: 0;
  color: ${({theme:e})=>{var r,t;return(null==(t=null==(r=null==e?void 0:e.colors)?void 0:r.text)?void 0:t.primary)||"#2C3E2D"}};
  position: relative;
  display: flex;
  align-items: center;
  
  svg {
    width: 24px;
    height: 24px;
    margin-right: 1rem;
    color: #5CB848;
  }
`,v=t.div`
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
`,b=t(s.div)`
  position: relative;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  /* ИСПРАВЛЕНИЕ: Убираем will-change для предотвращения избыточных композитных слоев */
  will-change: auto;
  /* Минимальные трансформации для оптимизации */
  transform: translateZ(0);
  /* Оптимизированные переходы */
  transition: box-shadow 0.2s ease-out;
  
  @media (min-width: 480px) {
    height: 320px;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
  
  @media (min-width: 768px) {
    height: 360px;
    border-radius: 24px;
  }
  
  @media (min-width: 1024px) {
    height: 380px;
  }
  
  /* ИСПРАВЛЕНИЕ: Упрощенный hover для desktop без влияния на скролл */
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      /* Убираем transform для предотвращения compositor thrashing */
    }
  }
  
  /* Для touch устройств убираем все эффекты */
  @media (hover: none) or (pointer: coarse) {
    &:hover {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
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
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 1;
    transition: background 0.3s ease-out;
  }
  
  /* Hover эффект только для устройств с курсором */
  @media (hover: hover) and (pointer: fine) {
    &:hover::after {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.05) 0%,
        rgba(0, 0, 0, 0.7) 100%
      );
    }
  }
  
  /* Отключаем hover для touch устройств */
  @media (hover: none) or (pointer: coarse) {
    &:hover::after {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.8) 100%
      );
    }
  }
`,u=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  /* ИСПРАВЛЕНИЕ: Убираем трансформации изображений для оптимизации скролла */
  /* Не используем transform hover эффекты, чтобы не создавать дополнительные слои */
  will-change: auto;
  
  /* Убираем все hover эффекты для предотвращения compositor thrashing */
  @media (hover: hover) and (pointer: fine) {
    ${b}:hover & {
      /* Убираем scale transform */
    }
  }
  
  @media (hover: none) or (pointer: coarse) {
    ${b}:hover & {
      /* Ничего не делаем */
    }
  }
`,w=t.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 2;
  color: #fff;
  /* ИСПРАВЛЕНИЕ: Убираем трансформации для оптимизации скролла */
  will-change: auto;
  
  /* Убираем все hover эффекты с трансформациями */
  @media (hover: hover) and (pointer: fine) {
    ${b}:hover & {
      /* Убираем transform */
    }
  }
  
  @media (hover: none) or (pointer: coarse) {
    ${b}:hover & {
      /* Ничего не делаем */
    }
  }
`,y=t.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  letter-spacing: 0.5px;
  color: #fff;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.8);
  /* ИСПРАВЛЕНИЕ: Убираем трансформации */
  will-change: auto;
  
  /* Упрощенный hover без трансформаций */
  @media (hover: hover) and (pointer: fine) {
    ${b}:hover & {
      text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.9);
    }
  }
  
  @media (hover: none) or (pointer: coarse) {
    ${b}:hover & {
      text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.8);
    }
  }
`,j=t.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0 0 1.5rem;
  opacity: 0.95;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.8);
  /* ИСПРАВЛЕНИЕ: Убираем трансформации */
  will-change: auto;
  
  /* Упрощенный hover без трансформаций */
  @media (hover: hover) and (pointer: fine) {
    ${b}:hover & {
      opacity: 1;
      text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.9);
    }
  }
  
  @media (hover: none) or (pointer: coarse) {
    ${b}:hover & {
      opacity: 0.95;
      text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.8);
    }
  }
`,$=t(l)`
  display: inline-flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: #fff !important;
  text-decoration: none !important;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  transform: translateY(10px);
  opacity: 0.8;
  
  svg {
    width: 18px;
    height: 18px;
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
    color: #fff !important;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.6s ease;
  }
  
  /* Hover только для устройств с курсором */
  @media (hover: hover) and (pointer: fine) {
    ${b}:hover & {
      transform: translateY(0);
      opacity: 1;
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.3);
      color: #fff !important;
      
      svg {
        transform: translateX(4px);
        color: #fff !important;
      }
    }
    
    &:hover {
      background: rgba(255, 255, 255, 0.3) !important;
      transform: translateY(-2px) !important;
      color: #fff !important;
      text-decoration: none !important;
      
      svg {
        color: #fff !important;
      }
    }
    
    &:hover::before {
      left: 100%;
    }
  }
  
  /* Отключаем hover для touch устройств */
  @media (hover: none) or (pointer: coarse) {
    ${b}:hover & {
      transform: translateY(10px);
      opacity: 0.8;
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.2);
      
      svg {
        transform: translateX(0);
      }
    }
    
    &:hover {
      background: rgba(255, 255, 255, 0.15) !important;
      transform: translateY(10px) !important;
    }
    
    &:hover::before {
      left: -100%;
    }
  }
  
  &:visited,
  &:link,
  &:active {
    color: #fff !important;
    text-decoration: none !important;
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
`,k=t.button`
  background: ${e=>e.$active?"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)":"rgba(255, 255, 255, 0.1)"};
  color: ${e=>e.$active?"white":"#2C3E2D"};
  border: 2px solid ${e=>e.$active?"transparent":"rgba(144, 179, 167, 0.3)"};
  border-radius: 50px;
  padding: 1rem 2.5rem;
  font-family: ${({theme:e})=>{var r;return null==(r=null==e?void 0:e.fonts)?void 0:r.primary}};
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.25s ease-out;
  cursor: pointer;
  margin: 0 0.8rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: ${e=>e.$active?"0 8px 25px rgba(144, 179, 167, 0.4)":"0 4px 15px rgba(0, 0, 0, 0.1)"};
  backdrop-filter: blur(10px);
  min-width: 180px;
  justify-content: center;
  /* ИСПРАВЛЕНИЕ: Оптимизация без избыточных слоев */
  will-change: auto;
  transform: translateZ(0);
  
  svg {
    width: 18px;
    height: 18px;
    margin-right: 0.6rem;
    transition: all 0.3s ease;
    color: ${e=>e.$active?"white":"#90B3A7"};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    /* ИСПРАВЛЕНИЕ: Упрощенный hover без трансформаций */
    box-shadow: ${e=>e.$active?"0 10px 30px rgba(144, 179, 167, 0.5)":"0 6px 20px rgba(144, 179, 167, 0.25)"};
    background: ${e=>e.$active?"linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%)":"rgba(144, 179, 167, 0.1)"};
    border-color: ${e=>e.$active?"transparent":"rgba(144, 179, 167, 0.5)"};
    color: ${e=>e.$active?"white":"#90B3A7"};
    
    svg {
      color: ${e=>e.$active?"white":"#90B3A7"};
    }
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.3);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
    margin: 0 0 1rem 0;
    min-width: unset;
    padding: 0.9rem 2rem;
  }
`,ExclusiveZones=()=>{const{t:t}=o(),[s,l]=e.useState("all"),B=e.useMemo(()=>[{id:"fitness",name:t("zones.activity.fitness.name"),description:t("zones.activity.fitness.description"),image:"/images/zones/fitness.jpg",path:"/sports"},{id:"combat",name:t("zones.activity.combat.name"),description:t("zones.activity.combat.description"),image:"/images/zones/combat.jpg",path:"/sports"},{id:"pool",name:t("zones.activity.pool.name"),description:t("zones.activity.pool.description"),image:"/images/zones/pool.jpg",path:"/sports"}],[t]),C=e.useMemo(()=>[{id:"spa",name:t("zones.relax.spa.name"),description:t("zones.relax.spa.description"),image:"/images/zones/spa.jpg",path:"/spa"},{id:"banya",name:t("zones.relax.banya.name"),description:t("zones.relax.banya.description"),image:"/assets/images/hero-luxury-DqtV1Zl5.webp",path:"/banya"},{id:"restaurant",name:t("zones.relax.restaurant.name"),description:t("zones.relax.restaurant.description"),image:"/images/zones/restaurant.jpg",path:"/restaurant"}],[t]),renderZones=(e,o)=>e.map((e,i)=>r.jsxs(b,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.1,margin:"-50px"},transition:{duration:.6,delay:.05*i},children:[r.jsx(u,{src:e.image,alt:e.name}),r.jsxs(w,{children:[r.jsx(y,{children:e.name}),r.jsx(j,{children:e.description}),r.jsxs($,{to:e.path,children:[t("common.exploreMore","Подробнее"),r.jsx(n,{})]})]})]},`${o}-${e.id}`)),handleTabChange=e=>{e!==s&&l(e)};return r.jsx(p,{id:"exclusive-zones",children:r.jsxs(d,{children:[r.jsxs(m,{children:[r.jsx(c,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.8},children:t("zones.overline","Пространства KAIF")}),r.jsx(h,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.8,delay:.2},children:t("zones.title","Всё необходимое для активного отдыха и релаксации")})]}),r.jsxs(z,{children:[r.jsx(k,{$active:"all"===s,onClick:()=>handleTabChange("all"),children:t("zones.all","Все зоны")}),r.jsxs(k,{$active:"activity"===s,onClick:()=>handleTabChange("activity"),children:[r.jsx(i,{}),t("zones.activity_label","Активити")]}),r.jsxs(k,{$active:"relax"===s,onClick:()=>handleTabChange("relax"),children:[r.jsx(a,{}),t("zones.relax_label","Релакс")]})]}),r.jsxs(g,{children:[("all"===s||"activity"===s)&&r.jsxs("div",{children:[r.jsx(x,{children:r.jsxs(f,{children:[r.jsx(i,{}),t("zones.activity_label","Активити")]})}),r.jsx(v,{children:renderZones(B,"activity")})]}),("all"===s||"relax"===s)&&r.jsxs("div",{children:[r.jsx(x,{children:r.jsxs(f,{children:[r.jsx(a,{}),t("zones.relax_label","Релакс")]})}),r.jsx(v,{children:renderZones(C,"relax")})]})]})]})})};export{ExclusiveZones as default};
