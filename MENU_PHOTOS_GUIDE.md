# 📸 Гид по добавлению фотографий в меню ресторана KAIF

## 🎯 Структура папок

Создана организованная структура для фотографий:

```
public/images/menu/
├── breakfast/     # Завтраки
├── soup/          # Супы
├── salad/         # Салаты и закуски
├── grill/         # Гриль
├── burger/        # Бургеры
├── dessert/       # Десерты
├── tea/           # Чай
├── coffee/        # Кофе
├── cocktail/      # Коктейли
├── wine/          # Вино
├── beer/          # Пиво
├── strong/        # Крепкий алкоголь
├── shawarma/      # Шаурма
├── side/          # Гарниры
├── sauce/         # Соусы
├── bread/         # Хлеб
├── lunch/         # Обеды
└── dinner/        # Ужины
```

## 📋 Процесс добавления фотографий

### 1. Подготовка фотографий

- **Формат**: JPG или PNG
- **Разрешение**: минимум 800x600px, оптимально 1200x900px
- **Соотношение сторон**: 4:3 или 16:9
- **Размер файла**: не более 500KB после оптимизации

### 2. Именование файлов

Используйте понятные названия на английском:

```
kaif-breakfast.jpg
shakshuka-salmon.jpg
borsch-classic.jpg
salmon-grill.jpg
```

### 3. Размещение файлов

Скопируйте фотографии в соответствующие папки:

```bash
# Пример для завтраков
cp ~/Desktop/photos/kaif-breakfast.jpg public/images/menu/breakfast/

# Пример для супов
cp ~/Desktop/photos/borsch.jpg public/images/menu/soup/
```

### 4. Обновление данных меню

Откройте файл `src/components/Restaurant/data/restaurantData.js` и замените URL изображений:

**Было:**

```javascript
image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666...";
```

**Стало:**

```javascript
image: "/images/menu/breakfast/kaif-breakfast.jpg";
```

## 🛠️ Автоматизация обновления

### Массовое переименование (macOS/Linux):

```bash
# Переименовать все фото с префиксом категории
cd public/images/menu/breakfast/
for file in *.jpg; do mv "$file" "breakfast-${file}"; done
```

### Оптимизация изображений:

```bash
# Установка imagemagick (если нет)
brew install imagemagick

# Массовая оптимизация
cd public/images/menu/
find . -name "*.jpg" -exec convert {} -quality 85 -resize '1200x900>' {} \;
```

## 📝 Пример обновления данных

```javascript
// В файле restaurantData.js
{
  id: 1,
  name: 'Завтрак "KAIF"',
  description: 'Фирменный завтрак нашего ресторана',
  price: '320 THB',
  image: '/images/menu/breakfast/kaif-breakfast.jpg', // 👈 Новый путь
  tags: ['breakfast', 'popular'],
  popular: true,
  category: 'breakfast'
}
```

## ⚡ Быстрый старт

1. **Скопируйте фото** в соответствующие папки
2. **Переименуйте файлы** по шаблону: `категория-название.jpg`
3. **Откройте** `src/components/Restaurant/data/restaurantData.js`
4. **Замените URL** на локальные пути: `/images/menu/категория/файл.jpg`
5. **Перезапустите** сервер разработки

## 🎨 Рекомендации по фотографии

### Освещение

- Естественный свет предпочтительнее
- Избегайте резких теней
- Мягкое рассеянное освещение

### Композиция

- Блюдо должно занимать 70-80% кадра
- Оставьте немного пространства по краям
- Используйте правило третей

### Стиль

- Минималистичный фон
- Нейтральные цвета посуды
- Добавьте 1-2 элемента декора (зелень, соус)

## 🔧 Troubleshooting

### Фото не отображается?

1. Проверьте путь к файлу
2. Убедитесь, что файл в папке `public/images/menu/`
3. Перезапустите сервер разработки

### Фото слишком большое?

```bash
# Уменьшить размер
convert input.jpg -quality 80 -resize 1200x900 output.jpg
```

### Нужно watermark?

```bash
# Добавить водяной знак
convert input.jpg -pointsize 36 -fill white -gravity southeast -annotate +30+30 'KAIF Restaurant' output.jpg
```

---

🎉 **Готово!** Теперь ваше меню будет использовать профессиональные фотографии от фотографа!
