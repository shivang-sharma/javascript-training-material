/**
 * ERROR HANDLING
 */
/**
 * What is an error object?
 */
// try {
//     greeting("Welcome");
// } catch(err) {
//     console.log(err.name + ": " + err.message);
// }


/**
 * Types of errors that occur in JavaScript?
 */
// Error
// const error = new Error("error message");

// // RangeError
// const pi = 3.14159;
// pi.toFixed(100000);

// ReferenceError
// function sum() {
//     val++;  // ReferenceError: val is not defined
// }
// sum();


// SyntaxError
// if (foo) {  
//     // SyntaxError
//     // the closing curly brace is missing


// TypeError
// const foo = {};

// foo.bar(); // TypeError


// URIError
// decodeURIComponent("%"); // URIError



/**
 * What are the various statements in error handling?
 */

// function errorHandling() {
//     let x = 'a' 
//     try {
//       if (x === "") throw "is empty";
//       if (isNaN(x)) throw "is not a number";
//       console.log("Trying ....")
//       x = Number(x);
//       if (x > 10) throw "is too high";
//       if (x < 5) throw "is too low";
//     } catch (err) {
//       console.log("Error: " + err + ".");
//     } finally {
//         console.log("Finally");
//     }
// }  
// errorHandling(); // Error: is not a number.



