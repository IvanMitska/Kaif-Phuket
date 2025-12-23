import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as n}from"./styled-components-fuCKgGld.js";import{u as r}from"./i18n-core-DrMVsQFB.js";import{Q as a,b as s,s as t,E as o,D as d,r as l,G as m,H as p}from"./heroicons-DSEs4UIN.js";import{m as c,A as h}from"./framer-motion-DOblPXrY.js";import"./vendor-misc-D8JVgYt7.js";const g=n.section`
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
`,f=n.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`,u=n(c.div)`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`,x=n(c.div)`
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
`,b=n(c.h2)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`,v=n(c.p)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`,w=n(c.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,q=n(c.div)`
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
`,y=n.button`
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
`,j=n.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`,$=n.div`
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
`,A=n.h3`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
  line-height: 1.4;
`,k=n(c.div)`
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
`,B=n(c.div)`
  overflow: hidden;
`,O=n.div`
  padding: 0 2rem 2rem 5.5rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 2rem 1.5rem;
  }
`,P=n.p`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0;
`,SpaFAQSection=()=>{const{t:n}=r(),[S,z]=e.useState(null),I={hidden:{opacity:.4,y:15},visible:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}}},C={hidden:{height:0,opacity:0,transition:{height:{duration:.3},opacity:{duration:.2}}},visible:{height:"auto",opacity:1,transition:{height:{duration:.4,ease:[.25,.46,.45,.94]},opacity:{duration:.3,delay:.1}}}},D=[{category:"services",icon:i.jsx(a,{}),question:n("spa.faq.questions.services.question","Какие SPA услуги вы предлагаете?"),answer:n("spa.faq.questions.services.answer","Мы предлагаем полный спектр SPA услуг: массаж (тайский, масляный, спортивный), косметологические процедуры, лазерную эпиляцию, маникюр, педикюр, уход за волосами, а также сауну и хаммам.")},{category:"booking",icon:i.jsx(s,{}),question:n("spa.faq.questions.booking.question","Как записаться на SPA процедуру?"),answer:n("spa.faq.questions.booking.answer","Записаться можно по телефону +66 62 480 5877, через WhatsApp или лично в нашем центре. Рекомендуем бронировать заранее, особенно на популярные процедуры.")},{category:"policy",icon:i.jsx(t,{}),question:n("spa.faq.questions.policy.question","Каковы правила отмены записи?"),answer:n("spa.faq.questions.policy.answer","Просим уведомлять об отмене не менее чем за 24 часа до назначенного времени. При отмене менее чем за 24 часа может взиматься плата за отмену в размере 50% от стоимости процедуры.")},{category:"payment",icon:i.jsx(o,{}),question:n("spa.faq.questions.payment.question","Какие способы оплаты принимаются?"),answer:n("spa.faq.questions.payment.answer","Мы принимаем наличные (THB, USD, EUR), банковские карты всех систем, а также мобильные платежи. Оплата производится после процедуры.")},{category:"preparation",icon:i.jsx(d,{}),question:n("spa.faq.questions.preparation.question","Нужно ли что-то приносить с собой?"),answer:n("spa.faq.questions.preparation.answer","Мы предоставляем все необходимое: полотенца, халаты, тапочки и косметические средства. Вам нужно только прийти и расслабиться.")},{category:"gifts",icon:i.jsx(a,{}),question:n("spa.faq.questions.gifts.question","Есть ли подарочные сертификаты?"),answer:n("spa.faq.questions.gifts.answer","Да! Мы предлагаем подарочные сертификаты различного номинала на любые SPA услуги. Их можно приобрести в нашем центре или заказать по телефону.")}];return i.jsx(g,{children:i.jsxs(f,{children:[i.jsxs(u,{children:[i.jsxs(x,{children:[i.jsx(l,{}),n("spa.faq.badge","SPA Вопросы")]}),i.jsx(b,{children:n("spa.faq.title","Часто задаваемые вопросы")}),i.jsx(v,{children:n("spa.faq.subtitle","Всё, что нужно знать о наших SPA услугах и процедурах")})]}),i.jsx(w,{children:D.map((e,n)=>i.jsx(c.div,{variants:I,custom:n,whileInView:"visible",viewport:{once:!0,amount:.1},children:i.jsxs(q,{$isOpen:S===n,children:[i.jsxs(y,{onClick:()=>(e=>{z(S===e?null:e)})(n),children:[i.jsxs(j,{children:[i.jsx($,{children:e.icon}),i.jsx(A,{children:e.question})]}),i.jsx(k,{$isOpen:S===n,animate:{rotate:S===n?180:0},transition:{duration:.3,ease:"easeInOut"},children:S===n?i.jsx(m,{}):i.jsx(p,{})})]}),i.jsx(h,{children:S===n&&i.jsx(B,{variants:C,initial:"hidden",animate:"visible",exit:"hidden",children:i.jsx(O,{children:i.jsx(P,{children:e.answer})})})})]})},n))})]})})};export{SpaFAQSection as default};
