import{R as e,j as t,r as i}from"./react-core-DWAaPJsY.js";import{d as o}from"./styled-components-CfKEYav0.js";import{A as r,m as n}from"./framer-motion-B0peqmRR.js";import{a}from"./heroicons-lHooInKB.js";import{B as s}from"./BookingModal-D1wbjBVS.js";import{u as l}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-DORsZxsB.js";const d=o(n.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(20, 25, 30, 0.9) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
`,c=o(n.div)`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(250, 252, 252, 1) 100%
  );
  border-radius: 24px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05),
    0 50px 100px -20px rgba(50, 50, 93, 0.25),
    0 30px 60px -30px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  
  @media (max-width: 768px) {
    max-width: 95vw;
    max-height: 95vh;
    border-radius: 20px;
  }
`,p=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem 2rem;
  border-bottom: 1px solid rgba(144, 179, 167, 0.1);
  background: linear-gradient(
    135deg,
    #90B3A7 0%,
    #A8C5B8 50%,
    #B0D4C1 100%
  );
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: shimmer 3s infinite;
  }
  
  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;
  }
`,m=o.h3`
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0;
  font-family: ${({theme:e})=>{var t;return(null==(t=null==e?void 0:e.fonts)?void 0:t.heading)||'"Poppins", sans-serif'}};
  letter-spacing: -0.02em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,g=o.button`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.08) rotate(90deg);
    border-color: rgba(255, 255, 255, 0.4);
    
    &::before {
      transform: translate(-50%, -50%) scale(1.5);
    }
  }
  
  &:active {
    transform: scale(0.95) rotate(90deg);
  }
  
  svg {
    width: 22px;
    height: 22px;
    color: white;
    position: relative;
    z-index: 1;
  }
`,f=o.div`
  height: 600px;
  
  @media (max-width: 768px) {
    height: 500px;
  }
  
  @media (max-width: 480px) {
    height: 450px;
  }
`,b=o.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: white;
`,h=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.1rem;
  color: #64748b;
  background: linear-gradient(
    135deg,
    rgba(144, 179, 167, 0.03) 0%,
    rgba(168, 197, 184, 0.05) 100%
  );
  
  p {
    font-weight: 500;
    color: #5A6B5D;
  }
  
  ol {
    margin-top: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.75rem;
      color: #7A8A7D;
      
      &::marker {
        color: #90B3A7;
        font-weight: 600;
      }
    }
  }
`,YclientsModal=({isOpen:i,onClose:o,companyId:n=null,customUrl:s=null})=>(e.useEffect(()=>{const handleEscape=e=>{"Escape"===e.key&&o()};return i&&(document.addEventListener("keydown",handleEscape),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",handleEscape),document.body.style.overflow="unset"}},[i,o]),t.jsx(r,{children:i&&t.jsx(d,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:o,children:t.jsxs(c,{initial:{opacity:0,scale:.85,y:40,rotateX:-5},animate:{opacity:1,scale:1,y:0,rotateX:0},exit:{opacity:0,scale:.85,y:40,rotateX:-5},transition:{duration:.4,ease:[.32,.72,0,1],opacity:{duration:.25}},onClick:e=>e.stopPropagation(),children:[t.jsxs(p,{children:[t.jsx(m,{children:"Онлайн-запись в KAIF SPA"}),t.jsx(g,{onClick:o,children:t.jsx(a,{})})]}),t.jsx(f,{children:n||s?t.jsx(b,{src:s||(n?`https://n${n}.yclients.com/`:"https://example.yclients.com/"),title:"Онлайн-запись Yclients",allow:"camera; microphone; geolocation"}):t.jsx(h,{children:t.jsxs("div",{children:[t.jsx("p",{children:"Для настройки онлайн-записи нужно:"}),t.jsxs("ol",{style:{textAlign:"left",marginTop:"1rem"},children:[t.jsx("li",{children:"ID компании в Yclients"}),t.jsx("li",{children:"Или прямая ссылка на виджет записи"})]})]})})})]})})})),x=o.section`
  position: relative;
  padding: 6rem 0;
  background-color: #133238;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }

  /* Background image */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/images/spa/services/aromatherapy.jpg');
    background-size: cover;
    background-position: center;
    z-index: 0;
  }

  /* Dark overlay 40% */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
`,u=o.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,k=o.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255, 254, 246, 0.4);
  margin-bottom: 1.25rem;
  display: inline-flex;
  align-items: center;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(255, 254, 246, 0.2);
  }

  &::before {
    margin-right: 1rem;
  }

  &::after {
    margin-left: 1rem;
  }
`,w=o.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #fffef6;
  text-transform: uppercase;
  margin: 0 0 1.5rem;
`,v=o.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 254, 246, 0.55);
  font-weight: 400;
  max-width: 550px;
  margin: 0 auto 3rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
  }
`,y=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,j=o.div`
  background: rgba(255, 254, 246, 0.05);
  border: 1px solid rgba(255, 254, 246, 0.08);
  border-radius: 12px;
  padding: 1.75rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: ${e=>e.$clickable?"pointer":"default"};

  &:hover {
    border-color: rgba(255, 254, 246, 0.15);
    background: rgba(255, 254, 246, 0.08);
  }
`,z=o.h4`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 800;
  color: #fffef6;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,A=o.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 254, 246, 0.5);
  margin: 0;
  font-weight: 400;
`,B=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.25rem;
  }
`,C=o.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: #fffef6;
  color: #133238;
  border: none;
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }
`,_=o.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: transparent;
  color: rgba(255, 254, 246, 0.8);
  border: 1px solid rgba(255, 254, 246, 0.2);
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 254, 246, 0.5);
    color: #fffef6;
  }
`,SpaBookingSection=()=>{const{t:e}=l(),[o,r]=i.useState(!1),[n,a]=i.useState(!1),d=[{title:e("spa.booking.contact.online.title","Online"),value:e("spa.booking.contact.online.value","Book online 24/7"),action:()=>r(!0)},{title:e("spa.booking.contact.whatsapp.title","WhatsApp"),value:e("spa.booking.contact.whatsapp.value","Book via WhatsApp"),action:()=>{const t=e("common.phone_number","+66 62 480 5877"),i=encodeURIComponent(e("common.whatsapp_messages.book_spa","Hello! I would like to book a SPA treatment"));window.open(`https://wa.me/${t.replace(/\D/g,"")}?text=${i}`,"_blank")}},{title:e("spa.booking.contact.phone.title","Phone"),value:e("common.phone_number","+66 62 480 5877"),action:()=>{const t=e("common.phone_number","+66 62 480 5877");window.open(`tel:${t}`,"_self")}}];return t.jsxs(x,{children:[t.jsxs(u,{children:[t.jsx(k,{children:e("spa.booking.badge","Booking")}),t.jsx(w,{children:e("spa.booking.title","Book a Treatment")}),t.jsx(v,{children:e("spa.booking.description","Book a SPA treatment or beauty salon service for complete relaxation")}),t.jsx(y,{children:d.map((e,i)=>t.jsxs(j,{$clickable:!!e.action,onClick:e.action,children:[t.jsx(z,{children:e.title}),t.jsx(A,{children:e.value})]},i))}),t.jsxs(B,{children:[t.jsx(C,{onClick:()=>r(!0),children:e("spa.booking.book_online_button","Book Online")}),t.jsx(_,{onClick:()=>a(!0),children:e("spa.booking.leave_request_button","Leave a Request")})]})]}),t.jsx(YclientsModal,{isOpen:o,onClose:()=>r(!1),customUrl:"https://n1329009.alteg.io"}),t.jsx(s,{isOpen:n,onClose:()=>a(!1),service:e("spa.booking.service","SPA-procedure"),source:"SPA page - booking section"})]})};export{SpaBookingSection as default};
