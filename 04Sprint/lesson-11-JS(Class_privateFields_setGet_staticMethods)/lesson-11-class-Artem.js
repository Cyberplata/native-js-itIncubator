// Function constructors, Class
// https://www.youtube.com/watch?v=EDMMHcC7yUs
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
// 5. Приватные свойства через _ условная договорённость
// 6. Приватные свойства через #. К приватному свойству можно обращаться только внутри самого класса.
// 7. Мы не работаем с приватными методами напрямую, а через методы get и set.
// Мы контролируем полностью приватные свойства от создания до изменения.

// // Равносильно вот такой записи-псевдокод ->
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

// class Car {
//     #wheels = 4 // Объявление приватного свойства
//     constructor(brand, color, wheels) {
//         this.brand = brand
//         this.color = color
//         // this._wheels = wheels // условная договорённость приватных свойств
//         // this.#wheels = wheels
//     }
//
//     getWheels() { // Получение приватного свойства
//         return this.#wheels
//     }
//
//     setWheels(wheels) { // Установка приватного свойства
//         if (wheels > 10) throw new Error('wheels <= 10')
//         this.#wheels = wheels
//     }
//
//     startEngine() {
//         console.log(`${this.brand} engine is started`)
//     }
// }
//
// const car1 = new Car('bwm', 'red')
// const car2 = new Car('kia', 'black')
//
// console.log(car1)
// console.log(car2)
// console.log(car1.startEngine === car2.startEngine) // true
// car1.startEngine() // методы помещаются в объект прототипа класса по умолчанию
// car2.startEngine()
//
// // console.log(car1._wheels)
// // console.log(car1.#wheels)
// console.log(car1.getWheels()) // 4
// car1.setWheels(6)
//
// console.log(car1.getWheels()) // 6
// car1.setWheels(11) // Error wheels <= 10
// // Time: 53:20


// // Но так не делают (getWheels() и setWheels()), а через get и set работают (геттер и сеттер).
// Называем методы get и set также, как и приватные свойства (wheels в нашем случае), чтобы не путаться.
// Хотя по другому если назовём будет также всё работать.
// class Car {
//     #wheels = 4
//     constructor(brand, color, wheels) {
//         this.brand = brand
//         this.color = color
//     }
//
//     get wheels() {
//         return this.#wheels
//     }
//
//     set wheels(wheels) {
//         if (wheels > 10) throw new Error('wheels <= 10')
//         this.#wheels = wheels
//     }
//
//     startEngine() {
//         console.log(`${this.brand} engine is started`)
//     }
// }
//
// const car1 = new Car('bwm', 'red')
// const car2 = new Car('kia', 'black')
//
// console.log(car1)
// console.log(car2)
// console.log(car1.startEngine === car2.startEngine)
// car1.startEngine()
// car2.startEngine()
//
// console.log(car1.wheels) // 4, просто вызываю свойство, а на самом деле инкапсулирована логика в get, которая возвращает это значение
// car1.wheels = 6 // здесь js понимает, что раз мы приравниваем, то хотим выполнить set
// console.log(car1.wheels) // 6


// // Приватное свойство можно переопределить, если нет методов get и set
// class Car {
//     #wheels = 4
//     constructor(brand, color, wheels) {
//         this.brand = brand
//         this.color = color
//     }
//
//     get wheels() {
//         return this.#wheels
//     }
//
//     set wheels(wheels) {
//         if (wheels > 10) throw new Error('wheels <= 10')
//         this.#wheels = wheels
//     }
//
//     startEngine() {
//         console.log(`${this.brand} engine is started`)
//     }
// }
//
// const car1 = new Car('bwm', 'red')
// const car2 = new Car('kia', 'black')
//
// console.log(car1)
// console.log(car2)
// console.log(car1.startEngine === car2.startEngine)
// car1.startEngine()
// car2.startEngine()
//
// car1.wheels = 15
// console.log(car1)
// // console.log(car1.wheels)
// // car1.wheels = 6
// // console.log(car1.wheels)


// // Static methods - статические методы, можем сделать нашему классу (Car) и не будут доступны у instance (car1 и car2).
// // Это нужно, чтобы какую-то логику привязать к классу, а не к конкретному экземпляру.
// // Поэтому и в прототипе нет этого метода (compareCars), а есть get, set, приватное свойство и startEngine.
// class Car {
//     #wheels = 4
//     constructor(brand, color, maxSpeed) {
//         this.brand = brand
//         this.color = color
//         this.maxSpeed = maxSpeed
//     }
//
//     get wheels() {
//         return this.#wheels
//     }
//
//     set wheels(wheels) {
//         if (wheels > 10) throw new Error('wheels <= 10')
//         this.#wheels = wheels
//     }
//
//     startEngine() {
//         console.log(`${this.brand} engine is started`)
//     }
//
//     static compareCars() {
//         car1.maxSpeed === car2.maxSpeed
//             ? console.log(`Cars have same speed`)
//             : car1.maxSpeed > car2.maxSpeed
//                 ? console.log(`${car1.brand} is faster`)
//                 : console.log(`${car2.brand} is faster`);
//     }
// }
//
// const car1 = new Car('bwm', 'red', 200)
// const car2 = new Car('kia', 'black', 180)
//
//
// Car.compareCars(car1, car2) // bwm is faster
// console.log(car1.compareCars()) // TypeError: car1.compareCars is not a function
// console.log(car2)
// console.log(car1.startEngine === car2.startEngine)
// car1.startEngine()
// car2.startEngine()
//
// car1.wheels = 15
// console.log(car1)

// Наследование
// Классы дают нам возможность наследовать свойства и методы от родительского класса.
// Также чтобы не дублировать код в разных классах, мы можем использовать extends.
// То есть создать копию класса, которая будет наследоваться от родительского класса, но с дополнительным функционалом.
// extends идёт всегда в паре с super

// class SuperCar extends Car {
//     constructor(brand, color, maxSpeed, isFly) { // функция конструктор конструирует в памяти новый объект и записывает его в this
//         // new Car(brand, color, maxSpeed) - под капотом идёт в super() - создание экземпляра родительского класса Car внутри конструктора SuperCar.
//         super(brand, color, maxSpeed); // вызываем конструктор родительского класса, то есть наследуем свойства и методы
//         this.isFly = isFly // добавляем новое свойство
//         this.brand = brand + '-X5' // так мы перезатрём свойство brand родительского класса
//     }
//
//     fly() { // добавили новый метод класса SuperCar
//         console.log(`${this.brand} is flying`)
//     }
//
//     startEngine() { // переопределили метод startEngine, точнее добавили новый функционал в SuperCar, а в Car он остался прежним
//         super.startEngine() // выполняется старая логика из родительского класса Car
//         console.log(`${this.brand} in new start engine is function`) // и потом новая логика
//     }
// }
//
// // SuperCar.compareCars() // доступны статические методы родительского класса
//
// const superBmw = new SuperCar('super-bmw', 'green', 220, true)
//
// console.log(superBmw) // SuperCar { brand: 'super-bmw', color: 'green', maxSpeed: 220, isFly: true }
// // console.log(superBmw.wheels) // 4 - из родительского класса доступен метод get
// // superBmw.fly() // super-bmw is flying
// // superBmw.startEngine() // super-bmw in new start engine is function
// // car1.startEngine() // bwm engine is started
//
// // car1.startEngine()
// superBmw.startEngine()
// // super-bmw engine is started
// // super-bmw in new start engine is function


// // Момент с вопросом где же создаётся новый объект в конструкторе Car, в конструкторе SuperCar или может быть создаётся 2 объекта вообще? 🙃
// class SuperCar extends Car {
//     constructor(brand, color, maxSpeed, isFly) {
//         // ✅
//         // {} - вот здесь создаётся новый объект в классе SuperCar
//         // this = {}
//         super(brand, color, maxSpeed);
//         this.isFly = isFly
//     }
//
//     fly() { // добавили новый метод класса SuperCar
//         console.log(`${this.brand} is flying`)
//     }
//
//     startEngine() { // переопределили метод startEngine, точнее добавили новый функционал в SuperCar, а в Car он остался прежним
//         super.startEngine() // выполняется старая логика из родительского класса Car
//         console.log(`${this.brand} in new start engine is function`) // и потом новая логика
//     }
// }
// Time: 1:22:59


// Задача посчитать общее количество машин в class, решение через static свойство →
class Car {
    // #wheels = 4
    constructor(brand, color, maxSpeed) {
        Car.value++
        // this.brand = brand
        // this.color = color
        // this.maxSpeed = maxSpeed
    }

    static value = 0
}

const car1 = new Car('bwm', 'red', 200)
const car2 = new Car('kia', 'black', 180)
const car3 = new Car('ford', 'green', 250)

console.log(Car.value) // 3