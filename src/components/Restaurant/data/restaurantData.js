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
  // Данные блюд для меню организованные по категориям
  const menuItems = [
    // ===============================
    // ЗАВТРАКИ / BREAKFAST (с 8:00 до 12:00)
    // ===============================
    {
      id: 1,
      name: safeT('restaurant.menu.items.kaif_breakfast.name', 'Завтрак "KAIF"'),
      description: safeT('restaurant.menu.items.kaif_breakfast.description', 'Отварные яйца / сыр эмменталь / ростбиф / микс черри / зерновой хлеб'),
      price: '430 THB',
      image: '/images/menu/breakfast/kaif-breakfast.jpg',
      tags: ['breakfast', 'popular'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 43,
      name: safeT('restaurant.menu.items.buckwheat_chicken_mushrooms.name', 'Гречневая каша с цыпленком и соусом пармезан'),
      description: safeT('restaurant.menu.items.buckwheat_chicken_mushrooms.description', 'Гречневая каша / цыпленок / соус пармезан'),
      price: '260 THB',
      image: '/images/menu/breakfast/grechka.jpg',
      tags: ['breakfast', 'healthy'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 2,
      name: safeT('restaurant.menu.items.oatmeal_apple_almonds.name', 'Овсяная каша на кокосовом молоке'),
      description: safeT('restaurant.menu.items.oatmeal_apple_almonds.description', 'Овсяная каша на кокосовом молоке / манго / мед / микс орехов'),
      price: '190 THB',
      image: '/images/menu/breakfast/oatmeal-breakfast.jpg',
      tags: ['breakfast', 'sweet', 'healthy', 'vegan'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 3,
      name: safeT('restaurant.menu.items.shakshuka_spinach_salmon.name', 'Скрэмбл с риетом из лосося'),
      description: safeT('restaurant.menu.items.shakshuka_spinach_salmon.description', 'Скрэмбл / риет из лосося / микс черри / зерновой хлеб / сливочное масло'),
      price: '290 THB',
      image: '/images/menu/breakfast/Shakshuka-salmon.jpg',
      tags: ['breakfast', 'seafood'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 5,
      name: safeT('restaurant.menu.items.toast_salmon_avocado.name', 'Тост с лососем'),
      description: safeT('restaurant.menu.items.toast_salmon_avocado.description', 'Тост с лососем / скрэмбл / гуакамоле / салат'),
      price: '350 THB',
      image: '/images/menu/breakfast/tostlos.jpg',
      tags: ['breakfast', 'seafood'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 6,
      name: safeT('restaurant.menu.items.homemade_granola.name', 'Домашняя гранола'),
      description: safeT('restaurant.menu.items.homemade_granola.description', 'Домашняя гранола / лабне / микс ягод'),
      price: '290 THB',
      image: null,
      tags: ['breakfast', 'healthy', 'vegan'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 7,
      name: safeT('restaurant.menu.items.syrniki_passion_fruit.name', 'Сырники'),
      description: safeT('restaurant.menu.items.syrniki_passion_fruit.description', 'Сырники / крем из сметаны / манго джем'),
      price: '270 THB',
      image: '/images/menu/breakfast/sirniki.jpg',
      tags: ['breakfast', 'sweet'],
      popular: true,
      category: 'breakfast'
    },

    // ===============================
    // СУПЫ / SOUPS
    // ===============================
    {
      id: 8,
      name: safeT('restaurant.menu.items.pumpkin_soup.name', 'Тыквенный крем-суп'),
      description: safeT('restaurant.menu.items.pumpkin_soup.description', 'Тыквенный крем-суп / сыр фета / тыквенные семечки'),
      price: '190 THB',
      image: null,
      tags: ['soup', 'hot', 'vegan'],
      popular: true,
      category: 'soup'
    },
    {
      id: 9,
      name: safeT('restaurant.menu.items.borsch_classic.name', 'Классический борщ с говядиной'),
      description: safeT('restaurant.menu.items.borsch_classic.description', 'Классический борщ с говядиной'),
      price: '290 THB',
      image: '/images/menu/soup/borsch-classic.jpg',
      tags: ['soup', 'hot'],
      popular: true,
      category: 'soup'
    },
    {
      id: 10,
      name: safeT('restaurant.menu.items.creamy_salmon.name', 'Сливочный суп с лососем'),
      description: safeT('restaurant.menu.items.creamy_salmon.description', 'Сливочный суп с лососем'),
      price: '290 THB',
      image: null,
      tags: ['soup', 'hot', 'seafood'],
      popular: false,
      category: 'soup'
    },
    {
      id: 11,
      name: safeT('restaurant.menu.items.gazpacho_shrimp.name', 'Гаспачо с креветками'),
      description: safeT('restaurant.menu.items.gazpacho_shrimp.description', 'Борщ Гаспачо / тар-тар из креветок / тар-тар из свежих овощей'),
      price: '270 THB',
      image: null,
      tags: ['soup', 'cold'],
      popular: false,
      category: 'soup'
    },
    // ===============================
    // САЛАТЫ И ЗАКУСКИ / SALADS AND APPETIZERS
    // ===============================
    {
      id: 12,
      name: safeT('restaurant.menu.items.green_salad.name', 'Зеленый салат'),
      description: safeT('restaurant.menu.items.green_salad.description', 'Зеленый салат / брокколи / огурцы / бэби шпинат / бобы эдамамэ'),
      price: '290 THB',
      image: null,
      tags: ['salad', 'vegetarian', 'vegan', 'healthy'],
      popular: true,
      category: 'salad'
    },
    {
      id: 13,
      name: safeT('restaurant.menu.items.crispy_eggplant.name', 'Хрустящие баклажаны'),
      description: safeT('restaurant.menu.items.crispy_eggplant.description', 'Хрустящие баклажаны / йогурт / микс орехов / соус сладкий чили'),
      price: '290 THB',
      image: null,
      tags: ['appetizer', 'vegetarian'],
      popular: false,
      category: 'salad'
    },
    {
      id: 14,
      name: safeT('restaurant.menu.items.caesar_chicken.name', 'Салат Цезарь с цыпленком'),
      description: safeT('restaurant.menu.items.caesar_chicken.description', 'Салат цезарь / печеный цыпленок / перепелиные яйца'),
      price: '330 THB',
      image: '/images/menu/salad/caesar-salad.jpg',
      tags: ['salad', 'meat'],
      popular: true,
      category: 'salad'
    },
    {
      id: 15,
      name: safeT('restaurant.menu.items.vegetable_salad.name', 'Овощной салат'),
      description: safeT('restaurant.menu.items.vegetable_salad.description', 'Овощной салат / огурцы / томаты / редис / оливковое масло'),
      price: '190 THB',
      image: null,
      tags: ['salad', 'vegetarian', 'vegan', 'healthy'],
      popular: false,
      category: 'salad'
    },
    {
      id: 16,
      name: safeT('restaurant.menu.items.roast_beef_salad.name', 'Салат с ростбифом'),
      description: safeT('restaurant.menu.items.roast_beef_salad.description', 'Салат с ростбифом / болгарский перец / огурцы / микс салатов'),
      price: '390 THB',
      image: null,
      tags: ['salad', 'meat'],
      popular: false,
      category: 'salad'
    },
    {
      id: 17,
      name: safeT('restaurant.menu.items.crispy_shrimp.name', 'Хрустящие креветки'),
      description: safeT('restaurant.menu.items.crispy_shrimp.description', 'Хрустящие креветки / мусс из печеных овощей'),
      price: '390 THB',
      image: null,
      tags: ['appetizer', 'seafood'],
      popular: true,
      category: 'salad'
    },
    {
      id: 18,
      name: safeT('restaurant.menu.items.big_snack_set.name', 'Большой сет снеков'),
      description: safeT('restaurant.menu.items.big_snack_set.description', 'Большой сет снеков'),
      price: '2100 THB',
      image: null,
      tags: ['appetizer', 'meat', 'seafood'],
      popular: false,
      category: 'salad'
    },
    {
      id: 19,
      name: safeT('restaurant.menu.items.small_snack_set.name', 'Маленький сет снеков'),
      description: safeT('restaurant.menu.items.small_snack_set.description', 'Маленький сет снеков'),
      price: '1290 THB',
      image: null,
      tags: ['appetizer', 'meat'],
      popular: false,
      category: 'salad'
    },
    // ===============================
    // БЛЮДА НА МАНГАЛЕ / DISHES ON THE MANGAL
    // ===============================
    {
      id: 20,
      name: safeT('restaurant.menu.items.chicken_kebab.name', 'Шашлык из куриного филе'),
      description: safeT('restaurant.menu.items.chicken_kebab.description', 'Шашлык из куриного филе'),
      price: '270 THB',
      image: '/images/menu/grill/chicken_kebab.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 21,
      name: safeT('restaurant.menu.items.pork_kebab.name', 'Шашлык из свинины'),
      description: safeT('restaurant.menu.items.pork_kebab.description', 'Шашлык из свинины'),
      price: '290 THB',
      image: '/images/menu/grill/pork_kebab.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 22,
      name: safeT('restaurant.menu.items.lyulya_chicken.name', 'Люля-кебаб из курицы'),
      description: safeT('restaurant.menu.items.lyulya_chicken.description', 'Люля-кебаб из курицы'),
      price: '270 THB',
      image: '/images/menu/grill/lyulya_chicken.jpg',
      tags: ['grill', 'meat'],
      popular: true,
      category: 'grill'
    },
    {
      id: 23,
      name: safeT('restaurant.menu.items.lyulya_lamb.name', 'Люля кебаб из баранины'),
      description: safeT('restaurant.menu.items.lyulya_lamb.description', 'Люля кебаб из баранины'),
      price: '390 THB',
      image: '/images/menu/grill/lyulya_lamb.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 24,
      name: safeT('restaurant.menu.items.lyulya_beef_pork.name', 'Люля кебаб из говядины и свинины'),
      description: safeT('restaurant.menu.items.lyulya_beef_pork.description', 'Люля кебаб из говядины и свинины'),
      price: '390 THB',
      image: '/images/menu/grill/lyulya_beef_pork.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 25,
      name: safeT('restaurant.menu.items.assorted_kebabs.name', 'Ассорти шашлыков'),
      description: safeT('restaurant.menu.items.assorted_kebabs.description', 'Ассорти шашлыков'),
      price: '1490 THB',
      image: '/images/menu/grill/assorted_kebabs.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 26,
      name: safeT('restaurant.menu.items.vegetables_kebab.name', 'Овощной шашлык'),
      description: safeT('restaurant.menu.items.vegetables_kebab.description', 'Овощной шашлык'),
      price: '190 THB',
      image: '/images/menu/grill/vegetables_kebab.jpg',
      tags: ['grill', 'vegetarian', 'vegan'],
      popular: true,
      category: 'grill'
    },
    {
      id: 27,
      name: safeT('restaurant.menu.items.chicken_thigh_grill.name', 'Бедро цыпленка на мангале'),
      description: safeT('restaurant.menu.items.chicken_thigh_grill.description', 'Бедро цыпленка на мангале / молодой картофель'),
      price: '340 THB',
      image: '/images/menu/grill/chicken_thigh.jpg',
      tags: ['grill', 'meat'],
      popular: true,
      category: 'grill'
    },
    // ===============================
    // ГОРЯЧИЕ БЛЮДА / HOT DISHES
    // ===============================
    {
      id: 28,
      name: safeT('restaurant.menu.items.salmon_steak.name', 'Стейк лосося'),
      description: safeT('restaurant.menu.items.salmon_steak.description', 'Стейк лосося / спаржа / шпинат / копченый йогурт'),
      price: '490 THB',
      image: null,
      tags: ['main', 'seafood'],
      popular: true,
      category: 'main'
    },
    {
      id: 29,
      name: safeT('restaurant.menu.items.sea_bass_zucchini.name', 'Сибас с цукини'),
      description: safeT('restaurant.menu.items.sea_bass_zucchini.description', 'Сибас с цукини / соус из белого вина / оливок и каперсов'),
      price: '470 THB',
      image: null,
      tags: ['main', 'seafood'],
      popular: false,
      category: 'main'
    },
    {
      id: 30,
      name: safeT('restaurant.menu.items.classic_cheeseburger.name', 'Классический чизбургер'),
      description: safeT('restaurant.menu.items.classic_cheeseburger.description', 'Классический чизбургер / картофель фри с пармезаном'),
      price: '420 THB',
      image: '/images/menu/burger/cheeseburger-deluxe.jpg',
      tags: ['burger', 'meat'],
      popular: true,
      category: 'main'
    },
    {
      id: 31,
      name: safeT('restaurant.menu.items.mignon_steak.name', 'Стейк миньон'),
      description: safeT('restaurant.menu.items.mignon_steak.description', 'Стейк миньон / картофельное пюре / ромейн / соус демиглас'),
      price: '1100 THB',
      image: null,
      tags: ['main', 'meat'],
      popular: true,
      category: 'main'
    },
    {
      id: 32,
      name: safeT('restaurant.menu.items.fried_rice_shrimp.name', 'Жареный рис с овощами и креветками'),
      description: safeT('restaurant.menu.items.fried_rice_shrimp.description', 'Жареный рис с овощами и креветками'),
      price: '210 THB',
      image: null,
      tags: ['main', 'seafood'],
      popular: false,
      category: 'main'
    },

    // ===============================
    // ГАРНИРЫ / GARNISHES
    // ===============================
    {
      id: 33,
      name: safeT('restaurant.menu.items.mashed_potatoes_truffle.name', 'Картофельное пюре с трюфельным маслом'),
      description: safeT('restaurant.menu.items.mashed_potatoes_truffle.description', 'Картофельное пюре с трюфельным маслом'),
      price: '140 THB',
      image: null,
      tags: ['side', 'vegetarian'],
      popular: false,
      category: 'side'
    },
    {
      id: 34,
      name: safeT('restaurant.menu.items.broccoli_grill.name', 'Брокколи на мангале'),
      description: safeT('restaurant.menu.items.broccoli_grill.description', 'Брокколи на мангале / мусс из йогурта и авокадо'),
      price: '140 THB',
      image: null,
      tags: ['side', 'vegetarian', 'healthy'],
      popular: false,
      category: 'side'
    },
    {
      id: 35,
      name: safeT('restaurant.menu.items.steamed_rice.name', 'Рис на пару'),
      description: safeT('restaurant.menu.items.steamed_rice.description', 'Рис на пару'),
      price: '90 THB',
      image: null,
      tags: ['side', 'vegetarian', 'vegan'],
      popular: false,
      category: 'side'
    },
    {
      id: 36,
      name: safeT('restaurant.menu.items.baked_potatoes_herbs.name', 'Картофель печеный с зеленью'),
      description: safeT('restaurant.menu.items.baked_potatoes_herbs.description', 'Картофель печеный с зеленью'),
      price: '140 THB',
      image: null,
      tags: ['side', 'vegetarian'],
      popular: false,
      category: 'side'
    },
    // ===============================
    // ДЕСЕРТЫ / DESSERTS
    // ===============================
    {
      id: 37,
      name: safeT('restaurant.menu.items.napoleon.name', 'Наполеон'),
      description: safeT('restaurant.menu.items.napoleon.description', 'Наполеон / соус из белого шоколада'),
      price: '250 THB',
      image: null,
      tags: ['dessert', 'sweet'],
      popular: false,
      category: 'dessert'
    },
    {
      id: 38,
      name: safeT('restaurant.menu.items.cheesecake_pistachio.name', 'Чизкейк'),
      description: safeT('restaurant.menu.items.cheesecake_pistachio.description', 'Чизкейк / фисташковый соус'),
      price: '270 THB',
      image: null,
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    {
      id: 39,
      name: safeT('restaurant.menu.items.chocolate_fondant.name', 'Шоколадный фондан'),
      description: safeT('restaurant.menu.items.chocolate_fondant.description', 'Шоколадный фондан / ванильное мороженое / варенье из вишни'),
      price: '250 THB',
      image: null,
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    {
      id: 40,
      name: safeT('restaurant.menu.items.tiramisu.name', 'Тирамису'),
      description: safeT('restaurant.menu.items.tiramisu.description', 'Тирамису'),
      price: '270 THB',
      image: null,
      tags: ['dessert', 'sweet'],
      popular: false,
      category: 'dessert'
    },
    {
      id: 41,
      name: safeT('restaurant.menu.items.coconut_pudding_chia.name', 'Кокосовый пудинг с чиа'),
      description: safeT('restaurant.menu.items.coconut_pudding_chia.description', 'Кокосовый пудинг с чиа / джем манго / кокосовые чипсы'),
      price: '170 THB',
      image: null,
      tags: ['dessert', 'sweet', 'vegan'],
      popular: false,
      category: 'dessert'
    },
    {
      id: 42,
      name: safeT('restaurant.menu.items.italian_gelato.name', 'Итальянский джелато'),
      description: safeT('restaurant.menu.items.italian_gelato.description', 'Итальянский джелато / ваниль / черный шоколад / соленая карамель'),
      price: '80 THB',
      image: null,
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
  ];

  // Функция для группировки меню по категориям
  const getMenuByCategory = () => {
    return {
      breakfast: menuItems.filter(item => item.category === 'breakfast'),
      soup: menuItems.filter(item => item.category === 'soup'),
      salad: menuItems.filter(item => item.category === 'salad'),
      grill: menuItems.filter(item => item.category === 'grill'),
      main: menuItems.filter(item => item.category === 'main'),
      side: menuItems.filter(item => item.category === 'side'),
      dessert: menuItems.filter(item => item.category === 'dessert')
    };
  };

  // Категории меню в порядке отображения
  const menuCategories = [
    { key: 'breakfast', name: safeT('restaurant.categories.breakfast', 'Завтраки'), nameEn: 'Breakfast' },
    { key: 'soup', name: safeT('restaurant.categories.soup', 'Супы'), nameEn: 'Soups' },
    { key: 'salad', name: safeT('restaurant.categories.salad', 'Салаты и закуски'), nameEn: 'Salads and Appetizers' },
    { key: 'grill', name: safeT('restaurant.categories.grill', 'Блюда на мангале'), nameEn: 'Dishes on the Mangal' },
    { key: 'main', name: safeT('restaurant.categories.main', 'Горячие блюда'), nameEn: 'Hot Dishes' },
    { key: 'side', name: safeT('restaurant.categories.side', 'Гарниры'), nameEn: 'Garnishes' },
    { key: 'dessert', name: safeT('restaurant.categories.dessert', 'Десерты'), nameEn: 'Desserts' }
  ];

  // Данные для слайдера
  const slides = [
    {
      id: 1,
      image: '/images/menu/breakfast/kaif-breakfast.jpg',
      title: safeT('restaurant.slider.slide1.title', 'Изысканная кухня'),
      description: safeT('restaurant.slider.slide1.description', 'Откройте для себя уникальные вкусы пяти разных кухонь мира в нашем ресторане')
    },
    {
      id: 2,
      image: '/images/menu/breakfast/kaif-breakfast.jpg',
      title: safeT('restaurant.slider.slide2.title', 'Атмосфера комфорта'),
      description: safeT('restaurant.slider.slide2.description', 'Наслаждайтесь едой в уютной атмосфере с видом на тропический сад')
    },
    {
      id: 3,
      image: '/images/menu/breakfast/kaif-breakfast.jpg',
      title: safeT('restaurant.slider.slide3.title', 'Свежие ингредиенты'),
      description: safeT('restaurant.slider.slide3.description', 'Мы используем только свежие и качественные ингредиенты для приготовления наших блюд')
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

  return {
    menuItems,
    slides,
    tagStyles,
    getMenuByCategory,
    menuCategories
  };
};
