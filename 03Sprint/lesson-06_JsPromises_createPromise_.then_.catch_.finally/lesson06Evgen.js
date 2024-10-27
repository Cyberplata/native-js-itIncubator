// promise .then .catch .finally

// function fetchCallback(url, callback) {
//     //
//     callback()
// }
//
// fetchCallback("https://booksstore.com/authors", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fetchCallback(
//             `https://booksstore.com/authors/${data.authorId}`,
//             (err, data) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     fetchCallback(
//                         `https://booksstore.com/authors/authorId/${data.books}`,
//                         (err, data) => {
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 fetchCallback(
//                                     `https://booksstore.com/authors/authorId/books/${data.bookId}`,
//                                     (err, data) => {
//                                         if (err) {
//                                             console.log(err);
//                                         } else {
//                                             fetchCallback(
//                                                 `https://booksstore.com/authors/authorId/books/bookId/${data.page}`,
//                                                 (err, data) => {
//                                                     if (err) {
//                                                         console.log(err);
//                                                     } else {
//                                                         console.log(data);
//                                                     }
//                                                 }
//                                             );
//                                         }
//                                     }
//                                 );
//                             }
//                         }
//                     );
//                 }
//             }
//         );
//     }
// });

// fetchPromise("https://booksstore.com/authors")
// 	.then((data) => {
// 		fetchPromise(`https://booksstore.com/authors/${data.authorId}`)
// 			.then((data) => {
// 				fetchPromise(`https://booksstore.com/authors/${data.authorId}`)
// 				.then((data) => {
//
// 			})
// 		})
// 	})


// // Переписали пример на .then(), .catch()
// fetchPromise("https://booksstore.com/authors")
//     .then((data) => {
//         return fetchPromise(`https://booksstore.com/authors/${data.authorId}`);
//     })
//     .then((data) => {
//         return fetchPromise(
//             `https://booksstore.com/authors/authorId/${data.books}`
//         );
//     })
//     .then((data) => {
//         return fetchPromise(
//             `https://booksstore.com/authors/authorId/books/${data.bookId}`
//         );
//     })
//     .then((data) => {
//         return fetchPromise(
//             `https://booksstore.com/authors/authorId/books/bookId/${data.page}`
//         );
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // TIME: 1:25:04
// Переписали пример на async-await
const asyncFetch = async () => {
    try {
        const autorsData = await fetchPromise("https://booksstore.com/authors")
        const authorIdData = await fetchPromise(`https://booksstore.com/authors/${autorsData.authorId}`)
        const booksData = await fetchPromise(`https://booksstore.com/authors/authorId/${authorIdData.books}`)
        const pageData = await fetchPromise(`https://booksstore.com/authors/authorId/books/bookId/${booksData.page}`)

        console.log(pageData);
        return [autorsData, authorIdData, booksData, pageData]
    } catch (err) {
        console.log("ERROR", err)
    }
}
// асинхронная функция возращает промис и мы с этими данными можем как-то дальше работать
asyncFetch().then((dataArr) => {
    console.log("then from async")
})

// promise

// function Promise(executor) {
//   //
//   const resolve = (data) => {
//     return {
//       state: "fulfilled",
//       result: data,
//     };
//   };
//
//   const reject = (err) => {
//     return {
//       state: "rejected",
//       result: err,
//     };
//   };
//
//   executor(resolve, reject);
// }

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("some data from server");
//     rej("error from server");
//   }, 2000);
// });
//
// console.log("promise", promise);

//import fetchPromise from 'fetchPromise'

// const axios = {
// 	get(url) {
// 		return new Promise((res, rej) => {
// 			fetch(url, (err, data) => {
// 				if(err) {
// 					rej(err)
// 				}
// 				res(data)
// 			})
// 		})
// 	}
// }
//
// const pr = axios.get('books.com')
// const pr = fetchPromise('books.com')

// setLoading(true);

// const promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     // res("some data from server");
//     rej("error from server");
//   }, 2000);
// });
//
// const promise2 = promise1.then((result) => {
//   console.log(result)
// })
//
// const promise3 = promise2.then(() => {})
//
// console.log("promise", promise);


// fetchPromise()
//     .then((data) => {
//         console.log("then1", data);
//         // return new Promise.resolve(5) // неявно пишется так - под капотом
//         return 5
//     })
//     .then((data) => {
//         console.log("then2", data)
//         // return a;
//         // throw new Error("some error");
//         return 20;
//     })
//     .finally((data) => {
//         console.log("finally", data)
//         return 50;
//     })
//     .then((data) => {
//         console.log("then3", data)
//     })
//     .then((data) => {
//         console.log("then4", data)
//     })
//     .catch((err) => {
//         console.log("err", err)
//     })
//     .then((data) => {
//         console.log("then5", data)
//     })

// function fetchPromise() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             rej("error from server");
//             // res("some data from server");
//             // throw new Error("ERROR");
//             // return false;
//         }, 2000);
//     });
// }
//
// fetchPromise()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("catch", err);
//     })
//     .finally(() => {
//         console.log("finally");
//     });

// fetchPromise()
//   .then((data) => {
//     console.log("then1", data);
//     // return new Promise.resolve(5)
//     return 5;
//   })
//   .then((data) => {
//     console.log("then2", data);
//     // return a;
//     // throw new Error("some error");
//     return 20;
//   })
//   .finally((data) => {
//     console.log("finally1", data);
//     return 50;
//   })
//   .then((data) => {
//     console.log("then3", data);
// 		// return new Promise.resolve()
//   })
//   .then((data) => {
//     console.log("then4", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .then((data) => {
//     console.log("then5", data);
//   });

// promise.catch((err) => {
//   console.log(err);
// });

// promise.finally(() => {
// 	setLoading(false)
// 	console.log('finally');
// })

// Пример с задачей, где 2 коллбека в .then() и один .catch() в чём разница? Идентичны ли записи ->
// fetchPromise.then(
//     (data) => {
//         console.log(data)
//     },
//     (err) => {
//         console.log(err)
//     },
// );
//
// fetchPromise
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
// Пример использования:

// function delay(ms) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             rej("reject1 ");
//         }, ms);
//     });
// }
//
// // delay(1000).then(() => {
// //     console.log("Hello!")
// // })
//
// delay(1000)
//   .catch((t) => t + "catch1 ")
//   .catch((t) => t + "catch2 ")
//   .then((t) => t + "then1 ")
//   .finally((t) => t + "finally ")
//   .then((t) => console.log(t)); //"reject1 catch1 then1 "

// function delay(ms) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("reject1 ");
//     }, ms);
//   });
// }
// // delay(1000).then(() => console.log("Hello!"));
//
// delay(1000)
//   .catch((t) => t + "catch1 ")
//   .catch((t) => t + "catch2 ")
//   .then((t) => t + "then1 ")
//   .finally((t) => t + "finally ")
//   .then((t) => console.log(t));


// https://chat.mistral.ai/ задачи по цепочке промисов
// Задача 1: Умножение чисел
// Напишите функцию multiply(x, y), которая возвращает промис, переходящий в состояние "resolved" с результатом умножения x и y через 1 секунду.

function multiply(x, y) {
    return new Promise((res) => {
        setTimeout(() => {
            res(x * y)
        }, 1000)
    })
}

// multiply(2,3).then((data) => {
//     console.log(data)
// })

// Задача 2: Сложение чисел с задержкой
// Напишите функцию add(x, y), которая возвращает промис, переходящий в состояние "resolved" с результатом сложения x и y через 2 секунды.

function add(x, y) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x + y)
        }, 2000)
    })
}

// add(5, 2).then((data) => {
//     console.log(data)
// })

//Задача 3: Деление чисел с обработкой ошибок
// Напишите функцию divide(x, y), которая возвращает промис, переходящий в состояние "resolved" с результатом деления x на y через 1 секунду. Если y равно 0, промис должен перейти в состояние "rejected" с сообщением "Деление на ноль".

function divide(x, y) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (y === 0) {
                rej("Деление на ноль")
            } else {
                res(x / y)
            }
        }, 1000)
    })
}

// divide(20, 2)
//     .then((data) => {
//         console.log(data) // 10
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//
// divide(20, 0)
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err) // "Деление на ноль"
//     })

// Задача 4: Цепочка промисов для арифметических операций
// Используйте функции multiply, add и divide для выполнения следующей цепочки операций:
//
//    1. Умножьте 2 на 3.
//    2. Прибавьте к результату 4.
//    3. Разделите результат на 2.

// multiply(2,3)
//     .then((data)=> {
//         return add(data, 4)
//     })
//     .then((data) => {
//         return divide(data,2)
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// Задача 5: Цепочка промисов с обработкой ошибок
// Используйте функции multiply, add и divide для выполнения следующей цепочки операций:
//
// 1. Умножьте 2 на 3.
// 2. Прибавьте к результату 4.
// 3. Разделите результат на 0 (чтобы вызвать ошибку).

// multiply(2,3)
//     .then((data) => {
//         return add(data,4)
//     })
//     .then((data) => {
//         return divide(data,0)
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


// Задача 1: Параллельное выполнение промисов
// Напишите функцию parallelPromises(promises), которая принимает массив промисов и возвращает промис, который разрешается, когда все промисы в массиве разрешены. Используйте Promise.all.
function delay(ms) {
    return new Promise((res) => {
        setTimeout(res, ms);
    });
}

function parallelPromises(promises) {
    return Promise.all(promises);
}

parallelPromises([delay(1000), delay(2000), delay(3000)])
    .then(() => console.log("All promises resolved"))
    .catch((error) => console.error(error));