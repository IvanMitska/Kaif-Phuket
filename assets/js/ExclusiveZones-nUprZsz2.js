import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as a}from"./styled-components-CfKEYav0.js";import{u as r}from"./i18n-core-DrMVsQFB.js";import{F as t}from"./heroicons-bIxR1-ju.js";import{aa as n}from"./vendor-misc-DORsZxsB.js";const o=a.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;
  touch-action: pan-y;
  overscroll-behavior: auto;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,s=a.div`
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
`,d=a.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 4rem;
  max-width: 800px;
`,p=a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: ${e=>e.$reverse?"1fr 2fr":"2fr 1fr"};
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
`,c=a(n)`
  position: relative;
  display: block;
  height: 320px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;

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
`,l=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;

  ${c}:hover & {
    transform: scale(1.04);
  }
`,g=a.div`
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
`,f=a.h3`
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
`,x=a(n)`
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
`,ExclusiveZones=()=>{const{t:a}=r(),n=e.useMemo(()=>[{id:"fitness",name:a("zones.activity.fitness.name"),description:a("zones.activity.fitness.description"),image:"/images/zones/fitness.jpg",path:"/sports"},{id:"combat",name:a("zones.activity.combat.name"),description:a("zones.activity.combat.description"),image:"/images/zones/combat.jpg",path:"/sports"},{id:"pool",name:a("zones.activity.pool.name"),description:a("zones.activity.pool.description"),image:"/images/zones/pool.jpg",path:"/sports"},{id:"spa",name:a("zones.relax.spa.name"),description:a("zones.relax.spa.description"),image:"/images/zones/spa.jpg",path:"/spa"},{id:"banya",name:a("zones.relax.banya.name"),description:a("zones.relax.banya.description"),image:"/images/zones/banya.jpg",path:"/banya"},{id:"restaurant",name:a("zones.relax.restaurant.name"),description:a("zones.relax.restaurant.description"),image:"/images/zones/restaurant.jpg",path:"/restaurant"}],[a]),renderCard=e=>i.jsxs(c,{to:e.path,children:[i.jsx(l,{src:e.image,alt:e.name,loading:"lazy"}),i.jsxs(g,{children:[i.jsx(f,{children:e.name}),i.jsx(h,{children:e.description}),i.jsxs(x,{as:"span",children:[a("common.learnMore","Learn More"),i.jsx(t,{})]})]})]},e.id);return i.jsx(o,{id:"exclusive-zones",children:i.jsxs(s,{children:[i.jsx(m,{children:a("zones.overline","KAIF Spaces")}),i.jsx(d,{children:a("zones.title","Everything you need for active recreation and relaxation")}),i.jsxs(p,{children:[renderCard(n[0]),renderCard(n[1])]}),i.jsxs(p,{$reverse:!0,children:[renderCard(n[2]),renderCard(n[3])]}),i.jsxs(p,{children:[renderCard(n[4]),renderCard(n[5])]})]})})};export{ExclusiveZones as default};
