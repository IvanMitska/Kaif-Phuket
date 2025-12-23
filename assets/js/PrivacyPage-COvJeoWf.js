import{j as i}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-fuCKgGld.js";import{P as t}from"./CommonComponents-hGDBg5Dk.js";import{u as e}from"./i18n-core-DrMVsQFB.js";import{m as n}from"./framer-motion-DOblPXrY.js";import"./vendor-misc-D8JVgYt7.js";const o=r.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem 3rem;
  }
`,a=r.h1`
  font-family: ${({theme:i})=>{var r;return(null==(r=null==i?void 0:i.fonts)?void 0:r.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  color: ${({theme:i})=>{var r,t;return(null==(t=null==(r=null==i?void 0:i.colors)?void 0:r.text)?void 0:t.primary)||"#2C3E2D"}};
  margin-bottom: 2rem;
  text-align: center;
`,l=r.div`
  font-family: ${({theme:i})=>{var r;return(null==(r=null==i?void 0:i.fonts)?void 0:r.primary)||"Inter, sans-serif"}};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({theme:i})=>{var r,t;return(null==(t=null==(r=null==i?void 0:i.colors)?void 0:r.text)?void 0:t.secondary)||"#666"}};
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({theme:i})=>{var r,t;return(null==(t=null==(r=null==i?void 0:i.colors)?void 0:r.text)?void 0:t.primary)||"#2C3E2D"}};
    margin: 2rem 0 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
`,PrivacyPage=()=>{const{t:r}=e();return i.jsx(t,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},children:i.jsx(o,{children:i.jsxs(n.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[i.jsx(a,{children:r("privacy.title")}),i.jsxs(l,{children:[i.jsx("p",{children:r("privacy.intro")}),i.jsx("h2",{children:r("privacy.collection.title")}),i.jsx("p",{children:r("privacy.collection.content")}),i.jsx("h2",{children:r("privacy.usage.title")}),i.jsx("p",{children:r("privacy.usage.content")}),i.jsx("h2",{children:r("privacy.protection.title")}),i.jsx("p",{children:r("privacy.protection.content")}),i.jsx("h2",{children:r("privacy.contacts.title")}),i.jsxs("p",{children:[r("privacy.contacts.content"),i.jsx("br",{}),r("privacy.contacts.email"),i.jsx("br",{}),r("privacy.contacts.phone")]})]})]})})})};export{PrivacyPage as default};
