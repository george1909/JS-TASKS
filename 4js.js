let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}
let country = 'Sweden';
let access = country == 'Sweden' ? true: false;
console.log(access);
// Задание 3
// Дан массив логических значений (true/false). Например: const roles = [true, false, false, true, false]
// Каждое значение обозначает админ (true) или пользователь (false).
// Из этого массива с помощью цикла сформировать массив объектов - roles, такой же длины, как и заданный массив.  У каждого объекта должно быть одно поле, role, которое равно admin, если значение в заданном массиве - true, и user, если значение в заданном массиве - false.
// Т.е. из
// [true, false, false]
// должно получиться
// [{ role: 'admin' }, { role: 'user' }, { role: 'user' } ]
// 1) создайте пустой массив newRoles.
// 2) обойдите исходный массив с помощью цикла и, используя тернарный оператор, определите значение роли (admin или user) для каждого элемента массива. Определив это значение (его лучше записывать в переменную), сразу же пушьте в новый массив нужный объект.

const newRoles = [];
const  roles = [true, false, false, true, false]
// // zd4Задание 4
// Создайте функцию findPositiveNumbers(). Она принимает массив в качестве параметра и возвращает новый массив, в котором содержатся только положительны элементы.
// Проверьте работу функции на примере массивов:

function findPositiveNumbers(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
const nums = [5, 4, 3, -3, -10, -1, 8, -20, 0];
console.log(findPositiveNumbers(nums)); 

const numbers = [443, -39, 0, -105, -21, 38, -20, 3, 90];
console.log(findPositiveNumbers(numbers));

//zd5
function Array (g,k) {
  const arr = [];
  for (let i = 0; i < k; i++) {
  arr.push(g);
  }

  return arr;
  }
  console.log(Array('a', 3));

// //   zd6
// //   Определите массив, например let arr = [5, 4, 3, 8, 0].
// // Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// а запуск функции filterFor(arr, 10) дает результат []
// а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]


let arr = [5, 4, 3, 8, 0];
function filterFor(arr, a) {
let newArr = [];
for (let i = 0; i < arr.length; i++) {
if (arr[i] >= a) {
newArr.push(arr[i]);
}
}
return newArr;
}
console.log(filterFor(arr, 5)); 


//zd7
// Написать функцию получения случайного цвета. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - с названием getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Каждый цвет - это строка, в которой участвуют 3 числа в диапазоне от 0 до 255. 
// Одна функция может вызывать другую функцию.

function getRandomRGB() {
  const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const r = getRandomInteger(0, 256);
  const g = getRandomInteger(0, 256);
  const b = getRandomInteger(0, 256);
  return `rgb(${r},${g},${b})`;
}
console.log(getRandomRGB())

//zd8 Написать функцию, которая выводит в консоль квадраты чисел из заданного диапазона (от min до max), где значения min и max передаются в функцию как параметры.
// Примеры вызова такой функции:
// getSquares(0, 100) - выведет квадраты чисел от 0 до 100
// getSquares(56, 87) - выведет квадраты чисел от 56 до 87

function printSquares(min, max) {
  for (let i = min; i <= max; i++) {
    console.log(i * i);
  }
}
printSquares(1, 5);

//zd9d

function isInteger(x) {
  return x % 1 === 0;
  }
  console.log(isInteger(5))

  //zd10

  function checkNumber(n) {
    for (let i = 1; i <= n; i += 0.5) {
    console.log(`${i} - ${Number.isInteger(i) ? 'integer' : 'not integer'}`);
    }
    }
    console.log(checkNumber(3));

    
    