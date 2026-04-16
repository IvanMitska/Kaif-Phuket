import{r as e,j as r}from"./react-core-DWAaPJsY.js";import{d as i}from"./styled-components-BY9Yozyu.js";import{g as s}from"./spaData-CEv-faZ5.js";import{u as t}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-Dpgsgh4W.js";const n=i.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,a=i.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,o=i.div`
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
`,l=i.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,m=i.p`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  max-width: 550px;
  margin: 0 0 3rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`,d=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`,c=i.button`
  padding: 0.7rem 1.5rem;
  background: ${e=>e.$active?"#133238":"transparent"};
  color: ${e=>e.$active?"#fffef6":"rgba(19, 50, 56, 0.6)"};
  border: 1px solid ${e=>e.$active?"#133238":"rgba(19, 50, 56, 0.15)"};
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    border-color: #133238;
    color: ${e=>e.$active?"#fffef6":"#133238"};
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
`,p=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,f=i.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  min-height: 240px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`,g=i.div`
  flex: 1;
  margin-bottom: 1.5rem;
`,h=i.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.5rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
`,x=i.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  margin: 0;
`,u=i.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 1.5rem;
  margin-top: auto;
  border-top: 1px solid rgba(19, 50, 56, 0.06);
`,b=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`,v=i.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.35);
`,j=i.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(19, 50, 56, 0.7);
`,w=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
`,y=i.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #133238;
  letter-spacing: -0.02em;
`,$=i.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  line-height: 1.5;
  color: rgba(19, 50, 56, 0.5);
  margin-top: 0.5rem;
`,k=i.div`
  text-align: center;
  margin-top: 3rem;
`,z=i.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: transparent;
  color: rgba(19, 50, 56, 0.6);
  border: 1px solid rgba(19, 50, 56, 0.15);
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #133238;
    color: #133238;
  }

  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
`,ChevronDown=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"6 9 12 15 18 9"})}),ChevronUp=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"18 15 12 9 6 15"})}),SpaServicesSection=()=>{const{t:i}=t(),[J,S]=e.useState("massage"),[F,_]=e.useState(!1),C=s(i),{allServices:P,serviceCategories:L}=C,M=["massage","manicure","pedicure","eyelashes","brows","hair-care","laser","endosphere"],B=L.filter(e=>M.includes(e.id)),D=(E=J,P.filter(e=>e.category===E));var E;const T=F?D:D.slice(0,6);e.useEffect(()=>{_(!1)},[J]),e.useEffect(()=>{var e;B.find(e=>e.id===J)||S((null==(e=B[0])?void 0:e.id)||"massage")},[]);const formatPrice=e=>e.durations&&e.prices?`${Math.min(...e.prices)} - ${Math.max(...e.prices)} ฿`:e.priceFrom&&e.priceTo?`${e.priceFrom} - ${e.priceTo} ฿`:e.priceFrom?i("spa.services.price_from",`от ${e.priceFrom} ฿`,{price:e.priceFrom}):`${e.price} ฿`,formatDurations=e=>e.durations&&e.prices?e.durations.map((r,s)=>i("spa.services.duration_price",`${r} мин - ${e.prices[s]} ฿`,{duration:r,price:e.prices[s]})).join(" · "):null,getDurationDisplay=e=>{if(e.durations){const r=Math.min(...e.durations),i=Math.max(...e.durations);return r===i?`${r} min`:`${r}-${i} min`}return e.duration?`${e.duration} min`:null};return r.jsx(n,{children:r.jsxs(a,{children:[r.jsx(o,{children:i("spa.services.badge","Services")}),r.jsx(l,{children:i("spa.services.title","Our Services")}),r.jsx(m,{children:i("spa.services.subtitle","Full range of SPA and Beauty services for your comfort and beauty")}),r.jsx(d,{children:B.map(e=>r.jsx(c,{$active:J===e.id,onClick:()=>S(e.id),children:e.name},e.id))}),r.jsx(p,{children:T.map(e=>r.jsxs(f,{children:[r.jsxs(g,{children:[r.jsx(h,{children:e.name}),r.jsx(x,{children:e.description}),formatDurations(e)&&r.jsx($,{children:formatDurations(e)})]}),r.jsxs(u,{children:[r.jsx(b,{children:getDurationDisplay(e)&&r.jsxs(r.Fragment,{children:[r.jsx(v,{children:i("spa.services.duration_label","Duration")}),r.jsx(j,{children:getDurationDisplay(e)})]})}),r.jsxs(w,{children:[r.jsx(v,{children:i("spa.services.price_label","Price")}),r.jsx(y,{children:formatPrice(e)})]})]})]},e.id))},J),D.length>6&&r.jsx(k,{children:r.jsxs(z,{onClick:()=>_(!F),children:[F?i("spa.services.show_less","Show less"):i("spa.services.show_more",`Show ${D.length-6} more`,{count:D.length-6}),F?r.jsx(ChevronUp,{}):r.jsx(ChevronDown,{})]})})]})})};export{SpaServicesSection as default};
