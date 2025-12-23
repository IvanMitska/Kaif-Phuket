import{r as e,j as i}from"./react-core-DWAaPJsY.js";import{d as s}from"./styled-components-fuCKgGld.js";import{u as a}from"./i18n-core-DrMVsQFB.js";import{K as r,L as p}from"./heroicons-DSEs4UIN.js";import{m as o}from"./framer-motion-DOblPXrY.js";import"./vendor-misc-D8JVgYt7.js";const c=s.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.02) 0%, rgba(168, 197, 184, 0.01) 100%);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,t=s.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`,m=s.div`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`,n=s(o.h2)`
  font-size: 3rem;
  font-weight: 600;
  color: #5A6B5D;
  margin-bottom: 1rem;
  font-family: ${e=>e.theme.fonts.heading};
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
`,d=s(o.p)`
  font-size: 1.25rem;
  color: #7A8A7D;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0 1.5rem;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0 1rem;
    line-height: 1.5;
  }
`,l=s.div`
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`,g=s.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`,u=s(o.button)`
  padding: 0.75rem 1.5rem;
  background: ${e=>e.active?"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)":"rgba(255, 255, 255, 0.9)"};
  color: ${e=>e.active?"white":"#5A6B5D"};
  border: 2px solid ${e=>e.active?"#90B3A7":"rgba(144, 179, 167, 0.2)"};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    background: ${e=>e.active?"linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%)":"rgba(144, 179, 167, 0.15)"};
    border-color: #90B3A7;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.4rem;
    font-size: 0.9rem;
    border-radius: 25px;
    box-shadow: ${e=>e.active?"0 4px 12px rgba(144, 179, 167, 0.3)":"0 2px 8px rgba(0, 0, 0, 0.1)"};
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: ${e=>e.active?"0 6px 16px rgba(144, 179, 167, 0.4)":"0 4px 12px rgba(144, 179, 167, 0.2)"};
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
    border-radius: 20px;
  }
`,v=s(o.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 0;
  }
  
  @media (max-width: 480px) {
    gap: 2rem;
  }
`,_=s(o.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  height: auto;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    border-radius: 16px;
  }
`,h=s.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.8rem;
  }
`,b=s.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #5A6B5D;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`,y=s.p`
  color: #7A8A7D;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    font-size: 1.05rem;
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }
`,x=s.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #90B3A7;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
`,f=s.div`
  font-size: 0.9rem;
  color: #7A8A7D;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;s.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #E8A87C 0%, #F8B88C 100%);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(232, 168, 124, 0.3);
  
  @media (max-width: 768px) {
    top: 0.75rem;
    right: 0.75rem;
    padding: 0.25rem 0.6rem;
    font-size: 0.7rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    top: 0.6rem;
    right: 0.6rem;
    padding: 0.2rem 0.5rem;
    font-size: 0.65rem;
    border-radius: 10px;
  }
`;const j=s.div`
  text-align: center;
  margin-top: 3rem;
`,w=s(o.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #90B3A7;
  border: 2px solid #90B3A7;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: #90B3A7;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(144, 179, 167, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 1.75rem;
    font-size: 0.9rem;
  }
`,SpaServicesSection=()=>{const{t:s}=a(),[o,k]=e.useState("massage"),[A,B]=e.useState(!1),z=(e=>({allServices:[{id:"thai-massage",name:e("spa.services.items.thai_massage.name","Традиционный тайский массаж"),category:"massage",durations:[60,90,120],prices:[600,750,1e3],description:e("spa.services.items.thai_massage.description","Классический тайский массаж на коврике"),popular:!0,image:"/images/spa/services/massage-thai.jpg"},{id:"oil-massage",name:e("spa.services.items.oil_massage.name","Масляный массаж"),category:"massage",durations:[60,90,120],prices:[650,800,950],description:e("spa.services.items.oil_massage.description","Расслабляющий массаж с натуральными маслами для глубокого восстановления"),popular:!0,image:"/images/spa/services/massage-oil.jpg"},{id:"foot-massage",name:e("spa.services.items.foot_massage.name","Массаж стоп"),category:"massage",durations:[60,90,120],prices:[450,700,850],description:e("spa.services.items.foot_massage.description","Традиционный тайский массаж стоп для снятия усталости"),popular:!0,image:"/images/spa/services/massage-foot.jpg"},{id:"oil-scrub",name:e("spa.services.items.oil_scrub.name","Масляный массаж + скраб"),category:"massage",durations:[60,90,120],prices:[800,950,1100],description:e("spa.services.items.oil_scrub.description","Комплексная процедура с пилингом и массажем"),popular:!0,image:"/images/spa/services/massage-scrub.jpg"},{id:"shoulders-legs",name:e("spa.services.items.shoulders_legs.name","Массаж плеч и ног"),category:"massage",durations:[60,90,120],prices:[500,750,900],description:e("spa.services.items.shoulders_legs.description","Специализированный массаж для снятия напряжения"),popular:!1,image:"/images/spa/services/massage-shoulders.jpg"},{id:"face-massage",name:e("spa.services.items.face_massage.name","Массаж лица"),category:"massage",durations:[60,90,120],prices:[500,650,800],description:e("spa.services.items.face_massage.description","Расслабляющий массаж лица для улучшения кровообращения"),popular:!1,image:"/images/spa/services/massage-face.jpg"},{id:"deep-thai",name:e("spa.services.items.deep_thai.name","Глубокий тайский массаж"),category:"massage",durations:[60,90,120],prices:[800,950,1100],description:e("spa.services.items.deep_thai.description","Интенсивный тайский массаж с глубокой проработкой мышц"),popular:!0,image:"/images/spa/services/massage-deep.jpg"},{id:"sport-massage",name:e("spa.services.items.sport_massage.name","Спортивный массаж"),category:"massage",durations:[60,120],prices:[800,1300],description:e("spa.services.items.sport_massage.description","Интенсивный массаж для восстановления после тренировок"),popular:!0,image:"/images/spa/services/massage-sport.jpg"},{id:"body-scrub",name:e("spa.services.items.body_scrub.name","Скрабирование тела"),category:"massage",durations:[30],prices:[500],description:e("spa.services.items.body_scrub.description","Отшелушивающая процедура для всего тела"),popular:!1,image:"/images/spa/services/scrub-body.jpg"},{id:"endosphere-full-body",name:e("spa.services.items.endosphere_full_body.name","Эндосфера-терапия всего тела (1 процедура)"),category:"endosphere",price:2e3,description:e("spa.services.items.endosphere_full_body.description","Эндосфера-терапия всего тела для коррекции фигуры"),popular:!0,image:"/images/beauty/services/endosphere-body.jpg"},{id:"endosphere-rf-lifting",name:e("spa.services.items.endosphere_rf_lifting.name","Эндосфера RF лифтинг"),category:"endosphere",price:1500,description:e("spa.services.items.endosphere_rf_lifting.description","Омолаживающий аппаратный массаж лица"),popular:!0,image:"/images/beauty/services/endosphere-face.jpg"},{id:"endosphere-6-procedures",name:e("spa.services.items.endosphere_6_procedures.name","Эндосфера-терапия (6 процедур)"),category:"endosphere",price:1e4,description:e("spa.services.items.endosphere_6_procedures.description","Выгодный пакет из 6 процедур"),popular:!0,image:"/images/beauty/services/endosphere-subscription.jpg"},{id:"endosphere-12-procedures",name:e("spa.services.items.endosphere_12_procedures.name","Эндосфера-терапия (12 процедур)"),category:"endosphere",price:18e3,description:e("spa.services.items.endosphere_12_procedures.description","Максимальный пакет из 12 процедур"),popular:!0,image:"/images/beauty/services/endosphere-subscription-max.jpg"},{id:"laser-armpits",name:e("spa.services.items.laser_armpits.name","Лазерная эпиляция подмышек"),category:"laser",price:1e3,description:e("spa.services.items.laser_armpits.description","Эпиляция подмышечных впадин"),popular:!0,image:"/images/beauty/services/laser-armpits.jpg"},{id:"laser-bikini",name:e("spa.services.items.laser_bikini.name","Лазерная эпиляция бикини"),category:"laser",price:1500,description:e("spa.services.items.laser_bikini.description","Эпиляция зоны бикини"),popular:!0,image:"/images/beauty/services/laser-bikini.jpg"},{id:"laser-deep-bikini",name:e("spa.services.items.laser_deep_bikini.name","Лазерная эпиляция глубокого бикини"),category:"laser",price:1800,description:e("spa.services.items.laser_deep_bikini.description","Эпиляция интимной зоны"),popular:!0,image:"/images/beauty/services/laser-deep-bikini.jpg"},{id:"laser-shins",name:e("spa.services.items.laser_shins.name","Лазерная эпиляция голеней"),category:"laser",price:1600,description:e("spa.services.items.laser_shins.description","Эпиляция голеней"),popular:!0,image:"/images/beauty/services/laser-shins.jpg"},{id:"laser-legs-full",name:e("spa.services.items.laser_legs_full.name","Лазерная эпиляция ног полностью"),category:"laser",price:2200,description:e("spa.services.items.laser_legs_full.description","Полная эпиляция ног"),popular:!0,image:"/images/beauty/services/laser-legs-full.jpg"},{id:"laser-small-area",name:e("spa.services.items.laser_small_area.name","Лазерная эпиляция малой зоны"),category:"laser",price:500,description:e("spa.services.items.laser_small_area.description","Эпиляция малых зон (линия живота, ареола, пальцы)"),popular:!1,image:"/images/beauty/services/laser-small.jpg"},{id:"laser-arms-full",name:e("spa.services.items.laser_arms_full.name","Лазерная эпиляция рук полностью"),category:"laser",price:1600,description:e("spa.services.items.laser_arms_full.description","Полная эпиляция рук"),popular:!1,image:"/images/beauty/services/laser-arms.jpg"},{id:"laser-lower-face",name:e("spa.services.items.laser_lower_face.name","Лазерная эпиляция нижней части лица"),category:"laser",price:500,description:e("spa.services.items.laser_lower_face.description","Эпиляция области подбородка"),popular:!1,image:"/images/beauty/services/laser-face.jpg"},{id:"complex-3-bikini-belly",name:e("spa.services.items.complex_3_bikini_belly.name","Комплекс: глубокий бикини + линия живота (3 процедуры)"),category:"laser-complex-3",price:5400,description:e("spa.services.items.complex_3_bikini_belly.description","Комплекс из 3 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-1.jpg"},{id:"complex-3-bikini-armpits",name:e("spa.services.items.complex_3_bikini_armpits.name","Комплекс: глубокий бикини + подмышки (3 процедуры)"),category:"laser-complex-3",price:6300,description:e("spa.services.items.complex_3_bikini_armpits.description","Популярный комплекс из 3 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-2.jpg"},{id:"complex-3-legs-armpits-bikini",name:e("spa.services.items.complex_3_legs_armpits_bikini.name","Комплекс: ноги полностью + подмышки + глубокий бикини (3 процедуры)"),category:"laser-complex-3",price:7200,description:e("spa.services.items.complex_3_legs_armpits_bikini.description","Максимальный комплекс из 3 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-3.jpg"},{id:"complex-3-armpits-bikini-shins",name:e("spa.services.items.complex_3_armpits_bikini_shins.name","Комплекс: подмышки + глубокий бикини + голени (3 процедуры)"),category:"laser-complex-3",price:6800,description:e("spa.services.items.complex_3_armpits_bikini_shins.description","Базовый комплекс из 3 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-4.jpg"},{id:"complex-5-bikini-belly",name:e("spa.services.items.complex_5_bikini_belly.name","Комплекс: глубокий бикини + линия живота (5 процедур)"),category:"laser-complex-5",price:8e3,description:e("spa.services.items.complex_5_bikini_belly.description","Комплекс из 5 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-1.jpg"},{id:"complex-5-bikini-armpits",name:e("spa.services.items.complex_5_bikini_armpits.name","Комплекс: глубокий бикини + подмышки (5 процедур)"),category:"laser-complex-5",price:9200,description:e("spa.services.items.complex_5_bikini_armpits.description","Популярный комплекс из 5 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-2.jpg"},{id:"complex-5-legs-armpits-bikini",name:e("spa.services.items.complex_5_legs_armpits_bikini.name","Комплекс: ноги полностью + подмышки + глубокий бикини (5 процедур)"),category:"laser-complex-5",price:13700,description:e("spa.services.items.complex_5_legs_armpits_bikini.description","Максимальный комплекс из 5 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-3.jpg"},{id:"complex-5-armpits-bikini-shins",name:e("spa.services.items.complex_5_armpits_bikini_shins.name","Комплекс: подмышки + глубокий бикини + голени (5 процедур)"),category:"laser-complex-5",price:6800,description:e("spa.services.items.complex_5_armpits_bikini_shins.description","Базовый комплекс из 5 процедур"),popular:!0,image:"/images/beauty/services/laser-complex-4.jpg"},{id:"complex-5-all-body",name:e("spa.services.items.complex_5_all_body.name","Комплекс: все тело (5 процедур)"),category:"laser-complex-5",price:13500,description:e("spa.services.items.complex_5_all_body.description","Полный комплекс эпиляции всего тела"),popular:!0,image:"/images/beauty/services/laser-all-body.jpg"},{id:"haircut",name:e("spa.services.items.womens_haircut.name","Стрижка"),category:"hair-care",price:1e3,description:e("spa.services.items.womens_haircut.description","Профессиональная стрижка"),popular:!0,image:"/images/beauty/services/haircut.jpg"},{id:"bang-trim",name:e("spa.services.items.bangs_haircut.name","Стрижка челки"),category:"hair-care",price:500,description:e("spa.services.items.bangs_haircut.description","Коррекция и стрижка челки"),popular:!1,image:"/images/beauty/services/bangs-cut.jpg"},{id:"root-coloring",name:e("spa.services.items.coloring_roots.name","Окрашивание корней (1 тон)"),category:"hair-care",price:2e3,description:e("spa.services.items.coloring_roots.description","Окрашивание отросших корней"),popular:!0,image:"/images/beauty/services/hair-roots.jpg"},{id:"root-coloring-stretch",name:e("spa.services.items.coloring_stretching.name","Окрашивание корней + растяжка цвета по длине"),category:"hair-care",priceFrom:3500,description:e("spa.services.items.coloring_stretching.description","Сложное окрашивание с растяжкой цвета"),popular:!0,image:"/images/beauty/services/hair-stretching.jpg"},{id:"coloring-short",name:e("spa.services.items.coloring_short.name","Окрашивание в 1 тон (короткие волосы)"),category:"hair-care",priceFrom:2500,description:e("spa.services.items.coloring_short.description","Полное окрашивание коротких волос"),popular:!1,image:"/images/beauty/services/coloring-short.jpg"},{id:"coloring-medium",name:e("spa.services.items.coloring_medium.name","Окрашивание в 1 тон (средние волосы)"),category:"hair-care",priceFrom:3e3,description:e("spa.services.items.coloring_medium.description","Полное окрашивание волос средней длины"),popular:!0,image:"/images/beauty/services/coloring-medium.jpg"},{id:"coloring-long",name:e("spa.services.items.coloring_long.name","Окрашивание в 1 тон (длинные волосы)"),category:"hair-care",priceFrom:2500,description:e("spa.services.items.coloring_long.description","Полное окрашивание длинных волос"),popular:!0,image:"/images/beauty/services/coloring-long.jpg"},{id:"total-blond-short",name:e("spa.services.items.total_blond_short.name","Тотальный блонд (короткие волосы)"),category:"hair-care",price:5e3,description:e("spa.services.items.total_blond_short.description","Осветление коротких волос до блонда"),popular:!1,image:"/images/beauty/services/blond-short.jpg"},{id:"total-blond-medium",name:e("spa.services.items.total_blond_medium.name","Тотальный блонд (средние волосы)"),category:"hair-care",price:7e3,description:e("spa.services.items.total_blond_medium.description","Осветление волос средней длины до блонда"),popular:!0,image:"/images/beauty/services/blond-medium.jpg"},{id:"total-blond-long",name:e("spa.services.items.total_blond_long.name","Тотальный блонд (длинные волосы)"),category:"hair-care",price:8e3,description:e("spa.services.items.total_blond_long.description","Осветление длинных волос до блонда"),popular:!0,image:"/images/beauty/services/blond-long.jpg"},{id:"happiness-short",name:e("spa.services.items.happiness_short.name","Счастье для волос - Lebel (короткие волосы)"),category:"hair-care",price:2500,description:e("spa.services.items.happiness_short.description","Восстанавливающая процедура для коротких волос"),popular:!1,image:"/images/beauty/services/happiness-short.jpg"},{id:"happiness-medium",name:e("spa.services.items.happiness_medium.name","Счастье для волос - Lebel (средние волосы)"),category:"hair-care",price:3e3,description:e("spa.services.items.happiness_medium.description","Восстанавливающая процедура для волос средней длины"),popular:!0,image:"/images/beauty/services/happiness-medium.jpg"},{id:"happiness-long",name:e("spa.services.items.happiness_long.name","Счастье для волос - Lebel (длинные волосы)"),category:"hair-care",price:3500,description:e("spa.services.items.happiness_long.description","Восстанавливающая процедура для длинных волос"),popular:!0,image:"/images/beauty/services/happiness-long.jpg"},{id:"express-hair-care",name:e("spa.services.items.hair_express_care.name","Экспресс-уход за волосами"),category:"hair-care",price:500,description:e("spa.services.items.hair_express_care.description","Быстрая восстанавливающая процедура"),popular:!1,image:"/images/beauty/services/hair-express.jpg"},{id:"vietnamese-head-massage",name:e("spa.services.items.indian_head_massage.name","Вьетнамский массаж головы"),category:"hair-care",price:1600,description:e("spa.services.items.indian_head_massage.description","Традиционный вьетнамский массаж для роста волос"),popular:!0,image:"/images/beauty/services/vietnamese-massage.jpg"},{id:"manicure-no-coating",name:e("spa.services.items.manicure_no_coating.name","Маникюр без покрытия"),category:"manicure",price:600,description:e("spa.services.items.manicure_no_coating.description","Классический маникюр без покрытия"),popular:!0,image:"/images/beauty/services/manicure-classic.jpg"},{id:"manicure-base-coating",name:e("spa.services.items.manicure_base_coating.name","Маникюр с базовым покрытием"),category:"manicure",price:800,description:e("spa.services.items.manicure_base_coating.description","Маникюр с защитным базовым покрытием"),popular:!0,image:"/images/beauty/services/manicure-base.jpg"},{id:"manicure-gel-strengthening",name:e("spa.services.items.gel_strengthening_polish.name","Маникюр с гелевым укреплением"),category:"manicure",price:1500,description:e("spa.services.items.gel_strengthening_polish.description","Маникюр с укрепляющим гелевым покрытием"),popular:!0,image:"/images/beauty/services/manicure-gel.jpg"},{id:"nail-removal",name:e("spa.services.items.nail_removal.name","Снятие покрытия"),category:"manicure",price:200,description:e("spa.services.items.nail_removal.description","Безопасное снятие гелевого покрытия"),popular:!1,image:"/images/beauty/services/nail-removal.jpg"},{id:"nail-repair",name:e("spa.services.items.nail_repair.name","Ремонт ногтя"),category:"manicure",price:200,description:e("spa.services.items.nail_repair.description","Восстановление поврежденного ногтя"),popular:!1,image:"/images/beauty/services/nail-repair.jpg"},{id:"nail-design",name:e("spa.services.items.nail_design.name","Дизайн ногтей"),category:"manicure",priceFrom:50,description:e("spa.services.items.nail_design.description","Художественный дизайн ногтей"),popular:!0,image:"/images/beauty/services/nail-design.jpg"},{id:"french-manicure",name:e("spa.services.items.french_manicure.name","Французский маникюр"),category:"manicure",price:300,description:e("spa.services.items.french_manicure.description","Классический французский маникюр (доплата)"),popular:!0,image:"/images/beauty/services/french-manicure.jpg"},{id:"pedicure-no-coating",name:e("spa.services.items.pedicure_no_coating.name","Педикюр без покрытия"),category:"pedicure",price:600,description:e("spa.services.items.pedicure_no_coating.description","Классический педикюр без покрытия"),popular:!0,image:"/images/beauty/services/pedicure-classic.jpg"},{id:"pedicure-base-coating",name:e("spa.services.items.pedicure_base_coating.name","Педикюр с базовым покрытием"),category:"pedicure",price:800,description:e("spa.services.items.pedicure_base_coating.description","Педикюр с защитным покрытием"),popular:!0,image:"/images/beauty/services/pedicure-base.jpg"},{id:"pedicure-gel-strengthening",name:e("spa.services.items.gel_strengthening.name","Педикюр с гелевым укреплением"),category:"pedicure",price:1e3,description:e("spa.services.items.gel_strengthening.description","Педикюр с укрепляющим покрытием"),popular:!0,image:"/images/beauty/services/pedicure-gel.jpg"},{id:"full-pedicure-no-coating",name:e("spa.services.items.pedicure_full_no_coating.name","Полный педикюр без покрытия"),category:"pedicure",price:1200,description:e("spa.services.items.pedicure_full_no_coating.description","Комплексный уход за стопами"),popular:!0,image:"/images/beauty/services/pedicure-full.jpg"},{id:"full-pedicure-coating",name:e("spa.services.items.pedicure_full_coating.name","Полный педикюр с покрытием"),category:"pedicure",price:1500,description:e("spa.services.items.pedicure_full_coating.description","Комплексный уход с покрытием"),popular:!0,image:"/images/beauty/services/pedicure-full-coating.jpg"},{id:"callus-removal",name:e("spa.services.items.callus_removal.name","Удаление мозолей"),category:"pedicure",price:300,description:e("spa.services.items.callus_removal.description","Профессиональное удаление мозолей"),popular:!1,image:"/images/beauty/services/callus-removal.jpg"},{id:"pedicure-coating-removal",name:e("spa.services.items.pedicure_coating_removal.name","Снятие покрытия"),category:"pedicure",price:200,description:e("spa.services.items.pedicure_coating_removal.description","Снятие старого покрытия"),popular:!1,image:"/images/beauty/services/pedicure-removal.jpg"},{id:"pro-pedicure-no-coating",name:e("spa.services.items.pro_pedicure_no_coating.name","PRO мастер педикюр без покрытия"),category:"pro-pedicure",price:1e3,description:e("spa.services.items.pro_pedicure_no_coating.description","Профессиональный педикюр от мастера высокого класса"),popular:!0,image:"/images/beauty/services/pro-pedicure-classic.jpg"},{id:"pro-pedicure-base-coating",name:e("spa.services.items.pro_pedicure_base_coating.name","PRO мастер педикюр с базовым покрытием"),category:"pro-pedicure",price:1200,description:e("spa.services.items.pro_pedicure_base_coating.description","Профессиональный педикюр с покрытием"),popular:!0,image:"/images/beauty/services/pro-pedicure-base.jpg"},{id:"pro-pedicure-gel-strengthening",name:e("spa.services.items.pro_pedicure_gel_strengthening.name","PRO мастер педикюр с гелевым укреплением"),category:"pro-pedicure",price:1400,description:e("spa.services.items.pro_pedicure_gel_strengthening.description","Профессиональный педикюр с укреплением"),popular:!0,image:"/images/beauty/services/pro-pedicure-gel.jpg"},{id:"pro-full-pedicure-no-coating",name:e("spa.services.items.pro_full_pedicure_no_coating.name","PRO мастер полный педикюр без покрытия"),category:"pro-pedicure",price:1500,description:e("spa.services.items.pro_full_pedicure_no_coating.description","Комплексный профессиональный уход"),popular:!0,image:"/images/beauty/services/pro-pedicure-full.jpg"},{id:"pro-full-pedicure-coating",name:e("spa.services.items.pro_full_pedicure_coating.name","PRO мастер полный педикюр с покрытием"),category:"pro-pedicure",price:1800,description:e("spa.services.items.pro_full_pedicure_coating.description","Максимальный уход от профессионала"),popular:!0,image:"/images/beauty/services/pro-pedicure-full-coating.jpg"},{id:"pro-callus-removal",name:e("spa.services.items.pro_callus_removal.name","PRO мастер удаление мозолей"),category:"pro-pedicure",price:300,description:e("spa.services.items.pro_callus_removal.description","Профессиональное удаление мозолей"),popular:!1,image:"/images/beauty/services/pro-callus-removal.jpg"},{id:"pro-coating-removal",name:e("spa.services.items.pro_coating_removal.name","PRO мастер снятие покрытия"),category:"pro-pedicure",price:300,description:e("spa.services.items.pro_coating_removal.description","Профессиональное снятие покрытия"),popular:!1,image:"/images/beauty/services/pro-coating-removal.jpg"},{id:"pro-medical-pedicure",name:e("spa.services.items.pro_medical_pedicure.name","PRO мастер медицинский педикюр"),category:"pro-pedicure",price:2e3,description:e("spa.services.items.pro_medical_pedicure.description","Медицинский педикюр для проблемных стоп"),popular:!0,image:"/images/beauty/services/pro-medical-pedicure.jpg"},{id:"classic-eyelashes",name:e("spa.services.items.classic_eyelashes.name","Классическое наращивание ресниц"),category:"eyelashes",price:2200,description:e("spa.services.items.classic_eyelashes.description","Классическое наращивание ресниц 1:1"),popular:!0,image:"/images/beauty/services/eyelashes-classic.jpg"},{id:"volume-1-5d",name:e("spa.services.items.volume_1_5d.name","1.5D объем"),category:"eyelashes",price:2300,description:e("spa.services.items.volume_1_5d.description","Легкий объем для натурального эффекта"),popular:!0,image:"/images/beauty/services/eyelashes-1-5d.jpg"},{id:"volume-2d",name:e("spa.services.items.volume_2d.name","2D объем"),category:"eyelashes",price:2400,description:e("spa.services.items.volume_2d.description","Средний объем для выразительного взгляда"),popular:!0,image:"/images/beauty/services/eyelashes-2d.jpg"},{id:"volume-3d",name:e("spa.services.items.volume_3d.name","3D объем"),category:"eyelashes",price:2600,description:e("spa.services.items.volume_3d.description","Насыщенный объем для яркого образа"),popular:!0,image:"/images/beauty/services/eyelashes-3d.jpg"},{id:"hollywood-volume",name:e("spa.services.items.hollywood_volume.name","Голливудский объем"),category:"eyelashes",price:2900,description:e("spa.services.items.hollywood_volume.description","Максимальный объем для драматического эффекта"),popular:!0,image:"/images/beauty/services/eyelashes-hollywood.jpg"},{id:"eyelash-removal",name:e("spa.services.items.eyelash_removal.name","Снятие ресниц"),category:"eyelashes",price:300,description:e("spa.services.items.eyelash_removal.description","Безопасное снятие наращенных ресниц"),popular:!1,image:"/images/beauty/services/eyelash-removal.jpg"},{id:"brow-correction",name:e("spa.services.items.brow_correction.name","Коррекция бровей"),category:"brows",price:600,description:e("spa.services.items.brow_correction.description","Профессиональная коррекция формы бровей"),popular:!0,image:"/images/beauty/services/brow-correction.jpg"},{id:"brow-tinting",name:e("spa.services.items.brow_tinting.name","Окрашивание бровей"),category:"brows",price:600,description:e("spa.services.items.brow_tinting.description","Окрашивание бровей стойкой краской"),popular:!0,image:"/images/beauty/services/brow-tinting.jpg"},{id:"brow-correction-tinting",name:e("spa.services.items.brow_correction_tinting.name","Коррекция и окрашивание бровей"),category:"brows",price:1e3,description:e("spa.services.items.brow_correction_tinting.description","Комплексный уход за бровями"),popular:!0,image:"/images/beauty/services/brow-correction-tinting.jpg"},{id:"brow-lamination-complex",name:e("spa.services.items.brow_lamination_complex.name","Ламинирование + коррекция + окрашивание бровей"),category:"brows",price:1600,description:e("spa.services.items.brow_lamination_complex.description","Полный комплекс для идеальных бровей"),popular:!0,image:"/images/beauty/services/brow-lamination.jpg"},{id:"eyelash-lamination-tinting",name:e("spa.services.items.eyelash_lamination_tinting.name","Ламинирование + окрашивание ресниц"),category:"brows",price:1800,description:e("spa.services.items.eyelash_lamination_tinting.description","Ламинирование и окрашивание ресниц"),popular:!0,image:"/images/beauty/services/eyelash-lamination.jpg"},{id:"full-lamination-complex",name:e("spa.services.items.full_lamination_complex.name","Полный комплекс ламинирования"),category:"brows",price:3e3,description:e("spa.services.items.full_lamination_complex.description","Коррекция + окрашивание бровей + ламинирование + окрашивание ресниц"),popular:!0,image:"/images/beauty/services/full-lamination-complex.jpg"}],serviceCategories:[{id:"massage",name:e("spa.services.categories.massage","Массаж"),description:"Расслабляющие и лечебные массажи",icon:"",color:"linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)"},{id:"endosphere",name:e("spa.services.categories.endosphere","Эндосфера-терапия"),description:"Аппаратная коррекция фигуры",icon:"",color:"linear-gradient(135deg, #8B5A8C 0%, #9B6A9C 100%)"},{id:"laser",name:e("spa.services.categories.laser","Лазерная эпиляция"),description:"Современные технологии эпиляции",icon:"",color:"linear-gradient(135deg, #E8A87C 0%, #F8B88C 100%)"},{id:"laser-complex-3",name:e("spa.services.categories.laser-complex-3","Лазерные комплексы (3 процедуры)"),description:"Выгодные пакеты из 3 процедур",icon:"",color:"linear-gradient(135deg, #4A90B8 0%, #5AA0C8 100%)"},{id:"laser-complex-5",name:e("spa.services.categories.laser-complex-5","Лазерные комплексы (5 процедур)"),description:"Выгодные пакеты из 5 процедур",icon:"",color:"linear-gradient(135deg, #2D5B69 0%, #3D6B79 100%)"},{id:"hair-care",name:e("spa.services.categories.hair-care","Уход за волосами"),description:"Стрижки, окрашивание и уход",icon:"",color:"linear-gradient(135deg, #A8B8A8 0%, #B8C8B8 100%)"},{id:"manicure",name:e("spa.services.categories.manicure","Маникюр"),description:"Профессиональный уход за руками и ногтями",icon:"",color:"linear-gradient(135deg, #F8A8C8 0%, #F8B8D8 100%)"},{id:"pedicure",name:e("spa.services.categories.pedicure","Педикюр"),description:"Классический уход за стопами и ногтями",icon:"",color:"linear-gradient(135deg, #A8D8F8 0%, #B8E8FF 100%)"},{id:"pro-pedicure",name:e("spa.services.categories.pro-pedicure","PRO мастер педикюр"),description:"Профессиональный и медицинский педикюр",icon:"",color:"linear-gradient(135deg, #88C8E8 0%, #98D8F8 100%)"},{id:"eyelashes",name:e("spa.services.categories.eyelashes","Ресницы"),description:"Наращивание и уход за ресницами",icon:"",color:"linear-gradient(135deg, #D8A8F8 0%, #E8B8FF 100%)"},{id:"brows",name:e("spa.services.categories.brows","Брови и ресницы"),description:"Коррекция, окрашивание и ламинирование",icon:"",color:"linear-gradient(135deg, #C8D8A8 0%, #D8E8B8 100%)"}]}))(s),{allServices:F,serviceCategories:C}=z,D=["massage","manicure","pedicure","eyelashes","brows","hair-care","laser","endosphere"],$=C.filter(e=>D.includes(e.id)),P=(R=o,F.filter(e=>e.category===R));var R;const O=A?P:P.slice(0,6);e.useEffect(()=>{B(!1)},[o]),e.useEffect(()=>{var e;$.find(e=>e.id===o)||k((null==(e=$[0])?void 0:e.id)||"massage")},[]);const formatPrice=e=>e.durations&&e.prices?`${Math.min(...e.prices)} - ${Math.max(...e.prices)} ฿`:e.priceFrom&&e.priceTo?`${e.priceFrom} - ${e.priceTo} ฿`:e.priceFrom?s("spa.services.price_from",`от ${e.priceFrom} ฿`,{price:e.priceFrom}):`${e.price} ฿`,formatDurations=e=>e.durations&&e.prices?e.durations.map((i,a)=>s("spa.services.duration_price",`${i} мин - ${e.prices[a]} ฿`,{duration:i,price:e.prices[a]})).join(" • "):null;return i.jsx(c,{children:i.jsxs(t,{children:[i.jsxs(m,{children:[i.jsx(n,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:s("spa.services.title","Наши услуги")}),i.jsx(d,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:s("spa.services.subtitle","Полный спектр SPA и Beauty услуг для вашего комфорта и красоты")})]}),i.jsx(l,{children:i.jsx(g,{children:$.map((e,s)=>i.jsx(u,{active:o===e.id,onClick:()=>k(e.id),initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.4,delay:.1*s},viewport:{once:!0},whileHover:{scale:1.05},whileTap:{scale:.95},children:e.name},e.id))})}),i.jsx(v,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:O.map((e,s)=>(C.find(i=>i.id===e.category),i.jsx(_,{layout:!0,initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-30},transition:{duration:.5,delay:.1*s},whileHover:{scale:1.02},onClick:()=>{},children:i.jsxs(h,{children:[i.jsx(b,{children:e.name}),i.jsx(y,{children:e.description}),i.jsx(x,{children:formatPrice(e)}),formatDurations(e)&&i.jsxs(f,{children:["⏱ ",formatDurations(e)]})]})},e.id)))},o),P.length>6&&i.jsx(j,{children:i.jsxs(w,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>B(!A),children:[A?s("spa.services.show_less","Показать меньше"):s("spa.services.show_more",`Показать ещё ${P.length-6} услуг`,{count:P.length-6}),A?i.jsx(r,{}):i.jsx(p,{})]})})]})})};export{SpaServicesSection as default};
