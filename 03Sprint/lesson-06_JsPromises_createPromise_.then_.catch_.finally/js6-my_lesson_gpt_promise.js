// Напишите функцию delay(ms), которая возвращает промис,
// переходящий в состояние "resolved" через ms миллисекунд.
// Пример использования:

// function delay(ms) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//            res('Hello')
//         }, ms)
//     })
// }
// delay(2000).then((message) => {
//     console.log(message)
// })
// Создайте два Promise.
// Первый должен разрешаться через 2  секунды и возвращать число 5.
// Второй должен использовать результат первого Promise,
// умножить его на 2 и вернуть результат.
//
// new Promise ((res, rej)=>{
//     setTimeout(()=>{
//         res(5)
//     }, 2000)
// })
// .then((number)=>{
//     return new Promise((resolve, reject) => { // (*)
//         resolve(console.log(number*2))
//     });
// })
//     const firstPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(5);
//         }, 2000);
//     });
//
//     const secondPromise = firstPromise.then((number) => {
//         return number * 2;
//     });
//
//     secondPromise.then((result) => {
//         console.log(result); // Выведет 10 через 2 секунду
//     });

// Создайте Promise, который отклоняется через 2 секунды
// с сообщением об ошибке "Наша ошибка!".
// Обработайте эту ошибку с помощью метода catch.

// new Promise((res, rej) => {
//     setTimeout(() => {
//         rej('Наша ошибка!')
//     }, 2000)
//
// }).catch((data)=>{
//     console.log(data)
// })

// const errorPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("Наша ошибка!"));
//     }, 2000);
// });
//
// errorPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error.message); // Выведет "Наша ошибка!" через 2 секунды
//     });

// function fetchData1() {
//     return new Promise((resolve, reject) => {
//         // Эмуляция асинхронной операции
//         setTimeout(() => {
//             resolve('Data 1');
//         }, 2000);
//     });
// }
//
// function fetchData2() {
//     return new Promise((resolve, reject) => {
//         // Эмуляция асинхронной операции
//         setTimeout(() => {
//             resolve('Data 2');
//         }, 1500);
//     });
// }
//
// function fetchData3() {
//     return new Promise((resolve, reject) => {
//         // Эмуляция асинхронной операции
//         setTimeout(() => {
//             resolve('Data 3');
//         }, 1000);
//     });
// }
//
// fetchData1()
//     .then((data1) => {
//         console.log(data1);// 'Data 1'
//         return fetchData2();
//     })
//     .then((data2) => {
//         console.log(data2);// 'Data 2'
//         return fetchData3();
//     })
//     .then((data3) => {
//         console.log(data3);// 'Data 3'
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     })
//     .finally(() => {
//         console.log('All data fetched!');
//         throw new  Error('Error')
//     }).catch((data)=>{
//     console.log(data)
// })
//
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         // Эмуляция ошибки в асинхронной операции
//         setTimeout(() => {
//             reject(new Error('Something went wrong'));
//         }, 2000);
//     });
// }
//
// fetchData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error('Error:', error.message);// 'Something went wrong'
//         return 'Fallback data';
//     })
//     .then((fallbackData) => {
//         console.log('Fallback data:', fallbackData);
//     })
//     .finally(() => {
//         console.log('Cleanup or logging');
//     });
//
// function fetchData1() {
//     return new Promise((resolve, reject) => {
//         // Эмуляция асинхронной операции
//         setTimeout(() => {
//             resolve('Data 1');
//         }, 2000);
//     });
// }
//
// function fetchData2() {
//     return new Promise((resolve, reject) => {
//         // Эмуляция асинхронной операции
//         setTimeout(() => {
//             reject('Data 2');
//         }, 1500);
//     });
// }
//
// function fetchData3() {
//     return new Promise((resolve, reject) => {
//         // Эмуляция асинхронной операции
//         setTimeout(() => {
//             resolve('Data 3');
//         }, 1000);
//     });
// }
//
// Promise.all([fetchData1(), fetchData2(), fetchData3()])
//     .then((results) => {
//         console.log(results); // Выведет ['Data 1',  'Data 3']
//     })
//     .catch((error) => {
//         console.error('Error:', error); // 'Data 2',
//     })
//     .finally(() => {
//         console.log('All data fetched!');
//     });
//
//
// function endMicrotask(){
//     Promise.resolve().then(()=>{
//         endMicrotask()
//     })
// }
// endMicrotask()
//
// setTimeout(()=>{
//     console.log('Hello World!!!')
// },1000)

// Функция endMicrotask() создает бесконечную цепочку микрозадач (microtasks),
// так как внутри .then() вызывается сама endMicrotask().
// Микрозадачи (microtasks) имеют более высокий приоритет,
// чем макрозадачи (macrotasks), такие как setTimeout.
// Поэтому, пока существует эта бесконечная цепочка микрозадач,
//  setTimeout не может выполнить свою callback-функцию и вывести "HelloWorld!!!" в консоль.
// В результате получается бесконечный вывод в консоль,
// пока вручную не будет остановлено выполнение кода.
