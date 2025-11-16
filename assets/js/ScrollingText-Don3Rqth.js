import{r as e,j as r}from"./react-core-DWAaPJsY.js";import{g as t,S as s}from"./gsap-Cw1IU11l.js";import{S as i}from"./split-type-DfRFsPdw.js";import{d as o}from"./styled-components-fuCKgGld.js";import{u as n}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-D8JVgYt7.js";const a=o.section`
  position: relative;
  width: 100%;
  background: #000000;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  margin: 0;
`,l=o.div`
  width: 100%;
  overflow: hidden;
`,c=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding: 0;
  }
`,p=o.div`
  display: flex;
  white-space: nowrap;
  overflow: visible;
  width: 200%;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
`,f=o.span`
  font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
  font-size: clamp(5rem, 10vw, 12rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  transform: translateZ(0);

  /* Обводка букв */
  -webkit-text-stroke: 3px #FFE600;
  color: transparent;

  /* Для правильной работы с SplitType */
  .char {
    display: inline-block;
    -webkit-text-stroke: 3px #FFE600;
    color: transparent;
    font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 700;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  @media (max-width: 1024px) {
    font-size: clamp(4rem, 9vw, 9rem);
    -webkit-text-stroke: 2.5px #FFE600;

    .char {
      -webkit-text-stroke: 2.5px #FFE600;
    }
  }

  @media (max-width: 768px) {
    font-size: clamp(3rem, 8vw, 6rem);
    -webkit-text-stroke: 2px #FFE600;

    .char {
      -webkit-text-stroke: 2px #FFE600;
    }
  }
`;t.registerPlugin(s);const ScrollingText=()=>{const{t:o}=n(),d=e.useRef(null),m=e.useRef([]),x=e.useRef(null),g=e.useRef(null);e.useEffect(()=>{if(!d.current)return;return m.current.filter(Boolean).forEach(e=>{const r=new i(e,{types:"chars"});t.fromTo(r.chars,{color:"transparent"},{color:"#FFE600",stagger:.005,ease:"none",scrollTrigger:{trigger:d.current,start:"top 80%",end:"bottom 20%",scrub:!0}})}),x.current&&t.to(x.current,{x:"-15%",ease:"none",scrollTrigger:{trigger:d.current,start:"top bottom",end:"bottom top",scrub:!0}}),g.current&&t.fromTo(g.current,{x:"-15%"},{x:"0%",ease:"none",scrollTrigger:{trigger:d.current,start:"top bottom",end:"bottom top",scrub:!0}}),()=>{s.getAll().forEach(e=>e.kill())}},[]);const u=`${o("sports.scrolling.text1","BE STRONG")}. ${o("sports.scrolling.text2","BE CONFIDENT")}. ${o("sports.scrolling.text3","BE UNSTOPPABLE")}. `,h=`${o("sports.scrolling.text2","BE CONFIDENT")}. ${o("sports.scrolling.text3","BE UNSTOPPABLE")}. ${o("sports.scrolling.text4","BE MORE HUMAN")}. `;return r.jsx(a,{ref:d,children:r.jsx(l,{children:r.jsxs(c,{children:[r.jsxs(p,{ref:x,children:[r.jsxs(f,{ref:e=>m.current[0]=e,children:[u,u,u]}),r.jsxs(f,{ref:e=>m.current[1]=e,children:[u,u,u]})]}),r.jsxs(p,{ref:g,children:[r.jsxs(f,{ref:e=>m.current[2]=e,children:[h,h,h]}),r.jsxs(f,{ref:e=>m.current[3]=e,children:[h,h,h]})]})]})})})};export{ScrollingText as default};
