// slice - иммутабельный

//массив.slice(откуда отрезать, [докуда отрезать]);

//1)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(1, 3); //2-й не включительно вырезает

// console.log('arr: ', arr); // arr:  [ 'a', 'b', 'c', 'd', 'e' ]
// console.log('sub', sub); // sub [ 'b', 'c' ]

//2)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(2);

// console.log('sub: ', sub);// sub:  [ 'c', 'd', 'e' ]

//3)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(1, -1);

// console.log('sub: ', sub); //sub:  [ 'b', 'c', 'd' ]

// splice() - мутабельным
// массив.splice(откуда удаляем, сколько удаляем, [вставить], [вставить]...);

//1)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let res = arr.splice(1, 3);

// console.log('arr: ', arr); // arr:  [ 'a', 'e' ]
// console.log('res: ', res); // res:  [ 'b', 'c', 'd' ]

//2)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let res = arr.splice(1, 0, 'test1', 'test2', 'test3');

// console.log('arr: ', arr); // arr:  [ 'a',     'test1','test2', 'test3',  'b',     'c','d',     'e'  ]
// console.log('res', res);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(0, 0, { key: 'value' });

// console.log(arr); // [ 'test1', 'a', 'b', 'c', 'd', 'e' ]

//3)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(1, 2, 'test1', 'test2');
// // ['a', 'b', 'c', 'd', 'e']; - initial array
// // ['a', 'd', 'e'] - removing
// // [ 'a', 'test1', 'test2', 'd', 'e' ] - final array

// console.log('arr: ', arr); // arr:  [ 'a', 'test1', 'test2', 'd', 'e' ]

//4)
// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(1, 'test1');
// console.log(arr); //  [ 'a' ]

// toSpliced() - иммутабельным

// const months = ['Jan', 'Mar', 'Apr', 'May'];
// const res = months.toSpliced(1, 0, 'February');

// console.log('months: ', months);
// console.log('res', res);

// reduce()

//arr.reduce((acc, item, index) => {}) // ,arr[0]
// arr.reduce((acc, item, index) => {}, 0) //

// sum

// let a = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i];
// }

// console.log('sum: ', sum);// sum:  15

//reduce
//1 sum of elemnts
// let a = [1, 2, 3, 4, 5];

// let res = a.reduce((acc, el) => {
//   console.log('acc: ', acc);
//   console.log('el: ', el);
//   return acc + el;
// }, 0);

// console.log('res: ', res);

///2

// const fruits = [
//   { name: 'apple', quantity: 2 },
//   { name: 'banana', quantity: 3 },
//   { name: 'orange', quantity: 1 },
// ];

// //reduce((acc, el) => {}, 0)
// //reduce((prev, ) => {}, 0)

// //map((el) => el.name))
// //map((person) => person.name)

// const res = fruits.reduce((acc, el) => {
//   console.log('acc: ', acc);
//   console.log('el: ', el);
//   return acc + el.quantity;
// }, 0);

// console.log('res', res); // 6

//3 maxNumbers

// let a = [1, 2, 3, 4, 5, 4, 6];

// let res = a.reduce((acc, current) => {

//   console.log('current', current);
//   console.log('acc', acc);

//   return current > acc ? current : acc;
// }); //не указываем через запятую, так как по дефолту это a[0]

// console.log('res', res);

//4

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ]; // {totalNames: [...], totalAges: 0}

// const res = people.reduce(
//   (acc, person) => {
//     console.log('person', person);

//     acc.totalNames.push(person.name);
//     acc.totalAges += person.age; // acc.totalAges + person.age

//     return acc;
//   },
//   { totalNames: [], totalAges: 0 }
// );

// console.log('res: ', res);// { totalNames: [ 'Alice', 'Bob', 'Charlie' ], totalAges: 77 }

// 5

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ]; // {totalNames: [...], totalAges: 0, position: index +  1}

// const res = people.reduce(
//   (acc, person, index) => {
//     console.log('person', person);
//     console.log('index', index);

//     acc.totalNames.push(person.name);
//     acc.totalAges += person.age;
//     acc.index.push(index);

//     return acc;
//   },
//   { totalNames: [], totalAges: 0, index: [] }
// );

// console.log('res: ', res); // { totalNames: [ 'Alice', 'Bob', 'Charlie' ], totalAges: 77 }

//6)

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ]; // {totalNames: [...], totalAges: 0}

// const mappedInfo = people.map((person) => ({
//   name: person.name,
//   age: person.age,
// }));// [{}]

// console.log('mappedInfo: ', mappedInfo);

// const combinedInfoMap = {
//   tottalNames: mappedInfo.map((person) => person.name),
//   totalAges: mappedInfo.reduce((acc, el) => acc + el.age, 0),
// };

// console.log('combinedInfoMap', combinedInfoMap);

//7

// const peoples = [
//   { name: 'Vika', age: 25, budget: 4500 },
//   { name: 'Nikita', age: 45, budget: 35000 },
//   { name: 'Igor', age: 55, budget: 340 },
//   { name: 'Insaf', age: 65, budget: 50000 },
//   { name: 'Alyona', age: 75, budget: 20 },
// ];

//1:  подсчитатьь бюджет Например: 1234

// const res = peoples.reduce((acc, current) => {
//   return acc + current.budget;
// }, 0);

// console.log('res', res);

//2) Expected: {totalAges: 0, totalNames: []}

// const res = peoples.reduce(
//     (acc, el) => {
//       acc.totalAges += el.age;
//       // acc.totalNames.push(el.name);
//       return { ...acc, totalNames: [...acc.totalNames, el.name] };
//     },
//     { totalAges: 0, totalNames: [] }
//   );

//   console.log('res', res);
// [] + 2

// const peoples = [
//   { name: 'Vika', age: 25, budget: 4500 },
//   { name: 'Nikita', age: 45, budget: 35000 },
//   { name: 'Igor', age: 55, budget: 340 },
//   { name: 'Insaf', age: 65, budget: 50000 },
//   { name: 'Alyona', age: 75, budget: 20 },
// ];

// let mapped = {
//   names: [],
//   ages: 0,
// };

// const mappedInfo = peoples.map((person) => {
//   mapped.names.push(person.name);
//   mapped.ages += person.age;
// });

// console.log(mapped);

///4

// const words = ['Hello', ' ', 'world', '!']; //"Hello world!"

// const res = words.reduce((acc, word) => {
//   console.log('word', word);
//   console.log('acc', acc);
//   return acc + word;
// }, '');

// console.log(res);

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ]; // [77]

// const res = people.reduce(
//   (acc, el) => {
//     console.log('el: ', el);
//     console.log('acc: ', acc);

//     acc[0] += el.age; // acc[0] = acc[0] + el.age

//     return acc;
//   },
//   [0]
// );

// console.log('res', res);

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
]; // {totalNames: []}

const res = people.reduce(
  (acc, el) => {
    // console.log(acc);
    // console.log(el);
    acc.totalNames.push(el.name);
    return acc;
  },
  { totalNames: [] }
);

console.log(res); // { totalNames: [ 'Alice', 'Bob', 'Charlie' ] }
