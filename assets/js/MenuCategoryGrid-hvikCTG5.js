import{r as e,j as a,R as t}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-DYLnJpui.js";import{u as i}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-DORsZxsB.js";const s=r.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,n=r.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,m=r.div`
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
`,o=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,p=r.p`
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
`,u=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 3rem;
`,l=r.button`
  font-family: 'Jost', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.25s ease;
  white-space: nowrap;

  background: ${e=>e.$active?"#133238":"transparent"};
  color: ${e=>e.$active?"#fffef6":"rgba(19, 50, 56, 0.5)"};
  border: 1px solid ${e=>e.$active?"#133238":"rgba(19, 50, 56, 0.12)"};

  &:hover {
    border-color: ${e=>e.$active?"#133238":"rgba(19, 50, 56, 0.3)"};
    color: ${e=>e.$active?"#fffef6":"#133238"};
  }
`,c=r.div`
  max-width: 800px;
  margin: 0 auto;
  opacity: ${e=>e.$visible?"1":"0"};
  transform: translateY(${e=>e.$visible?"0":"8px"});
  transition: opacity 0.3s ease, transform 0.3s ease;
`,g=r.div`
  margin-bottom: 2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(19, 50, 56, 0.08);
`,d=r.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: #133238;
  margin: 0;
`,b=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 1.25rem 0;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,f=r.div`
  flex: 1;
`,k=r.span`
  font-family: 'Jost', sans-serif;
  font-size: 1.05rem;
  font-weight: 500;
  color: #133238;
  display: block;
  margin-bottom: 0.25rem;
`,h=r.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(19, 50, 56, 0.5);
  display: block;
  line-height: 1.5;
`,y=r.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: #133238;
  letter-spacing: -0.02em;
  white-space: nowrap;
  flex-shrink: 0;
`,_=r.div`
  height: 1px;
  background-color: rgba(19, 50, 56, 0.06);
`,MenuCategoryGrid=()=>{var r;const{t:x}=i(),{categoryCards:B,getMenuByCategory:v}=(e=>{const safeT=(a,t)=>{try{return e?e(a,t):t}catch(r){return t}},a=[{id:1,name:safeT("restaurant.menu.items.kaif_breakfast.name",'Завтрак "KAIF"'),description:safeT("restaurant.menu.items.kaif_breakfast.description","Отварные яйца / сыр эмменталь / ростбиф / микс черри / зерновой хлеб"),price:"450 THB",image:"/images/menu/breakfast/kaif-breakfast.jpg",tags:["breakfast","popular"],popular:!0,category:"breakfast"},{id:43,name:safeT("restaurant.menu.items.buckwheat_chicken_mushrooms.name","Гречневая каша с цыпленком и соусом пармезан"),description:safeT("restaurant.menu.items.buckwheat_chicken_mushrooms.description","Гречневая каша / цыпленок / соус пармезан"),price:"285 THB",image:"/images/menu/breakfast/grechka.jpg",tags:["breakfast","healthy"],popular:!1,category:"breakfast"},{id:2,name:safeT("restaurant.menu.items.oatmeal_apple_almonds.name","Овсяная каша на кокосовом молоке"),description:safeT("restaurant.menu.items.oatmeal_apple_almonds.description","Овсяная каша на кокосовом молоке / манго / мед / микс орехов"),price:"210 THB",image:"/images/menu/breakfast/oatmeal-breakfast.jpg",tags:["breakfast","sweet","healthy","vegan"],popular:!1,category:"breakfast"},{id:3,name:safeT("restaurant.menu.items.shakshuka_spinach_salmon.name","Скрэмбл с риетом из лосося"),description:safeT("restaurant.menu.items.shakshuka_spinach_salmon.description","Скрэмбл / риет из лосося / микс черри / зерновой хлеб / сливочное масло"),price:"310 THB",image:"/images/menu/breakfast/Shakshuka-salmon.jpg",tags:["breakfast","seafood"],popular:!0,category:"breakfast"},{id:5,name:safeT("restaurant.menu.items.toast_salmon_avocado.name","Тост с лососем"),description:safeT("restaurant.menu.items.toast_salmon_avocado.description","Тост с лососем / скрэмбл / гуакамоле / салат"),price:"370 THB",image:"/images/menu/breakfast/tostlos.jpg",tags:["breakfast","seafood"],popular:!0,category:"breakfast"},{id:6,name:safeT("restaurant.menu.items.homemade_granola.name","Домашняя гранола"),description:safeT("restaurant.menu.items.homemade_granola.description","Домашняя гранола / лабне / микс ягод"),price:"310 THB",image:null,tags:["breakfast","healthy","vegan"],popular:!1,category:"breakfast"},{id:7,name:safeT("restaurant.menu.items.syrniki_passion_fruit.name","Сырники"),description:safeT("restaurant.menu.items.syrniki_passion_fruit.description","Сырники / крем из сметаны / манго джем"),price:"290 THB",image:"/images/menu/breakfast/sirniki.jpg",tags:["breakfast","sweet"],popular:!0,category:"breakfast"},{id:44,name:safeT("restaurant.menu.items.potato_pancakes.name","Драники с грибным соусом"),description:safeT("restaurant.menu.items.potato_pancakes.description","Драники с грибным соусом"),price:"230 THB",image:null,tags:["breakfast"],popular:!1,category:"breakfast"},{id:45,name:safeT("restaurant.menu.items.eggs_benedict.name","Яйца Бенедикт"),description:safeT("restaurant.menu.items.eggs_benedict.description","Яйца Бенедикт"),price:"390 THB",image:null,tags:["breakfast","popular"],popular:!0,category:"breakfast"},{id:46,name:safeT("restaurant.menu.items.waffles.name","Вафли"),description:safeT("restaurant.menu.items.waffles.description","Вафли / домашняя соленая карамель / ванильное мороженое"),price:"190 THB",image:null,tags:["breakfast","sweet"],popular:!1,category:"breakfast"},{id:8,name:safeT("restaurant.menu.items.pumpkin_soup.name","Тыквенный крем-суп"),description:safeT("restaurant.menu.items.pumpkin_soup.description","Тыквенный крем-суп / сыр фета / тыквенные семечки"),price:"210 THB",image:null,tags:["soup","hot","vegan"],popular:!0,category:"soup"},{id:47,name:safeT("restaurant.menu.items.minestrone.name","Минестроне"),description:safeT("restaurant.menu.items.minestrone.description","Минестроне"),price:"190 THB",image:null,tags:["soup","hot","vegetarian"],popular:!1,category:"soup"},{id:9,name:safeT("restaurant.menu.items.borsch_classic.name","Классический борщ с говядиной"),description:safeT("restaurant.menu.items.borsch_classic.description","Классический борщ с говядиной"),price:"310 THB",image:"/images/menu/soup/borsch-classic.jpg",tags:["soup","hot"],popular:!0,category:"soup"},{id:10,name:safeT("restaurant.menu.items.creamy_salmon.name","Сливочный суп с лососем"),description:safeT("restaurant.menu.items.creamy_salmon.description","Сливочный суп с лососем"),price:"330 THB",image:null,tags:["soup","hot","seafood"],popular:!1,category:"soup"},{id:11,name:safeT("restaurant.menu.items.gazpacho_shrimp.name","Гаспачо с креветками"),description:safeT("restaurant.menu.items.gazpacho_shrimp.description","Гаспачо / тар-тар из креветок / тар-тар из свежих овощей"),price:"290 THB",image:null,tags:["soup","cold"],popular:!1,category:"soup"},{id:12,name:safeT("restaurant.menu.items.green_salad.name","Зеленый салат"),description:safeT("restaurant.menu.items.green_salad.description","Зеленый салат / брокколи / огурцы / бэби шпинат / бобы эдамамэ"),price:"310 THB",image:null,tags:["salad","vegetarian","vegan","healthy"],popular:!0,category:"salad"},{id:13,name:safeT("restaurant.menu.items.crispy_eggplant.name","Хрустящие баклажаны"),description:safeT("restaurant.menu.items.crispy_eggplant.description","Хрустящие баклажаны / йогурт / микс орехов / соус сладкий чили"),price:"310 THB",image:null,tags:["appetizer","vegetarian"],popular:!1,category:"salad"},{id:14,name:safeT("restaurant.menu.items.caesar_chicken.name","Салат Цезарь с цыпленком"),description:safeT("restaurant.menu.items.caesar_chicken.description","Салат цезарь / печеный цыпленок / перепелиные яйца"),price:"350 THB",image:"/images/menu/salad/caesar-salad.jpg",tags:["salad","meat"],popular:!0,category:"salad"},{id:15,name:safeT("restaurant.menu.items.vegetable_salad.name","Овощной салат"),description:safeT("restaurant.menu.items.vegetable_salad.description","Овощной салат / огурцы / томаты / редис / оливковое масло"),price:"190 THB",image:null,tags:["salad","vegetarian","vegan","healthy"],popular:!1,category:"salad"},{id:16,name:safeT("restaurant.menu.items.roast_beef_salad.name","Салат с ростбифом"),description:safeT("restaurant.menu.items.roast_beef_salad.description","Салат с ростбифом / болгарский перец / огурцы / микс салатов / азиатская заправка"),price:"420 THB",image:null,tags:["salad","meat"],popular:!1,category:"salad"},{id:17,name:safeT("restaurant.menu.items.crispy_shrimp.name","Хрустящие креветки"),description:safeT("restaurant.menu.items.crispy_shrimp.description","Хрустящие креветки / мусс из печеных овощей"),price:"420 THB",image:null,tags:["appetizer","seafood"],popular:!0,category:"salad"},{id:48,name:safeT("restaurant.menu.items.chili_con_carne.name","Чили кон карне"),description:safeT("restaurant.menu.items.chili_con_carne.description","Чили кон карне / копченая сметана"),price:"390 THB",image:null,tags:["appetizer","meat","spicy"],popular:!1,category:"salad"},{id:18,name:safeT("restaurant.menu.items.big_snack_set.name","Большой сет снеков"),description:safeT("restaurant.menu.items.big_snack_set.description","Большой сет снеков: микс рыб холодного и горячего копчения"),price:"2390 THB",image:null,tags:["appetizer","meat","seafood"],popular:!1,category:"salad"},{id:19,name:safeT("restaurant.menu.items.small_snack_set.name","Маленький сет снеков"),description:safeT("restaurant.menu.items.small_snack_set.description","Маленький сет снеков: микс рыб холодного и горячего копчения"),price:"1310 THB",image:null,tags:["appetizer","meat"],popular:!1,category:"salad"},{id:20,name:safeT("restaurant.menu.items.chicken_kebab.name","Шашлык из куриного филе"),description:safeT("restaurant.menu.items.chicken_kebab.description","Шашлык из куриного филе"),price:"290 THB",image:"/images/menu/grill/chicken_kebab.jpg",tags:["grill","meat"],popular:!1,category:"grill"},{id:21,name:safeT("restaurant.menu.items.pork_kebab.name","Шашлык из свинины"),description:safeT("restaurant.menu.items.pork_kebab.description","Шашлык из свинины"),price:"310 THB",image:"/images/menu/grill/pork_kebab.jpg",tags:["grill","meat"],popular:!1,category:"grill"},{id:22,name:safeT("restaurant.menu.items.lyulya_chicken.name","Люля-кебаб из курицы"),description:safeT("restaurant.menu.items.lyulya_chicken.description","Люля-кебаб из курицы"),price:"290 THB",image:"/images/menu/grill/lyulya_chicken.jpg",tags:["grill","meat"],popular:!0,category:"grill"},{id:23,name:safeT("restaurant.menu.items.lyulya_lamb.name","Люля кебаб из баранины"),description:safeT("restaurant.menu.items.lyulya_lamb.description","Люля кебаб из баранины"),price:"420 THB",image:"/images/menu/grill/lyulya_lamb.jpg",tags:["grill","meat"],popular:!1,category:"grill"},{id:24,name:safeT("restaurant.menu.items.lyulya_beef_pork.name","Люля кебаб из говядины и свинины"),description:safeT("restaurant.menu.items.lyulya_beef_pork.description","Люля кебаб из говядины и свинины"),price:"410 THB",image:"/images/menu/grill/lyulya_beef_pork.jpg",tags:["grill","meat"],popular:!1,category:"grill"},{id:25,name:safeT("restaurant.menu.items.assorted_kebabs.name","Ассорти шашлыков"),description:safeT("restaurant.menu.items.assorted_kebabs.description","Ассорти шашлыков"),price:"1610 THB",image:"/images/menu/grill/assorted_kebabs.jpg",tags:["grill","meat"],popular:!1,category:"grill"},{id:26,name:safeT("restaurant.menu.items.vegetables_kebab.name","Овощной шашлык"),description:safeT("restaurant.menu.items.vegetables_kebab.description","Овощной шашлык"),price:"190 THB",image:"/images/menu/grill/vegetables_kebab.jpg",tags:["grill","vegetarian","vegan"],popular:!0,category:"grill"},{id:27,name:safeT("restaurant.menu.items.chicken_thigh_grill.name","Бедро цыпленка на мангале"),description:safeT("restaurant.menu.items.chicken_thigh_grill.description","Бедро цыпленка на мангале / молодой картофель"),price:"370 THB",image:"/images/menu/grill/chicken_thigh.jpg",tags:["grill","meat"],popular:!0,category:"grill"},{id:49,name:safeT("restaurant.menu.items.pork_ribs_bbq.name","Свиные ребра BBQ"),description:safeT("restaurant.menu.items.pork_ribs_bbq.description","Свиные ребра BBQ / кукуруза на мангале"),price:"420 THB",image:null,tags:["grill","meat"],popular:!0,category:"grill"},{id:28,name:safeT("restaurant.menu.items.salmon_steak.name","Стейк лосося"),description:safeT("restaurant.menu.items.salmon_steak.description","Стейк лосося / спаржа / шпинат / копченый йогурт"),price:"530 THB",image:null,tags:["main","seafood"],popular:!0,category:"main"},{id:29,name:safeT("restaurant.menu.items.sea_bass_zucchini.name","Сибас с цукини"),description:safeT("restaurant.menu.items.sea_bass_zucchini.description","Сибас с цукини / соус из белого вина / оливок и каперсов"),price:"490 THB",image:null,tags:["main","seafood"],popular:!1,category:"main"},{id:50,name:safeT("restaurant.menu.items.grilled_lobster.name","Лобстер на гриле"),description:safeT("restaurant.menu.items.grilled_lobster.description","Лобстер на гриле"),price:"3790 THB",image:null,tags:["main","seafood","popular"],popular:!0,category:"main"},{id:51,name:safeT("restaurant.menu.items.wagyu_ribeye.name","Стейк рибай Вагю"),description:safeT("restaurant.menu.items.wagyu_ribeye.description","Стейк рибай Вагю"),price:"1590 THB",image:null,tags:["main","meat","popular"],popular:!0,category:"main"},{id:30,name:safeT("restaurant.menu.items.classic_cheeseburger.name","Классический чизбургер"),description:safeT("restaurant.menu.items.classic_cheeseburger.description","Классический чизбургер / картофель фри с пармезаном"),price:"450 THB",image:"/images/menu/burger/cheeseburger-deluxe.jpg",tags:["burger","meat"],popular:!0,category:"main"},{id:31,name:safeT("restaurant.menu.items.mignon_steak.name","Стейк миньон"),description:safeT("restaurant.menu.items.mignon_steak.description","Стейк миньон / картофельное пюре / ромейн / соус демиглас"),price:"1190 THB",image:null,tags:["main","meat"],popular:!0,category:"main"},{id:32,name:safeT("restaurant.menu.items.fried_rice_shrimp.name","Жареный рис с овощами и креветками"),description:safeT("restaurant.menu.items.fried_rice_shrimp.description","Жареный рис с овощами и креветками"),price:"230 THB",image:null,tags:["main","seafood"],popular:!1,category:"main"},{id:52,name:safeT("restaurant.menu.items.chicken_schnitzel.name","Куриный шницель"),description:safeT("restaurant.menu.items.chicken_schnitzel.description","Куриный шницель / печеный картофель / томатная сальса / сметана"),price:"250 THB",image:null,tags:["main","meat"],popular:!1,category:"main"},{id:53,name:safeT("restaurant.menu.items.duck_breast.name","Утиное филе"),description:safeT("restaurant.menu.items.duck_breast.description","Утиное филе / соус из брусники / пюре из батата"),price:"420 THB",image:null,tags:["main","meat"],popular:!1,category:"main"},{id:33,name:safeT("restaurant.menu.items.mashed_potatoes_truffle.name","Картофельное пюре с трюфельным маслом"),description:safeT("restaurant.menu.items.mashed_potatoes_truffle.description","Картофельное пюре с трюфельным маслом"),price:"160 THB",image:null,tags:["side","vegetarian"],popular:!1,category:"side"},{id:34,name:safeT("restaurant.menu.items.broccoli_grill.name","Брокколи на мангале"),description:safeT("restaurant.menu.items.broccoli_grill.description","Брокколи на мангале / мусс из йогурта и авокадо"),price:"160 THB",image:null,tags:["side","vegetarian","healthy"],popular:!1,category:"side"},{id:35,name:safeT("restaurant.menu.items.steamed_rice.name","Рис на пару"),description:safeT("restaurant.menu.items.steamed_rice.description","Рис на пару"),price:"80 THB",image:null,tags:["side","vegetarian","vegan"],popular:!1,category:"side"},{id:36,name:safeT("restaurant.menu.items.baked_potatoes_herbs.name","Картофель печеный с зеленью"),description:safeT("restaurant.menu.items.baked_potatoes_herbs.description","Картофель печеный с зеленью"),price:"160 THB",image:null,tags:["side","vegetarian"],popular:!1,category:"side"},{id:37,name:safeT("restaurant.menu.items.napoleon.name","Наполеон"),description:safeT("restaurant.menu.items.napoleon.description","Наполеон / соус из белого шоколада"),price:"280 THB",image:null,tags:["dessert","sweet"],popular:!1,category:"dessert"},{id:38,name:safeT("restaurant.menu.items.cheesecake_pistachio.name","Чизкейк"),description:safeT("restaurant.menu.items.cheesecake_pistachio.description","Чизкейк / фисташковый соус"),price:"280 THB",image:null,tags:["dessert","sweet"],popular:!0,category:"dessert"},{id:39,name:safeT("restaurant.menu.items.chocolate_fondant.name","Шоколадный фондан"),description:safeT("restaurant.menu.items.chocolate_fondant.description","Шоколадный фондан / ванильное мороженое / варенье из вишни"),price:"280 THB",image:null,tags:["dessert","sweet"],popular:!0,category:"dessert"},{id:40,name:safeT("restaurant.menu.items.tiramisu.name","Тирамису"),description:safeT("restaurant.menu.items.tiramisu.description","Тирамису"),price:"280 THB",image:null,tags:["dessert","sweet"],popular:!1,category:"dessert"},{id:41,name:safeT("restaurant.menu.items.coconut_pudding_chia.name","Кокосовый пудинг с чиа"),description:safeT("restaurant.menu.items.coconut_pudding_chia.description","Кокосовый пудинг с чиа / джем манго и маракуйя"),price:"190 THB",image:null,tags:["dessert","sweet","vegan"],popular:!1,category:"dessert"},{id:42,name:safeT("restaurant.menu.items.italian_gelato.name","Итальянский джелато"),description:safeT("restaurant.menu.items.italian_gelato.description","Итальянский джелато / ваниль / черный шоколад / соленая карамель"),price:"80 THB",image:null,tags:["dessert","sweet"],popular:!0,category:"dessert"},{id:54,name:safeT("restaurant.menu.items.bonafi_pie.name","Бонафи пай"),description:safeT("restaurant.menu.items.bonafi_pie.description","Бонафи пай"),price:"280 THB",image:null,tags:["dessert","sweet"],popular:!1,category:"dessert"}],t=[{key:"breakfast",name:safeT("restaurant.categories.breakfast","Завтраки"),nameEn:"Breakfast"},{key:"soup",name:safeT("restaurant.categories.soup","Супы"),nameEn:"Soups"},{key:"salad",name:safeT("restaurant.categories.salad","Салаты и закуски"),nameEn:"Salads and Appetizers"},{key:"grill",name:safeT("restaurant.categories.grill","Блюда на мангале"),nameEn:"Dishes on the Mangal"},{key:"main",name:safeT("restaurant.categories.main","Горячие блюда"),nameEn:"Hot Dishes"},{key:"side",name:safeT("restaurant.categories.side","Гарниры"),nameEn:"Garnishes"},{key:"dessert",name:safeT("restaurant.categories.dessert","Десерты"),nameEn:"Desserts"}],r=[{id:1,image:"/images/menu/breakfast/kaif-breakfast.jpg",title:safeT("restaurant.slider.slide1.title","Изысканная кухня"),description:safeT("restaurant.slider.slide1.description","Откройте для себя уникальные вкусы пяти разных кухонь мира в нашем ресторане")},{id:2,image:"/images/menu/breakfast/kaif-breakfast.jpg",title:safeT("restaurant.slider.slide2.title","Атмосфера комфорта"),description:safeT("restaurant.slider.slide2.description","Наслаждайтесь едой в уютной атмосфере с видом на тропический сад")},{id:3,image:"/images/menu/breakfast/kaif-breakfast.jpg",title:safeT("restaurant.slider.slide3.title","Свежие ингредиенты"),description:safeT("restaurant.slider.slide3.description","Мы используем только свежие и качественные ингредиенты для приготовления наших блюд")}],i=[{key:"breakfast",number:"01",name:safeT("restaurant.categories.breakfast","Завтраки"),description:safeT("restaurant.categories.breakfast_desc","Начните утро с авторских блюд от нашего шефа"),image:"/images-optimized/menu/breakfast/kaif-breakfast.jpg"},{key:"soup",number:"02",name:safeT("restaurant.categories.soup","Супы"),description:safeT("restaurant.categories.soup_desc","Согревающие бульоны и кремовые классические супы"),image:"/images-optimized/menu/soup/borsch-classic.jpg"},{key:"salad",number:"03",name:safeT("restaurant.categories.salad","Салаты и закуски"),description:safeT("restaurant.categories.salad_desc","Свежая зелень и изысканные закуски"),image:"/images-optimized/menu/salad/caesar-salad.jpg"},{key:"grill",number:"04",name:safeT("restaurant.categories.grill","Блюда на мангале"),description:safeT("restaurant.categories.grill_desc","Шашлыки на углях и мясо на мангале"),image:"/images-optimized/menu/grill/chicken_kebab.jpg"},{key:"main",number:"05",name:safeT("restaurant.categories.main","Горячие блюда"),description:safeT("restaurant.categories.main_desc","Авторские горячие блюда, приготовленные с заботой"),image:"/images-optimized/menu/burger/cheeseburger-deluxe.jpg"},{key:"side",number:"06",name:safeT("restaurant.categories.side","Гарниры"),description:safeT("restaurant.categories.side_desc","Идеальное дополнение к основным блюдам"),image:null},{key:"dessert",number:"07",name:safeT("restaurant.categories.dessert","Десерты"),description:safeT("restaurant.categories.dessert_desc","Сладкое завершение идеального ужина"),image:"/images-optimized/menu/dessert/apple.jpg"}];return{menuItems:a,slides:r,tagStyles:{breakfast:"bg-orange-50 text-orange-600",soup:"bg-blue-50 text-blue-600",salad:"bg-green-50 text-green-600",appetizer:"bg-purple-50 text-purple-600",grill:"bg-red-50 text-red-600",main:"bg-indigo-50 text-indigo-600",dessert:"bg-pink-50 text-pink-600",drinks:"bg-cyan-50 text-cyan-600",popular:"bg-yellow-50 text-yellow-600",vegetarian:"bg-emerald-50 text-emerald-600",vegan:"bg-lime-50 text-lime-600",healthy:"bg-teal-50 text-teal-600",spicy:"bg-red-100 text-red-700",seafood:"bg-blue-100 text-blue-700",meat:"bg-amber-50 text-amber-600",sweet:"bg-rose-50 text-rose-600",cold:"bg-slate-50 text-slate-600",hot:"bg-orange-100 text-orange-700",burger:"bg-amber-100 text-amber-700",side:"bg-gray-50 text-gray-600"},getMenuByCategory:()=>({breakfast:a.filter(e=>"breakfast"===e.category),soup:a.filter(e=>"soup"===e.category),salad:a.filter(e=>"salad"===e.category),grill:a.filter(e=>"grill"===e.category),main:a.filter(e=>"main"===e.category),side:a.filter(e=>"side"===e.category),dessert:a.filter(e=>"dessert"===e.category)}),menuCategories:t,categoryCards:i}})(x),H=v(),[T,j]=e.useState((null==(r=B[0])?void 0:r.key)||"breakfast"),[w,z]=e.useState(!0),$=e.useRef(null),S=e.useCallback(e=>{e!==T&&($.current=e,z(!1),setTimeout(()=>{j($.current),z(!0)},250))},[T]),J=B.find(e=>e.key===T),C=H[T]||[],E=e.useMemo(()=>Math.max(...Object.values(H).map(e=>e.length),0),[H]);return a.jsx(s,{id:"menu",children:a.jsxs(n,{children:[a.jsx(m,{children:x("restaurant.hero.badge","Our Restaurant")}),a.jsx(o,{children:x("restaurant.menu.title","Our Menu")}),a.jsx(p,{children:x("restaurant.hero.subtitle_pasture","Discover a variety of flavors crafted by our talented chefs using the finest ingredients")}),a.jsx(u,{children:B.map(e=>a.jsx(l,{$active:T===e.key,onClick:()=>S(e.key),children:e.name},e.key))}),a.jsxs(c,{$visible:w,style:{minHeight:76*E+60+"px"},children:[a.jsx(g,{children:a.jsx(d,{children:null==J?void 0:J.name})}),C.map((e,r)=>a.jsxs(t.Fragment,{children:[a.jsxs(b,{children:[a.jsxs(f,{children:[a.jsx(k,{children:e.name}),e.description&&a.jsx(h,{children:e.description})]}),a.jsx(y,{children:e.price})]}),r<C.length-1&&a.jsx(_,{})]},e.id))]})]})})};export{MenuCategoryGrid as default};
