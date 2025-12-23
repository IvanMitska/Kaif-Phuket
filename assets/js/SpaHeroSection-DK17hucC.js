import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as t}from"./styled-components-fuCKgGld.js";import{Y as a}from"./YclientsModal-73bqYTGE.js";import{B as r}from"./BookingModal-DgblHROr.js";import{u as o}from"./i18n-core-DrMVsQFB.js";import{I as n,n as m,J as d}from"./heroicons-DSEs4UIN.js";import{m as s}from"./framer-motion-DOblPXrY.js";import"./vendor-misc-D8JVgYt7.js";const p=t.section`
  position: relative;
  min-height: 100vh;
  background: url(${"/assets/images/hero-restaurant-B-WOCk0r.jpg"});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg, 
      rgba(0, 0, 0, 0.5) 0%, 
      rgba(0, 0, 0, 0.3) 60%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    background-attachment: scroll;
    min-height: 100vh; /* Оставляем полную высоту чтобы скрыть "Наши услуги" */
    padding: 4rem 0;
  }
  
  @media (max-width: 480px) {
    min-height: 100vh; /* Полная высота экрана на мобильных */
    padding: 3rem 0;
  }
`,h=t.div`
  position: relative;
  z-index: 2;
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
  
  @media (max-width: 480px) {
    padding: 0 2rem;
  }
`,l=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
`,x=t(s.div)`
  position: relative;
  text-align: center;
  max-width: 800px;
  width: 100%;
  z-index: 10;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    max-width: 95%;
    padding: 0 0.5rem;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0;
  }
`,c=t(s.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #D4A574;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    margin-bottom: 3rem;
    
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`,g=t(s.h1)`
  font-size: clamp(2.2rem, 6vw, 3.8rem);
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 100%;
  word-wrap: break-word;
  hyphens: auto;
  
  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 5vw, 2.5rem);
    margin-bottom: 2rem;
    line-height: 1.3;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.6rem, 6vw, 2rem);
    margin-bottom: 2.5rem;
    line-height: 1.4;
  }
`,w=t(s.h2)`
  font-size: clamp(1.125rem, 2.2vw, 1.4rem);
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 3rem;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  word-wrap: break-word;
  
  @media (max-width: 768px) {
    margin-bottom: 3.5rem;
    font-size: clamp(1.1rem, 3vw, 1.25rem);
    line-height: 1.6;
    max-width: 95%;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1rem, 4vw, 1.2rem);
    margin-bottom: 4rem;
    line-height: 1.6;
    max-width: 100%;
  }
`,b=t(s.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    width: auto;
  }
  
  @media (max-width: 768px) {
    gap: 1rem;
    max-width: 90%;
    flex-direction: column;
  }
  
  @media (max-width: 480px) {
    gap: 0.75rem;
    max-width: 95%;
    flex-direction: column;
  }
`,f=t(s.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0;
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  height: 46px;
  width: 220px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  box-sizing: border-box;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
    height: 48px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    height: 46px;
    font-size: 0.9rem;
    max-width: 240px;
    
    svg {
      width: 0.95rem;
      height: 0.95rem;
    }
  }
`,u=e.memo(()=>{const{t:t}=o(),[s,u]=e.useState(!1),[y,v]=e.useState(!1);return i.jsxs(p,{children:[i.jsx(h,{children:i.jsx(l,{children:i.jsxs(x,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[i.jsxs(c,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.3},children:[i.jsx(n,{}),t("spa.hero.badge","Премиум СПА")]}),i.jsx(g,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:t("spa.hero.title","Погрузитесь в мир релаксации и красоты")}),i.jsx(w,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},children:t("spa.hero.subtitle","Профессиональные СПА процедуры в роскошной атмосфере KAIF")}),i.jsxs(b,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[i.jsxs(f,{onClick:()=>u(!0),whileHover:{scale:1.02},whileTap:{scale:.98},children:[i.jsx(m,{}),t("spa.hero.book_online","Онлайн-запись")]}),i.jsxs(f,{onClick:()=>v(!0),whileHover:{scale:1.02},whileTap:{scale:.98},children:[i.jsx(d,{}),t("spa.hero.book_form","Оставить заявку")]})]})]})})}),i.jsx(a,{isOpen:s,onClose:()=>u(!1),customUrl:"https://n1329009.alteg.io"}),i.jsx(r,{isOpen:y,onClose:()=>v(!1),service:t("spa.booking.service","SPA-процедура"),source:"SPA страница - Hero"})]})});u.displayName="SpaHeroSection";export{u as default};
