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

//Пример 1
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

// // Пример 1.2
// console.log("start") // 1
//
// const asyncFetch = async () => {
//     console.log("start request to yahoo"); // 2
//     const yahooData = await fetch(("https:/yahoo.com/"));
//     console.log("data from yahoo", yahooData); // 4
// };
//
// asyncFetch();
//
// console.log("end"); // 3

// // Пример 1.3 - переписали пример с .then(), только без .catch() из Примера 1.
// // Порядок действий следующий:
// // 1. наша функция доходит до слова await,
// // 2. останавливается и дожидается результата промиса,
// // 3. записывает в переменную,
// // 4. выводит результат промиса через консоль
// const asyncFetch = async () => {
//     const yahooData = await fetch("https:/yahoo.com/");
//     console.log("data from yahoo", yahooData.url); // 1
//     const bingData = await fetch("https:/bing.com/");
//     console.log("data from bing", bingData.url); // 2
//     const googleData = await fetch("https:/google.com/");
//     console.log("data from google", googleData.url) // 3
// };
//
// asyncFetch();

// // Пример 1.4 - обработка ошибки в async-await -> try-catch
// // Если ошибка - прерывает своё выполнение и переходит в блок catch,
// // если в 1ом промисе будет ошибка, то другие промисы выполняться не будут,
// // если мы хотим, двигаться дальше не зависимо от ошибки, то в каждом кейсе нужно писать try-catch
// const asyncFetch = async () => {
//     try {
//         const yahooData = await fetch("https:/yahoo.com/");
//         console.log("data from yahoo", yahooData.url);
//
//         const bingData = await fetch("https:/bing.com/");
//         console.log("data from bing", bingData.url);
//
//         const googleData = await fetch("https:/g123oogle.com/");
//         console.log("data from google", googleData.url)
//     } catch (err) {
//         console.log("ERROR", err)
//     }
// };
//
// asyncFetch(); // ERROR TypeError: fetch failed

// // Пример 1.5 - На каждый запрос try-catch
// const asyncFetch = async () => {
//     try {
//         const yahooData = await fetch("https:/yahoo1213.com/");
//         console.log("data from yahoo", yahooData.url);
//     } catch (err) {
//         console.log("ERROR", err)
//     }
//     try {
//         const bingData = await fetch("https:/bing.com/");
//         console.log("data from bing", bingData.url);
//     } catch (err) {
//         console.log("ERROR", err)
//     }
//     try {
//         const googleData = await fetch("https:/google.com/");
//         console.log("data from google", googleData.url)
//     } catch (err) {
//         console.log("ERROR", err)
//     }
// };
//
// asyncFetch();
// // ERROR TypeError: fetch failed
// // data from bing https://www.bing.com/?toWww=1&redig=F2613618660C493483D3294F62BB5C09
// // data from google https://www.google.com/


// Пример 1.6 комбинации с .catch() в async-await

const asyncFetch = async () => {
    try {
        const yahooData = await fetch("https:/yahoo123.com/").catch((err) => {
            // catch вернёт undefined, то есть промис зарезолвился undefined
            console.log("ERROR1", err)
        })
        console.log("data from yahoo", yahooData);

        const bingData = await fetch("https:/bing.com/");
        console.log("data from bing", bingData.url);

        const googleData = await fetch("https:/google.com/");
        console.log("data from google", googleData.url)
    } catch (err) {
        console.log("ERROR2", err)
    }
};

asyncFetch();
// --- НЕТ .url ---
// ERROR1 TypeError: fetch failed
// data from yahoo undefined
// data from bing https://www.bing.com/?toWww=1&redig=D68AAC67DD6D466ABDA231DA12EC6E5E
// data from google https://www.google.com/

// // --- ЕСТЬ .url ---
// ERROR1 TypeError: fetch failed
// Если оставляем .url -> yahooData.url то и пишет, что нет такого свойства поэтому ошибка ERROR2
// ERROR2 TypeError: Cannot read properties of undefined (reading 'url')

