// меню ресторана 
// Последнее обновление: декабрь 2024

// Функция для создания данных с учетом i18next
export const getRestaurantData = (t) => {
  // Безопасная функция перевода
  const safeT = (key, fallback) => {
    try {
      return t ? t(key, fallback) : fallback;
    } catch (error) {
      console.warn('Translation error:', error);
      return fallback;
    }
  };
  // Данные блюд для меню
  const menuItems = [
    // ЗАВТРАКИ (с 8:00 до 12:00)
    {
      id: 1,
      name: safeT('restaurant.menu.items.kaif_breakfast.name', 'Завтрак "KAIF"'),
      description: safeT('restaurant.menu.items.kaif_breakfast.description', 'Фирменный завтрак нашего ресторана'),
      price: '320 THB',
      image: '/images/menu/breakfast/kaif-breakfast.jpg',
      tags: ['breakfast', 'popular'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 9,
      name: t('restaurant.menu.items.buckwheat_chicken_mushrooms.name', 'Гречневая каша с цыпленком, грибами и соусом Пармезан'),
      description: t('restaurant.menu.items.buckwheat_chicken_mushrooms.description', 'Питательная гречневая каша с нежным цыпленком, ароматными грибами и сливочным соусом'),
      price: '250 THB',
      image: '/images/menu/breakfast/grechka.jpg',
      tags: ['breakfast', 'healthy'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 2,
      name: t('restaurant.menu.items.oatmeal_apple_almonds.name', 'Овсянка с печеным яблоком и карамелизированным миндалем'),
      description: t('restaurant.menu.items.oatmeal_apple_almonds.description', 'Нежная овсяная каша с ароматным печеным яблоком и хрустящим карамелизированным миндалем'),
      price: '220 THB',
              image: '/images/menu/breakfast/oatmeal-breakfast.jpg',
      tags: ['breakfast', 'sweet', 'healthy'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 3,
      name: t('restaurant.menu.items.shakshuka_spinach_salmon.name', 'Шакшука со шпинатом и лососем'),
      description: t('restaurant.menu.items.shakshuka_spinach_salmon.description', 'Яичное блюдо с добавлением шпината и нежного лосося'),
      price: '330 THB',
      image: '/images/menu/breakfast/Shakshuka-salmon.jpg',
      tags: ['breakfast', 'seafood'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 4,
      name: t('restaurant.menu.items.shakshuka_tomato_feta.name', 'Шакшука с томатами и фетой'),
      description: t('restaurant.menu.items.shakshuka_tomato_feta.description', 'Традиционная шакшука с сочными томатами и сыром фета'),
      price: '300 THB',
      image: '/images/menu/breakfast/shaksukatom.jpg',
      tags: ['breakfast', 'vegetarian'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 6,
      name: t('restaurant.menu.items.toast_salmon_avocado.name', 'Тост с соленым лососем и авокадо'),
      description: t('restaurant.menu.items.toast_salmon_avocado.description', 'Изысканное сочетание хрустящего тоста, нежного лосося и спелого авокадо'),
      price: '330 THB',
      image: '/images/menu/breakfast/tostlos.jpg',
      tags: ['breakfast', 'seafood'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 7,
      name: t('restaurant.menu.items.toast_avocado_tomato.name', 'Тост с авокадо и томатами'),
      description: t('restaurant.menu.items.toast_avocado_tomato.description', 'Легкий и полезный завтрак из хрустящего тоста с авокадо и сочными томатами'),
      price: '270 THB',
      image: '/images/menu/breakfast/tostavokado.jpg',
      tags: ['breakfast', 'vegetarian', 'healthy'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 5,
      name: t('restaurant.menu.items.toast_cream_cheese_ham.name', 'Тост со сливочным сыром и ветчиной'),
      description: t('restaurant.menu.items.toast_cream_cheese_ham.description', 'Хрустящий тост с нежным сливочным сыром и качественной ветчиной'),
      price: '250 THB',
      image: '/images/menu/breakfast/tostham.jpg',
      tags: ['breakfast', 'meat'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 4,
      name: t('restaurant.menu.items.syrniki_passion_fruit.name', 'Сырники со сметаной и соусом из маракуйи'),
      description: t('restaurant.menu.items.syrniki_passion_fruit.description', 'Нежные домашние сырники с оригинальным соусом из маракуйи'),
      price: '250 THB',
      image: '/images/menu/breakfast/sirniki.jpg',
      tags: ['breakfast', 'sweet'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 8,
      name: t('restaurant.menu.items.matsoni_apricot.name', 'Мацони с абрикосовым вареньем'),
      description: t('restaurant.menu.items.matsoni_apricot.description', 'Традиционный кавказский йогурт с натуральным абрикосовым вареньем'),
      price: '120 THB',
      image: '/images/menu/breakfast/yogurt.jpg',
      tags: ['breakfast', 'vegetarian'],
      popular: false,
      category: 'breakfast'
    },
    
    // СУПЫ
    {
      id: 10,
      name: t('restaurant.menu.items.okroshka_ayran.name', 'Окрошка на айране'),
      description: t('restaurant.menu.items.okroshka_ayran.description', 'Освежающий холодный суп на кисломолочной основе с овощами и зеленью'),
      price: '270 THB',
      image: '/images/menu/soup/okroshkanaoiran.jpg',
      tags: ['soup', 'cold'],
      popular: true,
      category: 'soup'
    },
    {
      id: 11,
      name: t('restaurant.menu.items.okroshka_kvass.name', 'Окрошка на квасе'),
      description: t('restaurant.menu.items.okroshka_kvass.description', 'Классическая окрошка на квасе с отборными овощами, яйцом и свежей зеленью'),
      price: '270 THB',
      image: '/images/menu/soup/okroshkakvas.jpg',
      tags: ['soup', 'cold'],
      popular: false,
      category: 'soup'
    },
    {
      id: 12,
      name: t('restaurant.menu.items.chikhirtma_corn.name', 'Чихиртма с кукурузой'),
      description: t('restaurant.menu.items.chikhirtma_corn.description', 'Традиционный грузинский суп с насыщенным вкусом, дополненный сладкой кукурузой'),
      price: '190 THB',
      image: '/images/menu/soup/soupchiken.jpg',
      tags: ['soup', 'hot'],
      popular: false,
      category: 'soup'
    },
    {
      id: 13,
      name: t('restaurant.menu.items.borsch_classic.name', 'Борщ классический'),
      description: t('restaurant.menu.items.borsch_classic.description', 'Традиционный славянский суп насыщенного рубинового цвета с говядиной и овощами'),
      price: '270 THB',
      image: '/images/menu/soup/borsch-classic.jpg',
      tags: ['soup', 'hot'],
      popular: true,
      category: 'soup'
    },
    
    // САЛАТЫ И ЗАКУСКИ
    {
      id: 14,
      name: t('restaurant.menu.items.salad_potato_salmon.name', 'Листья салата с молодым картофелем и соленым лососем'),
      description: t('restaurant.menu.items.salad_potato_salmon.description', 'Свежий микс салатов с молодым картофелем и нежным соленым лососем'),
      price: '360 THB',
      image: null, // Убираем изображение до получения фото от фотографа
      tags: ['salad', 'seafood'],
      popular: true,
      category: 'salad'
    },
    {
      id: 15,
      name: t('restaurant.menu.items.vegetable_salad_cheese.name', 'Салат из свежих овощей с брынзой'),
      description: t('restaurant.menu.items.vegetable_salad_cheese.description', 'Традиционный салат из свежих овощей с добавлением нежной брынзы'),
      price: '320 THB',
      image: '/images/menu/salad/salat-brynza.jpg',
      tags: ['salad', 'vegetarian'],
      popular: false,
      category: 'salad'
    },
    {
      id: 16,
      name: t('restaurant.menu.items.tomato_cucumber_greens.name', 'Помидоры, огурцы, зелень'),
      description: t('restaurant.menu.items.tomato_cucumber_greens.description', 'Свежие сочные помидоры и хрустящие огурцы с ароматной зеленью, заправленные по выбору сметаной или оливковым маслом'),
      price: '190 THB',
      image: '/images/menu/salad/salad-baza.jpg',
      tags: ['salad', 'vegetarian', 'healthy'],
      popular: false,
      category: 'salad'
    },
    {
      id: 171,
      name: t('restaurant.menu.items.caesar_grilled_shrimp.name', 'Цезарь с креветками гриль'),
      description: t('restaurant.menu.items.caesar_grilled_shrimp.description', 'Классический салат Цезарь с сочными креветками, приготовленными на гриле'),
      price: '390 THB',
      image: '/images/menu/salad/cesar-seafood.jpg',
      tags: ['salad', 'seafood'],
      popular: true,
      category: 'salad'
    },
    {
      id: 172,
      name: t('restaurant.menu.items.caesar_chicken_kebab.name', 'Цезарь с куриным кебабом'),
      description: t('restaurant.menu.items.caesar_chicken_kebab.description', 'Традиционный салат Цезарь с нежным куриным кебабом'),
      price: '250 THB',
      image: '/images/menu/breakfast/caesar-salad.jpg',
      tags: ['salad', 'meat'],
      popular: false,
      category: 'salad'
    },
    {
      id: 17,
      name: t('restaurant.menu.items.hummus_chickpeas.name', 'Хумус с печеным нутом'),
      description: t('restaurant.menu.items.hummus_chickpeas.description', 'Нежный хумус с дополнительным печеным нутом для текстуры'),
      price: '170 THB',
      image: '/images/menu/salad/xymus.jpg',
      tags: ['appetizer', 'vegetarian'],
      popular: false,
      category: 'salad'
    },
    {
      id: 18,
      name: t('restaurant.menu.items.hummus_avocado_tomato.name', 'Хумус с авокадо и томатами'),
      description: t('restaurant.menu.items.hummus_avocado_tomato.description', 'Оригинальный хумус с добавлением спелого авокадо и свежих томатов'),
      price: '250 THB',
      image: '/images/menu/salad/xymusavokado.jpg',
      tags: ['appetizer', 'vegetarian', 'healthy'],
      popular: true,
      category: 'salad'
    },
    {
      id: 21,
      name: t('restaurant.menu.items.tzatziki_olives_pepper.name', 'Дзадзыки с оливками и маринованным перцем'),
      description: t('restaurant.menu.items.tzatziki_olives_pepper.description', 'Освежающий йогуртовый соус с огурцами, чесноком и зеленью, дополненный оливками и маринованным перцем'),
      price: '220 THB',
      image: '/images/menu/salad/tzatziki.jpg',
      tags: ['appetizer', 'vegetarian'],
      popular: false,
      category: 'salad'
    },
    
    // БЛЮДА НА МАНГАЛЕ
    {
      id: 22,
      name: t('restaurant.menu.items.chicken_kebab_yogurt.name', 'Кебаб из курицы (в йогурте)'),
      description: t('restaurant.menu.items.chicken_kebab_yogurt.description', 'Сочный кебаб из куриного филе, маринованного в йогурте с восточными специями'),
      price: '250 THB',
      image: '/images/menu/grill/chicken_kebab.jpg',
      tags: ['grill', 'meat'],
      popular: true,
      category: 'grill'
    },
    {
      id: 23,
      name: t('restaurant.menu.items.beef_kebab.name', 'Кебаб из говядины'),
      description: t('restaurant.menu.items.beef_kebab.description', 'Сочный кебаб из отборной говядины, приготовленный на открытом огне'),
      price: '490 THB',
      image: '/images/menu/grill/beef_kebab.jpg',
      tags: ['grill', 'meat'],
      popular: true,
      category: 'grill'
    },
    {
      id: 24,
      name: t('restaurant.menu.items.pork_neck_kebab.name', 'Кебаб из свиной шеи'),
      description: t('restaurant.menu.items.pork_neck_kebab.description', 'Кебаб из маринованной свиной шеи с ароматными специями'),
      price: '290 THB',
      image: '/images/menu/grill/shsvinina.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 25,
      name: t('restaurant.menu.items.chicken_adjika_potato.name', 'Цыпленок в аджике с картофелем'),
      description: t('restaurant.menu.items.chicken_adjika_potato.description', 'Сочный цыпленок, маринованный в пикантном соусе аджика, с гарниром из молодого картофеля'),
      price: '330 THB',
      image: '/images/menu/grill/chicken_adj.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 26,
      name: t('restaurant.menu.items.lyulya_kebab_chicken.name', 'Люля-кебаб (курица)'),
      description: t('restaurant.menu.items.lyulya_kebab_chicken.description', 'Рубленый кебаб из куриного филе с добавлением ароматных специй'),
      price: '250 THB',
      image: '/images/menu/grill/chicken_kebabb.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 27,
      name: t('restaurant.menu.items.lyulya_kebab_lamb.name', 'Люля-кебаб (баранина)'),
      description: t('restaurant.menu.items.lyulya_kebab_lamb.description', 'Традиционный люля-кебаб из рубленой баранины с восточными специями'),
      price: '390 THB',
      image: '/images/menu/grill/kebab_new.jpg',
      tags: ['grill', 'meat'],
      popular: true,
      category: 'grill'
    },
    {
      id: 28,
      name: t('restaurant.menu.items.lyulya_kebab_beef_pork.name', 'Люля-кебаб (говядина и свинина)'),
      description: t('restaurant.menu.items.lyulya_kebab_beef_pork.description', 'Сочный люля-кебаб из смеси рубленой говядины и свинины'),
      price: '370 THB',
      image: '/images/menu/grill/kebab_svin_gov.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 29,
      name: t('restaurant.menu.items.grilled_salmon.name', 'Лосось на мангале'),
      description: t('restaurant.menu.items.grilled_salmon.description', 'Нежное филе лосося, приготовленное на открытом огне'),
      price: '420 THB',
      image: '/images/menu/grill/Salmon_grill.jpg',
      tags: ['grill', 'seafood'],
      popular: true,
      category: 'grill'
    },
    {
      id: 30,
      name: t('restaurant.menu.items.white_perch_fillet.name', 'Филе белого окуня'),
      description: t('restaurant.menu.items.white_perch_fillet.description', 'Нежное филе белого окуня, приготовленное на мангале'),
      price: '390 THB',
      image: '/images/menu/grill/file_okun.jpg',
      tags: ['grill', 'seafood'],
      popular: false,
      category: 'grill'
    },
    {
      id: 31,
      name: t('restaurant.menu.items.grilled_shrimp.name', 'Креветки на мангале'),
      description: t('restaurant.menu.items.grilled_shrimp.description', 'Сочные тигровые креветки, приготовленные на мангале с добавлением трав и чесночного масла'),
      price: '490 THB',
      image: '/images/menu/grill/Grilled_shrimp.jpg',
      tags: ['grill', 'seafood'],
      popular: true,
      category: 'grill'
    },
    
    // ГАРНИРЫ
    {
      id: 32,
      name: t('restaurant.menu.items.grilled_vegetables.name', 'Овощи гриль'),
      description: t('restaurant.menu.items.grilled_vegetables.description', 'Ассорти из сезонных овощей, приготовленных на гриле'),
      price: '190 THB',
      image: '/images/menu/breakfast/vegetable.jpg',
      tags: ['side', 'vegetarian', 'healthy'],
      popular: true,
      category: 'side'
    },
    {
      id: 33,
      name: t('restaurant.menu.items.potatoes_herbs.name', 'Картофель со свежей зеленью'),
      description: t('restaurant.menu.items.potatoes_herbs.description', 'Отварной картофель с ароматной свежей зеленью и маслом'),
      price: '130 THB',
      image: '/images/menu/breakfast/kartoshka.jpg',
      tags: ['side', 'vegetarian'],
      popular: false,
      category: 'side'
    },
    {
      id: 34,
      name: t('restaurant.menu.items.buckwheat_mushrooms.name', 'Гречка с грибами'),
      description: t('restaurant.menu.items.buckwheat_mushrooms.description', 'Ароматная гречневая каша с обжаренными грибами'),
      price: '150 THB',
      image: '/images/menu/breakfast/grechka.jpg',
      tags: ['side', 'vegetarian', 'healthy'],
      popular: false,
      category: 'side'
    },
    {
      id: 35,
      name: t('restaurant.menu.items.rice_quail_eggs.name', 'Рис с перепелиными яйцами и специями'),
      description: t('restaurant.menu.items.rice_quail_eggs.description', 'Ароматный рис с нежными перепелиными яйцами и восточными специями'),
      price: '90 THB',
      image: '/images/menu/breakfast/rice.jpg',
      tags: ['side', 'healthy'],
      popular: false,
      category: 'side'
    },
    
    // СОУСЫ И ХЛЕБ
    {
      id: 39,
      name: t('restaurant.menu.items.sauce_tzatziki_mint.name', 'Дзадзыки с мятой'),
      description: t('restaurant.menu.items.sauce_tzatziki_mint.description', 'Освежающий йогуртовый соус с огурцами, чесноком, зеленью и свежей мятой'),
      price: '60 THB',
      image: '/images/menu/sauce/tzatzikii.jpg',
      tags: ['sauce', 'vegetarian'],
      popular: true,
      category: 'sauce'
    },
    {
      id: 40,
      name: t('restaurant.menu.items.sauce_satsebeli.name', 'Сацибели'),
      description: t('restaurant.menu.items.sauce_satsebeli.description', 'Острый грузинский соус из томатов, чеснока, перца и зелени'),
      price: '60 THB',
      image: '/images/menu/sauce/satsebeli.jpg',
      tags: ['sauce', 'vegetarian', 'spicy'],
      popular: true,
      category: 'sauce'
    },
    {
      id: 41,
      name: t('restaurant.menu.items.sauce_mustard.name', 'Горчичный соус'),
      description: t('restaurant.menu.items.sauce_mustard.description', 'Пикантный соус на основе дижонской горчицы с добавлением меда и специй'),
      price: '60 THB',
      image: '/images/menu/sauce/mustard.jpg',
      tags: ['sauce', 'vegetarian'],
      popular: false,
      category: 'sauce'
    },
    {
      id: 42,
      name: t('restaurant.menu.items.sauce_pesto.name', 'Песто'),
      description: t('restaurant.menu.items.sauce_pesto.description', 'Ароматный соус из базилика и кинзы с орехами и специями'),
      price: '60 THB',
      image: '/images/menu/sauce/pesto.jpg',
      tags: ['sauce', 'vegetarian'],
      popular: false,
      category: 'sauce'
    },
    {
      id: 43,
      name: t('restaurant.menu.items.bread_butter_adjika.name', 'Хлеб с маслом и аджикой'),
      description: t('restaurant.menu.items.bread_butter_adjika.description', 'Свежий хлеб с домашним маслом и острой аджикой'),
      price: '120 THB',
      image: '/images/menu/bread/bread-fresh.jpg',
      tags: ['bread', 'vegetarian', 'spicy'],
      popular: true,
      category: 'bread'
    },
    
    // БУРГЕРЫ И ТЕПЛЫЕ БЛЮДА
    {
      id: 46,
      name: t('restaurant.menu.items.shawarma_kaif.name', 'Шаурма KAIF'),
      description: t('restaurant.menu.items.shawarma_kaif.description', 'Фирменная шаурма KAIF с особой смесью специй и свежими овощами'),
      price: '250 THB',
      image: '/images/menu/breakfast/kaif-breakfast.jpg',
      tags: ['shawarma', 'meat'],
      popular: true,
      category: 'burger'
    },
    {
      id: 47,
      name: t('restaurant.menu.items.classic_cheeseburger.name', 'Классический чизбургер'),
      description: t('restaurant.menu.items.classic_cheeseburger.description', 'Сочная говяжья котлета с плавленым сыром, салатом и специальным соусом'),
      price: '290 THB',
              image: '/images/menu/breakfast/cheeseburger-deluxe.jpg',
      tags: ['burger', 'meat'],
      popular: true,
      category: 'burger'
    },
    {
      id: 48,
      name: t('restaurant.menu.items.kaif_burger_lamb.name', 'Бургер KAIF с котлетой из баранины и беконом'),
      description: t('restaurant.menu.items.kaif_burger_lamb.description', 'Премиальный бургер с котлетой из баранины, хрустящим беконом и авторским соусом'),
      price: '490 THB',
      image: '/images/menu/burger/burgerkaif.jpg',
      tags: ['burger', 'meat'],
      popular: true,
      category: 'burger'
    },
    {
      id: 49,
      name: t('restaurant.menu.items.burger_lamb_soy.name', 'Бургер с бараниной и соевым соусом'),
      description: t('restaurant.menu.items.burger_lamb_soy.description', 'Нежная котлета из баранины с азиатским соевым соусом и свежими овощами'),
      price: '290 THB',
      image: '/images/menu/burger/burgerlamb.jpg',
      tags: ['burger', 'meat'],
      popular: false,
      category: 'burger'
    },
    {
      id: 50,
      name: t('restaurant.menu.items.french_fries_burger.name', 'Картофель фри к бургеру'),
      description: t('restaurant.menu.items.french_fries_burger.description', 'Хрустящий картофель фри, идеальное дополнение к любому бургеру'),
      price: '120 THB',
      image: '/images/menu/breakfast/french_fries.jpg',
      tags: ['side', 'vegetarian'],
      popular: false,
      category: 'side'
    },
    {
      id: 51,
      name: t('restaurant.menu.items.french_fries_parmesan.name', 'Картофель фри с пармезаном'),
      description: t('restaurant.menu.items.french_fries_parmesan.description', 'Картофель фри с тертым пармезаном и ароматными травами'),
      price: '170 THB',
      image: '/images/menu/breakfast/french_fries.jpg',
      tags: ['side', 'vegetarian'],
      popular: true,
      category: 'side'
    },
    
    // ДЕСЕРТЫ
    {
      id: 54,
      name: t('restaurant.menu.items.homemade_yogurt.name', 'Домашний йогурт с абрикосовым вареньем'),
      description: t('restaurant.menu.items.homemade_yogurt.description', 'Нежный домашний йогурт с натуральным абрикосовым вареньем'),
      price: '120 THB',
      image: '/images/menu/breakfast/yogurt.jpg',
      tags: ['dessert', 'healthy'],
      popular: false,
      category: 'dessert'
    },
    {
      id: 55,
      name: t('restaurant.menu.items.napoleon.name', 'Наполеон'),
      description: t('restaurant.menu.items.napoleon.description', 'Классический слоеный торт Наполеон с нежным кремом'),
      price: '190 THB',
      image: '/images/menu/dessert/dessert-001.jpg',
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    {
      id: 56,
      name: t('restaurant.menu.items.lava_cake_cherry.name', 'Лава-кейк с вишневым вареньем'),
      description: t('restaurant.menu.items.lava_cake_cherry.description', 'Теплый шоколадный кейк с жидкой начинкой и вишневым вареньем'),
      price: '250 THB',
      image: '/images/menu/dessert/java.jpg',
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    {
      id: 57,
      name: t('restaurant.menu.items.cold_cheesecake_oreo.name', 'Холодный чизкейк с печеньем Oreo'),
      description: t('restaurant.menu.items.cold_cheesecake_oreo.description', 'Освежающий чизкейк без выпечки с хрустящим печеньем Oreo'),
      price: '250 THB',
      image: '/images/menu/dessert/oreo.jpg',
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    {
      id: 58,
      name: t('restaurant.menu.items.baked_apple_caramel.name', 'Печеное яблоко в карамели с ванильным мороженым'),
      description: t('restaurant.menu.items.baked_apple_caramel.description', 'Ароматное печеное яблоко в карамельной глазури с шариком ванильного мороженого'),
      price: '230 THB',
              image: '/images/menu/breakfast/apple-dessert.jpg',
      tags: ['dessert', 'sweet'],
      popular: false,
      category: 'dessert'
    },
    {
      id: 59,
      name: t('restaurant.menu.items.italian_ice_cream.name', 'Итальянское мороженое'),
      description: t('restaurant.menu.items.italian_ice_cream.description', 'Премиальное итальянское мороженое: французская ваниль, темный шоколад, соленая карамель'),
      price: '80 THB',
      image: null, // Убираем изображение до получения фото от фотографа
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    
    // ЧАЙ
    {
      id: 61,
      name: t('restaurant.menu.items.green_tea.name', 'Чай зеленый'),
      description: t('restaurant.menu.items.green_tea.description', 'Классический китайский зеленый чай'),
      price: '120 THB',
      image: null, // Используем иконку
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 62,
      name: t('restaurant.menu.items.black_tea.name', 'Чай черный'),
      description: t('restaurant.menu.items.black_tea.description', 'Крепкий черный чай'),
      price: '120 THB',
      image: null, // Используем иконку
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 63,
      name: t('restaurant.menu.items.ginger_honey_tea.name', 'Чай с имбирем и медом'),
      description: t('restaurant.menu.items.ginger_honey_tea.description', 'Согревающий чай со свежим имбирем, лимоном и медом'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['tea', 'hot'],
      popular: true,
      category: 'tea'
    },
    {
      id: 64,
      name: t('restaurant.menu.items.mint_tea.name', 'Чай с мятой'),
      description: t('restaurant.menu.items.mint_tea.description', 'Освежающий чай со свежей мятой'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 65,
      name: t('restaurant.menu.items.jasmine_tea.name', 'Чай ясминовый'),
      description: t('restaurant.menu.items.jasmine_tea.description', 'Деликатный зеленый чай с ясмином'),
      price: '120 THB',
      image: null, // Используем иконку
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 66,
      name: t('restaurant.menu.items.fruit_tea.name', 'Чай фруктовый'),
      description: t('restaurant.menu.items.fruit_tea.description', 'Чай с ассорти из сушеных фруктов и ягод'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 67,
      name: t('restaurant.menu.items.thai_iced_tea.name', 'Тайский чай со льдом и молоком'),
      description: t('restaurant.menu.items.thai_iced_tea.description', 'Традиционный тайский чай со сгущенным молоком и льдом'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['tea', 'cold'],
      popular: true,
      category: 'tea'
    },
    
    // КОФЕ
    {
      id: 68,
      name: t('restaurant.menu.items.espresso.name', 'Эспрессо'),
      description: t('restaurant.menu.items.espresso.description', 'Классический эспрессо из зерен арабики'),
      price: '120 THB',
      image: null, // Используем иконку
      tags: ['coffee', 'hot'],
      popular: false,
      category: 'coffee'
    },
    {
      id: 69,
      name: t('restaurant.menu.items.americano.name', 'Американо'),
      description: t('restaurant.menu.items.americano.description', 'Эспрессо с добавлением горячей воды'),
      price: '140 THB',
      image: null, // Используем иконку
      tags: ['coffee', 'hot'],
      popular: false,
      category: 'coffee'
    },
    {
      id: 70,
      name: t('restaurant.menu.items.cappuccino.name', 'Капучино'),
      description: t('restaurant.menu.items.cappuccino.description', 'Эспрессо с добавлением взбитого молока'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['coffee', 'hot'],
      popular: true,
      category: 'coffee'
    },
    {
      id: 71,
      name: t('restaurant.menu.items.latte.name', 'Латте'),
      description: t('restaurant.menu.items.latte.description', 'Эспрессо с добавлением стеамед молока'),
      price: '160 THB',
      image: null, // Используем иконку
      tags: ['coffee', 'hot'],
      popular: true,
      category: 'coffee'
    },
    {
      id: 72,
      name: t('restaurant.menu.items.mocha.name', 'Мокко'),
      description: t('restaurant.menu.items.mocha.description', 'Эспрессо с добавлением горячего шоколада и взбитого молока'),
      price: '180 THB',
      image: null, // Используем иконку
      tags: ['coffee', 'hot'],
      popular: false,
      category: 'coffee'
    },
    {
      id: 73,
      name: t('restaurant.menu.items.iced_latte.name', 'Айс латте'),
      description: t('restaurant.menu.items.iced_latte.description', 'Охлажденный кофе с молоком и льдом'),
      price: '170 THB',
      image: null, // Используем иконку
      tags: ['coffee', 'cold'],
      popular: true,
      category: 'coffee'
    },
    {
      id: 74,
      name: t('restaurant.menu.items.frappe.name', 'Фраппе'),
      description: t('restaurant.menu.items.frappe.description', 'Холодный кофейный напиток с молочной пенкой'),
      price: '170 THB',
      image: null, // Используем иконку
      tags: ['coffee', 'cold'],
      popular: false,
      category: 'coffee'
    },
    
    // СМУЗИ
    {
      id: 75,
      name: t('restaurant.menu.items.smoothie_lime.name', 'Лайм-лайм'),
      description: t('restaurant.menu.items.smoothie_lime.description', 'Освежающий смузи с двойной порцией лайма'),
      price: '170 THB',
      image: null, // Используем иконку вместо изображения
      tags: ['smoothie', 'cold', 'healthy'],
      popular: false,
      category: 'smoothie'
    },
    {
      id: 76,
      name: t('restaurant.menu.items.smoothie_mango_passion.name', 'Манго-маракуйя'),
      description: t('restaurant.menu.items.smoothie_mango_passion.description', 'Свежий смузи из спелого манго и маракуйи'),
      price: '170 THB',
      image: null, // Используем иконку вместо изображения
      tags: ['smoothie', 'cold', 'healthy'],
      popular: true,
      category: 'smoothie'
    },
    {
      id: 77,
      name: t('restaurant.menu.items.banana_shake.name', 'Банановый шейк'),
      description: t('restaurant.menu.items.banana_shake.description', 'Нежный банановый шейк с молоком и ванилью'),
      price: '170 THB',
      image: null, // Используем иконку вместо изображения
      tags: ['smoothie', 'cold', 'healthy'],
      popular: true,
      category: 'smoothie'
    },
    // MOCKTAILS
    {
      id: 78,
      name: t('restaurant.menu.items.matcha_latte.name', 'Матча латте'),
      description: t('restaurant.menu.items.matcha_latte.description', 'Ароматный напиток с японским зеленым чаем матча'),
      price: '110 THB',
      image: null, // Используем иконку
      tags: ['mocktail', 'cold', 'healthy'],
      popular: false,
      category: 'mocktail'
    },
    {
      id: 79,
      name: t('restaurant.menu.items.butterfly_tea.name', 'Чай из цветов клитории'),
      description: t('restaurant.menu.items.butterfly_tea.description', 'Экзотический голубой чай, меняющий цвет'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['mocktail', 'cold', 'healthy'],
      popular: true,
      category: 'mocktail'
    },
    {
      id: 80,
      name: t('restaurant.menu.items.passion_fruit_mocktail.name', 'Маракуйя'),
      description: t('restaurant.menu.items.passion_fruit_mocktail.description', 'Освежающий напиток из свежей маракуйи'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['mocktail', 'cold'],
      popular: true,
      category: 'mocktail'
    },
    {
      id: 81,
      name: t('restaurant.menu.items.pink_lemonade.name', 'Розовый лимонад'),
      description: t('restaurant.menu.items.pink_lemonade.description', 'Нежный розовый лимонад с ягодами'),
      price: '110 THB',
      image: null, // Используем иконку
      tags: ['mocktail', 'cold'],
      popular: false,
      category: 'mocktail'
    },
    {
      id: 82,
      name: t('restaurant.menu.items.honey_lemon.name', 'Мед и лимон'),
      description: t('restaurant.menu.items.honey_lemon.description', 'Полезный напиток с натуральным медом и лимоном'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['mocktail', 'cold', 'healthy'],
      popular: true,
      category: 'mocktail'
    },
    {
      id: 83,
      name: t('restaurant.menu.items.electrolyte.name', 'Электролит'),
      description: t('restaurant.menu.items.electrolyte.description', 'Изотонический напиток для восстановления баланса электролитов'),
      price: '120 THB',
      image: null, // Используем иконку
      tags: ['mocktail', 'cold', 'healthy'],
      popular: false,
      category: 'mocktail'
    },
    {
      id: 84,
      name: t('restaurant.menu.items.hibiscus_iced_tea.name', 'Холодный чай каркаде'),
      description: t('restaurant.menu.items.hibiscus_iced_tea.description', 'Освежающий чай из цветков гибискуса'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['mocktail', 'cold'],
      popular: false,
      category: 'mocktail'
    },
    {
      id: 85,
      name: t('restaurant.menu.items.lemonade_classic.name', 'Лимонад'),
      description: t('restaurant.menu.items.lemonade_classic.description', 'Классический лимонад из свежих лимонов'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['mocktail', 'cold'],
      popular: true,
      category: 'mocktail'
    },
    {
      id: 86,
      name: t('restaurant.menu.items.mojito_virgin.name', 'Мохито'),
      description: t('restaurant.menu.items.mojito_virgin.description', 'Безалкогольный мохито с мятой, лаймом и содовой'),
      price: '70 THB',
      image: null, // Используем иконку
      tags: ['mocktail', 'cold'],
      popular: true,
      category: 'mocktail'
    },
    
    // СВЕЖЕВЫЖАТЫЕ СОКИ
    {
      id: 87,
      name: t('restaurant.menu.items.orange_juice.name', 'Сок апельсиновый'),
      description: t('restaurant.menu.items.orange_juice.description', 'Свежевыжатый апельсиновый сок'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['juice', 'cold', 'healthy'],
      popular: true,
      category: 'juice'
    },
    {
      id: 88,
      name: t('restaurant.menu.items.pineapple_juice.name', 'Сок ананасовый'),
      description: t('restaurant.menu.items.pineapple_juice.description', 'Свежевыжатый сок из спелого ананаса'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['juice', 'cold', 'healthy'],
      popular: true,
      category: 'juice'
    },
    {
      id: 89,
      name: t('restaurant.menu.items.apple_juice.name', 'Сок яблочный'),
      description: t('restaurant.menu.items.apple_juice.description', 'Свежевыжатый яблочный сок'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['juice', 'cold', 'healthy'],
      popular: false,
      category: 'juice'
    },
    {
      id: 90,
      name: t('restaurant.menu.items.carrot_juice.name', 'Сок морковный'),
      description: t('restaurant.menu.items.carrot_juice.description', 'Свежевыжатый морковный сок'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['juice', 'cold', 'healthy'],
      popular: false,
      category: 'juice'
    },
    {
      id: 91,
      name: t('restaurant.menu.items.mango_juice.name', 'Сок манго'),
      description: t('restaurant.menu.items.mango_juice.description', 'Свежевыжатый сок из спелого манго'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['juice', 'cold', 'healthy'],
      popular: true,
      category: 'juice'
    },

    
    // WINE BY THE GLASS
    {
      id: 92,
      name: t('restaurant.menu.items.prosecco.name', 'Игристое вино Prosecco'),
      description: t('restaurant.menu.items.prosecco.description', 'Итальянское игристое вино'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['wine', 'alcohol'],
      popular: true,
      category: 'wine'
    },
    {
      id: 93,
      name: t('restaurant.menu.items.sauvignon_blanc.name', 'Белое вино Sauvignon Blanc'),
      description: t('restaurant.menu.items.sauvignon_blanc.description', 'Французское белое сухое вино'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['wine', 'alcohol'],
      popular: true,
      category: 'wine'
    },
    {
      id: 94,
      name: t('restaurant.menu.items.chardonnay.name', 'Белое вино Chardonnay'),
      description: t('restaurant.menu.items.chardonnay.description', 'Французское белое сухое вино'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['wine', 'alcohol'],
      popular: true,
      category: 'wine'
    },
    {
      id: 95,
      name: t('restaurant.menu.items.cabernet_sauvignon.name', 'Красное вино Cabernet Sauvignon'),
      description: t('restaurant.menu.items.cabernet_sauvignon.description', 'Итальянское красное сухое вино'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['wine', 'alcohol'],
      popular: true,
      category: 'wine'
    },
    
    // PROTEIN
    {
      id: 96,
      name: t('restaurant.menu.items.chocolate_protein.name', 'Шоколадный протеин'),
      description: t('restaurant.menu.items.chocolate_protein.description', 'Протеиновый коктейль с шоколадным вкусом'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['protein', 'cold', 'healthy'],
      popular: true,
      category: 'protein'
    },
    {
      id: 97,
      name: t('restaurant.menu.items.vanilla_protein.name', 'Ванильный протеин'),
      description: t('restaurant.menu.items.vanilla_protein.description', 'Протеиновый коктейль с ванильным вкусом'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['protein', 'cold', 'healthy'],
      popular: false,
      category: 'protein'
    },
    {
      id: 98,
      name: t('restaurant.menu.items.strawberry_protein.name', 'Клубничный протеин'),
      description: t('restaurant.menu.items.strawberry_protein.description', 'Протеиновый коктейль с клубничным вкусом'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['protein', 'cold', 'healthy'],
      popular: false,
      category: 'protein'
    },
    
    // WATER/MILK
    {
      id: 99,
      name: t('restaurant.menu.items.water.name', 'Вода'),
      description: t('restaurant.menu.items.water.description', 'Питьевая вода'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['water', 'cold'],
      popular: false,
      category: 'water'
    },
    {
      id: 100,
      name: t('restaurant.menu.items.milk.name', 'Молоко'),
      description: t('restaurant.menu.items.milk.description', 'Свежее коровье молоко'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['milk', 'cold'],
      popular: false,
      category: 'milk'
    },
    {
      id: 101,
      name: t('restaurant.menu.items.alt_milk.name', 'Альтернативное молоко'),
      description: t('restaurant.menu.items.alt_milk.description', 'Растительное молоко (овсяное, миндальное)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['milk', 'cold', 'healthy'],
      popular: false,
      category: 'milk'
    },
    {
      id: 102,
      name: t('restaurant.menu.items.coconut_water.name', 'Кокосовая вода'),
      description: t('restaurant.menu.items.coconut_water.description', 'Натуральная кокосовая вода'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['water', 'cold', 'healthy'],
      popular: true,
      category: 'water'
    },
    
    // SIGNATURE COFFEE DRINKS
    {
      id: 103,
      name: t('restaurant.menu.items.matcha_bomba.name', 'Матча бомба'),
      description: t('restaurant.menu.items.matcha_bomba.description', 'Авторский кофейный напиток с матча'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['coffee', 'cold', 'signature'],
      popular: true,
      category: 'coffee_signature'
    },
    {
      id: 104,
      name: t('restaurant.menu.items.espresso_chocolate.name', 'Эспрессо шоколад'),
      description: t('restaurant.menu.items.espresso_chocolate.description', 'Эспрессо с шоколадом'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['coffee', 'hot', 'signature'],
      popular: false,
      category: 'coffee_signature'
    },
    {
      id: 105,
      name: t('restaurant.menu.items.espresso_negroni.name', 'Эспрессо негрони'),
      description: t('restaurant.menu.items.espresso_negroni.description', 'Кофейная интерпретация классического коктейля'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['coffee', 'cold', 'signature'],
      popular: false,
      category: 'coffee_signature'
    },
    {
      id: 106,
      name: t('restaurant.menu.items.pineapple_express.name', 'Ананасовый экспресс'),
      description: t('restaurant.menu.items.pineapple_express.description', 'Кофе с ананасовыми нотками'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['coffee', 'cold', 'signature'],
      popular: true,
      category: 'coffee_signature'
    },
    {
      id: 107,
      name: t('restaurant.menu.items.matcha_coco.name', 'Матча коко'),
      description: t('restaurant.menu.items.matcha_coco.description', 'Матча с кокосовым молоком'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['coffee', 'cold', 'signature'],
      popular: false,
      category: 'coffee_signature'
    },
    {
      id: 108,
      name: t('restaurant.menu.items.honey_lemon_espresso.name', 'Мед лимон эспрессо'),
      description: t('restaurant.menu.items.honey_lemon_espresso.description', 'Эспрессо с медом и лимоном'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['coffee', 'hot', 'signature'],
      popular: false,
      category: 'coffee_signature'
    },
    
    // SOFT DRINKS
    {
      id: 109,
      name: t('restaurant.menu.items.kvass.name', 'Квас'),
      description: t('restaurant.menu.items.kvass.description', 'Традиционный русский квас 0.5л'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['soft_drink', 'cold'],
      popular: false,
      category: 'soft_drink'
    },
    {
      id: 110,
      name: t('restaurant.menu.items.cranberry_juice.name', 'Клюквенный сок'),
      description: t('restaurant.menu.items.cranberry_juice.description', 'Клюквенный сок 0.3л'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['soft_drink', 'cold'],
      popular: false,
      category: 'soft_drink'
    },
    
    // COCKTAILS
    {
      id: 111,
      name: t('restaurant.menu.items.pina_colada.name', 'Пина Колада'),
      description: t('restaurant.menu.items.pina_colada.description', 'Экзотический коктейль с ромом и кокосом'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['cocktail', 'alcohol'],
      popular: true,
      category: 'cocktail'
    },
    {
      id: 112,
      name: t('restaurant.menu.items.aperol_spritz.name', 'Апероль спритц'),
      description: t('restaurant.menu.items.aperol_spritz.description', 'Итальянский аперитив с Aperol'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['cocktail', 'alcohol'],
      popular: true,
      category: 'cocktail'
    },
    {
      id: 113,
      name: t('restaurant.menu.items.bloody_mary.name', 'Кровавая Мэри'),
      description: t('restaurant.menu.items.bloody_mary.description', 'Классический коктейль с водкой и томатным соком'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['cocktail', 'alcohol'],
      popular: false,
      category: 'cocktail'
    },
    {
      id: 114,
      name: t('restaurant.menu.items.negroni.name', 'Негрони'),
      description: t('restaurant.menu.items.negroni.description', 'Классический итальянский коктейль'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['cocktail', 'alcohol'],
      popular: false,
      category: 'cocktail'
    },
    {
      id: 115,
      name: t('restaurant.menu.items.mojito_alcohol.name', 'Мохито алкогольный'),
      description: t('restaurant.menu.items.mojito_alcohol.description', 'Классический кубинский коктейль с ромом'),
      price: '70 THB',
      image: null, // Используем иконку
      tags: ['cocktail', 'alcohol'],
      popular: true,
      category: 'cocktail'
    },
    
    // HARD DRINKS
    {
      id: 116,
      name: t('restaurant.menu.items.pure_vodka.name', 'Водка чистая'),
      description: t('restaurant.menu.items.pure_vodka.description', 'Водка (50 мл)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['strong', 'alcohol'],
      popular: false,
      category: 'strong'
    },
    {
      id: 117,
      name: t('restaurant.menu.items.grey_goose.name', 'Grey Goose'),
      description: t('restaurant.menu.items.grey_goose.description', 'Премиальная французская водка (50 мл)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['strong', 'alcohol'],
      popular: true,
      category: 'strong'
    },
    {
      id: 118,
      name: t('restaurant.menu.items.macallan_12.name', 'Macallan 12'),
      description: t('restaurant.menu.items.macallan_12.description', 'Шотландский виски 12 лет (50 мл)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['strong', 'alcohol'],
      popular: true,
      category: 'strong'
    },
    {
      id: 119,
      name: t('restaurant.menu.items.jack_daniels.name', 'Jack Daniels'),
      description: t('restaurant.menu.items.jack_daniels.description', 'Теннессийский виски (50 мл)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['strong', 'alcohol'],
      popular: true,
      category: 'strong'
    },
    {
      id: 120,
      name: t('restaurant.menu.items.jim_beam.name', 'Jim Beam'),
      description: t('restaurant.menu.items.jim_beam.description', 'Американский бурбон (50 мл)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['strong', 'alcohol'],
      popular: false,
      category: 'strong'
    },
    {
      id: 121,
      name: t('restaurant.menu.items.jim_beam_apple.name', 'Jim Beam Apple'),
      description: t('restaurant.menu.items.jim_beam_apple.description', 'Бурбон с яблочным ликером (50 мл)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['strong', 'alcohol'],
      popular: false,
      category: 'strong'
    },
    {
      id: 122,
      name: t('restaurant.menu.items.bacardi_blanca.name', 'Bacardi Carta Blanca'),
      description: t('restaurant.menu.items.bacardi_blanca.description', 'Белый ром (50 мл)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['strong', 'alcohol'],
      popular: false,
      category: 'strong'
    },
    {
      id: 123,
      name: t('restaurant.menu.items.bacardi_negra.name', 'Bacardi Carta Negra'),
      description: t('restaurant.menu.items.bacardi_negra.description', 'Темный ром (50 мл)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['strong', 'alcohol'],
      popular: false,
      category: 'strong'
    },
    {
      id: 124,
      name: t('restaurant.menu.items.bombay_gin.name', 'Bombay Gin'),
      description: t('restaurant.menu.items.bombay_gin.description', 'Лондонский сухой джин (50 мл)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['strong', 'alcohol'],
      popular: false,
      category: 'strong'
    },
    {
      id: 125,
      name: t('restaurant.menu.items.beefeater_gin.name', 'Beefeater Gin'),
      description: t('restaurant.menu.items.beefeater_gin.description', 'Лондонский сухой джин (50 мл)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['strong', 'alcohol'],
      popular: false,
      category: 'strong'
    },
    {
      id: 126,
      name: t('restaurant.menu.items.jose_cuervo.name', 'Jose Cuervo'),
      description: t('restaurant.menu.items.jose_cuervo.description', 'Мексиканская текила (50 мл)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['strong', 'alcohol'],
      popular: true,
      category: 'strong'
    },
    
    // LIQUEURS/VERMOUTHS
    {
      id: 127,
      name: t('restaurant.menu.items.martini_extra_dry.name', 'Martini Extra Dry'),
      description: t('restaurant.menu.items.martini_extra_dry.description', 'Сухой вермут (50 мл)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['liqueur', 'alcohol'],
      popular: false,
      category: 'liqueur'
    },
    {
      id: 128,
      name: t('restaurant.menu.items.vermouth_chinzano.name', 'Vermouth Chinzano'),
      description: t('restaurant.menu.items.vermouth_chinzano.description', 'Итальянский вермут (50 мл)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['liqueur', 'alcohol'],
      popular: false,
      category: 'liqueur'
    },
    {
      id: 129,
      name: t('restaurant.menu.items.martini_rose.name', 'Martini Vermouth Rose'),
      description: t('restaurant.menu.items.martini_rose.description', 'Розовый вермут (50 мл)'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['liqueur', 'alcohol'],
      popular: false,
      category: 'liqueur'
    },
    
    // BEER (BOTTLED)
    {
      id: 130,
      name: t('restaurant.menu.items.singha_beer.name', 'Singha Beer'),
      description: t('restaurant.menu.items.singha_beer.description', 'Тайское светлое пиво 0.33л'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['beer', 'alcohol'],
      popular: true,
      category: 'beer'
    },
    {
      id: 131,
      name: t('restaurant.menu.items.chang_beer.name', 'Chang Beer'),
      description: t('restaurant.menu.items.chang_beer.description', 'Тайское светлое пиво 0.33л'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['beer', 'alcohol'],
      popular: false,
      category: 'beer'
    },
    {
      id: 132,
      name: t('restaurant.menu.items.corona_beer.name', 'Corona'),
      description: t('restaurant.menu.items.corona_beer.description', 'Мексиканское светлое пиво 0.33л'),
      price: '150 THB',
      image: null, // Используем иконку
      tags: ['beer', 'alcohol'],
      popular: true,
      category: 'beer'
    },
    
    // FITNESS DRINK MENU - Фитнес-напитки
    {
      id: 133,
      name: t('restaurant.menu.items.c4_original_shot.name', 'PRE-WORKOUT'),
      description: t('restaurant.menu.items.c4_original_shot.description', 'C4 Original Shot - energy boost before training'),
      price: '110 THB',
      image: null, // Используем иконку
      tags: ['fitness', 'pre-workout'],
      popular: true,
      category: 'fitness'
    },
    {
      id: 134,
      name: t('restaurant.menu.items.serious_mass_shake.name', 'MASS GAINER'),
      description: t('restaurant.menu.items.serious_mass_shake.description', 'Serious Mass Shake - high-calorie shake for muscle growth'),
      price: '190 THB',
      image: null, // Используем иконку
      tags: ['fitness', 'mass-gainer'],
      popular: true,
      category: 'fitness'
    },
    {
      id: 135,
      name: t('restaurant.menu.items.xtend_eaa_recovery.name', 'BCAA / EAA'),
      description: t('restaurant.menu.items.xtend_eaa_recovery.description', 'Xtend EAA Recovery - anti-catabolic post-workout support'),
      price: '90 THB',
      image: null, // Используем иконку
      tags: ['fitness', 'bcaa', 'recovery'],
      popular: false,
      category: 'fitness'
    },
    {
      id: 136,
      name: t('restaurant.menu.items.electrolyte_boost.name', 'ELECTROLYTE BOOST'),
      description: t('restaurant.menu.items.electrolyte_boost.description', 'Replenish Minerals After Sweat Loss - hydration shot'),
      price: '110 THB',
      image: null, // Используем иконку
      tags: ['fitness', 'electrolyte', 'recovery'],
      popular: false,
      category: 'fitness'
    },
    {
      id: 137,
      name: t('restaurant.menu.items.l_carnitine_shot.name', 'FAT BURNING'),
      description: t('restaurant.menu.items.l_carnitine_shot.description', 'L-Carnitine Shot - fat metabolism support'),
      price: '110 THB',
      image: null, // Используем иконку
      tags: ['fitness', 'fat-burner'],
      popular: false,
      category: 'fitness'
    }
  ];
  
  // Данные для слайдера
  const slides = [
    {
      id: 1,
      image: '/images/menu/breakfast/kaif-breakfast.jpg',
      title: t('restaurant.slider.slide1.title', 'Изысканная кухня'),
      description: t('restaurant.slider.slide1.description', 'Откройте для себя уникальные вкусы пяти разных кухонь мира в нашем ресторане')
    },
    {
      id: 2,
      image: '/images/menu/breakfast/kaif-breakfast.jpg',
      title: t('restaurant.slider.slide2.title', 'Атмосфера комфорта'),
      description: t('restaurant.slider.slide2.description', 'Наслаждайтесь едой в уютной атмосфере с видом на тропический сад')
    },
    {
      id: 3,
      image: '/images/menu/breakfast/kaif-breakfast.jpg',
      title: t('restaurant.slider.slide3.title', 'Свежие ингредиенты'),
      description: t('restaurant.slider.slide3.description', 'Мы используем только свежие и качественные ингредиенты для приготовления наших блюд')
    }
  ];
  
  // Стили для тегов
  const tagStyles = {
    breakfast: 'bg-orange-50 text-orange-600',
    soup: 'bg-blue-50 text-blue-600',
    salad: 'bg-green-50 text-green-600',
    appetizer: 'bg-purple-50 text-purple-600',
    grill: 'bg-red-50 text-red-600',
    main: 'bg-indigo-50 text-indigo-600',
    dessert: 'bg-pink-50 text-pink-600',
    drinks: 'bg-cyan-50 text-cyan-600',
    popular: 'bg-yellow-50 text-yellow-600',
    vegetarian: 'bg-emerald-50 text-emerald-600',
    vegan: 'bg-lime-50 text-lime-600',
    healthy: 'bg-teal-50 text-teal-600',
    spicy: 'bg-red-100 text-red-700',
    seafood: 'bg-blue-100 text-blue-700',
    meat: 'bg-amber-50 text-amber-600',
    sweet: 'bg-rose-50 text-rose-600',
    cold: 'bg-slate-50 text-slate-600',
    hot: 'bg-orange-100 text-orange-700',
    // Новые категории напитков
    smoothie: 'bg-green-50 text-green-600',
    mocktail: 'bg-purple-50 text-purple-600',
    juice: 'bg-orange-50 text-orange-600',
    wine: 'bg-red-50 text-red-600',
    fitness: 'bg-blue-50 text-blue-600',
    water: 'bg-cyan-50 text-cyan-600',
    milk: 'bg-indigo-50 text-indigo-600',
    coffee: 'bg-amber-50 text-amber-600',
    signature: 'bg-yellow-100 text-yellow-700',
    coffee_signature: 'bg-yellow-100 text-yellow-700',
    soft_drink: 'bg-gray-50 text-gray-600',
    cocktail: 'bg-rose-50 text-rose-600',
    strong: 'bg-red-100 text-red-700',
    liqueur: 'bg-purple-100 text-purple-700',
    beer: 'bg-yellow-50 text-yellow-600',
    alcohol: 'bg-red-50 text-red-600',
    // Фитнес-напитки
    fitness: 'bg-blue-100 text-blue-700',
    'pre-workout': 'bg-orange-100 text-orange-700',
    'mass-gainer': 'bg-green-100 text-green-700',
    bcaa: 'bg-purple-100 text-purple-700',
    recovery: 'bg-emerald-100 text-emerald-700',
    electrolyte: 'bg-cyan-100 text-cyan-700',
    'fat-burner': 'bg-red-100 text-red-700'
  };

  return { menuItems, slides, tagStyles };
};
