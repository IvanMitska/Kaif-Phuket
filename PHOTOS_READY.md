# 🎉 Всё готово для добавления фотографий!

## ✅ Что уже сделано:

1. **Создана структура папок** в `public/images/menu/`
2. **Обновлены пути** в файле данных меню
3. **Создан скрипт** для автоматизации (`update-menu-images.cjs`)
4. **Сохранена резервная копия** данных (`restaurantData.backup.js`)

## 📋 Ваш план действий:

### 1. Добавьте фотографии

Скопируйте фото от фотографа в соответствующие папки:

```bash
# Пример команд для копирования (замените пути на свои)
cp ~/Desktop/photos_pack/breakfast/*.jpg public/images/menu/breakfast/
cp ~/Desktop/photos_pack/soup/*.jpg public/images/menu/soup/
cp ~/Desktop/photos_pack/grill/*.jpg public/images/menu/grill/
# ... и так далее для каждой категории
```

### 2. Переименуйте файлы

Дайте файлам понятные названия:

```bash
# Примеры хороших названий:
kaif-breakfast.jpg
shakshuka-salmon.jpg
borsch-classic.jpg
beef-steak-grill.jpg
americano-coffee.jpg
```

### 3. Обновите файл данных

Откройте `src/components/Restaurant/data/restaurantData.js` и замените placeholder названия на реальные имена файлов:

**Было:**

```javascript
image: "/images/menu/breakfast/breakfast-dish.jpg";
```

**Стало:**

```javascript
image: "/images/menu/breakfast/kaif-breakfast.jpg";
```

### 4. Запустите проект

```bash
npm run dev
```

## 📂 Доступные папки:

- `breakfast/` - Завтраки
- `soup/` - Супы
- `salad/` - Салаты и закуски
- `grill/` - Гриль
- `burger/` - Бургеры
- `dessert/` - Десерты
- `tea/` - Чай
- `coffee/` - Кофе
- `cocktail/` - Коктейли
- `wine/` - Вино
- `beer/` - Пиво
- `strong/` - Крепкий алкоголь
- `shawarma/` - Шаурма
- `side/` - Гарниры
- `sauce/` - Соусы
- `bread/` - Хлеб
- `lunch/` - Обеды
- `dinner/` - Ужины
- `other/` - Прочие категории
- `smoothie/` - Смузи
- `lemonade/` - Лимонады
- `juice/` - Соки

## 🛠️ Полезные команды:

```bash
# Показать структуру папок
node update-menu-images.cjs structure

# Посмотреть справку по скрипту
node update-menu-images.cjs help

# Оптимизировать изображения (если нужно)
find public/images/menu -name "*.jpg" -exec convert {} -quality 85 -resize '1200x900>' {} \;
```

## 💡 Советы:

1. **Качество**: Используйте изображения не менее 800x600px
2. **Размер**: Оптимизируйте до 300-500KB
3. **Формат**: JPG для фотографий, PNG для логотипов
4. **Названия**: Только английские символы, без пробелов
5. **Консистентность**: Одинаковый стиль съемки для всех блюд

---

🚀 **Готово к работе!** Добавляйте фотографии и наслаждайтесь профессиональным видом меню!
