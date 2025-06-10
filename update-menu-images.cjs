#!/usr/bin/env node

/**
 * Скрипт для обновления путей к изображениям в меню ресторана
 * Автоматически заменяет URL с Unsplash на локальные пути
 */

const fs = require('fs');
const path = require('path');

const RESTAURANT_DATA_PATH = 'src/components/Restaurant/data/restaurantData.js';

// Маппинг категорий на папки
const categoryToFolder = {
  'breakfast': 'breakfast',
  'soup': 'soup', 
  'salad': 'salad',
  'grill': 'grill',
  'burger': 'burger',
  'dessert': 'dessert',
  'tea': 'tea',
  'coffee': 'coffee',
  'cocktail': 'cocktail',
  'wine': 'wine',
  'beer': 'beer',
  'strong': 'strong',
  'shawarma': 'shawarma',
  'side': 'side',
  'sauce': 'sauce',
  'bread': 'bread',
  'lunch': 'lunch', 
  'dinner': 'dinner'
};

function updateMenuImages() {
  try {
    console.log('🔄 Обновление путей к изображениям меню...\n');
    
    // Читаем файл с данными меню
    const data = fs.readFileSync(RESTAURANT_DATA_PATH, 'utf8');
    
    // Парсим экспорт (простой способ)
    let updatedData = data;
    
    // Заменяем URL изображений на локальные пути
    updatedData = updatedData.replace(
      /image:\s*['"](https:\/\/images\.unsplash\.com\/[^'"]+)['"]/g,
      (match, url, offset) => {
        // Пытаемся определить категорию из контекста
        const beforeMatch = data.substring(Math.max(0, offset - 500), offset);
        const categoryMatch = beforeMatch.match(/category:\s*['"](\w+)['"]/);
        
        if (categoryMatch) {
          const category = categoryMatch[1];
          const folder = categoryToFolder[category] || 'other';
          const filename = `${category}-dish.jpg`; // Placeholder имя
          
          console.log(`📷 ${category} -> /images/menu/${folder}/${filename}`);
          
          return `image: '/images/menu/${folder}/${filename}'`;
        }
        
        return match; // Оставляем как было, если не нашли категорию
      }
    );
    
    // Сохраняем обновленный файл
    fs.writeFileSync(RESTAURANT_DATA_PATH, updatedData);
    
    console.log('\n✅ Обновление завершено!');
    console.log('📝 Теперь замените placeholder имена файлов на реальные.');
    console.log('📁 Добавьте фотографии в папки public/images/menu/');
    
  } catch (error) {
    console.error('❌ Ошибка:', error.message);
  }
}

function listMenuStructure() {
  console.log('📂 Структура папок для фотографий меню:\n');
  
  Object.entries(categoryToFolder).forEach(([category, folder]) => {
    const folderPath = `public/images/menu/${folder}/`;
    console.log(`   ${category.padRight ? category.padRight(10) : category} -> ${folderPath}`);
  });
  
  console.log('\n💡 Добавьте фотографии в соответствующие папки');
  console.log('💡 Используйте формат: категория-название.jpg');
}

function showHelp() {
  console.log(`
🍽️  Утилита для обновления изображений меню KAIF

Использование:
  node update-menu-images.js [команда]

Команды:
  update      Обновить пути в restaurantData.js
  structure   Показать структуру папок  
  help        Показать эту справку

Примеры:
  node update-menu-images.js update
  node update-menu-images.js structure
`);
}

// Парсинг аргументов командной строки
const command = process.argv[2] || 'help';

switch (command) {
  case 'update':
    updateMenuImages();
    break;
  case 'structure':
    listMenuStructure();
    break;  
  case 'help':
  default:
    showHelp();
    break;
} 