const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/ExclusiveZones-nUprZsz2.js","assets/js/react-core-DWAaPJsY.js","assets/js/styled-components-CfKEYav0.js","assets/js/vendor-misc-DORsZxsB.js","assets/js/i18n-core-DrMVsQFB.js","assets/js/heroicons-bIxR1-ju.js","assets/js/PricingSection-BrLZsjQa.js","assets/js/react-icons-BDz5tVot.js","assets/js/BookingModal-D1wbjBVS.js","assets/js/AdvantagesSection-djdJK6lH.js","assets/js/GallerySection-BVxmSSzt.js","assets/js/FAQSection-LsHDFhry.js","assets/js/ComplexParallax-Z3QrTQzo.js","assets/js/ParallaxBackground-9F-giXTZ.js","assets/js/TerraceParallax-CdnGlJJy.js"])))=>i.map(i=>d[i]);
import{u as e,_ as t}from"./main-CUYgrTgY.js";import{r as n,j as s}from"./react-core-DWAaPJsY.js";import{d as i}from"./styled-components-CfKEYav0.js";import{P as r}from"./PageHead-Du_bcwsJ.js";import{u as o}from"./i18n-core-DrMVsQFB.js";import"./react-dom-client-BkLB9BFi.js";import"./react-dom-Bb3pWfRT.js";import"./vendor-scheduler-9xQDShOA.js";import"./i18n-detector-l8ePocMX.js";import"./react-helmet-B6HjKcxn.js";import"./vendor-misc-DORsZxsB.js";import"./framer-motion-B0peqmRR.js";const a="https://res.cloudinary.com/dxzz1kj38/video/upload/q_80,w_1280,so_0/0204_xkhajr.jpg",l=i.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  background: #000 url(${a}) center/cover no-repeat;

  @media (max-width: 768px) {
    height: 100svh;
  }
`,d=i.div`
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
`,c=i.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  cursor: pointer;
`,m=i.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,p=i.div`
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
`,u=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,x=i.span`
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
`,h=i.span`
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
`,f=n.memo(()=>{const{t:e}=o(),t=n.useRef(null),[i,r]=n.useState(!1),[f,j]=n.useState(!1);n.useEffect(()=>{j(window.innerWidth<=768)},[]);const playVideo=()=>{const e=t.current;e&&e.paused&&(e.muted=!0,e.play().then(()=>{r(!0)}).catch(()=>{}))};return n.useEffect(()=>{const e=t.current;if(!e)return;e.muted=!0,e.playsInline=!0,e.setAttribute("muted",""),e.setAttribute("playsinline","");const tryPlay=()=>{e.paused&&(e.muted=!0,e.play().then(()=>{r(!0)}).catch(()=>{}))};e.addEventListener("playing",()=>r(!0)),e.addEventListener("canplay",tryPlay),e.addEventListener("loadeddata",tryPlay),tryPlay();const n=[100,500,1e3].map(e=>setTimeout(tryPlay,e));return()=>{e.removeEventListener("canplay",tryPlay),e.removeEventListener("loadeddata",tryPlay),e.removeEventListener("playing",()=>r(!0)),n.forEach(clearTimeout)}},[]),s.jsxs(l,{children:[s.jsx(d,{children:s.jsx("video",{ref:t,src:f?"https://res.cloudinary.com/dxzz1kj38/video/upload/q_80,w_1280/0204_xkhajr.mp4":"https://res.cloudinary.com/dxzz1kj38/video/upload/q_auto/0204_xkhajr.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",poster:a,onClick:playVideo})}),!i&&s.jsx(c,{onClick:playVideo}),s.jsx(m,{children:s.jsx(p,{children:s.jsxs(u,{children:[s.jsx(x,{children:e("home.hero.word1")}),s.jsx(x,{children:e("home.hero.word2")}),s.jsx(x,{children:e("home.hero.word3")}),s.jsx(h,{children:e("home.hero.location")})]})})})]})});f.displayName="HeroFullscreen";const j=n.lazy(()=>t(()=>import("./ExclusiveZones-nUprZsz2.js"),__vite__mapDeps([0,1,2,3,4,5]))),g=n.lazy(()=>t(()=>import("./PricingSection-BrLZsjQa.js"),__vite__mapDeps([6,1,2,3,7,8,4]))),y=n.lazy(()=>t(()=>import("./AdvantagesSection-djdJK6lH.js"),__vite__mapDeps([9,1,2,3,4])).then(e=>({default:n.memo(e.default)}))),_=n.lazy(()=>t(()=>import("./GallerySection-BVxmSSzt.js"),__vite__mapDeps([10,1,2,3,4,5])).then(e=>({default:n.memo(e.GallerySection)}))),v=n.lazy(()=>t(()=>import("./FAQSection-LsHDFhry.js"),__vite__mapDeps([11,1,2,3,4])).then(e=>({default:n.memo(e.default)}))),b=n.lazy(()=>t(()=>import("./ComplexParallax-Z3QrTQzo.js"),__vite__mapDeps([12,1,2,3,13,4]))),w=n.lazy(()=>t(()=>import("./TerraceParallax-CdnGlJJy.js"),__vite__mapDeps([14,1,2,3,13,4]))),k=i.div`
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
`,E=n.memo(()=>{const{t:t}=o(),{showLoading:i}=e(),a=n.useRef(!1);return n.useEffect(()=>{a.current||(a.current=!0)},[]),s.jsxs(s.Fragment,{children:[s.jsx(r,{titleKey:"page_titles.home",description:t("home.hero.subtitle","Unique relaxation and wellness experience in Phuket"),keywords:"KAIF, spa, wellness, Phuket, gym, restaurant, banya, massage",ogImage:"/images/logos/logo-og.png"}),s.jsx(f,{}),s.jsx(n.Suspense,{fallback:s.jsx(k,{}),children:s.jsx(j,{})}),s.jsx(n.Suspense,{fallback:s.jsx(k,{}),children:s.jsx(g,{})}),s.jsx(n.Suspense,{fallback:s.jsx(k,{}),children:s.jsx(b,{})}),s.jsx(n.Suspense,{fallback:s.jsx(k,{}),children:s.jsx(y,{})}),s.jsx(n.Suspense,{fallback:s.jsx(k,{}),children:s.jsx(w,{})}),s.jsx(n.Suspense,{fallback:s.jsx(k,{}),children:s.jsx(_,{})}),s.jsx(n.Suspense,{fallback:s.jsx(k,{}),children:s.jsx(v,{})})]})});E.displayName="HomePage";export{E as default};
