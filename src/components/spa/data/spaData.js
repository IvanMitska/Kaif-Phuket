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
      name: t('spa.services.items.anti_cellulite_massage.name', 'Антицеллюлитный массаж'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [790, 1200, 1600],
      description: t('spa.services.items.anti_cellulite_massage.description', 'Специализированный массаж для коррекции фигуры'),
      popular: true,
      image: '/images/spa/services/massage-anti-cellulite.jpg'
    },
    {
      id: 'stone-massage',
      name: t('spa.services.items.stone_massage.name', 'Стоун-массаж'),
      category: 'massage',
      durations: [90, 120],
      prices: [1050, 1300],
      description: t('spa.services.items.stone_massage.description', 'Массаж горячими камнями для глубокой релаксации'),
      popular: false,
      image: '/images/spa/services/massage-stone.jpg'
    },
    {
      id: 'thai-massage',
      name: t('spa.services.items.thai_massage.name', 'Традиционный тайский массаж'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [590, 750, 900],
      description: t('spa.services.items.thai_massage.description', 'Классический тайский массаж на коврике'),
      popular: true,
      image: '/images/spa/services/massage-thai.jpg'
    },
    {
      id: 'head-shoulders',
      name: t('spa.services.items.head_shoulders.name', 'Массаж головы и плеч'),
      category: 'massage',
      durations: [90],
      prices: [900],
      description: t('spa.services.items.head_shoulders.description', 'Расслабляющий массаж для снятия напряжения'),
      popular: false,
      image: '/images/spa/services/massage-head.jpg'
    },
    {
      id: 'oil-scrub',
      name: t('spa.services.items.oil_scrub.name', 'Масляный массаж + скраб'),
      category: 'massage',
      durations: [90, 120],
      prices: [980, 1300],
      description: t('spa.services.items.oil_scrub.description', 'Комплексная процедура с пилингом и массажем'),
      popular: true,
      image: '/images/spa/services/massage-scrub.jpg'
    },
    {
      id: 'body-scrub',
      name: t('spa.services.items.body_scrub.name', 'Скрабирование всего тела'),
      category: 'massage',
      durations: [30],
      prices: [600],
      description: t('spa.services.items.body_scrub.description', 'Отшелушивающая процедура для всего тела'),
      popular: false,
      image: '/images/spa/services/scrub-body.jpg'
    },
    {
      id: 'wrap-anti-cell',
      name: t('spa.services.items.wrap_anti_cell.name', 'Обертывание + антицеллюлитный массаж'),
      category: 'massage',
      durations: [90],
      prices: [1800],
      description: t('spa.services.items.wrap_anti_cell.description', 'Комплексная процедура для коррекции фигуры'),
      popular: true,
      image: '/images/spa/services/wrap-massage.jpg'
    }
  ];

  // КОСМЕТОЛОГИЯ
  const cosmetologyServices = [
    {
      id: 'vacuum-peeling',
      name: t('spa.services.items.vacuum_peeling.name', 'Вакуумная чистка лица с пилингом'),
      category: 'cosmetology',
      price: 2500,
      description: t('spa.services.items.vacuum_peeling.description', 'Глубокая очистка пор с механическим пилингом'),
      popular: true,
      image: '/images/beauty/services/facial-vacuum.jpg'
    },
    {
      id: 'vacuum-standard',
      name: t('spa.services.items.vacuum_standard.name', 'Стандартная вакуумная чистка лица'),
      category: 'cosmetology',
      price: 2500,
      description: t('spa.services.items.vacuum_standard.description', 'Классическая процедура очищения кожи лица'),
      popular: false,
      image: '/images/beauty/services/facial-standard.jpg'
    },
    {
      id: 'hollywood-vacuum',
      name: t('spa.services.items.hollywood_vacuum.name', 'Голливудская вакуумная чистка лица'),
      category: 'cosmetology',
      price: 3000,
      description: t('spa.services.items.hollywood_vacuum.description', 'Премиальная процедура для идеального состояния кожи'),
      popular: true,
      image: '/images/beauty/services/facial-hollywood.jpg'
    },
    {
      id: 'vacuum-oil',
      name: t('spa.services.items.vacuum_oil.name', 'Вакуумная чистка с маслом'),
      category: 'cosmetology',
      price: 3000,
      description: t('spa.services.items.vacuum_oil.description', 'Очищение с питательными маслами'),
      popular: false,
      image: '/images/beauty/services/facial-oil.jpg'
    },
    {
      id: 'whitening-program',
      name: t('spa.services.items.whitening_program.name', 'Программа отбеливания (пигментация)'),
      category: 'cosmetology',
      price: 3000,
      description: t('spa.services.items.whitening_program.description', 'Специальная программа против пигментных пятен'),
      popular: true,
      image: '/images/beauty/services/facial-whitening.jpg'
    },
    {
      id: 'rejuvenation-program',
      name: t('spa.services.items.rejuvenation_program.name', 'Программа омоложения'),
      category: 'cosmetology',
      price: 3500,
      description: t('spa.services.items.rejuvenation_program.description', 'Комплексная антивозрастная программа'),
      popular: true,
      image: '/images/beauty/services/facial-rejuvenation.jpg'
    },
    {
      id: 'hydration-program',
      name: t('spa.services.items.hydration_program.name', 'Программа увлажнения и сияния'),
      category: 'cosmetology',
      price: 3500,
      description: t('spa.services.items.hydration_program.description', 'Интенсивное увлажнение для сияния кожи'),
      popular: true,
      image: '/images/beauty/services/facial-hydration.jpg'
    },
    {
      id: 'vacuum-men',
      name: t('spa.services.items.vacuum_men.name', 'Вакуумная чистка лица для мужчин'),
      category: 'cosmetology',
      price: 3300,
      description: t('spa.services.items.vacuum_men.description', 'Специализированный уход для мужской кожи'),
      popular: false,
      image: '/images/beauty/services/facial-men.jpg'
    },
    {
      id: 'express-care',
      name: t('spa.services.items.express_care.name', 'Экспресс-уход'),
      category: 'cosmetology',
      price: 1700,
      description: t('spa.services.items.express_care.description', 'Быстрая процедура для свежести кожи'),
      popular: false,
      image: '/images/beauty/services/facial-express.jpg'
    },
    {
      id: 'facial-massage-care',
      name: t('spa.services.items.facial_massage_care.name', 'Массаж лица с уходом'),
      category: 'cosmetology',
      price: 1500,
      description: t('spa.services.items.facial_massage_care.description', 'Расслабляющий массаж с уходовыми средствами'),
      popular: false,
      image: '/images/beauty/services/facial-massage.jpg'
    },
    {
      id: 'facial-massage',
      name: t('spa.services.items.facial_massage.name', 'Массаж лица'),
      category: 'cosmetology',
      price: 600,
      description: t('spa.services.items.facial_massage.description', 'Классический массаж лица для релаксации'),
      popular: false,
      image: '/images/beauty/services/massage-face.jpg'
    },
    {
      id: 'vacuum-subscription-5',
      name: t('spa.services.items.vacuum_subscription_5.name', 'Абонемент вакуумная чистка (5 стандартных процедур)'),
      category: 'cosmetology',
      price: 10000,
      description: t('spa.services.items.vacuum_subscription_5.description', 'Выгодный пакет из 5 стандартных процедур'),
      popular: true,
      image: '/images/beauty/services/subscription-standard.jpg'
    },
    {
      id: 'vacuum-subscription-5-special',
      name: t('spa.services.items.vacuum_subscription_5_special.name', 'Абонемент вакуумная чистка (5 специализированных процедур)'),
      category: 'cosmetology',
      price: 14500,
      description: t('spa.services.items.vacuum_subscription_5_special.description', 'Премиальный пакет из 5 специализированных процедур'),
      popular: true,
      image: '/images/beauty/services/subscription-premium.jpg'
    }
  ];

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ
  const laserHairRemovalServices = [
    {
      id: 'deep-bikini',
      name: t('spa.services.items.deep_bikini.name', 'Глубокий бикини'),
      category: 'laser-hair-removal',
      price: 2000,
      description: t('spa.services.items.deep_bikini.description', 'Лазерная эпиляция интимной зоны'),
      popular: true,
      image: '/images/beauty/services/laser-bikini.jpg'
    },
    {
      id: 'lower-back',
      name: t('spa.services.items.lower_back.name', 'Поясница/лопатки/живот'),
      category: 'laser-hair-removal',
      price: 1500,
      description: t('spa.services.items.lower_back.description', 'Эпиляция средних зон тела'),
      popular: false,
      image: '/images/beauty/services/laser-body.jpg'
    },
    {
      id: 'areola-line',
      name: t('spa.services.items.areola_line.name', 'Ареола/линия живота'),
      category: 'laser-hair-removal',
      price: 500,
      description: t('spa.services.items.areola_line.description', 'Эпиляция деликатных зон'),
      popular: false,
      image: '/images/beauty/services/laser-small.jpg'
    },
    {
      id: 'back-completely',
      name: t('spa.services.items.back_completely.name', 'Спина полностью'),
      category: 'laser-hair-removal',
      price: 2500,
      description: t('spa.services.items.back_completely.description', 'Полная эпиляция спины'),
      popular: false,
      image: '/images/beauty/services/laser-back.jpg'
    },
    {
      id: 'buttocks-calves',
      name: t('spa.services.items.buttocks_calves.name', 'Ягодицы/икры/бедра'),
      category: 'laser-hair-removal',
      price: 2000,
      description: t('spa.services.items.buttocks_calves.description', 'Эпиляция зон ног'),
      popular: true,
      image: '/images/beauty/services/laser-legs.jpg'
    },
    {
      id: 'legs-completely',
      name: t('spa.services.items.legs_completely.name', 'Ноги полностью'),
      category: 'laser-hair-removal',
      price: 2500,
      description: t('spa.services.items.legs_completely.description', 'Полная эпиляция ног'),
      popular: true,
      image: '/images/beauty/services/laser-legs-full.jpg'
    },
    {
      id: 'arms-completely',
      name: t('spa.services.items.arms_completely.name', 'Руки полностью'),
      category: 'laser-hair-removal',
      price: 1500,
      description: t('spa.services.items.arms_completely.description', 'Полная эпиляция рук'),
      popular: false,
      image: '/images/beauty/services/laser-arms.jpg'
    },
    {
      id: 'face-lower',
      name: t('spa.services.items.face_lower.name', 'Нижняя треть лица'),
      category: 'laser-hair-removal',
      price: 500,
      description: t('spa.services.items.face_lower.description', 'Эпиляция области подбородка'),
      popular: false,
      image: '/images/beauty/services/laser-face.jpg'
    },
    {
      id: 'armpits',
      name: t('spa.services.items.armpits.name', 'Подмышки'),
      category: 'laser-hair-removal',
      price: 500,
      description: t('spa.services.items.armpits.description', 'Эпиляция подмышечных впадин'),
      popular: true,
      image: '/images/beauty/services/laser-armpits.jpg'
    }
  ];

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ ДЛЯ МУЖЧИН
  const laserMenServices = [
    {
      id: 'men-2-zones',
      name: t('spa.services.items.men_2_zones.name', '2 любые зоны'),
      category: 'laser-men',
      price: 3500,
      description: t('spa.services.items.men_2_zones.description', 'Эпиляция любых двух зон на выбор'),
      popular: true,
      image: '/images/beauty/services/laser-men.jpg'
    },
    {
      id: 'men-3-zones',
      name: t('spa.services.items.men_3_zones.name', '3 любые зоны'),
      category: 'laser-men',
      price: 4500,
      description: t('spa.services.items.men_3_zones.description', 'Эпиляция любых трех зон на выбор'),
      popular: true,
      image: '/images/beauty/services/laser-men.jpg'
    },
    {
      id: 'men-4-zones',
      name: t('spa.services.items.men_4_zones.name', '4 любые зоны'),
      category: 'laser-men',
      price: 5000,
      description: t('spa.services.items.men_4_zones.description', 'Эпиляция любых четырех зон на выбор'),
      popular: false,
      image: '/images/beauty/services/laser-men.jpg'
    },
    {
      id: 'men-full-body',
      name: t('spa.services.items.men_full_body.name', 'Все тело'),
      category: 'laser-men',
      price: 9000,
      description: t('spa.services.items.men_full_body.description', 'Полная эпиляция всего тела'),
      popular: true,
      image: '/images/beauty/services/laser-men-full.jpg'
    },
    {
      id: 'men-face',
      name: t('spa.services.items.men_face.name', 'Верхняя губа/подбородок/щеки/шея'),
      category: 'laser-men',
      price: 650,
      description: t('spa.services.items.men_face.description', 'Эпиляция лицевой зоны'),
      popular: false,
      image: '/images/beauty/services/laser-men-face.jpg'
    },
    {
      id: 'men-full-face',
      name: t('spa.services.items.men_full_face.name', 'Лицо полностью'),
      category: 'laser-men',
      price: 1500,
      description: t('spa.services.items.men_full_face.description', 'Полная эпиляция лица'),
      popular: false,
      image: '/images/beauty/services/laser-men-face-full.jpg'
    },
    {
      id: 'men-armpits',
      name: t('spa.services.items.men_armpits.name', 'Подмышки'),
      category: 'laser-men',
      price: 1500,
      description: t('spa.services.items.men_armpits.description', 'Эпиляция подмышечных впадин'),
      popular: true,
      image: '/images/beauty/services/laser-men-armpits.jpg'
    },
    {
      id: 'men-chest-abdomen',
      name: t('spa.services.items.men_chest_abdomen.name', 'Грудь/живот полностью'),
      category: 'laser-men',
      price: 2000,
      description: t('spa.services.items.men_chest_abdomen.description', 'Эпиляция торса'),
      popular: true,
      image: '/images/beauty/services/laser-men-chest.jpg'
    },
    {
      id: 'men-subscription',
      name: t('spa.services.items.men_subscription.name', 'Абонемент все тело (5 сеансов)'),
      category: 'laser-men',
      price: 36000,
      description: t('spa.services.items.men_subscription.description', 'Выгодный пакет полной эпиляции'),
      popular: true,
      image: '/images/beauty/services/laser-men-subscription.jpg'
    }
  ];

  // ЛАЗЕРНЫЕ КОМПЛЕКСЫ
  const laserComplexServices = [
    {
      id: 'complex-1',
      name: t('spa.services.items.complex_1.name', 'Икры + подмышки + глубокий бикини'),
      category: 'laser-complex',
      price: 3500,
      description: t('spa.services.items.complex_1.description', 'Популярный комплекс для женщин'),
      popular: true,
      image: '/images/beauty/services/laser-complex-1.jpg'
    },
    {
      id: 'complex-2',
      name: t('spa.services.items.complex_2.name', 'Подмышки + глубокий бикини/икры'),
      category: 'laser-complex',
      price: 2500,
      description: t('spa.services.items.complex_2.description', 'Базовый комплекс эпиляции'),
      popular: true,
      image: '/images/beauty/services/laser-complex-2.jpg'
    },
    {
      id: 'complex-3',
      name: t('spa.services.items.complex_3.name', 'Ноги полностью + подмышки + глубокий бикини'),
      category: 'laser-complex',
      price: 4000,
      description: t('spa.services.items.complex_3.description', 'Расширенный комплекс для ног'),
      popular: true,
      image: '/images/beauty/services/laser-complex-3.jpg'
    },
    {
      id: 'complex-4',
      name: t('spa.services.items.complex_4.name', 'Руки полностью + ноги полностью + подмышки + глубокий бикини'),
      category: 'laser-complex',
      price: 5000,
      description: t('spa.services.items.complex_4.description', 'Максимальный комплекс эпиляции'),
      popular: false,
      image: '/images/beauty/services/laser-complex-4.jpg'
    }
  ];

  // ЭНДОСФЕРА-ТЕРАПИЯ
  const endosphereServices = [
    {
      id: 'endosphere-full-body',
      name: t('spa.services.items.endosphere_full_body.name', 'Все тело'),
      category: 'endosphere',
      price: 2200,
      description: t('spa.services.items.endosphere_full_body.description', 'Эндосфера-терапия всего тела для коррекции фигуры'),
      popular: true,
      image: '/images/beauty/services/endosphere-body.jpg'
    },
    {
      id: 'endosphere-face',
      name: t('spa.services.items.endosphere_face.name', 'Аппаратный массаж лица (Эндосфера, RF лифтинг)'),
      category: 'endosphere',
      price: 1700,
      description: t('spa.services.items.endosphere_face.description', 'Омолаживающий аппаратный массаж лица'),
      popular: true,
      image: '/images/beauty/services/endosphere-face.jpg'
    },
    {
      id: 'endosphere-subscription-6',
      name: t('spa.services.items.endosphere_subscription_6.name', 'Абонемент Эндосфера (6 сеансов)'),
      category: 'endosphere',
      price: 11000,
      description: t('spa.services.items.endosphere_subscription_6.description', 'Выгодный пакет из 6 процедур'),
      popular: true,
      image: '/images/beauty/services/endosphere-subscription.jpg'
    },
    {
      id: 'endosphere-subscription-12',
      name: t('spa.services.items.endosphere_subscription_12.name', 'Абонемент Эндосфера (12 сеансов)'),
      category: 'endosphere',
      price: 18000,
      description: t('spa.services.items.endosphere_subscription_12.description', 'Максимальный пакет из 12 процедур'),
      popular: true,
      image: '/images/beauty/services/endosphere-subscription-max.jpg'
    }
  ];

  // МАНИКЮР
  const manicureServices = [
    {
      id: 'manicure-no-coating',
      name: t('spa.services.items.manicure_no_coating.name', 'Маникюр без покрытия'),
      category: 'manicure',
      price: 600,
      description: t('spa.services.items.manicure_no_coating.description', 'Классический маникюр с обработкой ногтевых пластин'),
      popular: false,
      image: '/images/beauty/services/manicure-classic.jpg'
    },
    {
      id: 'manicure-base',
      name: t('spa.services.items.manicure_base.name', 'Маникюр с базовым покрытием'),
      category: 'manicure',
      price: 750,
      description: t('spa.services.items.manicure_base.description', 'Маникюр с защитным базовым покрытием'),
      popular: false,
      image: '/images/beauty/services/manicure-base.jpg'
    },
    {
      id: 'manicure-gel',
      name: t('spa.services.items.manicure_gel.name', 'Маникюр с покрытием гель-лак'),
      category: 'manicure',
      price: 900,
      description: t('spa.services.items.manicure_gel.description', 'Маникюр с долговечным гель-лаковым покрытием'),
      popular: true,
      image: '/images/beauty/services/manicure-gel.jpg'
    },
    {
      id: 'gel-strengthening',
      name: t('spa.services.items.gel_strengthening.name', 'Укрепление гелем без гель-лака'),
      category: 'manicure',
      price: 1400,
      description: t('spa.services.items.gel_strengthening.description', 'Укрепление натуральных ногтей гелем'),
      popular: false,
      image: '/images/beauty/services/gel-strengthening.jpg'
    },
    {
      id: 'gel-strengthening-polish',
      name: t('spa.services.items.gel_strengthening_polish.name', 'Укрепление гелем с гель-лаком'),
      category: 'manicure',
      price: 1600,
      description: t('spa.services.items.gel_strengthening_polish.description', 'Укрепление ногтей с цветным покрытием'),
      popular: true,
      image: '/images/beauty/services/gel-polish.jpg'
    },
    {
      id: 'gel-french',
      name: t('spa.services.items.gel_french.name', 'Гель-лак френч коррекция'),
      category: 'manicure',
      price: 1800,
      description: t('spa.services.items.gel_french.description', 'Классический французский маникюр гель-лаком'),
      popular: true,
      image: '/images/beauty/services/french-manicure.jpg'
    },
    {
      id: 'nail-extension-short',
      name: t('spa.services.items.nail_extension_short.name', 'Наращивание ногтей классика короткие (до 2мм)'),
      category: 'manicure',
      price: 2300,
      description: t('spa.services.items.nail_extension_short.description', 'Наращивание коротких ногтей'),
      popular: false,
      image: '/images/beauty/services/nail-extension.jpg'
    },
    {
      id: 'nail-extension-long',
      name: t('spa.services.items.nail_extension_long.name', 'Наращивание ногтей (свыше 2мм)'),
      category: 'manicure',
      price: 2600,
      description: t('spa.services.items.nail_extension_long.description', 'Наращивание длинных ногтей'),
      popular: false,
      image: '/images/beauty/services/nail-extension-long.jpg'
    },
    {
      id: 'nail-repair',
      name: t('spa.services.items.nail_repair.name', 'Ремонт ногтя'),
      category: 'manicure',
      priceFrom: 200,
      description: t('spa.services.items.nail_repair.description', 'Восстановление поврежденного ногтя'),
      popular: false,
      image: '/images/beauty/services/nail-repair.jpg'
    }
  ];

  // ПЕДИКЮР
  const pedicureServices = [
    {
      id: 'pedicure-full-no-coating',
      name: t('spa.services.items.pedicure_full_no_coating.name', 'Педикюр полный без покрытия'),
      category: 'pedicure',
      price: 1200,
      description: t('spa.services.items.pedicure_full_no_coating.description', 'Полная обработка стоп и ногтей'),
      popular: true,
      image: '/images/beauty/services/pedicure-full.jpg'
    },
    {
      id: 'pedicure-full-coating',
      name: t('spa.services.items.pedicure_full_coating.name', 'Педикюр полный с покрытием'),
      category: 'pedicure',
      price: 1400,
      description: t('spa.services.items.pedicure_full_coating.description', 'Полный педикюр с гель-лаковым покрытием'),
      popular: true,
      image: '/images/beauty/services/pedicure-gel.jpg'
    },
    {
      id: 'pedicure-toes-no-coating',
      name: t('spa.services.items.pedicure_toes_no_coating.name', 'Педикюр пальчики без покрытия'),
      category: 'pedicure',
      price: 600,
      description: t('spa.services.items.pedicure_toes_no_coating.description', 'Обработка только ногтей на пальцах'),
      popular: false,
      image: '/images/beauty/services/pedicure-toes.jpg'
    },
    {
      id: 'pedicure-toes-coating',
      name: t('spa.services.items.pedicure_toes_coating.name', 'Педикюр пальчики с покрытием гель-лак'),
      category: 'pedicure',
      price: 900,
      description: t('spa.services.items.pedicure_toes_coating.description', 'Обработка ногтей с цветным покрытием'),
      popular: true,
      image: '/images/beauty/services/pedicure-toes-gel.jpg'
    },
    {
      id: 'callus-removal',
      name: t('spa.services.items.callus_removal.name', 'Удаление мозолей'),
      category: 'pedicure',
      price: 300,
      description: t('spa.services.items.callus_removal.description', 'Профессиональное удаление мозолей'),
      popular: false,
      image: '/images/beauty/services/callus-removal.jpg'
    },
    {
      id: 'onycholysis-cleaning',
      name: t('spa.services.items.onycholysis_cleaning.name', 'Чистка онихолизиса (топ мастер)'),
      category: 'pedicure',
      priceFrom: 1000,
      description: t('spa.services.items.onycholysis_cleaning.description', 'Лечение отслоения ногтевых пластин'),
      popular: false,
      image: '/images/beauty/services/onycholysis.jpg'
    }
  ];

  // УХОД ЗА ВОЛОСАМИ
  const hairCareServices = [
    {
      id: 'womens-haircut',
      name: t('spa.services.items.womens_haircut.name', 'Женская стрижка'),
      category: 'hair-care',
      price: 800,
      description: t('spa.services.items.womens_haircut.description', 'Профессиональная женская стрижка'),
      popular: true,
      image: '/images/beauty/services/haircut-women.jpg'
    },
    {
      id: 'hair-wash-brushing',
      name: t('spa.services.items.hair_wash_brushing.name', 'Мытье с брашингом'),
      category: 'hair-care',
      price: 500,
      description: t('spa.services.items.hair_wash_brushing.description', 'Мытье головы с укладкой брашингом'),
      popular: false,
      image: '/images/beauty/services/hair-wash.jpg'
    },
    {
      id: 'bangs-haircut',
      name: t('spa.services.items.bangs_haircut.name', 'Стрижка челки'),
      category: 'hair-care',
      price: 500,
      description: t('spa.services.items.bangs_haircut.description', 'Коррекция и стрижка челки'),
      popular: false,
      image: '/images/beauty/services/bangs-cut.jpg'
    },
    {
      id: 'mens-haircut',
      name: t('spa.services.items.mens_haircut.name', 'Мужская стрижка'),
      category: 'hair-care',
      price: 800,
      description: t('spa.services.items.mens_haircut.description', 'Стильная мужская стрижка'),
      popular: true,
      image: '/images/beauty/services/haircut-men.jpg'
    },
    {
      id: 'hair-styling',
      name: t('spa.services.items.hair_styling.name', 'Укладка с брашингом со стайлинг-средствами'),
      category: 'hair-care',
      priceFrom: 600,
      priceTo: 800,
      description: t('spa.services.items.hair_styling.description', 'Профессиональная укладка волос'),
      popular: true,
      image: '/images/beauty/services/hair-styling.jpg'
    },
    {
      id: 'evening-styling',
      name: t('spa.services.items.evening_styling.name', 'Вечерняя укладка'),
      category: 'hair-care',
      priceFrom: 600,
      priceTo: 800,
      description: t('spa.services.items.evening_styling.description', 'Праздничная укладка для особых случаев'),
      popular: true,
      image: '/images/beauty/services/evening-styling.jpg'
    },
    {
      id: 'coloring-roots',
      name: t('spa.services.items.coloring_roots.name', 'Окрашивание в 1 тон корни'),
      category: 'hair-care',
      price: 2000,
      description: t('spa.services.items.coloring_roots.description', 'Окрашивание отросших корней'),
      popular: true,
      image: '/images/beauty/services/hair-coloring.jpg'
    },
    {
      id: 'coloring-stretching',
      name: t('spa.services.items.coloring_stretching.name', 'Окрашивание корни + растяжка цвета по всей длине'),
      category: 'hair-care',
      priceFrom: 3500,
      description: t('spa.services.items.coloring_stretching.description', 'Сложное окрашивание с растяжкой цвета'),
      popular: true,
      image: '/images/beauty/services/hair-stretching.jpg'
    },
    {
      id: 'coloring-short',
      name: t('spa.services.items.coloring_short.name', 'Окрашивание в 1 тон короткие'),
      category: 'hair-care',
      price: 2500,
      description: t('spa.services.items.coloring_short.description', 'Полное окрашивание коротких волос'),
      popular: false,
      image: '/images/beauty/services/coloring-short.jpg'
    },
    {
      id: 'coloring-medium',
      name: t('spa.services.items.coloring_medium.name', 'Окрашивание в 1 тон средние'),
      category: 'hair-care',
      priceFrom: 3000,
      description: t('spa.services.items.coloring_medium.description', 'Полное окрашивание волос средней длины'),
      popular: true,
      image: '/images/beauty/services/coloring-medium.jpg'
    },
    {
      id: 'coloring-long',
      name: t('spa.services.items.coloring_long.name', 'Окрашивание в 1 тон длинные'),
      category: 'hair-care',
      priceFrom: 4000,
      description: t('spa.services.items.coloring_long.description', 'Полное окрашивание длинных волос'),
      popular: true,
      image: '/images/beauty/services/coloring-long.jpg'
    },
    {
      id: 'total-blond-short',
      name: t('spa.services.items.total_blond_short.name', 'Тотальный блонд короткие'),
      category: 'hair-care',
      price: 5000,
      description: t('spa.services.items.total_blond_short.description', 'Осветление коротких волос до блонда'),
      popular: false,
      image: '/images/beauty/services/blond-short.jpg'
    },
    {
      id: 'total-blond-medium',
      name: t('spa.services.items.total_blond_medium.name', 'Тотальный блонд средние'),
      category: 'hair-care',
      price: 6000,
      description: t('spa.services.items.total_blond_medium.description', 'Осветление волос средней длины до блонда'),
      popular: true,
      image: '/images/beauty/services/blond-medium.jpg'
    },
    {
      id: 'total-blond-long',
      name: t('spa.services.items.total_blond_long.name', 'Тотальный блонд длинные'),
      category: 'hair-care',
      price: 6500,
      description: t('spa.services.items.total_blond_long.description', 'Осветление длинных волос до блонда'),
      popular: true,
      image: '/images/beauty/services/blond-long.jpg'
    },
    {
      id: 'happiness-short',
      name: t('spa.services.items.happiness_short.name', 'Счастье для волос уровень короткие'),
      category: 'hair-care',
      price: 2000,
      description: t('spa.services.items.happiness_short.description', 'Восстанавливающая процедура для коротких волос'),
      popular: false,
      image: '/images/beauty/services/happiness-short.jpg'
    },
    {
      id: 'happiness-medium',
      name: t('spa.services.items.happiness_medium.name', 'Счастье для волос уровень средние'),
      category: 'hair-care',
      price: 3000,
      description: t('spa.services.items.happiness_medium.description', 'Восстанавливающая процедура для волос средней длины'),
      popular: true,
      image: '/images/beauty/services/happiness-medium.jpg'
    },
    {
      id: 'happiness-long',
      name: t('spa.services.items.happiness_long.name', 'Счастье для волос уровень длинные'),
      category: 'hair-care',
      price: 3500,
      description: t('spa.services.items.happiness_long.description', 'Восстанавливающая процедура для длинных волос'),
      popular: true,
      image: '/images/beauty/services/happiness-long.jpg'
    },
    {
      id: 'indian-head-massage',
      name: t('spa.services.items.indian_head_massage.name', 'Индийский массаж головы'),
      category: 'hair-care',
      price: 1590,
      description: t('spa.services.items.indian_head_massage.description', 'Традиционный индийский массаж для роста волос'),
      popular: false,
      image: '/images/beauty/services/indian-massage.jpg'
    },
    {
      id: 'hair-express-care',
      name: t('spa.services.items.hair_express_care.name', 'Экспресс-уход'),
      category: 'hair-care',
      price: 500,
      description: t('spa.services.items.hair_express_care.description', 'Быстрая восстанавливающая процедура'),
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
      icon: '',
      color: 'linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)'
    },
    {
      id: 'cosmetology',
      name: t('spa.services.categories.cosmetology', 'Косметология'),
      description: 'Профессиональный уход за лицом',
      icon: '',
      color: 'linear-gradient(135deg, #D4A574 0%, #E6B885 100%)'
    },
    {
      id: 'laser-hair-removal',
      name: t('spa.services.categories.laser-hair-removal', 'Лазерная эпиляция'),
      description: 'Современные технологии эпиляции',
      icon: '',
      color: 'linear-gradient(135deg, #E8A87C 0%, #F8B88C 100%)'
    },
    {
      id: 'laser-men',
      name: t('spa.services.categories.laser-men', 'Лазерная эпиляция для мужчин'),
      description: 'Эпиляция для мужчин',
      icon: '',
      color: 'linear-gradient(135deg, #2D5B69 0%, #3D6B79 100%)'
    },
    {
      id: 'laser-complex',
      name: t('spa.services.categories.laser-complex', 'Лазерные комплексы'),
      description: 'Выгодные пакеты эпиляции',
      icon: '',
      color: 'linear-gradient(135deg, #4A90B8 0%, #5AA0C8 100%)'
    },
    {
      id: 'endosphere',
      name: t('spa.services.categories.endosphere', 'Эндосфера-терапия'),
      description: 'Аппаратная коррекция фигуры',
      icon: '',
      color: 'linear-gradient(135deg, #B8A8C8 0%, #C8B8D8 100%)'
    },
    {
      id: 'manicure',
      name: t('spa.services.categories.manicure', 'Маникюр'),
      description: 'Профессиональный уход за ногтями',
      icon: '',
      color: 'linear-gradient(135deg, #F0A0B0 0%, #FFB0C0 100%)'
    },
    {
      id: 'pedicure',
      name: t('spa.services.categories.pedicure', 'Педикюр'),
      description: 'Уход за стопами и ногтями ног',
      icon: '',
      color: 'linear-gradient(135deg, #A0C8F0 0%, #B0D8FF 100%)'
    },
    {
      id: 'hair-care',
      name: t('spa.services.categories.hair-care', 'Уход за волосами'),
      description: 'Стрижки, укладки и окрашивание',
      icon: '',
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