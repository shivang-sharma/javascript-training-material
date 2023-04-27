/**
 * The if Statement
 * Use the if statement to specify a block of
 * JavaScript code to be executed if a condition is true.
 */
// Syntax:
// if (condition) {
//     //  block of code to be executed if the condition is true
// }

// let hour = 21;
// let greeting = "Good night";
// if (hour < 18 && hour > 5) {
//     greeting = "Good day";
// }
// console.log(greeting);

// Syntax:
// if (condition) {
//     //  block of code to be executed if the condition is true
//   } else {
//     //  block of code to be executed if the condition is false
//   }
// let greeting;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting);

// Syntax:
// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }

// let greeting;
// if (hour < 10) {
//     greeting = "Good morning";
// } else if (hour < 20) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting);

/**
 * The switch statement is used to perform 
 * different actions based on different conditions.
 * Use the switch statement to select one of many code blocks to be executed.
 * This is how it works:
 * The switch expression is evaluated once.
 * The value of the expression is compared with the values of each case.
 * If there is a match, the associated block of code is executed.
 * If there is no match, the default code block is executed.
 * Switch cases use strict comparison (===).
 * The values must be of the same type to match.
 * A strict comparison can only be true if the operands are of the same type.
 */

// Syntax
// switch(expression) {
//     case x:
//         // code block
//         break;
//     case y:
//         // code block
//         break;
//     default:
//         // code block
// }
// let day;
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
// }
// console.log(day);

/**
 * The break Keyword
 * When JavaScript reaches a break keyword, it breaks out of the switch block.
 * This will stop the execution inside the switch block.
 * It is not necessary to break the last case in a switch block. 
 * The block breaks (ends) there anyway.
 * 
 * If you omit the break statement, the next case will be executed even 
 * if the evaluation does not match the case.
 * 
 */
// let day;
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
// }
// console.log(day);  // Tues
/**
 * The default Keyword
 * The default keyword specifies the code to run if there is no case match:
 */
// let text;
//  switch (new Date().getDay()) {
//     case 6:
//         text = "Today is Saturday";
//         break;
//     case 0:
//         text = "Today is Sunday";
//         break;
//     default:
//         text = "Looking forward to the Weekend";
// }
// console.log(text);

// The default case does not have to be the last case in a switch block:

// switch (new Date().getDay()) {
//     default:
//       text = "Looking forward to the Weekend";
//       break;
//     case 6:
//       text = "Today is Saturday";
//       break;
//     case 2:
//       text = "Today is Sunday";
// }
// console.log(text);

/**
 * Common Code Blocks
 * Sometimes you will want different switch cases to use the same code.
 * In below example case 4 and 5 share the same code block, and 0 and 6 
 * share another code block:
 */
// let text;
//  switch (new Date().getDay()) {
//     case 4:
//     case 5:
//       text = "Soon it is Weekend";
//       break;
//     case 0:
//     case 6:
//       text = "It is Weekend";
//       break;
//     default:
//       text = "Looking forward to the Weekend";
// }
// console.log(text);

/**
 * For Loop
 * Loops are handy, if you want to run the same code over and over again,
 * each time with a different value.
 * 
 * SYNTAX:
 * for (expression 1; expression 2; expression 3) {
 *   // code block to be executed
 * }
 */
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]; 
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }


/**
 * The For In Loop
 * for (key in object) {
 *   // code block to be executed
 * }
 */
 const person = {fname:"John", lname:"Doe", age:25};

//  let text = "";
//  for (let x in person) {
//     console.log(x);
//    text += person[x];
//  }

//  console.log(text);
// for (let x in cars) {
//     console.log(cars[x]);
// }

/**
 * The For Of Loop
 * The JavaScript for of statement loops through the values 
 * of an iterable object.
 * It lets you loop over iterable data structures such as 
 * Arrays, Strings, Maps, NodeLists, and more:
 * 
 * SYNTAX:
 * for (variable of iterable) {
 *   // code block to be executed
 * }
 */
//  const cars = ["BMW", "Volvo", "Mini"];

//  let text = "";
//  for (let x of cars) {
//    text += x;
//  }
//  console.log(text);

// let language = "JavaScript";
// for (let x of language) {
//     console.log(x);
// }

/**
 * The While Loop
 * The while loop loops through a block of code as long as a 
 * specified condition is true.
 * SYNTAX:
 * while (condition) {
 *   // code block to be executed
 * }
 */
// let i =0;
// let text = "";
// while (i < 10) {
//     text += "\nThe number is " + i;
//     i++;
// }
// console.log(text);

/**
 * The Do While Loop
 * The do while loop is a variant of the while loop. 
 * This loop will execute the code block once, before checking if 
 * the condition is true, then it will repeat the loop as long as 
 * the condition is true.
 * 
 * SYNTAX:
 * do {
 *   // code block to be executed
 * } while (condition);
 */
// let i = 11;
// let text="";
// do {
//     text += "\nThe number is " + i;
//     i++;
// }while (i < 10);
// console.log(text);