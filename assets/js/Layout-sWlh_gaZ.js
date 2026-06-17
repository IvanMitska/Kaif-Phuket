import{r as e,j as t}from"./react-core-DWAaPJsY.js";import{d as n}from"./styled-components-BY9Yozyu.js";import{u as a}from"./i18n-core-DrMVsQFB.js";import{a4 as r,a9 as o,aa as i}from"./vendor-misc-Dpgsgh4W.js";import{A as s,m as l}from"./framer-motion-Czr_qtvO.js";const Header=()=>{const[n,i]=e.useState(!1),[d,c]=e.useState(!1),[p,h]=e.useState(!1),{i18n:m,t:g}=a(),f=r(),x=o(),u="/"===f.pathname||"/banya"===f.pathname||"/spa"===f.pathname||"/restaurant"===f.pathname||"/sports"===f.pathname||"/contacts"===f.pathname||"/services"===f.pathname;e.useEffect(()=>{h(window.scrollY>30)},[f.pathname]),e.useEffect(()=>{i(!1),c(!1)},[f.pathname]);const b=u&&!p;e.useEffect(()=>{const handleScroll=()=>{h(window.scrollY>30)};return window.addEventListener("scroll",handleScroll,{passive:!0}),()=>window.removeEventListener("scroll",handleScroll)},[]);const y=e.useCallback(e=>"/"===e&&"/"===f.pathname||!("/"===e||!f.pathname.startsWith(e)),[f.pathname]),v=e.useCallback(e=>{m.changeLanguage(e),localStorage.setItem("i18nextLng",e),document.documentElement.lang=e,c(!1)},[m]),j=e.useCallback(e=>{x(e),window.scrollTo({top:0,behavior:"instant"})},[x]),w=e.useMemo(()=>[{code:"ru",name:"Русский",flag:"🇷🇺"},{code:"en",name:"English",flag:"🇺🇸"},{code:"th",name:"ไทย",flag:"🇹🇭"}],[]);e.useMemo(()=>w.find(e=>e.code===m.language)||w[0],[w,m.language]),e.useEffect(()=>{const handleClickOutside=e=>{e.target.closest(".language-selector")||c(!1)};return document.addEventListener("click",handleClickOutside),()=>document.removeEventListener("click",handleClickOutside)},[]);const k=e.useMemo(()=>[{path:"/",label:g("navigation.home")},{path:"/banya",label:g("navigation.banya")},{path:"/restaurant",label:g("navigation.restaurant")},{path:"/spa",label:g("navigation.spa")},{path:"/sports",label:g("navigation.sports")},{path:"/contacts",label:g("navigation.contacts")}],[g]),C=e.useMemo(()=>[...k,{path:"/services",label:g("navigation.services","Услуги и цены")}],[k,g]),z=k.slice(0,3),F=k.slice(3);e.useEffect(()=>{if(n){const e=window.scrollY;document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${e}px`,document.body.style.width="100%",document.body.setAttribute("data-scroll-position",e.toString())}else{const e=document.body.getAttribute("data-scroll-position");document.body.style.overflow="",document.body.style.position="",document.body.style.top="",document.body.style.width="",e&&(window.scrollTo(0,parseInt(e)),document.body.removeAttribute("data-scroll-position"))}},[n]);const I=b?"#ffffff":"#133238",S=b?"rgba(255,255,255,0.85)":"rgba(19, 50, 56, 0.55)",E=b?"#ffffff":"#133238",navLinkStyle=e=>({position:"relative",padding:"0.5rem 0",fontSize:"0.75rem",fontWeight:"600",fontFamily:'"Jost", sans-serif',textTransform:"uppercase",letterSpacing:"0.18em",color:y(e)?I:S,background:"transparent",border:"none",cursor:"pointer",transition:"color 0.3s ease",whiteSpace:"nowrap"});return t.jsxs(t.Fragment,{children:[t.jsx("header",{className:"kaif-header",style:{position:"fixed",top:0,left:0,right:0,width:"100%",height:"80px",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:p?"rgba(255, 254, 246, 0.92)":"transparent",backdropFilter:p?"blur(20px)":"none",WebkitBackdropFilter:p?"blur(20px)":"none",borderBottom:p?"1px solid rgba(19, 50, 56, 0.06)":"none",transition:"background-color 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease"},children:t.jsxs("div",{style:{width:"100%",maxWidth:"1300px",height:"100%",display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",padding:"0 2.5rem"},children:[t.jsx("nav",{className:"desktop-nav desktop-nav-left",style:{display:"flex",alignItems:"center",gap:"2.5rem",justifySelf:"start"},children:z.map(e=>t.jsx("button",{onClick:()=>j(e.path),style:navLinkStyle(e.path),onMouseEnter:e=>{e.target.style.color=E},onMouseLeave:t=>{t.target.style.color=y(e.path)?I:S},children:e.label},e.path))}),t.jsx("div",{onClick:()=>j("/"),style:{cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",justifySelf:"center"},children:t.jsx("img",{src:"/images/logos/logo-header.png",alt:"KAIF",style:{height:"40px",width:"auto",filter:b?"brightness(0) invert(1)":"none",transition:"filter 0.4s ease"},loading:"eager"})}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifySelf:"end",gap:"2.5rem"},children:[t.jsx("nav",{className:"desktop-nav desktop-nav-right",style:{display:"flex",alignItems:"center",gap:"2.5rem"},children:F.map(e=>t.jsx("button",{onClick:()=>j(e.path),style:navLinkStyle(e.path),onMouseEnter:e=>{e.target.style.color=E},onMouseLeave:t=>{t.target.style.color=y(e.path)?I:S},children:e.label},e.path))}),t.jsx("button",{className:"burger-btn",onClick:e=>{null==e||e.preventDefault(),null==e||e.stopPropagation(),i(!n)},style:{display:"flex",alignItems:"center",justifyContent:"center",width:"32px",height:"32px",background:"transparent",border:"none",cursor:"pointer",color:b?"#ffffff":"#133238",padding:0,transition:"color 0.3s ease",flexShrink:0},children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[t.jsx("line",{x1:"3",y1:"8",x2:"21",y2:"8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),t.jsx("line",{x1:"3",y1:"16",x2:"21",y2:"16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})})]})]})}),t.jsx(s,{mode:"wait",children:n&&t.jsxs(t.Fragment,{children:[t.jsx(l.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.45,ease:[.4,0,.2,1]},onClick:()=>i(!1),style:{position:"fixed",inset:0,zIndex:1e4},children:t.jsxs("div",{className:"menu-image-half",style:{position:"absolute",inset:0,overflow:"hidden"},children:[t.jsx("img",{src:"/images/hero/spa.webp",alt:"",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}),t.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.4) 100%)"}})]})}),t.jsxs(l.div,{className:"menu-nav-half",initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"tween",duration:.55,ease:[.16,1,.3,1]},style:{position:"fixed",top:0,right:0,bottom:0,width:"50%",zIndex:10001,background:"#fffef6",display:"flex",flexDirection:"column",boxShadow:"-20px 0 60px rgba(0,0,0,0.12)"},children:[t.jsx(l.button,{initial:{opacity:0,rotate:-90},animate:{opacity:1,rotate:0},transition:{duration:.4,delay:.3,ease:[.16,1,.3,1]},onClick:()=>i(!1),style:{position:"absolute",top:"1.75rem",right:"2.5rem",width:"44px",height:"44px",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",border:"none",cursor:"pointer",color:"#133238",padding:0,zIndex:1},children:t.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:[t.jsx("line",{x1:"6",y1:"6",x2:"22",y2:"22",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("line",{x1:"6",y1:"22",x2:"22",y2:"6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"5rem 2rem 3rem"},children:[t.jsx("nav",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.1rem"},children:C.map((e,n)=>t.jsx(l.button,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{delay:.3+.06*n,duration:.5,ease:[.16,1,.3,1]},onClick:()=>{j(e.path),i(!1)},style:{display:"block",padding:"0.75rem 1.5rem",background:"transparent",border:"none",cursor:"pointer",fontSize:"1.15rem",fontWeight:y(e.path)?"700":"400",fontFamily:'"Jost", sans-serif',color:y(e.path)?"#133238":"rgba(19, 50, 56, 0.55)",letterSpacing:"0.01em",lineHeight:"1.6",transition:"color 0.2s ease",textAlign:"center"},onMouseEnter:e=>{e.currentTarget.style.color="#133238"},onMouseLeave:t=>{t.currentTarget.style.color=y(e.path)?"#133238":"rgba(19, 50, 56, 0.55)"},children:e.label},e.path))}),t.jsx(l.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{delay:.7,duration:.5,ease:[.16,1,.3,1]},style:{marginTop:"2.5rem",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.6rem"},children:w.map(e=>t.jsx("button",{onClick:()=>v(e.code),style:{display:"flex",alignItems:"center",justifyContent:"center",minWidth:"140px",padding:"0.6rem 1.5rem",background:"transparent",border:m.language===e.code?"1.5px solid #133238":"1px solid rgba(19, 50, 56, 0.2)",borderRadius:"24px",cursor:"pointer",fontSize:"0.7rem",fontWeight:m.language===e.code?"700":"500",fontFamily:'"Jost", sans-serif',textTransform:"uppercase",letterSpacing:"0.18em",color:m.language===e.code?"#133238":"rgba(19, 50, 56, 0.5)",transition:"all 0.2s ease"},children:e.name},e.code))})]}),t.jsx(l.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.85,duration:.4},style:{borderTop:"1px dotted rgba(19, 50, 56, 0.15)",padding:"1.5rem 2.5rem",display:"flex",gap:"2rem",justifyContent:"center",flexWrap:"wrap"},children:[{path:"/terms",label:g("footer.terms","Terms & Conditions")},{path:"/privacy",label:g("footer.privacy","Privacy")}].map(e=>t.jsx("button",{onClick:()=>{j(e.path),i(!1)},style:{background:"transparent",border:"none",cursor:"pointer",fontSize:"0.65rem",fontWeight:"600",fontFamily:'"Jost", sans-serif',textTransform:"uppercase",letterSpacing:"0.18em",color:"rgba(19, 50, 56, 0.4)",padding:0,transition:"color 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.color="#133238"},onMouseLeave:e=>{e.currentTarget.style.color="rgba(19, 50, 56, 0.4)"},children:e.label},e.path))})]})]})})]})};if("undefined"!=typeof document&&!document.getElementById("header-styles-v4")){const e=document.getElementById("header-styles-v3")||document.getElementById("header-styles-v2");e&&e.remove();const t=document.createElement("style");t.id="header-styles-v4",t.textContent="\n  .kaif-header {\n    position: fixed !important;\n    top: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n  }\n\n  .kaif-header .desktop-nav {\n    display: flex;\n  }\n\n  .kaif-header .burger-btn {\n    display: flex !important;\n  }\n\n  @media (max-width: 1024px) {\n    .kaif-header .desktop-nav {\n      gap: 1.25rem !important;\n    }\n    .kaif-header .desktop-nav button:not(.burger-btn) {\n      font-size: 0.68rem !important;\n      letter-spacing: 0.14em !important;\n    }\n  }\n\n  @media (max-width: 768px) {\n    .kaif-header .desktop-nav {\n      display: none !important;\n    }\n    .kaif-header > div {\n      padding: 0 1rem !important;\n      grid-template-columns: auto 1fr auto !important;\n    }\n    /* On mobile: image half is hidden, nav panel is full width */\n    .menu-image-half {\n      display: none !important;\n    }\n    .menu-nav-half {\n      width: 100% !important;\n    }\n  }\n",document.head.appendChild(t)}const d=n.footer`
  position: relative;
  background-color: #0f1a1c;
  padding: 5rem 2rem calc(2rem + env(safe-area-inset-bottom, 0px));
  color: #fffef6;
  z-index: 10;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3.5rem 1.25rem calc(1.5rem + env(safe-area-inset-bottom, 0px));
  }
`,c=n.div`
  max-width: 1300px;
  margin: 0 auto;
`,p=n.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-bottom: 4rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 1fr 1fr 1fr;
    gap: 3rem;
  }
`,h=n.div`
  @media (max-width: 1023px) {
    grid-column: 1 / -1;
  }
`,m=n.div`
  margin-bottom: 1.5rem;
  width: 280px;

  img {
    width: 100%;
    height: auto;
    filter: brightness(1.2) contrast(1.1);
  }

  @media (max-width: 768px) {
    width: 240px;
  }
`,g=n.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 254, 246, 0.5);
  max-width: 320px;
  margin: 0 0 2rem;
  font-weight: 400;
`,f=n.div`
  display: flex;
  gap: 0.75rem;
`,x=n.a`
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid rgba(255, 254, 246, 0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 254, 246, 0.45);
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(255, 254, 246, 0.3);
    color: #fffef6;
  }

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }
`,u=n.div``,b=n.h3`
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 254, 246, 0.35);
  margin: 0 0 1.5rem;
`,y=n(i)`
  display: block;
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 254, 246, 0.65);
  text-decoration: none;
  padding: 0.3rem 0;
  transition: color 0.2s ease;
  font-weight: 400;

  &:hover {
    color: #fffef6;
  }
`,v=n.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 254, 246, 0.65);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-weight: 400;

  a {
    color: rgba(255, 254, 246, 0.65);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #fffef6;
    }
  }
`,j=n.div`
  height: 1px;
  background: rgba(255, 254, 246, 0.08);
  margin-bottom: 2rem;
`,w=n.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`,k=n.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 254, 246, 0.3);
  margin: 0;
  font-weight: 400;

  span {
    color: rgba(255, 254, 246, 0.5);
  }
`,C=n.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 254, 246, 0.25);
  margin: 0;

  a {
    color: rgba(255, 254, 246, 0.4);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: rgba(255, 254, 246, 0.7);
    }
  }
`,z=n.div`
  display: flex;
  gap: 1.5rem;

  a {
    font-family: 'Jost', sans-serif;
    font-size: 0.8rem;
    color: rgba(255, 254, 246, 0.3);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: rgba(255, 254, 246, 0.6);
    }
  }
`,Footer=()=>{const{t:e}=a(),n=(new Date).getFullYear(),r=[{path:"/",label:e("navigation.home"),id:"home"},{path:"/restaurant",label:e("navigation.restaurant"),id:"restaurant"},{path:"/spa",label:e("navigation.spa"),id:"spa"},{path:"/sports",label:e("navigation.sports"),id:"sports-main"},{path:"/contacts",label:e("navigation.contacts"),id:"contacts"}],o=[{path:"/spa",label:e("footer.services.sauna"),id:"spa-sauna"},{path:"/restaurant",label:e("navigation.restaurant"),id:"restaurant"},{path:"/sports/gym",label:e("footer.services.fitness"),id:"sports-fitness"},{path:"/banya",label:e("navigation.banya"),id:"banya"},{path:"/sports/fight-club",label:e("footer.services.fight_club"),id:"sports-club"}];return t.jsx(d,{children:t.jsxs(c,{children:[t.jsxs(p,{children:[t.jsxs(h,{children:[t.jsx(m,{children:t.jsxs("picture",{children:[t.jsx("source",{srcSet:"/images/logos/logo-footer-2x.webp 2x, /images/logos/logo-footer-1x.webp 1x",type:"image/webp"}),t.jsx("source",{srcSet:"/images/logos/logo-footer-2x.png 2x, /images/logos/logo-footer-1x.png 1x",type:"image/png"}),t.jsx("img",{src:"/images/logos/logo-footer-1x.png",alt:"KAIF",loading:"lazy"})]})}),t.jsx(g,{children:e("footer.brand.description")}),t.jsxs(f,{children:[t.jsx(x,{href:"https://www.instagram.com/kaif.phuket/",target:"_blank",rel:"noopener noreferrer",children:t.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),t.jsx(x,{href:"https://web.facebook.com/kaifphuketfb",target:"_blank",rel:"noopener noreferrer",children:t.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),t.jsx(x,{href:"https://t.me/kaifphuketchat",target:"_blank",rel:"noopener noreferrer",children:t.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.789l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"})})}),t.jsx(x,{href:"https://www.youtube.com/@KaifPhuket",target:"_blank",rel:"noopener noreferrer",children:t.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})}),t.jsx(x,{href:"https://api.whatsapp.com/send/?phone=66624805877&text&type=phone_number&app_absent=0",target:"_blank",rel:"noopener noreferrer",children:t.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"})})})]})]}),t.jsxs(u,{children:[t.jsx(b,{children:e("footer.navigation")}),r.map(e=>t.jsx(y,{to:e.path,children:e.label},e.id))]}),t.jsxs(u,{children:[t.jsx(b,{children:e("footer.services.title")}),o.map(e=>t.jsx(y,{to:e.path,children:e.label},e.id))]}),t.jsxs(u,{children:[t.jsx(b,{children:e("navigation.contacts")}),t.jsxs(v,{children:["73, Baan Chalekiri Village,",t.jsx("br",{}),"6 Pra Phuket Keaw Road, Kathu"]}),t.jsx(v,{children:t.jsx("a",{href:"tel:+66624805877",children:"+66 62 480 5877"})}),t.jsxs(v,{children:[e("footer.schedule.daily"),t.jsx("br",{}),e("footer.schedule.hours")]})]})]}),t.jsx(j,{}),t.jsxs(w,{children:[t.jsxs(k,{children:["© ",n," ",t.jsx("span",{children:"KAIF"}),". ",e("footer.copyright")]}),t.jsxs(C,{children:["Made by ",t.jsx("a",{href:"https://sintara.io/",target:"_blank",rel:"noopener noreferrer",children:"Sintara Studio"})]}),t.jsxs(z,{children:[t.jsx(i,{to:"/privacy",children:e("footer.legal.privacy")}),t.jsx(i,{to:"/terms",children:e("footer.legal.terms")})]})]})]})})},F=n.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 54px;
  height: 54px;
  background: #133238;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(19, 50, 56, 0.25);
  z-index: 999;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 28px rgba(19, 50, 56, 0.35);
    background: #1a4a52;
  }

  svg {
    width: 26px;
    height: 26px;
    fill: #fff;
  }

  @media (max-width: 768px) {
    bottom: 16px;
    right: 16px;
    width: 50px;
    height: 50px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`,WhatsAppIcon=()=>t.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),FloatingWhatsApp=()=>{const e=encodeURIComponent("Hello! I would like to learn more about KAIF");return t.jsx(F,{href:`https://wa.me/66624805877?text=${e}`,target:"_blank",rel:"noopener noreferrer","aria-label":"Chat on WhatsApp",children:t.jsx(WhatsAppIcon,{})})},I=n.div`
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: #FFFFFF;
`,S=n.main`
  width: 100%;
  position: relative;
  z-index: 0;
  flex: 1 0 auto;
  margin: 0;
  padding: 0;
  background: #FFFFFF;
  min-height: 100vh;
`,Layout=({children:e})=>t.jsxs(t.Fragment,{children:[t.jsx(Header,{}),t.jsxs(I,{children:[t.jsx(S,{children:e}),t.jsx(Footer,{})]}),t.jsx(FloatingWhatsApp,{})]});export{Layout as default};
