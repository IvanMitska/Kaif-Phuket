import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-fuCKgGld.js";import{Y as n}from"./YclientsModal-fERKwjqH.js";import{B as o}from"./BookingModal-D1wbjBVS.js";import{u as t}from"./i18n-core-DrMVsQFB.js";import{n as a,b as s,a as l,F as d,J as m}from"./heroicons-JeCSnvNC.js";import{m as p}from"./framer-motion-DOblPXrY.js";import{aa as h}from"./vendor-misc-D8JVgYt7.js";const c=r.section`
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
`,g=r.div`
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
`,x=r(p.div)`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`,f=r(p.div)`
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
`,b=r(p.h2)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`,u=r(p.p)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto 3rem auto;
`,v=r.div`
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
`,j=r(p.div)`
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
`,w=r.div`
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
  
  ${j}:hover & {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    border-color: transparent;
    transform: scale(1.05);
  }
`,y=r.h3`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`,k=r.p`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.9rem;
  line-height: 1.5;
  color: #64748b;
  margin-bottom: 1.5rem;
`,A=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,B=r.div`
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
`,I=r(p.a)`
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
`;r(p.a)`
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
`;const SpaBookingSection=()=>{const{t:r}=t();h();const[$,z]=e.useState(!1),[C,T]=e.useState(!1),V={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}};return i.jsxs(c,{children:[i.jsxs(g,{children:[i.jsxs(x,{children:[i.jsxs(f,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[i.jsx(a,{}),r("spa.booking.badge","Бронирование")]}),i.jsx(b,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},children:r("spa.booking.title","Записаться на процедуру")}),i.jsx(u,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},children:r("spa.booking.description","Забронируйте SPA-процедуру или услугу салона красоты для полного расслабления")})]}),i.jsxs(v,{children:[i.jsx(p.div,{variants:V,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:i.jsxs(j,{children:[i.jsx(w,{children:i.jsx(a,{})}),i.jsx(y,{children:r("spa.booking.online.title","Онлайн-запись")}),i.jsx(k,{children:r("spa.booking.online.description","Удобная онлайн-запись на любую процедуру. Выберите услугу, мастера и удобное время в несколько кликов.")}),i.jsxs(A,{children:[i.jsxs(B,{children:[i.jsx(s,{}),i.jsx("span",{children:r("spa.booking.online.hours","Запись 24/7 онлайн")})]}),i.jsxs(B,{children:[i.jsx(a,{}),i.jsx("span",{children:r("spa.booking.online.feature","Выбор мастера и времени")})]})]}),i.jsx("div",{style:{marginTop:"1.5rem"},children:i.jsxs(I,{as:"button",onClick:()=>z(!0),whileHover:{scale:1.02},whileTap:{scale:.98},children:[i.jsx(a,{}),r("spa.booking.online.button","Записаться онлайн")]})})]})}),i.jsx(p.div,{variants:V,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.1},children:i.jsxs(j,{children:[i.jsx(w,{children:i.jsx(l,{})}),i.jsx(y,{children:r("spa.booking.phone.title","Позвонить для записи")}),i.jsx(k,{children:r("spa.booking.phone.description","Свяжитесь с нами по телефону для быстрого бронирования. Наши консультанты помогут выбрать подходящую процедуру и время.")}),i.jsxs(A,{children:[i.jsxs(B,{children:[i.jsx(s,{}),i.jsx("span",{children:r("spa.booking.phone.hours","Прием звонков: 9:00 - 21:00")})]}),i.jsxs(B,{children:[i.jsx(d,{}),i.jsx("span",{children:r("spa.booking.phone.location","Пхукет, Таиланд")})]})]}),i.jsx("div",{style:{marginTop:"1.5rem"},children:i.jsxs(I,{href:"tel:+66624805877",whileHover:{scale:1.02},whileTap:{scale:.98},children:[i.jsx(l,{}),"+66 62 480 5877"]})})]})}),i.jsx(p.div,{variants:V,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.2},children:i.jsxs(j,{children:[i.jsx(w,{children:i.jsx(m,{})}),i.jsx(y,{children:r("spa.booking.form.title","Оставить заявку")}),i.jsx(k,{children:r("spa.booking.form.description","Оставьте заявку онлайн — мы перезвоним вам в течение 15 минут и поможем выбрать подходящую процедуру.")}),i.jsxs(A,{children:[i.jsxs(B,{children:[i.jsx(s,{}),i.jsx("span",{children:r("spa.booking.form.feature1","Перезвоним за 15 минут")})]}),i.jsxs(B,{children:[i.jsx(a,{}),i.jsx("span",{children:r("spa.booking.form.feature2","Подберём удобное время")})]})]}),i.jsx("div",{style:{marginTop:"1.5rem"},children:i.jsxs(I,{as:"button",onClick:()=>T(!0),whileHover:{scale:1.02},whileTap:{scale:.98},children:[i.jsx(m,{}),r("spa.booking.form.button","Оставить заявку")]})})]})})]})]}),i.jsx(n,{isOpen:$,onClose:()=>z(!1),customUrl:"https://n1329009.alteg.io"}),i.jsx(o,{isOpen:C,onClose:()=>T(!1),service:r("spa.booking.service","SPA-процедура"),source:"SPA страница - секция записи"})]})};export{SpaBookingSection as default};
