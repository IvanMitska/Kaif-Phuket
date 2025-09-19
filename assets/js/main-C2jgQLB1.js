const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/AdvantagesSection-DFT97KCx.js","assets/js/vendor-react-DZA4WcA9.js","assets/js/vendor-other-CZupzcPt.js","assets/js/vendor-styles-DHpaP57L.js","assets/js/vendor-animations-WcfxAmq3.js","assets/js/GallerySection-ClRO5s9s.js","assets/js/FAQSection-BJmsHey9.js","assets/js/RestaurantPage-BiEqvMEu.js","assets/js/PageScrollReset-Dc_QTYR5.js","assets/js/vendor-i18n-C4kh69yx.js","assets/js/SpaPage-Ctvior_3.js","assets/js/SportsPage-FAurazaN.js","assets/js/BanyaPage-vJOtl_ev.js","assets/js/ContactsPage-CALUGqRe.js","assets/js/CommonComponents-UK_0thD4.js","assets/js/PrivacyPage-QAQAnXjg.js","assets/js/TermsPage-BRdeoRZg.js","assets/js/SurveyPage-1jrUO_T1.js"])))=>i.map(i=>d[i]);
import{r as e,j as i,R as t,u as a,i as n,a as o,b as r,F as s,c as l,d as c,L as p,H as d,e as m,f as u,g as h,h as g,B as b,k as f,l as _,N as y,m as x}from"./vendor-react-DZA4WcA9.js";import{f as w,m as v,d as k,o as A}from"./vendor-styles-DHpaP57L.js";import{i as F,B as C}from"./vendor-i18n-C4kh69yx.js";import{m as j,A as S}from"./vendor-animations-WcfxAmq3.js";import"./vendor-other-CZupzcPt.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&i(e)}).observe(document,{childList:!0,subtree:!0})}function i(e){if(e.ep)return;e.ep=!0;const i=function(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?i.credentials="include":"anonymous"===e.crossOrigin?i.credentials="omit":i.credentials="same-origin",i}(e);fetch(e.href,i)}}();const P={},I=function(e,i,t){let a=Promise.resolve();if(i&&i.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))};document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),n=(null==t?void 0:t.nonce)||(null==t?void 0:t.getAttribute("nonce"));a=e(i.map(e=>{if((e=function(e){return"/"+e}(e))in P)return;P[e]=!0;const i=e.endsWith(".css"),t=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const a=document.createElement("link");return a.rel=i?"stylesheet":"modulepreload",i||(a.as="script"),a.crossOrigin="",a.href=e,n&&a.setAttribute("nonce",n),document.head.appendChild(a),i?new Promise((i,t)=>{a.addEventListener("load",i),a.addEventListener("error",()=>t(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function n(e){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=e,window.dispatchEvent(i),!i.defaultPrevented)throw e}return a.then(i=>{for(const e of i||[])"rejected"===e.status&&n(e.reason);return e().catch(n)})},B=w`
  /* Импортируем шрифт KAIF */
  @font-face {
    font-family: 'KAIF';
    src: url('/src/assets/fonts/kaif.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* Применяем Playfair Display ко всем элементам */
  body, 
  h1, h2, h3, h4, h5, h6,
  p, span, div, button, input, textarea, select, label, li {
    font-family: 'Playfair Display', Georgia, serif !important;
  }
  
  /* Специальные стили для навигации в хедере */
  header nav a {
    font-family: 'KAIF', 'Playfair Display', Georgia, serif !important;
  }
  
  /* Языковые настройки размера шрифта для хедера */
  /* Для русского и английского языков - уменьшенный шрифт */
  html[lang='ru'] header nav a,
  html[lang='en'] header nav a {
    font-size: 0.85rem !important;
  }
  
  /* Для тайского языка - увеличенный шрифт */
  html[lang='th'] header nav a {
    font-size: 1.05rem !important;
  }
  
  /* Настройки для мобильной навигации */
  html[lang='ru'] div[class*='MobileNavContainer'] a,
  html[lang='en'] div[class*='MobileNavContainer'] a {
    font-size: 1rem !important;
  }
  
  html[lang='th'] div[class*='MobileNavContainer'] a {
    font-size: 1.2rem !important;
  }
  
  /* Усиливаем вес для заголовков */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  
  /* Настраиваем вес для обычного текста */
  p, span, div, li {
    font-weight: 400;
  }
  
  /* Кнопки и интерактивные элементы */
  button, a, input, textarea, select, label {
    font-weight: 500;
  }
  
  /* Исключаем монолитные шрифты для кода */
  code, pre {
    font-family: 'JetBrains Mono', Consolas, monospace !important;
  }
`,T=w`
  /* KAIF brand font */
  @font-face {
    font-family: 'KAIF';
    src: url(${"/assets/fonts/kaif-BKIoexQO.ttf"}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* Стиль для исправления проблем с переходами между страницами */
  .route-transition {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
    will-change: transform;
    contain: layout paint style;
    animation: fadeIn 0.5s ease forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Глобальное правило для сохранения стилей между страницами */
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }
  
  /* Оптимизация производительности */
  .will-change-transform {
    will-change: transform;
  }
  
  .will-change-opacity {
    will-change: opacity;
  }
  
  /* Улучшения для анимаций */
  @media (prefers-reduced-motion: no-preference) {
    /* ВРЕМЕННО ОТКЛЮЧЕНО - может мешать хедеру
    *:not(header):not(header *) {
      backface-visibility: hidden;
      perspective: 1000px;
    }
    */
  }
  
  /* Отключение анимаций для пользователей с настройкой reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  
  /* Базовые стили для всего сайта, основанные на теме */
  body {
    font-family: ${({theme:e})=>e.fonts.primary||'"Inter", sans-serif'};
    background-color: #FFFFFF;
    color: ${({theme:e})=>e.colors.text.primary||"#2C3E2D"};
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    /* Убираем -webkit-overflow-scrolling для предотвращения проблем с fixed позиционированием */
    scroll-behavior: auto;
  }
  
  /* Дополнительные оптимизации для мобильных устройств */
  @media (max-width: 768px) {
    body {
      /* Отключение эластичной прокрутки для предотвращения зеленого цвета */
      overscroll-behavior: none;
      -webkit-overscroll-behavior: none;
      background-color: #FFFFFF !important;
    }
    
    html {
      /* Улучшение прокрутки на мобильных */
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      background-color: #FFFFFF !important;
    }
    
    /* Исправление зеленого фона при перетягивании на iOS */
    #root {
      background-color: #FFFFFF !important;
    }
  }
  
  /* Отключение автоматической фиксации при прокрутке */
  html, body {
    scroll-snap-type: none !important;
    scroll-snap-align: none !important;
    scroll-snap-stop: normal !important;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100%;
    line-height: 1;
  }
  
  html {
    height: 100%;
  }
  
  /* Предотвращение рывков в секциях */
  section, div, main {
    scroll-snap-align: none !important;
    scroll-snap-type: none !important;
  }
  
  /* Устранение белых зазоров между секциями */
  section {
    display: block;
    margin: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
  }
  
  /* Специальное правило для footer */
  footer {
    display: block;
    margin: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    margin-top: 0 !important;
    padding-top: 0;
  }
  
  /* Устранение зазоров между main и footer */
  main {
    margin: 0;
    padding-bottom: 0;
    display: block;
  }
  
  /* Устранение любых возможных зазоров */
  main + footer,
  section + footer,
  div + footer {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
  
  /* Принудительное устранение зазоров для всех элементов перед footer */
  footer {
    margin-top: 0 !important;
    border-top: none !important;
  }
  
  /* Убираем любые возможные отступы в конце main контента */
  main > *:last-child,
  main > div:last-child,
  main > section:last-child {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }
  
  /* Типография */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:e})=>e.fonts.heading||'"Playfair Display", serif'};
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text.dark||"#1A2B1D"};
  }
  
  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    line-height: 1.2;
  }
  
  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 1.25;
  }
  
  h3 {
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    line-height: 1.3;
  }
  
  h4 {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    line-height: 1.35;
  }
  
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.6;
  }
  
  a {
    color: ${({theme:e})=>e.colors.primary||"#90B3A7"};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({theme:e})=>e.colors.secondary||"#D4A574"};
    }
  }
  
  button {
    font-family: ${({theme:e})=>e.fonts.primary||'"Inter", sans-serif'};
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  /* Контейнеры */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  section {
    padding: 5rem 0;
  }
  
  /* Особые стили для страниц СПА, спорт и контакты */
  /* СПА страница */
  .spa-page {
    .hero-section {
      background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    }
    
    .feature-card {
      background: #FFFFFF;
      border-radius: 8px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
    }
  }
  
  /* Спорт страница */
  .sports-page {
    .hero-section {
      background: linear-gradient(135deg, #E8734A 0%, #F28A5F 100%);
    }
    
    .schedule-item {
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }
  }
  
  /* Контакты страница */
  .contacts-page {
    .contact-info {
      background: #FFFFFF;
      border-radius: 8px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
    }
    
    .contact-form {
      background: #F9F7F4;
      border-radius: 8px;
    }
  }
  
  /* Устранение оранжевой подсветки при нажатии */
  a, button, input, textarea, select {
    -webkit-tap-highlight-color: transparent;
  }
  
  /* Специальные стили для кнопки бронирования */
  .booking-button {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    
    &:hover, &:active, &:focus {
      background: linear-gradient(135deg, #7C9D93 0%, #94B1A4 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(144, 179, 167, 0.3);
    }
  }
  

`,z=e.createContext();let M=!1;const E=()=>e.useContext(z),K=({children:t})=>{const[a,n]=e.useState(!1),[o,r]=e.useState(!0),s=e.useRef(!1),l=e.useRef(!1);return i.jsx(z.Provider,{value:{isLoading:a,isContentReady:o,showLoading:(e=1e3)=>s.current||l.current||M?Promise.resolve():(M=!0,s.current=!0,l.current=!0,r(!1),n(!0),new Promise(i=>{setTimeout(()=>{n(!1),setTimeout(()=>{r(!0),s.current=!1,i()},200)},e)})),showContentDirectly:()=>{l.current=!0,n(!1),r(!0),s.current=!1},resetLoading:()=>{l.current=!1,s.current=!1,n(!1),r(!0)}},children:t})},R=v`
  from { opacity: 0; }
  to { opacity: 1; }
`,q=v`
  from { opacity: 1; }
  to { opacity: 0; }
`,L=v`
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,O=k.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  
  /* Оптимизированные анимации */
  animation: ${R} 0.2s ease-out forwards;
  
  &.exiting {
    animation: ${q} 0.3s ease-in forwards;
  }
  
  /* Оптимизация производительности */
  will-change: opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
`,D=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,W=k.img`
  width: 180px;
  height: auto;
  object-fit: contain;
  
  /* Упрощенная анимация */
  animation: ${L} 0.6s ease-out 0.1s both;
  
  /* Оптимизация */
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  @media (min-width: 768px) {
    width: 220px;
  }
  
  @media (min-width: 1024px) {
    width: 260px;
  }
`,H=({isVisible:e})=>{const[a,n]=t.useState(e),[o,r]=t.useState(!1);return t.useEffect(()=>{if(e)n(!0),r(!1);else if(a){r(!0);const e=setTimeout(()=>{n(!1),r(!1)},300);return()=>clearTimeout(e)}},[e,a]),a?i.jsx(O,{className:o?"exiting":"",children:i.jsx(D,{children:i.jsx(W,{src:"/assets/images/logo-header-7WTZC_mL.png",alt:"KAIF",loading:"eager"})})}):null},N=()=>{const{pathname:i}=a();return e.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"}),setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},0),setTimeout(()=>{window.scrollY>0&&window.scrollTo(0,0)},100)},[i]),null},$={page_titles:{home:"KAIF | Jungle Club & Spa",restaurant:"KAIF Restaurant | Gourmet Cuisine and Exquisite Dishes",spa:"KAIF SPA | Luxury Spa Treatments and Relaxation",sports:"KAIF Sports | Modern Fitness and Martial Arts",banya:"KAIF Banya | Traditional Russian Sauna Experience",contacts:"KAIF Contacts | Get in Touch with Us"},common:{book:"Book Now",book_now:"Book Now",learn_more:"Learn More",view_all:"View All",read_more:"Read More",submit:"Submit",scroll_down:"Scroll",name:"Name",email:"Email",phone:"Phone",message:"Message",date:"Date",time:"Time",people:"People",special_requests:"Special Requests",address:"73, Baan Chalekiri Village, 6 Pra Phuket Keaw Road, Kathu",phone_number:"+66 62 480 5877",select_language:"Select Language",photo_placeholder:"Photo will be added",contact_us:"Contact Us",exploreMore:"Learn More",from:"from",categories:"Categories",activity:"ACTIVITY",relaxation:"RELAXATION"},navigation:{home:"Home",restaurant:"Restaurant",spa:"SPA",sports:"Sports",banya:"Russian Banya",about:"About Us",promotions:"Promotions",contacts:"Contacts"},home:{hero:{title:"KAIF - Jungle Club & Spa",subtitle:"Jungle Club & Spa",cta:"Our Services",overline:"Premium Complex in Phuket",mainTitle:"KAIF",services:"Our Services",bookNow:"Book Now",virtualTour:"Virtual Tour",slideAlt:"KAIF - Jungle Club & Spa",stats:{zones:"RELAXATION ZONES",sauna:"SAUNA",equipment:"EQUIPMENT"},heroServices:{gym:{title:"Gym",description:"70+ modern equipment in spacious hall"},martialArts:{title:"Martial Arts",description:"MMA, boxing, muay thai with professional trainers"},pool:{title:"25m Pool",description:"Olympic standard with heated water"},spa:{title:"SPA Center",description:"Thai massage, aromatherapy, relaxation"},restaurant:{title:"Restaurant",description:"5 world cuisines with panoramic terrace"},beauty:{title:"Beauty Salon",description:"Cosmetology, treatments, hairdressing services"}}},philosophy:{overline:"OUR PHILOSOPHY",title:"A Space for Harmony and Self-Development",paragraph1:"We create a space where life becomes brighter. Our mission is to make rest and self-care not an obligation, but a pleasure. KAIF is a place where you restore your strength, recharge your batteries and enjoy every moment.",paragraph2:"Everything here is designed so that you want to come back: workouts that inspire, relaxation that fills you up, and an atmosphere that gives you a real buzz. We believe that harmony is not a luxury, but a necessity, and we make it available to you.",quote:"Health is not just the absence of disease, but a state of complete physical, mental and social well-being",imageAlt:"KAIF - a space for harmony and self-development",principle1:{title:"Comfort and Inspiration",text:"Creating an atmosphere where every workout brings pleasure"},principle2:{title:"Balance and Harmony",text:"Premium service for body and spirit balance"},principle3:{title:"Holistic Approach",text:"All KAIF zones work together for your well-being"}},services:{title:"Our Services",subtitle:"Choose your path: dynamic activity or relaxing relaxation",zones:{activity:"Activity",relax:"Relaxation"},fitness:{title:"Fitness Center",description:"Modern gym with professional equipment for all types of workouts.",features:["70+ modern equipment","Cardio zone","Functional training","Personal training"]},combat:{title:"Martial Arts",description:"Professional MMA, boxing and muay thai training under experienced trainers.",features:["MMA and boxing","Muay Thai","Professional ring","Group and individual classes"]},pool:{title:"Swimming Pool",description:"25-meter Olympic standard pool for swimming and water workouts.",features:["25m Olympic standard","Heated water","Aqua fitness","Kids zone"]},spa:{title:"SPA Center",description:"Oasis of tranquility with a wide range of relaxing and restorative treatments.",features:["Thai massage","Aromatherapy","Hot stones","Relaxation zones"]},banya:{title:"Russian Banya",description:"The largest Russian banya in Phuket with traditional procedures.",features:["50m2 Russian banya","Birch brooms and aromas","Steam procedures","Tea ceremony"]},restaurant:{title:"Restaurant",description:"Exquisite signature cuisine with 50+ unique dishes from the chef.",features:["50+ signature dishes","Signature recipes","Wine list","Panoramic terrace"]},learn_more:"Learn More"},promotions:{title:"Special Offers",day_pass:{title:"Day in Complex",price:"390 THB",description:"Access to gym, pool, ice bath and sauna"},charity:{title:"Charity Workout",price:"200 THB",description:"Saturday training with professional athletes, proceeds go to Child Watch Phuket Foundation"}},about:{badge:"About Complex",title:"Multifunctional<br />KAIF Complex",description1:"KAIF PHUKET is a premium complex where you restore your strength, recharge your energy and enjoy every moment. Everything here is created so that you want to return: workouts that inspire, relaxation that fills, and an atmosphere that gives real pleasure.",description2:"We have created a unique space in Phuket where premium service meets Thai hospitality. KAIF is not just a spa complex, it's a philosophy of healthy lifestyle and harmony.",stats:{banya:"Russian Banya",equipment:"Equipment",dishes:"Signature Dishes",pool:"Olympic Pool"},features:{spa:{title:"SPA Complex",description:"Thailand's largest sauna, hammam and massage rooms"},gym:{title:"Gym",description:"70+ modern equipment and professional trainers"},martial:{title:"Martial Arts",description:"MMA, boxing, muay thai with professional trainers"},pool:{title:"Olympic Pool",description:"25-meter heated pool with aqua fitness"},restaurant:{title:"Restaurant",description:"50+ signature dishes from chef and panoramic terrace"},beauty:{title:"Beauty Salon",description:"Cosmetology, treatments, hairdressing services"}}},about_preview:{title:"About KAIF",description:"KAIF is Phuket's premier wellness complex offering world-class facilities for mind, body and soul",features:{largest_sauna:"Thailand's largest sauna (50m²)",hammams:"Thai and Turkish hammams",restaurant:"Restaurant with 5 cuisines",gym:"70+ equipment gym",pool:"25m swimming pool",fight_club:"Professional fight club"}},location:{title:"Find Us",description:"Conveniently located in Kathu, just minutes away from Patong"}},facilities:{overline:"OUR FACILITIES",title:"Space for harmony and self-development",subtitle:"We create a space where life becomes brighter. Our mission is to make rest and self-care not a duty, but a pleasure",gym:{name:"Equipment",description:"Modern equipment for effective workouts"},banya:{name:"Russian Banya",description:"The largest panoramic Russian steam room in Phuket"},restaurant:{name:"Restaurant Seats",description:"Outdoor restaurant"},pool:{name:"Swimming Pool",description:"Olympic standard for swimming",unit:"m"}},zones:{overline:"KAIF Spaces",title:"Everything you need for active recreation and relaxation",all:"All zones",activity_label:"Activity",relax_label:"Relax",activity:{fitness:{name:"Gym",description:"Modern space with premium equipment"},combat:{name:"Martial Arts",description:"MMA, boxing and muay thai with professional trainers"},pool:{name:"Swimming Pool",description:"Swimming in 25-meter pool"}},relax:{spa:{name:"SPA Complex",description:"Relaxing treatments and premium massages"},banya:{name:"Russian Banya",description:"Traditional banya procedures and wellness"},restaurant:{name:"Restaurant",description:"Exquisite cuisine and signature menu"}}},popular_services:{title:"Popular Services",subtitle:"Most requested SPA and Beauty treatments in our center",hit:"Hit",view_all:"View All Services"},faq:{badge:"Questions & Answers",title:"Frequently Asked Questions",subtitle:"Everything you need to know about our multifunctional complex",questions:{what_includes:{question:"What does the KAIF complex include?",answer:"KAIF is a unique complex in Phuket where you can combine activity, relaxation and self-care in one place. The territory includes: modern gym, Olympic pool with relaxation zones, dance and functional training studio, martial arts hall, beauty studio, SPA with Russian sauna, Thai hammam and massage services, restaurant with Eastern cuisine, Russian classics and barbecue dishes."},working_hours:{question:"What are the complex's operating hours?",answer:". Some zones (SPA, restaurant) may have separate schedules. We recommend checking the operating hours of specific services when booking."},how_to_book:{question:"How to book services?",answer:"Booking is available through our website, mobile app, by phone +66 76 123 456 or WhatsApp. We recommend booking in advance, especially for SPA treatments and restaurant tables."},memberships:{question:"Can I purchase memberships?",answer:"Yes! We have various memberships: daily, weekly, monthly and annual. Combined packages including multiple services with up to 30% discount are also available."},experience_needed:{question:"Is experience required for classes?",answer:'No! We have programs for all fitness levels. Beginners get introductory briefings, personal consultations and "first steps" programs for safe workout start.'},payment_methods:{question:"What payment methods are accepted?",answer:"We accept Thai Baht payments: cash, card, or QR code."}},support:{title:"Support Service",description:"Our team is ready to help you during business hours. Contact us in any convenient way.",location:"Phuket, Thailand",hours:"Support during business hours"},whatsapp:{title:"WhatsApp Chat",description:"Quick responses in messenger. Booking, questions, support - all in one chat.",instant_replies:"Instant replies",personal_manager:"Personal manager"},consultation:{title:"Personal Consultations",description:"Individual approach to each guest. We'll help create a program for your goals.",free:"Free consultation"}},restaurant:JSON.parse('{"title":"Restaurant","description":"Immerse yourself in exceptional flavors from five different cuisines in our restaurant","hero":{"label":"Our Restaurant","badge":"Our Restaurant","title":"Exquisite Cuisine","highlight":"with Modern Twist","subtitle":"Our chefs create unique dishes by combining traditional recipes with new culinary techniques.","button":"Our Menu","menu_button":"Our Menu","reviews":"Excellent Reviews"},"menu":{"title":"Our Menu","description":"Discover a variety of flavors in our menu created by talented chefs","drinks_info":"Beverages are presented with beautiful icons instead of photos","tag":"Exquisite Dishes","sort_by":"Sort by:","popular":"Popular","add":"Add","add_to_order":"Add to Order","show_more":"Show More","view_all":"View Full Menu","categories":{"all":"All Dishes","breakfast":"Breakfast","soup":"Soups","salad":"Salads & Appetizers","grill":"Grilled Dishes","side":"Side Dishes","sauce":"Sauces","bread":"Bread","burger":"Burgers","shawarma":"Shawarma","dessert":"Desserts","tea":"Tea","coffee":"Coffee","coffee_signature":"Signature Coffee","smoothie":"Smoothies","mocktail":"Mocktails","juice":"Fresh Juices","cocktail":"Cocktails","wine":"Wine","beer":"Beer","strong":"Hard Drinks","liqueur":"Liqueurs","fitness":"Fitness Drinks","water":"Water","milk":"Milk Products","soft_drink":"Soft Drinks"},"tags":{"breakfast":"Breakfast","soup":"Soup","salad":"Salad","appetizer":"Appetizer","grill":"Grilled","main":"Main Course","dessert":"Dessert","drinks":"Beverages","popular":"Popular","vegetarian":"Vegetarian","vegan":"Vegan","healthy":"Healthy","spicy":"Spicy","seafood":"Seafood","meat":"Meat","sweet":"Sweet","cold":"Cold","hot":"Hot","fitness":"Fitness","pre-workout":"Pre-Workout","mass-gainer":"Mass Gainer","bcaa":"BCAA","recovery":"Recovery","electrolyte":"Electrolyte","fat-burner":"Fat Burner"},"sort":{"default":"Default","popular":"Popular First","price_low":"Price: Low to High","price_high":"Price: High to Low","name":"Alphabetical"},"items":{"kaif_breakfast":{"name":"KAIF Breakfast","description":"Our restaurant\'s signature breakfast"},"shakshuka_spinach_salmon":{"name":"Shakshuka with Spinach and Salmon","description":"Egg dish with spinach and tender salmon"},"shakshuka_tomato_feta":{"name":"Shakshuka with Tomatoes and Feta","description":"Traditional shakshuka with juicy tomatoes and feta cheese"},"syrniki_passion_fruit":{"name":"Syrniki with Sour Cream and Passion Fruit Sauce","description":"Tender homemade cottage cheese pancakes with original passion fruit sauce"},"toast_cream_cheese_ham":{"name":"Toast with Cream Cheese and Ham","description":"Crispy toast with tender cream cheese and quality ham"},"toast_salmon_avocado":{"name":"Toast with Salted Salmon and Avocado","description":"Exquisite combination of crispy toast, tender salmon and ripe avocado"},"toast_avocado_tomato":{"name":"Toast with Avocado and Tomatoes","description":"Light and healthy breakfast of crispy toast with avocado and juicy tomatoes"},"matsoni_apricot":{"name":"Matsoni with Apricot Jam","description":"Traditional Caucasian yogurt with natural apricot jam"},"buckwheat_chicken_mushrooms":{"name":"Buckwheat Porridge with Chicken, Mushrooms and Parmesan Sauce","description":"Nutritious buckwheat porridge with tender chicken, aromatic mushrooms and creamy sauce"},"okroshka_ayran":{"name":"Okroshka with Ayran","description":"Refreshing cold soup with fermented milk base, vegetables and herbs"},"okroshka_kvass":{"name":"Okroshka with Kvass","description":"Classic okroshka with kvass, selected vegetables, egg and fresh herbs"},"chikhirtma_corn":{"name":"Chikhirtma with Corn","description":"Traditional Georgian soup with rich flavor, complemented by sweet corn"},"borsch_classic":{"name":"Classic Borsch","description":"Traditional Slavic soup of rich ruby color with beef and vegetables"},"salad_potato_salmon":{"name":"Lettuce with Young Potato and Salted Salmon","description":"Fresh salad mix with young potato and tender salted salmon"},"vegetable_salad_cheese":{"name":"Fresh Vegetable Salad with Brynza","description":"Traditional fresh vegetable salad with tender brynza cheese"},"tomato_cucumber_greens":{"name":"Tomatoes, Cucumbers, Herbs","description":"Fresh juicy tomatoes and crispy cucumbers with aromatic herbs, dressed with sour cream or olive oil"},"hummus_chickpeas":{"name":"Hummus with Roasted Chickpeas","description":"Tender hummus with additional roasted chickpeas for texture"},"hummus_avocado_tomato":{"name":"Hummus with Avocado and Tomatoes","description":"Original hummus with ripe avocado and fresh tomatoes"},"hummus_grilled_shrimp":{"name":"Hummus with Grilled Shrimp","description":"Classic hummus complemented by juicy grilled shrimp"},"hummus_chicken_kebab":{"name":"Hummus with Chicken Kebab","description":"Hummus served with aromatic pieces of chicken kebab"},"tzatziki_olives_pepper":{"name":"Tzatziki with Olives and Pickled Pepper","description":"Refreshing yogurt sauce with cucumbers, garlic and herbs, complemented by olives and pickled pepper"},"chicken_kebab_yogurt":{"name":"Chicken Kebab (in Yogurt)","description":"Juicy kebab of chicken fillet marinated in yogurt with Eastern spices"},"beef_kebab":{"name":"Beef Kebab","description":"Juicy kebab of select beef, cooked over open fire"},"pork_neck_kebab":{"name":"Pork Neck Kebab","description":"Kebab of marinated pork neck with aromatic spices"},"caesar_grilled_shrimp":{"name":"Caesar with Grilled Shrimp","description":"Classic Caesar salad with juicy grilled shrimp"},"caesar_chicken_kebab":{"name":"Caesar with Chicken Kebab","description":"Traditional Caesar salad with tender chicken kebab"},"chicken_adjika_potato":{"name":"Chicken in Adjika with Potato","description":"Juicy chicken marinated in spicy adjika sauce with young potato garnish"},"lyulya_kebab_chicken":{"name":"Lyulya Kebab (Chicken)","description":"Minced kebab of chicken fillet with aromatic spices"},"lyulya_kebab_lamb":{"name":"Lyulya Kebab (Lamb)","description":"Traditional lyulya kebab of minced lamb with Eastern spices"},"lyulya_kebab_beef_pork":{"name":"Lyulya Kebab (Beef and Pork)","description":"Juicy lyulya kebab of mixed minced beef and pork"},"grilled_salmon":{"name":"Grilled Salmon","description":"Tender salmon fillet cooked over open fire"},"white_perch_fillet":{"name":"White Perch Fillet","description":"Tender white perch fillet grilled to perfection"},"grilled_shrimp":{"name":"Grilled Shrimp","description":"Juicy tiger shrimp grilled with herbs and garlic oil"},"italian_ice_cream":{"name":"Italian Ice Cream","description":"Authentic Italian gelato with various flavors"},"green_tea":{"name":"Green Tea","description":"Premium green tea with delicate aroma"},"black_tea":{"name":"Black Tea","description":"Classic black tea with rich flavor"},"ginger_honey_tea":{"name":"Ginger and Honey Tea","description":"Warming tea with fresh ginger and natural honey"},"mint_tea":{"name":"Mint Tea","description":"Refreshing herbal tea with fresh mint"},"jasmine_tea":{"name":"Jasmine Tea","description":"Aromatic tea with jasmine flowers"},"fruit_tea":{"name":"Fruit Tea","description":"Herbal tea blend with dried fruits and berries"},"thai_iced_tea":{"name":"Thai Iced Tea with Milk","description":"Traditional Thai tea served cold with condensed milk"},"espresso":{"name":"Espresso","description":"Classic Italian espresso with rich crema"},"americano":{"name":"Americano","description":"Espresso diluted with hot water"},"cappuccino":{"name":"Cappuccino","description":"Espresso with steamed milk and foam"},"latte":{"name":"Latte","description":"Smooth coffee with steamed milk"},"mocha":{"name":"Mocha","description":"Coffee drink with chocolate and steamed milk"},"iced_latte":{"name":"Iced Latte","description":"Cold latte with ice and milk foam"},"frappe":{"name":"Frappe","description":"Iced coffee drink blended with ice"},"smoothie_lime":{"name":"Lime-Lime","description":"Refreshing smoothie with double lime portion"},"smoothie_mango_passion":{"name":"Mango-Passion Fruit","description":"Fresh smoothie from ripe mango and passion fruit"},"banana_shake":{"name":"Banana Shake","description":"Tender banana shake with milk and vanilla"},"matcha_latte":{"name":"Matcha Latte","description":"Aromatic drink with Japanese green tea matcha"},"butterfly_tea":{"name":"Butterfly Pea Flower Tea","description":"Exotic blue tea that changes color"},"passion_fruit_mocktail":{"name":"Passion Fruit","description":"Refreshing drink from fresh passion fruit"},"pink_lemonade":{"name":"Pink Lemonade","description":"Gentle pink lemonade with berries"},"honey_lemon":{"name":"Honey and Lemon","description":"Healthy drink with natural honey and lemon"},"electrolyte":{"name":"Electrolyte","description":"Isotonic drink for restoring electrolyte balance"},"hibiscus_iced_tea":{"name":"Iced Hibiscus Tea","description":"Refreshing tea from hibiscus flowers"},"lemonade_classic":{"name":"Lemonade","description":"Classic lemonade from fresh lemons"},"mojito_virgin":{"name":"Mojito","description":"Non-alcoholic mojito with mint, lime and soda"},"orange_juice":{"name":"Orange Juice","description":"Fresh-squeezed orange juice"},"pineapple_juice":{"name":"Pineapple Juice","description":"Fresh-squeezed juice from ripe pineapple"},"apple_juice":{"name":"Apple Juice","description":"Fresh-squeezed apple juice"},"carrot_juice":{"name":"Carrot Juice","description":"Fresh-squeezed carrot juice"},"mango_juice":{"name":"Mango Juice","description":"Fresh-squeezed juice from ripe mango"},"prosecco":{"name":"Prosecco Sparkling Wine","description":"Italian sparkling wine"},"sauvignon_blanc":{"name":"Sauvignon Blanc White Wine","description":"French dry white wine"},"oatmeal_apple_almonds":{"name":"Oatmeal with Baked Apple and Caramelized Almonds","description":"Tender oatmeal with aromatic baked apple and crispy caramelized almonds"},"grilled_vegetables":{"name":"Grilled Vegetables","description":"Assortment of seasonal vegetables grilled to perfection"},"potatoes_herbs":{"name":"Potatoes with Fresh Herbs","description":"Boiled potatoes with aromatic fresh herbs and butter"},"buckwheat_mushrooms":{"name":"Buckwheat with Mushrooms","description":"Aromatic buckwheat porridge with sautéed mushrooms"},"rice_quail_eggs":{"name":"Rice with Quail Eggs and Spices","description":"Aromatic rice with tender quail eggs and eastern spices"},"sauce_tzatziki_mint":{"name":"Tzatziki with Mint","description":"Refreshing yogurt sauce with cucumbers, garlic, herbs and fresh mint"},"sauce_satsebeli":{"name":"Satsebeli","description":"Spicy Georgian sauce made from tomatoes, garlic, peppers and herbs"},"sauce_mustard":{"name":"Mustard Sauce","description":"Piquant sauce based on Dijon mustard with honey and spices"},"sauce_pesto":{"name":"Pesto","description":"Aromatic sauce made from basil and cilantro with nuts and spices"},"bread_butter_adjika":{"name":"Bread with Butter and Adjika","description":"Fresh bread with homemade butter and spicy adjika"},"shawarma_kaif":{"name":"KAIF Shawarma","description":"Signature KAIF shawarma with special spice blend and fresh vegetables"},"classic_cheeseburger":{"name":"Classic Cheeseburger","description":"Juicy beef patty with melted cheese, lettuce and special sauce"},"kaif_burger_lamb":{"name":"KAIF Burger with Lamb Patty and Bacon","description":"Premium burger with lamb patty, crispy bacon and signature sauce"},"burger_lamb_soy":{"name":"Burger with Lamb and Soy Sauce","description":"Tender lamb patty with Asian soy sauce and fresh vegetables"},"french_fries_burger":{"name":"French Fries for Burger","description":"Crispy french fries, perfect complement to any burger"},"french_fries_parmesan":{"name":"French Fries with Parmesan","description":"French fries with grated parmesan and aromatic herbs"},"homemade_yogurt":{"name":"Homemade Yogurt with Apricot Jam","description":"Tender homemade yogurt with natural apricot jam"},"napoleon":{"name":"Napoleon","description":"Classic layered Napoleon cake with tender cream"},"lava_cake_cherry":{"name":"Lava Cake with Cherry Jam","description":"Warm chocolate cake with liquid center and cherry jam"},"matcha_bomba":{"name":"Matcha Bomb","description":"Signature coffee drink with matcha"},"espresso_chocolate":{"name":"Espresso Chocolate","description":"Espresso with chocolate"},"espresso_negroni":{"name":"Espresso Negroni","description":"Coffee interpretation of the classic cocktail"},"pineapple_express":{"name":"Pineapple Express","description":"Coffee with pineapple notes"},"matcha_coco":{"name":"Matcha Coco","description":"Matcha with coconut milk"},"honey_lemon_espresso":{"name":"Honey Lemon Espresso","description":"Espresso with honey and lemon"},"kvass":{"name":"Kvass","description":"Traditional Russian kvass 0.5L"},"cranberry_juice":{"name":"Cranberry Juice","description":"Cranberry juice 0.3L"},"pina_colada":{"name":"Pina Colada","description":"Exotic cocktail with rum and coconut"},"aperol_spritz":{"name":"Aperol Spritz","description":"Italian aperitif with Aperol"},"bloody_mary":{"name":"Bloody Mary","description":"Classic cocktail with vodka and tomato juice"},"negroni":{"name":"Negroni","description":"Classic Italian cocktail"},"mojito_alcohol":{"name":"Alcoholic Mojito","description":"Classic Cuban cocktail with rum"},"pure_vodka":{"name":"Pure Vodka","description":"Vodka (50 ml)"},"whiskey_jack":{"name":"Jack Daniel\'s Whiskey","description":"Tennessee whiskey (50 ml)"},"rum_bacardi":{"name":"Bacardi Rum","description":"White rum (50 ml)"},"tequila_jose":{"name":"Jose Cuervo Tequila","description":"Mexican tequila (50 ml)"},"gin_bombay":{"name":"Bombay Gin","description":"London dry gin (50 ml)"},"cognac_hennessy":{"name":"Hennessy Cognac","description":"French cognac (50 ml)"},"martini_extra_dry":{"name":"Martini Extra Dry","description":"Dry vermouth (50 ml)"},"vermouth_chinzano":{"name":"Vermouth Chinzano","description":"Italian vermouth (50 ml)"},"martini_rose":{"name":"Martini Vermouth Rose","description":"Rose vermouth (50 ml)"},"singha_beer":{"name":"Singha Beer","description":"Thai light beer 0.33L"},"chang_beer":{"name":"Chang Beer","description":"Thai light beer 0.33L"},"leo_beer":{"name":"Leo Beer","description":"Thai light beer 0.33L"},"heineken_beer":{"name":"Heineken Beer","description":"Imported light beer 0.33L"},"alt_milk":{"name":"Alternative Milk","description":"Plant-based milk (oat, almond)"},"coconut_water":{"name":"Coconut Water","description":"Natural coconut water"},"c4_original_shot":{"name":"PRE-WORKOUT","description":"C4 Original Shot - energy boost before training"},"serious_mass_shake":{"name":"MASS GAINER","description":"Serious Mass Shake - high-calorie shake for muscle growth"},"xtend_eaa_recovery":{"name":"BCAA / EAA","description":"Xtend EAA Recovery - anti-catabolic post-workout support"},"electrolyte_boost":{"name":"ELECTROLYTE BOOST","description":"Replenish Minerals After Sweat Loss - hydration shot"},"l_carnitine_shot":{"name":"FAT BURNING","description":"L-Carnitine Shot - fat metabolism support"},"rejuvenation_program":{"name":"Rejuvenation Program","description":"Comprehensive anti-aging program"},"vacuum_oil":{"name":"Oil Vacuum Facial Cleansing","description":"Cleansing with nourishing oils"},"hydration_program":{"name":"Hydration and Radiance Program","description":"Intensive hydration for skin radiance"},"vacuum_men":{"name":"Men\'s Vacuum Facial Cleansing","description":"Specialized care for men\'s skin"},"express_care":{"name":"Express Care","description":"Quick procedure for fresh skin"},"facial_massage_care":{"name":"Facial Massage with Care","description":"Relaxing massage with care products"},"facial_massage":{"name":"Facial Massage","description":"Classic facial massage for relaxation"},"vacuum_subscription_5":{"name":"Vacuum Cleansing Subscription (5 standard procedures)","description":"Advantageous package of 5 standard procedures"},"vacuum_subscription_5_special":{"name":"Vacuum Cleansing Subscription (5 specialized procedures)","description":"Premium package of 5 specialized procedures"},"deep_bikini":{"name":"Deep Bikini","description":"Laser hair removal of intimate area"},"lower_back":{"name":"Lower back/Shoulder blades/Abdomen","description":"Hair removal of medium body areas"},"areola_line":{"name":"Areola/Abdominal line","description":"Hair removal of delicate areas"},"back_completely":{"name":"Full Back","description":"Complete back hair removal"},"buttocks_calves":{"name":"Buttocks/Calves/Thighs","description":"Hair removal of leg areas"},"legs_completely":{"name":"Full Legs","description":"Complete leg hair removal"},"arms_completely":{"name":"Full Arms","description":"Complete arm hair removal"},"face_lower":{"name":"Lower Third of Face","description":"Hair removal of chin area"},"armpits":{"name":"Armpits","description":"Armpit hair removal"},"men_2_zones":{"name":"Any 2 zones","description":"Hair removal of any two zones of choice"},"men_3_zones":{"name":"Any 3 zones","description":"Hair removal of any three zones of choice"},"men_4_zones":{"name":"Any 4 zones","description":"Hair removal of any four zones of choice"},"men_full_body":{"name":"Full Body","description":"Complete full body hair removal"},"men_face":{"name":"Upper lip/Chin/Cheeks/Neck","description":"Facial area hair removal"},"men_full_face":{"name":"Full Face","description":"Complete facial hair removal"},"men_armpits":{"name":"Armpits","description":"Armpit hair removal"},"men_chest_abdomen":{"name":"Chest/Abdomen completely","description":"Torso hair removal"},"men_subscription":{"name":"Full Body Subscription (5 sessions)","description":"Advantageous full hair removal package"},"complex_1":{"name":"Calves + Armpits + Deep Bikini","description":"Popular package for women"},"complex_2":{"name":"Armpits + Deep Bikini/Calves","description":"Basic hair removal package"},"complex_3":{"name":"Full Legs + Armpits + Deep Bikini","description":"Extended leg package"},"complex_4":{"name":"Full Arms + Full Legs + Armpits + Deep Bikini","description":"Maximum hair removal package"},"endosphere_full_body":{"name":"Full Body","description":"Endosphere therapy for full body figure correction"},"endosphere_face":{"name":"Hardware Facial Massage (Endosphere, RF lifting)","description":"Rejuvenating hardware facial massage"},"endosphere_subscription_6":{"name":"Endosphere Subscription (6 sessions)","description":"Advantageous package of 6 procedures"},"endosphere_subscription_12":{"name":"Endosphere Subscription (12 sessions)","description":"Maximum package of 12 procedures"},"manicure_no_coating":{"name":"Manicure without coating","description":"Classic manicure with nail plate treatment"},"manicure_base":{"name":"Manicure with base coating","description":"Manicure with protective base coating"},"manicure_gel":{"name":"Manicure with gel polish coating","description":"Manicure with long-lasting gel polish coating"},"gel_strengthening":{"name":"Gel strengthening without gel polish","description":"Natural nail strengthening with gel"},"gel_strengthening_polish":{"name":"Gel strengthening with gel polish","description":"Nail strengthening with colored coating"},"gel_french":{"name":"Gel polish French correction","description":"Classic French manicure with gel polish"},"nail_extension_short":{"name":"Classic nail extension short (up to 2mm)","description":"Short nail extension"},"nail_extension_long":{"name":"Nail extension (over 2mm)","description":"Long nail extension"},"nail_repair":{"name":"Nail repair","description":"Damaged nail restoration"},"pedicure_full_no_coating":{"name":"Full pedicure without coating","description":"Complete foot and nail treatment"},"pedicure_full_coating":{"name":"Full pedicure with coating","description":"Full pedicure with gel polish coating"},"pedicure_toes_no_coating":{"name":"Toe pedicure without coating","description":"Treatment of toe nails only"},"pedicure_toes_coating":{"name":"Toe pedicure with gel polish coating","description":"Nail treatment with colored coating"},"callus_removal":{"name":"Callus removal","description":"Professional callus removal"},"onycholysis_cleaning":{"name":"Onycholysis cleaning (top master)","description":"Treatment of nail plate detachment"},"womens_haircut":{"name":"Women\'s haircut","description":"Professional women\'s haircut"},"hair_wash_brushing":{"name":"Hair wash with brushing","description":"Hair washing with brush styling"},"bangs_haircut":{"name":"Bangs haircut","description":"Bangs correction and cutting"},"mens_haircut":{"name":"Men\'s haircut","description":"Stylish men\'s haircut"},"hair_styling":{"name":"Styling with brushing and styling products","description":"Professional hair styling"},"evening_styling":{"name":"Evening styling","description":"Festive styling for special occasions"},"coloring_roots":{"name":"Single-tone root coloring","description":"Regrowth root coloring"},"coloring_stretching":{"name":"Root coloring + color stretching along full length","description":"Complex coloring with color stretching"},"coloring_short":{"name":"Single-tone coloring short","description":"Full coloring of short hair"},"coloring_medium":{"name":"Single-tone coloring medium","description":"Full coloring of medium-length hair"},"coloring_long":{"name":"Single-tone coloring long","description":"Full coloring of long hair"},"total_blond_short":{"name":"Total blond short","description":"Short hair lightening to blond"},"total_blond_medium":{"name":"Total blond medium","description":"Medium-length hair lightening to blond"},"total_blond_long":{"name":"Total blond long","description":"Long hair lightening to blond"},"happiness_short":{"name":"Hair happiness treatment short","description":"Restorative procedure for short hair"},"happiness_medium":{"name":"Hair happiness treatment medium","description":"Restorative procedure for medium-length hair"},"happiness_long":{"name":"Hair happiness treatment long","description":"Restorative procedure for long hair"},"indian_head_massage":{"name":"Indian head massage","description":"Traditional Indian massage for hair growth"},"hair_express_care":{"name":"Express care","description":"Quick restorative procedure"}}},"bar":{"label":"Bar","title":"Our Bar","description":"We have everything to quench your thirst — from sports protein shakes to relaxing cocktails.","menu_button":"View Drinks Menu","feature1":{"title":"Signature Drinks","description":"Unique cocktails created by our mixologists"},"feature2":{"title":"Refreshing Mixes","description":"Freshly squeezed juices and fruit combinations"},"feature3":{"title":"Post-Workout Recovery Drinks","description":"Protein shakes and sports nutrition"}},"booking":{"label":"Booking","title":"Book a Table","description":"Reserve your table to guarantee your spot","coming_soon":"Online booking will be available soon. For now, please call us for reservations.","open_hours":"Open Hours","reservation":"Reservations","call_now":"Call Now"},"cuisines":{"title":"Our Cuisines","description":"Experience culinary delights from around the world"},"chef":"Chef\'s Recommendations","slider":{"slide1":{"title":"Exquisite Cuisine","description":"Discover unique flavors from five different world cuisines in our restaurant"},"slide2":{"title":"Comfortable Atmosphere","description":"Enjoy your meal in a cozy atmosphere with a view of the tropical garden"},"slide3":{"title":"Fresh Ingredients","description":"We use only fresh and quality ingredients to prepare our dishes"}},"bookTable":"Book a Table","dish_details":{"ingredients":"Ingredients","nutritional_info":"Nutritional Information"}}'),spa:JSON.parse('{"title":"SPA","description":"Rejuvenate your mind and body in Thailand\'s largest sauna","hero":{"badge":"Premium SPA","title":"Immerse yourself in the world of relaxation and beauty","subtitle":"Professional SPA treatments in the luxurious atmosphere of KAIF","book_online":"Book Online","book_whatsapp":"WhatsApp","book_now":"Book a Treatment","learn_more":"Learn More"},"services":{"title":"Our Services","subtitle":"Complete range of SPA and Beauty services for your comfort and beauty","categories":{"massage":"Massage","cosmetology":"Cosmetology","laser-hair-removal":"Laser Hair Removal","laser-men":"Laser Hair Removal for Men","laser-complex":"Laser Complexes","endosphere":"Endosphere Therapy","laser":"Laser Hair Removal","laser-complex-3":"Laser Complexes (3 procedures)","laser-complex-5":"Laser Complexes (5 procedures)","hair-care":"Hair Care","manicure":"Manicure","pedicure":"Pedicure","pro-pedicure":"PRO Master Pedicure","eyelashes":"Eyelashes","brows":"Brows and Eyelashes","sauna":"Sauna","hammam":"Hammam","treatments":"SPA Treatments"},"popular":"Popular","learn_more":"Learn More","show_more":"Show {{count}} more services","show_less":"Show Less","price_from":"from {{price}} ฿","duration_price":"{{duration}} min - {{price}} ฿","items":{"oil_massage":{"name":"Oil Massage","description":"Relaxing massage with natural oils for deep recovery"},"foot_massage":{"name":"Foot Massage","description":"Traditional Thai foot massage for fatigue relief"},"sport_massage":{"name":"Sports Massage","description":"Intensive massage for post-workout recovery"},"anti_cellulite_massage":{"name":"Anti-Cellulite Massage","description":"Specialized massage for body contouring"},"stone_massage":{"name":"Stone Massage","description":"Hot stone massage for deep relaxation"},"thai_massage":{"name":"Traditional Thai Massage","description":"Classic Thai massage on mat"},"head_shoulders":{"name":"Head and Shoulders Massage","description":"Relaxing massage for tension relief"},"oil_scrub":{"name":"Oil Massage + Scrub","description":"Complex procedure with peeling and massage"},"body_scrub":{"name":"Full Body Scrub","description":"Exfoliating treatment for entire body"},"wrap_anti_cell":{"name":"Body Wrap + Anti-Cellulite Massage","description":"Complex procedure for body contouring"},"vacuum_peeling":{"name":"Vacuum Facial with Peeling","description":"Deep pore cleansing with mechanical peeling"},"vacuum_standard":{"name":"Standard Vacuum Facial","description":"Classic facial cleansing procedure"},"hollywood_vacuum":{"name":"Hollywood Vacuum Facial","description":"Premium treatment for perfect skin condition"},"whitening_program":{"name":"Whitening Program (Pigmentation)","description":"Special program against pigmentation spots"},"rejuvenation_program":{"name":"Rejuvenation Program","description":"Comprehensive anti-aging program"},"vacuum_oil":{"name":"Oil Vacuum Facial Cleansing","description":"Cleansing with nourishing oils"},"hydration_program":{"name":"Hydration and Radiance Program","description":"Intensive hydration for skin radiance"},"vacuum_men":{"name":"Men\'s Vacuum Facial Cleansing","description":"Specialized care for men\'s skin"},"express_care":{"name":"Express Care","description":"Quick procedure for fresh skin"},"facial_massage_care":{"name":"Facial Massage with Care","description":"Relaxing massage with care products"},"facial_massage":{"name":"Facial Massage","description":"Classic facial massage for relaxation"},"vacuum_subscription_5":{"name":"Vacuum Cleansing Subscription (5 standard procedures)","description":"Advantageous package of 5 standard procedures"},"vacuum_subscription_5_special":{"name":"Vacuum Cleansing Subscription (5 specialized procedures)","description":"Premium package of 5 specialized procedures"},"deep_bikini":{"name":"Deep Bikini","description":"Laser hair removal of intimate area"},"lower_back":{"name":"Lower back/Shoulder blades/Abdomen","description":"Hair removal of medium body areas"},"areola_line":{"name":"Areola/Abdominal line","description":"Hair removal of delicate areas"},"back_completely":{"name":"Full Back","description":"Complete back hair removal"},"buttocks_calves":{"name":"Buttocks/Calves/Thighs","description":"Hair removal of leg areas"},"legs_completely":{"name":"Full Legs","description":"Complete leg hair removal"},"arms_completely":{"name":"Full Arms","description":"Complete arm hair removal"},"face_lower":{"name":"Lower Third of Face","description":"Hair removal of chin area"},"armpits":{"name":"Armpits","description":"Armpit hair removal"},"men_2_zones":{"name":"Any 2 zones","description":"Hair removal of any two zones of choice"},"men_3_zones":{"name":"Any 3 zones","description":"Hair removal of any three zones of choice"},"men_4_zones":{"name":"Any 4 zones","description":"Hair removal of any four zones of choice"},"men_full_body":{"name":"Full Body","description":"Complete full body hair removal"},"men_face":{"name":"Upper lip/Chin/Cheeks/Neck","description":"Facial area hair removal"},"men_full_face":{"name":"Full Face","description":"Complete facial hair removal"},"men_armpits":{"name":"Armpits","description":"Armpit hair removal"},"men_chest_abdomen":{"name":"Chest/Abdomen completely","description":"Torso hair removal"},"men_subscription":{"name":"Full Body Subscription (5 sessions)","description":"Advantageous full hair removal package"},"complex_1":{"name":"Calves + Armpits + Deep Bikini","description":"Popular women\'s complex"},"complex_2":{"name":"Armpits + Deep Bikini/Calves","description":"Basic hair removal complex"},"complex_3":{"name":"Full Legs + Armpits + Deep Bikini","description":"Extended leg complex"},"complex_4":{"name":"Full Arms + Full Legs + Armpits + Deep Bikini","description":"Maximum hair removal complex"},"endosphere_full_body":{"name":"Full Body","description":"Full body endosphere therapy for figure correction"},"endosphere_face":{"name":"Face apparatus massage (Endosphere, RF lifting)","description":"Rejuvenating apparatus face massage"},"endosphere_subscription_6":{"name":"Endosphere subscription (6 sessions)","description":"Advantageous package of 6 treatments"},"endosphere_subscription_12":{"name":"Endosphere subscription (12 sessions)","description":"Maximum package of 12 treatments"},"manicure_no_coating":{"name":"Manicure without coating","description":"Classic manicure with nail plate treatment"},"manicure_base":{"name":"Manicure with base coating","description":"Manicure with protective base coating"},"manicure_gel":{"name":"Manicure with gel polish coating","description":"Manicure with long-lasting gel polish coating"},"gel_strengthening":{"name":"Gel strengthening without gel polish","description":"Strengthening natural nails with gel"},"gel_strengthening_polish":{"name":"Gel strengthening with gel polish","description":"Nail strengthening with colored coating"},"gel_french":{"name":"Gel polish French correction","description":"Classic French manicure with gel polish"},"nail_extension_short":{"name":"Classic nail extension short (up to 2mm)","description":"Short nail extension"},"nail_extension_long":{"name":"Nail extension (over 2mm)","description":"Long nail extension"},"nail_repair":{"name":"Nail repair","description":"Damaged nail restoration"},"pedicure_full_no_coating":{"name":"Full pedicure without coating","description":"Complete foot and nail treatment"},"pedicure_full_coating":{"name":"Full pedicure with coating","description":"Full pedicure with gel polish coating"},"pedicure_toes_no_coating":{"name":"Toe pedicure without coating","description":"Treatment of toenails only"},"pedicure_toes_coating":{"name":"Toe pedicure with gel polish coating","description":"Nail treatment with colored coating"},"callus_removal":{"name":"Callus removal","description":"Professional callus removal"},"onycholysis_cleaning":{"name":"Onycholysis cleaning (top master)","description":"Treatment of nail plate detachment"},"womens_haircut":{"name":"Women\'s haircut","description":"Professional women\'s haircut"},"hair_wash_brushing":{"name":"Hair wash with brushing","description":"Hair washing with brush styling"},"bangs_haircut":{"name":"Bangs haircut","description":"Bangs correction and cutting"},"mens_haircut":{"name":"Men\'s haircut","description":"Stylish men\'s haircut"},"hair_styling":{"name":"Brushing with styling products","description":"Professional hair styling"},"evening_styling":{"name":"Evening styling","description":"Festive styling for special occasions"},"coloring_roots":{"name":"Single tone root coloring","description":"Coloring regrown roots"},"coloring_stretching":{"name":"Root coloring + color stretching along length","description":"Complex coloring with color stretching"},"coloring_short":{"name":"Single tone coloring short","description":"Full coloring of short hair"},"coloring_medium":{"name":"Single tone coloring medium","description":"Full coloring of medium length hair"},"coloring_long":{"name":"Single tone coloring long","description":"Full coloring of long hair"},"total_blond_short":{"name":"Total blond short","description":"Lightening short hair to blond"},"total_blond_medium":{"name":"Total blond medium","description":"Lightening medium length hair to blond"},"total_blond_long":{"name":"Total blond long","description":"Lightening long hair to blond"},"happiness_short":{"name":"Hair happiness treatment short","description":"Restorative treatment for short hair"},"happiness_medium":{"name":"Hair happiness treatment medium","description":"Restorative treatment for medium length hair"},"happiness_long":{"name":"Hair happiness treatment long","description":"Restorative treatment for long hair"},"indian_head_massage":{"name":"Indian head massage","description":"Traditional Indian massage for hair growth"},"hair_express_care":{"name":"Express care","description":"Quick restorative treatment"},"endosphere_spa_program":{"name":"Endosphere therapy SPA program","description":"Comprehensive SPA program with endosphere"},"shoulders_legs":{"name":"Shoulders and legs massage","description":"Specialized massage for tension relief"},"face_massage":{"name":"Face massage","description":"Relaxing facial massage for improved circulation"},"deep_thai":{"name":"Deep Thai massage","description":"Intensive Thai massage with deep muscle work"},"endosphere_6_procedures":{"name":"Endosphere therapy (6 procedures)","description":"Advantageous package of 6 procedures"},"endosphere_12_procedures":{"name":"Endosphere therapy (12 procedures)","description":"Maximum package of 12 procedures"},"endosphere_rf_lifting":{"name":"Endosphere RF lifting","description":"Rejuvenating apparatus facial massage"},"laser_armpits":{"name":"Laser armpit hair removal","description":"Armpit hair removal"},"laser_bikini":{"name":"Laser bikini hair removal","description":"Bikini area hair removal"},"laser_deep_bikini":{"name":"Laser deep bikini hair removal","description":"Intimate area hair removal"},"laser_shins":{"name":"Laser shin hair removal","description":"Shin hair removal"},"laser_legs_full":{"name":"Full leg laser hair removal","description":"Complete leg hair removal"},"laser_small_area":{"name":"Small area laser hair removal","description":"Small area hair removal (abdomen line, areola, fingers)"},"laser_arms_full":{"name":"Full arm laser hair removal","description":"Complete arm hair removal"},"classic_extension":{"name":"Classic extension","description":"Individual lash extension for natural effect"},"volume_1_5d":{"name":"1.5D volume","description":"Light volume for natural effect"},"volume_2d":{"name":"2D volume","description":"Medium volume for expressive look"},"volume_3d":{"name":"3D volume","description":"Rich volume for bright appearance"},"hollywood_volume":{"name":"Hollywood volume","description":"Maximum volume for dramatic effect"},"eyelash_removal":{"name":"Eyelash removal","description":"Safe removal of extended eyelashes"},"brow_correction":{"name":"Brow correction","description":"Professional brow shape correction"},"brow_tinting":{"name":"Brow tinting","description":"Brow tinting with permanent color"},"brow_correction_tinting":{"name":"Brow correction and tinting","description":"Comprehensive brow care"},"brow_lamination_complex":{"name":"Lamination + correction + brow tinting","description":"Complete complex for perfect brows"},"eyelash_lamination_tinting":{"name":"Lamination + eyelash tinting","description":"Eyelash lamination and tinting"},"full_lamination_complex":{"name":"Full lamination complex","description":"Correction + brow tinting + lamination + eyelash tinting"},"manicure_base_coating":{"name":"Manicure with base coating","description":"Manicure with protective base coating"},"nail_removal":{"name":"Coating removal","description":"Safe gel coating removal"},"nail_design":{"name":"Nail design","description":"Artistic nail design"},"french_manicure":{"name":"French manicure","description":"Classic French manicure (additional charge)"},"pedicure_no_coating":{"name":"Pedicure without coating","description":"Classic pedicure without coating"},"pedicure_base_coating":{"name":"Pedicure with base coating","description":"Pedicure with protective coating"},"pedicure_coating_removal":{"name":"Coating removal","description":"Old coating removal"},"pro_pedicure_no_coating":{"name":"PRO master pedicure without coating","description":"Professional pedicure by high-class master"},"pro_pedicure_base_coating":{"name":"PRO master pedicure with base coating","description":"Professional pedicure with coating"},"pro_pedicure_gel_strengthening":{"name":"PRO master pedicure with gel strengthening","description":"Professional pedicure with strengthening"},"pro_full_pedicure_no_coating":{"name":"PRO master full pedicure without coating","description":"Comprehensive professional care"},"pro_full_pedicure_coating":{"name":"PRO master full pedicure with coating","description":"Maximum care from professional"},"pro_callus_removal":{"name":"PRO master callus removal","description":"Professional callus removal"},"pro_coating_removal":{"name":"PRO master coating removal","description":"Professional coating removal"},"pro_medical_pedicure":{"name":"PRO master medical pedicure","description":"Medical pedicure for problem feet"}}},"features":{"title":"Why Choose Us","subtitle":"We strive to provide you with an exceptional relaxation and care experience","premium_quality":{"title":"Premium Quality","description":"We use only the best products and equipment for all treatments"},"full_relaxation":{"title":"Complete Relaxation","description":"We create a comfortable atmosphere for your relaxation and rest"},"experienced_masters":{"title":"Experienced Masters","description":"Specialists with years of experience and continuous skill development"},"individual_approach":{"title":"Individual Approach","description":"We consider your wishes and features for maximum results"}},"faq":{"badge":"SPA Questions","title":"Frequently Asked Questions","subtitle":"Everything you need to know about our SPA services and treatments","questions":{"services":{"question":"What SPA services do you offer?","answer":"We offer a full range of SPA services: massage (Thai, oil, sports), cosmetology treatments, laser hair removal, manicure, pedicure, hair care, as well as sauna and hammam."},"booking":{"question":"How to book a SPA treatment?","answer":"You can book by phone +66 62 480 5877, via WhatsApp or in person at our center. We recommend booking in advance, especially for popular treatments."},"policy":{"question":"What are the cancellation rules?","answer":"Please notify us of cancellation at least 24 hours before the scheduled time. Cancellation less than 24 hours in advance may incur a 50% cancellation fee."},"payment":{"question":"What payment methods are accepted?","answer":"We accept cash (THB, USD, EUR), bank cards of all systems, as well as mobile payments. Payment is made after the treatment."},"preparation":{"question":"Do I need to bring anything with me?","answer":"We provide everything you need: towels, robes, slippers and cosmetic products. You just need to come and relax."},"gifts":{"question":"Are there gift certificates?","answer":"Yes! We offer gift certificates of various denominations for any SPA services. They can be purchased at our center or ordered by phone."}}},"booking":{"badge":"Booking","title":"Book a Treatment","description":"Book a SPA treatment or beauty service for complete relaxation","online":{"title":"Online Booking","description":"Convenient online booking for any treatment. Choose your specialist, time and service in just a few clicks. Instant booking confirmation.","hours":"24/7 online booking","feature":"Choose specialist and time","button":"Book Online"},"phone":{"title":"Call to Book","description":"Contact us by phone for quick booking. Our consultants will help you choose the right treatment and time.","hours":"Call reception: 9:00 - 21:00","location":"Phuket, Thailand"},"whatsapp":{"title":"WhatsApp Chat","description":"Message us on WhatsApp for convenient booking. We will respond quickly and help you choose the best time.","hours":"Online support: quick response","feature":"Quick responses","button":"Message on WhatsApp"}},"testimonials":{"title":"Guest Reviews","subtitle":"Discover what our satisfied clients say about us","reviews":{"1":{"text":"Amazing experience! The Thai massage was incredibly relaxing, and the atmosphere was simply magical. I will definitely come back again.","author":"Anna Petrova","title":"Regular Client"},"2":{"text":"Professional masters, quality treatments and attention to detail. This is the best SPA center I\'ve visited in Phuket.","author":"Ekaterina Sidorova","title":"Guest from Moscow"},"3":{"text":"Wonderful place for rest and recovery. I especially loved the Finnish sauna and jacuzzi. Highly recommend to everyone!","author":"Mikhail Volkov","title":"KAIF Resident"}}},"facility":{"title":"Our Facilities","largest_sauna":"Largest sauna in Thailand (50m²)","hammams":"Thai and Turkish hammams"}}'),sports:{title:"Sports Facilities",description:"State-of-the-art exercise facilities for everyone",hero:{tag:"Fitness & Sports",title:"Reach new <span>sports heights</span> with KAIF",subtitle:"Our premium sports facilities are designed to accommodate various fitness levels and goals.",cta:"Explore Facilities",primary_cta:"Book a training",secondary_cta:"Learn more",stats:{facilities:"Sports Facilities",trainers:"Professional Trainers",access:"Modern Equipment"}},gym:{tag:"Our Services",facility_tag:"Fitness",section_title:"Premium Sports Facilities",section_subtitle:"Discover the world of fitness and sports at KAIF Jungle Club. Our modern services are designed to give you the opportunity to train with pleasure and reach new heights.",title:"Gym",description1:"Spacious modern gym with cardio and strength equipment of high class. The gym is equipped with everything necessary for full-fledged training and maintaining physical fitness.",description2:"Guests have access to personal lockers, showers, as well as personal trainer services by appointment."},dance:{facility_tag:"Dancing",title:"Dance Studio",description1:"Spacious dance studio with professional parquet flooring, mirrored walls and modern audio system.",description2:"The studio offers group and individual lessons in various directions: modern dance, ballroom dancing, yoga, stretching, pilates and other directions.",schedule_button:"Schedule"},gallery:{tag:"Our Moments",title:"Gallery",subtitle:"Captured moments of sports life at KAIF Jungle Club & SPA. Join our community and share your own achievements",yoga:"Sunset Yoga",subtitle_yoga:"Daily classes",training:"Training with a personal trainer",subtitle_training:"Individual approach",swimming:"Swimming Pool",subtitle_swimming:"Relaxation and recovery"},schedule:{tag:"Planning",title:"SCHEDULE",subtitle:"SELECT DAY OF WEEK",minutes:"min",description:"Weekly class schedule with professional instructors",coming_soon:"Training schedule will be available soon. For current information, please contact us.",contact_button:"Contact Us"},facilities:{tag:"Our facilities",title:"Modern <span>sports</span> spaces",subtitle:"KAIF offers a wide selection of premium sports spaces with cutting-edge equipment and professional trainers to help you achieve your fitness goals.",gym:{title:"Gym",description:"Over 70 pieces of professional equipment",hours:"07:00 - 22:00",capacity:"Up to 40 people",description1:"Our gym is equipped with modern premium equipment from leading manufacturers. Here you will find everything you need for effective workouts - from free weights to the latest generation of cardio machines.",description2:"The spacious room with panoramic windows creates the perfect atmosphere for training, and professional trainers are always ready to help create an individual program.",feature1:"Premium Technogym and Life Fitness equipment",feature2:"Functional training area",feature3:"Individual training with certified trainers"},book_button:"Book a training session",fight:{title:"Fight Club",description:"Professional boxing and MMA facility",hours:"07:00 - 22:00",capacity:"Up to 25 people",description1:"KAIF Fighting Club is a modern space for training in various martial arts. Professional ring, punching bags, heavy bags, and special flooring create ideal conditions for both beginners and experienced fighters.",description2:"Our trainers are experienced fighters and champions who will help you master techniques and achieve high results in your chosen martial art.",feature1:"Professional boxing ring",feature2:"Boxing, Muay Thai, and MMA training",feature3:"Trainers with international certifications"},fight_club:{title:"Fight Club",description:"Professional boxing and MMA facility",hours:"07:00 - 22:00",capacity:"Up to 25 people",description1:"KAIF Fighting Club is a modern space for training in various martial arts. Professional ring, punching bags, heavy bags, and special flooring create ideal conditions for both beginners and experienced fighters.",description2:"Our trainers are experienced fighters and champions who will help you master techniques and achieve high results in your chosen martial art.",feature1:"Professional boxing ring",feature2:"Boxing, Muay Thai, and MMA training",feature3:"Trainers with international certifications"},dance:{title:"Dance Studio",description:"For yoga and dance classes",hours:"07:00 - 22:00",capacity:"Up to 30 people",description1:"Spacious dance studio with professional flooring, mirrored walls and advanced audio system creates ideal conditions for various dance styles and group classes.",description2:"Classes in modern and classical dance styles are held here, as well as group fitness training under the guidance of experienced instructors.",feature4:"Flexible schedule for group and individual classes",schedule_title:"Classes and Schedule",schedule_subtitle:"Find the right class",filter_label:"Filter:",filter_all:"All",filter_group:"Group",filter_personal:"Personal",filter_events:"Events"}},membership:{title:"Membership Options",description:"Choose the plan that works for you"},charity:{title:"Charity Workouts",description:"Saturday workouts with professional athletes, all proceeds go to Child Watch Phuket Foundation"}},banya:{title:"Russian Banya",description:"Panoramic Russian bathhouse overlooking the jungle",hero:{badge:"Best Banya in Phuket",title:'Panoramic <span className="highlight">Russian Banya</span>',title_part1:"Russian",title_part2:"Banya",location:"Phuket",area_unit:"m²",feature:"Largest banya on the island",area:"150 square meters",subtitle:"Banya made from Siberian cedar and Altai linden",book_button:"Book Now",contacts_button:"Contacts",scroll:"Scroll",images:{panoramic:"Panoramic sauna 150 m²",private:"Private sauna",public:"Public sauna"}},features:{badge:"Best Banya in Phuket",title:'Why Choose <span className="highlight">Us</span>',subtitle:"The only panoramic Russian banya in Phuket made from natural Siberian cedar and Altai linden materials",materials:{title:"Natural Materials",description:"100% natural finish from Siberian wood species",items:{cedar:"Siberian Cedar",linden:"Altai Linden",birch:"Karelian Birch",coating:"Eco-friendly finishes",aromatherapy:"Natural aromatherapy"}},panoramic:{title:"Panoramic Design",description:"Unique architecture with tropical jungle views",items:{area:"150 square meters",windows:"Panoramic windows",view:"Jungle views",lighting:"Natural lighting",harmony:"Harmony with nature"}},safety:{title:"Safety",description:"Compliance with all international safety standards",items:{fire:"Fire safety",ventilation:"Ventilation system",emergency:"Emergency lighting",medical:"Medical assistance",security:"24/7 security"}},wellness:{title:"Wellness Programs",description:"Signature wellness programs by master attendants",items:{russian:"Russian banya ritual",finnish:"Finnish sauna",aromatherapy:"Aromatherapy",massage:"Steam room massage",herbs:"Herbal infusions"}},service:{title:"Professionalism",description:"Team of experienced banya masters and steam specialists",items:{certified:"Certified attendants",traditions:"Russian traditions",individual:"Individual approach",consultation:"Health consultations",quality:"Quality service"}}},services:{badge:"Banya Programs",title:"Choose Your Banya Ritual",description:"From panoramic banya with jungle views to private VIP rituals with master attendants",rituals:{intro:{title:"Introductory Steaming",subtitle:"Light steam",duration:"5-8 min",price:"1,200 THB",description:"Contact warming of back and legs with birch brooms. Light steam without turning over"},classic:{title:"Classic Steaming",subtitle:"Medium steam",duration:"10-15 min",price:"1,800 THB",description:"Steaming with oak brooms in one session. Thorough whole body steaming with aromatic steam"},artesian:{title:"Artesian",subtitle:"Contrast steaming",duration:"15-20 min",price:"2,500 THB",description:"Classic steaming with oak brooms with contrast of cool mineral water. Bubble contrast sensations"},gravity:{title:"Gravity",subtitle:"Weightless steaming",duration:"15-20 min",price:"2,500 THB",description:"Classic steaming with subsequent floating in a warm pool. Complete relaxation and weightlessness"},salt_fire:{title:"Fire Start",subtitle:"Salt steaming",duration:"15-20 min",price:"2,500 THB",description:"Classic steaming with sea salt application and warming through a sheet. Salt cave effect"},warrior_path:{title:"Warrior's Path",subtitle:"Contrast steaming",duration:"20-25 min",price:"3,500 THB",description:"Steaming in two sessions with cold water dousing between them. Back warming and kvass refreshment"},stalwar:{title:"Thor's Power",subtitle:"Steelworker's steaming",duration:"15-20 min",price:"3,500 THB",description:"Dynamic steaming on high hot steam. Tones the body and relieves muscle tension"},honey:{title:"Honey Steaming",subtitle:"With natural honey",duration:"15-20 min",price:"4,000 THB",description:"Author's steaming with Canadian brooms with honey application. Vitamins through open pores and summer meadow aroma"},royal:{title:"Royal Steaming",subtitle:"Honey-salt scrub",duration:"25-30 min",price:"4,500 THB",description:"Royal steaming with Canadian brooms from both sides. Deep scrub with honey and sea salt cleanses the skin"},valhalla:{title:"Valhalla",subtitle:"Group steaming",duration:"10-20 min",price:"3,500 THB",description:"Steaming with fan and brooms for a group of 3-5 people. Foot bath with herbs and sea stones"}},coming_soon:{title:"Coming Soon",description:"We are preparing unique banya programs with traditional Russian rituals and modern wellness procedures",subtext:"Stay tuned — we will update this section soon!"},popular:"Popular"},gallery:{badge:"GALLERY",title:"Gallery",subtitle:"Atmosphere of authentic Russian banya",steam_room:"Steam Room",steam_room_desc:"Classic Russian steam room with birch brooms",rest_area:"Rest Area",rest_area_desc:"Comfortable rest area after steaming",cold_pool:"Cold Pool",cold_pool_desc:"Cold water pool for contrast procedures",hot_stones:"Hot Stones",hot_stones_desc:"Red-hot stones for steam creation",tea_ceremony:"Tea Ceremony",tea_ceremony_desc:"Traditional tea drinking after banya",lounge:"Lounge Zone",lounge_desc:"Spacious relaxation area"},faq:{badge:"Questions & Answers",title:'Frequently Asked <span className="highlight">Questions</span>',subtitle:"Answers to the most popular questions about our banya",questions:{panoramic:{question:"What's special about the panoramic banya?",answer:"Our banya is unique with several features: 150 square meters with panoramic jungle windows, built from Siberian cedar and Altai linden - premium natural materials. It's the only panoramic Russian banya in Phuket where you can enjoy traditional banya rituals with tropical nature views."},procedures:{question:"What procedures are included in the banya ritual?",answer:"Depending on your chosen program you'll receive: classic banya ritual with birch brooms, aromatherapy with essential oils, herbal infusions and teas."},materials:{question:"What materials is the banya built from?",answer:"The banya is built exclusively from natural eco-friendly materials: Siberian cedar, Altai linden, Karelian birch. All finishes are natural, without chemical additives. Such materials create a special microclimate and provide natural aromatherapy."}}},booking:{badge:"Booking",title:'Book the <span className="highlight">Banya</span>',description:"Contact us through convenient channels for booking",cta:{title:'Ready to immerse in the world of <span className="highlight">Russian Banya</span>?',description:"Contact us for detailed information about prices, availability and features of our banya programs",button:"Go to Contacts"},contact:{whatsapp:{title:"WhatsApp",value:"Book via WhatsApp"},location:{title:"Location",value:"Kathu, Phuket"},hours:{title:"Hours",value:"17:00 - 22:00"}},book_whatsapp_button:"Book via WhatsApp",call_now_button:"Call Now"}},about:{title:"About Us",description:"KAIF - Jungle Club & Spa is Phuket's premier wellness complex",overview:{title:"Complex Overview",description:"Detailed information about all our facilities"},features:{title:"Key Features",largest_sauna:"Thailand's largest sauna (50m²)",hammams:"Thai and Turkish hammams",restaurant:"Restaurant with 5 cuisines",dance_studio:"Dance and yoga studio (available for rent)",gym:"Fitness center with 70+ equipment",pool:"25m swimming pool",massage:"Various massage techniques",fight_club:"Fight club",kids_room:"Kids room (ages 3-14)"},gallery:{title:"Gallery",description:"High-quality photos of all facilities"},mission:{title:"Our Mission",description:"To provide an exceptional wellness experience in Phuket"}},promotions:{title:"Promotions",description:"Special offers and deals",day_pass:{title:"Day in Complex",price:"390 THB",description:"Access to gym, pool, ice bath and sauna",terms:"Terms and conditions apply"},charity:{title:"Charity Workout",price:"200 THB",description:"Saturday training with professional athletes",foundation:"All proceeds go to Child Watch Phuket Foundation"},seasonal:{title:"Seasonal Offers",description:"Limited-time offers"},loyalty:{title:"Loyalty Program",description:"Rewards for our regular customers"}},contacts:{title:"Contact Us",hero:{title:"Contact Us",subtitle:"Choose a convenient way to contact us"},cta:{primary:"Contact Us",secondary:"Our Address"},form:{title:"Get in Touch",success:"Your message has been sent successfully!",error:"An error occurred. Please try again."},info:{title:"Contact Us",subtitle:"Choose a convenient way to contact us",address:{title:"Address",text:"73, Baan Chalekiri Village, 6 Pra Phuket Keaw Road, Kathu",country:"Phuket, Thailand",directions:"Get Directions"},phone:{call_now:"Call Now"},email:{title:"Email",response:"Response within 24 hours"},hours:{title:"Opening Hours",daily:"Daily: 7:00 AM - 10:00 PM",booking:"Booking 24/7"},social:{title:"Social Media",subtitle:"Follow us for the latest updates and promotions"},whatsapp:{text:"Message on WhatsApp",greeting:"Hello! I would like to make a booking at KAIF"},buttons:{get_directions:"Get Directions",contact:"Contact",book:"Book Now"}},social:{title:"Follow us on social media",subtitle:"Stay up to date with the latest KAIF news and promotions"},whatsapp:{message_contact:"Hello! I would like to contact KAIF",message_book:"Hello! I would like to book a service at KAIF",message_general:"Hello! I have a question about KAIF"},map:{title:"How to find us",subtitle:"Convenient location in the center of Kathu, Phuket"},feedback:{title:"Feedback",description:"We value your opinion"}},gallery:{overline:"Gallery",title:"KAIF Experiences",subtitle:"Immerse yourself in the KAIF atmosphere through our photo gallery. Get acquainted with our services and complex facilities.",filters:{all:"All",spa:"SPA",fitness:"Fitness"},slides:{thai_massage:{title:"Thai Massage",description:"Traditional Thai massage performed by experienced masters. Energy restoration and body harmony."},aromatherapy:{title:"Aromatherapy",description:"Relaxing treatments with premium natural essential oils."},gym:{title:"Gym",description:"Over 70 modern premium equipment. Professional equipment for all types of workouts."},facial:{title:"Cosmetology",description:"Professional facial treatments using premium cosmetics."}}},footer:{navigation:"Navigation",brand:{description:"Premium wellness complex in Phuket. We create a unique wellness experience to restore harmony of body and soul."},services:{title:"Services",sauna:"Sauna & Hammam",fitness:"Fitness Center",fight_club:"Fight Club"},schedule:{daily:"Daily",hours:"7:00 - 22:00"},copyright:"All rights reserved.",legal:{privacy:"Privacy Policy",terms:"Terms of Service"}},terms:{title:"Terms of Service",intro:"These Terms of Service govern the provision of services by the KAIF wellness complex on Phuket Island, Thailand.",general:{title:"1. General Provisions",content:"By using our services, you agree to these terms. KAIF provides SPA, fitness, restaurant and Russian banya services."},booking:{title:"2. Booking and Cancellation",content:"Service booking is done by phone or via WhatsApp. Cancellation is possible no later than 24 hours before the scheduled time."},rules:{title:"3. Visiting Rules",content:"Visitors must observe hygiene and safety rules. The administration reserves the right to refuse service for violations of established rules."},liability:{title:"4. Liability",content:"KAIF is not responsible for visitors' personal belongings. All procedures are performed by qualified specialists in compliance with international safety standards."},contacts:{title:"5. Contacts",content:"For all questions contact us:",email:"Email: info@kaif-phuket.com",phone:"Phone: +66 62 480 5877",address:"Address: Phuket, Thailand"}},privacy:{title:"Privacy Policy",intro:"This Privacy Policy defines the procedure for processing and protecting personal data of users of the KAIF wellness complex.",collection:{title:"1. Information Collection",content:"We collect only the information necessary to provide quality services: name, contact information, service preferences."},usage:{title:"2. Information Usage",content:"Your data is used exclusively for procedure booking, informing about new services and improving service quality."},protection:{title:"3. Data Protection",content:"We apply modern information protection methods and do not transfer personal data to third parties without your consent."},contacts:{title:"4. Contacts",content:"For questions about personal data processing contact:",email:"Email: info@kaif-phuket.com",phone:"Phone: +66 62 480 5877"}},promo:{title:"LAST CHANCE FOR CURRENT PRICES",subtitle:"Get your gym all-inclusive passes before rates go up on August 1"}},V={page_titles:{home:"KAIF | Jungle Club & Spa",restaurant:"Ресторан KAIF | Авторская кухня и изысканные блюда",spa:"СПА KAIF | Роскошные спа-процедуры и релаксация",sports:"Спорт KAIF | Современный фитнес и боевые искусства",banya:"Баня KAIF | Традиционная русская баня",contacts:"Контакты KAIF | Свяжитесь с нами"},common:{book:"Забронировать",book_now:"Забронировать",photo_placeholder:"Фото будет добавлено",learn_more:"Узнать больше",view_all:"Смотреть всё",read_more:"Читать далее",submit:"Отправить",scroll_down:"Прокрутить вниз",scrollDown:"Прокрутить вниз",name:"Имя",email:"Email",phone:"Телефон",message:"Сообщение",date:"Дата",time:"Время",people:"Количество человек",special_requests:"Особые пожелания",address:"73, Baan Chalekiri Village, 6 Pra Phuket Keaw Road, Kathu",phone_number:"+66 62 480 5877",select_language:"Выбрать язык",exploreMore:"Подробнее",contact_us:"Связаться с нами",from:"от",categories:"Категории",activity:"АКТИВНОСТЬ",relaxation:"РЕЛАКСАЦИЯ"},navigation:{home:"Главная",restaurant:"Ресторан",spa:"СПА",sports:"Спорт",banya:"Баня",about:"О нас",promotions:"Акции",contacts:"Контакты"},home:{hero:{title:"KAIF - Jungle Club & Spa",subtitle:"Премиальный оздоровительный комплекс",cta:"Наши услуги",overline:"Премиальный комплекс на Пхукете",mainTitle:"KAIF",services:"Наши услуги",bookNow:"Забронировать",virtualTour:"Виртуальный тур",slideAlt:"KAIF - Jungle Club & Spa",stats:{zones:"ЗОН ОТДЫХА",sauna:"САУНА",equipment:"ТРЕНАЖЕРОВ"},heroServices:{gym:{title:"Тренажерный зал",description:"Более 70 современных тренажеров в просторном зале"},martialArts:{title:"Боевые искусства",description:"MMA, бокс, муай-тай с профессиональными тренерами"},pool:{title:"Бассейн 25м",description:"Олимпийский стандарт с подогревом воды"},spa:{title:"СПА-центр",description:"Тайский массаж, ароматерапия, релаксация"},restaurant:{title:"Ресторан",description:"5 кухонь мира с панорамной террасой"},beauty:{title:"Салон красоты",description:"Косметология, уходы, парикмахерские услуги"}}},philosophy:{overline:"НАША ФИЛОСОФИЯ",title:"Пространство для гармонии и саморазвития",paragraph1:"Мы создаем пространство, где жизнь становится ярче. Наша миссия – сделать отдых и заботу о себе не обязанностью, а удовольствием. KAIF – это место, где вы восстанавливаете силы, заряжаетесь энергией и наслаждаетесь каждым моментом.",paragraph2:"Здесь всё устроено так, чтобы вам хотелось возвращаться: тренировки, которые вдохновляют, отдых, который наполняет, и атмосфера, которая дарит настоящий кайф. Мы верим, что гармония – это не роскошь, а необходимость, и делаем её доступной для вас.",quote:"Здоровье – это не просто отсутствие болезней, а состояние полного физического, душевного и социального благополучия",imageAlt:"KAIF - пространство для гармонии и саморазвития",principle1:{title:"Комфорт и вдохновение",text:"Создаем атмосферу, где каждая тренировка приносит удовольствие"},principle2:{title:"Баланс и гармония",text:"Премиальный сервис для равновесия тела и духа"},principle3:{title:"Целостный подход",text:"Все зоны KAIF работают вместе для вашего благополучия"}},services:{title:"Наши услуги",subtitle:"Выберите свой путь: динамичная активность или расслабляющая релаксация",zones:{activity:"Активность",relax:"Релаксация"},fitness:{title:"Фитнес-центр",description:"Современный тренажерный зал с профессиональным оборудованием для всех видов тренировок.",features:["70+ современных тренажеров","Кардио-зона","Функциональный тренинг","Персональные тренировки"]},combat:{title:"Боевые искусства",description:"Профессиональные тренировки по MMA, боксу и муай-тай под руководством опытных тренеров.",features:["MMA и бокс","Муай-тай","Профессиональный ринг","Групповые и индивидуальные занятия"]},pool:{title:"Бассейн",description:"25-метровый бассейн олимпийского стандарта для плавания и водных тренировок.",features:["25м олимпийский стандарт","Подогрев воды","Aqua-фитнес","Детская зона"]},spa:{title:"СПА-центр",description:"Оазис спокойствия с широким спектром расслабляющих и восстанавливающих процедур.",features:["Тайский массаж","Aromatherapy","Горячие камни","Релакс-зоны"]},banya:{title:"Русская баня",description:"Самая большая русская баня на Пхукете с традиционными процедурами.",features:["50m2 русская баня","Веники и ароматы","Парные процедуры","Чайная церемония"]},restaurant:{title:"Ресторан",description:"Изысканная авторская кухня с 50+ уникальными блюдами от шеф-повара.",features:["50+ авторских блюд","Фирменные рецепты","Винная карта","Панорамная терраса"]},learn_more:"Подробнее"},promotions:{title:"Специальные предложения",day_pass:{title:"День в комплексе",price:"390 THB",description:"Доступ к тренажерному залу, бассейну, ледяной купели и сауне"},charity:{title:"Благотворительная тренировка",price:"200 THB",description:"Субботняя тренировка с профессиональными спортсменами, сборы идут в фонд Child Watch Phuket Foundation"}},about:{badge:"О комплексе",title:"Многофункциональный<br />комплекс KAIF",description1:"KAIF PHUKET – это премиальный комплекс, где вы восстанавливаете силы, заряжаетесь энергией и наслаждаетесь каждым моментом. Всё здесь создано так, чтобы вам хотелось вернуться: тренировки, которые вдохновляют, отдых, который наполняет, и атмосфера, которая дарит настоящий кайф.",description2:"Мы создали уникальное пространство на Пхукете, где премиальный сервис встречается с тайским гостеприимством. KAIF — это не просто спа-комплекс, это философия здорового образа жизни и гармонии.",stats:{banya:"Русская баня",equipment:"Тренажеров",dishes:"Авторских блюд",pool:"Олимпийский бассейн"},features:{spa:{title:"СПА-комплекс",description:"Самая большая сауна в Таиланде, хаммам и массажные кабинеты"},gym:{title:"Тренажерный зал",description:"Более 70 современных тренажеров и профессиональные тренеры"},martial:{title:"Боевые искусства",description:"MMA, бокс, муай-тай с профессиональными тренерами"},pool:{title:"Олимпийский бассейн",description:"25-метровый бассейн с подогревом и аква-фитнесом"},restaurant:{title:"Ресторан",description:"50+ авторских блюд от шеф-повара и панорамная терраса"},beauty:{title:"Салон красоты",description:"Косметология, уходы, парикмахерские услуги"}}},about_preview:{title:"О KAIF",description:"KAIF - это премиальный оздоровительный комплекс на Пхукете, предлагающий услуги мирового класса для ума, тела и души",features:{largest_sauna:"Самая большая сауна в Таиланде (50м²)",hammams:"Тайский и турецкий хаммам",restaurant:"Ресторан с 5 кухнями",gym:"Тренажерный зал с более чем 70 тренажерами",pool:"Бассейн 25м",fight_club:"Профессиональный бойцовский клуб"}},location:{title:"Как нас найти",description:"Удобно расположены в Кату, всего в нескольких минутах от Патонга"}},facilities:{overline:"НАШИ ФАЦИЛИТИ",title:"Пространство для гармонии и саморазвития",subtitle:"Мы создаем пространство, где жизнь становится ярче. Наша миссия — сделать отдых и заботу о себе не обязанностью, а удовольствием",gym:{name:"Тренажеров",description:"Современное оборудование для эффективных тренировок"},banya:{name:"Русская баня",description:"Самая большая панорамная русская парная на Пхукете"},restaurant:{name:"Мест в ресторане",description:"Ресторан на открытом воздухе"},pool:{name:"Бассейн",description:"Олимпийский стандарт для плавания",unit:"м"}},zones:{overline:"Пространства KAIF",title:"Всё необходимое для активного отдыха и релаксации",all:"Все зоны",activity_label:"Активити",relax_label:"Релакс",activity:{fitness:{name:"Тренажерный зал",description:"Современное пространство с премиальным оборудованием"},combat:{name:"Боевые искусства",description:"MMA, бокс и муай-тай с профессиональными тренерами"},pool:{name:"Бассейн",description:"Плавание в 25-метровом бассейне"}},relax:{spa:{name:"СПА-комплекс",description:"Расслабляющие процедуры и премиальные массажи"},banya:{name:"Русская баня",description:"Традиционные банные процедуры и оздоровление"},restaurant:{name:"Ресторан",description:"Изысканная кухня и авторское меню"}}},popular_services:{title:"Популярные услуги",subtitle:"Самые востребованные SPA и Beauty процедуры в нашем центре",hit:"Хит",view_all:"Посмотреть все услуги"},faq:{badge:"Ответы на вопросы",title:"Часто задаваемые вопросы",subtitle:"Всё, что нужно знать о нашем многофункциональном комплексе",questions:{what_includes:{question:"Что включает в себя комплекс KAIF?",answer:"KAIF — уникальный комплекс на Пхукете, где можно сочетать активность, отдых и уход за собой в одном месте. На территории находятся: современный спортзал, олимпийский бассейн с зонами для релакса, студия танцев и функциональных тренировок, зал боевых искусств, бьюти-студия, СПА в качестве русской сауны, тайского хаммама и массажных услуг, ресторан с восточной кухней, русской классикой и блюдами на мангале."},working_hours:{question:"Режим работы комплекса?",answer:"Мы работаем ежедневно с 7:00 до 22:00. Некоторые зоны (СПА, ресторан) могут иметь отдельный график. Рекомендуем уточнять время работы конкретных услуг при бронировании."},how_to_book:{question:"Как забронировать услуги?",answer:"Бронирование доступно через наш сайт, мобильное приложение, по телефону +66 76 123 456 или WhatsApp. Рекомендуем бронировать заранее, особенно СПА-процедуры и столики в ресторане."},memberships:{question:"Можно ли приобрести абонементы?",answer:"Да! У нас есть различные абонементы: дневные, недельные, месячные и годовые. Также доступны комбинированные пакеты, включающие несколько услуг со скидкой до 30%."},experience_needed:{question:"Нужен ли опыт для занятий?",answer:'Нет! У нас есть программы для всех уровней подготовки. Новичкам предоставляем вводный инструктаж, персональные консультации и программы "первые шаги" для безопасного начала тренировок.'},payment_methods:{question:"Какие способы оплаты принимаются?",answer:"Принимаем оплату в тайских батах: наличными, картой или по QR-коду."}},support:{title:"Служба поддержки",description:"Наша команда готова помочь вам в рабочее время. Свяжитесь с нами любым удобным способом.",location:"Пхукет, Таиланд",hours:"Поддержка в рабочее время"},whatsapp:{title:"WhatsApp чат",description:"Быстрые ответы в мессенджере. Бронирование, вопросы, поддержка - всё в одном чате.",instant_replies:"Мгновенные ответы",personal_manager:"Персональный менеджер"},consultation:{title:"Персональные консультации",description:"Индивидуальный подход к каждому гостю. Поможем составить программу под ваши цели.",free:"Бесплатная консультация"}},restaurant:JSON.parse('{"title":"Ресторан","description":"Погрузитесь в исключительные вкусы пяти различных кухонь в нашем ресторане","hero":{"label":"Наш ресторан","title":"Изысканная кухня","subtitle":"Наши шеф-повара создают уникальные блюда, сочетая традиционные рецепты с новыми кулинарными техниками.","button":"Наше меню","book_button":"Забронировать","reviews":"Отличные отзывы"},"menu":{"title":"Наше меню","description":"Откройте для себя разнообразие вкусов в нашем меню, созданном талантливыми шеф-поварами","drinks_info":"Напитки представлены с красивыми иконками вместо фотографий","tag":"Изысканные блюда","sort_by":"Сортировать:","popular":"Популярное","add":"Добавить","add_to_order":"Добавить в заказ","show_more":"Показать еще","view_all":"Открыть полное меню","categories":{"all":"Все блюда","breakfast":"Завтраки","soup":"Супы","salad":"Салаты и закуски","grill":"Блюда на мангале","side":"Гарниры","sauce":"Соусы","bread":"Хлеб","burger":"Бургеры","shawarma":"Шаурма","dessert":"Десерты","tea":"Чай","coffee":"Кофе","coffee_signature":"Авторский кофе","smoothie":"Смузи","mocktail":"Безалкогольные коктейли","juice":"Свежие соки","cocktail":"Коктейли","wine":"Вино","beer":"Пиво","strong":"Крепкий алкоголь","liqueur":"Ликеры","fitness":"Фитнес-напитки","water":"Вода","milk":"Молочные продукты","soft_drink":"Безалкогольные напитки"},"tags":{"breakfast":"Завтрак","soup":"Суп","salad":"Салат","appetizer":"Закуска","grill":"Гриль","main":"Основное","dessert":"Десерт","drinks":"Напитки","popular":"Популярное","vegetarian":"Вегетарианское","vegan":"Веганское","healthy":"Полезное","spicy":"Острое","seafood":"Морепродукты","meat":"Мясо","sweet":"Сладкое","cold":"Холодное","hot":"Горячее","fitness":"Фитнес","pre-workout":"Предтренировочный","mass-gainer":"Для набора массы","bcaa":"BCAA","recovery":"Восстановление","electrolyte":"Электролиты","fat-burner":"Жиросжигатель"},"sort":{"default":"По умолчанию","popular":"Популярные","price_low":"Сначала дешевые","price_high":"Сначала дорогие","name":"По названию"},"items":{"kaif_breakfast":{"name":"Завтрак \\"KAIF\\"","description":"Фирменный завтрак нашего ресторана"},"shakshuka_spinach_salmon":{"name":"Шакшука со шпинатом и лососем","description":"Яичное блюдо с добавлением шпината и нежного лосося"},"shakshuka_tomato_feta":{"name":"Шакшука с томатами и фетой","description":"Традиционная шакшука с сочными томатами и сыром фета"},"syrniki_passion_fruit":{"name":"Сырники со сметаной и соусом из маракуйи","description":"Нежные домашние сырники с оригинальным соусом из маракуйи"},"toast_cream_cheese_ham":{"name":"Тост со сливочным сыром и ветчиной","description":"Хрустящий тост с нежным сливочным сыром и качественной ветчиной"},"toast_salmon_avocado":{"name":"Тост с соленым лососем и авокадо","description":"Изысканное сочетание хрустящего тоста, нежного лосося и спелого авокадо"},"toast_avocado_tomato":{"name":"Тост с авокадо и томатами","description":"Легкий и полезный завтрак из хрустящего тоста с авокадо и сочными томатами"},"matsoni_apricot":{"name":"Мацони с абрикосовым вареньем","description":"Традиционный кавказский йогурт с натуральным абрикосовым вареньем"},"buckwheat_chicken_mushrooms":{"name":"Гречневая каша с цыпленком, грибами и соусом Пармезан","description":"Питательная гречневая каша с нежным цыпленком, ароматными грибами и сливочным соусом"},"okroshka_ayran":{"name":"Окрошка на айране","description":"Освежающий холодный суп на кисломолочной основе с овощами и зеленью"},"okroshka_kvass":{"name":"Окрошка на квасе","description":"Классическая окрошка на квасе с отборными овощами, яйцом и свежей зеленью"},"chikhirtma_corn":{"name":"Чихиртма с кукурузой","description":"Традиционный грузинский суп с насыщенным вкусом, дополненный сладкой кукурузой"},"borsch_classic":{"name":"Борщ классический","description":"Традиционный славянский суп насыщенного рубинового цвета с говядиной и овощами"},"salad_potato_salmon":{"name":"Листья салата с молодым картофелем и соленым лососем","description":"Свежий микс салатов с молодым картофелем и нежным соленым лососем"},"vegetable_salad_cheese":{"name":"Салат из свежих овощей с брынзой","description":"Традиционный салат из свежих овощей с добавлением нежной брынзы"},"tomato_cucumber_greens":{"name":"Помидоры, огурцы, зелень","description":"Свежие сочные помидоры и хрустящие огурцы с ароматной зеленью, заправленные по выбору сметаной или оливковым маслом"},"hummus_chickpeas":{"name":"Хумус с печеным нутом","description":"Нежный хумус с дополнительным печеным нутом для текстуры"},"hummus_avocado_tomato":{"name":"Хумус с авокадо и томатами","description":"Оригинальный хумус с добавлением спелого авокадо и свежих томатов"},"hummus_grilled_shrimp":{"name":"Хумус с креветками гриль","description":"Классический хумус, дополненный сочными креветками с гриля"},"hummus_chicken_kebab":{"name":"Хумус с куриным кебабом","description":"Хумус, поданный с ароматными кусочками куриного кебаба"},"tzatziki_olives_pepper":{"name":"Дзадзыки с оливками и маринованным перцем","description":"Освежающий йогуртовый соус с огурцами, чесноком и зеленью, дополненный оливками и маринованным перцем"},"chicken_kebab_yogurt":{"name":"Кебаб из курицы (в йогурте)","description":"Сочный кебаб из куриного филе, маринованного в йогурте с восточными специями"},"beef_kebab":{"name":"Кебаб из говядины","description":"Сочный кебаб из отборной говядины, приготовленный на открытом огне"},"pork_neck_kebab":{"name":"Кебаб из свиной шеи","description":"Кебаб из маринованной свиной шеи с ароматными специями"},"caesar_grilled_shrimp":{"name":"Цезарь с креветками гриль","description":"Классический салат Цезарь с сочными креветками, приготовленными на гриле"},"caesar_chicken_kebab":{"name":"Цезарь с куриным кебабом","description":"Традиционный салат Цезарь с нежным куриным кебабом"},"chicken_adjika_potato":{"name":"Цыпленок в аджике с картофелем","description":"Сочный цыпленок, маринованный в пикантном соусе аджика, с гарниром из молодого картофеля"},"lyulya_kebab_chicken":{"name":"Люля-кебаб (курица)","description":"Рубленый кебаб из куриного филе с добавлением ароматных специй"},"lyulya_kebab_lamb":{"name":"Люля-кебаб (баранина)","description":"Традиционный люля-кебаб из рубленой баранины с восточными специями"},"lyulya_kebab_beef_pork":{"name":"Люля-кебаб (говядина и свинина)","description":"Сочный люля-кебаб из смеси рубленой говядины и свинины"},"grilled_salmon":{"name":"Лосось на мангале","description":"Нежное филе лосося, приготовленное на открытом огне"},"white_perch_fillet":{"name":"Филе белого окуня","description":"Нежное филе белого окуня, приготовленное на мангале"},"grilled_shrimp":{"name":"Креветки на мангале","description":"Сочные тигровые креветки, приготовленные на мангале с добавлением трав и чесночного масла"},"italian_ice_cream":{"name":"Итальянское мороженое","description":"Настоящее итальянское джелато с различными вкусами"},"green_tea":{"name":"Чай зеленый","description":"Зеленый чай премиум класса с деликатным ароматом"},"black_tea":{"name":"Чай черный","description":"Классический черный чай с насыщенным вкусом"},"ginger_honey_tea":{"name":"Чай с имбирем и медом","description":"Согревающий чай со свежим имбирем и натуральным медом"},"mint_tea":{"name":"Чай с мятой","description":"Освежающий травяной чай со свежей мятой"},"jasmine_tea":{"name":"Чай ясминовый","description":"Ароматный чай с цветками жасмина"},"fruit_tea":{"name":"Чай фруктовый","description":"Травяная смесь с сушеными фруктами и ягодами"},"thai_iced_tea":{"name":"Тайский чай со льдом и молоком","description":"Традиционный тайский чай, подаваемый холодным со сгущенным молоком"},"espresso":{"name":"Эспрессо","description":"Классический итальянский эспрессо с богатой кремой"},"americano":{"name":"Американо","description":"Эспрессо, разбавленный горячей водой"},"cappuccino":{"name":"Капучино","description":"Эспрессо с взбитым молоком и пенкой"},"latte":{"name":"Латте","description":"Мягкий кофе со взбитым молоком"},"mocha":{"name":"Мокко","description":"Кофейный напиток с шоколадом и взбитым молоком"},"iced_latte":{"name":"Айс латте","description":"Холодный латте со льдом и молочной пенкой"},"frappe":{"name":"Фраппе","description":"Холодный кофейный напиток, смешанный со льдом"},"smoothie_lime":{"name":"Лайм-лайм","description":"Освежающий смузи с двойной порцией лайма"},"smoothie_mango_passion":{"name":"Манго-маракуйя","description":"Свежий смузи из спелого манго и маракуйи"},"banana_shake":{"name":"Банановый шейк","description":"Нежный банановый шейк с молоком и ванилью"},"matcha_latte":{"name":"Матча латте","description":"Ароматный напиток с японским зеленым чаем матча"},"butterfly_tea":{"name":"Чай из цветов клитории","description":"Экзотический голубой чай, меняющий цвет"},"passion_fruit_mocktail":{"name":"Маракуйя","description":"Освежающий напиток из свежей маракуйи"},"pink_lemonade":{"name":"Розовый лимонад","description":"Нежный розовый лимонад с ягодами"},"honey_lemon":{"name":"Мед и лимон","description":"Полезный напиток с натуральным медом и лимоном"},"electrolyte":{"name":"Электролит","description":"Изотонический напиток для восстановления баланса электролитов"},"hibiscus_iced_tea":{"name":"Холодный чай каркаде","description":"Освежающий чай из цветков гибискуса"},"lemonade_classic":{"name":"Лимонад","description":"Классический лимонад из свежих лимонов"},"mojito_virgin":{"name":"Мохито","description":"Безалкогольный мохито с мятой, лаймом и содовой"},"orange_juice":{"name":"Сок апельсиновый","description":"Свежевыжатый апельсиновый сок"},"pineapple_juice":{"name":"Сок ананасовый","description":"Свежевыжатый сок из спелого ананаса"},"apple_juice":{"name":"Сок яблочный","description":"Свежевыжатый яблочный сок"},"carrot_juice":{"name":"Сок морковный","description":"Свежевыжатый морковный сок"},"mango_juice":{"name":"Сок манго","description":"Свежевыжатый сок из спелого манго"},"prosecco":{"name":"Игристое вино Prosecco","description":"Итальянское игристое вино"},"sauvignon_blanc":{"name":"Белое вино Sauvignon Blanc","description":"Французское белое сухое вино"},"oatmeal_apple_almonds":{"name":"Овсянка с печеным яблоком и карамелизированным миндалем","description":"Нежная овсяная каша с ароматным печеным яблоком и хрустящим карамелизированным миндалем"},"grilled_vegetables":{"name":"Овощи гриль","description":"Ассорти из сезонных овощей, приготовленных на гриле"},"potatoes_herbs":{"name":"Картофель со свежей зеленью","description":"Отварной картофель с ароматной свежей зеленью и маслом"},"buckwheat_mushrooms":{"name":"Гречка с грибами","description":"Ароматная гречневая каша с обжаренными грибами"},"rice_quail_eggs":{"name":"Рис с перепелиными яйцами и специями","description":"Ароматный рис с нежными перепелиными яйцами и восточными специями"},"sauce_tzatziki_mint":{"name":"Дзадзыки с мятой","description":"Освежающий йогуртовый соус с огурцами, чесноком, зеленью и свежей мятой"},"sauce_satsebeli":{"name":"Сацибели","description":"Острый грузинский соус из томатов, чеснока, перца и зелени"},"sauce_mustard":{"name":"Горчичный соус","description":"Пикантный соус на основе дижонской горчицы с добавлением меда и специй"},"sauce_pesto":{"name":"Песто","description":"Ароматный соус из базилика и кинзы с орехами и специями"},"bread_butter_adjika":{"name":"Хлеб с маслом и аджикой","description":"Свежий хлеб с домашним маслом и острой аджикой"},"shawarma_kaif":{"name":"Шаурма KAIF","description":"Фирменная шаурма KAIF с особой смесью специй и свежими овощами"},"classic_cheeseburger":{"name":"Классический чизбургер","description":"Сочная говяжья котлета с плавленым сыром, салатом и специальным соусом"},"kaif_burger_lamb":{"name":"Бургер KAIF с котлетой из баранины и беконом","description":"Премиальный бургер с котлетой из баранины, хрустящим беконом и авторским соусом"},"burger_lamb_soy":{"name":"Бургер с бараниной и соевым соусом","description":"Нежная котлета из баранины с азиатским соевым соусом и свежими овощами"},"french_fries_burger":{"name":"Картофель фри к бургеру","description":"Хрустящий картофель фри, идеальное дополнение к любому бургеру"},"french_fries_parmesan":{"name":"Картофель фри с пармезаном","description":"Картофель фри с тертым пармезаном и ароматными травами"},"homemade_yogurt":{"name":"Домашний йогурт с абрикосовым вареньем","description":"Нежный домашний йогурт с натуральным абрикосовым вареньем"},"napoleon":{"name":"Наполеон","description":"Классический слоеный торт Наполеон с нежным кремом"},"lava_cake_cherry":{"name":"Лава-кейк с вишневым вареньем","description":"Теплый шоколадный кейк с жидкой начинкой и вишневым вареньем"},"matcha_bomba":{"name":"Матча бомба","description":"Авторский кофейный напиток с матча"},"espresso_chocolate":{"name":"Эспрессо шоколад","description":"Эспрессо с шоколадом"},"espresso_negroni":{"name":"Эспрессо негрони","description":"Кофейная интерпретация классического коктейля"},"pineapple_express":{"name":"Ананасовый экспресс","description":"Кофе с ананасовыми нотками"},"matcha_coco":{"name":"Матча коко","description":"Матча с кокосовым молоком"},"honey_lemon_espresso":{"name":"Мед лимон эспрессо","description":"Эспрессо с медом и лимоном"},"kvass":{"name":"Квас","description":"Традиционный русский квас 0.5л"},"cranberry_juice":{"name":"Клюквенный сок","description":"Клюквенный сок 0.3л"},"pina_colada":{"name":"Пина Колада","description":"Экзотический коктейль с ромом и кокосом"},"aperol_spritz":{"name":"Апероль спритц","description":"Итальянский аперитив с Aperol"},"bloody_mary":{"name":"Кровавая Мэри","description":"Классический коктейль с водкой и томатным соком"},"negroni":{"name":"Негрони","description":"Классический итальянский коктейль"},"mojito_alcohol":{"name":"Мохито алкогольный","description":"Классический кубинский коктейль с ромом"},"pure_vodka":{"name":"Водка чистая","description":"Водка (50 мл)"},"whiskey_jack":{"name":"Виски Jack Daniel\'s","description":"Теннессийский виски (50 мл)"},"rum_bacardi":{"name":"Ром Bacardi","description":"Белый ром (50 мл)"},"tequila_jose":{"name":"Текила Jose Cuervo","description":"Мексиканская текила (50 мл)"},"gin_bombay":{"name":"Джин Bombay","description":"Лондонский сухой джин (50 мл)"},"cognac_hennessy":{"name":"Коньяк Hennessy","description":"Французский коньяк (50 мл)"},"martini_extra_dry":{"name":"Martini Extra Dry","description":"Сухой вермут (50 мл)"},"vermouth_chinzano":{"name":"Vermouth Chinzano","description":"Итальянский вермут (50 мл)"},"martini_rose":{"name":"Martini Vermouth Rose","description":"Розовый вермут (50 мл)"},"singha_beer":{"name":"Singha Beer","description":"Тайское светлое пиво 0.33л"},"chang_beer":{"name":"Chang Beer","description":"Тайское светлое пиво 0.33л"},"leo_beer":{"name":"Leo Beer","description":"Тайское светлое пиво 0.33л"},"heineken_beer":{"name":"Heineken Beer","description":"Импортное светлое пиво 0.33л"},"alt_milk":{"name":"Альтернативное молоко","description":"Растительное молоко (овсяное, миндальное)"},"coconut_water":{"name":"Кокосовая вода","description":"Натуральная кокосовая вода"},"c4_original_shot":{"name":"ПРЕДТРЕНИРОВОЧНЫЙ","description":"C4 Original Shot - заряд энергии перед тренировкой"},"serious_mass_shake":{"name":"ГЕЙНЕР","description":"Serious Mass Shake - высококалорийный коктейль для роста мышц"},"xtend_eaa_recovery":{"name":"BCAA / EAA","description":"Xtend EAA Recovery - антикатаболическая поддержка после тренировки"},"electrolyte_boost":{"name":"ЭЛЕКТРОЛИТЫ","description":"Восполнение минералов после потери пота - гидратационный шот"},"l_carnitine_shot":{"name":"ЖИРОСЖИГАТЕЛЬ","description":"L-Carnitine Shot - поддержка жирового метаболизма"}}},"bar":{"label":"Бар","title":"Наш бар","description":"У нас есть всё, чтобы утолить жажду — от спортивных протеиновых шейков до расслабляющих коктейлей.","menu_button":"Открыть меню напитков","feature1":{"title":"Авторские напитки","description":"Уникальные коктейли, созданные нашими миксологами"},"feature2":{"title":"Освежающие миксы","description":"Свежевыжатые соки и фруктовые комбинации"},"feature3":{"title":"Напитки для восстановления после тренировки","description":"Протеиновые коктейли и спортивное питание"}},"booking":{"label":"Бронирование","title":"Забронируйте стол в нашем ресторане","description":"Заранее зарезервируйте столик для особого события или просто для гарантированного места в нашем ресторане.","coming_soon":"Онлайн-бронирование скоро будет доступно. Пока что, пожалуйста, позвоните нам для резервации.","open_hours":"Часы работы","reservation":"Резервация","call_now":"Позвонить сейчас"},"cuisines":{"title":"Наши кухни","description":"Попробуйте кулинарные изыски со всего мира"},"chef":"Рекомендации шеф-повара","slider":{"slide1":{"title":"Изысканная кухня","description":"Откройте для себя уникальные вкусы пяти разных кухонь мира в нашем ресторане"},"slide2":{"title":"Атмосфера комфорта","description":"Наслаждайтесь едой в уютной атмосфере с видом на тропический сад"},"slide3":{"title":"Свежие ингредиенты","description":"Мы используем только свежие и качественные ингредиенты для приготовления наших блюд"}},"bookTable":"Забронировать стол","dish_details":{"ingredients":"Ингредиенты","nutritional_info":"Пищевая ценность"}}'),spa:JSON.parse('{"title":"СПА","description":"Восстановите свои силы в самой большой сауне Таиланда","hero":{"badge":"Премиум СПА","title":"Погрузитесь в мир релаксации и красоты","subtitle":"Профессиональные СПА процедуры в роскошной атмосфере KAIF","book_online":"Онлайн-запись","book_whatsapp":"WhatsApp","book_now":"Записаться на процедуру","learn_more":"Узнать больше"},"services":{"title":"Наши услуги","subtitle":"Полный спектр SPA и Beauty услуг для вашего комфорта и красоты","popular":"Популярно","learn_more":"Подробнее","show_more":"Показать ещё {{count}} услуг","show_less":"Показать меньше","price_from":"от {{price}} ฿","duration_price":"{{duration}} мин - {{price}} ฿","categories":{"massage":"Массаж","cosmetology":"Косметология","laser-hair-removal":"Лазерная эпиляция","laser-men":"Эпиляция для мужчин","laser-complex":"Лазерные комплексы","endosphere":"Эндосфера-терапия","laser":"Лазерная эпиляция","laser-complex-3":"Лазерные комплексы (3 процедуры)","laser-complex-5":"Лазерные комплексы (5 процедур)","hair-care":"Уход за волосами","manicure":"Маникюр","pedicure":"Педикюр","pro-pedicure":"PRO мастер педикюр","eyelashes":"Ресницы","brows":"Брови и ресницы","sauna":"Сауна","hammam":"Хаммам","treatments":"СПА-процедуры"},"items":{"oil_massage":{"name":"Масляный массаж","description":"Расслабляющий массаж с натуральными маслами для глубокого восстановления"},"foot_massage":{"name":"Массаж стоп","description":"Традиционный тайский массаж стоп для снятия усталости"},"sport_massage":{"name":"Спортивный массаж","description":"Интенсивный массаж для восстановления после тренировок"},"anti_cellulite_massage":{"name":"Антицеллюлитный массаж","description":"Специализированный массаж для коррекции фигуры"},"stone_massage":{"name":"Стоун-массаж","description":"Массаж горячими камнями для глубокой релаксации"},"thai_massage":{"name":"Традиционный тайский массаж","description":"Классический тайский массаж на коврике"},"head_shoulders":{"name":"Массаж головы и плеч","description":"Расслабляющий массаж для снятия напряжения"},"oil_scrub":{"name":"Масляный массаж + скраб","description":"Комплексная процедура с пилингом и массажем"},"body_scrub":{"name":"Скрабирование всего тела","description":"Отшелушивающая процедура для всего тела"},"wrap_anti_cell":{"name":"Обертывание + антицеллюлитный массаж","description":"Комплексная процедура для коррекции фигуры"},"vacuum_peeling":{"name":"Вакуумная чистка лица с пилингом","description":"Глубокая очистка пор с механическим пилингом"},"vacuum_standard":{"name":"Стандартная вакуумная чистка лица","description":"Классическая процедура очищения кожи лица"},"hollywood_vacuum":{"name":"Голливудская вакуумная чистка лица","description":"Премиальная процедура для идеального состояния кожи"},"whitening_program":{"name":"Программа отбеливания (пигментация)","description":"Специальная программа против пигментных пятен"},"rejuvenation_program":{"name":"Программа омоложения","description":"Комплексная антивозрастная программа"},"vacuum_oil":{"name":"Вакуумная чистка с маслом","description":"Очищение с питательными маслами"},"hydration_program":{"name":"Программа увлажнения и сияния","description":"Интенсивное увлажнение для сияния кожи"},"vacuum_men":{"name":"Вакуумная чистка лица для мужчин","description":"Специализированный уход для мужской кожи"},"express_care":{"name":"Экспресс-уход","description":"Быстрая процедура для свежести кожи"},"facial_massage_care":{"name":"Массаж лица с уходом","description":"Расслабляющий массаж с уходовыми средствами"},"facial_massage":{"name":"Массаж лица","description":"Классический массаж лица для релаксации"},"vacuum_subscription_5":{"name":"Абонемент вакуумная чистка (5 стандартных процедур)","description":"Выгодный пакет из 5 стандартных процедур"},"vacuum_subscription_5_special":{"name":"Абонемент вакуумная чистка (5 специализированных процедур)","description":"Премиальный пакет из 5 специализированных процедур"},"deep_bikini":{"name":"Глубокий бикини","description":"Лазерная эпиляция интимной зоны"},"lower_back":{"name":"Поясница/лопатки/живот","description":"Эпиляция средних зон тела"},"areola_line":{"name":"Ареола/линия живота","description":"Эпиляция деликатных зон"},"back_completely":{"name":"Спина полностью","description":"Полная эпиляция спины"},"buttocks_calves":{"name":"Ягодицы/икры/бедра","description":"Эпиляция зон ног"},"legs_completely":{"name":"Ноги полностью","description":"Полная эпиляция ног"},"arms_completely":{"name":"Руки полностью","description":"Полная эпиляция рук"},"face_lower":{"name":"Нижняя треть лица","description":"Эпиляция области подбородка"},"armpits":{"name":"Подмышки","description":"Эпиляция подмышечных впадин"},"men_2_zones":{"name":"2 любые зоны","description":"Эпиляция любых двух зон на выбор"},"men_3_zones":{"name":"3 любые зоны","description":"Эпиляция любых трех зон на выбор"},"men_4_zones":{"name":"4 любые зоны","description":"Эпиляция любых четырех зон на выбор"},"men_full_body":{"name":"Все тело","description":"Полная эпиляция всего тела"},"men_face":{"name":"Верхняя губа/подбородок/щеки/шея","description":"Эпиляция лицевой зоны"},"men_full_face":{"name":"Лицо полностью","description":"Полная эпиляция лица"},"men_armpits":{"name":"Подмышки","description":"Эпиляция подмышечных впадин"},"men_chest_abdomen":{"name":"Грудь/живот полностью","description":"Эпиляция торса"},"men_subscription":{"name":"Абонемент все тело (5 сеансов)","description":"Выгодный пакет полной эпиляции"},"complex_1":{"name":"Икры + подмышки + глубокий бикини","description":"Популярный комплекс для женщин"},"complex_2":{"name":"Подмышки + глубокий бикини/икры","description":"Базовый комплекс эпиляции"},"complex_3":{"name":"Ноги полностью + подмышки + глубокий бикини","description":"Расширенный комплекс для ног"},"complex_4":{"name":"Руки полностью + ноги полностью + подмышки + глубокий бикини","description":"Максимальный комплекс эпиляции"},"endosphere_full_body":{"name":"Все тело","description":"Эндосфера-терапия всего тела для коррекции фигуры"},"endosphere_face":{"name":"Аппаратный массаж лица (Эндосфера, RF лифтинг)","description":"Омолаживающий аппаратный массаж лица"},"endosphere_subscription_6":{"name":"Абонемент Эндосфера (6 сеансов)","description":"Выгодный пакет из 6 процедур"},"endosphere_subscription_12":{"name":"Абонемент Эндосфера (12 сеансов)","description":"Максимальный пакет из 12 процедур"},"manicure_no_coating":{"name":"Маникюр без покрытия","description":"Классический маникюр с обработкой ногтевых пластин"},"manicure_base":{"name":"Маникюр с базовым покрытием","description":"Маникюр с защитным базовым покрытием"},"manicure_gel":{"name":"Маникюр с покрытием гель-лак","description":"Маникюр с долговечным гель-лаковым покрытием"},"gel_strengthening":{"name":"Укрепление гелем без гель-лака","description":"Укрепление натуральных ногтей гелем"},"gel_strengthening_polish":{"name":"Укрепление гелем с гель-лаком","description":"Укрепление ногтей с цветным покрытием"},"gel_french":{"name":"Гель-лак френч коррекция","description":"Классический французский маникюр гель-лаком"},"nail_extension_short":{"name":"Наращивание ногтей классика короткие (до 2мм)","description":"Наращивание коротких ногтей"},"nail_extension_long":{"name":"Наращивание ногтей (свыше 2мм)","description":"Наращивание длинных ногтей"},"nail_repair":{"name":"Ремонт ногтя","description":"Восстановление поврежденного ногтя"},"pedicure_full_no_coating":{"name":"Педикюр полный без покрытия","description":"Полная обработка стоп и ногтей"},"pedicure_full_coating":{"name":"Педикюр полный с покрытием","description":"Полный педикюр с гель-лаковым покрытием"},"pedicure_toes_no_coating":{"name":"Педикюр пальчики без покрытия","description":"Обработка только ногтей на пальцах"},"pedicure_toes_coating":{"name":"Педикюр пальчики с покрытием гель-лак","description":"Обработка ногтей с цветным покрытием"},"callus_removal":{"name":"Удаление мозолей","description":"Профессиональное удаление мозолей"},"onycholysis_cleaning":{"name":"Чистка онихолизиса (топ мастер)","description":"Лечение отслоения ногтевых пластин"},"womens_haircut":{"name":"Женская стрижка","description":"Профессиональная женская стрижка"},"hair_wash_brushing":{"name":"Мытье с брашингом","description":"Мытье головы с укладкой брашингом"},"bangs_haircut":{"name":"Стрижка челки","description":"Коррекция и стрижка челки"},"mens_haircut":{"name":"Мужская стрижка","description":"Стильная мужская стрижка"},"hair_styling":{"name":"Укладка с брашингом со стайлинг-средствами","description":"Профессиональная укладка волос"},"evening_styling":{"name":"Вечерняя укладка","description":"Праздничная укладка для особых случаев"},"coloring_roots":{"name":"Окрашивание в 1 тон корни","description":"Окрашивание отросших корней"},"coloring_stretching":{"name":"Окрашивание корни + растяжка цвета по всей длине","description":"Сложное окрашивание с растяжкой цвета"},"coloring_short":{"name":"Окрашивание в 1 тон короткие","description":"Полное окрашивание коротких волос"},"coloring_medium":{"name":"Окрашивание в 1 тон средние","description":"Полное окрашивание волос средней длины"},"coloring_long":{"name":"Окрашивание в 1 тон длинные","description":"Полное окрашивание длинных волос"},"total_blond_short":{"name":"Тотальный блонд короткие","description":"Осветление коротких волос до блонда"},"total_blond_medium":{"name":"Тотальный блонд средние","description":"Осветление волос средней длины до блонда"},"total_blond_long":{"name":"Тотальный блонд длинные","description":"Осветление длинных волос до блонда"},"happiness_short":{"name":"Счастье для волос уровень короткие","description":"Восстанавливающая процедура для коротких волос"},"happiness_medium":{"name":"Счастье для волос уровень средние","description":"Восстанавливающая процедура для волос средней длины"},"happiness_long":{"name":"Счастье для волос уровень длинные","description":"Восстанавливающая процедура для длинных волос"},"indian_head_massage":{"name":"Индийский массаж головы","description":"Традиционный индийский массаж для роста волос"},"hair_express_care":{"name":"Экспресс-уход","description":"Быстрая восстанавливающая процедура"},"endosphere_spa_program":{"name":"Эндосфера-терапия СПА-программа","description":"Комплексная СПА-программа с эндосферой"},"shoulders_legs":{"name":"Массаж плеч и ног","description":"Специализированный массаж для снятия напряжения"},"face_massage":{"name":"Массаж лица","description":"Расслабляющий массаж лица для улучшения кровообращения"},"deep_thai":{"name":"Глубокий тайский массаж","description":"Интенсивный тайский массаж с глубокой проработкой мышц"},"endosphere_6_procedures":{"name":"Эндосфера-терапия (6 процедур)","description":"Выгодный пакет из 6 процедур"},"endosphere_12_procedures":{"name":"Эндосфера-терапия (12 процедур)","description":"Максимальный пакет из 12 процедур"},"endosphere_rf_lifting":{"name":"Эндосфера RF лифтинг","description":"Омолаживающий аппаратный массаж лица"},"laser_armpits":{"name":"Лазерная эпиляция подмышек","description":"Эпиляция подмышечных впадин"},"laser_bikini":{"name":"Лазерная эпиляция бикини","description":"Эпиляция зоны бикини"},"laser_deep_bikini":{"name":"Лазерная эпиляция глубокого бикини","description":"Эпиляция интимной зоны"},"laser_shins":{"name":"Лазерная эпиляция голеней","description":"Эпиляция голеней"},"laser_legs_full":{"name":"Лазерная эпиляция ног полностью","description":"Полная эпиляция ног"},"laser_small_area":{"name":"Лазерная эпиляция малой зоны","description":"Эпиляция малых зон (линия живота, ареола, пальцы)"},"laser_arms_full":{"name":"Лазерная эпиляция рук полностью","description":"Полная эпиляция рук"},"classic_extension":{"name":"Классическое наращивание","description":"Поресничное наращивание для натурального эффекта"},"volume_1_5d":{"name":"1.5D объем","description":"Легкий объем для натурального эффекта"},"volume_2d":{"name":"2D объем","description":"Средний объем для выразительного взгляда"},"volume_3d":{"name":"3D объем","description":"Насыщенный объем для яркого образа"},"hollywood_volume":{"name":"Голливудский объем","description":"Максимальный объем для драматического эффекта"},"eyelash_removal":{"name":"Снятие ресниц","description":"Безопасное снятие наращенных ресниц"},"brow_correction":{"name":"Коррекция бровей","description":"Профессиональная коррекция формы бровей"},"brow_tinting":{"name":"Окрашивание бровей","description":"Окрашивание бровей стойкой краской"},"brow_correction_tinting":{"name":"Коррекция и окрашивание бровей","description":"Комплексный уход за бровями"},"brow_lamination_complex":{"name":"Ламинирование + коррекция + окрашивание бровей","description":"Полный комплекс для идеальных бровей"},"eyelash_lamination_tinting":{"name":"Ламинирование + окрашивание ресниц","description":"Ламинирование и окрашивание ресниц"},"full_lamination_complex":{"name":"Полный комплекс ламинирования","description":"Коррекция + окрашивание бровей + ламинирование + окрашивание ресниц"}}},"features":{"title":"Почему выбирают нас","subtitle":"Мы стремимся предоставить вам исключительный опыт релаксации и ухода","premium_quality":{"title":"Премиум качество","description":"Используем только лучшие продукты и оборудование для всех процедур"},"full_relaxation":{"title":"Полное расслабление","description":"Создаем атмосферу комфорта для вашего расслабления и отдыха"},"experienced_masters":{"title":"Опытные мастера","description":"Специалисты с многолетним опытом и постоянным развитием навыков"},"individual_approach":{"title":"Индивидуальный подход","description":"Учитываем ваши пожелания и особенности для максимального результата"}},"faq":{"badge":"SPA Вопросы","title":"Часто задаваемые вопросы","subtitle":"Всё, что нужно знать о наших SPA услугах и процедурах","questions":{"services":{"question":"Какие SPA услуги вы предлагаете?","answer":"Мы предлагаем полный спектр SPA услуг: массаж (тайский, масляный, спортивный), косметологические процедуры, лазерную эпиляцию, маникюр, педикюр, уход за волосами, а также сауну и хаммам."},"booking":{"question":"Как записаться на SPA процедуру?","answer":"Записаться можно по телефону +66 62 480 5877, через WhatsApp или лично в нашем центре. Рекомендуем бронировать заранее, особенно на популярные процедуры."},"policy":{"question":"Каковы правила отмены записи?","answer":"Просим уведомлять об отмене не менее чем за 24 часа до назначенного времени. При отмене менее чем за 24 часа может взиматься плата за отмену в размере 50% от стоимости процедуры."},"payment":{"question":"Какие способы оплаты принимаются?","answer":"Мы принимаем наличные (THB, USD, EUR), банковские карты всех систем, а также мобильные платежи. Оплата производится после процедуры."},"preparation":{"question":"Нужно ли что-то приносить с собой?","answer":"Мы предоставляем все необходимое: полотенца, халаты, тапочки и косметические средства. Вам нужно только прийти и расслабиться."},"gifts":{"question":"Есть ли подарочные сертификаты?","answer":"Да! Мы предлагаем подарочные сертификаты различного номинала на любые SPA услуги. Их можно приобрести в нашем центре или заказать по телефону."}}},"booking":{"badge":"Бронирование","title":"Записаться на процедуру","description":"Забронируйте SPA-процедуру или услугу салона красоты для полного расслабления","online":{"title":"Онлайн-запись","description":"Удобная онлайн-запись на любую процедуру. Выберите мастера, время и услугу в несколько кликов. Моментальное подтверждение записи.","hours":"Запись 24/7 онлайн","feature":"Выбор мастера и времени","button":"Записаться онлайн"},"phone":{"title":"Позвонить для записи","description":"Свяжитесь с нами по телефону для быстрого бронирования. Наши консультанты помогут выбрать подходящую процедуру и время.","hours":"Прием звонков: 9:00 - 21:00","location":"Пхукет, Таиланд"},"whatsapp":{"title":"WhatsApp чат","description":"Напишите нам в WhatsApp для удобного бронирования. Мы быстро ответим и поможем выбрать лучшее время для вас.","hours":"Онлайн поддержка: быстрый ответ","feature":"Быстрые ответы","button":"Написать в WhatsApp"}},"testimonials":{"title":"Отзывы наших гостей","subtitle":"Узнайте, что говорят о нас наши довольные клиенты","reviews":{"1":{"text":"Потрясающий опыт! Тайский массаж был невероятно расслабляющим, а атмосфера просто волшебная. Обязательно вернусь снова.","author":"Анна Петрова","title":"Постоянный клиент"},"2":{"text":"Профессиональные мастера, качественные процедуры и внимание к деталям. Это лучший СПА центр, который я посещала в Пхукете.","author":"Екатерина Сидорова","title":"Гость из Москвы"},"3":{"text":"Прекрасное место для отдыха и восстановления. Особенно понравилась финская сауна и джакузи. Рекомендую всем!","author":"Михаил Волков","title":"Резидент KAIF"}}},"facility":{"title":"Наши объекты","largest_sauna":"Крупнейшая сауна в Таиланде (50м²)","hammams":"Тайский и турецкий хаммам"}}'),banya:{title:"Русская баня",description:"Панорамная русская баня с видом на джунгли",hero:{badge:"Лучшая баня Пхукета",title:'Панорамная <span className="highlight">русская баня</span>',title_part1:"Русская",title_part2:"Баня",location:"Пхукет",area_unit:"м²",feature:"Самая большая баня на острове",area:"150 квадратных метров",subtitle:"Баня из сибирского кедра и алтайской липы",book_button:"Забронировать",contacts_button:"Контакты",scroll:"Scroll",images:{panoramic:"Панорамная парная 150 м²",private:"Приватная сауна",public:"Общественная парная"}},features:{badge:"Лучшая баня Пхукета",title:'Почему выбирают <span className="highlight">нас</span>',subtitle:"Единственная панорамная русская баня на Пхукете из натуральных материалов сибирского кедра и алтайской липы",materials:{title:"Натуральные материалы",description:"100% натуральная отделка из сибирских пород дерева",items:{cedar:"Сибирский кедр",linden:"Алтайская липа",birch:"Карельская береза",coating:"Экологически чистые покрытия",aromatherapy:"Природная ароматерапия"}},panoramic:{title:"Панорамный дизайн",description:"Уникальная архитектура с видом на тропические джунгли",items:{area:"150 квадратных метров",windows:"Панорамные окна",view:"Вид на джунгли",lighting:"Естественное освещение",harmony:"Гармония с природой"}},safety:{title:"Безопасность",description:"Соблюдение всех международных стандартов безопасности",items:{fire:"Пожарная безопасность",ventilation:"Система вентиляции",emergency:"Аварийное освещение",medical:"Медицинская помощь",security:"Круглосуточное дежурство"}},wellness:{title:"Wellness-программы",description:"Авторские оздоровительные программы от мастеров",items:{russian:"Русский банный ритуал",finnish:"Финская сауна",aromatherapy:"Ароматерапия",massage:"Массаж в парной",herbs:"Травяные настои"}},service:{title:"Профессионализм",description:"Команда опытных банщиков и мастеров парения",items:{certified:"Сертифицированные банщики",traditions:"Русские традиции",individual:"Индивидуальный подход",consultation:"Консультации по здоровью",quality:"Качественное обслуживание"}}},services:{badge:"Банные программы",title:"Выберите свой банный ритуал",description:"От панорамной бани с видом на джунгли до приватных VIP-ритуалов с мастером парения",rituals:{intro:{title:"Ознакомительное парение",subtitle:"Легкий пар",duration:"5-8 мин",price:"1 200 бат",description:"Контактный прогрев спины и ног вениками лежа на животе. Легкий пар без переворота"},classic:{title:"Классическое парение",subtitle:"Средний пар",duration:"10-15 мин",price:"1 800 бат",description:"Парение дубовыми вениками за один заход. Тщательное парение всего тела с насыщенным ароматным паром"},artesian:{title:"Артезианское парение",subtitle:"Контрастное парение",duration:"15-20 мин",price:"2 500 бат",description:"Классическое парение дубовыми вениками с контрастом прохладной минеральной водой. Пузырьковый контраст"},gravity:{title:"Гравитация",subtitle:"Парение с невесомостью",duration:"15-20 мин",price:"2 500 бат",description:"Классическое парение с последующим кружением в теплом бассейне. Полное расслабление и чувство невесомости"},salt_fire:{title:"Начало пожара",subtitle:"Парение с морской солью",duration:"15-20 мин",price:"2 500 бат",description:"Классическое парение с нанесением морской соли на тело и прогревом через простынь. Эффект солевой пещеры"},warrior_path:{title:"Путь воина",subtitle:"С контрастом",duration:"20-25 мин",price:"3 500 бат",description:"Парение за два захода с обливанием холодной водой между ними. Догрев спины и угощение квасом"},stalwar:{title:"Сила Тора",subtitle:"Парение сталевара",duration:"15-20 мин",price:"3 500 бат",description:"Динамическое парение на высоком жгучем пару. Приводит организм в тонус, снимает мышечное напряжение"},honey:{title:"Медовое парение",subtitle:"С натуральным медом",duration:"15-20 мин",price:"4 000 бат",description:"Авторское парение канадскими вениками с нанесением меда. Витамины через открытые поры и аромат летнего луга"},royal:{title:"Королевское парение",subtitle:"Со скрабом мед-соль",duration:"25-30 мин",price:"4 500 бат",description:"Царское парение канадскими вениками с двух сторон. Глубокий скраб медом и морской солью очищает кожу"},valhalla:{title:"Вальхалла",subtitle:"Коллективное парение",duration:"10-20 мин",price:"3 500 бат",description:"Парение веером и вениками для компании 3-5 человек. Ванночка для ног с травами и морскими камушками"}},coming_soon:{title:"Скоро открытие",description:"Мы готовим для вас уникальные банные программы с традиционными русскими ритуалами и современными wellness-процедурами",subtext:"Следите за новостями — скоро мы обновим этот раздел!"},popular:"Популярно"},faq:{badge:"Вопросы и ответы",title:'Часто задаваемые <span className="highlight">вопросы</span>',subtitle:"Ответы на самые популярные вопросы о нашей бане",questions:{panoramic:{question:"Что особенного в панорамной бане?",answer:"Наша баня уникальна несколькими особенностями: площадь 150 квадратных метров с панорамными окнами в джунгли, построена из сибирского кедра и алтайской липы - премиальных натуральных материалов. Это единственная панорамная русская баня на Пхукете, где можно наслаждаться традиционными банными ритуалами с видом на тропическую природу."},procedures:{question:"Какие процедуры входят в банный ритуал?",answer:"В зависимости от выбранной программы вы получите: классический банный ритуал с березовыми вениками, ароматерапию с эфирными маслами, травяные настои и чаи."},materials:{question:"Из каких материалов построена баня?",answer:"Баня построена исключительно из натуральных экологически чистых материалов: сибирский кедр, алтайская липа, карельская береза. Все покрытия природные, без химических добавок. Такие материалы создают особый микроклимат и обеспечивают естественную ароматерапию."}}},booking:{badge:"Бронирование",title:'Забронировать <span className="highlight">баню</span>',description:"Для бронирования свяжитесь с нами удобным способом",cta:{title:'Готовы окунуться в мир <span className="highlight">русской бани</span>?',description:"Свяжитесь с нами для получения подробной информации о ценах, доступности и особенностях наших банных программ",button:"Перейти к контактам"},contact:{whatsapp:{title:"WhatsApp",value:"Забронировать через WhatsApp"},location:{title:"Местоположение",value:"Катху, Пхукет"},hours:{title:"Время работы",value:"17:00 - 22:00"}},book_whatsapp_button:"Забронировать через WhatsApp",call_now_button:"Позвонить сейчас"}},sports:{title:"Спортивный комплекс",description:"Современные тренировочные объекты для всех",hero:{tag:"Фитнес и спорт",title:"Превосходи себя в <span>спорте</span> с KAIF",subtitle:"Современные тренажеры, профессиональные тренеры и атмосфера для достижения ваших спортивных целей",cta:"Изучить объекты",primary_cta:"Записаться на тренировку",secondary_cta:"Узнать подробнее",stats:{facilities:"Спортивных объектов",trainers:"Профессиональных тренеров",access:"Современное оборудование"}},gym:{tag:"Наши услуги",facility_tag:"Фитнес",section_title:"Премиальные спортивные объекты",section_subtitle:"Откройте для себя мир фитнеса и спорта в KAIF Jungle Club. Наши современные услуги созданы, чтобы дать вам возможность тренироваться с удовольствием и достигать новых высот.",title:"Тренажерный зал",description1:"Просторный современный тренажерный зал с кардио и силовым оборудованием высокого класса. Зал оснащен всем необходимым для полноценных тренировок и поддержания физической формы.",description2:"Гости имеют доступ к персональным шкафчикам, душевым, а также услугам персонального тренера по предварительной записи."},dance:{facility_tag:"Танцы",title:"Танцевальная студия",description1:"Просторная танцевальная студия с профессиональным паркетным покрытием, зеркальными стенами и современной аудиосистемой.",description2:"Студия предлагает групповые и индивидуальные занятия по различным направлениям: современные танцы, бальные танцы, йога, стретчинг, пилатес и другие направления.",schedule_button:"Расписание"},gallery:{tag:"Наши моменты",title:"Галерея",subtitle:"Запечатленные моменты спортивной жизни в KAIF Jungle Club & SPA. Присоединяйтесь к нашему сообществу и делитесь своими достижениями",yoga:"Йога на закате",subtitle_yoga:"Ежедневные занятия",training:"Тренировка с персональным тренером",subtitle_training:"Индивидуальный подход",swimming:"Бассейн",subtitle_swimming:"Расслабление и восстановление"},schedule:{tag:"Планирование",title:"РАСПИСАНИЕ",subtitle:"ВЫБЕРИТЕ ДЕНЬ НЕДЕЛИ",minutes:"мин",description:"Еженедельное расписание занятий с профессиональными инструкторами",coming_soon:"Расписание тренировок скоро будет доступно. Для получения актуальной информации свяжитесь с нами.",contact_button:"Связаться с нами"},facilities:{tag:"Наши объекты",title:"Современные <span>спортивные</span> пространства",subtitle:"KAIF предлагает широкий выбор премиальных спортивных пространств с передовым оборудованием и профессиональными тренерами, которые помогут вам достичь ваших фитнес-целей.",book_button:"Забронировать тренировку",gym:{title:"Тренажерный зал",description:"Более 70 единиц профессионального оборудования",hours:"07:00 - 22:00",capacity:"До 40 человек",description1:"Наш тренажерный зал оснащен современным оборудованием премиум-класса от ведущих производителей. Здесь вы найдете все необходимое для эффективных тренировок - от свободных весов до кардиотренажеров последнего поколения.",description2:"Просторное помещение с панорамными окнами создает идеальную атмосферу для тренировок, а профессиональные тренеры всегда готовы помочь составить индивидуальную программу.",feature1:"Премиальное оборудование Technogym и Life Fitness",feature2:"Зона функционального тренинга",feature3:"Индивидуальные тренировки с сертифицированными тренерами"},fight:{title:"Бойцовский клуб",description:"Профессиональное оборудование для бокса и ММА",hours:"07:00 - 22:00",capacity:"До 25 человек",description1:"Бойцовский клуб KAIF — это современное пространство для тренировок по различным видам единоборств. Профессиональный ринг, груши, мешки, и специальное покрытие создают идеальные условия как для новичков, так и для опытных бойцов.",description2:"Наши тренеры — опытные бойцы и чемпионы, которые помогут освоить технику и достичь высоких результатов в выбранном боевом искусстве.",feature1:"Профессиональный боксерский ринг",feature2:"Тренировки по боксу, тайскому боксу, ММА",feature3:"Тренеры с международными сертификатами"},fight_club:{title:"Бойцовский клуб",description:"Профессиональное оборудование для бокса и ММА",hours:"07:00 - 22:00",capacity:"До 25 человек",description1:"Бойцовский клуб KAIF — это современное пространство для тренировок по различным видам единоборств. Профессиональный ринг, груши, мешки, и специальное покрытие создают идеальные условия как для новичков, так и для опытных бойцов.",description2:"Наши тренеры — опытные бойцы и чемпионы, которые помогут освоить технику и достичь высоких результатов в выбранном боевом искусстве.",feature1:"Профессиональный боксерский ринг",feature2:"Тренировки по боксу, тайскому боксу, ММА",feature3:"Тренеры с международными сертификатами"},dance:{title:"Танцевальная студия",description:"Для занятий йогой и танцами",hours:"07:00 - 22:00",capacity:"До 30 человек",description1:"Просторная танцевальная студия с профессиональным покрытием, зеркальными стенами и передовой аудиосистемой создает идеальные условия для различных танцевальных стилей и групповых занятий.",description2:"Здесь проходят занятия по современным и классическим танцевальным направлениям, а также групповые фитнес-тренировки под руководством опытных инструкторов.",feature4:"Гибкое расписание групповых и индивидуальных занятий",schedule_title:"Занятия и расписание",schedule_subtitle:"Найдите подходящее занятие",filter_label:"Фильтр:",filter_all:"Все",filter_group:"Групповые",filter_personal:"Персональные",filter_events:"Мероприятия"}},membership:{title:"Варианты членства",description:"Выберите план, который подходит именно вам"},charity:{title:"Благотворительные тренировки",description:"Субботние тренировки с профессиональными спортсменами, все сборы идут в фонд Child Watch Phuket Foundation"}},about:{title:"О нас",description:"KAIF - Jungle Club & Spa — премиальный оздоровительный комплекс на Пхукете",overview:{title:"Обзор комплекса",description:"Подробная информация о всех наших объектах"},features:{title:"Ключевые особенности",largest_sauna:"Самая большая сауна в Таиланде (50м²)",hammams:"Тайский и турецкий хаммам",restaurant:"Ресторан с 5 кухнями",dance_studio:"Студия танцев и йоги (доступна для аренды)",gym:"Фитнес-центр с более чем 70 тренажерами",pool:"Бассейн 25м",massage:"Различные техники массажа",fight_club:"Бойцовский клуб",kids_room:"Детская комната (от 3 до 14 лет)"},gallery:{title:"Галерея",description:"Высококачественные фотографии всех объектов"},mission:{title:"Наша миссия",description:"Предоставить исключительный опыт оздоровления на Пхукете"}},promotions:{title:"Акции",description:"Специальные предложения",day_pass:{title:"День в комплексе",price:"390 THB",description:"Доступ к тренажерному залу, бассейну, ледяной купели и сауне",terms:"Применяются условия и положения"},charity:{title:"Благотворительная тренировка",price:"200 THB",description:"Субботняя тренировка с профессиональными спортсменами",foundation:"Все сборы идут в фонд Child Watch Phuket Foundation"},seasonal:{title:"Сезонные предложения",description:"Предложения с ограниченным сроком действия"},loyalty:{title:"Программа лояльности",description:"Бонусы для наших постоянных клиентов"}},contacts:{title:"Контакты",hero:{title:"Контакты",subtitle:"Выберите удобный способ связи"},info:{title:"Контактная информация",subtitle:"Свяжитесь с нами удобным способом",address:{title:"Адрес",text:"73, Baan Chalekiri Village, 6 Pra Phuket Keaw Road, Kathu",country:"Пхукет, Таиланд",directions:"Проложить маршрут"},phone:{call_now:"Позвонить"},email:{title:"Email",response:"Ответ в течение 24 часов"},hours:{title:"Время работы",daily:"Ежедневно: 7:00 - 22:00",booking:"Бронирование 24/7"},social:{title:"Социальные сети",subtitle:"Следите за нашими обновлениями и акциями"},whatsapp:{text:"Написать в WhatsApp",greeting:"Здравствуйте! Хочу записаться в KAIF"},buttons:{get_directions:"Маршрут",contact:"Связаться",book:"Бронировать"}},cta:{primary:"Связаться",secondary:"Наш адрес"},form:{title:"Написать нам",subtitle:"Заполните форму ниже, и мы свяжемся с вами в ближайшее время",success:"Ваше сообщение успешно отправлено!",error:"Произошла ошибка. Пожалуйста, попробуйте снова.",sending:"Отправка...",submit:"Отправить сообщение"},phone:{title:"Телефон",whatsapp:"WhatsApp доступен"},email:{title:"Email",response:"Ответ в течение 24 часов"},address:{title:"Адрес"},hours:{title:"Время работы",daily:"Ежедневно: 7:00 - 22:00",booking:"Бронирование 24/7"},social:{title:"Следите за нами в соцсетях",subtitle:"Будьте в курсе последних новостей и акций KAIF"},whatsapp:{message_contact:"Здравствуйте! Хочу связаться с KAIF",message_book:"Здравствуйте! Хочу забронировать услугу в KAIF",message_general:"Здравствуйте! У меня есть вопрос о KAIF"},map:{title:"Как нас найти",subtitle:"Удобное расположение в центре Катху, Пхукет"},feedback:{title:"Обратная связь",description:"Нам важно ваше мнение"}},booking:{submit:"Отправить",privacyInfo:"Отправляя форму, вы соглашаетесь с нашей",privacyLink:"политикой конфиденциальности"},gallery:{overline:"Галерея",title:"Впечатления KAIF",subtitle:"Погрузитесь в атмосферу KAIF через нашу галерею фотографий. Познакомьтесь с нашими услугами и возможностями комплекса.",filters:{all:"Все",spa:"СПА",fitness:"Фитнес",pool:"Бассейн",relax:"Релаксация"},slides:{thai_massage:{title:"Тайский массаж",description:"Традиционный тайский массаж в исполнении опытных мастеров. Восстановление энергии и гармонии тела."},aromatherapy:{title:"Ароматерапия",description:"Расслабляющие процедуры с натуральными эфирными маслами премиум-качества."},gym:{title:"Тренажерный зал",description:"Более 70 современных тренажеров премиум-класса. Профессиональное оборудование для всех видов тренировок."},facial:{title:"Косметология",description:"Профессиональные процедуры для лица с использованием премиум косметики."}}},footer:{navigation:"Навигация",brand:{description:"Премиальный оздоровительный комплекс на Пхукете. Мы создаем уникальный опыт wellness для восстановления гармонии тела и души."},services:{title:"Услуги",sauna:"Сауна и хаммам",fitness:"Фитнес-центр",fight_club:"Бойцовский клуб"},schedule:{daily:"Ежедневно",hours:"7:00 - 22:00"},copyright:"Все права защищены.",legal:{privacy:"Политика конфиденциальности",terms:"Условия использования"}},promo:{title:"ПОСЛЕДНИЙ ШАНС ПО ТЕКУЩИМ ЦЕНАМ",subtitle:"Успейте купить абонементы в тренажерный зал до повышения цен 1 августа"},terms:{title:"Условия использования",intro:"Настоящие Условия использования регулируют порядок предоставления услуг оздоровительного комплекса KAIF на острове Пхукет, Таиланд.",general:{title:"1. Общие положения",content:"Используя наши услуги, вы соглашаетесь с настоящими условиями. KAIF предоставляет услуги SPA, фитнеса, ресторана и русской бани."},booking:{title:"2. Бронирование и отмена",content:"Бронирование услуг осуществляется по телефону или через WhatsApp. Отмена бронирования возможна не позднее чем за 24 часа до назначенного времени."},rules:{title:"3. Правила посещения",content:"Посетители обязаны соблюдать правила гигиены и безопасности. Администрация оставляет за собой право отказать в обслуживании при нарушении установленных правил."},liability:{title:"4. Ответственность",content:"KAIF не несет ответственности за личные вещи посетителей. Все процедуры выполняются квалифицированными специалистами с соблюдением международных стандартов безопасности."},contacts:{title:"5. Контакты",content:"По всем вопросам обращайтесь:",email:"Email: info@kaif-phuket.com",phone:"Телефон: +66 62 480 5877",address:"Адрес: Phuket, Thailand"}},privacy:{title:"Политика конфиденциальности",intro:"Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей оздоровительного комплекса KAIF.",collection:{title:"1. Сбор информации",content:"Мы собираем только ту информацию, которая необходима для предоставления качественных услуг: имя, контактные данные, предпочтения по услугам."},usage:{title:"2. Использование информации",content:"Ваши данные используются исключительно для записи на процедуры, информирования о новых услугах и улучшения качества обслуживания."},protection:{title:"3. Защита данных",content:"Мы применяем современные методы защиты информации и не передаем персональные данные третьим лицам без вашего согласия."},contacts:{title:"4. Контакты",content:"По вопросам обработки персональных данных обращайтесь:",email:"Email: info@kaif-phuket.com",phone:"Телефон: +66 62 480 5877"}},promo_banner:{title:"Последний шанс по текущим ценам",subtitle:"Успейте приобрести безлимитные абонементы до повышения цен 1 августа"}},G={page_titles:{home:"KAIF | ศูนย์สุขภาพและความงามระดับพรีเมียมในภูเก็ต",restaurant:"ร้านอาหาร KAIF | อาหารเลิศรสและอาหารประณีต",spa:"สปา KAIF | การบำบัดสปาหรูหราและการผ่อนคลาย",sports:"กีฬา KAIF | ฟิตเนสทันสมัยและศิลปะการต่อสู้",banya:"บันยา KAIF | ประสบการณ์ซาวน่ารัสเซียแบบดั้งเดิม",contacts:"ติดต่อ KAIF | ติดต่อเรา"},common:{phone_number:"+66 62 480 5877",book:"จอง",book_now:"จองเลย",photo_placeholder:"รูปภาพจะถูกเพิ่ม",learn_more:"เรียนรู้เพิ่มเติม",view_all:"ดูทั้งหมด",read_more:"อ่านเพิ่มเติม",submit:"ส่ง",scroll_down:"เลื่อนลง",name:"ชื่อ",email:"อีเมล",phone:"โทรศัพท์",message:"ข้อความ",date:"วันที่",time:"เวลา",people:"จำนวนคน",special_requests:"คำขอพิเศษ",address:"73, Baan Chalekiri Village, 6 Pra Phuket Keaw Road, Kathu",select_language:"เลือกภาษา",contact_us:"ติดต่อเรา",exploreMore:"เรียนรู้เพิ่มเติม",from:"จาก",categories:"หมวดหมู่",activity:"กิจกรรม",relaxation:"การพักผ่อน",whatsapp_messages:{book_table:"สวัสดีค่ะ/ครับ! ต้องการจองโต๊ะที่ร้านอาหาร KAIF",book_banya:"สวัสดีค่ะ/ครับ! ต้องการจองบันยารัสเซีย"}},navigation:{home:"หน้าแรก",restaurant:"ร้านอาหาร",spa:"สปา",sports:"กีฬา",banya:"บันยารัสเซีย",about:"เกี่ยวกับเรา",promotions:"โปรโมชั่น",contacts:"ติดต่อ"},home:{hero:{title:"KAIF - Jungle Club & Spa",subtitle:"คอมเพล็กซ์เพื่อสุขภาพระดับพรีเมียม",cta:"สำรวจบริการของเรา",overline:"คอมเพล็กซ์พรีเมียมในภูเก็ต",mainTitle:"KAIF",services:"บริการของเรา",bookNow:"จองตอนนี้",virtualTour:"ทัวร์เสมือนจริง",slideAlt:"KAIF - Jungle Club & Spa",stats:{zones:"โซนพักผ่อน",sauna:"ซาวน่า",equipment:"อุปกรณ์"},heroServices:{gym:{title:"ยิม",description:"อุปกรณ์ทันสมัยกว่า 70 ชิ้นในห้องกว้างขวาง"},martialArts:{title:"ศิลปะการต่อสู้",description:"MMA มวย มวยไทย กับครูฝึกมืออาชีพ"},pool:{title:"สระ 25 เมตร",description:"มาตรฐานโอลิมปิกพร้อมน้ำอุ่น"},spa:{title:"ศูนย์สปา",description:"นวดไทย อโรมาเธอราปี การผ่อนคลาย"},restaurant:{title:"ร้านอาหาร",description:"อาหาร 5 สัญชาติพร้อมระเบียงชมวิว"},beauty:{title:"ซาลอนความงาม",description:"เสริมความงาม ทรีทเมนต์ บริการทำผม"}}},philosophy:{overline:"ปรัชญาของเรา",title:"พื้นที่แห่งความสมดุลและการพัฒนาตนเอง",paragraph1:"เราสร้างพื้นที่ที่ทำให้ชีวิตสดใสขึ้น พันธกิจของเราคือการทำให้การพักผ่อนและการดูแลตัวเองเป็นความสุข ไม่ใช่ภาระ KAIF เป็นสถานที่ที่คุณได้ฟื้นฟูพลัง เติมพลังงาน และเพลิดเพลินกับทุกช่วงเวลา",paragraph2:"ทุกอย่างที่นี่ออกแบบมาเพื่อให้คุณอยากกลับมา: การออกกำลังกายที่สร้างแรงบันดาลใจ การพักผ่อนที่เติมเต็ม และบรรยากาศที่มอบความรู้สึกดีๆ เราเชื่อว่าความสมดุลไม่ใช่ความหรูหรา แต่เป็นสิ่งจำเป็น และเราทำให้สิ่งนี้เข้าถึงได้สำหรับคุณ",quote:"สุขภาพไม่ใช่เพียงการปราศจากโรคภัย แต่คือสภาวะแห่งความสมบูรณ์ทั้งทางร่างกาย จิตใจ และสังคม",imageAlt:"KAIF - พื้นที่แห่งความสมดุลและการพัฒนาตนเอง",principle1:{title:"ความสะดวกสบายและแรงบันดาลใจ",text:"สร้างบรรยากาศที่ทำให้การออกกำลังกายแต่ละครั้งเป็นความสุข"},principle2:{title:"ความสมดุลและความกลมกลืน",text:"บริการพรีเมียมเพื่อความสมดุลของร่างกายและจิตใจ"},principle3:{title:"แนวทางองค์รวม",text:"ทุกโซนของ KAIF ทำงานร่วมกันเพื่อความเป็นอยู่ที่ดีของคุณ"}},services:{title:"บริการของเรา",subtitle:"เลือกเส้นทางของคุณ: กิจกรรมที่มีพลังหรือการผ่อนคลาย",zones:{activity:"กิจกรรม",relax:"การผ่อนคลาย"},fitness:{title:"ศูนย์ฟิตเนส",description:"ยิมทันสมัยพร้อมอุปกรณ์มืออาชีพสำหรับการออกกำลังกายทุกประเภท",features:["อุปกรณ์ทันสมัยกว่า 70 ชิ้น","โซนคาร์ดิโอ","การฝึกฟังก์ชันนัล","การฝึกส่วนบุคคล"]},combat:{title:"ศิลปะการต่อสู้",description:"การฝึก MMA มวย และมวยไทยแบบมืออาชีพภายใต้การดูแลของครูฝึกที่มีประสบการณ์",features:["MMA และมวย","มวยไทย","สังเวียนมืออาชีพ","คลาสกลุ่มและส่วนบุคคล"]},pool:{title:"สระว่ายน้ำ",description:"สระว่ายน้ำมาตรฐานโอลิมปิก 25 เมตรสำหรับการว่ายน้ำและการออกกำลังกายในน้ำ",features:["มาตรฐานโอลิมปิก 25 เมตร","น้ำอุ่น","อควาฟิตเนส","โซนเด็ก"]},spa:{title:"ศูนย์สปา",description:"โอเอซิสแห่งความสงบพร้อมทรีทเมนต์ผ่อนคลายและฟื้นฟูที่หลากหลาย",features:["นวดไทย","อโรมาเธอราปี","หินร้อน","โซนผ่อนคลาย"]},banya:{title:"บันยารัสเซีย",description:"บันยารัสเซียที่ใหญ่ที่สุดในภูเก็ตพร้อมขั้นตอนแบบดั้งเดิม",features:["บันยารัสเซีย 50 ตร.ม.","ไม้กวาดเบิร์ชและกลิ่นหอม","ขั้นตอนอบไอน้ำ","พิธีชา"]},restaurant:{title:"ร้านอาหาร",description:"อาหารซิกเนเจอร์ชั้นเลิศพร้อมเมนูพิเศษกว่า 50 รายการจากเชฟ",features:["เมนูซิกเนเจอร์กว่า 50 รายการ","สูตรเฉพาะ","รายการไวน์","ระเบียงชมวิว"]},learn_more:"เรียนรู้เพิ่มเติม"},promotions:{title:"ข้อเสนอพิเศษ",day_pass:{title:"วันในคอมเพล็กซ์",price:"390 บาท",description:"เข้าถึงยิม สระว่ายน้ำ อ่างน้ำแข็ง และซาวน่า"},charity:{title:"การออกกำลังกายเพื่อการกุศล",price:"200 บาท",description:"การฝึกวันเสาร์กับนักกีฬามืออาชีพ รายได้มอบให้กับมูลนิธิ Child Watch Phuket",foundation:"Child Watch Phuket Foundation"}},about:{badge:"เกี่ยวกับคอมเพล็กซ์",title:"คอมเพล็กซ์<br />KAIF หลากหลายฟังก์ชัน",description1:"KAIF PHUKET เป็นคอมเพล็กซ์พรีเมียมที่คุณฟื้นฟูพลัง เติมพลังงาน และเพลิดเพลินกับทุกช่วงเวลา ทุกอย่างที่นี่สร้างขึ้นเพื่อให้คุณอยากกลับมา: การออกกำลังกายที่สร้างแรงบันดาลใจ การพักผ่อนที่เติมเต็ม และบรรยากาศที่มอบความสุขแท้จริง",description2:"เราสร้างพื้นที่ที่ไม่เหมือนใครในภูเก็ต ที่บริการพรีเมียมผสานกับการต้อนรับแบบไทย KAIF ไม่ใช่แค่สปาคอมเพล็กซ์ แต่เป็นปรัชญาของการใช้ชีวิตที่มีสุขภาพดีและความกลมกลืน",stats:{banya:"บันยารัสเซีย",equipment:"อุปกรณ์",dishes:"เมนูพิเศษ",pool:"สระโอลิมปิก"},features:{spa:{title:"คอมเพล็กซ์สปา",description:"ซาวน่าที่ใหญ่ที่สุดในไทย หอบไอน้ำ และห้องนวด"},gym:{title:"ยิม",description:"อุปกรณ์ทันสมัยกว่า 70 ชิ้น และครูฝึกมืออาชีพ"},martial:{title:"ศิลปะการต่อสู้",description:"MMA มวย มวยไทย กับครูฝึกมืออาชีพ"},pool:{title:"สระโอลิมปิก",description:"สระ 25 เมตรพร้อมน้ำอุ่นและอควาฟิตเนส"},restaurant:{title:"ร้านอาหาร",description:"เมนูพิเศษกว่า 50 รายการจากเชฟและระเบียงชมวิว"},beauty:{title:"ซาลอนความงาม",description:"เสริมความงาม ทรีทเมนต์ บริการทำผม"}}},about_preview:{title:"เกี่ยวกับ KAIF",description:"KAIF คือคอมเพล็กซ์เพื่อสุขภาพชั้นนำของภูเก็ตที่นำเสนอสิ่งอำนวยความสะดวกระดับโลกสำหรับจิตใจ ร่างกาย และจิตวิญญาณ",features:{largest_sauna:"ซาวน่าที่ใหญ่ที่สุดในประเทศไทย (50ตร.ม.)",hammams:"หอบไอน้ำแบบไทยและตุรกี",restaurant:"ร้านอาหาร 5 สัญชาติ",gym:"ยิมพร้อมอุปกรณ์กว่า 70 ชิ้น",pool:"สระว่ายน้ำขนาด 25 เมตร",fight_club:"คลับมวยมืออาชีพ"}},location:{title:"ค้นหาเรา",description:"ตั้งอยู่อย่างสะดวกในกะทู้ ห่างจากป่าตองเพียงไม่กี่นาที"}},facilities:{overline:"สิ่งอำนวยความสะดวกของเรา",title:"พื้นที่แห่งความสมดุลและการพัฒนาตนเอง",subtitle:"เราสร้างพื้นที่ที่ทำให้ชีวิตสดใสขึ้น พันธกิจของเราคือการทำให้การพักผ่อนและการดูแลตัวเองเป็นความสุข ไม่ใช่ภาระ",gym:{name:"อุปกรณ์",description:"อุปกรณ์ทันสมัยสำหรับการออกกำลังกายที่มีประสิทธิภาพ"},banya:{name:"บันยารัสเซีย",description:"ห้องอบไอน้ำรัสเซียแบบพาโนรามาที่ใหญ่ที่สุดในภูเก็ต"},restaurant:{name:"ที่นั่งในร้านอาหาร",description:"ร้านอาหารกลางแจ้ง"},pool:{name:"สระว่ายน้ำ",description:"มาตรฐานโอลิมปิกสำหรับการว่ายน้ำ",unit:"ม"}},zones:{overline:"พื้นที่ KAIF",title:"ทุกสิ่งที่คุณต้องการสำหรับการพักผ่อนและผ่อนคลาย",all:"ทุกโซน",activity_label:"กิจกรรม",relax_label:"ผ่อนคลาย",activity:{fitness:{name:"ยิม",description:"พื้นที่ทันสมัยพร้อมอุปกรณ์พรีเมียม"},combat:{name:"ศิลปะการต่อสู้",description:"MMA มวย และมวยไทยกับครูฝึกมืออาชีพ"},pool:{name:"สระว่ายน้ำ",description:"ว่ายน้ำในสระขนาด 25 เมตร"}},relax:{spa:{name:"คอมเพล็กซ์สปา",description:"ทรีทเมนต์ผ่อนคลายและนวดพรีเมียม"},banya:{name:"บันยารัสเซีย",description:"ขั้นตอนบันยาแบบดั้งเดิมและสุขภาพ"},restaurant:{name:"ร้านอาหาร",description:"อาหารเลิศรสและเมนูซิกเนเจอร์"}}},popular_services:{title:"บริการยอดนิยม",subtitle:"ทรีทเมนต์สปาและความงามที่ได้รับความนิยมมากที่สุดในศูนย์ของเรา",hit:"ฮิต",view_all:"ดูบริการทั้งหมด"},faq:{badge:"คำถามและคำตอบ",title:"คำถามที่พบบ่อย",subtitle:"ทุกสิ่งที่คุณต้องรู้เกี่ยวกับคอมเพล็กซ์หลากหลายฟังก์ชันของเรา",questions:{what_includes:{question:"คอมเพล็กซ์ KAIF ประกอบด้วยอะไรบ้าง?",answer:"KAIF เป็นคอมเพล็กซ์ที่ไม่เหมือนใครในภูเก็ต ที่คุณสามารถผสมผสานกิจกรรม การพักผ่อน และการดูแลตัวเองในที่เดียว พื้นที่ประกอบด้วย: ฟิตเนสสมัยใหม่ สระว่ายน้ำโอลิมปิกพร้อมโซนพักผ่อน สตูดิโอเต้นรำและการฝึกฟังก์ชันนัล ห้องศิลปะการต่อสู้ บิวตี้สตูดิโอ สปาพร้อมเซาน่ารัสเซีย ฮัมมามไทย และบริการนวด ร้านอาหารที่มีอาหารตะวันออก อาหารรัสเซียคลาสสิก และอาหารย่าง"},working_hours:{question:"คอมเพล็กซ์เปิดทำการเวลาไหน?",answer:"เราเปิดทำการทุกวันตั้งแต่ 6:00 น. ถึง 23:00 น. บางโซน (สปา ร้านอาหาร) อาจมีตารางเวลาแยกต่างหาก เราแนะนำให้ตรวจสอบเวลาทำการของบริการเฉพาะเมื่อจอง"},how_to_book:{question:"จองบริการได้อย่างไร?",answer:"สามารถจองได้ผ่านเว็บไซต์ของเรา แอปมือถือ โทรศัพท์ +66 76 123 456 หรือ WhatsApp เราแนะนำให้จองล่วงหน้า โดยเฉพาะการรักษาสปาและโต๊ะในร้านอาหาร"},memberships:{question:"สามารถซื้อบัตรสมาชิกได้หรือไม่?",answer:"ได้! เรามีบัตรสมาชิกหลากหลายรูปแบบ: รายวัน รายสัปดาห์ รายเดือน และรายปี นอกจากนี้ยังมีแพ็กเกจรวมที่รวมหลายบริการพร้อมส่วนลดสูงสุด 30%"},experience_needed:{question:"จำเป็นต้องมีประสบการณ์ในการเข้าชั้นเรียนหรือไม่?",answer:'ไม่! เรามีโปรแกรมสำหรับทุกระดับความสามารถ ผู้เริ่มต้นจะได้รับการปฐมนิเทศ คำปรึกษาส่วนบุคคล และโปรแกรม "ก้าวแรก" เพื่อเริ่มการออกกำลังกายอย่างปลอดภัย'},payment_methods:{question:"รับชำระเงินด้วยวิธีใดบ้าง?",answer:"เรารับชำระเงินในสกุลบาทไทย: เงินสด บัตร หรือ QR Code"}},support:{title:"ฝ่ายสนับสนุน",description:"ทีมของเราพร้อมช่วยเหลือคุณในเวลาทำการ ติดต่อเราด้วยวิธีที่สะดวกสำหรับคุณ",location:"ภูเก็ต ประเทศไทย",hours:"สนับสนุนในเวลาทำการ"},whatsapp:{title:"แชท WhatsApp",description:"ตอบกลับอย่างรวดเร็วในแมสเซนเจอร์ การจอง คำถาม การสนับสนุน - ทุกอย่างในแชทเดียว",instant_replies:"ตอบกลับทันที",personal_manager:"ผู้จัดการส่วนบุคคล"},consultation:{title:"คำปรึกษาส่วนบุคคล",description:"แนวทางเฉพาะบุคคลสำหรับแขกทุกคน เราจะช่วยสร้างโปรแกรมสำหรับเป้าหมายของคุณ",free:"คำปรึกษาฟรี"}},restaurant:JSON.parse('{"title":"ร้านอาหาร","description":"สัมผัสรสชาติที่พิเศษจากห้าอาหารนานาชาติในร้านอาหารของเรา","hero":{"label":"ร้านอาหารของเรา","title":"อาหารชั้นเลิศ","highlight":"ที่ผสานแนวใหม่","subtitle":"เชฟของเราสร้างสรรค์อาหารเฉพาะตัวด้วยการผสมผสานสูตรดั้งเดิมกับเทคนิคการทำอาหารใหม่","button":"เมนูของเรา","reviews":"รีวิวยอดเยี่ยม"},"menu":{"title":"เมนูของเรา","description":"ค้นพบความหลากหลายของรสชาติในเมนูของเราที่สร้างสรรค์โดยเชฟที่มีพรสวรรค์","drinks_info":"เครื่องดื่มแสดงด้วยไอคอนสวยงามแทนรูปถ่าย","tag":"อาหารชั้นเลิศ","sort_by":"เรียงตาม:","popular":"ยอดนิยม","add":"เพิ่ม","add_to_order":"เพิ่มในรำการสั่ง","show_more":"แสดงเพิ่มเติม","view_all":"ดูเมนูทั้งหมด","categories":{"all":"อาหารทั้งหมด","breakfast":"อาหารเช้า","soup":"น้ำซุป","salad":"สลัดและของทานเล่น","grill":"อาหารปิ้งย่าง","side":"อาหารเสริม","sauce":"ซอส","bread":"ขนมปัง","burger":"เบอร์เกอร์","shawarma":"ชาวาร์มา","dessert":"ของหวาน","tea":"ชา","coffee":"กาแฟ","coffee_signature":"กาแฟซิกเนเจอร์","smoothie":"สมูทตี้","mocktail":"ม็อกเทล","juice":"น้ำผลไม้สด","cocktail":"ค็อกเทล","wine":"ไวน์","beer":"เบียร์","strong":"เหล้าแรง","liqueur":"ลิเคียว","fitness":"เครื่องดื่มฟิตเนส","water":"น้ำ","milk":"ผลิตภัณฑ์นม","soft_drink":"เครื่องดื่มอ่อน"},"tags":{"breakfast":"อาหารเช้า","soup":"น้ำซุป","salad":"สลัด","appetizer":"ของทานเล่น","grill":"ปิ้งย่าง","main":"จานหลัก","dessert":"ของหวาน","drinks":"เครื่องดื่ม","popular":"ยอดนิยม","vegetarian":"มังสวิรัติ","vegan":"วีแกน","healthy":"ดีต่อสุขภาพ","spicy":"เผ็ด","seafood":"อาหารทะเล","meat":"เนื้อสัตว์","sweet":"หวาน","cold":"เย็น","hot":"ร้อน","fitness":"ฟิตเนส","pre-workout":"ก่อนออกกำลังกาย","mass-gainer":"เพิ่มน้ำหนัก","bcaa":"บีซีเอเอ","recovery":"ฟื้นฟู","electrolyte":"อิเล็กโทรไลต์","fat-burner":"เผาผลาญไขมัน"},"sort":{"default":"ค่าเริ่มต้น","popular":"ยอดนิยมก่อน","price_low":"ราคา: ต่ำไปสูง","price_high":"ราคา: สูงไปต่ำ","name":"ตามตัวอักษร"},"items":{"kaif_breakfast":{"name":"อาหารเช้า KAIF","description":"อาหารเช้าซิกเนเจอร์ของร้านเรา"},"shakshuka_spinach_salmon":{"name":"ชักชูก้าผักโขมและแซลมอน","description":"อาหารไข่พร้อมผักโขมและแซลมอนนุ่ม"},"shakshuka_tomato_feta":{"name":"ชักชูก้ามะเขือเทศและเฟต้า","description":"ชักชูก้าแบบดั้งเดิมกับมะเขือเทศฉ่ำและชีสเฟต้า"},"syrniki_passion_fruit":{"name":"ซีร์นิกิกับครีมเปรี้ยวและซอสเสาวรส","description":"แพนเค้กนมอกจากบ้านนุ่มกับซอสเสาวรสพิเศษ"},"toast_cream_cheese_ham":{"name":"ขนมปังปิ้งครีมชีสและแฮม","description":"ขนมปังปิ้งกรอบกับครีมชีสนุ่มและแฮมคุณภาพดี"},"toast_salmon_avocado":{"name":"ขนมปังปิ้งแซลมอนเค็มและอะโวคาโด","description":"การผสมผสานที่เป็นเอกลักษณ์ของขนมปังปิ้งกรอบ แซลมอนนุ่ม และอะโวคาโดสุก"},"toast_avocado_tomato":{"name":"ขนมปังปิ้งอะโวคาโดและมะเขือเทศ","description":"อาหารเช้าเบาและดีต่อสุขภาพจากขนมปังปิ้งกรอบกับอะโวคาโดและมะเขือเทศฉ่ำ"},"matsoni_apricot":{"name":"มัตโซนิกับแยมแอปริคอต","description":"โยเกิร์ตคอเคเซียนแบบดั้งเดิมกับแยมแอปริคอตธรรมชาติ"},"buckwheat_chicken_mushrooms":{"name":"โจ๊กข้าวโพดไก่เห็ดและซอสพาร์เมซาน","description":"โจ๊กข้าวโพดที่ให้สารอาหารกับไก่นุ่ม เห็ดหอม และซอสครีม"},"okroshka_ayran":{"name":"โอโครชก้ากับไอแรน","description":"ซุปเย็นสดชื่นฐานนมหมักกับผักและสมุนไพร"},"okroshka_kvass":{"name":"โอโครชก้ากับคว็าส","description":"โอโครชก้าคลาสสิกกับคว็าส ผักคัดสรร ไข่ และสมุนไพรสด"},"chikhirtma_corn":{"name":"ชิคิร์ตมากับข้าวโพด","description":"ซุปจอร์เจียแบบดั้งเดิมรสชาติเข้มข้น เติมเต็มด้วยข้าวโพดหวาน"},"borsch_classic":{"name":"บอร์ช คลาสสิก","description":"ซุปสลาฟแบบดั้งเดิมสีทับทิมเข้มข้นกับเนื้อและผัก"},"salad_potato_salmon":{"name":"ผักสลัดมันฝรั่งอ่อนและแซลมอนเค็ม","description":"ผักสลัดสดผสมกับมันฝรั่งอ่อนและแซลมอนเค็มนุ่ม"},"vegetable_salad_cheese":{"name":"สลัดผักสดกับชีสบรินซ่า","description":"สลัดผักสดแบบดั้งเดิมกับชีสบรินซ่านุ่ม"},"tomato_cucumber_greens":{"name":"มะเขือเทศ แตงกวา สมุนไพร","description":"มะเขือเทศสดฉ่ำและแตงกวากรอบกับสมุนไพรหอม ปรุงด้วยครีมเปรี้ยวหรือน้ำมันมะกอก"},"hummus_chickpeas":{"name":"ฮูมมุสถั่วเขียวย่าง","description":"ฮูมมุสนุ่มกับถั่วเขียวย่างเพิ่มเติมเพื่อเนื้อสัมผัส"},"hummus_avocado_tomato":{"name":"ฮูมมุสอะโวคาโดและมะเขือเทศ","description":"ฮูมมุสต้นตำรับกับอะโวคาโดสุกและมะเขือเทศสด"},"hummus_grilled_shrimp":{"name":"ฮูมมุสกุ้งย่าง","description":"ฮูมมุสคลาสสิกเติมเต็มด้วยกุ้งย่างฉ่ำ"},"hummus_chicken_kebab":{"name":"ฮูมมุสเคบับไก่","description":"ฮูมมุสเสิร์ฟพร้อมชิ้นเคบับไก่หอม"},"tzatziki_olives_pepper":{"name":"ซาซิกิมะกอกและพริกดอง","description":"ซอสโยเกิร์ตสดชื่นกับแตงกวา กระเทียม และสมุนไพร เติมเต็มด้วยมะกอกและพริกดอง"},"chicken_kebab_yogurt":{"name":"เคบับไก่ (ในโยเกิร์ต)","description":"เคบับฉ่ำจากสันในไก่หมักในโยเกิร์ตกับเครื่องเทศตะวันออก"},"beef_kebab":{"name":"เคบับเนื้อ","description":"เคบับฉ่ำจากเนื้อคัดสรร ย่างด้วยไฟเปิด"},"pork_neck_kebab":{"name":"เคบับคอหมู","description":"เคบับจากคอหมูหมักกับเครื่องเทศหอม"},"caesar_grilled_shrimp":{"name":"สลัดซีซาร์กุ้งย่าง","description":"สลัดซีซาร์คลาสสิกกับกุ้งย่างฉ่ำ"},"caesar_chicken_kebab":{"name":"สลัดซีซาร์เคบับไก่","description":"สลัดซีซาร์แบบดั้งเดิมกับเคบับไก่นุ่ม"},"chicken_adjika_potato":{"name":"ไก่อัดจิก้ามันฝรั่ง","description":"ไก่ฉ่ำหมักในซอสอัดจิก้าเผ็ดร้อนพร้อมมันฝรั่งอ่อน"},"lyulya_kebab_chicken":{"name":"ลูลยา-เคบับ (ไก่)","description":"เคบับสับจากสันในไก่กับเครื่องเทศหอม"},"lyulya_kebab_lamb":{"name":"ลูลยา-เคบับ (แกะ)","description":"ลูลยา-เคบับแบบดั้งเดิมจากเนื้อแกะสับกับเครื่องเทศตะวันออก"},"lyulya_kebab_beef_pork":{"name":"ลูลยา-เคบับ (เนื้อและหมู)","description":"ลูลยา-เคบับฉ่ำจากเนื้อและหมูสับผสม"},"grilled_salmon":{"name":"แซลมอนย่าง","description":"สันในแซลมอนนุ่มย่างด้วยไฟเปิด"},"white_perch_fillet":{"name":"สันในปลาเปอร์ชขาว","description":"สันในปลาเปอร์ชขาวนุ่มย่างด้วยเตาย่าง"},"grilled_shrimp":{"name":"กุ้งย่าง","description":"กุ้งก้ามกรามฉ่ำย่างด้วยสมุนไพรและน้ำมันกระเทียม"},"italian_ice_cream":{"name":"ไอศกรีมอิตาลี","description":"เจลาโต้อิตาลีแท้หลากหลายรสชาติ"},"green_tea":{"name":"ชาเขียว","description":"ชาเขียวคุณภาพสูงกลิ่นหอมอ่อน"},"black_tea":{"name":"ชาดำ","description":"ชาดำคลาสสิกรสชาติเข้มข้น"},"ginger_honey_tea":{"name":"ชาขิงน้ำผึ้ง","description":"ชาอุ่นด้วยขิงสดและน้ำผึ้งธรรมชาติ"},"mint_tea":{"name":"ชาสะระแหน่","description":"ชาสมุนไพรสดชื่นด้วยใบสะระแหน่สด"},"jasmine_tea":{"name":"ชามะลิ","description":"ชาหอมด้วยดอกมะลิ"},"fruit_tea":{"name":"ชาผลไม้","description":"ชาสมุนไพรผสมผลไม้แห้งและเบอร์รี่"},"thai_iced_tea":{"name":"ชาไทยเย็นนม","description":"ชาไทยดั้งเดิมเสิร์ฟเย็นด้วยนมข้นหวาน"},"espresso":{"name":"เอสเพรสโซ","description":"เอสเพรสโซอิตาลีคลาสสิกด้วยครีมา"},"americano":{"name":"อเมริกาโน","description":"เอสเพรสโซผสมน้ำร้อน"},"cappuccino":{"name":"คาปูชิโน","description":"เอสเพรสโซด้วยนมอบไอน้ำและฟอง"},"latte":{"name":"ลาเต้","description":"กาแฟเนียนด้วยนมอบไอน้ำ"},"mocha":{"name":"มอคค่า","description":"เครื่องดื่มกาแฟด้วยช็อกโกแลตและนมอบไอน้ำ"},"iced_latte":{"name":"ไอซ์ลาเต้","description":"ลาเต้เย็นด้วยน้ำแข็งและฟองนม"},"frappe":{"name":"แฟรปเป้","description":"เครื่องดื่มกาแฟเย็นผสมน้ำแข็ง"},"smoothie_lime":{"name":"ไลม์-ไลม์","description":"สมูทตี้สดชื่นด้วยไลม์ส่วนคู่"},"smoothie_mango_passion":{"name":"มะม่วง-เสาวรส","description":"สมูทตี้สดจากมะม่วงสุกและเสาวรส"},"banana_shake":{"name":"เชคกล้วย","description":"เชคกล้วยนุ่มด้วยนมและวานิลลา"},"matcha_latte":{"name":"มัตฉะลาเต้","description":"เครื่องดื่มหอมด้วยชาเขียวญี่ปุ่นมัตฉะ"},"butterfly_tea":{"name":"ชาดอกอัญชัน","description":"ชาสีน้ำเงินแปลกที่เปลี่ยนสี"},"passion_fruit_mocktail":{"name":"เสาวรส","description":"เครื่องดื่มสดชื่นจากเสาวรสสด"},"pink_lemonade":{"name":"น้ำมะนาวชมพู","description":"น้ำมะนาวชมพูอ่อนด้วยเบอร์รี่"},"honey_lemon":{"name":"น้ำผึ้งและมะนาว","description":"เครื่องดื่มดีต่อสุขภาพด้วยน้ำผึ้งธรรมชาติและมะนาว"},"electrolyte":{"name":"อิเล็กโทรไลต์","description":"เครื่องดื่มไอโซโทนิกเพื่อคืนสมดุลอิเล็กโทรไลต์"},"hibiscus_iced_tea":{"name":"ชาใบบัวบกเย็น","description":"ชาสดชื่นจากดอกชาบัวบก"},"lemonade_classic":{"name":"น้ำมะนาว","description":"น้ำมะนาวคลาสสิกจากมะนาวสด"},"mojito_virgin":{"name":"โมจิโต","description":"โมจิโตไม่แอลกอฮอล์ด้วยมิ้นต์ ไลม์ และโซดา"},"orange_juice":{"name":"น้ำส้มคั้นสด","description":"น้ำส้มคั้นสด"},"pineapple_juice":{"name":"น้ำสับปะรดคั้นสด","description":"น้ำคั้นสดจากสับปะรดสุก"},"apple_juice":{"name":"น้ำแอปเปิ้ลคั้นสด","description":"น้ำแอปเปิ้ลคั้นสด"},"carrot_juice":{"name":"น้ำแครอทคั้นสด","description":"น้ำแครอทคั้นสด"},"mango_juice":{"name":"น้ำมะม่วงคั้นสด","description":"น้ำคั้นสดจากมะม่วงสุก"},"prosecco":{"name":"ไวน์สปาร์คลิ่งโพรเซ็กโก","description":"ไวน์สปาร์คลิ่งอิตาลี"},"sauvignon_blanc":{"name":"ไวน์ขาวโซวิญอง บลานค์","description":"ไวน์ขาวแห้งฝรั่งเศส"},"oatmeal_apple_almonds":{"name":"โจ๊กข้าวโพดแอปเปิ้ลย่างและอัลมอนด์คาราเมล","description":"โจ๊กข้าวโพดนุ่มกับแอปเปิ้ลย่างหอมและอัลมอนด์คาราเมลกรอบ"},"grilled_vegetables":{"name":"ผักย่าง","description":"ผักตามฤดูกาลย่างอย่างสมบูรณ์แบบ"},"potatoes_herbs":{"name":"มันฝรั่งสมุนไพรสด","description":"มันฝรั่งต้มด้วยสมุนไพรสดหอมและเนย"},"buckwheat_mushrooms":{"name":"ข้าวโพดเห็ด","description":"โจ๊กข้าวโพดหอมกับเห็ดผัด"},"rice_quail_eggs":{"name":"ข้าวไข่นกกระทาและเครื่องเทศ","description":"ข้าวหอมกับไข่นกกระทานุ่มและเครื่องเทศตะวันออก"},"sauce_tzatziki_mint":{"name":"ซาซิกิมิ้นต์","description":"ซอสโยเกิร์ตสดชื่นกับแตงกวา กระเทียม สมุนไพร และมิ้นต์สด"},"sauce_satsebeli":{"name":"ซัตเซเบลี","description":"ซอสจอร์เจียเผ็ดทำจากมะเขือเทศ กระเทียม พริก และสมุนไพร"},"sauce_mustard":{"name":"ซอสมัสตาร์ด","description":"ซอสเผ็ดร้อนจากมัสตาร์ดดิจงกับน้ำผึ้งและเครื่องเทศ"},"sauce_pesto":{"name":"เพสโต","description":"ซอสหอมทำจากใบโหระพาและผักชีกับถั่วและเครื่องเทศ"},"bread_butter_adjika":{"name":"ขนมปังเนยและอัดจิก้า","description":"ขนมปังสดกับเนยบ้านและอัดจิก้าเผ็ด"},"shawarma_kaif":{"name":"ชาวาร์มา KAIF","description":"ชาวาร์มาซิกเนเจอร์ KAIF กับเครื่องเทศพิเศษและผักสด"},"classic_cheeseburger":{"name":"ชีสเบอร์เกอร์คลาสสิก","description":"แพตตี้เนื้อฉ่ำกับชีสละลายผักสลัดและซอสพิเศษ"},"kaif_burger_lamb":{"name":"เบอร์เกอร์ KAIF แพตตี้แกะและเบคอน","description":"เบอร์เกอร์พรีเมียมกับแพตตี้แกะ เบคอนกรอบ และซอสซิกเนเจอร์"},"burger_lamb_soy":{"name":"เบอร์เกอร์แกะซอสถั่วเหลือง","description":"แพตตี้แกะนุ่มกับซอสถั่วเหลืองเอเชียและผักสด"},"french_fries_burger":{"name":"เฟรนช์ฟรายส์สำหรับเบอร์เกอร์","description":"เฟรนช์ฟรายส์กรอบ เสริมที่สมบูรณ์แบบสำหรับเบอร์เกอร์ใดๆ"},"french_fries_parmesan":{"name":"เฟรนช์ฟรายส์พาร์เมซาน","description":"เฟรนช์ฟรายส์กับพาร์เมซานขูดและสมุนไพรหอม"},"homemade_yogurt":{"name":"โยเกิร์ตบ้านแยมแอปริคอต","description":"โยเกิร์ตบ้านนุ่มกับแยมแอปริคอตธรรมชาติ"},"napoleon":{"name":"นโปเลียน","description":"เค้กแผ่นคลาสสิกนโปเลียนกับครีมนุ่ม"},"lava_cake_cherry":{"name":"ลาวา เค้กแยมเชอร์รี่","description":"เค้กช็อกโกแลตอุ่นกับไส้ของเหลวและแยมเชอร์รี่"},"matcha_bomba":{"name":"มัตฉะบอมบ์","description":"เครื่องดื่มกาแฟซิกเนเจอร์กับมัตฉะ"},"espresso_chocolate":{"name":"เอสเปรสโซ่ช็อกโกแลต","description":"เอสเปรสโซ่กับช็อกโกแลต"},"espresso_negroni":{"name":"เอสเปรสโซ่เนโกรนี","description":"การตีความกาแฟของค็อกเทลคลาสสิก"},"pineapple_express":{"name":"สับปะรดเอ็กซ์เพรส","description":"กาแฟกับโน้ตสับปะรด"},"matcha_coco":{"name":"มัตฉะโคโค่","description":"มัตฉะกับนมมะพร้าว"},"honey_lemon_espresso":{"name":"น้ำผึ้งมะนาวเอสเปรสโซ่","description":"เอสเปรสโซ่กับน้ำผึ้งและมะนาว"},"kvass":{"name":"ควาส","description":"ควาสรัสเซียแบบดั้งเดิม 0.5L"},"cranberry_juice":{"name":"น้ำแครนเบอร์รี่","description":"น้ำแครนเบอร์รี่ 0.3L"},"pina_colada":{"name":"ปีน่า โคลาดา","description":"ค็อกเทลแปลกใหม่กับรัมและมะพร้าว"},"aperol_spritz":{"name":"อาเปรอล สปริทซ์","description":"เครื่องดื่มเปิดฟ้าอิตาลีกับ Aperol"},"bloody_mary":{"name":"บลัดดี้ แมรี่","description":"ค็อกเทลคลาสสิกกับวอดก้าและน้ำมะเขือเทศ"},"negroni":{"name":"เนโกรนี","description":"ค็อกเทลอิตาลีคลาสสิก"},"mojito_alcohol":{"name":"โมจิโตแอลกอฮอล์","description":"ค็อกเทลคิวบาคลาสสิกกับรัม"},"pure_vodka":{"name":"วอดก้าบริสุทธิ์","description":"วอดก้า (50 มล.)"},"whiskey_jack":{"name":"วิสกี้ แจ็ค แดเนียลส์","description":"วิสกี้เทนเนสซี (50 มล.)"},"rum_bacardi":{"name":"รัม บาคาร์ดี","description":"รัมขาว (50 มล.)"},"tequila_jose":{"name":"เตกีล่า โฮเซ่ เคอร์โว","description":"เตกีล่าเม็กซิกัน (50 มล.)"},"gin_bombay":{"name":"จิน บอมเบย์","description":"จินลอนดอนดราย (50 มล.)"},"cognac_hennessy":{"name":"คอนยัค เฮนเนสซี","description":"คอนยัคฝรั่งเศส (50 มล.)"},"martini_extra_dry":{"name":"มาร์ตินี่ เอ็กซ์ตร้า ดราย","description":"เวอร์มูธแห้ง (50 มล.)"},"vermouth_chinzano":{"name":"เวอร์มูธ ชินซาโน","description":"เวอร์มูธอิตาลี (50 มล.)"},"martini_rose":{"name":"มาร์ตินี่ เวอร์มูธ โรส","description":"เวอร์มูธสีชมพู (50 มล.)"},"singha_beer":{"name":"เบียร์สิงห์","description":"เบียร์ไทยสีอ่อน 0.33L"},"chang_beer":{"name":"เบียร์ช้าง","description":"เบียร์ไทยสีอ่อน 0.33L"},"leo_beer":{"name":"เบียร์ลีโอ","description":"เบียร์ไทยสีอ่อน 0.33L"},"heineken_beer":{"name":"เบียร์ไฮเนเก้น","description":"เบียร์นำเข้าสีอ่อน 0.33L"},"alt_milk":{"name":"นมทางเลือก","description":"นมจากพืช (ข้าวโอ๊ต, อัลมอนด์)"},"coconut_water":{"name":"น้ำมะพร้าว","description":"น้ำมะพร้าวธรรมชาติ"},"c4_original_shot":{"name":"ก่อนออกกำลังกาย","description":"C4 Original Shot - เพิ่มพลังงานก่อนออกกำลังกาย"},"serious_mass_shake":{"name":"เพิ่มน้ำหนัก","description":"Serious Mass Shake - เชคแคลอรี่สูงสำหรับเพิ่มกล้ามเนื้อ"},"xtend_eaa_recovery":{"name":"BCAA / EAA","description":"Xtend EAA Recovery - สนับสนุนต้านการสลายกล้ามเนื้อหลังออกกำลังกาย"},"electrolyte_boost":{"name":"อิเล็กโทรไลต์","description":"เติมเกลือแร่หลังเหงื่อออก - ช็อตไฮเดรชั่น"},"l_carnitine_shot":{"name":"เผาผลาญไขมัน","description":"L-Carnitine Shot - สนับสนุนการเผาผลาญไขมัน"},"endosphere_spa_program":{"name":"โปรแกรมสปาเอนโดสเฟียร์เทอราปี","description":"โปรแกรมสปาครบครันด้วยเอนโดสเฟียร์"},"gel_strengthening":{"name":"เสริมแรงเล็บด้วยเจลไม่ใส่สี","description":"เสริมแรงเล็บธรรมชาติด้วยเจล"},"gel_strengthening_polish":{"name":"เสริมแรงเล็บด้วยเจลพร้อมสี","description":"เสริมแรงเล็บพร้อมทาสี"},"gel_french":{"name":"แต่งเล็บเฟรนช์ด้วยเจล","description":"เฟรนช์แมนิเคียร์คลาสสิกด้วยเจล"},"nail_extension_short":{"name":"ต่อเล็บคลาสสิกสั้น (ไม่เกิน 2มม.)","description":"ต่อเล็บสั้น"},"nail_extension_long":{"name":"ต่อเล็บ (เกิน 2มม.)","description":"ต่อเล็บยาว"},"nail_repair":{"name":"ซ่อมเล็บ","description":"ซ่อมแซมเล็บที่เสียหาย"},"pedicure_toes_no_coating":{"name":"เพดิเคียร์นิ้วเท้าไม่ทาสี","description":"ดูแลเฉพาะเล็บนิ้วเท้า"},"pedicure_toes_coating":{"name":"เพดิเคียร์นิ้วเท้าทาเจล","description":"ดูแลเล็บพร้อมทาสี"},"callus_removal":{"name":"กำจัดตาปลา","description":"กำจัดตาปลาแบบมืออาชีพ"},"onycholysis_cleaning":{"name":"ทำความสะอาดออนิโคไลซิส (มาสเตอร์)","description":"รักษาการหลุดของเล็บ"},"hair_wash_brushing":{"name":"สระพร้อมเป่าแรง","description":"สระผมพร้อมจัดแต่งทรงด้วยแปรง"},"bangs_haircut":{"name":"ตัดผมหน้า","description":"ตัดแต่งผมหน้า"},"hair_styling":{"name":"จัดทรงพร้อมผลิตภัณฑ์จัดแต่ง","description":"จัดทรงผมแบบมืออาชีพ"},"evening_styling":{"name":"จัดทรงราตรี","description":"จัดทรงสำหรับงานพิเศษ"},"coloring_roots":{"name":"ย้อมรากผมสีเดียว","description":"ย้อมรากผมที่งอกใหม่"},"coloring_stretching":{"name":"ย้อมราก + ลากสีตลอดความยาว","description":"ย้อมผมแบบซับซ้อนพร้อมลากสี"},"coloring_short":{"name":"ย้อมผมสั้นสีเดียว","description":"ย้อมผมสั้นทั้งหัว"},"coloring_medium":{"name":"ย้อมผมกลางสีเดียว","description":"ย้อมผมความยาวกลางทั้งหัว"},"coloring_long":{"name":"ย้อมผมยาวสีเดียว","description":"ย้อมผมยาวทั้งหัว"},"total_blond_short":{"name":"บลอนด์รวมผมสั้น","description":"ฟอกผมสั้นเป็นสีบลอนด์"},"total_blond_medium":{"name":"บลอนด์รวมผมกลาง","description":"ฟอกผมกลางเป็นสีบลอนด์"},"total_blond_long":{"name":"บลอนด์รวมผมยาว","description":"ฟอกผมยาวเป็นสีบลอนด์"},"happiness_short":{"name":"ทรีทเมนต์เพื่อความสุขผมสั้น","description":"ทรีทเมนต์ฟื้นฟูสำหรับผมสั้น"},"happiness_medium":{"name":"ทรีทเมนต์เพื่อความสุขผมกลาง","description":"ทรีทเมนต์ฟื้นฟูสำหรับผมกลาง"},"happiness_long":{"name":"ทรีทเมนต์เพื่อความสุขผมยาว","description":"ทรีทเมนต์ฟื้นฟูสำหรับผมยาว"},"indian_head_massage":{"name":"นวดหัวแบบอินเดีย","description":"นวดแบบดั้งเดิมเพื่อกระตุ้นการเจริญเติบโตของผม"},"hair_express_care":{"name":"เอ็กซ์เพรสแคร์","description":"ทรีทเมนต์ฟื้นฟูแบบด่วน"},"complex_1":{"name":"น่อง + รักแร้ + บิกินี่ลึก","description":"คอมเพล็กซ์ยอดนิยมสำหรับผู้หญิง"},"complex_2":{"name":"รักแร้ + บิกินี่ลึก/น่อง","description":"คอมเพล็กซ์เลเซอร์ขั้นพื้นฐาน"},"complex_3":{"name":"ขาทั้งหมด + รักแร้ + บิกินี่ลึก","description":"คอมเพล็กซ์ขาแบบขยาย"},"complex_4":{"name":"แขนทั้งหมด + ขาทั้งหมด + รักแร้ + บิกินี่ลึก","description":"คอมเพล็กซ์เลเซอร์สูงสุด"},"endosphere_full_body":{"name":"ทั้งตัว","description":"เอนโดสเฟียร์เทอราปีทั้งตัวเพื่อปรับสัดส่วน"},"endosphere_face":{"name":"นวดหน้าด้วยเครื่อง (เอนโดสเฟียร์, RF ลิฟติ้ง)","description":"นวดหน้าด้วยเครื่องเพื่อความเยาว์วัย"},"endosphere_subscription_6":{"name":"แพ็กเกจเอนโดสเฟียร์ (6 ครั้ง)","description":"แพ็กเกจคุ้มค่า 6 ทรีทเมนต์"},"endosphere_subscription_12":{"name":"แพ็กเกจเอนโดสเฟียร์ (12 ครั้ง)","description":"แพ็กเกจสูงสุด 12 ทรีทเมนต์"}}},"bar":{"label":"บาร์","title":"บาร์ของเรา","description":"เรามีทุกอย่างเพื่อดับกระหายของคุณ — ตั้งแต่โปรตีนเชคสำหรับนักกีฬาไปจนถึงค็อกเทลผ่อนคลาย","menu_button":"ดูเมนูเครื่องดื่ม","feature1":{"title":"เครื่องดื่มซิกเนเจอร์","description":"ค็อกเทลเฉพาะตัวที่สร้างสรรค์โดยมิกโซโลจิสต์ของเรา"},"feature2":{"title":"เครื่องดื่มสดชื่น","description":"น้ำผลไม้คั้นสดและส่วนผสมผลไม้"},"feature3":{"title":"เครื่องดื่มฟื้นฟูหลังการออกกำลังกาย","description":"โปรตีนเชคและอาหารเสริมสำหรับนักกีฬา"}},"booking":{"label":"การจอง","title":"จองโต๊ะ","description":"สำรองที่นั่งของคุณเพื่อการันตีที่นั่ง","coming_soon":"การจองออนไลน์จะพร้อมให้บริการในเร็วๆนี้ ในขณะนี้ โปรดโทรหาเราเพื่อจอง","open_hours":"เวลาเปิด","reservation":"การจอง","call_now":"โทรเลย"},"cuisines":{"title":"อาหารของเรา","description":"สัมผัสความอร่อยจากทั่วโลก"},"chef":"คำแนะนำจากเชฟ","slider":{"slide1":{"title":"อาหารชั้นเลิศ","description":"ค้นพบรสชาติที่ไม่เหมือนใครจากห้าสัญชาติอาหารที่แตกต่างกันในร้านอาหารของเรา"},"slide2":{"title":"บรรยากาศที่สบาย","description":"เพลิดเพลินกับอาหารในบรรยากาศที่อบอุ่นพร้อมวิวสวนเขตร้อน"},"slide3":{"title":"วัตถุดิบที่สดใหม่","description":"เราใช้เฉพาะวัตถุดิบที่สดและมีคุณภาพในการปรุงอาหารของเรา"}},"bookTable":"จองโต๊ะ","dish_details":{"ingredients":"ส่วนประกอบ","nutritional_info":"ข้อมูลทางโภชนาการ"}}'),spa:JSON.parse('{"title":"สปา","description":"ฟื้นฟูจิตใจและร่างกายในซาวน่าที่ใหญ่ที่สุดในประเทศไทย","hero":{"badge":"สปาพรีเมียม","title":"ดื่มด่ำไปกับโลกแห่งการผ่อนคลายและความงาม","subtitle":"บริการสปาระดับมืออาชีพในบรรยากาศหรูหราของ KAIF","book_online":"จองออนไลน์","book_whatsapp":"WhatsApp","book_now":"จองทรีทเมนต์","learn_more":"เรียนรู้เพิ่มเติม"},"services":{"title":"บริการของเรา","subtitle":"บริการสปาและความงามครบครันเพื่อความสะดวกสบายและความงามของคุณ","categories":{"massage":"นวด","cosmetology":"เสริมความงาม","laser-hair-removal":"เลเซอร์กำจัดขน","laser-men":"เลเซอร์กำจัดขนสำหรับผู้ชาย","laser-complex":"แพคเกจเลเซอร์","endosphere":"เอนโดสเฟียร์เทอราปี","laser":"เลเซอร์กำจัดขน","laser-complex-3":"แพ็คเกจเลเซอร์ (3 ครั้ง)","laser-complex-5":"แพ็คเกจเลเซอร์ (5 ครั้ง)","hair-care":"ดูแลเส้นผม","manicure":"ทำเล็บมือ","pedicure":"ทำเล็บเท้า","pro-pedicure":"ทำเล็บเท้า PRO มาสเตอร์","eyelashes":"ขนตา","brows":"คิ้วและขนตา","sauna":"ซาวน่า","hammam":"หอบไอน้ำ","treatments":"ทรีทเมนต์สปา"},"popular":"ยอดนิยม","learn_more":"เรียนรู้เพิ่มเติม","show_more":"แสดง {{count}} บริการเพิ่มเติม","show_less":"แสดงน้อยลง","price_from":"เริ่มต้น {{price}} ฿","duration_price":"{{duration}} นาที - {{price}} ฿","items":{"oil_massage":{"name":"นวดน้ำมัน","description":"นวดผ่อนคลายด้วยน้ำมันธรรมชาติเพื่อการฟื้นฟูอย่างลึกซึ้ง"},"foot_massage":{"name":"นวดเท้า","description":"นวดเท้าแบบไทยดั้งเดิมเพื่อบรรเทาความเหนื่อยล้า"},"sport_massage":{"name":"นวดสปอร์ต","description":"นวดแรงส่วนเพื่อการฟื้นฟูหลังออกกำลังกาย"},"anti_cellulite_massage":{"name":"นวดลดเซลลูไลต์","description":"นวดเฉพาะทางสำหรับปรับรูปร่าง"},"stone_massage":{"name":"นวดหินร้อน","description":"นวดด้วยหินร้อนเพื่อการผ่อนคลายอย่างลึก"},"thai_massage":{"name":"นวดไทยดั้งเดิม","description":"นวดไทยแบบคลาสสิกบนเสื่อ"},"head_shoulders":{"name":"นวดหัวและไหล่","description":"นวดผ่อนคลายเพื่อบรรเทาความตึงเครียด"},"oil_scrub":{"name":"นวดน้ำมัน + สครับ","description":"ขั้นตอนที่ซับซ้อนด้วยการขัดผิวและนวด"},"body_scrub":{"name":"สครับทั่วตัว","description":"ทรีทเมนต์ขัดผิวสำหรับทั่วร่างกาย"},"wrap_anti_cell":{"name":"ห่อตัว + นวดลดเซลลูไลต์","description":"กระบวนการที่ซับซ้อนสำหรับปรับรูปร่าง"},"vacuum_peeling":{"name":"ดูดสิวพร้อมผลัดเซลล์","description":"ทำความสะอาดรูขุมขนลึกด้วยการผลัดเซลล์แบบกล"},"vacuum_standard":{"name":"ดูดสิวมาตรฐาน","description":"กระบวนการทำความสะอาดผิวหน้าแบบคลาสสิก"},"hollywood_vacuum":{"name":"ดูดสิวฮอลลีวูด","description":"ทรีทเมนต์พรีเมียมสำหรับสภาพผิวที่สมบูรณ์แบบ"},"whitening_program":{"name":"โปรแกรมกระจ่างใส (จุดด่างดำ)","description":"โปรแกรมพิเศษต่อต้านจุดด่างดำ"},"rejuvenation_program":{"name":"โปรแกรมฟื้นฟูความอ่อนเยาว์","description":"โปรแกรมครบวงจรเพื่อต่อต้านวัย"},"vacuum_oil":{"name":"ทำความสะอาดหน้าแบบสุญญากาศด้วยน้ำมัน","description":"ทำความสะอาดด้วยน้ำมันบำรุง"},"hydration_program":{"name":"โปรแกรมเพิ่มความชุ่มชื้นและเปล่งปลั่ง","description":"การเพิ่มความชุ่มชื้นเข้มข้นเพื่อผิวเปล่งปลั่ง"},"vacuum_men":{"name":"ทำความสะอาดหน้าแบบสุญญากาศสำหรับผู้ชาย","description":"การดูแลเฉพาะสำหรับผิวผู้ชาย"},"express_care":{"name":"การดูแลด่วน","description":"ขั้นตอนรวดเร็วเพื่อผิวสดใส"},"facial_massage_care":{"name":"นวดหน้าพร้อมดูแล","description":"นวดผ่อนคลายพร้อมผลิตภัณฑ์ดูแล"},"facial_massage":{"name":"นวดหน้า","description":"นวดหน้าแบบคลาสสิกเพื่อการผ่อนคลาย"},"vacuum_subscription_5":{"name":"แพ็คเกจทำความสะอาดแบบสุญญากาศ (5 ครั้งมาตรฐาน)","description":"แพ็คเกจคุ้มค่า 5 ครั้งการรักษาแบบมาตรฐาน"},"vacuum_subscription_5_special":{"name":"แพ็คเกจทำความสะอาดแบบสุญญากาศ (5 ครั้งพิเศษ)","description":"แพ็คเกจพรีเมี่ยม 5 ครั้งการรักษาพิเศษ"},"deep_bikini":{"name":"บิกินี่ลึก","description":"กำจัดขนเลเซอร์บริเวณส่วนที่เป็นส่วนตัว"},"lower_back":{"name":"หลังส่วนล่าง/ใบไหล่/ท้อง","description":"กำจัดขนบริเวณส่วนกลางของร่างกาย"},"areola_line":{"name":"เอรีโอลา/เส้นท้อง","description":"กำจัดขนบริเวณที่ละเอียดอ่อน"},"back_completely":{"name":"หลังทั้งหมด","description":"กำจัดขนหลังทั้งหมด"},"buttocks_calves":{"name":"ก้น/น่อง/ต้นขา","description":"กำจัดขนบริเวณขา"},"legs_completely":{"name":"ขาทั้งหมด","description":"กำจัดขนขาทั้งหมด"},"arms_completely":{"name":"แขนทั้งหมด","description":"กำจัดขนแขนทั้งหมด"},"face_lower":{"name":"ใบหน้าส่วนล่าง","description":"กำจัดขนบริเวณคาง"},"armpits":{"name":"รักแร้","description":"กำจัดขนรักแร้"},"men_2_zones":{"name":"เลือกได้ 2 โซน","description":"กำจัดขนได้ 2 โซนตามต้องการ"},"men_3_zones":{"name":"เลือกได้ 3 โซน","description":"กำจัดขนได้ 3 โซนตามต้องการ"},"men_4_zones":{"name":"เลือกได้ 4 โซน","description":"กำจัดขนได้ 4 โซนตามต้องการ"},"men_full_body":{"name":"ทั้งตัว","description":"กำจัดขนทั้งตัวสมบูรณ์"},"men_face":{"name":"ริมฝีปากบน/คาง/แก้ม/คอ","description":"กำจัดขนบริเวณใบหน้า"},"men_full_face":{"name":"ใบหน้าทั้งหมด","description":"กำจัดขนใบหน้าทั้งหมด"},"men_armpits":{"name":"รักแร้","description":"กำจัดขนรักแร้"},"men_chest_abdomen":{"name":"อก/ท้องทั้งหมด","description":"กำจัดขนลำตัว"},"men_subscription":{"name":"แพ็คเกจทั้งตัว (5 ครั้ง)","description":"แพ็คเกจคุ้มค่าการกำจัดขนทั้งตัว"},"complex_1":{"name":"น่อง + รักแร้ + บิกินี่ลึก","description":"แพ็คเกจยอดนิยมสำหรับผู้หญิง"},"complex_2":{"name":"รักแร้ + บิกินี่ลึก/น่อง","description":"แพ็คเกจการกำจัดขนพื้นฐาน"},"complex_3":{"name":"ขาทั้งหมด + รักแร้ + บิกินี่ลึก","description":"แพ็คเกจขาขยาย"},"complex_4":{"name":"แขนทั้งหมด + ขาทั้งหมด + รักแร้ + บิกินี่ลึก","description":"แพ็คเกจการกำจัดขนสูงสุด"},"endosphere_full_body":{"name":"ทั้งตัว","description":"การบำบัดเอนโดสเฟียร์ทั้งตัวเพื่อปรับรูปร่าง"},"endosphere_face":{"name":"นวดหน้าด้วยเครื่องมือ (เอนโดสเฟียร์, RF ลิฟติ้ง)","description":"นวดหน้าด้วยเครื่องมือเพื่อความอ่อนเยาว์"},"endosphere_subscription_6":{"name":"แพ็คเกจเอนโดสเฟียร์ (6 ครั้ง)","description":"แพ็คเกจคุ้มค่า 6 ครั้งการรักษา"},"endosphere_subscription_12":{"name":"แพ็คเกจเอนโดสเฟียร์ (12 ครั้ง)","description":"แพ็คเกจสูงสุด 12 ครั้งการรักษา"},"manicure_no_coating":{"name":"ทำเล็บมือไม่เคลือบ","description":"ทำเล็บมือคลาสสิกพร้อมการดูแลเล็บ"},"manicure_base":{"name":"ทำเล็บมือเคลือบเบส","description":"ทำเล็บมือพร้อมเคลือบป้องกัน"},"manicure_gel":{"name":"ทำเล็บมือเคลือบเจลแลค","description":"ทำเล็บมือพร้อมเคลือบเจลแลคที่ทนทาน"},"gel_strengthening":{"name":"เสริมแรงเล็บด้วยเจลไม่ใส่สี","description":"เสริมแรงเล็บธรรมชาติด้วยเจล"},"gel_strengthening_polish":{"name":"เสริมแรงเล็บด้วยเจลพร้อมสี","description":"เสริมแรงเล็บพร้อมทาสี"},"gel_french":{"name":"แต่งเล็บเฟรนช์ด้วยเจล","description":"เฟรนช์แมนิเคียร์คลาสสิกด้วยเจล"},"nail_extension_short":{"name":"ต่อเล็บคลาสสิกสั้น (ไม่เกิน 2มม.)","description":"ต่อเล็บสั้น"},"nail_extension_long":{"name":"ต่อเล็บ (เกิน 2มม.)","description":"ต่อเล็บยาว"},"nail_repair":{"name":"ซ่อมเล็บ","description":"ซ่อมแซมเล็บที่เสียหาย"},"pedicure_full_no_coating":{"name":"ทำเล็บเท้าเต็มไม่เคลือบ","description":"ดูแลเท้าและเล็บเท้าครบวงจร"},"pedicure_full_coating":{"name":"ทำเล็บเท้าเต็มพร้อมเคลือบ","description":"ทำเล็บเท้าเต็มพร้อมเคลือบเจลแลค"},"pedicure_toes_no_coating":{"name":"เพดิเคียร์นิ้วเท้าไม่ทาสี","description":"ดูแลเฉพาะเล็บนิ้วเท้า"},"pedicure_toes_coating":{"name":"เพดิเคียร์นิ้วเท้าทาเจล","description":"ดูแลเล็บพร้อมทาสี"},"callus_removal":{"name":"กำจัดตาปลา","description":"กำจัดตาปลาแบบมืออาชีพ"},"onycholysis_cleaning":{"name":"ทำความสะอาดออนิโคไลซิส (มาสเตอร์)","description":"รักษาการหลุดของเล็บ"},"womens_haircut":{"name":"ตัดผมหญิง","description":"ตัดผมหญิงอย่างมืออาชีพ"},"hair_wash_brushing":{"name":"สระพร้อมเป่าแรง","description":"สระผมพร้อมจัดแต่งทรงด้วยแปรง"},"bangs_haircut":{"name":"ตัดผมหน้า","description":"ตัดแต่งผมหน้า"},"mens_haircut":{"name":"ตัดผมชาย","description":"ตัดผมชายสไตลิช"},"hair_styling":{"name":"จัดทรงพร้อมผลิตภัณฑ์จัดแต่ง","description":"จัดทรงผมแบบมืออาชีพ"},"evening_styling":{"name":"จัดทรงราตรี","description":"จัดทรงสำหรับงานพิเศษ"},"coloring_roots":{"name":"ย้อมรากผมสีเดียว","description":"ย้อมรากผมที่งอกใหม่"},"coloring_stretching":{"name":"ย้อมราก + ลากสีตลอดความยาว","description":"ย้อมผมแบบซับซ้อนพร้อมลากสี"},"coloring_short":{"name":"ย้อมผมสั้นสีเดียว","description":"ย้อมผมสั้นทั้งหัว"},"coloring_medium":{"name":"ย้อมผมกลางสีเดียว","description":"ย้อมผมความยาวกลางทั้งหัว"},"coloring_long":{"name":"ย้อมผมยาวสีเดียว","description":"ย้อมผมยาวทั้งหัว"},"total_blond_short":{"name":"บลอนด์รวมผมสั้น","description":"ฟอกผมสั้นเป็นสีบลอนด์"},"total_blond_medium":{"name":"บลอนด์รวมผมกลาง","description":"ฟอกผมกลางเป็นสีบลอนด์"},"total_blond_long":{"name":"บลอนด์รวมผมยาว","description":"ฟอกผมยาวเป็นสีบลอนด์"},"happiness_short":{"name":"ทรีทเมนต์เพื่อความสุขผมสั้น","description":"ทรีทเมนต์ฟื้นฟูสำหรับผมสั้น"},"happiness_medium":{"name":"ทรีทเมนต์เพื่อความสุขผมกลาง","description":"ทรีทเมนต์ฟื้นฟูสำหรับผมกลาง"},"happiness_long":{"name":"ความสุขสำหรับผมยาว","description":"ทรีทเมนต์ฟื้นฟูสำหรับผมยาว"},"indian_head_massage":{"name":"นวดหัวแบบอินเดีย","description":"นวดแบบดั้งเดิมของอินเดียเพื่อส่งเสริมการเจริญเติบโตของผม"},"hair_express_care":{"name":"ดูแลด่วน","description":"ขั้นตอนฟื้นฟูอย่างรวดเร็ว"},"shoulders_legs":{"name":"นวดไหล่และขา","description":"นวดเฉพาะทางเพื่อบรรเทาความตึงเครียด"},"face_massage":{"name":"นวดหน้า","description":"นวดหน้าผ่อนคลายเพื่อเพิ่มการไหลเวียนเลือด"},"deep_thai":{"name":"นวดไทยแรงลึก","description":"นวดไทยเข้มข้นพร้อมการกดจุดลึก"},"endosphere_6_procedures":{"name":"เอนโดสเฟียร์เทอราปี (6 ครั้ง)","description":"แพ็คเกจคุ้มค่า 6 ครั้ง"},"endosphere_12_procedures":{"name":"เอนโดสเฟียร์เทอราปี (12 ครั้ง)","description":"แพ็คเกจสูงสุด 12 ครั้ง"},"endosphere_rf_lifting":{"name":"เอนโดสเฟียร์ RF ลิฟติ้ง","description":"นวดหน้าด้วยเครื่องมือเพื่อความอ่อนเยาว์"},"laser_armpits":{"name":"เลเซอร์กำจัดขนรักแร้","description":"กำจัดขนรักแร้"},"laser_bikini":{"name":"เลเซอร์กำจัดขนบิกินี","description":"กำจัดขนบริเวณบิกินี"},"laser_deep_bikini":{"name":"เลเซอร์กำจัดขนบิกินีลึก","description":"กำจัดขนบริเวณส่วนตัว"},"laser_shins":{"name":"เลเซอร์กำจัดขนน่อง","description":"กำจัดขนน่อง"},"laser_legs_full":{"name":"เลเซอร์กำจัดขนขาเต็ม","description":"กำจัดขนขาทั้งหมด"},"laser_small_area":{"name":"เลเซอร์กำจัดขนพื้นที่เล็ก","description":"กำจัดขนพื้นที่เล็ก (เส้นท้อง เอรีโอลา นิ้ว)"},"laser_arms_full":{"name":"เลเซอร์กำจัดขนแขนเต็ม","description":"กำจัดขนแขนทั้งหมด"},"classic_extension":{"name":"ต่อขนตาคลาสสิก","description":"ต่อขนตาทีละเส้นเพื่อความเป็นธรรมชาติ"},"volume_1_5d":{"name":"โวลูม 1.5D","description":"โวลูมเบาเพื่อความเป็นธรรมชาติ"},"volume_2d":{"name":"โวลูม 2D","description":"โวลูมกลางเพื่อดวงตาที่สวยงาม"},"volume_3d":{"name":"โวลูม 3D","description":"โวลูมเต็มเพื่อลุคที่โดดเด่น"},"hollywood_volume":{"name":"โวลูมฮอลลีวูด","description":"โวลูมสูงสุดเพื่อเอฟเฟกต์ที่ดราม่า"},"eyelash_removal":{"name":"ถอดขนตา","description":"การถอดขนตาต่อที่ปลอดภัย"},"brow_correction":{"name":"แต่งคิ้ว","description":"แต่งรูปทรงคิ้วแบบมืออาชีพ"},"brow_tinting":{"name":"ย้อมคิ้ว","description":"ย้อมคิ้วด้วยสีที่ติดทน"},"brow_correction_tinting":{"name":"แต่งคิ้วและย้อมคิ้ว","description":"การดูแลคิ้วแบบครบวงจร"},"brow_lamination_complex":{"name":"ลามิเนชั่น + แต่งคิ้ว + ย้อมคิ้ว","description":"คอมเพล็กซ์เต็มรูปแบบเพื่อคิ้วที่สมบูรณ์แบบ"},"eyelash_lamination_tinting":{"name":"ลามิเนชั่น + ย้อมขนตา","description":"ลามิเนชั่นและย้อมขนตา"},"full_lamination_complex":{"name":"คอมเพล็กซ์ลามิเนชั่นเต็มรูปแบบ","description":"แต่งคิ้ว + ย้อมคิ้ว + ลามิเนชั่น + ย้อมขนตา"},"manicure_base_coating":{"name":"มานิเคียร์พร้อมเบสโค้ท","description":"มานิเคียร์พร้อมเบสโค้ทป้องกัน"},"nail_removal":{"name":"ลบเคลือบ","description":"ลบเคลือบเจลอย่างปลอดภัย"},"nail_design":{"name":"ดีไซน์เล็บ","description":"ดีไซน์เล็บศิลปะ"},"french_manicure":{"name":"เฟรนช์มานิเคียร์","description":"เฟรนช์มานิเคียร์คลาสสิก (ค่าบริการเพิ่มเติม)"},"pedicure_no_coating":{"name":"เพดิเคียร์ไม่มีเคลือบ","description":"เพดิเคียร์คลาสสิกไม่มีเคลือบ"},"pedicure_base_coating":{"name":"เพดิเคียร์พร้อมเบสโค้ท","description":"เพดิเคียร์พร้อมเคลือบป้องกัน"},"pedicure_coating_removal":{"name":"ลบเคลือบ","description":"ลบเคลือบเก่า"},"pro_pedicure_no_coating":{"name":"เพดิเคียร์ PRO มาสเตอร์ไม่มีเคลือบ","description":"เพดิเคียร์มืออาชีพโดยมาสเตอร์ระดับสูง"},"pro_pedicure_base_coating":{"name":"เพดิเคียร์ PRO มาสเตอร์พร้อมเบสโค้ท","description":"เพดิเคียร์มืออาชีพพร้อมเคลือบ"},"pro_pedicure_gel_strengthening":{"name":"เพดิเคียร์ PRO มาสเตอร์พร้อมเสริมแรงด้วยเจล","description":"เพดิเคียร์มืออาชีพพร้อมเสริมแรง"},"pro_full_pedicure_no_coating":{"name":"เพดิเคียร์ PRO มาสเตอร์แบบเต็มไม่มีเคลือบ","description":"การดูแลมืออาชีพแบบครอบคลุม"},"pro_full_pedicure_coating":{"name":"เพดิเคียร์ PRO มาสเตอร์แบบเต็มพร้อมเคลือบ","description":"การดูแลสูงสุดจากมืออาชีพ"},"pro_callus_removal":{"name":"PRO มาสเตอร์กำจัดตาปลา","description":"กำจัดตาปลามืออาชีพ"},"pro_coating_removal":{"name":"PRO มาสเตอร์ลบเคลือบ","description":"ลบเคลือบมืออาชีพ"},"pro_medical_pedicure":{"name":"เพดิเคียร์ PRO มาสเตอร์เพื่อการแพทย์","description":"เพดิเคียร์เพื่อการแพทย์สำหรับเท้าที่มีปัญหา"}}},"features":{"title":"ทำไมต้องเลือกเรา","subtitle":"เรามุ่งมั่นที่จะมอบประสบการณ์การผ่อนคลายและการดูแลที่ยอดเยี่ยมให้กับคุณ","premium_quality":{"title":"คุณภาพพรีเมียม","description":"เราใช้เฉพาะผลิตภัณฑ์และอุปกรณ์ที่ดีที่สุดสำหรับทุกการทรีทเมนต์"},"full_relaxation":{"title":"การผ่อนคลายอย่างสมบูรณ์","description":"เราสร้างบรรยากาศที่สะดวกสบายเพื่อการผ่อนคลายและพักผ่อนของคุณ"},"experienced_masters":{"title":"ผู้เชี่ยวชาญที่มีประสบการณ์","description":"ผู้เชี่ยวชาญที่มีประสบการณ์หลายปีและการพัฒนาทักษะอย่างต่อเนื่อง"},"individual_approach":{"title":"วิธีการเฉพาะบุคคล","description":"เราพิจารณาความต้องการและลักษณะของคุณเพื่อผลลัพธ์สูงสุด"}},"faq":{"badge":"คำถามสปา","title":"คำถามที่พบบ่อย","subtitle":"ทุกสิ่งที่คุณต้องรู้เกี่ยวกับบริการสปาและทรีทเมนต์ของเรา","questions":{"services":{"question":"คุณมีบริการสปาอะไรบ้าง?","answer":"เรามีบริการสปาครบครัน: นวด (ไทย นวดน้ำมัน สปอร์ต) ทรีทเมนต์ความงาม เลเซอร์กำจัดขน มานิเคียร์ เพดิเคียร์ ดูแลเส้นผม รวมทั้งซาวน่าและอบสมุนไพร"},"booking":{"question":"จะจองทรีทเมนต์สปาได้อย่างไร?","answer":"คุณสามารถจองได้ทางโทรศัพท์ +66 62 480 5877 ผ่าน WhatsApp หรือมาที่ศูนย์โดยตรง แนะนำให้จองล่วงหน้าโดยเฉพาะทรีทเมนต์ยอดนิยม"},"policy":{"question":"กฎการยกเลิกการจองคืออะไร?","answer":"กรุณาแจ้งยกเลิกล่วงหน้าอย่างน้อย 24 ชั่วโมงก่อนเวลาที่นัดหมาย การยกเลิกน้อยกว่า 24 ชั่วโมงอาจมีค่าปรับ 50% ของราคาทรีทเมนต์"},"payment":{"question":"รับชำระเงินวิธีไหนบ้าง?","answer":"เรารับเงินสด (THB, USD, EUR) บัตรเครดิตทุกระบบ และการชำระเงินมือถือ ชำระเงินหลังทรีทเมนต์เสร็จสิ้น"},"preparation":{"question":"ต้องเตรียมอะไรมาบ้าง?","answer":"เราเตรียมทุกอย่างให้: ผ้าเช็ดตัว เสื้อคลุมอาบน้ำ รองเท้าแตะ และผลิตภัณฑ์ความงาม คุณเพียงมาและผ่อนคลาย"},"gifts":{"question":"มีใบกำนัลหรือไม่?","answer":"มีครับ! เรามีใบกำนัลมูลค่าต่าง ๆ สำหรับบริการสปาทุกประเภท สามารถซื้อได้ที่ศูนย์หรือสั่งทางโทรศัพท์"}}},"booking":{"badge":"การจอง","title":"จองทรีทเมนต์","description":"จองทรีทเมนต์สปาหรือบริการความงามเพื่อการผ่อนคลายอย่างสมบูรณ์","online":{"title":"จองออนไลน์","description":"จองออนไลน์ที่สะดวกสำหรับทรีทเมนต์ใดๆ เลือกผู้เชี่ยวชาญ เวลา และบริการได้ในไม่กี่คลิก ยืนยันการจองทันที","hours":"จองออนไลน์ 24/7","feature":"เลือกผู้เชี่ยวชาญและเวลา","button":"จองออนไลน์"},"phone":{"title":"โทรจอง","description":"ติดต่อเราทางโทรศัพท์เพื่อจองอย่างรวดเร็ว ที่ปรึกษาของเราจะช่วยเลือกทรีทเมนต์และเวลาที่เหมาะสม","hours":"รับสาย: 9:00 - 21:00","location":"ภูเก็ต ประเทศไทย"},"whatsapp":{"title":"แชท WhatsApp","description":"ส่งข้อความหาเราใน WhatsApp เพื่อจองอย่างสะดวก เราจะตอบกลับอย่างรวดเร็วและช่วยเลือกเวลาที่ดีที่สุด","hours":"สนับสนุนออนไลน์: ตอบกลับเร็ว","feature":"ตอบกลับรวดเร็ว","button":"ส่งข้อความ WhatsApp"}},"testimonials":{"title":"รีวิวจากผู้เข้าพัก","subtitle":"ค้นพบสิ่งที่ลูกค้าที่พอใจของเราพูดถึงเรา","reviews":{"1":{"text":"ประสบการณ์ที่น่าอัศจรรย์! นวดแบบไทยผ่อนคลายเหลือเชื่อ และบรรยากาศก็ยอดเยี่ยมจริงๆ จะกลับมาใหม่อีกแน่นอน","author":"Anna Petrova","title":"ลูกค้าประจำ"},"2":{"text":"ผู้เชี่ยวชาญที่มีความเป็นมืออาชีพ ทรีทเมนต์ที่มีคุณภาพ และใส่ใจในรายละเอียด นี่คือศูนย์สปาที่ดีที่สุดที่ฉันเคยไปในภูเก็ต","author":"Ekaterina Sidorova","title":"แขกจากมอสโก"},"3":{"text":"สถานที่ยอดเยี่ยมสำหรับการพักผ่อนและฟื้นฟู โดยเฉพาะซาวน่าแบบฟินแลนด์และจากุซซี่ แนะนำให้ทุกคน!","author":"Mikhail Volkov","title":"สมาชิก KAIF"}}},"facility":{"title":"สิ่งอำนวยความสะดวกของเรา","largest_sauna":"ซาวน่าที่ใหญ่ที่สุดในประเทศไทย (50ตร.ม.)","hammams":"หอบไอน้ำแบบไทยและตุรกี"}}'),sports:{title:"สิ่งอำนวยความสะดวกด้านกีฬา",description:"สิ่งอำนวยความสะดวกในการออกกำลังกายที่ทันสมัยสำหรับทุกคน",hero:{tag:"ฟิตเนสและกีฬา",title:"เอาชนะตัวเองในด้าน<span>กีฬา</span>กับ KAIF",subtitle:"อุปกรณ์ออกกำลังกายที่ทันสมัย โค้ชมืออาชีพ และบรรยากาศเพื่อบรรลุเป้าหมายกีฬาของคุณ",cta:"สำรวจสิ่งอำนวยความสะดวก",primary_cta:"จองการฝึกซ้อม",secondary_cta:"เรียนรู้เพิ่มเติม",stats:{facilities:"สิ่งอำนวยความสะดวกด้านกีฬาระดับพรีเมียม",trainers:"โค้ชมืออาชีพ",access:"อุปกรณ์ที่ทันสมัย"}},gym:{tag:"บริการของเรา",facility_tag:"ฟิตเนส",section_title:"สิ่งอำนวยความสะดวกด้านกีฬาระดับพรีเมียม",section_subtitle:"ค้นพบโลกแห่งฟิตเนสและกีฬาที่ KAIF Jungle Club บริการที่ทันสมัยของเราได้รับการออกแบบมาเพื่อให้คุณมีโอกาสฝึกซ้อมด้วยความสุขและไปถึงระดับใหม่",title:"ยิม",description1:"ยิมที่ทันสมัยและกว้างขวางพร้อมอุปกรณ์คาร์ดิโอและเครื่องฝึกความแข็งแรงระดับสูง ยิมมีอุปกรณ์ครบครันที่จำเป็นสำหรับการฝึกซ้อมเต็มรูปแบบและรักษาสมรรถภาพทางกาย",description2:"แขกมีสิทธิ์เข้าถึงล็อกเกอร์ส่วนตัว ห้องอาบน้ำ รวมถึงบริการโค้ชส่วนบุคคลโดยการนัดหมาย"},dance:{facility_tag:"การเต้นรำ",title:"สตูดิโอเต้นรำ",description1:"สตูดิโอเต้นรำที่กว้างขวางพร้อมพื้นไม้แพลงค์มืออาชีพ ผนังกระจก และระบบเสียงที่ทันสมัย",description2:"สตูดิโอเสนอชั้นเรียนกลุ่มและส่วนบุคคลในทิศทางต่างๆ: การเต้นรำสมัยใหม่ การเต้นรำบอลรูม โยคะ การยืด พิลาทิส และทิศทางอื่นๆ",schedule_button:"ตารางเวลา"},gallery:{tag:"ช่วงเวลาของเรา",title:"แกลเลอรี",subtitle:"ช่วงเวลาแห่งชีวิตกีฬาที่ KAIF Jungle Club & SPA ที่ถูกจับภาพ เข้าร่วมชุมชนของเราและแบ่งปันความสำเร็จของคุณเอง",yoga:"โยคะยามพระอาทิตย์ตก",subtitle_yoga:"ชั้นเรียนประจำวัน",training:"การฝึกซ้อมกับโค้ชส่วนบุคคล",subtitle_training:"แนวทางส่วนบุคคล",swimming:"สระว่ายน้ำ",subtitle_swimming:"การผ่อนคลายและการฟื้นฟู"},schedule:{tag:"การวางแผน",title:"ตารางเวลา",subtitle:"เลือกวันของสัปดาห์",minutes:"นาที",description:"ตารางเรียนรายสัปดาห์กับผู้ฝึกสอนมืออาชีพ",coming_soon:"ตารางการฝึกซ้อมจะพร้อมใช้งานเร็วๆ นี้ สำหรับข้อมูลปัจจุบัน โปรดติดต่อเรา",contact_button:"ติดต่อเรา"},facilities:{tag:"สิ่งอำนวยความสะดวกของเรา",title:"พื้นที่<span>กีฬา</span>ที่ทันสมัย",subtitle:"KAIF มีพื้นที่กีฬาระดับพรีเมียมหลากหลายแบบ พร้อมอุปกรณ์ล้ำสมัยและโค้ชมืออาชีพที่จะช่วยให้คุณบรรลุเป้าหมายฟิตเนสของคุณ",book_button:"จองการฝึกซ้อม",gym:{title:"ยิม",description:"อุปกรณ์มืออาชีพกว่า 70 ชิ้น",hours:"07:00 - 22:00",capacity:"รองรับได้สูงสุด 40 คน",description1:"ยิมของเราติดตั้งอุปกรณ์ระดับพรีเมียมที่ทันสมัยจากผู้ผลิตชั้นนำ ที่นี่คุณจะพบทุกสิ่งที่จำเป็นสำหรับการออกกำลังกายที่มีประสิทธิภาพ - ตั้งแต่น้ำหนักอิสระไปจนถึงเครื่องคาร์ดิโอรุ่นล่าสุด",description2:"ห้องที่กว้างขวางพร้อมหน้าต่างกระจกใสสร้างบรรยากาศที่สมบูรณ์แบบสำหรับการออกกำลังกาย และโค้ชมืออาชีพพร้อมช่วยสร้างโปรแกรมส่วนบุคคลเสมอ",feature1:"อุปกรณ์พรีเมียม Technogym และ Life Fitness",feature2:"พื้นที่การฝึกซ้อมฟังก์ชันนัล",feature3:"การฝึกซ้อมส่วนบุคคลกับโค้ชที่ได้รับการรับรอง"},fight:{title:"คลับมวย",description:"สิ่งอำนวยความสะดวกมวยและ MMA มืออาชีพ",hours:"07:00 - 22:00",capacity:"รองรับได้สูงสุด 25 คน",description1:"คลับมวย KAIF เป็นพื้นที่ที่ทันสมัยสำหรับการฝึกซ้อมศิลปะการต่อสู้ต่างๆ เวทีมืออาชีพ กระสอบทราย กระสอบใหญ่ และพื้นผิวพิเศษสร้างสภาพที่เหมาะสำหรับทั้งผู้เริ่มต้นและนักสู้ที่มีประสบการณ์",description2:"โค้ชของเราเป็นนักสู้ที่มีประสบการณ์และแชมป์ที่จะช่วยให้คุณเชี่ยวชาญเทคนิคและบรรลุผลลัพธ์ที่สูงในศิลปะการต่อสู้ที่คุณเลือก",feature1:"เวทีมวยมืออาชีพ",feature2:"การฝึกซ้อมมวย มวยไทย และ MMA",feature3:"โค้ชที่มีใบรับรองระดับนานาชาติ"},fight_club:{title:"คลับมวย",description:"สิ่งอำนวยความสะดวกมวยและ MMA มืออาชีพ",hours:"07:00 - 22:00",capacity:"รองรับได้สูงสุด 25 คน",description1:"คลับมวย KAIF เป็นพื้นที่ที่ทันสมัยสำหรับการฝึกซ้อมศิลปะการต่อสู้ต่างๆ เวทีมืออาชีพ กระสอบทราย กระสอบใหญ่ และพื้นผิวพิเศษสร้างสภาพที่เหมาะสำหรับทั้งผู้เริ่มต้นและนักสู้ที่มีประสบการณ์",description2:"โค้ชของเราเป็นนักสู้ที่มีประสบการณ์และแชมป์ที่จะช่วยให้คุณเชี่ยวชาญเทคนิคและบรรลุผลลัพธ์ที่สูงในศิลปะการต่อสู้ที่คุณเลือก",feature1:"เวทีมวยมืออาชีพ",feature2:"การฝึกซ้อมมวย มวยไทย และ MMA",feature3:"โค้ชที่มีใบรับรองระดับนานาชาติ"},dance:{title:"สตูดิโอเต้นรำ",description:"สำหรับคลาสโยคะและเต้นรำ",hours:"07:00 - 22:00",capacity:"รองรับได้สูงสุด 30 คน",description1:"สตูดิโอเต้นรำที่กว้างขวางพร้อมพื้นผิวมืออาชีพ ผนังกระจก และระบบเสียงที่ทันสมัยสร้างสภาพที่เหมาะสำหรับรูปแบบการเต้นรำต่างๆ และชั้นเรียนกลุ่ม",description2:"ที่นี่จัดให้มีชั้นเรียนในรูปแบบการเต้นรำที่ทันสมัยและคลาสสิก รวมถึงการฝึกซ้อมฟิตเนสกลุ่มภายใต้การแนะนำของผู้สอนที่มีประสบการณ์",feature4:"ตารางเวลาที่ยืดหยุ่นสำหรับชั้นเรียนกลุ่มและส่วนบุคคล",schedule_title:"ชั้นเรียนและตารางเวลา",schedule_subtitle:"ค้นหาชั้นเรียนที่เหมาะสม",filter_label:"กรอง:",filter_all:"ทั้งหมด",filter_group:"กลุ่ม",filter_personal:"ส่วนบุคคล",filter_events:"กิจกรรม"}},membership:{title:"ตัวเลือกสมาชิก",description:"เลือกแผนที่เหมาะกับคุณ"},charity:{title:"การออกกำลังกายเพื่อการกุศล",description:"การออกกำลังกายวันเสาร์กับนักกีฬามืออาชีพ รายได้ทั้งหมดมอบให้กับมูลนิธิ Child Watch Phuket"}},banya:{title:"บันยารัสเซีย",description:"ห้องบันยารัสเซียแบบพาโนรามาที่มองเห็นป่าไผ่",hero:{badge:"บันยาที่ดีที่สุดในภูเก็ต",title:"บันยารัสเซียแบบพาโนรามา",title_part1:"บันยา",title_part2:"รัสเซีย",location:"ภูเก็ต",area_unit:"ตร.ม.",feature:"บันยาที่ใหญ่ที่สุดในเกาะ",area:"150 ตารางเมตร",subtitle:"บันยาที่ทำจากไม้สนไซบีเรียและไผ่อัลไต",book_button:"จองตอนนี้",contacts_button:"ติดต่อ",scroll:"เลื่อน",images:{panoramic:"บันยาพาโนรามา 150 ตร.ม.",private:"บันยาส่วนตัว",public:"บันยาสาธารณะ"}},features:{title:"ทำไมต้องเลือกเรา",subtitle:"บันยารัสเซียแบบพาโนรามาเดียวในภูเก็ตที่ทำจากวัสดุธรรมชาติไม้สนไซบีเรียและไผ่อัลไต",materials:{title:"วัสดุธรรมชาติ",description:"การตกแต่ง 100% ธรรมชาติจากไม้ไซบีเรีย",items:{cedar:"ไม้สนไซบีเรีย",linden:"ไผ่อัลไต",birch:"ไม้เบิร์ชคาเรเลีย",coating:"สารเคลือบเป็นมิตรกับสิ่งแวดล้อม",aromatherapy:"อโรมาเธอราพีธรรมชาติ"}},procedures:{title:"ขั้นตอนการอบ",description:"ขั้นตอนบันยาแบบดั้งเดิมและนวัตกรรมใหม่",items:{russian:"พิธีกรรมบันยารัสเซีย",finnish:"ซาวน่าฟินแลนด์",aromatherapy:"อโรมาเธอราพี",massage:"นวดในห้องอบไอน้ำ",herbs:"สมุนไพรผสม"}},service:{title:"ความเป็นมืออาชีพ",description:"ทีมผู้เชี่ยวชาญด้านบันยาและผู้เชี่ยวชาญด้านไอน้ำที่มีประสบการณ์",items:{certified:"ผู้ดูแลที่ได้รับการรับรอง",traditions:"ประเพณีรัสเซีย",individual:"การเข้าถึงเฉพาะบุคคล",consultation:"คำปรึกษาด้านสุขภาพ",quality:"บริการคุณภาพ"}}},services:{title:"การอบไอน้ำส่วนบุคคล",description:"จากบันยาพาโนรามาที่มองเห็นป่าไผ่ไปจนถึงพิธีกรรม VIP ส่วนตัวกับผู้ดูแลมืออาชีพ",rituals:{intro:{title:"การอบไอน้ำเบื้องต้น",subtitle:"ไอน้ำเบา",duration:"5-8 นาที",price:"1,200 บาท",description:"การอุ่นหลังและขาโดยสัมผัสด้วยไม้กวาดเบิร์ช ไอน้ำเบาโดยไม่ต้องพลิกตัว"},classic:{title:"การอบไอน้ำแบบคลาสสิก",subtitle:"ไอน้ำกลาง",duration:"10-15 นาที",price:"1,800 บาท",description:"การอบไอน้ำด้วยไม้กวาดโอ๊คในเซสชันเดียว การอบไอน้ำทั่วร่างกายอย่างละเอียดด้วยไอน้ำหอม"},artesian:{title:"อาร์ทีเซียน",subtitle:"การอบไอน้ำแบบคอนทราสต์",duration:"15-20 นาที",price:"2,500 บาท",description:"การอบไอน้ำแบบคลาสสิกด้วยไม้กวาดโอ๊คพร้อมคอนทราสต์ของน้ำแร่เย็น ความรู้สึกคอนทราสต์แบบฟอง"},gravity:{title:"แรงโน้มถ่วง",subtitle:"การอบไอน้ำแบบไร้น้ำหนัก",duration:"15-20 นาที",price:"2,500 บาท",description:"การอบไอน้ำแบบคลาสสิกตามด้วยการลอยตัวในสระน้ำอุ่น การผ่อนคลายและความไร้น้ำหนักอย่างสมบูรณ์"},salt_fire:{title:"ไฟเริ่มต้น",subtitle:"การอบไอน้ำเกลือ",duration:"15-20 นาที",price:"2,500 บาท",description:"การอบไอน้ำแบบคลาสสิกพร้อมการใช้เกลือทะเลและการอุ่นผ่านผ้า เอฟเฟกต์ถ้ำเกลือ"},warrior_path:{title:"เส้นทางนักรบ",subtitle:"การอบไอน้ำแบบคอนทราสต์",duration:"20-25 นาที",price:"3,500 บาท",description:"การอบไอน้ำในสองเซสชันพร้อมการราดน้ำเย็นระหว่างนั้น การอุ่นหลังและการฟื้นฟูด้วยควาส"},stalwar:{title:"สตัลวาร์",subtitle:"การอบไอน้ำเหล็ก",duration:"25-30 นาที",price:"4,000 บาท",description:"การอบไอน้ำแบบเข้มข้นด้วยไม้กวาดโอ๊คและเบิร์ช ความร้อนสูงสุดและขั้นตอนคอนทราสต์"},honey:{title:"พิธีกรรมน้ำผึ้ง",subtitle:"การอบไอน้ำเพื่อสุขภาพ",duration:"30-35 นาที",price:"4,500 บาท",description:"การอบไอน้ำพร้อมการห่อร่างกายด้วยน้ำผึ้งและอโรมาเธอราพีสมุนไพร การบำรุงผิวลึกและการผ่อนคลาย"},royal:{title:"การรักษาแบบพระราชา",subtitle:"การอบไอน้ำพรีเมียม",duration:"40-45 นาที",price:"6,000 บาท",description:"ประสบการณ์บันยาหรูหราครบครันพร้อมน้ำมันพรีเมียม การรักษาคอนทราสต์ และบริการส่วนบุคคล"},valhalla:{title:"วาลฮัลลา",subtitle:"การอบไอน้ำขั้นสูงสุด",duration:"50-60 นาที",price:"8,000 บาท",description:"ประสบการณ์นักรบขั้นสูงสุดพร้อมหลายเซสชันการอบไอน้ำ การรักษาด้วยน้ำแข็ง และการจบพิธีกรรม"}},coming_soon:{title:"เร็วๆ นี้",description:"เรากำลังเตรียมโปรแกรมบันยาพิเศษพร้อมพิธีกรรมรัสเซียแบบดั้งเดิมและขั้นตอนสุขภาพสมัยใหม่",subtext:"ติดตาม — เราจะอัปเดตส่วนนี้เร็วๆ นี้!"},popular:"ยอดนิยม"},gallery:{badge:"แกลเลอรี",title:"แกลเลอรี",subtitle:"บรรยากาศของบันยารัสเซียแท้จริง",steam_room:"ห้องอบไอน้ำ",steam_room_desc:"ห้องอบไอน้ำรัสเซียแบบคลาสสิกพร้อมไม้กวาดเบิร์ช",rest_area:"พื้นที่พักผ่อน",rest_area_desc:"พื้นที่พักผ่อนสะดวกสบายหลังจากอบไอน้ำ",cold_pool:"สระน้ำเย็น",cold_pool_desc:"สระน้ำเย็นสำหรับขั้นตอนคอนทราสต์",hot_stones:"หินร้อน",hot_stones_desc:"หินร้อนแดงสำหรับสร้างไอน้ำ",tea_ceremony:"พิธีชา",tea_ceremony_desc:"การดื่มชาแบบดั้งเดิมหลังจากบันยา",lounge:"โซนลาวจ์",lounge_desc:"พื้นที่พักผ่อนกว้างขวาง"},faq:{badge:"คำถามและคำตอบ",title:"คำถามที่พบบ่อย",subtitle:"คำตอบสำหรับคำถามยอดนิยมเกี่ยวกับบันยาของเรา",questions:{panoramic:{question:"บันยาพาโนรามามีอะไรพิเศษ?",answer:"บันยาของเรามีคุณสมบัติพิเศษหลายอย่าง: 150 ตารางเมตรพร้อมหน้าต่างพาโนรามามองเห็นป่าไผ่ สร้างจากไม้สนไซบีเรียและไผ่อัลไต - วัสดุธรรมชาติพรีเมียม เป็นบันยารัสเซียแบบพาโนรามาเดียวในภูเก็ตที่คุณสามารถเพลิดเพลินกับพิธีกรรมบันยาแบบดั้งเดิมพร้อมทิวทัศน์ธรรมชาติเขตร้อน"},procedures:{question:"ขั้นตอนใดบ้างที่รวมอยู่ในพิธีกรรมบันยา?",answer:"ขึ้นอยู่กับโปรแกรมที่คุณเลือก คุณจะได้รับ: พิธีกรรมบันยาแบบคลาสสิกด้วยไม้กวาดเบิร์ช อโรมาเธอราพีด้วยน้ำมันหอมระเหย สมุนไพรผสมและชา"},materials:{question:"บันยาสร้างจากวัสดุอะไร?",answer:"บันยาสร้างจากวัสดุธรรมชาติเป็นมิตรกับสิ่งแวดล้อมเท่านั้น: ไม้สนไซบีเรีย ไผ่อัลไต ไม้เบิร์ชคาเรเลีย การตกแต่งทั้งหมดเป็นธรรมชาติ ไม่มีสารเคมีเติม วัสดุดังกล่าวสร้างบรรยากาศพิเศษและให้อโรมาเธอราพีธรรมชาติ"}}},booking:{badge:"การจอง",title:"จองบันยา",description:"ติดต่อเราผ่านช่องทางที่สะดวกสำหรับการจอง",cta:{title:"พร้อมที่จะดื่มด่ำในโลกของบันยารัสเซียหรือยัง?",description:"ติดต่อเราเพื่อข้อมูลรายละเอียดเกี่ยวกับราคา ความพร้อม และคุณสมบัติของโปรแกรมบันยาของเรา",button:"ไปที่ติดต่อ"},contact:{whatsapp:{title:"WhatsApp",value:"จองผ่าน WhatsApp"},location:{title:"ที่ตั้ง",value:"กะทู้, ภูเก็ต"}}}},about:{title:"เกี่ยวกับเรา",description:"KAIF - Jungle Club & Spa คือคอมเพล็กซ์เพื่อสุขภาพชั้นนำของภูเก็ต",overview:{title:"ภาพรวมคอมเพล็กซ์",description:"ข้อมูลโดยละเอียดเกี่ยวกับสิ่งอำนวยความสะดวกทั้งหมดของเรา"},features:{title:"คุณสมบัติหลัก",largest_sauna:"ซาวน่าที่ใหญ่ที่สุดในประเทศไทย (50ตร.ม.)",hammams:"หอบไอน้ำแบบไทยและตุรกี",restaurant:"ร้านอาหาร 5 สัญชาติ",dance_studio:"สตูดิโอเต้นรำและโยคะ (มีให้เช่า)",gym:"ศูนย์ฟิตเนสพร้อมอุปกรณ์กว่า 70 ชิ้น",pool:"สระว่ายน้ำขนาด 25 เมตร",massage:"เทคนิคการนวดหลากหลาย",fight_club:"คลับมวย",kids_room:"ห้องเด็ก (อายุ 3-14 ปี)"},gallery:{title:"แกลเลอรี",description:"ภาพคุณภาพสูงของสิ่งอำนวยความสะดวกทั้งหมด"},mission:{title:"พันธกิจของเรา",description:"เพื่อมอบประสบการณ์ด้านสุขภาพที่ยอดเยี่ยมในภูเก็ต"}},promotions:{title:"โปรโมชั่น",description:"ข้อเสนอและดีลพิเศษ",day_pass:{title:"วันในคอมเพล็กซ์",price:"390 บาท",description:"เข้าถึงยิม สระว่ายน้ำ อ่างน้ำแข็ง และซาวน่า",terms:"เงื่อนไขและข้อกำหนดนำมาใช้"},charity:{title:"การออกกำลังกายเพื่อการกุศล",price:"200 บาท",description:"การฝึกวันเสาร์กับนักกีฬามืออาชีพ รายได้ทั้งหมดมอบให้กับมูลนิธิ Child Watch Phuket"},seasonal:{title:"ข้อเสนอตามฤดูกาล",description:"ข้อเสนอระยะเวลาจำกัด"},loyalty:{title:"โปรแกรมลูกค้าประจำ",description:"รางวัลสำหรับลูกค้าประจำของเรา"}},contacts:{title:"ติดต่อเรา",hero:{title:"ติดต่อเรา",subtitle:"เลือกวิธีการติดต่อที่สะดวกสำหรับคุณ"},cta:{primary:"ติดต่อเรา",secondary:"ที่อยู่ของเรา"},form:{title:"ติดต่อ",subtitle:"กรอกแบบฟอร์มด้านล่าง และเราจะติดต่อกลับในเร็วๆ นี้",success:"ส่งข้อความของคุณเรียบร้อยแล้ว!",error:"เกิดข้อผิดพลาด โปรดลองอีกครั้ง",sending:"กำลังส่ง...",submit:"ส่งข้อความ"},info:{title:"ติดต่อเรา",subtitle:"เลือกวิธีที่สะดวกในการติดต่อเรา",address:{title:"ที่อยู่",text:"73, หมู่บ้านชาเลกิรี, ถนนพระภูเก็ตแก้ว 6, กะทู้",country:"ภูเก็ต, ประเทศไทย",directions:"ดูเส้นทาง"},phone:{call_now:"โทรเลย"},hours:{title:"เวลาทำการ",daily:"ทุกวัน: 7:00 น. - 22:00 น.",booking:"จองได้ตลอด 24 ชั่วโมง"},email:{title:"อีเมล",response:"เราจะตอบกลับภายใน 24 ชั่วโมง"},social:{title:"โซเชียลมีเดีย",subtitle:"ติดตามข่าวสารและโปรโมชั่นล่าสุดของเรา"},whatsapp:{text:"ส่งข้อความทาง WhatsApp",greeting:"สวัสดีค่ะ/ครับ! ต้องการจองบริการที่ KAIF"},buttons:{get_directions:"เส้นทาง",contact:"ติดต่อ",book:"จองเลย"}},social:{title:"ติดตามเราในโซเชียลมีเดีย",subtitle:"อัปเดตข่าวสารและโปรโมชั่นล่าสุดของ KAIF"},phone:{title:"โทรศัพท์",whatsapp:"WhatsApp ใช้ได้"},email:{title:"อีเมล",response:"ตอบกลับภายใน 24 ชั่วโมง"},address:{title:"ที่อยู่"},hours:{title:"เวลาทำการ",daily:"ทุกวัน: 7:00 - 22:00",booking:"จองได้ 24/7"},whatsapp:{message_contact:"สวัสดีค่ะ/ครับ! ต้องการติดต่อ KAIF",message_book:"สวัสดีค่ะ/ครับ! ต้องการจองบริการที่ KAIF",message_general:"สวัสดีค่ะ/ครับ! มีคำถามเกี่ยวกับ KAIF"},map:{title:"วิธีการค้นหาเรา",subtitle:"ที่ตั้งสะดวกใจกลางเมืองกะทู ภูเก็ต"},feedback:{title:"ข้อเสนอแนะ",description:"เราให้ความสำคัญกับความคิดเห็นของคุณ"}},booking:{submit:"ส่ง",privacyInfo:"การส่งแบบฟอร์มนี้ คุณยอมรับ",privacyLink:"นโยบายความเป็นส่วนตัวของเรา"},gallery:{overline:"แกลเลอรี",title:"ประสบการณ์ KAIF",subtitle:"ดื่มด่ำกับบรรยากาศ KAIF ผ่านแกลเลอรีภาพถ่ายของเรา ทำความรู้จักกับบริการและสิ่งอำนวยความสะดวกของคอมเพล็กซ์",filters:{all:"ทั้งหมด",spa:"สปา",fitness:"ฟิตเนส",pool:"สระว่ายน้ำ",relax:"การผ่อนคลาย"},slides:{thai_massage:{title:"นวดแผนไทย",description:"นวดแผนไทยแบบดั้งเดิมโดยผู้เชี่ยวชาญที่มีประสบการณ์ ฟื้นฟูพลังงานและความสมดุลของร่างกาย"},aromatherapy:{title:"อโรมาเธอราพี",description:"ทรีทเมนต์ผ่อนคลายด้วยน้ำมันหอมระเหยธรรมชาติระดับพรีเมียม"},gym:{title:"ฟิตเนส",description:"อุปกรณ์ทันสมัยกว่า 70 ชิ้น อุปกรณ์มืออาชีพสำหรับการออกกำลังกายทุกรูปแบบ"},facial:{title:"เสริมความงาม",description:"ทรีทเมนต์ใบหน้าระดับมืออาชีพด้วยเครื่องสำอางระดับพรีเมียม"}}},footer:{navigation:"การนำทาง",brand:{description:"คอมเพล็กซ์เพื่อสุขภาพระดับพรีเมียมในภูเก็ต เราสร้างประสบการณ์เพื่อสุขภาพที่ไม่เหมือนใครเพื่อฟื้นฟูความสมดุลของร่างกายและจิตวิญญาณ"},services:{title:"บริการ",sauna:"ซาวน่าและหอบไอน้ำ",fitness:"ศูนย์ฟิตเนส",fight_club:"คลับมวย"},schedule:{daily:"ทุกวัน",hours:"7:00 - 22:00"},copyright:"สงวนลิขสิทธิ์",legal:{privacy:"นโยบายความเป็นส่วนตัว",terms:"เงื่อนไขการใช้บริการ"}},promo:{title:"โอกาสสุดท้ายสำหรับราคาปัจจุบัน",subtitle:"รับบัตรยิมไม่จำกัดก่อนที่ราคาจะปรับขึ้นในวันที่ 1 สิงหาคม"},terms:{title:"เงื่อนไขการใช้บริการ",intro:"เงื่อนไขการใช้บริการนี้ควบคุมการให้บริการของคอมเพล็กซ์เพื่อสุขภาพ KAIF บนเกาะภูเก็ต ประเทศไทย",general:{title:"1. บทบัญญัติทั่วไป",content:"การใช้บริการของเรา คุณตกลงยอมรับเงื่อนไขเหล่านี้ KAIF ให้บริการสปา ฟิตเนส ร้านอาหาร และซาวน่าแบบรัสเซีย"},booking:{title:"2. การจองและการยกเลิก",content:"การจองบริการทำได้ทางโทรศัพท์หรือผ่าน WhatsApp การยกเลิกสามารถทำได้ไม่น้อยกว่า 24 ชั่วโมงก่อนเวลาที่กำหนด"},rules:{title:"3. กฎการเยี่ยมชม",content:"ผู้เยี่ยมชมต้องปฏิบัติตามกฎสุขอนามัยและความปลอดภัย ฝ่ายบริหารขอสงวนสิทธิ์ในการปฏิเสธการให้บริการหากมีการละเมิดกฎที่กำหนด"},liability:{title:"4. ความรับผิดชอบ",content:"KAIF ไม่รับผิดชอบต่อสิ่งของส่วนตัวของผู้เยี่ยมชม ขั้นตอนทั้งหมดดำเนินการโดยผู้เชี่ยวชาญที่มีคุณสมบัติตามมาตรฐานความปลอดภัยระดับนานาชาติ"},contacts:{title:"5. ติดต่อ",content:"สำหรับคำถามทั้งหมด ติดต่อเรา:",email:"อีเมล: info@kaif-phuket.com",phone:"โทรศัพท์: +66 62 480 5877",address:"ที่อยู่: Phuket, Thailand"}},privacy:{title:"นโยบายความเป็นส่วนตัว",intro:"นโยบายความเป็นส่วนตัวนี้กำหนดขั้นตอนการประมวลผลและปกป้องข้อมูลส่วนบุคคลของผู้ใช้คอมเพล็กซ์เพื่อสุขภาพ KAIF",collection:{title:"1. การเก็บรวบรวมข้อมูล",content:"เราเก็บรวบรวมเฉพาะข้อมูลที่จำเป็นสำหรับการให้บริการที่มีคุณภาพ: ชื่อ ข้อมูลติดต่อ ความต้องการด้านบริการ"},usage:{title:"2. การใช้ข้อมูล",content:"ข้อมูลของคุณใช้เฉพาะสำหรับการจองขั้นตอน การแจ้งข้อมูลเกี่ยวกับบริการใหม่ และปรับปรุงคุณภาพการบริการ"},protection:{title:"3. การปกป้องข้อมูล",content:"เราใช้วิธีการปกป้องข้อมูลที่ทันสมัยและไม่ส่งต่อข้อมูลส่วนบุคคลให้บุคคลที่สามโดยไม่ได้รับความยินยอมจากคุณ"},contacts:{title:"4. ติดต่อ",content:"สำหรับคำถามเกี่ยวกับการประมวลผลข้อมูลส่วนบุคคล ติดต่อ:",email:"อีเมล: info@kaif-phuket.com",phone:"โทรศัพท์: +66 62 480 5877"}}};F.use(C).use(n).init({resources:{en:{translation:$},ru:{translation:V},th:{translation:G}},lng:"en",fallbackLng:"en",debug:!1,detection:{order:["localStorage","navigator","htmlTag"],lookupLocalStorage:"i18nextLng",caches:["localStorage"]},interpolation:{escapeValue:!1}}),document.documentElement.lang="en";const J={colors:{primary:"#90B3A7",secondary:"#D4A574",tertiary:"#B8C4A8",energy:"#E8734A",power:"#2D5B69",fresh:"#4A90B8",background:"#FFFFFF",surface:"#FFFFFF",surfaceSecondary:"#FDFCFA",text:{primary:"#2C3E2D",secondary:"#5A6B5D",light:"#8B9A8E",white:"#FFFFFF",dark:"#1A2B1D"},zones:{spa:"#90B3A7",restaurant:"#D4A574",fitness:"#E8734A",combat:"#2D5B69",pool:"#4A90B8",banya:"#8B4513",sauna:"#8B7355"},success:"#5CB3CC",warning:"#FFD166",error:"#EF476F",info:"#4A90B8",gradients:{primary:"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)",secondary:"linear-gradient(135deg, #D4A574 0%, #E1B885 100%)",energy:"linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)",power:"linear-gradient(135deg, #2D5B69 0%, #3D7084 100%)",fresh:"linear-gradient(135deg, #4A90B8 0%, #5FA3CC 100%)",spa:"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)",restaurant:"linear-gradient(135deg, #D4A574 0%, #E1B885 100%)",fitness:"linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)",combat:"linear-gradient(135deg, #2D5B69 0%, #3D7084 100%)",pool:"linear-gradient(135deg, #4A90B8 0%, #5FA3CC 100%)",banya:"linear-gradient(135deg, #8B4513 0%, #CD853F 100%)",sauna:"linear-gradient(135deg, #8B7355 0%, #A18A6D 100%)"}},fonts:{primary:'"Inter", -apple-system, BlinkMacSystemFont, sans-serif',heading:'"Playfair Display", Georgia, serif',accent:'"Montserrat", Arial, sans-serif',mono:'"JetBrains Mono", monospace'},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",md:"1.125rem",lg:"1.25rem",xl:"1.5rem","2xl":"1.875rem","3xl":"2.25rem","4xl":"3rem","5xl":"3.75rem","6xl":"4.5rem"},fontWeights:{thin:100,extralight:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},space:{0:"0",.5:"0.125rem",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem",32:"8rem",40:"10rem",48:"12rem",56:"14rem",64:"16rem"},lineHeights:{none:1,tight:1.25,snug:1.375,normal:1.5,relaxed:1.625,loose:2},sizes:{container:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1400px"}},breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1400px"},radii:{none:"0",sm:"0.125rem",default:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},borders:{none:"none",thin:"1px solid",default:"2px solid",thick:"4px solid"},shadows:{none:"none",xs:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",sm:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",outline:"0 0 0 3px rgba(144, 179, 167, 0.5)",softGlow:"0 5px 15px rgba(144, 179, 167, 0.3)"},zIndex:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},transitions:{default:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",fast:"all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",slow:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",bounce:"all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",elegant:"all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"},animations:{fadeIn:"fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)",fadeOut:"fadeOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)",slideUp:"slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)",slideDown:"slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"}},U=()=>{const[t,n]=e.useState(!1),[s,l]=e.useState(!1),[c,p]=e.useState(null),[d,m]=e.useState(null),{i18n:u,t:h}=o(),g=a(),b=r(),f=e.useCallback(e=>"/"===e&&"/"===g.pathname||!("/"===e||!g.pathname.startsWith(e)),[g.pathname]),_=e.useCallback(e=>{u.changeLanguage(e),localStorage.setItem("i18nextLng",e),document.documentElement.lang=e,l(!1)},[u]),y=e.useCallback(e=>{d&&clearTimeout(d);const i=setTimeout(()=>{b(e),setTimeout(()=>{window.scrollTo({top:0,left:0,behavior:"instant"}),document.documentElement.scrollTop=0,document.body.scrollTop=0},0),setTimeout(()=>{window.scrollY>0&&window.scrollTo(0,0)},50)},100);m(i)},[b,d]),x=e.useMemo(()=>[{code:"ru",name:"Русский"},{code:"en",name:"English"},{code:"th",name:"ไทย"}],[]),w=e.useMemo(()=>x.find(e=>e.code===u.language)||x[0],[x,u.language]);e.useEffect(()=>{const e=e=>{e.target.closest(".language-selector")||l(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[]),e.useEffect(()=>()=>{d&&clearTimeout(d)},[d]);const v=e.useMemo(()=>[{path:"/",label:h("navigation.home")},{path:"/banya",label:h("navigation.banya")},{path:"/restaurant",label:h("navigation.restaurant")},{path:"/spa",label:h("navigation.spa")},{path:"/sports",label:h("navigation.sports")},{path:"/contacts",label:h("navigation.contacts")}],[h,u.language]),k=e.useCallback(e=>({color:f(e)?"#90B3A7":c===e?"#2C3E2D":"#5A6761",textDecoration:"none",fontSize:"14px",fontWeight:f(e)?"600":"500",fontFamily:'"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',textTransform:"uppercase",letterSpacing:"0.8px",position:"relative",transition:"all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",whiteSpace:"nowrap",height:"65px",display:"flex",alignItems:"center",margin:0,padding:"0 1rem",cursor:"pointer",transform:c===e?"translateY(-1px)":"translateY(0)",textShadow:f(e)?"0 0 8px rgba(144, 179, 167, 0.3)":"none"}),[f,c]);return e.useEffect(()=>{if(t){const e=window.scrollY;document.body.classList.add("mobile-menu-open"),document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${e}px`,document.body.style.width="100%",document.body.setAttribute("data-scroll-lock-position",e.toString())}else{const e=document.body.getAttribute("data-scroll-lock-position");document.body.classList.remove("mobile-menu-open"),document.body.style.overflow="",document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.removeAttribute("data-scroll-lock-position"),e&&window.scrollTo(0,parseInt(e))}return()=>{document.body.classList.remove("mobile-menu-open"),document.body.style.overflow="",document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.removeAttribute("data-scroll-lock-position")}},[t]),e.useEffect(()=>{const e=()=>{window.innerWidth>768&&t&&n(!1)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),e.useEffect(()=>{const e=()=>{const e=document.querySelector(".kaif-header");if(e){const i=e.getBoundingClientRect(),t=window.getComputedStyle(e);0===i.top&&0!==i.height&&"fixed"===t.position||(e.style.cssText="\n            position: fixed !important;\n            top: 0px !important;\n            left: 0px !important;\n            right: 0px !important;\n            width: 100% !important;\n            height: 65px !important;\n            z-index: 9999 !important;\n            background-color: #ffffff !important;\n            display: flex !important;\n            visibility: visible !important;\n            opacity: 1 !important;\n            transform: none !important;\n            transition: none !important;\n            animation: none !important;\n            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;\n            align-items: center !important;\n            justify-content: center !important;\n          ")}};e();const i=setInterval(e,500),t=()=>{e()};return window.addEventListener("scroll",t,{passive:!0}),()=>{clearInterval(i),window.removeEventListener("scroll",t)}},[]),i.jsxs(i.Fragment,{children:[i.jsx("header",{className:"kaif-header fixed top-0 left-0 right-0 w-full h-16 z-50 bg-white",style:{position:"fixed",top:"0",left:"0",right:"0",width:"100%",height:"65px",zIndex:"9999",backgroundColor:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)",pointerEvents:"auto",visibility:"visible",opacity:"1",transform:"none",transition:"none",animation:"none"},children:i.jsxs("div",{style:{width:"100%",maxWidth:"1400px",height:"65px",display:"flex",alignItems:"center",padding:"0 2rem",margin:0,boxSizing:"border-box"},children:[i.jsx("div",{style:{flex:"0 0 200px",display:"flex",alignItems:"center",justifyContent:"flex-start",height:"65px",margin:0,padding:0},children:i.jsx("div",{onClick:()=>y("/"),style:{display:"flex",alignItems:"center",textDecoration:"none",height:"65px",margin:0,padding:0,cursor:"pointer"},children:i.jsxs("picture",{children:[i.jsx("source",{srcSet:"/images/logos/logo-header-2x.webp 2x, /images/logos/logo-header-1x.webp 1x",type:"image/webp",sizes:"38px"}),i.jsx("source",{srcSet:"/images/logos/logo-header-2x.png 2x, /images/logos/logo-header-1x.png 1x",type:"image/png",sizes:"38px"}),i.jsx("img",{src:"/images/logos/logo-header-1x.png",alt:"KAIF",style:{height:"38px",width:"auto",display:"block",margin:0,padding:0},loading:"eager"})]})})}),i.jsx("div",{style:{flex:"1",display:"flex",alignItems:"center",justifyContent:"center",height:"65px",margin:0,padding:"0 1rem"},children:i.jsx("nav",{style:{display:"flex",alignItems:"center",gap:"2rem",height:"65px",margin:0,padding:0,position:"relative"},className:"desktop-nav",children:v.map(e=>i.jsxs("div",{style:k(e.path),onMouseEnter:()=>p(e.path),onMouseLeave:()=>p(null),onClick:()=>y(e.path),children:[e.label,f(e.path)&&i.jsx(j.div,{initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1},transition:{duration:.5,ease:[.25,.46,.45,.94],type:"tween"},style:{position:"absolute",bottom:"-8px",left:"50%",transform:"translateX(-50%)",width:"100%",height:"4px",background:"linear-gradient(90deg, transparent 0%, #90B3A7 20%, #90B3A7 80%, transparent 100%)",borderRadius:"2px",transformOrigin:"center",boxShadow:"0 0 20px rgba(144, 179, 167, 1), 0 4px 12px rgba(144, 179, 167, 0.6)"}}),!f(e.path)&&c===e.path&&i.jsx(j.div,{initial:{scaleX:0,opacity:0,y:4},animate:{scaleX:1,opacity:1,y:0},exit:{scaleX:0,opacity:0,y:4},transition:{duration:.3,ease:[.25,.46,.45,.94],type:"tween"},style:{position:"absolute",bottom:"-8px",left:"50%",transform:"translateX(-50%)",width:"80%",height:"3px",background:"linear-gradient(90deg, transparent 0%, #2C3E2D 20%, #2C3E2D 80%, transparent 100%)",borderRadius:"2px",transformOrigin:"center",boxShadow:"0 0 12px rgba(44, 62, 45, 0.6)"}})]},e.path))})}),i.jsxs("div",{style:{flex:"0 0 200px",display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"1rem",height:"65px",margin:0,padding:"0 1rem 0 0"},children:[i.jsx(j.button,{className:"mobile-burger",onClick:e=>{e&&(e.preventDefault(),e.stopPropagation()),n(!t)},whileHover:{scale:1.05},whileTap:{scale:.95},style:{display:"none",alignItems:"center",justifyContent:"center",width:"2.25rem",height:"2.25rem",padding:0,background:"rgba(144, 179, 167, 0.1)",border:"1px solid rgba(144, 179, 167, 0.2)",borderRadius:"8px",color:"#2C3E2D",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",marginRight:"0"},children:i.jsxs(j.svg,{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",animate:{rotate:t?180:0},transition:{duration:.3,ease:[.23,1,.32,1]},children:[i.jsx(j.line,{x1:"3",y1:"6",x2:"17",y2:"6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",animate:{rotate:t?45:0,y:t?4:0},transition:{duration:.3,ease:[.23,1,.32,1]},style:{transformOrigin:"10px 6px"}}),i.jsx(j.line,{x1:"3",y1:"10",x2:"17",y2:"10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",animate:{opacity:t?0:1,scaleX:t?.3:1},transition:{duration:.2,ease:[.23,1,.32,1]},style:{transformOrigin:"10px 10px"}}),i.jsx(j.line,{x1:"3",y1:"14",x2:"17",y2:"14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",animate:{rotate:t?-45:0,y:t?-4:0},transition:{duration:.3,ease:[.23,1,.32,1]},style:{transformOrigin:"10px 14px"}})]})}),i.jsxs("div",{className:"language-selector",style:{position:"relative",display:"flex",alignItems:"center",height:"65px",margin:0,padding:0,width:"64px",flexShrink:0},children:[i.jsxs(j.button,{onClick:()=>l(!s),whileHover:{scale:1.05,transition:{duration:.2}},whileTap:{scale:.95},style:{background:s?"rgba(144, 179, 167, 0.08)":"rgba(255, 255, 255, 0.9)",border:"1px solid "+(s?"#90B3A7":"rgba(144, 179, 167, 0.2)"),borderRadius:"8px",color:s?"#90B3A7":"#374151",fontSize:"13px",fontWeight:"600",fontFamily:'"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',cursor:"pointer",padding:"8px 12px",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",display:"flex",alignItems:"center",justifyContent:"center",height:"36px",minWidth:"56px",margin:0,position:"relative",boxShadow:s?"0 4px 12px rgba(144, 179, 167, 0.25)":"0 2px 4px rgba(0, 0, 0, 0.05)",backdropFilter:"blur(8px)"},onMouseEnter:e=>{s||(e.target.style.borderColor="#90B3A7",e.target.style.color="#90B3A7",e.target.style.background="rgba(144, 179, 167, 0.06)",e.target.style.boxShadow="0 4px 8px rgba(144, 179, 167, 0.15)")},onMouseLeave:e=>{s||(e.target.style.borderColor="rgba(144, 179, 167, 0.2)",e.target.style.color="#374151",e.target.style.background="rgba(255, 255, 255, 0.9)",e.target.style.boxShadow="0 2px 4px rgba(0, 0, 0, 0.05)")},children:[w.code.toUpperCase(),i.jsx(j.svg,{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",style:{marginLeft:"4px",flexShrink:0,opacity:.7},animate:{rotate:s?180:0},transition:{duration:.3,ease:"easeInOut"},children:i.jsx("path",{d:"M6 9l6 6 6-6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),i.jsx(S,{children:s&&i.jsx(j.div,{initial:{opacity:0,y:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.95},transition:{duration:.2,ease:[.4,0,.2,1]},style:{position:"absolute",top:"calc(100% + 8px)",right:0,background:"rgba(255, 255, 255, 0.95)",border:"1px solid rgba(144, 179, 167, 0.15)",borderRadius:"12px",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(144, 179, 167, 0.08)",padding:"8px",minWidth:"140px",zIndex:999998,transformOrigin:"top right",backdropFilter:"blur(12px)"},children:x.map((e,t)=>i.jsxs(j.button,{initial:{opacity:0,x:8},animate:{opacity:1,x:0,transition:{delay:.05*t}},onClick:()=>_(e.code),style:{width:"100%",padding:"10px 14px",textAlign:"left",background:u.language===e.code?"rgba(144, 179, 167, 0.1)":"transparent",border:"none",color:u.language===e.code?"#90B3A7":"#374151",fontWeight:u.language===e.code?"600":"500",fontSize:"14px",fontFamily:'"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",borderRadius:"8px",display:"flex",alignItems:"center",gap:"10px"},whileHover:{backgroundColor:u.language===e.code?"rgba(144, 179, 167, 0.15)":"rgba(144, 179, 167, 0.08)",x:2},whileTap:{scale:.97},children:[i.jsx("span",{style:{fontSize:"16px"},children:"ru"===e.code?"🇷🇺":"en"===e.code?"🇺🇸":"🇹🇭"}),i.jsx("span",{style:{flex:1},children:e.name}),u.language===e.code&&i.jsx(j.div,{initial:{scale:0},animate:{scale:1},style:{width:"6px",height:"6px",borderRadius:"50%",background:"#90B3A7"}})]},e.code))})})]})]})]})}),i.jsx(S,{children:t&&i.jsxs(i.Fragment,{children:[i.jsx(j.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{position:"fixed",top:"65px",left:0,right:0,bottom:0,background:"rgba(44, 62, 45, 0.5)",backdropFilter:"blur(4px)",zIndex:999996},onClick:e=>{e.preventDefault(),e.stopPropagation(),n(!1)}}),i.jsx(j.div,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:200},style:{position:"fixed",top:"65px",right:0,width:"100%",maxWidth:"20rem",height:"calc(100vh - 65px)",background:"#ffffff",backdropFilter:"blur(20px)",borderLeft:"1px solid rgba(144, 179, 167, 0.1)",zIndex:999997,overflowY:"auto",boxShadow:"-4px 0 20px rgba(0, 0, 0, 0.1)"},children:i.jsxs("div",{style:{padding:"2rem 1.5rem",minHeight:"calc(100vh - 65px)",display:"flex",flexDirection:"column"},children:[i.jsx("ul",{style:{listStyle:"none",margin:0,padding:0,flex:1,paddingTop:"1rem"},children:v.map((e,t)=>i.jsx("li",{style:{marginBottom:"0.5rem"},children:i.jsx(j.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.1*t}},children:i.jsx("div",{onClick:i=>{i.preventDefault(),i.stopPropagation(),e.path!==g.pathname&&y(e.path),n(!1)},style:{display:"flex",alignItems:"center",padding:"1rem",fontFamily:'"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',fontSize:"1.125rem",textDecoration:"none",borderRadius:"12px",transition:"all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",cursor:"pointer",background:f(e.path)?"rgba(144, 179, 167, 0.1)":"transparent",transform:f(e.path)?"translateX(0.25rem)":"translateX(0)",fontWeight:f(e.path)?"600":"500",color:f(e.path)?"#90B3A7":"#2C3E2D"},children:e.label})})},e.path))}),i.jsxs("div",{style:{marginTop:"auto",paddingTop:"2rem",borderTop:"1px solid rgba(144, 179, 167, 0.1)"},children:[i.jsx("h3",{style:{fontFamily:'"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',fontSize:"0.875rem",fontWeight:"600",color:"#8B9A8E",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"1rem"},children:h("common.select_language")}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.5rem"},children:x.map((e,t)=>i.jsx(j.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:i=>{i.preventDefault(),i.stopPropagation(),_(e.code),n(!1)},style:{padding:"0.75rem",background:u.language===e.code?"rgba(144, 179, 167, 0.15)":"rgba(144, 179, 167, 0.05)",border:"1px solid "+(u.language===e.code?"rgba(144, 179, 167, 0.3)":"rgba(144, 179, 167, 0.1)"),borderRadius:"8px",color:u.language===e.code?"#90B3A7":"#2C3E2D",fontFamily:'"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',fontSize:"0.875rem",fontWeight:u.language===e.code?"600":"500",cursor:"pointer",transition:"all 0.3s ease"},children:e.code.toUpperCase()},e.code))})]})]})})]})})]})};if("undefined"!=typeof document&&!document.getElementById("header-responsive-styles")){const e=document.createElement("style");e.id="header-responsive-styles",e.textContent="\n  .kaif-header .desktop-nav {\n    display: flex;\n  }\n  \n  .kaif-header .mobile-burger {\n    display: none;\n  }\n  \n  .kaif-header .language-selector {\n    display: flex;\n  }\n  \n  @media (max-width: 1024px) {\n    .kaif-header .desktop-nav {\n      gap: 1.5rem !important;\n    }\n    \n    .kaif-header .desktop-nav > div {\n      padding: 0 0.75rem !important;\n    }\n  }\n  \n  @media (max-width: 768px) {\n    .kaif-header .desktop-nav {\n      display: none !important;\n    }\n    \n    .kaif-header .mobile-burger {\n      display: flex !important;\n    }\n    \n    .kaif-header .language-selector {\n      display: none !important;\n    }\n    \n    .kaif-header > div {\n      padding: 0 1rem !important;\n    }\n    \n    .kaif-header > div > div:first-child {\n      flex: 0 0 auto !important;\n    }\n    \n    .kaif-header > div > div:last-child {\n      flex: 0 0 auto !important;\n      gap: 0 !important;\n      width: auto !important;\n    }\n  }\n  \n  @media (max-width: 480px) {\n    .kaif-header > div {\n      padding: 0 0.5rem !important;\n    }\n    \n    .kaif-header img {\n      height: 32px !important;\n    }\n  }\n  \n  @media (max-width: 320px) {\n    .kaif-header > div {\n      padding: 0 0.25rem !important;\n    }\n  }\n",document.head.appendChild(e)}const Y=k.footer`
  position: relative;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  padding: 3rem 2rem 0;
  color: white;
  z-index: 3;
  overflow: hidden;
  margin: 0;
  min-height: auto;
  border-bottom: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 1rem 0;
  }
`,Q=k.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem 0;
  
  @media (min-width: 1024px) {
    padding: 3rem 2rem 0;
  }
`,X=k.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1.8fr 1fr 1fr 1.2fr;
    gap: 2.5rem;
  }
`,Z=k(j.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  @media (max-width: 1023px) {
    text-align: center;
    align-items: center;
    grid-column: 1 / -1;
    margin-bottom: 0.5rem;
  }
`,ee=k(j.div)`
  height: auto;
  width: 360px;
  margin-bottom: 1.5rem;
  display: block;
  
  /* Десктопная версия и iPad Pro с отрицательным отступом */
  @media (min-width: 1024px) {
    margin-left: -3.5rem;
    align-self: flex-start;
  }
  
  /* Специальные стили для iPad Pro (1024px и выше по ширине) */
  @media (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) {
    margin-left: -3.2rem;
    width: 320px;
  }
  
  /* Стили для iPad Air и маленьких планшетов (820-900px) */
  @media (min-width: 820px) and (max-width: 900px) {
    margin: 0 auto 1.5rem;
    width: 300px;
    align-self: center;
  }
  
  /* Стили для средних планшетов */
  @media (min-width: 901px) and (max-width: 1023px) {
    margin-left: 0;
    width: 300px;
    align-self: flex-start;
  }
  
  /* Мобильная версия с центрированием */
  @media (max-width: 768px) {
    margin: 0 auto 1.5rem;
    width: 320px;
    align-self: center;
  }
`;k.p`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
`;const ie=k.p`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 400px;
  
  @media (max-width: 1023px) {
    max-width: 480px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.05rem;
  }
`,te=k.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 1023px) {
    justify-content: center;
  }
`,ae=k(j.a)`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: ${({theme:e})=>{var i,t;return(null==(t=null==(i=null==e?void 0:e.colors)?void 0:i.gradients)?void 0:t.logo)||"linear-gradient(135deg, rgba(255, 99, 71, 0.07) 0%, rgba(255, 99, 71, 0.10) 5%, rgba(206, 128, 114, 0.12) 12%, rgba(157, 157, 157, 0.15) 20%, rgba(108, 186, 200, 0.18) 28%, rgba(0, 180, 216, 0.20) 36%, rgba(71, 168, 203, 0.18) 44%, rgba(142, 157, 188, 0.15) 52%, rgba(214, 145, 173, 0.12) 60%, rgba(255, 105, 180, 0.10) 68%, rgba(219, 140, 149, 0.12) 76%, rgba(183, 175, 118, 0.15) 84%, rgba(147, 210, 95, 0.10) 92%, rgba(92, 184, 72, 0.07) 100%)"}};
    border-color: rgba(255, 255, 255, 0.4);
    color: white;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(144, 179, 167, 0.3);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`,ne=k(j.div)`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`,oe=k.h3`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.heading)||'"Playfair Display", serif'}};
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
  color: white;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 40px;
    height: 2px;
    background: linear-gradient(135deg, 
      ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.colors)?void 0:i.primary)||"#90B3A7"}} 0%, 
      ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.colors)?void 0:i.secondary)||"#D4A574"}} 100%
    );
  }
  
  @media (max-width: 1023px) {
    text-align: center;
    font-size: 1.3rem;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,re=k(p)`
  display: block;
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 0.4rem 0;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateX(4px);
  }
`,se=k(j.div)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  
  @media (max-width: 1023px) {
    justify-content: center;
    text-align: left;
  }
  
  svg {
    width: 1.1rem;
    height: 1.1rem;
    color: rgba(144, 179, 167, 0.8);
    margin-top: 0.125rem;
    flex-shrink: 0;
  }
`,le=k.div`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`,ce=k.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`,pe=k.div`
  padding: 1.5rem 0 1.5rem 0;
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
`,de=k.p`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  
  .highlight {
    color: rgba(144, 179, 167, 0.8);
    font-weight: 500;
  }
`,me=k.div`
  display: flex;
  gap: 2rem;
  
  a {
    font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.primary)||"Inter, sans-serif"}};
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`,ue=k(j.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${({$variant:e})=>{switch(e){case"secondary":return"linear-gradient(135deg, rgba(212, 165, 116, 0.08) 0%, rgba(184, 196, 168, 0.06) 100%)";case"tertiary":return"linear-gradient(135deg, rgba(184, 196, 168, 0.08) 0%, rgba(144, 179, 167, 0.06) 100%)";default:return"linear-gradient(135deg, rgba(144, 179, 167, 0.08) 0%, rgba(212, 165, 116, 0.06) 100%)"}}};
  filter: blur(60px);
  z-index: 2;
  pointer-events: none;
  
  &.deco-1 {
    top: -50px;
    left: 10%;
  }
  
  &.deco-2 {
    top: 30%;
    right: 5%;
  }
  
  &.deco-3 {
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
  }
`,he=()=>{const{t:e}=o(),t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.46,.45,.94]}}},a={animate:{y:[0,-15,0],transition:{duration:12,repeat:1/0,ease:"easeInOut",repeatType:"mirror"}}},n=(new Date).getFullYear(),r=[{path:"/",label:e("navigation.home"),id:"home"},{path:"/restaurant",label:e("navigation.restaurant"),id:"restaurant"},{path:"/spa",label:e("navigation.spa"),id:"spa"},{path:"/sports",label:e("navigation.sports"),id:"sports-main"},{path:"/contacts",label:e("navigation.contacts"),id:"contacts"}],d=[{path:"/spa",label:e("footer.services.sauna"),id:"spa-sauna"},{path:"/restaurant",label:e("navigation.restaurant"),id:"restaurant"},{path:"/sports",label:e("footer.services.fitness"),id:"sports-fitness"},{path:"/banya",label:e("navigation.banya"),id:"banya"},{path:"/sports",label:e("footer.services.fight_club"),id:"sports-club"}];return i.jsxs(Y,{children:[i.jsx(ue,{className:"deco-1",$variant:"primary",variants:a,animate:"animate"}),i.jsx(ue,{className:"deco-2",$variant:"secondary",variants:a,animate:"animate",style:{animationDelay:"-4s"}}),i.jsx(ue,{className:"deco-3",$variant:"tertiary",variants:a,animate:"animate",style:{animationDelay:"-8s"}}),i.jsx(Q,{children:i.jsxs(j.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.2}}},initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[i.jsxs(X,{children:[i.jsxs(Z,{variants:t,children:[i.jsx(ee,{whileHover:{scale:1.05,transition:{duration:.3,ease:"easeOut"}},children:i.jsxs("picture",{children:[i.jsx("source",{srcSet:"/images/logos/logo-footer-2x.webp 2x, /images/logos/logo-footer-1x.webp 1x",type:"image/webp"}),i.jsx("source",{srcSet:"/images/logos/logo-footer-2x.png 2x, /images/logos/logo-footer-1x.png 1x",type:"image/png"}),i.jsx("img",{src:"/images/logos/logo-footer-1x.png",alt:"KAIF",style:{width:"100%",height:"auto",maxWidth:"360px",filter:"brightness(1.2) contrast(1.1)",imageRendering:"crisp-edges"},loading:"lazy"})]})}),i.jsx(ie,{children:e("footer.brand.description")}),i.jsxs(te,{children:[i.jsx(ae,{href:"https://www.instagram.com/kaif.phuket/",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.95},children:i.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),i.jsx(ae,{href:"https://web.facebook.com/kaifphuketfb?mibextid=LQQJ4d&_rdc=1&_rdr#",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.95},children:i.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),i.jsx(ae,{href:"https://t.me/kaifphuketchat",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.95},children:i.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.789l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"})})}),i.jsx(ae,{href:"https://www.youtube.com/@KaifPhuket",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.95},children:i.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})}),i.jsx(ae,{href:"https://api.whatsapp.com/send/?phone=66624805877&text&type=phone_number&app_absent=0",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,transition:{duration:.3,ease:"easeOut"}},whileTap:{scale:.95},children:i.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",width:"16",height:"16",children:i.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"})})})]})]}),i.jsxs(ne,{variants:t,children:[i.jsx(oe,{children:e("footer.navigation")}),r.map(e=>i.jsx(re,{to:e.path,children:e.label},e.id))]}),i.jsxs(ne,{variants:t,children:[i.jsx(oe,{children:e("footer.services.title")}),d.map(e=>i.jsx(re,{to:e.path,children:e.label},e.id))]}),i.jsxs(ne,{variants:t,children:[i.jsx(oe,{children:e("navigation.contacts")}),i.jsxs(se,{children:[i.jsx(s,{}),i.jsxs(le,{children:["73, Baan Chalekiri Village,",i.jsx("br",{}),"6 Pra Phuket Keaw Road, Kathu"]})]}),i.jsxs(se,{children:[i.jsx(l,{}),i.jsx(le,{children:i.jsx(ce,{href:"tel:+66624805877",children:"+66 62 480 5877"})})]}),i.jsxs(se,{children:[i.jsx(c,{}),i.jsxs(le,{children:[e("footer.schedule.daily"),i.jsx("br",{}),e("footer.schedule.hours")]})]})]})]}),i.jsxs(pe,{children:[i.jsxs(de,{children:["© ",n," ",i.jsx("span",{className:"highlight",children:"KAIF"}),".",e("footer.copyright")]}),i.jsxs(me,{children:[i.jsx(p,{to:"/privacy",children:e("footer.legal.privacy")}),i.jsx(p,{to:"/terms",children:e("footer.legal.terms")})]})]})]})})]})},ge=k.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`,be=k.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
  flex: 1 0 auto;
  margin: 0;
  padding: 65px 0 0 0;
  background: transparent;
`,fe=({children:t})=>{const n=a(),[o,r]=e.useState(!0),s=e.useRef(!0),{isLoading:l}=E();return e.useEffect(()=>{if(s.current)return s.current=!1,void r(!0);r(!1),window.scrollTo(0,0);const e=setTimeout(()=>{r(!0)},500);return()=>clearTimeout(e)},[n.pathname]),i.jsxs(i.Fragment,{children:[i.jsx(T,{}),i.jsx(H,{isVisible:!o&&!l}),i.jsx(U,{}),i.jsxs(ge,{children:[i.jsx(be,{children:t}),o&&i.jsx(he,{})]})]})},_e=({titleKey:t="page_titles.home",defaultTitle:a="KAIF | Jungle Club & Spa",description:n,keywords:r,ogImage:s,pageType:l="website"})=>{const{t:c,i18n:p}=o(),m=c(t,a);return e.useEffect(()=>{document.title=m},[m,p.language]),i.jsxs(d,{children:[i.jsx("title",{children:m}),n&&i.jsx("meta",{name:"description",content:n}),r&&i.jsx("meta",{name:"keywords",content:r}),i.jsx("meta",{property:"og:title",content:m}),n&&i.jsx("meta",{property:"og:description",content:n}),i.jsx("meta",{property:"og:type",content:l}),s&&i.jsx("meta",{property:"og:image",content:s}),i.jsx("meta",{name:"twitter:title",content:m}),n&&i.jsx("meta",{name:"twitter:description",content:n}),i.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),s&&i.jsx("meta",{name:"twitter:image",content:s}),i.jsx("link",{rel:"shortcut icon",type:"image/png",href:"/favicon.png"}),i.jsx("link",{rel:"icon",type:"image/png",href:"/favicon.png"}),i.jsx("meta",{name:"theme-color",content:"#2C614F"})]})},ye="/assets/images/hero-restaurant-B-WOCk0r.jpg",xe=["/assets/images/hero-spa-DTdp7JL8.jpg","/assets/images/hero-pool-D1w69rNO.jpg",ye,"/assets/images/hero-fitness-C8kFY2Cm.jpg"],we=k.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  background: #000;
  /* Убираем все свойства, влияющие на скролл */
  scroll-snap-align: unset;
  scroll-snap-type: unset;
  scroll-snap-stop: unset;
  contain: none;
  isolation: auto;
  will-change: auto;
  touch-action: auto;
  overscroll-behavior: auto;
  -webkit-overscroll-behavior: auto;
  
  @media (max-width: 768px) {
    min-height: 100svh;
    height: auto;
    touch-action: auto;
  }
`,ve=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  will-change: auto;
  pointer-events: none;
  
  /* Разрешаем события только для дочерних элементов слайдера */
  > * {
    pointer-events: auto;
  }
`,ke=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${e=>e.$active?1:0};
  transition: opacity 2s ease-in-out;
  /* ИСПРАВЛЕНИЕ: Оптимизация для GPU без блокировки скролла */
  transform: translateZ(0);
  will-change: opacity;
  /* Не блокируем события указателя */
  pointer-events: none;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.65) 0%,
      rgba(0,0,0,0.45) 50%,
      rgba(0,0,0,0.55) 100%
    );
    z-index: 2;
    pointer-events: none;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.8) contrast(1.1) saturate(0.9);
    /* Не блокируем события указателя */
    pointer-events: none;
    /* Оптимизация без создания новых слоев */
    will-change: auto;
  }
`,Ae=k.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 3rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* ИСПРАВЛЕНИЕ: Разрешаем события для интерактивных элементов */
  pointer-events: auto;
  /* Не создаем дополнительные композитные слои */
  will-change: auto;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
    /* Сдвигаем контент немного выше для лучшей видимости кнопок */
    justify-content: flex-start;
    padding-top: 15vh;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0;
    padding-top: 12vh;
  }
  
  /* Специально для iPhone */
  @media (max-width: 414px) and (max-height: 896px) {
    padding-top: 10vh;
  }
  
  /* Для маленьких iPhone */
  @media (max-width: 375px) and (max-height: 812px) {
    padding-top: 8vh;
  }
`,Fe=k.div`
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
`,Ce=k(j.img)`
  max-width: 520px;
  width: auto;
  height: auto;
  margin: 0 0 3rem 0;
  display: block;
  filter: 
    drop-shadow(0 25px 80px rgba(0, 0, 0, 0.9))
    drop-shadow(0 10px 30px rgba(0, 0, 0, 0.7));
  
  @media (max-width: 768px) {
    max-width: 450px;
    margin: 0 0 2.5rem 0;
  }
  
  @media (max-width: 480px) {
    max-width: 420px;
    margin: 0 0 2rem 0;
  }
  
  /* Для маленьких экранов но все еще достаточно большой */
  @media (max-width: 375px) {
    max-width: 380px;
  }
`,je=k.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 3rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  min-width: 220px;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.3),
    0 15px 50px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      transparent, 
      rgba(0, 0, 0, 0.05), 
      transparent
    );
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow: 
      0 12px 35px rgba(0, 0, 0, 0.4),
      0 20px 60px rgba(0, 0, 0, 0.25);
    color: #000;
    text-decoration: none;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 1.1rem 2.5rem;
    font-size: 0.85rem;
    min-width: 200px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 2rem;
    font-size: 0.8rem;
    min-width: 180px;
    width: 100%;
    max-width: 300px;
  }
`,Se=k.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 3rem;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.95);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-out;
  position: relative;
  min-width: 220px;
  margin-top: 1.2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  font-family: inherit;
  
  &:hover {
    color: rgba(255, 255, 255, 1);
    border-color: rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
    text-decoration: none;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 1.1rem 2.5rem;
    font-size: 0.85rem;
    min-width: 200px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 2rem;
    font-size: 0.8rem;
    min-width: 180px;
    width: 100%;
    max-width: 300px;
    margin-top: 1rem;
    /* Улучшенная видимость на мобильных */
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }
`,Pe=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
    gap: 0.5rem;
    /* Небольшая корректировка позиции для планшетов */
    position: relative;
    bottom: 0.5rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    max-width: 320px;
    margin-bottom: 4rem;
    gap: 0.8rem;
    /* Немного поднимаем кнопки для видимости на iPhone */
    position: relative;
    bottom: 1.5rem;
  }
  
  /* Для iPhone в портретной ориентации */
  @media (max-width: 414px) and (max-height: 896px) {
    bottom: 2rem;
    margin-bottom: 5rem;
  }
  
  /* Для маленьких iPhone (SE, Mini) */
  @media (max-width: 375px) and (max-height: 812px) {
    bottom: 2.5rem;
    margin-bottom: 6rem;
  }
`,Ie={logo:{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1,transition:{duration:.8,ease:"easeOut",delay:.2}}},buttons:{initial:{opacity:0,y:15},animate:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut",delay:.6}}}},Be=e.memo(()=>{const{t}=o(),[a,n]=e.useState(0);return e.useEffect(()=>{const e=setInterval(()=>{requestAnimationFrame(()=>{n(e=>(e+1)%xe.length)})},6e3);return()=>clearInterval(e)},[]),i.jsxs(we,{children:[i.jsx(ve,{children:xe.map((e,t)=>i.jsx(ke,{$active:t===a,children:i.jsx("img",{src:e,alt:`KAIF - Слайд ${t+1}`,loading:0===t?"eager":"lazy",decoding:"async",onError:e=>{const i=["https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75","https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75","https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75","https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75"];e.target.src=i[t%i.length]}})},`slide-${t}`))}),i.jsx(Ae,{children:i.jsxs(Fe,{children:[i.jsx(Ce,{src:"/assets/images/logo-homepage-Yn4-hFZp.png",alt:"KAIF",initial:Ie.logo.initial,animate:Ie.logo.animate,whileHover:{scale:1.02,transition:{duration:.2,ease:"easeOut"}}}),i.jsxs(Pe,{as:j.div,initial:Ie.buttons.initial,animate:Ie.buttons.animate,children:[i.jsx(j.div,{whileHover:{scale:1.02,transition:{duration:.15,ease:"easeOut"}},whileTap:{scale:.98},children:i.jsx(je,{href:"https://wa.me/66624805877?text=Здравствуйте! Хочу записаться в KAIF",target:"_blank",rel:"noopener noreferrer",children:t("common.book")})}),i.jsx(j.div,{onClick:()=>{const e=document.querySelector("#exclusive-zones");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},whileHover:{scale:1.01,transition:{duration:.15,ease:"easeOut"}},whileTap:{scale:.99},children:i.jsx(Se,{children:t("common.learn_more")})})]})]})})]})});Be.displayName="HeroFullscreen";const Te=k.section`
  position: relative;
  padding: 6rem 0;
  background-color: #ffffff;
  overflow: hidden;
  /* ИСПРАВЛЕНИЕ: Не блокируем скролл */
  touch-action: pan-y;
  overscroll-behavior: auto;
  -webkit-overscroll-behavior: auto;
  
  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,ze=k.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,Me=k.div`
  margin-bottom: 3rem;
`,Ee=k(j.div)`
  font-family: ${({theme:e})=>{var i;return null==(i=null==e?void 0:e.fonts)?void 0:i.primary}};
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #90B3A7;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: ${({theme:e})=>{var i,t;return(null==(t=null==(i=null==e?void 0:e.colors)?void 0:i.gradients)?void 0:t.logo)||"linear-gradient(135deg, #90B3A7 0%, #00B4D8 33%, #90B3A7 66%, #5CB848 100%)"}};
    margin-right: 1rem;
  }
`,Ke=k(j.h2)`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  line-height: 1.2;
  color: ${({theme:e})=>{var i,t;return(null==(t=null==(i=null==e?void 0:e.colors)?void 0:i.text)?void 0:t.primary)||"#2C3E2D"}};
  margin: 0;
`,Re=k.div`
  margin-top: 2rem;
`,qe=k.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  position: relative;
  
  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background-color: rgba(44, 62, 45, 0.1);
    margin-left: 2rem;
  }
`,Le=k.h3`
  font-family: ${({theme:e})=>{var i;return(null==(i=null==e?void 0:e.fonts)?void 0:i.elegant)||'"Playfair Display", serif'}};
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 300;
  margin: 0;
  color: ${({theme:e})=>{var i,t;return(null==(t=null==(i=null==e?void 0:e.colors)?void 0:i.text)?void 0:t.primary)||"#2C3E2D"}};
  position: relative;
  display: flex;
  align-items: center;
  
  svg {
    width: 24px;
    height: 24px;
    margin-right: 1rem;
    color: #5CB848;
  }
`,Oe=k.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
  
  @media (max-width: 767px) {
    margin-bottom: 4rem;
  }
`,De=k(j.div)`
  position: relative;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  /* ИСПРАВЛЕНИЕ: Убираем will-change для предотвращения избыточных композитных слоев */
  will-change: auto;
  /* Минимальные трансформации для оптимизации */
  transform: translateZ(0);
  /* Оптимизированные переходы */
  transition: box-shadow 0.2s ease-out;
  
  @media (min-width: 480px) {
    height: 320px;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
  
  @media (min-width: 768px) {
    height: 360px;
    border-radius: 24px;
  }
  
  @media (min-width: 1024px) {
    height: 380px;
  }
  
  /* ИСПРАВЛЕНИЕ: Упрощенный hover для desktop без влияния на скролл */
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      /* Убираем transform для предотвращения compositor thrashing */
    }
  }
  
  /* Для touch устройств убираем все эффекты */
  @media (hover: none) or (pointer: coarse) {
    &:hover {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 1;
    transition: background 0.3s ease-out;
  }
  
  /* Hover эффект только для устройств с курсором */
  @media (hover: hover) and (pointer: fine) {
    &:hover::after {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.05) 0%,
        rgba(0, 0, 0, 0.7) 100%
      );
    }
  }
  
  /* Отключаем hover для touch устройств */
  @media (hover: none) or (pointer: coarse) {
    &:hover::after {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.8) 100%
      );
    }
  }
`,We=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  /* ИСПРАВЛЕНИЕ: Убираем трансформации изображений для оптимизации скролла */
  /* Не используем transform hover эффекты, чтобы не создавать дополнительные слои */
  will-change: auto;
  
  /* Убираем все hover эффекты для предотвращения compositor thrashing */
  @media (hover: hover) and (pointer: fine) {
    ${De}:hover & {
      /* Убираем scale transform */
    }
  }
  
  @media (hover: none) or (pointer: coarse) {
    ${De}:hover & {
      /* Ничего не делаем */
    }
  }
`,He=k.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 2;
  color: #fff;
  /* ИСПРАВЛЕНИЕ: Убираем трансформации для оптимизации скролла */
  will-change: auto;
  
  /* Убираем все hover эффекты с трансформациями */
  @media (hover: hover) and (pointer: fine) {
    ${De}:hover & {
      /* Убираем transform */
    }
  }
  
  @media (hover: none) or (pointer: coarse) {
    ${De}:hover & {
      /* Ничего не делаем */
    }
  }
`,Ne=k.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  letter-spacing: 0.5px;
  color: #fff;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.8);
  /* ИСПРАВЛЕНИЕ: Убираем трансформации */
  will-change: auto;
  
  /* Упрощенный hover без трансформаций */
  @media (hover: hover) and (pointer: fine) {
    ${De}:hover & {
      text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.9);
    }
  }
  
  @media (hover: none) or (pointer: coarse) {
    ${De}:hover & {
      text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.8);
    }
  }
`,$e=k.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0 0 1.5rem;
  opacity: 0.95;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.8);
  /* ИСПРАВЛЕНИЕ: Убираем трансформации */
  will-change: auto;
  
  /* Упрощенный hover без трансформаций */
  @media (hover: hover) and (pointer: fine) {
    ${De}:hover & {
      opacity: 1;
      text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.9);
    }
  }
  
  @media (hover: none) or (pointer: coarse) {
    ${De}:hover & {
      opacity: 0.95;
      text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.8);
    }
  }
`,Ve=k(p)`
  display: inline-flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: #fff !important;
  text-decoration: none !important;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  transform: translateY(10px);
  opacity: 0.8;
  
  svg {
    width: 18px;
    height: 18px;
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
    color: #fff !important;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.6s ease;
  }
  
  /* Hover только для устройств с курсором */
  @media (hover: hover) and (pointer: fine) {
    ${De}:hover & {
      transform: translateY(0);
      opacity: 1;
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.3);
      color: #fff !important;
      
      svg {
        transform: translateX(4px);
        color: #fff !important;
      }
    }
    
    &:hover {
      background: rgba(255, 255, 255, 0.3) !important;
      transform: translateY(-2px) !important;
      color: #fff !important;
      text-decoration: none !important;
      
      svg {
        color: #fff !important;
      }
    }
    
    &:hover::before {
      left: 100%;
    }
  }
  
  /* Отключаем hover для touch устройств */
  @media (hover: none) or (pointer: coarse) {
    ${De}:hover & {
      transform: translateY(10px);
      opacity: 0.8;
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.2);
      
      svg {
        transform: translateX(0);
      }
    }
    
    &:hover {
      background: rgba(255, 255, 255, 0.15) !important;
      transform: translateY(10px) !important;
    }
    
    &:hover::before {
      left: -100%;
    }
  }
  
  &:visited,
  &:link,
  &:active {
    color: #fff !important;
    text-decoration: none !important;
  }
`,Ge=k.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,Je=k.button`
  background: ${e=>e.$active?"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)":"rgba(255, 255, 255, 0.1)"};
  color: ${e=>e.$active?"white":"#2C3E2D"};
  border: 2px solid ${e=>e.$active?"transparent":"rgba(144, 179, 167, 0.3)"};
  border-radius: 50px;
  padding: 1rem 2.5rem;
  font-family: ${({theme:e})=>{var i;return null==(i=null==e?void 0:e.fonts)?void 0:i.primary}};
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.25s ease-out;
  cursor: pointer;
  margin: 0 0.8rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: ${e=>e.$active?"0 8px 25px rgba(144, 179, 167, 0.4)":"0 4px 15px rgba(0, 0, 0, 0.1)"};
  backdrop-filter: blur(10px);
  min-width: 180px;
  justify-content: center;
  /* ИСПРАВЛЕНИЕ: Оптимизация без избыточных слоев */
  will-change: auto;
  transform: translateZ(0);
  
  svg {
    width: 18px;
    height: 18px;
    margin-right: 0.6rem;
    transition: all 0.3s ease;
    color: ${e=>e.$active?"white":"#90B3A7"};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    /* ИСПРАВЛЕНИЕ: Упрощенный hover без трансформаций */
    box-shadow: ${e=>e.$active?"0 10px 30px rgba(144, 179, 167, 0.5)":"0 6px 20px rgba(144, 179, 167, 0.25)"};
    background: ${e=>e.$active?"linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%)":"rgba(144, 179, 167, 0.1)"};
    border-color: ${e=>e.$active?"transparent":"rgba(144, 179, 167, 0.5)"};
    color: ${e=>e.$active?"white":"#90B3A7"};
    
    svg {
      color: ${e=>e.$active?"white":"#90B3A7"};
    }
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.3);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
    margin: 0 0 1rem 0;
    min-width: unset;
    padding: 0.9rem 2rem;
  }
`,Ue=()=>{const{t}=o(),[a,n]=e.useState("all"),r=e.useMemo(()=>[{id:"fitness",name:t("zones.activity.fitness.name"),description:t("zones.activity.fitness.description"),image:"/images/zones/fitness.jpg",path:"/sports"},{id:"combat",name:t("zones.activity.combat.name"),description:t("zones.activity.combat.description"),image:"/images/zones/combat.jpg",path:"/sports"},{id:"pool",name:t("zones.activity.pool.name"),description:t("zones.activity.pool.description"),image:"/images/zones/pool.jpg",path:"/sports"}],[t]),s=e.useMemo(()=>[{id:"spa",name:t("zones.relax.spa.name"),description:t("zones.relax.spa.description"),image:"/images/zones/spa.jpg",path:"/spa"},{id:"banya",name:t("zones.relax.banya.name"),description:t("zones.relax.banya.description"),image:"/assets/images/hero-luxury-CYZ2FLIl.png",path:"/banya"},{id:"restaurant",name:t("zones.relax.restaurant.name"),description:t("zones.relax.restaurant.description"),image:"/images/zones/restaurant.jpg",path:"/restaurant"}],[t]),l=(e,a)=>e.map((e,n)=>i.jsxs(De,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.1,margin:"-50px"},transition:{duration:.6,delay:.05*n},children:[i.jsx(We,{src:e.image,alt:e.name}),i.jsxs(He,{children:[i.jsx(Ne,{children:e.name}),i.jsx($e,{children:e.description}),i.jsxs(Ve,{to:e.path,children:[t("common.exploreMore","Подробнее"),i.jsx(h,{})]})]})]},`${a}-${e.id}`)),c=e=>{e!==a&&n(e)};return i.jsx(Te,{id:"exclusive-zones",children:i.jsxs(ze,{children:[i.jsxs(Me,{children:[i.jsx(Ee,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.8},children:t("zones.overline","Пространства KAIF")}),i.jsx(Ke,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.8,delay:.2},children:t("zones.title","Всё необходимое для активного отдыха и релаксации")})]}),i.jsxs(Ge,{children:[i.jsx(Je,{$active:"all"===a,onClick:()=>c("all"),children:t("zones.all","Все зоны")}),i.jsxs(Je,{$active:"activity"===a,onClick:()=>c("activity"),children:[i.jsx(m,{}),t("zones.activity_label","Активити")]}),i.jsxs(Je,{$active:"relax"===a,onClick:()=>c("relax"),children:[i.jsx(u,{}),t("zones.relax_label","Релакс")]})]}),i.jsxs(Re,{children:[("all"===a||"activity"===a)&&i.jsxs("div",{children:[i.jsx(qe,{children:i.jsxs(Le,{children:[i.jsx(m,{}),t("zones.activity_label","Активити")]})}),i.jsx(Oe,{children:l(r,"activity")})]}),("all"===a||"relax"===a)&&i.jsxs("div",{children:[i.jsx(qe,{children:i.jsxs(Le,{children:[i.jsx(u,{}),t("zones.relax_label","Релакс")]})}),i.jsx(Oe,{children:l(s,"relax")})]})]})]})})},Ye=e.lazy(()=>I(()=>import("./AdvantagesSection-DFT97KCx.js"),__vite__mapDeps([0,1,2,3,4])).then(i=>({default:e.memo(i.default)}))),Qe=e.lazy(()=>I(()=>import("./GallerySection-ClRO5s9s.js"),__vite__mapDeps([5,1,2,3,4])).then(i=>({default:e.memo(i.GallerySection)}))),Xe=e.lazy(()=>I(()=>import("./FAQSection-BJmsHey9.js"),__vite__mapDeps([6,1,2,3,4])).then(i=>({default:e.memo(i.default)}))),Ze=k.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(144, 179, 167, 0.02);
  
  &::after {
    content: '';
    width: 24px;
    height: 24px;
    border: 2px solid rgba(144, 179, 167, 0.2);
    border-top: 2px solid #90B3A7;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,ei=k.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: rgba(144, 179, 167, 0.02);
`,ii=k(p)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.2s ease;
  min-width: 200px;
  text-align: center;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  border: 2px solid transparent;
  box-shadow: 0 4px 15px rgba(144, 179, 167, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(144, 179, 167, 0.4);
    background: linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%);
    color: white;
    text-decoration: none;
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    padding: 1rem 2rem;
    font-size: 0.8rem;
    min-width: unset;
  }
  
  @media (max-width: 480px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.75rem;
    
    svg {
      width: 14px;
      height: 14px;
    }
  }
`,ti=e.memo(()=>{const{t}=o(),{showLoading:a}=E(),n=e.useRef(!1);return e.useEffect(()=>{n.current||(n.current=!0,a(1e3))},[]),i.jsxs("main",{children:[i.jsx(_e,{titleKey:"page_titles.home",description:t("home.hero.subtitle","Unique relaxation and wellness experience in Phuket"),keywords:"KAIF, spa, wellness, Phuket, gym, restaurant, banya, massage",ogImage:"/images/logos/logo-og.png"}),i.jsx(Be,{}),i.jsx(Ue,{}),i.jsx(e.Suspense,{fallback:i.jsx(Ze,{}),children:i.jsx(Ye,{})}),i.jsx(e.Suspense,{fallback:i.jsx(Ze,{}),children:i.jsx(Qe,{})}),i.jsx(e.Suspense,{fallback:i.jsx(Ze,{}),children:i.jsx(Xe,{})}),i.jsx(ei,{children:i.jsxs(ii,{to:"/contacts",children:[t("common.contact_us"),i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})})]})});ti.displayName="HomePage";const ai=t.lazy(()=>I(()=>import("./RestaurantPage-BiEqvMEu.js"),__vite__mapDeps([7,1,2,3,8,4,9]))),ni=t.lazy(()=>I(()=>import("./SpaPage-Ctvior_3.js"),__vite__mapDeps([10,1,2,3,8,4,9]))),oi=t.lazy(()=>I(()=>import("./SportsPage-FAurazaN.js").then(e=>e.d),__vite__mapDeps([11,1,2,3,4,8]))),ri=t.lazy(()=>I(()=>import("./BanyaPage-vJOtl_ev.js"),__vite__mapDeps([12,1,2,3,8,4,9]))),si=t.lazy(()=>I(()=>import("./ContactsPage-CALUGqRe.js"),__vite__mapDeps([13,1,2,3,4,14,8,9]))),li=t.lazy(()=>I(()=>import("./PrivacyPage-QAQAnXjg.js"),__vite__mapDeps([15,1,2,3,14,4]))),ci=t.lazy(()=>I(()=>import("./TermsPage-BRdeoRZg.js"),__vite__mapDeps([16,1,2,3,14,4]))),pi=t.lazy(()=>I(()=>import("./SurveyPage-1jrUO_T1.js"),__vite__mapDeps([17,1,2,3,8,4,9]))),di=()=>null,mi=()=>{const t=a();return i.jsx(e.Suspense,{fallback:i.jsx(di,{}),children:i.jsxs(f,{location:t,children:[i.jsx(_,{path:"/",element:i.jsx(ti,{})}),i.jsx(_,{path:"/restaurant",element:i.jsx(ai,{})}),i.jsx(_,{path:"/spa",element:i.jsx(ni,{})}),i.jsx(_,{path:"/sports",element:i.jsx(oi,{})}),i.jsx(_,{path:"/banya",element:i.jsx(ri,{})}),i.jsx(_,{path:"/contacts",element:i.jsx(si,{})}),i.jsx(_,{path:"/privacy",element:i.jsx(li,{})}),i.jsx(_,{path:"/terms",element:i.jsx(ci,{})}),i.jsx(_,{path:"/survey",element:i.jsx(pi,{})}),i.jsx(_,{path:"*",element:i.jsx(y,{to:"/",replace:!0})})]})})},ui=()=>{const{isLoading:e,isContentReady:t}=E();return i.jsxs(i.Fragment,{children:[i.jsx(H,{isVisible:e}),i.jsx(N,{}),t&&i.jsx("div",{className:"App",children:i.jsx(fe,{children:i.jsx(mi,{})})})]})};function hi(){const{i18n:a,t:n}=o(),[r,s]=t.useState(0);return e.useEffect(()=>{const e=()=>{s(e=>e+1)};return a.on("languageChanged",e),()=>{a.off("languageChanged",e)}},[a]),e.useEffect(()=>{document.documentElement.dir=a.dir(),document.documentElement.lang=a.language,"KAIF | Jungle Club & Spa"!==document.title&&!document.title.includes("KAIF")&&document.title.includes("|")||(document.title=n("page_titles.home","KAIF | Jungle Club & Spa"))},[a.language,n,r]),i.jsx(g,{children:i.jsxs(A,{theme:J,children:[i.jsx(B,{}),i.jsx(T,{}),i.jsx(K,{children:i.jsx(b,{basename:"/",children:i.jsx(ui,{})})})]})},`app-${a.language}-${r}`)}console.log=()=>{},console.warn=()=>{},console.info=()=>{},"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{e.addEventListener("updatefound",()=>{const i=e.installing;i.addEventListener("statechange",()=>{"installed"===i.state&&navigator.serviceWorker.controller})})}).catch(e=>{})}),x.createRoot(document.getElementById("root")).render(i.jsx(hi,{}));export{_e as P,I as _,ye as h};
