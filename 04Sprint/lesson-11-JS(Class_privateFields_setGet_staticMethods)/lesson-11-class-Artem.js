// Function constructors, Class
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// Зачем нам нужны class? Создание однотипных объектов.

// const car1 = {
//     brand: 'bmw',
//     color: 'red',
//     startEngine() {
//         console.log(`${this.brand} engine is started`)
//     },
// }
//
// const car2 = {
//     brand: 'audi',
//     color: 'black',
//     startEngine() {
//         console.log(`${this.brand} engine is started`)
//     },
// }

// // Проблема дублирования кода.
// // Создаём фабричную функцию carCreator - альтернативный способ создания объектов car1 и car2
// function carCreator(brand, color) {
//     return {
//         brand: brand,
//         color: color,
//         startEngine() {
//             console.log(`${this.brand} engine is started`)
//         },
//     };
// }
//
// const car1 = carCreator('bmw', 'red')
// const car2 = carCreator('kia', 'black')
//
// car1.startEngine()
// car2.startEngine()
//
// console.log(car1) // Проблемы памяти. Получается у нас в памяти создаётся 2 разные ссылки на один и тот же объект.
// console.log(car2) // И если у нас будет 100 объектов carCreator, то у нас будет 100 разных ссылок на один и тот же объект. То есть фабричная функция подходит для "тупых объектов" у которых нет методов.
// console.log(car1.startEngine === car2.startEngine) // false


// Функция-конструктор – Отличия от фабричной функции, использование new вместо return.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
// Когда мы вызываем new CarCreator, то new создаёт новый объект в памяти.

// function CarCreator(brand, color) {
//     this.brand = brand
//     this.color = color
// }
//
// // const prototype = {}
//
// CarCreator.prototype.startEngine = function () {
//     console.log(`${this.brand} engine is started`)
// }
//
// const car1 = new CarCreator('bmw', 'red')
// const car2 = new CarCreator('kia', 'black')
// console.log(car1)
// console.log(car2)
// car1.startEngine()
// car2.startEngine()
// console.log(car1.startEngine === car2.startEngine) // false or true -> Так что пока что ничего не поменялось по сравнению с фабричной функцией
// Когда мы создаём объект при помощи функции конструктора, то javascript создаёт объект prototype,
// который лежит где-то в памяти и будет доступен каждому instance (car1 и car2). То есть все свойства и методы будут доступны всем объектам, которые создали этот конструктор.

// // То есть под капотом произошло следующее
// const prototype = {
//     startEngine: function () { // То есть здесь будет одна ссылка на один и тот же метод startEngine. Не занимаем место в памяти.
//         console.log(`${this.brand} engine is started`)
//     }
// }
//
// CarCreator.prototype.startEngine = function () {
//     console.log(`${this.brand} engine is started`)
// }

// Но есть 2 минуса в таком подходе по сравнению с class.
// 1. Разрозненный код методов и свойств. Каждый раз создаётся новый объект prototype и занимает место в памяти.
// 2. То что не типичный код, допустим, в .NET нет функций конструктора, зато есть похожие классы.


// Class
// 1. В название не используем глагол.
// 2. Описываем функцию конструктор, которая принимает какие-то параметры.
// 3. Мы можем не использовать конструктор, но тогда мы не сможем передать параметры для создания объектов.
// 4. Получается мы обернули в обёртку наши функцию конструктора.
class Car {
    constructor(brand, color) {
        this.brand = brand
        this.color = color
    }
    startEngine() {
        console.log(`${this.brand} engine is started`)
    }
}

// // Равносильно вот такой записи ->
// class Car {
//     function CarCreator(brand, color) {
//         this.brand = brand
//         this.color = color
//     }
//
//     CarCreator.prototype.startEngine = function () {
//         console.log(`${this.brand} engine is started`)
//     }
// }
