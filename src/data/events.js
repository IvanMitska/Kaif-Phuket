// Events data — single source of truth for homepage card, /events list and /events/:slug detail.

const WHATSAPP_NUMBER = '66624805877';

const MONTHS = { JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11 };

const getEventStart = (event) => {
  const firstDay = parseInt(String(event.date.day).split(/[–-]/)[0], 10);
  const fullText = typeof event.date.full === 'object' && event.date.full !== null
    ? (event.date.full.en ?? Object.values(event.date.full)[0] ?? '')
    : event.date.full;
  const yearMatch = String(fullText).match(/\d{4}/);
  const year = yearMatch ? parseInt(yearMatch[0], 10) : new Date().getFullYear();
  const month = MONTHS[String(event.date.month).toUpperCase()] ?? 0;
  return new Date(year, month, firstDay);
};

const rawEvents = [
  {
    slug: 'pool-party-25-april',
    title: 'Pool Party',
    hook: 'Music · Water · Sunset · Mocktails',
    date: { day: '25', month: 'APR', full: 'Saturday, 25 April 2026' },
    location: 'Kathu, Phuket',
    image: '/images/events/pool-party-2.jpg',
    shortDescription: 'Saturday pool party at KAIF — music, water, sunset and mocktails. 1+1 for special cocktails.',
    longDescription:
      'The perfect vibe to relax and move. Spend Saturday by the pool with a live DJ, sunset views and signature mocktails — 1+1 on special cocktails all evening.',
    schedule: [
      {
        date: 'All evening',
        title: '1+1 Special Cocktails',
        description: 'Order any cocktail from the special list and get the second one free.'
      },
      {
        date: 'Poolside',
        title: 'DJ · Sunset · Mocktails',
        description: 'Live music, chilled mocktails and the best sunset view on the island.'
      }
    ],
    whatsappMessage: 'Hello! I want to join Pool Party at KAIF on 25 April'
  },
  {
    slug: 'womens-friday-24-april',
    title: "Women's Friday",
    hook: 'Ladies Only · Spa · Banya · Cocktails',
    date: { day: '24', month: 'APR', full: 'Friday, 24 April 2026' },
    location: 'Kathu, Phuket',
    image: '/images/events/women-fri-24.webp',
    shortDescription: "Ladies only Friday at KAIF — spa, banya, pool and signature cocktails in a relaxed atmosphere.",
    longDescription:
      "A Friday made for women. Enjoy full access to spa, banya and pool, share a glass with friends and unwind with signature cocktails. Bring your girlfriends — the evening is yours.",
    schedule: [
      {
        date: 'All evening',
        title: 'Ladies Only Access',
        description: 'Spa, banya and pool reserved for women — relax, recharge and enjoy.'
      },
      {
        date: 'Bar',
        title: 'Signature Cocktails',
        description: 'Special cocktail menu crafted for the evening.'
      }
    ],
    whatsappMessage: "Hello! I want to join Women's Friday at KAIF on 24 April"
  },
  {
    slug: 'miss-kaif-2026',
    featured: true,
    title: {
      en: 'Miss KAIF 2026',
      ru: 'Miss KAIF 2026',
      th: 'Miss KAIF 2026'
    },
    hook: {
      en: 'Beauty · Fitness · Talent · Lifestyle',
      ru: 'Красота · Фитнес · Талант · Lifestyle',
      th: 'ความงาม · ฟิตเนส · พรสวรรค์ · ไลฟ์สไตล์'
    },
    date: {
      day: '04',
      month: 'MAY',
      full: {
        en: '4–30 May 2026 · Gala 30 May',
        ru: '4–30 мая 2026 · Гала-финал 30 мая',
        th: '4–30 พฤษภาคม 2026 · กาล่า 30 พฤษภาคม'
      }
    },
    location: {
      en: 'KAIF Jungle & SPA · Phuket',
      ru: 'KAIF Jungle & SPA · Пхукет',
      th: 'KAIF Jungle & SPA · ภูเก็ต'
    },
    image: '/images/events/Miss-kaif-mobile.png',
    shortDescription: {
      en: 'A month-long contest-show at KAIF Jungle & SPA: 20 participants, 4 weeks of events, gala finale on 30 May.',
      ru: 'Месячный конкурс-шоу на базе KAIF Jungle & SPA: 20 участниц, 4 недели мероприятий, гала-финал 30 мая.',
      th: 'คอนเทสต์โชว์หนึ่งเดือนที่ KAIF Jungle & SPA: ผู้เข้าแข่งขัน 20 คน 4 สัปดาห์เต็มของกิจกรรม กาล่าไฟนอล 30 พฤษภาคม'
    },
    longDescription: {
      en: 'Miss KAIF 2026 is a month-long contest-show at the tropical KAIF Jungle & SPA complex in Phuket. 20 participants, 4 weeks, 5 main events and a gala concert on 30 May. Four formats: beauty contest (runway, style, charisma), fitness challenge (CrossFit / Athletic), talent show (vocal, dance, performance) and a lifestyle programme around the SPA and banya ceremonies. Application deadline — 1 May 2026.',
      ru: 'Miss KAIF 2026 — месячный конкурс-шоу на базе тропического комплекса KAIF Jungle & SPA на Пхукете. 20 участниц, 4 недели, 5 ключевых событий и гала-концерт 30 мая. Четыре формата: конкурс красоты (дефиле, стиль, харизма), фитнес-челлендж (CrossFit / Athletic), шоу талантов (вокал, танцы, перформанс) и lifestyle-программа вокруг SPA и банных церемоний. Дедлайн подачи заявок — 1 мая 2026.',
      th: 'Miss KAIF 2026 คือคอนเทสต์โชว์หนึ่งเดือนที่คอมเพล็กซ์เขตร้อน KAIF Jungle & SPA ภูเก็ต ผู้เข้าแข่งขัน 20 คน 4 สัปดาห์ 5 อีเวนต์หลัก และกาล่าคอนเสิร์ต 30 พฤษภาคม สี่รูปแบบ: ประกวดความงาม (เดินแบบ สไตล์ คาริสมา), ฟิตเนสชาเลนจ์ (CrossFit / Athletic), โชว์พรสวรรค์ (ร้องเพลง เต้น เพอร์ฟอร์แมนซ์) และโปรแกรมไลฟ์สไตล์รอบ SPA และพิธีอบสมุนไพร ปิดรับสมัคร — 1 พฤษภาคม 2026'
    },
    schedule: [
      {
        date: { en: '4–9 May · W1', ru: '4–9 мая · W1', th: '4–9 พ.ค. · W1' },
        title: { en: 'Body & Defile', ru: 'Body & Defile', th: 'Body & Defile' },
        description: {
          en: 'Rooftop runway, online voting Best Abs & Booty, first Sunday Event with a live audience.',
          ru: 'Дефиле на крыше комплекса, онлайн-голосование Best Abs & Booty, первый Sunday Event с живой аудиторией.',
          th: 'เดินแบบบนรูฟท็อป โหวตออนไลน์ Best Abs & Booty และ Sunday Event แรกกับผู้ชมสด'
        }
      },
      {
        date: { en: '11–16 May · W2', ru: '11–16 мая · W2', th: '11–16 พ.ค. · W2' },
        title: { en: 'Fitness Challenge', ru: 'Fitness Challenge', th: 'Fitness Challenge' },
        description: {
          en: 'Functional CrossFit / Hyrox competition in the Fight Club zone — DJ, lights, host and crowd.',
          ru: 'Функциональные соревнования CrossFit / Hyrox в зоне Fight Club — DJ, свет, ведущий и болельщики.',
          th: 'การแข่งขัน CrossFit / Hyrox ในโซน Fight Club — DJ แสง พิธีกร และผู้ชม'
        }
      },
      {
        date: { en: '18–23 May · W3', ru: '18–23 мая · W3', th: '18–23 พ.ค. · W3' },
        title: { en: 'Talent Show', ru: 'Шоу талантов', th: 'Talent Show' },
        description: {
          en: 'Vocal, dance, performance and art — an evening event with guests and additional artists.',
          ru: 'Вокал, танцы, перформанс и арт — вечернее событие с гостями и дополнительными артистами.',
          th: 'ร้องเพลง เต้น เพอร์ฟอร์แมนซ์ และศิลปะ — งานช่วงค่ำพร้อมแขกและศิลปินรับเชิญ'
        }
      },
      {
        date: { en: '25–29 May · W4', ru: '25–29 мая · W4', th: '25–29 พ.ค. · W4' },
        title: { en: 'Final preparation', ru: 'Финальная подготовка', th: 'การเตรียมตัวรอบสุดท้าย' },
        description: {
          en: 'Rehearsals and gala prep, pre-party on 29 May.',
          ru: 'Репетиции и подготовка к гала-концерту, pre-party 29 мая.',
          th: 'ซ้อมและเตรียมงานกาล่า พรีปาร์ตี้ 29 พฤษภาคม'
        }
      },
      {
        date: { en: '30 May · Finale', ru: '30 мая · Финал', th: '30 พ.ค. · ไฟนอล' },
        title: { en: 'Gala concert', ru: 'Гала-концерт', th: 'กาล่าคอนเสิร์ต' },
        description: {
          en: 'Stage, media event, awards ceremony. After-party on a yacht and at the sauna on 31 May.',
          ru: 'Сцена, медийное событие, награждение. After-party на яхте и в сауне 31 мая.',
          th: 'เวที งานสื่อ พิธีมอบรางวัล อาฟเตอร์ปาร์ตี้บนเรือยอชต์และซาวน่า 31 พฤษภาคม'
        }
      }
    ],
    whatsappMessage: {
      en: 'Hello! I want to apply for Miss KAIF 2026',
      ru: 'Здравствуйте! Хочу подать заявку на Miss KAIF 2026',
      th: 'สวัสดีครับ/ค่ะ ผม/ดิฉันอยากสมัคร Miss KAIF 2026'
    }
  },
  {
    slug: 'tea-ceremony',
    title: {
      en: 'Tea Ceremony',
      ru: 'Чайная церемония',
      th: 'พิธีชงชา'
    },
    hook: {
      en: 'Every Thursday · Sauna · Tea · Repeat',
      ru: 'Каждый четверг · Сауна · Чай · Повтори',
      th: 'ทุกวันพฤหัสบดี · ซาวน่า · ชา · ทำซ้ำ'
    },
    date: {
      day: 'THU',
      month: 'WEEKLY',
      full: {
        en: 'Every Thursday · 17:30–19:30',
        ru: 'Каждый четверг · 17:30–19:30',
        th: 'ทุกวันพฤหัสบดี · 17:30–19:30 น.'
      }
    },
    location: {
      en: 'KAIF · Second Floor Restaurant',
      ru: 'KAIF · 2-й этаж ресторана',
      th: 'KAIF · ร้านอาหารชั้น 2'
    },
    image: '/images/events/tea-ceremony.jpeg',
    recurring: true,
    shortDescription: {
      en: 'Tea ceremony from our partners PANDA TEA. Every Thursday, 17:30 at the second floor restaurant — included in your visit.',
      ru: 'Чайная церемония от наших партнёров PANDA TEA. Каждый четверг в 17:30 на втором этаже ресторана — уже включено в посещение.',
      th: 'พิธีชงชาจากพันธมิตรของเรา PANDA TEA ทุกวันพฤหัสบดี เวลา 17:30 น. ที่ร้านอาหารชั้น 2 — รวมอยู่ในค่าเข้าแล้ว'
    },
    longDescription: {
      en: 'Every Thursday at KAIF we host a tea ceremony with our partners PANDA TEA. A calm format to exhale, slow down and reset after the day — perfect after the sauna for extra relaxation. We introduce different kinds of tea, share their taste, effect and the culture of tea drinking, so you can try something new and feel the process more deeply. The ceremony is already included in your visit to the complex — nothing extra to pay.',
      ru: 'По четвергам в KAIF проходит чайная церемония от наших партнёров PANDA TEA. Спокойный формат, чтобы выдохнуть, замедлиться и переключиться после дня — идеально зайти после сауны для дополнительного релакса и расслабления. Знакомим с разными видами чая, рассказываем про вкус, эффект и культуру чаепития — можно попробовать что-то новое и лучше прочувствовать процесс. Церемония уже входит в посещение комплекса, ничего доплачивать не нужно.',
      th: 'ทุกวันพฤหัสบดีที่ KAIF เราจัดพิธีชงชาร่วมกับพันธมิตร PANDA TEA รูปแบบสบาย ๆ เพื่อให้คุณได้พักหายใจ ผ่อนคลาย และรีเซ็ตตัวเองหลังเลิกงาน — เหมาะที่สุดหลังอบซาวน่าเพื่อความผ่อนคลายเป็นพิเศษ เราจะแนะนำชาหลากหลายชนิด เล่าถึงรสชาติ สรรพคุณ และวัฒนธรรมการดื่มชา เพื่อให้คุณได้ลองสิ่งใหม่และซึมซับบรรยากาศได้ลึกซึ้งยิ่งขึ้น พิธีนี้รวมอยู่ในค่าเข้าใช้บริการแล้ว ไม่มีค่าใช้จ่ายเพิ่มเติม'
    },
    schedule: [
      {
        date: { en: '17:30 – 19:30', ru: '17:30 – 19:30', th: '17:30 – 19:30 น.' },
        title: {
          en: 'Second Floor Restaurant',
          ru: '2-й этаж ресторана',
          th: 'ร้านอาหารชั้น 2'
        },
        description: {
          en: 'Tea ceremony with PANDA TEA — different kinds of tea, their taste, effect and the culture of tea drinking.',
          ru: 'Чайная церемония с PANDA TEA — разные виды чая, их вкус, эффект и культура чаепития.',
          th: 'พิธีชงชากับ PANDA TEA — ชาหลากหลายชนิด รสชาติ สรรพคุณ และวัฒนธรรมการดื่มชา'
        }
      },
      {
        date: { en: 'Included', ru: 'Включено', th: 'รวมแล้ว' },
        title: {
          en: 'Already in your visit',
          ru: 'Уже в стоимости посещения',
          th: 'รวมอยู่ในค่าเข้าแล้ว'
        },
        description: {
          en: 'No extra payment — the ceremony comes with your access to the complex. Best enjoyed after the sauna.',
          ru: 'Без доплат — церемония входит в доступ к комплексу. Лучше всего после сауны.',
          th: 'ไม่มีค่าใช้จ่ายเพิ่ม — พิธีรวมอยู่ในค่าเข้าใช้บริการ เหมาะที่สุดหลังอบซาวน่า'
        }
      }
    ],
    whatsappMessage: {
      en: 'Hello! I want to join the Tea Ceremony at KAIF (every Thursday)',
      ru: 'Здравствуйте! Хочу прийти на Чайную церемонию в KAIF (по четвергам)',
      th: 'สวัสดีครับ/ค่ะ ผม/ดิฉันอยากร่วมพิธีชงชาที่ KAIF (ทุกวันพฤหัสบดี)'
    }
  },
  {
    slug: 'english-breakfast',
    title: 'English Breakfast',
    hook: 'Every Friday · English Practice · Community',
    date: { day: 'FRI', month: 'WEEKLY', full: 'Every Friday · 10:00–11:30' },
    location: 'KAIF · Second Floor Restaurant',
    image: '/images/events/English-Breakfast.webp',
    recurring: true,
    shortDescription: 'Light breakfast format with English practice and live communication. Every Friday, 10:00–11:30 at the second floor restaurant.',
    longDescription:
      'A warm, relaxed Friday morning format: light breakfast, English practice and live conversation in good company. Join to meet new people and make connections over coffee and fruit. Donation to the coach from 200 THB — fruits are served during the session.',
    schedule: [
      {
        date: '10:00 – 11:30',
        title: 'Second Floor Restaurant',
        description: 'Light breakfast format with English practice and live communication — warm atmosphere and new connections.'
      },
      {
        date: 'Donation',
        title: 'From 200 THB to the coach',
        description: 'Fruits will be served during the session.'
      }
    ],
    whatsappMessage: 'Hello! I want to join English Breakfast at KAIF (every Friday)'
  }
];

export const events = [...rawEvents].sort((a, b) => {
  if (a.featured && !b.featured) return -1;
  if (!a.featured && b.featured) return 1;
  if (a.recurring && !b.recurring) return 1;
  if (!a.recurring && b.recurring) return -1;
  if (a.recurring && b.recurring) return 0;
  return getEventStart(a) - getEventStart(b);
});

const pickLang = (value, lang) => {
  if (value == null || typeof value !== 'object' || Array.isArray(value)) return value;
  if (!('en' in value) && !('ru' in value) && !('th' in value)) return value;
  return value[lang] ?? value.en ?? Object.values(value)[0];
};

export const localizeEvent = (event, lang = 'en') => {
  if (!event) return event;
  return {
    ...event,
    title: pickLang(event.title, lang),
    hook: pickLang(event.hook, lang),
    location: pickLang(event.location, lang),
    shortDescription: pickLang(event.shortDescription, lang),
    longDescription: pickLang(event.longDescription, lang),
    whatsappMessage: pickLang(event.whatsappMessage, lang),
    date: { ...event.date, full: pickLang(event.date.full, lang) },
    schedule: event.schedule?.map((item) => ({
      date: pickLang(item.date, lang),
      title: pickLang(item.title, lang),
      description: pickLang(item.description, lang)
    }))
  };
};

export const getEventBookingLink = (event) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(event.whatsappMessage)}`;

export const getEventBySlug = (slug) => events.find((e) => e.slug === slug);
