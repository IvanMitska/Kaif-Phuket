import{r as e,a,j as t,y as i,c as r,R as n,z as o,A as s,C as l,D as c,F as d,d as p,E as g,G as m}from"./vendor-react-Udk5_aBK.js";import{d as b,m as f}from"./vendor-styles-DIjDOctl.js";import{P as h}from"./PageScrollReset-DmMAXs50.js";import{P as u}from"./main-DwpBmjJ2.js";import{m as x}from"./vendor-animations-B-vr_HsI.js";import"./vendor-other-CZupzcPt.js";import"./vendor-i18n-C4kh69yx.js";b.div`
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
`,b.picture`
  width: 100%;
  height: 100%;
  display: block;
`,b.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${e=>e.loaded?1:0};
`,f`
  0% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.1, 1) rotate(1deg); }
  50% { transform: scale(0.95, 1) rotate(-1deg); }
  75% { transform: scale(1.05, 1) rotate(0.5deg); }
  100% { transform: scale(1) rotate(0deg); }
`,f`
  0% { transform: translateY(0) scale(1); opacity: 0.7; }
  50% { transform: translateY(-20px) scale(1.2); opacity: 0.4; }
  100% { transform: translateY(-40px) scale(1.5); opacity: 0; }
`,f`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35, 0 0 30px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`,f`
  0% { opacity: 0.4; }
  50% { opacity: 0.7; }
  100% { opacity: 0.4; }
`;const y=b.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1410 50%, #0f0f0f 100%);
`,w=b.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  height: 100%;
`,v=b(x.div)`
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
`,k=b.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30s-13.431 30-30 30S0 46.569 0 30 13.431 0 30 0zm0 6c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24S43.255 6 30 6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
  opacity: 0.2;
  z-index: 3;
`;b.div`
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
`,b.img`
  width: auto;
  height: 140px;
  filter: drop-shadow(0 0 15px rgba(255, 147, 53, 0.4));
  object-fit: contain;
`;const j=b.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  text-align: center;
  color: #f5f5f5;
`;b(x.div)`
  display: none;
`;const z=b(x.h1)`
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
`,I=b(x.div)`
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
`,T=b(x.p)`
  display: none;
`,_=b(x.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`,S=b(x.button)`
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
`,E=b(x.button)`
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
`;b(x.div)`
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
`;const N=b.div`
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
`,$=e.memo(()=>{const{t:n,i18n:o}=a(),s="ru"===o.language,[l,c]=e.useState(0),[d,p]=e.useState(0),g=[{src:"/images/banya/panoramic.png",alt:n("banya.hero.images.panoramic","Panoramic sauna 150 m²")},{src:"/images/banya/private.jpg",alt:n("banya.hero.images.private","Private sauna")},{src:"/images/banya/public.jpg",alt:n("banya.hero.images.public","Public sauna")}];return e.useEffect(()=>{const e=setInterval(()=>{p(e=>(e+1)%g.length)},8e3);return()=>clearInterval(e)},[g.length]),e.useEffect(()=>{const e=setTimeout(()=>{c(d)},1500);return()=>clearTimeout(e)},[d]),t.jsxs(y,{children:[t.jsxs(w,{children:[t.jsx(v,{style:{backgroundImage:`url(${g[l].src})`,opacity:1,zIndex:1}},`current-${l}`),t.jsx(v,{initial:{opacity:0},animate:{opacity:l===d?0:1},transition:{duration:2,ease:"easeInOut"},style:{backgroundImage:`url(${g[d].src})`,zIndex:2}},`next-${d}`)]}),t.jsx(k,{}),t.jsx(N,{className:"top-left",children:"᚛ᚏᚓᚐᚉ᚜"}),t.jsx(N,{className:"top-right",children:"᚛ᚈᚓᚐᚉ᚜"}),t.jsx(N,{className:"bottom-left",children:"᚛ᚄᚐᚒᚈ᚜"}),t.jsx(N,{className:"bottom-right",children:"᚛ᚏᚓᚐᚉ᚜"}),t.jsxs(j,{children:[t.jsxs(z,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,delay:.2},children:[n("banya.hero.title_part1",s?"Русская":"Russian")," ",t.jsx("span",{className:"accent",children:n("banya.hero.title_part2",s?"Баня":"Banya")})]}),t.jsxs(I,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[t.jsx("span",{className:"location",children:n("banya.hero.location",s?"Пхукет":"Phuket")})," — ",t.jsxs("span",{className:"size",children:["150 ",n("banya.hero.area_unit",s?"м²":"m²")]}),t.jsx("span",{className:"feature",children:n("banya.hero.feature",s?"Самая большая баня на острове":"Largest banya on the island")})]}),t.jsx(T,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:"Сибирский кедр и алтайская липа"}),t.jsxs(_,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:[t.jsxs(S,{onClick:()=>{const e=n("common.phone_number","+66 62 480 5877"),a=encodeURIComponent(n("common.whatsapp_messages.book_banya","Hello! I would like to book the Russian Banya"));window.open(`https://wa.me/${e.replace(/\D/g,"")}?text=${a}`,"_blank")},whileHover:{scale:1.05},whileTap:{scale:.95},children:[t.jsx(i,{}),n("banya.hero.book_button","ЗАБРОНИРОВАТЬ")]}),t.jsxs(E,{onClick:()=>{const e=n("common.phone_number","+66 62 480 5877");window.open(`tel:${e}`,"_self")},whileHover:{scale:1.05},whileTap:{scale:.95},children:[t.jsx(r,{}),n("banya.hero.contacts_button","КОНТАКТЫ")]})]})]})]})}),C=b.section`
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
`,A=b.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
  z-index: 2;
`,B=b.div`
  text-align: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
`,H=b(x.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,q=b(x.p)`
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
`,M=b.div`
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
`,L=b(x.div)`
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
`,V=b.div`
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
`,R=b.div`
  flex: 1;
  margin-bottom: 1.5rem;
`,P=b.h3`
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
`,O=b.div`
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
`,G=b.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 400;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`,Y=b.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 2rem;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`,W=b.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,U=b.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 400;
`,D=b.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 500;
`,F=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  transition: transform 0.3s ease;
`,K=b.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 400;
`,X=b.span`
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
`,Q=()=>{const{t:e,i18n:i,ready:r}=a(),o="ru"===i.language,s=[{id:"intro",title:"Introductory Steaming",subtitle:"LIGHT STEAM",duration:"5-8 min",price:"1,200 THB",description:"Contact warming of back and legs with birch brooms. Light steam without turning over"},{id:"classic",title:"Classic Steaming",subtitle:"MEDIUM STEAM",duration:"10-15 min",price:"1,800 THB",description:"Steaming with oak brooms in one session. Thorough whole body steaming with aromatic steam"},{id:"artesian",title:"Artesian",subtitle:"CONTRAST STEAMING",duration:"15-20 min",price:"2,500 THB",description:"Classic steaming with oak brooms with contrast of cool mineral water. Bubble contrast sensations"}],l=(()=>{if(!r)return s.slice(0,3);try{return[{id:"intro",title:e("banya.services.rituals.intro.title","Introductory Steaming"),subtitle:e("banya.services.rituals.intro.subtitle","LIGHT STEAM"),duration:e("banya.services.rituals.intro.duration","5-8 min"),price:e("banya.services.rituals.intro.price","1,200 THB"),description:e("banya.services.rituals.intro.description","Contact warming of back and legs with birch brooms. Light steam without turning over")},{id:"classic",title:e("banya.services.rituals.classic.title","Classic Steaming"),subtitle:e("banya.services.rituals.classic.subtitle","MEDIUM STEAM"),duration:e("banya.services.rituals.classic.duration","10-15 min"),price:e("banya.services.rituals.classic.price","1,800 THB"),description:e("banya.services.rituals.classic.description","Steaming with oak brooms in one session. Thorough whole body steaming with aromatic steam")},{id:"artesian",title:e("banya.services.rituals.artesian.title","Artesian"),subtitle:e("banya.services.rituals.artesian.subtitle","CONTRAST STEAMING"),duration:e("banya.services.rituals.artesian.duration","15-20 min"),price:e("banya.services.rituals.artesian.price","2,500 THB"),description:e("banya.services.rituals.artesian.description","Classic steaming with oak brooms with contrast of cool mineral water. Bubble contrast sensations")},{id:"gravity",title:e("banya.services.rituals.gravity.title","Gravity"),subtitle:e("banya.services.rituals.gravity.subtitle","WEIGHTLESS STEAMING"),duration:e("banya.services.rituals.gravity.duration","15-20 min"),price:e("banya.services.rituals.gravity.price","2,500 THB"),description:e("banya.services.rituals.gravity.description","Classic steaming with subsequent floating in a warm pool. Complete relaxation and weightlessness")},{id:"salt_fire",title:e("banya.services.rituals.salt_fire.title","Fire Start"),subtitle:e("banya.services.rituals.salt_fire.subtitle","SALT STEAMING"),duration:e("banya.services.rituals.salt_fire.duration","15-20 min"),price:e("banya.services.rituals.salt_fire.price","2,500 THB"),description:e("banya.services.rituals.salt_fire.description","Classic steaming with sea salt application and warming through a sheet. Salt cave effect")},{id:"warrior_path",title:e("banya.services.rituals.warrior_path.title","Warrior's Path"),subtitle:e("banya.services.rituals.warrior_path.subtitle","CONTRAST STEAMING"),duration:e("banya.services.rituals.warrior_path.duration","20-25 min"),price:e("banya.services.rituals.warrior_path.price","3,500 THB"),description:e("banya.services.rituals.warrior_path.description","Steaming in two sessions with cold water dousing between them. Back warming and kvass refreshment")},{id:"stalwar",title:e("banya.services.rituals.stalwar.title","Stalwar"),subtitle:e("banya.services.rituals.stalwar.subtitle","STEEL STEAMING"),duration:e("banya.services.rituals.stalwar.duration","25-30 min"),price:e("banya.services.rituals.stalwar.price","4,000 THB"),description:e("banya.services.rituals.stalwar.description","Intensive steaming with oak and birch brooms. Maximum heat and contrast procedures")},{id:"honey",title:e("banya.services.rituals.honey.title","Honey Ritual"),subtitle:e("banya.services.rituals.honey.subtitle","WELLNESS STEAMING"),duration:e("banya.services.rituals.honey.duration","30-35 min"),price:e("banya.services.rituals.honey.price","4,500 THB"),description:e("banya.services.rituals.honey.description","Steaming with honey body wrap and herbal aromatherapy. Deep skin nourishment and relaxation")},{id:"royal",title:e("banya.services.rituals.royal.title","Royal Treatment"),subtitle:e("banya.services.rituals.royal.subtitle","PREMIUM STEAMING"),duration:e("banya.services.rituals.royal.duration","40-45 min"),price:e("banya.services.rituals.royal.price","6,000 THB"),description:e("banya.services.rituals.royal.description","Full luxury banya experience with premium oils, contrast treatments, and personal service")},{id:"valhalla",title:e("banya.services.rituals.valhalla.title","Valhalla"),subtitle:e("banya.services.rituals.valhalla.subtitle","ULTIMATE STEAMING"),duration:e("banya.services.rituals.valhalla.duration","50-60 min"),price:e("banya.services.rituals.valhalla.price","8,000 THB"),description:e("banya.services.rituals.valhalla.description","Ultimate warrior experience with multiple steaming sessions, ice treatments, and ceremonial completion")}]}catch(a){return s}})(),[c,d]=n.useState(!1);return n.useEffect(()=>{const e=()=>{d(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),t.jsx(C,{children:t.jsxs(A,{children:[t.jsxs(B,{children:[t.jsx(H,{initial:c?{opacity:0}:{opacity:0,y:20},whileInView:c?{opacity:1}:{opacity:1,y:0},viewport:{once:!0},transition:{duration:c?.4:.6},children:o?"Индивидуальные парения":"Individual Steam Sessions"}),t.jsx(q,{initial:c?{opacity:0}:{opacity:0,y:20},whileInView:c?{opacity:1}:{opacity:1,y:0},viewport:{once:!0},transition:{duration:c?.4:.6,delay:c?.05:.1},children:o?"Выберите свой идеальный банный ритуал":"Choose your perfect banya ritual"})]}),t.jsx(M,{children:l.map((e,a)=>t.jsxs(L,{initial:c?{opacity:0}:{opacity:0,y:20},whileInView:c?{opacity:1}:{opacity:1,y:0},viewport:{once:!0,margin:c?"-20px":"-50px"},transition:{duration:c?.3:.4,delay:c?.02*a:.05*a,ease:"easeOut"},children:[t.jsx(V,{}),t.jsxs(R,{children:[t.jsx(P,{className:"ritual-title",children:e.title||"Loading..."}),t.jsx(O,{children:e.subtitle||"STEAM"}),t.jsx(G,{children:e.description||"Loading description..."})]}),t.jsxs(Y,{children:[t.jsxs(W,{children:[t.jsx(U,{children:o?"Время":"Duration"}),t.jsx(D,{children:e.duration||"0 min"})]}),t.jsxs(F,{children:[t.jsx(K,{children:o?"Стоимость":"Price"}),t.jsx(X,{children:e.price||"0 THB"})]})]})]},`${e.id}-${r}`))})]})})};f`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`,f`
  0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(255, 107, 53, 0.3); }
  50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(255, 107, 53, 0.5); }
`;const J=b.section`
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
`,Z=b.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
  z-index: 2;
`,ee=b.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,ae=b(x.div)`
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
`,te=b(x.h2)`
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
`,ie=b(x.p)`
  font-size: clamp(1rem, 2.25vw, 1.375rem);
  line-height: 1.7;
  color: rgba(204, 204, 204, 0.85);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: 0.01em;
  opacity: 0.9;
`,re=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
  margin-top: clamp(3rem, 6vw, 5rem);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,ne=b(x.div)`
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
`,oe=b.div`
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

  ${ne}:hover & {
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
`,se=b.h3`
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
`,le=b.p`
  font-size: clamp(1rem, 1.75vw, 1.125rem);
  line-height: 1.7;
  color: rgba(204, 204, 204, 0.85);
  margin-bottom: 1.75rem;
  position: relative;
  z-index: 2;
  font-weight: 400;
  letter-spacing: 0.01em;
`,ce=b.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  position: relative;
  z-index: 2;
`,de=b.li`
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
`,pe=b.div`
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
`,ge=()=>{const{t:e}=a(),i=[{id:"materials",icon:o,title:e("banya.features.materials.title","Natural Materials"),description:e("banya.features.materials.description","100% natural finish from Siberian wood species"),items:[e("banya.features.materials.items.cedar","Siberian Cedar"),e("banya.features.materials.items.linden","Altai Linden"),e("banya.features.materials.items.birch","Karelian Birch"),e("banya.features.materials.items.coating","Eco-friendly finishes"),e("banya.features.materials.items.aromatherapy","Natural aromatherapy")]},{id:"panoramic",icon:s,title:e("banya.features.panoramic.title","Panoramic Design"),description:e("banya.features.panoramic.description","Unique architecture with tropical jungle views"),items:[e("banya.features.panoramic.items.area","150 square meters"),e("banya.features.panoramic.items.windows","Panoramic windows"),e("banya.features.panoramic.items.view","Jungle views"),e("banya.features.panoramic.items.lighting","Natural lighting"),e("banya.features.panoramic.items.harmony","Harmony with nature")]},{id:"safety",icon:l,title:e("banya.features.safety.title","Safety"),description:e("banya.features.safety.description","Compliance with all international safety standards"),items:[e("banya.features.safety.items.fire","Fire safety"),e("banya.features.safety.items.ventilation","Ventilation system"),e("banya.features.safety.items.emergency","Emergency lighting"),e("banya.features.safety.items.medical","Medical assistance"),e("banya.features.safety.items.security","24/7 security")]}];return t.jsxs(J,{children:[t.jsx(pe,{className:"top-left",children:"᚛ᚒᚔᚉᚔᚅᚌ᚜"}),t.jsx(pe,{className:"top-right",children:"᚛ᚄᚈᚏᚓᚅᚌᚈᚆ᚜"}),t.jsx(pe,{className:"bottom-center",children:"᚛ᚆᚑᚅᚑᚏ᚜"}),t.jsxs(Z,{children:[t.jsxs(ee,{children:[t.jsx(ae,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:t.jsx("span",{children:e("banya.features.badge","Best Banya in Phuket")})}),t.jsx(te,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:t.jsx("span",{dangerouslySetInnerHTML:{__html:e("banya.features.title",'Why Choose <span className="highlight">Us</span>')}})}),t.jsx(ie,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:e("banya.features.subtitle","Experience the authentic Russian banya with modern comfort and traditional techniques")})]}),t.jsx(re,{children:i.map((e,a)=>t.jsxs(ne,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2*a},children:[t.jsx(oe,{children:t.jsx(e.icon,{})}),t.jsx(se,{children:e.title}),t.jsx(le,{children:e.description}),t.jsx(ce,{children:e.items.map((e,a)=>t.jsx(de,{children:e},a))})]},e.id))})]})]})},me=b.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
`,be=b.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
`,fe=b.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`,he=b(x.div)`
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
`,ue=b(x.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`,xe=b(x.p)`
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
`,ye=b.div`
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
`,we=b.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #1a1a1a;
  aspect-ratio: 4/3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    border-radius: 12px;
  }
`,ve=b.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
`,ke=()=>{const{t:e}=a(),i=[{id:1,src:"/images/banya/gallery/banya-steam-room.jpg",title:e("banya.gallery.steam_room","Парная"),description:e("banya.gallery.steam_room_desc","Классическая русская парная с березовыми вениками")},{id:2,src:"/images/banya/gallery/banya-rest-area.jpg",title:e("banya.gallery.rest_area","Зона отдыха"),description:e("banya.gallery.rest_area_desc","Комфортная зона для отдыха после парной")},{id:3,src:"/images/banya/gallery/banya-cold-pool.jpg",title:e("banya.gallery.cold_pool","Холодный бассейн"),description:e("banya.gallery.cold_pool_desc","Бассейн с холодной водой для контрастных процедур")},{id:4,src:"/images/banya/gallery/banya-hot-stones.jpg",title:e("banya.gallery.hot_stones","Горячие камни"),description:e("banya.gallery.hot_stones_desc","Раскаленные камни для создания пара")},{id:5,src:"/images/banya/gallery/banya-tea-ceremony.jpg",title:e("banya.gallery.tea_ceremony","Чайная церемония"),description:e("banya.gallery.tea_ceremony_desc","Традиционное чаепитие после бани")},{id:6,src:"/images/banya/gallery/banya-lounge.jpg",title:e("banya.gallery.lounge","Лаунж зона"),description:e("banya.gallery.lounge_desc","Просторная зона отдыха")}];return t.jsx(me,{children:t.jsxs(be,{children:[t.jsxs(fe,{children:[t.jsx(he,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:e("banya.gallery.badge","ГАЛЕРЕЯ")}),t.jsx(ue,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:e("banya.gallery.title","Галерея")}),t.jsx(xe,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:e("banya.gallery.subtitle","Атмосфера настоящей русской бани")})]}),t.jsx(ye,{children:i.map(e=>t.jsx(we,{children:t.jsx(ve,{src:e.src,alt:e.title,loading:"lazy"})},e.id))})]})})},je=f`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`;f`
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
  25% { transform: scale(1.1) rotate(2deg); opacity: 1; }
  50% { transform: scale(0.9) rotate(-1deg); opacity: 0.9; }
  75% { transform: scale(1.05) rotate(1deg); opacity: 0.95; }
`;const ze=b.section`
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
`,Ie=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
  z-index: 2;
`,Te=b.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,_e=b(x.div)`
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
`,Se=b(x.h2)`
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
`,Ee=b(x.p)`
  font-size: clamp(1.05rem, 2.25vw, 1.375rem);
  line-height: 1.7;
  color: rgba(204, 204, 204, 0.9);
  max-width: 600px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: 0.01em;
  opacity: 0.85;
`,Ne=b.div`
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
`,$e=b.h3`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: #f5f5f5;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: 'Bebas Neue', 'Arial Black', sans-serif;
  
  .highlight {
    color: #ff6b35;
    animation: ${je} 4s ease-in-out infinite;
  }
`,Ce=b.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: #cccccc;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,Ae=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Be=b(x.div)`
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
`,He=b.div`
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
`,qe=b.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 0.75rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,Me=b.p`
  font-size: 1rem;
  color: #cccccc;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,Le=b.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`,Ve=b(x.button)`
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
`,Re=b(x.button)`
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
`,Pe=b.div`
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
`,Oe=()=>{const{t:e}=a(),i=()=>{const a=e("common.phone_number","+66 62 480 5877"),t=encodeURIComponent(e("common.whatsapp_messages.book_banya","Hello! I would like to book the Russian Banya"));window.open(`https://wa.me/${a.replace(/\D/g,"")}?text=${t}`,"_blank")},n=[{icon:c,title:e("banya.booking.contact.whatsapp.title","WhatsApp"),value:e("banya.booking.contact.whatsapp.value","Book via WhatsApp"),action:i},{icon:d,title:e("banya.booking.contact.location.title","Location"),value:e("banya.booking.contact.location.value","Kathu, Phuket"),action:()=>{window.open("https://maps.app.goo.gl/h7PzpHpBeurg7eK18","_blank")}},{icon:p,title:e("banya.booking.contact.hours.title","Hours"),value:e("banya.booking.contact.hours.value","17:00 - 22:00"),action:null}];return t.jsxs(ze,{children:[t.jsx(Pe,{className:"top-left",children:"᚛ᚃᚔᚏᚓ᚜"}),t.jsx(Pe,{className:"bottom-right",children:"᚛ᚔᚉᚓ᚜"}),t.jsxs(Ie,{children:[t.jsxs(Te,{children:[t.jsx(_e,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:e("banya.booking.badge","Booking")}),t.jsx(Se,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:t.jsx("span",{dangerouslySetInnerHTML:{__html:e("banya.booking.title",'Book the <span className="highlight">Banya</span>')}})}),t.jsx(Ee,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:e("banya.booking.description","Contact us through convenient channels for booking")})]}),t.jsx(x.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.6},children:t.jsxs(Ne,{children:[t.jsx($e,{children:t.jsx("span",{dangerouslySetInnerHTML:{__html:e("banya.booking.cta.title",'Ready to immerse in the world of <span className="highlight">Russian Banya</span>?')}})}),t.jsx(Ce,{children:e("banya.booking.cta.description","Contact us for detailed information about prices, availability and features of our banya programs")}),t.jsx(Ae,{children:n.map((e,a)=>t.jsxs(Be,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.8+.1*a},onClick:e.action,style:{cursor:e.action?"pointer":"default"},children:[t.jsx(He,{children:t.jsx(e.icon,{})}),t.jsx(qe,{children:e.title}),t.jsx(Me,{children:e.value})]},a))}),t.jsxs(Le,{children:[t.jsxs(Ve,{onClick:i,whileHover:{scale:1.05},whileTap:{scale:.95},children:[t.jsx(c,{}),e("banya.booking.book_whatsapp_button","Book via WhatsApp")]}),t.jsxs(Re,{onClick:()=>{const a=e("common.phone_number","+66 62 480 5877");window.open(`tel:${a}`,"_self")},whileHover:{scale:1.05},whileTap:{scale:.95},children:[t.jsx(r,{}),e("banya.booking.call_now_button","Call Now")]})]})]})})]})]})};f`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`,f`
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;const Ge=b.section`
  padding: clamp(5rem, 10vw, 8rem) 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
`,Ye=b.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
`,We=b.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,Ue=b(x.div)`
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
`,De=b(x.h2)`
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
`,Fe=b(x.p)`
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
`,Ke=b.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Xe=b(x.div)`
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
`,Qe=b.button`
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
`,Je=b.h3`
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
`,Ze=b.div`
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
`,ea=b.div`
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: ${e=>e.$isOpen?"500px":"0"};
  opacity: ${e=>e.$isOpen?"1":"0"};
`,aa=b.div`
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
`,ta=()=>{const{t:i}=a(),[r,n]=e.useState(null),o=[{question:i("banya.faq.questions.panoramic.question","What's special about the panoramic banya?"),answer:i("banya.faq.questions.panoramic.answer","Our banya is unique with several features: 150 square meters with panoramic jungle windows, built from Siberian cedar and Altai linden - premium natural materials. It's the only panoramic Russian banya in Phuket where you can enjoy traditional banya rituals with tropical nature views.")},{question:i("banya.faq.questions.procedures.question","What procedures are included in the banya ritual?"),answer:i("banya.faq.questions.procedures.answer","Depending on your chosen program you'll receive: classic banya ritual with birch brooms, aromatherapy with essential oils, herbal infusions and teas, option to order massage in the steam room, and personal accompaniment by a master attendant for VIP programs.")},{question:i("banya.faq.questions.materials.question","What materials is the banya built from?"),answer:i("banya.faq.questions.materials.answer","The banya is built exclusively from natural eco-friendly materials: Siberian cedar, Altai linden, Karelian birch. All finishes are natural, without chemical additives. Such materials create a special microclimate and provide natural aromatherapy.")}];return t.jsx(Ge,{children:t.jsxs(Ye,{children:[t.jsxs(We,{children:[t.jsxs(Ue,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[t.jsx(g,{}),i("banya.faq.badge","Questions & Answers")]}),t.jsx(De,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:t.jsx("span",{dangerouslySetInnerHTML:{__html:i("banya.faq.title",'Frequently Asked <span className="highlight">Questions</span>')}})}),t.jsx(Fe,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:i("banya.faq.subtitle","Answers to the most popular questions about our banya")})]}),t.jsx(Ke,{children:o.map((e,a)=>t.jsxs(Xe,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1*a},children:[t.jsxs(Qe,{onClick:()=>(e=>{n(r===e?null:e)})(a),children:[t.jsx(Je,{$isOpen:r===a,children:e.question}),t.jsx(Ze,{$isOpen:r===a,children:t.jsx(m,{})})]}),t.jsx(ea,{$isOpen:r===a,children:t.jsx(aa,{children:t.jsx("p",{children:e.answer})})})]},a))})]})})},ia=b.div`
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
`,ra=()=>{const{t:e}=a(),[i,r]=n.useState(!1);return n.useEffect(()=>{document.body.classList.add("banya-page"),window.scrollTo(0,0);const e=setTimeout(()=>{r(!0)},50);return()=>{document.body.classList.remove("banya-page"),clearTimeout(e)}},[]),i?t.jsxs(ia,{as:x.div,initial:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1,transition:{duration:.4,ease:[.43,.13,.23,.96]}},exit:{opacity:0,scale:.98,transition:{duration:.3,ease:[.43,.13,.23,.96]}}},transition:{duration:.2},children:[t.jsx(u,{titleKey:"page_titles.banya",description:e("banya.hero.subtitle","Traditional Russian banya experience"),keywords:"KAIF banya, Russian sauna, traditional banya, steam bath, Phuket",ogImage:"/images/banya/panoramic.jpg"}),t.jsx(h,{}),t.jsx($,{}),t.jsx(Q,{}),t.jsx(ke,{}),t.jsx(ge,{}),t.jsx(ta,{}),t.jsx(Oe,{})]}):null};export{ra as default};
