"use strict";
{
  const productName = "apple"; // наименование товара
  const num = 15; // количество
  const categoryProducts = "products" // категория товара
  const price = 60; // цена

  /* ✔ В консоль разработчика выведите наименование товара */
  console.log('Product name:', productName);

  /* ✔ В консоль выведите общую сумму товара */
  console.log('Total cost of the product:', num * price);
}

{
  const productName = "coconut"; // наименование товара
  const num = 36; // количество
  const categoryProducts = "products" // категория товара
  const price = 90; // цена

  /* ✔ В консоль разработчика выведите наименование товара */
  console.log('Product name:', productName);

  /* ✔ В консоль выведите общую сумму товара */
  console.log('Total cost of the product:', num * price);
}


// ✔ Добавьте новый блок инструкций
{
// ✔ Запросите у пользователя "Наименование товара" с помощью функции prompt и запишите в константу
// ✔ Аналогичные действия сделайте с константами "Количество товара", "Категория товара" и "Цена товара"
// ✔ Выведите в консоль тип данных, убедитесь что количество и цена тип данных numbers, если это не так, то поправьте
// ✔ В консоль выведите строку со значением количество товара, наименование и общую сумму 
  const productMod = prompt('Product name');
  let numMod = prompt('Quantity of goods');
  const categoryMod = prompt('Product category');
  let priceMod = prompt('Product price');
  numMod = Number(numMod);
  priceMod = Number(priceMod);
  const sumMod = numMod * priceMod;

  console.log(`Product name: `, productMod);
  console.log(`Quantity of goods: `, numMod);
  console.log(`Product category: `, categoryMod);
  console.log(`Product price: `, priceMod);
  
  console.log(`Product name: `, typeof productMod);
  console.log(`Quantity of goods: `, typeof numMod);
  console.log(`Product category: `, typeof categoryMod);
  console.log(`Product price: `, typeof priceMod);
  
  console.log(`In stock ` + numMod +  ` product units, ` + productMod + `, for the amount of ` + sumMod + ` wooden`);
}