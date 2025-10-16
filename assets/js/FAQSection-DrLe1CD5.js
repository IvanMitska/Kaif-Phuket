import{a as e,r as i,j as r,J as n,d as s,aa as t,ab as a,G as o,ac as d,ad as l,c as h,F as m}from"./vendor-react-C2zHc7Dg.js";import{d as c}from"./vendor-styles-CUryOWdt.js";import{m as p,A as f}from"./vendor-animations-BsYeMdwa.js";import"./vendor-other-CZupzcPt.js";const g=c.section`
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
`,x=c.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`,u=c(p.div)`
  text-align: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`,v=c(p.div)`
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
`,b=c(p.h2)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`,j=c(p.p)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`,w=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`,y=c(p.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,q=c(p.div)`
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
`,A=c.button`
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
`,k=c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`,$=c.div`
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
`,I=c.h3`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
  line-height: 1.4;
`,_=c(p.div)`
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
`,B=c(p.div)`
  overflow: hidden;
`,F=c.div`
  padding: 0 2rem 2rem 5.5rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 2rem 1.5rem;
  }
`,K=c.p`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0;
`,O=c(p.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,z=c(p.div)`
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
`,C=c.div`
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
`,H=c.h3`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1rem;
  line-height: 1.3;
`,P=c.p`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,X=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Y=c.div`
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
`,G=()=>{const{t:c}=e(),[G,J]=i.useState(null),M={hidden:{opacity:.5,y:10},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}},S={hidden:{opacity:.4,y:15},visible:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}}},V={hidden:{height:0,opacity:0,transition:{height:{duration:.3},opacity:{duration:.2}}},visible:{height:"auto",opacity:1,transition:{height:{duration:.4,ease:[.25,.46,.45,.94]},opacity:{duration:.3,delay:.1}}}},D=i.useMemo(()=>[{category:"general",icon:r.jsx(n,{}),question:c("faq.questions.what_includes.question"),answer:c("faq.questions.what_includes.answer")},{category:"general",icon:r.jsx(s,{}),question:c("faq.questions.working_hours.question"),answer:c("faq.questions.working_hours.answer")},{category:"booking",icon:r.jsx(t,{}),question:c("faq.questions.how_to_book.question"),answer:c("faq.questions.how_to_book.answer")},{category:"booking",icon:r.jsx(a,{}),question:c("faq.questions.memberships.question"),answer:c("faq.questions.memberships.answer")},{category:"services",icon:r.jsx(t,{}),question:c("faq.questions.experience_needed.question"),answer:c("faq.questions.experience_needed.answer")},{category:"payment",icon:r.jsx(a,{}),question:c("faq.questions.payment_methods.question"),answer:c("faq.questions.payment_methods.answer")}],[c]);return r.jsx(g,{children:r.jsx(x,{children:r.jsxs("div",{children:[r.jsxs(u,{children:[r.jsxs(v,{children:[r.jsx(o,{}),c("faq.badge")]}),r.jsx(b,{children:c("faq.title")}),r.jsx(j,{children:c("faq.subtitle")})]}),r.jsxs(w,{children:[r.jsx(y,{children:D.map((e,i)=>r.jsx(p.div,{variants:S,custom:i,whileInView:"visible",viewport:{once:!0,amount:.1},children:r.jsxs(q,{$isOpen:G===i,children:[r.jsxs(A,{onClick:()=>(e=>{J(G===e?null:e)})(i),children:[r.jsxs(k,{children:[r.jsx($,{children:e.icon}),r.jsx(I,{children:e.question})]}),r.jsx(_,{$isOpen:G===i,animate:{rotate:G===i?180:0},transition:{duration:.3,ease:"easeInOut"},children:G===i?r.jsx(d,{}):r.jsx(l,{})})]}),r.jsx(f,{children:G===i&&r.jsx(B,{variants:V,initial:"hidden",animate:"visible",exit:"hidden",children:r.jsx(F,{children:r.jsx(K,{children:e.answer})})})})]})},i))}),r.jsxs(O,{children:[r.jsx(p.div,{variants:M,children:r.jsxs(z,{whileHover:{scale:1.02,transition:{duration:.2}},children:[r.jsx(C,{children:r.jsx(h,{})}),r.jsx(H,{children:c("faq.support.title")}),r.jsx(P,{children:c("faq.support.description")}),r.jsxs(X,{children:[r.jsxs(Y,{children:[r.jsx(m,{}),c("faq.support.location")]}),r.jsxs(Y,{children:[r.jsx(s,{}),c("faq.support.hours")]})]})]})}),r.jsx(p.div,{variants:M,children:r.jsxs(z,{whileHover:{scale:1.02,transition:{duration:.2}},children:[r.jsx(C,{children:r.jsx(o,{})}),r.jsx(H,{children:c("faq.whatsapp.title")}),r.jsx(P,{children:c("faq.whatsapp.description")}),r.jsxs(X,{children:[r.jsxs(Y,{children:[r.jsx(t,{}),c("faq.whatsapp.instant_replies")]}),r.jsxs(Y,{children:[r.jsx(h,{}),c("faq.whatsapp.personal_manager")]})]})]})}),r.jsx(p.div,{variants:M,children:r.jsxs(z,{whileHover:{scale:1.02,transition:{duration:.2}},children:[r.jsx(C,{children:r.jsx(n,{})}),r.jsx(H,{children:c("faq.consultation.title")}),r.jsx(P,{children:c("faq.consultation.description")}),r.jsxs(X,{children:[r.jsxs(Y,{children:[r.jsx(n,{}),c("faq.consultation.free")]}),r.jsxs(Y,{children:[r.jsx(a,{}),"Гибкая оплата"]})]})]})})]})]})]})})})};export{G as default};
