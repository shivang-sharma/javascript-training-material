// Question-1
// [{ msg: "Hello" }] =>  0X2nsal
// a => 0X2nsal
// b => 0X2nsal
// const a = { msg: "Hi" };
// const b = a;
// b.msg = "Hello";
// console.log(a, b); // Hi Hi


// Question-2
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// console.log(a + b); // 1, 2, 34, 5, 6


// Question-3
// const arr = [10, 20, 30];
// arr.push(40);  
// console.log(arr) // 10, 20, 30, 40

// const arr1 = [10, 20, 30];
// arr1 = []; 
// console.log(arr1) // Error

// const arr2 = [10, 20, 30];
// arr2[2] = 50; 
// console.log(arr2) // 10, 20, 50


// Question-4
// var obj = {name: "neha", getName: function() {console.log(this.name);}}

// var getName = obj.getName;
// var obj2 = {name: "naina", getName};
// obj.getName(); // neha
// obj2.getName(); // naina


//Question-5
// const person = {name: "neha"};
// const array = [person, person, person];

// array[1].name = "";
// console.log(array[0].name); // neha


//Question-6
// var a = 1;

// function b() {
//   a = 10;
//   return;
//   function a() {}
// }
// b();
// console.log(a); // 10


// Question-7
// console.log('A');

// setImmediate(()=>{console.log('setImmediate')});

// process.nextTick(()=>{console.log('nextTick')});

// setTimeout(()=>{
//   console.log('setTimeout');
// },0);

// console.log('C');




// Question-8
// console.log(1);

// setTimeout(() => { console.log("setTimeout")}, 0);

// console.log(2);

// new Promise((resolve, reject) => {
//    setTimeout(() => {
//      console.log("Promise");
//      resolve("done")}, 0);
// });

// console.log(3);
// 1, 2, 3, setTimeout, Promise


// Question-9
// async function something() {
//     console.log("1");
  
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("2");
//         resolve("done!");
//       }, 100);
//     });
  
//     await promise;
  
//     setTimeout(() => {
//       console.log("3");
//     }, 100);
//     console.log("4");
// }
  
// something(); // =>
// console.log("5"); // 
// // 1, 2, 4, 5, 3
// // 1, 4, 5, 2, 3
// // 1, 5, 2, 4, 3



//Question-10
// console.log(+"Hello"); // Hello


// Question-11
// var result;
// for (var i = 5; i > 0; i--) {
//   result = result + i;
// }
// console.log(result); // 15


// Question-12
// var a = 1.2;
// console.log(typeof a); // Number


// Question-13
// var x = 10;
// if (x) {
//     console.log("Hi");
//   let x = 4;
// }
// console.log(x);
// Hi 10
// Hi 0

// Question-14
// console.log(0.1 + 0.2 == 0.3); //NaN, False, True, (precedent of operators in javascript)


// Question-15
// console.log(1 + -"1" + 2); 


// Question-16
// (function (x) {
//     return (function (y) {
//       console.log(x);
//     })(10);
// })(20); 


// Question-17
// var num = 20;
// var getNumber = function () {
//   console.log(num);
//   var num = 10;
// };
// getNumber(); // 20, undefind, undefined


// Question-18
// function f1() {
//     num = 10;
// }
// f1();
// console.log("window.num: " + window.num); // 


// Question-19
// console.log("(null + undefined): " + (null + undefined)); 


// Question-20
// (function () {
//     var a = (b = 3);
// })();
  
// console.log("value of a : " + a); // 3
// console.log("value of b : " + b); // 3


// Question-21
// var y = 1;
// if (function f() {}) {
//   y += typeof f; //  1 + undefined => NaN
// }
// console.log(y);  // number, 



// // Question-22
// var k = 1;
// if (1) {
//   eval(function foo() {});
//   k += typeof foo;
// }
// console.log(k); 


// Question-23
// var k = 1;
// if (1) {
//   function foo() {}
//   k += typeof foo;
// }
// console.log(k); // 1function


// Question-24
// console.log("(-1 / 0): " + -1 / 0); // -Infinity
// console.log("(1 / 0): " + 1 / 0); // Infinity
// console.log("(0 / 0): " + 0 / 0); // Infinity
// console.log("(0 / 1): " + 0 / 1); // 0


// Question-25
// var a = 4;
// var b = "5";
// var c = 6;

// console.log("(a + b): " + (a + b)); // 9, 45, 
// console.log("(a - b): " + (a - b));  // -1
// console.log("(a * b): " + a * b); // 55555, 5*5*5*5*5,5*5*5*5, 20 
// console.log("(a / b): " + a / b); // 0.8
// console.log("(a % b): " + (a % b));  // 4


// Question-26
// console.log("MAX : " + Math.max(10, 2, NaN)); 
// console.log("MAX : " + Math.max()); 


// Question-27
// (function () {
//     var a = (b = 3);
//   })();
  
// console.log("a defined? " + (typeof a !== "undefined")); // false
// console.log("b defined? " + (typeof b !== "undefined")); //false


// // Question-28
// var myObject = {
//     foo: "bar",
//     func: function () {
//       var self = this;
//       console.log("outer func:  this.foo = " + this.foo); 
//       console.log("outer func:  self.foo = " + self.foo); 
//       (function () {
//         console.log("inner func:  this.foo = " + this.foo); // undefined
//         console.log("inner func:  self.foo = " + self.foo); 
//       })();
//     },
// };
// myObject.func();



// Question-29
// (function () {
//     console.log(1);
//     setTimeout(function () {
//       console.log(2);
//     }, 1000);
//     setTimeout(function () {
//       console.log(3);
//     }, 0);
//     console.log(4);
//   })();


// Question-30
// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
// }


// Question-31
// for (var i = 0; i < 5; i++) {
//     (function (x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     })(i);
// }


// Question-32
// console.log("0 || 1 = " + (0 || 1)); 
// console.log("1 || 2 = " + (1 || 2)); 
// console.log("0 && 1 = " + (0 && 1)); 
// console.log("1 && 2 = " + (1 && 2)); 

// Question-33
// var a = {},
//   b = { key: "b" },
//   c = { key: "c" };

// a[b] = 123;
// a[c] = 456;
// console.log(a[b]); 



// Question-34
// console.log(
//     (function f(n) {
//       return n > 1 ? n * f(n - 1) : n;
//     })(10)
// );


// Question-35
// var hero = {
//     _name: "John Doe",
//     getSecretIdentity: function () {
//       return this._name;
//     },
// };
// var stoleSecretIdentity = hero.getSecretIdentity;
  
// console.log(stoleSecretIdentity()); 
// console.log(hero.getSecretIdentity()); 



// Question-36
// var length = 10;
// function fn() {
//   console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function (fn) {
//     fn();
//     arguments[0]();
//   },
// };

// obj.method(fn, 1);




// Question-37
// (function () {
//     try {
//       throw new Error();
//     } catch (x) {
//       var x = 1,
//         y = 2;
//       console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();


// Question-38
// var x = 21;
// var girl = function () {
//   console.log(x); 
//   var x = 20;
// };
// girl();


// Question-39
// console.log(1 < 2 < 3); 
// console.log(3 > 2 > 1); 


// Question-40
// console.log(typeof typeof 1); 


// Question-41
// var b = 1;
// function outer() {
//   var b = 2;
//   function inner() {
//     b++;
//     var b = 3;
//     console.log(b);
//   }
//   inner();
// }
// outer();