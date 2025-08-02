import{a as e,r as i,j as t,R as r}from"./vendor-react-Ce3vtg5u.js";import{d as n}from"./vendor-styles-CmrnBrPu.js";import{m as a,u as o}from"./vendor-animations-C-51Dz0N.js";import"./vendor-other-CZupzcPt.js";const s=n.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
  overflow: hidden;
`,l=n(a.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.08) 0%, rgba(168, 197, 184, 0.04) 100%);
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
`,d=n.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,c=n.div`
  text-align: center;
  margin-bottom: 5rem;
`,m=n(a.div)`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #90B3A7;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 40px;
    height: 1px;
    background: #90B3A7;
  }
  
  &::before {
    left: -60px;
  }
  
  &::after {
    right: -60px;
  }
`,p=n(a.h2)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 3.8rem);
  font-weight: 400;
  line-height: 1.2;
  color: #2C3E2D;
  margin: 0 0 2rem;
  letter-spacing: -0.02em;
`,f=n(a.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  line-height: 1.7;
  color: #5A6B5D;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
`,g=n.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`,h=n(a.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem 2rem 2.5rem;
  text-align: center;
  border: 1px solid ${e=>e.$borderColor};
  transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${e=>e.$accent};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${e=>e.$accent};
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 30px 60px rgba(144, 179, 167, 0.15);
    border-color: ${e=>e.$accent};
    
    &::before {
      transform: scaleX(1);
    }
    
    &::after {
      opacity: 0.02;
    }
  }
`,u=n.div`
  font-size: 3rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
  
  ${h}:hover & {
    transform: scale(1.1);
  }
`,b=n.div`
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`,x=n(a.span)`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 400;
  color: ${e=>e.$color};
  letter-spacing: -0.02em;
  display: block;
  line-height: 1;
`,v=n.span`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${e=>e.$color};
  opacity: 0.8;
  margin-left: 0.25rem;
`,y=n.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #2C3E2D;
  margin: 1.5rem 0 1rem;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 2;
`,w=n.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #5A6B5D;
  margin: 0;
  font-weight: 400;
  position: relative;
  z-index: 2;
`,j=({value:e,delay:n=0})=>{const a=i.useRef(null),s=o(a,{once:!0,amount:.1}),[l,d]=r.useState("0");return r.useEffect(()=>{if(s){const i=setTimeout(()=>{const i=parseInt(e.replace(/\D/g,""))||0;if(0===i)return void d(e);const t=i/45;let r=0;const n=setInterval(()=>{if(r++,r>=45)d(e),clearInterval(n);else{const i=Math.floor(t*r);d(e.replace(/\d+/,i.toString()))}},1500/45);return()=>clearInterval(n)},n);return()=>clearTimeout(i)}},[s,e,n]),t.jsx("span",{ref:a,children:l})},$=()=>{const{t:r}=e(),n=i.useMemo(()=>(e=>[{id:"gym",emoji:"💪",number:"70",unit:"+",name:e("facilities.gym.name","Тренажеров"),description:e("facilities.gym.description","Современное оборудование для эффективных тренировок"),accent:"linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)",color:"#E8734A",borderColor:"rgba(232, 115, 74, 0.15)"},{id:"banya",emoji:"🔥",number:"150",unit:"m2",name:e("facilities.banya.name","Русская баня"),description:e("facilities.banya.description","Самая большая панорамная русская парная на Пхукете"),accent:"linear-gradient(135deg, #8B4513 0%, #CD853F 100%)",color:"#8B4513",borderColor:"rgba(139, 69, 19, 0.15)"},{id:"restaurant",emoji:"🍽️",number:"200",unit:"",name:e("facilities.restaurant.name","Мест в ресторане"),description:e("facilities.restaurant.description","Ресторан на открытом воздухе"),accent:"linear-gradient(135deg, #D4A574 0%, #E6B885 100%)",color:"#D4A574",borderColor:"rgba(212, 165, 116, 0.15)"},{id:"pool",emoji:"🏊‍♂️",number:"25",unit:e("facilities.pool.unit","м"),name:e("facilities.pool.name","Бассейн"),description:e("facilities.pool.description","Олимпийский стандарт для плавания"),accent:"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)",color:"#90B3A7",borderColor:"rgba(144, 179, 167, 0.15)"}])(r),[r]),o={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.25,.1,.25,1]}}};return t.jsxs(s,{id:"facilities",children:[t.jsx(l,{style:{width:"400px",height:"400px",top:"5%",right:"0%"},animate:{scale:[1,1.1,1],opacity:[.3,.6,.3]},transition:{duration:12,repeat:1/0,repeatType:"reverse"}}),t.jsx(l,{style:{width:"300px",height:"300px",bottom:"5%",left:"0%"},animate:{scale:[1,1.2,1],opacity:[.2,.5,.2]},transition:{duration:15,repeat:1/0,repeatType:"reverse",delay:4}}),t.jsxs(d,{children:[t.jsxs(c,{children:[t.jsx(m,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1},variants:o,children:r("facilities.overline","НАШИ ФАЦИЛИТИ")}),t.jsx(p,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1},variants:o,transition:{delay:.1},children:r("facilities.title","Пространство для гармонии и саморазвития")}),t.jsx(f,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1},variants:o,transition:{delay:.15},children:r("facilities.subtitle","Мы создаем пространство, где жизнь становится ярче. Наша миссия — сделать отдых и заботу о себе не обязанностью, а удовольствием")})]}),t.jsx(a.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1},variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},children:t.jsx(g,{children:n.map((e,i)=>t.jsxs(h,{variants:o,$accent:e.accent,$borderColor:e.borderColor,whileHover:{scale:1.02,transition:{duration:.3}},children:[t.jsx(u,{children:e.emoji}),t.jsx(b,{children:t.jsxs(x,{$color:e.color,children:[t.jsx(j,{value:e.number,delay:100*i}),e.unit&&t.jsx(v,{$color:e.color,children:e.unit})]})}),t.jsx(y,{children:e.name}),t.jsx(w,{children:e.description})]},e.id))})})]})]})};export{$ as default};
