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
const promiseFetch = (url) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Some err from server")
            // res('Some data from server')
        }, 2000)
    })
}
//
promiseFetch('google.com')
    .then((data)=>{
        console.log('Then1 : ', data)
    },
        (err) => {
            console.log('Catch from Then :', err)
        }
    )
    .then((data)=>{
        console.log('Then2 :', data)
        // return d
        throw new Error('ERROR')
    })
    .then((data)=>{
        console.log('Then3 : ', data)
    })
    .then((data)=>{
        console.log('Then4 : ', data)
    })
    .catch((err)=>{
        console.log('Catch1 : ', err)
        throw new Error('ERROR')

    })
    .then((data)=>{
        console.log('Then5 : ', data)
    })
    .catch((err=>{
        console.log('Catch2 :', err)
    }))
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

