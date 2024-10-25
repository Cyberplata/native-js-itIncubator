//примитивные тип данных
//String, number, boolean, null, symbol, undefined, BigInt

//ссылочный тип данных
//array, object, function

//особенности ссылочного типа данных
//1) более сложная структура
//2) имеют свойства и методы(arr: pop(), push() and length and etc,; obj: пара ключ значения (принято называть свойством))
//3) ссылочный тип данных

//let a = [1, 2, 3, 4, 5];

//React, Node.js - работала с данными иммутабельно

//map, filter -> new []\

//мутабельно
// const users1 = {
//   //#1234-789
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
// };

// // users1.name = 'Karina';

// // console.log('user1: ', users1); //user1:  { id: 1, name: 'Karina', isStudent: true }

// // const user2 = users1; // #1234-789

// // console.log('isEqual:', user2 === users1); //true

// //иммутабельно (до spread оператора)

// const user2 = {
//   //#9876543
//   id: users1.id,
//   name: users1.name,
//   isStudent: users1.isStudent,
// };

// console.log('isEqual:', users1 === user2); //isEqual: false

// const users1 = {
//   //#1234-789
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
//   country: {
//     //#00000
//     city: 'Toronto',
//   },
// };

// const users2 = {
//   //#678
//   id: users1.id,
//   name: users1.name,
//   isStudent: users1.isStudent,
//   country: users1.country, ////#00000
// };

// console.log('isEqual:', users1.country === users2.country); // true

//spread

// const users = [
//   //#123
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
//     name: 'Ann',
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Donald',
//     isStudent: true,
//   },
// ];

// const testuser = users.map()// => new array []
// let deleteUser = users.pop();

// let deleteUser = [...users].pop()

// console.log('users:', users);

//иммутабельно - не меняю исходный массив

// сделать копию
// const user2 = [...users]; //#new link: #456
// console.log('user2:', user2);

// const superUser = {
//   id: 10,
//   name: 'Clementina DuBuque',
//   username: 'Moriah.Stanton',
//   email: 'Rey.Padberg@karina.biz',

//   address: {
//     street: 'Kattie Turnpike',
//     suite: 'Suite 198',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     geo: {
//       lat: '-38.2386',
//       lng: '57.2232',
//     },
//   },
//   phone: '024-648-3804',
//   website: 'ambrose.net',
//   company: {
//     name: 'Hoeger LLC',
//     catchPhrase: 'Centralized empowering task-force',
//     bs: 'target end-to-end models',
//   },
// };

// const newUserCopy = { ...superUser };
// newUserCopy.city = 'London';

// console.log('supe user: ', superUser.city);
// console.log('new super user: ', newUserCopy.city);

// newUserCopy.address.geo.lat = 'test';

// const newSuperUserCopy = { ...superUser, address: { ...superUser.address, city: 'London' } };
// const newSuperGeo = {
//   ...superUser,
//   address: { ...superUser.address, street: 'Test street', geo: { ...superUser.address.geo, lat: 'test value' } },
// };

// console.log('super user:', superUser.address.city); //super user: Lebsackbury
// console.log('new super user:', newSuperUserCopy.address.city); //new super user: London

// console.log('super user: ', superUser.address.geo); //super user:  { lat: '-38.2386', lng: '57.2232' }
// console.log('new copy user geo:', newSuperGeo.address.geo); //new copy user geo: { lat: 'test value', lng: '57.2232' }

//structuredClone() - фнкция для глубокого копирования

// const newSuperUser = structuredClone(superUser);
// newSuperUser.address.geo.lat = 'new structured clone value';

// console.log('super user: ', superUser.address.geo.lat);
// console.log('new super user: ', newSuperUser.address.geo.lat);

//деструктуризация -

// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
// };

// const firstNameValue = employee.firstName; //Ivan

//объекты

// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
//   message: 'Hello World!',
//   role: 'user',
//   permession: {
//     canEdit: true,
//     canDelete: false,
//   },
// };

// const firstName = 'Test';

// const {
//   firstName: newFirstName,
//   message,
//   role = 'admin',
//   permession: { canDelete, canEdit },
// } = employee;

// //,div> Hello {role}!</div>
// console.log(newFirstName);
// console.log(message);
// console.log(role);
// console.log(canDelete);
// console.log(canEdit);

//array

// const colors = ['red', undefined, 'green', ['value2', 'value1'], 'white', 'black'];

// const redColor = colors[0];
// // console.log(redColor); //red

// const [redColorValue, test = 'value', thirdColor, [, variable2], ...rest] = colors;
// console.log(redColorValue); //red
// console.log(test);
// console.log(thirdColor);
// console.log(variable2);
// console.log(rest);


//--------------------------  Practice  --------------------------
// Задачи на закрепление ссылочного типа данных и spread оператора:

// // 1)Без запуска кода проговорите что тут происходит и что будет в консоли
// const a = {};
// const b = {};
// const c = a;
// const d = c;
//
// console.log(a === b); //false
// console.log(a === c); //true
// console.log(c === d); //true
// console.log(a === c); //true


// // 2)Что будет в консоль логах, ответьте без запуска кода и ответьте на вопрос
// const a = {}; //#12345
// const b = a; //#12345
// b['test'] = 'test value';
//
// console.log(b === a); //true
// console.log(a); // {test: 'test value'}
// // смутирует ли объект a? Да, так как ссылается на одну ячейку в памяти


// // 3)У вас есть объект пользователя с информацией о его имени и адресе. Обновите значение города в адресе пользователя(сделайте это иммутабельно, используя spread оператор)
//
// // Исходный объект и ожидаемый результат:
// const user = {
//     name: 'John',
//     address: {
//         city: 'New York',
//         country: 'USA',
//     },
// };
//
// const updatedUser = {
//     ...user,
//     address: {
//         ...user.address,
//         city: user.address.city + ' LET GO!!!'
//     }
// }
//
// console.log(updatedUser);
// Ожидаемый вывод: { name: 'John', address: { city: 'Toronto', country: 'USA' } }


// // 4) У вас есть массив и новый элемент, который вы хотите добавить в конец этого массива. Напишите функцию addElementToArray, которая принимает исходный массив и новый элемент, и возвращает новый массив, в котором новый элемент добавлен в конец(используйте spread опретаор для решения)
//
// // Ожидаемый результат:
// const addElementToArray = (arr, num) => {
//     return [...arr, num]
// }
// const originalArray = [1, 2, 3, 4, 5];
// const newArray = addElementToArray(originalArray, 6);
//
// console.log(newArray);
// // Ожидаемый вывод: [1, 2, 3, 4, 5, 6]


// // 5) Извлечь значения свойств объекта в переменные name, age, city
// const user = {
//     name: 'John',
//     age: 25,
//     city: 'New York'
// };
//
// const {name, age, city} = user;
//
// // и вывести в консоль эти переменные
// console.log(name);  // 'John'
// console.log(age);   // 25
// console.log(city);  // 'New York'


// // 6) Извлечь значения из массива в переменные secondFruit, thirdFruit, а первую переменную пропустить
// const fruits = ['apple', 'banana', 'orange'];
// const [, secondFruit, thirdFruit] = fruits
// // и вывести в консоль эти переменные
// console.log(secondFruit);  // 'banana'
// console.log(thirdFruit);   // 'orange'


// // 7) Использовать деструктуризацию в параметрах функции
// const person = { name: 'Alice', age: 30 };
//
// // Деструктуризация в параметрах функции
// // function printPersonDetails(тут применить деструктуризацию надо) {
// function printPersonDetails({name, age}) {
//     console.log(`Name: ${name}, Age: ${age}`);
// }
//
// printPersonDetails(person);  // Вывод: Name: Alice, Age: 30


// // 8) Установите значение по умолчанию для свойства year которого нет в объекте car
// const car = {brand: 'Toyota', model: 'Camry'};
// const {brand, model, year = 2022} = car
// // выведите в консоль его
//
// console.log(brand);  // 'Toyota'
// console.log(model);  // 'Camry'
// console.log(year);   // 2022 (значение по умолчанию)


// 9) Извлечь значения из массива объектов
const students = [
    { name: 'Alex', grade: 'A' },
    { name: 'Emma', grade: 'B' },
    { name: 'Chris', grade: 'C' },
];
const [

] = students;

// и вывести их в консоль
console.log(student1);  // 'Alex'
console.log(student3);  // 'Chris'
