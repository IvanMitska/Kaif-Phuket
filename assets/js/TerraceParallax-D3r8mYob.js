import{r as e,j as t}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-DYLnJpui.js";import{P as o}from"./ParallaxBackground-9F-giXTZ.js";import{u as n}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-DORsZxsB.js";const i=r.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 70vh;
  }
`,s=r.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.55) 0%,
    rgba(0,0,0,0.45) 40%,
    rgba(0,0,0,0.6) 100%
  );
  pointer-events: none;
`,a=r.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 700px;
  padding: 0 2rem;
  pointer-events: none;
`,m=r.span`
  display: block;
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
`,l=r.h2`
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0 0 1.5rem;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 9vw, 3.5rem);
  }
`,c=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.15rem;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`,d=e.memo(()=>{const{t:e}=n();return t.jsxs(i,{children:[t.jsx(o,{src:"/images/home/terrace.jpg",speed:.4,overlay:t.jsx(s,{})}),t.jsxs(a,{children:[t.jsx(m,{children:e("home.terrace.overline","2nd Floor")}),t.jsx(l,{children:e("home.terrace.title","Rooftop Terrace")}),t.jsx(c,{children:e("home.terrace.description","A cozy lounge area on the second floor next to the Russian banya. Order food and drinks, relax between steam sessions, and enjoy stunning sunset views over Phuket")})]})]})});export{d as default};
