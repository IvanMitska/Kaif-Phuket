import{r as e,a as i,j as t,ad as a,s as r}from"./vendor-react-CiYCyw2Q.js";import{d as n}from"./vendor-styles-BbzM21L4.js";import{h as o}from"./main-CR4JusRl.js";import{m}from"./vendor-animations-BNNrahxh.js";import"./vendor-other-CZupzcPt.js";import"./vendor-i18n-C4kh69yx.js";const d=n.section`
  position: relative;
  min-height: 100vh;
  background: url(${o});
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
`,h=n.div`
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
`,p=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
`,s=n(m.div)`
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
`,x=n(m.div)`
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
`,l=n(m.h1)`
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
`,g=n(m.h2)`
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
`,c=n(m.div)`
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
`,w=n(m.button)`
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
`,b=e.memo(()=>{const{t:e}=i();return t.jsx(d,{children:t.jsx(h,{children:t.jsx(p,{children:t.jsxs(s,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[t.jsxs(x,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.3},children:[t.jsx(a,{}),e("spa.hero.badge","Премиум СПА")]}),t.jsx(l,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:e("spa.hero.title","Погрузитесь в мир релаксации и красоты")}),t.jsx(g,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},children:e("spa.hero.subtitle","Профессиональные СПА процедуры в роскошной атмосфере KAIF")}),t.jsx(c,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:t.jsxs(w,{as:"a",href:"https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20на%20СПА%20процедуру%20в%20KAIF",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.02},whileTap:{scale:.98},children:[e("spa.hero.book_whatsapp","WhatsApp"),t.jsx(r,{})]})})]})})})})});b.displayName="SpaHeroSection";export{b as default};
