import{r as e,j as a,a as i,y as l,q as s,c as m,d as b,z as g,A as p,C as r,D as t,E as n,G as w,I as o,J as u,K as d,R as c}from"./vendor-react-CLtL0QWO.js";import{d as h}from"./vendor-styles-CCTfl_7F.js";import{P as f}from"./PageScrollReset-DNwck8vB.js";import{P as k}from"./main-dUgoW0OF.js";import{m as j,A as x}from"./vendor-animations-CEvQOT_g.js";import"./vendor-other-CZupzcPt.js";import"./vendor-i18n-C4kh69yx.js";const y={supportWebP:null,detectWebP:function(){if(null!==this.supportWebP)return this.supportWebP;const e=document.createElement("canvas");return e.getContext&&e.getContext("2d")?this.supportWebP=0===e.toDataURL("image/webp").indexOf("data:image/webp"):this.supportWebP=!1,this.supportWebP},getImageUrl:function(e,a="original"){if(!e)return"";const i=e.replace(/^\/images\//,""),l=this.images[i];return l?a&&l[a]?this.detectWebP()?l[a].webp:l[a].fallback:this.detectWebP()?l.original.webp:l.original.fallback:e},images:{"thai-massage.jpg":{original:{webp:"/images-webp/./thai-massage.webp",fallback:"/images/thai-massage.jpg"},large:{webp:"/images-webp/large/./thai-massage.webp",fallback:"/images/thai-massage.jpg",width:1200},medium:{webp:"/images-webp/medium/./thai-massage.webp",fallback:"/images/thai-massage.jpg",width:1024},small:{webp:"/images-webp/small/./thai-massage.webp",fallback:"/images/thai-massage.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/./thai-massage.webp",fallback:"/images/thai-massage.jpg",width:320}},"spa.jpg":{original:{webp:"/images-webp/./spa.webp",fallback:"/images/spa.jpg"},large:{webp:"/images-webp/large/./spa.webp",fallback:"/images/spa.jpg",width:1600},medium:{webp:"/images-webp/medium/./spa.webp",fallback:"/images/spa.jpg",width:1024},small:{webp:"/images-webp/small/./spa.webp",fallback:"/images/spa.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/./spa.webp",fallback:"/images/spa.jpg",width:320}},"spa-hero.jpg":{original:{webp:"/images-webp/./spa-hero.webp",fallback:"/images/spa-hero.jpg"},large:{webp:"/images-webp/large/./spa-hero.webp",fallback:"/images/spa-hero.jpg",width:1e3},medium:{webp:"/images-webp/medium/./spa-hero.webp",fallback:"/images/spa-hero.jpg",width:1e3},small:{webp:"/images-webp/small/./spa-hero.webp",fallback:"/images/spa-hero.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/./spa-hero.webp",fallback:"/images/spa-hero.jpg",width:320}},"restaurant.jpg":{original:{webp:"/images-webp/./restaurant.webp",fallback:"/images/restaurant.jpg"},large:{webp:"/images-webp/large/./restaurant.webp",fallback:"/images/restaurant.jpg",width:1200},medium:{webp:"/images-webp/medium/./restaurant.webp",fallback:"/images/restaurant.jpg",width:1024},small:{webp:"/images-webp/small/./restaurant.webp",fallback:"/images/restaurant.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/./restaurant.webp",fallback:"/images/restaurant.jpg",width:320}},"pool.jpg":{original:{webp:"/images-webp/./pool.webp",fallback:"/images/pool.jpg"},large:{webp:"/images-webp/large/./pool.webp",fallback:"/images/pool.jpg",width:853},medium:{webp:"/images-webp/medium/./pool.webp",fallback:"/images/pool.jpg",width:853},small:{webp:"/images-webp/small/./pool.webp",fallback:"/images/pool.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/./pool.webp",fallback:"/images/pool.jpg",width:320}},"philosophy-image.jpg":{original:{webp:"/images-webp/./philosophy-image.webp",fallback:"/images/philosophy-image.jpg"},large:{webp:"/images-webp/large/./philosophy-image.webp",fallback:"/images/philosophy-image.jpg",width:1e3},medium:{webp:"/images-webp/medium/./philosophy-image.webp",fallback:"/images/philosophy-image.jpg",width:1e3},small:{webp:"/images-webp/small/./philosophy-image.webp",fallback:"/images/philosophy-image.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/./philosophy-image.webp",fallback:"/images/philosophy-image.jpg",width:320}},"facial.jpg":{original:{webp:"/images-webp/./facial.webp",fallback:"/images/facial.jpg"},large:{webp:"/images-webp/large/./facial.webp",fallback:"/images/facial.jpg",width:1200},medium:{webp:"/images-webp/medium/./facial.webp",fallback:"/images/facial.jpg",width:1024},small:{webp:"/images-webp/small/./facial.webp",fallback:"/images/facial.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/./facial.webp",fallback:"/images/facial.jpg",width:320}},"combat.jpg":{original:{webp:"/images-webp/./combat.webp",fallback:"/images/combat.jpg"},large:{webp:"/images-webp/large/./combat.webp",fallback:"/images/combat.jpg",width:1200},medium:{webp:"/images-webp/medium/./combat.webp",fallback:"/images/combat.jpg",width:1024},small:{webp:"/images-webp/small/./combat.webp",fallback:"/images/combat.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/./combat.webp",fallback:"/images/combat.jpg",width:320}},"aromatherapy.jpg":{original:{webp:"/images-webp/./aromatherapy.webp",fallback:"/images/aromatherapy.jpg"},large:{webp:"/images-webp/large/./aromatherapy.webp",fallback:"/images/aromatherapy.jpg",width:1600},medium:{webp:"/images-webp/medium/./aromatherapy.webp",fallback:"/images/aromatherapy.jpg",width:1024},small:{webp:"/images-webp/small/./aromatherapy.webp",fallback:"/images/aromatherapy.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/./aromatherapy.webp",fallback:"/images/aromatherapy.jpg",width:320}},"zones/spa.jpg":{original:{webp:"/images-webp/zones/spa.webp",fallback:"/images/zones/spa.jpg"},large:{webp:"/images-webp/large/zones/spa.webp",fallback:"/images/zones/spa.jpg",width:1600},medium:{webp:"/images-webp/medium/zones/spa.webp",fallback:"/images/zones/spa.jpg",width:1024},small:{webp:"/images-webp/small/zones/spa.webp",fallback:"/images/zones/spa.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/zones/spa.webp",fallback:"/images/zones/spa.jpg",width:320}},"zones/restaurant.jpg":{original:{webp:"/images-webp/zones/restaurant.webp",fallback:"/images/zones/restaurant.jpg"},large:{webp:"/images-webp/large/zones/restaurant.webp",fallback:"/images/zones/restaurant.jpg",width:1600},medium:{webp:"/images-webp/medium/zones/restaurant.webp",fallback:"/images/zones/restaurant.jpg",width:1024},small:{webp:"/images-webp/small/zones/restaurant.webp",fallback:"/images/zones/restaurant.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/zones/restaurant.webp",fallback:"/images/zones/restaurant.jpg",width:320}},"zones/pool.jpg":{original:{webp:"/images-webp/zones/pool.webp",fallback:"/images/zones/pool.jpg"},large:{webp:"/images-webp/large/zones/pool.webp",fallback:"/images/zones/pool.jpg",width:853},medium:{webp:"/images-webp/medium/zones/pool.webp",fallback:"/images/zones/pool.jpg",width:853},small:{webp:"/images-webp/small/zones/pool.webp",fallback:"/images/zones/pool.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/zones/pool.webp",fallback:"/images/zones/pool.jpg",width:320}},"zones/fitness.jpg":{original:{webp:"/images-webp/zones/fitness.webp",fallback:"/images/zones/fitness.jpg"},large:{webp:"/images-webp/large/zones/fitness.webp",fallback:"/images/zones/fitness.jpg",width:1600},medium:{webp:"/images-webp/medium/zones/fitness.webp",fallback:"/images/zones/fitness.jpg",width:1024},small:{webp:"/images-webp/small/zones/fitness.webp",fallback:"/images/zones/fitness.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/zones/fitness.webp",fallback:"/images/zones/fitness.jpg",width:320}},"zones/combat.jpg":{original:{webp:"/images-webp/zones/combat.webp",fallback:"/images/zones/combat.jpg"},large:{webp:"/images-webp/large/zones/combat.webp",fallback:"/images/zones/combat.jpg",width:1600},medium:{webp:"/images-webp/medium/zones/combat.webp",fallback:"/images/zones/combat.jpg",width:1024},small:{webp:"/images-webp/small/zones/combat.webp",fallback:"/images/zones/combat.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/zones/combat.webp",fallback:"/images/zones/combat.jpg",width:320}},"zones/beauty.jpg":{original:{webp:"/images-webp/zones/beauty.webp",fallback:"/images/zones/beauty.jpg"},large:{webp:"/images-webp/large/zones/beauty.webp",fallback:"/images/zones/beauty.jpg",width:1600},medium:{webp:"/images-webp/medium/zones/beauty.webp",fallback:"/images/zones/beauty.jpg",width:1024},small:{webp:"/images-webp/small/zones/beauty.webp",fallback:"/images/zones/beauty.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/zones/beauty.webp",fallback:"/images/zones/beauty.jpg",width:320}},"restaurant/booking.jpg":{original:{webp:"/images-webp/restaurant/booking.webp",fallback:"/images/restaurant/booking.jpg"},large:{webp:"/images-webp/large/restaurant/booking.webp",fallback:"/images/restaurant/booking.jpg",width:1600},medium:{webp:"/images-webp/medium/restaurant/booking.webp",fallback:"/images/restaurant/booking.jpg",width:1024},small:{webp:"/images-webp/small/restaurant/booking.webp",fallback:"/images/restaurant/booking.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/restaurant/booking.webp",fallback:"/images/restaurant/booking.jpg",width:320}},"restaurant/bar.jpg":{original:{webp:"/images-webp/restaurant/bar.webp",fallback:"/images/restaurant/bar.jpg"},large:{webp:"/images-webp/large/restaurant/bar.webp",fallback:"/images/restaurant/bar.jpg",width:1600},medium:{webp:"/images-webp/medium/restaurant/bar.webp",fallback:"/images/restaurant/bar.jpg",width:1024},small:{webp:"/images-webp/small/restaurant/bar.webp",fallback:"/images/restaurant/bar.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/restaurant/bar.webp",fallback:"/images/restaurant/bar.jpg",width:320}},"logos/logo-header.png":{original:{webp:"/images-webp/logos/logo-header.webp",fallback:"/images/logos/logo-header.png"},large:{webp:"/images-webp/large/logos/logo-header.webp",fallback:"/images/logos/logo-header.png",width:1600},medium:{webp:"/images-webp/medium/logos/logo-header.webp",fallback:"/images/logos/logo-header.png",width:1024},small:{webp:"/images-webp/small/logos/logo-header.webp",fallback:"/images/logos/logo-header.png",width:768},thumbnail:{webp:"/images-webp/thumbnail/logos/logo-header.webp",fallback:"/images/logos/logo-header.png",width:320}},"logos/logo-header-2x.png":{original:{webp:"/images-webp/logos/logo-header-2x.webp",fallback:"/images/logos/logo-header-2x.png"},large:{webp:"/images-webp/large/logos/logo-header-2x.webp",fallback:"/images/logos/logo-header-2x.png",width:227},medium:{webp:"/images-webp/medium/logos/logo-header-2x.webp",fallback:"/images/logos/logo-header-2x.png",width:227},small:{webp:"/images-webp/small/logos/logo-header-2x.webp",fallback:"/images/logos/logo-header-2x.png",width:227},thumbnail:{webp:"/images-webp/thumbnail/logos/logo-header-2x.webp",fallback:"/images/logos/logo-header-2x.png",width:227}},"logos/logo-header-1x.png":{original:{webp:"/images-webp/logos/logo-header-1x.webp",fallback:"/images/logos/logo-header-1x.png"},large:{webp:"/images-webp/large/logos/logo-header-1x.webp",fallback:"/images/logos/logo-header-1x.png",width:113},medium:{webp:"/images-webp/medium/logos/logo-header-1x.webp",fallback:"/images/logos/logo-header-1x.png",width:113},small:{webp:"/images-webp/small/logos/logo-header-1x.webp",fallback:"/images/logos/logo-header-1x.png",width:113},thumbnail:{webp:"/images-webp/thumbnail/logos/logo-header-1x.webp",fallback:"/images/logos/logo-header-1x.png",width:113}},"logos/logo-footer-2x.png":{original:{webp:"/images-webp/logos/logo-footer-2x.webp",fallback:"/images/logos/logo-footer-2x.png"},large:{webp:"/images-webp/large/logos/logo-footer-2x.webp",fallback:"/images/logos/logo-footer-2x.png",width:720},medium:{webp:"/images-webp/medium/logos/logo-footer-2x.webp",fallback:"/images/logos/logo-footer-2x.png",width:720},small:{webp:"/images-webp/small/logos/logo-footer-2x.webp",fallback:"/images/logos/logo-footer-2x.png",width:720},thumbnail:{webp:"/images-webp/thumbnail/logos/logo-footer-2x.webp",fallback:"/images/logos/logo-footer-2x.png",width:320}},"logos/logo-footer-1x.png":{original:{webp:"/images-webp/logos/logo-footer-1x.webp",fallback:"/images/logos/logo-footer-1x.png"},large:{webp:"/images-webp/large/logos/logo-footer-1x.webp",fallback:"/images/logos/logo-footer-1x.png",width:360},medium:{webp:"/images-webp/medium/logos/logo-footer-1x.webp",fallback:"/images/logos/logo-footer-1x.png",width:360},small:{webp:"/images-webp/small/logos/logo-footer-1x.webp",fallback:"/images/logos/logo-footer-1x.png",width:360},thumbnail:{webp:"/images-webp/thumbnail/logos/logo-footer-1x.webp",fallback:"/images/logos/logo-footer-1x.png",width:320}},"hero/hero-pool.jpg":{original:{webp:"/images-webp/hero/hero-pool.webp",fallback:"/images/hero/hero-pool.jpg"},large:{webp:"/images-webp/large/hero/hero-pool.webp",fallback:"/images/hero/hero-pool.jpg",width:1600},medium:{webp:"/images-webp/medium/hero/hero-pool.webp",fallback:"/images/hero/hero-pool.jpg",width:1024},small:{webp:"/images-webp/small/hero/hero-pool.webp",fallback:"/images/hero/hero-pool.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/hero/hero-pool.webp",fallback:"/images/hero/hero-pool.jpg",width:320}},"hero/hero-fitness.jpg":{original:{webp:"/images-webp/hero/hero-fitness.webp",fallback:"/images/hero/hero-fitness.jpg"},large:{webp:"/images-webp/large/hero/hero-fitness.webp",fallback:"/images/hero/hero-fitness.jpg",width:1600},medium:{webp:"/images-webp/medium/hero/hero-fitness.webp",fallback:"/images/hero/hero-fitness.jpg",width:1024},small:{webp:"/images-webp/small/hero/hero-fitness.webp",fallback:"/images/hero/hero-fitness.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/hero/hero-fitness.webp",fallback:"/images/hero/hero-fitness.jpg",width:320}},"banya/public.jpg":{original:{webp:"/images-webp/banya/public.webp",fallback:"/images/banya/public.jpg"},large:{webp:"/images-webp/large/banya/public.webp",fallback:"/images/banya/public.jpg",width:1067},medium:{webp:"/images-webp/medium/banya/public.webp",fallback:"/images/banya/public.jpg",width:1024},small:{webp:"/images-webp/small/banya/public.webp",fallback:"/images/banya/public.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/banya/public.webp",fallback:"/images/banya/public.jpg",width:320}},"banya/private.jpg":{original:{webp:"/images-webp/banya/private.webp",fallback:"/images/banya/private.jpg"},large:{webp:"/images-webp/large/banya/private.webp",fallback:"/images/banya/private.jpg",width:1073},medium:{webp:"/images-webp/medium/banya/private.webp",fallback:"/images/banya/private.jpg",width:1024},small:{webp:"/images-webp/small/banya/private.webp",fallback:"/images/banya/private.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/banya/private.webp",fallback:"/images/banya/private.jpg",width:320}},"banya/panoramic.png":{original:{webp:"/images-webp/banya/panoramic.webp",fallback:"/images/banya/panoramic.png"},large:{webp:"/images-webp/large/banya/panoramic.webp",fallback:"/images/banya/panoramic.png",width:1600},medium:{webp:"/images-webp/medium/banya/panoramic.webp",fallback:"/images/banya/panoramic.png",width:1024},small:{webp:"/images-webp/small/banya/panoramic.webp",fallback:"/images/banya/panoramic.png",width:768},thumbnail:{webp:"/images-webp/thumbnail/banya/panoramic.webp",fallback:"/images/banya/panoramic.png",width:320}},"sports/gym/gym-3.jpg":{original:{webp:"/images-webp/sports/gym/gym-3.webp",fallback:"/images/sports/gym/gym-3.jpg"},large:{webp:"/images-webp/large/sports/gym/gym-3.webp",fallback:"/images/sports/gym/gym-3.jpg",width:1600},medium:{webp:"/images-webp/medium/sports/gym/gym-3.webp",fallback:"/images/sports/gym/gym-3.jpg",width:1024},small:{webp:"/images-webp/small/sports/gym/gym-3.webp",fallback:"/images/sports/gym/gym-3.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/sports/gym/gym-3.webp",fallback:"/images/sports/gym/gym-3.jpg",width:320}},"sports/gym/gym-2.jpg":{original:{webp:"/images-webp/sports/gym/gym-2.webp",fallback:"/images/sports/gym/gym-2.jpg"},large:{webp:"/images-webp/large/sports/gym/gym-2.webp",fallback:"/images/sports/gym/gym-2.jpg",width:1600},medium:{webp:"/images-webp/medium/sports/gym/gym-2.webp",fallback:"/images/sports/gym/gym-2.jpg",width:1024},small:{webp:"/images-webp/small/sports/gym/gym-2.webp",fallback:"/images/sports/gym/gym-2.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/sports/gym/gym-2.webp",fallback:"/images/sports/gym/gym-2.jpg",width:320}},"sports/gym/gym-1.jpg":{original:{webp:"/images-webp/sports/gym/gym-1.webp",fallback:"/images/sports/gym/gym-1.jpg"},large:{webp:"/images-webp/large/sports/gym/gym-1.webp",fallback:"/images/sports/gym/gym-1.jpg",width:1600},medium:{webp:"/images-webp/medium/sports/gym/gym-1.webp",fallback:"/images/sports/gym/gym-1.jpg",width:1024},small:{webp:"/images-webp/small/sports/gym/gym-1.webp",fallback:"/images/sports/gym/gym-1.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/sports/gym/gym-1.webp",fallback:"/images/sports/gym/gym-1.jpg",width:320}},"sports/fight-club/fight-3.jpg":{original:{webp:"/images-webp/sports/fight-club/fight-3.webp",fallback:"/images/sports/fight-club/fight-3.jpg"},large:{webp:"/images-webp/large/sports/fight-club/fight-3.webp",fallback:"/images/sports/fight-club/fight-3.jpg",width:1280},medium:{webp:"/images-webp/medium/sports/fight-club/fight-3.webp",fallback:"/images/sports/fight-club/fight-3.jpg",width:1024},small:{webp:"/images-webp/small/sports/fight-club/fight-3.webp",fallback:"/images/sports/fight-club/fight-3.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/sports/fight-club/fight-3.webp",fallback:"/images/sports/fight-club/fight-3.jpg",width:320}},"sports/fight-club/fight-2.jpg":{original:{webp:"/images-webp/sports/fight-club/fight-2.webp",fallback:"/images/sports/fight-club/fight-2.jpg"},large:{webp:"/images-webp/large/sports/fight-club/fight-2.webp",fallback:"/images/sports/fight-club/fight-2.jpg",width:1600},medium:{webp:"/images-webp/medium/sports/fight-club/fight-2.webp",fallback:"/images/sports/fight-club/fight-2.jpg",width:1024},small:{webp:"/images-webp/small/sports/fight-club/fight-2.webp",fallback:"/images/sports/fight-club/fight-2.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/sports/fight-club/fight-2.webp",fallback:"/images/sports/fight-club/fight-2.jpg",width:320}},"sports/fight-club/fight-1.jpg":{original:{webp:"/images-webp/sports/fight-club/fight-1.webp",fallback:"/images/sports/fight-club/fight-1.jpg"},large:{webp:"/images-webp/large/sports/fight-club/fight-1.webp",fallback:"/images/sports/fight-club/fight-1.jpg",width:1080},medium:{webp:"/images-webp/medium/sports/fight-club/fight-1.webp",fallback:"/images/sports/fight-club/fight-1.jpg",width:1024},small:{webp:"/images-webp/small/sports/fight-club/fight-1.webp",fallback:"/images/sports/fight-club/fight-1.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/sports/fight-club/fight-1.webp",fallback:"/images/sports/fight-club/fight-1.jpg",width:320}},"spa/services/thai-massage.jpg":{original:{webp:"/images-webp/spa/services/thai-massage.webp",fallback:"/images/spa/services/thai-massage.jpg"},large:{webp:"/images-webp/large/spa/services/thai-massage.webp",fallback:"/images/spa/services/thai-massage.jpg",width:1600},medium:{webp:"/images-webp/medium/spa/services/thai-massage.webp",fallback:"/images/spa/services/thai-massage.jpg",width:1024},small:{webp:"/images-webp/small/spa/services/thai-massage.webp",fallback:"/images/spa/services/thai-massage.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/spa/services/thai-massage.webp",fallback:"/images/spa/services/thai-massage.jpg",width:320}},"spa/services/aromatherapy.jpg":{original:{webp:"/images-webp/spa/services/aromatherapy.webp",fallback:"/images/spa/services/aromatherapy.jpg"},large:{webp:"/images-webp/large/spa/services/aromatherapy.webp",fallback:"/images/spa/services/aromatherapy.jpg",width:1600},medium:{webp:"/images-webp/medium/spa/services/aromatherapy.webp",fallback:"/images/spa/services/aromatherapy.jpg",width:1024},small:{webp:"/images-webp/small/spa/services/aromatherapy.webp",fallback:"/images/spa/services/aromatherapy.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/spa/services/aromatherapy.webp",fallback:"/images/spa/services/aromatherapy.jpg",width:320}},"menu/wine/wine-007.jpg":{original:{webp:"/images-webp/menu/wine/wine-007.webp",fallback:"/images/menu/wine/wine-007.jpg"},large:{webp:"/images-webp/large/menu/wine/wine-007.webp",fallback:"/images/menu/wine/wine-007.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/wine/wine-007.webp",fallback:"/images/menu/wine/wine-007.jpg",width:1024},small:{webp:"/images-webp/small/menu/wine/wine-007.webp",fallback:"/images/menu/wine/wine-007.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/wine/wine-007.webp",fallback:"/images/menu/wine/wine-007.jpg",width:320}},"menu/wine/wine-006.jpg":{original:{webp:"/images-webp/menu/wine/wine-006.webp",fallback:"/images/menu/wine/wine-006.jpg"},large:{webp:"/images-webp/large/menu/wine/wine-006.webp",fallback:"/images/menu/wine/wine-006.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/wine/wine-006.webp",fallback:"/images/menu/wine/wine-006.jpg",width:1024},small:{webp:"/images-webp/small/menu/wine/wine-006.webp",fallback:"/images/menu/wine/wine-006.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/wine/wine-006.webp",fallback:"/images/menu/wine/wine-006.jpg",width:320}},"menu/wine/wine-005.jpg":{original:{webp:"/images-webp/menu/wine/wine-005.webp",fallback:"/images/menu/wine/wine-005.jpg"},large:{webp:"/images-webp/large/menu/wine/wine-005.webp",fallback:"/images/menu/wine/wine-005.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/wine/wine-005.webp",fallback:"/images/menu/wine/wine-005.jpg",width:1024},small:{webp:"/images-webp/small/menu/wine/wine-005.webp",fallback:"/images/menu/wine/wine-005.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/wine/wine-005.webp",fallback:"/images/menu/wine/wine-005.jpg",width:320}},"menu/wine/wine-004.jpg":{original:{webp:"/images-webp/menu/wine/wine-004.webp",fallback:"/images/menu/wine/wine-004.jpg"},large:{webp:"/images-webp/large/menu/wine/wine-004.webp",fallback:"/images/menu/wine/wine-004.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/wine/wine-004.webp",fallback:"/images/menu/wine/wine-004.jpg",width:1024},small:{webp:"/images-webp/small/menu/wine/wine-004.webp",fallback:"/images/menu/wine/wine-004.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/wine/wine-004.webp",fallback:"/images/menu/wine/wine-004.jpg",width:320}},"menu/wine/wine-003.jpg":{original:{webp:"/images-webp/menu/wine/wine-003.webp",fallback:"/images/menu/wine/wine-003.jpg"},large:{webp:"/images-webp/large/menu/wine/wine-003.webp",fallback:"/images/menu/wine/wine-003.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/wine/wine-003.webp",fallback:"/images/menu/wine/wine-003.jpg",width:1024},small:{webp:"/images-webp/small/menu/wine/wine-003.webp",fallback:"/images/menu/wine/wine-003.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/wine/wine-003.webp",fallback:"/images/menu/wine/wine-003.jpg",width:320}},"menu/wine/wine-002.jpg":{original:{webp:"/images-webp/menu/wine/wine-002.webp",fallback:"/images/menu/wine/wine-002.jpg"},large:{webp:"/images-webp/large/menu/wine/wine-002.webp",fallback:"/images/menu/wine/wine-002.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/wine/wine-002.webp",fallback:"/images/menu/wine/wine-002.jpg",width:1024},small:{webp:"/images-webp/small/menu/wine/wine-002.webp",fallback:"/images/menu/wine/wine-002.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/wine/wine-002.webp",fallback:"/images/menu/wine/wine-002.jpg",width:320}},"menu/wine/wine-001.jpg":{original:{webp:"/images-webp/menu/wine/wine-001.webp",fallback:"/images/menu/wine/wine-001.jpg"},large:{webp:"/images-webp/large/menu/wine/wine-001.webp",fallback:"/images/menu/wine/wine-001.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/wine/wine-001.webp",fallback:"/images/menu/wine/wine-001.jpg",width:1024},small:{webp:"/images-webp/small/menu/wine/wine-001.webp",fallback:"/images/menu/wine/wine-001.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/wine/wine-001.webp",fallback:"/images/menu/wine/wine-001.jpg",width:320}},"menu/soup/soupchiken.jpg":{original:{webp:"/images-webp/menu/soup/soupchiken.webp",fallback:"/images/menu/soup/soupchiken.jpg"},large:{webp:"/images-webp/large/menu/soup/soupchiken.webp",fallback:"/images/menu/soup/soupchiken.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/soup/soupchiken.webp",fallback:"/images/menu/soup/soupchiken.jpg",width:1024},small:{webp:"/images-webp/small/menu/soup/soupchiken.webp",fallback:"/images/menu/soup/soupchiken.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/soup/soupchiken.webp",fallback:"/images/menu/soup/soupchiken.jpg",width:320}},"menu/soup/okroshkanaoiran.jpg":{original:{webp:"/images-webp/menu/soup/okroshkanaoiran.webp",fallback:"/images/menu/soup/okroshkanaoiran.jpg"},large:{webp:"/images-webp/large/menu/soup/okroshkanaoiran.webp",fallback:"/images/menu/soup/okroshkanaoiran.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/soup/okroshkanaoiran.webp",fallback:"/images/menu/soup/okroshkanaoiran.jpg",width:1024},small:{webp:"/images-webp/small/menu/soup/okroshkanaoiran.webp",fallback:"/images/menu/soup/okroshkanaoiran.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/soup/okroshkanaoiran.webp",fallback:"/images/menu/soup/okroshkanaoiran.jpg",width:320}},"menu/soup/okroshkakvas.jpg":{original:{webp:"/images-webp/menu/soup/okroshkakvas.webp",fallback:"/images/menu/soup/okroshkakvas.jpg"},large:{webp:"/images-webp/large/menu/soup/okroshkakvas.webp",fallback:"/images/menu/soup/okroshkakvas.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/soup/okroshkakvas.webp",fallback:"/images/menu/soup/okroshkakvas.jpg",width:1024},small:{webp:"/images-webp/small/menu/soup/okroshkakvas.webp",fallback:"/images/menu/soup/okroshkakvas.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/soup/okroshkakvas.webp",fallback:"/images/menu/soup/okroshkakvas.jpg",width:320}},"menu/soup/borsch-classic.jpg":{original:{webp:"/images-webp/menu/soup/borsch-classic.webp",fallback:"/images/menu/soup/borsch-classic.jpg"},large:{webp:"/images-webp/large/menu/soup/borsch-classic.webp",fallback:"/images/menu/soup/borsch-classic.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/soup/borsch-classic.webp",fallback:"/images/menu/soup/borsch-classic.jpg",width:1024},small:{webp:"/images-webp/small/menu/soup/borsch-classic.webp",fallback:"/images/menu/soup/borsch-classic.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/soup/borsch-classic.webp",fallback:"/images/menu/soup/borsch-classic.jpg",width:320}},"menu/sauce/tzatzikii.jpg":{original:{webp:"/images-webp/menu/sauce/tzatzikii.webp",fallback:"/images/menu/sauce/tzatzikii.jpg"},large:{webp:"/images-webp/large/menu/sauce/tzatzikii.webp",fallback:"/images/menu/sauce/tzatzikii.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/sauce/tzatzikii.webp",fallback:"/images/menu/sauce/tzatzikii.jpg",width:1024},small:{webp:"/images-webp/small/menu/sauce/tzatzikii.webp",fallback:"/images/menu/sauce/tzatzikii.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/sauce/tzatzikii.webp",fallback:"/images/menu/sauce/tzatzikii.jpg",width:320}},"menu/sauce/satsebeli.jpg":{original:{webp:"/images-webp/menu/sauce/satsebeli.webp",fallback:"/images/menu/sauce/satsebeli.jpg"},large:{webp:"/images-webp/large/menu/sauce/satsebeli.webp",fallback:"/images/menu/sauce/satsebeli.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/sauce/satsebeli.webp",fallback:"/images/menu/sauce/satsebeli.jpg",width:1024},small:{webp:"/images-webp/small/menu/sauce/satsebeli.webp",fallback:"/images/menu/sauce/satsebeli.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/sauce/satsebeli.webp",fallback:"/images/menu/sauce/satsebeli.jpg",width:320}},"menu/sauce/pesto.jpg":{original:{webp:"/images-webp/menu/sauce/pesto.webp",fallback:"/images/menu/sauce/pesto.jpg"},large:{webp:"/images-webp/large/menu/sauce/pesto.webp",fallback:"/images/menu/sauce/pesto.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/sauce/pesto.webp",fallback:"/images/menu/sauce/pesto.jpg",width:1024},small:{webp:"/images-webp/small/menu/sauce/pesto.webp",fallback:"/images/menu/sauce/pesto.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/sauce/pesto.webp",fallback:"/images/menu/sauce/pesto.jpg",width:320}},"menu/sauce/mustard.jpg":{original:{webp:"/images-webp/menu/sauce/mustard.webp",fallback:"/images/menu/sauce/mustard.jpg"},large:{webp:"/images-webp/large/menu/sauce/mustard.webp",fallback:"/images/menu/sauce/mustard.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/sauce/mustard.webp",fallback:"/images/menu/sauce/mustard.jpg",width:1024},small:{webp:"/images-webp/small/menu/sauce/mustard.webp",fallback:"/images/menu/sauce/mustard.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/sauce/mustard.webp",fallback:"/images/menu/sauce/mustard.jpg",width:320}},"menu/sauce/aioli.jpg":{original:{webp:"/images-webp/menu/sauce/aioli.webp",fallback:"/images/menu/sauce/aioli.jpg"},large:{webp:"/images-webp/large/menu/sauce/aioli.webp",fallback:"/images/menu/sauce/aioli.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/sauce/aioli.webp",fallback:"/images/menu/sauce/aioli.jpg",width:1024},small:{webp:"/images-webp/small/menu/sauce/aioli.webp",fallback:"/images/menu/sauce/aioli.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/sauce/aioli.webp",fallback:"/images/menu/sauce/aioli.jpg",width:320}},"menu/salad/xymusavokado.jpg":{original:{webp:"/images-webp/menu/salad/xymusavokado.webp",fallback:"/images/menu/salad/xymusavokado.jpg"},large:{webp:"/images-webp/large/menu/salad/xymusavokado.webp",fallback:"/images/menu/salad/xymusavokado.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/salad/xymusavokado.webp",fallback:"/images/menu/salad/xymusavokado.jpg",width:1024},small:{webp:"/images-webp/small/menu/salad/xymusavokado.webp",fallback:"/images/menu/salad/xymusavokado.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/salad/xymusavokado.webp",fallback:"/images/menu/salad/xymusavokado.jpg",width:320}},"menu/salad/xymus.jpg":{original:{webp:"/images-webp/menu/salad/xymus.webp",fallback:"/images/menu/salad/xymus.jpg"},large:{webp:"/images-webp/large/menu/salad/xymus.webp",fallback:"/images/menu/salad/xymus.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/salad/xymus.webp",fallback:"/images/menu/salad/xymus.jpg",width:1024},small:{webp:"/images-webp/small/menu/salad/xymus.webp",fallback:"/images/menu/salad/xymus.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/salad/xymus.webp",fallback:"/images/menu/salad/xymus.jpg",width:320}},"menu/salad/tzatziki.jpg":{original:{webp:"/images-webp/menu/salad/tzatziki.webp",fallback:"/images/menu/salad/tzatziki.jpg"},large:{webp:"/images-webp/large/menu/salad/tzatziki.webp",fallback:"/images/menu/salad/tzatziki.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/salad/tzatziki.webp",fallback:"/images/menu/salad/tzatziki.jpg",width:1024},small:{webp:"/images-webp/small/menu/salad/tzatziki.webp",fallback:"/images/menu/salad/tzatziki.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/salad/tzatziki.webp",fallback:"/images/menu/salad/tzatziki.jpg",width:320}},"menu/salad/salat-brynza.jpg":{original:{webp:"/images-webp/menu/salad/salat-brynza.webp",fallback:"/images/menu/salad/salat-brynza.jpg"},large:{webp:"/images-webp/large/menu/salad/salat-brynza.webp",fallback:"/images/menu/salad/salat-brynza.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/salad/salat-brynza.webp",fallback:"/images/menu/salad/salat-brynza.jpg",width:1024},small:{webp:"/images-webp/small/menu/salad/salat-brynza.webp",fallback:"/images/menu/salad/salat-brynza.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/salad/salat-brynza.webp",fallback:"/images/menu/salad/salat-brynza.jpg",width:320}},"menu/salad/salad-baza.jpg":{original:{webp:"/images-webp/menu/salad/salad-baza.webp",fallback:"/images/menu/salad/salad-baza.jpg"},large:{webp:"/images-webp/large/menu/salad/salad-baza.webp",fallback:"/images/menu/salad/salad-baza.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/salad/salad-baza.webp",fallback:"/images/menu/salad/salad-baza.jpg",width:1024},small:{webp:"/images-webp/small/menu/salad/salad-baza.webp",fallback:"/images/menu/salad/salad-baza.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/salad/salad-baza.webp",fallback:"/images/menu/salad/salad-baza.jpg",width:320}},"menu/salad/cesar-seafood.jpg":{original:{webp:"/images-webp/menu/salad/cesar-seafood.webp",fallback:"/images/menu/salad/cesar-seafood.jpg"},large:{webp:"/images-webp/large/menu/salad/cesar-seafood.webp",fallback:"/images/menu/salad/cesar-seafood.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/salad/cesar-seafood.webp",fallback:"/images/menu/salad/cesar-seafood.jpg",width:1024},small:{webp:"/images-webp/small/menu/salad/cesar-seafood.webp",fallback:"/images/menu/salad/cesar-seafood.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/salad/cesar-seafood.webp",fallback:"/images/menu/salad/cesar-seafood.jpg",width:320}},"menu/salad/caesar-salad.jpg":{original:{webp:"/images-webp/menu/salad/caesar-salad.webp",fallback:"/images/menu/salad/caesar-salad.jpg"},large:{webp:"/images-webp/large/menu/salad/caesar-salad.webp",fallback:"/images/menu/salad/caesar-salad.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/salad/caesar-salad.webp",fallback:"/images/menu/salad/caesar-salad.jpg",width:1024},small:{webp:"/images-webp/small/menu/salad/caesar-salad.webp",fallback:"/images/menu/salad/caesar-salad.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/salad/caesar-salad.webp",fallback:"/images/menu/salad/caesar-salad.jpg",width:320}},"menu/grill/shsvinina.jpg":{original:{webp:"/images-webp/menu/grill/shsvinina.webp",fallback:"/images/menu/grill/shsvinina.jpg"},large:{webp:"/images-webp/large/menu/grill/shsvinina.webp",fallback:"/images/menu/grill/shsvinina.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/shsvinina.webp",fallback:"/images/menu/grill/shsvinina.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/shsvinina.webp",fallback:"/images/menu/grill/shsvinina.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/shsvinina.webp",fallback:"/images/menu/grill/shsvinina.jpg",width:320}},"menu/grill/salad-baza.jpg":{original:{webp:"/images-webp/menu/grill/salad-baza.webp",fallback:"/images/menu/grill/salad-baza.jpg"},large:{webp:"/images-webp/large/menu/grill/salad-baza.webp",fallback:"/images/menu/grill/salad-baza.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/salad-baza.webp",fallback:"/images/menu/grill/salad-baza.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/salad-baza.webp",fallback:"/images/menu/grill/salad-baza.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/salad-baza.webp",fallback:"/images/menu/grill/salad-baza.jpg",width:320}},"menu/grill/kebab_svin_gov.jpg":{original:{webp:"/images-webp/menu/grill/kebab_svin_gov.webp",fallback:"/images/menu/grill/kebab_svin_gov.jpg"},large:{webp:"/images-webp/large/menu/grill/kebab_svin_gov.webp",fallback:"/images/menu/grill/kebab_svin_gov.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/kebab_svin_gov.webp",fallback:"/images/menu/grill/kebab_svin_gov.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/kebab_svin_gov.webp",fallback:"/images/menu/grill/kebab_svin_gov.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/kebab_svin_gov.webp",fallback:"/images/menu/grill/kebab_svin_gov.jpg",width:320}},"menu/grill/kebab_new.jpg":{original:{webp:"/images-webp/menu/grill/kebab_new.webp",fallback:"/images/menu/grill/kebab_new.jpg"},large:{webp:"/images-webp/large/menu/grill/kebab_new.webp",fallback:"/images/menu/grill/kebab_new.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/kebab_new.webp",fallback:"/images/menu/grill/kebab_new.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/kebab_new.webp",fallback:"/images/menu/grill/kebab_new.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/kebab_new.webp",fallback:"/images/menu/grill/kebab_new.jpg",width:320}},"menu/grill/grill-010.jpg":{original:{webp:"/images-webp/menu/grill/grill-010.webp",fallback:"/images/menu/grill/grill-010.jpg"},large:{webp:"/images-webp/large/menu/grill/grill-010.webp",fallback:"/images/menu/grill/grill-010.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/grill-010.webp",fallback:"/images/menu/grill/grill-010.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/grill-010.webp",fallback:"/images/menu/grill/grill-010.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/grill-010.webp",fallback:"/images/menu/grill/grill-010.jpg",width:320}},"menu/grill/grill-009.jpg":{original:{webp:"/images-webp/menu/grill/grill-009.webp",fallback:"/images/menu/grill/grill-009.jpg"},large:{webp:"/images-webp/large/menu/grill/grill-009.webp",fallback:"/images/menu/grill/grill-009.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/grill-009.webp",fallback:"/images/menu/grill/grill-009.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/grill-009.webp",fallback:"/images/menu/grill/grill-009.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/grill-009.webp",fallback:"/images/menu/grill/grill-009.jpg",width:320}},"menu/grill/grill-008.jpg":{original:{webp:"/images-webp/menu/grill/grill-008.webp",fallback:"/images/menu/grill/grill-008.jpg"},large:{webp:"/images-webp/large/menu/grill/grill-008.webp",fallback:"/images/menu/grill/grill-008.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/grill-008.webp",fallback:"/images/menu/grill/grill-008.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/grill-008.webp",fallback:"/images/menu/grill/grill-008.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/grill-008.webp",fallback:"/images/menu/grill/grill-008.jpg",width:320}},"menu/grill/grill-005.jpg":{original:{webp:"/images-webp/menu/grill/grill-005.webp",fallback:"/images/menu/grill/grill-005.jpg"},large:{webp:"/images-webp/large/menu/grill/grill-005.webp",fallback:"/images/menu/grill/grill-005.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/grill-005.webp",fallback:"/images/menu/grill/grill-005.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/grill-005.webp",fallback:"/images/menu/grill/grill-005.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/grill-005.webp",fallback:"/images/menu/grill/grill-005.jpg",width:320}},"menu/grill/grill-003.jpg":{original:{webp:"/images-webp/menu/grill/grill-003.webp",fallback:"/images/menu/grill/grill-003.jpg"},large:{webp:"/images-webp/large/menu/grill/grill-003.webp",fallback:"/images/menu/grill/grill-003.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/grill-003.webp",fallback:"/images/menu/grill/grill-003.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/grill-003.webp",fallback:"/images/menu/grill/grill-003.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/grill-003.webp",fallback:"/images/menu/grill/grill-003.jpg",width:320}},"menu/grill/grill-002.jpg":{original:{webp:"/images-webp/menu/grill/grill-002.webp",fallback:"/images/menu/grill/grill-002.jpg"},large:{webp:"/images-webp/large/menu/grill/grill-002.webp",fallback:"/images/menu/grill/grill-002.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/grill-002.webp",fallback:"/images/menu/grill/grill-002.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/grill-002.webp",fallback:"/images/menu/grill/grill-002.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/grill-002.webp",fallback:"/images/menu/grill/grill-002.jpg",width:320}},"menu/grill/file_okun.jpg":{original:{webp:"/images-webp/menu/grill/file_okun.webp",fallback:"/images/menu/grill/file_okun.jpg"},large:{webp:"/images-webp/large/menu/grill/file_okun.webp",fallback:"/images/menu/grill/file_okun.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/file_okun.webp",fallback:"/images/menu/grill/file_okun.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/file_okun.webp",fallback:"/images/menu/grill/file_okun.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/file_okun.webp",fallback:"/images/menu/grill/file_okun.jpg",width:320}},"menu/grill/chicken_kebabb.jpg":{original:{webp:"/images-webp/menu/grill/chicken_kebabb.webp",fallback:"/images/menu/grill/chicken_kebabb.jpg"},large:{webp:"/images-webp/large/menu/grill/chicken_kebabb.webp",fallback:"/images/menu/grill/chicken_kebabb.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/chicken_kebabb.webp",fallback:"/images/menu/grill/chicken_kebabb.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/chicken_kebabb.webp",fallback:"/images/menu/grill/chicken_kebabb.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/chicken_kebabb.webp",fallback:"/images/menu/grill/chicken_kebabb.jpg",width:320}},"menu/grill/chicken_kebab.jpg":{original:{webp:"/images-webp/menu/grill/chicken_kebab.webp",fallback:"/images/menu/grill/chicken_kebab.jpg"},large:{webp:"/images-webp/large/menu/grill/chicken_kebab.webp",fallback:"/images/menu/grill/chicken_kebab.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/chicken_kebab.webp",fallback:"/images/menu/grill/chicken_kebab.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/chicken_kebab.webp",fallback:"/images/menu/grill/chicken_kebab.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/chicken_kebab.webp",fallback:"/images/menu/grill/chicken_kebab.jpg",width:320}},"menu/grill/chicken_adj.jpg":{original:{webp:"/images-webp/menu/grill/chicken_adj.webp",fallback:"/images/menu/grill/chicken_adj.jpg"},large:{webp:"/images-webp/large/menu/grill/chicken_adj.webp",fallback:"/images/menu/grill/chicken_adj.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/chicken_adj.webp",fallback:"/images/menu/grill/chicken_adj.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/chicken_adj.webp",fallback:"/images/menu/grill/chicken_adj.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/chicken_adj.webp",fallback:"/images/menu/grill/chicken_adj.jpg",width:320}},"menu/grill/beef_kebab.jpg":{original:{webp:"/images-webp/menu/grill/beef_kebab.webp",fallback:"/images/menu/grill/beef_kebab.jpg"},large:{webp:"/images-webp/large/menu/grill/beef_kebab.webp",fallback:"/images/menu/grill/beef_kebab.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/beef_kebab.webp",fallback:"/images/menu/grill/beef_kebab.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/beef_kebab.webp",fallback:"/images/menu/grill/beef_kebab.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/beef_kebab.webp",fallback:"/images/menu/grill/beef_kebab.jpg",width:320}},"menu/grill/Salmon_grill.jpg":{original:{webp:"/images-webp/menu/grill/Salmon_grill.webp",fallback:"/images/menu/grill/Salmon_grill.jpg"},large:{webp:"/images-webp/large/menu/grill/Salmon_grill.webp",fallback:"/images/menu/grill/Salmon_grill.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/Salmon_grill.webp",fallback:"/images/menu/grill/Salmon_grill.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/Salmon_grill.webp",fallback:"/images/menu/grill/Salmon_grill.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/Salmon_grill.webp",fallback:"/images/menu/grill/Salmon_grill.jpg",width:320}},"menu/grill/Grilled_shrimp.jpg":{original:{webp:"/images-webp/menu/grill/Grilled_shrimp.webp",fallback:"/images/menu/grill/Grilled_shrimp.jpg"},large:{webp:"/images-webp/large/menu/grill/Grilled_shrimp.webp",fallback:"/images/menu/grill/Grilled_shrimp.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/grill/Grilled_shrimp.webp",fallback:"/images/menu/grill/Grilled_shrimp.jpg",width:1024},small:{webp:"/images-webp/small/menu/grill/Grilled_shrimp.webp",fallback:"/images/menu/grill/Grilled_shrimp.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/grill/Grilled_shrimp.webp",fallback:"/images/menu/grill/Grilled_shrimp.jpg",width:320}},"menu/dessert/oreo.jpg":{original:{webp:"/images-webp/menu/dessert/oreo.webp",fallback:"/images/menu/dessert/oreo.jpg"},large:{webp:"/images-webp/large/menu/dessert/oreo.webp",fallback:"/images/menu/dessert/oreo.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/dessert/oreo.webp",fallback:"/images/menu/dessert/oreo.jpg",width:1024},small:{webp:"/images-webp/small/menu/dessert/oreo.webp",fallback:"/images/menu/dessert/oreo.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/dessert/oreo.webp",fallback:"/images/menu/dessert/oreo.jpg",width:320}},"menu/dessert/java.jpg":{original:{webp:"/images-webp/menu/dessert/java.webp",fallback:"/images/menu/dessert/java.jpg"},large:{webp:"/images-webp/large/menu/dessert/java.webp",fallback:"/images/menu/dessert/java.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/dessert/java.webp",fallback:"/images/menu/dessert/java.jpg",width:1024},small:{webp:"/images-webp/small/menu/dessert/java.webp",fallback:"/images/menu/dessert/java.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/dessert/java.webp",fallback:"/images/menu/dessert/java.jpg",width:320}},"menu/dessert/dessert-002.jpg":{original:{webp:"/images-webp/menu/dessert/dessert-002.webp",fallback:"/images/menu/dessert/dessert-002.jpg"},large:{webp:"/images-webp/large/menu/dessert/dessert-002.webp",fallback:"/images/menu/dessert/dessert-002.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/dessert/dessert-002.webp",fallback:"/images/menu/dessert/dessert-002.jpg",width:1024},small:{webp:"/images-webp/small/menu/dessert/dessert-002.webp",fallback:"/images/menu/dessert/dessert-002.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/dessert/dessert-002.webp",fallback:"/images/menu/dessert/dessert-002.jpg",width:320}},"menu/dessert/dessert-001.jpg":{original:{webp:"/images-webp/menu/dessert/dessert-001.webp",fallback:"/images/menu/dessert/dessert-001.jpg"},large:{webp:"/images-webp/large/menu/dessert/dessert-001.webp",fallback:"/images/menu/dessert/dessert-001.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/dessert/dessert-001.webp",fallback:"/images/menu/dessert/dessert-001.jpg",width:1024},small:{webp:"/images-webp/small/menu/dessert/dessert-001.webp",fallback:"/images/menu/dessert/dessert-001.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/dessert/dessert-001.webp",fallback:"/images/menu/dessert/dessert-001.jpg",width:320}},"menu/dessert/baked-apple.jpg":{original:{webp:"/images-webp/menu/dessert/baked-apple.webp",fallback:"/images/menu/dessert/baked-apple.jpg"},large:{webp:"/images-webp/large/menu/dessert/baked-apple.webp",fallback:"/images/menu/dessert/baked-apple.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/dessert/baked-apple.webp",fallback:"/images/menu/dessert/baked-apple.jpg",width:1024},small:{webp:"/images-webp/small/menu/dessert/baked-apple.webp",fallback:"/images/menu/dessert/baked-apple.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/dessert/baked-apple.webp",fallback:"/images/menu/dessert/baked-apple.jpg",width:320}},"menu/dessert/apple.jpg":{original:{webp:"/images-webp/menu/dessert/apple.webp",fallback:"/images/menu/dessert/apple.jpg"},large:{webp:"/images-webp/large/menu/dessert/apple.webp",fallback:"/images/menu/dessert/apple.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/dessert/apple.webp",fallback:"/images/menu/dessert/apple.jpg",width:1024},small:{webp:"/images-webp/small/menu/dessert/apple.webp",fallback:"/images/menu/dessert/apple.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/dessert/apple.webp",fallback:"/images/menu/dessert/apple.jpg",width:320}},"menu/burger/cheeseburger-deluxe.jpg":{original:{webp:"/images-webp/menu/burger/cheeseburger-deluxe.webp",fallback:"/images/menu/burger/cheeseburger-deluxe.jpg"},large:{webp:"/images-webp/large/menu/burger/cheeseburger-deluxe.webp",fallback:"/images/menu/burger/cheeseburger-deluxe.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/burger/cheeseburger-deluxe.webp",fallback:"/images/menu/burger/cheeseburger-deluxe.jpg",width:1024},small:{webp:"/images-webp/small/menu/burger/cheeseburger-deluxe.webp",fallback:"/images/menu/burger/cheeseburger-deluxe.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/burger/cheeseburger-deluxe.webp",fallback:"/images/menu/burger/cheeseburger-deluxe.jpg",width:320}},"menu/burger/burgerlamb.jpg":{original:{webp:"/images-webp/menu/burger/burgerlamb.webp",fallback:"/images/menu/burger/burgerlamb.jpg"},large:{webp:"/images-webp/large/menu/burger/burgerlamb.webp",fallback:"/images/menu/burger/burgerlamb.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/burger/burgerlamb.webp",fallback:"/images/menu/burger/burgerlamb.jpg",width:1024},small:{webp:"/images-webp/small/menu/burger/burgerlamb.webp",fallback:"/images/menu/burger/burgerlamb.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/burger/burgerlamb.webp",fallback:"/images/menu/burger/burgerlamb.jpg",width:320}},"menu/burger/burgerkaif.jpg":{original:{webp:"/images-webp/menu/burger/burgerkaif.webp",fallback:"/images/menu/burger/burgerkaif.jpg"},large:{webp:"/images-webp/large/menu/burger/burgerkaif.webp",fallback:"/images/menu/burger/burgerkaif.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/burger/burgerkaif.webp",fallback:"/images/menu/burger/burgerkaif.jpg",width:1024},small:{webp:"/images-webp/small/menu/burger/burgerkaif.webp",fallback:"/images/menu/burger/burgerkaif.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/burger/burgerkaif.webp",fallback:"/images/menu/burger/burgerkaif.jpg",width:320}},"menu/breakfast/yogurt.jpg":{original:{webp:"/images-webp/menu/breakfast/yogurt.webp",fallback:"/images/menu/breakfast/yogurt.jpg"},large:{webp:"/images-webp/large/menu/breakfast/yogurt.webp",fallback:"/images/menu/breakfast/yogurt.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/yogurt.webp",fallback:"/images/menu/breakfast/yogurt.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/yogurt.webp",fallback:"/images/menu/breakfast/yogurt.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/yogurt.webp",fallback:"/images/menu/breakfast/yogurt.jpg",width:320}},"menu/breakfast/vegetable.jpg":{original:{webp:"/images-webp/menu/breakfast/vegetable.webp",fallback:"/images/menu/breakfast/vegetable.jpg"},large:{webp:"/images-webp/large/menu/breakfast/vegetable.webp",fallback:"/images/menu/breakfast/vegetable.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/vegetable.webp",fallback:"/images/menu/breakfast/vegetable.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/vegetable.webp",fallback:"/images/menu/breakfast/vegetable.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/vegetable.webp",fallback:"/images/menu/breakfast/vegetable.jpg",width:320}},"menu/breakfast/tostlos.jpg":{original:{webp:"/images-webp/menu/breakfast/tostlos.webp",fallback:"/images/menu/breakfast/tostlos.jpg"},large:{webp:"/images-webp/large/menu/breakfast/tostlos.webp",fallback:"/images/menu/breakfast/tostlos.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/tostlos.webp",fallback:"/images/menu/breakfast/tostlos.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/tostlos.webp",fallback:"/images/menu/breakfast/tostlos.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/tostlos.webp",fallback:"/images/menu/breakfast/tostlos.jpg",width:320}},"menu/breakfast/tostham.jpg":{original:{webp:"/images-webp/menu/breakfast/tostham.webp",fallback:"/images/menu/breakfast/tostham.jpg"},large:{webp:"/images-webp/large/menu/breakfast/tostham.webp",fallback:"/images/menu/breakfast/tostham.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/tostham.webp",fallback:"/images/menu/breakfast/tostham.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/tostham.webp",fallback:"/images/menu/breakfast/tostham.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/tostham.webp",fallback:"/images/menu/breakfast/tostham.jpg",width:320}},"menu/breakfast/tostavokado.jpg":{original:{webp:"/images-webp/menu/breakfast/tostavokado.webp",fallback:"/images/menu/breakfast/tostavokado.jpg"},large:{webp:"/images-webp/large/menu/breakfast/tostavokado.webp",fallback:"/images/menu/breakfast/tostavokado.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/tostavokado.webp",fallback:"/images/menu/breakfast/tostavokado.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/tostavokado.webp",fallback:"/images/menu/breakfast/tostavokado.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/tostavokado.webp",fallback:"/images/menu/breakfast/tostavokado.jpg",width:320}},"menu/breakfast/sirniki.jpg":{original:{webp:"/images-webp/menu/breakfast/sirniki.webp",fallback:"/images/menu/breakfast/sirniki.jpg"},large:{webp:"/images-webp/large/menu/breakfast/sirniki.webp",fallback:"/images/menu/breakfast/sirniki.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/sirniki.webp",fallback:"/images/menu/breakfast/sirniki.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/sirniki.webp",fallback:"/images/menu/breakfast/sirniki.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/sirniki.webp",fallback:"/images/menu/breakfast/sirniki.jpg",width:320}},"menu/breakfast/shaksukatom.jpg":{original:{webp:"/images-webp/menu/breakfast/shaksukatom.webp",fallback:"/images/menu/breakfast/shaksukatom.jpg"},large:{webp:"/images-webp/large/menu/breakfast/shaksukatom.webp",fallback:"/images/menu/breakfast/shaksukatom.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/shaksukatom.webp",fallback:"/images/menu/breakfast/shaksukatom.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/shaksukatom.webp",fallback:"/images/menu/breakfast/shaksukatom.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/shaksukatom.webp",fallback:"/images/menu/breakfast/shaksukatom.jpg",width:320}},"menu/breakfast/rice.jpg":{original:{webp:"/images-webp/menu/breakfast/rice.webp",fallback:"/images/menu/breakfast/rice.jpg"},large:{webp:"/images-webp/large/menu/breakfast/rice.webp",fallback:"/images/menu/breakfast/rice.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/rice.webp",fallback:"/images/menu/breakfast/rice.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/rice.webp",fallback:"/images/menu/breakfast/rice.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/rice.webp",fallback:"/images/menu/breakfast/rice.jpg",width:320}},"menu/breakfast/ovsanka.jpg":{original:{webp:"/images-webp/menu/breakfast/ovsanka.webp",fallback:"/images/menu/breakfast/ovsanka.jpg"},large:{webp:"/images-webp/large/menu/breakfast/ovsanka.webp",fallback:"/images/menu/breakfast/ovsanka.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/ovsanka.webp",fallback:"/images/menu/breakfast/ovsanka.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/ovsanka.webp",fallback:"/images/menu/breakfast/ovsanka.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/ovsanka.webp",fallback:"/images/menu/breakfast/ovsanka.jpg",width:320}},"menu/breakfast/oatmeal-breakfast.jpg":{original:{webp:"/images-webp/menu/breakfast/oatmeal-breakfast.webp",fallback:"/images/menu/breakfast/oatmeal-breakfast.jpg"},large:{webp:"/images-webp/large/menu/breakfast/oatmeal-breakfast.webp",fallback:"/images/menu/breakfast/oatmeal-breakfast.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/oatmeal-breakfast.webp",fallback:"/images/menu/breakfast/oatmeal-breakfast.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/oatmeal-breakfast.webp",fallback:"/images/menu/breakfast/oatmeal-breakfast.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/oatmeal-breakfast.webp",fallback:"/images/menu/breakfast/oatmeal-breakfast.jpg",width:320}},"menu/breakfast/kartoshka.jpg":{original:{webp:"/images-webp/menu/breakfast/kartoshka.webp",fallback:"/images/menu/breakfast/kartoshka.jpg"},large:{webp:"/images-webp/large/menu/breakfast/kartoshka.webp",fallback:"/images/menu/breakfast/kartoshka.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/kartoshka.webp",fallback:"/images/menu/breakfast/kartoshka.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/kartoshka.webp",fallback:"/images/menu/breakfast/kartoshka.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/kartoshka.webp",fallback:"/images/menu/breakfast/kartoshka.jpg",width:320}},"menu/breakfast/kaif-breakfast.jpg":{original:{webp:"/images-webp/menu/breakfast/kaif-breakfast.webp",fallback:"/images/menu/breakfast/kaif-breakfast.jpg"},large:{webp:"/images-webp/large/menu/breakfast/kaif-breakfast.webp",fallback:"/images/menu/breakfast/kaif-breakfast.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/kaif-breakfast.webp",fallback:"/images/menu/breakfast/kaif-breakfast.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/kaif-breakfast.webp",fallback:"/images/menu/breakfast/kaif-breakfast.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/kaif-breakfast.webp",fallback:"/images/menu/breakfast/kaif-breakfast.jpg",width:320}},"menu/breakfast/grechka.jpg":{original:{webp:"/images-webp/menu/breakfast/grechka.webp",fallback:"/images/menu/breakfast/grechka.jpg"},large:{webp:"/images-webp/large/menu/breakfast/grechka.webp",fallback:"/images/menu/breakfast/grechka.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/grechka.webp",fallback:"/images/menu/breakfast/grechka.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/grechka.webp",fallback:"/images/menu/breakfast/grechka.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/grechka.webp",fallback:"/images/menu/breakfast/grechka.jpg",width:320}},"menu/breakfast/french_fries.jpg":{original:{webp:"/images-webp/menu/breakfast/french_fries.webp",fallback:"/images/menu/breakfast/french_fries.jpg"},large:{webp:"/images-webp/large/menu/breakfast/french_fries.webp",fallback:"/images/menu/breakfast/french_fries.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/french_fries.webp",fallback:"/images/menu/breakfast/french_fries.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/french_fries.webp",fallback:"/images/menu/breakfast/french_fries.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/french_fries.webp",fallback:"/images/menu/breakfast/french_fries.jpg",width:320}},"menu/breakfast/cheeseburger-deluxe.jpg":{original:{webp:"/images-webp/menu/breakfast/cheeseburger-deluxe.webp",fallback:"/images/menu/breakfast/cheeseburger-deluxe.jpg"},large:{webp:"/images-webp/large/menu/breakfast/cheeseburger-deluxe.webp",fallback:"/images/menu/breakfast/cheeseburger-deluxe.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/cheeseburger-deluxe.webp",fallback:"/images/menu/breakfast/cheeseburger-deluxe.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/cheeseburger-deluxe.webp",fallback:"/images/menu/breakfast/cheeseburger-deluxe.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/cheeseburger-deluxe.webp",fallback:"/images/menu/breakfast/cheeseburger-deluxe.jpg",width:320}},"menu/breakfast/caesar-salad.jpg":{original:{webp:"/images-webp/menu/breakfast/caesar-salad.webp",fallback:"/images/menu/breakfast/caesar-salad.jpg"},large:{webp:"/images-webp/large/menu/breakfast/caesar-salad.webp",fallback:"/images/menu/breakfast/caesar-salad.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/caesar-salad.webp",fallback:"/images/menu/breakfast/caesar-salad.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/caesar-salad.webp",fallback:"/images/menu/breakfast/caesar-salad.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/caesar-salad.webp",fallback:"/images/menu/breakfast/caesar-salad.jpg",width:320}},"menu/breakfast/apple-dessert.jpg":{original:{webp:"/images-webp/menu/breakfast/apple-dessert.webp",fallback:"/images/menu/breakfast/apple-dessert.jpg"},large:{webp:"/images-webp/large/menu/breakfast/apple-dessert.webp",fallback:"/images/menu/breakfast/apple-dessert.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/apple-dessert.webp",fallback:"/images/menu/breakfast/apple-dessert.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/apple-dessert.webp",fallback:"/images/menu/breakfast/apple-dessert.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/apple-dessert.webp",fallback:"/images/menu/breakfast/apple-dessert.jpg",width:320}},"menu/breakfast/Shakshuka-salmon.jpg":{original:{webp:"/images-webp/menu/breakfast/Shakshuka-salmon.webp",fallback:"/images/menu/breakfast/Shakshuka-salmon.jpg"},large:{webp:"/images-webp/large/menu/breakfast/Shakshuka-salmon.webp",fallback:"/images/menu/breakfast/Shakshuka-salmon.jpg",width:1600},medium:{webp:"/images-webp/medium/menu/breakfast/Shakshuka-salmon.webp",fallback:"/images/menu/breakfast/Shakshuka-salmon.jpg",width:1024},small:{webp:"/images-webp/small/menu/breakfast/Shakshuka-salmon.webp",fallback:"/images/menu/breakfast/Shakshuka-salmon.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/menu/breakfast/Shakshuka-salmon.webp",fallback:"/images/menu/breakfast/Shakshuka-salmon.jpg",width:320}},"beauty/services/facial.jpg":{original:{webp:"/images-webp/beauty/services/facial.webp",fallback:"/images/beauty/services/facial.jpg"},large:{webp:"/images-webp/large/beauty/services/facial.webp",fallback:"/images/beauty/services/facial.jpg",width:1600},medium:{webp:"/images-webp/medium/beauty/services/facial.webp",fallback:"/images/beauty/services/facial.jpg",width:1024},small:{webp:"/images-webp/small/beauty/services/facial.webp",fallback:"/images/beauty/services/facial.jpg",width:768},thumbnail:{webp:"/images-webp/thumbnail/beauty/services/facial.webp",fallback:"/images/beauty/services/facial.jpg",width:320}}}},v=h.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${e=>e.$placeholderColor||"#f5f5f5"};
`,z=h.picture`
  width: 100%;
  height: 100%;
  display: block;
`,_=h.img`
  width: 100%;
  height: 100%;
  object-fit: ${e=>e.$objectFit||"cover"};
  object-position: ${e=>e.$objectPosition||"center"};
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${e=>e.$loaded?1:0};
  transform: scale(${e=>e.$loaded?1:1.05});
  will-change: opacity, transform;
`,$=h.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$placeholderColor||"#f5f5f5"};
  display: ${e=>e.$loaded?"none":"block"};
`,S=h.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${e=>e.$thumbnail?`url(${e.$thumbnail})`:"none"};
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  opacity: ${e=>e.$loaded?0:.7};
  transition: opacity 0.3s;
`,A=h.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${e=>e.$loaded?0:.5};
  transition: opacity 0.3s;
  width: 24px;
  height: 24px;
  
  &:after {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #90B3A7;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,I={small:"(max-width: 480px)",medium:"(max-width: 768px)",large:"(max-width: 1200px)",original:""},B=({src:i,alt:l="",fallbackSrc:s,sizes:m=I,loading:b="lazy",objectFit:g="cover",objectPosition:p="center",placeholderColor:r="#f5f5f5",className:t,style:n,onLoad:w,onError:o,withPlaceholder:u=!0,withLoadingIndicator:d=!0,disableWebP:c=!1,priority:h=!1,...f})=>{const[k,j]=e.useState(!1),[x,B]=e.useState(!1),q=e.useRef(null),P=(()=>{if(!i||!i.startsWith("/images/"))return{original:{webp:i,fallback:s||i}};const e=(i.startsWith("/")?i.substring(1):i).replace(/^images\//,"");return y.images[e]||{original:{webp:c?s||i:i.replace(/\.(jpg|jpeg|png)$/i,".webp"),fallback:s||i}}})(),V=P.thumbnail?y.detectWebP()&&!c?P.thumbnail.webp:P.thumbnail.fallback:null,C=(()=>{if("undefined"==typeof window)return"medium";const e=window.innerWidth;return e<=480?"small":e<=768?"medium":e<=1200?"large":"original"})(),W=P[C]||P.original;return e.useEffect(()=>{if(!q.current||"lazy"!==b||h)return;const e=new IntersectionObserver(a=>{a.forEach(a=>{if(a.isIntersecting){const i=a.target;i.setAttribute("loading","eager"),e.unobserve(i)}})},{rootMargin:"200px 0px",threshold:.01});return e.observe(q.current),()=>{q.current&&e.unobserve(q.current)}},[b,h]),a.jsxs(v,{className:t,style:n,$placeholderColor:r,onMouseEnter:()=>{P.large&&"large"!==C&&((new Image).src=y.detectWebP()&&!c?P.large.webp:P.large.fallback)},...f,children:[u&&V&&a.jsx(S,{$thumbnail:V,$loaded:k}),d&&a.jsx(A,{$loaded:k}),a.jsxs(z,{children:[!c&&P.small&&a.jsx("source",{media:"(max-width: 480px)",srcSet:P.small.webp,type:"image/webp"}),!c&&P.medium&&a.jsx("source",{media:"(max-width: 768px)",srcSet:P.medium.webp,type:"image/webp"}),!c&&P.large&&a.jsx("source",{media:"(max-width: 1200px)",srcSet:P.large.webp,type:"image/webp"}),!c&&P.original&&a.jsx("source",{srcSet:P.original.webp,type:"image/webp"}),P.small&&a.jsx("source",{media:"(max-width: 480px)",srcSet:P.small.fallback}),P.medium&&a.jsx("source",{media:"(max-width: 768px)",srcSet:P.medium.fallback}),P.large&&a.jsx("source",{media:"(max-width: 1200px)",srcSet:P.large.fallback}),a.jsx(_,{ref:q,src:x?s||i:W.fallback,alt:l,loading:h?"eager":b,onLoad:()=>{j(!0),w&&w()},onError:()=>{B(!0),o&&o()},$loaded:k,$objectFit:g,$objectPosition:p})]}),u&&!V&&a.jsx($,{$loaded:k,$placeholderColor:r})]})},q=h.section`
  position: relative;
  min-height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  overflow: hidden;
`,P=h.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`,V=h.div`
  width: 100%;
  height: 100%;
  position: relative;
`,C=h.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${e=>e.$active?1:0};
  transition: opacity 2s ease-in-out;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.75);
  }
`,W=h.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  text-align: center;
  color: white;
`,O=h(j.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 100px;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  font-weight: 400;
  color: white;
  margin-bottom: 3rem;
  backdrop-filter: blur(20px);
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #90B3A7;
  }
`,G=h(j.h1)`
  font-size: clamp(2.75rem, 8vw, 6rem);
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: white;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  
  .highlight {
    color: #90B3A7;
  }
`,E=h(j.div)`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
`,Y=h(j.p)`
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  color: white;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
`,L=h(j.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`,T=h(j.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: 500;
  cursor: pointer;
  min-height: 56px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,F=h(j.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: 500;
  cursor: pointer;
  min-height: 56px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,H=h(j.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  
  .scroll-text {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
  }
  
  .scroll-line {
    width: 1px;
    height: 30px;
    background: rgba(255, 255, 255, 0.3);
    margin: 0 auto;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 8px;
      background: white;
      animation: scroll 2s ease-in-out infinite;
    }
  }
  
  @keyframes scroll {
    0% { transform: translateY(0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(22px); opacity: 0; }
  }
`,N=e.memo(()=>{const{t:b}=i(),[g,p]=e.useState(0),r=[{small:"/images-webp/small/banya/panoramic.webp",medium:"/images-webp/medium/banya/panoramic.webp",large:"/images-webp/large/banya/panoramic.webp",fallback:"/images/banya/panoramic.png",title:b("banya.hero.images.panoramic","Панорамная парная 150 м²")},{small:"/images-webp/small/banya/private.webp",medium:"/images-webp/medium/banya/private.webp",large:"/images-webp/large/banya/private.webp",fallback:"/images/banya/private.jpg",title:b("banya.hero.images.private","Приватная сауна")},{small:"/images-webp/small/banya/public.webp",medium:"/images-webp/medium/banya/public.webp",large:"/images-webp/large/banya/public.webp",fallback:"/images/banya/public.jpg",title:b("banya.hero.images.public","Общественная парная")}];e.useEffect(()=>{const e=setInterval(()=>{p(e=>(e+1)%r.length)},8e3);return()=>clearInterval(e)},[r.length]);const t={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.25,.46,.45,.94]}}};return a.jsxs(q,{children:[a.jsx(P,{children:a.jsx(V,{children:r.map((e,i)=>a.jsx(C,{$active:i===g,children:a.jsxs("picture",{children:[a.jsx("source",{media:"(max-width: 767px)",srcSet:e.small,type:"image/webp"}),a.jsx("source",{media:"(min-width: 768px) and (max-width: 1023px)",srcSet:e.medium,type:"image/webp"}),a.jsx("source",{media:"(min-width: 1024px)",srcSet:e.large,type:"image/webp"}),a.jsx(B,{src:e.fallback,alt:e.title,loading:0===i?"eager":"lazy",priority:0===i,objectFit:"cover",className:"w-full h-full",withPlaceholder:!0,withLoadingIndicator:0===i})]})},i))})}),a.jsx(W,{children:a.jsxs(j.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:1,staggerChildren:.15}}},initial:"hidden",animate:"visible",children:[a.jsxs(O,{variants:t,children:[a.jsx(l,{}),b("banya.hero.badge","Лучшая баня Пхукета")]}),a.jsx(G,{variants:t,dangerouslySetInnerHTML:{__html:b("banya.hero.title",'Панорамная <span className="highlight">русская баня</span>')}}),a.jsx(E,{variants:t,children:b("banya.hero.area","150 квадратных метров")}),a.jsx(Y,{variants:t,children:b("banya.hero.subtitle","Традиции встречают современность")}),a.jsxs(L,{variants:t,children:[a.jsxs(T,{as:"a",href:"https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20забронировать%20русскую%20баню%20в%20KAIF",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.02},whileTap:{scale:.98},children:[b("banya.hero.book_button","Забронировать"),a.jsx(s,{})]}),a.jsxs(F,{as:"a",href:"https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20о%20русской%20бане%20KAIF",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.02},whileTap:{scale:.98},children:[b("banya.hero.contacts_button","Контакты"),a.jsx(m,{})]})]})]})}),a.jsxs(H,{initial:{opacity:0},animate:{opacity:1},transition:{delay:2,duration:1},children:[a.jsx("div",{className:"scroll-text",children:b("banya.hero.scroll","Scroll")}),a.jsx("div",{className:"scroll-line"})]})]})}),R=h.section`
  padding: clamp(4rem, 8vw, 8rem) 0;
  background: white;
  position: relative;
`,D=h.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
`,K=h.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,M=h(j.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(230, 126, 34, 0.08);
  border: 1px solid rgba(230, 126, 34, 0.15);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #90B3A7;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #90B3A7;
  }
`,X=h(j.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 2rem;
  line-height: 1.2;
`,U=h(j.p)`
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,h(j.div)`
  background: white;
  border: 1px solid #f8f8f8;
  border-radius: 32px;
  padding: 3rem 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  
  ${e=>e.$highlight&&"\n    border-color: #90B3A7;\n    box-shadow: 0 4px 20px rgba(144, 179, 167, 0.08);\n    \n    &::before {\n      content: 'Popular';\n      position: absolute;\n      top: 1rem;\n      right: 1rem;\n      background: #90B3A7;\n      color: white;\n      padding: 0.5rem 1rem;\n      border-radius: 20px;\n      font-size: 0.75rem;\n      font-weight: 600;\n      z-index: 3;\n    }\n  "}
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
    border-color: rgba(144, 179, 167, 0.3);
  }
`,h.div`
  height: 200px;
  background: ${e=>e.$image?`url(${e.$image})`:e.$gradient};
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(144, 179, 167, 0.08) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`,h.h3`
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`,h.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
`,h.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,h.li`
  font-size: 0.875rem;
  color: #555;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '✓';
    color: #90B3A7;
    font-weight: bold;
    font-size: 1rem;
  }
`,h.div`
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: #90B3A7;
  margin-bottom: 1.5rem;
  
  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: #666;
  }
`,h(j.button)`
  width: 100%;
  padding: 1.25rem 2rem;
  background: #90B3A7;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.4s ease;
  
  &:hover {
    background: #7DA399;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(144, 179, 167, 0.25);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;const J=h(j.div)`
  background: white;
  border: 1px solid #f8f8f8;
  border-radius: 32px;
  padding: 4rem 3rem;
  text-align: center;
  transition: all 0.4s ease;
  max-width: 600px;
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
    border-color: rgba(144, 179, 167, 0.3);
  }
`,Q=h.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #90B3A7, #A8C5B8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 8px 24px rgba(144, 179, 167, 0.15);
  
  svg {
    width: 2rem;
    height: 2rem;
    color: white;
  }
`,Z=h.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`,ee=h.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`,ae=h.p`
  font-size: 1rem;
  color: #90B3A7;
  font-weight: 500;
`,ie=()=>{const{t:e}=i();return a.jsx(R,{children:a.jsxs(D,{children:[a.jsxs(K,{children:[a.jsxs(M,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[a.jsx(l,{}),e("banya.services.badge","Банные программы")]}),a.jsx(X,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:e("banya.services.title","Выберите свой банный ритуал")}),a.jsx(U,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:e("banya.services.description","От панорамной бани с видом на джунгли до приватных VIP-ритуалов с мастером парения")})]}),a.jsx(j.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsxs(J,{variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},children:[a.jsx(Q,{children:a.jsx(b,{})}),a.jsx(Z,{children:e("banya.services.coming_soon.title","Скоро открытие")}),a.jsx(ee,{children:e("banya.services.coming_soon.description","Мы готовим для вас уникальные банные программы с традиционными русскими ритуалами и современными wellness-процедурами")}),a.jsx(ae,{children:e("banya.services.coming_soon.subtext","Следите за новостями — скоро мы обновим этот раздел!")})]})})]})})},le=h.section`
  padding: clamp(4rem, 8vw, 8rem) 0;
  background: #fafafa;
  position: relative;
`,se=h.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
`,me=h.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,be=h(j.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(230, 126, 34, 0.08);
  border: 1px solid rgba(230, 126, 34, 0.15);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #90B3A7;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #90B3A7;
  }
`,ge=h(j.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 2rem;
  line-height: 1.2;
`,pe=h(j.p)`
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`,re=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,te=h(j.div)`
  background: white;
  border: 1px solid #f8f8f8;
  border-radius: 32px;
  padding: 3rem 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
    border-color: rgba(144, 179, 167, 0.3);
  }
`,ne=h.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #90B3A7, #A8C5B8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 8px 24px rgba(144, 179, 167, 0.15);
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: white;
  }
`,we=h.h3`
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`,oe=h.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
`,ue=h.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`,de=h.li`
  font-size: 0.875rem;
  color: #555;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,ce=()=>{const{t:e}=i(),l=[{id:"materials",icon:g,title:e("banya.features.materials.title","Натуральные материалы"),description:e("banya.features.materials.description","100% натуральная отделка из сибирских пород дерева"),items:[e("banya.features.materials.items.cedar","Сибирский кедр"),e("banya.features.materials.items.linden","Алтайская липа"),e("banya.features.materials.items.birch","Карельская береза"),e("banya.features.materials.items.coating","Экологически чистые покрытия"),e("banya.features.materials.items.aromatherapy","Природная ароматерапия")]},{id:"panoramic",icon:p,title:e("banya.features.panoramic.title","Панорамный дизайн"),description:e("banya.features.panoramic.description","Уникальная архитектура с видом на тропические джунгли"),items:[e("banya.features.panoramic.items.area","150 квадратных метров"),e("banya.features.panoramic.items.windows","Панорамные окна"),e("banya.features.panoramic.items.view","Вид на джунгли"),e("banya.features.panoramic.items.lighting","Естественное освещение"),e("banya.features.panoramic.items.harmony","Гармония с природой")]},{id:"safety",icon:r,title:e("banya.features.safety.title","Безопасность"),description:e("banya.features.safety.description","Соблюдение всех международных стандартов безопасности"),items:[e("banya.features.safety.items.fire","Пожарная безопасность"),e("banya.features.safety.items.ventilation","Система вентиляции"),e("banya.features.safety.items.emergency","Аварийное освещение"),e("banya.features.safety.items.medical","Медицинская помощь"),e("banya.features.safety.items.security","Круглосуточное дежурство")]},{id:"wellness",icon:t,title:e("banya.features.wellness.title","Wellness-программы"),description:e("banya.features.wellness.description","Авторские оздоровительные программы от мастеров"),items:[e("banya.features.wellness.items.russian","Русский банный ритуал"),e("banya.features.wellness.items.finnish","Финская сауна"),e("banya.features.wellness.items.aromatherapy","Ароматерапия"),e("banya.features.wellness.items.massage","Массаж в парной"),e("banya.features.wellness.items.herbs","Травяные настои")]},{id:"service",icon:n,title:e("banya.features.service.title","Профессионализм"),description:e("banya.features.service.description","Команда опытных банщиков и мастеров парения"),items:[e("banya.features.service.items.certified","Сертифицированные банщики"),e("banya.features.service.items.traditions","Русские традиции"),e("banya.features.service.items.individual","Индивидуальный подход"),e("banya.features.service.items.consultation","Консультации по здоровью"),e("banya.features.service.items.quality","Качественное обслуживание")]}],s={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsx(le,{children:a.jsxs(se,{children:[a.jsxs(me,{children:[a.jsxs(be,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[a.jsx(p,{}),e("banya.features.badge","Наши преимущества")]}),a.jsx(ge,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:e("banya.features.title","Почему выбирают нас")}),a.jsx(pe,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:e("banya.features.subtitle","Единственная панорамная русская баня на Пхукете с аутентичными традициями и современными технологиями")})]}),a.jsx(j.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsx(re,{children:l.map(e=>a.jsxs(te,{variants:s,whileHover:{y:-5},transition:{duration:.3},children:[a.jsx(ne,{children:a.jsx(e.icon,{})}),a.jsx(we,{children:e.title}),a.jsx(oe,{children:e.description}),a.jsx(ue,{children:e.items.map((e,i)=>a.jsx(de,{children:e},i))})]},e.id))})})]})})},he=h.section`
  padding: clamp(4rem, 8vw, 8rem) 0;
  background: white;
  position: relative;
`,fe=h.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
`,ke=h.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`,je=h(j.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(230, 126, 34, 0.08);
  border: 1px solid rgba(230, 126, 34, 0.15);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #90B3A7;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #90B3A7;
  }
`,xe=h(j.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 2rem;
  line-height: 1.2;
`,ye=h(j.p)`
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,h(j.div)`
  background: #fafafa;
  border-radius: 28px;
  padding: 3rem;
  border: 1px solid #f8f8f8;
`,h.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2rem;
`,h.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,h.div`
  width: 40px;
  height: 40px;
  background: #90B3A7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: white;
  }
`,h.div`
  flex: 1;
`,h.p`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.25rem;
  font-weight: 500;
`,h.p`
  font-size: 1rem;
  color: #1a1a1a;
  margin: 0;
  font-weight: 600;
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: #90B3A7;
    }
  }
`,h(j.div)`
  background: white;
  border: 1px solid #f8f8f8;
  border-radius: 28px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
`,h.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2rem;
`,h.div`
  margin-bottom: 1.5rem;
`,h.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`,h.input`
  width: 100%;
  padding: 1.25rem 1.5rem;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.4s ease;
  
  &:focus {
    outline: none;
    border-color: #90B3A7;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`,h.select`
  width: 100%;
  padding: 1.25rem 1.5rem;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.4s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #90B3A7;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.1);
  }
`,h.textarea`
  width: 100%;
  padding: 1.25rem 1.5rem;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  min-height: 120px;
  resize: vertical;
  transition: all 0.4s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #90B3A7;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`,h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,h(j.button)`
  width: 100%;
  padding: 1.5rem 2rem;
  background: #90B3A7;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.4s ease;
  
  &:hover:not(:disabled) {
    background: #7DA399;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(144, 179, 167, 0.25);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover:not(:disabled) svg {
    transform: translateX(3px);
  }
`,h(j.div)`
  background: #e8f5e8;
  border: 1px solid #4caf50;
  border-radius: 8px;
  padding: 1rem;
  color: #2e7d32;
  text-align: center;
  margin-bottom: 1rem;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
`;const ve=h(j.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem 2rem;
  width: auto;
  min-width: 220px;
  background: #90B3A7;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(144, 179, 167, 0.15);
  
  &:hover {
    background: #7DA399;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.25);
  }
  
  svg {
    width: 1.125rem;
    height: 1.125rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
  
  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
  }
`,ze=h.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  
  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 2rem;
  }
`,_e=()=>{const{t:e}=i();return a.jsx(he,{children:a.jsxs(fe,{children:[a.jsxs(ke,{children:[a.jsxs(je,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[a.jsx(w,{}),e("banya.booking.badge","Бронирование")]}),a.jsx(xe,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:e("banya.booking.title","Забронировать баню")}),a.jsx(ye,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:e("banya.booking.description","Для бронирования свяжитесь с нами удобным способом")})]}),a.jsx(j.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsxs(ze,{variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},children:[a.jsx(j.h3,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:e("banya.booking.cta.title","Готовы окунуться в мир русской бани?")}),a.jsx(j.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},children:e("banya.booking.cta.description","Свяжитесь с нами для получения подробной информации о ценах, доступности и особенностях наших банных программ")}),a.jsxs(ve,{onClick:()=>{const e=document.getElementById("contacts");e?e.scrollIntoView({behavior:"smooth",block:"start"}):window.location.href="/#contacts"},initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},whileHover:{scale:1.05},whileTap:{scale:.95},children:[e("banya.booking.cta.button","Перейти к контактам"),a.jsx(s,{})]})]})})]})})},$e=h.section`
  position: relative;
  padding: 3rem 0;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.03) 0%, rgba(168, 197, 184, 0.02) 100%);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`,Se=h.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`,Ae=h(j.div)`
  text-align: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`,Ie=h(j.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(144, 179, 167, 0.08);
  border: 1px solid rgba(144, 179, 167, 0.15);
  border-radius: 24px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #90B3A7;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #90B3A7;
  }
`,Be=h(j.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`,qe=h(j.p)`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`,Pe=h.div`
  max-width: 900px;
  margin: 0 auto;
`,Ve=h(j.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ce=h(j.div)`
  background: white;
  border: 1px solid ${({$isOpen:e})=>e?"#e2e8f0":"#f1f5f9"};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  ${({$isOpen:e})=>e&&"\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n    transform: translateY(-1px);\n  "}
  
  &:hover {
    border-color: #e2e8f0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
`,We=h.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8fafc;
  }
`,Oe=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`,Ge=h.div`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(144, 179, 167, 0.08);
  border: 1px solid rgba(144, 179, 167, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #90B3A7;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
  
  ${Ce}:hover & {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    border-color: transparent;
  }
`,Ee=h.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
  line-height: 1.4;
`,Ye=h(j.div)`
  width: 2rem;
  height: 2rem;
  background: ${({$isOpen:e})=>e?"linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)":"rgba(144, 179, 167, 0.08)"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$isOpen:e})=>e?"white":"#90B3A7"};
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: ${({$isOpen:e})=>e?"0 4px 8px rgba(0, 0, 0, 0.1)":"none"};
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`,Le=h(j.div)`
  overflow: hidden;
`,Te=h.div`
  padding: 0 2rem 2rem 5.5rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 2rem 1.5rem;
  }
`,Fe=h.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0;
`,He=()=>{const{t:s}=i(),[m,b]=e.useState(new Set),p=[{id:"panoramic",icon:g,question:s("banya.faq.questions.panoramic.question","Что особенного в панорамной бане?"),answer:s("banya.faq.questions.panoramic.answer","Наша баня уникальна несколькими особенностями: площадь 150 квадратных метров с панорамными окнами в джунгли, качественные печи премиум-класса, натуральные материалы из сибирских пород дерева. Это единственная панорамная русская баня на Пхукете, где можно наслаждаться традиционными банными ритуалами с видом на тропическую природу.")},{id:"procedures",icon:l,question:s("banya.faq.questions.procedures.question","Какие процедуры входят в банный ритуал?"),answer:s("banya.faq.questions.procedures.answer","В зависимости от выбранной программы вы получите: классический банный ритуал с березовыми вениками, ароматерапию с эфирными маслами, травяные настои и чаи, возможность заказать массаж в парной, а также персональное сопровождение мастера парения для VIP-программ.")},{id:"materials",icon:r,question:s("banya.faq.questions.materials.question","Из каких материалов построена баня?"),answer:s("banya.faq.questions.materials.answer","Баня построена исключительно из натуральных экологически чистых материалов: сибирский кедр, алтайская липа, карельская береза. Все покрытия природные, без химических добавок. Такие материалы создают особый микроклимат и обеспечивают естественную ароматерапию.")}],t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},w={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{duration:.3},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{duration:.3},opacity:{duration:.2}}}};return a.jsx($e,{children:a.jsxs(Se,{children:[a.jsxs(Ae,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[a.jsxs(Ie,{variants:n,children:[a.jsx(o,{}),s("banya.faq.badge","Вопросы и ответы")]}),a.jsx(Be,{variants:n,children:s("banya.faq.title","Часто задаваемые вопросы")}),a.jsx(qe,{variants:n,children:s("banya.faq.subtitle","Ответы на самые популярные вопросы о нашей бане")})]}),a.jsx(Pe,{children:a.jsx(Ve,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:p.map((e,i)=>a.jsxs(Ce,{variants:n,$isOpen:m.has(i),children:[a.jsxs(We,{onClick:()=>(e=>{const a=new Set(m);a.has(e)?a.delete(e):a.add(e),b(a)})(i),children:[a.jsxs(Oe,{children:[a.jsx(Ge,{children:a.jsx(e.icon,{})}),a.jsx(Ee,{children:e.question})]}),a.jsx(Ye,{$isOpen:m.has(i),animate:{rotate:m.has(i)?180:0},transition:{duration:.3},children:m.has(i)?a.jsx(u,{}):a.jsx(d,{})})]}),a.jsx(x,{children:m.has(i)&&a.jsx(Le,{variants:w,initial:"hidden",animate:"visible",exit:"exit",children:a.jsx(Te,{children:a.jsx(Fe,{dangerouslySetInnerHTML:{__html:e.answer}})})})})]},e.id))})})]})})},Ne=h.div`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${e=>e.theme.fonts.primary};
  overflow-x: hidden;
`,Re=()=>{const{t:e}=i(),[l,s]=c.useState(!1);return c.useEffect(()=>{document.body.classList.add("banya-page"),window.scrollTo(0,0);const e=setTimeout(()=>{s(!0)},50);return()=>{document.body.classList.remove("banya-page"),clearTimeout(e)}},[]),l?a.jsxs(Ne,{as:j.div,initial:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},transition:{duration:.2},children:[a.jsx(k,{titleKey:"page_titles.banya",description:e("banya.hero.subtitle","Traditional Russian banya experience"),keywords:"KAIF banya, Russian sauna, traditional banya, steam bath, Phuket",ogImage:"/images/banya/panoramic.jpg"}),a.jsx(f,{}),a.jsx(N,{}),a.jsx(ie,{}),a.jsx(ce,{}),a.jsx(He,{}),a.jsx(_e,{})]}):null};export{Re as default};
