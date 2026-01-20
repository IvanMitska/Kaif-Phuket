const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/ExclusiveZones-2gte1N2p.js","assets/js/react-core-DWAaPJsY.js","assets/js/styled-components-fuCKgGld.js","assets/js/vendor-misc-D8JVgYt7.js","assets/js/i18n-core-DrMVsQFB.js","assets/js/heroicons-JeCSnvNC.js","assets/js/PricingSection-D4y0s7V9.js","assets/js/react-icons-DxYdSIzX.js","assets/js/BookingModal-D1wbjBVS.js","assets/js/framer-motion-DOblPXrY.js","assets/js/AdvantagesSection-CgXybR0-.js","assets/js/GallerySection-Br0fgcSA.js","assets/js/FAQSection-mgR88UuV.js"])))=>i.map(i=>d[i]);
import{u as e,_ as t}from"./main-CUJ33dUc.js";import{r as i,j as o}from"./react-core-DWAaPJsY.js";import{d as a}from"./styled-components-fuCKgGld.js";import{P as r}from"./PageHead-ByG18s83.js";import{B as n}from"./BookingModal-D1wbjBVS.js";import{u as s}from"./i18n-core-DrMVsQFB.js";import{ab as m}from"./vendor-misc-D8JVgYt7.js";import"./react-dom-client-BkLB9BFi.js";import"./react-dom-Bb3pWfRT.js";import"./vendor-scheduler-9xQDShOA.js";import"./i18n-detector-l8ePocMX.js";import"./react-helmet-BCF-s7y-.js";import"./framer-motion-DOblPXrY.js";const p=[{webp:"/images-hero-optimized/spa.webp",webpMobile:"/images-hero-optimized/spa-mobile.webp",fallback:"/images-hero-optimized/spa.jpg",fallbackMobile:"/images-hero-optimized/spa-mobile.jpg"},{webp:"/images-hero-optimized/hero-pool.webp",webpMobile:"/images-hero-optimized/hero-pool-mobile.webp",fallback:"/images-hero-optimized/hero-pool.jpg",fallbackMobile:"/images-hero-optimized/hero-pool-mobile.jpg"},{webp:"/images-hero-optimized/hero-fitness.webp",webpMobile:"/images-hero-optimized/hero-fitness-mobile.webp",fallback:"/images-hero-optimized/hero-fitness.jpg",fallbackMobile:"/images-hero-optimized/hero-fitness-mobile.jpg"}],d=a.section`
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
`,l=a.div`
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
`,c=a.div`
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
`,h=a.div`
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
`,x=a.div`
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
`,g=a.img`
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
`,b=a.a`
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
`,u=a.button`
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
`,f=a.div`
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
`,w=i.memo(()=>{const{t:e}=s(),[t,a]=i.useState(0),[r,m]=i.useState(!1);i.useEffect(()=>{const e=setInterval(()=>{a(e=>(e+1)%p.length)},6e3);return()=>clearInterval(e)},[]);return o.jsxs(d,{children:[o.jsx(l,{children:p.map((e,i)=>o.jsx(c,{$active:i===t,children:o.jsxs("picture",{children:[o.jsx("source",{media:"(max-width: 768px)",srcSet:e.webpMobile,type:"image/webp"}),o.jsx("source",{srcSet:e.webp,type:"image/webp"}),o.jsx("source",{media:"(max-width: 768px)",srcSet:e.fallbackMobile,type:"image/jpeg"}),o.jsx("img",{src:e.fallback,alt:`KAIF - Слайд ${i+1}`,width:"1400",height:"933",loading:0===i?"eager":"lazy",decoding:0===i?"sync":"async",fetchpriority:0===i?"high":"low"})]})},`slide-${i}`))}),o.jsx(h,{children:o.jsxs(x,{children:[o.jsxs("picture",{style:{display:"block"},children:[o.jsx("source",{srcSet:"/assets/images/logo-homepage-Bvg3zKLL.webp",type:"image/webp"}),o.jsx(g,{src:"/assets/images/logo-homepage-H1DZjSiR.png",alt:"KAIF",width:"520",height:"auto",loading:"eager",fetchpriority:"high"})]}),o.jsxs(f,{children:[o.jsx(b,{as:"button",onClick:()=>m(!0),style:{cursor:"pointer"},children:e("common.book")}),o.jsx(u,{onClick:()=>{const e=document.querySelector("#exclusive-zones");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},children:e("common.learn_more")})]})]})}),o.jsx(n,{isOpen:r,onClose:()=>m(!1),service:e("booking.service.general","KAIF Club & Spa"),source:"Главная страница - Hero"})]})});w.displayName="HeroFullscreen";const j=i.lazy(()=>t(()=>import("./ExclusiveZones-2gte1N2p.js"),__vite__mapDeps([0,1,2,3,4,5]))),v=i.lazy(()=>t(()=>import("./PricingSection-D4y0s7V9.js"),__vite__mapDeps([6,1,2,3,7,8,4,9]))),y=i.lazy(()=>t(()=>import("./AdvantagesSection-CgXybR0-.js"),__vite__mapDeps([10,1,2,3,4,9])).then(e=>({default:i.memo(e.default)}))),k=i.lazy(()=>t(()=>import("./GallerySection-Br0fgcSA.js"),__vite__mapDeps([11,1,2,3,4,9,5])).then(e=>({default:i.memo(e.GallerySection)}))),z=i.lazy(()=>t(()=>import("./FAQSection-mgR88UuV.js"),__vite__mapDeps([12,1,2,3,4,5,9])).then(e=>({default:i.memo(e.default)}))),_=a.div`
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
`,S=a.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: rgba(144, 179, 167, 0.02);
`,P=a(m)`
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
`,A=i.memo(()=>{const{t:t}=s(),{showLoading:a}=e(),n=i.useRef(!1);return i.useEffect(()=>{n.current||(n.current=!0)},[]),o.jsxs(o.Fragment,{children:[o.jsx(r,{titleKey:"page_titles.home",description:t("home.hero.subtitle","Unique relaxation and wellness experience in Phuket"),keywords:"KAIF, spa, wellness, Phuket, gym, restaurant, banya, massage",ogImage:"/images/logos/logo-og.png"}),o.jsx(w,{}),o.jsx(i.Suspense,{fallback:o.jsx(_,{}),children:o.jsx(j,{})}),o.jsx(i.Suspense,{fallback:o.jsx(_,{}),children:o.jsx(v,{})}),o.jsx(i.Suspense,{fallback:o.jsx(_,{}),children:o.jsx(y,{})}),o.jsx(i.Suspense,{fallback:o.jsx(_,{}),children:o.jsx(k,{})}),o.jsx(i.Suspense,{fallback:o.jsx(_,{}),children:o.jsx(z,{})}),o.jsx(S,{children:o.jsxs(P,{to:"/contacts",children:[t("common.contact_us"),o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})})]})});A.displayName="HomePage";export{A as default};
