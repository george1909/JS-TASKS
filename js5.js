//zd1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.

function sum(a, b) {
    if (arguments.length !== 2) {
    console.log("Введите два параметра");
    return;
    } else if (typeof a !== "number" || typeof b !== "number") {
    console.log("Один из параметров не является числом");
    return;
    }
    return a + b;
    }
console.log(sum(8,9))

    //zd2Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
//"Функция "square" не может быть вызвана без аргумента"
    
function square(a) {
if (a === undefined) {
console.error("Функция square не может быть вызвана без аргумента");
} else {
console.log(a * a);
}
}

square(10) 
square()

//zd3Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
//Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
//Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
//Написать функцию в стрелочном синтаксисе.

const guessNumber = (number) => {
    if (number < 1 || number > 10) {
    return "Число должно быть от 1 до 10";
    }
    const randomNumber = Math.ceil(Math.random() * 10);
    if (randomNumber === number) {
    return "Вы выиграли!";
    } else {
    return `Вы не угадали, ваше число - ${number}, а выпало число - ${randomNumber}`;
    }
    };
    
    console.log(guessNumber(8)); 
    

    //zd4Определить массив, например let arr = [5, 4, 3, 8, 0];
//Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
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
    console.log(filterFor(arr, 4)); 

    //zd5Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.
    function copyArr(arr) {
        return arr.slice(); 
        }
      
        const originalArr = [1, 2, 3];
        const copiedArr = copyArr(originalArr);
        console.log(originalArr); 
        console.log(copiedArr); 
        
        copiedArr.push(4);
        
        console.log(originalArr); 
        console.log(copiedArr); 

        //zd6Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
       

        function sumObjectValues(obj) {
            let sum = 0;
            for (let key in obj) {
            if (typeof obj[key] === 'number') {
            sum += obj[key];
            }
            }
            return sum;
            }
            const objectWithNumbers = {
            a: 10,
            b: 20,
            c: 'string',
            d: 12,
            };
            console.log(sumObjectValues(objectWithNumber));