import{r as e,a as t,j as a,C as i,c as r,D as n,E as o,G as s,I as l,F as d,d as c,J as p,R as m}from"./vendor-react-C8d7Q6_M.js";import{d as f,m as g}from"./vendor-styles-DGlzumVJ.js";import{P as b}from"./PageScrollReset-BkpYX3BD.js";import{P as h}from"./main-BvvD-B-G.js";import{m as x,A as u}from"./vendor-animations-DZaFu96O.js";import"./vendor-other-CZupzcPt.js";import"./vendor-i18n-C4kh69yx.js";f.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${e=>e.$placeholderColor||"#f5f5f5"};
`,f.picture`
  width: 100%;
  height: 100%;
  display: block;
`,f.img`
  width: 100%;
  height: 100%;
  object-fit: ${e=>e.$objectFit||"cover"};
  object-position: ${e=>e.$objectPosition||"center"};
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${e=>e.$loaded?1:0};
  transform: scale(${e=>e.$loaded?1:1.05});
  will-change: opacity, transform;
`,f.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$placeholderColor||"#f5f5f5"};
  display: ${e=>e.$loaded?"none":"block"};
`,f.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${e=>e.$thumbnail?`url(${e.$thumbnail})`:"none"};
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  opacity: ${e=>e.$loaded?0:.7};
  transition: opacity 0.3s;
`,f.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${e=>e.$loaded?0:.5};
  transition: opacity 0.3s;
  width: 24px;
  height: 24px;
  
  &:after {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #90B3A7;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,g`
  0% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.1, 1) rotate(1deg); }
  50% { transform: scale(0.95, 1) rotate(-1deg); }
  75% { transform: scale(1.05, 1) rotate(0.5deg); }
  100% { transform: scale(1) rotate(0deg); }
`,g`
  0% { transform: translateY(0) scale(1); opacity: 0.7; }
  50% { transform: translateY(-20px) scale(1.2); opacity: 0.4; }
  100% { transform: translateY(-40px) scale(1.5); opacity: 0; }
`;const y=g`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35, 0 0 30px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`;g`
  0% { opacity: 0.4; }
  50% { opacity: 0.7; }
  100% { opacity: 0.4; }
`;const w=f.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: #0f0f0f;
`,v=f.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  height: 100%;
`,j=f(x.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  will-change: opacity;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.8) 50%,
      rgba(0, 0, 0, 0.75) 100%
    );
    z-index: 1;
  }
`,k=f.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30s-13.431 30-30 30S0 46.569 0 30 13.431 0 30 0zm0 6c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24S43.255 6 30 6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
  opacity: 0.2;
  z-index: 3;
`;f.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  
  &.left {
    left: 5%;
  }
  
  &.right {
    right: 5%;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,f.img`
  width: auto;
  height: 140px;
  filter: drop-shadow(0 0 15px rgba(255, 147, 53, 0.4));
  object-fit: contain;
`;const z=f.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  text-align: center;
  color: #f5f5f5;
`,$=f(x.div)`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid #ff6b35;
  border-radius: 8px;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  font-weight: 600;
  color: #ff6b35;
  margin-bottom: 3rem;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  &::before {
    content: '᚛';
    font-size: 1.5em;
    animation: ${y} 3s ease-in-out infinite;
  }
  
  &::after {
    content: '᚜';
    font-size: 1.5em;
    animation: ${y} 3s ease-in-out infinite;
  }
`,I=f(x.h1)`
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: 2rem;
  color: #f5f5f5;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(255, 107, 53, 0.3);
  font-family: 'Bebas Neue', 'Arial Black', sans-serif;
  
  .highlight {
    color: #ff6b35;
    animation: ${y} 4s ease-in-out infinite;
  }
`,_=f(x.div)`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 300;
  color: #ffd662;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  letter-spacing: 0.05em;
`,q=f(x.p)`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  color: #cccccc;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  font-weight: 300;
  line-height: 1.4;
`,N=f(x.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`,B=f(x.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: #1a1a1a;
  border: none;
  border-radius: 8px;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 700;
  cursor: pointer;
  min-height: 60px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 10px 30px rgba(255, 107, 53, 0.4),
      0 0 30px rgba(255, 107, 53, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`,C=f(x.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: transparent;
  color: #f5f5f5;
  border: 2px solid #ff6b35;
  border-radius: 8px;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 600;
  cursor: pointer;
  min-height: 60px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 107, 53, 0.1);
    border-color: #ffd662;
    color: #ffd662;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 53, 0.2);
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;f(x.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  color: #ff6b35;
  text-align: center;
  margin: 0;
  padding: 0;
  
  .scroll-text {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .scroll-arrow {
    width: 2px;
    height: 30px;
    background: #ff6b35;
    margin: 0 auto;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: -4px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 8px solid #ff6b35;
    }
  }
`;const A=f.div`
  position: absolute;
  font-size: 2rem;
  color: rgba(255, 107, 53, 0.3);
  z-index: 2;
  
  &.top-left {
    top: 10%;
    left: 10%;
    transform: rotate(-15deg);
  }
  
  &.top-right {
    top: 10%;
    right: 10%;
    transform: rotate(15deg);
  }
  
  &.bottom-left {
    bottom: 10%;
    left: 10%;
    transform: rotate(15deg);
  }
  
  &.bottom-right {
    bottom: 10%;
    right: 10%;
    transform: rotate(-15deg);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,S=e.memo(()=>{const{t:n}=t(),[o,s]=e.useState(0),[l,d]=e.useState(0),c=[{src:"/images/banya/panoramic.png",alt:n("banya.hero.images.panoramic","Panoramic sauna 150 m²")},{src:"/images/banya/private.jpg",alt:n("banya.hero.images.private","Private sauna")},{src:"/images/banya/public.jpg",alt:n("banya.hero.images.public","Public sauna")}];return e.useEffect(()=>{const e=setInterval(()=>{d(e=>(e+1)%c.length)},8e3);return()=>clearInterval(e)},[c.length]),e.useEffect(()=>{const e=setTimeout(()=>{s(l)},1500);return()=>clearTimeout(e)},[l]),a.jsxs(w,{children:[a.jsxs(v,{children:[a.jsx(j,{style:{backgroundImage:`url(${c[o].src})`,opacity:1,zIndex:1}},`current-${o}`),a.jsx(j,{initial:{opacity:0},animate:{opacity:o===l?0:1},transition:{duration:2,ease:"easeInOut"},style:{backgroundImage:`url(${c[l].src})`,zIndex:2}},`next-${l}`)]}),a.jsx(k,{}),a.jsx(A,{className:"top-left",children:"᚛ᚏᚓᚐᚉ᚜"}),a.jsx(A,{className:"top-right",children:"᚛ᚈᚓᚐᚉ᚜"}),a.jsx(A,{className:"bottom-left",children:"᚛ᚄᚐᚒᚈ᚜"}),a.jsx(A,{className:"bottom-right",children:"᚛ᚏᚓᚐᚉ᚜"}),a.jsxs(z,{children:[a.jsx($,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:n("banya.hero.badge","ЛУЧШАЯ БАНЯ ПХУКЕТА")}),a.jsx(I,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,delay:.2},dangerouslySetInnerHTML:{__html:n("banya.hero.title",'Панорамная <span class="highlight">русская баня</span>')}}),a.jsx(_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:n("banya.hero.area","150 квадратных метров")}),a.jsx(q,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:n("banya.hero.subtitle","Баня из сибирского кедра и алтайской липы")}),a.jsxs(N,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:[a.jsxs(B,{onClick:()=>{const e=n("common.phone_number","+66 62 480 5877"),t=encodeURIComponent(n("common.whatsapp_messages.book_banya","Hello! I would like to book the Russian Banya"));window.open(`https://wa.me/${e.replace(/\D/g,"")}?text=${t}`,"_blank")},whileHover:{scale:1.05},whileTap:{scale:.95},children:[a.jsx(i,{}),n("banya.hero.book_button","ЗАБРОНИРОВАТЬ")]}),a.jsxs(C,{onClick:()=>{const e=n("common.phone_number","+66 62 480 5877");window.open(`tel:${e}`,"_self")},whileHover:{scale:1.05},whileTap:{scale:.95},children:[a.jsx(r,{}),n("banya.hero.contacts_button","КОНТАКТЫ")]})]})]})]})}),T=f.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`,V=f(x.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  mix-blend-mode: screen;
  opacity: 0.5;
`,P=({intensity:e="medium",className:t=""})=>a.jsx(T,{className:t,children:a.jsx(V,{style:{opacity:(()=>{switch(e){case"low":return.3;case"medium":default:return.5;case"high":return.7}})(),backgroundImage:"url(/src/assets/effects/banya/overlays/sparks.png)"}})}),E=g`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`,H=g`
  0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(255, 107, 53, 0.3); }
  50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(255, 107, 53, 0.5); }
`,Y=f.section`
  padding: 0;
  margin-top: -1px;
  background: #0f0f0f;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 50%);
    z-index: 1;
  }
`,R=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  position: relative;
  z-index: 2;
`,L=f.div`
  text-align: center;
  margin-bottom: 3rem;
`,M=f.div`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #ff6b35;
  border-radius: 8px;
  color: #ff6b35;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  &::before {
    content: '🔥';
    font-size: 1.2em;
    margin-right: 0.75rem;
  }
`,O=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 0 auto;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,W=f(x.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 26, 0.9) 100%);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff6b35, #ffd662, #ff6b35);
    background-size: 200px 100%;
    animation: shimmer 2s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }

  &:hover {
    border-color: #ff6b35;
    transform: translateY(-10px);
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.5),
      0 0 40px rgba(255, 107, 53, 0.3);
  }

  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
`,K=f.div`
  margin-bottom: 1.5rem;
`,D=f.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`,F=f.div`
  color: #ff6b35;
  font-size: 1.125rem;
  margin-top: 0.5rem;
  font-weight: 500;
  animation: ${E} 4s ease-in-out infinite;
`,U=f.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  margin-top: 0.75rem;
  font-style: italic;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,J=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 107, 53, 0.2);
`,Q=f.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '⏱';
    font-size: 1.2rem;
    animation: ${H} 3s ease-in-out infinite;
  }
`,X=f.div`
  color: #ffd662;
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`,G=f.div`
  position: absolute;
  font-size: 3rem;
  color: rgba(255, 107, 53, 0.1);
  z-index: 1;
  
  &.top-left {
    top: 5%;
    left: 5%;
    transform: rotate(-30deg);
  }
  
  &.bottom-right {
    bottom: 5%;
    right: 5%;
    transform: rotate(30deg);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,Z=()=>{const{t:e}=t(),i=[{id:"light",title:e("banya.services.rituals.light.title"),subtitle:e("banya.services.rituals.light.subtitle"),duration:e("banya.services.rituals.light.duration"),price:e("banya.services.rituals.light.price"),description:e("banya.services.rituals.light.description")},{id:"medium",title:e("banya.services.rituals.medium.title"),subtitle:e("banya.services.rituals.medium.subtitle"),duration:e("banya.services.rituals.medium.duration"),price:e("banya.services.rituals.medium.price"),description:e("banya.services.rituals.medium.description")},{id:"hard",title:e("banya.services.rituals.hard.title"),subtitle:e("banya.services.rituals.hard.subtitle"),duration:e("banya.services.rituals.hard.duration"),price:e("banya.services.rituals.hard.price"),description:e("banya.services.rituals.hard.description")},{id:"valhalla",title:e("banya.services.rituals.valhalla.title"),subtitle:e("banya.services.rituals.valhalla.subtitle"),duration:e("banya.services.rituals.valhalla.duration"),price:e("banya.services.rituals.valhalla.price"),description:e("banya.services.rituals.valhalla.description")}];return a.jsxs(Y,{children:[a.jsx(G,{className:"top-left",children:"᚛ᚃᚔᚏᚓ᚜"}),a.jsx(G,{className:"bottom-right",children:"᚛ᚔᚉᚓ᚜"}),a.jsx(P,{intensity:"low"}),a.jsxs(R,{children:[a.jsx(L,{children:a.jsx(M,{children:e("banya.services.badge")})}),a.jsx(O,{children:i.map((e,t)=>a.jsxs(W,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2*t},children:[a.jsxs(K,{children:[a.jsx(D,{children:e.title}),a.jsx(F,{children:e.subtitle}),a.jsx(U,{children:e.description})]}),a.jsxs(J,{children:[a.jsx(Q,{children:e.duration}),a.jsx(X,{children:e.price})]})]},e.id))})]})]})},ee=g`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`,te=g`
  0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(255, 107, 53, 0.3); }
  50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(255, 107, 53, 0.5); }
`,ae=f.section`
  padding: clamp(6rem, 12vw, 10rem) 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 25% 30%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 75% 70%, rgba(255, 107, 53, 0.08) 0%, transparent 50%);
    z-index: 1;
  }
`,ie=f.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
  z-index: 2;
`,re=f.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,ne=f(x.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #ff6b35;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ff6b35;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  
  &::before,
  &::after {
    content: '⚡';
    font-size: 1.2em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: 0.75rem;
  }

  &::after {
    right: 0.75rem;
    transform: translateY(-50%) rotate(180deg);
  }

  span {
    margin: 0 1.5rem;
  }
`,oe=f(x.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  color: #f5f5f5;
  margin-bottom: 2rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: 'Bebas Neue', 'Arial Black', sans-serif;
  
  .highlight {
    color: #ff6b35;
    animation: ${ee} 4s ease-in-out infinite;
  }
`,se=f(x.p)`
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  line-height: 1.6;
  color: #cccccc;
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,le=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,de=f(x.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 26, 0.9) 100%);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 20px;
  padding: 3rem 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent, rgba(255, 107, 53, 0.1), transparent);
    animation: spin 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    border-color: #ff6b35;
    transform: translateY(-10px);
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.5),
      0 0 40px rgba(255, 107, 53, 0.3);
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,ce=f.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  position: relative;
  z-index: 2;
  animation: ${te} 4s ease-in-out infinite;
  
  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: #1a1a1a;
  }
`,pe=f.h3`
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 2;
`,me=f.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #cccccc;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 2;
`,fe=f.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  position: relative;
  z-index: 2;
`,ge=f.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  color: #cccccc;
  
  &::before {
    content: '⚔️';
    font-size: 1.25rem;
    flex-shrink: 0;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`,be=f.div`
  position: absolute;
  font-size: 3rem;
  color: rgba(255, 107, 53, 0.1);
  z-index: 1;
  
  &.top-left {
    top: 5%;
    left: 5%;
    transform: rotate(-30deg);
  }
  
  &.top-right {
    top: 5%;
    right: 5%;
    transform: rotate(30deg);
  }
  
  &.bottom-center {
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,he=()=>{const{t:e}=t(),i=[{id:"materials",icon:n,title:e("banya.features.materials.title","Natural Materials"),description:e("banya.features.materials.description","100% natural finish from Siberian wood species"),items:[e("banya.features.materials.items.cedar","Siberian Cedar"),e("banya.features.materials.items.linden","Altai Linden"),e("banya.features.materials.items.birch","Karelian Birch"),e("banya.features.materials.items.coating","Eco-friendly finishes"),e("banya.features.materials.items.aromatherapy","Natural aromatherapy")]},{id:"panoramic",icon:o,title:e("banya.features.panoramic.title","Panoramic Design"),description:e("banya.features.panoramic.description","Unique architecture with tropical jungle views"),items:[e("banya.features.panoramic.items.area","150 square meters"),e("banya.features.panoramic.items.windows","Panoramic windows"),e("banya.features.panoramic.items.view","Jungle views"),e("banya.features.panoramic.items.lighting","Natural lighting"),e("banya.features.panoramic.items.harmony","Harmony with nature")]},{id:"safety",icon:s,title:e("banya.features.safety.title","Safety"),description:e("banya.features.safety.description","Compliance with all international safety standards"),items:[e("banya.features.safety.items.fire","Fire safety"),e("banya.features.safety.items.ventilation","Ventilation system"),e("banya.features.safety.items.emergency","Emergency lighting"),e("banya.features.safety.items.medical","Medical assistance"),e("banya.features.safety.items.security","24/7 security")]}];return a.jsxs(ae,{children:[a.jsx(be,{className:"top-left",children:"᚛ᚒᚔᚉᚔᚅᚌ᚜"}),a.jsx(be,{className:"top-right",children:"᚛ᚄᚈᚏᚓᚅᚌᚈᚆ᚜"}),a.jsx(be,{className:"bottom-center",children:"᚛ᚆᚑᚅᚑᚏ᚜"}),a.jsxs(ie,{children:[a.jsxs(re,{children:[a.jsx(ne,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:a.jsx("span",{children:e("banya.features.badge","Best Banya in Phuket")})}),a.jsx(oe,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:a.jsx("span",{dangerouslySetInnerHTML:{__html:e("banya.features.title",'Why Choose <span className="highlight">Us</span>')}})}),a.jsx(se,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:e("banya.features.subtitle","Experience the authentic Russian banya with modern comfort and traditional techniques")})]}),a.jsx(le,{children:i.map((e,t)=>a.jsxs(de,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2*t},children:[a.jsx(ce,{children:a.jsx(e.icon,{})}),a.jsx(pe,{children:e.title}),a.jsx(me,{children:e.description}),a.jsx(fe,{children:e.items.map((e,t)=>a.jsx(ge,{children:e},t))})]},e.id))})]})]})},xe=g`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`,ue=g`
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
  25% { transform: scale(1.1) rotate(2deg); opacity: 1; }
  50% { transform: scale(0.9) rotate(-1deg); opacity: 0.9; }
  75% { transform: scale(1.05) rotate(1deg); opacity: 0.95; }
`,ye=f.section`
  padding: clamp(4rem, 8vw, 6rem) 0 clamp(6rem, 12vw, 10rem) 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
  margin: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 50%);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
    z-index: 2;
  }
`,we=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
  z-index: 2;
`,ve=f.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,je=f(x.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #ff6b35;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ff6b35;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  &::before {
    content: '🔥';
    font-size: 1.2em;
    animation: ${ue} 2s ease-in-out infinite;
  }
`,ke=f(x.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  color: #f5f5f5;
  margin-bottom: 2rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: 'Bebas Neue', 'Arial Black', sans-serif;
  
  .highlight {
    color: #ff6b35;
    animation: ${xe} 4s ease-in-out infinite;
  }
`,ze=f(x.p)`
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  line-height: 1.6;
  color: #cccccc;
  max-width: 700px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,$e=f.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 26, 26, 0.95) 100%);
  border: 2px solid rgba(255, 107, 53, 0.3);
  border-radius: 24px;
  padding: 4rem 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff6b35, #ffd662, #ff6b35);
    background-size: 200px 100%;
    animation: shimmer 2s linear infinite;
  }
  
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
  
  &:hover {
    border-color: #ff6b35;
    box-shadow: 0 20px 40px rgba(255, 107, 53, 0.2);
  }
`,Ie=f.h3`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: #f5f5f5;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: 'Bebas Neue', 'Arial Black', sans-serif;
  
  .highlight {
    color: #ff6b35;
    animation: ${xe} 4s ease-in-out infinite;
  }
`,_e=f.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: #cccccc;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,qe=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Ne=f(x.div)`
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #ff6b35;
    background: rgba(255, 107, 53, 0.15);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
  }
`,Be=f.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  animation: ${ue} 3s ease-in-out infinite;
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #1a1a1a;
  }
`,Ce=f.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 0.75rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,Ae=f.p`
  font-size: 1rem;
  color: #cccccc;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,Se=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`,Te=f(x.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: #1a1a1a;
  border: none;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
  min-width: 200px;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 10px 30px rgba(255, 107, 53, 0.4),
      0 0 30px rgba(255, 107, 53, 0.3);
  
    &::before {
      left: 100%;
    }
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`,Ve=f(x.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: transparent;
  color: #f5f5f5;
  border: 2px solid #ff6b35;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  backdrop-filter: blur(10px);
  min-width: 200px;
  justify-content: center;
  
  &:hover {
    background: rgba(255, 107, 53, 0.1);
    border-color: #ffd662;
    color: #ffd662;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 53, 0.2);
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`,Pe=f.div`
  position: absolute;
  font-size: 6rem;
  color: rgba(255, 107, 53, 0.05);
  z-index: 1;
  
  &.top-left {
    top: 10%;
    left: 5%;
    transform: rotate(-30deg);
  }
  
  &.bottom-right {
    bottom: 10%;
    right: 5%;
    transform: rotate(30deg);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,Ee=()=>{const{t:e}=t(),i=()=>{const t=e("common.phone_number","+66 62 480 5877"),a=encodeURIComponent(e("common.whatsapp_messages.book_banya","Hello! I would like to book the Russian Banya"));window.open(`https://wa.me/${t.replace(/\D/g,"")}?text=${a}`,"_blank")},n=[{icon:l,title:e("banya.booking.contact.whatsapp.title","WhatsApp"),value:e("banya.booking.contact.whatsapp.value","Book via WhatsApp"),action:i},{icon:d,title:e("banya.booking.contact.location.title","Location"),value:e("banya.booking.contact.location.value","Kathu, Phuket"),action:()=>{window.open("https://maps.app.goo.gl/h7PzpHpBeurg7eK18","_blank")}},{icon:c,title:e("banya.booking.contact.hours.title","Hours"),value:e("banya.booking.contact.hours.value","17:00 - 22:00"),action:null}];return a.jsxs(ye,{children:[a.jsx(Pe,{className:"top-left",children:"᚛ᚃᚔᚏᚓ᚜"}),a.jsx(Pe,{className:"bottom-right",children:"᚛ᚔᚉᚓ᚜"}),a.jsxs(we,{children:[a.jsxs(ve,{children:[a.jsx(je,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:e("banya.booking.badge","Booking")}),a.jsx(ke,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:a.jsx("span",{dangerouslySetInnerHTML:{__html:e("banya.booking.title",'Book the <span className="highlight">Banya</span>')}})}),a.jsx(ze,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:e("banya.booking.description","Contact us through convenient channels for booking")})]}),a.jsx(x.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.6},children:a.jsxs($e,{children:[a.jsx(Ie,{children:a.jsx("span",{dangerouslySetInnerHTML:{__html:e("banya.booking.cta.title",'Ready to immerse in the world of <span className="highlight">Russian Banya</span>?')}})}),a.jsx(_e,{children:e("banya.booking.cta.description","Contact us for detailed information about prices, availability and features of our banya programs")}),a.jsx(qe,{children:n.map((e,t)=>a.jsxs(Ne,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.8+.1*t},onClick:e.action,style:{cursor:e.action?"pointer":"default"},children:[a.jsx(Be,{children:a.jsx(e.icon,{})}),a.jsx(Ce,{children:e.title}),a.jsx(Ae,{children:e.value})]},t))}),a.jsxs(Se,{children:[a.jsxs(Te,{onClick:i,whileHover:{scale:1.05},whileTap:{scale:.95},children:[a.jsx(l,{}),e("banya.booking.book_whatsapp_button","Book via WhatsApp")]}),a.jsxs(Ve,{onClick:()=>{const t=e("common.phone_number","+66 62 480 5877");window.open(`tel:${t}`,"_self")},whileHover:{scale:1.05},whileTap:{scale:.95},children:[a.jsx(r,{}),e("banya.booking.call_now_button","Call Now")]})]})]})})]})]})},He=g`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`,Ye=g`
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`,Re=f.section`
  padding: clamp(6rem, 12vw, 10rem) 0 0 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.06) 0%, transparent 50%);
    z-index: 1;
  }
`,Le=f.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
  z-index: 2;
`,Me=f.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,Oe=f(x.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #ff6b35;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ff6b35;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  &::before {
    content: '❓';
    font-size: 1.2em;
  }
`,We=f(x.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  color: #f5f5f5;
  margin-bottom: 2rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: 'Bebas Neue', 'Arial Black', sans-serif;
  
  .highlight {
    color: #ff6b35;
    animation: ${He} 4s ease-in-out infinite;
  }
`,Ke=f(x.p)`
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  line-height: 1.6;
  color: #cccccc;
  max-width: 700px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`,De=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Fe=f(x.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 26, 0.9) 100%);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff6b35, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    border-color: #ff6b35;
    box-shadow: 0 8px 32px rgba(255, 107, 53, 0.2);
  }
`,Ue=f.button`
  width: 100%;
  padding: 2rem 2.5rem;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 107, 53, 0.05);
  }
`,Je=f.h3`
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: ${e=>e.$isOpen?"#ffffff":"#cccccc"};
  margin: 0;
  text-shadow: ${e=>e.$isOpen?"0 0 10px rgba(255, 255, 255, 0.3)":"1px 1px 2px rgba(0, 0, 0, 0.8)"};
  flex: 1;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffffff;
  }
`,Qe=f.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
  animation: ${Ye} 3s ease-in-out infinite;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #1a1a1a;
    transform: ${e=>e.$isOpen?"rotate(180deg)":"rotate(0deg)"};
    transition: transform 0.3s ease;
  }
`,Xe=f(x.div)`
  padding: 0 2.5rem 2rem;
  color: #ffffff;
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.8;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  letter-spacing: 0.01em;
  
  p {
    margin: 0 0 1rem 0;
    color: #ffffff;
    font-weight: 400;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,Ge=f.div`
  position: absolute;
  font-size: 4rem;
  color: rgba(255, 107, 53, 0.08);
  z-index: 1;
  
  &.left {
    top: 20%;
    left: 5%;
    transform: rotate(-20deg);
  }
  
  &.right {
    top: 60%;
    right: 5%;
    transform: rotate(20deg);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,Ze=()=>{const{t:i}=t(),[r,n]=e.useState(null),o=[{question:i("banya.faq.questions.panoramic.question","What's special about the panoramic banya?"),answer:i("banya.faq.questions.panoramic.answer","Our banya is unique with several features: 150 square meters with panoramic jungle windows, built from Siberian cedar and Altai linden - premium natural materials. It's the only panoramic Russian banya in Phuket where you can enjoy traditional banya rituals with tropical nature views.")},{question:i("banya.faq.questions.procedures.question","What procedures are included in the banya ritual?"),answer:i("banya.faq.questions.procedures.answer","Depending on your chosen program you'll receive: classic banya ritual with birch brooms, aromatherapy with essential oils, herbal infusions and teas, option to order massage in the steam room, and personal accompaniment by a master attendant for VIP programs.")},{question:i("banya.faq.questions.materials.question","What materials is the banya built from?"),answer:i("banya.faq.questions.materials.answer","The banya is built exclusively from natural eco-friendly materials: Siberian cedar, Altai linden, Karelian birch. All finishes are natural, without chemical additives. Such materials create a special microclimate and provide natural aromatherapy.")}];return a.jsxs(Re,{children:[a.jsxs(Le,{children:[a.jsxs(Me,{children:[a.jsx(Oe,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:i("banya.faq.badge","Questions & Answers")}),a.jsx(We,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:a.jsx("span",{dangerouslySetInnerHTML:{__html:i("banya.faq.title",'Frequently Asked <span className="highlight">Questions</span>')}})}),a.jsx(Ke,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:i("banya.faq.subtitle","Answers to the most popular questions about our banya")})]}),a.jsx(De,{children:o.map((e,t)=>a.jsxs(Fe,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1*t},children:[a.jsxs(Ue,{onClick:()=>(e=>{n(r===e?null:e)})(t),children:[a.jsx(Je,{$isOpen:r===t,children:e.question}),a.jsx(Qe,{$isOpen:r===t,children:a.jsx(p,{})})]}),a.jsx(u,{children:r===t&&a.jsx(Xe,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},children:a.jsx("p",{children:e.answer})})})]},t))})]}),a.jsx(Ge,{className:"left",children:"ᚠ"}),a.jsx(Ge,{className:"right",children:"ᚢ"})]})},et=f.div`
  background: transparent;
  color: ${e=>e.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`,tt=()=>{const{t:e}=t(),[i,r]=m.useState(!1);return m.useEffect(()=>{document.body.classList.add("banya-page"),window.scrollTo(0,0);const e=setTimeout(()=>{r(!0)},50);return()=>{document.body.classList.remove("banya-page"),clearTimeout(e)}},[]),i?a.jsxs(et,{as:x.div,initial:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},transition:{duration:.2},children:[a.jsx(h,{titleKey:"page_titles.banya",description:e("banya.hero.subtitle","Traditional Russian banya experience"),keywords:"KAIF banya, Russian sauna, traditional banya, steam bath, Phuket",ogImage:"/images/banya/panoramic.jpg"}),a.jsx(b,{}),a.jsx(S,{}),a.jsx(Z,{}),a.jsx(he,{}),a.jsx(Ze,{}),a.jsx(Ee,{})]}):null};export{tt as default};
