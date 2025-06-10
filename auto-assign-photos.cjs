#!/usr/bin/env node

/**
 * 🤖 Полностью автоматизированный скрипт замены фотографий в меню
 * Сканирует папки, находит фото и автоматически назначает их блюдам
 */

const fs = require('fs');
const path = require('path');

const RESTAURANT_DATA_PATH = 'src/components/Restaurant/data/restaurantData.js';
const PHOTOS_DIR = 'public/images/menu';

// Расширенный маппинг категорий и ключевых слов
const categoryMapping = {
  'breakfast': ['breakfast', 'завтрак', 'каша', 'яйца', 'омлет', 'блины', 'сырники', 'мюсли'],
  'soup': ['soup', 'суп', 'борщ', 'солянка', 'уха', 'бульон', 'томатный', 'грибной'],
  'salad': ['salad', 'салат', 'цезарь', 'греческий', 'оливье', 'винегрет', 'капрезе', 'закуска'],
  'grill': ['grill', 'гриль', 'стейк', 'шашлык', 'барбекю', 'мясо', 'рыба', 'лосось', 'курица'],
  'burger': ['burger', 'бургер', 'чизбургер', 'гамбургер'],
  'dessert': ['dessert', 'десерт', 'торт', 'пирожное', 'мороженое', 'тирамису', 'чизкейк', 'пудинг'],
  'tea': ['tea', 'чай', 'черный', 'зеленый', 'травяной', 'ромашка', 'мята'],
  'coffee': ['coffee', 'кофе', 'эспрессо', 'капучино', 'латте', 'американо', 'мокко'],
  'cocktail': ['cocktail', 'коктейль', 'мохито', 'дайкири', 'маргарита', 'пинаколада'],
  'wine': ['wine', 'вино', 'красное', 'белое', 'розовое', 'шардоне', 'каберне'],
  'beer': ['beer', 'пиво', 'лагер', 'эль', 'стаут'],
  'strong': ['vodka', 'whiskey', 'cognac', 'rum', 'gin', 'водка', 'виски', 'коньяк', 'ром', 'джин'],
  'shawarma': ['shawarma', 'шаурма', 'шаверма', 'лаваш'],
  'side': ['side', 'гарнир', 'картофель', 'рис', 'макароны', 'овощи'],
  'sauce': ['sauce', 'соус', 'кетчуп', 'майонез', 'горчица'],
  'bread': ['bread', 'хлеб', 'лаваш', 'питта', 'багет'],
  'smoothie': ['smoothie', 'смузи', 'фруктовый'],
  'lemonade': ['lemonade', 'лимонад', 'лимон'],
  'juice': ['juice', 'сок', 'апельсиновый', 'яблочный', 'вишневый'],
  'lunch': ['lunch', 'обед', 'комплекс'],
  'dinner': ['dinner', 'ужин', 'вечер']
};

/**
 * Сканирует папку и возвращает список всех изображений
 */
function scanPhotos(directory) {
  const photos = {};
  
  if (!fs.existsSync(directory)) {
    console.log(`⚠️  Папка ${directory} не найдена`);
    return photos;
  }
  
  const categories = fs.readdirSync(directory);
  
  categories.forEach(category => {
    const categoryPath = path.join(directory, category);
    
    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath)
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .map(file => ({
          filename: file,
          fullPath: `/images/menu/${category}/${file}`,
          category: category,
          cleanName: file.toLowerCase().replace(/\.(jpg|jpeg|png|webp)$/i, '')
        }));
      
      if (files.length > 0) {
        photos[category] = files;
        console.log(`📁 ${category}: найдено ${files.length} фото`);
      }
    }
  });
  
  return photos;
}

/**
 * Умное сопоставление фото с блюдами
 */
function matchPhotosToItems(menuItems, availablePhotos) {
  const assignments = {};
  const usedPhotos = new Set();
  
  menuItems.forEach(item => {
    const category = item.category;
    const itemName = item.name.toLowerCase();
    const itemDescription = (item.description || '').toLowerCase();
    
    // Получаем доступные фото для категории
    const categoryPhotos = availablePhotos[category] || [];
    
    if (categoryPhotos.length === 0) {
      console.log(`⚠️  Нет фото для категории "${category}" (блюдо: ${item.name})`);
      return;
    }
    
    // 1. Пытаемся найти точное совпадение по названию
    let bestMatch = categoryPhotos.find(photo => {
      const photoName = photo.cleanName;
      return itemName.includes(photoName) || photoName.includes(itemName.split(' ')[0]);
    });
    
    // 2. Ищем по ключевым словам
    if (!bestMatch) {
      const keywords = categoryMapping[category] || [];
      bestMatch = categoryPhotos.find(photo => {
        return keywords.some(keyword => 
          photo.cleanName.includes(keyword) || 
          itemName.includes(keyword) ||
          itemDescription.includes(keyword)
        );
      });
    }
    
    // 3. Берем первое неиспользованное фото из категории
    if (!bestMatch) {
      bestMatch = categoryPhotos.find(photo => !usedPhotos.has(photo.fullPath));
    }
    
    // 4. В крайнем случае берем любое фото из категории
    if (!bestMatch && categoryPhotos.length > 0) {
      bestMatch = categoryPhotos[Math.floor(Math.random() * categoryPhotos.length)];
    }
    
    if (bestMatch) {
      assignments[item.id] = bestMatch.fullPath;
      usedPhotos.add(bestMatch.fullPath);
      console.log(`✅ ${item.name} -> ${bestMatch.filename}`);
    } else {
      console.log(`❌ Не найдено фото для: ${item.name}`);
    }
  });
  
  return assignments;
}

/**
 * Извлекает массив блюд из файла данных
 */
function extractMenuItems() {
  try {
    const data = fs.readFileSync(RESTAURANT_DATA_PATH, 'utf8');
    
    // Ищем массив menuItems внутри функции getRestaurantData
    const arrayMatch = data.match(/const menuItems = \[([\s\S]*?)\];/);
    if (!arrayMatch) {
      throw new Error('Не удалось найти массив menuItems');
    }
    
    // Используем eval для парсинга (не безопасно, но работает для наших данных)
    const menuItems = eval(`[${arrayMatch[1]}]`);
    
    console.log(`📋 Найдено ${menuItems.length} блюд в меню`);
    return menuItems;
    
  } catch (error) {
    console.error('❌ Ошибка при чтении данных меню:', error.message);
    return [];
  }
}

/**
 * Обновляет файл с данными меню
 */
function updateMenuData(assignments) {
  try {
    let data = fs.readFileSync(RESTAURANT_DATA_PATH, 'utf8');
    
    Object.entries(assignments).forEach(([itemId, photoPath]) => {
      // Ищем блюдо по ID и заменяем путь к изображению
      const idPattern = new RegExp(`(\\{[^}]*id:\\s*${itemId}[^}]*?)image:\\s*['"'][^'"]*['"]`, 'g');
      
      data = data.replace(idPattern, (match, beforeImage) => {
        return beforeImage + `image: '${photoPath}'`;
      });
    });
    
    // Создаем резервную копию
    const backupPath = RESTAURANT_DATA_PATH.replace('.js', '.backup.' + Date.now() + '.js');
    fs.copyFileSync(RESTAURANT_DATA_PATH, backupPath);
    console.log(`💾 Создана резервная копия: ${backupPath}`);
    
    // Сохраняем обновленные данные
    fs.writeFileSync(RESTAURANT_DATA_PATH, data);
    console.log(`✅ Обновлен файл данных: ${RESTAURANT_DATA_PATH}`);
    
  } catch (error) {
    console.error('❌ Ошибка при обновлении данных:', error.message);
  }
}

/**
 * Основная функция
 */
function autoAssignPhotos() {
  console.log('🤖 Запуск автоматического назначения фотографий...\n');
  
  // 1. Сканируем доступные фотографии
  console.log('📸 Сканирование фотографий...');
  const availablePhotos = scanPhotos(PHOTOS_DIR);
  
  const totalPhotos = Object.values(availablePhotos).reduce((sum, photos) => sum + photos.length, 0);
  console.log(`📊 Всего найдено ${totalPhotos} фотографий\n`);
  
  if (totalPhotos === 0) {
    console.log('❌ Фотографии не найдены! Добавьте фото в папки public/images/menu/');
    return;
  }
  
  // 2. Читаем данные меню
  console.log('📋 Анализ меню...');
  const menuItems = extractMenuItems();
  
  if (menuItems.length === 0) {
    console.log('❌ Блюда в меню не найдены!');
    return;
  }
  
  // 3. Сопоставляем фото с блюдами
  console.log('\n🎯 Сопоставление фотографий с блюдами...');
  const assignments = matchPhotosToItems(menuItems, availablePhotos);
  
  // 4. Обновляем файл данных
  console.log('\n💾 Обновление данных...');
  updateMenuData(assignments);
  
  console.log('\n🎉 Автоматическое назначение фотографий завершено!');
  console.log('🚀 Запустите `npm run dev` для проверки результата');
}

/**
 * Показать статистику фотографий
 */
function showPhotoStats() {
  console.log('📊 Статистика фотографий:\n');
  
  const photos = scanPhotos(PHOTOS_DIR);
  
  Object.entries(photos).forEach(([category, files]) => {
    console.log(`📁 ${category.padEnd(12)} ${files.length.toString().padStart(3)} фото`);
  });
  
  const total = Object.values(photos).reduce((sum, files) => sum + files.length, 0);
  console.log(`\n📈 Всего: ${total} фотографий`);
}

/**
 * Показать помощь
 */
function showHelp() {
  console.log(`
🤖 Автоматическое назначение фотографий меню KAIF

Использование:
  node auto-assign-photos.cjs [команда]

Команды:
  auto        Автоматически назначить все фотографии (по умолчанию)
  stats       Показать статистику доступных фотографий  
  help        Показать эту справку

Как работает автоматическое назначение:
1. 🔍 Сканирует папки public/images/menu/
2. 🎯 Сопоставляет фото с блюдами по названиям и ключевым словам
3. 💾 Автоматически обновляет restaurantData.js
4. 🛡️  Создает резервную копию перед изменениями

Примеры:
  node auto-assign-photos.cjs
  node auto-assign-photos.cjs auto
  node auto-assign-photos.cjs stats
`);
}

// Парсинг команд
const command = process.argv[2] || 'auto';

switch (command) {
  case 'auto':
    autoAssignPhotos();
    break;
  case 'stats':
    showPhotoStats();
    break;
  case 'help':
  default:
    showHelp();
    break;
} 