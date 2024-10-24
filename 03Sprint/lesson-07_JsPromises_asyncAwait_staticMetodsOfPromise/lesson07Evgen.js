
//
// const promiseFetch = (url) => {
//     return new Promise((res, rej) => {
//         fetch(url, (err, data) => {
//             if (err) {
//                 rej(err)
//             } else {
//                 res(data)
//             }
//         })
//     })
// }

// console.log('start')

// const promiseFetch = (url) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             rej("Some err from server")
//             // res('Some data from server')
//         }, 2000)
//     })
// }
//
// promiseFetch('google.com')
//     .then((data)=>{
//         console.log('Then1 : ', data)
//     },
//         (err) => {
//             console.log('Catch from Then :', err)
//         }
//     )
//     .then((data)=>{
//         console.log('Then2 :', data)
//         // return d
//         throw new Error('ERROR')
//     })
//     .then((data)=>{
//         console.log('Then3 : ', data)
//     })
//     .then((data)=>{
//         console.log('Then4 : ', data)
//     })
//     .catch((err)=>{
//         console.log('Catch1 : ', err)
//         throw new Error('ERROR')
//
//     })
//     .then((data)=>{
//         console.log('Then5 : ', data)
//     })
//     .catch((err=>{
//         console.log('Catch2 :', err)
//     }))
//
// const something = promise.then((data)=>{
//     console.log('Then: ', data)
// })
// console.log('something', something)

// promise.catch((err)=>{
//     console.log('Catch: ', err)
// })
//
// promise.finally(()=>{
//     console.log('finally')
// })

// работа с библиотекой axios
// import axios from 'axios'

// axios.get('google.com').then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


// ____________Мои заметки____________

// import fetch from "node-fetch"

// fetch("https:/yahoo.com/")
//     .then((data) => {
//         console.log("data from yahoo", data.url)
//         return fetch("https:/bing.com/")
//     })
//     .then((data) => {
//         console.log("data from bing", data.url)
//         return fetch("https:/google.com/")
//     })
//     .then((data) => {
//         console.log("data from google", data.url)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


// I. async-await:
// Чтобы объявить асинхронную функцию, нужно написать через ключевое слово async.
// Это даёт нам право написать внутри await.

// // Пример 1.1
// console.log('start') // 1
//
// const asyncFetch = async () => {
//     console.log('async') // 2
//     // Так как мы не объявили через await значит это синхронный код.
//     // То есть всё что есть до слова await это синхронные действия, после асинхронные.
// }
//
// asyncFetch();
//
// console.log('end') // 3
// // time: 52:52

// Пример 1.2
console.log("start") // 1

const asyncFetch = async () => {
    console.log("start request to yahoo"); // 2
    const yahooData = await fetch(("https:/yahoo.com/"));
    console.log("data from yahoo", yahooData); // 4
};

asyncFetch();

console.log("end"); // 3

