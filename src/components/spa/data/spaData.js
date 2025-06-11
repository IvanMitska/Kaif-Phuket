// Данные услуг SPA и Салона красоты KAIF
// Обновлено: Январь 2025

export const getSpaData = (t) => {
  // МАССАЖ
  const massageServices = [
    {
      id: 'oil-massage',
      name: t('spa.services.items.oil_massage.name', 'Масляный массаж'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [590, 750, 900],
      description: t('spa.services.items.oil_massage.description', 'Расслабляющий массаж с натуральными маслами для глубокого восстановления'),
      popular: true,
      image: '/images/spa/services/massage-oil.jpg'
    },
    {
      id: 'foot-massage',
      name: t('spa.services.items.foot_massage.name', 'Массаж стоп'),
      category: 'massage',
      durations: [60, 90],
      prices: [450, 700],
      description: t('spa.services.items.foot_massage.description', 'Традиционный тайский массаж стоп для снятия усталости'),
      popular: false,
      image: '/images/spa/services/massage-foot.jpg'
    },
    {
      id: 'sport-massage',
      name: t('spa.services.items.sport_massage.name', 'Спортивный массаж'),
      category: 'massage',
      durations: [90, 120],
      prices: [950, 1300],
      description: t('spa.services.items.sport_massage.description', 'Интенсивный массаж для восстановления после тренировок'),
      popular: true,
      image: '/images/spa/services/massage-sport.jpg'
    },
    {
      id: 'anti-cellulite-massage',
      name: 'Антицеллюлитный массаж',
      category: 'massage',
      durations: [60, 90, 120],
      prices: [790, 1200, 1600],
      description: 'Специализированный массаж для коррекции фигуры',
      popular: true,
      image: '/images/spa/services/massage-anti-cellulite.jpg'
    },
    {
      id: 'stone-massage',
      name: 'Стоун-массаж',
      category: 'massage',
      durations: [90, 120],
      prices: [1050, 1300],
      description: 'Массаж горячими камнями для глубокой релаксации',
      popular: false,
      image: '/images/spa/services/massage-stone.jpg'
    },
    {
      id: 'thai-massage',
      name: 'Традиционный тайский массаж',
      category: 'massage',
      durations: [60, 90, 120],
      prices: [590, 750, 900],
      description: 'Классический тайский массаж на коврике',
      popular: true,
      image: '/images/spa/services/massage-thai.jpg'
    },
    {
      id: 'head-shoulders',
      name: 'Массаж головы и плеч',
      category: 'massage',
      durations: [90],
      prices: [900],
      description: 'Расслабляющий массаж для снятия напряжения',
      popular: false,
      image: '/images/spa/services/massage-head.jpg'
    },
    {
      id: 'oil-scrub',
      name: 'Масляный массаж + скраб',
      category: 'massage',
      durations: [90, 120],
      prices: [980, 1300],
      description: 'Комплексная процедура с пилингом и массажем',
      popular: true,
      image: '/images/spa/services/massage-scrub.jpg'
    },
    {
      id: 'body-scrub',
      name: 'Скрабирование всего тела',
      category: 'massage',
      durations: [30],
      prices: [600],
      description: 'Отшелушивающая процедура для всего тела',
      popular: false,
      image: '/images/spa/services/scrub-body.jpg'
    },
    {
      id: 'wrap-anti-cell',
      name: 'Обертывание + антицеллюлитный массаж',
      category: 'massage',
      durations: [90],
      prices: [1800],
      description: 'Комплексная процедура для коррекции фигуры',
      popular: true,
      image: '/images/spa/services/wrap-massage.jpg'
    }
  ];

  // КОСМЕТОЛОГИЯ
  const cosmetologyServices = [
    {
      id: 'vacuum-peeling',
      name: 'Вакуумная чистка лица с пилингом',
      category: 'cosmetology',
      price: 2500,
      description: 'Глубокая очистка пор с механическим пилингом',
      popular: true,
      image: '/images/beauty/services/facial-vacuum.jpg'
    },
    {
      id: 'vacuum-standard',
      name: 'Стандартная вакуумная чистка лица',
      category: 'cosmetology',
      price: 2500,
      description: 'Классическая процедура очищения кожи лица',
      popular: false,
      image: '/images/beauty/services/facial-standard.jpg'
    },
    {
      id: 'hollywood-vacuum',
      name: 'Голливудская вакуумная чистка лица',
      category: 'cosmetology',
      price: 3000,
      description: 'Премиальная процедура для идеального состояния кожи',
      popular: true,
      image: '/images/beauty/services/facial-hollywood.jpg'
    },
    {
      id: 'vacuum-oil',
      name: 'Вакуумная чистка с маслом',
      category: 'cosmetology',
      price: 3000,
      description: 'Очищение с питательными маслами',
      popular: false,
      image: '/images/beauty/services/facial-oil.jpg'
    },
    {
      id: 'whitening-program',
      name: 'Программа отбеливания (пигментация)',
      category: 'cosmetology',
      price: 3000,
      description: 'Специальная программа против пигментных пятен',
      popular: true,
      image: '/images/beauty/services/facial-whitening.jpg'
    },
    {
      id: 'rejuvenation-program',
      name: 'Программа омоложения',
      category: 'cosmetology',
      price: 3500,
      description: 'Комплексная антивозрастная программа',
      popular: true,
      image: '/images/beauty/services/facial-rejuvenation.jpg'
    },
    {
      id: 'hydration-program',
      name: 'Программа увлажнения и сияния',
      category: 'cosmetology',
      price: 3500,
      description: 'Интенсивное увлажнение для сияния кожи',
      popular: true,
      image: '/images/beauty/services/facial-hydration.jpg'
    },
    {
      id: 'vacuum-men',
      name: 'Вакуумная чистка лица для мужчин',
      category: 'cosmetology',
      price: 3300,
      description: 'Специализированный уход для мужской кожи',
      popular: false,
      image: '/images/beauty/services/facial-men.jpg'
    },
    {
      id: 'express-care',
      name: 'Экспресс-уход',
      category: 'cosmetology',
      price: 1700,
      description: 'Быстрая процедура для свежести кожи',
      popular: false,
      image: '/images/beauty/services/facial-express.jpg'
    },
    {
      id: 'facial-massage-care',
      name: 'Массаж лица с уходом',
      category: 'cosmetology',
      price: 1500,
      description: 'Расслабляющий массаж с уходовыми средствами',
      popular: false,
      image: '/images/beauty/services/facial-massage.jpg'
    },
    {
      id: 'facial-massage',
      name: 'Массаж лица',
      category: 'cosmetology',
      price: 600,
      description: 'Классический массаж лица для релаксации',
      popular: false,
      image: '/images/beauty/services/massage-face.jpg'
    },
    {
      id: 'vacuum-subscription-5',
      name: 'Абонемент вакуумная чистка (5 стандартных процедур)',
      category: 'cosmetology',
      price: 10000,
      description: 'Выгодный пакет из 5 стандартных процедур',
      popular: true,
      image: '/images/beauty/services/subscription-standard.jpg'
    },
    {
      id: 'vacuum-subscription-5-special',
      name: 'Абонемент вакуумная чистка (5 специализированных процедур)',
      category: 'cosmetology',
      price: 14500,
      description: 'Премиальный пакет из 5 специализированных процедур',
      popular: true,
      image: '/images/beauty/services/subscription-premium.jpg'
    }
  ];

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ
  const laserHairRemovalServices = [
    {
      id: 'deep-bikini',
      name: 'Глубокий бикини',
      category: 'laser-hair-removal',
      price: 2000,
      description: 'Лазерная эпиляция интимной зоны',
      popular: true,
      image: '/images/beauty/services/laser-bikini.jpg'
    },
    {
      id: 'lower-back',
      name: 'Поясница/лопатки/живот',
      category: 'laser-hair-removal',
      price: 1500,
      description: 'Эпиляция средних зон тела',
      popular: false,
      image: '/images/beauty/services/laser-body.jpg'
    },
    {
      id: 'areola-line',
      name: 'Ареола/линия живота',
      category: 'laser-hair-removal',
      price: 500,
      description: 'Эпиляция деликатных зон',
      popular: false,
      image: '/images/beauty/services/laser-small.jpg'
    },
    {
      id: 'back-completely',
      name: 'Спина полностью',
      category: 'laser-hair-removal',
      price: 2500,
      description: 'Полная эпиляция спины',
      popular: false,
      image: '/images/beauty/services/laser-back.jpg'
    },
    {
      id: 'buttocks-calves',
      name: 'Ягодицы/икры/бедра',
      category: 'laser-hair-removal',
      price: 2000,
      description: 'Эпиляция зон ног',
      popular: true,
      image: '/images/beauty/services/laser-legs.jpg'
    },
    {
      id: 'legs-completely',
      name: 'Ноги полностью',
      category: 'laser-hair-removal',
      price: 2500,
      description: 'Полная эпиляция ног',
      popular: true,
      image: '/images/beauty/services/laser-legs-full.jpg'
    },
    {
      id: 'arms-completely',
      name: 'Руки полностью',
      category: 'laser-hair-removal',
      price: 1500,
      description: 'Полная эпиляция рук',
      popular: false,
      image: '/images/beauty/services/laser-arms.jpg'
    },
    {
      id: 'face-lower',
      name: 'Нижняя треть лица',
      category: 'laser-hair-removal',
      price: 500,
      description: 'Эпиляция области подбородка',
      popular: false,
      image: '/images/beauty/services/laser-face.jpg'
    },
    {
      id: 'armpits',
      name: 'Подмышки',
      category: 'laser-hair-removal',
      price: 500,
      description: 'Эпиляция подмышечных впадин',
      popular: true,
      image: '/images/beauty/services/laser-armpits.jpg'
    }
  ];

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ ДЛЯ МУЖЧИН
  const laserMenServices = [
    {
      id: 'men-2-zones',
      name: '2 любые зоны',
      category: 'laser-men',
      price: 3500,
      description: 'Эпиляция любых двух зон на выбор',
      popular: true,
      image: '/images/beauty/services/laser-men.jpg'
    },
    {
      id: 'men-3-zones',
      name: '3 любые зоны',
      category: 'laser-men',
      price: 4500,
      description: 'Эпиляция любых трех зон на выбор',
      popular: true,
      image: '/images/beauty/services/laser-men.jpg'
    },
    {
      id: 'men-4-zones',
      name: '4 любые зоны',
      category: 'laser-men',
      price: 5000,
      description: 'Эпиляция любых четырех зон на выбор',
      popular: false,
      image: '/images/beauty/services/laser-men.jpg'
    },
    {
      id: 'men-full-body',
      name: 'Все тело',
      category: 'laser-men',
      price: 9000,
      description: 'Полная эпиляция всего тела',
      popular: true,
      image: '/images/beauty/services/laser-men-full.jpg'
    },
    {
      id: 'men-face',
      name: 'Верхняя губа/подбородок/щеки/шея',
      category: 'laser-men',
      price: 650,
      description: 'Эпиляция лицевой зоны',
      popular: false,
      image: '/images/beauty/services/laser-men-face.jpg'
    },
    {
      id: 'men-full-face',
      name: 'Лицо полностью',
      category: 'laser-men',
      price: 1500,
      description: 'Полная эпиляция лица',
      popular: false,
      image: '/images/beauty/services/laser-men-face-full.jpg'
    },
    {
      id: 'men-armpits',
      name: 'Подмышки',
      category: 'laser-men',
      price: 1500,
      description: 'Эпиляция подмышечных впадин',
      popular: true,
      image: '/images/beauty/services/laser-men-armpits.jpg'
    },
    {
      id: 'men-chest-abdomen',
      name: 'Грудь/живот полностью',
      category: 'laser-men',
      price: 2000,
      description: 'Эпиляция торса',
      popular: true,
      image: '/images/beauty/services/laser-men-chest.jpg'
    },
    {
      id: 'men-subscription',
      name: 'Абонемент все тело (5 сеансов)',
      category: 'laser-men',
      price: 36000,
      description: 'Выгодный пакет полной эпиляции',
      popular: true,
      image: '/images/beauty/services/laser-men-subscription.jpg'
    }
  ];

  // ЛАЗЕРНЫЕ КОМПЛЕКСЫ
  const laserComplexServices = [
    {
      id: 'complex-1',
      name: 'Икры + подмышки + глубокий бикини',
      category: 'laser-complex',
      price: 3500,
      description: 'Популярный комплекс для женщин',
      popular: true,
      image: '/images/beauty/services/laser-complex-1.jpg'
    },
    {
      id: 'complex-2',
      name: 'Подмышки + глубокий бикини/икры',
      category: 'laser-complex',
      price: 2500,
      description: 'Базовый комплекс эпиляции',
      popular: true,
      image: '/images/beauty/services/laser-complex-2.jpg'
    },
    {
      id: 'complex-3',
      name: 'Ноги полностью + подмышки + глубокий бикини',
      category: 'laser-complex',
      price: 4000,
      description: 'Расширенный комплекс для ног',
      popular: true,
      image: '/images/beauty/services/laser-complex-3.jpg'
    },
    {
      id: 'complex-4',
      name: 'Руки полностью + ноги полностью + подмышки + глубокий бикини',
      category: 'laser-complex',
      price: 5000,
      description: 'Максимальный комплекс эпиляции',
      popular: false,
      image: '/images/beauty/services/laser-complex-4.jpg'
    }
  ];

  // ЭНДОСФЕРА-ТЕРАПИЯ
  const endosphereServices = [
    {
      id: 'endosphere-full-body',
      name: 'Все тело',
      category: 'endosphere',
      price: 2200,
      description: 'Эндосфера-терапия всего тела для коррекции фигуры',
      popular: true,
      image: '/images/beauty/services/endosphere-body.jpg'
    },
    {
      id: 'endosphere-face',
      name: 'Аппаратный массаж лица (Эндосфера, RF лифтинг)',
      category: 'endosphere',
      price: 1700,
      description: 'Омолаживающий аппаратный массаж лица',
      popular: true,
      image: '/images/beauty/services/endosphere-face.jpg'
    },
    {
      id: 'endosphere-subscription-6',
      name: 'Абонемент Эндосфера (6 сеансов)',
      category: 'endosphere',
      price: 11000,
      description: 'Выгодный пакет из 6 процедур',
      popular: true,
      image: '/images/beauty/services/endosphere-subscription.jpg'
    },
    {
      id: 'endosphere-subscription-12',
      name: 'Абонемент Эндосфера (12 сеансов)',
      category: 'endosphere',
      price: 18000,
      description: 'Максимальный пакет из 12 процедур',
      popular: true,
      image: '/images/beauty/services/endosphere-subscription-max.jpg'
    }
  ];

  // МАНИКЮР
  const manicureServices = [
    {
      id: 'manicure-no-coating',
      name: 'Маникюр без покрытия',
      category: 'manicure',
      price: 600,
      description: 'Классический маникюр с обработкой ногтевых пластин',
      popular: false,
      image: '/images/beauty/services/manicure-classic.jpg'
    },
    {
      id: 'manicure-base',
      name: 'Маникюр с базовым покрытием',
      category: 'manicure',
      price: 750,
      description: 'Маникюр с защитным базовым покрытием',
      popular: false,
      image: '/images/beauty/services/manicure-base.jpg'
    },
    {
      id: 'manicure-gel',
      name: 'Маникюр с покрытием гель-лак',
      category: 'manicure',
      price: 900,
      description: 'Маникюр с долговечным гель-лаковым покрытием',
      popular: true,
      image: '/images/beauty/services/manicure-gel.jpg'
    },
    {
      id: 'gel-strengthening',
      name: 'Укрепление гелем без гель-лака',
      category: 'manicure',
      price: 1400,
      description: 'Укрепление натуральных ногтей гелем',
      popular: false,
      image: '/images/beauty/services/gel-strengthening.jpg'
    },
    {
      id: 'gel-strengthening-polish',
      name: 'Укрепление гелем с гель-лаком',
      category: 'manicure',
      price: 1600,
      description: 'Укрепление ногтей с цветным покрытием',
      popular: true,
      image: '/images/beauty/services/gel-polish.jpg'
    },
    {
      id: 'gel-french',
      name: 'Гель-лак френч коррекция',
      category: 'manicure',
      price: 1800,
      description: 'Классический французский маникюр гель-лаком',
      popular: true,
      image: '/images/beauty/services/french-manicure.jpg'
    },
    {
      id: 'nail-extension-short',
      name: 'Наращивание ногтей классика короткие (до 2мм)',
      category: 'manicure',
      price: 2300,
      description: 'Наращивание коротких ногтей',
      popular: false,
      image: '/images/beauty/services/nail-extension.jpg'
    },
    {
      id: 'nail-extension-long',
      name: 'Наращивание ногтей (свыше 2мм)',
      category: 'manicure',
      price: 2600,
      description: 'Наращивание длинных ногтей',
      popular: false,
      image: '/images/beauty/services/nail-extension-long.jpg'
    },
    {
      id: 'nail-repair',
      name: 'Ремонт ногтя',
      category: 'manicure',
      priceFrom: 200,
      description: 'Восстановление поврежденного ногтя',
      popular: false,
      image: '/images/beauty/services/nail-repair.jpg'
    }
  ];

  // ПЕДИКЮР
  const pedicureServices = [
    {
      id: 'pedicure-full-no-coating',
      name: 'Педикюр полный без покрытия',
      category: 'pedicure',
      price: 1200,
      description: 'Полная обработка стоп и ногтей',
      popular: true,
      image: '/images/beauty/services/pedicure-full.jpg'
    },
    {
      id: 'pedicure-full-coating',
      name: 'Педикюр полный с покрытием',
      category: 'pedicure',
      price: 1400,
      description: 'Полный педикюр с гель-лаковым покрытием',
      popular: true,
      image: '/images/beauty/services/pedicure-gel.jpg'
    },
    {
      id: 'pedicure-toes-no-coating',
      name: 'Педикюр пальчики без покрытия',
      category: 'pedicure',
      price: 600,
      description: 'Обработка только ногтей на пальцах',
      popular: false,
      image: '/images/beauty/services/pedicure-toes.jpg'
    },
    {
      id: 'pedicure-toes-coating',
      name: 'Педикюр пальчики с покрытием гель-лак',
      category: 'pedicure',
      price: 900,
      description: 'Обработка ногтей с цветным покрытием',
      popular: true,
      image: '/images/beauty/services/pedicure-toes-gel.jpg'
    },
    {
      id: 'callus-removal',
      name: 'Удаление мозолей',
      category: 'pedicure',
      price: 300,
      description: 'Профессиональное удаление мозолей',
      popular: false,
      image: '/images/beauty/services/callus-removal.jpg'
    },
    {
      id: 'onycholysis-cleaning',
      name: 'Чистка онихолизиса (топ мастер)',
      category: 'pedicure',
      priceFrom: 1000,
      description: 'Лечение отслоения ногтевых пластин',
      popular: false,
      image: '/images/beauty/services/onycholysis.jpg'
    }
  ];

  // УХОД ЗА ВОЛОСАМИ
  const hairCareServices = [
    {
      id: 'womens-haircut',
      name: 'Женская стрижка',
      category: 'hair-care',
      price: 800,
      description: 'Профессиональная женская стрижка',
      popular: true,
      image: '/images/beauty/services/haircut-women.jpg'
    },
    {
      id: 'hair-wash-brushing',
      name: 'Мытье с брашингом',
      category: 'hair-care',
      price: 500,
      description: 'Мытье головы с укладкой брашингом',
      popular: false,
      image: '/images/beauty/services/hair-wash.jpg'
    },
    {
      id: 'bangs-haircut',
      name: 'Стрижка челки',
      category: 'hair-care',
      price: 500,
      description: 'Коррекция и стрижка челки',
      popular: false,
      image: '/images/beauty/services/bangs-cut.jpg'
    },
    {
      id: 'mens-haircut',
      name: 'Мужская стрижка',
      category: 'hair-care',
      price: 800,
      description: 'Стильная мужская стрижка',
      popular: true,
      image: '/images/beauty/services/haircut-men.jpg'
    },
    {
      id: 'hair-styling',
      name: 'Укладка с брашингом со стайлинг-средствами',
      category: 'hair-care',
      priceFrom: 600,
      priceTo: 800,
      description: 'Профессиональная укладка волос',
      popular: true,
      image: '/images/beauty/services/hair-styling.jpg'
    },
    {
      id: 'evening-styling',
      name: 'Вечерняя укладка',
      category: 'hair-care',
      priceFrom: 600,
      priceTo: 800,
      description: 'Праздничная укладка для особых случаев',
      popular: true,
      image: '/images/beauty/services/evening-styling.jpg'
    },
    {
      id: 'coloring-roots',
      name: 'Окрашивание в 1 тон корни',
      category: 'hair-care',
      price: 2000,
      description: 'Окрашивание отросших корней',
      popular: true,
      image: '/images/beauty/services/hair-coloring.jpg'
    },
    {
      id: 'coloring-stretching',
      name: 'Окрашивание корни + растяжка цвета по всей длине',
      category: 'hair-care',
      priceFrom: 3500,
      description: 'Сложное окрашивание с растяжкой цвета',
      popular: true,
      image: '/images/beauty/services/hair-stretching.jpg'
    },
    {
      id: 'coloring-short',
      name: 'Окрашивание в 1 тон короткие',
      category: 'hair-care',
      price: 2500,
      description: 'Полное окрашивание коротких волос',
      popular: false,
      image: '/images/beauty/services/coloring-short.jpg'
    },
    {
      id: 'coloring-medium',
      name: 'Окрашивание в 1 тон средние',
      category: 'hair-care',
      priceFrom: 3000,
      description: 'Полное окрашивание волос средней длины',
      popular: true,
      image: '/images/beauty/services/coloring-medium.jpg'
    },
    {
      id: 'coloring-long',
      name: 'Окрашивание в 1 тон длинные',
      category: 'hair-care',
      priceFrom: 4000,
      description: 'Полное окрашивание длинных волос',
      popular: true,
      image: '/images/beauty/services/coloring-long.jpg'
    },
    {
      id: 'total-blond-short',
      name: 'Тотальный блонд короткие',
      category: 'hair-care',
      price: 5000,
      description: 'Осветление коротких волос до блонда',
      popular: false,
      image: '/images/beauty/services/blond-short.jpg'
    },
    {
      id: 'total-blond-medium',
      name: 'Тотальный блонд средние',
      category: 'hair-care',
      price: 6000,
      description: 'Осветление волос средней длины до блонда',
      popular: true,
      image: '/images/beauty/services/blond-medium.jpg'
    },
    {
      id: 'total-blond-long',
      name: 'Тотальный блонд длинные',
      category: 'hair-care',
      price: 6500,
      description: 'Осветление длинных волос до блонда',
      popular: true,
      image: '/images/beauty/services/blond-long.jpg'
    },
    {
      id: 'happiness-short',
      name: 'Счастье для волос уровень короткие',
      category: 'hair-care',
      price: 2000,
      description: 'Восстанавливающая процедура для коротких волос',
      popular: false,
      image: '/images/beauty/services/happiness-short.jpg'
    },
    {
      id: 'happiness-medium',
      name: 'Счастье для волос уровень средние',
      category: 'hair-care',
      price: 3000,
      description: 'Восстанавливающая процедура для волос средней длины',
      popular: true,
      image: '/images/beauty/services/happiness-medium.jpg'
    },
    {
      id: 'happiness-long',
      name: 'Счастье для волос уровень длинные',
      category: 'hair-care',
      price: 3500,
      description: 'Восстанавливающая процедура для длинных волос',
      popular: true,
      image: '/images/beauty/services/happiness-long.jpg'
    },
    {
      id: 'indian-head-massage',
      name: 'Индийский массаж головы',
      category: 'hair-care',
      price: 1590,
      description: 'Традиционный индийский массаж для роста волос',
      popular: false,
      image: '/images/beauty/services/indian-massage.jpg'
    },
    {
      id: 'hair-express-care',
      name: 'Экспресс-уход',
      category: 'hair-care',
      price: 500,
      description: 'Быстрая восстанавливающая процедура',
      popular: false,
      image: '/images/beauty/services/hair-express.jpg'
    }
  ];

  // Объединяем все услуги
  const allServices = [
    ...massageServices,
    ...cosmetologyServices,
    ...laserHairRemovalServices,
    ...laserMenServices,
    ...laserComplexServices,
    ...endosphereServices,
    ...manicureServices,
    ...pedicureServices,
    ...hairCareServices
  ];

  // Категории услуг
  const serviceCategories = [
    {
      id: 'massage',
      name: t('spa.services.categories.massage', 'Массаж'),
      description: 'Расслабляющие и лечебные массажи',
      icon: '💆‍♀️',
      color: 'linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)'
    },
    {
      id: 'cosmetology',
      name: t('spa.services.categories.cosmetology', 'Косметология'),
      description: 'Профессиональный уход за лицом',
      icon: '✨',
      color: 'linear-gradient(135deg, #D4A574 0%, #E6B885 100%)'
    },
    {
      id: 'laser-hair-removal',
      name: t('spa.services.categories.laser-hair-removal', 'Лазерная эпиляция'),
      description: 'Современные технологии эпиляции',
      icon: '💫',
      color: 'linear-gradient(135deg, #E8A87C 0%, #F8B88C 100%)'
    },
    {
      id: 'laser-men',
      name: 'Лазерная эпиляция для мужчин',
      description: 'Эпиляция для мужчин',
      icon: '🧔',
      color: 'linear-gradient(135deg, #2D5B69 0%, #3D6B79 100%)'
    },
    {
      id: 'laser-complex',
      name: 'Лазерные комплексы',
      description: 'Выгодные пакеты эпиляции',
      icon: '🎯',
      color: 'linear-gradient(135deg, #4A90B8 0%, #5AA0C8 100%)'
    },
    {
      id: 'endosphere',
      name: 'Эндосфера-терапия',
      description: 'Аппаратная коррекция фигуры',
      icon: '🌟',
      color: 'linear-gradient(135deg, #B8A8C8 0%, #C8B8D8 100%)'
    },
    {
      id: 'manicure',
      name: 'Маникюр',
      description: 'Профессиональный уход за ногтями',
      icon: '💅',
      color: 'linear-gradient(135deg, #F0A0B0 0%, #FFB0C0 100%)'
    },
    {
      id: 'pedicure',
      name: 'Педикюр',
      description: 'Уход за стопами и ногтями ног',
      icon: '🦶',
      color: 'linear-gradient(135deg, #A0C8F0 0%, #B0D8FF 100%)'
    },
    {
      id: 'hair-care',
      name: 'Уход за волосами',
      description: 'Стрижки, укладки и окрашивание',
      icon: '💇‍♀️',
      color: 'linear-gradient(135deg, #C8D8A8 0%, #D8E8B8 100%)'
    }
  ];

  return {
    services: allServices,
    categories: serviceCategories,
    getServicesByCategory: (categoryId) => allServices.filter(service => service.category === categoryId),
    getPopularServices: () => allServices.filter(service => service.popular),
    getServiceById: (id) => allServices.find(service => service.id === id)
  };
}; 