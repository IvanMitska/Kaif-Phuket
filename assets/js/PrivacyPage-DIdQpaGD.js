import{a as r,j as i}from"./vendor-react-FHR7Sy-E.js";import{d as t}from"./vendor-styles-DcQt-q6S.js";import{P as n}from"./CommonComponents-Cwz04vFv.js";import{m as e}from"./vendor-animations-BsFJxBmq.js";import"./vendor-other-CZupzcPt.js";const o=t.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem 3rem;
  }
`,a=t.h1`
  font-family: ${({theme:r})=>{var i;return(null==(i=null==r?void 0:r.fonts)?void 0:i.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  color: ${({theme:r})=>{var i,t;return(null==(t=null==(i=null==r?void 0:r.colors)?void 0:i.text)?void 0:t.primary)||"#2C3E2D"}};
  margin-bottom: 2rem;
  text-align: center;
`,l=t.div`
  font-family: ${({theme:r})=>{var i;return(null==(i=null==r?void 0:r.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({theme:r})=>{var i,t;return(null==(t=null==(i=null==r?void 0:r.colors)?void 0:i.text)?void 0:t.secondary)||"#666"}};
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({theme:r})=>{var i,t;return(null==(t=null==(i=null==r?void 0:r.colors)?void 0:i.text)?void 0:t.primary)||"#2C3E2D"}};
    margin: 2rem 0 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
`,c=()=>{const{t}=r();return i.jsx(n,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},children:i.jsx(o,{children:i.jsxs(e.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[i.jsx(a,{children:t("privacy.title")}),i.jsxs(l,{children:[i.jsx("p",{children:t("privacy.intro")}),i.jsx("h2",{children:t("privacy.collection.title")}),i.jsx("p",{children:t("privacy.collection.content")}),i.jsx("h2",{children:t("privacy.usage.title")}),i.jsx("p",{children:t("privacy.usage.content")}),i.jsx("h2",{children:t("privacy.protection.title")}),i.jsx("p",{children:t("privacy.protection.content")}),i.jsx("h2",{children:t("privacy.contacts.title")}),i.jsxs("p",{children:[t("privacy.contacts.content"),i.jsx("br",{}),t("privacy.contacts.email"),i.jsx("br",{}),t("privacy.contacts.phone")]})]})]})})})};export{c as default};
