import{r as e,j as t}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-DYLnJpui.js";import{P as a}from"./ParallaxBackground-9F-giXTZ.js";import{u as s}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-DORsZxsB.js";const i=r.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 70vh;
  }
`,n=r.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0,0,0,0.6) 0%,
    rgba(0,0,0,0.4) 50%,
    rgba(0,0,0,0.5) 100%
  );
  pointer-events: none;
`,o=r.div`
  position: relative;
  z-index: 2;
  text-align: center;
  pointer-events: none;
`,l=r.span`
  display: block;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(5rem, 14vw, 10rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: clamp(4rem, 18vw, 7rem);
  }
`,m=e.memo(()=>{const{t:e}=s();return t.jsxs(i,{children:[t.jsx(a,{src:"/images/restaurant/bar.jpg",speed:.4,overlay:t.jsx(n,{})}),t.jsx(o,{children:t.jsx(l,{children:e("bar.hero.parallax_title","Bar")})})]})});export{m as default};
