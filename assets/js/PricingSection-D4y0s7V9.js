import{r as e,j as r}from"./react-core-DWAaPJsY.js";import{d as a,m as i}from"./styled-components-fuCKgGld.js";import{m as s,n as t,o as n,p as c,q as o,a as g}from"./react-icons-DxYdSIzX.js";import{B as p}from"./BookingModal-D1wbjBVS.js";import{u}from"./i18n-core-DrMVsQFB.js";import{m as l}from"./framer-motion-DOblPXrY.js";import"./vendor-misc-D8JVgYt7.js";const d=i`
  0%, 100% {
    opacity: 1;
    filter: brightness(1.3);
  }
  50% {
    opacity: 0.5;
    filter: brightness(0.9);
  }
`,m=a.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f8faf9 0%, #ffffff 50%, #f0f4f2 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(144, 179, 167, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle, rgba(168, 197, 184, 0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`,f=a.div`
  max-width: 1200px;
  margin: 0 auto;
`,b=a.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`,x=a(l.h2)`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,h=a(l.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,y=a.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`,w=a(l.button)`
  font-family: 'Montserrat', sans-serif;
  padding: 0.75rem 1.5rem;
  background: ${e=>{if(!e.$active)return"#ffffff";switch(e.$categoryKey){case"dayPass":return"linear-gradient(135deg, #9C27B0 0%, #AB47BC 100%)";case"clubAccess":return"linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)";case"premium":return"linear-gradient(135deg, #212121 0%, #424242 100%)";case"groupClasses":return"linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)";case"swimming":return"linear-gradient(135deg, #2196F3 0%, #42A5F5 100%)";default:return"linear-gradient(135deg, #90B3A7 0%, #7da399 100%)"}}};
  color: ${e=>e.$active?"white":"#6b7280"};
  border: ${e=>{if(e.$active)return"none";switch(e.$categoryKey){case"dayPass":return"2px solid rgba(156, 39, 176, 0.2)";case"clubAccess":return"2px solid rgba(76, 175, 80, 0.2)";case"premium":return"2px solid rgba(33, 33, 33, 0.15)";case"groupClasses":return"2px solid rgba(255, 152, 0, 0.2)";case"swimming":return"2px solid rgba(33, 150, 243, 0.2)";default:return"2px solid #e5e7eb"}}};
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${e=>{if(!e.$active)return"0 2px 4px rgba(0, 0, 0, 0.05)";switch(e.$categoryKey){case"dayPass":return"0 4px 15px rgba(156, 39, 176, 0.3)";case"clubAccess":return"0 4px 15px rgba(76, 175, 80, 0.3)";case"premium":return"0 4px 15px rgba(33, 33, 33, 0.25)";case"groupClasses":return"0 4px 15px rgba(255, 152, 0, 0.3)";case"swimming":return"0 4px 15px rgba(33, 150, 243, 0.3)";default:return"0 4px 15px rgba(144, 179, 167, 0.3)"}}};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>{switch(e.$categoryKey){case"dayPass":return"0 6px 20px rgba(156, 39, 176, 0.35)";case"clubAccess":return"0 6px 20px rgba(76, 175, 80, 0.35)";case"premium":return"0 6px 20px rgba(33, 33, 33, 0.3)";case"groupClasses":return"0 6px 20px rgba(255, 152, 0, 0.35)";case"swimming":return"0 6px 20px rgba(33, 150, 243, 0.35)";default:return"0 6px 20px rgba(144, 179, 167, 0.25)"}}};
    ${e=>!e.$active&&`\n      background: ${"dayPass"===e.$categoryKey?"rgba(156, 39, 176, 0.05)":"clubAccess"===e.$categoryKey?"rgba(76, 175, 80, 0.05)":"premium"===e.$categoryKey?"rgba(33, 33, 33, 0.03)":"groupClasses"===e.$categoryKey?"rgba(255, 152, 0, 0.05)":"swimming"===e.$categoryKey?"rgba(33, 150, 243, 0.05)":"#f9fafb"};\n    `}
  }

  svg {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
`,$=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 340px));
  justify-content: center;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,C=a(l.div)`
  background: #ffffff;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04);
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 340px;
  max-width: 100%;
  min-height: 620px;
  border: 1px solid ${e=>{switch(e.$category){case"dayPass":return"rgba(156, 39, 176, 0.08)";case"clubAccess":return"rgba(76, 175, 80, 0.08)";case"premium":return"rgba(33, 33, 33, 0.08)";case"groupClasses":return"rgba(255, 152, 0, 0.08)";case"swimming":return"rgba(33, 150, 243, 0.08)";default:return"rgba(144, 179, 167, 0.08)"}}};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${e=>{switch(e.$category){case"dayPass":return"linear-gradient(90deg, #9C27B0, #BA68C8, #CE93D8)";case"clubAccess":return"linear-gradient(90deg, #4CAF50, #81C784, #A5D6A7)";case"premium":return"linear-gradient(90deg, #212121, #424242, #616161)";case"groupClasses":return"linear-gradient(90deg, #FF9800, #FFB74D, #FFCC80)";case"swimming":return"linear-gradient(90deg, #2196F3, #64B5F6, #90CAF9)";default:return"linear-gradient(90deg, #90B3A7, #A8C5B8)"}}};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${e=>{switch(e.$category){case"dayPass":return"0 12px 40px rgba(156, 39, 176, 0.15)";case"clubAccess":return"0 12px 40px rgba(76, 175, 80, 0.15)";case"premium":return"0 12px 40px rgba(33, 33, 33, 0.12)";case"groupClasses":return"0 12px 40px rgba(255, 152, 0, 0.15)";case"swimming":return"0 12px 40px rgba(33, 150, 243, 0.15)";default:return"0 12px 40px rgba(144, 179, 167, 0.15)"}}};
    border-color: ${e=>{switch(e.$category){case"dayPass":return"rgba(156, 39, 176, 0.2)";case"clubAccess":return"rgba(76, 175, 80, 0.2)";case"premium":return"rgba(33, 33, 33, 0.15)";case"groupClasses":return"rgba(255, 152, 0, 0.2)";case"swimming":return"rgba(33, 150, 243, 0.2)";default:return"rgba(144, 179, 167, 0.2)"}}};

    &::before {
      opacity: 1;
    }

    /* Show garland on hover */
    .card-garland {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
    padding: 1.75rem;
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }
`;a.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: white;
  padding: 0.375rem 1.25rem;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
  z-index: 1;
`;const A=a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 12px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  opacity: 0;
  transform: translateY(-5px);
  transition: all 0.3s ease;
  z-index: 2;
  pointer-events: none;
`,v=a.div`
  width: 8px;
  height: 10px;
  background: ${e=>e.$color};
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: ${d} ${e=>e.$duration}s ease-in-out infinite;
  animation-delay: ${e=>e.$delay}s;
  box-shadow:
    0 0 6px ${e=>e.$color},
    0 0 12px ${e=>e.$color}80;
  margin-top: 2px;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background: #1a472a;
    border-radius: 2px;
  }
`,B=a.div`
  margin-bottom: 2rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid ${e=>{switch(e.$category){case"dayPass":return"rgba(156, 39, 176, 0.12)";case"clubAccess":return"rgba(76, 175, 80, 0.12)";case"premium":return"rgba(33, 33, 33, 0.08)";case"groupClasses":return"rgba(255, 152, 0, 0.12)";case"swimming":return"rgba(33, 150, 243, 0.12)";default:return"rgba(144, 179, 167, 0.12)"}}};
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: ${e=>{switch(e.$category){case"dayPass":return"linear-gradient(90deg, #9C27B0, #BA68C8)";case"clubAccess":return"linear-gradient(90deg, #4CAF50, #81C784)";case"premium":return"linear-gradient(90deg, #212121, #424242)";case"groupClasses":return"linear-gradient(90deg, #FF9800, #FFB74D)";case"swimming":return"linear-gradient(90deg, #2196F3, #64B5F6)";default:return"linear-gradient(90deg, #90B3A7, #A8C5B8)"}}};
  }
`,F=a.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`,j=a.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,P=a.div`
  margin-bottom: 2rem;
  padding: 1rem 0;
`,k=a.div`
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #1a1a1a 0%, #4b5563 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;

  span {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;

    span {
      font-size: 1.25rem;
    }
  }
`,M=a.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,z=a.li`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  gap: ${e=>e.$compact?"0.6rem":"0.85rem"};
  padding: ${e=>e.$compact?"0.5rem 0":"0.65rem 0"};
  color: #374151;
  font-size: ${e=>e.$compact?"0.88rem":"0.92rem"};
  line-height: 1.5;
  font-weight: 400;
  transition: all 0.2s ease;
  border-bottom: ${e=>e.$noBorder?"none":"1px solid"} ${e=>{switch(e.$category){case"dayPass":return"rgba(156, 39, 176, 0.05)";case"clubAccess":return"rgba(76, 175, 80, 0.05)";case"premium":return"rgba(33, 33, 33, 0.05)";case"groupClasses":return"rgba(255, 152, 0, 0.05)";case"swimming":return"rgba(33, 150, 243, 0.05)";default:return"rgba(144, 179, 167, 0.05)"}}};

  &:last-child {
    border-bottom: none;
  }

  svg {
    color: #fff;
    font-size: ${e=>e.$compact?"0.7rem":"0.75rem"};
    flex-shrink: 0;
    background: ${e=>{switch(e.$category){case"dayPass":return"linear-gradient(135deg, #9C27B0, #BA68C8)";case"clubAccess":return"linear-gradient(135deg, #4CAF50, #66BB6A)";case"premium":return"linear-gradient(135deg, #212121, #424242)";case"groupClasses":return"linear-gradient(135deg, #FF9800, #FFB74D)";case"swimming":return"linear-gradient(135deg, #2196F3, #42A5F5)";default:return"linear-gradient(135deg, #90B3A7, #A8C5B8)"}}};
    padding: 0.35rem;
    border-radius: 50%;
    box-shadow: 0 2px 8px ${e=>{switch(e.$category){case"dayPass":return"rgba(156, 39, 176, 0.2)";case"clubAccess":return"rgba(76, 175, 80, 0.2)";case"premium":return"rgba(33, 33, 33, 0.2)";case"groupClasses":return"rgba(255, 152, 0, 0.2)";case"swimming":return"rgba(33, 150, 243, 0.2)";default:return"rgba(144, 179, 167, 0.2)"}}};
  }

  &:hover {
    color: #111827;
    padding-left: 0.5rem;
  }
`,_=a.div`
  position: relative;
  width: 100%;
  min-height: 600px;
`;a.div`
  text-align: center;
  padding: 4rem 2rem;
  font-family: 'Montserrat', sans-serif;
  color: #6b7280;
  font-size: 1.1rem;
  background: rgba(144, 179, 167, 0.02);
  border-radius: 20px;
  border: 2px dashed rgba(144, 179, 167, 0.2);
`;const D=a(l.a)`
  font-family: 'Montserrat', sans-serif;
  display: block;
  width: 100%;
  padding: 1.25rem;
  background: ${e=>{switch(e.$category){case"dayPass":return"linear-gradient(135deg, #9C27B0 0%, #AB47BC 50%, #BA68C8 100%)";case"clubAccess":return"linear-gradient(135deg, #4CAF50 0%, #66BB6A 50%, #81C784 100%)";case"premium":return"linear-gradient(135deg, #212121 0%, #424242 50%, #616161 100%)";case"groupClasses":return"linear-gradient(135deg, #FF9800 0%, #FFB74D 50%, #FFCC80 100%)";case"swimming":return"linear-gradient(135deg, #2196F3 0%, #42A5F5 50%, #64B5F6 100%)";default:return"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)"}}};
  color: white !important;
  border: none;
  border-radius: 16px;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  position: relative;
  overflow: hidden;
  margin-top: auto;
  box-shadow: ${e=>{switch(e.$category){case"dayPass":return"0 4px 15px rgba(156, 39, 176, 0.3)";case"clubAccess":return"0 4px 15px rgba(76, 175, 80, 0.3)";case"premium":return"0 4px 15px rgba(33, 33, 33, 0.25)";case"groupClasses":return"0 4px 15px rgba(255, 152, 0, 0.3)";case"swimming":return"0 4px 15px rgba(33, 150, 243, 0.3)";default:return"0 4px 15px rgba(144, 179, 167, 0.25)"}}};
  text-transform: uppercase;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:hover {
    transform: translateY(-3px);
    color: white !important;
    box-shadow: ${e=>{switch(e.$category){case"dayPass":return"0 8px 25px rgba(156, 39, 176, 0.4)";case"clubAccess":return"0 8px 25px rgba(76, 175, 80, 0.4)";case"premium":return"0 8px 25px rgba(33, 33, 33, 0.35)";case"groupClasses":return"0 8px 25px rgba(255, 152, 0, 0.4)";case"swimming":return"0 8px 25px rgba(33, 150, 243, 0.4)";default:return"0 8px 25px rgba(144, 179, 167, 0.35)"}}};
    background: ${e=>{switch(e.$category){case"dayPass":return"linear-gradient(135deg, #AB47BC 0%, #BA68C8 50%, #CE93D8 100%)";case"clubAccess":return"linear-gradient(135deg, #66BB6A 0%, #81C784 50%, #A5D6A7 100%)";case"premium":return"linear-gradient(135deg, #424242 0%, #616161 50%, #757575 100%)";case"groupClasses":return"linear-gradient(135deg, #FFB74D 0%, #FFCC80 50%, #FFE0B2 100%)";case"swimming":return"linear-gradient(135deg, #42A5F5 0%, #64B5F6 50%, #90CAF9 100%)";default:return"linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%)"}}};

    &::before {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`,PricingSection=()=>{const{t:a}=u(),[i,l]=e.useState("dayPass"),[d,S]=e.useState(!1),[I,K]=e.useState(null),Y={dayPass:{icon:r.jsx(s,{}),title:a("pricing.categories.dayPass"),subtitle:a("pricing.subtitles.dayPass"),plans:[{name:"Day Pass",duration:a("pricing.durations.fullDay"),price:"590",features:[a("pricing.features.gymCardio"),a("pricing.features.swimmingPool"),a("pricing.features.steamRoom"),a("pricing.features.iceBarrel"),a("pricing.features.russianSauna")+" & "+a("pricing.features.japanesePool"),a("pricing.features.towelsIncluded")],perMonth:null},{name:a("pricing.categories.groupClasses"),duration:a("pricing.durations.single"),price:"600",features:[a("pricing.features.dayAccess"),a("pricing.features.anyClass"),a("pricing.features.professionalTrainer")],perMonth:null}]},clubAccess:{icon:r.jsx(t,{}),title:"Club Access",subtitle:a("pricing.subtitles.withoutBanya"),plans:[{name:"Club Access",duration:a("pricing.durations.month"),price:"2,000",features:[a("pricing.features.gymCardio"),a("pricing.features.swimmingPool"),a("pricing.features.steamRoom"),a("pricing.features.iceBarrel")],perMonth:null},{name:"Club Access",duration:a("pricing.durations.months_3"),price:"4,800",features:[a("pricing.features.gymCardio"),a("pricing.features.swimmingPool"),a("pricing.features.steamRoom"),a("pricing.features.iceBarrel"),`${a("pricing.features.savings")} 20%`],perMonth:"1,600 ฿/мес",featured:!0,popular:!0},{name:"Club Access",duration:a("pricing.durations.months_6"),price:"9,900",features:[a("pricing.features.gymCardio"),a("pricing.features.swimmingPool"),a("pricing.features.steamRoom"),a("pricing.features.iceBarrel"),`${a("pricing.features.savings")} 17%`],perMonth:"1,650 ฿/мес"},{name:"Club Access",duration:a("pricing.durations.months_12"),price:"18,000",features:[a("pricing.features.gymCardio"),a("pricing.features.swimmingPool"),a("pricing.features.steamRoom"),a("pricing.features.iceBarrel"),`${a("pricing.features.maxSavings")} 25%`],perMonth:"1,500 ฿/мес"}]},premium:{icon:r.jsx(n,{}),title:"Club Access+",subtitle:a("pricing.subtitles.allPlusBanya"),plans:[{name:"Club Access+",duration:a("pricing.durations.day"),price:"490",features:[a("pricing.features.gymCardio"),a("pricing.features.swimmingPool"),a("pricing.features.steamRoom"),a("pricing.features.iceBarrel"),a("pricing.features.russianSauna")+" & "+a("pricing.features.japanesePool"),a("pricing.features.lockersAndShowers")],perMonth:null},{name:"Club Access+",duration:a("pricing.durations.month"),price:"3,800",features:[a("pricing.features.unlimitedAccess"),a("pricing.features.gymAndBanya"),a("pricing.features.swimmingPool"),a("pricing.features.towelsIncluded")],perMonth:null},{name:"Club Access+",duration:a("pricing.durations.months_3"),price:"9,400",features:[a("pricing.features.unlimitedAccess"),a("pricing.features.gymAndBanya"),a("pricing.features.towelsIncluded"),`${a("pricing.features.savings")} 18%`],perMonth:"3,133 ฿/мес",featured:!0,popular:!0},{name:"Club Access+",duration:a("pricing.durations.months_6"),price:"17,800",features:[a("pricing.features.unlimitedAccess"),a("pricing.features.gymAndBanya"),a("pricing.features.towelsIncluded"),`${a("pricing.features.savings")} 22%`],perMonth:"2,967 ฿/мес"},{name:"Club Access+",duration:a("pricing.durations.months_12"),price:"29,000",features:[a("pricing.features.unlimitedAccess"),a("pricing.features.gymAndBanya"),a("pricing.features.towelsIncluded"),`${a("pricing.features.maxSavings")} 36%`],perMonth:"2,417 ฿/мес"}]},groupClasses:{icon:r.jsx(c,{}),title:a("pricing.categories.groupClasses"),subtitle:a("pricing.subtitles.groupClasses"),plans:[{name:a("pricing.categories.groupClasses"),duration:a("pricing.durations.single"),price:"600",features:[a("pricing.features.dayAccess"),a("pricing.features.anyClass"),a("pricing.features.professionalTrainer")],perMonth:null},{name:a("pricing.categories.groupClasses"),duration:a("pricing.durations.classes_4"),price:"2,000",features:[`500 ฿ ${a("pricing.features.perClass")}`,a("pricing.features.validMonth"),a("pricing.features.anyClasses")],perMonth:null},{name:a("pricing.categories.groupClasses"),duration:a("pricing.durations.classes_12"),price:"3,000",features:[`250 ฿ ${a("pricing.features.perClass")}`,a("pricing.features.validMonths_2"),a("pricing.features.anyClasses"),`${a("pricing.features.savings")} 50%`],perMonth:null,featured:!0,popular:!0},{name:a("pricing.categories.groupClasses"),duration:a("pricing.durations.classes_24"),price:"5,500",features:[`229 ฿ ${a("pricing.features.perClass")}`,a("pricing.features.validMonths_3"),a("pricing.features.anyClasses"),`${a("pricing.features.savings")} 62%`],perMonth:null},{name:a("pricing.categories.groupClasses"),duration:a("pricing.durations.classes_48"),price:"10,200",features:[`213 ฿ ${a("pricing.features.perClass")}`,a("pricing.features.validMonths_6"),a("pricing.features.anyClasses"),`${a("pricing.features.maxSavings")} 65%`],perMonth:null}]},swimming:{icon:r.jsx(o,{}),title:a("pricing.categories.swimming"),subtitle:a("pricing.subtitles.swimmingSchool"),plans:[{name:a("pricing.categories.swimming"),duration:a("pricing.durations.single"),price:"800",features:[a("pricing.features.dayAccess"),a("pricing.features.individualApproach"),a("pricing.features.certifiedInstructor")],perMonth:null},{name:a("pricing.categories.swimming"),duration:a("pricing.durations.classes_8"),price:"3,800",features:[`475 ฿ ${a("pricing.features.perClass")}`,a("pricing.features.validMonths_2"),a("pricing.features.trainingProgram"),`${a("pricing.features.savings")} 41%`],perMonth:null,featured:!0,popular:!0},{name:a("pricing.categories.swimming"),duration:a("pricing.durations.classes_12"),price:"5,500",features:[`458 ฿ ${a("pricing.features.perClass")}`,a("pricing.features.validMonths_3"),a("pricing.features.fullProgram"),`${a("pricing.features.savings")} 43%`],perMonth:null}]}},R=[{key:"dayPass",label:a("pricing.categories.dayPass"),icon:r.jsx(s,{})},{key:"clubAccess",label:a("pricing.categories.clubAccess"),icon:r.jsx(t,{})},{key:"premium",label:a("pricing.categories.clubAccessPlus"),icon:r.jsx(n,{})},{key:"groupClasses",label:a("pricing.categories.groupClasses"),icon:r.jsx(c,{})},{key:"swimming",label:a("pricing.categories.swimming"),icon:r.jsx(o,{})}],T=Y[i];return r.jsxs(m,{id:"pricing",children:[r.jsxs(f,{children:[r.jsxs(b,{children:[r.jsx(x,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:a("pricing.title")}),r.jsx(h,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:a("pricing.subtitle")})]}),r.jsx(y,{children:R.map(e=>r.jsxs(w,{$active:i===e.key,$categoryKey:e.key,onClick:()=>(e=>{const r=window.scrollY;l(e),setTimeout(()=>{window.scrollTo(0,r)},0)})(e.key),whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.icon,e.label]},e.key))}),r.jsx(_,{children:r.jsx($,{children:T.plans.map((e,s)=>r.jsxs(C,{$featured:e.featured,$category:i,children:[r.jsx(A,{className:"card-garland",children:["#ff0000","#FFD700","#00ff00","#00bfff","#ff0000","#FFD700","#00ff00"].map((e,a)=>r.jsx(v,{$color:e,$duration:1+1.5*Math.random(),$delay:.2*a},a))}),r.jsxs(B,{$category:i,children:[r.jsx(F,{children:e.name}),r.jsx(j,{children:e.duration})]}),r.jsx(P,{children:r.jsxs(k,{children:[e.price," ",r.jsx("span",{children:"฿"})]})}),r.jsx(M,{children:e.features.map((a,s)=>r.jsxs(z,{$category:i,$compact:e.features.length>5,$noBorder:s===e.features.length-1,children:[r.jsx(g,{}),a]},s))}),r.jsx(D,{as:"button",onClick:()=>(e=>{K(e),S(!0)})(e),$category:i,whileHover:{scale:1.02},whileTap:{scale:.98},children:a("pricing.select_plan")})]},`${i}-${s}`))},i)})]}),r.jsx(p,{isOpen:d,onClose:()=>S(!1),service:I?`${I.name} - ${I.duration}`:"",source:"Home - Pricing"})]})};export{PricingSection as default};
