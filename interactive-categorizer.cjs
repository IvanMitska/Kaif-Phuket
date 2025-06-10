#!/usr/bin/env node

/**
 * 🎮 Интерактивный категоризатор фотографий
 * Для фотографий с цифровыми названиями типа IMG_001.jpg
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Категории с горячими клавишами
const categories = {
  '1': { name: 'breakfast', display: '🍳 Завтраки' },
  '2': { name: 'soup', display: '🍲 Супы' },
  '3': { name: 'salad', display: '🥗 Салаты' },
  '4': { name: 'grill', display: '🥩 Гриль' },
  '5': { name: 'burger', display: '🍔 Бургеры' },
  '6': { name: 'dessert', display: '🍰 Десерты' },
  '7': { name: 'coffee', display: '☕ Кофе' },
  '8': { name: 'tea', display: '🍵 Чай' },
  '9': { name: 'cocktail', display: '🍹 Коктейли' },
  '0': { name: 'wine', display: '🍷 Вино' },
  'b': { name: 'beer', display: '🍺 Пиво' },
  's': { name: 'strong', display: '🥃 Крепкие напитки' },
  'h': { name: 'shawarma', display: '🌯 Шаурма' },
  'g': { name: 'side', display: '🍚 Гарниры' },
  'c': { name: 'sauce', display: '🫙 Соусы' },
  'r': { name: 'bread', display: '🍞 Хлеб' },
  'j': { name: 'juice', display: '🧃 Соки' },
  'l': { name: 'lemonade', display: '🍋 Лимонады' },
  'm': { name: 'smoothie', display: '🥤 Смузи' },
  'o': { name: 'other', display: '❓ Другое' }
};

const RENAME_MAP_FILE = 'photo-rename-map.json';

/**
 * Показать меню категорий
 */
function showCategories() {
  console.clear();
  console.log('🎮 ИНТЕРАКТИВНЫЙ КАТЕГОРИЗАТОР ФОТОГРАФИЙ');
  console.log('=' .repeat(50));
  console.log('📸 Выберите категорию для фотографии:\n');
  
  Object.entries(categories).forEach(([key, cat]) => {
    console.log(`   ${key.toUpperCase()} - ${cat.display}`);
  });
  
  console.log('\n📝 Специальные команды:');
  console.log('   ENTER - Пропустить фото');
  console.log('   Q - Завершить и применить изменения');
  console.log('   ESC - Отменить всё и выйти');
  console.log('=' .repeat(50));
}

/**
 * Получить список всех фотографий
 */
function getPhotoList(sourceDir) {
  if (!fs.existsSync(sourceDir)) {
    console.log('❌ Папка не найдена:', sourceDir);
    return [];
  }
  
  return fs.readdirSync(sourceDir)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map(file => ({
      original: file,
      path: path.join(sourceDir, file),
      category: null,
      newName: null
    }));
}

/**
 * Создать описательное название файла
 */
function generateNewName(originalName, category, index) {
  const ext = path.extname(originalName);
  const categoryName = categories[category]?.name || 'other';
  
  // Создаем осмысленное название
  const baseName = `${categoryName}-${String(index + 1).padStart(3, '0')}`;
  return `${baseName}${ext}`;
}

/**
 * Интерактивная категоризация
 */
async function interactiveCategorize(photos) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Настройка для обработки отдельных клавиш
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  
  let currentIndex = 0;
  const categoryCounters = {};
  
  return new Promise((resolve) => {
    
    function showCurrentPhoto() {
      if (currentIndex >= photos.length) {
        console.clear();
        console.log('🎉 Все фотографии обработаны!');
        resolve(photos);
        return;
      }
      
      const photo = photos[currentIndex];
      showCategories();
      console.log(`\n📸 Фото ${currentIndex + 1} из ${photos.length}`);
      console.log(`📁 Файл: ${photo.original}`);
      console.log(`📏 Размер: ${(fs.statSync(photo.path).size / 1024).toFixed(1)} KB`);
      console.log('\n👆 Нажмите клавишу для выбора категории...');
    }
    
    function processInput(key) {
      const keyStr = key.toString();
      
      // ESC - выход без сохранения
      if (keyStr === '\u001b') {
        console.clear();
        console.log('❌ Отменено пользователем');
        process.exit(0);
      }
      
      // Q - завершить и сохранить
      if (keyStr.toLowerCase() === 'q') {
        console.clear();
        console.log('💾 Завершение категоризации...');
        resolve(photos);
        return;
      }
      
      // ENTER - пропустить
      if (keyStr === '\r' || keyStr === '\n') {
        currentIndex++;
        showCurrentPhoto();
        return;
      }
      
      // Проверка категории
      const category = keyStr.toLowerCase();
      if (categories[category]) {
        const photo = photos[currentIndex];
        photo.category = category;
        
        // Увеличиваем счетчик для категории
        categoryCounters[category] = (categoryCounters[category] || 0);
        
        // Генерируем новое название
        photo.newName = generateNewName(
          photo.original, 
          category, 
          categoryCounters[category]
        );
        
        categoryCounters[category]++;
        
        console.log(`✅ ${photo.original} → ${categories[category].display}`);
        
        setTimeout(() => {
          currentIndex++;
          showCurrentPhoto();
        }, 500);
      } else {
        console.log(`❌ Неизвестная клавиша: ${keyStr}`);
        setTimeout(showCurrentPhoto, 1000);
      }
    }
    
    process.stdin.on('data', processInput);
    showCurrentPhoto();
  });
}

/**
 * Применить категоризацию - переименовать и переместить файлы
 */
function applyCategorization(photos, sourceDir, targetDir = 'public/images/menu') {
  console.log('\n📋 Применение категоризации...\n');
  
  const stats = {};
  const renameMap = {};
  
  photos.forEach(photo => {
    if (!photo.category) return;
    
    const categoryName = categories[photo.category].name;
    const targetCategoryDir = path.join(targetDir, categoryName);
    
    // Создаем папку если её нет
    if (!fs.existsSync(targetCategoryDir)) {
      fs.mkdirSync(targetCategoryDir, { recursive: true });
    }
    
    const targetPath = path.join(targetCategoryDir, photo.newName);
    
    try {
      // Копируем с новым названием
      fs.copyFileSync(photo.path, targetPath);
      
      // Статистика
      stats[categoryName] = (stats[categoryName] || 0) + 1;
      
      // Карта переименований для отката
      renameMap[photo.original] = {
        category: categoryName,
        newName: photo.newName,
        targetPath: targetPath
      };
      
      console.log(`✅ ${photo.original} → ${categoryName}/${photo.newName}`);
      
    } catch (error) {
      console.log(`❌ Ошибка: ${photo.original} - ${error.message}`);
    }
  });
  
  // Сохраняем карту переименований
  fs.writeFileSync(RENAME_MAP_FILE, JSON.stringify(renameMap, null, 2));
  
  // Статистика
  console.log('\n📊 Результаты:');
  Object.entries(stats).forEach(([category, count]) => {
    console.log(`   ${category.padEnd(12)} ${count} фото`);
  });
  
  const total = Object.values(stats).reduce((sum, count) => sum + count, 0);
  console.log(`\n🎉 Обработано: ${total} фотографий`);
  console.log(`💾 Карта переименований сохранена: ${RENAME_MAP_FILE}`);
  
  return { stats, renameMap };
}

/**
 * Показать статистику папки
 */
function showDirStats(sourceDir) {
  const photos = getPhotoList(sourceDir);
  
  console.log(`📁 Папка: ${sourceDir}`);
  console.log(`📸 Найдено фотографий: ${photos.length}`);
  
  if (photos.length === 0) {
    console.log('❌ Фотографии не найдены');
    return false;
  }
  
  // Показать первые несколько файлов как пример
  console.log('\n📋 Примеры файлов:');
  photos.slice(0, 5).forEach(photo => {
    const size = (fs.statSync(photo.path).size / 1024).toFixed(1);
    console.log(`   ${photo.original} (${size} KB)`);
  });
  
  if (photos.length > 5) {
    console.log(`   ... и еще ${photos.length - 5} файлов`);
  }
  
  return true;
}

/**
 * Главная функция
 */
async function main() {
  const command = process.argv[2] || 'help';
  const sourceDir = process.argv[3];
  
  switch (command) {
    case 'categorize':
      if (!sourceDir) {
        console.log('❌ Укажите папку с фотографиями');
        console.log('💡 Пример: node interactive-categorizer.cjs categorize ~/Desktop/photos');
        break;
      }
      
      console.log('🎮 Интерактивная категоризация фотографий\n');
      
      if (!showDirStats(sourceDir)) break;
      
      console.log('\n🚀 Начинаем интерактивную категоризацию...');
      console.log('💡 Подсказка: используйте цифры и буквы для быстрого выбора');
      
      setTimeout(async () => {
        const photos = getPhotoList(sourceDir);
        const categorizedPhotos = await interactiveCategorize(photos);
        
        // Закрываем readline
        process.stdin.setRawMode(false);
        process.stdin.pause();
        
        const result = applyCategorization(categorizedPhotos, sourceDir);
        
        console.log('\n🎯 Категоризация завершена!');
        console.log('🔧 Теперь запустите: node auto-assign-photos.cjs auto');
        
      }, 2000);
      break;
      
    case 'stats':
      if (!sourceDir) {
        console.log('❌ Укажите папку с фотографиями');
        break;
      }
      showDirStats(sourceDir);
      break;
      
    case 'help':
    default:
      console.log(`
🎮 Интерактивный категоризатор фотографий

Для фотографий с названиями типа IMG_001.jpg, DSC_1234.jpg и т.д.

Использование:
  node interactive-categorizer.cjs [команда] [папка]

Команды:
  categorize <папка>    Интерактивная категоризация фотографий
  stats <папка>         Показать статистику папки
  help                  Показать эту справку

Примеры:
  node interactive-categorizer.cjs categorize ~/Desktop/photos_from_photographer
  node interactive-categorizer.cjs stats ./raw-photos

Как работает:
1. 🔍 Сканирует папку с фотографиями
2. 🎮 Показывает каждое фото в интерактивном режиме
3. ⌨️  Вы нажимаете клавишу для выбора категории
4. 📁 Автоматически создает осмысленные названия
5. 🚀 Готовые фото попадают в правильные папки

Горячие клавиши:
  1-9, 0 - Основные категории (завтраки, супы, салаты...)  
  B, S, H - Напитки (пиво, крепкие, шаурма...)
  Q - Завершить и сохранить
  ENTER - Пропустить фото
  ESC - Отменить всё
`);
      break;
  }
}

main().catch(console.error); 