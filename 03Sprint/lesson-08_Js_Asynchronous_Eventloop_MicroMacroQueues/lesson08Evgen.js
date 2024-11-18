// eventloop

// const a = () => {}
//
// const b = () => {
// 	a()
// }
//
// const c = () => {
// 	b()
// }
//
// c()

// console.log("start");
//
// setTimeout(() => {
//   console.log("timeout1");
// });
//
// setTimeout(() => {
//   console.log("timeout2");
// }, 0);
//
// console.log("end");
//
// setTimeout(function a() {
//   console.log("setTimeout1");
// }, 0);
//
// Promise.resolve().then(function b() {
//   console.log("Promise");
// });
//
// setTimeout(function a() {
//   console.log("setTimeout2");
// }, 1000);
// // "start" "end" "Promise" "timeout1" "timeout2" "setTimeout1" "setTimeout2"
// ------------------------------

// function a() {
//   setTimeout(() => {
//     console.log("1");
//   }, 1000);
// }
// function b() {
//   console.log("2");
// }
//
// a();
//
// new Promise(function (res, rej) {
//   console.log("3");
//   res();
// }).then(() => {
//   setTimeout(function timer() {
//     console.log("4");
//   }, 0);
// });
//
// b();
// // 3 2 1 4


// ------------------------------

// setTimeout(() => {
//   console.log("1");
// }, 0);
//
// setTimeout(() => {
//   console.log("2");
// }, 0);
//
// new Promise(function (res, rej) {
//   console.log("3");
//   res();
//   console.log("4");
// }).then(() => {
//   console.log("5");
// });
//
// console.log("6");
//
// async function test1() {
//   console.log("7");
//   await test2();
//   console.log("8");
// }
//
// async function test3() {
//   console.log("11");
//   await test4();
//   console.log("12");
// }
//
// async function test2() {
//   console.log("9");
//   test3();
// }
//
// async function test4() {
//   console.log("13");
// }
//
// test1();
//
// console.log("10");
// // 3 4 6 7 9 11 13 10 5 12 8 1 2


// 3, 4, 6, 7, 10, 5, 8, 9, 1, 2

// ------------------------------

// console.log(1);
//
// setTimeout(() => {
//   console.log(2);
//   Promise.resolve().then(() => {
//     console.log(3);
//   });
// });
//
// new Promise((res, rej) => {
//   console.log(4);
//   res(5);
// }).then((data) => {
//   console.log(data);
//
//   Promise.resolve()
//     .then(() => {
//       console.log(6);
//     })
//     .then(() => {
//       console.log(7);
//
//       setTimeout(() => {
//         console.log(8);
//       }, 0);
//     });
// });
//
// setTimeout(() => {
//   console.log(9);
// });
//
// console.log(10);
// // 1, 4, 10, 5, 6, 7, 2, 3, 9, 8

// ------------------------------

async function first() {
  console.log(9);
  await Promise.resolve(2).then((r) => console.log(r));
  console.log(0);
  await Promise.resolve(3).then((r) => console.log(r));
}

async function second() {
  console.log(10);
  await Promise.resolve(4).then((r) => console.log(r));
  console.log(11);
  await Promise.resolve(5).then((r) => console.log(r));
}

first();
second();

const promises = Promise.resolve("new Promise");
promises.then((str) => console.log(str));
// 9 10 2 4 new Promise 0 11 3 5


// Практика от GPT
// ----------------------1----------------------------
// console.log("1");
//
// setTimeout(() => {
//   console.log("2");
//   Promise.resolve().then(() => {
//     console.log("3");
//   });
// }, 0);
//
// Promise.resolve().then(() => {
//   console.log("4");
//   setTimeout(() => {
//     console.log("5");
//   }, 0);
// });
//
// console.log("6");
//
// setTimeout(() => {
//   console.log("7");
// }, 0);
//
// Promise.resolve().then(() => {
//   console.log("8");
// });
// // 1 6 4 8 2 3 7 5

// ----------------------2----------------------------
// console.log("A");
//
// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => {
//     console.log("C");
//   });
//   queueMicrotask(() => {
//     console.log("D");
//   });
// }, 0);
//
// Promise.resolve().then(() => {
//   console.log("E");
//   setTimeout(() => {
//     console.log("F");
//   }, 0);
// });
//
// console.log("G");
//
// setTimeout(() => {
//   console.log("H");
//   queueMicrotask(() => {
//     console.log("I");
//   });
// }, 0);
//
// queueMicrotask(() => {
//   console.log("J");
// });
//
// Promise.resolve().then(() => {
//   console.log("K");
// });
// // A G E J K B C D H I F

// ----------------------3----------------------------
// console.log("A");
//
// async function async1() {
//   console.log("B");
//   await async2();
//   console.log("C");
// }
//
// async function async2() {
//   console.log("D");
//   return Promise.resolve().then(() => {
//     console.log("E");
//   });
// }
//
// setTimeout(() => {
//   console.log("F");
// }, 0);
//
// async1();
//
// console.log("G");
//
// setTimeout(() => {
//   console.log("H");
// }, 0);
//
// Promise.resolve().then(() => {
//   console.log("I");
// });
//
// queueMicrotask(() => {
//   console.log("J");
// });
// // A B D G E I J C F H

// ----------------------4----------------------------
// console.log("1");
//
// async function test1() {
//   console.log("2");
//   await test2();
//   console.log("3");
// }
//
// async function test2() {
//   console.log("4");
//   await Promise.resolve();
//   console.log("5");
// }
//
// test1();
//
// setTimeout(() => {
//   console.log("6");
// }, 0);
//
// Promise.resolve().then(() => {
//   console.log("7");
// });
//
// queueMicrotask(() => {
//   console.log("8");
// });
//
// console.log("9");
//
// setTimeout(() => {
//   console.log("10");
// }, 0);
// // 1 2 4 9 5 7 8 3 6 10
