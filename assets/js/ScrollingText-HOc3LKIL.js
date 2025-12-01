import{j as e}from"./react-core-DWAaPJsY.js";import{d as t}from"./styled-components-fuCKgGld.js";import{u as s}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-D8JVgYt7.js";const i=t.section`
  position: relative;
  width: 100%;
  background: #000000;
  overflow-x: hidden;
  overflow-y: visible;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  margin: 0;

  @media (max-width: 768px) {
    overflow: visible !important;
    padding: 0.5rem 0;
    margin: 0;
  }
`,r=t.div`
  width: 100%;
  overflow: hidden;
`,l=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding: 0;
  }
`,a=t.div`
  display: flex;
  white-space: nowrap;
  overflow: visible;
  width: 200%;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  &.scroll-left {
    animation: scrollLeft 30s linear infinite;
  }

  &.scroll-right {
    animation: scrollRight 30s linear infinite;
  }

  @keyframes scrollLeft {
    0% { transform: translateX(0) translateZ(0); }
    100% { transform: translateX(-50%) translateZ(0); }
  }

  @keyframes scrollRight {
    0% { transform: translateX(-50%) translateZ(0); }
    100% { transform: translateX(0) translateZ(0); }
  }
`,n=t.span`
  font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
  font-size: clamp(5rem, 10vw, 12rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  transform: translateZ(0);
  color: #FFE600;

  @media (max-width: 1024px) {
    font-size: clamp(4rem, 9vw, 9rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(4.5rem, 16vw, 7rem);
  }
`,ScrollingText=()=>{const{t:t}=s(),o=`${t("sports.scrolling.text1","BE STRONG")}. ${t("sports.scrolling.text2","BE CONFIDENT")}. ${t("sports.scrolling.text3","BE UNSTOPPABLE")}. `,m=`${t("sports.scrolling.text2","BE CONFIDENT")}. ${t("sports.scrolling.text3","BE UNSTOPPABLE")}. ${t("sports.scrolling.text4","BE MORE HUMAN")}. `;return e.jsx(i,{children:e.jsx(r,{children:e.jsxs(l,{children:[e.jsxs(a,{className:"scroll-left",children:[e.jsxs(n,{children:[o,o,o]}),e.jsxs(n,{children:[o,o,o]})]}),e.jsxs(a,{className:"scroll-right",children:[e.jsxs(n,{children:[m,m,m]}),e.jsxs(n,{children:[m,m,m]})]})]})})})};export{ScrollingText as default};
