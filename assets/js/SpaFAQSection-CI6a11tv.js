import{r as e,j as s}from"./react-core-DWAaPJsY.js";import{d as i}from"./styled-components-BY9Yozyu.js";import{u as t}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-Dpgsgh4W.js";const r=i.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,n=i.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,a=i.div`
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
`,o=i.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,d=i.p`
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
`,c=i.div`
  display: flex;
  flex-direction: column;
`,p=i.div`
  border-bottom: 1px solid rgba(19, 50, 56, 0.08);

  &:first-child {
    border-top: 1px solid rgba(19, 50, 56, 0.08);
  }
`,l=i.button`
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
`,f=i.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #133238;
  margin: 0;
  line-height: 1.4;
  flex: 1;
`,m=i.div`
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
`,u=i.div`
  display: grid;
  grid-template-rows: ${e=>e.$isOpen?"1fr":"0fr"};
  opacity: ${e=>e.$isOpen?"1":"0"};
  transition: grid-template-rows 0.45s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  > div {
    overflow: hidden;
  }
`,h=i.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(19, 50, 56, 0.6);
  margin: 0;
  padding-bottom: 1.75rem;
  transform: ${e=>e.$isOpen?"translateY(0)":"translateY(-8px)"};
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,SpaFAQSection=()=>{const{t:i}=t(),[g,b]=e.useState(null),x=[{question:i("spa.faq.questions.services.question","What SPA services do you offer?"),answer:i("spa.faq.questions.services.answer","We offer a full range of SPA services: massage (Thai, oil, sports), cosmetology, laser hair removal, manicure, pedicure, hair care, sauna and hammam.")},{question:i("spa.faq.questions.booking.question","How to book a SPA treatment?"),answer:i("spa.faq.questions.booking.answer","You can book by phone +66 62 480 5877, via WhatsApp, or in person at our center. We recommend booking in advance, especially for popular treatments.")},{question:i("spa.faq.questions.policy.question","What is the cancellation policy?"),answer:i("spa.faq.questions.policy.answer","Please notify us at least 24 hours before the appointment. Cancellations less than 24 hours in advance may incur a fee of 50% of the treatment cost.")},{question:i("spa.faq.questions.payment.question","What payment methods are accepted?"),answer:i("spa.faq.questions.payment.answer","We accept cash (THB, USD, EUR), bank cards of all systems, and mobile payments. Payment is made after the treatment.")},{question:i("spa.faq.questions.preparation.question","Do I need to bring anything?"),answer:i("spa.faq.questions.preparation.answer","We provide everything you need: towels, robes, slippers, and cosmetic products. You just need to come and relax.")},{question:i("spa.faq.questions.gifts.question","Do you have gift certificates?"),answer:i("spa.faq.questions.gifts.answer","Yes! We offer gift certificates of various denominations for any SPA services. They can be purchased at our center or ordered by phone.")}];return s.jsx(r,{children:s.jsxs(n,{children:[s.jsx(a,{children:i("spa.faq.badge","Questions & Answers")}),s.jsx(o,{children:i("spa.faq.title","Frequently Asked Questions")}),s.jsx(d,{children:i("spa.faq.subtitle","Everything you need to know about our SPA services and treatments")}),s.jsx(c,{children:x.map((e,i)=>s.jsxs(p,{children:[s.jsxs(l,{onClick:()=>(e=>{b(g===e?null:e)})(i),children:[s.jsx(f,{children:e.question}),s.jsx(m,{$isOpen:g===i})]}),s.jsx(u,{$isOpen:g===i,children:s.jsx("div",{children:s.jsx(h,{$isOpen:g===i,children:e.answer})})})]},i))})]})})};export{SpaFAQSection as default};
