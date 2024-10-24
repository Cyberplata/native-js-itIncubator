// eventloop

// const a = () => {}

// const b = () => {
// 	a()
// }

// const c = () => {
// 	b()
// }

// c()

// console.log("start");

// setTimeout(() => {
//   console.log("timeout1");
// });

// setTimeout(() => {
//   console.log("timeout2");
// }, 0);

// console.log("end");

// setTimeout(function a() {
//   console.log("setTimeout1");
// }, 0);

// // Promise.resolve().then(function b() {
// //   console.log("Promise");
// // });

// setTimeout(function a() {
//   console.log("setTimeout2");
// }, 1000);

// ------------------------------

// function a() {
//   setTimeout(() => {
//     console.log("1");
//   }, 1000);
// }
// function b() {
//   console.log("2");
// }

// a();

// new Promise(function (res, rej) {
//   console.log("3");
//   res();
// }).then(() => {
//   setTimeout(function timer() {
//     console.log("4");
//   }, 0);
// });

// b(); // 2, 3, 4, 1

// ------------------------------

// setTimeout(() => {
//   console.log("1");
// }, 0);

// setTimeout(() => {
//   console.log("2");
// }, 0);

// new Promise(function (res, rej) {
//   console.log("3");
//   res();
//   console.log("4");
// }).then(() => {
//   console.log("5");
// });

// console.log("6");

// async function test1() {
//   console.log("7");
//   await test2();
//   console.log("8");
// }

// async function test3() {
//   console.log("11");
//   await test4();
//   console.log("12");
// }

// async function test2() {
//   console.log("9");
//   test3();
// }

// async function test4() {
//   console.log("13");
// }

// test1();

// console.log("10"); // 3, 4, 6, 7, 10, 5, 8, 9, 1, 2

// ------------------------------

// console.log(1);

// setTimeout(() => {
//   console.log(2);
//   Promise.resolve().then(() => {
//     console.log(3);
//   });
// });

// new Promise((res, rej) => {
//   console.log(4);
//   res(5);
// }).then((data) => {
//   console.log(data);

//   Promise.resolve()
//     .then(() => {
//       console.log(6);
//     })
//     .then(() => {
//       console.log(7);

//       setTimeout(() => {
//         console.log(8);
//       }, 0);
//     });
// });

// setTimeout(() => {
//   console.log(9);
// });

// console.log(10); // 1, 4, 10, 5, 6, 7, 2, 3, 9, 8

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
