import{a as e,r as i,j as t,M as a,am as r,as as s,at as o,ao as n}from"./vendor-react-Dj8BKr9E.js";import{d as l}from"./vendor-styles-CqEOfFkH.js";import{m as d,A as p}from"./vendor-animations-DXmTBijG.js";import{S as c,C as g,a as m,b as f,c as h}from"./SportsPage-DkJTlYRK.js";import"./vendor-other-CZupzcPt.js";import"./main-gWwDaDWJ.js";import"./vendor-i18n-C4kh69yx.js";import"./PageScrollReset-BOx4uGe6.js";const x=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,u=l(d.div)`
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
`,y=l.div`
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  border: none;
  outline: none;

  @media (max-width: 768px) {
    height: 280px;
  }
`,b=l(d.img)`
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
`;l.div`
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
`;const w=l(d.div)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: #FFE600;
  backdrop-filter: blur(10px);
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
`,j=l.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
  border: none;
  outline: none;
`,v=l(d.button)`
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
`,k=l.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,F=l.h3`
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
`,K=l.p`
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,z=l.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,T=l.div`
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
`,I=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
`,_=l(d.div)`
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
`,A=l(d.a)`
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
  transition: all 0.3s ease;
  box-shadow: 0 6px 24px rgba(255, 230, 0, 0.4);
  position: relative;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #000000;
    transition: width 0.3s ease;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    box-shadow: 0 8px 32px rgba(255, 230, 0, 0.6);
    transform: translateY(-2px);

    & > * {
      color: #FFE600;
    }
  }

  &:hover::before {
    width: 100%;
  }
`,M=[{id:"gym",images:["/images/sports/gym/gym-1.jpg","/images/sports/gym/gym-2.jpg","/images/sports/gym/gym-3.jpg"],tagKey:"sports.facilities.gym.tag",defaultTag:"ТРЕНАЖЕРНЫЙ ЗАЛ",titleKey:"sports.facilities.gym.title",defaultTitle:"Современный тренажерный зал",descriptionKey:"sports.facilities.gym.short_description",defaultDescription:"Премиальное оборудование от Technogym и Life Fitness для эффективных тренировок",hours:"07:00 - 22:00",capacity:"40 человек",features:[{key:"sports.facilities.gym.feature1",default:"Зона кардио-тренажеров"},{key:"sports.facilities.gym.feature2",default:"Зона свободных весов"},{key:"sports.facilities.gym.feature3",default:"Функциональный тренинг"}],whatsappMessage:"Здравствуйте!%20Хочу%20записаться%20на%20тренировку%20в%20тренажерном%20зале%20KAIF",gradient:"linear-gradient(135deg, rgba(210, 155, 132, 0.9) 0%, rgba(144, 179, 167, 0.9) 100%)"},{id:"fight",images:["/images/sports/fight-club/fight-1.jpg","/images/sports/fight-club/fight-2.jpg","/images/sports/fight-club/fight-3.jpg"],tagKey:"sports.facilities.fight.tag",defaultTag:"БОЕВЫЕ ИСКУССТВА",titleKey:"sports.facilities.fight.title",defaultTitle:"Бойцовский клуб",descriptionKey:"sports.facilities.fight.short_description",defaultDescription:"Профессиональный ринг и оборудование для бокса, муай-тай и ММА",hours:"07:00 - 22:00",capacity:"25 человек",features:[{key:"sports.facilities.fight.feature1",default:"Профессиональный ринг"},{key:"sports.facilities.fight.feature2",default:"Боксерские мешки и груши"},{key:"sports.facilities.fight.feature3",default:"Тренеры-чемпионы"}],whatsappMessage:"Здравствуйте!%20Хочу%20записаться%20на%20тренировку%20в%20бойцовском%20клубе%20KAIF",gradient:"linear-gradient(135deg, rgba(200, 168, 233, 0.9) 0%, rgba(144, 179, 167, 0.9) 100%)"},{id:"dance",images:["/images/hero/hero-fitness.jpg"],tagKey:"sports.facilities.dance.tag",defaultTag:"ТАНЦЫ И ФИТНЕС",titleKey:"sports.facilities.dance.title",defaultTitle:"Танцевальная студия",descriptionKey:"sports.facilities.dance.short_description",defaultDescription:"Просторная студия для танцев, йоги и групповых фитнес-программ",hours:"07:00 - 22:00",capacity:"30 человек",features:[{key:"sports.facilities.dance.feature1",default:"Зеркальные стены"},{key:"sports.facilities.dance.feature2",default:"Профессиональное покрытие"},{key:"sports.facilities.dance.feature3",default:"Звуковая система"}],whatsappMessage:"Здравствуйте!%20Хочу%20записаться%20на%20танцевальные%20занятия%20в%20KAIF",gradient:"linear-gradient(135deg, rgba(144, 179, 167, 0.9) 0%, rgba(210, 155, 132, 0.9) 100%)"}],S=()=>{const{t:l}=e(),[d,S]=i.useState(M.reduce((e,i)=>({...e,[i.id]:0}),{}));return t.jsx(c,{id:"facilities",children:t.jsxs(g,{children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"4rem"},children:[t.jsx(m,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.5},children:l("sports.facilities.tag","Наши объекты")}),t.jsx(f,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},dangerouslySetInnerHTML:{__html:l("sports.facilities.title","Современные <span>спортивные зоны</span>")}}),t.jsx(h,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:l("sports.facilities.subtitle","Выберите зону, которая подходит именно вам")})]}),t.jsx(x,{children:M.map((e,i)=>t.jsxs(u,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.6,delay:.2*i},whileHover:{y:-10},children:[t.jsxs(y,{children:[t.jsx(p,{mode:"wait",children:t.jsx(b,{src:e.images[d[e.id]],alt:e.defaultTitle,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},d[e.id])}),e.images.length>1&&t.jsx(j,{children:e.images.map((i,a)=>t.jsx(v,{active:d[e.id]===a,onClick:()=>{return i=e.id,t=a,void S(e=>({...e,[i]:t}));var i,t},whileHover:{scale:1.3},whileTap:{scale:.9}},a))}),t.jsx(w,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.3},children:l(e.tagKey,e.defaultTag)})]}),t.jsxs(k,{children:[t.jsx(F,{children:l(e.titleKey,e.defaultTitle)}),t.jsx(K,{children:l(e.descriptionKey,e.defaultDescription)}),t.jsxs(z,{children:[t.jsxs(T,{children:[t.jsx(a,{}),t.jsx("span",{children:e.hours})]}),t.jsxs(T,{children:[t.jsx(r,{}),t.jsx("span",{children:l("sports.facilities.capacity","До {{count}} человек",{count:e.capacity.split(" ")[0]})})]})]}),t.jsx(I,{children:e.features.map((e,i)=>t.jsxs(_,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.4,delay:.1*i},children:[t.jsx(s,{}),t.jsx("span",{children:l(e.key,e.default)})]},i))}),t.jsxs(A,{as:"a",href:`https://wa.me/66624805877?text=${e.whatsappMessage}`,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(210, 155, 132, 0.3)"},whileTap:{scale:.95},children:[t.jsx(o,{}),l("sports.facilities.book_button","Забронировать"),t.jsx(n,{})]})]})]},e.id))})]})})};export{S as default};
