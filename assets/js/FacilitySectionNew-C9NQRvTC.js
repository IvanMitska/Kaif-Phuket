import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as t}from"./styled-components-BY9Yozyu.js";import{u as s}from"./i18n-core-DrMVsQFB.js";import{h as a,f as r,i as o}from"./heroicons-lHooInKB.js";import"./vendor-misc-Dpgsgh4W.js";const n=t.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,l=t.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,f=t.div`
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
`,d=t.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,p=t.p`
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
`,m=t.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,c=t.div`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`,g=t.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
`,h=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${c}:hover & {
    transform: scale(1.03);
  }
`,u=t.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.4rem;
  z-index: 2;
`,x=t.button`
  width: ${e=>e.$active?"20px":"6px"};
  height: 6px;
  border-radius: 3px;
  border: none;
  background: ${e=>e.$active?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
`,y=t.div`
  padding: 1.75rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,b=t.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 0.75rem;
`,w=t.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.35rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.75rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
`,j=t.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  margin: 0 0 1.25rem;
`,k=t.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
`,v=t.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(19, 50, 56, 0.5);

  svg {
    width: 16px;
    height: 16px;
    color: rgba(19, 50, 56, 0.35);
  }
`,K=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,z=t.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  color: rgba(19, 50, 56, 0.65);

  svg {
    width: 16px;
    height: 16px;
    color: rgba(19, 50, 56, 0.3);
    flex-shrink: 0;
  }
`,T=t.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.9rem 1.5rem;
  background: #133238;
  color: #fffef6;
  border: none;
  border-radius: 50px;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.15);
    transform: translateY(-1px);
  }
`,J=[{id:"gym",images:["/images/sports/gym/gym-1.jpg","/images/sports/gym/gym-2.jpg","/images/sports/gym/gym-3.jpg"],tagKey:"sports.facilities.gym.tag",defaultTag:"Gym",titleKey:"sports.facilities.gym.title",defaultTitle:"Modern Gym",descriptionKey:"sports.facilities.gym.short_description",defaultDescription:"Premium equipment from Technogym and Life Fitness for effective workouts",hours:"07:00 – 22:00",capacity:"40",features:[{key:"sports.facilities.gym.feature1",default:"Cardio zone"},{key:"sports.facilities.gym.feature2",default:"Free weights area"},{key:"sports.facilities.gym.feature3",default:"Functional training"}],whatsappMessage:"Hello! I would like to book a gym session at KAIF"},{id:"fight",images:["/images/sports/fight-club/fight-1.jpg","/images/sports/fight-club/fight-2.jpg","/images/sports/fight-club/fight-3.jpg"],tagKey:"sports.facilities.fight.tag",defaultTag:"Martial Arts",titleKey:"sports.facilities.fight.title",defaultTitle:"Fight Club",descriptionKey:"sports.facilities.fight.short_description",defaultDescription:"Professional ring and equipment for boxing, Muay Thai and Jiu-Jitsu",hours:"07:00 – 22:00",capacity:"25",features:[{key:"sports.facilities.fight.feature1",default:"Professional ring"},{key:"sports.facilities.fight.feature2",default:"Heavy bags and speed bags"},{key:"sports.facilities.fight.feature3",default:"Champion trainers"}],whatsappMessage:"Hello! I would like to book a fight club session at KAIF"},{id:"dance",images:["/images/hero/fitnes.jpg"],tagKey:"sports.facilities.dance.tag",defaultTag:"Dance & Fitness",titleKey:"sports.facilities.dance.title",defaultTitle:"Dance Studio",descriptionKey:"sports.facilities.dance.short_description",defaultDescription:"Spacious studio for dance, yoga and group fitness programs",hours:"07:00 – 22:00",capacity:"30",features:[{key:"sports.facilities.dance.feature1",default:"Mirror walls"},{key:"sports.facilities.dance.feature2",default:"Professional flooring"},{key:"sports.facilities.dance.feature3",default:"Sound system"}],whatsappMessage:"Hello! I would like to book a dance class at KAIF"},{id:"swim",images:["/images/zones/pool.jpg"],tagKey:"sports.facilities.swim.tag",defaultTag:"Swimming",titleKey:"sports.facilities.swim.title",defaultTitle:"Swimming Pool",descriptionKey:"sports.facilities.swim.short_description",defaultDescription:"25-meter pool for swimming, aqua aerobics and kids lessons",hours:"07:00 – 22:00",capacity:"20",features:[{key:"sports.facilities.swim.feature1",default:"25-meter pool"},{key:"sports.facilities.swim.feature2",default:"Aqua aerobics classes"},{key:"sports.facilities.swim.feature3",default:"Kids swimming lessons"}],whatsappMessage:"Hello! I would like to book a swimming session at KAIF"}],FacilitySectionNew=()=>{const{t:t}=s(),[F,S]=e.useState(J.reduce((e,i)=>({...e,[i.id]:0}),{}));return i.jsx(n,{id:"facilities",children:i.jsxs(l,{children:[i.jsx(f,{children:t("sports.facilities.tag","Our Facilities")}),i.jsx(d,{children:t("sports.facilities.title_plain","Sports Zones")}),i.jsx(p,{children:t("sports.facilities.subtitle","Choose the zone that suits you")}),i.jsx(m,{children:J.map(e=>i.jsxs(c,{children:[i.jsxs(g,{children:[i.jsx(h,{src:e.images[F[e.id]],alt:t(e.titleKey,e.defaultTitle),loading:"lazy"}),e.images.length>1&&i.jsx(u,{children:e.images.map((t,s)=>i.jsx(x,{$active:F[e.id]===s,onClick:()=>{return i=e.id,t=s,void S(e=>({...e,[i]:t}));var i,t}},s))})]}),i.jsxs(y,{children:[i.jsx(b,{children:t(e.tagKey,e.defaultTag)}),i.jsx(w,{children:t(e.titleKey,e.defaultTitle)}),i.jsx(j,{children:t(e.descriptionKey,e.defaultDescription)}),i.jsxs(k,{children:[i.jsxs(v,{children:[i.jsx(a,{}),i.jsx("span",{children:e.hours})]}),i.jsxs(v,{children:[i.jsx(r,{}),i.jsx("span",{children:t("sports.facilities.capacity","Up to {{count}}",{count:e.capacity})})]})]}),i.jsx(K,{children:e.features.map((e,s)=>i.jsxs(z,{children:[i.jsx(o,{}),i.jsx("span",{children:t(e.key,e.default)})]},s))}),i.jsx(T,{onClick:()=>(e=>{const i=encodeURIComponent(e.whatsappMessage);window.open(`https://wa.me/66624805877?text=${i}`,"_blank")})(e),children:t("sports.facilities.book_button","Book a Session")})]})]},e.id))})]})})};export{FacilitySectionNew as default};
