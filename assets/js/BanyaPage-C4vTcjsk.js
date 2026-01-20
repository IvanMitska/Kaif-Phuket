import{r as e,j as a,R as t}from"./react-core-DWAaPJsY.js";import{d as i,m as r}from"./styled-components-fuCKgGld.js";import{P as n}from"./PageScrollReset-CpzNA0Jq.js";import{P as o}from"./PageHead-ByG18s83.js";import{B as s}from"./BookingModal-D1wbjBVS.js";import{u as l}from"./i18n-core-DrMVsQFB.js";import{n as c,a as d,o as p,p as g,q as m,r as b,F as f,b as h,s as u,t as x}from"./heroicons-JeCSnvNC.js";import{m as y}from"./framer-motion-DOblPXrY.js";import"./vendor-misc-D8JVgYt7.js";import"./react-helmet-BCF-s7y-.js";i.div`
  position: relative;
  overflow: hidden;
  background-color: #f0f0f0;

  &.loading {
    background-color: #e8e8e8;
  }
`,i.picture`
  width: 100%;
  height: 100%;
  display: block;
`,i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
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
`;const w=i.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1410 50%, #0f0f0f 100%);
`,v=i.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  height: 100%;
`,k=i(y.div)`
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
`,j=i.div`
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
`;const z=i.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  text-align: center;
  color: #f5f5f5;
`;i(y.div)`
  display: none;
`;const S=i(y.h1)`
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
`,T=i(y.div)`
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
`,_=i(y.p)`
  display: none;
`,I=i(y.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`,H=i(y.button)`
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
`,B=i(y.button)`
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
`;i(y.div)`
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
`;const E=i.div`
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
`,N=e.memo(()=>{const{t:t,i18n:i}=l(),r="ru"===i.language,[n,o]=e.useState(0),[p,g]=e.useState(0),[m,b]=e.useState(!1),f=[{src:"/images/banya/panoramic.jpg",alt:t("banya.hero.images.panoramic","Panoramic sauna 150 m²")},{src:"/images/banya/private.jpg",alt:t("banya.hero.images.private","Private sauna")},{src:"/images/banya/public.jpg",alt:t("banya.hero.images.public","Public sauna")}];e.useEffect(()=>{const e=setInterval(()=>{g(e=>(e+1)%f.length)},8e3);return()=>clearInterval(e)},[f.length]),e.useEffect(()=>{const e=setTimeout(()=>{o(p)},1500);return()=>clearTimeout(e)},[p]);return a.jsxs(w,{children:[a.jsxs(v,{children:[a.jsx(k,{style:{backgroundImage:`url(${f[n].src})`,opacity:1,zIndex:1}},`current-${n}`),a.jsx(k,{initial:{opacity:0},animate:{opacity:n===p?0:1},transition:{duration:2,ease:"easeInOut"},style:{backgroundImage:`url(${f[p].src})`,zIndex:2}},`next-${p}`)]}),a.jsx(j,{}),a.jsx(E,{className:"top-left",children:"᚛ᚏᚓᚐᚉ᚜"}),a.jsx(E,{className:"top-right",children:"᚛ᚈᚓᚐᚉ᚜"}),a.jsx(E,{className:"bottom-left",children:"᚛ᚄᚐᚒᚈ᚜"}),a.jsx(E,{className:"bottom-right",children:"᚛ᚏᚓᚐᚉ᚜"}),a.jsxs(z,{children:[a.jsxs(S,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,delay:.2},children:[t("banya.hero.title_part1",r?"Русская":"Russian")," ",a.jsx("span",{className:"accent",children:t("banya.hero.title_part2",r?"Баня":"Banya")})]}),a.jsxs(T,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[a.jsx("span",{className:"location",children:t("banya.hero.location",r?"Пхукет":"Phuket")})," — ",a.jsxs("span",{className:"size",children:["150 ",t("banya.hero.area_unit",r?"м²":"m²")]}),a.jsx("span",{className:"feature",children:t("banya.hero.feature",r?"Самая большая баня на острове":"Largest banya on the island")})]}),a.jsx(_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:"Сибирский кедр и алтайская липа"}),a.jsxs(I,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:[a.jsxs(H,{onClick:()=>b(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:[a.jsx(c,{}),t("banya.hero.book_button","ЗАБРОНИРОВАТЬ")]}),a.jsxs(B,{onClick:()=>{const e=t("common.phone_number","+66 62 480 5877");window.open(`tel:${e}`,"_self")},whileHover:{scale:1.05},whileTap:{scale:.95},children:[a.jsx(d,{}),t("banya.hero.contacts_button","КОНТАКТЫ")]})]})]}),a.jsx(s,{isOpen:m,onClose:()=>b(!1),service:t("banya.booking.service","Russian Banya"),source:"Banya page - Hero"})]})}),A=i.section`
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
`,q=i.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
  z-index: 2;
`,C=i.div`
  text-align: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
`,$=i.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,M=i.p`
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
`,R=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1201px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }
`,O=i.div`
  background: #151515;
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

  @media (hover: hover) and (pointer: fine) {
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    min-height: auto;
    border-radius: 20px;
  }
`,P=i.div`
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
`,L=i.div`
  flex: 1;
  margin-bottom: 1.5rem;
`,V=i.h3`
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
`,Y=i.div`
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
`,W=i.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 400;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`,G=i.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 2rem;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`,U=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,F=i.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 400;
`,D=i.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 500;
`,K=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  transition: transform 0.3s ease;
`,X=i.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 400;
`,Q=i.span`
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
`,BanyaServicesSection=()=>{const{t:e,i18n:t,ready:i}=l(),r="ru"===t.language,n=[{id:"intro",title:"Introductory Steaming",subtitle:"LIGHT STEAM",duration:"7-10 min",price:"1,000 THB",description:"A short and sensitive ritual with gentle warming of back and legs"},{id:"lady",title:"Lady's Steaming",subtitle:"LOW-TEMPERATURE",duration:"10-15 min",price:"1,500 THB",description:"Special low-temperature technique with deep local warming"},{id:"classic",title:"Classic Steaming",subtitle:"MEDIUM STEAM",duration:"10-15 min",price:"1,800 THB",description:"Steaming with oak brooms in one session. Thorough whole body steaming with aromatic steam"}],o=(()=>{if(!i)return n.slice(0,3);try{return[{id:"intro",title:e("banya.services.rituals.intro.title","Children's Introductory Steaming"),subtitle:e("banya.services.rituals.intro.subtitle","LIGHT STEAM"),duration:e("banya.services.rituals.intro.duration","7-10 min"),price:e("banya.services.rituals.intro.price","1,000 THB"),description:e("banya.services.rituals.intro.description","A short and sensitive ritual with gentle warming of back and legs")},{id:"lady",title:e("banya.services.rituals.lady.title","Lady's Steaming"),subtitle:e("banya.services.rituals.lady.subtitle","LOW-TEMPERATURE"),duration:e("banya.services.rituals.lady.duration","10-15 min"),price:e("banya.services.rituals.lady.price","1,500 THB"),description:e("banya.services.rituals.lady.description","Special low-temperature technique with deep local warming")},{id:"classic",title:e("banya.services.rituals.classic.title","Classic Steaming"),subtitle:e("banya.services.rituals.classic.subtitle","MEDIUM STEAM"),duration:e("banya.services.rituals.classic.duration","10-15 min"),price:e("banya.services.rituals.classic.price","1,800 THB"),description:e("banya.services.rituals.classic.description","Steaming with oak brooms in one session. Thorough whole body steaming with aromatic steam")},{id:"artesian",title:e("banya.services.rituals.artesian.title","Artesian"),subtitle:e("banya.services.rituals.artesian.subtitle","CONTRAST STEAMING"),duration:e("banya.services.rituals.artesian.duration","15-20 min"),price:e("banya.services.rituals.artesian.price","2,250 THB"),description:e("banya.services.rituals.artesian.description","Intense warming with oak brooms enhanced by the contrast of cool mineral water")},{id:"gravity",title:e("banya.services.rituals.gravity.title","Gravity"),subtitle:e("banya.services.rituals.gravity.subtitle","WEIGHTLESS STEAMING"),duration:e("banya.services.rituals.gravity.duration","15-20 min"),price:e("banya.services.rituals.gravity.price","2,250 THB"),description:e("banya.services.rituals.gravity.description","Intense warming with transition to warm pool. Feeling of weightlessness")},{id:"salt_fire",title:e("banya.services.rituals.salt_fire.title","The Fire Starter"),subtitle:e("banya.services.rituals.salt_fire.subtitle","SALT STEAMING"),duration:e("banya.services.rituals.salt_fire.duration","15-20 min"),price:e("banya.services.rituals.salt_fire.price","2,250 THB"),description:e("banya.services.rituals.salt_fire.description","Intense warming with sea salt application and warming through a sheet. Salt cave effect")},{id:"four_hands",title:e("banya.services.rituals.four_hands.title","Four-Hand Steaming"),subtitle:e("banya.services.rituals.four_hands.subtitle","SYNCHRONIZED"),duration:e("banya.services.rituals.four_hands.duration","15-20 min"),price:e("banya.services.rituals.four_hands.price","2,500 THB"),description:e("banya.services.rituals.four_hands.description","Two steam masters work in perfect synchronization")},{id:"sports",title:e("banya.services.rituals.sports.title","Sports Steaming"),subtitle:e("banya.services.rituals.sports.subtitle","WITH MASSAGE"),duration:e("banya.services.rituals.sports.duration","20-25 min"),price:e("banya.services.rituals.sports.price","2,500 THB"),description:e("banya.services.rituals.sports.description","Intense warming to the depth of muscles with massage elements")},{id:"stalwar",title:e("banya.services.rituals.stalwar.title","Thor's Power"),subtitle:e("banya.services.rituals.stalwar.subtitle","INTENSE STEAM"),duration:e("banya.services.rituals.stalwar.duration","15-20 min"),price:e("banya.services.rituals.stalwar.price","3,000 THB"),description:e("banya.services.rituals.stalwar.description","Intense steam and contrast for those who love the heat")},{id:"warrior_path",title:e("banya.services.rituals.warrior_path.title","Warrior's Path"),subtitle:e("banya.services.rituals.warrior_path.subtitle","CONTRAST STEAMING"),duration:e("banya.services.rituals.warrior_path.duration","20-25 min"),price:e("banya.services.rituals.warrior_path.price","3,500 THB"),description:e("banya.services.rituals.warrior_path.description","Steaming in two sessions with cold water dousing between them")},{id:"honey",title:e("banya.services.rituals.honey.title","Honey Steaming"),subtitle:e("banya.services.rituals.honey.subtitle","WITH NATURAL HONEY"),duration:e("banya.services.rituals.honey.duration","15-20 min"),price:e("banya.services.rituals.honey.price","3,500 THB"),description:e("banya.services.rituals.honey.description","Steaming with Canadian brooms and honey application")},{id:"valhalla",title:e("banya.services.rituals.valhalla.title","Valhalla"),subtitle:e("banya.services.rituals.valhalla.subtitle","GROUP STEAMING"),duration:e("banya.services.rituals.valhalla.duration","10-20 min"),price:e("banya.services.rituals.valhalla.price","3,500 THB"),description:e("banya.services.rituals.valhalla.description","Steaming with fan and brooms for a group of 2-4 people")},{id:"royal",title:e("banya.services.rituals.royal.title","Royal Steaming"),subtitle:e("banya.services.rituals.royal.subtitle","HONEY-SALT SCRUB"),duration:e("banya.services.rituals.royal.duration","25-30 min"),price:e("banya.services.rituals.royal.price","4,000 THB"),description:e("banya.services.rituals.royal.description","Royal ritual of deep warming and cleansing with honey and sea salt")}]}catch(a){return n}})();return a.jsx(A,{children:a.jsxs(q,{children:[a.jsxs(C,{children:[a.jsx($,{children:r?"Индивидуальные парения":"Individual Steam Sessions"}),a.jsx(M,{children:r?"Выберите свой идеальный банный ритуал":"Choose your perfect banya ritual"})]}),a.jsx(R,{children:o.map(e=>a.jsxs(O,{children:[a.jsx(P,{}),a.jsxs(L,{children:[a.jsx(V,{className:"ritual-title",children:e.title||"Loading..."}),a.jsx(Y,{children:e.subtitle||"STEAM"}),a.jsx(W,{children:e.description||"Loading description..."})]}),a.jsxs(G,{children:[a.jsxs(U,{children:[a.jsx(F,{children:r?"Время":"Duration"}),a.jsx(D,{children:e.duration||"0 min"})]}),a.jsxs(K,{children:[a.jsx(X,{children:r?"Стоимость":"Price"}),a.jsx(Q,{children:e.price||"0 THB"})]})]})]},e.id))})]})})};r`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`,r`
  0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(255, 107, 53, 0.3); }
  50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(255, 107, 53, 0.5); }
`;const J=i.section`
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
`,Z=i.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
  z-index: 2;
`,ee=i.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,ae=i(y.div)`
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
`,te=i(y.h2)`
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
`,ie=i(y.p)`
  font-size: clamp(1rem, 2.25vw, 1.375rem);
  line-height: 1.7;
  color: rgba(204, 204, 204, 0.85);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: 0.01em;
  opacity: 0.9;
`,re=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
  margin-top: clamp(3rem, 6vw, 5rem);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,ne=i(y.div)`
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
`,oe=i.div`
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
`,se=i.h3`
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
`,le=i.p`
  font-size: clamp(1rem, 1.75vw, 1.125rem);
  line-height: 1.7;
  color: rgba(204, 204, 204, 0.85);
  margin-bottom: 1.75rem;
  position: relative;
  z-index: 2;
  font-weight: 400;
  letter-spacing: 0.01em;
`,ce=i.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  position: relative;
  z-index: 2;
`,de=i.li`
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
`,pe=i.div`
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
`,BanyaFeaturesSection=()=>{const{t:e}=l(),t=[{id:"materials",icon:p,title:e("banya.features.materials.title","Natural Materials"),description:e("banya.features.materials.description","100% natural finish from Siberian wood species"),items:[e("banya.features.materials.items.cedar","Siberian Cedar"),e("banya.features.materials.items.linden","Altai Linden"),e("banya.features.materials.items.birch","Karelian Birch"),e("banya.features.materials.items.coating","Eco-friendly finishes"),e("banya.features.materials.items.aromatherapy","Natural aromatherapy")]},{id:"panoramic",icon:g,title:e("banya.features.panoramic.title","Panoramic Design"),description:e("banya.features.panoramic.description","Unique architecture with tropical jungle views"),items:[e("banya.features.panoramic.items.area","150 square meters"),e("banya.features.panoramic.items.windows","Panoramic windows"),e("banya.features.panoramic.items.view","Jungle views"),e("banya.features.panoramic.items.lighting","Natural lighting"),e("banya.features.panoramic.items.harmony","Harmony with nature")]},{id:"safety",icon:m,title:e("banya.features.safety.title","Safety"),description:e("banya.features.safety.description","Compliance with all international safety standards"),items:[e("banya.features.safety.items.fire","Fire safety"),e("banya.features.safety.items.ventilation","Ventilation system"),e("banya.features.safety.items.emergency","Emergency lighting"),e("banya.features.safety.items.medical","Medical assistance"),e("banya.features.safety.items.security","24/7 security")]}];return a.jsxs(J,{children:[a.jsx(pe,{className:"top-left",children:"᚛ᚒᚔᚉᚔᚅᚌ᚜"}),a.jsx(pe,{className:"top-right",children:"᚛ᚄᚈᚏᚓᚅᚌᚈᚆ᚜"}),a.jsx(pe,{className:"bottom-center",children:"᚛ᚆᚑᚅᚑᚏ᚜"}),a.jsxs(Z,{children:[a.jsxs(ee,{children:[a.jsx(ae,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:a.jsx("span",{children:e("banya.features.badge","Best Banya in Phuket")})}),a.jsx(te,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:a.jsx("span",{dangerouslySetInnerHTML:{__html:e("banya.features.title",'Why Choose <span className="highlight">Us</span>')}})}),a.jsx(ie,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:e("banya.features.subtitle","Experience the authentic Russian banya with modern comfort and traditional techniques")})]}),a.jsx(re,{children:t.map((e,t)=>a.jsxs(ne,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2*t},children:[a.jsx(oe,{children:a.jsx(e.icon,{})}),a.jsx(se,{children:e.title}),a.jsx(le,{children:e.description}),a.jsx(ce,{children:e.items.map((e,t)=>a.jsx(de,{children:e},t))})]},e.id))})]})]})},ge=i.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
`,me=i.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
`,be=i.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`,fe=i(y.div)`
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
`,he=i(y.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`,ue=i(y.p)`
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
`,xe=i.div`
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
`,ye=i.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #1a1a1a;
  aspect-ratio: 4/3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    border-radius: 12px;
  }
`,we=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
`,BanyaGallerySection=()=>{const{t:e}=l(),t=[{id:1,src:"/images/banya/gallery/banya-steam-room.jpg",title:e("banya.gallery.steam_room","Парная"),description:e("banya.gallery.steam_room_desc","Классическая русская парная с березовыми вениками")},{id:2,src:"/images/banya/gallery/banya-rest-area.jpg",title:e("banya.gallery.rest_area","Зона отдыха"),description:e("banya.gallery.rest_area_desc","Комфортная зона для отдыха после парной")},{id:3,src:"/images/banya/gallery/banya-cold-pool.jpg",title:e("banya.gallery.cold_pool","Холодный бассейн"),description:e("banya.gallery.cold_pool_desc","Бассейн с холодной водой для контрастных процедур")},{id:4,src:"/images/banya/gallery/banya-hot-stones.jpg",title:e("banya.gallery.hot_stones","Горячие камни"),description:e("banya.gallery.hot_stones_desc","Раскаленные камни для создания пара")},{id:5,src:"/images/banya/gallery/banya-tea-ceremony.jpg",title:e("banya.gallery.tea_ceremony","Чайная церемония"),description:e("banya.gallery.tea_ceremony_desc","Традиционное чаепитие после бани")},{id:6,src:"/images/banya/gallery/banya-lounge.jpg",title:e("banya.gallery.lounge","Лаунж зона"),description:e("banya.gallery.lounge_desc","Просторная зона отдыха")}];return a.jsx(ge,{children:a.jsxs(me,{children:[a.jsxs(be,{children:[a.jsx(fe,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:e("banya.gallery.badge","ГАЛЕРЕЯ")}),a.jsx(he,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:e("banya.gallery.title","Галерея")}),a.jsx(ue,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:e("banya.gallery.subtitle","Атмосфера настоящей русской бани")})]}),a.jsx(xe,{children:t.map(e=>a.jsx(ye,{children:a.jsx(we,{src:e.src,alt:e.title,loading:"lazy"})},e.id))})]})})},ve=r`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`;r`
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
  25% { transform: scale(1.1) rotate(2deg); opacity: 1; }
  50% { transform: scale(0.9) rotate(-1deg); opacity: 0.9; }
  75% { transform: scale(1.05) rotate(1deg); opacity: 0.95; }
`;const ke=i.section`
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
`,je=i.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
  z-index: 2;
`,ze=i.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,Se=i(y.div)`
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
`,Te=i(y.h2)`
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
`,_e=i(y.p)`
  font-size: clamp(1.05rem, 2.25vw, 1.375rem);
  line-height: 1.7;
  color: rgba(204, 204, 204, 0.9);
  max-width: 600px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: 0.01em;
  opacity: 0.85;
`,Ie=i.div`
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
`,He=i.h3`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: #f5f5f5;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: 'Bebas Neue', 'Arial Black', sans-serif;
  
  .highlight {
    color: #ff6b35;
    animation: ${ve} 4s ease-in-out infinite;
  }
`,Be=i.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: #cccccc;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,Ee=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Ne=i(y.div)`
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
`,Ae=i.div`
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
`,qe=i.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 0.75rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,Ce=i.p`
  font-size: 1rem;
  color: #cccccc;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,$e=i.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`,Me=i(y.button)`
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
`,Re=i(y.button)`
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
`,Oe=i.div`
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
`,BanyaBookingSection=()=>{const{t:t}=l(),[i,r]=e.useState(!1),n=[{icon:b,title:t("banya.booking.contact.whatsapp.title","WhatsApp"),value:t("banya.booking.contact.whatsapp.value","Book via WhatsApp"),action:()=>{const e=t("common.phone_number","+66 62 480 5877"),a=encodeURIComponent(t("common.whatsapp_messages.book_banya","Hello! I would like to book the Russian Banya"));window.open(`https://wa.me/${e.replace(/\D/g,"")}?text=${a}`,"_blank")}},{icon:f,title:t("banya.booking.contact.location.title","Location"),value:t("banya.booking.contact.location.value","Kathu, Phuket"),action:()=>{window.open("https://maps.app.goo.gl/h7PzpHpBeurg7eK18","_blank")}},{icon:h,title:t("banya.booking.contact.hours.title","Hours"),value:t("banya.booking.contact.hours.value","17:00 - 22:00"),action:null}];return a.jsxs(ke,{children:[a.jsx(Oe,{className:"top-left",children:"᚛ᚃᚔᚏᚓ᚜"}),a.jsx(Oe,{className:"bottom-right",children:"᚛ᚔᚉᚓ᚜"}),a.jsxs(je,{children:[a.jsxs(ze,{children:[a.jsx(Se,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:t("banya.booking.badge","Booking")}),a.jsx(Te,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:a.jsx("span",{dangerouslySetInnerHTML:{__html:t("banya.booking.title",'Book the <span className="highlight">Banya</span>')}})}),a.jsx(_e,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:t("banya.booking.description","Contact us through convenient channels for booking")})]}),a.jsx(y.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.6},children:a.jsxs(Ie,{children:[a.jsx(He,{children:a.jsx("span",{dangerouslySetInnerHTML:{__html:t("banya.booking.cta.title",'Ready to immerse in the world of <span className="highlight">Russian Banya</span>?')}})}),a.jsx(Be,{children:t("banya.booking.cta.description","Contact us for detailed information about prices, availability and features of our banya programs")}),a.jsx(Ee,{children:n.map((e,t)=>a.jsxs(Ne,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.8+.1*t},onClick:e.action,style:{cursor:e.action?"pointer":"default"},children:[a.jsx(Ae,{children:a.jsx(e.icon,{})}),a.jsx(qe,{children:e.title}),a.jsx(Ce,{children:e.value})]},t))}),a.jsxs($e,{children:[a.jsxs(Me,{onClick:()=>r(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:[a.jsx(c,{}),t("banya.booking.book_online_button","Book Online")]}),a.jsxs(Re,{onClick:()=>{const e=t("common.phone_number","+66 62 480 5877");window.open(`tel:${e}`,"_self")},whileHover:{scale:1.05},whileTap:{scale:.95},children:[a.jsx(d,{}),t("banya.booking.call_now_button","Call Now")]})]})]})})]}),a.jsx(s,{isOpen:i,onClose:()=>r(!1),service:t("banya.booking.service","Russian Banya"),source:"Banya page - booking section"})]})};r`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`,r`
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;const Pe=i.section`
  padding: clamp(5rem, 10vw, 8rem) 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
`,Le=i.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
`,Ve=i.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,Ye=i(y.div)`
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
`,We=i(y.h2)`
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
`,Ge=i(y.p)`
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
`,Ue=i.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Fe=i(y.div)`
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
`,Ke=i.h3`
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
`,Xe=i.div`
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
`,Qe=i.div`
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: ${e=>e.$isOpen?"500px":"0"};
  opacity: ${e=>e.$isOpen?"1":"0"};
`,Je=i.div`
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
`,BanyaFAQSection=()=>{const{t:t}=l(),[i,r]=e.useState(null),n=[{question:t("banya.faq.questions.panoramic.question","What's special about the panoramic banya?"),answer:t("banya.faq.questions.panoramic.answer","Our banya is unique with several features: 150 square meters with panoramic jungle windows, built from Siberian cedar and Altai linden - premium natural materials. It's the only panoramic Russian banya in Phuket where you can enjoy traditional banya rituals with tropical nature views.")},{question:t("banya.faq.questions.procedures.question","What procedures are included in the banya ritual?"),answer:t("banya.faq.questions.procedures.answer","Depending on your chosen program you'll receive: classic banya ritual with birch brooms, aromatherapy with essential oils, herbal infusions and teas, option to order massage in the steam room, and personal accompaniment by a master attendant for VIP programs.")},{question:t("banya.faq.questions.materials.question","What materials is the banya built from?"),answer:t("banya.faq.questions.materials.answer","The banya is built exclusively from natural eco-friendly materials: Siberian cedar, Altai linden, Karelian birch. All finishes are natural, without chemical additives. Such materials create a special microclimate and provide natural aromatherapy.")}];return a.jsx(Pe,{children:a.jsxs(Le,{children:[a.jsxs(Ve,{children:[a.jsxs(Ye,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[a.jsx(u,{}),t("banya.faq.badge","Questions & Answers")]}),a.jsx(We,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:a.jsx("span",{dangerouslySetInnerHTML:{__html:t("banya.faq.title",'Frequently Asked <span className="highlight">Questions</span>')}})}),a.jsx(Ge,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:t("banya.faq.subtitle","Answers to the most popular questions about our banya")})]}),a.jsx(Ue,{children:n.map((e,t)=>a.jsxs(Fe,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1*t},children:[a.jsxs(De,{onClick:()=>(e=>{r(i===e?null:e)})(t),children:[a.jsx(Ke,{$isOpen:i===t,children:e.question}),a.jsx(Xe,{$isOpen:i===t,children:a.jsx(x,{})})]}),a.jsx(Qe,{$isOpen:i===t,children:a.jsx(Je,{children:a.jsx("p",{children:e.answer})})})]},t))})]})})},Ze=i.div`
  background: #0a0a0a;
  color: ${e=>e.theme.colors.text.primary};
  min-height: 100vh;
  font-family: 'Inter', ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`,BanyaPage=()=>{const{t:e}=l();return t.useEffect(()=>(document.body.classList.add("banya-page"),window.scrollTo(0,0),()=>{document.body.classList.remove("banya-page")}),[]),a.jsxs(Ze,{children:[a.jsx(o,{titleKey:"page_titles.banya",description:e("banya.hero.subtitle","Traditional Russian banya experience"),keywords:"KAIF banya, Russian sauna, traditional banya, steam bath, Phuket",ogImage:"/images/banya/panoramic.jpg"}),a.jsx(n,{}),a.jsx(N,{}),a.jsx(BanyaServicesSection,{}),a.jsx(BanyaGallerySection,{}),a.jsx(BanyaFeaturesSection,{}),a.jsx(BanyaFAQSection,{}),a.jsx(BanyaBookingSection,{})]})};export{BanyaPage as default};
