/**
 * Lexical Scope
 **/

// function init() {
//     let name = "JavaScript closures"; // name is a local variable created by init
//     let a = "aw";
//     function displayName() {
//       // displayName() is the inner function, a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     return displayName;
// }
// init();
  
// var closure = init();
// closure();

// function z() {
//     let a = 10;
//     function y() {
//         let b=22;
//         function x() {
//             console.log(a, b);
//         }
//         return x;
//     }
//     return y;
// }
  
// var closure = z();
// var cl = closure();
// cl();


/**
 * 1
 */

// function x() {
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
//     i=2;
//     console.log("message");
// }
// x();



/**
 * 2
 */

//  function x() {
//     for (var i=0; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("message");
// }
// x();


// function x() {
//     for (let i=0; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("message");
// }
// x();



// function x() {
//     for (var i=0; i<=5; i++){
//         function closure(i) {
//             setTimeout(function(){
//                 console.log(i);
//             }, i*1000);
//         }
//         closure(i);
//     }
//     console.log("message");
// }
// x();


/**
 * Generator
 * When called, generator functions do not initially execute their code. 
 * Instead, they return a special type of iterator, called a Generator. 
 * When a value is consumed by calling the generator's next method, 
 * the Generator function executes until it encounters the yield keyword.
 * 
 * The function can be called as many times as desired, and returns 
 * a new Generator each time. Each Generator may only be iterated once.
 * We can now adapt the example from above. The behavior of this code
 * is identical, but the implementation is much easier to write and read.
 */

// function* generator(num) {
//     yield num + 10;
//     yield num + 20;
//     yield num + 30;
// }
// let gen = generator(10);
// console.log(gen);

// console.log(gen.next());
// console.log(gen.next().value);
// console.log(gen.next().value); // 30
// // console.log(gen);
// console.log(gen.next().value); // 40
// console.log(gen.next().value); // 
// let gen2 = generator(20);
// console.log(gen2.next().value);
// console.log(gen2.next().value);
// console.log(gen2.next().value);


// function* makeRangeGenerator(start = 0, end = Infinity, step = 1) {
//     let iterationCount = 0;
//     for (let i = start; i < end; i += step) {
//       iterationCount++;
//       let a = yield i;
//       console.log(a);    
//       if (a) {
//         i=start;
//       }
//     }
//     return iterationCount;
// }
// let gen = makeRangeGenerator(0, 2)
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next(true).value);
// console.log(gen.next().value);
// // console.log(gen.next(true).value);




/**
 *  Iterator
 * 
 * 
 */
// custom Iterator
// function numbers() {
//     let n = 0;
//     return {
//       next: function () {
//         n += 10;
//         return { value: n, done: false };
//       }
//     };
// }
  
// //   // Create an Iterator
// const number = numbers();
//   console.log(number);
// console.log(number.next()); // {value: 10, done: false}
// console.log(number.next()); // {value: 20, done: false}
// console.log(number.next()); // {value: 30, done: false}


// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let nextIndex = start;
//     let iterationCount = 0;
  
//     const rangeIterator = {
//       next() {
//         let result;
//         if (nextIndex < end) {
//           result = { value: nextIndex, done: false };
//           nextIndex += step;
//           iterationCount++;
//           return result;
//         }
//         return { value: iterationCount, done: true };
//       }
//     };
//     return rangeIterator;
// }

// const it = makeRangeIterator(1, 10, 2);

// let result = it.next();
// while (!result.done) {
//  console.log(result.value); // 1 3 5 7 9
//  result = it.next();
// }

// console.log("Iterated over sequence of size: ", result.value);