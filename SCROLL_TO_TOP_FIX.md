# Исправление проблемы скролла при переходах между страницами

## Проблема

После исправления автоматического скролла бургер-меню, при переходе на другие страницы они загружались не с начала, а сохраняли позицию скролла с предыдущей страницы.

## Причина проблемы

Когда исправляли проблему с бургер-меню, мы добавили сохранение позиции скролла, но это влияло на все переходы между страницами.

## Решение

### 1. Создали компонент ScrollToTop

**Файл:** `src/components/common/ScrollToTop.jsx`

```javascript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Скроллим к началу страницы при изменении роута
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
```

Этот компонент автоматически скроллит к началу страницы при изменении роута.

### 2. Интегрировали в App.jsx

```javascript
<>
  <LoadingScreen isVisible={isLoading} />
  <ScrollToTop />
  {isContentReady && (
    <div className="App">
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </div>
  )}
</>
```

### 3. Улучшили логику навигации в Header.jsx

Добавили принудительный скролл в функцию `debouncedNavigate`:

```javascript
const debouncedNavigate = useCallback(
  (path) => {
    const timeout = setTimeout(() => {
      navigate(path);
      // Принудительно скроллим к началу после навигации
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }, 100);

    setDebounceTimeout(timeout);
  },
  [navigate, debounceTimeout]
);
```

### 4. Улучшили логику сохранения позиции в мобильном меню

Используем `data-scroll-lock-position` атрибут для более точного контроля:

```javascript
if (isMobileMenuOpen) {
  const scrollY = window.scrollY;
  document.body.setAttribute("data-scroll-lock-position", scrollY.toString());
  // ... остальная логика
} else {
  const savedScrollY = document.body.getAttribute("data-scroll-lock-position");
  if (savedScrollY) {
    window.scrollTo(0, parseInt(savedScrollY));
  }
}
```

### 5. Создали компонент PageScrollReset

**Файл:** `src/components/common/PageScrollReset.jsx`

Дополнительный компонент для принудительного сброса скролла на уровне каждой страницы:

```javascript
const PageScrollReset = () => {
  useEffect(() => {
    const resetScroll = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();
    setTimeout(resetScroll, 0);
    setTimeout(resetScroll, 10);
    setTimeout(resetScroll, 50);
    setTimeout(resetScroll, 100);

    requestAnimationFrame(() => {
      resetScroll();
    });
  }, []);

  return null;
};
```

### 6. Интегрировали в все страницы

Добавили `<PageScrollReset />` в начало каждой страницы:

- RestaurantPage
- SportsPage
- SpaPage
- BanyaPage
- ContactsPage

## Результат

✅ **При переходе между страницами скролл сбрасывается в начало**  
✅ **При открытии/закрытии бургер-меню позиция сохраняется**  
✅ **Нет конфликтов между двумя типами скролла**  
✅ **Улучшен пользовательский опыт навигации**  
✅ **Множественные методы сброса скролла для максимальной надежности**

## Механизм работы

1. **Переход между страницами:**

   - `ScrollToTop` компонент отслеживает изменения `pathname`
   - При изменении роута автоматически вызывается `window.scrollTo(0, 0)`
   - Дополнительно `debouncedNavigate` также принудительно скроллит

2. **Открытие/закрытие бургер-меню:**
   - Позиция сохраняется в `data-scroll-lock-position`
   - При закрытии позиция восстанавливается точно
   - Никак не влияет на навигацию между страницами

## Тестирование

1. Прокрутите главную страницу вниз
2. Перейдите в ресторан через меню - должен открыться с самого верха
3. Прокрутите страницу ресторана вниз
4. Откройте бургер-меню - позиция должна сохраниться
5. Закройте меню - позиция должна восстановиться
6. Перейдите на другую страницу - должна открыться с самого верха

---

**Статус**: ✅ Исправлено  
**Дата**: Декабрь 2024  
**Результат**: Корректная работа скролла для навигации и бургер-меню
