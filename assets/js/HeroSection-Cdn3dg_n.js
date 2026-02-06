import{r as e,j as t}from"./react-core-DWAaPJsY.js";import{d as i}from"./styled-components-CfKEYav0.js";import{u as n}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-DORsZxsB.js";const a=i.section`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  background: #000;
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box !important;

  @media (max-width: 768px) {
    height: 100vh;
    height: -webkit-fill-available;
    height: 100dvh;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    min-height: 100dvh;
  }
`,r=i.div`
  position: absolute;
  inset: 0;
  background-image: url('/images/restaurant/restaurant.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.6) 0%,
      rgba(0,0,0,0.4) 50%,
      rgba(0,0,0,0.5) 100%
    );
    z-index: 2;
    pointer-events: none;
  }
`,o=i.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,s=i.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  @media (max-width: 480px) {
    padding: 0 1.5rem;
  }
`,l=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,m=i.span`
  display: block;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(4.5rem, 12vw, 9rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(3.5rem, 16vw, 6rem);
    line-height: 1.05;
  }

  @media (max-width: 480px) {
    font-size: clamp(3rem, 18vw, 5rem);
  }
`,d=i.span`
  display: block;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.35em;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    font-size: 0.65rem;
    margin-top: 2rem;
  }
`,HeroSection=()=>{const{t:e}=n();return t.jsxs(a,{children:[t.jsx(r,{}),t.jsx(o,{children:t.jsx(s,{children:t.jsxs(l,{children:[t.jsx(m,{children:e("restaurant.hero.title_line1","Restaurant")}),t.jsx(d,{children:e("restaurant.hero.location","Phuket")})]})})})]})};HeroSection.displayName="HeroSection";const c=e.memo(HeroSection);export{c as default};
