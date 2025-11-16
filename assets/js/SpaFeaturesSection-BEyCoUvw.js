import{j as e}from"./react-core-CV8k_GRh.js"
import{d as i}from"./styled-components-CMIfAvVS.js"
import{u as t}from"./i18n-core-CSZVPE1N.js"
import{i as r,j as a,M as o,m as n}from"./heroicons-B0mUXsxG.js"
import{m as s}from"./framer-motion-h7lgP0Yp.js"
import"./vendor-misc-Bm4JrmXh.js"
const l=i.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, 
    #f5f3f0 0%,
    #ede9e4 50%,
    #e6e2dc 100%
  );
  position: relative;
`,d=i.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
`,p=i(s.h2)`
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  color: #5A6B5D;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
`,c=i(s.p)`
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  color: #7A8A7D;
  text-align: center;
  max-width: 700px;
  margin: 2.5rem auto 4.5rem auto;
  line-height: 1.8;
  font-weight: 400;
`,m=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 4rem auto 0;
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,x=i(s.div)`
  background: rgba(255, 255, 255, 0.8);
  padding: 2.5rem 2rem;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(144, 179, 167, 0.15);
  }
`,g=i.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.15) 0%, rgba(184, 196, 168, 0.15) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #90B3A7;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(144, 179, 167, 0.25) 0%, rgba(184, 196, 168, 0.25) 100%);
    transform: scale(1.05);
  }
  
  svg {
    width: 36px;
    height: 36px;
  }
`,h=i.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #5A6B5D;
  transition: color 0.3s ease;
  
  ${x}:hover & {
    color: #90B3A7;
  }
`,u=i.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #7A8A7D;
  margin-bottom: 0;
  font-weight: 400;
`,f=()=>{const{t:i}=t(),s=[{id:1,icon:e.jsx(r,{}),title:i("spa.features.premium_quality.title","Премиум качество"),description:i("spa.features.premium_quality.description","Используем только лучшие продукты и оборудование для всех процедур")},{id:2,icon:e.jsx(a,{}),title:i("spa.features.full_relaxation.title","Полное расслабление"),description:i("spa.features.full_relaxation.description","Создаем атмосферу комфорта для вашего расслабления и отдыха")},{id:3,icon:e.jsx(o,{}),title:i("spa.features.experienced_masters.title","Опытные мастера"),description:i("spa.features.experienced_masters.description","Специалисты с многолетним опытом и постоянным развитием навыков")},{id:4,icon:e.jsx(n,{}),title:i("spa.features.individual_approach.title","Индивидуальный подход"),description:i("spa.features.individual_approach.description","Учитываем ваши пожелания и особенности для максимального результата")}]
return e.jsx(l,{children:e.jsxs(d,{children:[e.jsx(p,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:1},children:i("spa.features.title","Почему выбирают нас")}),e.jsx(c,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:1},children:i("spa.features.subtitle","Мы стремимся предоставить вам исключительный опыт релаксации и ухода")}),e.jsx(m,{children:s.map((i,t)=>e.jsxs(x,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},viewport:{once:1},whileHover:{scale:1.02},children:[e.jsx(g,{children:i.icon}),e.jsx(h,{children:i.title}),e.jsx(u,{children:i.description})]},i.id))})]})})}
export{f as default}
