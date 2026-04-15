import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-BY9Yozyu.js";import{u as s}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-Dpgsgh4W.js";const n=r.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,t=r.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,o=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(19, 50, 56, 0.25);
    margin-right: 1rem;
  }
`,a=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,d=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  max-width: 550px;
  margin: 0 0 4rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 3rem;
  }
`,l=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 380px;
    gap: 4rem;
  }
`,f=r.div`
  display: flex;
  flex-direction: column;
`,c=r.div`
  border-bottom: 1px solid rgba(19, 50, 56, 0.08);

  &:first-child {
    border-top: 1px solid rgba(19, 50, 56, 0.08);
  }
`,p=r.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 1.5rem;
`,m=r.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #133238;
  margin: 0;
  line-height: 1.4;
  flex: 1;
`,h=r.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid rgba(19, 50, 56, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  transition: background 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${e=>e.$isOpen?"#133238":"transparent"};
  border-color: ${e=>e.$isOpen?"#133238":"rgba(19, 50, 56, 0.15)"};
  transform: ${e=>e.$isOpen?"rotate(45deg)":"rotate(0deg)"};

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${e=>e.$isOpen?"#fffef6":"#133238"};
    transition: background 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 1px;
  }

  &::before {
    width: 12px;
    height: 1.5px;
  }

  &::after {
    width: 1.5px;
    height: 12px;
  }
`,u=r.div`
  display: grid;
  grid-template-rows: ${e=>e.$isOpen?"1fr":"0fr"};
  opacity: ${e=>e.$isOpen?"1":"0"};
  transition: grid-template-rows 0.45s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  > div {
    overflow: hidden;
  }
`,x=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(19, 50, 56, 0.6);
  margin: 0;
  padding-bottom: 1.75rem;
  transform: ${e=>e.$isOpen?"translateY(0)":"translateY(-8px)"};
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,g=r.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,b=r.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`,q=r.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.75rem;
  text-transform: uppercase;
  letter-spacing: -0.01em;
`,w=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(19, 50, 56, 0.5);
  line-height: 1.5;
  margin: 0 0 1.25rem;
`,j=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,y=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  color: rgba(19, 50, 56, 0.45);
  font-weight: 400;
`,FAQSection=()=>{const{t:r}=s(),[v,k]=e.useState(null),$=e.useMemo(()=>[{question:r("faq.questions.what_includes.question"),answer:r("faq.questions.what_includes.answer")},{question:r("faq.questions.working_hours.question"),answer:r("faq.questions.working_hours.answer")},{question:r("faq.questions.how_to_book.question"),answer:r("faq.questions.how_to_book.answer")},{question:r("faq.questions.memberships.question"),answer:r("faq.questions.memberships.answer")},{question:r("faq.questions.experience_needed.question"),answer:r("faq.questions.experience_needed.answer")},{question:r("faq.questions.payment_methods.question"),answer:r("faq.questions.payment_methods.answer")}],[r]);return i.jsx(n,{id:"faq",children:i.jsxs(t,{children:[i.jsx(o,{children:r("faq.badge","FAQ")}),i.jsx(a,{children:r("faq.title")}),i.jsx(d,{children:r("faq.subtitle")}),i.jsxs(l,{children:[i.jsx(f,{children:$.map((e,r)=>i.jsxs(c,{children:[i.jsxs(p,{onClick:()=>(e=>{k(v===e?null:e)})(r),children:[i.jsx(m,{children:e.question}),i.jsx(h,{$isOpen:v===r})]}),i.jsx(u,{$isOpen:v===r,children:i.jsx("div",{children:i.jsx(x,{$isOpen:v===r,children:e.answer})})})]},r))}),i.jsxs(g,{children:[i.jsxs(b,{children:[i.jsx(q,{children:r("faq.support.title")}),i.jsx(w,{children:r("faq.support.description")}),i.jsxs(j,{children:[i.jsx(y,{children:r("faq.support.location")}),i.jsx(y,{children:r("faq.support.hours")})]})]}),i.jsxs(b,{children:[i.jsx(q,{children:r("faq.whatsapp.title")}),i.jsx(w,{children:r("faq.whatsapp.description")}),i.jsxs(j,{children:[i.jsx(y,{children:r("faq.whatsapp.instant_replies")}),i.jsx(y,{children:r("faq.whatsapp.personal_manager")})]})]}),i.jsxs(b,{children:[i.jsx(q,{children:r("faq.consultation.title")}),i.jsx(w,{children:r("faq.consultation.description")}),i.jsx(j,{children:i.jsx(y,{children:r("faq.consultation.free")})})]})]})]})]})})};export{FAQSection as default};
