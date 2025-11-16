import{a as i,j as r}from"./vendor-react-smdvTdEP.js";import{d as t}from"./vendor-styles-2AL1ceAB.js";import{P as n}from"./CommonComponents-Bjbx9ZmO.js";import{m as e}from"./vendor-animations-CgIIu-dn.js";import"./vendor-other-CZupzcPt.js";const o=t.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem 3rem;
  }
`,a=t.h1`
  font-family: ${({theme:i})=>{var r;return(null==(r=null==i?void 0:i.fonts)?void 0:r.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  color: ${({theme:i})=>{var r,t;return(null==(t=null==(r=null==i?void 0:i.colors)?void 0:r.text)?void 0:t.primary)||"#2C3E2D"}};
  margin-bottom: 2rem;
  text-align: center;
`,l=t.div`
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
`,c=()=>{const{t}=i();return r.jsx(n,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},children:r.jsx(o,{children:r.jsxs(e.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[r.jsx(a,{children:t("privacy.title")}),r.jsxs(l,{children:[r.jsx("p",{children:t("privacy.intro")}),r.jsx("h2",{children:t("privacy.collection.title")}),r.jsx("p",{children:t("privacy.collection.content")}),r.jsx("h2",{children:t("privacy.usage.title")}),r.jsx("p",{children:t("privacy.usage.content")}),r.jsx("h2",{children:t("privacy.protection.title")}),r.jsx("p",{children:t("privacy.protection.content")}),r.jsx("h2",{children:t("privacy.contacts.title")}),r.jsxs("p",{children:[t("privacy.contacts.content"),r.jsx("br",{}),t("privacy.contacts.email"),r.jsx("br",{}),t("privacy.contacts.phone")]})]})]})})})};export{c as default};
