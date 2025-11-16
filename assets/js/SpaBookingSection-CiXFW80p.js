import{u as e,r as i,j as r,ac as n,c as o,b as t,F as a,x as s}from"./vendor-react-core-CiytVzfL.js"
import{d}from"./vendor-styled-6ntj7xXP.js"
import{Y as l}from"./YclientsModal-DFlT7eGJ.js"
import{m as p}from"./vendor-framer-DJEKn808.js"
import{a as m}from"./vendor-router-BDqfUxHK.js"
import"./vendor-other-CjR0Saws.js"
const h=d.section`
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
`,c=d.div`
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
`,g=d(p.div)`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`,x=d(p.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(144, 179, 167, 0.08);
  border: 1px solid rgba(144, 179, 167, 0.15);
  border-radius: 24px;
  font-family: ${({theme:e})=>{var i
return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  font-weight: 500;
  color: #90B3A7;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #90B3A7;
  }
`,f=d(p.h2)`
  font-family: ${({theme:e})=>{var i
return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`,b=d(p.p)`
  font-family: ${({theme:e})=>{var i
return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto 3rem auto;
`,v=d.div`
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
`,u=d(p.div)`
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
`,w=d.div`
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
  
  ${u}:hover & {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    border-color: transparent;
    transform: scale(1.05);
  }
`,j=d.h3`
  font-family: ${({theme:e})=>{var i
return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Poppins", sans-serif'}};
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`,y=d.p`
  font-family: ${({theme:e})=>{var i
return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.9rem;
  line-height: 1.5;
  color: #64748b;
  margin-bottom: 1.5rem;
`,k=d.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,A=d.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${({theme:e})=>{var i
return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
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
`,B=d(p.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  font-family: ${({theme:e})=>{var i
return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
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
`,I=d(p.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1.25rem;
  background: rgba(144, 179, 167, 0.08);
  color: #90B3A7;
  font-family: ${({theme:e})=>{var i
return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
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
`,$=()=>{const{t:d}=e()
m()
const[$,z]=i.useState(0),C={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}}
return r.jsxs(h,{children:[r.jsxs(c,{children:[r.jsxs(g,{children:[r.jsxs(x,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:1},transition:{duration:.5},children:[r.jsx(n,{}),d("spa.booking.badge","Бронирование")]}),r.jsx(f,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:1},transition:{duration:.5,delay:.1},children:d("spa.booking.title","Записаться на процедуру")}),r.jsx(b,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:1},transition:{duration:.5,delay:.2},children:d("spa.booking.description","Забронируйте SPA-процедуру или услугу салона красоты для полного расслабления")})]}),r.jsxs(v,{children:[r.jsx(p.div,{variants:C,initial:"hidden",whileInView:"visible",viewport:{once:1,amount:.3},children:r.jsxs(u,{children:[r.jsx(w,{children:r.jsx(n,{})}),r.jsx(j,{children:d("spa.booking.online.title","Онлайн-запись")}),r.jsx(y,{children:d("spa.booking.online.description","Удобная онлайн-запись на любую процедуру. Выберите услугу, мастера и удобное время в несколько кликов.")}),r.jsxs(k,{children:[r.jsxs(A,{children:[r.jsx(o,{}),r.jsx("span",{children:d("spa.booking.online.hours","Запись 24/7 онлайн")})]}),r.jsxs(A,{children:[r.jsx(n,{}),r.jsx("span",{children:d("spa.booking.online.feature","Выбор мастера и времени")})]})]}),r.jsx("div",{style:{marginTop:"1.5rem"},children:r.jsxs(B,{as:"button",onClick:()=>z(1),whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(n,{}),d("spa.booking.online.button","Записаться онлайн")]})})]})}),r.jsx(p.div,{variants:C,initial:"hidden",whileInView:"visible",viewport:{once:1,amount:.3},transition:{delay:.1},children:r.jsxs(u,{children:[r.jsx(w,{children:r.jsx(t,{})}),r.jsx(j,{children:d("spa.booking.phone.title","Позвонить для записи")}),r.jsx(y,{children:d("spa.booking.phone.description","Свяжитесь с нами по телефону для быстрого бронирования. Наши консультанты помогут выбрать подходящую процедуру и время.")}),r.jsxs(k,{children:[r.jsxs(A,{children:[r.jsx(o,{}),r.jsx("span",{children:d("spa.booking.phone.hours","Прием звонков: 9:00 - 21:00")})]}),r.jsxs(A,{children:[r.jsx(a,{}),r.jsx("span",{children:d("spa.booking.phone.location","Пхукет, Таиланд")})]})]}),r.jsx("div",{style:{marginTop:"1.5rem"},children:r.jsxs(B,{href:"tel:+66624805877",whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(t,{}),"+66 62 480 5877"]})})]})}),r.jsx(p.div,{variants:C,initial:"hidden",whileInView:"visible",viewport:{once:1,amount:.3},transition:{delay:.2},children:r.jsxs(u,{children:[r.jsx(w,{children:r.jsx(s,{})}),r.jsx(j,{children:d("spa.booking.whatsapp.title","WhatsApp чат")}),r.jsx(y,{children:d("spa.booking.whatsapp.description","Напишите нам в WhatsApp для удобного бронирования. Мы быстро ответим и поможем выбрать лучшее время для вас.")}),r.jsxs(k,{children:[r.jsxs(A,{children:[r.jsx(o,{}),r.jsx("span",{children:d("spa.booking.whatsapp.hours","Онлайн поддержка: 24/7")})]}),r.jsxs(A,{children:[r.jsx(s,{}),r.jsx("span",{children:d("spa.booking.whatsapp.feature","Быстрые ответы")})]})]}),r.jsx("div",{style:{marginTop:"1.5rem"},children:r.jsxs(I,{href:"https://wa.me/66624805877",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.02},whileTap:{scale:.98},children:[r.jsx(s,{}),d("spa.booking.whatsapp.button","Написать в WhatsApp")]})})]})})]})]}),r.jsx(l,{isOpen:$,onClose:()=>z(0),customUrl:"https://n1329009.alteg.io"})]})}
export{$ as default}
