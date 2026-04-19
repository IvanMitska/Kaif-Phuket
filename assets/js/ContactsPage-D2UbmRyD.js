import{r as e,j as t}from"./react-core-DWAaPJsY.js";import{P as r}from"./PageHead-DVihzIO-.js";import{d as i}from"./styled-components-BY9Yozyu.js";import{P as o}from"./PageScrollReset-CpzNA0Jq.js";import{u as n}from"./i18n-core-DrMVsQFB.js";import"./react-helmet-xz8aecK8.js";import"./vendor-misc-Dpgsgh4W.js";const a=i.section`
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
    height: calc(100vh + 60px);
    height: calc(100dvh + 60px);
    min-height: calc(100vh + 60px);
    min-height: calc(100dvh + 60px);
  }
`,s=i.div`
  position: absolute;
  inset: 0;
  background-image: url('/images/home/terrace.jpg');
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
`,l=i.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,c=i.div`
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
`,d=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,h=i.span`
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
    font-size: clamp(3rem, 14vw, 6rem);
    line-height: 1.05;
  }

  @media (max-width: 480px) {
    font-size: clamp(2.5rem, 13vw, 5rem);
  }
`,m=i.span`
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
`,p=e.memo(()=>{const{t:e}=n();return t.jsxs(a,{children:[t.jsx(s,{}),t.jsx(l,{children:t.jsx(c,{children:t.jsxs(d,{children:[t.jsx(h,{children:e("contacts.hero.title","Contacts")}),t.jsx(m,{children:e("contacts.hero.location","Phuket")})]})})})]})}),f=i.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,x=i.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,g=i.div`
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
`,u=i.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,w=i.p`
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
`,b=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,j=i.a`
  background: #ffffff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  border-radius: 12px;
  padding: 2rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  transition: all 0.3s ease;
  cursor: ${e=>e.href?"pointer":"default"};

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 8px 30px rgba(19, 50, 56, 0.06);
  }
`,v=i.h3`
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin: 0 0 1rem;
`,k=i.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.5rem;
  letter-spacing: -0.01em;
  line-height: 1.3;
`,y=i.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  display: block;
  flex: 1;
`,z=i.div`
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(19, 50, 56, 0.06);
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(19, 50, 56, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
  }

  ${j}:hover & {
    color: #133238;
  }

  ${j}:hover & svg {
    transform: translateX(4px);
  }
`,P=i.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,C=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`,S=i.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: transparent;
  border: 1px solid rgba(19, 50, 56, 0.12);
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    width: 18px;
    height: 18px;
    color: #133238;
    transition: color 0.3s ease;
  }

  &:hover {
    border-color: #133238;
    background: #133238;
  }

  &:hover svg {
    color: #fffef6;
  }

  &:hover span {
    color: #fffef6;
  }

  @media (max-width: 600px) {
    padding: 0.6rem 1rem;
  }
`,A=i.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  color: #133238;
  letter-spacing: 0.02em;
  transition: color 0.3s ease;
`,L=i.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,B=i.div`
  border-radius: 12px;
  overflow: hidden;
  height: 450px;
  margin-top: 3rem;
  border: 1px solid rgba(19, 50, 56, 0.08);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    height: 350px;
  }
`,ArrowIcon=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})}),F=e.memo(()=>{const{t:e}=n(),i=[{title:e("contacts.phone.title","Phone"),value:"+66 62 480 5877",subtext:e("contacts.phone.subtext","WhatsApp available"),action:e("contacts.phone.action","Contact"),href:"https://wa.me/66624805877"},{title:e("contacts.address.title","Address"),value:"73, Baan Chalekiri Village",subtext:"6 Pra Phuket Keaw Road, Kathu",action:e("contacts.address.action","Get Directions"),href:"https://maps.app.goo.gl/h7PzpHpBeurg7eK18"},{title:e("contacts.hours.title","Opening Hours"),value:e("contacts.hours.value","7:00 — 22:00"),subtext:e("contacts.hours.subtext","Daily"),action:e("contacts.hours.action","Book Now"),href:"https://wa.me/66624805877"}],a=[{name:"Instagram",href:"https://www.instagram.com/kaif.phuket/",icon:t.jsxs("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:[t.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),t.jsx("circle",{cx:"12",cy:"12",r:"4"}),t.jsx("circle",{cx:"18",cy:"6",r:"1.5",fill:"currentColor",stroke:"none"})]})},{name:"Telegram",href:"https://t.me/kaifphuketchat",icon:t.jsx("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",strokeLinecap:"round",strokeLinejoin:"round"})})},{name:"WhatsApp",href:"https://wa.me/66624805877",icon:t.jsxs("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:[t.jsx("path",{d:"M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5m0 0a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1z",strokeLinecap:"round",strokeLinejoin:"round"})]})},{name:"Facebook",href:"https://web.facebook.com/kaifphuketfb",icon:t.jsx("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z",strokeLinecap:"round",strokeLinejoin:"round"})})},{name:"YouTube",href:"https://www.youtube.com/@KaifPhuket",icon:t.jsxs("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:[t.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"4"}),t.jsx("path",{d:"M10 9l5 3-5 3V9z",fill:"currentColor",stroke:"none"})]})}];return t.jsxs(t.Fragment,{children:[t.jsx(r,{titleKey:"page_titles.contacts",defaultTitle:"KAIF Contacts | Get in Touch with Us",description:"Contact KAIF Sauna & Spa in Phuket. Phone, address, working hours and booking information."}),t.jsx(o,{}),t.jsx(p,{}),t.jsx(f,{children:t.jsxs(x,{children:[t.jsx(g,{children:e("contacts.overline","Contact Information")}),t.jsx(u,{children:e("contacts.info.title","Get in Touch")}),t.jsx(w,{children:e("contacts.info.subtitle","Choose a convenient way to contact us")}),t.jsx(b,{children:i.map((e,r)=>t.jsxs(j,{href:e.href,target:"_blank",rel:"noopener noreferrer",as:e.href?"a":"div",children:[t.jsx(v,{children:e.title}),t.jsx(k,{children:e.value}),t.jsx(y,{children:e.subtext}),e.href&&t.jsxs(z,{children:[e.action,t.jsx(ArrowIcon,{})]})]},r))})]})}),t.jsx(P,{children:t.jsxs(x,{children:[t.jsx(g,{children:e("contacts.social.overline","Follow Us")}),t.jsx(u,{children:e("contacts.social.title","Social Media")}),t.jsx(w,{children:e("contacts.social.subtitle","Stay up to date with the latest KAIF news")}),t.jsx(C,{children:a.map((e,r)=>t.jsxs(S,{href:e.href,target:"_blank",rel:"noopener noreferrer",children:[e.icon,t.jsx(A,{children:e.name})]},r))})]})}),t.jsx(L,{children:t.jsxs(x,{children:[t.jsx(g,{children:e("contacts.map.overline","Location")}),t.jsx(u,{children:e("contacts.map.title","How to Find Us")}),t.jsx(w,{children:e("contacts.map.subtitle","Convenient location in Kathu, Phuket")}),t.jsx(B,{children:t.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.8203398876644!2d98.3510499760479!3d7.9138279921095105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031603c054903%3A0x818d8108ef4f8a55!2sKAIF%20SAUNA%20%26%20SPA!5e0!3m2!1sru!2sth!4v1760257722396!5m2!1sru!2sth",allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"KAIF SAUNA & SPA Location"})})]})})]})});export{F as default};
