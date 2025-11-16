import{a as e,r,j as t}from"./vendor-react-Dj8BKr9E.js";import{S as s,g as i,a as n}from"./vendor-animations-DXmTBijG.js";import{d as o}from"./vendor-styles-CqEOfFkH.js";import"./vendor-other-CZupzcPt.js";const a=o.section`
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
`,d=o.span`
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
`;i.registerPlugin(n);const f=()=>{const{t:o}=e(),f=r.useRef(null),m=r.useRef([]),x=r.useRef(null),g=r.useRef(null);r.useEffect(()=>{if(f.current)return m.current.filter(Boolean).forEach(e=>{const r=new s(e,{types:"chars"});i.fromTo(r.chars,{color:"transparent"},{color:"#FFE600",stagger:.005,ease:"none",scrollTrigger:{trigger:f.current,start:"top 80%",end:"bottom 20%",scrub:!0}})}),x.current&&i.to(x.current,{x:"-15%",ease:"none",scrollTrigger:{trigger:f.current,start:"top bottom",end:"bottom top",scrub:!0}}),g.current&&i.fromTo(g.current,{x:"-15%"},{x:"0%",ease:"none",scrollTrigger:{trigger:f.current,start:"top bottom",end:"bottom top",scrub:!0}}),()=>{n.getAll().forEach(e=>e.kill())}},[]);const h=`${o("sports.scrolling.text1","BE STRONG")}. ${o("sports.scrolling.text2","BE CONFIDENT")}. ${o("sports.scrolling.text3","BE UNSTOPPABLE")}. `,u=`${o("sports.scrolling.text2","BE CONFIDENT")}. ${o("sports.scrolling.text3","BE UNSTOPPABLE")}. ${o("sports.scrolling.text4","BE MORE HUMAN")}. `;return t.jsx(a,{ref:f,children:t.jsx(l,{children:t.jsxs(c,{children:[t.jsxs(p,{ref:x,children:[t.jsxs(d,{ref:e=>m.current[0]=e,children:[h,h,h]}),t.jsxs(d,{ref:e=>m.current[1]=e,children:[h,h,h]})]}),t.jsxs(p,{ref:g,children:[t.jsxs(d,{ref:e=>m.current[2]=e,children:[u,u,u]}),t.jsxs(d,{ref:e=>m.current[3]=e,children:[u,u,u]})]})]})})})};export{f as default};
