import{r as e,j as t}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-DYLnJpui.js";import{u as i}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-DORsZxsB.js";const n=r.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,a=r.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,o=r.div`
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
`,s=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,l=r.p`
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
`,d=r.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 280px;
  }
`,m=r.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 280px;

  @media (min-width: 768px) {
    height: auto;

    &:nth-child(1) {
      grid-row: span 2;
    }
    &:nth-child(4) {
      grid-row: span 2;
    }
    &:nth-child(7) {
      grid-row: span 2;
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 1;
    transition: background 0.3s ease;
  }

  &:hover::after {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }

  &:hover img {
    transform: scale(1.04);
  }
`,c=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
`,g=r.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
`,p=r.div`
  position: relative;
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,h=r.img`
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  display: block;
`,f=r.div`
  position: absolute;
  bottom: -3rem;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,x=r.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
`,b=r.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  z-index: 10;
  font-size: 1.25rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.prev { left: -5rem; }
  &.next { right: -5rem; }

  @media (max-width: 768px) {
    &.prev { left: -0.5rem; }
    &.next { right: -0.5rem; }
    width: 2.5rem;
    height: 2.5rem;
  }
`,u=r.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  z-index: 10001;
  font-size: 1.25rem;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,SpaGallerySection=()=>{const{t:r}=i(),[y,w]=e.useState(!1),[v,k]=e.useState(0),j=Array.from({length:9},(e,t)=>({id:t+1,src:`/images/spa/gallery/spa-${t+1}.jpg`,alt:`SPA ${t+1}`})),z=e.useCallback(e=>{k(e),w(!0),document.body.style.overflow="hidden"},[]),C=e.useCallback(()=>{w(!1),document.body.style.overflow="auto"},[]),A=e.useCallback(e=>{k(t=>"next"===e?(t+1)%j.length:(t-1+j.length)%j.length)},[j.length]);return e.useEffect(()=>()=>{document.body.style.overflow=""},[]),e.useEffect(()=>{if(!y)return;const handleKey=e=>{"Escape"===e.key&&C(),"ArrowLeft"===e.key&&A("prev"),"ArrowRight"===e.key&&A("next")};return document.addEventListener("keydown",handleKey),()=>document.removeEventListener("keydown",handleKey)},[y,C,A]),t.jsxs(n,{id:"spa-gallery",children:[t.jsxs(a,{children:[t.jsx(o,{children:r("spa.gallery.badge","Gallery")}),t.jsx(s,{children:r("spa.gallery.title","Gallery")}),t.jsx(l,{children:r("spa.gallery.subtitle","The atmosphere of relaxation and beauty at KAIF SPA")}),t.jsx(d,{children:j.map((e,r)=>t.jsx(m,{onClick:()=>z(r),children:t.jsx(c,{src:e.src,alt:e.alt,loading:"lazy"})},e.id))})]}),y&&j[v]&&t.jsxs(g,{onClick:C,children:[t.jsx(u,{onClick:C,children:"✕"}),t.jsxs(p,{onClick:e=>e.stopPropagation(),children:[t.jsx(b,{className:"prev",onClick:()=>A("prev"),children:"‹"}),t.jsx(h,{src:j[v].src,alt:j[v].alt}),t.jsx(b,{className:"next",onClick:()=>A("next"),children:"›"}),t.jsx(f,{children:t.jsxs(x,{children:[v+1," / ",j.length]})})]})]})]})};export{SpaGallerySection as default};
