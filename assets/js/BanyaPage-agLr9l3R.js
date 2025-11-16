import{r as e,j as a,R as t}from"./react-core-DWAaPJsY.js";import{d as i,m as r}from"./styled-components-fuCKgGld.js";import{P as n}from"./PageScrollReset-BDYyiQ41.js";import{P as o}from"./PageHead-ByG18s83.js";import{u as s}from"./i18n-core-DrMVsQFB.js";import{n as l,a as c,o as d,p,q as g,r as m,F as b,b as f,s as h,t as u}from"./heroicons-Dc4hJBDs.js";import{m as x}from"./framer-motion-BYP67fZ8.js";import"./vendor-misc-D8JVgYt7.js";import"./react-helmet-BCF-s7y-.js";i.div`
  position: relative;
  overflow: hidden;
  background-color: #f0f0f0;
  transition: all 0.3s ease;

  &.loading {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`,i.picture`
  width: 100%;
  height: 100%;
  display: block;
`,i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${e=>e.loaded?1:0};
`,r`
  0% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.1, 1) rotate(1deg); }
  50% { transform: scale(0.95, 1) rotate(-1deg); }
  75% { transform: scale(1.05, 1) rotate(0.5deg); }
  100% { transform: scale(1) rotate(0deg); }
`,r`
  0% { transform: translateY(0) scale(1); opacity: 0.7; }
  50% { transform: translateY(-20px) scale(1.2); opacity: 0.4; }
  100% { transform: translateY(-40px) scale(1.5); opacity: 0; }
`,r`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35, 0 0 30px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`,r`
  0% { opacity: 0.4; }
  50% { opacity: 0.7; }
  100% { opacity: 0.4; }
`;const y=i.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1410 50%, #0f0f0f 100%);
`,w=i.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  height: 100%;
`,v=i(x.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  will-change: opacity;
  filter: contrast(1.1) brightness(0.95);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      linear-gradient(
        180deg,
        rgba(10, 10, 10, 0.4) 0%,
        rgba(10, 10, 10, 0.65) 40%,
        rgba(15, 12, 8, 0.85) 70%,
        rgba(10, 10, 10, 0.95) 100%
      ),
      radial-gradient(
        ellipse at center top,
        transparent 0%,
        rgba(255, 107, 53, 0.05) 50%,
        transparent 100%
      );
    z-index: 1;
  }
`,k=i.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30s-13.431 30-30 30S0 46.569 0 30 13.431 0 30 0zm0 6c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24S43.255 6 30 6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
  opacity: 0.2;
  z-index: 3;
`;i.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  
  &.left {
    left: 5%;
  }
  
  &.right {
    right: 5%;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,i.img`
  width: auto;
  height: 140px;
  filter: drop-shadow(0 0 15px rgba(255, 147, 53, 0.4));
  object-fit: contain;
`;const j=i.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  text-align: center;
  color: #f5f5f5;
`;i(x.div)`
  display: none;
`;const z=i(x.h1)`
  font-size: clamp(4rem, 12vw, 8.5rem);
  font-weight: 200;
  line-height: 0.9;
  margin-bottom: 2rem;
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  letter-spacing: -0.03em;
  text-align: center;
  position: relative;
  z-index: 10;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);

  .accent {
    color: transparent;
    background: linear-gradient(
      135deg,
      #ff6b35 0%,
      #ffd662 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: 300;
  }
`,I=i(x.div)`
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 400;
  color: rgba(255, 214, 98, 0.9);
  margin-bottom: 2.5rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: clamp(1.1rem, 3vw, 1.3rem);
    letter-spacing: 0.1em;
  }

  .location {
    color: #ffd662;
    font-weight: 500;
  }

  .size {
    color: #ff6b35;
    font-weight: 600;
    text-shadow: 0 2px 12px rgba(255, 107, 53, 0.4);
  }

  .feature {
    color: rgba(255, 214, 98, 0.8);
    font-weight: 400;
    display: block;
    margin-top: 0.5rem;
    font-size: 0.9em;
    letter-spacing: 0.1em;
  }
`,T=i(x.p)`
  display: none;
`,_=i(x.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`,S=i(x.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: #ffffff;
  border: none;
  border-radius: 60px;
  font-size: clamp(0.95rem, 1.75vw, 1.125rem);
  font-weight: 600;
  cursor: pointer;
  min-height: 56px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-transform: none;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 4px 15px rgba(255, 107, 53, 0.3),
    0 1px 3px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow:
      0 8px 25px rgba(255, 107, 53, 0.45),
      0 2px 8px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);

    &::before {
      left: 100%;
    }
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`,E=i(x.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: rgba(255, 255, 255, 0.03);
  color: rgba(245, 245, 245, 0.95);
  border: 1.5px solid rgba(255, 107, 53, 0.4);
  border-radius: 60px;
  font-size: clamp(0.95rem, 1.75vw, 1.125rem);
  font-weight: 500;
  cursor: pointer;
  min-height: 56px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-transform: none;
  letter-spacing: 0.02em;
  backdrop-filter: blur(20px) saturate(1.5);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  
  &:hover {
    background: rgba(255, 107, 53, 0.08);
    border-color: rgba(255, 214, 98, 0.6);
    color: #ffd662;
    transform: translateY(-2px) scale(1.02);
    box-shadow:
      0 6px 20px rgba(255, 107, 53, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;i(x.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  color: #ff6b35;
  text-align: center;
  margin: 0;
  padding: 0;
  
  .scroll-text {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .scroll-arrow {
    width: 2px;
    height: 30px;
    background: #ff6b35;
    margin: 0 auto;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: -4px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 8px solid #ff6b35;
    }
  }
`;const N=i.div`
  position: absolute;
  font-size: 2rem;
  color: rgba(255, 107, 53, 0.3);
  z-index: 2;
  
  &.top-left {
    top: 10%;
    left: 10%;
    transform: rotate(-15deg);
  }
  
  &.top-right {
    top: 10%;
    right: 10%;
    transform: rotate(15deg);
  }
  
  &.bottom-left {
    bottom: 10%;
    left: 10%;
    transform: rotate(15deg);
  }
  
  &.bottom-right {
    bottom: 10%;
    right: 10%;
    transform: rotate(-15deg);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,$=e.memo(()=>{const{t:t,i18n:i}=s(),r="ru"===i.language,[n,o]=e.useState(0),[d,p]=e.useState(0),g=[{src:"/images/banya/panoramic.png",alt:t("banya.hero.images.panoramic","Panoramic sauna 150 m²")},{src:"/images/banya/private.jpg",alt:t("banya.hero.images.private","Private sauna")},{src:"/images/banya/public.jpg",alt:t("banya.hero.images.public","Public sauna")}];e.useEffect(()=>{const e=setInterval(()=>{p(e=>(e+1)%g.length)},8e3);return()=>clearInterval(e)},[g.length]),e.useEffect(()=>{const e=setTimeout(()=>{o(d)},1500);return()=>clearTimeout(e)},[d]);return a.jsxs(y,{children:[a.jsxs(w,{children:[a.jsx(v,{style:{backgroundImage:`url(${g[n].src})`,opacity:1,zIndex:1}},`current-${n}`),a.jsx(v,{initial:{opacity:0},animate:{opacity:n===d?0:1},transition:{duration:2,ease:"easeInOut"},style:{backgroundImage:`url(${g[d].src})`,zIndex:2}},`next-${d}`)]}),a.jsx(k,{}),a.jsx(N,{className:"top-left",children:"᚛ᚏᚓᚐᚉ᚜"}),a.jsx(N,{className:"top-right",children:"᚛ᚈᚓᚐᚉ᚜"}),a.jsx(N,{className:"bottom-left",children:"᚛ᚄᚐᚒᚈ᚜"}),a.jsx(N,{className:"bottom-right",children:"᚛ᚏᚓᚐᚉ᚜"}),a.jsxs(j,{children:[a.jsxs(z,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,delay:.2},children:[t("banya.hero.title_part1",r?"Русская":"Russian")," ",a.jsx("span",{className:"accent",children:t("banya.hero.title_part2",r?"Баня":"Banya")})]}),a.jsxs(I,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[a.jsx("span",{className:"location",children:t("banya.hero.location",r?"Пхукет":"Phuket")})," — ",a.jsxs("span",{className:"size",children:["150 ",t("banya.hero.area_unit",r?"м²":"m²")]}),a.jsx("span",{className:"feature",children:t("banya.hero.feature",r?"Самая большая баня на острове":"Largest banya on the island")})]}),a.jsx(T,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:"Сибирский кедр и алтайская липа"}),a.jsxs(_,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:[a.jsxs(S,{onClick:()=>{const e=t("common.phone_number","+66 62 480 5877"),a=encodeURIComponent(t("common.whatsapp_messages.book_banya","Hello! I would like to book the Russian Banya"));window.open(`https://wa.me/${e.replace(/\D/g,"")}?text=${a}`,"_blank")},whileHover:{scale:1.05},whileTap:{scale:.95},children:[a.jsx(l,{}),t("banya.hero.book_button","ЗАБРОНИРОВАТЬ")]}),a.jsxs(E,{onClick:()=>{const e=t("common.phone_number","+66 62 480 5877");window.open(`tel:${e}`,"_self")},whileHover:{scale:1.05},whileTap:{scale:.95},children:[a.jsx(c,{}),t("banya.hero.contacts_button","КОНТАКТЫ")]})]})]})]})}),B=i.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  margin-top: -1px;
  background: #0a0a0a;
  position: relative;
  margin-bottom: 0;

  /* Оптимизация для мобильных */
  @media (max-width: 768px) {
    overflow-x: hidden;
    will-change: auto;
  }

  @media (min-width: 769px) {
    overflow: hidden;
  }
`,C=i.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
  z-index: 2;
`,H=i.div`
  text-align: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
`,A=i(x.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,q=i(x.p)`
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  background: linear-gradient(135deg, rgba(255, 214, 98, 0.9) 0%, rgba(255, 107, 53, 0.9) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 500;
  letter-spacing: 0.02em;
`,M=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
  margin: 0 auto;

  /* Оптимизация производительности */
  contain: layout style;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    /* Оптимизация для мобильных */
    will-change: auto;
    transform: translateZ(0);
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1201px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }
`,L=i(x.div)`
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);

  /* Отключаем сложные эффекты на мобильных для производительности */
  @media (hover: hover) and (pointer: fine) {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at 50% 50%,
        rgba(255, 107, 53, 0.04) 0%,
        transparent 40%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow:
        0 16px 32px rgba(0, 0, 0, 0.4),
        0 0 20px rgba(255, 107, 53, 0.03);

      &::after {
        opacity: 1;
      }

      .ritual-title {
        background-size: 200% 100%;
        background-position: 100% 0;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    min-height: auto;
    border-radius: 20px;
    /* Упрощаем эффекты на мобильных */
    backdrop-filter: none;
    transition: none;

    &::after {
      display: none;
    }
  }
`,V=i.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg,
    transparent 0%,
    #ff6b35 25%,
    #ffd662 50%,
    #ff6b35 75%,
    transparent 100%
  );
  opacity: 0.8;
`,P=i.div`
  flex: 1;
  margin-bottom: 1.5rem;
`,R=i.h3`
  font-size: 1.875rem;
  font-weight: 600;
  background: linear-gradient(135deg, #ffffff 0%, #ffd662 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 100% 100%;
  background-position: 0 0;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
  transition: all 0.4s ease;

  @media (max-width: 768px) {
    font-size: 1.625rem;
  }
`,O=i.div`
  color: rgba(255, 214, 98, 0.8);
  font-size: 0.875rem;
  margin-bottom: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: inline-block;
  padding: 4px 12px;
  background: rgba(255, 107, 53, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(255, 107, 53, 0.2);
`,G=i.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 400;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`,Y=i.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 2rem;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`,W=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,U=i.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 400;
`,D=i.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 500;
`,F=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  transition: transform 0.3s ease;
`,K=i.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 400;
`,X=i.span`
  font-size: 1.625rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffd662 0%, #ff6b35 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }
`,BanyaServicesSection=()=>{const{t:e,i18n:i,ready:r}=s(),n="ru"===i.language,o=[{id:"intro",title:"Introductory Steaming",subtitle:"LIGHT STEAM",duration:"5-8 min",price:"1,200 THB",description:"Contact warming of back and legs with birch brooms. Light steam without turning over"},{id:"classic",title:"Classic Steaming",subtitle:"MEDIUM STEAM",duration:"10-15 min",price:"1,800 THB",description:"Steaming with oak brooms in one session. Thorough whole body steaming with aromatic steam"},{id:"artesian",title:"Artesian",subtitle:"CONTRAST STEAMING",duration:"15-20 min",price:"2,500 THB",description:"Classic steaming with oak brooms with contrast of cool mineral water. Bubble contrast sensations"}],l=(()=>{if(!r)return o.slice(0,3);try{return[{id:"intro",title:e("banya.services.rituals.intro.title","Introductory Steaming"),subtitle:e("banya.services.rituals.intro.subtitle","LIGHT STEAM"),duration:e("banya.services.rituals.intro.duration","5-8 min"),price:e("banya.services.rituals.intro.price","1,200 THB"),description:e("banya.services.rituals.intro.description","Contact warming of back and legs with birch brooms. Light steam without turning over")},{id:"classic",title:e("banya.services.rituals.classic.title","Classic Steaming"),subtitle:e("banya.services.rituals.classic.subtitle","MEDIUM STEAM"),duration:e("banya.services.rituals.classic.duration","10-15 min"),price:e("banya.services.rituals.classic.price","1,800 THB"),description:e("banya.services.rituals.classic.description","Steaming with oak brooms in one session. Thorough whole body steaming with aromatic steam")},{id:"artesian",title:e("banya.services.rituals.artesian.title","Artesian"),subtitle:e("banya.services.rituals.artesian.subtitle","CONTRAST STEAMING"),duration:e("banya.services.rituals.artesian.duration","15-20 min"),price:e("banya.services.rituals.artesian.price","2,500 THB"),description:e("banya.services.rituals.artesian.description","Classic steaming with oak brooms with contrast of cool mineral water. Bubble contrast sensations")},{id:"gravity",title:e("banya.services.rituals.gravity.title","Gravity"),subtitle:e("banya.services.rituals.gravity.subtitle","WEIGHTLESS STEAMING"),duration:e("banya.services.rituals.gravity.duration","15-20 min"),price:e("banya.services.rituals.gravity.price","2,500 THB"),description:e("banya.services.rituals.gravity.description","Classic steaming with subsequent floating in a warm pool. Complete relaxation and weightlessness")},{id:"salt_fire",title:e("banya.services.rituals.salt_fire.title","Fire Start"),subtitle:e("banya.services.rituals.salt_fire.subtitle","SALT STEAMING"),duration:e("banya.services.rituals.salt_fire.duration","15-20 min"),price:e("banya.services.rituals.salt_fire.price","2,500 THB"),description:e("banya.services.rituals.salt_fire.description","Classic steaming with sea salt application and warming through a sheet. Salt cave effect")},{id:"warrior_path",title:e("banya.services.rituals.warrior_path.title","Warrior's Path"),subtitle:e("banya.services.rituals.warrior_path.subtitle","CONTRAST STEAMING"),duration:e("banya.services.rituals.warrior_path.duration","20-25 min"),price:e("banya.services.rituals.warrior_path.price","3,500 THB"),description:e("banya.services.rituals.warrior_path.description","Steaming in two sessions with cold water dousing between them. Back warming and kvass refreshment")},{id:"stalwar",title:e("banya.services.rituals.stalwar.title","Stalwar"),subtitle:e("banya.services.rituals.stalwar.subtitle","STEEL STEAMING"),duration:e("banya.services.rituals.stalwar.duration","25-30 min"),price:e("banya.services.rituals.stalwar.price","4,000 THB"),description:e("banya.services.rituals.stalwar.description","Intensive steaming with oak and birch brooms. Maximum heat and contrast procedures")},{id:"honey",title:e("banya.services.rituals.honey.title","Honey Ritual"),subtitle:e("banya.services.rituals.honey.subtitle","WELLNESS STEAMING"),duration:e("banya.services.rituals.honey.duration","30-35 min"),price:e("banya.services.rituals.honey.price","4,500 THB"),description:e("banya.services.rituals.honey.description","Steaming with honey body wrap and herbal aromatherapy. Deep skin nourishment and relaxation")},{id:"royal",title:e("banya.services.rituals.royal.title","Royal Treatment"),subtitle:e("banya.services.rituals.royal.subtitle","PREMIUM STEAMING"),duration:e("banya.services.rituals.royal.duration","40-45 min"),price:e("banya.services.rituals.royal.price","6,000 THB"),description:e("banya.services.rituals.royal.description","Full luxury banya experience with premium oils, contrast treatments, and personal service")},{id:"valhalla",title:e("banya.services.rituals.valhalla.title","Valhalla"),subtitle:e("banya.services.rituals.valhalla.subtitle","ULTIMATE STEAMING"),duration:e("banya.services.rituals.valhalla.duration","50-60 min"),price:e("banya.services.rituals.valhalla.price","8,000 THB"),description:e("banya.services.rituals.valhalla.description","Ultimate warrior experience with multiple steaming sessions, ice treatments, and ceremonial completion")}]}catch(a){return o}})(),[c,d]=t.useState(!1);return t.useEffect(()=>{const checkMobile=()=>{d(window.innerWidth<=768)};return checkMobile(),window.addEventListener("resize",checkMobile),()=>window.removeEventListener("resize",checkMobile)},[]),a.jsx(B,{children:a.jsxs(C,{children:[a.jsxs(H,{children:[a.jsx(A,{initial:c?{opacity:0}:{opacity:0,y:20},whileInView:c?{opacity:1}:{opacity:1,y:0},viewport:{once:!0},transition:{duration:c?.4:.6},children:n?"Индивидуальные парения":"Individual Steam Sessions"}),a.jsx(q,{initial:c?{opacity:0}:{opacity:0,y:20},whileInView:c?{opacity:1}:{opacity:1,y:0},viewport:{once:!0},transition:{duration:c?.4:.6,delay:c?.05:.1},children:n?"Выберите свой идеальный банный ритуал":"Choose your perfect banya ritual"})]}),a.jsx(M,{children:l.map((e,t)=>a.jsxs(L,{initial:c?{opacity:0}:{opacity:0,y:20},whileInView:c?{opacity:1}:{opacity:1,y:0},viewport:{once:!0,margin:c?"-20px":"-50px"},transition:{duration:c?.3:.4,delay:c?.02*t:.05*t,ease:"easeOut"},children:[a.jsx(V,{}),a.jsxs(P,{children:[a.jsx(R,{className:"ritual-title",children:e.title||"Loading..."}),a.jsx(O,{children:e.subtitle||"STEAM"}),a.jsx(G,{children:e.description||"Loading description..."})]}),a.jsxs(Y,{children:[a.jsxs(W,{children:[a.jsx(U,{children:n?"Время":"Duration"}),a.jsx(D,{children:e.duration||"0 min"})]}),a.jsxs(F,{children:[a.jsx(K,{children:n?"Стоимость":"Price"}),a.jsx(X,{children:e.price||"0 THB"})]})]})]},`${e.id}-${r}`))})]})})};r`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`,r`
  0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(255, 107, 53, 0.3); }
  50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(255, 107, 53, 0.5); }
`;const Q=i.section`
  padding: clamp(5rem, 10vw, 8rem) 0;
  background:
    linear-gradient(180deg, #0a0a0a 0%, #0f0d0a 100%),
    radial-gradient(ellipse at 50% 50%, rgba(255, 107, 53, 0.02) 0%, transparent 60%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 10% 20%, rgba(255, 214, 98, 0.04) 0%, transparent 40%),
      radial-gradient(circle at 90% 80%, rgba(255, 107, 53, 0.04) 0%, transparent 40%);
    z-index: 1;
  }
`,J=i.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
  z-index: 2;
`,Z=i.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,ee=i(x.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background:
    linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, transparent 100%),
    rgba(20, 20, 20, 0.3);
  border: 1px solid rgba(255, 214, 98, 0.2);
  border-radius: 30px;
  font-size: 0.7rem;
  font-weight: 500;
  color: #ffd662;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,ae=i(x.h2)`
  font-size: clamp(2.75rem, 7vw, 4.5rem);
  font-weight: 700;
  color: transparent;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #f0f0f0 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 1.5rem;
  line-height: 1.05;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  letter-spacing: -0.02em;

  .highlight {
    background: linear-gradient(
      135deg,
      #ff6b35 0%,
      #ffd662 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
  }
`,te=i(x.p)`
  font-size: clamp(1rem, 2.25vw, 1.375rem);
  line-height: 1.7;
  color: rgba(204, 204, 204, 0.85);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: 0.01em;
  opacity: 0.9;
`,ie=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
  margin-top: clamp(3rem, 6vw, 5rem);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,re=i(x.div)`
  background:
    linear-gradient(135deg, rgba(20, 18, 15, 0.3) 0%, rgba(10, 10, 10, 0.4) 100%),
    radial-gradient(ellipse at top left, rgba(255, 107, 53, 0.02) 0%, transparent 60%);
  border: 1px solid rgba(255, 214, 98, 0.1);
  border-radius: 32px;
  padding: 3rem 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px) saturate(1.1);
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.02);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 214, 98, 0.4),
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    border-color: rgba(255, 214, 98, 0.2);
    transform: translateY(-8px) scale(1.02);
    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.35),
      0 10px 25px rgba(255, 107, 53, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);
    background:
      linear-gradient(135deg, rgba(255, 107, 53, 0.04) 0%, rgba(10, 10, 10, 0.4) 100%),
      radial-gradient(ellipse at top left, rgba(255, 107, 53, 0.03) 0%, transparent 60%);
  }
`,ne=i.div`
  width: 76px;
  height: 76px;
  background:
    linear-gradient(135deg, rgba(255, 107, 53, 0.85) 0%, rgba(255, 140, 66, 0.85) 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  position: relative;
  z-index: 2;
  box-shadow:
    0 8px 24px rgba(255, 107, 53, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${re}:hover & {
    transform: rotate(-5deg) scale(1.1);
    box-shadow:
      0 12px 32px rgba(255, 107, 53, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 2.35rem;
    height: 2.35rem;
    color: #ffffff;
  }
`,oe=i.h3`
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 600;
  color: transparent;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #e8e8e8 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 1.25rem;
  position: relative;
  z-index: 2;
  letter-spacing: -0.01em;
  line-height: 1.2;
`,se=i.p`
  font-size: clamp(1rem, 1.75vw, 1.125rem);
  line-height: 1.7;
  color: rgba(204, 204, 204, 0.85);
  margin-bottom: 1.75rem;
  position: relative;
  z-index: 2;
  font-weight: 400;
  letter-spacing: 0.01em;
`,le=i.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  position: relative;
  z-index: 2;
`,ce=i.li`
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  margin-bottom: 1rem;
  font-size: clamp(0.975rem, 1.6vw, 1.05rem);
  color: rgba(204, 204, 204, 0.85);
  line-height: 1.6;
  transition: all 0.3s ease;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: linear-gradient(135deg, #ff6b35 0%, #ffd662 100%);
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 0.4rem;
    transition: all 0.3s ease;
  }

  &:hover {
    color: rgba(255, 214, 98, 0.9);
    transform: translateX(4px);

    &::before {
      width: 8px;
      height: 8px;
      box-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`,de=i.div`
  position: absolute;
  font-size: 3rem;
  color: rgba(255, 107, 53, 0.1);
  z-index: 1;
  
  &.top-left {
    top: 5%;
    left: 5%;
    transform: rotate(-30deg);
  }
  
  &.top-right {
    top: 5%;
    right: 5%;
    transform: rotate(30deg);
  }
  
  &.bottom-center {
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,BanyaFeaturesSection=()=>{const{t:e}=s(),t=[{id:"materials",icon:d,title:e("banya.features.materials.title","Natural Materials"),description:e("banya.features.materials.description","100% natural finish from Siberian wood species"),items:[e("banya.features.materials.items.cedar","Siberian Cedar"),e("banya.features.materials.items.linden","Altai Linden"),e("banya.features.materials.items.birch","Karelian Birch"),e("banya.features.materials.items.coating","Eco-friendly finishes"),e("banya.features.materials.items.aromatherapy","Natural aromatherapy")]},{id:"panoramic",icon:p,title:e("banya.features.panoramic.title","Panoramic Design"),description:e("banya.features.panoramic.description","Unique architecture with tropical jungle views"),items:[e("banya.features.panoramic.items.area","150 square meters"),e("banya.features.panoramic.items.windows","Panoramic windows"),e("banya.features.panoramic.items.view","Jungle views"),e("banya.features.panoramic.items.lighting","Natural lighting"),e("banya.features.panoramic.items.harmony","Harmony with nature")]},{id:"safety",icon:g,title:e("banya.features.safety.title","Safety"),description:e("banya.features.safety.description","Compliance with all international safety standards"),items:[e("banya.features.safety.items.fire","Fire safety"),e("banya.features.safety.items.ventilation","Ventilation system"),e("banya.features.safety.items.emergency","Emergency lighting"),e("banya.features.safety.items.medical","Medical assistance"),e("banya.features.safety.items.security","24/7 security")]}];return a.jsxs(Q,{children:[a.jsx(de,{className:"top-left",children:"᚛ᚒᚔᚉᚔᚅᚌ᚜"}),a.jsx(de,{className:"top-right",children:"᚛ᚄᚈᚏᚓᚅᚌᚈᚆ᚜"}),a.jsx(de,{className:"bottom-center",children:"᚛ᚆᚑᚅᚑᚏ᚜"}),a.jsxs(J,{children:[a.jsxs(Z,{children:[a.jsx(ee,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:a.jsx("span",{children:e("banya.features.badge","Best Banya in Phuket")})}),a.jsx(ae,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:a.jsx("span",{dangerouslySetInnerHTML:{__html:e("banya.features.title",'Why Choose <span className="highlight">Us</span>')}})}),a.jsx(te,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:e("banya.features.subtitle","Experience the authentic Russian banya with modern comfort and traditional techniques")})]}),a.jsx(ie,{children:t.map((e,t)=>a.jsxs(re,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2*t},children:[a.jsx(ne,{children:a.jsx(e.icon,{})}),a.jsx(oe,{children:e.title}),a.jsx(se,{children:e.description}),a.jsx(le,{children:e.items.map((e,t)=>a.jsx(ce,{children:e},t))})]},e.id))})]})]})},pe=i.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
`,ge=i.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
`,me=i.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`,be=i(x.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 214, 98, 0.1) 100%);
  border: 1px solid rgba(255, 214, 98, 0.3);
  border-radius: 30px;
  color: #ffd662;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
`,fe=i(x.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`,he=i(x.p)`
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  background: linear-gradient(135deg, rgba(255, 214, 98, 0.9) 0%, rgba(255, 107, 53, 0.9) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 500;
  letter-spacing: 0.02em;
`,ue=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,xe=i.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #1a1a1a;
  aspect-ratio: 4/3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    border-radius: 12px;
  }
`,ye=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
`,BanyaGallerySection=()=>{const{t:e}=s(),t=[{id:1,src:"/images/banya/gallery/banya-steam-room.jpg",title:e("banya.gallery.steam_room","Парная"),description:e("banya.gallery.steam_room_desc","Классическая русская парная с березовыми вениками")},{id:2,src:"/images/banya/gallery/banya-rest-area.jpg",title:e("banya.gallery.rest_area","Зона отдыха"),description:e("banya.gallery.rest_area_desc","Комфортная зона для отдыха после парной")},{id:3,src:"/images/banya/gallery/banya-cold-pool.jpg",title:e("banya.gallery.cold_pool","Холодный бассейн"),description:e("banya.gallery.cold_pool_desc","Бассейн с холодной водой для контрастных процедур")},{id:4,src:"/images/banya/gallery/banya-hot-stones.jpg",title:e("banya.gallery.hot_stones","Горячие камни"),description:e("banya.gallery.hot_stones_desc","Раскаленные камни для создания пара")},{id:5,src:"/images/banya/gallery/banya-tea-ceremony.jpg",title:e("banya.gallery.tea_ceremony","Чайная церемония"),description:e("banya.gallery.tea_ceremony_desc","Традиционное чаепитие после бани")},{id:6,src:"/images/banya/gallery/banya-lounge.jpg",title:e("banya.gallery.lounge","Лаунж зона"),description:e("banya.gallery.lounge_desc","Просторная зона отдыха")}];return a.jsx(pe,{children:a.jsxs(ge,{children:[a.jsxs(me,{children:[a.jsx(be,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:e("banya.gallery.badge","ГАЛЕРЕЯ")}),a.jsx(fe,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:e("banya.gallery.title","Галерея")}),a.jsx(he,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:e("banya.gallery.subtitle","Атмосфера настоящей русской бани")})]}),a.jsx(ue,{children:t.map(e=>a.jsx(xe,{children:a.jsx(ye,{src:e.src,alt:e.title,loading:"lazy"})},e.id))})]})})},we=r`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`;r`
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
  25% { transform: scale(1.1) rotate(2deg); opacity: 1; }
  50% { transform: scale(0.9) rotate(-1deg); opacity: 0.9; }
  75% { transform: scale(1.05) rotate(1deg); opacity: 0.95; }
`;const ve=i.section`
  padding: clamp(5rem, 10vw, 8rem) 0;
  background:
    linear-gradient(180deg, #0a0a0a 0%, #0f0d0a 50%, #0a0a0a 100%),
    radial-gradient(ellipse at 20% 0%, rgba(255, 107, 53, 0.03) 0%, transparent 40%),
    radial-gradient(ellipse at 80% 100%, rgba(255, 214, 98, 0.03) 0%, transparent 40%);
  position: relative;
  overflow: hidden;
  margin: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 50%);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
    z-index: 2;
  }
`,ke=i.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
  z-index: 2;
`,je=i.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,ze=i(x.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.5rem;
  background:
    linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, transparent 100%),
    rgba(20, 20, 20, 0.4);
  border: 1px solid rgba(255, 214, 98, 0.25);
  border-radius: 40px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #ffd662;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  &::before {
    content: '✱';
    font-size: 1em;
    color: #ff6b35;
    opacity: 0.7;
  }
`,Ie=i(x.h2)`
  font-size: clamp(2.75rem, 7vw, 4.5rem);
  font-weight: 700;
  color: transparent;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #f0f0f0 50%,
    #e0e0e0 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 1.75rem;
  line-height: 1.05;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  letter-spacing: -0.02em;

  .highlight {
    background: linear-gradient(
      135deg,
      #ff6b35 0%,
      #ffd662 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
  }
`,Te=i(x.p)`
  font-size: clamp(1.05rem, 2.25vw, 1.375rem);
  line-height: 1.7;
  color: rgba(204, 204, 204, 0.9);
  max-width: 600px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: 0.01em;
  opacity: 0.85;
`,_e=i.div`
  background:
    linear-gradient(135deg, rgba(20, 18, 15, 0.6) 0%, rgba(10, 10, 10, 0.7) 100%),
    radial-gradient(ellipse at top left, rgba(255, 107, 53, 0.05) 0%, transparent 50%);
  border: 1px solid rgba(255, 214, 98, 0.15);
  border-radius: 32px;
  padding: 3.5rem 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(30px) saturate(1.2);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 214, 98, 0.5),
      transparent
    );
    background-size: 200% 100%;
    animation: shimmer 3s linear infinite;
  }
  
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
  
  &:hover {
    border-color: rgba(255, 214, 98, 0.25);
    box-shadow:
      0 25px 70px rgba(0, 0, 0, 0.5),
      0 10px 30px rgba(255, 107, 53, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
`,Se=i.h3`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: #f5f5f5;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: 'Bebas Neue', 'Arial Black', sans-serif;
  
  .highlight {
    color: #ff6b35;
    animation: ${we} 4s ease-in-out infinite;
  }
`,Ee=i.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: #cccccc;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,Ne=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,$e=i(x.div)`
  background:
    linear-gradient(135deg, rgba(255, 107, 53, 0.03) 0%, transparent 100%),
    rgba(20, 20, 20, 0.3);
  border: 1px solid rgba(255, 214, 98, 0.15);
  border-radius: 24px;
  padding: 2.25rem 1.75rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    border-color: rgba(255, 214, 98, 0.3);
    background:
      linear-gradient(135deg, rgba(255, 107, 53, 0.08) 0%, transparent 100%),
      rgba(25, 25, 25, 0.4);
    transform: translateY(-4px) scale(1.02);
    box-shadow:
      0 12px 35px rgba(0, 0, 0, 0.3),
      0 5px 15px rgba(255, 107, 53, 0.15);
  }
`,Be=i.div`
  width: 56px;
  height: 56px;
  background:
    linear-gradient(135deg, rgba(255, 107, 53, 0.9) 0%, rgba(255, 140, 66, 0.9) 100%),
    rgba(30, 30, 30, 0.8);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  box-shadow:
    0 4px 12px rgba(255, 107, 53, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  svg {
    width: 1.4rem;
    height: 1.4rem;
    color: #ffffff;
  }
`,Ce=i.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 0.75rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,He=i.p`
  font-size: 1rem;
  color: #cccccc;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,Ae=i.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`,qe=i(x.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-transform: none;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;
  min-width: 200px;
  justify-content: center;
  box-shadow:
    0 4px 15px rgba(255, 107, 53, 0.35),
    0 1px 3px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow:
      0 8px 25px rgba(255, 107, 53, 0.45),
      0 2px 8px rgba(0, 0, 0, 0.15);
  
    &::before {
      left: 100%;
    }
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`,Me=i(x.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  color: rgba(245, 245, 245, 0.95);
  border: 1.5px solid rgba(255, 107, 53, 0.35);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-transform: none;
  letter-spacing: 0.02em;
  backdrop-filter: blur(20px) saturate(1.2);
  min-width: 200px;
  justify-content: center;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);
  
  &:hover {
    background: rgba(255, 107, 53, 0.06);
    border-color: rgba(255, 214, 98, 0.5);
    color: #ffd662;
    transform: translateY(-2px) scale(1.03);
    box-shadow:
      0 6px 20px rgba(255, 107, 53, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`,Le=i.div`
  position: absolute;
  font-size: 6rem;
  color: rgba(255, 107, 53, 0.05);
  z-index: 1;
  
  &.top-left {
    top: 10%;
    left: 5%;
    transform: rotate(-30deg);
  }
  
  &.bottom-right {
    bottom: 10%;
    right: 5%;
    transform: rotate(30deg);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,BanyaBookingSection=()=>{const{t:e}=s(),handleWhatsAppClick=()=>{const a=e("common.phone_number","+66 62 480 5877"),t=encodeURIComponent(e("common.whatsapp_messages.book_banya","Hello! I would like to book the Russian Banya"));window.open(`https://wa.me/${a.replace(/\D/g,"")}?text=${t}`,"_blank")},t=[{icon:m,title:e("banya.booking.contact.whatsapp.title","WhatsApp"),value:e("banya.booking.contact.whatsapp.value","Book via WhatsApp"),action:handleWhatsAppClick},{icon:b,title:e("banya.booking.contact.location.title","Location"),value:e("banya.booking.contact.location.value","Kathu, Phuket"),action:()=>{window.open("https://maps.app.goo.gl/h7PzpHpBeurg7eK18","_blank")}},{icon:f,title:e("banya.booking.contact.hours.title","Hours"),value:e("banya.booking.contact.hours.value","17:00 - 22:00"),action:null}];return a.jsxs(ve,{children:[a.jsx(Le,{className:"top-left",children:"᚛ᚃᚔᚏᚓ᚜"}),a.jsx(Le,{className:"bottom-right",children:"᚛ᚔᚉᚓ᚜"}),a.jsxs(ke,{children:[a.jsxs(je,{children:[a.jsx(ze,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:e("banya.booking.badge","Booking")}),a.jsx(Ie,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:a.jsx("span",{dangerouslySetInnerHTML:{__html:e("banya.booking.title",'Book the <span className="highlight">Banya</span>')}})}),a.jsx(Te,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:e("banya.booking.description","Contact us through convenient channels for booking")})]}),a.jsx(x.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.6},children:a.jsxs(_e,{children:[a.jsx(Se,{children:a.jsx("span",{dangerouslySetInnerHTML:{__html:e("banya.booking.cta.title",'Ready to immerse in the world of <span className="highlight">Russian Banya</span>?')}})}),a.jsx(Ee,{children:e("banya.booking.cta.description","Contact us for detailed information about prices, availability and features of our banya programs")}),a.jsx(Ne,{children:t.map((e,t)=>a.jsxs($e,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.8+.1*t},onClick:e.action,style:{cursor:e.action?"pointer":"default"},children:[a.jsx(Be,{children:a.jsx(e.icon,{})}),a.jsx(Ce,{children:e.title}),a.jsx(He,{children:e.value})]},t))}),a.jsxs(Ae,{children:[a.jsxs(qe,{onClick:handleWhatsAppClick,whileHover:{scale:1.05},whileTap:{scale:.95},children:[a.jsx(m,{}),e("banya.booking.book_whatsapp_button","Book via WhatsApp")]}),a.jsxs(Me,{onClick:()=>{const a=e("common.phone_number","+66 62 480 5877");window.open(`tel:${a}`,"_self")},whileHover:{scale:1.05},whileTap:{scale:.95},children:[a.jsx(c,{}),e("banya.booking.call_now_button","Call Now")]})]})]})})]})]})};r`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`,r`
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;const Ve=i.section`
  padding: clamp(5rem, 10vw, 8rem) 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
`,Pe=i.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
`,Re=i.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,Oe=i(x.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 214, 98, 0.1) 100%);
  border: 1px solid rgba(255, 214, 98, 0.3);
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffd662;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  backdrop-filter: blur(10px);

  svg {
    width: 1rem;
    height: 1rem;
    color: #ff6b35;
  }
`,Ge=i(x.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.1;
  letter-spacing: -0.02em;

  .highlight {
    background: linear-gradient(135deg, #ff6b35 0%, #ffd662 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,Ye=i(x.p)`
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  line-height: 1.6;
  background: linear-gradient(135deg, rgba(255, 214, 98, 0.9) 0%, rgba(255, 107, 53, 0.9) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 700px;
  margin: 0 auto 3rem;
  font-weight: 500;
  letter-spacing: 0.02em;
`,We=i.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ue=i(x.div)`
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 107, 53, 0.03) 0%,
      transparent 40%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(255, 107, 53, 0.05);
  }
`,De=i.button`
  width: 100%;
  padding: 2rem 2.5rem;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 2.5rem;
    right: 2.5rem;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.01);
  }
`,Fe=i.h3`
  font-size: clamp(1.25rem, 2.5vw, 1.625rem);
  font-weight: ${e=>e.$isOpen?"600":"500"};
  background: ${e=>e.$isOpen?"linear-gradient(135deg, #ffffff 0%, #ffd662 100%)":"linear-gradient(135deg, #ffffff 0%, #cccccc 100%)"};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  flex: 1;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  text-align: left;
`,Ke=i.div`
  width: 42px;
  height: 42px;
  background: ${e=>e.$isOpen?"linear-gradient(135deg, #ff6b35 0%, #ffd662 100%)":"rgba(255, 107, 53, 0.1)"};
  border: 1px solid ${e=>e.$isOpen?"rgba(255, 214, 98, 0.3)":"rgba(255, 107, 53, 0.2)"};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${e=>e.$isOpen?"#1a1a1a":"#ff6b35"};
    transform: ${e=>e.$isOpen?"rotate(180deg)":"rotate(0deg)"};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
`,Xe=i.div`
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: ${e=>e.$isOpen?"500px":"0"};
  opacity: ${e=>e.$isOpen?"1":"0"};
`,Qe=i.div`
  padding: 0 2.5rem 2.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: clamp(1.05rem, 1.8vw, 1.2rem);
  line-height: 1.8;
  letter-spacing: 0.02em;

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
  }
`,BanyaFAQSection=()=>{const{t:t}=s(),[i,r]=e.useState(null),n=[{question:t("banya.faq.questions.panoramic.question","What's special about the panoramic banya?"),answer:t("banya.faq.questions.panoramic.answer","Our banya is unique with several features: 150 square meters with panoramic jungle windows, built from Siberian cedar and Altai linden - premium natural materials. It's the only panoramic Russian banya in Phuket where you can enjoy traditional banya rituals with tropical nature views.")},{question:t("banya.faq.questions.procedures.question","What procedures are included in the banya ritual?"),answer:t("banya.faq.questions.procedures.answer","Depending on your chosen program you'll receive: classic banya ritual with birch brooms, aromatherapy with essential oils, herbal infusions and teas, option to order massage in the steam room, and personal accompaniment by a master attendant for VIP programs.")},{question:t("banya.faq.questions.materials.question","What materials is the banya built from?"),answer:t("banya.faq.questions.materials.answer","The banya is built exclusively from natural eco-friendly materials: Siberian cedar, Altai linden, Karelian birch. All finishes are natural, without chemical additives. Such materials create a special microclimate and provide natural aromatherapy.")}];return a.jsx(Ve,{children:a.jsxs(Pe,{children:[a.jsxs(Re,{children:[a.jsxs(Oe,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[a.jsx(h,{}),t("banya.faq.badge","Questions & Answers")]}),a.jsx(Ge,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:a.jsx("span",{dangerouslySetInnerHTML:{__html:t("banya.faq.title",'Frequently Asked <span className="highlight">Questions</span>')}})}),a.jsx(Ye,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:t("banya.faq.subtitle","Answers to the most popular questions about our banya")})]}),a.jsx(We,{children:n.map((e,t)=>a.jsxs(Ue,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1*t},children:[a.jsxs(De,{onClick:()=>(e=>{r(i===e?null:e)})(t),children:[a.jsx(Fe,{$isOpen:i===t,children:e.question}),a.jsx(Ke,{$isOpen:i===t,children:a.jsx(u,{})})]}),a.jsx(Xe,{$isOpen:i===t,children:a.jsx(Qe,{children:a.jsx("p",{children:e.answer})})})]},t))})]})})},Je=i.div`
  background: linear-gradient(180deg, #0a0a0a 0%, #0f0d0a 25%, #0a0a0a 50%, #0f0d0a 75%, #0a0a0a 100%);
  color: ${e=>e.theme.colors.text.primary};
  min-height: 100vh;
  font-family: 'Inter', ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  position: relative;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(ellipse at 20% 0%, rgba(255, 107, 53, 0.015) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 100%, rgba(255, 214, 98, 0.015) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`,BanyaPage=()=>{const{t:e}=s(),[i,r]=t.useState(!1);t.useEffect(()=>{document.body.classList.add("banya-page"),window.scrollTo(0,0);const e=setTimeout(()=>{r(!0)},50);return()=>{document.body.classList.remove("banya-page"),clearTimeout(e)}},[]);return i?a.jsxs(Je,{as:x.div,initial:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1,transition:{duration:.4,ease:[.43,.13,.23,.96]}},exit:{opacity:0,scale:.98,transition:{duration:.3,ease:[.43,.13,.23,.96]}}},transition:{duration:.2},children:[a.jsx(o,{titleKey:"page_titles.banya",description:e("banya.hero.subtitle","Traditional Russian banya experience"),keywords:"KAIF banya, Russian sauna, traditional banya, steam bath, Phuket",ogImage:"/images/banya/panoramic.jpg"}),a.jsx(n,{}),a.jsx($,{}),a.jsx(BanyaServicesSection,{}),a.jsx(BanyaGallerySection,{}),a.jsx(BanyaFeaturesSection,{}),a.jsx(BanyaFAQSection,{}),a.jsx(BanyaBookingSection,{})]}):null};export{BanyaPage as default};
