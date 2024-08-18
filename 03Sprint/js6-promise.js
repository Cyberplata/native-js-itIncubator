// //Промис (promise) - это объект, представляющий результат успешного или неудачного завершения асинхронной операции.
// // Асинхронная операция, упрощенно говоря, это некоторое действие, выполняется независимо от окружающего ее кода,
// // в котором она вызывается, не блокирует выполнение вызываемого кода.
//
// //Промис может находиться в одном из следующих состояний:
// //
// // pending (состояние ожидания): начальное состояние, промис создан, но выполнение еще не завершено
// //
// // fulfilled (успешно завершено): действие, которое представляет промис, успешно завершено
// //
// // rejected (завершено с ошибкой): при выполнении действия, которое представляет промис, произошла ошибка
// //
// // Для создания промиса применяется конструктор типа Promise:
// //
// // 1
// // new Promise(executor)
//
// //что представляет из себя промис
//
// let promise = new Promise(function executor(resolve, reject) {
//     return {
//         status: 'pending',
//         result: undefined
//     }
// });
//
// //Функция executor под капотом
function executor(){
    //если работа завершилась успешно, с результатом value.
    const resolve=(value)=>{
        return {
            status: 'fulfilled',
            result: value
        }
    }
    //если произошла ошибка, error – объект ошибки.
    const reject=(error)=>{
        return {
            status: 'rejected',
            result: error
        }
    }
}
//
// //Свойства state и result – это внутренние свойства объекта Promise и мы не имеем к ним прямого доступа.
// // Для обработки результата следует использовать методы .then/.catch/.finally
//
// //!!!!!Состояние промиса может быть изменено только один раз.
// // Все последующие вызовы resolve и reject будут проигнорированы:
//
// let promise1 = new Promise(function(resolve, reject) {
//     resolve("done");
//     reject(new Error("…")); // игнорируется
//     setTimeout(() => resolve("…")); // игнорируется
// });
// // простой пример промиса, как он работает
//
// const promise2 = new Promise((resolve, reject) => {
//   const randomNumber = Math.random();
// setTimeout(() => {
//     if(randomNumber < .6) {
//       resolve(console.log('Все прошло отлично!'));
//     } else {
//       reject(console.log('Что-то пошло не так'));
//   }
//   }, 2000);
// });
//
// //Теперь мы знаем как создавать промисы, давайте теперь разберемся как применять уже созданный промис.

//
// //then
//
// //1) обрабатывает только успешное завершение запроса: промис переходит в состояние «выполнен успешно», и получает результат.
// promise.then(
//     function(result) { /* обработает успешное выполнение */ },
// );
//
// //2) обрабатывает помимо успешного завершения и ошибку
// promise.then(
//     function(result) { /* обработает успешное выполнение */ },
//     function(error) { /* обработает ошибку */ }
// );
//
// //catch
//
//
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Ошибка!")), 1000);
// });


// //finally
//
// //Вызов .finally(f) выполнится в любом случае, когда промис завершится: успешно или с ошибкой.
//
// // Идея finally состоит в том, чтобы настроить обработчик для выполнения очистки/доведения
// // после завершения предыдущих операций.
// //     Например, остановка индикаторов загрузки, закрытие больше не нужных соединений и т.д.
//
// //Обработчик, вызываемый из finally, не имеет аргументов.
// // В finally мы не знаем, как был завершён промис. И это нормально, потому что обычно наша задача –
// // выполнить «общие» завершающие процедуры.
// //обработчик finally не имеет аргументов, а результат promise обрабатывается в следующем обработчике.
// // Обработчик finally «пропускает» результат или ошибку дальше, к последующим обработчикам.
// //
// // Например, здесь результат проходит через finally к then:
// //
//  new Promise((resolve, reject) => {
//   setTimeout(() => resolve("value"), 2000);
// })
//   .finally(() => console.log("Промис завершён")) // срабатывает первым
//   .then(result => console.log(result)); // <-- .then показывает "value"

// Обработчик finally также не должен ничего возвращать. Если это так, то возвращаемое значение молча игнорируется.
// !!!!!!! Единственным исключением из этого правила является случай, когда обработчик finally выдает ошибку.
// Затем эта ошибка передается следующему обработчику вместо любого предыдущего результата.

//Цепочка промисов (Promise Chaining) - это метод использования промисов в JavaScript, который позволяет последовательно
// связывать несколько асинхронных операций в виде цепочки, где результат одной операции передается в следующую.


//задача 1
//
// new Promise(function(resolve, reject) {
//
//     setTimeout(() => resolve(1), 1000); // (*)
//
// }).then(function(result) {
//
//     console.log(result);//1
//     return result * 2;
//
// }).then(function(result) {
//
//     console.log(result);//2
//     return result * 2;
//
// }).then(function(result) {
//
//     console.log(result);//4
//     return result * 2;
//
// });
//
// //задача 2

// new Promise(function(resolve, reject) {
//
//     setTimeout(() => resolve(1), 1000);
//
// }).then(function(result) {
//
//     console.log('then 1', result); //1
//
    return new Promise((resolve, reject) => { // (*)
        setTimeout(() => resolve(result * 2), 1000);
    });
//
// }).then(function(result) { // (**)
//
//     console.log('then2', result); // 2
//
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject('ERROR'), 1000);
//     });
//
// }).finally((result)=> {
//
//     console.log('finaly', result); // ERROR
//     return 34
//
// }).catch(function (result){
//     console.log('catch', result); //
// })
//     .then(function(result){
//         console.log('then3', result);
//     })
//Задача 3
//
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject('error');
//     }, 3000);
// });
//
// promise.then(
//     function(result) {
//         return result + '1';
//     }
// ).then(
//         function(result) {
//             return result + '3';
//         }
//     )
//     .catch(
//     function(error) {
//         console.log(error)//error
//
//     }
// ).then((data)=>{
//     console.log(data)// undefined
//     return 'HELLO!!!'
// })
//
//     .finally(function() {
//     console.log('done');//'done'
// }).then((data)=>{
//     console.log(data)//'HELLO!!!'
//     throw new Error('ошибка')
// }).catch((error)=>{
//     console.log(error)//'ошибка'
//     return 300
// }).then((data)=>{
//     console.log(data)//300
// })

//Задача 4
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject('error');
//     }, 3000);
// });
// promise
//     .then((data) => {
//         console.log('then1', data);
//     })
//     .then(function (result) {
//             console.log('then2', result);
//         },
//         function (error) {
//             console.log('then3', error); //error
//         })
//     .then(function (result) {
//         console.log('then2', result);//undefined
//         return 'Hello World!';
//     })
//     .finally(()=>{
//         console.log('finally');//'finally'
//         throw new Error('ERROR!!!!!!!')
//     })
//     .then(function (result) {
//         console.log('then4', result);
//     })
//     .catch(function (error) {
//         console.log('catch', error);//'ERROR!!!!!!!'
//     })

