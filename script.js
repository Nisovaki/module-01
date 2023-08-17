"use strict";
{ 
  const productMod = prompt('Product name');
  const numMod = +prompt('Quantity of goods');
  const categoryMod = prompt('Product category');
  const priceMod = +prompt('Product price');

  if (productMod && numMod && priceMod && categoryMod) {
    console.log(`Product name: ${productMod} type: ${typeof productMod}`);
    console.log(`Quantity of goods: ${numMod} type: ${typeof numMod}`);
    console.log(`Product category: ${categoryMod} type: ${typeof categoryMod}`);
    console.log(`Product price: ${priceMod} type: ${typeof priceMod}`);
  } else {
    console.log('You have entered incorrect data');
  };
}

