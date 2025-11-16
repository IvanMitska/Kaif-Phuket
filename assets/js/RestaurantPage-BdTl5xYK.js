import{r as e,j as t}from"./react-core-CV8k_GRh.js"
import{a}from"./react-helmet-C_ZFuiA7.js"
import{P as r}from"./PageHead-C4ywpL0o.js"
import{d as i}from"./styled-components-CMIfAvVS.js"
import{P as n}from"./PageScrollReset-CasNnzkC.js"
import{u as s}from"./i18n-core-CSZVPE1N.js"
import{c as o,d as l,e as d,f as p,g as m,h as c,b as g,a as u,i as x,j as h,k as b,l as f,m as y}from"./heroicons-B0mUXsxG.js"
import{m as w,A as k}from"./framer-motion-h7lgP0Yp.js"
import"./vendor-misc-Bm4JrmXh.js"
const v=i.div`
  position: relative;
  overflow: hidden;
  background-color: #f0f0f0;
  transition: all 0.3s ease;

  &.loading {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`,j=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${e=>e.loaded?1:0};
`,_=({src:a,alt:r,className:i,style:n,loading:s="lazy",onLoad:o,onError:l,placeholder:d,...p})=>{const[m,c]=e.useState(0),[g,u]=e.useState(0),[x,h]=e.useState(0),b=e.useRef(null),f=e.useRef(null)
return e.useEffect(()=>{const e=new IntersectionObserver(([t])=>{t.isIntersecting&&(h(1),e.disconnect())},{rootMargin:"50px",threshold:.1})
return f.current&&e.observe(f.current),()=>e.disconnect()},[]),t.jsx(v,{ref:f,className:`${i||""} ${m||g?"":"loading"}`,style:n,children:(x||"eager"===s)&&t.jsx(j,{ref:b,src:g?d:a,alt:r,loaded:m,loading:s,onLoad:e=>{c(1),o&&o(e)},onError:e=>{u(1),l&&l(e)},...p})})},B=()=>{const{t:e}=s()
return t.jsx("div",{style:{width:"100%",padding:"80px 0",backgroundColor:"#FAFAFA",borderTop:"1px solid #EAEAEA",borderBottom:"1px solid #EAEAEA"},children:t.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"0 20px",display:"flex",flexDirection:"column",alignItems:"center"},children:[t.jsxs("div",{style:{marginBottom:"40px",textAlign:"center"},children:[t.jsx("div",{style:{color:"#90B3A7",fontSize:"14px",fontWeight:"500",marginBottom:"10px"},children:e("restaurant.bar.label","Бар")}),t.jsx("h2",{style:{fontSize:"40px",fontWeight:"700",marginBottom:"20px",fontFamily:"Playfair Display, serif"},children:e("restaurant.bar.title","Наш бар")}),t.jsx("p",{style:{fontSize:"18px",maxWidth:"600px",margin:"0 auto",color:"#4B5563",lineHeight:"1.6"},children:e("restaurant.bar.description","У нас есть всё, чтобы утолить жажду — от спортивных протеиновых шейков до расслабляющих коктейлей.")})]}),t.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"80px",alignItems:"center"},children:[t.jsxs("div",{style:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:"30px"},children:[t.jsxs("div",{style:{flex:"1",minWidth:"300px",display:"flex",flexDirection:"column",gap:"30px"},children:[t.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"flex-start"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"rgba(144, 179, 167, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:t.jsx(o,{style:{width:"20px",height:"20px",color:"#90B3A7"}})}),t.jsxs("div",{children:[t.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"8px",color:"#111827"},children:e("restaurant.bar.feature1.title","Авторские напитки")}),t.jsx("p",{style:{fontSize:"16px",color:"#6B7280",lineHeight:"1.5"},children:e("restaurant.bar.feature1.description","Уникальные коктейли, созданные нашими миксологами")})]})]}),t.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"flex-start"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"rgba(144, 179, 167, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:t.jsx(l,{style:{width:"20px",height:"20px",color:"#90B3A7"}})}),t.jsxs("div",{children:[t.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"8px",color:"#111827"},children:e("restaurant.bar.feature2.title","Освежающие миксы")}),t.jsx("p",{style:{fontSize:"16px",color:"#6B7280",lineHeight:"1.5"},children:e("restaurant.bar.feature2.description","Свежевыжатые соки и фруктовые комбинации")})]})]}),t.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"flex-start"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"rgba(144, 179, 167, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:t.jsx(d,{style:{width:"20px",height:"20px",color:"#90B3A7"}})}),t.jsxs("div",{children:[t.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"8px",color:"#111827"},children:e("restaurant.bar.feature3.title","Напитки для восстановления после тренировки")}),t.jsx("p",{style:{fontSize:"16px",color:"#6B7280",lineHeight:"1.5"},children:e("restaurant.bar.feature3.description","Протеиновые коктейли и спортивное питание")})]})]})]}),t.jsx("div",{style:{flex:"1",minWidth:"300px",display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx("div",{style:{width:"100%",maxWidth:"500px",aspectRatio:"4/3",borderRadius:"20px",overflow:"hidden",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.1)"},children:t.jsxs("picture",{children:[t.jsx("source",{srcSet:"/src/assets/images/optimized/webp/bar.webp",type:"image/webp"}),t.jsx("img",{src:"/src/assets/images/optimized/bar.jpg",alt:"Our Bar",style:{width:"100%",height:"100%",objectFit:"cover"}})]})})})]}),t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs("button",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"10px",padding:"15px 30px",fontSize:"14px",fontWeight:"500",backgroundColor:"#90B3A7",color:"white",border:"none",borderRadius:"50px",cursor:"pointer",transition:"all 0.3s",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)"},onClick:()=>{var e
null==(e=document.getElementById("menu-section"))||e.scrollIntoView({behavior:"smooth"})},onMouseEnter:e=>{e.target.style.transform="translateY(-2px)",e.target.style.boxShadow="0 6px 15px rgba(0, 0, 0, 0.15)"},onMouseLeave:e=>{e.target.style.transform="",e.target.style.boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"},children:[e("restaurant.bar.menu_button","Открыть меню напитков"),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]})]})})},z=i(w.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 52px;
  min-width: 160px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.35);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,A=i(w.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 52px;
  min-width: 160px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,S=i.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  
  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 4rem 0;
  }
`,H=i.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  
  picture, img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom, 
      rgba(0, 0, 0, 0.7) 0%, 
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 2;
    pointer-events: none;
  }
`,I=i.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  
  @media (min-width: 1280px) {
    padding: 0 3rem;
  }
`,N=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
`,C=i(w.div)`
  position: relative;
  text-align: center;
  max-width: 900px;
  width: 100%;
  z-index: 10;
  margin: 0 auto;
  padding: 0 1rem;
`,T=i(w.div)`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
`,W=i(w.div)`
  width: 120px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  margin: 1.5rem auto 2rem;
`,D=i(w.h1)`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 100%;
  word-wrap: break-word;
  font-family: 'Playfair Display', serif;
`,E=i(w.p)`
  font-size: clamp(1.125rem, 2.2vw, 1.4rem);
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 3.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`,F=i(w.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
  margin-top: 0.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 1rem;

    button {
      width: 100%;
      max-width: 300px;
      min-width: 260px;
    }
  }

  @media (max-width: 480px) {
    button {
      max-width: 280px;
      min-width: 240px;
      height: 52px;
      font-size: 0.95rem;
    }
  }
`,R=i(w.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: -1;
  
  &.top-right {
    top: 10%;
    right: 10%;
  }
  
  &.bottom-left {
    bottom: 10%;
    left: 10%;
  }
`,M=e.memo(({menuSectionRef:e})=>{const{t:a}=s()
return t.jsxs(S,{children:[t.jsx(H,{children:t.jsxs("picture",{children:[t.jsx("source",{srcSet:"/images-optimized/restaurant/booking.jpg",type:"image/jpeg"}),t.jsx("img",{src:"/images-optimized/restaurant/booking.jpg",alt:a("restaurant.hero.image_alt","Restaurant interior"),loading:"eager",style:{width:"100%",height:"100%",objectFit:"cover"}})]})}),t.jsxs(I,{children:[t.jsx(R,{className:"top-right",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.4}}),t.jsx(R,{className:"bottom-left",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.4}}),t.jsx(N,{children:t.jsxs(C,{children:[t.jsx(T,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:a("restaurant.hero.label","Наш ресторан")}),t.jsx(D,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:a("restaurant.hero.title","Изысканная кухня с современным подходом")}),t.jsx(W,{initial:{opacity:0,scaleX:0},animate:{opacity:1,scaleX:1},transition:{duration:.6,delay:.4}}),t.jsx(E,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:a("restaurant.hero.subtitle","Наши шеф-повара создают уникальные блюда, сочетая традиционные рецепты с новыми кулинарными техниками.")}),t.jsxs(F,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:[t.jsxs(z,{onClick:()=>{var t
return null==(t=e.current)?void 0:t.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.01},whileTap:{scale:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.9},children:[a("restaurant.hero.button","Наше меню"),t.jsx(p,{})]}),t.jsx(A,{onClick:()=>{const e=a("common.whatsapp_messages.book_table","Здравствуйте! Хочу забронировать столик в ресторане KAIF")
window.open(`https://wa.me/66624805877?text=${encodeURIComponent(e)}`,"_blank")},whileHover:{scale:1.01},whileTap:{scale:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:1},children:a("common.book","Забронировать")})]})]})})]})]})})
M.displayName="HeroSection"
const L=i(w.div)`
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  
  /* Убираем все возможные границы */
  * {
    border: none !important;
    outline: none !important;
  }
  
  button {
    border: none !important;
    outline: none !important;
  }
`
i.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`,i(w.button)`
  padding: 0.75rem 1.5rem;
  border: none;
  background: ${e=>{var t,a,r
return e.active?(null==(r=null==(a=null==(t=e.theme)?void 0:t.colors)?void 0:a.gradients)?void 0:r.logo)||"linear-gradient(135deg, rgba(255, 99, 71, 0.07) 0%, rgba(255, 99, 71, 0.10) 5%, rgba(206, 128, 114, 0.12) 12%, rgba(157, 157, 157, 0.15) 20%, rgba(108, 186, 200, 0.18) 28%, rgba(0, 180, 216, 0.20) 36%, rgba(71, 168, 203, 0.18) 44%, rgba(142, 157, 188, 0.15) 52%, rgba(214, 145, 173, 0.12) 60%, rgba(255, 105, 180, 0.10) 68%, rgba(219, 140, 149, 0.12) 76%, rgba(183, 175, 118, 0.15) 84%, rgba(147, 210, 95, 0.10) 92%, rgba(92, 184, 72, 0.07) 100%)":"#E0E8E1"}};
  color: ${e=>e.active?"white":"#333333"};
  font-weight: ${e=>e.active?"600":"500"};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    background-color: ${e=>e.active?"#D29B84":"#d0d8d1"};
    transform: translateY(-2px);
  }
  
  &:focus {
    outline: none;
  }
`,i(w.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`
const $=i(w.div)`
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
`
i.div`
  height: 200px;
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${$}:hover &::after {
    opacity: 1;
  }
`,i.div`
  padding: 1.5rem;
`,i.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
  color: #333333;
`,i.p`
  font-size: 0.9rem;
  color: #666666;
  margin-bottom: 1rem;
  line-height: 1.5;
`,i.div`
  font-weight: 600;
  color: #D29B84;
  font-size: 1.1rem;
`,i.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`,i.span`
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  background-color: #f0f0f0;
  border-radius: 20px;
  color: #666666;
`,i(w.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;
`,i(w.div)`
  background-color: white;
  border-radius: 16px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,i.div`
  height: 300px;
  background-size: cover;
  background-position: center;
  
  @media (min-width: 768px) {
    height: 100%;
  }
`,i.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`,i(w.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 2.5rem;
  max-width: 530px;
  font-weight: 300;
`,i.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  color: #333333;
`,i.p`
  font-size: 1rem;
  color: #666666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,i.div`
  font-weight: 600;
  color: #D29B84;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`,i.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333333;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li {
    padding: 0.25rem 0;
    font-size: 0.9rem;
    color: #666666;
    display: flex;
    align-items: center;
    
    &:before {
      content: '•';
      color: #D29B84;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`,i(w.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
`
const K=({sortType:a,setSortType:r,t:i})=>{const[n,s]=e.useState(0),[o,l]=e.useState(0),d=e.useRef(null)
e.useEffect(()=>{const e=()=>{l(window.innerWidth<=768)}
return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[])
const p=[{value:"default",label:i("restaurant.menu.sort.default","По умолчанию")},{value:"popular",label:i("restaurant.menu.sort.popular","Популярные")},{value:"price_low",label:i("restaurant.menu.sort.price_low","Сначала дешёвые")},{value:"price_high",label:i("restaurant.menu.sort.price_high","Сначала дорогие")},{value:"name",label:i("restaurant.menu.sort.name","По названию")}],m=p.find(e=>e.value===a)
return e.useEffect(()=>{const e=e=>{d.current&&!d.current.contains(e.target)&&s(0)}
return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),t.jsxs("div",{className:"relative "+(o?"w-full":"w-auto"),ref:d,style:{zIndex:9999},children:[t.jsxs(w.button,{className:o?"sort-dropdown-mobile":"",style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",textAlign:"center",lineHeight:"1.2",background:"rgba(255, 255, 255, 0.95)",border:"none",borderRadius:"50px",padding:o?"12px 20px":"8px 14px",fontSize:o?"16px":"13px",fontWeight:"500",color:"#5A6B5D",cursor:"pointer",minWidth:o?"auto":"160px",width:o?"100%":"auto",maxWidth:o?"100%":"220px",transition:"all 0.3s ease",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.05)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",minHeight:o?"48px":"38px",zIndex:9999,position:"relative"},whileHover:{borderColor:"#90B3A7",boxShadow:"0 4px 12px rgba(144, 179, 167, 0.15)",scale:1.02},whileTap:{scale:.98},onClick:()=>s(!n),children:[t.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,textAlign:"left",display:"flex",alignItems:"center",justifyContent:"flex-start",lineHeight:"1.2",paddingLeft:o?"4px":"0"},children:null==m?void 0:m.label}),t.jsx(w.svg,{width:o?"18":"14",height:o?"18":"14",viewBox:"0 0 24 24",fill:"none",stroke:"#90B3A7",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:n?180:0},transition:{duration:.3,ease:"easeInOut"},style:{flexShrink:0},children:t.jsx("polyline",{points:"6,9 12,15 18,9"})})]}),t.jsx(k,{children:n&&t.jsx(w.div,{className:"sort-dropdown-list",initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.3,ease:"easeOut"},style:{position:"absolute",top:"100%",left:"0",right:"0",marginTop:o?"8px":"6px",background:"rgba(255, 255, 255, 0.98)",border:"none",borderRadius:o?"20px":"16px",boxShadow:o?"0 15px 40px rgba(0, 0, 0, 0.15), 0 6px 20px rgba(144, 179, 167, 0.12)":"0 12px 35px rgba(0, 0, 0, 0.12), 0 4px 15px rgba(144, 179, 167, 0.1)",zIndex:999999,overflow:"hidden",minWidth:o?"auto":"200px",width:"100%",maxWidth:o?"100%":"280px",backdropFilter:"blur(15px)",WebkitBackdropFilter:"blur(15px)"},children:p.map((e,i)=>t.jsxs(w.button,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{duration:.2,delay:.05*i},style:{width:"100%",padding:o?"14px 20px":"10px 14px",fontSize:o?"16px":"13px",fontWeight:a===e.value?"600":"500",textAlign:"left",background:a===e.value?"rgba(144, 179, 167, 0.12)":"transparent",color:a===e.value?"#90B3A7":"#5A6B5D",border:"none",cursor:"pointer",transition:"all 0.3s ease",position:"relative",display:"flex",alignItems:"center",justifyContent:"space-between",minHeight:o?"48px":"auto",lineHeight:"1.4"},whileHover:{background:a===e.value?"rgba(144, 179, 167, 0.18)":"rgba(144, 179, 167, 0.08)",x:4},whileTap:{scale:.98},onClick:()=>{r(e.value),s(0)},children:[t.jsx("span",{style:{flex:"1",display:"flex",alignItems:"center",justifyContent:"flex-start",lineHeight:"1.4"},children:e.label}),a===e.value&&t.jsx(w.svg,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},width:o?"18":"16",height:o?"18":"16",viewBox:"0 0 24 24",fill:"none",stroke:"#90B3A7",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"20,6 9,17 4,12"})})]},e.value))})})]})},P=({activeCategory:a,setActiveCategory:r})=>{const{t:i}=s(),n=e.useRef(null),o=[{id:"all",name:i("restaurant.menu.categories.all","Все блюда"),priority:1},{id:"breakfast",name:i("restaurant.menu.categories.breakfast","Завтраки"),priority:2},{id:"soup",name:i("restaurant.menu.categories.soup","Супы"),priority:3},{id:"salad",name:i("restaurant.menu.categories.salad","Салаты"),priority:4},{id:"grill",name:i("restaurant.menu.categories.grill","Гриль"),priority:5},{id:"burger",name:i("restaurant.menu.categories.burger","Бургеры"),priority:6},{id:"dessert",name:i("restaurant.menu.categories.dessert","Десерты"),priority:7},{id:"tea",name:i("restaurant.menu.categories.tea","Чай"),priority:8},{id:"coffee",name:i("restaurant.menu.categories.coffee","Кофе"),priority:9},{id:"coffee_signature",name:i("restaurant.menu.categories.coffee_signature","Авторский кофе"),priority:10},{id:"smoothie",name:i("restaurant.menu.categories.smoothie","Смузи"),priority:11},{id:"mocktail",name:i("restaurant.menu.categories.mocktail","Мокктейлы"),priority:12},{id:"juice",name:i("restaurant.menu.categories.juice","Соки"),priority:13},{id:"cocktail",name:i("restaurant.menu.categories.cocktail","Коктейли"),priority:14},{id:"wine",name:i("restaurant.menu.categories.wine","Вино"),priority:15},{id:"beer",name:i("restaurant.menu.categories.beer","Пиво"),priority:16},{id:"strong",name:i("restaurant.menu.categories.strong","Крепкий алкоголь"),priority:17},{id:"fitness",name:i("restaurant.menu.categories.fitness","Фитнес-напитки"),priority:18}]
return e.useEffect(()=>{if(n.current&&a){const e=n.current.querySelector(`[data-category="${a}"]`)
if(e){const t=n.current,a=e.offsetLeft-t.clientWidth/2+e.clientWidth/2
t.scrollTo({left:Math.max(0,a),behavior:"smooth"})}}},[a]),t.jsx("div",{className:"mb-8",children:t.jsxs(w.div,{className:"relative",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},children:[t.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"}),t.jsx("div",{ref:n,className:"flex overflow-x-auto pb-2",style:{scrollbarWidth:"none",msOverflowStyle:"none",WebkitOverflowScrolling:"touch"},children:t.jsx("div",{className:"flex space-x-3 px-6",children:o.map(e=>t.jsx(w.button,{"data-category":e.id,style:{padding:"12px 20px",borderRadius:"25px",fontSize:"14px",fontWeight:a===e.id?"600":"500",letterSpacing:"0.2px",whiteSpace:"nowrap",flexShrink:0,transition:"all 0.3s ease-out",background:a===e.id?"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)":"rgba(255, 255, 255, 0.8)",color:a===e.id?"white":"#5A6B5D",border:"none",boxShadow:a===e.id?"0 4px 15px rgba(144, 179, 167, 0.3)":"0 2px 8px rgba(0, 0, 0, 0.05)",cursor:"pointer"},whileHover:{y:-2,scale:1.02,boxShadow:a===e.id?"0 6px 20px rgba(144, 179, 167, 0.4)":"0 4px 12px rgba(144, 179, 167, 0.15)"},whileTap:{y:0,scale:.98},onClick:()=>r(e.id),onMouseEnter:t=>{a!==e.id&&(t.target.style.background="rgba(144, 179, 167, 0.1)",t.target.style.color="#90B3A7")},onMouseLeave:t=>{a!==e.id&&(t.target.style.background="rgba(255, 255, 255, 0.8)",t.target.style.color="#5A6B5D")},children:e.name},e.id))})}),t.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"})]})})},V=()=>{const{t:i}=s(),[o,l]=e.useState(0),[d,x]=e.useState("all"),[h,b]=e.useState(6),[f,y]=e.useState("default"),k=e.useRef(null),v=e.useRef(null),{menuItems:j,tagStyles:z}=(e=>{const t=(t,a)=>{try{return e?e(t,a):a}catch(r){return a}},a=[{id:1,name:t("restaurant.menu.items.kaif_breakfast.name",'Завтрак "KAIF"'),description:t("restaurant.menu.items.kaif_breakfast.description","Отварные яйца / сыр эмменталь / ростбиф / микс черри / зерновой хлеб"),price:"430 THB",image:"/images/menu/breakfast/kaif-breakfast.jpg",tags:["breakfast","popular"],popular:1,category:"breakfast"},{id:43,name:t("restaurant.menu.items.buckwheat_chicken_mushrooms.name","Гречневая каша с цыпленком и соусом пармезан"),description:t("restaurant.menu.items.buckwheat_chicken_mushrooms.description","Гречневая каша / цыпленок / соус пармезан"),price:"260 THB",image:"/images/menu/breakfast/grechka.jpg",tags:["breakfast","healthy"],popular:0,category:"breakfast"},{id:2,name:t("restaurant.menu.items.oatmeal_apple_almonds.name","Овсяная каша на кокосовом молоке"),description:t("restaurant.menu.items.oatmeal_apple_almonds.description","Овсяная каша на кокосовом молоке / манго / мед / микс орехов"),price:"190 THB",image:"/images/menu/breakfast/oatmeal-breakfast.jpg",tags:["breakfast","sweet","healthy","vegan"],popular:0,category:"breakfast"},{id:3,name:t("restaurant.menu.items.shakshuka_spinach_salmon.name","Скрэмбл с риетом из лосося"),description:t("restaurant.menu.items.shakshuka_spinach_salmon.description","Скрэмбл / риет из лосося / микс черри / зерновой хлеб / сливочное масло"),price:"290 THB",image:"/images/menu/breakfast/Shakshuka-salmon.jpg",tags:["breakfast","seafood"],popular:1,category:"breakfast"},{id:5,name:t("restaurant.menu.items.toast_salmon_avocado.name","Тост с лососем"),description:t("restaurant.menu.items.toast_salmon_avocado.description","Тост с лососем / скрэмбл / гуакамоле / салат"),price:"350 THB",image:"/images/menu/breakfast/tostlos.jpg",tags:["breakfast","seafood"],popular:1,category:"breakfast"},{id:6,name:t("restaurant.menu.items.homemade_granola.name","Домашняя гранола"),description:t("restaurant.menu.items.homemade_granola.description","Домашняя гранола / лабне / микс ягод"),price:"290 THB",image:null,tags:["breakfast","healthy","vegan"],popular:0,category:"breakfast"},{id:7,name:t("restaurant.menu.items.syrniki_passion_fruit.name","Сырники"),description:t("restaurant.menu.items.syrniki_passion_fruit.description","Сырники / крем из сметаны / манго джем"),price:"270 THB",image:"/images/menu/breakfast/sirniki.jpg",tags:["breakfast","sweet"],popular:1,category:"breakfast"},{id:8,name:t("restaurant.menu.items.pumpkin_soup.name","Тыквенный крем-суп"),description:t("restaurant.menu.items.pumpkin_soup.description","Тыквенный крем-суп / сыр фета / тыквенные семечки"),price:"190 THB",image:null,tags:["soup","hot","vegan"],popular:1,category:"soup"},{id:9,name:t("restaurant.menu.items.borsch_classic.name","Классический борщ с говядиной"),description:t("restaurant.menu.items.borsch_classic.description","Классический борщ с говядиной"),price:"290 THB",image:"/images/menu/soup/borsch-classic.jpg",tags:["soup","hot"],popular:1,category:"soup"},{id:10,name:t("restaurant.menu.items.creamy_salmon.name","Сливочный суп с лососем"),description:t("restaurant.menu.items.creamy_salmon.description","Сливочный суп с лососем"),price:"290 THB",image:null,tags:["soup","hot","seafood"],popular:0,category:"soup"},{id:11,name:t("restaurant.menu.items.gazpacho_shrimp.name","Гаспачо с креветками"),description:t("restaurant.menu.items.gazpacho_shrimp.description","Борщ Гаспачо / тар-тар из креветок / тар-тар из свежих овощей"),price:"270 THB",image:null,tags:["soup","cold"],popular:0,category:"soup"},{id:12,name:t("restaurant.menu.items.green_salad.name","Зеленый салат"),description:t("restaurant.menu.items.green_salad.description","Зеленый салат / брокколи / огурцы / бэби шпинат / бобы эдамамэ"),price:"290 THB",image:null,tags:["salad","vegetarian","vegan","healthy"],popular:1,category:"salad"},{id:13,name:t("restaurant.menu.items.crispy_eggplant.name","Хрустящие баклажаны"),description:t("restaurant.menu.items.crispy_eggplant.description","Хрустящие баклажаны / йогурт / микс орехов / соус сладкий чили"),price:"290 THB",image:null,tags:["appetizer","vegetarian"],popular:0,category:"salad"},{id:14,name:t("restaurant.menu.items.caesar_chicken.name","Салат Цезарь с цыпленком"),description:t("restaurant.menu.items.caesar_chicken.description","Салат цезарь / печеный цыпленок / перепелиные яйца"),price:"330 THB",image:"/images/menu/salad/caesar-salad.jpg",tags:["salad","meat"],popular:1,category:"salad"},{id:15,name:t("restaurant.menu.items.vegetable_salad.name","Овощной салат"),description:t("restaurant.menu.items.vegetable_salad.description","Овощной салат / огурцы / томаты / редис / оливковое масло"),price:"190 THB",image:null,tags:["salad","vegetarian","vegan","healthy"],popular:0,category:"salad"},{id:16,name:t("restaurant.menu.items.roast_beef_salad.name","Салат с ростбифом"),description:t("restaurant.menu.items.roast_beef_salad.description","Салат с ростбифом / болгарский перец / огурцы / микс салатов"),price:"390 THB",image:null,tags:["salad","meat"],popular:0,category:"salad"},{id:17,name:t("restaurant.menu.items.crispy_shrimp.name","Хрустящие креветки"),description:t("restaurant.menu.items.crispy_shrimp.description","Хрустящие креветки / мусс из печеных овощей"),price:"390 THB",image:null,tags:["appetizer","seafood"],popular:1,category:"salad"},{id:18,name:t("restaurant.menu.items.big_snack_set.name","Большой сет снеков"),description:t("restaurant.menu.items.big_snack_set.description","Большой сет снеков"),price:"2100 THB",image:null,tags:["appetizer","meat","seafood"],popular:0,category:"salad"},{id:19,name:t("restaurant.menu.items.small_snack_set.name","Маленький сет снеков"),description:t("restaurant.menu.items.small_snack_set.description","Маленький сет снеков"),price:"1290 THB",image:null,tags:["appetizer","meat"],popular:0,category:"salad"},{id:20,name:t("restaurant.menu.items.chicken_kebab.name","Шашлык из куриного филе"),description:t("restaurant.menu.items.chicken_kebab.description","Шашлык из куриного филе"),price:"270 THB",image:"/images/menu/grill/chicken_kebab.jpg",tags:["grill","meat"],popular:0,category:"grill"},{id:21,name:t("restaurant.menu.items.pork_kebab.name","Шашлык из свинины"),description:t("restaurant.menu.items.pork_kebab.description","Шашлык из свинины"),price:"290 THB",image:"/images/menu/grill/pork_kebab.jpg",tags:["grill","meat"],popular:0,category:"grill"},{id:22,name:t("restaurant.menu.items.lyulya_chicken.name","Люля-кебаб из курицы"),description:t("restaurant.menu.items.lyulya_chicken.description","Люля-кебаб из курицы"),price:"270 THB",image:"/images/menu/grill/lyulya_chicken.jpg",tags:["grill","meat"],popular:1,category:"grill"},{id:23,name:t("restaurant.menu.items.lyulya_lamb.name","Люля кебаб из баранины"),description:t("restaurant.menu.items.lyulya_lamb.description","Люля кебаб из баранины"),price:"390 THB",image:"/images/menu/grill/lyulya_lamb.jpg",tags:["grill","meat"],popular:0,category:"grill"},{id:24,name:t("restaurant.menu.items.lyulya_beef_pork.name","Люля кебаб из говядины и свинины"),description:t("restaurant.menu.items.lyulya_beef_pork.description","Люля кебаб из говядины и свинины"),price:"390 THB",image:"/images/menu/grill/lyulya_beef_pork.jpg",tags:["grill","meat"],popular:0,category:"grill"},{id:25,name:t("restaurant.menu.items.assorted_kebabs.name","Ассорти шашлыков"),description:t("restaurant.menu.items.assorted_kebabs.description","Ассорти шашлыков"),price:"1490 THB",image:"/images/menu/grill/assorted_kebabs.jpg",tags:["grill","meat"],popular:0,category:"grill"},{id:26,name:t("restaurant.menu.items.vegetables_kebab.name","Овощной шашлык"),description:t("restaurant.menu.items.vegetables_kebab.description","Овощной шашлык"),price:"190 THB",image:"/images/menu/grill/vegetables_kebab.jpg",tags:["grill","vegetarian","vegan"],popular:1,category:"grill"},{id:27,name:t("restaurant.menu.items.chicken_thigh_grill.name","Бедро цыпленка на мангале"),description:t("restaurant.menu.items.chicken_thigh_grill.description","Бедро цыпленка на мангале / молодой картофель"),price:"340 THB",image:"/images/menu/grill/chicken_thigh.jpg",tags:["grill","meat"],popular:1,category:"grill"},{id:28,name:t("restaurant.menu.items.salmon_steak.name","Стейк лосося"),description:t("restaurant.menu.items.salmon_steak.description","Стейк лосося / спаржа / шпинат / копченый йогурт"),price:"490 THB",image:null,tags:["main","seafood"],popular:1,category:"main"},{id:29,name:t("restaurant.menu.items.sea_bass_zucchini.name","Сибас с цукини"),description:t("restaurant.menu.items.sea_bass_zucchini.description","Сибас с цукини / соус из белого вина / оливок и каперсов"),price:"470 THB",image:null,tags:["main","seafood"],popular:0,category:"main"},{id:30,name:t("restaurant.menu.items.classic_cheeseburger.name","Классический чизбургер"),description:t("restaurant.menu.items.classic_cheeseburger.description","Классический чизбургер / картофель фри с пармезаном"),price:"420 THB",image:"/images/menu/burger/cheeseburger-deluxe.jpg",tags:["burger","meat"],popular:1,category:"main"},{id:31,name:t("restaurant.menu.items.mignon_steak.name","Стейк миньон"),description:t("restaurant.menu.items.mignon_steak.description","Стейк миньон / картофельное пюре / ромейн / соус демиглас"),price:"1100 THB",image:null,tags:["main","meat"],popular:1,category:"main"},{id:32,name:t("restaurant.menu.items.fried_rice_shrimp.name","Жареный рис с овощами и креветками"),description:t("restaurant.menu.items.fried_rice_shrimp.description","Жареный рис с овощами и креветками"),price:"210 THB",image:null,tags:["main","seafood"],popular:0,category:"main"},{id:33,name:t("restaurant.menu.items.mashed_potatoes_truffle.name","Картофельное пюре с трюфельным маслом"),description:t("restaurant.menu.items.mashed_potatoes_truffle.description","Картофельное пюре с трюфельным маслом"),price:"140 THB",image:null,tags:["side","vegetarian"],popular:0,category:"side"},{id:34,name:t("restaurant.menu.items.broccoli_grill.name","Брокколи на мангале"),description:t("restaurant.menu.items.broccoli_grill.description","Брокколи на мангале / мусс из йогурта и авокадо"),price:"140 THB",image:null,tags:["side","vegetarian","healthy"],popular:0,category:"side"},{id:35,name:t("restaurant.menu.items.steamed_rice.name","Рис на пару"),description:t("restaurant.menu.items.steamed_rice.description","Рис на пару"),price:"90 THB",image:null,tags:["side","vegetarian","vegan"],popular:0,category:"side"},{id:36,name:t("restaurant.menu.items.baked_potatoes_herbs.name","Картофель печеный с зеленью"),description:t("restaurant.menu.items.baked_potatoes_herbs.description","Картофель печеный с зеленью"),price:"140 THB",image:null,tags:["side","vegetarian"],popular:0,category:"side"},{id:37,name:t("restaurant.menu.items.napoleon.name","Наполеон"),description:t("restaurant.menu.items.napoleon.description","Наполеон / соус из белого шоколада"),price:"250 THB",image:null,tags:["dessert","sweet"],popular:0,category:"dessert"},{id:38,name:t("restaurant.menu.items.cheesecake_pistachio.name","Чизкейк"),description:t("restaurant.menu.items.cheesecake_pistachio.description","Чизкейк / фисташковый соус"),price:"270 THB",image:null,tags:["dessert","sweet"],popular:1,category:"dessert"},{id:39,name:t("restaurant.menu.items.chocolate_fondant.name","Шоколадный фондан"),description:t("restaurant.menu.items.chocolate_fondant.description","Шоколадный фондан / ванильное мороженое / варенье из вишни"),price:"250 THB",image:null,tags:["dessert","sweet"],popular:1,category:"dessert"},{id:40,name:t("restaurant.menu.items.tiramisu.name","Тирамису"),description:t("restaurant.menu.items.tiramisu.description","Тирамису"),price:"270 THB",image:null,tags:["dessert","sweet"],popular:0,category:"dessert"},{id:41,name:t("restaurant.menu.items.coconut_pudding_chia.name","Кокосовый пудинг с чиа"),description:t("restaurant.menu.items.coconut_pudding_chia.description","Кокосовый пудинг с чиа / джем манго / кокосовые чипсы"),price:"170 THB",image:null,tags:["dessert","sweet","vegan"],popular:0,category:"dessert"},{id:42,name:t("restaurant.menu.items.italian_gelato.name","Итальянский джелато"),description:t("restaurant.menu.items.italian_gelato.description","Итальянский джелато / ваниль / черный шоколад / соленая карамель"),price:"80 THB",image:null,tags:["dessert","sweet"],popular:1,category:"dessert"}],r=[{key:"breakfast",name:t("restaurant.categories.breakfast","Завтраки"),nameEn:"Breakfast"},{key:"soup",name:t("restaurant.categories.soup","Супы"),nameEn:"Soups"},{key:"salad",name:t("restaurant.categories.salad","Салаты и закуски"),nameEn:"Salads and Appetizers"},{key:"grill",name:t("restaurant.categories.grill","Блюда на мангале"),nameEn:"Dishes on the Mangal"},{key:"main",name:t("restaurant.categories.main","Горячие блюда"),nameEn:"Hot Dishes"},{key:"side",name:t("restaurant.categories.side","Гарниры"),nameEn:"Garnishes"},{key:"dessert",name:t("restaurant.categories.dessert","Десерты"),nameEn:"Desserts"}],i=[{id:1,image:"/images/menu/breakfast/kaif-breakfast.jpg",title:t("restaurant.slider.slide1.title","Изысканная кухня"),description:t("restaurant.slider.slide1.description","Откройте для себя уникальные вкусы пяти разных кухонь мира в нашем ресторане")},{id:2,image:"/images/menu/breakfast/kaif-breakfast.jpg",title:t("restaurant.slider.slide2.title","Атмосфера комфорта"),description:t("restaurant.slider.slide2.description","Наслаждайтесь едой в уютной атмосфере с видом на тропический сад")},{id:3,image:"/images/menu/breakfast/kaif-breakfast.jpg",title:t("restaurant.slider.slide3.title","Свежие ингредиенты"),description:t("restaurant.slider.slide3.description","Мы используем только свежие и качественные ингредиенты для приготовления наших блюд")}]
return{menuItems:a,slides:i,tagStyles:{breakfast:"bg-orange-50 text-orange-600",soup:"bg-blue-50 text-blue-600",salad:"bg-green-50 text-green-600",appetizer:"bg-purple-50 text-purple-600",grill:"bg-red-50 text-red-600",main:"bg-indigo-50 text-indigo-600",dessert:"bg-pink-50 text-pink-600",drinks:"bg-cyan-50 text-cyan-600",popular:"bg-yellow-50 text-yellow-600",vegetarian:"bg-emerald-50 text-emerald-600",vegan:"bg-lime-50 text-lime-600",healthy:"bg-teal-50 text-teal-600",spicy:"bg-red-100 text-red-700",seafood:"bg-blue-100 text-blue-700",meat:"bg-amber-50 text-amber-600",sweet:"bg-rose-50 text-rose-600",cold:"bg-slate-50 text-slate-600",hot:"bg-orange-100 text-orange-700",smoothie:"bg-green-50 text-green-600",mocktail:"bg-purple-50 text-purple-600",juice:"bg-orange-50 text-orange-600",wine:"bg-red-50 text-red-600",fitness:"bg-blue-50 text-blue-600",water:"bg-cyan-50 text-cyan-600",milk:"bg-indigo-50 text-indigo-600",coffee:"bg-amber-50 text-amber-600",signature:"bg-yellow-100 text-yellow-700",coffee_signature:"bg-yellow-100 text-yellow-700",soft_drink:"bg-gray-50 text-gray-600",cocktail:"bg-rose-50 text-rose-600",strong:"bg-red-100 text-red-700",liqueur:"bg-purple-100 text-purple-700",beer:"bg-yellow-50 text-yellow-600",alcohol:"bg-red-50 text-red-600",fitness:"bg-blue-100 text-blue-700","pre-workout":"bg-orange-100 text-orange-700","mass-gainer":"bg-green-100 text-green-700",bcaa:"bg-purple-100 text-purple-700",recovery:"bg-emerald-100 text-emerald-700",electrolyte:"bg-cyan-100 text-cyan-700","fat-burner":"bg-red-100 text-red-700"},getMenuByCategory:()=>({breakfast:a.filter(e=>"breakfast"===e.category),soup:a.filter(e=>"soup"===e.category),salad:a.filter(e=>"salad"===e.category),grill:a.filter(e=>"grill"===e.category),main:a.filter(e=>"main"===e.category),side:a.filter(e=>"side"===e.category),dessert:a.filter(e=>"dessert"===e.category)}),menuCategories:r}})(i)
e.useEffect(()=>{b(6)},[d])
const A=[{id:1,image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",title:i("restaurant.slider.slide1.title","Изысканная кухня"),description:i("restaurant.slider.slide1.description","Откройте для себя уникальные вкусы пяти разных кухонь мира в нашем ресторане")},{id:2,image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",title:i("restaurant.slider.slide2.title","Атмосфера комфорта"),description:i("restaurant.slider.slide2.description","Наслаждайтесь едой в уютной атмосфере с видом на тропический сад")},{id:3,image:"https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",title:i("restaurant.slider.slide3.title","Свежие ингредиенты"),description:i("restaurant.slider.slide3.description","Мы используем только свежие и качественные ингредиенты для приготовления наших блюд")}]
return e.useEffect(()=>(k.current=setInterval(()=>{l(e=>(e+1)%A.length)},5e3),()=>{k.current&&clearInterval(k.current)}),[A.length]),t.jsxs(L,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[t.jsx(r,{titleKey:"page_titles.restaurant",description:i("restaurant.hero.subtitle","Gourmet cuisine with exquisite dishes, fresh ingredients and cozy atmosphere"),keywords:"KAIF restaurant, gourmet cuisine, exquisite dishes, Phuket, breakfast, lunch, dinner",ogImage:"/images/menu/breakfast/kaif-breakfast.jpg",pageType:"restaurant"}),t.jsxs(a,{children:[t.jsx("meta",{name:"description",content:"Ресторан KAIF — авторская кухня с изысканными блюдами, свежими ингредиентами и уютной атмосферой. Завтраки, обеды, ужины и напитки. Забронируйте столик прямо сейчас!"}),t.jsx("meta",{name:"keywords",content:"ресторан KAIF, авторская кухня, изысканные блюда, завтраки, обеды, ужины, бронирование столика, кафе, ресторан Пхукет"}),t.jsx("meta",{name:"description",lang:"en",content:"KAIF Restaurant — gourmet cuisine with exquisite dishes, fresh ingredients and cozy atmosphere. Breakfast, lunch, dinner and beverages. Book your table now!"}),t.jsx("meta",{name:"keywords",lang:"en",content:"KAIF restaurant, gourmet cuisine, exquisite dishes, breakfast, lunch, dinner, table booking, cafe, restaurant Phuket"}),t.jsx("meta",{property:"og:title",content:"Ресторан KAIF — Авторская кухня и изысканные блюда"}),t.jsx("meta",{property:"og:title",lang:"en",content:"KAIF Restaurant — Gourmet Cuisine and Exquisite Dishes"}),t.jsx("meta",{property:"og:description",content:"Авторская кухня с изысканными блюдами, свежими ингредиентами и уютной атмосферой. Завтраки, обеды, ужины и напитки в ресторане KAIF"}),t.jsx("meta",{property:"og:description",lang:"en",content:"Gourmet cuisine with exquisite dishes, fresh ingredients and cozy atmosphere. Breakfast, lunch, dinner and beverages at KAIF Restaurant"}),t.jsx("meta",{property:"og:type",content:"restaurant"}),t.jsx("meta",{property:"og:image",content:"/images/menu/breakfast/kaif-breakfast.jpg"}),t.jsx("meta",{property:"og:url",content:"https://kaif-spa.com/restaurant"}),t.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),t.jsx("meta",{name:"twitter:title",content:"Ресторан KAIF — Авторская кухня и изысканные блюда"}),t.jsx("meta",{name:"twitter:title",lang:"en",content:"KAIF Restaurant — Gourmet Cuisine and Exquisite Dishes"}),t.jsx("meta",{name:"twitter:description",content:"Авторская кухня с изысканными блюдами, свежими ингредиентами и уютной атмосферой. Завтраки, обеды, ужины и напитки"}),t.jsx("meta",{name:"twitter:description",lang:"en",content:"Gourmet cuisine with exquisite dishes, fresh ingredients and cozy atmosphere. Breakfast, lunch, dinner and beverages"}),t.jsx("meta",{name:"twitter:image",content:"/images/menu/breakfast/kaif-breakfast.jpg"}),t.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Restaurant",name:"KAIF Restaurant",description:"Авторская кухня с изысканными блюдами, свежими ингредиентами и уютной атмосферой",url:"https://kaif-spa.com/restaurant",telephone:"+66-XX-XXX-XXXX",address:{"@type":"PostalAddress",streetAddress:"Kathu, Phuket",addressLocality:"Kathu",addressRegion:"Phuket",addressCountry:"TH"},servesCuisine:["Авторская кухня","Gourmet","International"],priceRange:"$$-$$$",image:"/images/menu/breakfast/kaif-breakfast.jpg",hasMenu:"https://kaif-spa.com/restaurant#menu-section"})})]}),t.jsx(n,{}),t.jsx(M,{menuSectionRef:v}),t.jsxs("section",{ref:v,className:"py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white",id:"menu-section",style:{backgroundColor:"white",position:"relative",zIndex:1},children:[t.jsxs(w.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:1},transition:{duration:.7},className:"text-center mb-16",children:[t.jsx(w.span,{style:{display:"inline-block",padding:"8px 20px",borderRadius:"50px",background:"linear-gradient(135deg, rgba(144, 179, 167, 0.1), rgba(168, 197, 184, 0.15))",color:"#90B3A7",fontSize:"14px",fontWeight:"600",letterSpacing:"0.5px",marginBottom:"20px",border:"none"},initial:{scale:.8,opacity:0},whileInView:{scale:1,opacity:1},transition:{duration:.5,delay:.2},children:i("restaurant.menu.tag","Изысканные блюда")}),t.jsx(w.h2,{style:{fontSize:"clamp(2rem, 5vw, 3.5rem)",fontWeight:"700",fontFamily:"Playfair Display, serif",marginBottom:"24px",background:"linear-gradient(135deg, #2C3E2D 0%, #90B3A7 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},initial:{y:20,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.6,delay:.3},children:i("restaurant.menu.title","Наше меню")}),t.jsx(w.p,{style:{fontSize:"18px",color:"#5A6B5D",maxWidth:"600px",margin:"0 auto",lineHeight:"1.6",fontWeight:"400"},initial:{y:20,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.6,delay:.4},children:i("restaurant.menu.description","Откройте для себя разнообразие вкусов в нашем меню, созданном талантливыми шеф-поварами")}),t.jsxs(w.button,{onClick:()=>window.open("/documents/menu.pdf","_blank"),className:"mt-8 inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-gradient-to-r from-[#90B3A7] to-[#A8C5B8] text-white font-semibold shadow-md hover:shadow-lg transition-transform duration-200",whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},children:[t.jsx(m,{className:"w-5 h-5"}),t.jsx("span",{className:"leading-none",children:i("restaurant.menu.download_pdf","Menu PDF")})]})]}),t.jsxs("div",{className:"mb-16",children:[t.jsx(P,{activeCategory:d,setActiveCategory:x}),t.jsx(w.div,{className:"flex justify-center md:justify-end items-center mt-12 mb-8 px-4 md:px-0 sort-container",style:{position:"relative",zIndex:1e4},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},children:t.jsxs(w.div,{className:"flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto",initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},transition:{duration:.6,delay:.2},children:[t.jsx("span",{style:{color:"#5A6B5D",fontWeight:"500",fontSize:"15px",textAlign:"center"},children:i("restaurant.menu.sort_by","Сортировать:")}),t.jsx(K,{sortType:f,setSortType:y,t:i})]})}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-8",children:(e=>{switch(f){case"popular":return[...e].sort((e,t)=>t.popular-e.popular)
case"price_low":return[...e].sort((e,t)=>parseFloat(e.price.replace(/[^\d.]/g,""))-parseFloat(t.price.replace(/[^\d.]/g,"")))
case"price_high":return[...e].sort((e,t)=>parseFloat(t.price.replace(/[^\d.]/g,""))-parseFloat(e.price.replace(/[^\d.]/g,"")))
case"name":return[...e].sort((e,t)=>e.name.localeCompare(t.name))
default:return e}})(j.filter(e=>{const t="all"===d||e.category===d
return e.name.includes("яблоко")||e.name.includes("apple")||e.id,t})).slice(0,h).map((e,a)=>{const r=(n=e.category,["tea","coffee","coffee_signature","smoothie","mocktail","juice","wine","cocktail","strong","liqueur","beer","fitness","water","milk","soft_drink"].includes(n))
var n
return r&&e.category,r&&e.category,e.id,t.jsxs(w.div,{className:"bg-white rounded-2xl overflow-hidden menu-item-card "+(r?"hover:shadow-2xl":""),style:{position:"relative",zIndex:1,border:"2px solid #e0e0e0",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.08)",backgroundColor:"#ffffff",transition:"transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease"},whileHover:{y:-8,scale:r?1.02:1.01,boxShadow:"0 8px 20px rgba(0, 0, 0, 0.12)",borderColor:"#d0d0d0",transition:{duration:.3}},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:1},transition:{duration:.5,delay:a%6*.1},children:[r||!e.image||null===e.image?t.jsx("div",{className:"relative",children:e.popular&&t.jsxs(w.div,{className:"absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10",whileHover:{scale:1.1},initial:{scale:0},animate:{scale:1},transition:{delay:.3,type:"spring",stiffness:500},children:["⭐ ",i("restaurant.menu.popular","Popular")]})}):t.jsxs("div",{className:"h-72 overflow-hidden relative p-0",children:[t.jsx(_,{src:e.image||"/images/placeholder.jpg",alt:e.name,className:"w-full h-full",style:{width:"100%",height:"100%"},loading:"lazy",placeholder:"/images/placeholder.jpg",onError:()=>{},onLoad:()=>{}}),e.popular&&t.jsx("div",{className:"absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full",children:i("restaurant.menu.popular","Popular")})]}),t.jsxs("div",{className:"p-6",children:[t.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:e.tags.map(e=>t.jsx("span",{className:`inline-block px-2 py-1 text-xs font-medium rounded-full ${z[e]||"bg-gray-50 text-gray-600"}`,children:i(`restaurant.menu.tags.${e}`,e.charAt(0).toUpperCase()+e.slice(1))},e))}),t.jsx("h3",{className:"text-xl font-bold mb-2 font-playfair",children:e.name}),t.jsx("p",{className:"text-gray-600 mb-4",children:e.description}),t.jsx("div",{className:"flex justify-between items-center",children:t.jsx("span",{className:"text-primary text-xl font-bold",children:e.price})})]})]},e.id)})}),j.filter(e=>"all"===d||e.category===d).length>h&&t.jsx("div",{className:"text-center mt-8",children:t.jsxs(w.button,{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"12px 30px",fontSize:"14px",fontWeight:"500",letterSpacing:"0.5px",textDecoration:"none",borderRadius:"50px",transition:"all 0.3s ease-out",position:"relative",overflow:"hidden",minWidth:"180px",textAlign:"center",background:"transparent",color:"#90B3A7",border:"2px solid #90B3A7",boxShadow:"none",willChange:"transform, box-shadow",transform:"translateZ(0)",cursor:"pointer"},whileHover:{scale:1.05},whileTap:{scale:.95},onMouseEnter:e=>{e.target.style.transform="translateY(-2px) translateZ(0)",e.target.style.background="#90B3A7",e.target.style.color="white",e.target.style.boxShadow="0 4px 15px rgba(144, 179, 167, 0.2)"},onMouseLeave:e=>{e.target.style.transform="translateZ(0)",e.target.style.background="transparent",e.target.style.color="#90B3A7",e.target.style.boxShadow="none"},onClick:()=>b(e=>e+6),children:[i("restaurant.menu.show_more","Показать еще"),t.jsx(c,{style:{width:"16px",height:"16px",transition:"transform 0.2s ease"}})]})}),t.jsx("div",{className:"text-center mt-12",children:t.jsxs(w.button,{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"16px 35px",fontSize:"14px",fontWeight:"600",letterSpacing:"1px",textTransform:"uppercase",textDecoration:"none",borderRadius:"50px",transition:"all 0.3s ease-out",position:"relative",overflow:"hidden",minWidth:"250px",textAlign:"center",background:"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)",color:"white",border:"2px solid transparent",boxShadow:"0 6px 20px rgba(144, 179, 167, 0.3)",willChange:"transform, box-shadow",transform:"translateZ(0)",cursor:"pointer",zIndex:10},whileHover:{scale:1.05},whileTap:{scale:.95},onMouseEnter:e=>{e.target.style.transform="translateY(-2px) translateZ(0)",e.target.style.boxShadow="0 8px 25px rgba(144, 179, 167, 0.5)",e.target.style.background="linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%)"},onMouseLeave:e=>{e.target.style.transform="translateZ(0)",e.target.style.boxShadow="0 6px 20px rgba(144, 179, 167, 0.3)",e.target.style.background="linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)"},onClick:()=>{var e
null==(e=v.current)||e.scrollIntoView({behavior:"smooth"})},children:[i("restaurant.menu.view_all","Открыть полное меню"),t.jsx(p,{style:{width:"16px",height:"16px",transition:"transform 0.2s ease"}})]})})]})]}),t.jsx(B,{}),t.jsxs("section",{className:"py-24 bg-white relative overflow-hidden",children:[t.jsx(w.div,{className:"absolute top-20 right-20 w-64 h-64 rounded-full bg-primary opacity-5",animate:{scale:[1,1.2,1],rotate:[0,90,0]},transition:{duration:20,repeat:1/0,ease:"easeInOut"}}),t.jsx(w.div,{className:"absolute bottom-20 left-20 w-40 h-40 rounded-full bg-primary opacity-5",animate:{scale:[1,1.3,1],rotate:[0,-90,0]},transition:{duration:15,repeat:1/0,ease:"easeInOut",delay:2}}),t.jsx("div",{className:"max-w-7xl mx-auto px-4 md:px-8 relative z-10",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[t.jsxs(w.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:1},transition:{duration:.7},className:"text-center",children:[t.jsx("span",{className:"inline-block py-1 px-3 rounded-full bg-opacity-10 bg-primary text-primary text-sm font-medium mb-4",children:i("restaurant.booking.label","Бронирование")}),t.jsx("h2",{className:"text-3xl md:text-4xl font-bold font-playfair mb-6",children:i("restaurant.booking.title","Забронируйте стол в нашем ресторане")}),t.jsx("p",{className:"text-lg text-gray-600 mb-8",children:i("restaurant.booking.description","Заранее зарезервируйте столик для особого события или просто для гарантированного места в нашем ресторане.")}),t.jsxs("div",{className:"flex flex-col md:flex-row gap-6 mb-8 justify-center",children:[t.jsxs("div",{className:"flex items-center gap-3 mx-auto",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center",children:t.jsx(g,{className:"w-5 h-5 text-primary"})}),t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"font-medium",children:i("restaurant.booking.open_hours","Часы работы")}),t.jsx("p",{className:"text-gray-500 text-sm",children:"08:00 - 22:00"})]})]}),t.jsxs("div",{className:"flex items-center gap-3 mx-auto",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center",children:t.jsx(u,{className:"w-5 h-5 text-primary"})}),t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"font-medium",children:i("restaurant.booking.reservation","Резервация")}),t.jsx("p",{className:"text-gray-500 text-sm",children:i("common.phone_number")})]})]})]}),t.jsx("div",{className:"flex justify-center gap-4 flex-wrap",children:t.jsxs("a",{href:"tel:+66624805877",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"0.75rem 1.75rem",fontSize:"0.875rem",fontWeight:"600",letterSpacing:"0.5px",textTransform:"uppercase",textDecoration:"none",borderRadius:"50px",transition:"all 0.3s ease-out",position:"relative",overflow:"hidden",minWidth:"180px",textAlign:"center",background:"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)",color:"white",border:"2px solid transparent",boxShadow:"0 4px 15px rgba(144, 179, 167, 0.25)",willChange:"transform, box-shadow",transform:"translateZ(0)"},onMouseEnter:e=>{e.target.style.transform="translateY(-1px) translateZ(0)",e.target.style.boxShadow="0 6px 20px rgba(144, 179, 167, 0.35)",e.target.style.background="linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%)"},onMouseLeave:e=>{e.target.style.transform="translateZ(0)",e.target.style.boxShadow="0 4px 15px rgba(144, 179, 167, 0.25)",e.target.style.background="linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)"},children:[i("restaurant.booking.call_now","Позвонить сейчас"),t.jsx(u,{style:{width:"14px",height:"14px",transition:"transform 0.2s ease"}})]})})]}),t.jsx(w.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:1},transition:{duration:.7},className:"relative mx-auto lg:mx-0 max-w-lg w-full",children:t.jsxs("div",{className:"relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl",children:[t.jsx("img",{src:"/images-optimized/restaurant/booking.jpg",alt:"Restaurant interior",className:"w-full h-full",style:{width:"100%",height:"100%",objectFit:"cover"},loading:"eager"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"})]})})]})})]})]})}
export{V as default}
