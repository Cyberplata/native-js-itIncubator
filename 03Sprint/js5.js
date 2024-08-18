// Lexical environment, closure, recursion

// let car = "bmw";

// function startEngine() {
//   // const car = "kia";

//   return () => console.log(`Start ${car}`);
// }

// const foo = startEngine();

// car = "audi";

// foo();

// const globalLE = {
// 	environmentRecords: {

// 	},

// 	outer: null
// }

// globalLE {foo: func, a: undefined} -> null

// foo();
// bar();
// baz();

// console.log(a);
// // bar();
// function foo() {
//   console.log("foo");
// }

// const bar = function () {
//   // globalLE {foo: func, bar: func} -> null
//   console.log("bar");
// };

// // bar();

// const baz = () => {
//   console.log("baz");
// };

// // bar();

// var a = "str"; // globalLE {foo: func, a: 'str'} -> null
// let b = 10;
// const c = 20;

// // console.log(a);

// globalLE {} -> null

// let car = 'bmw' // globalLE {car: 'bmw'} -> null

// car = 'kia'// globalLE {car: 'kia'} -> null

// while() {
// 	// whileLE {}

// 	const car = 'audi'
// }

// const arr = []// globalLE {car: 'kia', arr: []} -> null
// const obj = {}// globalLE {car: 'kia', arr: [], obj: {}} -> null

// globalLE {startEngine: func, car: undefined} -> null

// var car = "bmw"; // globalLE {startEngine: func, car: 'bmw'} -> null

// function startEngine() {
//   // startEngineLE {} -> globalLE

//   // const car = "kia";
//   // console.log(`Start ${car}`);

//   return () => console.log(`Start ${car}`);
// }

// const foo = startEngine(); // globalLE {startEngine: func, car: 'bmw', foo: func} -> null

// car = "audi"; // globalLE {startEngine: func, car: 'audi', foo: func} -> null

// foo();

// globalLE {} -> null

// let car = "bmw"; // globalLE {} -> null

// const startEngine = () => {
//   // globalLE {car: 'bmw', startEngine: func} -> null
//   // {} -> globalLE
//   // car = "audi";
//   console.log(`Start ${car}`);
// };

// car = "kia"; // globalLE {car: 'kia', startEngine: func} -> null

// startEngine();

// const App = () => {
// 	const foo = () => {} // appLE {foo: func}
// 	foo(10)
// 	<Button bar={foo} />
// }

// const Button = ({bar}) => {
// 	// buttonLE {bar: func}
// 	bar(20)
// }

// ---------------------------

// globalLE {} -> null
// let count = 0;

// const counterCreator = () => {
//   // counterCreatorLE1 {count} -> globalLE
//   // counterCreatorLE2 {count} -> globalLE
//   let count = 0;

//   return () => {
//     // {} -> counterCreatorLE1
//     // {} -> counterCreatorLE2
//     let count = 0;
//     console.log(++count);
//   };
// };

// const counter1 = counterCreator(); // globalLE {counter: func} -> null
// const counter2 = counterCreator(); // globalLE {counter: func} -> null

// console.log(counter1 === counter2);

// counter1();
// counter1();
// counter1();

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
for (var j = 1; j < 50; j++) {
  // {j: 1}
  // {j: 2}
  setTimeout(() => console.log(j), 1000);
}
