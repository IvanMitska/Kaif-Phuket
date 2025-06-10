# 🤖 Полная автоматизация фотографий меню

## 🎯 Всё готово для автоматизации!

Теперь у вас есть **два мощных скрипта**, которые полностью автоматизируют процесс замены фотографий:

### 📁 `organize-photos.cjs` - Организатор фотографий

**Что делает**: Анализирует названия файлов и автоматически распределяет их по правильным папкам

### 🤖 `auto-assign-photos.cjs` - Автоматическое назначение

**Что делает**: Сканирует все фотографии и автоматически назначает их блюдам в меню

---

## 🚀 Быстрый старт (3 команды)

### Вариант 1: У вас есть папка с фотографиями от фотографа

```bash
# 1. Организовать фото по категориям (автоматически)
node organize-photos.cjs organize ~/Desktop/photos_from_photographer

# 2. Автоматически назначить фото блюдам
node auto-assign-photos.cjs auto

# 3. Запустить проект и наслаждаться результатом
npm run dev
```

### Вариант 2: Фото уже разложены по папкам

```bash
# 1. Скопировать фото в структуру проекта
cp -r ~/Desktop/menu_photos/* public/images/menu/

# 2. Автоматически назначить фото блюдам
node auto-assign-photos.cjs auto

# 3. Запустить проект
npm run dev
```

---

## 📖 Подробное описание

### 🔍 Как работает автоматическая категоризация

Скрипт `organize-photos.cjs` анализирует **названия файлов** по ключевым словам:

```javascript
// Примеры автоматического распределения:
'kaif-breakfast.jpg'     → breakfast/
'borsch-classic.jpg'     → soup/
'beef-steak-grill.jpg'   → grill/
'caesar-salad.jpg'       → salad/
'tiramisu-classic.jpg'   → dessert/
'espresso-double.jpg'    → coffee/
```

### 🎯 Как работает автоматическое назначение

Скрипт `auto-assign-photos.cjs` умно сопоставляет фото с блюдами:

1. **Точное совпадение** по названию файла и блюда
2. **Поиск по ключевым словам** (борщ, стейк, салат и т.д.)
3. **Распределение по категориям**
4. **Случайное назначение** неиспользованных фото

---

## 📋 Все доступные команды

### 📁 Организатор фотографий

```bash
# Показать справку
node organize-photos.cjs help

# Организовать фото из папки
node organize-photos.cjs organize ~/Desktop/photos

# Создать тестовые файлы (для проверки)
node organize-photos.cjs test
```

### 🤖 Автоматическое назначение

```bash
# Показать справку
node auto-assign-photos.cjs help

# Автоматически назначить все фото
node auto-assign-photos.cjs auto

# Показать статистику доступных фото
node auto-assign-photos.cjs stats
```

### 🛠️ Старые скрипты (ручная настройка)

```bash
# Показать структуру папок
node update-menu-images.cjs structure

# Ручное обновление путей (устарело)
node update-menu-images.cjs update
```

---

## 💡 Советы по названиям файлов

### ✅ Хорошие названия (автоматически распознаются):

```
kaif-breakfast.jpg
shakshuka-eggs.jpg
borsch-classic.jpg
beef-steak-grill.jpg
caesar-salad.jpg
tiramisu-dessert.jpg
cappuccino-coffee.jpg
mojito-cocktail.jpg
```

### ❌ Плохие названия (попадут в 'other'):

```
IMG_1234.jpg
photo1.jpg
DSC_5678.jpg
untitled.jpg
```

### 🔧 Быстрое переименование (массово):

```bash
# В папке с фотографиями
cd ~/Desktop/photos_from_photographer

# Пример: добавить префикс к файлам
for file in *.jpg; do
  mv "$file" "kaif-${file}"
done
```

---

## 📊 Поддерживаемые категории

| Категория     | Ключевые слова             | Примеры файлов         |
| ------------- | -------------------------- | ---------------------- |
| **breakfast** | завтрак, каша, яйца, блины | `kaif-breakfast.jpg`   |
| **soup**      | суп, борщ, солянка, бульон | `borsch-classic.jpg`   |
| **salad**     | салат, цезарь, греческий   | `caesar-salad.jpg`     |
| **grill**     | гриль, стейк, мясо, рыба   | `beef-steak-grill.jpg` |
| **burger**    | бургер, чизбургер          | `cheese-burger.jpg`    |
| **dessert**   | десерт, торт, мороженое    | `tiramisu-classic.jpg` |
| **coffee**    | кофе, эспрессо, капучино   | `cappuccino-art.jpg`   |
| **tea**       | чай, черный, зеленый       | `green-tea.jpg`        |
| **cocktail**  | коктейль, мохито           | `mojito-fresh.jpg`     |
| **wine**      | вино, красное, белое       | `red-wine.jpg`         |
| **beer**      | пиво, лагер                | `beer-lager.jpg`       |

---

## 🛡️ Безопасность

### Автоматические резервные копии

- Каждый запуск создает резервную копию с timestamp
- Файлы сохраняются как `restaurantData.backup.TIMESTAMP.js`
- Исходные данные всегда защищены

### Откат изменений

```bash
# Если что-то пошло не так, вернуть из резервной копии
cp src/components/Restaurant/data/restaurantData.backup.1234567890.js src/components/Restaurant/data/restaurantData.js
```

---

## 🎉 Результат

После выполнения автоматизации:

✅ **Все фотографии** автоматически разложены по категориям  
✅ **Все блюда** получили соответствующие фотографии  
✅ **Никаких изменений вручную** не требуется  
✅ **Резервная копия** создана автоматически  
✅ **Проект готов** к запуску с новыми фото

---

## ⚡ Экстренная помощь

### 🆘 Что делать если что-то не работает:

1. **Фото не найдены**:

   ```bash
   ls -la public/images/menu/  # Проверить есть ли фото
   ```

2. **Скрипт не запускается**:

   ```bash
   chmod +x *.cjs  # Сделать исполняемыми
   ```

3. **Нужно вернуть старые данные**:

   ```bash
   cp src/components/Restaurant/data/restaurantData.backup.js src/components/Restaurant/data/restaurantData.js
   ```

4. **Проверить результат**:
   ```bash
   npm run dev  # Запустить и проверить в браузере
   ```

---

🎯 **Итог**: Два скрипта решают ВСЁ! Больше никаких ручных правок файлов!

🚀 **Просто запустите 2 команды и всё готово!**
