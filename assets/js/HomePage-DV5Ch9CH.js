const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/PromotionsSlider-8lMGzsxm.js","assets/js/react-core-CV8k_GRh.js","assets/js/lucide-Ch0YV0fj.js","assets/js/ExclusiveZones-CgY8S_v8.js","assets/js/styled-components-CMIfAvVS.js","assets/js/vendor-misc-Bm4JrmXh.js","assets/js/i18n-core-CSZVPE1N.js","assets/js/heroicons-B0mUXsxG.js","assets/js/framer-motion-h7lgP0Yp.js","assets/js/PricingSection-BGHycazb.js","assets/js/react-icons-DCZb7Iim.js","assets/js/AdvantagesSection-XqTi9r6s.js","assets/js/GallerySection-BYZHscnm.js","assets/js/FAQSection-DLF_6SCj.js"])))=>i.map(i=>d[i]);
import{_ as e}from"./main-C1zLyBkI.js"
import{r as t,j as i}from"./react-core-CV8k_GRh.js"
import{u as a}from"./App-F156KX6S.js"
import{d as o}from"./styled-components-CMIfAvVS.js"
import{P as r}from"./PageHead-C4ywpL0o.js"
import{u as n}from"./i18n-core-CSZVPE1N.js"
import{a as s}from"./framer-motion-h7lgP0Yp.js"
import{ab as d}from"./vendor-misc-Bm4JrmXh.js"
import"./react-dom-client-fHgFUAUX.js"
import"./react-dom-C7S9v3DL.js"
import"./vendor-scheduler-DKYT7Wy5.js"
import"./react-helmet-C_ZFuiA7.js"
const p=[{webp:"/images-optimized/spa.jpg",fallback:"/images-optimized/spa.jpg"},{webp:"/images-webp/hero/hero-pool.webp",fallback:"/images-optimized/hero/hero-pool.jpg"},{webp:"/images-webp/hero/hero-restaurant.webp",fallback:"/images-optimized/hero/hero-restaurant.jpg"},{webp:"/images-webp/hero/hero-fitness.webp",fallback:"/images-optimized/hero/hero-fitness.jpg"}],m=o.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  background: #000;
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
    min-height: 100svh;
    height: auto;
    touch-action: auto;
  }
`,l=o.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  will-change: auto;
  pointer-events: none;

  /* Разрешаем события только для дочерних элементов слайдера */
  > * {
    pointer-events: auto;
  }
`,c=o.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.65) 0%,
      rgba(0,0,0,0.45) 50%,
      rgba(0,0,0,0.55) 100%
    );
    z-index: 2;
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.8) contrast(1.1) saturate(0.9);
    /* Не блокируем события указателя */
    pointer-events: none;
    /* Оптимизация без создания новых слоев */
    will-change: auto;
  }
`,h=o.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 3rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* ИСПРАВЛЕНИЕ: Разрешаем события для интерактивных элементов */
  pointer-events: auto;
  /* Не создаем дополнительные композитные слои */
  will-change: auto;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
    /* Сдвигаем контент немного выше для лучшей видимости кнопок */
    justify-content: flex-start;
    padding-top: 15vh;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0;
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
`,x=o.div`
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
`,g=o(s.img)`
  max-width: 520px;
  width: auto;
  height: auto;
  margin: 0 0 3rem 0;
  display: block;
  filter:
    drop-shadow(0 25px 80px rgba(0, 0, 0, 0.9))
    drop-shadow(0 10px 30px rgba(0, 0, 0, 0.7));

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
`,b=o.a`
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
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  min-width: 220px;
  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.3),
    0 15px 50px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 0, 0, 0.05),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow:
      0 12px 35px rgba(0, 0, 0, 0.4),
      0 20px 60px rgba(0, 0, 0, 0.25);
    color: #000;
    text-decoration: none;

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
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
`,u=o.button`
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
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-out;
  position: relative;
  min-width: 220px;
  margin-top: 1.2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  font-family: inherit;

  &:hover {
    color: rgba(255, 255, 255, 1);
    border-color: rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
    text-decoration: none;
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
    /* Улучшенная видимость на мобильных */
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }
`,f=o.div`
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
`,w={logo:{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1,transition:{duration:.8,ease:"easeOut",delay:.2}}},buttons:{initial:{opacity:0,y:15},animate:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut",delay:.6}}}},j=t.memo(()=>{const{t:e}=n(),[a,o]=t.useState(0)
return t.useEffect(()=>{const e=setInterval(()=>{o(e=>(e+1)%p.length)},6e3)
return()=>clearInterval(e)},[]),i.jsxs(m,{children:[i.jsx(l,{children:p.map((e,t)=>i.jsx(c,{$active:t===a,children:i.jsxs("picture",{children:[i.jsx("source",{srcSet:e.webp,type:"image/webp"}),i.jsx("img",{src:e.fallback,alt:`KAIF - Слайд ${t+1}`,width:"1920",height:"1080",loading:0===t?"eager":"lazy",decoding:"async",fetchpriority:0===t?"high":"low",onError:e=>{const i=["https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75","https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75","https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75"]
e.target.src=i[t%i.length]}})]})},`slide-${t}`))}),i.jsx(h,{children:i.jsxs(x,{children:[i.jsxs("picture",{style:{display:"block"},children:[i.jsx("source",{srcSet:"/assets/images/logo-homepage-Bvg3zKLL.webp",type:"image/webp"}),i.jsx(g,{src:"/assets/images/logo-homepage-H1DZjSiR.png",alt:"KAIF",width:"520",height:"auto",initial:w.logo.initial,animate:w.logo.animate,whileHover:{scale:1.02,transition:{duration:.2,ease:"easeOut"}}})]}),i.jsxs(f,{as:s.div,initial:w.buttons.initial,animate:w.buttons.animate,children:[i.jsx(s.div,{whileHover:{scale:1.02,transition:{duration:.15,ease:"easeOut"}},whileTap:{scale:.98},children:i.jsx(b,{href:"https://wa.me/66624805877?text=Здравствуйте! Хочу записаться в KAIF",target:"_blank",rel:"noopener noreferrer",children:e("common.book")})}),i.jsx(s.div,{onClick:()=>{const e=document.querySelector("#exclusive-zones")
e&&e.scrollIntoView({behavior:"smooth",block:"start"})},whileHover:{scale:1.01,transition:{duration:.15,ease:"easeOut"}},whileTap:{scale:.99},children:i.jsx(u,{children:e("common.learn_more")})})]})]})})]})})
j.displayName="HeroFullscreen"
const v=t.lazy(()=>e(()=>import("./PromotionsSlider-8lMGzsxm.js"),__vite__mapDeps([0,1,2]))),y=t.lazy(()=>e(()=>import("./ExclusiveZones-CgY8S_v8.js"),__vite__mapDeps([3,1,4,5,6,7,8]))),k=t.lazy(()=>e(()=>import("./PricingSection-BGHycazb.js"),__vite__mapDeps([9,1,4,5,10,6,8]))),_=t.lazy(()=>e(()=>import("./AdvantagesSection-XqTi9r6s.js"),__vite__mapDeps([11,1,4,5,6,8])).then(e=>({default:t.memo(e.default)}))),z=t.lazy(()=>e(()=>import("./GallerySection-BYZHscnm.js"),__vite__mapDeps([12,1,4,5,6,8,7])).then(e=>({default:t.memo(e.GallerySection)}))),P=t.lazy(()=>e(()=>import("./FAQSection-DLF_6SCj.js"),__vite__mapDeps([13,1,4,5,6,7,8])).then(e=>({default:t.memo(e.default)}))),E=o.div`
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
`,S=o.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: rgba(144, 179, 167, 0.02);
`,A=o(d)`
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
`,I=t.memo(()=>{const{t:e}=n(),{showLoading:o}=a(),s=t.useRef(0)
return t.useEffect(()=>{s.current||(s.current=1)},[]),i.jsxs("main",{children:[i.jsx(r,{titleKey:"page_titles.home",description:e("home.hero.subtitle","Unique relaxation and wellness experience in Phuket"),keywords:"KAIF, spa, wellness, Phuket, gym, restaurant, banya, massage",ogImage:"/images/logos/logo-og.png"}),i.jsx(j,{}),i.jsx(t.Suspense,{fallback:i.jsx(E,{}),children:i.jsx(v,{})}),i.jsx(t.Suspense,{fallback:i.jsx(E,{}),children:i.jsx(y,{})}),i.jsx(t.Suspense,{fallback:i.jsx(E,{}),children:i.jsx(k,{})}),i.jsx(t.Suspense,{fallback:i.jsx(E,{}),children:i.jsx(_,{})}),i.jsx(t.Suspense,{fallback:i.jsx(E,{}),children:i.jsx(z,{})}),i.jsx(t.Suspense,{fallback:i.jsx(E,{}),children:i.jsx(P,{})}),i.jsx(S,{children:i.jsxs(A,{to:"/contacts",children:[e("common.contact_us"),i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})})]})})
I.displayName="HomePage"
export{I as default}
