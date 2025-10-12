import{a as e,r as i,j as n,ag as a,d as r,E as s,a8 as t,a7 as o,D as d,a9 as l,aa as m}from"./vendor-react-Udk5_aBK.js";import{d as p}from"./vendor-styles-DIjDOctl.js";import{m as h,A as g}from"./vendor-animations-B-vr_HsI.js";import"./vendor-other-CZupzcPt.js";const c=p.section`
  position: relative;
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.05) 0%, rgba(168, 197, 184, 0.03) 100%);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`,f=p.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`,u=p(h.div)`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`,x=p(h.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(144, 179, 167, 0.08);
  border: 1px solid rgba(144, 179, 167, 0.15);
  border-radius: 24px;
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  font-weight: 500;
  color: #90B3A7;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #90B3A7;
  }
`,v=p(h.h2)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`,b=p(h.p)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`,w=p(h.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,q=p(h.div)`
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
`,y=p.button`
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
  
  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
  }
`,j=p.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`,$=p.div`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(144, 179, 167, 0.08);
  border: 1px solid rgba(144, 179, 167, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #90B3A7;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
  
  ${q}:hover & {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    border-color: transparent;
  }
`,A=p.h3`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
  line-height: 1.4;
`,k=p(h.div)`
  width: 2rem;
  height: 2rem;
  background: ${({$isOpen:e})=>e?"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)":"rgba(144, 179, 167, 0.08)"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$isOpen:e})=>e?"white":"#90B3A7"};
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: ${({$isOpen:e})=>e?"0 4px 8px rgba(0, 0, 0, 0.1)":"none"};
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`,B=p(h.div)`
  overflow: hidden;
`,O=p.div`
  padding: 0 2rem 2rem 5.5rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 2rem 1.5rem;
  }
`,P=p.p`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0;
`,S=()=>{const{t:p}=e(),[S,z]=i.useState(null),I={hidden:{opacity:.4,y:15},visible:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}}},C={hidden:{height:0,opacity:0,transition:{height:{duration:.3},opacity:{duration:.2}}},visible:{height:"auto",opacity:1,transition:{height:{duration:.4,ease:[.25,.46,.45,.94]},opacity:{duration:.3,delay:.1}}}},D=[{category:"services",icon:n.jsx(a,{}),question:p("spa.faq.questions.services.question","Какие SPA услуги вы предлагаете?"),answer:p("spa.faq.questions.services.answer","Мы предлагаем полный спектр SPA услуг: массаж (тайский, масляный, спортивный), косметологические процедуры, лазерную эпиляцию, маникюр, педикюр, уход за волосами, а также сауну и хаммам.")},{category:"booking",icon:n.jsx(r,{}),question:p("spa.faq.questions.booking.question","Как записаться на SPA процедуру?"),answer:p("spa.faq.questions.booking.answer","Записаться можно по телефону +66 62 480 5877, через WhatsApp или лично в нашем центре. Рекомендуем бронировать заранее, особенно на популярные процедуры.")},{category:"policy",icon:n.jsx(s,{}),question:p("spa.faq.questions.policy.question","Каковы правила отмены записи?"),answer:p("spa.faq.questions.policy.answer","Просим уведомлять об отмене не менее чем за 24 часа до назначенного времени. При отмене менее чем за 24 часа может взиматься плата за отмену в размере 50% от стоимости процедуры.")},{category:"payment",icon:n.jsx(t,{}),question:p("spa.faq.questions.payment.question","Какие способы оплаты принимаются?"),answer:p("spa.faq.questions.payment.answer","Мы принимаем наличные (THB, USD, EUR), банковские карты всех систем, а также мобильные платежи. Оплата производится после процедуры.")},{category:"preparation",icon:n.jsx(o,{}),question:p("spa.faq.questions.preparation.question","Нужно ли что-то приносить с собой?"),answer:p("spa.faq.questions.preparation.answer","Мы предоставляем все необходимое: полотенца, халаты, тапочки и косметические средства. Вам нужно только прийти и расслабиться.")},{category:"gifts",icon:n.jsx(a,{}),question:p("spa.faq.questions.gifts.question","Есть ли подарочные сертификаты?"),answer:p("spa.faq.questions.gifts.answer","Да! Мы предлагаем подарочные сертификаты различного номинала на любые SPA услуги. Их можно приобрести в нашем центре или заказать по телефону.")}];return n.jsx(c,{children:n.jsxs(f,{children:[n.jsxs(u,{children:[n.jsxs(x,{children:[n.jsx(d,{}),p("spa.faq.badge","SPA Вопросы")]}),n.jsx(v,{children:p("spa.faq.title","Часто задаваемые вопросы")}),n.jsx(b,{children:p("spa.faq.subtitle","Всё, что нужно знать о наших SPA услугах и процедурах")})]}),n.jsx(w,{children:D.map((e,i)=>n.jsx(h.div,{variants:I,custom:i,whileInView:"visible",viewport:{once:!0,amount:.1},children:n.jsxs(q,{$isOpen:S===i,children:[n.jsxs(y,{onClick:()=>(e=>{z(S===e?null:e)})(i),children:[n.jsxs(j,{children:[n.jsx($,{children:e.icon}),n.jsx(A,{children:e.question})]}),n.jsx(k,{$isOpen:S===i,animate:{rotate:S===i?180:0},transition:{duration:.3,ease:"easeInOut"},children:S===i?n.jsx(l,{}):n.jsx(m,{})})]}),n.jsx(g,{children:S===i&&n.jsx(B,{variants:C,initial:"hidden",animate:"visible",exit:"hidden",children:n.jsx(O,{children:n.jsx(P,{children:e.answer})})})})]})},i))})]})})};export{S as default};
