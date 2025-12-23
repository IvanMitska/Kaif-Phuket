import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-fuCKgGld.js";import{u as o}from"./i18n-core-DrMVsQFB.js";import{A as t,m as n}from"./framer-motion-DOblPXrY.js";import{C as a,N as s,O as d,P as m,z as l,w as p,y as c}from"./heroicons-DSEs4UIN.js";const x=r(n.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 9999;
  padding: 2rem 1rem;
  backdrop-filter: blur(8px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`,h=r(n.div)`
  background: white;
  border-radius: 24px;
  width: 100%;
  max-width: 480px;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  margin-top: 60px;
  margin-bottom: 2rem;
  flex-shrink: 0;

  @media (max-width: 520px) {
    max-width: calc(100vw - 2rem);
    border-radius: 20px;
    margin-top: 70px;
  }

  @media (max-width: 380px) {
    border-radius: 16px;
    margin-top: 80px;
  }

  * {
    box-sizing: border-box;
  }
`,g=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0;

  @media (max-width: 520px) {
    padding: 1.25rem 1.25rem 0;
  }

  @media (max-width: 380px) {
    padding: 1rem 1rem 0;
  }
`,f=r.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Playfair Display', serif;

  @media (max-width: 380px) {
    font-size: 1.25rem;
  }
`,b=r.button`
  background: #f5f5f5;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e5e5e5;
    transform: rotate(90deg);
  }

  svg {
    width: 20px;
    height: 20px;
    color: #666;
  }
`,u=r.div`
  padding: 1.5rem;

  @media (max-width: 520px) {
    padding: 1.25rem;
  }

  @media (max-width: 380px) {
    padding: 1rem;
  }
`,w=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(144, 179, 167, 0.1);
  border-radius: 20px;
  font-size: 0.875rem;
  color: #90B3A7;
  font-weight: 500;
  margin-bottom: 1.5rem;
  max-width: 100%;
  word-break: break-word;

  @media (max-width: 380px) {
    font-size: 0.8125rem;
    padding: 0.4rem 0.75rem;
  }
`,j=r.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,y=r.div`
  position: relative;
`,k=r.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`,v=r.div`
  position: relative;
`,z=r.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #90B3A7;

  svg {
    width: 18px;
    height: 18px;
  }
`,C=r.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: #fafafa;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #90B3A7;
    background: white;
    box-shadow: 0 0 0 4px rgba(144, 179, 167, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 380px) {
    padding: 0.75rem 0.875rem 0.75rem 2.5rem;
    font-size: 0.9375rem;
  }
`,A=r.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;
  transition: all 0.2s ease;
  background: #fafafa;
  font-family: inherit;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #90B3A7;
    background: white;
    box-shadow: 0 0 0 4px rgba(144, 179, 167, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 380px) {
    padding: 0.75rem 0.875rem;
    font-size: 0.9375rem;
    min-height: 70px;
  }
`,X=r.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`,B=r(n.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(144, 179, 167, 0.3);

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,S=r(n.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  color: #dc2626;
  font-size: 0.875rem;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`,$=r(n.div)`
  text-align: center;
  padding: 2rem;
`,_=r.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;

  svg {
    width: 40px;
    height: 40px;
    color: white;
  }
`,E=r.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
`,D=r.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,I=r(n.button)`
  padding: 0.875rem 2rem;
  background: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #e5e5e5;
  }
`,BookingModal=({isOpen:r,onClose:O,service:P="",source:T="Форма записи на сайте"})=>{const{t:F}=o(),[H,L]=e.useState({name:"",phone:"",date:"",time:"",message:""}),[W,K]=e.useState(!1),[N,R]=e.useState(""),[U,Y]=e.useState(!1);e.useEffect(()=>{r&&(L({name:"",phone:"",date:"",time:"",message:""}),R(""),Y(!1))},[r]),e.useEffect(()=>{const handleEscape=e=>{"Escape"===e.key&&O()};return r&&(document.addEventListener("keydown",handleEscape),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",handleEscape),document.body.style.overflow="unset"}},[r,O]);const handleChange=e=>{const{name:i,value:r}=e.target;L(e=>({...e,[i]:r})),R("")};return i.jsx(t,{children:r&&i.jsx(x,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:O,children:i.jsxs(h,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{type:"spring",damping:25,stiffness:300},onClick:e=>e.stopPropagation(),children:[i.jsxs(g,{children:[i.jsx(f,{children:U?F("booking.form.success_title","Заявка отправлена!"):F("booking.form.title","Записаться")}),i.jsx(b,{onClick:O,children:i.jsx(a,{})})]}),i.jsx(u,{children:i.jsx(t,{mode:"wait",children:U?i.jsxs($,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[i.jsx(_,{children:i.jsx(s,{})}),i.jsx(E,{children:F("booking.form.success_heading","Переход в WhatsApp!")}),i.jsx(D,{children:F("booking.form.success_message_whatsapp","Мы открыли WhatsApp с вашей заявкой. Отправьте сообщение, и мы свяжемся с вами для подтверждения записи.")}),i.jsx(I,{onClick:O,whileHover:{scale:1.02},whileTap:{scale:.98},children:F("booking.form.close","Закрыть")})]},"success"):i.jsxs(n.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[P&&i.jsxs(w,{children:[i.jsx(d,{style:{width:16,height:16}}),P]}),i.jsxs(j,{onSubmit:async e=>{if(e.preventDefault(),H.name.trim())if(H.phone.trim()){K(!0),R("");try{const e=["Здравствуйте! Хочу записаться в KAIF.","",`Имя: ${H.name}`,`Телефон: ${H.phone}`];P&&e.push(`Услуга: ${P}`),H.date&&e.push(`Дата: ${H.date}`),H.time&&e.push(`Время: ${H.time}`),H.message&&e.push(`Комментарий: ${H.message}`);const i=encodeURIComponent(e.join("\n"));window.open(`https://wa.me/66624805877?text=${i}`,"_blank"),Y(!0)}catch(i){R(F("booking.form.error.submit","Произошла ошибка. Попробуйте ещё раз или позвоните нам."))}finally{K(!1)}}else R(F("booking.form.error.phone","Пожалуйста, укажите номер телефона"));else R(F("booking.form.error.name","Пожалуйста, укажите ваше имя"))},children:[N&&i.jsxs(S,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:[i.jsx(m,{}),N]}),i.jsxs(y,{children:[i.jsxs(k,{children:[F("booking.form.name","Ваше имя")," *"]}),i.jsxs(v,{children:[i.jsx(z,{children:i.jsx(l,{})}),i.jsx(C,{type:"text",name:"name",value:H.name,onChange:handleChange,placeholder:F("booking.form.name_placeholder","Как вас зовут?"),autoComplete:"name"})]})]}),i.jsxs(y,{children:[i.jsxs(k,{children:[F("booking.form.phone","Телефон")," *"]}),i.jsxs(v,{children:[i.jsx(z,{children:i.jsx(p,{})}),i.jsx(C,{type:"tel",name:"phone",value:H.phone,onChange:handleChange,placeholder:"+66 XX XXX XXXX",autoComplete:"tel"})]})]}),i.jsxs(X,{children:[i.jsxs(y,{children:[i.jsx(k,{children:F("booking.form.date","Дата")}),i.jsxs(v,{children:[i.jsx(z,{children:i.jsx(d,{})}),i.jsx(C,{type:"date",name:"date",value:H.date,onChange:handleChange,min:(new Date).toISOString().split("T")[0]})]})]}),i.jsxs(y,{children:[i.jsx(k,{children:F("booking.form.time","Время")}),i.jsxs(v,{children:[i.jsx(z,{children:i.jsx(c,{})}),i.jsx(C,{type:"time",name:"time",value:H.time,onChange:handleChange})]})]})]}),i.jsxs(y,{children:[i.jsx(k,{children:F("booking.form.message","Комментарий")}),i.jsx(A,{name:"message",value:H.message,onChange:handleChange,placeholder:F("booking.form.message_placeholder","Дополнительные пожелания...")})]}),i.jsx(B,{type:"submit",disabled:W,whileHover:{scale:1.02},whileTap:{scale:.98},children:W?F("booking.form.submitting","Отправка..."):i.jsxs(i.Fragment,{children:[i.jsx(d,{}),F("booking.form.submit","Отправить заявку")]})})]})]},"form")})})]})})})};export{BookingModal as B};
