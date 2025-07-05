import{a as t,j as e}from"./vendor-react-CabZulOG.js";import{d as r}from"./vendor-styles-C61FzGo1.js";import{P as i}from"./CommonComponents-DT37I1fy.js";import{m as n}from"./vendor-animations-CYKlNb5G.js";import"./vendor-other-CZupzcPt.js";const o=r.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem 3rem;
  }
`,s=r.h1`
  font-family: ${({theme:t})=>{var e;return(null==(e=null==t?void 0:t.fonts)?void 0:e.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  color: ${({theme:t})=>{var e,r;return(null==(r=null==(e=null==t?void 0:t.colors)?void 0:e.text)?void 0:r.primary)||"#2C3E2D"}};
  margin-bottom: 2rem;
  text-align: center;
`,l=r.div`
  font-family: ${({theme:t})=>{var e;return(null==(e=null==t?void 0:t.fonts)?void 0:e.primary)||"Inter, sans-serif"}};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({theme:t})=>{var e,r;return(null==(r=null==(e=null==t?void 0:t.colors)?void 0:e.text)?void 0:r.secondary)||"#666"}};
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({theme:t})=>{var e,r;return(null==(r=null==(e=null==t?void 0:t.colors)?void 0:e.text)?void 0:r.primary)||"#2C3E2D"}};
    margin: 2rem 0 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
`,m=()=>{const{t:r}=t();return e.jsx(i,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},children:e.jsx(o,{children:e.jsxs(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[e.jsx(s,{children:r("terms.title")}),e.jsxs(l,{children:[e.jsx("p",{children:r("terms.intro")}),e.jsx("h2",{children:r("terms.general.title")}),e.jsx("p",{children:r("terms.general.content")}),e.jsx("h2",{children:r("terms.booking.title")}),e.jsx("p",{children:r("terms.booking.content")}),e.jsx("h2",{children:r("terms.rules.title")}),e.jsx("p",{children:r("terms.rules.content")}),e.jsx("h2",{children:r("terms.liability.title")}),e.jsx("p",{children:r("terms.liability.content")}),e.jsx("h2",{children:r("terms.contacts.title")}),e.jsxs("p",{children:[r("terms.contacts.content"),e.jsx("br",{}),r("terms.contacts.email"),e.jsx("br",{}),r("terms.contacts.phone"),e.jsx("br",{}),r("terms.contacts.address")]})]})]})})})};export{m as default};
