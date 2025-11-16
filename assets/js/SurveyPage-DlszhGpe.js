import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as a}from"./styled-components-fuCKgGld.js";import{B as t,H as r,F as n,a as s,b as o,c as l,M as d,d as c,e as p,f as h,g as m,h as x,i as g,j as f,k as b,l as y}from"./react-icons-DxYdSIzX.js";import{P as u}from"./PageScrollReset-BDYyiQ41.js";import{P as j}from"./PageHead-ByG18s83.js";import{m as w,A as v}from"./framer-motion-Ep29qSuC.js";import"./vendor-misc-D8JVgYt7.js";import"./react-helmet-BCF-s7y-.js";import"./i18n-core-DrMVsQFB.js";const k=a.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #f0f9f5 0%, #e8f6ea 70%, #90b3a7 100%);
  padding: 2rem 1rem;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: 0;
  margin-bottom: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: -30%;
    right: -30%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(144, 179, 167, 0.08) 0%, transparent 70%);
    animation: float 20s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -30%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(168, 197, 184, 0.08) 0%, transparent 70%);
    animation: float 25s ease-in-out infinite reverse;
  }
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(30px, -30px) rotate(120deg); }
    66% { transform: translate(-20px, 20px) rotate(240deg); }
  }
  
  @media (min-width: 768px) {
    padding: 4rem 2rem;
    padding-bottom: 0;
  }
`,S=a.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`,$=a(w.div)`
  text-align: center;
  margin-bottom: 3rem;
`,z=a.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #90b3a7 0%, #a8c5b8 100%);
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.3);
  
  svg {
    font-size: 2.5rem;
    color: white;
  }
`,R=a.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
  
  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`,C=a.p`
  font-size: 1.125rem;
  color: #6B7280;
  font-family: 'Inter', sans-serif;
`,T=a(w.div)`
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #90b3a7 0%, #d4a574 50%, #b8c4a8 100%);
  }
`,A=a.form`
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,N=a(w.div)`
  margin-bottom: 2.5rem;
  
  &:last-of-type {
    margin-bottom: 0;
  }
`,B=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #90b3a7 0%, #a8c5b8 100%);
  color: white;
  border-radius: 50%;
  font-size: 0.875rem;
  font-weight: 600;
  margin-right: 1rem;
  flex-shrink: 0;
`,F=a.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`,I=a.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1F2937;
  font-family: 'Inter', sans-serif;
  line-height: 1.4;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,O=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`,H=a(w.label)`
  display: flex;
  align-items: center;
  padding: 1.25rem;
  background: #f9fafb;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    border-color: #90b3a7;
    background: #f0f9f5;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(144, 179, 167, 0.15);
  }
  
  &:has(input:checked) {
    border-color: #90b3a7;
    background: linear-gradient(135deg, rgba(144, 179, 167, 0.1) 0%, rgba(168, 197, 184, 0.1) 100%);
    
    &::after {
      content: '';
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      width: 24px;
      height: 24px;
      background: #90b3a7;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`,P=a.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,D=a.span`
  font-size: 1rem;
  color: #374151;
  font-family: 'Inter', sans-serif;
`,K=a.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (min-width: 640px) {
    justify-content: flex-start;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`,E=a(w.label)`
  position: relative;
  width: 60px;
  height: 60px;
  background: ${e=>e.$isSelected?"linear-gradient(135deg, #90b3a7 0%, #a8c5b8 100%)":"#f3f4f6"};
  border: 2px solid ${e=>e.$isSelected?"#90b3a7":"#e5e7eb"};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${e=>e.$isSelected?"white":"#6b7280"};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    border-color: #90b3a7;
    box-shadow: 0 4px 12px rgba(144, 179, 167, 0.2);
  }
  
  svg {
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 1rem;
    color: #f59e0b;
    opacity: ${e=>e.$showStar?1:0};
    transition: opacity 0.3s ease;
  }
`,L=a(w.input)`
  width: 100%;
  padding: 1rem 1.25rem;
  background: #f9fafb;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #90b3a7;
    background: white;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`,q=a(w.textarea)`
  width: 100%;
  padding: 1rem 1.25rem;
  background: #f9fafb;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #90b3a7;
    background: white;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`,Y=a(w.div)`
  margin-top: 1rem;
`,X=a(w.button)`
  width: 100%;
  padding: 1.25rem 2rem;
  margin-top: 3rem;
  background: linear-gradient(135deg, #90b3a7 0%, #a8c5b8 100%);
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 4px 20px rgba(144, 179, 167, 0.3);
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(144, 179, 167, 0.4);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: linear-gradient(135deg, #90b3a7 0%, #a8c5b8 100%);
    transform: none !important;
  }
`,Z=a(w.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 32px;
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,_=a(w.div)`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #90b3a7 0%, #a8c5b8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.3);
  
  svg {
    font-size: 3.5rem;
    color: white;
  }
`,G=a.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`,J=a.p`
  font-size: 1.125rem;
  color: #6B7280;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
`,M=a(w.div)`
  position: absolute;
  width: ${e=>e.$size||"200px"};
  height: ${e=>e.$size||"200px"};
  background: linear-gradient(135deg, ${e=>e.$color1||"#90B3A7"} 0%, ${e=>e.$color2||"#A8C5B8"} 100%);
  border-radius: 50%;
  opacity: 0.1;
  z-index: -1;
  pointer-events: none;
`,SurveyPage=()=>{const[a,Q]=e.useState({services:[],source:"",otherSource:"",serviceRating:"",resultRating:"",masterName:"",improvements:"",wantsOffers:null,phoneNumber:""}),[U,V]=e.useState(!1),[W,ee]=e.useState(!1),[ie,ae]=e.useState(""),te=[{id:"manicure",label:"Маникюр / педикюр",icon:i.jsx(l,{})},{id:"facial",label:"Уход за лицом",icon:i.jsx(d,{})},{id:"brows",label:"Брови / ресницы",icon:i.jsx(c,{})},{id:"hair",label:"Стрижка / укладка",icon:i.jsx(p,{})},{id:"massage",label:"Массаж",icon:i.jsx(h,{})},{id:"other",label:"Другое",icon:i.jsx(m,{})}],re=[{id:"instagram",label:"Instagram",icon:i.jsx(x,{})},{id:"recommendation",label:"По рекомендации",icon:i.jsx(g,{})},{id:"resident",label:"Проживаю в KAIF",icon:i.jsx(f,{})},{id:"passing",label:"Проходил(а) мимо",icon:i.jsx(b,{})},{id:"other",label:"Другое",icon:i.jsx(y,{})}];return U?i.jsxs(k,{children:[i.jsx(u,{}),i.jsx(S,{children:i.jsxs(Z,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,type:"spring"},children:[i.jsx(_,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},children:i.jsx(t,{})}),i.jsxs(w.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[i.jsx(G,{children:"Спасибо за ваш отзыв!"}),i.jsx(J,{children:"Мы очень ценим ваше мнение и постараемся стать еще лучше для вас. Ваши предложения помогают нам совершенствовать наш сервис."})]})]})})]}):i.jsxs(k,{children:[i.jsx(j,{titleKey:"page_titles.survey",description:"Анкета клиента бьюти-салона KAIF Beauty",keywords:"KAIF survey, feedback, customer satisfaction"}),i.jsx(u,{}),i.jsx(M,{$size:"300px",$color1:"#90B3A7",$color2:"#A8C5B8",style:{top:"-150px",right:"-100px"},animate:{rotate:360},transition:{duration:50,repeat:1/0,ease:"linear"}}),i.jsx(M,{$size:"250px",$color1:"#D4A574",$color2:"#E8B796",style:{bottom:"-100px",left:"-120px"},animate:{rotate:-360},transition:{duration:40,repeat:1/0,ease:"linear"}}),i.jsxs(S,{children:[i.jsxs($,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:[i.jsx(z,{children:i.jsx(r,{})}),i.jsx(R,{children:"Анкета клиента"}),i.jsx(C,{children:"KAIF Beauty — ваше мнение важно для нас"})]}),i.jsx(T,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:i.jsxs(A,{onSubmit:async e=>{e.preventDefault(),ee(!0),ae("");try{const e="https://script.google.com/macros/s/AKfycbxmqEA8Vojx-Lsr8wNTtuoFbCXTkqLS40RkXgZOtTq_kEiDze7SvkQTd6vBDZGiBKbL/exec",i=new URLSearchParams;i.append("services",JSON.stringify(a.services)),i.append("source",a.source||""),i.append("otherSource",a.otherSource||""),i.append("serviceRating",a.serviceRating||""),i.append("resultRating",a.resultRating||""),i.append("masterName",a.masterName||""),i.append("improvements",a.improvements||""),i.append("wantsOffers",String(a.wantsOffers)),i.append("phoneNumber",a.phoneNumber||"");const t=new Image;t.style.display="none",t.onload=()=>{document.body.removeChild(t)},t.onerror=()=>{document.body.removeChild(t)},t.src=`${e}?${i.toString()}`,document.body.appendChild(t),await new Promise(e=>setTimeout(e,2e3)),V(!0)}catch(i){ae("Произошла ошибка при отправке анкеты. Попробуйте еще раз.")}finally{ee(!1)}},children:[i.jsxs(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3,type:"spring",stiffness:100},children:[i.jsxs(F,{children:[i.jsx(B,{children:"1"}),i.jsx(I,{children:"Какую услугу вы получили сегодня?"})]}),i.jsx(O,{children:te.map((e,t)=>i.jsxs(H,{whileHover:{scale:1.02},whileTap:{scale:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4+.05*t},children:[i.jsx(P,{type:"checkbox",checked:a.services.includes(e.id),onChange:()=>{return i=e.id,void Q(e=>({...e,services:e.services.includes(i)?e.services.filter(e=>e!==i):[...e.services,i]}));var i}}),i.jsx("span",{style:{marginRight:"0.75rem",fontSize:"1.25rem",color:"#90b3a7"},children:e.icon}),i.jsx(D,{children:e.label})]},e.id))})]}),i.jsxs(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,type:"spring",stiffness:100},children:[i.jsxs(F,{children:[i.jsx(B,{children:"2"}),i.jsx(I,{children:"Как вы узнали о нашем салоне?"})]}),i.jsx(O,{children:re.map((e,t)=>i.jsxs(H,{whileHover:{scale:1.02},whileTap:{scale:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5+.05*t},children:[i.jsx(P,{type:"radio",name:"source",checked:a.source===e.id,onChange:()=>Q(i=>({...i,source:e.id}))}),i.jsx("span",{style:{marginRight:"0.75rem",fontSize:"1.25rem",color:"#90b3a7"},children:e.icon}),i.jsx(D,{children:e.label})]},e.id))}),i.jsx(v,{children:"other"===a.source&&i.jsx(w.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},style:{marginTop:"1rem"},children:i.jsx(L,{type:"text",placeholder:"Укажите, пожалуйста...",value:a.otherSource,onChange:e=>Q(i=>({...i,otherSource:e.target.value}))})})})]}),i.jsxs(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5,type:"spring",stiffness:100},children:[i.jsxs(F,{children:[i.jsx(B,{children:"3"}),i.jsx(I,{children:"Насколько вы довольны обслуживанием?"})]}),i.jsx(K,{children:[1,2,3,4,5].map(e=>i.jsxs(E,{$isSelected:a.serviceRating===String(e),$showStar:e>=4,whileHover:{scale:1.1},whileTap:{scale:.95},children:[i.jsx(P,{type:"radio",name:"serviceRating",value:e,checked:a.serviceRating===String(e),onChange:e=>Q(i=>({...i,serviceRating:e.target.value}))}),e,i.jsx(n,{})]},e))})]}),i.jsxs(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6,type:"spring",stiffness:100},children:[i.jsxs(F,{children:[i.jsx(B,{children:"4"}),i.jsx(I,{children:"Насколько вам понравился результат процедуры?"})]}),i.jsx(K,{children:[1,2,3,4,5].map(e=>i.jsxs(E,{$isSelected:a.resultRating===String(e),$showStar:e>=4,whileHover:{scale:1.1},whileTap:{scale:.95},children:[i.jsx(P,{type:"radio",name:"resultRating",value:e,checked:a.resultRating===String(e),onChange:e=>Q(i=>({...i,resultRating:e.target.value}))}),e,i.jsx(n,{})]},e))})]}),i.jsxs(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7,type:"spring",stiffness:100},children:[i.jsxs(F,{children:[i.jsx(B,{children:"5"}),i.jsx(I,{children:"Ваш мастер (если помните имя):"})]}),i.jsx(L,{type:"text",placeholder:"Имя мастера...",value:a.masterName,onChange:e=>Q(i=>({...i,masterName:e.target.value})),whileFocus:{scale:1.01}})]}),i.jsxs(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,type:"spring",stiffness:100},children:[i.jsxs(F,{children:[i.jsx(B,{children:"6"}),i.jsx(I,{children:"Что можно улучшить?"})]}),i.jsx(q,{placeholder:"Ваши предложения и пожелания...",value:a.improvements,onChange:e=>Q(i=>({...i,improvements:e.target.value})),whileFocus:{scale:1.01}})]}),i.jsxs(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.9,type:"spring",stiffness:100},children:[i.jsxs(F,{children:[i.jsx(B,{children:"7"}),i.jsx(I,{children:"Хотите получать персональные предложения и акции?"})]}),i.jsxs(O,{children:[i.jsxs(H,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[i.jsx(P,{type:"radio",name:"wantsOffers",checked:!0===a.wantsOffers,onChange:()=>Q(e=>({...e,wantsOffers:!0}))}),i.jsx("span",{style:{marginRight:"0.75rem",fontSize:"1.25rem",color:"#90b3a7"},children:i.jsx(s,{})}),i.jsx(D,{children:"Да, хочу получать"})]}),i.jsxs(H,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[i.jsx(P,{type:"radio",name:"wantsOffers",checked:!1===a.wantsOffers,onChange:()=>Q(e=>({...e,wantsOffers:!1,phoneNumber:""}))}),i.jsx("span",{style:{marginRight:"0.75rem",fontSize:"1.25rem",color:"#90b3a7"},children:i.jsx(o,{})}),i.jsx(D,{children:"Нет, спасибо"})]})]}),i.jsx(v,{children:!0===a.wantsOffers&&i.jsx(Y,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:i.jsx(L,{type:"tel",placeholder:"Ваш номер телефона...",value:a.phoneNumber,onChange:e=>Q(i=>({...i,phoneNumber:e.target.value})),whileFocus:{scale:1.01}})})})]}),ie&&i.jsx(w.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},style:{background:"#fee",border:"1px solid #fcc",borderRadius:"8px",padding:"1rem",color:"#c33",textAlign:"center",marginTop:"2rem"},children:ie}),i.jsx(X,{type:"submit",disabled:W,whileHover:{scale:W?1:1.02},whileTap:{scale:W?1:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1},children:W?"Отправка...":"Отправить анкету"})]})})]})]})};export{SurveyPage as default};
