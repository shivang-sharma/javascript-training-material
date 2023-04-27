/**
 * Functions
 * A JavaScript function is defined with the function keyword, followed
 * by a name, followed by parentheses (). 
 * Function names can contain letters, digits, underscores, and dollar 
 * signs (same rules as variables).
 * The parentheses may include parameter names separated by commas:
 * (parameter1, parameter2, ...)
 * The code to be executed, by the function, is placed inside curly brackets: {}
 * Syntax:
 * function name(parameter1, parameter2, parameter3) {
 *   // code to be executed
 * }
 * Function parameters are listed inside the parentheses () in the function 
 * definition.
 * Function arguments are the values received by the function when it is invoked.
 * Inside the function, the arguments (the parameters) behave as local variables.
 */
// Function to compute the product of p1 and p2
// function myFunction(p1, p2) {
//     // console.log(arguments)
//     // console.log(new.target);
//     return p1 * p2;
// }
// console.log(myFunction(2, 3));

/**
 * Arrow functions
 * Unlike regular functions, arrow functions do not have their own this.
 * The value of this inside an arrow function remains the same throughout
 * the lifecycle of the function and is always bound to the value of this
 * in the closest non-arrow parent function.
 * 
 */

// let fun = (p1, p2) => {

//     // console.log(arguments.length);
//     // console.log(new.target);
//     return p1*p2;
// }
// console.log(fun(1, 32));
// console.log(myFunction(2, 3, 4, 5,6 ,7))

/**
 *  Arrow Function with No Argument
 */
//  let greet = () => console.log('Hello');
//  greet(); // Hello

 /**
  * Arrow Function with One Argument
  */
//   let greet = x => console.log(x);
//   greet('Hello'); // Hello 

/**
 * Arrow Function as an Expression
 */
//  let age = 25;

//  let welcome = (age < 18) ?
//    () => console.log('Baby') :
//    () => console.log('Adult');
 
//  welcome(); // Adult

 /**
  * Multiline Arrow Functions
  */
//   let area = (r) => {
//     const pi = 3.14;
//     return pi * r * r;
//   }
  
//   let result = area(10);
//   console.log(result); // 314


/**
 * What is the benefit of using the arrow syntax for a method in a constructor?
 * 
 */

//  const Person = function(firstName) {
//     this.firstName = firstName;
//     this.sayName1 = function() { console.log(this.firstName); };
//     this.sayName2 = () => { console.log(this.firstName); };
//   };
  
//   const john = new Person('John');
//   const dave = new Person('Dave');
  
//   john.sayName1(); // John
//   john.sayName2(); // John
  
//   // The regular function can have its 'this' value changed, but the arrow 
//   // function cannot
//   john.sayName1.call(dave); // Dave (because "this" is now the dave object)
//   john.sayName2.call(dave); // John
  
//   john.sayName1.apply(dave); // Dave (because 'this' is now the dave object)
//   john.sayName2.apply(dave); // John
  
//   john.sayName1.bind(dave)(); // Dave (because 'this' is now the dave object)
//   john.sayName2.bind(dave)(); // John
  
//   var sayNameFromWindow1 = john.sayName1;
//   sayNameFromWindow1(); // undefined (because 'this' is now the window object)
  
//   var sayNameFromWindow2 = john.sayName2;
//   sayNameFromWindow2(); // John


/**
 * Difference between Function, Method, and Constructor calls in JavaScript?
 */

// Functions

// function display(name) {
//     return "Hello " + name;
// }
  
// console.log(display("World")); // "Hello World"

// Methods
// var obj = {
//     display : function() {
//       return "Hello " + this.name;
//     },
//     name: 'Minali Peri'
// }
// console.log(obj.display());  // "Hello Minali Peri"



// Constructor
// function Employee(name, age) {
//     this.name = name;
//     this.age = age;
// }
  
// class Employee {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// var emp1 = new Employee('Shivang Sharma', 22);
// console.log(emp1.name);
// console.log(emp1.age);

/**
 * Unlike function calls and method calls, a constructor call
 * new Employee('Drishya Sama', 28) creates a new object and 
 * passes it as the value of this, and implicitly returns the
 * new object as its result. The primary role of the constructor
 * function is to initialize the object.
 */

/**
 * When you should not use arrow functions in ES6?
 */

// 1. Object methods:
// Usin arrow function
// const counter = {
//     count: 0,
//     next: () => ++this.count,
//     current: () => this.count
// };
// const counter = {
//     count: 0,
//     next: function (){ return ++this.count},
//     current: function () { this.count }
// };
  
// console.log(counter.next()); // NaN
// console.log(counter.current()); // NaN

// 2. Event handlers:
// let button = document.getElementById('press');

// button.addEventListener('click', () => {
//   this.classList.toggle('on');
// });
// button.addEventListener('click', function() {
//     console.log(this.classList)
//     this.classList.toggle('on');
// });

// 3. Prototype methods:
function Counter() {
    this.count = 0;
}

// Counter.prototype.next = () => {
//     return ++this.count;
// };

// Counter.prototype.current = () => {
//     return this.count;
// };
// Counter.prototype.next = function () {
//     return ++this.count;
// };

// Counter.prototype.current = function () {
//     return this.count;
// };
// let c = new Counter();
// console.log(c.count);
// console.log(c.next());
// console.log(c.current());

/**
 * 4. Functions that use the arguments object:
 */
//  const concat = (separator) => {
//     let args = Array.prototype.slice.call(arguments, 1);
//     return args.join(separator);
// }
// console.log(concat());

/**
 * What is a first class function?
 * What is a higher order function?
 */
// Example 01: Assign a function to a variable
// const message = function() {
//     console.log("Hello World!");
//  }
 
// message(); // Invoke it using the variable

// Pass a function as an Argument
// function sayHello() {
//     return "Hello, ";
// }
// function greeting(helloMessage, name) {
//    console.log(helloMessage() + name);
// }
// // Pass `sayHello` as an argument to `greeting` function
// greeting(sayHello, "JavaScript!");

// Return a function
// function sayHello() {
//     return function() {
//         console.log("Hello!");
//     }
// }
// // Using double parentheses
// console.log(sayHello())
// sayHello()();


//  Using a variable
// const sayHello = function() {
//     return function() {
//        console.log("Hello!");
//     }
// }
// const myFunc = sayHello();
// myFunc();

/**
 * What is currying function?
 */

// // Normal function
// const add = (a, b, c) => {
//     return a + b + c;
// };
// console.log(add(10, 10, 10)); // 30
  
//   // Currying function
// const addCurry = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         };
//     };
// };
// console.log(addCurry(20)(20)(20)); // 60

/**
 * Example: Pure Function
 * It is a pure function because you always get a 
 * Hello <name> as output for the <name> pass as an input.
 */
// Pure Function

// function sayGreeting(name) {
//     return `Hello ${name}`;
// }
  
// console.log(sayGreeting("World"));

/**
 * Example: Not Pure Function
 * The function's output now depends on an outer state called greeting.
 * What if someone changes the value of the greeting variable to Hola? 
 * It will change the output of the sayGreeting() function even when 
 * you pass the same input.
 */
//  let greeting = "Hello";

//  function sayGreeting(name) {
//    return `${greeting} ${name}`;
//  }



/**
 * Memoization
 */

// Memoized function to Add Number

// const memoizedAdd = () => {
//     let cache = {};
//     return (number) => {
//         if (number in cache) {
//             console.log('Fetching from cache: ');
//             return cache[number];
//         }else {
//             console.log('Calculating result: ');
//             let result = number + 10;
//             cache[number] = result;
//             return result;
//         }
//     }
// }
// // // returned function from memoizedAdd
// const sum = memoizedAdd();

// console.log(sum(10)); // Calculating result: 20
// console.log(sum(10)); // Fetching from cache: 20


/**
 * The difference between Call, Apply, and Bind
 */

// Call
// const employee1 = { firstName: "Shivang", lastName: "Sharma" };
// const employee2 = { firstName: "Aarush", lastName: "Krishna" };

// function say(greeting) {
//   console.log(greeting + " " + this.firstName + " " + this.lastName);
// }
// say("Hello");
// say.call(employee1, "Hi");    // Hi Shivang Sharma
// say.call(employee2, "Hello"); // Hello Aarush Krishna



// Apply
// const employee1 = { firstName: "Shivang", lastName: "Sharma" };
// const employee2 = { firstName: "Aarush", lastName: "Krishna" };

// function say(greeting) {
//   console.log(greeting + " " + this.firstName + " " + this.lastName);
// }

// say.apply(employee1, ["Hi"]);    // Hi Shivang Sharma
// say.apply(employee2, ["Hello"]); // Hello Aarush Krishna 



// // Bind
// const employee1 = { firstName: "Shivang", lastName: "Sharma" };
// const employee2 = { firstName: "Aarush", lastName: "Krishna" };

// function say(greeting) {
//   console.log(greeting + " " + this.firstName + " " + this.lastName);
// }

// var sayEmployee1 = say.bind(employee1);
// var sayEmployee2 = say.bind(employee2);

// sayEmployee1("Hi");    // Hi Shivang Sharma 
// sayEmployee2("Hello"); // Hello Aarush Krishna 



/**
 * Anonymous function
 */

//  Example 01: Anonymous function

//  let show = function () {
//    console.log("Anonymous function");
//  };
//  show();


//  Example 02: anonymous functions as arguments
 
// setTimeout(function () {
//    console.log("Execute later after 1 second");
// }, 1000);


// Example 03: Immediately invoked function execution
 
//  const person = {
//    firstName: "Shivang",
//    lastName: "Sharma"
//  };

//  let name = (function () {
//    console.log(person.firstName + " " + person.lastName);
//  })(person);

//  Example 04: Arrow functions
 
//  let add = (a, b) => a + b;
 
//  console.log(add(10, 20)); // 30

//  foo(); // TypeError: foo is not a function

 /**
  * Explain the difference between function foo() {} and var foo = function() {}?
  */


// 1. Function Declaration:
// foo(); // Function Declaration Example!

// function foo() {
//   console.log("Function Declaration Example!");
// }



// 2. Function Expression:
// foo(); // TypeError: foo is not a function

// var foo = function() {
//   console.log(typeof foo); // function
// };
// console.log(typeof foo);     // undefined

/**
 * Q 9.18. When to use function declarations and expressions in JavaScript?
 */

//  Function Declarations:
//  A declared function is "saved for later use", and will be executed later,
//  when it is invoked (called).

 // Function declaration
//  function add(num1, num2) {
//      return num1 + num2;
//  }
 // function is only declared here. For using it, 
 // it must be invoked using function name. e.g add(10, 20);


// Function Expression:
// A function expression can be stored in a variable:
// Function expression
// var add = function (num1, num2) {
// 	return num1 + num2;
// };
// After a function expression has been stored in a variable, 
// the variable can be used as a function. Functions stored in 
// variables do not need function names. They are always 
// invoked (called) using the variable name.


