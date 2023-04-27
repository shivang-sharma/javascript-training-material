/**
 * All variables are accessible within functions.
 */
// function variableScope() {
//     var x = 10;
//     let y = 20;
//     const z = 30;

//     console.log(x); // 10
//     console.log(y); // 20
//     console.log(z); // 30
// }

// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // ReferenceError: z is not defined

// variableScope();


/**
 *  Redeclaring variable
 */
// var a = 'foo';
// var a = 'bar';
// console.log(a); // "bar"

// let b = 'baz';
// let b = 'qux'; // Uncaught SyntaxError: Identifier 'b' has already been declared



/**
 * Reassigning const vs let
 */

// // This is ok.
// let a = 'foo';
// a = 'bar';
// console.log(a); // bar

// // // This causes an exception.
// const b = 'baz';
// b = 'qux';
// console.log(b) // TypeError: Assignment to constant variable.