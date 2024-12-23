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
// // будет ссылаться на window
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

// 2.3 arrow function
// const user = {
//     firstName: "Artem",
//     showName: () => {
//         console.log(this.firstName); // undefined
//         // console.log(this === window); // true
//     }
// }

// 2.4 simple function
// const user = {
//     firstName: "Artem",
//     showName() {
//         console.log(this.firstName); // Artem
//     }
// }
// user.showName() // Так как это обычная функция, то смотрим что левее от точки - это объект user, поэтому this будет ссылаться на объект user и выведет Artem

// 2.5 arrow function in simple function
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

// 2.6 simple function in simple function
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

// 2.7 example with var
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

// ----IV----
// const car = {
//     color: "red",
//     showColor() {
//         (
//             () => {
//                 console.log(this.color) // red
//             }
//         )() // что это за синтаксис? Это самовызывающаяся функция.
//         Ключевое, что это стрелочная функцию и она получает this в момент инициализации,
//         а инициализация происходит внутри метода showColor, а метод showColor вызывается в контексте объекта car,
//         поэтому this будет ссылаться на объект car, а в объекте car есть свойство color
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

// // ----VI----
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

// --------1--------
const car1 = {
    brand: 'bmw',
    startEngine(color, speed) {
        console.log(`start ${this.brand} ${color} ${speed}`)
    }
}

const car2 = {
    brand: 'kia',
}

// car1.startEngine.call(car2, 'red', 200) // start kia red 200
// car1.startEngine.apply(car2, ['red', 200]) // start kia red 200

// --------2--------
// Три варианта передачи аргументов в bind
// 2.1
const foo1 = car1.startEngine.bind(car2, 'red', 100)
foo1() // start kia red 100
// 2.2
const foo2 = car1.startEngine.bind(car2, 'red')
foo2(100) // start kia red 100
// 2.3
const foo3 = car1.startEngine.bind(car2)
foo3('red', 100) // start kia red 100

