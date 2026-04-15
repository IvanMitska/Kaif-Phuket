import{j as e}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-BY9Yozyu.js";import{e as t}from"./events-DVYtoGCZ.js";import{u as o}from"./i18n-core-DrMVsQFB.js";import{aa as i}from"./vendor-misc-Dpgsgh4W.js";const a=r.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;
  touch-action: pan-y;
  overscroll-behavior: auto;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,s=r.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,n=r.div`
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
`,l=r.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`,m=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0;
  max-width: 800px;
`,d=r(i)`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.6);
  text-decoration: none;
  border-bottom: 1px solid rgba(19, 50, 56, 0.2);
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: #133238;
    border-color: #133238;
  }
`,c=r.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0 1.25rem 1rem;
  margin: 0 -1.25rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    overflow-x: visible;
    padding: 0;
    margin: 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,p=r(i)`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  flex: 0 0 82%;
  scroll-snap-align: start;

  @media (min-width: 768px) {
    flex: none;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 16px 40px rgba(19, 50, 56, 0.08);
  }
`,f=r.div`
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #1a1a1a;
`,g=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;

  ${p}:hover & {
    transform: scale(1.03);
  }
`,x=r.div`
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
`,h=r.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: #133238;
  line-height: 1;
  letter-spacing: -0.02em;
`,b=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  color: rgba(19, 50, 56, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 2px;
`,v=r.div`
  padding: 1.25rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,w=r.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #133238;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin: 0;
`,u=r.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(19, 50, 56, 0.55);
`,j=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.75rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.5);

  ${p}:hover & {
    color: #133238;
  }
`,y=r.span`
  transition: transform 0.3s ease;

  ${p}:hover & {
    transform: translateX(4px);
  }
`,k=r.div`
  grid-column: 1 / -1;
  padding: 4rem 2rem;
  text-align: center;
  color: rgba(19, 50, 56, 0.4);
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
`,EventsSection=()=>{const{t:r}=o();return e.jsx(a,{id:"events",children:e.jsxs(s,{children:[e.jsx(n,{children:r("events.overline","What's On")}),e.jsxs(l,{children:[e.jsx(m,{children:r("events.title","Upcoming Events")}),t.length>0&&e.jsxs(d,{to:"/events",children:[r("events.view_all","View all")," →"]})]}),e.jsx(c,{children:t.length>0?t.map(t=>e.jsxs(p,{to:`/events/${t.slug}`,state:{from:"/"},children:[e.jsxs(f,{children:[e.jsx(g,{src:t.image,alt:t.title,loading:"lazy"}),e.jsxs(x,{children:[e.jsx(h,{children:t.date.day}),e.jsx(b,{children:t.date.month})]})]}),e.jsxs(v,{children:[e.jsx(w,{children:t.title}),e.jsx(u,{children:t.hook}),e.jsxs(j,{children:[e.jsx("span",{children:r("events.details","Details")}),e.jsx(y,{children:"→"})]})]})]},t.slug)):e.jsx(k,{children:r("events.empty.text","Check back soon for new events")})})]})})};export{EventsSection as default};
