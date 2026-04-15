import{j as e}from"./react-core-DWAaPJsY.js";import{d as i}from"./styled-components-BY9Yozyu.js";import{u as r}from"./i18n-core-DrMVsQFB.js";import{g as t,h as a,a as s,i as o}from"./heroicons-CckZQ0I5.js";import"./vendor-misc-Dpgsgh4W.js";const n=i.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,d=i.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,p=i.div`
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
  margin: 0 0 4rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 3rem;
  }
`,c=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,f=i.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`,x=i.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(19, 50, 56, 0.04);
  border: 1px solid rgba(19, 50, 56, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #133238;
  transition: all 0.3s ease;

  svg {
    width: 22px;
    height: 22px;
  }

  ${f}:hover & {
    background: #133238;
    border-color: #133238;
    color: #fffef6;
  }
`,h=i.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.75rem;
  text-transform: uppercase;
  letter-spacing: -0.01em;
`,g=i.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.5);
  font-weight: 400;
  margin: 0;
`,SpaFeaturesSection=()=>{const{t:i}=r(),u=[{id:1,icon:e.jsx(t,{}),title:i("spa.features.premium_quality.title","Premium Quality"),description:i("spa.features.premium_quality.description","We use only the best products and equipment for all treatments")},{id:2,icon:e.jsx(a,{}),title:i("spa.features.full_relaxation.title","Full Relaxation"),description:i("spa.features.full_relaxation.description","Creating an atmosphere of comfort for your relaxation and rest")},{id:3,icon:e.jsx(s,{}),title:i("spa.features.experienced_masters.title","Experienced Masters"),description:i("spa.features.experienced_masters.description","Specialists with years of experience and continuous skill development")},{id:4,icon:e.jsx(o,{}),title:i("spa.features.individual_approach.title","Individual Approach"),description:i("spa.features.individual_approach.description","We consider your preferences and needs for maximum results")}];return e.jsx(n,{children:e.jsxs(d,{children:[e.jsx(p,{children:i("spa.features.badge","Why Choose Us")}),e.jsx(l,{children:i("spa.features.title","Why Choose Us")}),e.jsx(m,{children:i("spa.features.subtitle","We strive to provide you with an exceptional relaxation and care experience")}),e.jsx(c,{children:u.map(i=>e.jsxs(f,{children:[e.jsx(x,{children:i.icon}),e.jsx(h,{children:i.title}),e.jsx(g,{children:i.description})]},i.id))})]})})};export{SpaFeaturesSection as default};
