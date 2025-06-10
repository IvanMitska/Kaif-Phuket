#!/usr/bin/env node

/**
 * 📁 Скрипт для автоматической организации фотографий по категориям
 * Анализирует названия файлов и распределяет их по папкам
 */

const fs = require('fs');
const path = require('path');

// Ключевые слова для автоматической категоризации
const categoryKeywords = {
  'breakfast': ['завтрак', 'breakfast', 'каша', 'яйца', 'омлет', 'блины', 'сырники', 'мюсли', 'pancake', 'eggs', 'omelette'],
  'soup': ['суп', 'soup', 'борщ', 'солянка', 'уха', 'бульон', 'томатный', 'грибной', 'borscht', 'broth'],
  'salad': ['салат', 'salad', 'цезарь', 'греческий', 'оливье', 'винегрет', 'капрезе', 'закуска', 'caesar', 'greek'],
  'grill': ['гриль', 'grill', 'стейк', 'шашлык', 'барбекю', 'мясо', 'рыба', 'лосось', 'курица', 'steak', 'bbq', 'meat', 'salmon', 'chicken'],
  'burger': ['бургер', 'burger', 'чизбургер', 'гамбургер', 'cheeseburger', 'hamburger'],
  'dessert': ['десерт', 'dessert', 'торт', 'пирожное', 'мороженое', 'тирамису', 'чизкейк', 'cake', 'ice', 'tiramisu', 'cheesecake'],
  'tea': ['чай', 'tea', 'черный', 'зеленый', 'травяной', 'ромашка', 'мята', 'black', 'green', 'herbal'],
  'coffee': ['кофе', 'coffee', 'эспрессо', 'капучино', 'латте', 'американо', 'espresso', 'cappuccino', 'latte', 'americano'],
  'cocktail': ['коктейль', 'cocktail', 'мохито', 'дайкири', 'маргарита', 'mojito', 'daiquiri', 'margarita'],
  'wine': ['вино', 'wine', 'красное', 'белое', 'розовое', 'red', 'white', 'rose'],
  'beer': ['пиво', 'beer', 'лагер', 'эль', 'стаут', 'lager', 'ale', 'stout'],
  'strong': ['водка', 'виски', 'коньяк', 'ром', 'джин', 'vodka', 'whiskey', 'cognac', 'rum', 'gin'],
  'shawarma': ['шаурма', 'шаверма', 'лаваш', 'shawarma', 'shawrma', 'lavash'],
  'side': ['гарнир', 'картофель', 'рис', 'макароны', 'овощи', 'side', 'potato', 'rice', 'pasta', 'vegetables'],
  'sauce': ['соус', 'кетчуп', 'майонез', 'горчица', 'sauce', 'ketchup', 'mayo', 'mustard'],
  'bread': ['хлеб', 'лаваш', 'питта', 'багет', 'bread', 'pita', 'baguette'],
  'smoothie': ['смузи', 'фруктовый', 'smoothie', 'fruit'],
  'lemonade': ['лимонад', 'лимон', 'lemonade', 'lemon'],
  'juice': ['сок', 'апельсиновый', 'яблочный', 'juice', 'orange', 'apple']
};

/**
 * Определяет категорию по названию файла
 */
function detectCategory(filename) {
  const cleanName = filename.toLowerCase().replace(/\.(jpg|jpeg|png|webp)$/i, '');
  
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => cleanName.includes(keyword))) {
      return category;
    }
  }
  
  return 'other'; // Если категория не определена
}

/**
 * Организует фотографии из исходной папки
 */
function organizePhotos(sourceDir, targetDir = 'public/images/menu') {
  if (!fs.existsSync(sourceDir)) {
    console.log('❌ Исходная папка не найдена:', sourceDir);
    return;
  }
  
  console.log('📂 Организация фотографий...\n');
  
  const files = fs.readdirSync(sourceDir)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));
  
  if (files.length === 0) {
    console.log('❌ Фотографии не найдены в папке:', sourceDir);
    return;
  }
  
  console.log(`📸 Найдено ${files.length} фотографий`);
  
  const categoryStats = {};
  const movedFiles = [];
  
  files.forEach(file => {
    const category = detectCategory(file);
    const sourcePath = path.join(sourceDir, file);
    const targetCategoryDir = path.join(targetDir, category);
    const targetPath = path.join(targetCategoryDir, file);
    
    // Создаем папку категории если её нет
    if (!fs.existsSync(targetCategoryDir)) {
      fs.mkdirSync(targetCategoryDir, { recursive: true });
    }
    
    // Копируем файл
    try {
      fs.copyFileSync(sourcePath, targetPath);
      
      categoryStats[category] = (categoryStats[category] || 0) + 1;
      movedFiles.push({ file, category });
      
      console.log(`✅ ${file} -> ${category}/`);
      
    } catch (error) {
      console.log(`❌ Ошибка при копировании ${file}:`, error.message);
    }
  });
  
  // Статистика
  console.log('\n📊 Результаты организации:');
  Object.entries(categoryStats).forEach(([category, count]) => {
    console.log(`   ${category.padEnd(12)} ${count.toString().padStart(3)} фото`);
  });
  
  console.log(`\n🎉 Перемещено ${movedFiles.length} из ${files.length} фотографий`);
  
  return movedFiles;
}

/**
 * Создает пример структуры файлов для тестирования
 */
function createSampleFiles(testDir = 'test-photos') {
  console.log('🧪 Создание тестовых файлов...\n');
  
  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir);
  }
  
  const sampleFiles = [
    'kaif-breakfast.jpg',
    'pancakes-blueberry.jpg', 
    'borsch-classic.jpg',
    'soup-mushroom.jpg',
    'caesar-salad.jpg',
    'greek-salad.jpg',
    'beef-steak-grill.jpg',
    'salmon-grill.jpg',
    'cheeseburger-deluxe.jpg',
    'tiramisu-classic.jpg',
    'cheesecake-berry.jpg',
    'black-tea.jpg',
    'green-tea-mint.jpg',
    'espresso-double.jpg',
    'cappuccino-art.jpg',
    'mojito-fresh.jpg',
    'red-wine-merlot.jpg',
    'beer-lager.jpg',
    'vodka-premium.jpg',
    'shawarma-chicken.jpg',
    'rice-pilaf.jpg',
    'tomato-sauce.jpg',
    'bread-fresh.jpg',
    'smoothie-berry.jpg',
    'lemonade-classic.jpg',
    'orange-juice.jpg'
  ];
  
  sampleFiles.forEach(filename => {
    const filePath = path.join(testDir, filename);
    fs.writeFileSync(filePath, 'test image content');
    console.log(`📝 Создан: ${filename}`);
  });
  
  console.log(`\n✅ Создано ${sampleFiles.length} тестовых файлов в папке ${testDir}`);
  console.log(`💡 Запустите: node organize-photos.cjs organize ${testDir}`);
}

/**
 * Показать справку
 */
function showHelp() {
  console.log(`
📁 Организатор фотографий меню KAIF

Использование:
  node organize-photos.cjs [команда] [папка]

Команды:
  organize <папка>    Организовать фотографии из указанной папки
  test               Создать тестовые файлы для проверки
  help               Показать эту справку

Примеры:
  node organize-photos.cjs organize ~/Desktop/photos_from_photographer
  node organize-photos.cjs organize ./raw-photos
  node organize-photos.cjs test

Как работает автоматическая категоризация:
🔍 Анализирует названия файлов по ключевым словам
📁 Создает нужные папки в public/images/menu/
📸 Копирует фотографии в соответствующие категории
📊 Показывает статистику результатов

Поддерживаемые форматы: JPG, JPEG, PNG, WebP
`);
}

// Парсинг команд
const command = process.argv[2] || 'help';
const sourceDir = process.argv[3];

switch (command) {
  case 'organize':
    if (!sourceDir) {
      console.log('❌ Укажите папку с фотографиями');
      console.log('💡 Пример: node organize-photos.cjs organize ~/Desktop/photos');
      break;
    }
    organizePhotos(sourceDir);
    break;
    
  case 'test':
    createSampleFiles();
    break;
    
  case 'help':
  default:
    showHelp();
    break;
} 