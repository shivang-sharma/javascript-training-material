// console.log(a); // undefined
// greet(); // error
// console.log(greet); // Hi JS

// // var a = 10;

// function greet() {
//     console.log("Hi Javascript");
// }

// var greet = () => {
//     console.log("Hi Javascript");
// }

// var greet = function () {
//     console.log("Hi Javascript");
// }

// console.log(a);
// greet();
// console.log(greet);

/**
 * Var Scope Related Code
//  */
// var x = 10;
// a();
// b();
// function a () {
//     var x = 2;
//     console.log(x);
// }
// function b () {
//     var x = 20;
//     console.log(x);
// }
// console.log(10);
/**
 * let and const hoisting
 */

// let a = 2;
// const c = 4;
// console.log(a)
// var b = 3;


/**
 * Hositing difference
 */

// console.log(a); // undefined
// var a = 'foo';

// console.log(b); // ReferenceError: can't access lexical declaration 'b' before initialization
// let b = 'baz';

// console.log(c); // ReferenceError: can't access lexical declaration 'c' before initialization
// const c = 'bar';