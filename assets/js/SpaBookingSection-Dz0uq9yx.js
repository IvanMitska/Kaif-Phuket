import{a as e,j as i,a1 as r,c as n,d as o,F as t,Z as a}from"./vendor-react-CabZulOG.js";import{d as s}from"./vendor-styles-C61FzGo1.js";import{m as d}from"./vendor-animations-CYKlNb5G.js";import"./vendor-other-CZupzcPt.js";const l=s.section`
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
`,m=s.div`
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
`,p=s(d.div)`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`,h=s(d.div)`
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
`,g=s(d.h2)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`,c=s(d.p)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto 3rem auto;
`,x=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  /* Временно отключено - было для 3 карточек
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
  */
`,f=s(d.div)`
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
`,b=s.div`
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
  
  ${f}:hover & {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    border-color: transparent;
    transform: scale(1.05);
  }
`,v=s.h3`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`,u=s.p`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.9rem;
  line-height: 1.5;
  color: #64748b;
  margin-bottom: 1.5rem;
`,w=s.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,j=s.div`
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
`,y=s(d.a)`
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
`,k=s(d.a)`
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
`,A=()=>{const{t:s}=e(),A={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}};return i.jsx(l,{children:i.jsxs(m,{children:[i.jsxs(p,{children:[i.jsxs(h,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[i.jsx(r,{}),s("spa.booking.badge","Бронирование")]}),i.jsx(g,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},children:s("spa.booking.title","Записаться на процедуру")}),i.jsx(c,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},children:s("spa.booking.description","Забронируйте SPA-процедуру или услугу салона красоты для полного расслабления")})]}),i.jsxs(x,{children:[i.jsx(d.div,{variants:A,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.1},children:i.jsxs(f,{children:[i.jsx(b,{children:i.jsx(n,{})}),i.jsx(v,{children:s("spa.booking.phone.title","Позвонить для записи")}),i.jsx(u,{children:s("spa.booking.phone.description","Свяжитесь с нами по телефону для быстрого бронирования. Наши консультанты помогут выбрать подходящую процедуру и время.")}),i.jsxs(w,{children:[i.jsxs(j,{children:[i.jsx(o,{}),i.jsx("span",{children:s("spa.booking.phone.hours","Прием звонков: 9:00 - 21:00")})]}),i.jsxs(j,{children:[i.jsx(t,{}),i.jsx("span",{children:s("spa.booking.phone.location","Пхукет, Таиланд")})]})]}),i.jsx("div",{style:{marginTop:"1.5rem"},children:i.jsxs(y,{href:"tel:+66624805877",whileHover:{scale:1.02},whileTap:{scale:.98},children:[i.jsx(n,{}),"+66 62 480 5877"]})})]})}),i.jsx(d.div,{variants:A,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.2},children:i.jsxs(f,{children:[i.jsx(b,{children:i.jsx(a,{})}),i.jsx(v,{children:s("spa.booking.whatsapp.title","WhatsApp чат")}),i.jsx(u,{children:s("spa.booking.whatsapp.description","Напишите нам в WhatsApp для удобного бронирования. Мы быстро ответим и поможем выбрать лучшее время для вас.")}),i.jsxs(w,{children:[i.jsxs(j,{children:[i.jsx(o,{}),i.jsx("span",{children:s("spa.booking.whatsapp.hours","Онлайн поддержка: 24/7")})]}),i.jsxs(j,{children:[i.jsx(a,{}),i.jsx("span",{children:s("spa.booking.whatsapp.feature","Быстрые ответы")})]})]}),i.jsx("div",{style:{marginTop:"1.5rem"},children:i.jsxs(k,{href:"https://wa.me/66624805877",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.02},whileTap:{scale:.98},children:[i.jsx(a,{}),s("spa.booking.whatsapp.button","Написать в WhatsApp")]})})]})})]})]})})};export{A as default};
