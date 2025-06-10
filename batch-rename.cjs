#!/usr/bin/env node

/**
 * 📦 Пакетное переименование и категоризация фотографий
 * Для быстрой обработки большого количества фото
 */

const fs = require('fs');
const path = require('path');

const categories = [
  'breakfast', 'soup', 'salad', 'grill', 'burger', 'dessert',
  'coffee', 'tea', 'cocktail', 'wine', 'beer', 'strong',
  'shawarma', 'side', 'sauce', 'bread', 'juice', 'lemonade', 'smoothie'
];

/**
 * Пакетное переименование по номерам
 */
function batchRename(sourceDir, category, startFrom = 1) {
  if (!categories.includes(category)) {
    console.log('❌ Неизвестная категория:', category);
    console.log('📋 Доступные:', categories.join(', '));
    return;
  }
  
  const photos = fs.readdirSync(sourceDir)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort();
  
  if (photos.length === 0) {
    console.log('❌ Фотографии не найдены в папке:', sourceDir);
    return;
  }
  
  console.log(`📦 Пакетное переименование в категорию "${category}"`);
  console.log(`📸 Найдено ${photos.length} фотографий\n`);
  
  const targetDir = path.join('public/images/menu', category);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  photos.forEach((photo, index) => {
    const ext = path.extname(photo);
    const newName = `${category}-${String(startFrom + index).padStart(3, '0')}${ext}`;
    const sourcePath = path.join(sourceDir, photo);
    const targetPath = path.join(targetDir, newName);
    
    try {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✅ ${photo} → ${category}/${newName}`);
    } catch (error) {
      console.log(`❌ Ошибка: ${photo} - ${error.message}`);
    }
  });
  
  console.log(`\n🎉 Переименовано ${photos.length} фотографий в категорию "${category}"`);
}

/**
 * Разделить фотографии на группы по количеству
 */
function splitByCount(sourceDir, groupSize = 10) {
  const photos = fs.readdirSync(sourceDir)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort();
  
  if (photos.length === 0) {
    console.log('❌ Фотографии не найдены');
    return;
  }
  
  console.log(`📋 Разделение ${photos.length} фотографий на группы по ${groupSize}:\n`);
  
  const groups = [];
  for (let i = 0; i < photos.length; i += groupSize) {
    const group = photos.slice(i, i + groupSize);
    groups.push({
      index: Math.floor(i / groupSize) + 1,
      files: group,
      start: i + 1,
      end: Math.min(i + groupSize, photos.length)
    });
  }
  
  groups.forEach(group => {
    console.log(`📁 Группа ${group.index}: фото ${group.start}-${group.end} (${group.files.length} штук)`);
    console.log(`   Первое: ${group.files[0]}`);
    console.log(`   Последнее: ${group.files[group.files.length - 1]}`);
    console.log('');
  });
  
  console.log('💡 Для переименования группы используйте:');
  console.log('   node batch-rename.cjs range <папка> <категория> <начало> <конец>');
  console.log('💡 Например: node batch-rename.cjs range ~/Desktop/photos breakfast 1 10');
}

/**
 * Переименовать диапазон файлов
 */
function renameRange(sourceDir, category, startIndex, endIndex) {
  if (!categories.includes(category)) {
    console.log('❌ Неизвестная категория:', category);
    return;
  }
  
  const photos = fs.readdirSync(sourceDir)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort();
  
  const selectedPhotos = photos.slice(startIndex - 1, endIndex);
  
  if (selectedPhotos.length === 0) {
    console.log('❌ Нет фотографий в указанном диапазоне');
    return;
  }
  
  console.log(`📦 Переименование файлов ${startIndex}-${endIndex} в категорию "${category}"`);
  console.log(`📸 Выбрано ${selectedPhotos.length} фотографий\n`);
  
  const targetDir = path.join('public/images/menu', category);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  // Определяем следующий номер в категории
  const existingFiles = fs.existsSync(targetDir) ? 
    fs.readdirSync(targetDir).filter(f => f.startsWith(category + '-')).length : 0;
  
  selectedPhotos.forEach((photo, index) => {
    const ext = path.extname(photo);
    const newName = `${category}-${String(existingFiles + index + 1).padStart(3, '0')}${ext}`;
    const sourcePath = path.join(sourceDir, photo);
    const targetPath = path.join(targetDir, newName);
    
    try {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✅ ${photo} → ${category}/${newName}`);
    } catch (error) {
      console.log(`❌ Ошибка: ${photo} - ${error.message}`);
    }
  });
  
  console.log(`\n🎉 Переименовано ${selectedPhotos.length} фотографий`);
}

/**
 * Создать шаблоны папок для ручной сортировки
 */
function createSortingFolders(baseDir = './photo-sorting') {
  console.log(`📁 Создание папок для ручной сортировки в: ${baseDir}\n`);
  
  categories.forEach(category => {
    const categoryDir = path.join(baseDir, category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
      console.log(`📂 Создана папка: ${category}/`);
    }
  });
  
  // Создаем папку для неопределенных
  const otherDir = path.join(baseDir, 'other');
  if (!fs.existsSync(otherDir)) {
    fs.mkdirSync(otherDir, { recursive: true });
    console.log(`📂 Создана папка: other/`);
  }
  
  console.log(`\n🎯 Инструкция по использованию:`);
  console.log(`1. Скопируйте все фото в папку ${baseDir}`);
  console.log(`2. Вручную перетащите фото в соответствующие папки`);
  console.log(`3. Запустите: node batch-rename.cjs process-sorted ${baseDir}`);
}

/**
 * Обработать уже отсортированные вручную папки
 */
function processSortedFolders(sortingDir) {
  console.log(`📦 Обработка отсортированных папок из: ${sortingDir}\n`);
  
  categories.concat(['other']).forEach(category => {
    const categoryDir = path.join(sortingDir, category);
    
    if (fs.existsSync(categoryDir)) {
      const photos = fs.readdirSync(categoryDir)
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));
      
      if (photos.length > 0) {
        console.log(`📸 ${category}: найдено ${photos.length} фото`);
        batchRename(categoryDir, category === 'other' ? 'other' : category);
        console.log('');
      }
    }
  });
  
  console.log('🎉 Все отсортированные папки обработаны!');
}

/**
 * Показать справку
 */
function showHelp() {
  console.log(`
📦 Пакетное переименование фотографий

Использование:
  node batch-rename.cjs [команда] [параметры]

Команды:
  batch <папка> <категория>           Переименовать все фото в одну категорию
  split <папка> [размер_группы]       Показать группы фото для пакетной обработки
  range <папка> <категория> <от> <до> Переименовать диапазон фото
  folders [базовая_папка]             Создать папки для ручной сортировки
  process-sorted <папка_сортировки>   Обработать отсортированные вручную фото
  help                                Показать эту справку

Примеры:
  # Все фото в категорию "завтраки"
  node batch-rename.cjs batch ~/Desktop/photos breakfast
  
  # Показать группы по 15 фото
  node batch-rename.cjs split ~/Desktop/photos 15
  
  # Переименовать фото 1-20 в "супы"  
  node batch-rename.cjs range ~/Desktop/photos soup 1 20
  
  # Создать папки для ручной сортировки
  node batch-rename.cjs folders
  
  # Обработать отсортированные папки
  node batch-rename.cjs process-sorted ./photo-sorting

Доступные категории:
  ${categories.join(', ')}

Стратегии работы:
1. 🎮 Интерактивно: node interactive-categorizer.cjs categorize <папка>
2. 📦 Пакетно: node batch-rename.cjs batch <папка> <категория>
3. 🗂️  Вручную: создать папки → перетащить → обработать
`);
}

/**
 * Главная функция
 */
function main() {
  const command = process.argv[2] || 'help';
  
  switch (command) {
    case 'batch':
      const sourceDir = process.argv[3];
      const category = process.argv[4];
      
      if (!sourceDir || !category) {
        console.log('❌ Укажите папку и категорию');
        console.log('💡 Пример: node batch-rename.cjs batch ~/Desktop/photos breakfast');
        break;
      }
      
      batchRename(sourceDir, category);
      break;
      
    case 'split':
      const splitDir = process.argv[3];
      const groupSize = parseInt(process.argv[4]) || 10;
      
      if (!splitDir) {
        console.log('❌ Укажите папку с фотографиями');
        break;
      }
      
      splitByCount(splitDir, groupSize);
      break;
      
    case 'range':
      const rangeDir = process.argv[3];
      const rangeCategory = process.argv[4];
      const startIndex = parseInt(process.argv[5]);
      const endIndex = parseInt(process.argv[6]);
      
      if (!rangeDir || !rangeCategory || !startIndex || !endIndex) {
        console.log('❌ Укажите все параметры: папка, категория, начало, конец');
        console.log('💡 Пример: node batch-rename.cjs range ~/Desktop/photos soup 1 10');
        break;
      }
      
      renameRange(rangeDir, rangeCategory, startIndex, endIndex);
      break;
      
    case 'folders':
      const baseDir = process.argv[3] || './photo-sorting';
      createSortingFolders(baseDir);
      break;
      
    case 'process-sorted':
      const sortingDir = process.argv[3];
      
      if (!sortingDir) {
        console.log('❌ Укажите папку с отсортированными фото');
        break;
      }
      
      processSortedFolders(sortingDir);
      break;
      
    case 'help':
    default:
      showHelp();
      break;
  }
}

main(); 