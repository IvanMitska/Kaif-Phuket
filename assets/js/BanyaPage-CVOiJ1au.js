import{r as e,j as a}from"./react-core-DWAaPJsY.js";import{P as i}from"./PageScrollReset-CpzNA0Jq.js";import{P as t}from"./PageHead-DVihzIO-.js";import{d as r}from"./styled-components-BY9Yozyu.js";import{u as n}from"./i18n-core-DrMVsQFB.js";import s from"./BanyaParallaxSection-CqkfEMnm.js";import"./react-helmet-xz8aecK8.js";import"./vendor-misc-Dpgsgh4W.js";import"./ParallaxBackground-9F-giXTZ.js";const o=r.section`
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
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box !important;

  @media (max-width: 768px) {
    height: calc(100vh + 60px);
    height: calc(100dvh + 60px);
    min-height: calc(100vh + 60px);
    min-height: calc(100dvh + 60px);
  }
`,l=r.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`,m=r.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 2s ease-in-out;

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
    pointer-events: none;
  }
`,c=r.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,d=r.div`
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
`,p=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,g=r.span`
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
`,f=r.span`
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
`,h=e.memo(()=>{const{t:i}=n(),[t,r]=e.useState(0),s=[{src:"/images/banya/panoramic.jpg",alt:i("banya.hero.images.panoramic","Panoramic sauna 150 m²")},{src:"/images/banya/private.jpg",alt:i("banya.hero.images.private","Private sauna")},{src:"/images/banya/public.jpg",alt:i("banya.hero.images.public","Public sauna")}];return e.useEffect(()=>{const e=setInterval(()=>{r(e=>(e+1)%s.length)},6e3);return()=>clearInterval(e)},[s.length]),a.jsxs(o,{children:[a.jsx(l,{children:s.map((e,i)=>a.jsx(m,{style:{backgroundImage:`url(${e.src})`,opacity:t===i?1:0,zIndex:t===i?2:1}},i))}),a.jsx(c,{children:a.jsx(d,{children:a.jsxs(p,{children:[a.jsx(g,{children:i("banya.hero.title_part1","Russian")}),a.jsx(g,{children:i("banya.hero.title_part2","Banya")}),a.jsx(f,{children:i("banya.hero.location","Phuket")})]})})})]})}),u=r.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,b=r.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,y=r.div`
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
`,x=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,w=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  max-width: 550px;
  margin: 0 0 4rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 3rem;
  }
`,v=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,j=r.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`,k=r.div`
  flex: 1;
  margin-bottom: 1.5rem;
`,z=r.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.5rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
`,S=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 1rem;
`,_=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  margin: 0;
`,T=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 1.5rem;
  margin-top: auto;
  border-top: 1px solid rgba(19, 50, 56, 0.06);
`,J=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`,P=r.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.35);
`,A=r.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(19, 50, 56, 0.7);
`,B=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
`,q=r.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.35);
`,I=r.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #133238;
  letter-spacing: -0.02em;
`,BanyaServicesSection=()=>{const{t:e,i18n:i,ready:t}=n(),r="ru"===i.language,s=(()=>{if(!t)return[];try{return[{id:"intro",title:e("banya.services.rituals.intro.title","Children's Introductory Steaming"),subtitle:e("banya.services.rituals.intro.subtitle","LIGHT STEAM"),duration:e("banya.services.rituals.intro.duration","7-10 min"),price:e("banya.services.rituals.intro.price","1,000 THB"),description:e("banya.services.rituals.intro.description","A short and sensitive ritual with gentle warming of back and legs")},{id:"lady",title:e("banya.services.rituals.lady.title","Lady's Steaming"),subtitle:e("banya.services.rituals.lady.subtitle","LOW-TEMPERATURE"),duration:e("banya.services.rituals.lady.duration","10-15 min"),price:e("banya.services.rituals.lady.price","1,500 THB"),description:e("banya.services.rituals.lady.description","Special low-temperature technique with deep local warming")},{id:"classic",title:e("banya.services.rituals.classic.title","Classic Steaming"),subtitle:e("banya.services.rituals.classic.subtitle","MEDIUM STEAM"),duration:e("banya.services.rituals.classic.duration","10-15 min"),price:e("banya.services.rituals.classic.price","1,800 THB"),description:e("banya.services.rituals.classic.description","Steaming with oak brooms in one session. Thorough whole body steaming with aromatic steam")},{id:"artesian",title:e("banya.services.rituals.artesian.title","Artesian"),subtitle:e("banya.services.rituals.artesian.subtitle","CONTRAST STEAMING"),duration:e("banya.services.rituals.artesian.duration","15-20 min"),price:e("banya.services.rituals.artesian.price","2,250 THB"),description:e("banya.services.rituals.artesian.description","Intense warming with oak brooms enhanced by the contrast of cool mineral water")},{id:"gravity",title:e("banya.services.rituals.gravity.title","Gravity"),subtitle:e("banya.services.rituals.gravity.subtitle","WEIGHTLESS STEAMING"),duration:e("banya.services.rituals.gravity.duration","15-20 min"),price:e("banya.services.rituals.gravity.price","2,250 THB"),description:e("banya.services.rituals.gravity.description","Intense warming with transition to warm pool. Feeling of weightlessness")},{id:"salt_fire",title:e("banya.services.rituals.salt_fire.title","The Fire Starter"),subtitle:e("banya.services.rituals.salt_fire.subtitle","SALT STEAMING"),duration:e("banya.services.rituals.salt_fire.duration","15-20 min"),price:e("banya.services.rituals.salt_fire.price","2,250 THB"),description:e("banya.services.rituals.salt_fire.description","Intense warming with sea salt application and warming through a sheet. Salt cave effect")},{id:"four_hands",title:e("banya.services.rituals.four_hands.title","Four-Hand Steaming"),subtitle:e("banya.services.rituals.four_hands.subtitle","SYNCHRONIZED"),duration:e("banya.services.rituals.four_hands.duration","15-20 min"),price:e("banya.services.rituals.four_hands.price","2,500 THB"),description:e("banya.services.rituals.four_hands.description","Two steam masters work in perfect synchronization")},{id:"sports",title:e("banya.services.rituals.sports.title","Sports Steaming"),subtitle:e("banya.services.rituals.sports.subtitle","WITH MASSAGE"),duration:e("banya.services.rituals.sports.duration","20-25 min"),price:e("banya.services.rituals.sports.price","2,500 THB"),description:e("banya.services.rituals.sports.description","Intense warming to the depth of muscles with massage elements")},{id:"stalwar",title:e("banya.services.rituals.stalwar.title","Thor's Power"),subtitle:e("banya.services.rituals.stalwar.subtitle","INTENSE STEAM"),duration:e("banya.services.rituals.stalwar.duration","15-20 min"),price:e("banya.services.rituals.stalwar.price","3,000 THB"),description:e("banya.services.rituals.stalwar.description","Intense steam and contrast for those who love the heat")},{id:"warrior_path",title:e("banya.services.rituals.warrior_path.title","Warrior's Path"),subtitle:e("banya.services.rituals.warrior_path.subtitle","CONTRAST STEAMING"),duration:e("banya.services.rituals.warrior_path.duration","20-25 min"),price:e("banya.services.rituals.warrior_path.price","3,500 THB"),description:e("banya.services.rituals.warrior_path.description","Steaming in two sessions with cold water dousing between them")},{id:"honey",title:e("banya.services.rituals.honey.title","Honey Steaming"),subtitle:e("banya.services.rituals.honey.subtitle","WITH NATURAL HONEY"),duration:e("banya.services.rituals.honey.duration","15-20 min"),price:e("banya.services.rituals.honey.price","3,500 THB"),description:e("banya.services.rituals.honey.description","Steaming with Canadian brooms and honey application")},{id:"valhalla",title:e("banya.services.rituals.valhalla.title","Valhalla"),subtitle:e("banya.services.rituals.valhalla.subtitle","GROUP STEAMING"),duration:e("banya.services.rituals.valhalla.duration","10-20 min"),price:e("banya.services.rituals.valhalla.price","3,500 THB"),description:e("banya.services.rituals.valhalla.description","Steaming with fan and brooms for a group of 2-4 people")},{id:"royal",title:e("banya.services.rituals.royal.title","Royal Steaming"),subtitle:e("banya.services.rituals.royal.subtitle","HONEY-SALT SCRUB"),duration:e("banya.services.rituals.royal.duration","25-30 min"),price:e("banya.services.rituals.royal.price","4,000 THB"),description:e("banya.services.rituals.royal.description","Royal ritual of deep warming and cleansing with honey and sea salt")}]}catch(a){return[]}})();return a.jsx(u,{children:a.jsxs(b,{children:[a.jsx(y,{children:e("banya.services.badge",r?"Ритуалы":"Rituals")}),a.jsx(x,{children:e("banya.services.title",r?"Индивидуальные парения":"Individual Steam Sessions")}),a.jsx(w,{children:e("banya.services.subtitle",r?"Выберите свой идеальный банный ритуал":"Choose your perfect banya ritual")}),a.jsx(v,{children:s.map(e=>a.jsxs(j,{children:[a.jsxs(k,{children:[a.jsx(z,{children:e.title}),a.jsx(S,{children:e.subtitle}),a.jsx(_,{children:e.description})]}),a.jsxs(T,{children:[a.jsxs(J,{children:[a.jsx(P,{children:r?"Время":"Duration"}),a.jsx(A,{children:e.duration})]}),a.jsxs(B,{children:[a.jsx(q,{children:r?"Стоимость":"Price"}),a.jsx(I,{children:e.price})]})]})]},e.id))})]})})},C=r.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,E=r.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,H=r.div`
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
`,$=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,R=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  max-width: 550px;
  margin: 0 0 4rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 3rem;
  }
`,N=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,O=r.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`,M=r.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.75rem;
  text-transform: uppercase;
  letter-spacing: -0.01em;
`,L=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.5);
  font-weight: 400;
  margin: 0 0 1.75rem;
`,G=r.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`,W=r.li`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(19, 50, 56, 0.65);
  line-height: 1.5;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: '';
    width: 4px;
    height: 4px;
    background: rgba(19, 50, 56, 0.25);
    border-radius: 50%;
    flex-shrink: 0;
  }
`,BanyaFeaturesSection=()=>{const{t:e}=n(),i=[{id:"materials",title:e("banya.features.materials.title","Natural Materials"),description:e("banya.features.materials.description","100% natural finish from Siberian wood species"),items:[e("banya.features.materials.items.cedar","Siberian Cedar"),e("banya.features.materials.items.linden","Altai Linden"),e("banya.features.materials.items.birch","Karelian Birch"),e("banya.features.materials.items.coating","Eco-friendly finishes"),e("banya.features.materials.items.aromatherapy","Natural aromatherapy")]},{id:"panoramic",title:e("banya.features.panoramic.title","Panoramic Design"),description:e("banya.features.panoramic.description","Unique architecture with tropical jungle views"),items:[e("banya.features.panoramic.items.area","150 square meters"),e("banya.features.panoramic.items.windows","Panoramic windows"),e("banya.features.panoramic.items.view","Jungle views"),e("banya.features.panoramic.items.lighting","Natural lighting"),e("banya.features.panoramic.items.harmony","Harmony with nature")]},{id:"safety",title:e("banya.features.safety.title","Safety"),description:e("banya.features.safety.description","Compliance with all international safety standards"),items:[e("banya.features.safety.items.fire","Fire safety"),e("banya.features.safety.items.ventilation","Ventilation system"),e("banya.features.safety.items.emergency","Emergency lighting"),e("banya.features.safety.items.medical","Medical assistance"),e("banya.features.safety.items.security","24/7 security")]}];return a.jsx(C,{children:a.jsxs(E,{children:[a.jsx(H,{children:e("banya.features.badge","Best Banya in Phuket")}),a.jsx($,{children:e("banya.features.title_plain","Why Choose Us")}),a.jsx(R,{children:e("banya.features.subtitle","Experience the authentic Russian banya with modern comfort and traditional techniques")}),a.jsx(N,{children:i.map(e=>a.jsxs(O,{children:[a.jsx(M,{children:e.title}),a.jsx(L,{children:e.description}),a.jsx(G,{children:e.items.map((e,i)=>a.jsx(W,{children:e},i))})]},e.id))})]})})},F=r.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,U=r.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,D=r.div`
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
`,Y=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,K=r.p`
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
`,V=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 280px;
  }
`,Q=r.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 280px;

  @media (min-width: 768px) {
    height: auto;

    &:nth-child(1) {
      grid-row: span 2;
    }
    &:nth-child(4) {
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
`,Z=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
`,X=r.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 2;
  color: #fff;
`,ee=r.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -0.01em;
`,ae=r.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
`,ie=r.div`
  position: relative;
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,te=r.img`
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  display: block;
`,re=r.div`
  position: absolute;
  bottom: -3rem;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ne=r.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`,se=r.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
`,oe=r.button`
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
  font-size: 1.25rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.prev { left: -5rem; }
  &.next { right: -5rem; }

  @media (max-width: 768px) {
    &.prev { left: -0.5rem; }
    &.next { right: -0.5rem; }
    width: 2.5rem;
    height: 2.5rem;
  }
`,le=r.button`
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
  font-size: 1.25rem;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,BanyaGallerySection=()=>{const{t:i}=n(),[t,r]=e.useState(!1),[s,o]=e.useState(0),l=[{id:1,src:"/images/banya/gallery/banya-steam-room.jpg",title:i("banya.gallery.steam_room","Steam Room")},{id:2,src:"/images/banya/gallery/banya-rest-area.jpg",title:i("banya.gallery.rest_area","Rest Area")},{id:3,src:"/images/banya/gallery/banya-cold-pool.jpg",title:i("banya.gallery.cold_pool","Cold Pool")},{id:4,src:"/images/banya/gallery/banya-hot-stones.jpg",title:i("banya.gallery.hot_stones","Hot Stones")},{id:5,src:"/images/banya/gallery/banya-tea-ceremony.jpg",title:i("banya.gallery.tea_ceremony","Tea Ceremony")},{id:6,src:"/images/banya/gallery/banya-lounge.jpg",title:i("banya.gallery.lounge","Lounge")}],m=e.useCallback(e=>{o(e),r(!0),document.body.style.overflow="hidden"},[]),c=e.useCallback(()=>{r(!1),document.body.style.overflow="auto"},[]),d=e.useCallback(e=>{o(a=>"next"===e?(a+1)%l.length:(a-1+l.length)%l.length)},[l.length]);return e.useEffect(()=>()=>{document.body.style.overflow=""},[]),e.useEffect(()=>{if(!t)return;const handleKey=e=>{"Escape"===e.key&&c(),"ArrowLeft"===e.key&&d("prev"),"ArrowRight"===e.key&&d("next")};return document.addEventListener("keydown",handleKey),()=>document.removeEventListener("keydown",handleKey)},[t,c,d]),a.jsxs(F,{id:"banya-gallery",children:[a.jsxs(U,{children:[a.jsx(D,{children:i("banya.gallery.badge","Gallery")}),a.jsx(Y,{children:i("banya.gallery.title","Gallery")}),a.jsx(K,{children:i("banya.gallery.subtitle","The atmosphere of an authentic Russian banya")}),a.jsx(V,{children:l.map((e,i)=>a.jsxs(Q,{onClick:()=>m(i),children:[a.jsx(Z,{src:e.src,alt:e.title,loading:"lazy"}),a.jsx(X,{children:a.jsx(ee,{children:e.title})})]},e.id))})]}),t&&l[s]&&a.jsxs(ae,{onClick:c,children:[a.jsx(le,{onClick:c,children:"✕"}),a.jsxs(ie,{onClick:e=>e.stopPropagation(),children:[l.length>1&&a.jsx(oe,{className:"prev",onClick:()=>d("prev"),children:"‹"}),a.jsx(te,{src:l[s].src,alt:l[s].title}),l.length>1&&a.jsx(oe,{className:"next",onClick:()=>d("next"),children:"›"}),a.jsxs(re,{children:[a.jsx(ne,{children:l[s].title}),a.jsxs(se,{children:[s+1," / ",l.length]})]})]})]})]})},me=r.section`
  position: relative;
  padding: 6rem 0;
  background-color: #133238;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }

  /* Background image */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/images/banya/gallery/banya-steam-room.webp');
    background-size: cover;
    background-position: center;
    z-index: 0;
  }

  /* Dark overlay 40% */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
`,ce=r.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,de=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255, 254, 246, 0.4);
  margin-bottom: 1.25rem;
  display: inline-flex;
  align-items: center;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(255, 254, 246, 0.2);
  }

  &::before {
    margin-right: 1rem;
  }

  &::after {
    margin-left: 1rem;
  }
`,pe=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #fffef6;
  text-transform: uppercase;
  margin: 0 0 1.5rem;
`,ge=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 254, 246, 0.55);
  font-weight: 400;
  max-width: 550px;
  margin: 0 auto 3rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
  }
`,fe=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,he=r.div`
  background: rgba(255, 254, 246, 0.05);
  border: 1px solid rgba(255, 254, 246, 0.08);
  border-radius: 12px;
  padding: 1.75rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: ${e=>e.$clickable?"pointer":"default"};

  &:hover {
    border-color: rgba(255, 254, 246, 0.15);
    background: rgba(255, 254, 246, 0.08);
  }
`,ue=r.h4`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 800;
  color: #fffef6;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,be=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 254, 246, 0.5);
  margin: 0;
  font-weight: 400;
`,ye=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.25rem;
  }
`,xe=r.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: #fffef6;
  color: #133238;
  border: none;
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }
`,we=r.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: transparent;
  color: rgba(255, 254, 246, 0.8);
  border: 1px solid rgba(255, 254, 246, 0.2);
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 254, 246, 0.5);
    color: #fffef6;
  }
`,BanyaBookingSection=()=>{const{t:e}=n(),handleWhatsAppClick=()=>{const a=e("common.phone_number","+66 62 480 5877"),i=encodeURIComponent(e("common.whatsapp_messages.book_banya","Hello! I would like to book the Russian Banya"));window.open(`https://wa.me/${a.replace(/\D/g,"")}?text=${i}`,"_blank")},i=[{title:e("banya.booking.contact.whatsapp.title","WhatsApp"),value:e("banya.booking.contact.whatsapp.value","Book via WhatsApp"),action:handleWhatsAppClick},{title:e("banya.booking.contact.location.title","Location"),value:e("banya.booking.contact.location.value","Kathu, Phuket"),action:()=>{window.open("https://maps.app.goo.gl/h7PzpHpBeurg7eK18","_blank")}},{title:e("banya.booking.contact.hours.title","Hours"),value:e("banya.booking.contact.hours.value","17:00 - 22:00"),action:null}];return a.jsx(me,{children:a.jsxs(ce,{children:[a.jsx(de,{children:e("banya.booking.badge","Booking")}),a.jsx(pe,{children:e("banya.booking.cta.title_plain","Book the Banya")}),a.jsx(ge,{children:e("banya.booking.cta.description","Contact us for detailed information about prices, availability and features of our banya programs")}),a.jsx(fe,{children:i.map((e,i)=>a.jsxs(he,{$clickable:!!e.action,onClick:e.action,children:[a.jsx(ue,{children:e.title}),a.jsx(be,{children:e.value})]},i))}),a.jsxs(ye,{children:[a.jsx(xe,{onClick:handleWhatsAppClick,children:e("banya.booking.book_online_button","Book Online")}),a.jsx(we,{onClick:()=>{const a=e("common.phone_number","+66 62 480 5877");window.open(`tel:${a}`,"_self")},children:e("banya.booking.call_now_button","Call Now")})]})]})})},ve=r.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,je=r.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,ke=r.div`
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
`,ze=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,Se=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  max-width: 550px;
  margin: 0 0 4rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 3rem;
  }
`,_e=r.div`
  display: flex;
  flex-direction: column;
`,Te=r.div`
  border-bottom: 1px solid rgba(19, 50, 56, 0.08);

  &:first-child {
    border-top: 1px solid rgba(19, 50, 56, 0.08);
  }
`,Je=r.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 1.5rem;
`,Pe=r.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #133238;
  margin: 0;
  line-height: 1.4;
  flex: 1;
`,Ae=r.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid rgba(19, 50, 56, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  transition: background 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${e=>e.$isOpen?"#133238":"transparent"};
  border-color: ${e=>e.$isOpen?"#133238":"rgba(19, 50, 56, 0.15)"};
  transform: ${e=>e.$isOpen?"rotate(45deg)":"rotate(0deg)"};

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${e=>e.$isOpen?"#fffef6":"#133238"};
    transition: background 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 1px;
  }

  &::before {
    width: 12px;
    height: 1.5px;
  }

  &::after {
    width: 1.5px;
    height: 12px;
  }
`,Be=r.div`
  display: grid;
  grid-template-rows: ${e=>e.$isOpen?"1fr":"0fr"};
  opacity: ${e=>e.$isOpen?"1":"0"};
  transition: grid-template-rows 0.45s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  > div {
    overflow: hidden;
  }
`,qe=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(19, 50, 56, 0.6);
  margin: 0;
  padding-bottom: 1.75rem;
  transform: ${e=>e.$isOpen?"translateY(0)":"translateY(-8px)"};
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,BanyaFAQSection=()=>{const{t:i}=n(),[t,r]=e.useState(null),s=[{question:i("banya.faq.questions.panoramic.question","What's special about the panoramic banya?"),answer:i("banya.faq.questions.panoramic.answer","Our banya is unique with several features: 150 square meters with panoramic jungle windows, built from Siberian cedar and Altai linden - premium natural materials. It's the only panoramic Russian banya in Phuket where you can enjoy traditional banya rituals with tropical nature views.")},{question:i("banya.faq.questions.procedures.question","What procedures are included in the banya ritual?"),answer:i("banya.faq.questions.procedures.answer","Depending on your chosen program you'll receive: classic banya ritual with birch brooms, aromatherapy with essential oils, herbal infusions and teas, option to order massage in the steam room, and personal accompaniment by a master attendant for VIP programs.")},{question:i("banya.faq.questions.materials.question","What materials is the banya built from?"),answer:i("banya.faq.questions.materials.answer","The banya is built exclusively from natural eco-friendly materials: Siberian cedar, Altai linden, Karelian birch. All finishes are natural, without chemical additives. Such materials create a special microclimate and provide natural aromatherapy.")}];return a.jsx(ve,{children:a.jsxs(je,{children:[a.jsx(ke,{children:i("banya.faq.badge","Questions & Answers")}),a.jsx(ze,{children:i("banya.faq.title_plain","Frequently Asked Questions")}),a.jsx(Se,{children:i("banya.faq.subtitle","Answers to the most popular questions about our banya")}),a.jsx(_e,{children:s.map((e,i)=>a.jsxs(Te,{children:[a.jsxs(Je,{onClick:()=>(e=>{r(t===e?null:e)})(i),children:[a.jsx(Pe,{children:e.question}),a.jsx(Ae,{$isOpen:t===i})]}),a.jsx(Be,{$isOpen:t===i,children:a.jsx("div",{children:a.jsx(qe,{$isOpen:t===i,children:e.answer})})})]},i))})]})})},Ie=r.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,Ce=r.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,Ee=r.div`
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
`,He=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1.25rem;
  max-width: 800px;
`,$e=r.div`
  font-family: 'Jost', sans-serif;
  font-size: clamp(0.95rem, 1.3vw, 1.05rem);
  line-height: 1.5;
  color: rgba(19, 50, 56, 0.65);
  margin: 0 0 3rem;
  max-width: 720px;

  strong {
    font-weight: 600;
    color: #133238;
    letter-spacing: 0.02em;
  }

  @media (min-width: 768px) {
    margin-bottom: 3.5rem;
  }
`,Re=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0 4rem;
  }
`,Ne=r.div`
  display: flex;
  flex-direction: column;
`,Oe=r.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #90b3a7;
  border: 1px solid rgba(144, 179, 167, 0.45);
  border-radius: 999px;
  padding: 0.2rem 0.6rem;
  margin-left: auto;
  white-space: nowrap;
  flex-shrink: 0;
`,Me=r.div`
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(19, 50, 56, 0.08);

  &:first-child {
    border-top: 1px solid rgba(19, 50, 56, 0.08);
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 1.25rem 0;
  }
`,Le=r.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 800;
  color: #133238;
  letter-spacing: -0.02em;
  flex-shrink: 0;
  min-width: 80px;

  @media (max-width: 480px) {
    min-width: 65px;
  }
`,Ge=r.span`
  font-family: 'Jost', sans-serif;
  font-size: 1.25rem;
  color: rgba(19, 50, 56, 0.25);
  flex-shrink: 0;
`,We=r.span`
  font-family: 'Jost', sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  color: rgba(19, 50, 56, 0.6);
  letter-spacing: 0.02em;
`,Fe=e.memo(()=>{const{t:e}=n(),i=e("banya.steam_schedule.groups",{returnObjects:!0}),t=Array.isArray(i)?i:[],r=t.find(e=>Array.isArray(e.sessions)&&e.sessions.length>=10),s=t.find(e=>e!==r&&Array.isArray(e.sessions)),o=(null==r?void 0:r.sessions)||[],l=new Set(((null==s?void 0:s.sessions)||[]).map(e=>e.time)),m=e("banya.steam_schedule.early_slot_badge","Fri – Sun only"),c=Math.ceil(o.length/2),d=o.slice(0,c),p=o.slice(c),renderItem=(e,i)=>{const t=!l.has(e.time);return a.jsxs(Me,{children:[a.jsx(Le,{children:e.time}),a.jsx(Ge,{children:"—"}),a.jsx(We,{children:e.name}),t&&a.jsx(Oe,{children:m})]},i)};return a.jsx(Ie,{children:a.jsxs(Ce,{children:[a.jsx(Ee,{children:e("banya.steam_schedule.overline","Weekly Schedule")}),a.jsx(He,{children:e("banya.steam_schedule.title","Steam Sessions")}),a.jsx($e,{dangerouslySetInnerHTML:{__html:e("banya.steam_schedule.note","<strong>Mon – Thu</strong> — sessions from 15:00 · <strong>Fri – Sun</strong> — sessions from 12:00")}}),a.jsxs(Re,{children:[a.jsx(Ne,{children:d.map(renderItem)}),a.jsx(Ne,{children:p.map(renderItem)})]})]})})}),BanyaPage=()=>{const{t:e}=n();return a.jsxs(a.Fragment,{children:[a.jsx(t,{titleKey:"page_titles.banya",description:e("banya.hero.subtitle","Traditional Russian banya experience"),keywords:"KAIF banya, Russian sauna, traditional banya, steam bath, Phuket",ogImage:"/images/banya/panoramic.jpg"}),a.jsx(i,{}),a.jsx(h,{}),a.jsx(Fe,{}),a.jsx(s,{image:"/images/banya/parallax2.jpg"}),a.jsx(BanyaServicesSection,{}),a.jsx(s,{}),a.jsx(BanyaGallerySection,{}),a.jsx(BanyaFeaturesSection,{}),a.jsx(BanyaFAQSection,{}),a.jsx(BanyaBookingSection,{})]})};export{BanyaPage as default};
