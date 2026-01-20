import{r as e,j as t}from"./react-core-DWAaPJsY.js";import{d as i}from"./styled-components-fuCKgGld.js";import{u as a}from"./i18n-core-DrMVsQFB.js";import{A as r,m as n}from"./framer-motion-DOblPXrY.js";import{A as o,B as s,C as l}from"./heroicons-JeCSnvNC.js";import"./vendor-misc-D8JVgYt7.js";const useTouchGestures=(t,i)=>{const[a,r]=e.useState(null),[n,o]=e.useState(null),[s,l]=e.useState(null),[d,c]=e.useState(null),[m,p]=e.useState(!1);return{onTouchStart:e.useCallback(e=>{const t=e.targetTouches[0];o(null),c(null),r(t.clientX),l(t.clientY),p(!1)},[]),onTouchMove:e.useCallback(e=>{const t=e.targetTouches[0];if(o(t.clientX),c(t.clientY),null!==s){const e=Math.abs(t.clientY-s);e>Math.abs(t.clientX-a)&&e>10&&p(!0)}},[a,s]),onTouchEnd:e.useCallback(e=>{if(m||!a||!n||!s||!d)return;const r=a-n,o=Math.abs(s-d),l=Math.abs(r)>60,c=o>20;if(!c&&l&&!c){const e=r<0;r>0&&t&&t(),e&&i&&i()}},[a,n,s,d,m,t,i]),style:{touchAction:"pan-y"}}},d=i(n.section)`
  position: relative;
  padding: 6rem 0;
  background: linear-gradient(135deg, #fafafa 0%, #ffffff 50%, #f8fffe 100%);
  overflow: hidden;
  min-height: auto;
  /* Оптимизация производительности */
  will-change: auto;
  transform: translateZ(0);
  
  @media (max-width: 1024px) {
    padding: 4rem 0;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
    min-height: auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(144, 179, 167, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(212, 165, 116, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(232, 115, 74, 0.03) 0%, transparent 60%);
    pointer-events: none;
  }
`,c=i(n.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`,m=i(n.div)`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`,p=i(n.p)`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #90B3A7;
  margin-bottom: 1rem;
  opacity: 0.9;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    letter-spacing: 2px;
  }
`,h=i(n.h2)`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 600;
  color: #2C3E2D;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.3;
  }
`,g=i(n.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  color: #5A6B5D;
  max-width: 800px;
  margin: 0 auto 2.5rem;
  line-height: 1.8;
  font-weight: 400;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`,x=i(n.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`,u=i(n.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.25s ease-out;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  min-width: 140px;
  text-align: center;
  /* Оптимизация производительности */
  will-change: transform, background-color, box-shadow;
  transform: translateZ(0);
  
  background: ${({active:e})=>e?"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)":"rgba(255, 255, 255, 0.1)"};
  color: ${({active:e})=>e?"white":"#2C3E2D"};
  box-shadow: ${({active:e})=>e?"0 8px 32px rgba(144, 179, 167, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)":"0 4px 20px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)"};
  backdrop-filter: blur(25px);
  border: 1px solid ${({active:e})=>e?"rgba(255, 255, 255, 0.3)":"rgba(255, 255, 255, 0.15)"};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.8s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    opacity: 0;
    transition: all 0.4s ease;
    border-radius: 50px;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-4px) scale(1.03);
    color: ${({active:e})=>"white"};
    background: ${({active:e})=>"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)"};
    box-shadow: ${({active:e})=>e?"0 12px 45px rgba(144, 179, 167, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4)":"0 8px 35px rgba(144, 179, 167, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5)"};
    border-color: rgba(255, 255, 255, 0.4);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 0;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 0.8rem;
    min-width: 120px;
    letter-spacing: 1.2px;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 1.75rem;
    font-size: 0.75rem;
    min-width: 100px;
    letter-spacing: 1px;
  }
`,f=i(n.div)`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  background: transparent;
  touch-action: pan-y;
  will-change: auto;
  pointer-events: auto;
  
  @media (max-width: 768px) {
    margin: 2rem auto;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    margin: 1.5rem auto;
    border-radius: 12px;
  }
`,b=i(n.div)`
  display: flex;
  width: 100%;
  height: 100%;
  will-change: transform;
  background: transparent;
  margin: 0;
  padding: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
  touch-action: pan-y;
`,w=i(n.div)`
  flex-shrink: 0;
  width: 100%;
  height: 650px;
  position: relative;
  background: transparent;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: none;
  pointer-events: auto;
  will-change: auto;
  
  @media (max-width: 768px) {
    height: 500px;
  }
  
  @media (max-width: 480px) {
    height: 400px;
  }
`,y=i(n.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  will-change: auto;
  backface-visibility: hidden;
  transform: translateZ(0);
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  vertical-align: top;
  object-position: ${e=>e.$customPosition||"center"};
  loading: lazy;
  pointer-events: auto;
  
  &:hover {
    transition: opacity 0.3s ease-out;
    opacity: 0.95;
  }
`,v=i(n.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2.5rem 3rem;
  background: transparent;
  color: white;
  pointer-events: none;
  
  @media (max-width: 768px) {
    padding: 2rem 2.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 2rem;
  }
`,k=i(n.h3)`
  font-family: 'Playfair Display', serif;
  font-size: 1.875rem;
  font-weight: 500;
  margin: 0;
  color: white;
  text-shadow: 
    0 0 20px rgba(0, 0, 0, 0.9),
    0 2px 8px rgba(0, 0, 0, 0.8),
    0 4px 16px rgba(0, 0, 0, 0.7),
    0 8px 32px rgba(0, 0, 0, 0.5);
  pointer-events: auto;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;i(n.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  color: white;
  opacity: 0.95;
  line-height: 1.7;
  max-width: 600px;
  text-shadow: 
    0 0 16px rgba(0, 0, 0, 0.9),
    0 2px 6px rgba(0, 0, 0, 0.8),
    0 4px 12px rgba(0, 0, 0, 0.5);
  pointer-events: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;const j=i(n.button)`
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) translateZ(0) !important;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: #2C3E2D;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-out;
  z-index: 10;
  opacity: 0.8;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  /* Оптимизация производительности */
  will-change: transform, opacity;
  
  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.03) translateZ(0) !important;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.97) translateZ(0) !important;
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    
    &:hover {
      transform: translateY(-50%) !important;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }
  
  &.prev {
    left: 1rem;
  }
  
  &.next {
    right: 1rem;
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    width: 2.25rem;
    height: 2.25rem;
    
    &.prev {
      left: 0.75rem;
    }
    
    &.next {
      right: 0.75rem;
    }
    
    svg {
      width: 0.875rem;
      height: 0.875rem;
    }
  }
  
  @media (max-width: 480px) {
    width: 2rem;
    height: 2rem;
    
    &.prev {
      left: 0.5rem;
    }
    
    &.next {
      right: 0.5rem;
    }
    
    svg {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`,C=i(n.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`,z=i(n.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    max-width: 95vw;
    max-height: 95vh;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 0;
  }
`,S=i(n.img)`
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  display: block;
  
  @media (max-width: 480px) {
    max-height: 60vh;
  }
`,A=i(n.div)`
  padding: 2rem;
  
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    font-weight: 600;
    color: #2C3E2D;
    margin-bottom: 0.75rem;
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }
  
  p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: #5A6B5D;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,E=i(n.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`,I=i(n.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${({disabled:e})=>e?.5:1};
  pointer-events: ${({disabled:e})=>e?"none":"auto"};
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #7DA096 0%, #90B3A7 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.3);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
`,B=i(n.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: scale(1.1);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 480px) {
    top: 0.75rem;
    right: 0.75rem;
    width: 40px;
    height: 40px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`,GallerySection=()=>{const{t:i}=a(),[O,M]=e.useState("all"),[$,T]=e.useState(0),[D,Y]=e.useState(0),{isOpen:L,content:P,open:Z,close:H}=(()=>{const[t,i]=e.useState(!1),[a,r]=e.useState(null),n=e.useCallback(e=>{r(e),i(!0),document.body.style.overflow="hidden"},[]),o=e.useCallback(()=>{i(!1),r(null),document.body.style.overflow="auto"},[]);return e.useEffect(()=>{if(!t)return;const handleEscape=e=>{"Escape"===e.key&&o()};return document.addEventListener("keydown",handleEscape),()=>document.removeEventListener("keydown",handleEscape)},[t,o]),{isOpen:t,content:a,open:n,close:o}})(),[V,N]=((t,i)=>{const[a,r]=e.useState(()=>{try{const e=window.localStorage.getItem(t);return e?JSON.parse(e):i}catch(e){return i}}),n=e.useCallback(e=>{try{const i=e instanceof Function?e(a):e;r(i),window.localStorage.setItem(t,JSON.stringify(i))}catch(i){}},[t,a]),o=e.useCallback(()=>{try{window.localStorage.removeItem(t),r(i)}catch(e){}},[t,i]);return[a,n,o]})("gallery-liked-images",[]),{getOptimizedAnimation:R,isReducedMotion:X}=(()=>{const[t,i]=e.useState(!1),[a,r]=e.useState(!1);e.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");i(e.matches);const handleChange=e=>i(e.matches);return e.addEventListener("change",handleChange),"hardwareConcurrency"in navigator&&r(navigator.hardwareConcurrency<=2),()=>e.removeEventListener("change",handleChange)},[]);const n=e.useCallback(e=>t?{duration:0}:a?{...e,duration:.7*(e.duration||.5)}:e,[t,a]);return{isReducedMotion:t,isSlowDevice:a,getOptimizedAnimation:n}})(),[q,F]=((t={})=>{const[i,a]=e.useState(null),[r,n]=e.useState(!1),[o,s]=e.useState(!1);return e.useEffect(()=>{if(!i)return;const e=new IntersectionObserver(([e])=>{n(e.isIntersecting),e.isIntersecting&&!o&&s(!0)},{threshold:.1,rootMargin:"20px",...t});return e.observe(i),()=>{i&&e.unobserve(i)}},[i,o,t]),[a,r,o]})({threshold:.1}),J=e.useMemo(()=>[{id:1,image:"/images/spa/services/thai-massage.jpg",title:i("gallery.slides.thai_massage.title","Thai Massage"),category:"spa",description:i("gallery.slides.thai_massage.description","Traditional Thai massage performed by experienced masters. Energy restoration and body harmony.")},{id:2,image:"/images/spa/services/aromatherapy.jpg",title:i("gallery.slides.aromatherapy.title","Aromatherapy"),category:"spa",description:i("gallery.slides.aromatherapy.description","Relaxing treatments with premium natural essential oils.")},{id:3,image:"/images/sports/gym/gym-1.jpg",title:i("gallery.slides.gym.title","Gym"),category:"fitness",description:i("gallery.slides.gym.description","Over 70 modern premium equipment. Professional equipment for all types of workouts.")},{id:4,image:"/images/beauty/services/facial.jpg",title:i("gallery.slides.facial.title","Cosmetology"),category:"relax",description:i("gallery.slides.facial.description","Professional facial treatments using premium cosmetics.")}],[i]),W=e.useMemo(()=>[{id:"all",label:i("gallery.filters.all")},{id:"spa",label:i("gallery.filters.spa")},{id:"fitness",label:i("gallery.filters.fitness")}],[i]),_=e.useMemo(()=>"all"===O?J:J.filter(e=>e.category===O),[O,J]);e.useEffect(()=>{Y(0)},[O]);const G=e.useCallback(e=>{M(e)},[]),K=e.useCallback(()=>{Y(e=>(e+1)%_.length)},[_.length]),Q=e.useCallback(()=>{Y(e=>(e-1+_.length)%_.length)},[_.length]),[U,ee]=e.useState(!0);e.useEffect(()=>{if(_.length<=1||!U||!F)return;const e=setInterval(()=>{Y(e=>(e+1)%_.length)},4e3);return()=>clearInterval(e)},[_.length,U,F]);const te=e.useCallback(()=>{ee(!1)},[]),ie=e.useCallback(()=>{ee(!0)},[]),ae=useTouchGestures(K,Q);e.useCallback(e=>{N(t=>{const i=[...t],a=i.indexOf(e);return a>-1?i.splice(a,1):i.push(e),i})},[N]);const re=e.useCallback((e,t)=>{T(t),Z(e)},[Z]),ne=e.useCallback(e=>{const t="next"===e?($+1)%_.length:($-1+_.length)%_.length;T(t),Z(_[t])},[$,_,Z]),oe=useTouchGestures(()=>ne("next"),()=>ne("prev"));return e.useEffect(()=>{if(!L)return;const handleKeyDown=e=>{switch(e.key){case"Escape":H();break;case"ArrowLeft":ne("prev");break;case"ArrowRight":ne("next")}};return document.addEventListener("keydown",handleKeyDown),()=>document.removeEventListener("keydown",handleKeyDown)},[L,H,ne]),t.jsxs(d,{id:"gallery",ref:q,children:[t.jsxs(c,{children:[t.jsxs(m,{children:[t.jsx(p,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:R({duration:.8,ease:"easeOut"}),viewport:{once:!0},children:i("gallery.overline")}),t.jsx(h,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:R({duration:.8,delay:.2,ease:"easeOut"}),viewport:{once:!0},children:i("gallery.title")}),t.jsxs(g,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:R({duration:.8,delay:.4,ease:"easeOut"}),viewport:{once:!0},children:[i("gallery.subtitle"),"Познакомьтесь с нашими услугами и возможностями комплекса."]})]}),t.jsx(x,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:R({duration:.8,delay:.6,ease:"easeOut"}),viewport:{once:!0},children:W.map((e,i)=>t.jsx(u,{active:O===e.id,onClick:()=>G(e.id),initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:R({duration:.5,delay:.7+.1*i}),viewport:{once:!0},whileHover:X?{}:{scale:1.05},whileTap:X?{}:{scale:.95},children:e.label},e.id))}),F&&_.length>0&&t.jsx(r,{mode:"wait",children:t.jsxs(f,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:R({duration:.4,ease:"easeInOut"}),onMouseEnter:te,onMouseLeave:ie,...ae,style:{...ae.style,overscrollBehavior:"auto",WebkitOverscrollBehavior:"auto"},children:[t.jsx(b,{animate:{x:`-${100*D}%`},transition:{type:"tween",ease:"easeOut",duration:.4},children:_.map((e,i)=>t.jsxs(w,{children:[t.jsx(y,{src:e.image,alt:e.title,onClick:()=>re(e,i),loading:"lazy",$customPosition:"Тайский массаж"===e.title?"center bottom":"center"}),t.jsx(v,{children:t.jsx(k,{children:e.title})})]},`${O}-${e.id}`))}),_.length>1&&t.jsxs(t.Fragment,{children:[t.jsx(j,{className:"prev",onClick:Q,whileHover:{scale:1.05},whileTap:{scale:.95},disabled:_.length<=1,children:t.jsx(o,{})}),t.jsx(j,{className:"next",onClick:K,whileHover:{scale:1.05},whileTap:{scale:.95},disabled:_.length<=1,children:t.jsx(s,{})})]})]},O)})]}),t.jsx(r,{children:L&&P&&t.jsx(C,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:R({duration:.3}),onClick:H,...oe,style:{...oe.style,overscrollBehavior:"contain"},children:t.jsxs(z,{onClick:e=>e.stopPropagation(),initial:{scale:.8,opacity:0,y:50},animate:{scale:1,opacity:1,y:0},exit:{scale:.8,opacity:0,y:30},transition:R({duration:.4,ease:[.25,.1,.25,1]}),children:[t.jsx(S,{src:P.image,alt:P.title,initial:{opacity:0},animate:{opacity:1},transition:R({duration:.5,delay:.2})}),t.jsxs(A,{children:[t.jsx(n.h3,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:R({duration:.5,delay:.3}),children:P.title}),t.jsx(n.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:R({duration:.5,delay:.4}),children:P.description}),t.jsxs(E,{children:[t.jsxs(I,{onClick:()=>ne("prev"),disabled:0===$,whileHover:X?{}:{scale:1.05},whileTap:X?{}:{scale:.95},children:[t.jsx(o,{}),"Предыдущее"]}),t.jsxs("span",{style:{color:"#5A6B5D",fontSize:"0.875rem",fontWeight:"500"},children:[$+1," из ",_.length]}),t.jsxs(I,{onClick:()=>ne("next"),disabled:$===_.length-1,whileHover:X?{}:{scale:1.05},whileTap:X?{}:{scale:.95},children:["Следующее",t.jsx(s,{})]})]})]}),t.jsx(B,{onClick:H,whileHover:X?{}:{scale:1.1,rotate:90},whileTap:X?{}:{scale:.9},children:t.jsx(l,{})})]})})})]})};export{GallerySection,GallerySection as default};
