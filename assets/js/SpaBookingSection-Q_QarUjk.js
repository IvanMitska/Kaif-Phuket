import{a as e,b as i,j as r,ah as n,ai as o,d as a,c as t,F as s,I as d}from"./vendor-react-C8d7Q6_M.js";import{d as l}from"./vendor-styles-DGlzumVJ.js";import{m as p}from"./vendor-animations-DZaFu96O.js";import"./vendor-other-CZupzcPt.js";const m=l.section`
  position: relative;
  padding: 5rem 0 0 0; /* Убираем нижний padding для устранения белой линии */
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.05) 0%, rgba(168, 197, 184, 0.03) 100%);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 0 0 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0 0 0;
  }
`,h=l.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem 5rem 1.5rem; /* Добавляем нижний padding здесь */
  
  @media (min-width: 1024px) {
    padding: 0 2rem 5rem 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem 2rem 1rem;
  }
`,c=l(p.div)`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`,g=l(p.div)`
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
`,x=l(p.h2)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`,f=l(p.p)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto 3rem auto;
`,v=l.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
`,b=l(p.div)`
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #90B3A7 0%, #A8C5B8 100%);
  }
  
  &:hover {
    border-color: #e2e8f0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`,u=l.div`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(144, 179, 167, 0.08);
  border: 1px solid rgba(144, 179, 167, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #90B3A7;
  margin-bottom: 1.25rem;
  transition: all 0.3s ease;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  ${b}:hover & {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    border-color: transparent;
    transform: scale(1.05);
  }
`,w=l.h3`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`,j=l.p`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.9rem;
  line-height: 1.5;
  color: #64748b;
  margin-bottom: 1.5rem;
`,y=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,k=l.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  color: #64748b;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #90B3A7;
    flex-shrink: 0;
  }
  
  a {
    color: #90B3A7;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
      color: #7A8A7D;
    }
  }
`,A=l(p.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(144, 179, 167, 0.3);
  
  &:hover {
    box-shadow: 0 5px 16px rgba(144, 179, 167, 0.4);
    transform: translateY(-1px);
    color: white;
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`,B=l(p.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1.25rem;
  background: rgba(144, 179, 167, 0.08);
  color: #90B3A7;
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(144, 179, 167, 0.15);
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    border-color: transparent;
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(144, 179, 167, 0.3);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`,I=()=>{const{t:l}=e(),I=i(),$={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}};return r.jsx(m,{children:r.jsxs(h,{children:[r.jsxs(c,{children:[r.jsxs(g,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[r.jsx(n,{}),l("spa.booking.badge","Бронирование")]}),r.jsx(x,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},children:l("spa.booking.title","Записаться на процедуру")}),r.jsx(f,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},children:l("spa.booking.description","Забронируйте SPA-процедуру или услугу салона красоты для полного расслабления")})]}),r.jsxs(v,{children:[r.jsx(p.div,{variants:$,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:r.jsxs(b,{children:[r.jsx(u,{children:r.jsx(o,{})}),r.jsx(w,{children:l("spa.booking.survey.title","Оставить отзыв")}),r.jsx(j,{children:l("spa.booking.survey.description","Помогите нам стать лучше! Заполните короткую анкету о вашем визите и поделитесь впечатлениями о наших услугах.")}),r.jsxs(y,{children:[r.jsxs(k,{children:[r.jsx(a,{}),r.jsx("span",{children:l("spa.booking.survey.time","Займет 2-3 минуты")})]}),r.jsxs(k,{children:[r.jsx(o,{}),r.jsx("span",{children:l("spa.booking.survey.feature","Анонимный опрос")})]})]}),r.jsx("div",{style:{marginTop:"1.5rem"},children:r.jsxs(B,{as:"button",onClick:()=>I("/survey"),whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(o,{}),l("spa.booking.survey.button","Заполнить анкету")]})})]})}),r.jsx(p.div,{variants:$,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.1},children:r.jsxs(b,{children:[r.jsx(u,{children:r.jsx(t,{})}),r.jsx(w,{children:l("spa.booking.phone.title","Позвонить для записи")}),r.jsx(j,{children:l("spa.booking.phone.description","Свяжитесь с нами по телефону для быстрого бронирования. Наши консультанты помогут выбрать подходящую процедуру и время.")}),r.jsxs(y,{children:[r.jsxs(k,{children:[r.jsx(a,{}),r.jsx("span",{children:l("spa.booking.phone.hours","Прием звонков: 9:00 - 21:00")})]}),r.jsxs(k,{children:[r.jsx(s,{}),r.jsx("span",{children:l("spa.booking.phone.location","Пхукет, Таиланд")})]})]}),r.jsx("div",{style:{marginTop:"1.5rem"},children:r.jsxs(A,{href:"tel:+66624805877",whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(t,{}),"+66 62 480 5877"]})})]})}),r.jsx(p.div,{variants:$,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.2},children:r.jsxs(b,{children:[r.jsx(u,{children:r.jsx(d,{})}),r.jsx(w,{children:l("spa.booking.whatsapp.title","WhatsApp чат")}),r.jsx(j,{children:l("spa.booking.whatsapp.description","Напишите нам в WhatsApp для удобного бронирования. Мы быстро ответим и поможем выбрать лучшее время для вас.")}),r.jsxs(y,{children:[r.jsxs(k,{children:[r.jsx(a,{}),r.jsx("span",{children:l("spa.booking.whatsapp.hours","Онлайн поддержка: 24/7")})]}),r.jsxs(k,{children:[r.jsx(d,{}),r.jsx("span",{children:l("spa.booking.whatsapp.feature","Быстрые ответы")})]})]}),r.jsx("div",{style:{marginTop:"1.5rem"},children:r.jsxs(B,{href:"https://wa.me/66624805877",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(d,{}),l("spa.booking.whatsapp.button","Написать в WhatsApp")]})})]})})]})]})})};export{I as default};
