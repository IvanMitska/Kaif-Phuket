import{r as e,j as r}from"./react-core-DWAaPJsY.js";import{d as s}from"./styled-components-BY9Yozyu.js";import{P as i}from"./PageHead-DVihzIO-.js";import{P as a}from"./PageScrollReset-CpzNA0Jq.js";import{g as t,b as o,s as n}from"./sportsDirections-CNBh_bYw.js";import{u as l}from"./i18n-core-DrMVsQFB.js";import{ab as d,a9 as c,a8 as m}from"./vendor-misc-Dpgsgh4W.js";import{a as p,b as f,c as g}from"./heroicons-B_QlOOyR.js";import"./react-helmet-xz8aecK8.js";const h=s.div`
  background-color: #fffef6;
  min-height: 100vh;
  padding: 8rem 0 6rem;

  @media (min-width: 768px) {
    padding: 10rem 0 8rem;
  }
`,x=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,u=s.button`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.55);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 2.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: #133238;
  }
`,b=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: start;
  margin-bottom: 5rem;

  @media (min-width: 900px) {
    grid-template-columns: 1.05fr 1fr;
    gap: 3.5rem;
  }
`,y=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,j=s.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 16px;
  background: #1a1a1a;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 0.3s ease;
  }
`,v=s.div`
  display: grid;
  grid-template-columns: repeat(${e=>e.$count}, 1fr);
  gap: 0.6rem;
`,w=s.button`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${e=>e.$active?"#133238":"transparent"};
  padding: 0;
  cursor: pointer;
  background: #1a1a1a;
  transition: border-color 0.2s ease, transform 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: ${e=>e.$active?1:.75};
    transition: opacity 0.2s ease;
  }

  &:hover {
    border-color: rgba(19, 50, 56, 0.5);
    img { opacity: 1; }
  }
`,k=s.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,$=s.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
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
`,z=s.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0;
`,J=s.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.1rem;
  line-height: 1.55;
  color: rgba(19, 50, 56, 0.75);
  margin: 0;
`,K=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 0.5rem 0 0.25rem;
`,S=s.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: rgba(19, 50, 56, 0.55);

  svg {
    width: 18px;
    height: 18px;
    color: rgba(19, 50, 56, 0.4);
  }
`,D=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin: 0.5rem 0 0.25rem;
`,P=s.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  color: rgba(19, 50, 56, 0.7);

  svg {
    width: 18px;
    height: 18px;
    color: rgba(19, 50, 56, 0.35);
    flex-shrink: 0;
  }
`,C=s.p`
  font-family: 'Jost', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(19, 50, 56, 0.7);
  margin: 0;
`,T=s.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.75rem;
`,_=s.a`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fffef6;
  background: #133238;
  padding: 1rem 1.75rem;
  border-radius: 50px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #0a1f22;
    transform: translateY(-1px);
  }
`,N=s.a`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #133238;
  background: transparent;
  padding: 1rem 1.75rem;
  border: 1px solid rgba(19, 50, 56, 0.2);
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #133238;
    color: #fffef6;
    border-color: #133238;
  }
`,F=s.section`
  margin-bottom: 4rem;
`,I=s.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1.5rem;
`,A=s.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,B=s.button`
  padding: 0.6rem 1.2rem;
  background: ${e=>e.$active?"#133238":"transparent"};
  color: ${e=>e.$active?"#fffef6":"rgba(19, 50, 56, 0.6)"};
  border: 1px solid ${e=>e.$active?"#133238":"rgba(19, 50, 56, 0.15)"};
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: ${e=>e.$active?"600":"400"};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #133238;
    color: ${e=>e.$active?"#fffef6":"#133238"};
  }

  .short { display: none; }
  .full { display: inline; }

  @media (max-width: 768px) {
    padding: 0.5rem 0.95rem;
    font-size: 0.75rem;
    .short { display: inline; }
    .full { display: none; }
  }
`,E=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,H=s.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`,U=s.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 800;
  color: #133238;
  background: rgba(19, 50, 56, 0.04);
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  width: fit-content;

  svg {
    width: 14px;
    height: 14px;
    color: rgba(19, 50, 56, 0.4);
  }
`,G=s.h4`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: #133238;
  margin: 0;
  line-height: 1.2;
`,L=s.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(19, 50, 56, 0.45);

  svg {
    width: 14px;
    height: 14px;
    color: rgba(19, 50, 56, 0.3);
  }
`,M=s.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.25rem;
  background: transparent;
  color: #133238;
  border: 1px solid rgba(19, 50, 56, 0.15);
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #133238;
    color: #fffef6;
    border-color: #133238;
  }
`,R=s.div`
  text-align: center;
  padding: 2.5rem;
  color: rgba(19, 50, 56, 0.4);
  font-family: 'Jost', sans-serif;
  font-size: 1rem;
  grid-column: 1 / -1;
  border: 1px dashed rgba(19, 50, 56, 0.12);
  border-radius: 12px;
`,Y=s.div`
  padding: 1.5rem 1.75rem;
  background: rgba(19, 50, 56, 0.04);
  border-radius: 12px;
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  color: rgba(19, 50, 56, 0.7);
  line-height: 1.6;
`,q=e.memo(()=>{const{t:s}=l(),{direction:q}=d(),O=c(),Q=t(q),[V,W]=e.useState(0),[X,Z]=e.useState("monday");if(e.useEffect(()=>{const e=(new Date).getDay();Z(["monday","monday","tuesday","wednesday","thursday","friday","saturday"][e])},[]),!Q)return r.jsx(m,{to:"/sports",replace:!0});const ee=s(Q.titleKey,Q.defaultTitle),re=s(Q.tagKey,Q.defaultTag),se=s(Q.descriptionKey,Q.defaultDescription),ie=s(Q.longDescriptionKey,Q.defaultLongDescription),ae=s(Q.extraDescriptionKey,Q.defaultExtraDescription),te=Q.schedule&&Q.schedule[X]||[];return r.jsxs(r.Fragment,{children:[r.jsx(i,{titleKey:`page_titles.sports_${Q.id}`,defaultTitle:`${ee} · KAIF Sports`,description:se,ogImage:Q.images[0]}),r.jsx(a,{}),r.jsx(h,{children:r.jsxs(x,{children:[r.jsxs(u,{type:"button",onClick:()=>O("/sports"),children:["← ",s("sports.direction.back","Back to Sports")]}),r.jsxs(b,{children:[r.jsxs(y,{children:[r.jsx(j,{children:r.jsx("img",{src:Q.images[V],alt:ee,loading:"eager"},V)}),Q.images.length>1&&r.jsx(v,{$count:Q.images.length,children:Q.images.map((e,s)=>r.jsx(w,{$active:V===s,onClick:()=>W(s),"aria-label":`${ee} ${s+1}`,children:r.jsx("img",{src:e,alt:"",loading:"lazy"})},e))})]}),r.jsxs(k,{children:[r.jsx($,{children:re}),r.jsx(z,{children:ee}),r.jsx(J,{children:se}),r.jsxs(K,{children:[r.jsxs(S,{children:[r.jsx(p,{}),r.jsx("span",{children:Q.hours})]}),r.jsxs(S,{children:[r.jsx(f,{}),r.jsx("span",{children:s("sports.facilities.capacity","Up to {{count}}",{count:Q.capacity})})]})]}),r.jsx(D,{children:Q.features.map((e,i)=>r.jsxs(P,{children:[r.jsx(g,{}),r.jsx("span",{children:s(e.key,e.default)})]},i))}),r.jsxs(T,{children:[r.jsx(_,{href:o(Q.whatsappMessage),target:"_blank",rel:"noopener noreferrer",children:s("sports.facilities.book_button","Book a Session")}),r.jsx(N,{href:"tel:+66624805877",children:s("events.call","Call us")})]})]})]}),r.jsxs(F,{children:[r.jsx(I,{children:s("sports.direction.about","About")}),r.jsx(C,{children:ie}),ae&&r.jsx(C,{style:{marginTop:"1rem"},children:ae})]}),r.jsxs(F,{children:[r.jsx(I,{children:s("sports.direction.schedule","Schedule")}),Q.schedule?r.jsxs(r.Fragment,{children:[r.jsx(A,{children:n.map(e=>r.jsxs(B,{$active:X===e.key,onClick:()=>Z(e.key),children:[r.jsx("span",{className:"full",children:s(`sports.schedule.days.${e.labelKey}`)}),r.jsx("span",{className:"short",children:s(`sports.schedule.days.${e.shortKey}`)})]},e.key))}),r.jsx(E,{children:0===te.length?r.jsx(R,{children:s("sports.schedule.no_classes","No classes on this day")}):te.map((e,i)=>r.jsxs(H,{children:[r.jsxs(U,{children:[r.jsx(p,{}),r.jsx("span",{children:e.time})]}),r.jsx(G,{children:s(`sports.schedule.classes.${e.titleKey}`)}),r.jsxs(L,{children:[r.jsx(p,{}),e.duration," ",s("sports.schedule.minutes","min")]}),r.jsx(M,{onClick:()=>(e=>{const r=s(`sports.schedule.classes.${e.titleKey}`),i=s(`sports.schedule.days.${X}`),a=`Hello! I would like to book a class at KAIF.\n\nDirection: ${ee}\nClass: ${r}\nDay: ${i}\nTime: ${e.time}`;window.open(o(a),"_blank","noopener,noreferrer")})(e),children:s("sports.schedule.book","Sign Up")})]},i))})]}):r.jsx(Y,{children:s(Q.scheduleNoteKey,Q.scheduleNoteDefault)})]})]})})]})});export{q as default};
