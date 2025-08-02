import{a as t,j as r}from"./vendor-react-Ce3vtg5u.js";import{d as e}from"./vendor-styles-CmrnBrPu.js";import{P as i}from"./CommonComponents-TGDZot_d.js";import{m as n}from"./vendor-animations-C-51Dz0N.js";import"./vendor-other-CZupzcPt.js";const o=e.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem 3rem;
  }
`,s=e.h1`
  font-family: ${({theme:t})=>{var r;return(null==(r=null==t?void 0:t.fonts)?void 0:r.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  color: ${({theme:t})=>{var r,e;return(null==(e=null==(r=null==t?void 0:t.colors)?void 0:r.text)?void 0:e.primary)||"#2C3E2D"}};
  margin-bottom: 2rem;
  text-align: center;
`,l=e.div`
  font-family: ${({theme:t})=>{var r;return(null==(r=null==t?void 0:t.fonts)?void 0:r.primary)||"Inter, sans-serif"}};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({theme:t})=>{var r,e;return(null==(e=null==(r=null==t?void 0:t.colors)?void 0:r.text)?void 0:e.secondary)||"#666"}};
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({theme:t})=>{var r,e;return(null==(e=null==(r=null==t?void 0:t.colors)?void 0:r.text)?void 0:e.primary)||"#2C3E2D"}};
    margin: 2rem 0 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
`,m=()=>{const{t:e}=t();return r.jsx(i,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},children:r.jsx(o,{children:r.jsxs(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(s,{children:e("terms.title")}),r.jsxs(l,{children:[r.jsx("p",{children:e("terms.intro")}),r.jsx("h2",{children:e("terms.general.title")}),r.jsx("p",{children:e("terms.general.content")}),r.jsx("h2",{children:e("terms.booking.title")}),r.jsx("p",{children:e("terms.booking.content")}),r.jsx("h2",{children:e("terms.rules.title")}),r.jsx("p",{children:e("terms.rules.content")}),r.jsx("h2",{children:e("terms.liability.title")}),r.jsx("p",{children:e("terms.liability.content")}),r.jsx("h2",{children:e("terms.contacts.title")}),r.jsxs("p",{children:[e("terms.contacts.content"),r.jsx("br",{}),e("terms.contacts.email"),r.jsx("br",{}),e("terms.contacts.phone"),r.jsx("br",{}),e("terms.contacts.address")]})]})]})})})};export{m as default};
