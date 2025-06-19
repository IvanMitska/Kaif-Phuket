# Исправление проблемы автоматического скролла при открытии бургер-меню

## Проблема

При открытии бургер-меню пользователя автоматически перекидывает вверх страницы, что создает плохой UX.

## Причины проблемы

1. **Отсутствие preventDefault()** в обработчиках событий
2. **Неправильная обработка overflow: hidden** на body
3. **Скачок позиции при смене стилей body**

## Решение

### 1. Добавили preventDefault() для всех кликов

```javascript
const toggleMobileMenu = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  setIsMobileMenuOpen(!isMobileMenuOpen);
};
```

### 2. Исправили обработку overflow для body

**Проблема:** Простое `overflow: hidden` вызывает скачок к началу страницы.

**Решение:** Сохраняем и восстанавливаем позицию скролла:

```javascript
useEffect(() => {
  if (isMobileMenuOpen) {
    // Сохраняем текущую позицию скролла
    const scrollY = window.scrollY;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
  } else {
    // Восстанавливаем позицию скролла
    const scrollY = document.body.style.top;

    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }
}, [isMobileMenuOpen]);
```

### 3. Обновили все обработчики событий

- **Кнопка бургер-меню** - добавлен preventDefault()
- **Overlay (затемнение)** - добавлен preventDefault()
- **Элементы навигации** - добавлен preventDefault()
- **Языковые кнопки** - добавлен preventDefault()

## Результат

✅ **При открытии бургер-меню страница остается на той же позиции**  
✅ **При закрытии меню позиция скролла восстанавливается**  
✅ **Нет неожиданных скачков страницы**  
✅ **Улучшен пользовательский опыт**

## Тестирование

1. Прокрутите страницу вниз
2. Откройте бургер-меню - страница должна остаться на месте
3. Закройте меню - позиция скролла должна сохраниться
4. Попробуйте разные элементы меню

## Ключевые файлы

- `src/components/layout/Header.jsx` - основные исправления

---

**Статус**: ✅ Исправлено  
**Дата**: Декабрь 2024  
**Результат**: Бургер-меню работает без автоматического скролла
