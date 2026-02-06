import{r as e,j as a}from"./react-core-DWAaPJsY.js";import{d as t}from"./styled-components-CfKEYav0.js";import{u as i}from"./i18n-core-DrMVsQFB.js";import{f as r,g as s,h as l}from"./heroicons-bIxR1-ju.js";import"./vendor-misc-DORsZxsB.js";const o=t.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,n=t.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,g=t.div`
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
`,m=t.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,d=t.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  max-width: 550px;
  margin: 0 0 3rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`,p=t.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.4rem;
    margin-bottom: 2rem;
  }
`,c=t.button`
  font-family: 'Jost', sans-serif;
  padding: 0.6rem 1.25rem;
  background: ${e=>e.$active?"#133238":"transparent"};
  color: ${e=>e.$active?"#fffef6":"rgba(19, 50, 56, 0.5)"};
  border: 1px solid ${e=>e.$active?"#133238":"rgba(19, 50, 56, 0.15)"};
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: ${e=>e.$active?"500":"400"};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    color: ${e=>e.$active?"#fffef6":"#133238"};
    border-color: ${e=>e.$active?"#133238":"rgba(19, 50, 56, 0.4)"};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
`,y=t.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 240px;
    gap: 1.25rem;
  }
`;if("undefined"!=typeof document&&!document.getElementById("gallery-animations")){const e=document.createElement("style");e.id="gallery-animations",e.textContent="\n  @keyframes fadeInUp {\n    from {\n      opacity: 0;\n      transform: translateY(20px) scale(0.98);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n",document.head.appendChild(e)}const f=t.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 260px;
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: ${e=>e.$delay||"0s"};
  opacity: 0;

  @media (min-width: 768px) {
    height: auto;

    /* Asymmetric layout: 1st and 5th items span 2 rows */
    &:nth-child(1),
    &:nth-child(5) {
      grid-row: span 2;
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 1;
    transition: background 0.3s ease;
  }

  &:hover::after {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }

  &:hover img {
    transform: scale(1.04);
  }
`,h=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${e=>e.$position||"center"};
  transition: transform 0.5s ease;
  display: block;
`,b=t.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 2;
  color: #fff;
`,x=t.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -0.01em;
`,u=t.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity 0.3s ease;
`,j=t.div`
  position: relative;
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,v=t.img`
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  display: block;
`,w=t.div`
  position: absolute;
  bottom: -3rem;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,k=t.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`,$=t.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
`,z=t.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.prev { left: -5rem; }
  &.next { right: -5rem; }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (max-width: 768px) {
    &.prev { left: -0.5rem; }
    &.next { right: -0.5rem; }
    width: 2.5rem;
    height: 2.5rem;
  }
`,C=t.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  z-index: 10001;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,GallerySection=()=>{const{t:t}=i(),[S,_]=e.useState("all"),[A,R]=e.useState(!1),[E,I]=e.useState(0),J=e.useMemo(()=>[{id:1,image:"/images/spa/services/thai-massage.jpg",title:t("gallery.slides.thai_massage.title","Thai Massage"),category:"spa",position:"center bottom"},{id:2,image:"/images/banya/gallery/banya-steam-room.jpg",title:t("gallery.slides.banya.title","Russian Banya"),category:"banya"},{id:3,image:"/images/sports/fight-club/fight-1.jpg",title:t("gallery.slides.combat.title","Fight Club"),category:"fitness",position:"center top"},{id:4,image:"/images/zones/pool.jpg",title:t("gallery.slides.pool.title","Pool"),category:"relax"},{id:5,image:"/images/home/terrace.jpg",title:t("gallery.slides.terrace.title","Rooftop Terrace"),category:"relax"},{id:6,image:"/images/spa/gallery/spa-5.jpg",title:t("gallery.slides.spa_room.title","Spa Suite"),category:"spa"},{id:7,image:"/images/sports/gym/gym-1.jpg",title:t("gallery.slides.gym.title","Gym"),category:"fitness"},{id:8,image:"/images/banya/gallery/banya-cold-pool.jpg",title:t("gallery.slides.cold_pool.title","Ice Pool"),category:"banya"},{id:9,image:"/images/spa/services/aromatherapy.jpg",title:t("gallery.slides.aromatherapy.title","Aromatherapy"),category:"spa"},{id:10,image:"/images/banya/gallery/banya-rest-area.jpg",title:t("gallery.slides.rest_area.title","Rest Area"),category:"banya"},{id:11,image:"/images/spa/gallery/spa-1.jpg",title:t("gallery.slides.spa_interior.title","Spa Interior"),category:"spa"},{id:12,image:"/images/spa/services/massage.jpg",title:t("gallery.slides.massage.title","Massage"),category:"spa"},{id:21,image:"/images/spa/gallery/spa-2.jpg",title:t("gallery.slides.spa_treatment.title","Spa Treatment"),category:"spa"},{id:22,image:"/images/spa/gallery/spa-3.jpg",title:t("gallery.slides.relaxation.title","Relaxation"),category:"spa"},{id:13,image:"/images/sports/gym/gym-2.jpg",title:t("gallery.slides.gym_equipment.title","Gym Equipment"),category:"fitness"},{id:14,image:"/images/sports/fight-club/fight-2.jpg",title:t("gallery.slides.boxing.title","Boxing Ring"),category:"fitness"},{id:15,image:"/images/banya/gallery/banya-hot-stones.jpg",title:t("gallery.slides.hot_stones.title","Hot Stones"),category:"banya"},{id:16,image:"/images/banya/gallery/banya-tea-ceremony.jpg",title:t("gallery.slides.tea_ceremony.title","Tea Ceremony"),category:"banya"},{id:19,image:"/images/banya/gallery/banya-lounge.jpg",title:t("gallery.slides.banya_lounge.title","Lounge Zone"),category:"banya"},{id:20,image:"/images/banya/gallery/banya-steam-room1.jpg",title:t("gallery.slides.steam_ritual.title","Steam Ritual"),category:"banya"},{id:17,image:"/images/restaurant/restaurant.jpg",title:t("gallery.slides.restaurant.title","Restaurant"),category:"relax"},{id:18,image:"/images/beauty/services/facial.jpg",title:t("gallery.slides.smoking_area.title","Smoking Area"),category:"relax"}],[t]),M=e.useMemo(()=>[{id:"all",label:t("gallery.filters.all","All")},{id:"spa",label:t("gallery.filters.spa","Spa")},{id:"fitness",label:t("gallery.filters.fitness","Fitness")},{id:"banya",label:t("gallery.filters.banya","Banya")},{id:"relax",label:t("gallery.filters.relax","Relax")}],[t]),P=e.useMemo(()=>"all"===S?J.slice(0,10):J.filter(e=>e.category===S),[S,J]),B=e.useCallback(e=>{I(e),R(!0),document.body.style.overflow="hidden"},[]),F=e.useCallback(()=>{R(!1),document.body.style.overflow="auto"},[]),L=e.useCallback(e=>{I(a=>"next"===e?(a+1)%P.length:(a-1+P.length)%P.length)},[P.length]);return e.useEffect(()=>{if(!A)return;const handleKey=e=>{"Escape"===e.key&&F(),"ArrowLeft"===e.key&&L("prev"),"ArrowRight"===e.key&&L("next")};return document.addEventListener("keydown",handleKey),()=>document.removeEventListener("keydown",handleKey)},[A,F,L]),a.jsxs(o,{id:"gallery",children:[a.jsxs(n,{children:[a.jsx(g,{children:t("gallery.overline","Gallery")}),a.jsx(m,{children:t("gallery.title","KAIF Experiences")}),a.jsx(d,{children:t("gallery.subtitle","Immerse yourself in the KAIF atmosphere through our photo gallery.")}),a.jsx(p,{children:M.map(e=>a.jsx(c,{$active:S===e.id,onClick:()=>_(e.id),children:e.label},e.id))}),a.jsx(y,{children:P.map((e,t)=>a.jsxs(f,{onClick:()=>B(t),$delay:.06*t+"s",children:[a.jsx(h,{src:e.image,alt:e.title,loading:"lazy",$position:e.position}),a.jsx(b,{children:a.jsx(x,{children:e.title})})]},e.id))},S)]}),A&&P[E]&&a.jsxs(u,{$visible:A,onClick:F,children:[a.jsx(C,{onClick:F,children:a.jsx(r,{})}),a.jsxs(j,{onClick:e=>e.stopPropagation(),children:[P.length>1&&a.jsx(z,{className:"prev",onClick:()=>L("prev"),children:a.jsx(s,{})}),a.jsx(v,{src:P[E].image,alt:P[E].title}),P.length>1&&a.jsx(z,{className:"next",onClick:()=>L("next"),children:a.jsx(l,{})}),a.jsxs(w,{children:[a.jsx(k,{children:P[E].title}),a.jsxs($,{children:[E+1," / ",P.length]})]})]})]})]})};export{GallerySection,GallerySection as default};
