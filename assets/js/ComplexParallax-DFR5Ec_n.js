import{r as e,j as t}from"./react-core-DWAaPJsY.js";import{d as i}from"./styled-components-BY9Yozyu.js";import{P as r}from"./ParallaxBackground-9F-giXTZ.js";import{u as s}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-Dpgsgh4W.js";const a=i.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 70vh;
  }
`,n=i.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: none;
`,o=i.div`
  position: relative;
  z-index: 2;
  text-align: center;
  pointer-events: none;
  padding: 0 2rem;
`,m=i.h2`
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 9vw, 3.5rem);
  }
`,l=e.memo(()=>{const{t:e}=s();return t.jsxs(a,{children:[t.jsx(r,{src:"/images/home/parallax.jpg",speed:.4,overlay:t.jsx(n,{})}),t.jsx(o,{children:t.jsx(m,{children:e("home.parallax.title","Where Time Stands Still")})})]})});export{l as default};
