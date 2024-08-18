// promise .then .catch .finally

// function fetchCallback(url, callback) {
// 	//
// 	callback()
// }

// fetchCallback("https://booksstore.com/authors", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fetchCallback(
//       `https://booksstore.com/authors/${data.authorId}`,
//       (err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           fetchCallback(
//             `https://booksstore.com/authors/authorId/${data.books}`,
//             (err, data) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 fetchCallback(
//                   `https://booksstore.com/authors/authorId/books/${data.bookId}`,
//                   (err, data) => {
//                     if (err) {
//                       console.log(err);
//                     } else {
//                       fetchCallback(
//                         `https://booksstore.com/authors/authorId/books/bookId/${data.page}`,
//                         (err, data) => {
//                           if (err) {
//                             console.log(err);
//                           } else {
//                             console.log(data);
//                           }
//                         }
//                       );
//                     }
//                   }
//                 );
//               }
//             }
//           );
//         }
//       }
//     );
//   }
// });

// fetchPromise("https://booksstore.com/authors")
// 	.then((data) => {
// 		fetchPromise(`https://booksstore.com/authors/${data.authorId}`)
// 			.then((data) => {
// 				fetchPromise(`https://booksstore.com/authors/${data.authorId}`)
// 				.then((data) => {

// 			})
// 		})
// 	})

// fetchPromise("https://booksstore.com/authors")
//   .then((data) => {
//     return fetchPromise(`https://booksstore.com/authors/${data.authorId}`);
//   })
//   .then((data) => {
//     return fetchPromise(
//       `https://booksstore.com/authors/authorId/${data.books}`
//     );
//   })
//   .then((data) => {
//     return fetchPromise(
//       `https://booksstore.com/authors/authorId/books/${data.bookId}`
//     );
//   })
//   .then((data) => {
//     return fetchPromise(
//       `https://booksstore.com/authors/authorId/books/bookId/${data.page}`
//     );
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// promise

// function Promise(executor) {
//   //
//   const resolve = (data) => {
//     return {
//       state: "fulfilled",
//       result: data,
//     };
//   };

//   const reject = (err) => {
//     return {
//       state: "rejected",
//       result: err,
//     };
//   };

//   executor(resolve, reject);
// }

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("some data from server");
//     rej("error from server");
//   }, 2000);
// });

// console.log("promise", promise);

// import fetchPromise from 'fetchPromise'

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

// const pr = axios.get('books.com')
// const pr = fetchPromise('books.com')

// setLoading(true);

// function fetchPromise() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       // rej("error from server");
//       // res("some data from server");
//       // throw new Error("ERROR");
//       // return false;
//     }, 2000);
//   });
// }

// fetchPromise()
//   .then(
//     (data) => {
//       console.log(data);
//     },
//     (err) => {
//       console.log(err);
//     }
//   )
//   .catch((err) => {
//     console.log("catch", err);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

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

// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
// Пример использования:

function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("reject1 ");
    }, ms);
  });
}
// delay(1000).then(() => console.log("Hello!"));

delay(1000)
  .catch((t) => t + "catch1 ")
  .catch((t) => t + "catch2 ")
  .then((t) => t + "then1 ")
  .finally((t) => t + "finally ")
  .then((t) => console.log(t));
