"use strict";
{
  const rain = Math.round(Math.random());
  
  if (rain > 0) {
    console.log('Пошёл дождь. Возьмите зонт!');
  } else {
    console.log('Дождя нет!');
  };

}

{
  const mathematics = +prompt(`Введите кол-во баллов по математике: `);
  const russian = +prompt(`Введите кол-во баллов по русскому языку: `);
  const informatics = +prompt(`Введите кол-во баллов по информатике: `);
  const sumPoints = mathematics + russian + informatics;
  
  if (sumPoints >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!');
  } else {
    console.log('К сожалению вы не поступили!');
  };
  
}

{
  const item = +prompt(`Сколько денег вы хотите снять?`);
  if (item > 99) {
    console.log('Банкомат может выдать данную сумму');
  } else {
    console.log('Банкомат не может выдать данную сумму');
  }
}