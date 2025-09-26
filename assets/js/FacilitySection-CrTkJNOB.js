import{a as e,r as i,b as t,j as r,O as a,ag as s,f as o,aj as n}from"./vendor-react-DZA4WcA9.js";import{d as l}from"./vendor-styles-DHpaP57L.js";import{m as p}from"./vendor-animations-WcfxAmq3.js";import{S as c,T as d,C as x,a as h,b as g,c as m,B as f}from"./SportsPage-i5mcP8DW.js";import"./vendor-other-CZupzcPt.js";import"./main-EopnawY0.js";import"./vendor-i18n-C4kh69yx.js";import"./PageScrollReset-Dc_QTYR5.js";const b=l(p.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 6rem 0;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  &:nth-child(even) {
    grid-template-columns: 1fr 1fr;
    
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
    
    .facility-content {
      order: 2;
      
      @media (max-width: 992px) {
        order: 1;
      }
    }
    
    .facility-gallery {
      order: 1;
      
      @media (max-width: 992px) {
        order: 2;
      }
    }
  }
  
  &:first-child {
    margin-top: 0;
  }
`,y=l.h3`
  font-family: ${e=>e.theme.fonts.heading};
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-bottom: 0.8rem;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60px;
    height: 3px;
    background-color: ${e=>e.theme.colors.primary};
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    text-align: center;
    display: block;
    width: 100%;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,v=l.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 2rem;
  
  p {
    margin-bottom: 1rem;
  }
  
  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 768px) {
    text-align: center;
  }
`,w=l.div`
  position: relative;
  direction: ltr;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 230px);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, 180px);
  }
`,j=l(p.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  transition: all 0.4s ease;
  box-shadow: ${e=>e.theme.shadows.md};
  position: relative;
  filter: none;
  opacity: 1;
  
  &:hover {
    transform: scale(1.03);
    box-shadow: ${e=>e.theme.shadows.xl};
  }
  
  &:first-child {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
`,u=l(p.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${e=>e.theme.colors.primary};
    margin-right: 0.75rem;
    flex-shrink: 0;
  }
  
  span {
    font-size: 1rem;
    color: ${e=>e.theme.colors.text.secondary};
  }
`,k=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,$=l.div`
  display: flex;
  align-items: center;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${e=>e.theme.colors.primary};
    margin-right: 0.75rem;
  }
  
  span {
    font-size: 0.95rem;
    color: ${e=>e.theme.colors.text.secondary};
  }
`,z=l.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;l(p.div)`
  width: 100%;
  margin: 2rem 0 3rem;
  overflow: visible;
  background-color: transparent;
  position: relative;
`,l.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, #6366f1, transparent);
  }
  
  .title-wrapper {
    h3 {
      font-family: ${e=>e.theme.fonts.heading};
      font-size: 1.5rem;
      font-weight: 600;
      color: #222;
      margin: 0 0 0.5rem 0;
      letter-spacing: 0.5px;
      position: relative;
    }
    
    p {
      color: #666;
      font-size: 0.85rem;
      margin: 0;
      line-height: 1.5;
      max-width: 500px;
    }
  }
`,l.div`
  font-size: 0.85rem;
  color: #4b5563;
  font-weight: 600;
  margin-right: 0.75rem;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
`,l.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 0.75rem;
  position: relative;
  padding: 1rem 1.25rem;
  background: rgba(249, 250, 251, 0.7);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.03);
  border: 1px solid rgba(255,255,255,0.7);
`,l.button`
  background: ${e=>e.active?"linear-gradient(135deg, #6366f1, #8b5cf6)":"transparent"};
  color: ${e=>e.active?"#fff":"#888"};
  border: ${e=>e.active?"none":"1px solid #e5e7eb"};
  padding: ${e=>e.active?"6px 14px":"5px 12px"};
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  box-shadow: ${e=>e.active?"0 4px 10px rgba(99, 102, 241, 0.25)":"none"};
  transform-origin: center;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-1px);
    border-color: ${e=>e.active?"none":"#cbd5e1"};
    color: ${e=>e.active?"#fff":"#333"};
    box-shadow: ${e=>e.active?"0 6px 15px rgba(99, 102, 241, 0.3)":"0 2px 6px rgba(0,0,0,0.04)"};    
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: ${e=>e.active?"0 2px 5px rgba(99, 102, 241, 0.2)":"none"};
  }
  
  &:focus {
    outline: none;
  }
`,l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  width: 100%;
  perspective: 1000px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
`;const I=l(p.div)`
  background-color: white;
  background-image: ${e=>e.isPrimary?"linear-gradient(135deg, rgba(249, 250, 251, 0.9), rgba(243, 244, 246, 0.4))":"none"};
  border-radius: 16px;
  padding: 24px;
  position: relative;
  cursor: pointer;
  border: 1px solid rgba(229, 231, 235, 0.7);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.01), 0 1px 3px rgba(0, 0, 0, 0.02);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(5px);
  transform-style: preserve-3d;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 0;
    background: linear-gradient(to bottom, #6366f1, #8b5cf6);
    transition: height 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0.85;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-8px) rotateX(2deg);
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.07), 0 10px 10px rgba(0, 0, 0, 0.04);
    border-color: rgba(203, 213, 225, 0.6);
    
    &::before {
      height: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-2px);
    transition: all 0.1s;
  }
`;l.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  
  svg {
    width: 14px;
    height: 14px;
    margin-right: 5px;
    color: #999;
  }
  
  span {
    font-size: 0.8rem;
    color: #666;
    font-weight: 500;
  }
`,l.h4`
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #111827;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #6366f1, transparent);
    transition: width 0.3s ease;
  }
  
  ${I}:hover & {
    &::after {
      width: 100%;
    }
  }
`,l.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  
  svg {
    width: 14px;
    height: 14px;
    margin-right: 5px;
    color: #999;
  }
  
  span {
    font-size: 0.75rem;
    color: #777;
  }
`,l.span`
  display: inline-block;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  padding: 4px 10px;
  border-radius: 20px;
  background-color: ${e=>"personal"===e.type?"rgba(37, 99, 235, 0.1)":"event"===e.type?"rgba(219, 39, 119, 0.1)":"group"===e.type?"rgba(75, 85, 99, 0.1)":"green"===e.color?"rgba(22, 163, 74, 0.1)":"yellow"===e.color?"rgba(245, 158, 11, 0.1)":"red"===e.color?"rgba(220, 38, 38, 0.1)":"rgba(75, 85, 99, 0.1)"};
  color: ${e=>"personal"===e.type?"#2563eb":"event"===e.type?"#db2777":"green"===e.color?"#16a34a":"yellow"===e.color?"#f59e0b":"red"===e.color?"#dc2626":"#4b5563"};
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
  transform: translateY(0);
  
  ${I}:hover & {
    transform: translateY(-1px);
    box-shadow: 0 2px 5px ${e=>"personal"===e.type?"rgba(37, 99, 235, 0.15)":"event"===e.type?"rgba(219, 39, 119, 0.15)":"green"===e.color?"rgba(22, 163, 74, 0.15)":"yellow"===e.color?"rgba(245, 158, 11, 0.15)":"red"===e.color?"rgba(220, 38, 38, 0.15)":"rgba(75, 85, 99, 0.15)"};
  }
`,l.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  gap: 6px;
  transition: all 0.3s ease;
`,l.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
`,l(p.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.55rem 1.2rem;
  font-family: ${e=>e.theme.fonts.body};
  font-weight: 500;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: none;
  }
`,l.div`
  text-align: center;
  padding: 1rem 0;
  font-style: italic;
  color: #6b7280;
  font-size: 0.8rem;
  margin-top: 1.5rem;
  background: rgba(249, 250, 251, 0.7);
  border-radius: 8px;
  border: 1px dashed #e5e7eb;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, rgba(99, 102, 241, 0.3), transparent);
  }
`,l.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.4s ease;
    z-index: -1;
  }
  
  ${I}:hover & {
    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }
`,l.div`
  font-size: 0.8rem;
  color: #6366f1;
  font-weight: 600;
  background: rgba(99, 102, 241, 0.1);
  padding: 3px 8px;
  border-radius: 20px;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  ${I}:hover & {
    background: rgba(99, 102, 241, 0.15);
    box-shadow: 0 2px 5px rgba(99, 102, 241, 0.1);
  }
`,l.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  transform: translateX(0);
  
  svg {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    color: #6b7280;
    transition: all 0.3s ease;
  }
  
  span {
    font-size: 0.8rem;
    color: #4b5563;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  ${I}:hover & {
    transform: translateX(3px);
    
    svg {
      color: #6366f1;
      transform: scale(1.1);
    }
    
    span {
      color: #374151;
    }
  }
`,l.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  transform: translateX(0);
  
  svg {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    color: #6b7280;
    transition: all 0.3s ease;
  }
  
  span {
    font-size: 0.8rem;
    color: #4b5563;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  ${I}:hover & {
    transform: translateX(3px);
    transition-delay: 0.05s;
    
    svg {
      color: #6366f1;
      transform: scale(1.1);
    }
    
    span {
      color: #374151;
    }
  }
`,l.div`
  display: ${e=>e.active?"block":"none"};
  animation: ${e=>e.active?"fadeIn 0.5s ease":"none"};
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,l.div`
  padding: 3rem 2rem;
  text-align: center;
  color: #6b7280;
  font-size: 0.95rem;
  background: linear-gradient(135deg, #f9fafb, #f3f4f6);
  border-radius: 16px;
  width: 100%;
  grid-column: 1 / -1;
  border: 1px dashed #e5e7eb;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, #6366f1, #8b5cf6);
    opacity: 0.3;
  }
`;const V=["/images/sports/gym/gym-1.jpg","/images/sports/gym/gym-2.jpg","/images/sports/gym/gym-3.jpg"],H=["/images/sports/fight-club/fight-1.jpg","/images/sports/fight-club/fight-2.jpg","/images/sports/fight-club/fight-3.jpg"],T=({src:e,alt:t,...a})=>{const[s,o]=i.useState(!1);return r.jsx(j,{src:s?"/placeholder-image.jpg":e,alt:t,loading:"lazy",onError:()=>o(!0),...a})},Y=()=>{const{t:l}=e(),[j,I]=i.useState("all");t();const Y={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},_={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}};return r.jsxs(c,{children:[r.jsx(d,{animate:{scale:[1,1.1,1],opacity:[.7,.9,.7]},transition:{duration:8,repeat:1/0,repeatType:"reverse"}}),r.jsxs(x,{children:[r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx(h,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.5},children:l("sports.facilities.tag","Наши объекты")}),r.jsx(g,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},dangerouslySetInnerHTML:{__html:l("sports.facilities.title","Современные <span>спортивные</span> пространства")}}),r.jsx(m,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7,delay:.2},children:l("sports.facilities.subtitle","KAIF предлагает широкий выбор премиальных спортивных пространств с передовым оборудованием и профессиональными тренерами, которые помогут вам достичь ваших фитнес-целей.")})]}),r.jsxs(b,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:[r.jsxs("div",{className:"facility-content",children:[r.jsx(y,{children:l("sports.facilities.gym.title","Тренажерный зал")}),r.jsxs(k,{children:[r.jsxs($,{children:[r.jsx(a,{}),r.jsx("span",{children:l("sports.facilities.gym.hours","07:00 - 22:00")})]}),r.jsxs($,{children:[r.jsx(s,{}),r.jsx("span",{children:l("sports.facilities.gym.capacity","До 40 человек")})]})]}),r.jsxs(v,{children:[r.jsx("p",{children:l("sports.facilities.gym.description1","Наш тренажерный зал оснащен современным оборудованием премиум-класса от ведущих производителей. Здесь вы найдете все необходимое для эффективных тренировок - от свободных весов до кардиотренажеров последнего поколения.")}),r.jsx("p",{children:l("sports.facilities.gym.description2","Просторное помещение с панорамными окнами создает идеальную атмосферу для тренировок, а профессиональные тренеры всегда готовы помочь составить индивидуальную программу.")})]}),r.jsxs(p.div,{variants:Y,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[r.jsxs(u,{variants:_,children:[r.jsx(o,{}),r.jsx("span",{children:l("sports.facilities.gym.feature1","Премиальное оборудование Technogym и Life Fitness")})]}),r.jsxs(u,{variants:_,children:[r.jsx(o,{}),r.jsx("span",{children:l("sports.facilities.gym.feature2","Зона функционального тренинга")})]}),r.jsxs(u,{variants:_,children:[r.jsx(o,{}),r.jsx("span",{children:l("sports.facilities.gym.feature3","Индивидуальные тренировки с сертифицированными тренерами")})]})]}),r.jsx(z,{children:r.jsx(p.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},style:{marginTop:"2rem"},children:r.jsxs(f,{as:"a",href:"https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20на%20тренировку%20в%20тренажерном%20зале%20KAIF",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:[l("sports.facilities.book_button","Забронировать тренировку"),r.jsx(n,{style:{width:"18px",height:"18px"}})]})})})]}),r.jsx("div",{className:"facility-gallery",children:r.jsxs(w,{children:[r.jsx(T,{src:V[0],alt:"Тренажерный зал",whileHover:{scale:1.03},transition:{duration:.4}}),r.jsx(T,{src:V[1],alt:"Тренажерный зал",whileHover:{scale:1.03},transition:{duration:.4}}),r.jsx(T,{src:V[2],alt:"Тренажерный зал",whileHover:{scale:1.03},transition:{duration:.4}})]})})]}),r.jsxs(b,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:[r.jsxs("div",{className:"facility-content",children:[r.jsx(y,{children:l("sports.facilities.fight.title","Бойцовский клуб")}),r.jsxs(k,{children:[r.jsxs($,{children:[r.jsx(a,{}),r.jsx("span",{children:l("sports.facilities.fight.hours","07:00 - 22:00")})]}),r.jsxs($,{children:[r.jsx(s,{}),r.jsx("span",{children:l("sports.facilities.fight.capacity","До 25 человек")})]})]}),r.jsxs(v,{children:[r.jsx("p",{children:l("sports.facilities.fight.description1","Бойцовский клуб KAIF — это современное пространство для тренировок по различным видам единоборств. Профессиональный ринг, груши, мешки, и специальное покрытие создают идеальные условия как для новичков, так и для опытных бойцов.")}),r.jsx("p",{children:l("sports.facilities.fight.description2","Наши тренеры — опытные бойцы и чемпионы, которые помогут освоить технику и достичь высоких результатов в выбранном боевом искусстве.")})]}),r.jsxs(p.div,{variants:Y,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[r.jsxs(u,{variants:_,children:[r.jsx(o,{}),r.jsx("span",{children:l("sports.facilities.fight.feature1","Профессиональный боксерский ринг")})]}),r.jsxs(u,{variants:_,children:[r.jsx(o,{}),r.jsx("span",{children:l("sports.facilities.fight.feature2","Тренировки по боксу, тайскому боксу, ММА")})]}),r.jsxs(u,{variants:_,children:[r.jsx(o,{}),r.jsx("span",{children:l("sports.facilities.fight.feature3","Тренеры с международными сертификатами")})]})]}),r.jsx(z,{children:r.jsx(p.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},style:{marginTop:"2rem"},children:r.jsxs(f,{as:"a",href:"https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20на%20тренировку%20в%20бойцовском%20клубе%20KAIF",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:[l("sports.facilities.book_button","Забронировать тренировку"),r.jsx(n,{style:{width:"18px",height:"18px"}})]})})})]}),r.jsx("div",{className:"facility-gallery",children:r.jsxs(w,{children:[r.jsx(T,{src:H[0],alt:"Бойцовский клуб",whileHover:{scale:1.03},transition:{duration:.4}}),r.jsx(T,{src:H[1],alt:"Бойцовский клуб",whileHover:{scale:1.03},transition:{duration:.4}}),r.jsx(T,{src:H[2],alt:"Бойцовский клуб",whileHover:{scale:1.03},transition:{duration:.4}})]})})]}),r.jsxs(b,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:[r.jsxs("div",{className:"facility-content",children:[r.jsx(y,{children:l("sports.facilities.dance.title","Танцевальная студия")}),r.jsxs(k,{children:[r.jsxs($,{children:[r.jsx(a,{}),r.jsx("span",{children:l("sports.facilities.dance.hours","07:00 - 22:00")})]}),r.jsxs($,{children:[r.jsx(s,{}),r.jsx("span",{children:l("sports.facilities.dance.capacity","До 30 человек")})]})]}),r.jsxs(v,{children:[r.jsx("p",{children:l("sports.facilities.dance.description1","Просторная танцевальная студия с профессиональным покрытием, зеркальными стенами и передовой аудиосистемой создает идеальные условия для различных танцевальных направлений и групповых занятий.")}),r.jsx("p",{children:l("sports.facilities.dance.description2","Здесь проходят занятия по современным и классическим танцевальным направлениям, а также групповые фитнес-тренировки под руководством опытных инструкторов.")})]}),r.jsxs(p.div,{variants:Y,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[r.jsxs(u,{variants:_,children:[r.jsx(o,{}),r.jsx("span",{children:l("sports.facilities.dance.feature1","Профессиональное танцевальное покрытие")})]}),r.jsxs(u,{variants:_,children:[r.jsx(o,{}),r.jsx("span",{children:l("sports.facilities.dance.feature2","Широкий выбор танцевальных направлений")})]}),r.jsxs(u,{variants:_,children:[r.jsx(o,{}),r.jsx("span",{children:l("sports.facilities.dance.feature3","Групповые и индивидуальные занятия")})]}),r.jsxs(u,{variants:_,children:[r.jsx(o,{}),r.jsx("span",{children:l("sports.facilities.dance.feature4","Гибкое расписание групповых и индивидуальных занятий")})]})]}),r.jsx(z,{children:r.jsx(p.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},style:{marginTop:"2rem"},children:r.jsxs(f,{as:"a",href:"https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20на%20танцевальные%20занятия%20в%20KAIF",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:[l("sports.facilities.book_button","Забронировать тренировку"),r.jsx(n,{style:{width:"18px",height:"18px"}})]})})})]}),r.jsx("div",{className:"facility-gallery",children:r.jsx(w,{children:r.jsx(T,{src:"/images/hero/hero-fitness.jpg",alt:"Танцевальная студия",whileHover:{scale:1.03},transition:{duration:.4},style:{gridColumn:"1 / -1",gridRow:"1 / -1"}})})})]})]})]})};export{Y as default};
