import{r as e,j as t}from"./react-core-DWAaPJsY.js";import{d as a}from"./styled-components-CfKEYav0.js";import{u as i}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-DORsZxsB.js";const n=a.section`
  position: relative;
  width: 100%;
  height: 100vh;
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
  contain: none;
  isolation: auto;
  will-change: auto;
  touch-action: auto;
  overscroll-behavior: auto;
  -webkit-overscroll-behavior: auto;

  @media (max-width: 768px) {
    height: 100svh;
    touch-action: auto;
  }
`,s=a.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`,r=a.div`
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
`,o=a.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,l=a.div`
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
`,c=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,m=a.span`
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
`,p=a.span`
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
`,d=e.memo(()=>{const{t:a}=i(),[d,g]=e.useState(0),h=[{src:"/images/spa/services/thai-massage.jpg",alt:a("spa.hero.images.thai_massage","Thai Massage")},{src:"/images/spa/services/massage.jpg",alt:a("spa.hero.images.massage","Massage")},{src:"/images/spa/services/aromatherapy.jpg",alt:a("spa.hero.images.aromatherapy","Aromatherapy")}];return e.useEffect(()=>{const e=setInterval(()=>{g(e=>(e+1)%h.length)},6e3);return()=>clearInterval(e)},[h.length]),t.jsxs(n,{children:[t.jsx(s,{children:h.map((e,a)=>t.jsx(r,{style:{backgroundImage:`url(${e.src})`,opacity:d===a?1:0,zIndex:d===a?2:1}},a))}),t.jsx(o,{children:t.jsx(l,{children:t.jsxs(c,{children:[t.jsx(m,{children:a("spa.hero.title_part1","SPA")}),t.jsx(m,{children:a("spa.hero.title_part2","& Beauty")}),t.jsx(p,{children:a("spa.hero.location","Phuket")})]})})})]})});export{d as default};
