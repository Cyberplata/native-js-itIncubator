//////////////---Практика от GPT---///////////////////////
// Базовые задачи (this в разных контекстах)

// 1. Глобальный контекст
// Что выведет код?
console.log(this); // window

// 2. Функция в строгом режиме
// Что выведет код в строгом режиме?
"use strict";
function showThis() {
    console.log(this); // undefined
}
showThis();

// 3. Метод объекта
// Что выведет код?
const obj = {
    name: "Object",
    showThis() {
        console.log(this); // Объект obj выведет
    }
};
obj.showThis();

// 4. Стрелочная функция внутри метода
// Что выведет код?
const obj = {
    name: "Object",
    showThis() {
        const arrowFunc = () => {
            console.log(this); // Выведет также объект obj потому что у стрелочной функции нет своего контекста, она выпрыгивает наверх, а выше обычный метод showThis, а он вызывается уже от объекта obj.
        };
        arrowFunc();
    }
};
obj.showThis();

// 5. Простая функция внутри метода
// Что выведет код?
const obj = {
    name: "Object",
    showThis() {
        function innerFunc() {
            console.log(this); //Так же будет obj, либо скорее всего подставляется левее window к innerFunc(), а у window this будет равен window
        }
        innerFunc();
    }
};
obj.showThis();


//Средний уровень (call, apply, bind)
// 6. Использование call
// Исправь код так, чтобы метод greet работал корректно.
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

greet(); // undefined или ошибка
// Исправь вызов ниже
// greet( /* ... */ );
greet.call(person1) // Hello, my name is Alice
greet.call(person2) // Hello, my name is Bob

//7. Использование apply
// Используй apply, чтобы передать массив аргументов.
const person = { name: "Charlie" };

function introduce(age, city) {
    console.log(`My name is ${this.name}, I am ${age} years old and I live in ${city}.`);
}

// Используй apply здесь
// introduce( /* ... */ );
introduce.apply(person, [30, 'London']) // My name is Charlie, I am 30 years old and I live in London.

// 8. Использование bind
// Создай новую функцию boundFunc, которая навсегда привязана к person.
const person = { name: "David" };

function sayHello(age) {
    console.log(`Hello from ${this.name}, I'm ${age}`);
}

// Создай привязанную функцию
const boundFunc = sayHello.bind(person); // Hello from David, I'm 11
boundFunc(11);

// *-------------------------------------------------------*
// call и apply можно использовать динамически:
//Пример 1: Используем Function.prototype.call.apply
function sayHello(age) {
    console.log(`Hello from ${this.name}, I'm ${age}`);
}

const person3 = { name: "Emma" };

// Используем глобальные методы call и apply, привязывая их к sayHello

Function.prototype.call.call(sayHello, person3, 40);  // Hello from Emma, I'm 40
Function.prototype.apply.call(sayHello, person3, [40]);  // Hello from Emma, I'm 40

// Пример 2: Обернули call и apply в функции
function sayHello(age) {
    console.log(`Hello from ${this.name}, I'm ${age}`);
}

const person3 = { name: "Emma" };

// Функции-обёртки для call и apply
const callFn = (fn, ctx, ...args) => fn.call(ctx, ...args);
const applyFn = (fn, ctx, args) => fn.apply(ctx, args);

// [callFn, applyFn].forEach(fn => fn(sayHello, person3, 40));

callFn(sayHello, person3, 40)
applyFn(sayHello, person3, [40])
// Ожидаемый вывод:
// Hello from Emma, I'm 40
// Hello from Emma, I'm 40


// Продвинутый уровень (new, прототипы, сложные вызовы)
// 9. Использование new
// Чем отличается User1 от User2?
function User1(name) {
    // в этом примере под капотом функции конструктора создаётся пустой объект {}
    // и this будет равен этому объекту this = {}
    this.name = name;
    // здесь же под капотом в этом объект this записываются все эти свойства, то есть {name: 'Emma'}
    // так же автоматический возвращает this -> return this
}
const user1 = new User1("Emma");

function User2(name) {
    return { name }; // а в этом примере функция конструктор возвращает объект name, здесь нет никакого this
}
const user2 = new User2("Olivia");

console.log(user1.name); // "Emma"
console.log(user2.name); // "Olivia"

console.log(user1); // User1 { name: "Emma" }
console.log(user2); // { name: "Olivia" }

// 10. Прототипное наследование
// Заполни код так, чтобы child.showName() корректно выводил имя.
function Parent(name) {
    this.name = name;
}

Parent.prototype.showName = function () { // Данный метод стал доступен всем инстансам этой функции Parent
    console.log(this.name); // "Sophia"
};

function Child(name, age) {
    Parent.call(this, name); // Вот эта запись тоже не понятна - мы привязываем концекст Child к Parent что ли?
    this.age = age;
}

// Наследование прототипа
// Child.prototype = /* ... */;
Child.prototype = Parent.prototype.__proto__; // Слишком сложная задача для меня не понимаю вообще ничего
Child.prototype.constructor = Child;

const child = new Child("Sophia", 10);
child.showName();

// 11. Композиция с call
// Используй call, чтобы передавать this из superHero в sayName.
const superHero = {
    name: "Superman",
    sayName() {
        console.log(`My name is ${this.name}`);
    }
};

const anotherHero = { name: "Batman" };

// Вызови sayName с контекстом anotherHero
// superHero.sayName( /* ... */ );
superHero.sayName.call( anotherHero ); // My name is Batman
// superHero.sayName( superHero.sayName.call(anotherHero) ); // My name is Batman + My name is Superman

// 12. Потеря контекста и решение через bind
// Почему setTimeout ломает контекст, и как это исправить?
const user = {
    name: "Michael",
    greet() {
        setTimeout(function () {
            console.log(`Hello, my name is ${this.name}`);
        }.bind(this), 1000);
    }
};

user.greet(); // undefined или ошибка
user.greet(); // Теперь, когда через bind привязали конекст -> Hello, my name is Michael
