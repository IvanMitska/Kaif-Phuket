# KAIF - Jungle Club & Spa Website

A modern, responsive website for KAIF - Jungle Club & Spa in Phuket, Thailand. This website showcases the four main service areas of the complex: Restaurant, SPA, Sports facilities, and Beauty Salon.

## Features

- **Multilingual Support**: Russian, English, and Thai language options
- **Responsive Design**: Optimized for web and mobile devices
- **Modern UI**: Elegant, minimalist aesthetic with smooth animations
- **Service Sections**: Dedicated pages for each of the four main service areas
- **Booking Systems**: Integrated booking functionality for all services
- **Location Integration**: Google Maps integration for easy navigation
- **Promotions**: Special offers and deals showcase

## Technology Stack

- **Frontend Framework**: React.js
- **Styling**: Styled Components & Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **Animations**: Framer Motion
- **Internationalization**: i18next
- **Form Handling**: Formik + Yup
- **Build Tool**: Vite.js

## Color Palette

- **Primary**: Mint/Sage Green (#B5C4B1)
- **Secondary**: White (#FFFFFF)
- **Accent Colors**:
  - Soft Orange (#E8C0A8)
  - Light Blue (#A1C5D1)
  - Pale Green (#B0C5A4)
  - Muted Lavender (#CAB5C8)
- **Text**: Black (#000000)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd kaif-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Project Structure

```
src/
├── assets/          # Static assets (images, icons, fonts)
├── components/      # Reusable UI components
│   ├── common/      # Common UI elements
│   └── layout/      # Layout components (Header, Footer)
├── contexts/        # React Context providers
├── hooks/           # Custom React hooks
├── locales/         # Translation files
│   ├── en/          # English translations
│   ├── ru/          # Russian translations
│   └── th/          # Thai translations
├── pages/           # Page components
└── utils/           # Utility functions
```

## Deployment

The website is configured for deployment on Netlify or Vercel.

## License

This project is proprietary and confidential.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Оптимизация производительности и загрузки изображений

### Проведенная оптимизация

1. **Оптимизация изображений**

   - Преобразование всех изображений в формат WebP для лучшего сжатия
   - Создание нескольких размеров для каждого изображения (responsive images)
   - Оптимизация JPEG/PNG изображений с адаптивным качеством
   - Использование LQIP (Low Quality Image Placeholder) для улучшения UX

2. **Настройка кеширования на Netlify**

   - Установлены HTTP-заголовки кеширования для статических ресурсов
   - Настроены browser hints (preconnect, preload, dns-prefetch) для критических ресурсов
   - Включена сжатие и минификация на стороне Netlify

3. **Улучшения в коде**
   - Добавлен компонент OptimizedImage с ленивой загрузкой и автоматическим выбором оптимального формата
   - Улучшена работа с IntersectionObserver для отложенной загрузки изображений
   - Добавлены анимации загрузки для улучшения восприятия

### Как использовать систему оптимизации

1. **Оптимизация новых изображений**

   ```bash
   # Оптимизирует все изображения и создает WebP версии
   npm run optimize-all

   # Только оптимизация JPEG/PNG
   npm run optimize-images

   # Только конвертация в WebP
   npm run convert-webp
   ```

2. **Использование оптимизированных изображений в коде**

   ```jsx
   import OptimizedImage from "../components/common/OptimizedImage";

   // Использование компонента
   <OptimizedImage
     src="/images/your-image.jpg"
     alt="Описание изображения"
     loading="lazy"
     objectFit="cover"
   />;
   ```

3. **Параметры компонента OptimizedImage**

   | Параметр             | Тип     | По умолчанию | Описание                                            |
   | -------------------- | ------- | ------------ | --------------------------------------------------- |
   | src                  | string  |              | Путь к изображению (из /public/images/)             |
   | alt                  | string  | ''           | Альтернативный текст                                |
   | fallbackSrc          | string  | null         | Запасной путь, если основное изображение недоступно |
   | loading              | string  | 'lazy'       | Режим загрузки ('eager', 'lazy')                    |
   | objectFit            | string  | 'cover'      | Режим масштабирования изображения                   |
   | withPlaceholder      | boolean | true         | Отображать ли плейсхолдер при загрузке              |
   | withLoadingIndicator | boolean | true         | Отображать ли индикатор загрузки                    |

### Устранение проблем с загрузкой

**Изображения долго грузятся на Netlify:**

1. Убедитесь, что все изображения оптимизированы:

   ```bash
   npm run optimize-all
   ```

2. Проверьте, используется ли компонент OptimizedImage для всех изображений
3. Убедитесь, что настройки кеширования на Netlify корректны (проверьте netlify.toml)
4. Для критически важных изображений используйте `loading="eager"` и `fetchpriority="high"`
5. Проверьте размер изображений, при необходимости уменьшите их размеры

**Ошибки при конвертации WebP:**

Некоторые изображения могут быть повреждены или иметь неподдерживаемый формат. Проверьте эти файлы и при необходимости пересохраните их в корректном формате.

## Развертывание

Проект настроен для автоматического развертывания на Netlify при коммитах в основную ветку.

При ручном деплое:

1. Оптимизируйте изображения: `npm run optimize-all`
2. Соберите проект: `npm run build`
3. Загрузите папку `dist` на хостинг

## Дополнительная информация

Полный отчет о проведенных оптимизациях находится в файле `OPTIMIZATION_REPORT.md`.
