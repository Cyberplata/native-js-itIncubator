// __proto__, prototype

// 1. Способы создания методов в классе и их особенности
// function CarCreator(brand, speed) {
//     this.brand = brand
//     this.speed = speed
// }

// class Car {
//     // this = {}
//     // конструктор это тоже самое, что мы выше написали в функции конструкторе.
//     // Когда мы будем вызывать через слово new наш Класс, тогда и будет вызываться наш конструктор.
//     constructor(brand, speed) {
//         this.brand = brand
//         this.speed = speed
//         this.stopEngine = function () {
//             console.log(`Stop ${this.brand}`)
//         }
//     }
//
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
//
//     // Почему так мы не пишем таким синтаксисом, в чём тут проблема?
//     // Потому что, когда мы пишем много инстансов (car1, car2), то эта функция создаётся каждый раз, а могла бы создаваться один раз.
//     // Это загружает нашу память.
//     stopEngine = function () {
//         console.log(`Stop ${this.brand}`)
//     }
//
//     // А здесь будет работать? Почему?
//     // Будет работать, потому что он закрепится за первым this(так как это стрелочная функция).
//     // А это будет this Car, так как мы создали инстанс Car.
//     // Также надо помнить, что call/apply/bind не работают с стрелочными функциями.
//     drive = () => {
//         console.log(`Drive ${this.brand}`)
//     }
//
// }

// const car1 = new Car("bmw", 200)
// const car2 = new Car("kia", 220)

// console.log(car1) // Car { brand: 'bmw', speed: 200, stopEngine: [Function (anonymous)], [Function: drive] }
// console.log(car2) // Car { brand: 'kia', speed: 220, stopEngine: [Function (anonymous)], [Function: drive] }

// car1.drive() // Drive bwm
// car1.drive.call(car2) // Drive bwm - не переопределяется контекст у стрелочной функции
// car1.stopEngine.call(car2) // Stop kia - переопределяется контекст у обычной функции
// car1.startEngine.call(car2) // Start kia - переопределяется контекст у метода класса


// 2. Прототипы и прототипное наследование
// prototype - это объект, который содержит методы и свойства, которые должны быть доступны для всех инстансов класса.
// __proto__ - это ссылка на prototype объекта (в нашем примере Car), с помощью которого был создан инстанс.
// Это свойство является ссылкой на prototype класса или функции конструктора, с помощью которого/которой был создан данный объект.
// Это свойство есть у всех объектов в JS. Оно указывает на объект, который является прототипом текущего объекта.


// Всё ли объекты в javascript? Нет - примитивы не являются объектами, пока к ним не применяется метод.
// Важный момент, что в момент обращения к методу, JS оборачивает примитив в объект, происходит такой процесс как boxing (примитив упаковывается в объект, соответственно у него появляется свойство __proto__). После же выполнения строки с методом дальше по коду происходит процесс - unboxing (преобразование обратно в примитив)

// class Car {
//     constructor(brand, speed) {
//         this.brand = brand
//         this.speed = speed
//         this.state = {}
//     }
//
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
//
//     stopEngine = function () {
//         console.log(`Stop ${this.brand}`)
//     }
// }
//
// const car1 = new Car("bmw", 200)
// const car2 = new Car("bmw", 200)

// 3. Прототипное наследование
// console.log(car1 === car2); // false - разные ссылки на объекты Car (2 ячейки памяти)
// console.log(car1.brand === car2.brand); // true - примитивы сравниваются по значению
// console.log(car1.state === car2.state); // false - потому что разные ссылки на state
// console.log(car1.startEngine === car2.startEngine); // true - единожды создастся ссылка на функцию в оперативной памяти
// console.log(car1.stopEngine === car2.stopEngine); // false - каждый раз создаётся новая функция

// console.log(car1.__proto__ === Car.prototype); // true - ссылка на объект Car.prototype
// console.log(car1.__proto__ === car2.__proto__); // true - ссылка на объект Car.prototype

// const str1 = new String('str'); // new String() - создаёт объект
// const str2 = 'str'; // 'str' - создаёт примитив
// const str3 = 'str';

// console.log(str1);
// console.log(str2.__proto__ === String.prototype); // true, потому что в момент обращения к методу, JS оборачивает примитив в объект
// console.log(str1.__proto__ === String.prototype); // true - ссылка на объект String.prototype
// console.log(str2 === str3); // true - примитивы сравниваются по значению. Если бы это были объекты, то было бы false. Так что не всё в JS объекты.

// console.log(str2 === str3) // true
// console.log(str2.__proto__ === String.prototype) // true
// console.log(str2 === str3) // true

// const num = 23;
// console.log(num.__proto__ === Number.prototype); // true

// const arr = []
// console.log(arr.__proto__ === Array.prototype); // true

// const foo = () =>{}
// console.log(foo.__proto__ === Function.prototype); // true
// console.log(String.__proto__ === Function.prototype); // true - так как String это функция конструктор (мы же вызываем new String(), а вызываться могут только функции)
// console.log(Array.__proto__ === Function.prototype); // true
// console.log(Object.__proto__ === Function.prototype); // true
// console.log(Car.__proto__ === Function.prototype); // true
//
// console.log(Function.__proto__ === Function.prototype); // true
// console.log(Function.__proto__ === Object.__proto__); // true

// console.log(car1.__proto__ === Car.prototype); // true - Car.prototype - это объект, который содержит методы и свойства,
// // которые должны быть доступны для всех инстансов класса
// console.log(car1.__proto__.__proto__ === Object.prototype); // true - Car.prototype.__proto__ === Object.prototype


// 4. Пробуем написать то же самое только через функцию конструктор, а не через класс.

// Класс
class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }

    startEngine() {
        console.log(`Start ${this.brand}`)
    }

    static compareCars() {
        car1.speed > car2.speed
            ? console.log(`${car1.brand} is faster than ${car2.brand}`)
            : console.log(`${car2.brand} is faster than ${car1.brand}`);
    }
}

// const car1 = new Car("bmw", 200)
// const car2 = new Car("bmw", 200)

class SuperCar extends Car {
    constructor(brand, speed, color) { // конструктор класса, который наследуется он уже не создаёт новые инстансы объекта и для того чтобы создать новый инстанс объекта нужно вызвать super()
        super(); // Что делает? - вызывает конструктор родителя
    }
}

const superCar1 = new SuperCar("bmw", 300, "red")
const superCar2 = new SuperCar("kia", 320, "blue")


// Функция конструктор
function CarCreator(brand, speed) {
    this.brand = brand
    this.speed = speed
    // this.startEngine = function () {  // ❌ - каждый раз создаётся новая функция
    //     console.log(`Start ${this.brand}`)
    // }
}

CarCreator.prototype.startEngine = function () { // ✅ - создаётся один раз
    console.log(`Start ${this.brand}`)
}

CarCreator.compareCars = function (car1, car2) { // ✅ - создаётся один раз статический метод
    car1.speed > car2.speed
        ? console.log(`${car1.brand} is faster than ${car2.brand}`)
        : console.log(`${car2.brand} is faster than ${car1.brand}`);
}

const car1 = new CarCreator("bmw", 200)
const car2 = new CarCreator("kia", 220)

car1.startEngine() // Start bmw
car2.startEngine() // Start kia

CarCreator.compareCars(car1, car2) // kia is faster than bmw