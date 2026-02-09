import{j as e}from"./react-core-DWAaPJsY.js";import{d as i}from"./styled-components-CfKEYav0.js";import{u as t}from"./i18n-core-DrMVsQFB.js";import{k as r,f as s,h as n,l as o,d as a,m as l}from"./heroicons-lHooInKB.js";import"./vendor-misc-DORsZxsB.js";const d=i.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,p=i.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,m=i.div`
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
`,f=i.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,c=i.p`
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
`,h=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,g=i.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`,u=i.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(19, 50, 56, 0.04);
  margin-bottom: 1.5rem;

  svg {
    width: 24px;
    height: 24px;
    color: #133238;
  }
`,x=i.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.5rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
`,b=i.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  margin: 0;
`,y=[{icon:r,titleKey:"sports.benefits.premium.title",descriptionKey:"sports.benefits.premium.description",defaultTitle:"Premium Equipment",defaultDescription:"Machines from world-leading manufacturers Technogym and Life Fitness"},{icon:s,titleKey:"sports.benefits.trainers.title",descriptionKey:"sports.benefits.trainers.description",defaultTitle:"Professional Trainers",defaultDescription:"Certified specialists with international experience"},{icon:n,titleKey:"sports.benefits.schedule.title",descriptionKey:"sports.benefits.schedule.description",defaultTitle:"Flexible Schedule",defaultDescription:"Open from 07:00 to 22:00 every day of the week"},{icon:o,titleKey:"sports.benefits.technology.title",descriptionKey:"sports.benefits.technology.description",defaultTitle:"Modern Technology",defaultDescription:"Progress monitoring and personalized training programs"},{icon:a,titleKey:"sports.benefits.atmosphere.title",descriptionKey:"sports.benefits.atmosphere.description",defaultTitle:"Comfortable Atmosphere",defaultDescription:"Spacious halls with air conditioning and panoramic windows"},{icon:l,titleKey:"sports.benefits.safety.title",descriptionKey:"sports.benefits.safety.description",defaultTitle:"Safety First",defaultDescription:"Insurance, medical oversight and compliance with all standards"}],BenefitsSection=()=>{const{t:i}=t();return e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(m,{children:i("sports.benefits.tag","Why Choose Us")}),e.jsx(f,{children:i("sports.benefits.title_plain","Advantages")}),e.jsx(c,{children:i("sports.benefits.subtitle","Everything you need for effective training")}),e.jsx(h,{children:y.map((t,r)=>{const s=t.icon;return e.jsxs(g,{children:[e.jsx(u,{children:e.jsx(s,{})}),e.jsx(x,{children:i(t.titleKey,t.defaultTitle)}),e.jsx(b,{children:i(t.descriptionKey,t.defaultDescription)})]},r)})})]})})};export{BenefitsSection as default};
