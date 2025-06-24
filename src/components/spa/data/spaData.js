// Данные услуг SPA и Салона красоты KAIF
// Обновлено: Январь 2025 - Актуальные услуги и цены

export const getSpaData = (t) => {
  // МАССАЖ
  const massageServices = [
    {
      id: 'thai-massage',
      name: t('spa.services.items.thai_massage.name', 'Традиционный тайский массаж'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [600, 750, 1000],
      description: t('spa.services.items.thai_massage.description', 'Классический тайский массаж на коврике'),
      popular: true,
      image: '/images/spa/services/massage-thai.jpg'
    },
    {
      id: 'oil-massage',
      name: t('spa.services.items.oil_massage.name', 'Масляный массаж'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [650, 800, 950],
      description: t('spa.services.items.oil_massage.description', 'Расслабляющий массаж с натуральными маслами для глубокого восстановления'),
      popular: true,
      image: '/images/spa/services/massage-oil.jpg'
    },
    {
      id: 'foot-massage',
      name: t('spa.services.items.foot_massage.name', 'Массаж стоп'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [450, 700, 850],
      description: t('spa.services.items.foot_massage.description', 'Традиционный тайский массаж стоп для снятия усталости'),
      popular: true,
      image: '/images/spa/services/massage-foot.jpg'
    },
    {
      id: 'oil-scrub',
      name: t('spa.services.items.oil_scrub.name', 'Масляный массаж + скраб'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [800, 950, 1100],
      description: t('spa.services.items.oil_scrub.description', 'Комплексная процедура с пилингом и массажем'),
      popular: true,
      image: '/images/spa/services/massage-scrub.jpg'
    },
    {
      id: 'shoulders-legs',
      name: t('spa.services.items.shoulders_legs.name', 'Массаж плеч и ног'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [500, 750, 900],
      description: t('spa.services.items.shoulders_legs.description', 'Специализированный массаж для снятия напряжения'),
      popular: false,
      image: '/images/spa/services/massage-shoulders.jpg'
    },
    {
      id: 'face-massage',
      name: t('spa.services.items.face_massage.name', 'Массаж лица'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [500, 650, 800],
      description: t('spa.services.items.face_massage.description', 'Расслабляющий массаж лица для улучшения кровообращения'),
      popular: false,
      image: '/images/spa/services/massage-face.jpg'
    },
    {
      id: 'deep-thai',
      name: t('spa.services.items.deep_thai.name', 'Глубокий тайский массаж'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [800, 950, 1100],
      description: t('spa.services.items.deep_thai.description', 'Интенсивный тайский массаж с глубокой проработкой мышц'),
      popular: true,
      image: '/images/spa/services/massage-deep.jpg'
    },
    {
      id: 'sport-massage',
      name: t('spa.services.items.sport_massage.name', 'Спортивный массаж'),
      category: 'massage',
      durations: [60, 120],
      prices: [800, 1300],
      description: t('spa.services.items.sport_massage.description', 'Интенсивный массаж для восстановления после тренировок'),
      popular: true,
      image: '/images/spa/services/massage-sport.jpg'
    },
    {
      id: 'body-scrub',
      name: t('spa.services.items.body_scrub.name', 'Скрабирование тела'),
      category: 'massage',
      durations: [30],
      prices: [500],
      description: t('spa.services.items.body_scrub.description', 'Отшелушивающая процедура для всего тела'),
      popular: false,
      image: '/images/spa/services/scrub-body.jpg'
    }
  ];

  // ЭНДОСФЕРА-ТЕРАПИЯ
  const endosphereServices = [
    {
      id: 'endosphere-full-body',
      name: t('spa.services.items.endosphere_full_body.name', 'Эндосфера-терапия всего тела (1 процедура)'),
      category: 'endosphere',
      price: 2000,
      description: t('spa.services.items.endosphere_full_body.description', 'Эндосфера-терапия всего тела для коррекции фигуры'),
      popular: true,
      image: '/images/beauty/services/endosphere-body.jpg'
    },
    {
      id: 'endosphere-face',
      name: t('spa.services.items.endosphere_face.name', 'Эндосфера RF лифтинг'),
      category: 'endosphere',
      price: 1500,
      description: t('spa.services.items.endosphere_face.description', 'Омолаживающий аппаратный массаж лица'),
      popular: true,
      image: '/images/beauty/services/endosphere-face.jpg'
    },
    {
      id: 'endosphere-subscription-6',
      name: t('spa.services.items.endosphere_subscription_6.name', 'Эндосфера-терапия (6 процедур)'),
      category: 'endosphere',
      price: 10000,
      description: t('spa.services.items.endosphere_subscription_6.description', 'Выгодный пакет из 6 процедур'),
      popular: true,
      image: '/images/beauty/services/endosphere-subscription.jpg'
    },
    {
      id: 'endosphere-subscription-12',
      name: t('spa.services.items.endosphere_subscription_12.name', 'Эндосфера-терапия (12 процедур)'),
      category: 'endosphere',
      price: 18000,
      description: t('spa.services.items.endosphere_subscription_12.description', 'Максимальный пакет из 12 процедур'),
      popular: true,
      image: '/images/beauty/services/endosphere-subscription-max.jpg'
    }
  ];

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ
  const laserServices = [
    {
      id: 'laser-armpits',
      name: t('spa.services.items.laser_armpits.name', 'Лазерная эпиляция подмышек'),
      category: 'laser',
      price: 1000,
      description: t('spa.services.items.laser_armpits.description', 'Эпиляция подмышечных впадин'),
      popular: true,
      image: '/images/beauty/services/laser-armpits.jpg'
    },
    {
      id: 'laser-bikini',
      name: t('spa.services.items.laser_bikini.name', 'Лазерная эпиляция бикини'),
      category: 'laser',
      price: 1500,
      description: t('spa.services.items.laser_bikini.description', 'Эпиляция зоны бикини'),
      popular: true,
      image: '/images/beauty/services/laser-bikini.jpg'
    },
    {
      id: 'laser-deep-bikini',
      name: t('spa.services.items.laser_deep_bikini.name', 'Лазерная эпиляция глубокого бикини'),
      category: 'laser',
      price: 1800,
      description: t('spa.services.items.laser_deep_bikini.description', 'Эпиляция интимной зоны'),
      popular: true,
      image: '/images/beauty/services/laser-deep-bikini.jpg'
    },
    {
      id: 'laser-shins',
      name: t('spa.services.items.laser_shins.name', 'Лазерная эпиляция голеней'),
      category: 'laser',
      price: 1600,
      description: t('spa.services.items.laser_shins.description', 'Эпиляция голеней'),
      popular: true,
      image: '/images/beauty/services/laser-shins.jpg'
    },
    {
      id: 'laser-legs-full',
      name: t('spa.services.items.laser_legs_full.name', 'Лазерная эпиляция ног полностью'),
      category: 'laser',
      price: 2200,
      description: t('spa.services.items.laser_legs_full.description', 'Полная эпиляция ног'),
      popular: true,
      image: '/images/beauty/services/laser-legs-full.jpg'
    },
    {
      id: 'laser-small-area',
      name: t('spa.services.items.laser_small_area.name', 'Лазерная эпиляция малой зоны'),
      category: 'laser',
      price: 500,
      description: t('spa.services.items.laser_small_area.description', 'Эпиляция малых зон (линия живота, ареола, пальцы)'),
      popular: false,
      image: '/images/beauty/services/laser-small.jpg'
    },
    {
      id: 'laser-arms-full',
      name: t('spa.services.items.laser_arms_full.name', 'Лазерная эпиляция рук полностью'),
      category: 'laser',
      price: 1600,
      description: t('spa.services.items.laser_arms_full.description', 'Полная эпиляция рук'),
      popular: false,
      image: '/images/beauty/services/laser-arms.jpg'
    },
    {
      id: 'laser-lower-face',
      name: t('spa.services.items.laser_lower_face.name', 'Лазерная эпиляция нижней части лица'),
      category: 'laser',
      price: 500,
      description: t('spa.services.items.laser_lower_face.description', 'Эпиляция области подбородка'),
      popular: false,
      image: '/images/beauty/services/laser-face.jpg'
    }
  ];

  // ЛАЗЕРНЫЕ КОМПЛЕКСЫ (3 процедуры)
  const laserComplex3Services = [
    {
      id: 'complex-3-bikini-belly',
      name: t('spa.services.items.complex_3_bikini_belly.name', 'Комплекс: глубокий бикини + линия живота (3 процедуры)'),
      category: 'laser-complex-3',
      price: 5400,
      description: t('spa.services.items.complex_3_bikini_belly.description', 'Комплекс из 3 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-1.jpg'
    },
    {
      id: 'complex-3-bikini-armpits',
      name: t('spa.services.items.complex_3_bikini_armpits.name', 'Комплекс: глубокий бикини + подмышки (3 процедуры)'),
      category: 'laser-complex-3',
      price: 6300,
      description: t('spa.services.items.complex_3_bikini_armpits.description', 'Популярный комплекс из 3 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-2.jpg'
    },
    {
      id: 'complex-3-legs-armpits-bikini',
      name: t('spa.services.items.complex_3_legs_armpits_bikini.name', 'Комплекс: ноги полностью + подмышки + глубокий бикини (3 процедуры)'),
      category: 'laser-complex-3',
      price: 7200,
      description: t('spa.services.items.complex_3_legs_armpits_bikini.description', 'Максимальный комплекс из 3 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-3.jpg'
    },
    {
      id: 'complex-3-armpits-bikini-shins',
      name: t('spa.services.items.complex_3_armpits_bikini_shins.name', 'Комплекс: подмышки + глубокий бикини + голени (3 процедуры)'),
      category: 'laser-complex-3',
      price: 6800,
      description: t('spa.services.items.complex_3_armpits_bikini_shins.description', 'Базовый комплекс из 3 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-4.jpg'
    }
  ];

  // ЛАЗЕРНЫЕ КОМПЛЕКСЫ (5 процедур)
  const laserComplex5Services = [
    {
      id: 'complex-5-bikini-belly',
      name: t('spa.services.items.complex_5_bikini_belly.name', 'Комплекс: глубокий бикини + линия живота (5 процедур)'),
      category: 'laser-complex-5',
      price: 8000,
      description: t('spa.services.items.complex_5_bikini_belly.description', 'Комплекс из 5 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-1.jpg'
    },
    {
      id: 'complex-5-bikini-armpits',
      name: t('spa.services.items.complex_5_bikini_armpits.name', 'Комплекс: глубокий бикини + подмышки (5 процедур)'),
      category: 'laser-complex-5',
      price: 9200,
      description: t('spa.services.items.complex_5_bikini_armpits.description', 'Популярный комплекс из 5 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-2.jpg'
    },
    {
      id: 'complex-5-legs-armpits-bikini',
      name: t('spa.services.items.complex_5_legs_armpits_bikini.name', 'Комплекс: ноги полностью + подмышки + глубокий бикини (5 процедур)'),
      category: 'laser-complex-5',
      price: 13700,
      description: t('spa.services.items.complex_5_legs_armpits_bikini.description', 'Максимальный комплекс из 5 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-3.jpg'
    },
    {
      id: 'complex-5-armpits-bikini-shins',
      name: t('spa.services.items.complex_5_armpits_bikini_shins.name', 'Комплекс: подмышки + глубокий бикини + голени (5 процедур)'),
      category: 'laser-complex-5',
      price: 6800,
      description: t('spa.services.items.complex_5_armpits_bikini_shins.description', 'Базовый комплекс из 5 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-4.jpg'
    },
    {
      id: 'complex-5-all-body',
      name: t('spa.services.items.complex_5_all_body.name', 'Комплекс: все тело (5 процедур)'),
      category: 'laser-complex-5',
      price: 13500,
      description: t('spa.services.items.complex_5_all_body.description', 'Полный комплекс эпиляции всего тела'),
      popular: true,
      image: '/images/beauty/services/laser-all-body.jpg'
    }
  ];

  // УХОД ЗА ВОЛОСАМИ
  const hairServices = [
    {
      id: 'haircut',
      name: t('spa.services.items.haircut.name', 'Стрижка'),
      category: 'hair-care',
      price: 1000,
      description: t('spa.services.items.haircut.description', 'Профессиональная стрижка'),
      popular: true,
      image: '/images/beauty/services/haircut.jpg'
    },
    {
      id: 'bang-trim',
      name: t('spa.services.items.bang_trim.name', 'Стрижка челки'),
      category: 'hair-care',
      price: 500,
      description: t('spa.services.items.bang_trim.description', 'Коррекция и стрижка челки'),
      popular: false,
      image: '/images/beauty/services/bangs-cut.jpg'
    },
    {
      id: 'root-coloring',
      name: t('spa.services.items.root_coloring.name', 'Окрашивание корней (1 тон)'),
      category: 'hair-care',
      price: 2000,
      description: t('spa.services.items.root_coloring.description', 'Окрашивание отросших корней'),
      popular: true,
      image: '/images/beauty/services/hair-roots.jpg'
    },
    {
      id: 'root-coloring-stretch',
      name: t('spa.services.items.root_coloring_stretch.name', 'Окрашивание корней + растяжка цвета по длине'),
      category: 'hair-care',
      priceFrom: 3500,
      description: t('spa.services.items.root_coloring_stretch.description', 'Сложное окрашивание с растяжкой цвета'),
      popular: true,
      image: '/images/beauty/services/hair-stretching.jpg'
    },
    {
      id: 'coloring-short',
      name: t('spa.services.items.coloring_short.name', 'Окрашивание в 1 тон (короткие волосы)'),
      category: 'hair-care',
      priceFrom: 2500,
      description: t('spa.services.items.coloring_short.description', 'Полное окрашивание коротких волос'),
      popular: false,
      image: '/images/beauty/services/coloring-short.jpg'
    },
    {
      id: 'coloring-medium',
      name: t('spa.services.items.coloring_medium.name', 'Окрашивание в 1 тон (средние волосы)'),
      category: 'hair-care',
      priceFrom: 3000,
      description: t('spa.services.items.coloring_medium.description', 'Полное окрашивание волос средней длины'),
      popular: true,
      image: '/images/beauty/services/coloring-medium.jpg'
    },
    {
      id: 'coloring-long',
      name: t('spa.services.items.coloring_long.name', 'Окрашивание в 1 тон (длинные волосы)'),
      category: 'hair-care',
      priceFrom: 2500,
      description: t('spa.services.items.coloring_long.description', 'Полное окрашивание длинных волос'),
      popular: true,
      image: '/images/beauty/services/coloring-long.jpg'
    },
    {
      id: 'total-blond-short',
      name: t('spa.services.items.total_blond_short.name', 'Тотальный блонд (короткие волосы)'),
      category: 'hair-care',
      price: 5000,
      description: t('spa.services.items.total_blond_short.description', 'Осветление коротких волос до блонда'),
      popular: false,
      image: '/images/beauty/services/blond-short.jpg'
    },
    {
      id: 'total-blond-medium',
      name: t('spa.services.items.total_blond_medium.name', 'Тотальный блонд (средние волосы)'),
      category: 'hair-care',
      price: 7000,
      description: t('spa.services.items.total_blond_medium.description', 'Осветление волос средней длины до блонда'),
      popular: true,
      image: '/images/beauty/services/blond-medium.jpg'
    },
    {
      id: 'total-blond-long',
      name: t('spa.services.items.total_blond_long.name', 'Тотальный блонд (длинные волосы)'),
      category: 'hair-care',
      price: 8000,
      description: t('spa.services.items.total_blond_long.description', 'Осветление длинных волос до блонда'),
      popular: true,
      image: '/images/beauty/services/blond-long.jpg'
    },
    {
      id: 'happiness-short',
      name: t('spa.services.items.happiness_short.name', 'Счастье для волос - Lebel (короткие волосы)'),
      category: 'hair-care',
      price: 2500,
      description: t('spa.services.items.happiness_short.description', 'Восстанавливающая процедура для коротких волос'),
      popular: false,
      image: '/images/beauty/services/happiness-short.jpg'
    },
    {
      id: 'happiness-medium',
      name: t('spa.services.items.happiness_medium.name', 'Счастье для волос - Lebel (средние волосы)'),
      category: 'hair-care',
      price: 3000,
      description: t('spa.services.items.happiness_medium.description', 'Восстанавливающая процедура для волос средней длины'),
      popular: true,
      image: '/images/beauty/services/happiness-medium.jpg'
    },
    {
      id: 'happiness-long',
      name: t('spa.services.items.happiness_long.name', 'Счастье для волос - Lebel (длинные волосы)'),
      category: 'hair-care',
      price: 3500,
      description: t('spa.services.items.happiness_long.description', 'Восстанавливающая процедура для длинных волос'),
      popular: true,
      image: '/images/beauty/services/happiness-long.jpg'
    },
    {
      id: 'express-hair-care',
      name: t('spa.services.items.express_hair_care.name', 'Экспресс-уход за волосами'),
      category: 'hair-care',
      price: 500,
      description: t('spa.services.items.express_hair_care.description', 'Быстрая восстанавливающая процедура'),
      popular: false,
      image: '/images/beauty/services/hair-express.jpg'
    },
    {
      id: 'vietnamese-head-massage',
      name: t('spa.services.items.vietnamese_head_massage.name', 'Вьетнамский массаж головы'),
      category: 'hair-care',
      price: 1600,
      description: t('spa.services.items.vietnamese_head_massage.description', 'Традиционный вьетнамский массаж для роста волос'),
      popular: true,
      image: '/images/beauty/services/vietnamese-massage.jpg'
    }
  ];

  // Объединяем все услуги
  const allServices = [
    ...massageServices,
    ...endosphereServices,
    ...laserServices,
    ...laserComplex3Services,
    ...laserComplex5Services,
    ...hairServices
  ];

  // Категории услуг
  const serviceCategories = [
    {
      id: 'massage',
      name: t('spa.services.categories.massage', 'Массаж'),
      description: 'Расслабляющие и лечебные массажи',
      icon: '',
      color: 'linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)'
    },
    {
      id: 'endosphere',
      name: t('spa.services.categories.endosphere', 'Эндосфера-терапия'),
      description: 'Аппаратная коррекция фигуры',
      icon: '',
      color: 'linear-gradient(135deg, #8B5A8C 0%, #9B6A9C 100%)'
    },
    {
      id: 'laser',
      name: t('spa.services.categories.laser', 'Лазерная эпиляция'),
      description: 'Современные технологии эпиляции',
      icon: '',
      color: 'linear-gradient(135deg, #E8A87C 0%, #F8B88C 100%)'
    },
    {
      id: 'laser-complex-3',
      name: t('spa.services.categories.laser-complex-3', 'Лазерные комплексы (3 процедуры)'),
      description: 'Выгодные пакеты из 3 процедур',
      icon: '',
      color: 'linear-gradient(135deg, #4A90B8 0%, #5AA0C8 100%)'
    },
    {
      id: 'laser-complex-5',
      name: t('spa.services.categories.laser-complex-5', 'Лазерные комплексы (5 процедур)'),
      description: 'Выгодные пакеты из 5 процедур',
      icon: '',
      color: 'linear-gradient(135deg, #2D5B69 0%, #3D6B79 100%)'
    },
    {
      id: 'hair-care',
      name: t('spa.services.categories.hair-care', 'Уход за волосами'),
      description: 'Стрижки, окрашивание и уход',
      icon: '',
      color: 'linear-gradient(135deg, #A8B8A8 0%, #B8C8B8 100%)'
    }
  ];

  return { allServices, serviceCategories };
}; 