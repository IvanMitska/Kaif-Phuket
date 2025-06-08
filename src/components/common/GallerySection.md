# GallerySection - Современная Галерея KAIF

## Описание

Современная responsive секция галереи для спа-салона KAIF с улучшенным дизайном и функциональностью.

## Особенности

### 🎨 Дизайн

- Минималистичный стиль с акцентом на зеленый цвет бренда (#90B3A7)
- Адаптивная сетка: 3 колонки на десктопе, 2 на планшете, 1 на мобильном
- Плавные hover-эффекты и анимации
- Современная типографика с использованием Playfair Display и Inter

### 🚀 Функциональность

- **Фильтрация по категориям** с плавными переходами
- **Lazy loading изображений** для оптимизации загрузки
- **Lightbox модальное окно** для полноэкранного просмотра
- **Swipe-навигация** в модальном окне
- **Клавиатурная навигация** (стрелки, Escape)
- **Сохранение лайков** в localStorage
- **Индикаторы загрузки** для изображений

### 📱 Мобильная оптимизация

- Touch-friendly элементы управления
- Оптимизированные размеры изображений
- Адаптивная навигация
- Быстрая загрузка контента
- Поддержка prefers-reduced-motion

### ⚡ Производительность

- **Intersection Observer** для ленивой загрузки
- **Дебаунс** для предотвращения излишних ререндеров
- **Мемоизация** данных и функций
- **Оптимизация анимаций** на слабых устройствах
- **Предзагрузка** следующих изображений

## Использование

```jsx
import { GallerySection } from "../components/common";

function App() {
  return (
    <div>
      <GallerySection />
    </div>
  );
}
```

## Структура данных

```javascript
const galleryData = [
  {
    id: 1,
    image: "/path/to/image.jpg",
    title: "Название",
    category: "spa", // 'spa' | 'fitness' | 'pools' | 'relax'
    description: "Описание услуги",
  },
];
```

## Категории фильтров

- **all** - Все изображения
- **spa** - СПА процедуры
- **fitness** - Фитнес и тренажерный зал
- **pools** - Бассейн и водные процедуры
- **relax** - Релаксация и отдых

## Хуки

### useLazyImage

Ленивая загрузка изображений с Intersection Observer.

```javascript
const [imageSrc, setImageRef, isLoaded, hasError] = useLazyImage(originalSrc);
```

### useIntersectionObserver

Отслеживание видимости элементов.

```javascript
const [setRef, isIntersecting, hasIntersected] = useIntersectionObserver();
```

### usePerformanceOptimization

Оптимизация анимаций для слабых устройств.

```javascript
const { isReducedMotion, getOptimizedAnimation } = usePerformanceOptimization();
```

### useTouchGestures

Обработка touch-жестов для навигации.

```javascript
const touchGestures = useTouchGestures(onSwipeLeft, onSwipeRight);
```

### useModal

Управление состоянием модального окна.

```javascript
const { isOpen, content, open, close } = useModal();
```

### useLocalStorage

Сохранение данных в localStorage.

```javascript
const [value, setValue, removeValue] = useLocalStorage("key", defaultValue);
```

## Стилизация

Компонент использует styled-components с темой KAIF:

### Основные цвета

- **Основной**: #90B3A7 (spa и релакс)
- **Дополнительный**: #D4A574 (ресторан, элегантность)
- **Энергия**: #E8734A (спорт, фитнес)
- **Сила**: #2D5B69 (боевые искусства)
- **Свежесть**: #4A90B8 (бассейн, активность)

### Типографика

- **Заголовки**: Playfair Display (элегантный serif)
- **Основной текст**: Inter (современный sans-serif)
- **Акценты**: Poppins (для заголовков разделов)

## Accessibility

- Поддержка клавиатурной навигации
- ARIA-метки для интерактивных элементов
- Поддержка prefers-reduced-motion
- Семантическая разметка
- Контрастные цвета для текста

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Metrics

- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

## Известные ограничения

1. Требует поддержки Intersection Observer (polyfill для старых браузеров)
2. localStorage может быть недоступен в приватном режиме
3. Touch-события не работают на десктопе без тач-экрана

## Roadmap

- [ ] Добавить виртуализацию для больших галерей
- [ ] Поддержка видео в галерее
- [ ] Возможность загрузки изображений пользователями
- [ ] Интеграция с CDN для оптимизации изображений
- [ ] PWA поддержка для офлайн просмотра
