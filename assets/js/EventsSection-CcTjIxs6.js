import{r as e,j as r}from"./react-core-DWAaPJsY.js";import{d as t}from"./styled-components-CfKEYav0.js";import{u as i}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-DORsZxsB.js";const o=t.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;
  touch-action: pan-y;
  overscroll-behavior: auto;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,n=t.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,a=t.div`
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
`,s=t.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 3rem;
  max-width: 800px;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`,l=t.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,m=t.div`
  flex: 0 0 280px;
  scroll-snap-align: start;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex: none;
  }

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 12px 40px rgba(19, 50, 56, 0.1);
    transform: translateY(-4px);
  }
`,d=t.div`
  position: relative;
  overflow: hidden;
  background: #1a1a1a;
`,c=t.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;

  ${m}:hover & {
    transform: scale(1.02);
  }
`,p=t.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(19, 50, 56, 0.3);
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  gap: 0.75rem;
  background: linear-gradient(
    135deg,
    rgba(144, 179, 167, 0.1) 0%,
    rgba(19, 50, 56, 0.05) 100%
  );

  svg {
    width: 48px;
    height: 48px;
    opacity: 0.4;
  }
`,x=t.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  text-align: center;
  min-width: 50px;
`,f=t.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #133238;
  line-height: 1;
`,g=t.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  color: rgba(19, 50, 56, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 2px;
`,h=t.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`,b=t.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #133238;
  margin: 0 0 0.75rem;
  line-height: 1.3;
  text-transform: uppercase;
`,u=t.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(19, 50, 56, 0.5);
  margin-bottom: 1rem;
`,y=t.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    width: 14px;
    height: 14px;
  }
`,j=t.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    width: 14px;
    height: 14px;
  }
`,v=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,w=t.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #133238;
  background: rgba(144, 179, 167, 0.15);
  padding: 0.35rem 0.6rem;
  border-radius: 4px;
`,k=t.a`
  display: block;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #E8734A 0%, #D4A574 100%);
  padding: 0.75rem 1rem;
  border-radius: 6px;
  text-align: center;
  margin-bottom: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 15px rgba(232, 115, 74, 0.3);
  }
`,z=t.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  line-height: 1.5;
  color: rgba(19, 50, 56, 0.6);
  margin: 0 0 1rem;
`,J=t.a`
  display: block;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #133238;
  background: transparent;
  border: 1px solid rgba(19, 50, 56, 0.2);
  padding: 0.85rem 1.25rem;
  border-radius: 50px;
  text-align: center;
  text-decoration: none;
  transition: all 0.25s ease;
  margin-top: auto;

  &:hover {
    background: #133238;
    color: #fff;
    border-color: #133238;
  }
`,P=t.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  color: rgba(19, 50, 56, 0.4);
  font-family: 'Jost', sans-serif;

  svg {
    width: 64px;
    height: 64px;
    margin-bottom: 1.5rem;
    opacity: 0.3;
  }
`,S=t.div`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: rgba(19, 50, 56, 0.6);
`,L=t.div`
  font-size: 0.9rem;
`,CalendarIcon=()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),ClockIcon=()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("polyline",{points:"12,6 12,12 16,14"})]}),LocationIcon=()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),EventsSection=()=>{const{t:t}=i(),B=e.useMemo(()=>[{id:1,title:"Pool Party",date:{day:"21",month:"FEB"},time:"16:00 – 20:00",location:"Pool",image:"/images/events/pool-party.jpeg",features:["DJ Show","Welcome Drink","Group Steaming"],promo:"1+1 for Special Mocktails",promoLink:"https://wa.me/66624805877?text=Hello!%20I%20want%20to%20register%20for%20Pool%20Party%20on%20February%2021",description:"Music, water, sunset, and mocktails — the perfect vibe to relax and move",bookingLink:"https://wa.me/66624805877?text=Hello!%20I%20want%20to%20book%20Pool%20Party%20on%20February%2021"}],[]);return r.jsx(o,{id:"events",children:r.jsxs(n,{children:[r.jsx(a,{children:t("events.overline","What's On")}),r.jsx(s,{children:t("events.title","Upcoming Events")}),r.jsx(l,{children:B.length>0?B.map(e=>r.jsxs(m,{children:[r.jsxs(d,{children:[e.image?r.jsx(c,{src:e.image,alt:e.title,loading:"lazy"}):r.jsxs(p,{children:[r.jsx(CalendarIcon,{}),r.jsx("span",{children:"Poster"})]}),r.jsxs(x,{children:[r.jsx(f,{children:e.date.day}),r.jsx(g,{children:e.date.month})]})]}),r.jsxs(h,{children:[r.jsx(b,{children:e.title}),r.jsxs(u,{children:[r.jsxs(y,{children:[r.jsx(ClockIcon,{}),e.time]}),r.jsxs(j,{children:[r.jsx(LocationIcon,{}),e.location]})]}),e.features&&e.features.length>0&&r.jsx(v,{children:e.features.map((e,t)=>r.jsx(w,{children:e},t))}),e.promo&&e.promoLink&&r.jsx(k,{href:e.promoLink,target:"_blank",rel:"noopener noreferrer",children:e.promo}),e.description&&r.jsx(z,{children:e.description}),e.bookingLink&&r.jsx(J,{href:e.bookingLink,target:"_blank",rel:"noopener noreferrer",children:t("common.book_now","Book Now")})]})]},e.id)):r.jsxs(P,{children:[r.jsx(CalendarIcon,{}),r.jsx(S,{children:t("events.empty.title","No upcoming events")}),r.jsx(L,{children:t("events.empty.text","Check back soon for new events")})]})})]})})};export{EventsSection as default};
