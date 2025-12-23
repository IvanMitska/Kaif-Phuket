const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/ExclusiveZones-zMi5JS1V.js","assets/js/react-core-DWAaPJsY.js","assets/js/styled-components-fuCKgGld.js","assets/js/vendor-misc-D8JVgYt7.js","assets/js/i18n-core-DrMVsQFB.js","assets/js/heroicons-DSEs4UIN.js","assets/js/PricingSection-CN76bsyX.js","assets/js/react-icons-D4adl-iZ.js","assets/js/BookingModal-DgblHROr.js","assets/js/framer-motion-DOblPXrY.js","assets/js/AdvantagesSection-CgXybR0-.js","assets/js/GallerySection-BdpHrPNM.js","assets/js/FAQSection-DcCnwskE.js"])))=>i.map(i=>d[i]);
import{u as e,_ as t}from"./main-CQ8D1dPr.js";import{r as i,j as a}from"./react-core-DWAaPJsY.js";import{d as o,m as r}from"./styled-components-fuCKgGld.js";import{P as n}from"./PageHead-ByG18s83.js";import{B as s}from"./BookingModal-DgblHROr.js";import{u as d}from"./i18n-core-DrMVsQFB.js";import{I as l}from"./react-icons-D4adl-iZ.js";import{ab as p}from"./vendor-misc-D8JVgYt7.js";import"./react-dom-client-BkLB9BFi.js";import"./react-dom-Bb3pWfRT.js";import"./vendor-scheduler-9xQDShOA.js";import"./i18n-detector-l8ePocMX.js";import"./react-helmet-BCF-s7y-.js";import"./framer-motion-DOblPXrY.js";import"./heroicons-DSEs4UIN.js";const m=[{webp:"/images-hero-optimized/spa.webp",webpMobile:"/images-hero-optimized/spa-mobile.webp",fallback:"/images-hero-optimized/spa.jpg",fallbackMobile:"/images-hero-optimized/spa-mobile.jpg"},{webp:"/images-hero-optimized/hero-pool.webp",webpMobile:"/images-hero-optimized/hero-pool-mobile.webp",fallback:"/images-hero-optimized/hero-pool.jpg",fallbackMobile:"/images-hero-optimized/hero-pool-mobile.jpg"},{webp:"/images-hero-optimized/hero-fitness.webp",webpMobile:"/images-hero-optimized/hero-fitness-mobile.webp",fallback:"/images-hero-optimized/hero-fitness.jpg",fallbackMobile:"/images-hero-optimized/hero-fitness-mobile.jpg"}],c=o.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  background: #000;
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box !important;
  /* Убираем все свойства, влияющие на скролл */
  scroll-snap-align: unset;
  scroll-snap-type: unset;
  scroll-snap-stop: unset;
  contain: none;
  isolation: auto;
  will-change: auto;
  touch-action: auto;
  overscroll-behavior: auto;
  -webkit-overscroll-behavior: auto;

  @media (max-width: 768px) {
    height: 100svh;
    touch-action: auto;
  }
`,x=o.div`
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;
  z-index: 1;
  will-change: auto;
  pointer-events: none;

  /* Разрешаем события только для дочерних элементов слайдера */
  > * {
    pointer-events: auto;
  }
`,g=o.div`
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;
  opacity: ${e=>e.$active?1:0};
  transition: opacity 2s ease-in-out;
  /* ИСПРАВЛЕНИЕ: Оптимизация для GPU без блокировки скролла */
  transform: translateZ(0);
  will-change: opacity;
  /* Не блокируем события указателя */
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.65) 0%,
      rgba(0,0,0,0.45) 50%,
      rgba(0,0,0,0.55) 100%
    );
    z-index: 2;
    pointer-events: none;
  }

  picture {
    position: absolute;
    inset: 0;
    display: block;
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
  }
`,h=o.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* ИСПРАВЛЕНИЕ: Разрешаем события для интерактивных элементов */
  pointer-events: auto;
  /* Не создаем дополнительные композитные слои */
  will-change: auto;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-top: 15vh;
  }

  @media (max-width: 480px) {
    padding-top: 12vh;
  }

  /* Специально для iPhone */
  @media (max-width: 414px) and (max-height: 896px) {
    padding-top: 10vh;
  }

  /* Для маленьких iPhone */
  @media (max-width: 375px) and (max-height: 812px) {
    padding-top: 8vh;
  }
`,f=o.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  
  @media (max-width: 480px) {
    padding: 0 1.5rem;
  }
`,b=o.img`
  max-width: 520px;
  width: auto;
  height: auto;
  margin: 0 0 3rem 0;
  display: block;

  @media (max-width: 768px) {
    max-width: 450px;
    margin: 0 0 2.5rem 0;
  }

  @media (max-width: 480px) {
    max-width: 420px;
    margin: 0 0 2rem 0;
  }

  /* Для маленьких экранов но все еще достаточно большой */
  @media (max-width: 375px) {
    max-width: 380px;
  }
`,u=o.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 3rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  background: #fff;
  border: none;
  border-radius: 12px;
  transition: background 0.2s ease, transform 0.2s ease;
  position: relative;
  min-width: 220px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #f5f5f5;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 1.1rem 2.5rem;
    font-size: 0.85rem;
    min-width: 200px;
  }

  @media (max-width: 480px) {
    padding: 1rem 2rem;
    font-size: 0.8rem;
    min-width: 180px;
    width: 100%;
    max-width: 300px;
  }
`,w=o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 3rem;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.95);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  transition: background 0.2s ease, transform 0.2s ease;
  position: relative;
  min-width: 220px;
  margin-top: 1.2rem;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 1.1rem 2.5rem;
    font-size: 0.85rem;
    min-width: 200px;
  }

  @media (max-width: 480px) {
    padding: 1rem 2rem;
    font-size: 0.8rem;
    min-width: 180px;
    width: 100%;
    max-width: 300px;
    margin-top: 1rem;
    background: rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
`,j=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
    gap: 0.5rem;
    /* Небольшая корректировка позиции для планшетов */
    position: relative;
    bottom: 0.5rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    max-width: 320px;
    margin-bottom: 4rem;
    gap: 0.8rem;
    /* Немного поднимаем кнопки для видимости на iPhone */
    position: relative;
    bottom: 1.5rem;
  }
  
  /* Для iPhone в портретной ориентации */
  @media (max-width: 414px) and (max-height: 896px) {
    bottom: 2rem;
    margin-bottom: 5rem;
  }
  
  /* Для маленьких iPhone (SE, Mini) */
  @media (max-width: 375px) and (max-height: 812px) {
    bottom: 2.5rem;
    margin-bottom: 6rem;
  }
`,y=i.memo(()=>{const{t:e}=d(),[t,o]=i.useState(0),[r,n]=i.useState(!1);i.useEffect(()=>{const e=setInterval(()=>{o(e=>(e+1)%m.length)},6e3);return()=>clearInterval(e)},[]);return a.jsxs(c,{children:[a.jsx(x,{children:m.map((e,i)=>a.jsx(g,{$active:i===t,children:a.jsxs("picture",{children:[a.jsx("source",{media:"(max-width: 768px)",srcSet:e.webpMobile,type:"image/webp"}),a.jsx("source",{srcSet:e.webp,type:"image/webp"}),a.jsx("source",{media:"(max-width: 768px)",srcSet:e.fallbackMobile,type:"image/jpeg"}),a.jsx("img",{src:e.fallback,alt:`KAIF - Слайд ${i+1}`,width:"1400",height:"933",loading:0===i?"eager":"lazy",decoding:0===i?"sync":"async",fetchpriority:0===i?"high":"low"})]})},`slide-${i}`))}),a.jsx(h,{children:a.jsxs(f,{children:[a.jsxs("picture",{style:{display:"block"},children:[a.jsx("source",{srcSet:"/assets/images/logo-homepage-Bvg3zKLL.webp",type:"image/webp"}),a.jsx(b,{src:"/assets/images/logo-homepage-H1DZjSiR.png",alt:"KAIF",width:"520",height:"auto",loading:"eager",fetchpriority:"high"})]}),a.jsxs(j,{children:[a.jsx(u,{as:"button",onClick:()=>n(!0),style:{cursor:"pointer"},children:e("common.book")}),a.jsx(w,{onClick:()=>{const e=document.querySelector("#exclusive-zones");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},children:e("common.learn_more")})]})]})}),a.jsx(s,{isOpen:r,onClose:()=>n(!1),service:e("booking.service.general","KAIF Club & Spa"),source:"Главная страница - Hero"})]})});y.displayName="HeroFullscreen";const v=r`
  0% { transform: translateY(-10px) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
`,z=r`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`,k=r`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,_=o.section`
  position: relative;
  width: 100%;
  padding: 2.5rem 1rem;
  margin: 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a0a0a 25%, #1a1a1a 50%, #0a1a0a 75%, #0f0f0f 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 5% 10%, rgba(198, 40, 40, 0.2) 0%, transparent 30%),
      radial-gradient(circle at 95% 90%, rgba(34, 139, 34, 0.15) 0%, transparent 30%),
      radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.08) 0%, transparent 25%),
      radial-gradient(circle at 80% 20%, rgba(198, 40, 40, 0.1) 0%, transparent 25%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`,S=o.div`
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  font-size: ${e=>e.size||"1rem"};
  animation: ${v} ${e=>e.duration||"8s"} linear infinite;
  animation-delay: ${e=>e.delay||"0s"};
  left: ${e=>e.left||"50%"};
  top: -20px;
  z-index: 1;
  pointer-events: none;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
`,$=o.div`
  position: absolute;
  width: ${e=>e.size||"4px"};
  height: ${e=>e.size||"4px"};
  background: ${e=>e.color||"#d4af37"};
  border-radius: 50%;
  animation: ${z} ${e=>e.duration||"2s"} ease-in-out infinite;
  animation-delay: ${e=>e.delay||"0s"};
  left: ${e=>e.left};
  top: ${e=>e.top};
  z-index: 1;
  pointer-events: none;
  box-shadow: 0 0 ${e=>e.glow||"6px"} ${e=>e.color||"#d4af37"};
`;o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg,
    #c62828 0%, #c62828 8%,
    #228B22 8%, #228B22 16%,
    #d4af37 16%, #d4af37 24%,
    #c62828 24%, #c62828 32%,
    #228B22 32%, #228B22 40%,
    #d4af37 40%, #d4af37 48%,
    #c62828 48%, #c62828 56%,
    #228B22 56%, #228B22 64%,
    #d4af37 64%, #d4af37 72%,
    #c62828 72%, #c62828 80%,
    #228B22 80%, #228B22 88%,
    #d4af37 88%, #d4af37 100%
  );
  box-shadow: 0 2px 10px rgba(198, 40, 40, 0.5), 0 2px 10px rgba(34, 139, 34, 0.5);
  z-index: 10;
`;const B=o.span`
  position: absolute;
  font-size: ${e=>e.size||"1.5rem"};
  left: ${e=>e.left};
  top: ${e=>e.top};
  z-index: 1;
  pointer-events: none;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
`,A=o.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,I=o.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(212, 175, 55, 0.4);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(198, 40, 40, 0.6);
    border-color: rgba(198, 40, 40, 0.8);
    transform: rotate(90deg) scale(1.1);
  }

  svg {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    top: 0.5rem;
    right: 0.5rem;
  }
`,E=o.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,P=o.div`
  flex: 0 0 auto;
  max-width: 700px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(212, 175, 55, 0.2);
  border: 2px solid rgba(212, 175, 55, 0.3);

  @media (max-width: 968px) {
    max-width: 500px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 350px;
  }
`,C=o.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
`,R=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  max-width: 400px;

  @media (max-width: 968px) {
    align-items: center;
    text-align: center;
    padding: 0 1rem;
  }
`,M=o.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 400;
  background: linear-gradient(90deg, #d4af37, #fff, #d4af37, #fff, #d4af37);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${k} 4s linear infinite;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
  text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
`,D=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
`,F=o.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`,L=o.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Y=o.li`
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  font-weight: 500;

  &::before {
    content: '★ ';
    color: #d4af37;
  }
`,K=r`
  0%, 100% { box-shadow: 0 4px 20px rgba(198, 40, 40, 0.4), 0 0 0 0 rgba(198, 40, 40, 0.4); }
  50% { box-shadow: 0 4px 25px rgba(198, 40, 40, 0.6), 0 0 0 8px rgba(198, 40, 40, 0); }
`,H=o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #c62828 0%, #b71c1c 100%);
  color: #ffffff;
  border: 2px solid rgba(212, 175, 55, 0.5);
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${K} 2s ease-in-out infinite;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 30px rgba(198, 40, 40, 0.6);
    background: linear-gradient(135deg, #d32f2f 0%, #c62828 100%);
    border-color: rgba(212, 175, 55, 0.8);
    animation: none;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem 2rem;
  }
`,EventBanner=({onClose:e})=>{const[t,o]=i.useState(!0);i.useEffect(()=>{sessionStorage.getItem("saunaRaveBannerClosed")&&o(!1)},[]);return t?a.jsx(a.Fragment,{children:t&&a.jsxs(_,{children:[a.jsx(B,{left:"2%",top:"15%",size:"1.8rem",children:"🎄"}),a.jsx(B,{left:"97%",top:"20%",size:"1.5rem",children:"🎁"}),a.jsx(B,{left:"4%",top:"80%",size:"1.3rem",children:"🔔"}),a.jsx(B,{left:"94%",top:"75%",size:"1.6rem",children:"⭐"}),a.jsx(S,{left:"5%",size:"1.2rem",duration:"10s",delay:"0s",children:"❄"}),a.jsx(S,{left:"15%",size:"0.8rem",duration:"12s",delay:"2s",children:"❄"}),a.jsx(S,{left:"25%",size:"1rem",duration:"9s",delay:"1s",children:"✦"}),a.jsx(S,{left:"35%",size:"0.9rem",duration:"11s",delay:"3s",children:"❄"}),a.jsx(S,{left:"55%",size:"1.1rem",duration:"10s",delay:"0.5s",children:"❄"}),a.jsx(S,{left:"65%",size:"0.7rem",duration:"13s",delay:"4s",children:"✦"}),a.jsx(S,{left:"75%",size:"1rem",duration:"9s",delay:"2.5s",children:"❄"}),a.jsx(S,{left:"85%",size:"0.9rem",duration:"11s",delay:"1.5s",children:"❄"}),a.jsx(S,{left:"95%",size:"1.2rem",duration:"10s",delay:"3.5s",children:"✦"}),a.jsx($,{left:"3%",top:"20%",color:"#d4af37",size:"5px",duration:"2s",delay:"0s",glow:"8px"}),a.jsx($,{left:"10%",top:"70%",color:"#d4af37",size:"4px",duration:"2.5s",delay:"0.5s",glow:"6px"}),a.jsx($,{left:"92%",top:"30%",color:"#d4af37",size:"6px",duration:"1.8s",delay:"1s",glow:"10px"}),a.jsx($,{left:"88%",top:"75%",color:"#d4af37",size:"4px",duration:"2.2s",delay:"0.3s",glow:"6px"}),a.jsx($,{left:"7%",top:"40%",color:"#c62828",size:"4px",duration:"2.3s",delay:"0.7s",glow:"8px"}),a.jsx($,{left:"95%",top:"50%",color:"#c62828",size:"5px",duration:"1.9s",delay:"1.2s",glow:"8px"}),a.jsx($,{left:"5%",top:"85%",color:"#228B22",size:"4px",duration:"2.1s",delay:"0.2s",glow:"6px"}),a.jsx($,{left:"90%",top:"15%",color:"#228B22",size:"5px",duration:"2.4s",delay:"0.8s",glow:"8px"}),a.jsxs(A,{children:[a.jsx(I,{onClick:()=>{o(!1),sessionStorage.setItem("saunaRaveBannerClosed","true"),e&&e()},children:a.jsx(l,{})}),a.jsxs(E,{children:[a.jsx(P,{children:a.jsx(C,{src:"/images/events/rave.webp",alt:"Sauna Rave Event",loading:"eager"})}),a.jsxs(R,{children:[a.jsx(M,{children:"SAUNA RAVE"}),a.jsxs(D,{children:[a.jsxs(F,{children:[a.jsx("span",{children:"📅"})," 27 December, Saturday"]}),a.jsxs(F,{children:[a.jsx("span",{children:"🕐"})," 18:30 - 21:30"]}),a.jsxs(F,{children:[a.jsx("span",{children:"📍"})," KAIF, Kathu, Phuket"]})]}),a.jsxs(L,{children:[a.jsx(Y,{children:"Group Steaming"}),a.jsx(Y,{children:"Detox Shots"}),a.jsx(Y,{children:"DJ"})]}),a.jsx(H,{onClick:()=>{const e=encodeURIComponent("Hi! I would like to book Sauna Rave Event on 27 December");window.open(`https://wa.me/66624805877?text=${e}`,"_blank")},children:"🎄 Book Now 🎄"})]})]})]})]})}):null},V=i.lazy(()=>t(()=>import("./ExclusiveZones-zMi5JS1V.js"),__vite__mapDeps([0,1,2,3,4,5]))),O=i.lazy(()=>t(()=>import("./PricingSection-CN76bsyX.js"),__vite__mapDeps([6,1,2,3,7,8,4,9,5]))),N=i.lazy(()=>t(()=>import("./AdvantagesSection-CgXybR0-.js"),__vite__mapDeps([10,1,2,3,4,9])).then(e=>({default:i.memo(e.default)}))),T=i.lazy(()=>t(()=>import("./GallerySection-BdpHrPNM.js"),__vite__mapDeps([11,1,2,3,4,9,5])).then(e=>({default:i.memo(e.GallerySection)}))),G=i.lazy(()=>t(()=>import("./FAQSection-DcCnwskE.js"),__vite__mapDeps([12,1,2,3,4,5,9])).then(e=>({default:i.memo(e.default)}))),U=o.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(144, 179, 167, 0.02);
  
  &::after {
    content: '';
    width: 24px;
    height: 24px;
    border: 2px solid rgba(144, 179, 167, 0.2);
    border-top: 2px solid #90B3A7;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,Z=o.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: rgba(144, 179, 167, 0.02);
`,q=o(p)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.2s ease;
  min-width: 200px;
  text-align: center;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  border: 2px solid transparent;
  box-shadow: 0 4px 15px rgba(144, 179, 167, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(144, 179, 167, 0.4);
    background: linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%);
    color: white;
    text-decoration: none;
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    padding: 1rem 2rem;
    font-size: 0.8rem;
    min-width: unset;
  }
  
  @media (max-width: 480px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.75rem;
    
    svg {
      width: 14px;
      height: 14px;
    }
  }
`,J=i.memo(()=>{const{t:t}=d(),{showLoading:o}=e(),r=i.useRef(!1);return i.useEffect(()=>{r.current||(r.current=!0)},[]),a.jsxs(a.Fragment,{children:[a.jsx(n,{titleKey:"page_titles.home",description:t("home.hero.subtitle","Unique relaxation and wellness experience in Phuket"),keywords:"KAIF, spa, wellness, Phuket, gym, restaurant, banya, massage",ogImage:"/images/logos/logo-og.png"}),a.jsx(y,{}),a.jsx(EventBanner,{}),a.jsx(i.Suspense,{fallback:a.jsx(U,{}),children:a.jsx(V,{})}),a.jsx(i.Suspense,{fallback:a.jsx(U,{}),children:a.jsx(O,{})}),a.jsx(i.Suspense,{fallback:a.jsx(U,{}),children:a.jsx(N,{})}),a.jsx(i.Suspense,{fallback:a.jsx(U,{}),children:a.jsx(T,{})}),a.jsx(i.Suspense,{fallback:a.jsx(U,{}),children:a.jsx(G,{})}),a.jsx(Z,{children:a.jsxs(q,{to:"/contacts",children:[t("common.contact_us"),a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})})]})});J.displayName="HomePage";export{J as default};
