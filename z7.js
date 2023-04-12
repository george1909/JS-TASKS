
// Способ round  округлт до ближайшего целого числа
console.log(Math.round(5.4)); // 5.4 ближе к 5 = 5
console.log(Math.round(5.5)); // 5.5 по среди 5 и 6 = 6
console.log(Math.round(5.6)); // 5.6 ближе к 6 = 6
//Способ ceil округлеят до ближайшего большего целого числа
console.log(Math.ceil(5.4)); // наименьшее целое число 5.4 эт 6 =  6
console.log(Math.ceil(5.5)); // наименьшее целое число 5.5 эт 6 =  6
console.log(Math.ceil(5.6)); // наименьшее целое число 5. эт 6 =  6
//Способ floor округление до ближайшего меньшего целого числа
console.log(Math.floor(5.4)); // наибольшее целое число <= 5.4 = 5 
console.log(Math.floor(5.5)); // наибольшее целое число <= 5.5 = 5 
console.log(Math.floor(5.6)); // наибольшее целое число <= 5.6 = 5 



//zd2
let date = new Date();


let options = {
    day: 'numeric',
     month: 'long',
      year: 'numeric'};
let formattedDate = date.toLocaleString('ru-RU', options);

let hour = date.getHours();
let minut = date.getMinutes();

console.log(`Сегодня ${formattedDate}`);
console.log(`${hour} часов ${minut} минут`);