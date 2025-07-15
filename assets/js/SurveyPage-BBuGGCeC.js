import{r as e,j as i,Q as a,S as t,T as r,U as n,V as s,W as o,X as l,Y as d,Z as c,_ as p,$ as h,a0 as m,a1 as x,a2 as g,a3 as f,a4 as b}from"./vendor-react-CiYCyw2Q.js";import{d as y}from"./vendor-styles-BbzM21L4.js";import{P as u}from"./PageScrollReset-BkeoSiAQ.js";import{P as j}from"./main-4RzNJ5ZD.js";import{m as w,A as v}from"./vendor-animations-BNNrahxh.js";import"./vendor-other-CZupzcPt.js";import"./vendor-i18n-C4kh69yx.js";const k=y.div`
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
`,S=y.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`,z=y(w.div)`
  text-align: center;
  margin-bottom: 3rem;
`,$=y.div`
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
`,R=y.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
  
  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`,T=y.p`
  font-size: 1.125rem;
  color: #6B7280;
  font-family: 'Inter', sans-serif;
`,A=y(w.div)`
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
`,C=y.form`
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,N=y(w.div)`
  margin-bottom: 2.5rem;
  
  &:last-of-type {
    margin-bottom: 0;
  }
`,O=y.span`
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
`,F=y.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`,B=y.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1F2937;
  font-family: 'Inter', sans-serif;
  line-height: 1.4;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,I=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`,D=y(w.label)`
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
`,H=y.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,K=y.span`
  font-size: 1rem;
  color: #374151;
  font-family: 'Inter', sans-serif;
`,P=y.div`
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
`,Y=y(w.label)`
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
`,q=y(w.input)`
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
`,E=y(w.textarea)`
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
`,L=y(w.div)`
  margin-top: 1rem;
`,X=y(w.button)`
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
`,Z=y(w.div)`
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
`,_=y(w.div)`
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
`,Q=y.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`,V=y.p`
  font-size: 1.125rem;
  color: #6B7280;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
`,G=y(w.div)`
  position: absolute;
  width: ${e=>e.$size||"200px"};
  height: ${e=>e.$size||"200px"};
  background: linear-gradient(135deg, ${e=>e.$color1||"#90B3A7"} 0%, ${e=>e.$color2||"#A8C5B8"} 100%);
  border-radius: 50%;
  opacity: 0.1;
  z-index: -1;
  pointer-events: none;
`,J=()=>{const[y,J]=e.useState({services:[],source:"",otherSource:"",serviceRating:"",resultRating:"",masterName:"",improvements:"",wantsOffers:null,phoneNumber:""}),[U,W]=e.useState(!1),[M,ee]=e.useState(!1),[ie,ae]=e.useState(""),te=[{id:"manicure",label:"Маникюр / педикюр",icon:i.jsx(o,{})},{id:"facial",label:"Уход за лицом",icon:i.jsx(l,{})},{id:"brows",label:"Брови / ресницы",icon:i.jsx(d,{})},{id:"hair",label:"Стрижка / укладка",icon:i.jsx(c,{})},{id:"massage",label:"Массаж",icon:i.jsx(p,{})},{id:"other",label:"Другое",icon:i.jsx(h,{})}],re=[{id:"instagram",label:"Instagram",icon:i.jsx(m,{})},{id:"recommendation",label:"По рекомендации",icon:i.jsx(x,{})},{id:"resident",label:"Проживаю в KAIF",icon:i.jsx(g,{})},{id:"passing",label:"Проходил(а) мимо",icon:i.jsx(f,{})},{id:"other",label:"Другое",icon:i.jsx(b,{})}];return U?i.jsxs(k,{children:[i.jsx(u,{}),i.jsx(S,{children:i.jsxs(Z,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,type:"spring"},children:[i.jsx(_,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},children:i.jsx(a,{})}),i.jsxs(w.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[i.jsx(Q,{children:"Спасибо за ваш отзыв!"}),i.jsx(V,{children:"Мы очень ценим ваше мнение и постараемся стать еще лучше для вас. Ваши предложения помогают нам совершенствовать наш сервис."})]})]})})]}):i.jsxs(k,{children:[i.jsx(j,{titleKey:"page_titles.survey",description:"Анкета клиента бьюти-салона KAIF Beauty",keywords:"KAIF survey, feedback, customer satisfaction"}),i.jsx(u,{}),i.jsx(G,{$size:"300px",$color1:"#90B3A7",$color2:"#A8C5B8",style:{top:"-150px",right:"-100px"},animate:{rotate:360},transition:{duration:50,repeat:1/0,ease:"linear"}}),i.jsx(G,{$size:"250px",$color1:"#D4A574",$color2:"#E8B796",style:{bottom:"-100px",left:"-120px"},animate:{rotate:-360},transition:{duration:40,repeat:1/0,ease:"linear"}}),i.jsxs(S,{children:[i.jsxs(z,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:[i.jsx($,{children:i.jsx(t,{})}),i.jsx(R,{children:"Анкета клиента"}),i.jsx(T,{children:"KAIF Beauty — ваше мнение важно для нас"})]}),i.jsx(A,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:i.jsxs(C,{onSubmit:async e=>{e.preventDefault(),ee(!0),ae("");try{const e="https://script.google.com/macros/s/AKfycbxmqEA8Vojx-Lsr8wNTtuoFbCXTkqLS40RkXgZOtTq_kEiDze7SvkQTd6vBDZGiBKbL/exec",i=new FormData;i.append("services",JSON.stringify(y.services)),i.append("source",y.source),i.append("otherSource",y.otherSource),i.append("serviceRating",y.serviceRating),i.append("resultRating",y.resultRating),i.append("masterName",y.masterName),i.append("improvements",y.improvements),i.append("wantsOffers",y.wantsOffers),i.append("phoneNumber",y.phoneNumber),await fetch(e,{method:"POST",body:i,mode:"no-cors"}),W(!0)}catch(i){ae("Произошла ошибка при отправке анкеты. Попробуйте еще раз.")}finally{ee(!1)}},children:[i.jsxs(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3,type:"spring",stiffness:100},children:[i.jsxs(F,{children:[i.jsx(O,{children:"1"}),i.jsx(B,{children:"Какую услугу вы получили сегодня?"})]}),i.jsx(I,{children:te.map((e,a)=>i.jsxs(D,{whileHover:{scale:1.02},whileTap:{scale:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4+.05*a},children:[i.jsx(H,{type:"checkbox",checked:y.services.includes(e.id),onChange:()=>{return i=e.id,void J(e=>({...e,services:e.services.includes(i)?e.services.filter(e=>e!==i):[...e.services,i]}));var i}}),i.jsx("span",{style:{marginRight:"0.75rem",fontSize:"1.25rem",color:"#90b3a7"},children:e.icon}),i.jsx(K,{children:e.label})]},e.id))})]}),i.jsxs(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,type:"spring",stiffness:100},children:[i.jsxs(F,{children:[i.jsx(O,{children:"2"}),i.jsx(B,{children:"Как вы узнали о нашем салоне?"})]}),i.jsx(I,{children:re.map((e,a)=>i.jsxs(D,{whileHover:{scale:1.02},whileTap:{scale:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5+.05*a},children:[i.jsx(H,{type:"radio",name:"source",checked:y.source===e.id,onChange:()=>J(i=>({...i,source:e.id}))}),i.jsx("span",{style:{marginRight:"0.75rem",fontSize:"1.25rem",color:"#90b3a7"},children:e.icon}),i.jsx(K,{children:e.label})]},e.id))}),i.jsx(v,{children:"other"===y.source&&i.jsx(w.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},style:{marginTop:"1rem"},children:i.jsx(q,{type:"text",placeholder:"Укажите, пожалуйста...",value:y.otherSource,onChange:e=>J(i=>({...i,otherSource:e.target.value}))})})})]}),i.jsxs(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5,type:"spring",stiffness:100},children:[i.jsxs(F,{children:[i.jsx(O,{children:"3"}),i.jsx(B,{children:"Насколько вы довольны обслуживанием?"})]}),i.jsx(P,{children:[1,2,3,4,5].map(e=>i.jsxs(Y,{$isSelected:y.serviceRating===String(e),$showStar:e>=4,whileHover:{scale:1.1},whileTap:{scale:.95},children:[i.jsx(H,{type:"radio",name:"serviceRating",value:e,checked:y.serviceRating===String(e),onChange:e=>J(i=>({...i,serviceRating:e.target.value}))}),e,i.jsx(r,{})]},e))})]}),i.jsxs(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6,type:"spring",stiffness:100},children:[i.jsxs(F,{children:[i.jsx(O,{children:"4"}),i.jsx(B,{children:"Насколько вам понравился результат процедуры?"})]}),i.jsx(P,{children:[1,2,3,4,5].map(e=>i.jsxs(Y,{$isSelected:y.resultRating===String(e),$showStar:e>=4,whileHover:{scale:1.1},whileTap:{scale:.95},children:[i.jsx(H,{type:"radio",name:"resultRating",value:e,checked:y.resultRating===String(e),onChange:e=>J(i=>({...i,resultRating:e.target.value}))}),e,i.jsx(r,{})]},e))})]}),i.jsxs(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7,type:"spring",stiffness:100},children:[i.jsxs(F,{children:[i.jsx(O,{children:"5"}),i.jsx(B,{children:"Ваш мастер (если помните имя):"})]}),i.jsx(q,{type:"text",placeholder:"Имя мастера...",value:y.masterName,onChange:e=>J(i=>({...i,masterName:e.target.value})),whileFocus:{scale:1.01}})]}),i.jsxs(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,type:"spring",stiffness:100},children:[i.jsxs(F,{children:[i.jsx(O,{children:"6"}),i.jsx(B,{children:"Что можно улучшить?"})]}),i.jsx(E,{placeholder:"Ваши предложения и пожелания...",value:y.improvements,onChange:e=>J(i=>({...i,improvements:e.target.value})),whileFocus:{scale:1.01}})]}),i.jsxs(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.9,type:"spring",stiffness:100},children:[i.jsxs(F,{children:[i.jsx(O,{children:"7"}),i.jsx(B,{children:"Хотите получать персональные предложения и акции?"})]}),i.jsxs(I,{children:[i.jsxs(D,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[i.jsx(H,{type:"radio",name:"wantsOffers",checked:!0===y.wantsOffers,onChange:()=>J(e=>({...e,wantsOffers:!0}))}),i.jsx("span",{style:{marginRight:"0.75rem",fontSize:"1.25rem",color:"#90b3a7"},children:i.jsx(n,{})}),i.jsx(K,{children:"Да, хочу получать"})]}),i.jsxs(D,{whileHover:{scale:1.02},whileTap:{scale:.98},children:[i.jsx(H,{type:"radio",name:"wantsOffers",checked:!1===y.wantsOffers,onChange:()=>J(e=>({...e,wantsOffers:!1,phoneNumber:""}))}),i.jsx("span",{style:{marginRight:"0.75rem",fontSize:"1.25rem",color:"#90b3a7"},children:i.jsx(s,{})}),i.jsx(K,{children:"Нет, спасибо"})]})]}),i.jsx(v,{children:!0===y.wantsOffers&&i.jsx(L,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:i.jsx(q,{type:"tel",placeholder:"Ваш номер телефона...",value:y.phoneNumber,onChange:e=>J(i=>({...i,phoneNumber:e.target.value})),whileFocus:{scale:1.01}})})})]}),ie&&i.jsx(w.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},style:{background:"#fee",border:"1px solid #fcc",borderRadius:"8px",padding:"1rem",color:"#c33",textAlign:"center",marginTop:"2rem"},children:ie}),i.jsx(X,{type:"submit",disabled:M,whileHover:{scale:M?1:1.02},whileTap:{scale:M?1:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1},children:M?"Отправка...":"Отправить анкету"})]})})]})]})};export{J as default};
