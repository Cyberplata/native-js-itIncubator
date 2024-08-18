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
