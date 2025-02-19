// *******************************Алексей Вергей*********************************************************
// https://www.youtube.com/watch?v=8ASji0hy11Y - урок с Алексеем Вергеем
// Ключевые моменты по this

//!use-strict ---> this = some object
//use-strict -----> this = any data type


//1. global scope -----> this = global object

//2. function (not arrow!!!!) ---> смотрим как вызывается функция!!! ---> приоритет по убыванию следующий --->
    // - вызвана с помощью ключевого слова new ----> this = {} (новый объект)
    // - вызвана с помощью методов функций ( call, bind, apply )
    // - вызвана от имени какого-то объекта ----> this то, что слева от точки
    // - обычный вызов функции ----> undefined (!use-strict ---> window)

//3. arrow functions ---> this берётся из внешнего скоупа

// *******************************Алексей Вергей*********************************************************


// this
// Что такое this - это ключевое слово, которое ссылается на объект, в контексте которого вызывается функция.
// Для function declaration this определяется в момент вызова функции, то есть где и когда функция вызывается.
// Для arrow function this определяется в момент инициализации функции, то есть где и когда функция создаётся.

// 1. Global scope
// 2. Function scope -> arrow function || simple function
// 3. call / apply / bind
// 4. Function constructor

//-------------------------------------------------------------------------------------------------
// // 1. Global scope
// console.log(window); // window
// console.log(this); // window
// console.log(this === window); // true

//-------------------------------------------------------------------------------------------------
// 2. Function scope -> arrow function || simple function
// Так как у стрелочной функции нет своего лексического окружения, то есть она не создаёт своё лексическое окружение, 
// то this будет определятся в момент инциализации функции и никогда больше не будет меняться.

// "use strict"; // строгий режим это режим, в котором this не будет ссылаться на window, если функция вызывается в глобальной области видимости. А также запрещает использование некоторых синтаксических конструкций, которые могут привести к ошибкам. Нужно использовать при каких условиях? При написании кода, чтобы избежать ошибок, которые могут возникнуть из-за неявных ошибок в коде.

// // 2.1 arrow function
// будет ссылаться на window
// const arrowFunc = () => { // момент инициализации
//     // no this
//     console.log(this); // window
// }
//
// arrowFunc() // момент вызова

// // 2.2 simple function
// // будет ссылаться на объект
// function foo() {
//     // this === window
//     const arrowFunc = () => {
//         console.log(this); // window или undefined (при строгом режиме)
//     }
//
//     arrowFunc()
// }
//
// // window.foo()
// foo() // this появляется в момент вызова функции - неявно вызывается window.foo() при не строгом режиме и undefined.foo() при строгом режиме

// // 2.3 arrow function
// const user = {
//     firstName: "Artem",
//     showName: () => {
//         console.log(this.firstName); // undefined
//         // console.log(this === window); // true
//     }
// }

// // 2.4 simple function
// const user = {
//     firstName: "Artem",
//     showName() {
//         console.log(this.firstName); // Artem
//     }
// }
// user.showName() // Так как это обычная функция, то смотрим что левее от точки - это объект user, поэтому this будет ссылаться на объект user и выведет Artem

// // 2.5 arrow function in simple function
// const user = {
//     firstName: "Artem",
//     showName() {
//         // this === user
//         const foo = () => {
//             console.log(this.firstName)
//         }
//         foo()
//     }
// }
//
// user.showName() // инициализация функции foo происходит внутри функции showName, а она вызывается в контексте объекта user, поэтому this будет ссылаться на объект user и выведет Artem

// // 2.6 simple function in simple function
// const user = {
//     firstName: "Artem",
//     showName() {
//         // чему здесь равен this? user
//         const foo = function () {
//             // чему здесь равен this? window
//             console.log(this.firstName) // undefined? потому что this === window
//         }
//         foo() // Так как это обычная функция, то смотрим что левее от точки - это объект window, поэтому this будет ссылаться на объект window и выведет undefined
//     }
// }
//
// user.showName()

// // 2.7 example with var
// // у var нет блочной области видимости у неё есть функциональная область видимости,
// // а let и const есть блочная область видимости и они не поднимаются в начало блока, в отличие от var.
// // Поэтому это глобальная переменная и она будет в объекте window с таким же именем и значением 20
// var maxSpeed= 20;
//
// const car = {
//     maxSpeed: 200,
//     showMaxSpeed: () => {
//         console.log(this.maxSpeed) // 20 почему?
//         // потому что это стрелочная функция и она не создаёт своё лексическое окружение,
//         // поэтому this будет ссылаться на объект window, а в объекте window есть свойство maxSpeed со значением 20
//     }
// }
//
// car.showMaxSpeed()

// 2.8 example with var2.0
// var maxSpeed= 20;
// const car = {
//     maxSpeed: 200,
//     showMaxSpeed() {
//         console.log(this.maxSpeed) // 200 почему?
//         // Потому что это обычная функция и она создаёт своё лексическое окружение,
//         // а this будет ссылаться на объект car, а в объекте car есть свойство maxSpeed со значением 200
//     }
// }
//
// car.showMaxSpeed()


// Зачем нужен this?
// 1. this позволяет не зависеть от переменных. То есть мы можем использовать this.brand вместо car.brand. 
// 2. this позволяет создавать методы в объекте и обращаться к свойствам объекта через this.
// 3. this позволяет создавать методы в объекте и обращаться к другим методам через this.
// 4. this позволяет создавать методы в объекте и обращаться к другим методам через this, даже если объект меняется.

// ----I----
// let car = {
//     brand: 'bmw',
//     startEngine() {
//         // console.log(`start ${this.brand}`) // start bmw
//         console.log(`start ${car.brand}`) // start bmw. Зачем же тогда нужен этот this раз мы можем сделать вот так?
//     }
// }
//
// car.startEngine()
//
// const car2 = car
// car = null
// car2.startEngine() // Ошибка, потому что car === null, а у null нет свойства brand. Вот тут и пригодится this, чтобы не зависеть от переменной car

// // ----II----
// function startEngine() {
//     console.log(`start ${this.brand}`)
// }
//
// const car1 = {
//     brand: 'bmw',
// }
//
// const car2 = {
//     brand: 'kia',
// }
//
// car1.func = startEngine;
// car2.func = startEngine;
//
// car1.func() // start bmw
// car2.func() // start kia

// // ----III----
// const startEngine = () => {
//     console.log(`start ${this.brand}`)
// }
//
// const car1 = {
//     brand: 'bmw',
// }
//
// const car2 = {
//     brand: 'kia',
// }
//
// car1.func = startEngine;
// car2.func = startEngine;
//
// car1.func() // start undefined? Почему? Потому что это стрелочная функция и она не создаёт своё лексическое окружение, поэтому this будет ссылаться на объект window, а в объекте window нет свойства brand
// car2.func() // start undefined

// // ----IV----
// const car = {
//     color: "red",
//     showColor() {
//         (
//             () => {
//                 console.log(this.color) // red
//             }
//         )() // что это за синтаксис? Это самовызывающаяся функция.
//         // Ключевое, что это стрелочная функцию и она получает this в момент инициализации,
//         // а инициализация происходит внутри метода showColor, а метод showColor вызывается в контексте объекта car,
//         // поэтому this будет ссылаться на объект car, а в объекте car есть свойство color
//     }
// }
//
// car.showColor()

// // ----V----
// const car = {
//     color: "red",
//     showColor() {
//         // this === car
//         const a = () => {
//             (
//                 () => {
//                     console.log(this.color) // red почему? Потому что это стрелочная функция и она не создаёт своё лексическое окружение, поэтому this будет ссылаться на объект car, а в объекте car есть свойство color
//                 }
//             )()
//         }
//         a()
//     }
// }
//
// car.showColor()

// ----VI----
// const car = {
//     color: "red",
//     showColor() {
//         // this === car
//         const a = function(){
//             // this === window
//             (
//                 () => {
//                     console.log(this.color) // undefined почему? Потому что это стрелочная функция и она не создаёт своё лексическое окружение, поэтому this будет ссылаться на объект window, а в объекте window нет свойства color
//                 }
//             )()
//         }
//         a() // именно здесь вызывается функция a, а не внутри самовызывающейся функции и здесь this === window
//     }
// }
//
// car.showColor()

// // ----VII----
// const car = {
//     color: "red",
//     showColor() {
//         // this === car
//         const a = function(){
//             // this === window
//             (
//                 function() {
//                     // this === window, здесь свой this он не будет никуда выпрыгивать на уровень выше.
//                     console.log(this.color) // undefined почему? Потому что это обычная функция и она создаёт своё лексическое окружение, поэтому this будет ссылаться на объект window, а в объекте window нет свойства color
//                 }
//             )()
//         }
//         a() // именно здесь вызывается функция a, а не внутри самовызывающейся функции и здесь this === window
//     }
// }
//
// car.showColor()


//-------------------------------------------------------------------------------------------------
// 3. call / apply / bind
// call - вызывает функцию (startEngine) с указанным this и аргументами. То есть можно вызвать эту функцию именно в контексте или имени другого объекта.
// apply - вызывает функцию с указанным this и аргументами в виде массива.
// Единственное отличие от call в том, что аргументы передаются в виде массива. А у call аргументы передаются через запятую.
// bind - возвращает новую функцию, в которой this будет привязан к указанному объекту. 
// И мы можем сохранить эту функцию в переменную и вызвать её позже.
// Если бы startEngine была стрелочной функцией, то bind/call/apply не сработал бы, потому что стрелочная функция не создаёт своё лексическое окружение.
// Контекст переопределяется только у обычных функций у стрелочных функций контекст не переопределяется и он навсегда остаётся таким, каким он был в момент инициализации.
// А почему тогда в примере ниже не переопределяется контекст? Потому что мы используем bind, а bind создаёт новую функцию и в этой новой функции контекст будет привязан к объекту car2.

// // --------1--------
// const car1 = {
//     brand: 'bmw',
//     startEngine(color, speed) {
//         console.log(`start ${this.brand} ${color} ${speed}`)
//     }
// }
//
// const car2 = {
//     brand: 'kia',
// }
// //
// // car1.startEngine.call(car2, 'red', 200) // start kia red 200
// // car1.startEngine.apply(car2, ['red', 200]) // start kia red 200
//
// // // --------2--------
// const scooter = {
//     brand: 'honda',
//     speed: 60,
// }
// console.dir(car1.startEngine)
// const foo = car1.startEngine.bind(car2, 'red', 100)
// console.dir(foo) // есть скрытое поле [[BoundThis]]: brand: "kia", которое переопределить нельзя второй раз
// foo.call(scooter)
// foo('yellow', 100)

// // --------3--------
// const scooter = {
//     brand: 'honda',
//     speed: 60,
// }
// const car2 ={
//     brand: 'bmw',
//     speed: 200,
//     showMaxSpeed() {
//         (
//             () => {
//                 console.log(this.speed) // 200 Почему? Потому что это стрелочная функция и она не создаёт своё лексическое окружение, поэтому this будет ссылаться на объект car2, а в объекте car2 есть свойство speed. То есть метод call ничего не будет делать? Потому что стрелочная функция не создаёт своё лексическое окружение, поэтому this будет ссылаться на объект car2, а в объекте car2 есть свойство speed
//             }
//         ).call(scooter)
//     }
// }
//
// car2.showMaxSpeed()


// --------4--------
// =================Потеря контекста=================
// Как происходит потеря контекста? Когда мы внутри setTimeout передаём функцию, то this будет ссылаться на объект window, а в объекте window нет свойства speed

// // --------4.1--------
// const car2 ={
//     brand: 'bmw',
//     speed: 200,
//     showMaxSpeed() {
//         // console.log(this) // window
//         console.log(this.speed) // undefined
//     }
// }
//
// // function setTimeout(callback, timer) {
// //     // logic ------------- sleep(2000)
// //     callback() // слева от точки нет объекта, поэтому this === window
// // }
//
// setTimeout(car2.showMaxSpeed, 2000) // undefined Почему? Потому что this === window
//
// // --------4.2--------
// // Исправление потери контекста
// // 1. Сделать стрелочную функцию и передать её в setTimeout
// // 2. Использовать bind и передать в bind объект, к которому мы хотим привязать контекст, то есть car2.
//
// // bind возвращает новую функцию, в которой this будет привязан к указанному объекту.
// setTimeout(car2.showMaxSpeed.bind(car2), 2000) // 200 Почему? Потому что мы используем bind и передаём в bind объект, к которому мы хотим привязать контекст, то есть car2. При этом call/apply не сработает, потому что они сразу вызывают функцию, а bind возвращает новую функцию, в которой this будет привязан к указанному объекту
//
// // стрелочная функция
// setTimeout(() => car2.showMaxSpeed(), 2000) // 200 Почему? Потому что это стрелочная функция и она не создаёт своё лексическое окружение, поэтому this будет ссылаться на объект car2, а в объекте car2 есть свойство speed

// --------4.3--------
// const dialer = {
//     name: 'Toyota',
//     models: ['Yaris', 'Corolla', 'Prado'],
//     showModelsInDialer() {
//         // this === dialer
//         this.models.forEach(function (model) {
//             // this === window
//             console.log(`Dialer: ${this.name}, have: ${model}`) // Dialer: undefined, have: Yaris...
//         })
//     },
// }
//
// dialer.showModelsInDialer()

// arrow function
// Опять же можно исправить это с помощью стрелочной функции или bind
// const dialer = {
//     name: 'Toyota',
//     models: ['Yaris', 'Corolla', 'Prado'],
//     showModelsInDialer() {
//         // this === dialer
//         this.models.forEach( (model) => {
//             // this === dialer
//             console.log(`Dialer: ${this.name}, have: ${model}`) // Dialer: Toyota, have: Yaris...
//         })
//     },
// }
//
// dialer.showModelsInDialer()

// // bind
// const dialer = {
//     name: 'Toyota',
//     models: ['Yaris', 'Corolla', 'Prado'],
//     showModelsInDialer() {
//         // this === dialer
//         this.models.forEach(function(model) {
//             console.log(`Dialer: ${this.name}, have: ${model}`)
//         }.bind(this)); // Привязываем контекст this к функции
//     },
// }
//
// dialer.showModelsInDialer() // Dialer: Toyota, have: Yaris...

// // 3ий параметр в forEach - это thisArg, который принимает контекст, который будет использоваться внутри функции.
// const dialer = {
//     name: 'Toyota',
//     models: ['Yaris', 'Corolla', 'Prado'],
//     showModelsInDialer() {
//         // this === dialer
//         this.models.forEach( (model) => {
//             // this === dialer
//             console.log(`Dialer: ${this.name}, have: ${model}`)
//         }, this); // Привязываем контекст this
//     },
// }
//
// dialer.showModelsInDialer() // Dialer: Toyota, have: Yaris...


//-------------------------------------------------------------------------------------------------
// 4. Function constructor

// --------1--------
// Функция-конструктор - это функция, которая создаёт объекты. 
// То есть она становится функцией-конструктором, когда мы используем оператор new. 
// Таким образом, функция-конструктор создаёт объекты.
// Функция-конструктор - это обычная функция, которая создаёт объекты.
// Принято называть функцию-конструктор с большой буквы.
// Внутри функции-конструктора this будет ссылаться на объект, который создаётся в момент вызова функции-конструктора.
// Функция-конструктор создаёт в памяти новый объект, а this ссылается на этот объект. А дальше через точку мы можем создавать свойства и методы для этого объекта.
// Если мы не используем return, то this будет возвращаться автоматически.

// function CarCreator(brand) {}
// console.log(CarCreator()) // undefined
// console.log(new CarCreator()) // CarCreator {}

// function CarCreator(brand) {
//     // {}
//     // this = {}
//     this.brand = brand
//     this.speed = 200
//     // {brand: 'kia', speed: 200}
//     // return this // автоматически возвращает this
// }
//
// console.log(new CarCreator('kia')) // CarCreator { brand: 'kia', speed: 200 }
// console.log(new CarCreator('bmw')) // CarCreator { brand: 'bmw', speed: 200 }
//
// console.log(CarCreator('bmw')) // undefined. В таком формате у window есть свойство brand со значением bmw, потому что this === window
