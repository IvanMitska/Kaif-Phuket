import{r as e,j as i,R as a}from"./react-core-DWAaPJsY.js";import{d as r}from"./styled-components-DYLnJpui.js";import{u as t}from"./i18n-core-DrMVsQFB.js";import"./vendor-misc-DORsZxsB.js";const o=r.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`,s=r.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`,n=r.div`
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
`,c=r.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 1rem;
  max-width: 800px;
`,m=r.p`
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
`,d=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 3rem;
`,b=r.button`
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
`,p=r.div`
  max-width: 800px;
  margin: 0 auto;
  opacity: ${e=>e.$visible?"1":"0"};
  transform: translateY(${e=>e.$visible?"0":"8px"});
  transition: opacity 0.3s ease, transform 0.3s ease;
`,l=r.div`
  margin-bottom: 2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(19, 50, 56, 0.08);
`,g=r.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: #133238;
  margin: 0;
`,f=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 1.25rem 0;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,y=r.div`
  flex: 1;
`,_=r.span`
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
`,u=r.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: #133238;
  letter-spacing: -0.02em;
  white-space: nowrap;
  flex-shrink: 0;
`,B=r.div`
  height: 1px;
  background-color: rgba(19, 50, 56, 0.06);
`,BarMenuSection=()=>{var r;const{t:T}=t(),{barCategories:H,getBarMenuByCategory:k}=(e=>{const safeT=(i,a)=>{try{return e?e(i,a):a}catch(r){return a}},i=[{id:"b1",name:safeT("bar.items.aperol_spritz","Aperol Spritz"),price:"350 THB",category:"cocktails"},{id:"b2",name:safeT("bar.items.mojito","Mojito"),price:"350 THB",category:"cocktails"},{id:"b3",name:safeT("bar.items.negroni","Negroni"),price:"350 THB",category:"cocktails"},{id:"b4",name:safeT("bar.items.frozen_margarita","Frozen Margarita"),description:safeT("bar.items.frozen_margarita_desc",""),price:"350 THB",category:"cocktails"},{id:"b5",name:safeT("bar.items.pina_colada","Pina Colada"),price:"350 THB",category:"cocktails"},{id:"b6",name:safeT("bar.items.honey_lemon","Honey and Lemon"),price:"120 THB",category:"cocktails"},{id:"b7",name:safeT("bar.items.mojito_nonalco","Mojito Without Alcohol"),price:"180 THB",category:"cocktails"},{id:"b8",name:safeT("bar.items.passion_fruit","Passion Fruit"),price:"170 THB",category:"cocktails"},{id:"b9",name:safeT("bar.items.pink_lemonade","Pink Lemonade (Premix)"),price:"120 THB",category:"cocktails"},{id:"b10",name:safeT("bar.items.red_wine","Red Wine Glass 150 ml"),price:"300 THB",category:"wine_spirits"},{id:"b11",name:safeT("bar.items.white_wine","White Wine Glass 150 ml"),price:"300 THB",category:"wine_spirits"},{id:"b12",name:safeT("bar.items.sparkling_glass","Sparkling Wine Glass 150 ml"),price:"310 THB",category:"wine_spirits"},{id:"b13",name:safeT("bar.items.sparkling_bottle","Sparkling Wine Bottle 750 ml"),price:"1550 THB",category:"wine_spirits"},{id:"b14",name:"Bacardi Carta Blanca 40 ml",price:"250 THB",category:"wine_spirits"},{id:"b15",name:"Bacardi Carta Negra 40 ml",price:"250 THB",category:"wine_spirits"},{id:"b16",name:"Ron Zacapa 23",price:"450 THB",category:"wine_spirits"},{id:"b17",name:"Tanqueray Gin",price:"250 THB",category:"wine_spirits"},{id:"b18",name:"Chivas Regal 40 ml",price:"250 THB",category:"wine_spirits"},{id:"b19",name:"Grey Goose Vodka 40 ml",price:"350 THB",category:"wine_spirits"},{id:"b20",name:"Jack Daniels 40 ml",price:"270 THB",category:"wine_spirits"},{id:"b21",name:"Jim Beam 40 ml",price:"220 THB",category:"wine_spirits"},{id:"b22",name:"Don Julio",price:"350 THB",category:"wine_spirits"},{id:"b23",name:"Macallan 12 40 ml",price:"750 THB",category:"wine_spirits"},{id:"b24",name:"Pure Vodka 40 ml",price:"120 THB",category:"wine_spirits"},{id:"b25",name:"Hennessy VSOP",price:"600 THB",category:"wine_spirits"},{id:"b26",name:"Martini Extra Dry Vermouth 150 ml",price:"350 THB",category:"wine_spirits"},{id:"b27",name:"Chang Beer 0.33",price:"110 THB",category:"beer"},{id:"b28",name:"Corona Extra 0.33",price:"230 THB",category:"beer"},{id:"b29",name:"Singha Beer 0.33",price:"110 THB",category:"beer"},{id:"b30",name:safeT("bar.items.cherry_03","Cherry 0.3"),price:"210 THB",category:"beer"},{id:"b31",name:safeT("bar.items.classic_lager_03","Classic Lager 0.3"),price:"180 THB",category:"beer"},{id:"b32",name:safeT("bar.items.german_wheat_03","German Wheat Beer 0.3"),price:"180 THB",category:"beer"},{id:"b33",name:safeT("bar.items.imperial_stout_03","Russian Imperial Stout 0.3"),price:"220 THB",category:"beer"},{id:"b34",name:safeT("bar.items.cherry_05","Cherry 0.5"),price:"310 THB",category:"beer"},{id:"b35",name:safeT("bar.items.classic_lager_05","Classic Lager 0.5"),price:"250 THB",category:"beer"},{id:"b36",name:safeT("bar.items.german_wheat_05","German Wheat Beer 0.5"),price:"250 THB",category:"beer"},{id:"b37",name:safeT("bar.items.imperial_stout_05","Russian Imperial Stout 0.5"),price:"310 THB",category:"beer"},{id:"b38",name:safeT("bar.items.tower_cherry","Tower Cherry 3L"),price:"1600 THB",category:"beer"},{id:"b39",name:safeT("bar.items.tower_classic","Tower Classic Lager 3L"),price:"1400 THB",category:"beer"},{id:"b40",name:safeT("bar.items.tower_wheat","Tower German Wheat 3L"),price:"1400 THB",category:"beer"},{id:"b41",name:safeT("bar.items.tower_stout","Tower Imperial Stout 3L"),price:"1600 THB",category:"beer"},{id:"b42",name:safeT("bar.items.espresso","Espresso"),price:"90 THB",category:"coffee_tea"},{id:"b43",name:safeT("bar.items.americano","Americano (Hot/Iced)"),price:"100 THB",category:"coffee_tea"},{id:"b44",name:safeT("bar.items.cappuccino","Cappuccino (Hot/Iced)"),price:"110 THB",category:"coffee_tea"},{id:"b45",name:safeT("bar.items.bumble_coffee","Bumble Coffee"),price:"190 THB",category:"coffee_tea"},{id:"b46",name:safeT("bar.items.espresso_tonic","Espresso Tonic"),price:"135 THB",category:"coffee_tea"},{id:"b47",name:safeT("bar.items.latte","Latte"),price:"110 THB",category:"coffee_tea"},{id:"b48",name:safeT("bar.items.matcha_coco","Matcha Coco"),price:"135 THB",category:"coffee_tea"},{id:"b49",name:safeT("bar.items.ya_bao","White Kidney Tea from Yunnan (Ya Bao)"),description:safeT("bar.items.ya_bao_desc","Harvested from ancient tea trees over 100 years old in Yunnan province. Soft, fresh and ideal for relaxation"),price:"250 THB",category:"coffee_tea"},{id:"b50",name:safeT("bar.items.tie_guan_yin","Light Oolong (Tie Guan Yin)"),description:safeT("bar.items.tie_guan_yin_desc","Famous light oolong from Southern Fujian with a delicate floral taste. Refreshes body and mind"),price:"300 THB",category:"coffee_tea"},{id:"b51",name:safeT("bar.items.da_hong_pao","Dark Oolong (Da Hong Pao)"),description:safeT("bar.items.da_hong_pao_desc","Mineral-rich oolong from Wuishan with woody and tobacco notes. Sweet, complex aftertaste"),price:"300 THB",category:"coffee_tea"},{id:"b52",name:safeT("bar.items.gaba_oolong","GABA Oolong (Ali Shan)"),description:safeT("bar.items.gaba_oolong_desc","Rich in catechins and vitamin C. Refreshing and energizing tea"),price:"350 THB",category:"coffee_tea"},{id:"b53",name:safeT("bar.items.milk_oolong","Milk Oolong (Nai Xiang)"),description:safeT("bar.items.milk_oolong_desc","Intriguing tea combinations with rich aromas"),price:"250 THB",category:"coffee_tea"},{id:"b54",name:safeT("bar.items.shu_puerh","Black Pu-erh (Shu Pu-erh)"),description:safeT("bar.items.shu_puerh_desc","Rich pu-erh with woody and nutty notes. Slightly viscous, for lovers of strong tea"),price:"250 THB",category:"coffee_tea"},{id:"b55",name:safeT("bar.items.herbal_tea","Herbal Collection"),description:safeT("bar.items.herbal_tea_desc","Aromatic herbal blend with mint, thyme and oregano. Refreshing, restorative and ideal after sauna"),price:"250 THB",category:"coffee_tea"},{id:"b56",name:safeT("bar.items.buckwheat_tea","Buckwheat Tea"),description:safeT("bar.items.buckwheat_tea_desc","Natural sweet buckwheat tea. Caffeine-free, soothing and good for children"),price:"250 THB",category:"coffee_tea"},{id:"b57",name:safeT("bar.items.ivan_tea","Ivan Tea"),description:safeT("bar.items.ivan_tea_desc","Traditional Russian herbal tea with a delicate floral-herbal taste and light honey-fruit aroma. Caffeine-free"),price:"300 THB",category:"coffee_tea"},{id:"b58",name:"7UP 0.325L",price:"55 THB",category:"soft_drinks"},{id:"b59",name:"Coca-Cola 0.325L",price:"55 THB",category:"soft_drinks"},{id:"b60",name:safeT("bar.items.coconut","Coconut 1 piece"),price:"120 THB",category:"soft_drinks"},{id:"b61",name:safeT("bar.items.kvas","Kvas 0.5L"),price:"140 THB",category:"soft_drinks"},{id:"b62",name:"Lipton 0.325L",price:"55 THB",category:"soft_drinks"},{id:"b63",name:"Mirinda 0.245L",price:"55 THB",category:"soft_drinks"},{id:"b64",name:safeT("bar.items.mors","Mors 0.35L"),price:"165 THB",category:"soft_drinks"},{id:"b65",name:"Pepsi 0.325L",price:"55 THB",category:"soft_drinks"},{id:"b66",name:"Red Bull 0.25L",price:"165 THB",category:"soft_drinks"},{id:"b67",name:"Swepess 0.325L",price:"55 THB",category:"soft_drinks"},{id:"b68",name:"Tea Plus 0.5L",price:"55 THB",category:"soft_drinks"},{id:"b69",name:safeT("bar.items.soda_singha","Soda Singha 0.33L"),price:"55 THB",category:"soft_drinks"},{id:"b70",name:"Aura 0.5L",price:"35 THB",category:"soft_drinks"},{id:"b71",name:"Aura 1.5L",price:"55 THB",category:"soft_drinks"},{id:"b72",name:"Gatorade 0.5L",price:"75 THB",category:"soft_drinks"},{id:"b73",name:"Pocari 0.5L",price:"75 THB",category:"soft_drinks"},{id:"b74",name:safeT("bar.items.narzan","Narzan 0.5L"),price:"165 THB",category:"soft_drinks"},{id:"b75",name:safeT("bar.items.essentuki","Essentuki 1L"),price:"200 THB",category:"soft_drinks"},{id:"b76",name:"Santa Vittorio 1L",price:"180 THB",category:"soft_drinks"},{id:"b77",name:safeT("bar.items.apple_juice","Apple Juice"),price:"200 THB",category:"juices"},{id:"b78",name:safeT("bar.items.apple_carrot","Apple/Carrot Juice"),price:"200 THB",category:"juices"},{id:"b79",name:safeT("bar.items.carrot_juice","Carrot Juice"),price:"200 THB",category:"juices"},{id:"b80",name:safeT("bar.items.mango_juice","Mango Juice"),price:"200 THB",category:"juices"},{id:"b81",name:safeT("bar.items.orange_juice","Orange Juice"),price:"200 THB",category:"juices"},{id:"b82",name:safeT("bar.items.pineapple_juice","Pineapple Juice"),price:"200 THB",category:"juices"},{id:"b83",name:safeT("bar.items.banana_shake","Banana Shake"),price:"190 THB",category:"juices"},{id:"b84",name:safeT("bar.items.lychee_lime","Lychee-Lime"),price:"190 THB",category:"juices"},{id:"b85",name:safeT("bar.items.mango_passion","Mango-Passionfruit"),price:"190 THB",category:"juices"},{id:"b86",name:"BCAA / EAA",price:"100 THB",category:"fitness"},{id:"b87",name:safeT("bar.items.electrolyte","Electrolyte Boost"),price:"120 THB",category:"fitness"},{id:"b88",name:safeT("bar.items.fat_burning","Fat Burning"),price:"120 THB",category:"fitness"},{id:"b89",name:safeT("bar.items.mass_gainer","Mass Gainer"),price:"200 THB",category:"fitness"},{id:"b90",name:safeT("bar.items.pre_workout","Pre-Workout"),price:"120 THB",category:"fitness"},{id:"b91",name:safeT("bar.items.protein_chocolate","Chocolate"),description:safeT("bar.items.protein_desc","Protein / Almond Milk / Milk / Coconut Water"),price:"140 THB",category:"fitness"},{id:"b92",name:safeT("bar.items.protein_strawberry","Strawberry"),description:safeT("bar.items.protein_desc","Protein / Almond Milk / Milk / Coconut Water"),price:"140 THB",category:"fitness"},{id:"b93",name:safeT("bar.items.protein_vanilla","Vanilla"),description:safeT("bar.items.protein_desc","Protein / Almond Milk / Milk / Coconut Water"),price:"140 THB",category:"fitness"}];return{barCategories:[{key:"cocktails",number:"01",name:safeT("bar.categories.cocktails","Cocktails"),description:safeT("bar.categories.cocktails_desc","Alcoholic & non-alcoholic cocktails")},{key:"wine_spirits",number:"02",name:safeT("bar.categories.wine_spirits","Wine & Spirits"),description:safeT("bar.categories.wine_spirits_desc","Wine, whiskey, vodka, rum, gin & more")},{key:"beer",number:"03",name:safeT("bar.categories.beer","Beer"),description:safeT("bar.categories.beer_desc","Craft draft & bottled beer")},{key:"coffee_tea",number:"04",name:safeT("bar.categories.coffee_tea","Coffee & Tea"),description:safeT("bar.categories.coffee_tea_desc","Espresso, matcha & premium Chinese tea")},{key:"soft_drinks",number:"05",name:safeT("bar.categories.soft_drinks","Soft Drinks"),description:safeT("bar.categories.soft_drinks_desc","Soda, water & mineral water")},{key:"juices",number:"06",name:safeT("bar.categories.juices","Juices & Smoothies"),description:safeT("bar.categories.juices_desc","Fresh juices & smoothies")},{key:"fitness",number:"07",name:safeT("bar.categories.fitness","Fitness & Protein"),description:safeT("bar.categories.fitness_desc","Sports drinks & protein shakes")}],barItems:i,getBarMenuByCategory:()=>{const e={};return i.forEach(i=>{e[i.category]||(e[i.category]=[]),e[i.category].push(i)}),e}}})(T),w=k(),[x,j]=e.useState((null==(r=H[0])?void 0:r.key)||"cocktails"),[v,C]=e.useState(!0),L=e.useRef(null),S=e.useCallback(e=>{e!==x&&(L.current=e,C(!1),setTimeout(()=>{j(L.current),C(!0)},250))},[x]),M=H.find(e=>e.key===x),P=w[x]||[],A=e.useMemo(()=>Math.max(...Object.values(w).map(e=>e.length),0),[w]);return i.jsx(o,{id:"bar-menu",children:i.jsxs(s,{children:[i.jsx(n,{children:T("bar.hero.badge","Our Bar")}),i.jsx(c,{children:T("bar.hero.title","Bar Menu")}),i.jsx(m,{children:T("bar.hero.subtitle","From signature cocktails and premium spirits to freshly squeezed juices and fitness drinks")}),i.jsx(d,{children:H.map(e=>i.jsx(b,{$active:x===e.key,onClick:()=>S(e.key),children:e.name},e.key))}),i.jsxs(p,{$visible:v,style:{minHeight:76*A+60+"px"},children:[i.jsx(l,{children:i.jsx(g,{children:null==M?void 0:M.name})}),P.map((e,r)=>i.jsxs(a.Fragment,{children:[i.jsxs(f,{children:[i.jsxs(y,{children:[i.jsx(_,{children:e.name}),e.description&&i.jsx(h,{children:e.description})]}),i.jsx(u,{children:e.price})]}),r<P.length-1&&i.jsx(B,{})]},e.id))]})]})})};export{BarMenuSection as default};
