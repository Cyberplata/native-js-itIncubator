// статические свойства - определяем при создании объекта

let fruit = {
  color: 'Red', //статическому св-ву
  smell: 'good', //статическое св-во
};

//fruit.color

//динамические(вычисляемые) свойства - либо зависят от условий, либо же вычисляются в процессе выполнения кода (Для определения
//динамического свойства используем квадратные скобки) []: "good"

// function createObj(key, value) {
//   let newObj = {};

//   newObj[key] = value;
//   return newObj;
// }

// let res = createObj('fruit', 'apple');
// console.log(res); // { fruit: 'apple' }

// function createObj2(key, value) {
//   return {
//     [key]: value, // вычисляемое (динамическое) св-во
//   };
// }

// const fruits = createObj2('fruit', 'banana');
// console.log(fruits); // { fruit: 'banana' }

// let obj = {
//   [выражение]: значение, //динамическое(вычисляемое) св-во
//   color: 'REd', // статическое св-во
// };

//1) переменную

// let property_name = 'age';

// const obj = {
//   name: 'John', // статическое св-во
//   [property_name]: 25,// //динамическое(вычисляемое) с-во
// };

// console.log(obj); // { name: 'John', age: 25 }

//example 1
// let property_name = 'age';
// const isReady = true ? '200' : '26';

// const obj = {
//   name: 'John', // статическое св-во
//   ['test_property']: isReady,//динамическое(вычисляемое) с-во
// };

// console.log(obj); // { name: 'John', age: 25 }

//2) канкатенацию строк

// const prefix = 'user_';

// const person = {
//   [prefix + 'id']: 'frdrd-12233-gjhghg-266',
//   [prefix + 'name']: 'Fred',
// };

// console.log(person);// { user_id: 'frdrd-12233-gjhghg-266', user_name: 'Fred' }

//3) арифмитические операции

// const index = 1;

// const res = {
//   [index + 4]: 'four',
// };

// console.log(res); // { '5': 'four' }

// 4)

// let person = {
//   ['age' + 2]: 32,
//   [2 + 2]: 4,
// };

// console.log(person); // { '4': 4, age2: 32 }

// 5

// function createObj3(key, value) {
//   return {
//     [key.toUpperCase()]: value,
//   };
// }

// const car = createObj3('bmw', 'x5');
// console.log(car); // { BMW: 'x5' }

// //1) создала переменные для каждого статуса

// const STATUS_BUSY = 'busy';
// const STATUS_READY = 'ready';

// //2) использую вычисляемые св-ва

// const STATUS_LABELS = {
//   [STATUS_BUSY]: 'Ожидает',
//   [STATUS_READY]: 'Готово',
// };

// //3) что приходило с БД

// const drivers = [
//   {
//     name: 'Tom',
//     status: 'busy',
//   },
//   {
//     name: 'Ben',
//     status: 'ready',
//   },
// ];

// //4)

// const driversStatuses = drivers.map((driver) => {
//   const { status } = driver;

//   return STATUS_LABELS[status];
// });

// console.log(driversStatuses); // [ 'Ожидает', 'Готово' ]

//Object.keys(), Object.values(), Obkect.entries()

//Object.keys() - врзвращает массив ключей

// const user = {
//   id: 1,
//   name: 'Bob',
//   age: 56,
//   social_network: 'linkedIn',
// };

// const result = Object.keys(user);
// console.log('result keys: ', result); // [ 'id', 'name', 'age', 'social_network' ]

// //nested
// const user = {
//   id: 1,
//   name: 'Bob',
//   age: 56,
//   social_network: 'linkedIn',
//   country: {
//     city: 'Toronto',
//   },
// };

// const res2 = Object.keys(user);
// console.log(res2); // [ 'id', 'name', 'age', 'social_network', 'country' ]

//Object.values() - возвращает массив значений

// const user = {
//   id: 1,
//   name: 'Bob',
//   age: 56,
//   social_network: 'linkedIn',
// };

// const values = Object.values(user);
// console.log('values: ', values);// values:  [ 1, 'Bob', 56, 'linkedIn' ]

//nested issue
// const user = {
//   id: 1,
//   name: 'Bob',
//   age: 56,
//   social_network: 'linkedIn',
//   current_status: {
//     isMarried: 'No',
//   },
// };

// const values2 = Object.values(user);
// console.log(values2); //[ 1, 'Bob', 56, 'linkedIn', { isMarried: 'No' } ]

//recursion for Object.keys():

// const user = {
//   id: 1,
//   name: 'Bob',
//   age: 56,
//   social_network: 'linkedIn',
//   country: {
//     city: 'Toronto',
//   },
// };

// function getAllKeys(obj) {
//   let keys = Object.keys(obj);

//   for (const key of keys) {
//     if (typeof obj[key] === 'object' && obj[key] !== null) {
//       // If the value associated with the key is an object and not null
//       keys = keys.concat(getAllKeys(obj[key])); //       // Recursively call getAllKeys to get keys of nested object
//     }
//   }

//   return keys;
// }

// const result = getAllKeys(user);
// console.log('result: ', result); // result:  [ 'id', 'name', 'age', 'social_network', 'country', 'city' ]

// function getAllValues(obj) {
//   // Get the values of the current object
//   let values = Object.values(obj);

//   // Loop through each value
//   for (const value of values) {
//     // If the value is an object and not null
//     if (typeof value === 'object' && value !== null) {
//       // Recursively call getAllValues to get values of nested object
//       values = values.concat(getAllValues(value));
//     }
//   }

//   // Return all values
//   return values;
// }

//Object.entries() - возвращает массив [['key', 'value'], ]

// const user = {
//   id: 1,
//   name: 'Bob',
//   age: 56,
//   social_network: 'linkedIn',
//   country: {
//     city: 'Toronto',
//   },
// };

// const values = Object.entries(user);
// console.log(values); // [
// //     [ 'id', 1 ],
// //     [ 'name', 'Bob' ],
// //     [ 'age', 56 ],
// //     [ 'social_network', 'linkedIn' ],
// //     [ 'country', { city: 'Toronto' } ]
// //   ]

//frezze, hasOwnProprty

//new Map, new Set

//new Map - коллекция ключ-значение, ключи могут быть любого типа

// let map = new Map();
// //console.log('collection Map: ', map); // collection Map:  Map(0) {}

// map.set(true, 'true');
// map.set('2', 2);
// map.set(2, 2);

// console.log(map); // Map(3) { true => 'true', '2' => 2, 2 => 2 }
///////

// let user1 = { id: 1, name: 'Tom' };
// let user2 = { id: 2, name: 'Tom' };

// let mapCollection = new Map();

// mapCollection.set(user1, 'user1 info');
// mapCollection.set(user2, 'user2 info');

// console.log(mapCollection); // Map(2) {
// //     { id: 1, name: 'Tom' } => 'user1 info',
// //     { id: 2, name: 'Tom' } => 'user2 info'
// //   }

//added in new Map array
// const array = [
//   ['key', 'value'],
//   ['key1', 'value2'],
// ];

// const map = new Map(array);

// console.log(map);// Map(2) { 'key' => 'value', 'key1' => 'value2' }

// let map = new Map();

// map.set('user', 'Tom');
// map.set('user2', 'Bob');

// get(key) - получаем значение из коллекции

// console.log(map.get('user'));//Tom
// console.log(map.get('test_user'));//undefined

//has(key) -проверяем есть ли клбюч в коллекции

// console.log(map.has('user')); //true
// console.log(map.has(2)); // false

//// delete(key) - удаляем элемент по конкретному ключу

// map.delete('user2');
// console.log(map);// Map(1) { 'user' => 'Tom' }

////clear() - очищает коллекцию

// map.clear();
// console.log(map); //Map(0) {}

//new Set() - особый вид коллекции, множество значений (без ключей), значение не повторяются

// let setCollection = new Set();
// console.log(setCollection); //Set(0) {}

//add("value")

// setCollection.add('1');
// setCollection.add('2');
// setCollection.add('1');

// console.log(setCollection); // Set(2) { '1', '2' }

//has(value) - true or false

// console.log(setCollection.has('1')); //true
// console.log(setCollection.has('5')); //false

// //delete(value) - удаляет значение из множества значений

// setCollection.delete('2');

// console.log(setCollection);//Set(1) { '1' }

// setCollection.clear();
// console.log(setCollection); // Set(0) {}

//передача объектов

// const user = { 1: 'Bob' }; // #123
// const user2 = { 2: 'Tom' }; //#324
// const user1 = { 1: 'Bob' }; //#564

//user === user1

// let userSet = new Set();

// userSet.add(user);
// userSet.add(user2);
// userSet.add(user1);

// console.log(userSet); // Set(3) { { '1': 'Bob' }, { '2': 'Tom' }, { '1': 'Bob' } }
// console.log(userSet.size); // 3

// //передача массивов

// const array = ['1', 1, 1, '1', '5', 54];

// const setCollection = new Set(array);

// console.log(setCollection);//Set(4) { '1', 1, '5', 54 }

// let numbers = [1, 2, 2, 3, 4, 5, 4, 7, 8, 9, 9];

// let uniqieSet = new Set(numbers);
// //console.log(uniqieSet);// Set(8) { 1, 2, 3, 4, 5, 7, 8, 9 }

// let result = [...uniqieSet];
// console.log(result);
// [1, 2, 3, 4, 5, 7, 8, 9];

// //////////
// let resultNew = [...new Set(numbers)];
// console.log(resultNew);
