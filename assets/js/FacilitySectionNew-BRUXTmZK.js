import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as t}from"./styled-components-fuCKgGld.js";import{m as a,A as r}from"./framer-motion-Ep29qSuC.js";import{S as s,C as o,a as n,b as d,c as l}from"./SportsPage-U5wcbDbu.js";import{u as p}from"./i18n-core-DrMVsQFB.js";import{y as c,M as g,N as m,U as f,V as h}from"./heroicons-DSEs4UIN.js";import"./vendor-misc-D8JVgYt7.js";import"./main-rSdxewSL.js";import"./react-dom-client-BkLB9BFi.js";import"./react-dom-Bb3pWfRT.js";import"./vendor-scheduler-9xQDShOA.js";import"./i18n-detector-l8ePocMX.js";import"./react-helmet-BCF-s7y-.js";import"./PageHead-ByG18s83.js";import"./PageScrollReset-BDYyiQ41.js";const x=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,u=t(a.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;

  &:hover {
    box-shadow: 0 0 0 2px #FFE600;
    transform: translateY(-10px);
  }
`,y=t.div`
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  border: none;
  outline: none;

  @media (max-width: 768px) {
    height: 280px;
  }
`,b=t(a.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  display: block;
  border: none;
  outline: none;

  ${u}:hover & {
    transform: scale(1.1);
  }
`;t.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 95%, rgba(0, 0, 0, 0.6) 100%);
  opacity: 1;
  transition: opacity 0.4s ease;
  pointer-events: none;
  border: none;
`;const w=t(a.div)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: #FFE600;
  padding: 0.65rem 1.3rem;
  border-radius: 0;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #000000;
  box-shadow: 0 6px 20px rgba(255, 230, 0, 0.5);
  border: none;
  z-index: 2;
  text-transform: uppercase;
`,j=t.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
  border: none;
  outline: none;
`,v=t(a.button)`
  width: ${e=>e.active?"24px":"8px"};
  height: 8px;
  border-radius: 4px;
  border: none;
  background: ${e=>e.active?"rgba(255, 255, 255, 0.95)":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`,k=t.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,F=t.h3`
  font-family: ${e=>e.theme.fonts.heading};
  font-size: 2rem;
  font-weight: 900;
  color: #FFFFFF;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`,z=t.p`
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,K=t.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,T=t.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-weight: 600;

  svg {
    width: 18px;
    height: 18px;
    color: #D29B84;
  }
`,I=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
`,_=t(a.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);

  svg {
    width: 20px;
    height: 20px;
    color: #C8A8E9;
    flex-shrink: 0;
  }
`,A=t(a.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1.3rem 1.5rem;
  background: #FFE600;
  color: #000000;
  border: none;
  border-radius: 0;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: box-shadow 0.3s ease, color 0.3s ease;
  box-shadow: 0 6px 24px rgba(255, 230, 0, 0.4);
  position: relative;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #000000;
    transition: width 0.3s ease;
    z-index: -1;
  }

  svg {
    width: 18px;
    height: 18px;
    position: relative;
    z-index: 2;
  }

  &:hover {
    box-shadow: 0 8px 32px rgba(255, 230, 0, 0.6);
    color: #FFE600;
  }

  &:hover::before {
    width: 100%;
  }
`,M=[{id:"gym",images:["/images/sports/gym/gym-1.jpg","/images/sports/gym/gym-2.jpg","/images/sports/gym/gym-3.jpg"],tagKey:"sports.facilities.gym.tag",defaultTag:"ТРЕНАЖЕРНЫЙ ЗАЛ",titleKey:"sports.facilities.gym.title",defaultTitle:"Современный тренажерный зал",descriptionKey:"sports.facilities.gym.short_description",defaultDescription:"Премиальное оборудование от Technogym и Life Fitness для эффективных тренировок",hours:"07:00 - 22:00",capacity:"40 человек",features:[{key:"sports.facilities.gym.feature1",default:"Зона кардио-тренажеров"},{key:"sports.facilities.gym.feature2",default:"Зона свободных весов"},{key:"sports.facilities.gym.feature3",default:"Функциональный тренинг"}],whatsappMessage:"Здравствуйте!%20Хочу%20записаться%20на%20тренировку%20в%20тренажерном%20зале%20KAIF",gradient:"linear-gradient(135deg, rgba(210, 155, 132, 0.9) 0%, rgba(144, 179, 167, 0.9) 100%)"},{id:"fight",images:["/images/sports/fight-club/fight-1.jpg","/images/sports/fight-club/fight-2.jpg","/images/sports/fight-club/fight-3.jpg"],tagKey:"sports.facilities.fight.tag",defaultTag:"БОЕВЫЕ ИСКУССТВА",titleKey:"sports.facilities.fight.title",defaultTitle:"Бойцовский клуб",descriptionKey:"sports.facilities.fight.short_description",defaultDescription:"Профессиональный ринг и оборудование для бокса, муай-тай и ММА",hours:"07:00 - 22:00",capacity:"25 человек",features:[{key:"sports.facilities.fight.feature1",default:"Профессиональный ринг"},{key:"sports.facilities.fight.feature2",default:"Боксерские мешки и груши"},{key:"sports.facilities.fight.feature3",default:"Тренеры-чемпионы"}],whatsappMessage:"Здравствуйте!%20Хочу%20записаться%20на%20тренировку%20в%20бойцовском%20клубе%20KAIF",gradient:"linear-gradient(135deg, rgba(200, 168, 233, 0.9) 0%, rgba(144, 179, 167, 0.9) 100%)"},{id:"dance",images:["/images/hero/hero-fitness.jpg"],tagKey:"sports.facilities.dance.tag",defaultTag:"ТАНЦЫ И ФИТНЕС",titleKey:"sports.facilities.dance.title",defaultTitle:"Танцевальная студия",descriptionKey:"sports.facilities.dance.short_description",defaultDescription:"Просторная студия для танцев, йоги и групповых фитнес-программ",hours:"07:00 - 22:00",capacity:"30 человек",features:[{key:"sports.facilities.dance.feature1",default:"Зеркальные стены"},{key:"sports.facilities.dance.feature2",default:"Профессиональное покрытие"},{key:"sports.facilities.dance.feature3",default:"Звуковая система"}],whatsappMessage:"Здравствуйте!%20Хочу%20записаться%20на%20танцевальные%20занятия%20в%20KAIF",gradient:"linear-gradient(135deg, rgba(144, 179, 167, 0.9) 0%, rgba(210, 155, 132, 0.9) 100%)"}],FacilitySectionNew=()=>{const{t:t}=p(),[a,S]=e.useState(M.reduce((e,i)=>({...e,[i.id]:0}),{}));return i.jsx(s,{id:"facilities",children:i.jsxs(o,{children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"4rem"},children:[i.jsx(n,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.5},children:t("sports.facilities.tag","Наши объекты")}),i.jsx(d,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},dangerouslySetInnerHTML:{__html:t("sports.facilities.title","Современные <span>спортивные зоны</span>")}}),i.jsx(l,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:t("sports.facilities.subtitle","Выберите зону, которая подходит именно вам")})]}),i.jsx(x,{children:M.map((e,s)=>i.jsxs(u,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.6,delay:.2*s},whileHover:{y:-10},children:[i.jsxs(y,{children:[i.jsx(r,{mode:"wait",children:i.jsx(b,{src:e.images[a[e.id]],alt:e.defaultTitle,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},a[e.id])}),e.images.length>1&&i.jsx(j,{children:e.images.map((t,r)=>i.jsx(v,{active:a[e.id]===r,onClick:()=>{return i=e.id,t=r,void S(e=>({...e,[i]:t}));var i,t},whileHover:{scale:1.3},whileTap:{scale:.9}},r))}),i.jsx(w,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.3},children:t(e.tagKey,e.defaultTag)})]}),i.jsxs(k,{children:[i.jsx(F,{children:t(e.titleKey,e.defaultTitle)}),i.jsx(z,{children:t(e.descriptionKey,e.defaultDescription)}),i.jsxs(K,{children:[i.jsxs(T,{children:[i.jsx(c,{}),i.jsx("span",{children:e.hours})]}),i.jsxs(T,{children:[i.jsx(g,{}),i.jsx("span",{children:t("sports.facilities.capacity","До {{count}} человек",{count:e.capacity.split(" ")[0]})})]})]}),i.jsx(I,{children:e.features.map((e,a)=>i.jsxs(_,{children:[i.jsx(m,{}),i.jsx("span",{children:t(e.key,e.default)})]},a))}),i.jsxs(A,{as:"button",onClick:()=>(e=>{const i=`https://wa.me/66624805877?text=${e.whatsappMessage}`;window.open(i,"_blank")})(e),whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(210, 155, 132, 0.3)"},whileTap:{scale:.95},children:[i.jsx(f,{}),t("sports.facilities.book_button","Забронировать"),i.jsx(h,{})]})]})]},e.id))})]})})};export{FacilitySectionNew as default};
