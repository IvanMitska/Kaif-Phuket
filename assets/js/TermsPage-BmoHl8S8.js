import{j as t}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-CfKEYav0.js";import{P as e}from"./CommonComponents-Ch6TJt-4.js";import{u as i}from"./i18n-core-DrMVsQFB.js";import{m as n}from"./framer-motion-B0peqmRR.js";import"./vendor-misc-DORsZxsB.js";const o=r.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem 3rem;
  }
`,s=r.h1`
  font-family: ${({theme:t})=>{var r;return(null==(r=null==t?void 0:t.fonts)?void 0:r.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  color: ${({theme:t})=>{var r,e;return(null==(e=null==(r=null==t?void 0:t.colors)?void 0:r.text)?void 0:e.primary)||"#2C3E2D"}};
  margin-bottom: 2rem;
  text-align: center;
`,l=r.div`
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
`,TermsPage=()=>{const{t:r}=i();return t.jsx(e,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},children:t.jsx(o,{children:t.jsxs(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[t.jsx(s,{children:r("terms.title")}),t.jsxs(l,{children:[t.jsx("p",{children:r("terms.intro")}),t.jsx("h2",{children:r("terms.general.title")}),t.jsx("p",{children:r("terms.general.content")}),t.jsx("h2",{children:r("terms.booking.title")}),t.jsx("p",{children:r("terms.booking.content")}),t.jsx("h2",{children:r("terms.rules.title")}),t.jsx("p",{children:r("terms.rules.content")}),t.jsx("h2",{children:r("terms.liability.title")}),t.jsx("p",{children:r("terms.liability.content")}),t.jsx("h2",{children:r("terms.contacts.title")}),t.jsxs("p",{children:[r("terms.contacts.content"),t.jsx("br",{}),r("terms.contacts.email"),t.jsx("br",{}),r("terms.contacts.phone"),t.jsx("br",{}),r("terms.contacts.address")]})]})]})})})};export{TermsPage as default};
