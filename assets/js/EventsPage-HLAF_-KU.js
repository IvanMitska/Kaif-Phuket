import{r as e,j as t}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-BY9Yozyu.js";import{P as i}from"./PageHead-DVihzIO-.js";import{P as a}from"./PageScrollReset-CpzNA0Jq.js";import{e as s,l as n}from"./events-USx80m1m.js";import{u as o}from"./i18n-core-DrMVsQFB.js";import{aa as l}from"./vendor-misc-Dpgsgh4W.js";import"./react-helmet-xz8aecK8.js";const m=r.section`
  position: relative;
  padding: 8rem 0 6rem;
  background-color: #fffef6;
  min-height: 80vh;

  @media (min-width: 768px) {
    padding: 10rem 0 8rem;
  }
`,d=r.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,p=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(19, 50, 56, 0.25);
    margin-right: 1rem;
  }
`,f=r.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
`,c=r.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  margin: 0 0 3rem;
  max-width: 600px;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`,g=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,x=r(l)`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  border: 1px solid ${e=>e.$featured?"#C9A652":"rgba(19, 50, 56, 0.08)"};
  box-shadow: ${e=>e.$featured?"0 10px 28px rgba(0, 0, 0, 0.12)":"none"};
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${e=>e.$featured?"#C9A652":"rgba(19, 50, 56, 0.15)"};
    box-shadow: ${e=>e.$featured?"0 18px 40px rgba(0, 0, 0, 0.18)":"0 16px 40px rgba(19, 50, 56, 0.08)"};
  }
`,h=r.div`
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  background: linear-gradient(135deg, #9B7A30 0%, #C9A652 50%, #E2CB99 100%);
  color: #1A0A08;
  font-family: 'Jost', sans-serif;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.4);

  &::before,
  &::after {
    content: '✦';
    font-size: 0.65rem;
    color: #4A0910;
  }
`,b=r.div`
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #1a1a1a;
`,u=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 55%;
  display: block;
  transition: transform 0.5s ease;

  ${x}:hover & {
    transform: scale(1.03);
  }
`,v=r.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  text-align: center;
  min-width: 54px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
`,j=r.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: #133238;
  line-height: 1;
  letter-spacing: -0.02em;
`,w=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  color: rgba(19, 50, 56, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 2px;
`,y=r.div`
  padding: 1.25rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,k=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #133238;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin: 0;
`,z=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(19, 50, 56, 0.55);
`,$=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.75rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.5);

  ${x}:hover & {
    color: #133238;
  }
`,A=r.span`
  transition: transform 0.3s ease;

  ${x}:hover & {
    transform: translateX(4px);
  }
`,F=r.div`
  padding: 4rem 0;
  color: rgba(19, 50, 56, 0.45);
  font-family: 'Jost', sans-serif;
  font-size: 1rem;
`,J=e.memo(()=>{const{t:e,i18n:r}=o(),l=(r.language||"en").split("-")[0],J=s.map(e=>n(e,l));return t.jsxs(t.Fragment,{children:[t.jsx(i,{titleKey:"page_titles.events",defaultTitle:"KAIF Events | Upcoming Parties, Fights & Festivals",description:"Upcoming events at KAIF Sauna & Spa Phuket: festivals, fight nights, pool parties and banya experiences."}),t.jsx(a,{}),t.jsx(m,{children:t.jsxs(d,{children:[t.jsx(p,{children:e("events.overline","What's On")}),t.jsx(f,{children:e("events.page_title","Events at KAIF")}),t.jsx(c,{children:e("events.page_subtitle","Festivals, fight nights and seasonal experiences — all happening at KAIF.")}),0===J.length?t.jsx(F,{children:e("events.empty.text","Check back soon for new events")}):t.jsx(g,{children:J.map(r=>t.jsxs(x,{to:`/events/${r.slug}`,state:{from:"/events"},$featured:r.featured,children:[t.jsxs(b,{children:[t.jsx(u,{src:r.image,alt:r.title,loading:"lazy"}),r.featured&&t.jsx(h,{children:e("events.featured","Featured")}),t.jsxs(v,{children:[t.jsx(j,{children:r.date.day}),t.jsx(w,{children:r.date.month})]})]}),t.jsxs(y,{children:[t.jsx(k,{children:r.title}),t.jsx(z,{children:r.hook}),t.jsxs($,{children:[t.jsx("span",{children:e("events.details","Details")}),t.jsx(A,{children:"→"})]})]})]},r.slug))})]})})]})});export{J as default};
