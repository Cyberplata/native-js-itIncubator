// .all() .any() .race() .allSettled()

import fetch from "node-fetch";

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("some data");
//     // rej("some error");
//   }, 1000);
// });

// promise
//   .then((data) => {
//     console.log("then1", data);
//     return new Promise((res) => setTimeout(() => res(1000), 2000));
//     //return new Promise.resolve(10)
//   })
//   .then((data) => {
//     console.log("then2", data);
//     return user;
//     //return new Promise.reject(err)
//   })
//   .then(() => {
//     console.log("then3", data);
//   })
//   .catch((err) => {
//     console.log("catch1", err.message);
//     //return new Promise.resolve(undefined)
//   })
//   .then((data) => {
//     console.log("then4", data);
//     return 20;
//   })
//   .finally(() => {
//     console.log("finally");
//     return user;
//   })
//   .then(() => {
//     console.log("then5", data);
//   })
//   .catch((err) => {
//     console.log("catch2", err.message);
//     //return new Promise.resolve(undefined)
//   });

// fetch("https://yahoo.com/?js")
//   .then((data) => {
//     console.log("yahooData", data.url);
//     return fetch("https://bing.com/?js");
//   })
//   .then((data) => {
//     console.log("bingData", data.url);
//     return fetch("https://google.com/?js");
//   })
//   .then((data) => {
//     console.log("googleData", data.url);
//   });

// const foo = async () => {
//   try {
//     const yahooData = await fetch("https://yahoofdgsf.com/?js");
//     console.log("yahooData", yahooData.url);
//     const bingData = await fetch(`https://bing.com/?js`);
//     console.log("bingData", bingData.url);
//     const googleData = await fetch("https://google.com/?js");
//     console.log("googleData", googleData.url);
//   } catch (err) {
//     console.log("block catch1", err.message);
//   } finally {
//     console.log(a);
//   }
// };

// foo()
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log("chain catch", err.message);
//   });

// .all() .any() .race() .allSettled()

// all

// const pr1 = fetch("https://yahoo.com/?js");
// const pr2 = fetch(`https://bing.com/?js`);
// const pr3 = fetch("https://google.com/?js");

// const bigPromise = Promise.all([pr1, pr2, pr3]);

// bigPromise
//   .then((bigData) => {
//     console.log(bigData);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// Promise.all([
//   fetch("https://yahoo.com/?js"),
//   fetch(`https://bing.com/?js`),
//   fetch("https://google.com/?js"),
// ])
//   .then((bigData) => {
//     console.log(bigData);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// any

// Promise.any([
//   fetch("https://yahoo435645.com/?js"),
//   fetch(`https://bing23456564.com/?js`),
//   fetch("https://google3545.com/?js"),
// ])
//   .then((data) => {
//     console.log(data.url);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });

// race

Promise.race([
  fetch("https://yahoo345345.com/?js"),
  fetch(`https://bing.com/?js`),
  fetch("https://google.com/?js"),
])
  .then((data) => {
    console.log(data.url);
  })
  .catch((err) => {
    console.log("ERROR", err.message);
  });

// allSettled

// Promise.allSettled([
//   fetch("https://yahoo34545.com/?js"),
//   fetch(`https://bingwer234.com/?js`),
//   fetch("https://googlertey345.com/?js"),
// ]).then((data) => {
//   console.log("THEN", data);
// });
