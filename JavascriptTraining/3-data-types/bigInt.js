/**
 * BigInt
 * In JavaScript, Number type can only represent numbers less than (2^53 - 1)
 * and more than -(2^53 - 1).
 * However, if you need to use a larger number than that, 
 * you can use the BigInt data type.
 * 
 * A BigInt number is created by appending n to the end of an integer.
 */

// BigInt value
const num1 = 900719925124740998n;
const num2 = 900719925124740998n;
const num3 = 10;


// Adding two big integers
const result1 = num1 + num2;
console.log(result1); // "1801439850249481996n"


// Error! BitInt and number cannot be added
const result2 = num1 + num2 + num3; 
console.log(result2);  // Uncaught TypeError: Cannot mix BigInt and other types
