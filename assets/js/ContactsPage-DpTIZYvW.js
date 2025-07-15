import{R as e,j as i,a as t,r as a,h as r,J as o,K as n,M as s,O as l,P as h}from"./vendor-react-CiYCyw2Q.js";import{P as d}from"./main-nlBvd7ya.js";import{d as c}from"./vendor-styles-BbzM21L4.js";import{m as p}from"./vendor-animations-BNNrahxh.js";import{C as m,S as v,a as g}from"./CommonComponents-BhaPmDPT.js";import{P as x}from"./PageScrollReset-BkeoSiAQ.js";import"./vendor-other-CZupzcPt.js";import"./vendor-i18n-C4kh69yx.js";const w=()=>{const[i,t]=e.useState(!1);return e.useEffect(()=>{const e=()=>{"undefined"!=typeof window&&t(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),i},b={slideUp:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}},mobileSlideUp:{hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}}}},u=({children:e,delay:t=0,className:a,whileHover:r,as:o="div",...n})=>{const s=w(),l=s?b.mobileSlideUp:b.slideUp,h=!s&&r?r:void 0;return"div"!==o?i.jsx(o,{className:a,...n,children:i.jsx(p.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:s?"0px 0px -30px 0px":"0px 0px -50px 0px",amount:.1},variants:{hidden:l.hidden,visible:{...l.visible,transition:{...l.visible.transition,delay:s?.7*t:t}}},whileHover:h,children:e})}):i.jsx(p.div,{className:a,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:s?"0px 0px -30px 0px":"0px 0px -50px 0px",amount:.1},variants:{hidden:l.hidden,visible:{...l.visible,transition:{...l.visible.transition,delay:s?.7*t:t}}},whileHover:h,...n,children:e})},f=({children:e,delay:t=0,className:a,as:r="div",...o})=>{const n=w();return i.jsx(p.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:n?.3:.4,delay:n?.5*t:t,ease:"easeOut"}}},...o,children:i.jsx(r,{className:a,children:e})})},y=c(p.section)`
  padding: 8rem 0;
  background-color: #f9fafb;
  background-image: linear-gradient(
    135deg,
    rgba(144, 179, 167, 0.08) 0%,
    rgba(255, 255, 255, 0.95) 40%,
    rgba(255, 255, 255, 1) 60%,
    rgba(212, 165, 116, 0.08) 100%
  );
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(144, 179, 167, 0.08) 0%, rgba(144, 179, 167, 0) 70%);
    top: -150px;
    right: -100px;
    z-index: 0;
    opacity: 0.7;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212, 165, 116, 0.08) 0%, rgba(212, 165, 116, 0) 70%);
    bottom: -100px;
    left: -80px;
    z-index: 0;
    opacity: 0.7;
  }
`,z=c.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 3.5rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  
  /* Делаем каждую карточку одинакового размера */
  & > * {
    flex: 0 0 auto;
    width: 160px;
    transform-origin: center bottom;
  }
  
  @media (max-width: 1024px) {
    gap: 1.5rem;
    max-width: 800px;
    
    & > * {
      width: 140px;
    }
  }
  
  @media (max-width: 768px) {
    gap: 1.2rem;
    margin-top: 2.5rem;
    max-width: 600px;
    
    & > * {
      width: 110px;
    }
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-top: 2rem;
    flex-wrap: wrap;
    max-width: 280px;
    
    & > * {
      width: 120px;
    }
  }
`,j=c(p.a)`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1.2rem;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(144, 179, 167, 0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  transform-origin: center bottom;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.8s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border-color: rgba(144, 179, 167, 0.3);
    
    &::before {
      left: 100%;
    }
    
    ${e=>e.bgColor&&`\n      background-color: rgba(${e.bgColor}, 0.04);\n    `}
    
    svg {
      transform: scale(1.15);
    }
  }
  
  &:active {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 1.2rem;
    border-radius: 16px;
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem 1rem;
    gap: 0.8rem;
    border-radius: 14px;
  }
`,C=c.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${e=>e.bgColor||"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: inherit;
    opacity: 0.4;
    filter: blur(10px);
    z-index: -1;
    transform: scale(0.8);
    transition: all 0.4s ease;
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: white;
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.1));
  }
  
  @media (max-width: 768px) {
    width: 54px;
    height: 54px;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
  
  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    
    svg {
      width: 22px;
      height: 22px;
    }
  }
`,k=c.span`
  font-weight: 600;
  color: #2C3E2D;
  font-size: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;c.div`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
  position: relative;
  scroll-behavior: smooth;
`;const A=c(p.section)`
  position: relative;
  padding: 9rem 0 7rem;
  background: linear-gradient(125deg, 
    rgba(144, 179, 167, 0.15) 0%, 
    rgba(240, 245, 242, 0.95) 40%,
    rgba(255, 255, 255, 1) 60%,
    rgba(212, 165, 116, 0.1) 100%
  );
  text-align: center;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2390b3a7' fill-opacity='0.07'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.3;
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -30%;
    right: -10%;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(144, 179, 167, 0.1) 0%, rgba(144, 179, 167, 0) 70%);
    z-index: 0;
    opacity: 0.6;
  }
  
  @media (max-width: 768px) {
    padding: 7rem 0 5rem;
  }
`,E=c(p.div)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,H=c(p.div)`
  max-width: 800px;
  position: relative;
  z-index: 2;
`,B=c(p.div)`
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(144, 179, 167, 0.08) 0%, rgba(144, 179, 167, 0) 70%);
  z-index: 1;
  
  &.top-left {
    top: -5%;
    left: 5%;
    width: 220px;
    height: 220px;
    opacity: 0.6;
  }
  
  &.bottom-right {
    bottom: 10%;
    right: 5%;
    width: 200px;
    height: 200px;
    opacity: 0.5;
    background: radial-gradient(circle, rgba(212, 165, 116, 0.1) 0%, rgba(212, 165, 116, 0) 70%);
  }
  
  @media (max-width: 768px) {
    &.top-left, &.bottom-right {
      width: 150px;
      height: 150px;
    }
  }
`,V=c(p.h1)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.75rem, 5.5vw, 3.75rem);
  font-weight: 700;
  margin-bottom: 1.8rem;
  line-height: 1.15;
  position: relative;
  display: inline-block;
  
  span {
    background: linear-gradient(to right, #2C3E2D, #90B3A7);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, rgba(144, 179, 167, 0.8), rgba(144, 179, 167, 0));
    bottom: -0.8rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 3px;
  }
`,I=c(p.p)`
  font-size: clamp(1.1rem, 2.1vw, 1.35rem);
  margin-bottom: 2.5rem;
  line-height: 1.7;
  color: #5A6B5D;
  font-weight: 400;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 1px;
    background: linear-gradient(90deg, rgba(144, 179, 167, 0.6), rgba(144, 179, 167, 0));
    top: 50%;
    transform: translateY(-50%);
  }
  
  &:before {
    left: -60px;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  &:after {
    right: -60px;
    transform: translateY(-50%) rotate(180deg);
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`,M=c(p.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`,$=c(p.button)`
  background: ${e=>e.primary?"linear-gradient(to right, #90B3A7, #A8C5B8)":"rgba(144, 179, 167, 0.08)"};
  color: ${e=>e.primary?"white":"#2C3E2D"};
  font-weight: 600;
  font-size: 1rem;
  padding: 0.95rem 2rem;
  border-radius: 100px;
  border: ${e=>e.primary?"none":"1px solid rgba(144, 179, 167, 0.3)"};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: ${e=>e.primary?"0 10px 25px rgba(144, 179, 167, 0.3)":"0 4px 15px rgba(0, 0, 0, 0.04)"};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.primary?"0 15px 30px rgba(144, 179, 167, 0.4)":"0 8px 20px rgba(0, 0, 0, 0.08)"};
    background: ${e=>e.primary?"linear-gradient(to right, #90B3A7, #A8C5B8)":"rgba(144, 179, 167, 0.15)"};
    border-color: ${e=>e.primary?"none":"rgba(144, 179, 167, 0.5)"};
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: ${e=>e.primary?"translateX(3px)":"translateY(-2px)"};
  }
`,T=c(p.section)`
  padding: 6rem 0;
  background: #ffffff;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%2390b3a7' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
    width: 100%;
    height: 100%;
    opacity: 0.5;
    top: 0;
    left: 0;
    z-index: 0;
  }
`,_=c.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 6rem;
  align-items: stretch;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,P=c(p.div)`
  background: white;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(144, 179, 167, 0.1);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  text-align: center;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 360px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #90B3A7, #A8C5B8);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
    opacity: 0;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(144, 179, 167, 0.3);
    
    &::after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-5px);
    }
  }
`,R=c.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  position: relative;
  box-shadow: 0 10px 25px rgba(144, 179, 167, 0.25);
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: inherit;
    filter: blur(8px);
    opacity: 0.4;
    z-index: -1;
    transition: opacity 0.3s ease;
  }
  
  svg {
    width: 30px;
    height: 30px;
    color: white;
    transition: transform 0.3s ease;
  }
`,D=c.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #2C3E2D;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 40%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(144, 179, 167, 0.5), transparent);
    bottom: -8px;
    left: 30%;
    border-radius: 2px;
  }
`,F=c.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
`,S=c.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 120px;
  justify-content: center;
`,L=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: #5A6B5D;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #2C3E2D;
    
    svg {
      transform: scale(1.1);
      color: #90B3A7;
    }
  }
  
  svg {
    width: 18px;
    height: 18px;
    color: #90B3A7;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }
`,Y=c.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: auto;
  padding: 0.7rem 1.5rem;
  align-self: center;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  color: #2C3E2D;
  background: rgba(144, 179, 167, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: rgba(144, 179, 167, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
    
    svg {
      transform: translateX(3px);
    }
  }
`,K=c(p.section)`
  padding: 6rem 0;
  background: linear-gradient(135deg, 
    rgba(144, 179, 167, 0.04) 0%, 
    rgba(168, 197, 184, 0.03) 100%
  );
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2390b3a7' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    width: 100%;
    height: 100%;
    opacity: 0.5;
    top: 0;
    left: 0;
    position: absolute;
  }
`,U=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
`,N=c.div`
  border-radius: 24px;
  overflow: hidden;
  height: 450px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  margin-top: 3rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 1px rgba(144, 179, 167, 0.2);
    border-radius: 24px;
    pointer-events: none;
  }
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  
  @media (max-width: 768px) {
    height: 350px;
    border-radius: 16px;
    
    &:after {
      border-radius: 16px;
    }
  }
`,O=()=>{const{t:e,i18n:c}=t(),b=a.useRef(null),[O,J]=a.useState(!1),W=w(),[X,q]=a.useState(0);return a.useEffect(()=>{const e=()=>{q(e=>e+1)};return c.on("languageChanged",e),()=>{c.off("languageChanged",e)}},[c]),a.useEffect(()=>{document.body.classList.add("contacts-page"),window.scrollTo(0,0);const e=setTimeout(()=>{J(!0)},W?50:150);return()=>{document.body.classList.remove("contacts-page"),clearTimeout(e)}},[W]),a.useEffect(()=>{if(O)return W||(document.documentElement.style.scrollBehavior="smooth"),()=>{document.documentElement.style.scrollBehavior=""}},[O,W]),O?i.jsxs("div",{children:[i.jsx(d,{titleKey:"page_titles.contacts",defaultTitle:"KAIF Contacts | Get in Touch with Us",description:"Contact KAIF Jungle Club & Spa in Phuket. Phone, address, working hours and booking information."}),i.jsx(x,{}),i.jsxs(A,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:[i.jsx(B,{className:"top-left",initial:{opacity:0,scale:.8},animate:{opacity:.6,scale:1},transition:{delay:.3,duration:1.2}}),i.jsx(B,{className:"bottom-right",initial:{opacity:0,scale:.8},animate:{opacity:.5,scale:1},transition:{delay:.5,duration:1.2}}),i.jsx(E,{children:i.jsxs(H,{children:[i.jsx(V,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.2,duration:.8},children:i.jsx("span",{children:e("contacts.hero.title","Contacts")})}),i.jsx(I,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.3,duration:.8},children:e("contacts.hero.subtitle","We are always ready to help you and answer all your questions")}),i.jsxs(M,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.4,duration:.8},children:[i.jsxs($,{primary:!0,onClick:()=>{const i=encodeURIComponent(e("contacts.whatsapp.message_general"));window.open(`https://wa.me/66624805877?text=${i}`,"_blank")},whileHover:{scale:1.05},whileTap:{scale:.97},children:[e("contacts.cta.primary","Contact Us"),i.jsx(r,{})]}),i.jsxs($,{onClick:()=>{setTimeout(()=>{const e=["#map-section",'[data-section="map"]','iframe[src*="google.com/maps"]'];let i=null;for(const a of e){const e=document.querySelector(a);if(e){i="IFRAME"===e.tagName&&e.closest("section")||e;break}}if(i)try{i.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}catch(t){const e=i.getBoundingClientRect(),a=window.pageYOffset||document.documentElement.scrollTop,r=e.top+a-100;window.scrollTo({top:r,behavior:"smooth"})}else{const e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);window.scrollTo({top:e-window.innerHeight,behavior:"smooth"})}},150)},whileHover:{scale:1.05},whileTap:{scale:.97},children:[e("contacts.cta.secondary","Our Address"),i.jsx(o,{})]})]})]})})]}),i.jsx(T,{ref:b,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.6},viewport:{once:!0,amount:.2},children:i.jsxs(m,{children:[i.jsx(f,{delay:0,as:v,children:e("contacts.info.title","Contact Us")}),i.jsx(f,{delay:.1,as:g,children:e("contacts.info.subtitle","Choose a convenient way to contact us")}),i.jsxs(_,{children:[i.jsxs(u,{as:P,delay:.1,whileHover:W?void 0:{scale:1.02,transition:{duration:.2}},children:[i.jsxs(F,{children:[i.jsx(R,{children:i.jsx(n,{})}),i.jsx(D,{children:e("contacts.phone.title","Phone")}),i.jsxs(S,{children:[i.jsxs(L,{children:[i.jsx(n,{}),i.jsx("span",{children:"+66 62 480 5877"})]}),i.jsxs(L,{children:[i.jsx(s,{}),i.jsx("span",{children:e("contacts.info.phone.hours","WhatsApp available")})]})]})]}),i.jsxs(Y,{href:`https://wa.me/66624805877?text=${encodeURIComponent(e("contacts.whatsapp.message_contact"))}`,target:"_blank",rel:"noopener noreferrer",children:[e("contacts.buttons.contact","Contact"),i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",width:"16",height:"16",children:i.jsx("path",{fillRule:"evenodd",d:"M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z",clipRule:"evenodd"})})]})]}),i.jsxs(u,{as:P,delay:.15,whileHover:W?void 0:{scale:1.02,transition:{duration:.2}},children:[i.jsxs(F,{children:[i.jsx(R,{children:i.jsx(o,{})}),i.jsx(D,{children:e("contacts.info.address.title","Address")}),i.jsx(S,{children:i.jsxs(L,{children:[i.jsx(o,{}),i.jsx("span",{children:"73, Baan Chalekiri Village, 6 Pra Phuket Keaw Road, Kathu"})]})})]}),i.jsxs(Y,{href:"https://maps.google.com/?q=73+Baan+Chalekiri+Village+Kathu+Phuket",target:"_blank",rel:"noopener noreferrer",children:[e("contacts.buttons.get_directions","Get Directions"),i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",width:"16",height:"16",children:i.jsx("path",{fillRule:"evenodd",d:"M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z",clipRule:"evenodd"})})]})]}),i.jsxs(u,{as:P,delay:.2,whileHover:W?void 0:{scale:1.02,transition:{duration:.2}},children:[i.jsxs(F,{children:[i.jsx(R,{children:i.jsx(l,{})}),i.jsx(D,{children:e("contacts.info.hours.title","Working Hours")}),i.jsxs(S,{children:[i.jsxs(L,{children:[i.jsx(l,{}),i.jsx("span",{children:e("contacts.info.hours.daily","Daily: 7:00 - 22:00")})]}),i.jsxs(L,{children:[i.jsx(h,{}),i.jsx("span",{children:e("contacts.info.hours.booking","Booking 24/7")})]})]})]}),i.jsxs(Y,{href:`https://wa.me/66624805877?text=${encodeURIComponent(e("contacts.whatsapp.message_book"))}`,target:"_blank",rel:"noopener noreferrer",children:[e("contacts.buttons.book","Book Now"),i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",width:"16",height:"16",children:i.jsx("path",{fillRule:"evenodd",d:"M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z",clipRule:"evenodd"})})]})]})]})]})}),i.jsx(y,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.6},viewport:{once:!0,amount:.2},children:i.jsxs(m,{children:[i.jsx(v,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:e("contacts.social.title")}),i.jsx(g,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:e("contacts.social.subtitle")}),i.jsx(p.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.6},viewport:{once:!0,amount:.2},children:i.jsxs(z,{children:[i.jsxs(j,{href:"https://www.instagram.com/kaif.phuket/",target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:.1},viewport:{once:!0},whileHover:{y:-10},whileTap:{scale:.98},bgColor:"225, 48, 108",children:[i.jsx(C,{bgColor:"linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",children:i.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),i.jsx(k,{children:"Instagram"})]}),i.jsxs(j,{href:"https://t.me/kaifphuketchat",target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:.15},viewport:{once:!0},whileHover:{y:-10},whileTap:{scale:.98},bgColor:"0, 136, 204",children:[i.jsx(C,{bgColor:"linear-gradient(135deg, #0088cc 0%, #33A3DC 100%)",children:i.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.789l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"})})}),i.jsx(k,{children:"Telegram"})]}),i.jsxs(j,{href:"https://api.whatsapp.com/send/?phone=66624805877&text&type=phone_number&app_absent=0",target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:.2},viewport:{once:!0},whileHover:{y:-10},whileTap:{scale:.98},bgColor:"37, 211, 102",children:[i.jsx(C,{bgColor:"linear-gradient(135deg, #25D366 0%, #128C7E 100%)",children:i.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"})})}),i.jsx(k,{children:"WhatsApp"})]}),i.jsxs(j,{href:"https://web.facebook.com/kaifphuketfb?mibextid=LQQJ4d&_rdc=1&_rdr#",target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:.25},viewport:{once:!0},whileHover:{y:-10},whileTap:{scale:.98},bgColor:"24, 119, 242",children:[i.jsx(C,{bgColor:"linear-gradient(135deg, #1877F2 0%, #42A5F5 100%)",children:i.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),i.jsx(k,{children:"Facebook"})]}),i.jsxs(j,{href:"https://www.youtube.com/@KaifPhuket",target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:.3},viewport:{once:!0},whileHover:{y:-10},whileTap:{scale:.98},bgColor:"255, 0, 0",children:[i.jsx(C,{bgColor:"linear-gradient(135deg, #FF0000 0%, #FF4500 100%)",children:i.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})}),i.jsx(k,{children:"YouTube"})]})]})})]})}),i.jsx(K,{id:"map-section","data-section":"map",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.6},viewport:{once:!0,amount:.2},children:i.jsxs(U,{children:[i.jsx(v,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.6},viewport:{once:!0},children:e("contacts.map.title")}),i.jsx(g,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.6,delay:.1},viewport:{once:!0},children:e("contacts.map.subtitle")}),i.jsx(N,{as:p.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:i.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.8203398876644!2d98.3510499760479!3d7.9138279921095105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031603c054903%3A0x818d8108ef4f8a55!2sKAIF%20%E2%80%93%20Jungle%20club%20%26%20SPA!5e0!3m2!1sru!2sth!4v1750756305368!5m2!1sru!2sth",width:"600",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"KAIF Jungle Club & SPA Location"})})]})})]},`contacts-${c.language}-${X}`):null};export{O as default};
