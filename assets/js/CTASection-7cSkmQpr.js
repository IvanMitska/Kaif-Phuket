import{j as e}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-DYLnJpui.js";import{u as t}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-DORsZxsB.js";const i=r.section`
  position: relative;
  padding: 6rem 0;
  background-image: url('/images/sports/fight-club/fight-2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }

`,n=r.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`,o=r.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,a=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255, 254, 246, 0.4);
  margin-bottom: 1.25rem;
  display: inline-flex;
  align-items: center;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(255, 254, 246, 0.2);
  }

  &::before { margin-right: 1rem; }
  &::after { margin-left: 1rem; }
`,s=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #fffef6;
  text-transform: uppercase;
  margin: 0 0 1.5rem;
`,m=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 254, 246, 0.55);
  font-weight: 400;
  max-width: 550px;
  margin: 0 auto 3rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
  }
`,d=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.25rem;
  }
`,l=r.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: #fffef6;
  color: #133238;
  border: none;
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }
`,p=r.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: transparent;
  color: rgba(255, 254, 246, 0.8);
  border: 1px solid rgba(255, 254, 246, 0.2);
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    border-color: rgba(255, 254, 246, 0.5);
    color: #fffef6;
  }
`,CTASection=()=>{const{t:r}=t();return e.jsxs(i,{children:[e.jsx(n,{}),e.jsxs(o,{children:[e.jsx(a,{children:r("sports.cta.badge","Get Started")}),e.jsx(s,{children:r("sports.cta.title","Ready to Begin?")}),e.jsx(m,{children:r("sports.cta.subtitle","Sign up for a training session and start your journey to your fitness goals today")}),e.jsxs(d,{children:[e.jsx(l,{onClick:()=>{const e=encodeURIComponent("Hello! I would like to book a training session at KAIF.");window.open(`https://wa.me/66624805877?text=${e}`,"_blank")},children:r("sports.cta.primary_button","Book a Training")}),e.jsx(p,{href:"tel:+66624805877",children:r("sports.cta.secondary_button","Call Us")})]})]})]})};export{CTASection as default};
