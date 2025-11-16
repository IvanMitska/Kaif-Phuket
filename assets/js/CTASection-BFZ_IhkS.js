import{a as e,j as t,au as i,ao as r,J as o}from"./vendor-react-Dj8BKr9E.js";import{d as a}from"./vendor-styles-CqEOfFkH.js";import{m as n}from"./vendor-animations-DXmTBijG.js";import"./vendor-other-CZupzcPt.js";const s=a.section`
  position: relative;
  padding: 8rem 2rem 8rem 2rem;
  overflow: visible;
  margin: 0;
  margin-bottom: 0;
  padding-bottom: 0;

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 5rem 1.5rem;
    padding-bottom: 0;
  }
`,l=a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -100px;
  background: #FFE600;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, transparent 50%),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(0, 0, 0, 0.02) 10px,
        rgba(0, 0, 0, 0.02) 20px
      );
  }
`,p=a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -100px;
  background-image:
    radial-gradient(circle at 15% 20%, rgba(0, 0, 0, 0.08) 0%, transparent 30%),
    radial-gradient(circle at 85% 80%, rgba(0, 0, 0, 0.08) 0%, transparent 30%);
  z-index: 2;
`,d=a(n.div)`
  position: relative;
  z-index: 3;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: white;
`,c=a.h2`
  font-family: ${e=>e.theme.fonts.heading};
  font-size: clamp(3.5rem, 7vw, 6rem);
  font-weight: 900;
  margin-bottom: 2rem;
  line-height: 0.95;
  color: #000000;
  text-shadow: none;
  text-transform: uppercase;
  letter-spacing: -0.04em;
  -webkit-font-smoothing: antialiased;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 6px;
    background: #000000;
  }
`,m=a.p`
  font-size: clamp(1.15rem, 2vw, 1.4rem);
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 3.5rem;
  margin-top: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 600;
  letter-spacing: 0.02em;
`,h=a(n.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,x=a(n.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.8rem 4.5rem;
  background: #000000;
  color: #FFFFFF;
  border: none;
  border-radius: 0;
  font-weight: 900;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #FFFFFF;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
    transition: color 0.4s ease;
  }

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 64px rgba(0, 0, 0, 0.6);

    & > * {
      color: #000000;
    }
  }

  &:hover::before {
    width: 100%;
  }

  &:hover svg:last-child {
    transform: translateX(8px);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    padding: 1.5rem 3rem;
    font-size: 1rem;
  }
`,g=a(n.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.8rem 4.5rem;
  background: transparent;
  color: #000000;
  border: 4px solid rgba(0, 0, 0, 0.4);
  border-radius: 0;
  font-weight: 900;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #000000;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
    transition: color 0.4s ease;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    border-color: #000000;
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);

    & > * {
      color: #FFFFFF;
    }
  }

  &:hover::before {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    padding: 1.5rem 3rem;
    font-size: 1rem;
  }
`,b=()=>{const{t:a}=e();return t.jsxs(s,{children:[t.jsx(l,{}),t.jsx(p,{}),t.jsxs(d,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.7},children:[t.jsx(n.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6,delay:.2},children:t.jsx(c,{children:a("sports.cta.title","Готовы начать?")})}),t.jsx(n.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.3},children:t.jsx(m,{children:a("sports.cta.subtitle","Запишитесь на бесплатную пробную тренировку и начните путь к вашим спортивным целям уже сегодня")})}),t.jsxs(h,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:[t.jsxs(x,{as:"a",href:"https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20на%20бесплатную%20пробную%20тренировку%20в%20KAIF",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05,boxShadow:"0 15px 40px rgba(210, 155, 132, 0.4)"},whileTap:{scale:.95},children:[t.jsx(i,{}),a("sports.cta.primary_button","Записаться на тренировку"),t.jsx(r,{})]}),t.jsxs(g,{as:"a",href:"tel:+66624805877",whileHover:{scale:1.05,borderColor:"rgba(255, 255, 255, 1)"},whileTap:{scale:.95},children:[t.jsx(o,{}),a("sports.cta.secondary_button","Позвонить нам")]})]}),t.jsx(n.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6,delay:.5},style:{fontSize:"0.9rem",color:"rgba(255, 255, 255, 0.7)",marginTop:"1.5rem",textAlign:"center"},children:a("sports.cta.note","Первая тренировка — бесплатно! Без обязательств.")})]})]})};export{b as default};
