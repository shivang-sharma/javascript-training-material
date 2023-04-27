/**
 * How to compare two objects in javascript?
 */
//  const obj1 = { id: 100, age:22 };
//  const obj2 = { id: 100, age:25 };
 

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
// console.log(obj1.age < obj2.age); // true

/**
 * How do you get enumerable key and value pairs?
 */

//  const object = {
//     a: 'Good morning',
//     b: 100
//   };
  
//   for (let [key, value] of Object.entries(object)) {
//     console.log(`${key}: ${value}`); // a: 'Good morning' b: 100
//   }


/**
 * Prototypal inheritance
 */
// // // Parent Object
// let ParentUser = {
//     talk: true,
//     Canfly() {
//       return "Sorry, Can't fly";
//     },
// };
  
// // // Child Object
// let ChildUser = {
//     CanCode: true,
//     CanCook() {
//         return "Can't say";
//     },
//     //  Inheriting the properties and methods of Parent Object
//     __proto__: ParentUser
// };
// console.log(ChildUser);

// // // Property of Parent Object
// console.log("Can a User talk?: " + ChildUser.talk);

// // Method of ParentUser
// console.log("Can a User fly?: " + ChildUser.Canfly());

// // Property of ChildUser
// console.log("Can a User code?: " + ChildUser.CanCode);

// // Method of ChildUser
// console.log("Can a User cook?: " + ChildUser.CanCook());

// console.log(ChildUser);
// console.log(ChildUser.__proto__.a = "a");
// console.log(ChildUser);
/**
 * What is the difference between prototype and proto in JavaScript?
 */
// __proto__
// function Employee(id, name) {
//     this.id = id;
//     this.name = name;
// }
// const employee = new Employee(1090, "Sarvesh Ghose");

// // // Object have proto property
// Employee.prototype.sayHello = function(){console.log("Hello")};
// employee.__proto__.sayHi = function(){console.log("Hi")};
// console.log(Employee.prototype)
// console.log(employee.__proto__)


// // console.log(Employee.prototype);
// // console.log(employee.__proto__);


// // // Also if apply strict equal to check
// // // if both point at the same
// // // location then it will return true.
// console.log(Employee.prototype === employee.__proto__)



// Prototype

// // Constructor function
// function Employee(id, name) {
//     this.id = id;
//     this.name = name;
// }
  
// //   // Objects
// const employee = new Employee(3325, "Karishma Som");
  
// //   // Prototype
// Employee.prototype.getName = function () {
//     return this.name;
// };
  
// // // Function call using object
// console.log(employee.getName());



/**
 * Differences between ES6 class and ES5 function constructors
 * 
 */

//  ES5 Function Constructor
// function Person(name) {
//     this.name = name;
// }
// function Student(name, studentId) {
//     // Call constructor of superclass to initialize superclass-derived members.
//     Person.call(this, name);
  
//     // Initialize subclass's own members.
//     this.studentId = studentId;
// }
// // console.log(Person.prototype);
// // console.log(Student.prototype);
// Student.prototype = Object.create(Person.prototype);
// console.log(Student.prototype);
// Student.prototype.constructor = Student;
// console.log(Student.prototype);
// console.log(new Student("shivang", 323));


// ES6 Class
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Student extends Person {
//     constructor(name, studentId) {
//       super(name);
//       this.studentId = studentId;
//     }
// }
// console.log(Person.prototype);
// console.log(Student.prototype);
// console.log(new Student("shivang", 323));



/**
 * Class expression in es6 class?
 */

// // // Unnamed Class
// let Rectangle = class {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
// };
// console.log(Rectangle.name); // Rectangle
  
//   // Named Class
// let Triangle = class TriangleClass {
//     constructor(base, height) {
//       this.base = base;
//       this.height = height;
//     }
// };
// console.log(Triangle.name); // TriangleClass


/**
 * Difference between private, public, and static variables?
 */
// Constructor Function
// function MyClass () {
//     var privateVariable = "I am private!";  // Private variable 
//     this.publicVariable = "I am public!";  // Public variable 
  
//     this.publicMethod = function () {  // Public Method
//       return privateVariable;
//     };
// }
  
// // // Instance method will be available to all instances but only load once in memory 
// console.log(MyClass.prototype)
// // // Static variable shared by all instances
// MyClass.staticProperty = "I am static!";

// var myInstance = new MyClass();
// console.log(myInstance.publicVariable)
// console.log(myInstance.publicMethod());
// console.log(MyClass.staticProperty);


/**
 * Difference between Class Inheritance and Prototypical Inheritance?
 */

/**
 * How do you create an object with the prototype?
 */
// const user = {
//     name: "Shivang Sharma",
//     printInfo: function () {
//       console.log(`My name is ${this.name}.`);
//     }
// };
  
// const admin = Object.create(user);
// admin.name = "Aniket";
// admin.printInfo();
// console.log(admin)


/**
 * How to use constructor functions for inheritance in JavaScript?
 */
//  Let say we have Person class which has name, age, salary properties
//  and incrementSalary() method.

// //  // Functions Constructor
//  function Person(name, age, salary) {
//    this.name = name;
//    this.age = age;
//    this.salary = salary;
//    this.incrementSalary = function (byValue) {
//      this.salary = this.salary + byValue;
//    };
//  }
// // // Now we wish to create Employee class which contains all the properties of 
// // // Person class and wanted to add some additional properties into Employee class.

// function Employee(company){
// 	this.company = company;
// }

// // // Prototypal Inheritance 
// Employee.prototype = new Person("Sundar Pichai", 24, 5000);

// // // In the example above, Employee type inherits from Person. 
// // // It does so by assigning a new instance of Person to Employee prototype.
// // // After that, every instance of Employee inherits its properties and methods
// // // from Person.

// // // Prototypal Inheritance 
// // Employee.prototype = new Person("Sundar Pichai", 24, 5000);

// var employee = new Employee("Google");

// console.log(employee instanceof Person); // true
// console.log(employee instanceof Employee); // true




/**
 * Prototype chain
 */

// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }
// // Prototype chaining
// Person.prototype.getFullName = function () {
//     return this.firstName + " " + this.lastName;
// };
  
// // create an instance of the Person class
// const person = new Person("Shivang", "Sharma", 22);

// console.log(person.hasOwnProperty("firstName"));
// console.log(person.hasOwnProperty("getFullName"));
// console.log(person.getFullName());



/**
 * Accessors
 */
// var user = {
//     firstName: "John",
//     lastName : "Abraham",
//     language : "en",
//     get lang() {
//       return this.language;
//     },
//     set lang(lang) {
//         this.language = lang;
//     }
// };
  
// console.log(user.lang);
// user.lang = 'fr';
// console.log(user.lang);


/**
 * Define Property
 */
//  const newObject = {};

//  Object.defineProperty(newObject, 'newProperty', {
//    value: 100,
//    writable: false
//  });
 
//  console.log(newObject.newProperty); // 100
 
//  newObject.newProperty = 200;
//  console.log(newObject.newProperty); // 100



/**
 * Adding getters and setters using the defineProperty method?
 * 
 */

 var counterObj = {counter : 0};

//  // Define getters
 Object.defineProperty(counterObj, "increment", {
   get : function () { return this.counter++;}
 });
 Object.defineProperty(counterObj, "decrement", {
   get : function () {return this.counter--;}
 });
 
 // Define setters
 Object.defineProperty(counterObj, "add", {
   set : function (value) {this.counter += value;}
 });
 Object.defineProperty(counterObj, "subtract", {
   set : function (value) {this.counter -= value;}
 });
 
 console.log(counterObj.counter);
 counterObj.add = 10;
 console.log(counterObj.counter);
 counterObj.subtract = 5;
 console.log(counterObj.counter); // 5
 counterObj.increment;
 console.log(counterObj.counter); // 6
 counterObj.decrement;
 console.log(counterObj.counter); // 5
 console.log(counterObj.increment) //  5
 console.log(counterObj.counter); // 6


/**
 * Decorator
 */
// function admin(isAdmin) {
//     return function(target) {
//         target.isAdmin = isAdmin;
//     }
// }
  
// @admin(true)
// class User() {
// }
// console.log(User.isAdmin); // true
  
// @admin(false)
// class User() {
// }
// console.log(User.isAdmin); // false