//push(), pop(), shift(), unshift() - мутирующими (изменяют исходный массив)

//push() - добавляет 1 или более элементов в конец массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.push('124', 'testName');

// console.log('names:', names); //names: [ 'Alex', 'Bob', 'Ivan', 'Sasha', '124', 'testName' ]
// console.log('result:', result); // result: 6

//pop() - удаляет последний элемент массива и возвращает его

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const poppedResult = names.pop();

// console.log('names: ', names); // names:  [ 'Alex', 'Bob', 'Ivan' ]
// console.log('poppedResult: ', poppedResult); // poppedResult:  Sasha

// const names = [];
// const result = names.pop();

// console.log('result', result);// result undefined

////////////////////////////////
// const array = [1, 2, 3, 4];
// let result = [];

// for (let i = array.length; i > 0; i--) {
//   const test = array.pop();
//   result.push(test);
// }

// console.log(result);
// console.log('array', array);
////////////////////////////////

//setTask([...task, task])//

// shift() - удаляет первый элемент и возвращает его знчение

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const shiftedNames = names.shift();

// console.log('names: ', names);// names:  [ 'Bob', 'Ivan', 'Sasha' ]
// console.log('shiftedNames', shiftedNames);// shiftedNames Alex

// const names = [];
// const res = names.shift();

// console.log('res:', res);// res: undefined

// unshift () - добавляет 1 или более элементов в начало массива и возвращает новую длинну массива

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const unshiftedResult = names.unshift('TestIten', 'TestItem2');

// console.log('names:', names);// names: [ 'TestIten', 'TestItem2', 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('unshifted', unshiftedResult);// unshifted 6

//reverse() - меняет порядок элементов в массиве  на обратный (мутирующий)

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.reverse();

// console.log('names:', names); // [ 'Sasha', 'Ivan', 'Bob', 'Alex' ]
// console.log('result:', result);

//toRevesred() - не мутирующий

//split() - метод для работы ос строками

// Разобюем строку по разделителю "-"

// const str = 'ab-cd-ef';
// const res = str.split('-');

// console.log('str: ', str);// str:  ab-cd-ef
// console.log('res: ', res);// res:  [ 'ab', 'cd', 'ef' ]

// вторым параметром указываем сколько элементов  будет в массиве

// const str = 'ab-cd-ef';
// const res = str.split('-', 2);

// console.log('str: ', str); // str:  ab-cd-ef
// console.log('res: ', res); // res:  [ 'ab', 'cd']

//пустую строку

// const str = 'ab-cd-ef';
// const res = str.split('');

// console.log('str: ', str); // str:  ab-cd-ef
// console.log('res: ', res); // res:  [ 'a', b', '-', 'c','d','-', 'e', 'f']

// split()

// const str = 'ab-cd-ef';
// const res = str.split();

// console.log('str: ', str); // str:  ab-cd-ef
// console.log('res: ', res); // res:  [ 'ab-cd-ef' ]

//////
// const str = 'ab-cd'; //string
// const res = str
//   .split('') // array
//   .reverse()
// console.log(res);

// const str = 'ab-cd';
// const res = str.split('-');
// const test = res.join('');

// console.log(test);

// join() - метод массива

//объединить эдементы в строку по указанному разделителю
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const res = names.join('-');

// console.log('names', names);// names [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('res', res);// res "Alex-Bob-Ivan-Sasha"

//join() - по умолчанию разделитель запятая

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const res = names.join();

// console.log('names', names); // names [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('res', res); // res Alex,Bob,Ivan,Sasha

// слить все водну строку без разделителей

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const res = names.join('');
// const resWithSpaces = names.join(' ');
// const test = names.join(' @ @ ');

// console.log('names', names); // names [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('res', res); // res "AlexBobIvanSasha"
// console.log('res with spaces: ', resWithSpaces); //res with spaces:  "Alex Bob Ivan Sasha"
// console.log(test); // "Alex @ @ Bob @ @ Ivan @ @ Sasha"

// concat() - метод массива(not mutable)

// const arr1 = [1, 2, 4];
// const arr2 = [5, 6, 7];
// const arr3 = [8, 9, 10];

// const res = arr1.concat(arr2, arr3, [11, 12, 13]);

// console.log(res); // [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const arr1 = [1, 2, 4];
// const arr2 = [5, 6, 7];

// const nestedArray = [
//   [8, 9, 10],
//   [11, 12, [13, 15, 17]],
// ];

// const res = arr1.concat(arr2, nestedArray);

// console.log('res', res); // [ 1, 2, 4, 5, 6, 7, [ 8, 9, 10 ], [ 11, 12 ] ]

// //flat() - если пустой то раскрывает 1 уровень вложенности

// const resEmptyFlat = res.flat();
// const resInfinity = res.flat(Infinity);

// console.log('resEmptyFlat: ', resEmptyFlat);
// console.log('resInfinity: ', resInfinity);

//forEach() -

//Array.forEach(function(el, index, array) {
/// который мы хотим выполнить
//})

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;

// arr.forEach(function (elem) {
//   sum += elem; //sum = sum + elem
// });

// console.log('sum:', sum); //15

//find() - метод массива возвращает первый элемент согласно переданному условию, если эл-та нет - undefined

// const words = ['abs', 'testvariable', 'peopl', 'apple', 'test'];
// const res = words.find(function (el) {
//   return el.length === 5;
// });

// console.log(res);//peopl

// const words = ['abs', 'testvariable', 'test'];
// const res = words.find(function (el) {
//   return el.length === 5;
// });

// console.log(res); // undefined

// includes() - проверяет наличие элемента в массиве

// const arr = [1, 2, 3, 4, 5, 6];
// const res = arr.includes(3);
// const noValue = arr.includes(10);

// console.log('res: ', res); // true
// console.log('noValue:  ', noValue); // false

//filter() - метод массива, возвращает новый массив эдементов согласно переданному условию в коллбеке

// const words = ['abs', 'testvariable', 'test', 'purple', 'plants', 'beer', 'Poland'];

// const res = words.filter((el) => el.length >= 6);
// console.log('res: ', res);//  [ 'testvariable', 'purple', 'plants', 'Poland' ]

// sort() - метод для сортировки, сортирует на месте (мутабельный)

//1) сортирует на месте (мутабельно)  ASCII

// const names = ['Donald', 'alex', 'Alex'];
// console.log(names.sort()); // [ 'Alex', 'Donald', 'alex' ]

//2) мутабельно

// const names = ['Test', 'ana', 'Ana', 'Кирилл'];
// names.sort();

// console.log(names);// [ 'Ana', 'Test', 'ana', 'Кирилл' ]

// const numbers = [1, 90, 2, 4, -1000, 56, 87];

// const compareFunction = (a, b) => {
//   //по возрастанию

//   if (a > b) {
//     return 12; //переставляем наши элементы
//   } else {
//     return -12; ///не переставляем
//   }
// };

// console.log(numbers.sort(compareFunction)); // [-1000,  1,  2,  4, 56, 87,  90]

// const res = numbers.sort((a, b) => a - b);
// console.log('res', res);//по возрастанию [-1000,  1,  2,  4, 56, 87,  90]

// const res = numbers.sort((a, b) => b - a);
// console.log('res', res); //по убыванию [90, 87, 56, 4,  2,  1, -1000]

// const users = [
//   {
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex',
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'alex',
//     isStudent: true,
//   },
// ];

// console.log(users.sort((a, b) => b.name.localeCompare(a.name)));

//toSorted()

// const months = ['Mar', 'Jan', 'Feb', 'Dec'];
// const sortedArray = months.toSorted();

// console.log('months', months);
// console.log('sortedArr', sortedArray);

// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(values);
// console.log(sortedValues);

// map() -  return new array

// const users1 = [
//   {
//     id: 1,
//     name: 'Bob', //["Bob"]
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex', //["Bob", "Alex"]
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'Ann', // //["Bob", "Alex", "Anna"]
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Donald', // // //["Bob", "Alex", "Anna", "Donald"]
//     isStudent: false,
//   },
// ];

// const users = users1.map((user) => user.name);
// console.log('users: ', users); // users:  [ 'Bob', 'Alex', 'Ann', 'Donald' ]

//полифилы метода массива map

// function newMap(arr, callback) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }

//   return result;
// }

// const reslutUsers = newMap(users1, (user) => user.name);
// console.log('resultUsers: ', reslutUsers); // resultUsers:  [ 'Bob', 'Alex', 'Ann', 'Donald' ]
