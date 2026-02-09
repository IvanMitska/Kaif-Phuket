import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as s}from"./styled-components-CfKEYav0.js";import{u as r}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-DORsZxsB.js";const a=s.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,c=s.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,p=s.div`
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
`,o=s.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,t=s.p`
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
`,n=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`,m=s.button`
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
`,l=s.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,g=s.div`
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
`,d=s.div`
  flex: 1;
  margin-bottom: 1.5rem;
`,u=s.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: #133238;
  margin: 0 0 0.5rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
`,v=s.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(19, 50, 56, 0.55);
  font-weight: 400;
  margin: 0;
`,_=s.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 1.5rem;
  margin-top: auto;
  border-top: 1px solid rgba(19, 50, 56, 0.06);
`,h=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`,b=s.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.35);
`,y=s.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(19, 50, 56, 0.7);
`,f=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
`,x=s.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #133238;
  letter-spacing: -0.02em;
`,j=s.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  line-height: 1.5;
  color: rgba(19, 50, 56, 0.5);
  margin-top: 0.5rem;
`,w=s.div`
  text-align: center;
  margin-top: 3rem;
`,k=s.button`
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
`,ChevronDown=()=>i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"6 9 12 15 18 9"})}),ChevronUp=()=>i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"18 15 12 9 6 15"})}),SpaServicesSection=()=>{const{t:s}=r(),[F,$]=e.useState("massage"),[B,C]=e.useState(!1),A=(e=>({allServices:[{id:"thai-massage",name:e("spa.services.items.thai_massage.name","Традиционный тайский массаж"),category:"massage",durations:[60,90,120],prices:[600,750,1e3],description:e("spa.services.items.thai_massage.description","Классический тайский массаж на коврике"),popular:!0,image:"/images/spa/services/massage-thai.jpg"},{id:"oil-massage",name:e("spa.services.items.oil_massage.name","Масляный массаж"),category:"massage",durations:[60,90,120],prices:[650,800,950],description:e("spa.services.items.oil_massage.description","Расслабляющий массаж с натуральными маслами для глубокого восстановления"),popular:!0,image:"/images/spa/services/massage-oil.jpg"},{id:"foot-massage",name:e("spa.services.items.foot_massage.name","Массаж стоп"),category:"massage",durations:[60,90,120],prices:[450,700,850],description:e("spa.services.items.foot_massage.description","Традиционный тайский массаж стоп для снятия усталости"),popular:!0,image:"/images/spa/services/massage-foot.jpg"},{id:"oil-scrub",name:e("spa.services.items.oil_scrub.name","Масляный массаж + скраб"),category:"massage",durations:[60,90,120],prices:[800,950,1100],description:e("spa.services.items.oil_scrub.description","Комплексная процедура с пилингом и массажем"),popular:!0,image:"/images/spa/services/massage-scrub.jpg"},{id:"shoulders-legs",name:e("spa.services.items.shoulders_legs.name","Массаж плеч и ног"),category:"massage",durations:[60,90,120],prices:[500,750,900],description:e("spa.services.items.shoulders_legs.description","Специализированный массаж для снятия напряжения"),popular:!1,image:"/images/spa/services/massage-shoulders.jpg"},{id:"face-massage",name:e("spa.services.items.face_massage.name","Массаж лица"),category:"massage",durations:[60,90,120],prices:[500,650,800],description:e("spa.services.items.face_massage.description","Расслабляющий массаж лица для улучшения кровообращения"),popular:!1,image:"/images/spa/services/massage-face.jpg"},{id:"deep-thai",name:e("spa.services.items.deep_thai.name","Глубокий тайский массаж"),category:"massage",durations:[60,90,120],prices:[800,950,1100],description:e("spa.services.items.deep_thai.description","Интенсивный тайский массаж с глубокой проработкой мышц"),popular:!0,image:"/images/spa/services/massage-deep.jpg"},{id:"sport-massage",name:e("spa.services.items.sport_massage.name","Спортивный массаж"),category:"massage",durations:[60,120],prices:[800,1300],description:e("spa.services.items.sport_massage.description","Интенсивный массаж для восстановления после тренировок"),popular:!0,image:"/images/spa/services/massage-sport.jpg"},{id:"body-scrub",name:e("spa.services.items.body_scrub.name","Скрабирование тела"),category:"massage",durations:[30],prices:[500],description:e("spa.services.items.body_scrub.description","Отшелушивающая процедура для всего тела"),popular:!1,image:"/images/spa/services/scrub-body.jpg"},{id:"endosphere-full-body",name:e("spa.services.items.endosphere_full_body.name","Эндосфера-терапия всего тела (1 процедура)"),category:"endosphere",price:2e3,description:e("spa.services.items.endosphere_full_body.description","Эндосфера-терапия всего тела для коррекции фигуры"),popular:!0,image:"/images/beauty/services/endosphere-body.jpg"},{id:"endosphere-rf-lifting",name:e("spa.services.items.endosphere_rf_lifting.name","Эндосфера RF лифтинг"),category:"endosphere",price:1500,description:e("spa.services.items.endosphere_rf_lifting.description","Омолаживающий аппаратный массаж лица"),popular:!0,image:"/images/beauty/services/endosphere-face.jpg"},{id:"endosphere-6-procedures",name:e("spa.services.items.endosphere_6_procedures.name","Эндосфера-терапия (6 процедур)"),category:"endosphere",price:1e4,description:e("spa.services.items.endosphere_6_procedures.description","Выгодный пакет из 6 процедур"),popular:!0,image:"/images/beauty/services/endosphere-subscription.jpg"},{id:"endosphere-12-procedures",name:e("spa.services.items.endosphere_12_procedures.name","Эндосфера-терапия (12 процедур)"),category:"endosphere",price:18e3,description:e("spa.services.items.endosphere_12_procedures.description","Максимальный пакет из 12 процедур"),popular:!0,image:"/images/beauty/services/endosphere-subscription-max.jpg"},{id:"laser-armpits",name:e("spa.services.items.laser_armpits.name","Лазерная эпиляция подмышек"),category:"laser",price:1e3,description:e("spa.services.items.laser_armpits.description","Эпиляция подмышечных впадин"),popular:!0,image:"/images/beauty/services/laser-armpits.jpg"},{id:"laser-bikini",name:e("spa.services.items.laser_bikini.name","Лазерная эпиляция бикини"),category:"laser",price:1500,description:e("spa.services.items.laser_bikini.description","Эпиляция зоны бикини"),popular:!0,image:"/images/beauty/services/laser-bikini.jpg"},{id:"laser-deep-bikini",name:e("spa.services.items.laser_deep_bikini.name","Лазерная эпиляция глубокого бикини"),category:"laser",price:1800,description:e("spa.services.items.laser_deep_bikini.description","Эпиляция интимной зоны"),popular:!0,image:"/images/beauty/services/laser-deep-bikini.jpg"},{id:"laser-shins",name:e("spa.services.items.laser_shins.name","Лазерная эпиляция голеней"),category:"laser",price:1600,description:e("spa.services.items.laser_shins.description","Эпиляция голеней"),popular:!0,image:"/images/beauty/services/laser-shins.jpg"},{id:"laser-legs-full",name:e("spa.services.items.laser_legs_full.name","Лазерная эпиляция ног полностью"),category:"laser",price:2200,description:e("spa.services.items.laser_legs_full.description","Полная эпиляция ног"),popular:!0,image:"/images/beauty/services/laser-legs-full.jpg"},{id:"laser-small-area",name:e("spa.services.items.laser_small_area.name","Лазерная эпиляция малой зоны"),category:"laser",price:500,description:e("spa.services.items.laser_small_area.description","Эпиляция малых зон (линия живота, ареола, пальцы)"),popular:!1,image:"/images/beauty/services/laser-small.jpg"},{id:"laser-arms-full",name:e("spa.services.items.laser_arms_full.name","Лазерная эпиляция рук полностью"),category:"laser",price:1600,description:e("spa.services.items.laser_arms_full.description","Полная эпиляция рук"),popular:!1,image:"/images/beauty/services/laser-arms.jpg"},{id:"laser-lower-face",name:e("spa.services.items.laser_lower_face.name","Лазерная эпиляция нижней части лица"),category:"laser",price:500,description:e("spa.services.items.laser_lower_face.description","Эпиляция области подбородка"),popular:!1,image:"/images/beauty/services/laser-face.jpg"},{id:"complex-3-bikini-belly",name:e("spa.services.items.complex_3_bikini_belly.name","Комплекс: глубокий бикини + линия живота (3 процедуры)"),category:"laser-complex-3",price:5400,description:e("spa.services.items.complex_3_bikini_belly.description","Комплекс из 3 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-1.jpg"},{id:"complex-3-bikini-armpits",name:e("spa.services.items.complex_3_bikini_armpits.name","Комплекс: глубокий бикини + подмышки (3 процедуры)"),category:"laser-complex-3",price:6300,description:e("spa.services.items.complex_3_bikini_armpits.description","Популярный комплекс из 3 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-2.jpg"},{id:"complex-3-legs-armpits-bikini",name:e("spa.services.items.complex_3_legs_armpits_bikini.name","Комплекс: ноги полностью + подмышки + глубокий бикини (3 процедуры)"),category:"laser-complex-3",price:7200,description:e("spa.services.items.complex_3_legs_armpits_bikini.description","Максимальный комплекс из 3 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-3.jpg"},{id:"complex-3-armpits-bikini-shins",name:e("spa.services.items.complex_3_armpits_bikini_shins.name","Комплекс: подмышки + глубокий бикини + голени (3 процедуры)"),category:"laser-complex-3",price:6800,description:e("spa.services.items.complex_3_armpits_bikini_shins.description","Базовый комплекс из 3 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-4.jpg"},{id:"complex-5-bikini-belly",name:e("spa.services.items.complex_5_bikini_belly.name","Комплекс: глубокий бикини + линия живота (5 процедур)"),category:"laser-complex-5",price:8e3,description:e("spa.services.items.complex_5_bikini_belly.description","Комплекс из 5 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-1.jpg"},{id:"complex-5-bikini-armpits",name:e("spa.services.items.complex_5_bikini_armpits.name","Комплекс: глубокий бикини + подмышки (5 процедур)"),category:"laser-complex-5",price:9200,description:e("spa.services.items.complex_5_bikini_armpits.description","Популярный комплекс из 5 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-2.jpg"},{id:"complex-5-legs-armpits-bikini",name:e("spa.services.items.complex_5_legs_armpits_bikini.name","Комплекс: ноги полностью + подмышки + глубокий бикини (5 процедур)"),category:"laser-complex-5",price:13700,description:e("spa.services.items.complex_5_legs_armpits_bikini.description","Максимальный комплекс из 5 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-3.jpg"},{id:"complex-5-armpits-bikini-shins",name:e("spa.services.items.complex_5_armpits_bikini_shins.name","Комплекс: подмышки + глубокий бикини + голени (5 процедур)"),category:"laser-complex-5",price:6800,description:e("spa.services.items.complex_5_armpits_bikini_shins.description","Базовый комплекс из 5 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-4.jpg"},{id:"complex-5-all-body",name:e("spa.services.items.complex_5_all_body.name","Комплекс: все тело (5 процедур)"),category:"laser-complex-5",price:13500,description:e("spa.services.items.complex_5_all_body.description","Полный комплекс эпиляции всего тела"),popular:!0,image:"/images/beauty/services/laser-all-body.jpg"},{id:"haircut",name:e("spa.services.items.womens_haircut.name","Стрижка"),category:"hair-care",price:1e3,description:e("spa.services.items.womens_haircut.description","Профессиональная стрижка"),popular:!0,image:"/images/beauty/services/haircut.jpg"},{id:"bang-trim",name:e("spa.services.items.bangs_haircut.name","Стрижка челки"),category:"hair-care",price:500,description:e("spa.services.items.bangs_haircut.description","Коррекция и стрижка челки"),popular:!1,image:"/images/beauty/services/bangs-cut.jpg"},{id:"root-coloring",name:e("spa.services.items.coloring_roots.name","Окрашивание корней (1 тон)"),category:"hair-care",price:2e3,description:e("spa.services.items.coloring_roots.description","Окрашивание отросших корней"),popular:!0,image:"/images/beauty/services/hair-roots.jpg"},{id:"root-coloring-stretch",name:e("spa.services.items.coloring_stretching.name","Окрашивание корней + растяжка цвета по длине"),category:"hair-care",priceFrom:3500,description:e("spa.services.items.coloring_stretching.description","Сложное окрашивание с растяжкой цвета"),popular:!0,image:"/images/beauty/services/hair-stretching.jpg"},{id:"coloring-short",name:e("spa.services.items.coloring_short.name","Окрашивание в 1 тон (короткие волосы)"),category:"hair-care",priceFrom:2500,description:e("spa.services.items.coloring_short.description","Полное окрашивание коротких волос"),popular:!1,image:"/images/beauty/services/coloring-short.jpg"},{id:"coloring-medium",name:e("spa.services.items.coloring_medium.name","Окрашивание в 1 тон (средние волосы)"),category:"hair-care",priceFrom:3e3,description:e("spa.services.items.coloring_medium.description","Полное окрашивание волос средней длины"),popular:!0,image:"/images/beauty/services/coloring-medium.jpg"},{id:"coloring-long",name:e("spa.services.items.coloring_long.name","Окрашивание в 1 тон (длинные волосы)"),category:"hair-care",priceFrom:2500,description:e("spa.services.items.coloring_long.description","Полное окрашивание длинных волос"),popular:!0,image:"/images/beauty/services/coloring-long.jpg"},{id:"total-blond-short",name:e("spa.services.items.total_blond_short.name","Тотальный блонд (короткие волосы)"),category:"hair-care",price:5e3,description:e("spa.services.items.total_blond_short.description","Осветление коротких волос до блонда"),popular:!1,image:"/images/beauty/services/blond-short.jpg"},{id:"total-blond-medium",name:e("spa.services.items.total_blond_medium.name","Тотальный блонд (средние волосы)"),category:"hair-care",price:7e3,description:e("spa.services.items.total_blond_medium.description","Осветление волос средней длины до блонда"),popular:!0,image:"/images/beauty/services/blond-medium.jpg"},{id:"total-blond-long",name:e("spa.services.items.total_blond_long.name","Тотальный блонд (длинные волосы)"),category:"hair-care",price:8e3,description:e("spa.services.items.total_blond_long.description","Осветление длинных волос до блонда"),popular:!0,image:"/images/beauty/services/blond-long.jpg"},{id:"happiness-short",name:e("spa.services.items.happiness_short.name","Счастье для волос - Lebel (короткие волосы)"),category:"hair-care",price:2500,description:e("spa.services.items.happiness_short.description","Восстанавливающая процедура для коротких волос"),popular:!1,image:"/images/beauty/services/happiness-short.jpg"},{id:"happiness-medium",name:e("spa.services.items.happiness_medium.name","Счастье для волос - Lebel (средние волосы)"),category:"hair-care",price:3e3,description:e("spa.services.items.happiness_medium.description","Восстанавливающая процедура для волос средней длины"),popular:!0,image:"/images/beauty/services/happiness-medium.jpg"},{id:"happiness-long",name:e("spa.services.items.happiness_long.name","Счастье для волос - Lebel (длинные волосы)"),category:"hair-care",price:3500,description:e("spa.services.items.happiness_long.description","Восстанавливающая процедура для длинных волос"),popular:!0,image:"/images/beauty/services/happiness-long.jpg"},{id:"express-hair-care",name:e("spa.services.items.hair_express_care.name","Экспресс-уход за волосами"),category:"hair-care",price:500,description:e("spa.services.items.hair_express_care.description","Быстрая восстанавливающая процедура"),popular:!1,image:"/images/beauty/services/hair-express.jpg"},{id:"vietnamese-head-massage",name:e("spa.services.items.indian_head_massage.name","Вьетнамский массаж головы"),category:"hair-care",price:1600,description:e("spa.services.items.indian_head_massage.description","Традиционный вьетнамский массаж для роста волос"),popular:!0,image:"/images/beauty/services/vietnamese-massage.jpg"},{id:"manicure-no-coating",name:e("spa.services.items.manicure_no_coating.name","Маникюр без покрытия"),category:"manicure",price:600,description:e("spa.services.items.manicure_no_coating.description","Классический маникюр без покрытия"),popular:!0,image:"/images/beauty/services/manicure-classic.jpg"},{id:"manicure-base-coating",name:e("spa.services.items.manicure_base_coating.name","Маникюр с базовым покрытием"),category:"manicure",price:800,description:e("spa.services.items.manicure_base_coating.description","Маникюр с защитным базовым покрытием"),popular:!0,image:"/images/beauty/services/manicure-base.jpg"},{id:"manicure-gel-strengthening",name:e("spa.services.items.gel_strengthening_polish.name","Маникюр с гелевым укреплением"),category:"manicure",price:1500,description:e("spa.services.items.gel_strengthening_polish.description","Маникюр с укрепляющим гелевым покрытием"),popular:!0,image:"/images/beauty/services/manicure-gel.jpg"},{id:"nail-removal",name:e("spa.services.items.nail_removal.name","Снятие покрытия"),category:"manicure",price:200,description:e("spa.services.items.nail_removal.description","Безопасное снятие гелевого покрытия"),popular:!1,image:"/images/beauty/services/nail-removal.jpg"},{id:"nail-repair",name:e("spa.services.items.nail_repair.name","Ремонт ногтя"),category:"manicure",price:200,description:e("spa.services.items.nail_repair.description","Восстановление поврежденного ногтя"),popular:!1,image:"/images/beauty/services/nail-repair.jpg"},{id:"nail-design",name:e("spa.services.items.nail_design.name","Дизайн ногтей"),category:"manicure",priceFrom:50,description:e("spa.services.items.nail_design.description","Художественный дизайн ногтей"),popular:!0,image:"/images/beauty/services/nail-design.jpg"},{id:"french-manicure",name:e("spa.services.items.french_manicure.name","Французский маникюр"),category:"manicure",price:300,description:e("spa.services.items.french_manicure.description","Классический французский маникюр (доплата)"),popular:!0,image:"/images/beauty/services/french-manicure.jpg"},{id:"pedicure-no-coating",name:e("spa.services.items.pedicure_no_coating.name","Педикюр без покрытия"),category:"pedicure",price:600,description:e("spa.services.items.pedicure_no_coating.description","Классический педикюр без покрытия"),popular:!0,image:"/images/beauty/services/pedicure-classic.jpg"},{id:"pedicure-base-coating",name:e("spa.services.items.pedicure_base_coating.name","Педикюр с базовым покрытием"),category:"pedicure",price:800,description:e("spa.services.items.pedicure_base_coating.description","Педикюр с защитным покрытием"),popular:!0,image:"/images/beauty/services/pedicure-base.jpg"},{id:"pedicure-gel-strengthening",name:e("spa.services.items.gel_strengthening.name","Педикюр с гелевым укреплением"),category:"pedicure",price:1e3,description:e("spa.services.items.gel_strengthening.description","Педикюр с укрепляющим покрытием"),popular:!0,image:"/images/beauty/services/pedicure-gel.jpg"},{id:"full-pedicure-no-coating",name:e("spa.services.items.pedicure_full_no_coating.name","Полный педикюр без покрытия"),category:"pedicure",price:1200,description:e("spa.services.items.pedicure_full_no_coating.description","Комплексный уход за стопами"),popular:!0,image:"/images/beauty/services/pedicure-full.jpg"},{id:"full-pedicure-coating",name:e("spa.services.items.pedicure_full_coating.name","Полный педикюр с покрытием"),category:"pedicure",price:1500,description:e("spa.services.items.pedicure_full_coating.description","Комплексный уход с покрытием"),popular:!0,image:"/images/beauty/services/pedicure-full-coating.jpg"},{id:"callus-removal",name:e("spa.services.items.callus_removal.name","Удаление мозолей"),category:"pedicure",price:300,description:e("spa.services.items.callus_removal.description","Профессиональное удаление мозолей"),popular:!1,image:"/images/beauty/services/callus-removal.jpg"},{id:"pedicure-coating-removal",name:e("spa.services.items.pedicure_coating_removal.name","Снятие покрытия"),category:"pedicure",price:200,description:e("spa.services.items.pedicure_coating_removal.description","Снятие старого покрытия"),popular:!1,image:"/images/beauty/services/pedicure-removal.jpg"},{id:"pro-pedicure-no-coating",name:e("spa.services.items.pro_pedicure_no_coating.name","PRO мастер педикюр без покрытия"),category:"pro-pedicure",price:1e3,description:e("spa.services.items.pro_pedicure_no_coating.description","Профессиональный педикюр от мастера высокого класса"),popular:!0,image:"/images/beauty/services/pro-pedicure-classic.jpg"},{id:"pro-pedicure-base-coating",name:e("spa.services.items.pro_pedicure_base_coating.name","PRO мастер педикюр с базовым покрытием"),category:"pro-pedicure",price:1200,description:e("spa.services.items.pro_pedicure_base_coating.description","Профессиональный педикюр с покрытием"),popular:!0,image:"/images/beauty/services/pro-pedicure-base.jpg"},{id:"pro-pedicure-gel-strengthening",name:e("spa.services.items.pro_pedicure_gel_strengthening.name","PRO мастер педикюр с гелевым укреплением"),category:"pro-pedicure",price:1400,description:e("spa.services.items.pro_pedicure_gel_strengthening.description","Профессиональный педикюр с укреплением"),popular:!0,image:"/images/beauty/services/pro-pedicure-gel.jpg"},{id:"pro-full-pedicure-no-coating",name:e("spa.services.items.pro_full_pedicure_no_coating.name","PRO мастер полный педикюр без покрытия"),category:"pro-pedicure",price:1500,description:e("spa.services.items.pro_full_pedicure_no_coating.description","Комплексный профессиональный уход"),popular:!0,image:"/images/beauty/services/pro-pedicure-full.jpg"},{id:"pro-full-pedicure-coating",name:e("spa.services.items.pro_full_pedicure_coating.name","PRO мастер полный педикюр с покрытием"),category:"pro-pedicure",price:1800,description:e("spa.services.items.pro_full_pedicure_coating.description","Максимальный уход от профессионала"),popular:!0,image:"/images/beauty/services/pro-pedicure-full-coating.jpg"},{id:"pro-callus-removal",name:e("spa.services.items.pro_callus_removal.name","PRO мастер удаление мозолей"),category:"pro-pedicure",price:300,description:e("spa.services.items.pro_callus_removal.description","Профессиональное удаление мозолей"),popular:!1,image:"/images/beauty/services/pro-callus-removal.jpg"},{id:"pro-coating-removal",name:e("spa.services.items.pro_coating_removal.name","PRO мастер снятие покрытия"),category:"pro-pedicure",price:300,description:e("spa.services.items.pro_coating_removal.description","Профессиональное снятие покрытия"),popular:!1,image:"/images/beauty/services/pro-coating-removal.jpg"},{id:"pro-medical-pedicure",name:e("spa.services.items.pro_medical_pedicure.name","PRO мастер медицинский педикюр"),category:"pro-pedicure",price:2e3,description:e("spa.services.items.pro_medical_pedicure.description","Медицинский педикюр для проблемных стоп"),popular:!0,image:"/images/beauty/services/pro-medical-pedicure.jpg"},{id:"classic-eyelashes",name:e("spa.services.items.classic_eyelashes.name","Классическое наращивание ресниц"),category:"eyelashes",price:2200,description:e("spa.services.items.classic_eyelashes.description","Классическое наращивание ресниц 1:1"),popular:!0,image:"/images/beauty/services/eyelashes-classic.jpg"},{id:"volume-1-5d",name:e("spa.services.items.volume_1_5d.name","1.5D объем"),category:"eyelashes",price:2300,description:e("spa.services.items.volume_1_5d.description","Легкий объем для натурального эффекта"),popular:!0,image:"/images/beauty/services/eyelashes-1-5d.jpg"},{id:"volume-2d",name:e("spa.services.items.volume_2d.name","2D объем"),category:"eyelashes",price:2400,description:e("spa.services.items.volume_2d.description","Средний объем для выразительного взгляда"),popular:!0,image:"/images/beauty/services/eyelashes-2d.jpg"},{id:"volume-3d",name:e("spa.services.items.volume_3d.name","3D объем"),category:"eyelashes",price:2600,description:e("spa.services.items.volume_3d.description","Насыщенный объем для яркого образа"),popular:!0,image:"/images/beauty/services/eyelashes-3d.jpg"},{id:"hollywood-volume",name:e("spa.services.items.hollywood_volume.name","Голливудский объем"),category:"eyelashes",price:2900,description:e("spa.services.items.hollywood_volume.description","Максимальный объем для драматического эффекта"),popular:!0,image:"/images/beauty/services/eyelashes-hollywood.jpg"},{id:"eyelash-removal",name:e("spa.services.items.eyelash_removal.name","Снятие ресниц"),category:"eyelashes",price:300,description:e("spa.services.items.eyelash_removal.description","Безопасное снятие наращенных ресниц"),popular:!1,image:"/images/beauty/services/eyelash-removal.jpg"},{id:"brow-correction",name:e("spa.services.items.brow_correction.name","Коррекция бровей"),category:"brows",price:600,description:e("spa.services.items.brow_correction.description","Профессиональная коррекция формы бровей"),popular:!0,image:"/images/beauty/services/brow-correction.jpg"},{id:"brow-tinting",name:e("spa.services.items.brow_tinting.name","Окрашивание бровей"),category:"brows",price:600,description:e("spa.services.items.brow_tinting.description","Окрашивание бровей стойкой краской"),popular:!0,image:"/images/beauty/services/brow-tinting.jpg"},{id:"brow-correction-tinting",name:e("spa.services.items.brow_correction_tinting.name","Коррекция и окрашивание бровей"),category:"brows",price:1e3,description:e("spa.services.items.brow_correction_tinting.description","Комплексный уход за бровями"),popular:!0,image:"/images/beauty/services/brow-correction-tinting.jpg"},{id:"brow-lamination-complex",name:e("spa.services.items.brow_lamination_complex.name","Ламинирование + коррекция + окрашивание бровей"),category:"brows",price:1600,description:e("spa.services.items.brow_lamination_complex.description","Полный комплекс для идеальных бровей"),popular:!0,image:"/images/beauty/services/brow-lamination.jpg"},{id:"eyelash-lamination-tinting",name:e("spa.services.items.eyelash_lamination_tinting.name","Ламинирование + окрашивание ресниц"),category:"brows",price:1800,description:e("spa.services.items.eyelash_lamination_tinting.description","Ламинирование и окрашивание ресниц"),popular:!0,image:"/images/beauty/services/eyelash-lamination.jpg"},{id:"full-lamination-complex",name:e("spa.services.items.full_lamination_complex.name","Полный комплекс ламинирования"),category:"brows",price:3e3,description:e("spa.services.items.full_lamination_complex.description","Коррекция + окрашивание бровей + ламинирование + окрашивание ресниц"),popular:!0,image:"/images/beauty/services/full-lamination-complex.jpg"}],serviceCategories:[{id:"massage",name:e("spa.services.categories.massage","Массаж"),description:"Расслабляющие и лечебные массажи",icon:"",color:"linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)"},{id:"endosphere",name:e("spa.services.categories.endosphere","Эндосфера-терапия"),description:"Аппаратная коррекция фигуры",icon:"",color:"linear-gradient(135deg, #8B5A8C 0%, #9B6A9C 100%)"},{id:"laser",name:e("spa.services.categories.laser","Лазерная эпиляция"),description:"Современные технологии эпиляции",icon:"",color:"linear-gradient(135deg, #E8A87C 0%, #F8B88C 100%)"},{id:"laser-complex-3",name:e("spa.services.categories.laser-complex-3","Лазерные комплексы (3 процедуры)"),description:"Выгодные пакеты из 3 процедур",icon:"",color:"linear-gradient(135deg, #4A90B8 0%, #5AA0C8 100%)"},{id:"laser-complex-5",name:e("spa.services.categories.laser-complex-5","Лазерные комплексы (5 процедур)"),description:"Выгодные пакеты из 5 процедур",icon:"",color:"linear-gradient(135deg, #2D5B69 0%, #3D6B79 100%)"},{id:"hair-care",name:e("spa.services.categories.hair-care","Уход за волосами"),description:"Стрижки, окрашивание и уход",icon:"",color:"linear-gradient(135deg, #A8B8A8 0%, #B8C8B8 100%)"},{id:"manicure",name:e("spa.services.categories.manicure","Маникюр"),description:"Профессиональный уход за руками и ногтями",icon:"",color:"linear-gradient(135deg, #F8A8C8 0%, #F8B8D8 100%)"},{id:"pedicure",name:e("spa.services.categories.pedicure","Педикюр"),description:"Классический уход за стопами и ногтями",icon:"",color:"linear-gradient(135deg, #A8D8F8 0%, #B8E8FF 100%)"},{id:"pro-pedicure",name:e("spa.services.categories.pro-pedicure","PRO мастер педикюр"),description:"Профессиональный и медицинский педикюр",icon:"",color:"linear-gradient(135deg, #88C8E8 0%, #98D8F8 100%)"},{id:"eyelashes",name:e("spa.services.categories.eyelashes","Ресницы"),description:"Наращивание и уход за ресницами",icon:"",color:"linear-gradient(135deg, #D8A8F8 0%, #E8B8FF 100%)"},{id:"brows",name:e("spa.services.categories.brows","Брови и ресницы"),description:"Коррекция, окрашивание и ламинирование",icon:"",color:"linear-gradient(135deg, #C8D8A8 0%, #D8E8B8 100%)"}]}))(s),{allServices:P,serviceCategories:z}=A,D=["massage","manicure","pedicure","eyelashes","brows","hair-care","laser","endosphere"],S=z.filter(e=>D.includes(e.id)),J=(O=F,P.filter(e=>e.category===O));var O;const R=B?J:J.slice(0,6);e.useEffect(()=>{C(!1)},[F]),e.useEffect(()=>{var e;S.find(e=>e.id===F)||$((null==(e=S[0])?void 0:e.id)||"massage")},[]);const formatPrice=e=>e.durations&&e.prices?`${Math.min(...e.prices)} - ${Math.max(...e.prices)} ฿`:e.priceFrom&&e.priceTo?`${e.priceFrom} - ${e.priceTo} ฿`:e.priceFrom?s("spa.services.price_from",`от ${e.priceFrom} ฿`,{price:e.priceFrom}):`${e.price} ฿`,formatDurations=e=>e.durations&&e.prices?e.durations.map((i,r)=>s("spa.services.duration_price",`${i} мин - ${e.prices[r]} ฿`,{duration:i,price:e.prices[r]})).join(" · "):null,getDurationDisplay=e=>{if(e.durations){const i=Math.min(...e.durations),s=Math.max(...e.durations);return i===s?`${i} min`:`${i}-${s} min`}return e.duration?`${e.duration} min`:null};return i.jsx(a,{children:i.jsxs(c,{children:[i.jsx(p,{children:s("spa.services.badge","Services")}),i.jsx(o,{children:s("spa.services.title","Our Services")}),i.jsx(t,{children:s("spa.services.subtitle","Full range of SPA and Beauty services for your comfort and beauty")}),i.jsx(n,{children:S.map(e=>i.jsx(m,{$active:F===e.id,onClick:()=>$(e.id),children:e.name},e.id))}),i.jsx(l,{children:R.map(e=>i.jsxs(g,{children:[i.jsxs(d,{children:[i.jsx(u,{children:e.name}),i.jsx(v,{children:e.description}),formatDurations(e)&&i.jsx(j,{children:formatDurations(e)})]}),i.jsxs(_,{children:[i.jsx(h,{children:getDurationDisplay(e)&&i.jsxs(i.Fragment,{children:[i.jsx(b,{children:s("spa.services.duration_label","Duration")}),i.jsx(y,{children:getDurationDisplay(e)})]})}),i.jsxs(f,{children:[i.jsx(b,{children:s("spa.services.price_label","Price")}),i.jsx(x,{children:formatPrice(e)})]})]})]},e.id))},F),J.length>6&&i.jsx(w,{children:i.jsxs(k,{onClick:()=>C(!B),children:[B?s("spa.services.show_less","Show less"):s("spa.services.show_more",`Show ${J.length-6} more`,{count:J.length-6}),B?i.jsx(ChevronUp,{}):i.jsx(ChevronDown,{})]})})]})})};export{SpaServicesSection as default};
