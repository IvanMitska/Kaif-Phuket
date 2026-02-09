import{r as e,j as i,R as r}from"./react-core-DWAaPJsY.js";import{d as t}from"./styled-components-DYLnJpui.js";import{u as n}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-DORsZxsB.js";const a=t.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,s=t.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,o=t.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(19, 50, 56, 0.25);
    margin-right: 1rem;
  }
`,m=t.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,l=t.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  max-width: 600px;
  margin: 0 0 4rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 3rem;
  }
`,c=t.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,d=t.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  border: 1px solid rgba(19, 50, 56, 0.08);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`,f=t.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: #133238;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 0.25rem;
`,p=t.span`
  font-family: 'Jost', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(19, 50, 56, 0.35);
  margin-left: 0.15rem;
`,g=t.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #133238;
  margin: 1.25rem 0 0.75rem;
  letter-spacing: -0.01em;
  text-transform: uppercase;
`,u=t.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(19, 50, 56, 0.5);
  margin: 0;
  font-weight: 400;
`,AnimatedCounter=({value:t,delay:n=0})=>{const a=e.useRef(null),[s,o]=r.useState("0"),m=e.useRef(!1);return r.useEffect(()=>{const e=new IntersectionObserver(([e])=>{if(e.isIntersecting&&!m.current){m.current=!0;const e=setTimeout(()=>{const e=parseInt(t.replace(/\D/g,""))||0;if(0===e)return void o(t);const i=e/45;let r=0;const n=setInterval(()=>{if(r++,r>=45)o(t),clearInterval(n);else{const e=Math.floor(i*r);o(t.replace(/\d+/,e.toString()))}},1500/45)},n);return()=>clearTimeout(e)}},{threshold:.1});return a.current&&e.observe(a.current),()=>e.disconnect()},[t,n]),i.jsx("span",{ref:a,children:s})},AdvantagesSection=()=>{const{t:r}=n(),t=e.useMemo(()=>(e=>[{id:"gym",number:"70",unit:"+",name:e("facilities.gym.name","Тренажеров"),description:e("facilities.gym.description","Современное оборудование для эффективных тренировок")},{id:"banya",number:"150",unit:"m2",name:e("facilities.banya.name","Русская баня"),description:e("facilities.banya.description","Самая большая панорамная русская парная на Пхукете")},{id:"restaurant",number:"200",unit:"",name:e("facilities.restaurant.name","Мест в ресторане"),description:e("facilities.restaurant.description","Ресторан на открытом воздухе")},{id:"pool",number:"25",unit:e("facilities.pool.unit","м"),name:e("facilities.pool.name","Бассейн"),description:e("facilities.pool.description","Олимпийский стандарт для плавания")}])(r),[r]);return i.jsx(a,{id:"facilities",children:i.jsxs(s,{children:[i.jsx(o,{children:r("facilities.overline","Our Facilities")}),i.jsx(m,{children:r("facilities.title","Пространство для гармонии и саморазвития")}),i.jsx(l,{children:r("facilities.subtitle","Мы создаем пространство, где жизнь становится ярче")}),i.jsx(c,{children:t.map((e,r)=>i.jsxs(d,{children:[i.jsxs(f,{children:[i.jsx(AnimatedCounter,{value:e.number,delay:100*r}),e.unit&&i.jsx(p,{children:e.unit})]}),i.jsx(g,{children:e.name}),i.jsx(u,{children:e.description})]},e.id))})]})})};export{AdvantagesSection as default};
