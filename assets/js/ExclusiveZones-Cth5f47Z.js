import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as a}from"./styled-components-BY9Yozyu.js";import{u as o}from"./i18n-core-DrMVsQFB.js";import{c as s}from"./heroicons-CckZQ0I5.js";import{aa as t}from"./vendor-misc-Dpgsgh4W.js";const n=a.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;
  touch-action: pan-y;
  overscroll-behavior: auto;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,r=a.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,m=a.div`
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
`,p=a.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 4rem;
  max-width: 800px;
`,l=a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: ${e=>e.$reverse?"1fr 2fr":"2fr 1fr"};
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
`,g=a.div`
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
`;a.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
  background-color: #e5e5e5;

  ${g}:hover & {
    transform: scale(1.04);
  }
`;const d=a.picture`
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

  ${g}:hover & img {
    transform: scale(1.04);
  }
`,c=a.div`
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
`,b=a.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 800;
  margin: 0 0 0.4rem;
  letter-spacing: -0.01em;
  color: #fff;
  text-transform: uppercase;
`,h=a.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  max-width: 400px;
`,f=a.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`,w=a(t)`
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
`,x=a.a`
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
`,ExclusiveZones=()=>{const{t:a}=o(),t=e.useMemo(()=>[{id:"banya",name:a("zones.relax.banya.name"),description:a("zones.relax.banya.description"),image:"/images/zones/banya.jpg",imageWebp:"/images-webp/zones/banya.webp",imageSmall:"/images-webp/small/zones/banya.webp",imageMedium:"/images-webp/medium/zones/banya.webp",width:1920,height:1440,path:"/banya",bookMessage:"Hello! I would like to book the Russian Banya at KAIF"},{id:"restaurant",name:a("zones.relax.restaurant.name"),description:a("zones.relax.restaurant.description"),image:"/images/zones/restaurant.jpg",imageWebp:"/images-webp/zones/restaurant.webp",imageSmall:"/images-webp/small/zones/restaurant.webp",imageMedium:"/images-webp/medium/zones/restaurant.webp",width:1920,height:1440,path:"/restaurant",bookMessage:"Hello! I would like to book a table at KAIF Restaurant"},{id:"spa",name:a("zones.relax.spa.name"),description:a("zones.relax.spa.description"),image:"/images/zones/spa.jpg",imageWebp:"/images-webp/zones/spa.webp",imageSmall:"/images-webp/small/zones/spa.webp",imageMedium:"/images-webp/medium/zones/spa.webp",width:1920,height:1280,path:"/spa",bookMessage:"Hello! I would like to book a SPA treatment at KAIF"},{id:"pool",name:a("zones.activity.pool.name"),description:a("zones.activity.pool.description"),image:"/images/zones/pool.jpg",imageWebp:"/images-webp/zones/pool.webp",imageSmall:"/images-webp/small/zones/pool.webp",imageMedium:"/images-webp/medium/zones/pool.webp",width:1920,height:1440,path:"/sports/swimming-pool",bookMessage:"Hello! I would like to book a swimming session at KAIF"},{id:"fitness",name:a("zones.activity.fitness.name"),description:a("zones.activity.fitness.description"),image:"/images/zones/fitness.jpg",imageWebp:"/images-webp/zones/fitness.webp",imageSmall:"/images-webp/small/zones/fitness.webp",imageMedium:"/images-webp/medium/zones/fitness.webp",width:1920,height:1440,path:"/sports/gym",bookMessage:"Hello! I would like to book a gym session at KAIF"},{id:"combat",name:a("zones.activity.combat.name"),description:a("zones.activity.combat.description"),image:"/images/zones/combat.jpg",imageWebp:"/images-webp/zones/combat.webp",imageSmall:"/images-webp/small/zones/combat.webp",imageMedium:"/images-webp/medium/zones/combat.webp",width:1920,height:1440,path:"/sports/fight-club",bookMessage:"Hello! I would like to book a martial arts session at KAIF"}],[a]),renderCard=e=>i.jsxs(g,{children:[i.jsxs(d,{children:[i.jsx("source",{type:"image/webp",srcSet:`${e.imageSmall} 768w, ${e.imageMedium} 1024w, ${e.imageWebp} 1920w`,sizes:"(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}),i.jsx("img",{src:e.image,alt:e.name,loading:"lazy",decoding:"async",width:e.width,height:e.height,fetchPriority:"banya"===e.id?"high":"low"})]}),i.jsxs(c,{children:[i.jsx(b,{children:e.name}),i.jsx(h,{children:e.description}),i.jsxs(f,{children:[i.jsxs(w,{to:e.path,children:[a("common.learnMore","Learn More"),i.jsx(s,{})]}),i.jsx(x,{href:`https://wa.me/66624805877?text=${encodeURIComponent(e.bookMessage)}`,target:"_blank",rel:"noopener noreferrer",children:a("common.book","Book")})]})]})]},e.id);return i.jsx(n,{id:"exclusive-zones",children:i.jsxs(r,{children:[i.jsx(m,{children:a("zones.overline","KAIF Spaces")}),i.jsx(p,{children:a("zones.title","Everything you need for active recreation and relaxation")}),i.jsxs(l,{children:[renderCard(t[0]),renderCard(t[1])]}),i.jsxs(l,{$reverse:!0,children:[renderCard(t[2]),renderCard(t[3])]}),i.jsxs(l,{children:[renderCard(t[4]),renderCard(t[5])]})]})})};export{ExclusiveZones as default};
