import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-fuCKgGld.js";import{u as n}from"./i18n-core-DrMVsQFB.js";import{s,b as t,D as a,E as o,r as d,G as l,H as m,a as h,F as c}from"./heroicons-Dc4hJBDs.js";import{m as p,A as f}from"./framer-motion-Ep29qSuC.js";import"./vendor-misc-D8JVgYt7.js";const g=r.section`
  position: relative;
  padding: 3rem 0;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.05) 0%, rgba(168, 197, 184, 0.03) 100%); /* Легкий градиент в зеленых тонах */
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`,x=r.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`,u=r(p.div)`
  text-align: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`,v=r(p.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(144, 179, 167, 0.08); /* Зеленый цвет KAIF с прозрачностью */
  border: 1px solid rgba(144, 179, 167, 0.15); /* Зеленый бордер */
  border-radius: 24px;
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  font-weight: 500;
  color: #90B3A7; /* Зеленый цвет KAIF */
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #90B3A7; /* Зеленый цвет KAIF */
  }
`,b=r(p.h2)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`,j=r(p.p)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`,w=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`,y=r(p.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,q=r(p.div)`
  background: white;
  border: 1px solid ${({$isOpen:e})=>e?"#e2e8f0":"#f1f5f9"};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  ${({$isOpen:e})=>e&&"\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n    transform: translateY(-1px);\n  "}
  
  &:hover {
    border-color: #e2e8f0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
`,A=r.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8fafc;
  }
`,k=r.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`,$=r.div`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(144, 179, 167, 0.08); /* Зеленый цвет KAIF с прозрачностью */
  border: 1px solid rgba(144, 179, 167, 0.15); /* Зеленый бордер */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #90B3A7; /* Зеленый цвет KAIF */
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
  
  ${q}:hover & {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%); /* Градиент зеленого цвета */
    color: white;
    border-color: transparent;
  }
`,I=r.h3`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
  line-height: 1.4;
`,_=r(p.div)`
  width: 2rem;
  height: 2rem;
  background: ${({$isOpen:e})=>e?"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)":"rgba(144, 179, 167, 0.08)"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$isOpen:e})=>e?"white":"#5CB848"};
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: ${({$isOpen:e})=>e?"0 4px 8px rgba(0, 0, 0, 0.1)":"none"};
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`,B=r(p.div)`
  overflow: hidden;
`,F=r.div`
  padding: 0 2rem 2rem 5.5rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 2rem 1.5rem;
  }
`,K=r.p`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0;
`,O=r(p.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,z=r(p.div)`
  background: white;
  border: 1px solid rgba(144, 179, 167, 0.1); /* Зеленый цвет KAIF */
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(144, 179, 167, 0.15); /* Тень с зеленым цветом KAIF */
    border-color: rgba(144, 179, 167, 0.2); /* Зеленый цвет KAIF */
    
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`,C=r.div`
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1.5rem;
  background: rgba(144, 179, 167, 0.08); /* Зеленый цвет KAIF с прозрачностью */
  border: 1px solid rgba(144, 179, 167, 0.15); /* Зеленый бордер */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #90B3A7; /* Зеленый цвет KAIF */
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.4s ease;
  }
  
  ${z}:hover & {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%); /* Градиент зеленого цвета */
    color: white;
    border-color: transparent;
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    
    svg {
      transform: scale(1.1);
    }
  }
`,H=r.h3`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1rem;
  line-height: 1.3;
`,P=r.p`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,X=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Y=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #94a3b8;
    flex-shrink: 0;
  }
`,FAQSection=()=>{const{t:r}=n(),[D,E]=e.useState(null),G={hidden:{opacity:.5,y:10},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}},M={hidden:{opacity:.4,y:15},visible:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}}},S={hidden:{height:0,opacity:0,transition:{height:{duration:.3},opacity:{duration:.2}}},visible:{height:"auto",opacity:1,transition:{height:{duration:.4,ease:[.25,.46,.45,.94]},opacity:{duration:.3,delay:.1}}}},V=e.useMemo(()=>[{category:"general",icon:i.jsx(s,{}),question:r("faq.questions.what_includes.question"),answer:r("faq.questions.what_includes.answer")},{category:"general",icon:i.jsx(t,{}),question:r("faq.questions.working_hours.question"),answer:r("faq.questions.working_hours.answer")},{category:"booking",icon:i.jsx(a,{}),question:r("faq.questions.how_to_book.question"),answer:r("faq.questions.how_to_book.answer")},{category:"booking",icon:i.jsx(o,{}),question:r("faq.questions.memberships.question"),answer:r("faq.questions.memberships.answer")},{category:"services",icon:i.jsx(a,{}),question:r("faq.questions.experience_needed.question"),answer:r("faq.questions.experience_needed.answer")},{category:"payment",icon:i.jsx(o,{}),question:r("faq.questions.payment_methods.question"),answer:r("faq.questions.payment_methods.answer")}],[r]);return i.jsx(g,{children:i.jsx(x,{children:i.jsxs("div",{children:[i.jsxs(u,{children:[i.jsxs(v,{children:[i.jsx(d,{}),r("faq.badge")]}),i.jsx(b,{children:r("faq.title")}),i.jsx(j,{children:r("faq.subtitle")})]}),i.jsxs(w,{children:[i.jsx(y,{children:V.map((e,r)=>i.jsx(p.div,{variants:M,custom:r,whileInView:"visible",viewport:{once:!0,amount:.1},children:i.jsxs(q,{$isOpen:D===r,children:[i.jsxs(A,{onClick:()=>(e=>{E(D===e?null:e)})(r),children:[i.jsxs(k,{children:[i.jsx($,{children:e.icon}),i.jsx(I,{children:e.question})]}),i.jsx(_,{$isOpen:D===r,animate:{rotate:D===r?180:0},transition:{duration:.3,ease:"easeInOut"},children:D===r?i.jsx(l,{}):i.jsx(m,{})})]}),i.jsx(f,{children:D===r&&i.jsx(B,{variants:S,initial:"hidden",animate:"visible",exit:"hidden",children:i.jsx(F,{children:i.jsx(K,{children:e.answer})})})})]})},r))}),i.jsxs(O,{children:[i.jsx(p.div,{variants:G,children:i.jsxs(z,{whileHover:{scale:1.02,transition:{duration:.2}},children:[i.jsx(C,{children:i.jsx(h,{})}),i.jsx(H,{children:r("faq.support.title")}),i.jsx(P,{children:r("faq.support.description")}),i.jsxs(X,{children:[i.jsxs(Y,{children:[i.jsx(c,{}),r("faq.support.location")]}),i.jsxs(Y,{children:[i.jsx(t,{}),r("faq.support.hours")]})]})]})}),i.jsx(p.div,{variants:G,children:i.jsxs(z,{whileHover:{scale:1.02,transition:{duration:.2}},children:[i.jsx(C,{children:i.jsx(d,{})}),i.jsx(H,{children:r("faq.whatsapp.title")}),i.jsx(P,{children:r("faq.whatsapp.description")}),i.jsxs(X,{children:[i.jsxs(Y,{children:[i.jsx(a,{}),r("faq.whatsapp.instant_replies")]}),i.jsxs(Y,{children:[i.jsx(h,{}),r("faq.whatsapp.personal_manager")]})]})]})}),i.jsx(p.div,{variants:G,children:i.jsxs(z,{whileHover:{scale:1.02,transition:{duration:.2}},children:[i.jsx(C,{children:i.jsx(s,{})}),i.jsx(H,{children:r("faq.consultation.title")}),i.jsx(P,{children:r("faq.consultation.description")}),i.jsxs(X,{children:[i.jsxs(Y,{children:[i.jsx(s,{}),r("faq.consultation.free")]}),i.jsxs(Y,{children:[i.jsx(o,{}),"Гибкая оплата"]})]})]})})]})]})]})})})};export{FAQSection as default};
