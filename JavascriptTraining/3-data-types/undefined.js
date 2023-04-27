/**
 * undefined:
 * The undefined data type represents the placeholder value to the variable
 * that is not initialized.
 * If a variable is declared but the value is not initialized,
 * then the value of that variable will be undefined.
 * 
 * Converted to NaN while performing primitive operations
 */

let firstName;
console.log(firstName); // undefined

let lastName = undefined;
console.log(lastName); // undefined

var user;    // Value is undefined, type is undefined
console.log(typeof(user)) //undefined

console.log(Number(undefined));