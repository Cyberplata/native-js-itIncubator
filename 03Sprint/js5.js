// Lexical environment, closure, recursion

/*I.Lexical environment ->
В JavaScript у каждой выполняемой функции, блока кода {...} и скрипта есть связанный с ними внутренний (скрытый) объект, называемый лексическим окружением LexicalEnvironment.

Объект лексического окружения состоит из двух частей:
    a)Environment Record – объект, в котором как свойства хранятся все локальные переменные (а также некоторая другая информация, такая как значение this).
    b)Ссылка на внешнее лексическое окружение – то есть то, которое соответствует коду снаружи (снаружи от текущих фигурных скобок).
*/
/*II. hoisting ->
Поднятие или hoisting — - это механизм в JavaScript, в котором переменные и объявления функций, передвигаются вверх своей области видимости перед тем, как код будет выполнен.
*/


//-1-------------------------------------------------------------------------------------------
// let car = "bmw";
//
// function startEngine() {
//   // const car = "kia";
//
//   return () => console.log(`Start ${car}`);
// }
//
// const foo = startEngine();
//
// car = "audi";
//
// foo();


//-2------------------------------------------------------------------------------------------
// const globalLE = {
// 	environmentRecords: {
//
// 	},
//
// 	outer: null
// }

// globalLE {foo: func, a: undefined} -> null

// foo();
// bar();
// baz();

// console.log(a);
// bar();
// function foo() {
//   console.log("foo");
// }
//
// const bar = function () {
//   // globalLE {foo: func, bar: func} -> null
//   console.log("bar");
// };
//
// bar();
//
// const baz = () => {
//   console.log("baz");
// };
//
// bar();

// var a = "str"; // globalLE {foo: func, a: 'str'} -> null
// let b = 10;
// const c = 20;
//
// console.log(a);


//-3-----------------------------------------------------------------------------------------
//-Примеры, что заносится в лексическое окружение и с каким значением
// globalLE {} -> null

// let car = 'bmw' // globalLE {car: 'bmw'} -> null
//
// car = 'kia'// globalLE {car: 'kia'} -> null

// {
//     // le - любые фигурные скобки создают лексическое окружение
// }

// const obj = {
//     // здесь не создаётся le
// }

// while() {
// 	// whileLE {} - здесь создаётся свой le, сам while никак не отображается в globalLE

// 	const car = 'audi'
// }

// const arr = []// globalLE {car: 'kia', arr: []} -> null
// const obj = {}// globalLE {car: 'kia', arr: [], obj: {}} -> null


//-3.1------------------------------------------------------------------------------------------
// // globalLE {startEngine: func, car: undefined} -> null
// startEngine(); // 1.Когда вызывается функция. создаётся своё le
// var car = "bmw"; // globalLE {startEngine: func, car: 'bmw'} -> null
//
// function startEngine() {
//     // startEngineLE {} -> globalLE // 2.И ссылка идёт на глобальное лексическое окружение
//
//     // const car = "kia";
//     console.log(`Start ${car}`);
//
//     // return () => console.log(`Start ${car}`); // 3.При выполнении console.log он идёт сначала в startEngineLE {}, там он не находит переменную car дальше по ссылке переходит в globalLE и там car: undefined. Поэтому в 1ом случае получили "Start undefined". А уже во 2ом случае "Start bmw"
// }
//
// const foo = startEngine(); // globalLE {startEngine: func, car: 'bmw', foo: func} -> null
//
// car = "audi"; // globalLE {startEngine: func, car: 'audi', foo: func} -> null
//
// // foo();


//-3.2--------------------------------------------------------------------------------------------
// Создаётся глобальное le (1) ->
// дальше записывается в globalLE car: 'bmw' (2) ->
// дальше создаём новый ключа foo: func - но это записалась ссылка на функцию (5) ->
// () => console.log(`Start ${car}`) что равно "Start bmw" (4.1) ->
// дальше мы переписываем значение в globalLE car: 'audi' (6)

// // globalLE {startEngine: func, car: undefined} -> null //(1)
// var car = "bmw"; // globalLE {startEngine: func, car: 'bmw'} -> null //(2)
//
// function startEngine() {
//   // startEngineLE {} -> globalLE //(3)
//
//   // const car = "kia";
//   console.log(`Start ${car}`); //(4)
//
//   return () => console.log(`Start ${car}`); //(4.1)
// }
//
// const foo = startEngine(); // globalLE {startEngine: func, car: 'bmw', foo: func} -> null //(5)
//
// car = "audi"; // globalLE {startEngine: func, car: 'audi', foo: func} -> null //(6)
//
// foo(); //(7)


//-3.3--------------------------------------------------------------------------------------------
// globalLE {} -> null

// let car = "bmw"; // globalLE {} -> null
//
// const startEngine = () => {
//     // globalLE {car: 'bmw', startEngine: func} -> null
//     // startEngineLE{} -> globalLE
//     // car = "audi";
//     console.log(`Start ${car}`);
// };
//
// car = "kia"; // globalLE {car: 'kia', startEngine: func} -> null
//
// startEngine(); // Объект лексического окружения startEngineLE создаётся только когда вызывается функция startEngineLE{} -> globalLE, но ссылка всегда будет {} -> globalLE

// Замыкание - это способность функции запомнить своё внешнее лексическое окружение (то есть это наша ссылка на LE, выше в примерах {} -> globalLE)
// () => {} // это тоже пример замыкания


//-3.4--------------------------------------------------------------------------------------------
// const App = () => {
// 	const foo = () => {} // appLE {foo: func}
// 	foo(10)
// 	<Button bar={foo} />
// }
//
// const Button = ({bar}) => {
// 	// buttonLE {bar: func}
// 	bar(20)
// }


//-3.5-Пример с 1, 2, 3------------------------------------------
// // globalLE {} -> null
// const counterCreator = () => {
//     // counterCreatorLE {} -> globalLE
//     let count = 0; // counterCreatorLE {count: 0} -> globalLE (B)
//
//     // I вариант записи функции и return
//     const foo = () => {
//         console.log(++count)
//     }
//     return foo;
//
//     // // II вариант записи функции и return
//     // return () => {
//     //     // {} -> counterCreatorLE // запомнит ссылку на объект counterCreatorLE {} (A)
//     //     console.log(++count);
//     // };
// };
//
// const counter = counterCreator(); // globalLE {counter: func} -> null
// // На каждый вызов создаётся свой объект LE (A) {} -> counterCreatorLE, но после отработки этот объект удаляется -> counterCreatorLE, а вот объект (B) не удаляется, так как есть ссылка на этот объект -> counterCreatorLE
// counter(); //1
// counter(); //2
// counter(); //3


//-3.6-Пример с 1, 1, 1---------------------------------------------------
// globalLE {} -> null
const counterCreator = () => {
    // counterCreatorLE {} -> globalLE
    let count = 0; // counterCreatorLE {count: 0} -> globalLE (B)

    return () => {
        // {} -> counterCreatorLE // запомнит ссылку на объект counterCreatorLE {} (A)
        let count = 0;
        console.log(++count);
    };
};

const counter = counterCreator(); // globalLE {counter: func} -> null
counter(); //1
counter(); //1
counter(); //1



//-3.7-------------------------------------------------------------------------------------------
// // globalLE {} -> null
// let count = 0;
//
// const counterCreator = () => {
//   // counterCreatorLE1 {count} -> globalLE
//   // counterCreatorLE2 {count} -> globalLE
//   let count = 0;
//
//   return () => {
//     // {} -> counterCreatorLE1
//     // {} -> counterCreatorLE2
//     let count = 0;
//     console.log(++count);
//   };
// };
//
// const counter1 = counterCreator(); // globalLE {counter: func} -> null
// const counter2 = counterCreator(); // globalLE {counter: func} -> null
//
// console.log(counter1 === counter2);
//
// counter1();
// counter1();
// counter1();
//
// counter2();
// counter2();
// counter2();

// ---------------------------

// 2(4) --> 2 * 2(3) --> 2 * 2 * 2(2) --> 2 * 2 * 2 * 2(1)

// const pow = (x, n) => {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// };

// console.log(pow(2, 8000));

// 5! --> 5 * 4! --> 5 * 4 * 3! --> 5 * 4 * 3 * 2! --> 5 * 4 * 3 * 2 * 1!

// let count = 0;

// const factorial = (n) => {
//   console.log(++count);
//   if (n === 1) {
//     return n;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(8000));

// globalLE {j: 1}

// let j = 1;
// for (var j = 1; j < 50; j++) {
//   // {j: 1}
//   // {j: 2}
//   setTimeout(() => console.log(j), 1000);
// }
