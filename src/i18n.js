import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';
import thTranslation from './locales/th/translation.json';

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
      th: {
        translation: thTranslation,
      },
    },
    lng: 'ru', // Устанавливаем русский по умолчанию
    fallbackLng: 'ru',
    debug: process.env.NODE_ENV === 'development',
    
    detection: {
      order: ['localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      caches: ['localStorage', 'sessionStorage'],
    },
    
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n;
