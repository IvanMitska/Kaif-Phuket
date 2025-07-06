import{a as e,r,j as a}from"./vendor-react-jkclZeQG.js";import{d as t}from"./vendor-styles-Xp2kl99K.js";import{S as i,C as n,a as o}from"./SportsPage-CPhiCwPj.js";import"./vendor-other-CZupzcPt.js";import"./main-e0nOqNcK.js";import"./vendor-i18n-C4kh69yx.js";import"./vendor-animations-Bkvmj3bK.js";import"./PageScrollReset-CLBNH8P7.js";const d=t.div`
  width: 100%;
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--color-surface);
  border-radius: 16px;
  box-shadow: var(--shadow-wellness-lg);
  overflow-x: auto; /* Добавляем горизонтальную прокрутку */
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem;
    margin: 0.7rem 0;
    border-radius: 12px;
  }
`,s=t.h2`
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`,m=t.h3`
  font-family: var(--font-primary);
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`,l=t.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding: 0.5rem;
  background: var(--color-surface-secondary);
  border-radius: 16px;
  box-shadow: var(--shadow-wellness);
  
  @media (max-width: 768px) {
    gap: 0.25rem;
    padding: 0.5rem 0.25rem;
    margin-bottom: 1.5rem;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    gap: 0.2rem;
    padding: 0.4rem 0.2rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(5px);
  }
`,p=t.button`
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: none;
  background: var(--color-surface);
  color: var(--color-text-primary);
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-wellness);
  min-width: 80px;
  transition: var(--transition-natural);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-wellness-lg);
    background: var(--color-surface);
    color: var(--color-text-primary);
  }
  
  @media (max-width: 768px) {
    min-width: 70px;
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    min-width: 55px;
    flex: 1;
    padding: 0.4rem 0.3rem;
    font-size: 0.8rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    span {
      display: block;
      line-height: 1.2;
    }
  }
`,h=t.table`
  width: 100%;
  min-width: 900px; /* Минимальная ширина для корректного отображения */
  border-collapse: separate;
  border-spacing: 4px;
  
  @media (max-width: 768px) {
    border-spacing: 2px;
  }
  
  @media (max-width: 480px) {
    border-spacing: 3px 4px;
    margin-top: 0.5rem;
    min-width: auto; /* Отключаем минимальную ширину на мобильных */
  }
`,x=t.th`
  padding: 0.75rem 0.5rem;
  text-align: center;
  font-weight: 700;
  color: var(--color-text-primary);
  background: transparent;
  border-radius: 12px 12px 0 0;
  transition: var(--transition-natural);
  position: relative;
  
  .day-name {
    display: block;
    font-size: 0.9rem;
    font-family: var(--font-primary);
    font-weight: 700;
  }
  
  .day-number {
    display: none;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 0.3rem;
    border-radius: 8px 8px 0 0;
    display: ${e=>e.hiddenOnMobile?"none":"table-cell"};
    width: ${e=>e.isSelected?"100%":"0"};
    
    .day-name {
      font-size: 0.8rem;
    }
  }
`,c=t.td`
  padding: 0.5rem;
  text-align: right;
  font-weight: 700;
  font-family: var(--font-primary);
  color: var(--color-text-primary);
  width: 80px;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    width: 70px;
    padding: 0.4rem;
    font-size: 1.1rem;
    font-weight: 800;
  }
  
  @media (max-width: 480px) {
    width: 50px;
    padding: 0.4rem 0.2rem 0.4rem 0;
    font-size: 1.2rem;
    font-weight: 800;
    position: sticky;
    left: 0;
    background: var(--color-surface);
    z-index: 2;
  }
`,g=t.td`
  padding: 0.4rem 0.6rem;
  background-color: ${e=>e.bgColor||"transparent"};
  text-align: center;
  border-radius: 8px;
  box-shadow: ${e=>e.bgColor?"var(--shadow-wellness)":"none"};
  transition: var(--transition-natural);
  position: relative;
  height: 24px;
  max-height: 24px;
  min-width: ${e=>e.isCurrentDay?"120px":"110px"}; /* Добавили минимальную ширину */
  width: ${e=>e.isCurrentDay?"14%":"13%"};
  overflow: hidden;
  cursor: ${e=>e.hasClass?"pointer":"default"};
  vertical-align: middle;
  
  &:hover {
    transform: ${e=>e.hasClass?"translateY(-1px)":"none"};
    box-shadow: ${e=>e.hasClass?"0 3px 10px rgba(144, 179, 167, 0.4)":"none"};
  }
  
  @media (max-width: 768px) {
    height: 26px;
    max-height: 26px;
    padding: 0.45rem 0.5rem;
    border-radius: 7px;
  }
  
  @media (max-width: 480px) {
    height: 28px;
    max-height: 28px;
    min-height: 28px;
    padding: 0.5rem 0.4rem;
    width: auto;
    min-width: auto; /* Сбрасываем минимальную ширину на мобильных */
    display: ${e=>e.hiddenOnMobile?"none":"table-cell"};
    border-radius: 7px;
  }
`,f=t.div`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-family: var(--font-primary);
  color: var(--color-text-primary);
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    gap: 0.35rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.3rem;
    flex-direction: column;
  }
`,w=t.div`
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-family: var(--font-primary);
  color: var(--color-text-primary);
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.2;
  }
`,u=t.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  line-height: 1.1;
  
  &::before {
    content: '•';
    margin-right: 3px;
    
    @media (max-width: 480px) {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.2;
  }
`,b=t.div`
  font-size: 0.65rem;
  font-weight: 500;
  font-style: italic;
  color: var(--color-text-secondary);
  line-height: 1;
  
  &::before {
    content: '•';
    margin-right: 2px;
    font-style: normal;
    
    @media (max-width: 480px) {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`,y=[{name:"MON",number:"1",fullName:"Понедельник"},{name:"TUE",number:"2",fullName:"Вторник"},{name:"WED",number:"3",fullName:"Среда"},{name:"THU",number:"4",fullName:"Четверг"},{name:"FRI",number:"5",fullName:"Пятница"},{name:"SAT",number:"6",fullName:"Суббота"},{name:"SUN",number:"7",fullName:"Воскресенье"}],v=["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"],j=["YOGA","STRETCHING","MOBILITY","ZUMBA","BARRE","HIGH HEELS","TABATA","FITNESS","STRONG NATION","CIRCL MOBILITY"],M=["Anna K.","Michael S.","Elena G.","Sergei T.","Maria V.","Alexey D.","Viktoria Z.","Dmitry L.","Natalia M.","Ivan P."],T=()=>{const{t}=e(),[T,z]=r.useState([]),[S,N]=r.useState(!0),[E,I]=r.useState(0===(new Date).getDay()?6:(new Date).getDay()-1),[C,$]=r.useState(window.innerWidth<=480);return r.useEffect(()=>{(async()=>{N(!0),await new Promise(e=>setTimeout(e,500));const e=(()=>{const e=[];return y.forEach((r,a)=>{const t=3+Math.floor(3*Math.random());for(let i=0;i<t;i++){const r=9+Math.floor(9*Math.random()),t=45+15*Math.floor(4*Math.random()),n=j[Math.floor(Math.random()*j.length)],o=M[Math.floor(Math.random()*M.length)],d=10+Math.floor(11*Math.random()),s=Math.floor(Math.random()*(d+1));e.push({id:`class-${a}-${i}`,day:a,startTime:`${r}:00`,classType:n,trainer:o,duration:t,maxParticipants:d,currentParticipants:s})}}),e})();z(e),N(!1)})()},[]),r.useEffect(()=>{const e=()=>{$(window.innerWidth<=480)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),a.jsx(i,{id:"schedule",children:a.jsxs(n,{children:[a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx(o,{children:t("sports.schedule.tag","Расписание")}),a.jsx(s,{children:t("sports.schedule.title","SCHEDULE")}),a.jsx(m,{children:t("sports.schedule.subtitle","ВЫБЕРИТЕ ДЕНЬ НЕДЕЛИ")})]}),a.jsxs(d,{children:[a.jsx(l,{children:y.map((e,r)=>a.jsxs(p,{isSelected:r===E,onClick:()=>I(r),children:[a.jsx("span",{children:e.name}),a.jsx("span",{style:{fontSize:"0.8rem",opacity:.8},children:e.number})]},e.name))}),a.jsxs(h,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{width:C?"40px":"80px"}}),y.map((e,r)=>a.jsxs(x,{isSelected:r===E,hiddenOnMobile:C&&r!==E,children:[a.jsx("span",{className:"day-name",children:e.name}),a.jsx("span",{className:"day-number",children:e.number})]},e.name))]})}),a.jsx("tbody",{children:S?v.map((e,r)=>a.jsxs("tr",{children:[a.jsx(c,{children:e}),y.map((e,t)=>a.jsx(g,{children:Math.random()>.7&&a.jsx("div",{style:{height:"100%",background:"#f3f4f6",borderRadius:"4px",animation:"pulse 1.5s infinite"}})},`loading-cell-${t}-${r}`))]},`loading-row-${r}`)):v.map((e,r)=>a.jsxs("tr",{children:[a.jsx(c,{children:e}),y.map((i,n)=>{const o=T.find(r=>r.day===n&&r.startTime===e);return a.jsx(g,{bgColor:o?(d=o.classType,{YOGA:"rgba(144, 179, 167, 0.2)",STRETCHING:"rgba(200, 168, 233, 0.2)",MOBILITY:"rgba(144, 179, 167, 0.15)",ZUMBA:"rgba(212, 165, 116, 0.2)",BARRE:"rgba(212, 165, 116, 0.15)","HIGH HEELS":"rgba(200, 168, 233, 0.15)",TABATA:"rgba(212, 165, 116, 0.25)",FITNESS:"rgba(144, 179, 167, 0.25)","STRONG NATION":"rgba(200, 168, 233, 0.25)","CIRCL MOBILITY":"rgba(144, 179, 167, 0.18)"}[d]||"rgba(144, 179, 167, 0.1)"):"transparent",hasClass:Boolean(o),isCurrentDay:n===E,hiddenOnMobile:C&&n!==E,children:o&&a.jsxs(f,{children:[a.jsx(w,{children:o.classType}),a.jsxs(u,{children:[o.duration," ",t("sports.schedule.minutes","мин")]}),a.jsx(b,{children:o.trainer})]})},`cell-${n}-${r}`);var d})]},`time-row-${r}`))})]})]})]})})};export{T as default};
