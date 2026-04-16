const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/EventsSection-DgnJqlz9.js","assets/js/react-core-DWAaPJsY.js","assets/js/styled-components-BY9Yozyu.js","assets/js/vendor-misc-Dpgsgh4W.js","assets/js/events-C395q1AA.js","assets/js/i18n-core-DrMVsQFB.js","assets/js/PricingSection-Dj-2S9DM.js","assets/js/react-icons-BMdwLQZI.js","assets/js/BookingModal-D1wbjBVS.js","assets/js/AdvantagesSection-BUuh6cGa.js","assets/js/GallerySection-B9FWQXT2.js","assets/js/heroicons-B_QlOOyR.js","assets/js/FAQSection-CpAY6PBL.js","assets/js/ComplexParallax-DFR5Ec_n.js","assets/js/ParallaxBackground-9F-giXTZ.js","assets/js/TerraceParallax-DUdUgYim.js"])))=>i.map(i=>d[i]);
import{u as e,_ as t}from"./main-Cj_-Fzsh.js";import{r as i,j as a}from"./react-core-DWAaPJsY.js";import{d as o}from"./styled-components-BY9Yozyu.js";import{P as r}from"./PageHead-DVihzIO-.js";import{u as s}from"./i18n-core-DrMVsQFB.js";import{F as n}from"./heroicons-B_QlOOyR.js";import{aa as l}from"./vendor-misc-Dpgsgh4W.js";import"./react-dom-client-BkLB9BFi.js";import"./react-dom-Bb3pWfRT.js";import"./vendor-scheduler-9xQDShOA.js";import"./i18n-detector-l8ePocMX.js";import"./react-helmet-xz8aecK8.js";import"./framer-motion-Czr_qtvO.js";const detectMobile=()=>"undefined"!=typeof window&&window.matchMedia("(max-width: 768px)").matches,d=o.section`
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
  background: #000;

  @media (max-width: 768px) {
    height: calc(100vh + 60px);
    height: calc(100dvh + 60px);
    min-height: calc(100vh + 60px);
    min-height: calc(100dvh + 60px);
  }
`,m=o.div`
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
`,c=o.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  cursor: pointer;
`,p=o.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
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
`,h=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,g=o.span`
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
`,x=o.span`
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
`,u=i.memo(()=>{const{t:e}=s(),t=i.useRef(null),[o,r]=i.useState(!1),[n]=i.useState(detectMobile),playVideo=()=>{const e=t.current;e&&e.paused&&(e.muted=!0,e.play().then(()=>{r(!0)}).catch(()=>{}))};return i.useEffect(()=>{const e=t.current;if(!e)return;e.muted=!0,e.playsInline=!0,e.setAttribute("muted",""),e.setAttribute("playsinline","");const tryPlay=()=>{e.paused&&(e.muted=!0,e.play().then(()=>{r(!0)}).catch(()=>{}))};e.addEventListener("playing",()=>r(!0)),e.addEventListener("canplay",tryPlay),e.addEventListener("loadeddata",tryPlay),tryPlay();const i=[100,500,1e3].map(e=>setTimeout(tryPlay,e));return()=>{e.removeEventListener("canplay",tryPlay),e.removeEventListener("loadeddata",tryPlay),e.removeEventListener("playing",()=>r(!0)),i.forEach(clearTimeout)}},[]),a.jsxs(d,{children:[a.jsx(m,{children:a.jsx("video",{ref:t,src:n?"https://res.cloudinary.com/dgkymvotb/video/upload/f_auto,q_50,w_720,br_1500k/d1d565d2-6755-4365-94ad-3e33b179e8bd_yjxf5i.mp4":"https://res.cloudinary.com/dgkymvotb/video/upload/f_auto,q_60,br_3000k/a5af7faa-2bd7-4340-9cab-02441b892030_iafcm6.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:n?"https://res.cloudinary.com/dgkymvotb/video/upload/q_auto,w_768,c_fill,so_0,f_auto/a5af7faa-2bd7-4340-9cab-02441b892030_iafcm6.jpg":"https://res.cloudinary.com/dgkymvotb/video/upload/q_auto,w_1920,c_fill,so_0,f_auto/a5af7faa-2bd7-4340-9cab-02441b892030_iafcm6.jpg",onClick:playVideo})}),!o&&a.jsx(c,{onClick:playVideo}),a.jsx(p,{children:a.jsx(f,{children:a.jsxs(h,{children:[a.jsx(g,{children:e("home.hero.word1")}),a.jsx(g,{children:e("home.hero.word2")}),a.jsx(g,{children:e("home.hero.word3")}),a.jsx(x,{children:e("home.hero.location")})]})})})]})});u.displayName="HeroFullscreen";const b=o.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;
  touch-action: pan-y;
  overscroll-behavior: auto;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,w=o.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,v=o.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(19, 50, 56, 0.25);
    margin-right: 1rem;
  }
`,j=o.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 4rem;
  max-width: 800px;
`,y=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: ${e=>e.$reverse?"1fr 2fr":"2fr 1fr"};
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
`,k=o.div`
  position: relative;
  display: block;
  height: 320px;
  border-radius: 12px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 420px;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
    transition: background 0.3s ease;
  }

  &:hover::after {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;o.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
  background-color: #e5e5e5;

  ${k}:hover & {
    transform: scale(1.04);
  }
`;const _=o.picture`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.5s ease;
    background-color: #e5e5e5;
  }

  ${k}:hover & img {
    transform: scale(1.04);
  }
`,z=o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 2;
  color: #fff;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,S=o.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 800;
  margin: 0 0 0.4rem;
  letter-spacing: -0.01em;
  color: #fff;
  text-transform: uppercase;
`,$=o.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  max-width: 400px;
`,E=o.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`,I=o(l)`
  display: inline-flex;
  align-items: center;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #fff;
  text-decoration: none;
  padding: 0.65rem 1.4rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  transition: background 0.25s ease;

  svg {
    width: 16px;
    height: 16px;
    margin-left: 0.5rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    color: #fff;
    text-decoration: none;
  }
`,A=o.a`
  display: inline-flex;
  align-items: center;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #133238;
  text-decoration: none;
  padding: 0.65rem 1.4rem;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 50px;
  transition: all 0.25s ease;

  &:hover {
    background: #fff;
    color: #133238;
    text-decoration: none;
  }
`,ExclusiveZones=()=>{const{t:e}=s(),t=i.useMemo(()=>{const build=(t,i,a,o,r,s)=>({id:t,name:e(`zones.${i}.${t}.name`),description:e(`zones.${i}.${t}.description`),image:`/images/zones/${t}.jpg`,avifXs:`/images-avif/xs/zones/${t}.avif`,avifSmall:`/images-avif/small/zones/${t}.avif`,avifMedium:`/images-avif/medium/zones/${t}.avif`,avifFull:`/images-avif/zones/${t}.avif`,webpXs:`/images-webp/xs/zones/${t}.webp`,webpSmall:`/images-webp/small/zones/${t}.webp`,webpMedium:`/images-webp/medium/zones/${t}.webp`,webpFull:`/images-webp/zones/${t}.webp`,width:a,height:o,path:r,bookMessage:s});return[build("banya","relax",1920,1440,"/banya","Hello! I would like to book the Russian Banya at KAIF"),build("restaurant","relax",1920,1440,"/restaurant","Hello! I would like to book a table at KAIF Restaurant"),build("spa","relax",1920,1280,"/spa","Hello! I would like to book a SPA treatment at KAIF"),build("pool","activity",1920,1440,"/sports/swimming-pool","Hello! I would like to book a swimming session at KAIF"),build("fitness","activity",1920,1440,"/sports/gym","Hello! I would like to book a gym session at KAIF"),build("combat","activity",1920,1440,"/sports/fight-club","Hello! I would like to book a martial arts session at KAIF")]},[e]),renderCard=(t,i)=>{const o=i<2,r="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",s=`${t.avifXs} 480w, ${t.avifSmall} 768w, ${t.avifMedium} 1024w, ${t.avifFull} 1920w`,l=`${t.webpXs} 480w, ${t.webpSmall} 768w, ${t.webpMedium} 1024w, ${t.webpFull} 1920w`;return a.jsxs(k,{children:[a.jsxs(_,{children:[a.jsx("source",{type:"image/avif",srcSet:s,sizes:r}),a.jsx("source",{type:"image/webp",srcSet:l,sizes:r}),a.jsx("img",{src:t.image,alt:t.name,loading:o?"eager":"lazy",decoding:"async",width:t.width,height:t.height,fetchPriority:o?"high":"low"})]}),a.jsxs(z,{children:[a.jsx(S,{children:t.name}),a.jsx($,{children:t.description}),a.jsxs(E,{children:[a.jsxs(I,{to:t.path,children:[e("common.learnMore","Learn More"),a.jsx(n,{})]}),a.jsx(A,{href:`https://wa.me/66624805877?text=${encodeURIComponent(t.bookMessage)}`,target:"_blank",rel:"noopener noreferrer",children:e("common.book","Book")})]})]})]},t.id)};return a.jsx(b,{id:"exclusive-zones",children:a.jsxs(w,{children:[a.jsx(v,{children:e("zones.overline","KAIF Spaces")}),a.jsx(j,{children:e("zones.title","Everything you need for active recreation and relaxation")}),a.jsxs(y,{children:[renderCard(t[0],0),renderCard(t[1],1)]}),a.jsxs(y,{$reverse:!0,children:[renderCard(t[2],2),renderCard(t[3],3)]}),a.jsxs(y,{children:[renderCard(t[4],4),renderCard(t[5],5)]})]})})},P=i.lazy(()=>t(()=>import("./EventsSection-DgnJqlz9.js"),__vite__mapDeps([0,1,2,3,4,5]))),F=i.lazy(()=>t(()=>import("./PricingSection-Dj-2S9DM.js"),__vite__mapDeps([6,1,2,3,7,8,5]))),L=i.lazy(()=>t(()=>import("./AdvantagesSection-BUuh6cGa.js"),__vite__mapDeps([9,1,2,3,5])).then(e=>({default:i.memo(e.default)}))),M=i.lazy(()=>t(()=>import("./GallerySection-B9FWQXT2.js"),__vite__mapDeps([10,1,2,3,5,11])).then(e=>({default:i.memo(e.GallerySection)}))),R=i.lazy(()=>t(()=>import("./FAQSection-CpAY6PBL.js"),__vite__mapDeps([12,1,2,3,5])).then(e=>({default:i.memo(e.default)}))),T=i.lazy(()=>t(()=>import("./ComplexParallax-DFR5Ec_n.js"),__vite__mapDeps([13,1,2,3,14,5]))),H=i.lazy(()=>t(()=>import("./TerraceParallax-DUdUgYim.js"),__vite__mapDeps([15,1,2,3,14,5]))),K=o.div`
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
`,J=i.memo(()=>{const{t:t}=s(),{showLoading:o}=e(),n=i.useRef(!1);return i.useEffect(()=>{n.current||(n.current=!0)},[]),a.jsxs(a.Fragment,{children:[a.jsx(r,{titleKey:"page_titles.home",description:t("home.hero.subtitle","Unique relaxation and wellness experience in Phuket"),keywords:"KAIF, spa, wellness, Phuket, gym, restaurant, banya, massage",ogImage:"/images/logos/logo-og.png"}),a.jsx(u,{}),a.jsx(ExclusiveZones,{}),a.jsx(i.Suspense,{fallback:a.jsx(K,{}),children:a.jsx(P,{})}),a.jsx(i.Suspense,{fallback:a.jsx(K,{}),children:a.jsx(F,{})}),a.jsx(i.Suspense,{fallback:a.jsx(K,{}),children:a.jsx(T,{})}),a.jsx(i.Suspense,{fallback:a.jsx(K,{}),children:a.jsx(L,{})}),a.jsx(i.Suspense,{fallback:a.jsx(K,{}),children:a.jsx(H,{})}),a.jsx(i.Suspense,{fallback:a.jsx(K,{}),children:a.jsx(M,{})}),a.jsx(i.Suspense,{fallback:a.jsx(K,{}),children:a.jsx(R,{})})]})});J.displayName="HomePage";export{J as default};
