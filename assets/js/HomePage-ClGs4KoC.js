const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/ExclusiveZones-Cth5f47Z.js","assets/js/react-core-DWAaPJsY.js","assets/js/styled-components-BY9Yozyu.js","assets/js/vendor-misc-Dpgsgh4W.js","assets/js/i18n-core-DrMVsQFB.js","assets/js/heroicons-CckZQ0I5.js","assets/js/EventsSection-KL6dylMW.js","assets/js/events-DVYtoGCZ.js","assets/js/PricingSection-BfC4ZXzg.js","assets/js/react-icons-BDz5tVot.js","assets/js/BookingModal-D1wbjBVS.js","assets/js/AdvantagesSection-BUuh6cGa.js","assets/js/GallerySection-PDBjfpTe.js","assets/js/FAQSection-CpAY6PBL.js","assets/js/ComplexParallax-DFR5Ec_n.js","assets/js/ParallaxBackground-9F-giXTZ.js","assets/js/TerraceParallax-DUdUgYim.js"])))=>i.map(i=>d[i]);
import{u as e,_ as t}from"./main-D0BkSEnf.js";import{r as i,j as n}from"./react-core-DWAaPJsY.js";import{d as s}from"./styled-components-BY9Yozyu.js";import{P as a}from"./PageHead-DVihzIO-.js";import{u as o}from"./i18n-core-DrMVsQFB.js";import"./react-dom-client-BkLB9BFi.js";import"./react-dom-Bb3pWfRT.js";import"./vendor-scheduler-9xQDShOA.js";import"./i18n-detector-l8ePocMX.js";import"./react-helmet-xz8aecK8.js";import"./vendor-misc-Dpgsgh4W.js";import"./framer-motion-Czr_qtvO.js";const r="https://res.cloudinary.com/dgkymvotb/video/upload/q_70,so_0,f_auto/a5af7faa-2bd7-4340-9cab-02441b892030_iafcm6.jpg",l=s.section`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  background: #000 url(${r}) center/cover no-repeat;

  @media (max-width: 768px) {
    height: calc(100vh + 60px);
    height: calc(100dvh + 60px);
    min-height: calc(100vh + 60px);
    min-height: calc(100dvh + 60px);
  }
`,c=s.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
  }

  /* Затемнение поверх видео */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.6) 0%,
      rgba(0,0,0,0.4) 50%,
      rgba(0,0,0,0.5) 100%
    );
    z-index: 2;
    pointer-events: none; /* Пропускает клики к видео */
  }
`,d=s.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  cursor: pointer;
`,m=s.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,p=s.div`
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
`,h=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,u=s.span`
  display: block;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(4.5rem, 12vw, 9rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(4rem, 20vw, 7rem);
    line-height: 1.05;
  }

  @media (max-width: 480px) {
    font-size: clamp(3.5rem, 22vw, 6rem);
  }
`,x=s.span`
  display: block;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.35em;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    font-size: 0.65rem;
    margin-top: 2rem;
  }
`,f=i.memo(()=>{const{t:e}=o(),t=i.useRef(null),[s,a]=i.useState(!1),[f,j]=i.useState(!1);i.useEffect(()=>{j(window.innerWidth<=768)},[]);const playVideo=()=>{const e=t.current;e&&e.paused&&(e.muted=!0,e.play().then(()=>{a(!0)}).catch(()=>{}))};return i.useEffect(()=>{const e=t.current;if(!e)return;e.muted=!0,e.playsInline=!0,e.setAttribute("muted",""),e.setAttribute("playsinline","");const tryPlay=()=>{e.paused&&(e.muted=!0,e.play().then(()=>{a(!0)}).catch(()=>{}))};e.addEventListener("playing",()=>a(!0)),e.addEventListener("canplay",tryPlay),e.addEventListener("loadeddata",tryPlay),tryPlay();const i=[100,500,1e3].map(e=>setTimeout(tryPlay,e));return()=>{e.removeEventListener("canplay",tryPlay),e.removeEventListener("loadeddata",tryPlay),e.removeEventListener("playing",()=>a(!0)),i.forEach(clearTimeout)}},[]),n.jsxs(l,{children:[n.jsx(c,{children:n.jsx("video",{ref:t,src:f?"https://res.cloudinary.com/dgkymvotb/video/upload/f_auto,q_50,w_720,br_1500k/d1d565d2-6755-4365-94ad-3e33b179e8bd_yjxf5i.mp4":"https://res.cloudinary.com/dgkymvotb/video/upload/f_auto,q_60,br_3000k/a5af7faa-2bd7-4340-9cab-02441b892030_iafcm6.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",poster:r,onClick:playVideo})}),!s&&n.jsx(d,{onClick:playVideo}),n.jsx(m,{children:n.jsx(p,{children:n.jsxs(h,{children:[n.jsx(u,{children:e("home.hero.word1")}),n.jsx(u,{children:e("home.hero.word2")}),n.jsx(u,{children:e("home.hero.word3")}),n.jsx(x,{children:e("home.hero.location")})]})})})]})});f.displayName="HeroFullscreen";const j=i.lazy(()=>t(()=>import("./ExclusiveZones-Cth5f47Z.js"),__vite__mapDeps([0,1,2,3,4,5]))),g=i.lazy(()=>t(()=>import("./EventsSection-KL6dylMW.js"),__vite__mapDeps([6,1,2,3,7,4]))),_=i.lazy(()=>t(()=>import("./PricingSection-BfC4ZXzg.js"),__vite__mapDeps([8,1,2,3,9,10,4]))),y=i.lazy(()=>t(()=>import("./AdvantagesSection-BUuh6cGa.js"),__vite__mapDeps([11,1,2,3,4])).then(e=>({default:i.memo(e.default)}))),b=i.lazy(()=>t(()=>import("./GallerySection-PDBjfpTe.js"),__vite__mapDeps([12,1,2,3,4,5])).then(e=>({default:i.memo(e.GallerySection)}))),v=i.lazy(()=>t(()=>import("./FAQSection-CpAY6PBL.js"),__vite__mapDeps([13,1,2,3,4])).then(e=>({default:i.memo(e.default)}))),k=i.lazy(()=>t(()=>import("./ComplexParallax-DFR5Ec_n.js"),__vite__mapDeps([14,1,2,3,15,4]))),w=i.lazy(()=>t(()=>import("./TerraceParallax-DUdUgYim.js"),__vite__mapDeps([16,1,2,3,15,4]))),E=s.div`
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
`,S=i.memo(()=>{const{t:t}=o(),{showLoading:s}=e(),r=i.useRef(!1);return i.useEffect(()=>{r.current||(r.current=!0)},[]),n.jsxs(n.Fragment,{children:[n.jsx(a,{titleKey:"page_titles.home",description:t("home.hero.subtitle","Unique relaxation and wellness experience in Phuket"),keywords:"KAIF, spa, wellness, Phuket, gym, restaurant, banya, massage",ogImage:"/images/logos/logo-og.png"}),n.jsx(f,{}),n.jsx(i.Suspense,{fallback:n.jsx(E,{}),children:n.jsx(j,{})}),n.jsx(i.Suspense,{fallback:n.jsx(E,{}),children:n.jsx(g,{})}),n.jsx(i.Suspense,{fallback:n.jsx(E,{}),children:n.jsx(_,{})}),n.jsx(i.Suspense,{fallback:n.jsx(E,{}),children:n.jsx(k,{})}),n.jsx(i.Suspense,{fallback:n.jsx(E,{}),children:n.jsx(y,{})}),n.jsx(i.Suspense,{fallback:n.jsx(E,{}),children:n.jsx(w,{})}),n.jsx(i.Suspense,{fallback:n.jsx(E,{}),children:n.jsx(b,{})}),n.jsx(i.Suspense,{fallback:n.jsx(E,{}),children:n.jsx(v,{})})]})});S.displayName="HomePage";export{S as default};
