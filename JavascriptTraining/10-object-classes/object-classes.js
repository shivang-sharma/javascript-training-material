/**
 * What are the possible ways to create objects in JavaScript? 
 */
// 1. Object Constructor:
// let object = new Object();
// console.log(object);

// 2. Object create method:
// The create method of Object creates a new object by passing
//  the prototype object as a parameter

// let object = Object.create({fname: "Shivang", lname:"Sharma"});
// console.log(object);

// 3. Object Literal:
// The object literal syntax is equivalent to create method when it
// passes null as parameter

// let person = {};
// console.log(person);

// 4. Function Constructor:
// Create any function and apply the new operator to create object instances,

// function Person(name) {
//     let object = {};
//     object.name = name;
//     object.age = 26;
   
//     return object;
// }
   
// let person = new Person("Alex");
// console.log(person);

// 5. Function Constructor with prototype:
// This is similar to function constructor but it uses prototype
// for their properties and methods,

// function Person(){}
// Person.prototype.name = "Alex";
// let person = new Person();
// console.log(person);

// 6. ES6 Class:
// class Person {
//     constructor(name) {
//        this.name = name;
//     }
// }

// let person = new Person("Alex");
// console.log(person);


/**
 *  What are the recommendations to create new object?
 */
//  let obj1 = {};
//  let obj2 = "";
//  let obj3 = 0;
//  let obj4 = false;
//  let obj5 = [];
//  let obj6 = /()/;
//  let obj7 = function(){};

 /**
  * What are the different ways to access object properties?
  */
//  let obj = {
//     fname:"Shivang",
//     lname:"Sharma",
//     age:22
//  }
// // Dot notation
// console.log(obj.lname);

// // Square brackets notation
// console.log(obj["fname"]);

// Expression notation
// let option = 1;
// console.log(obj[option == 1?'fname': option == 2? 'lname':'age']);
// option = 2;
// console.log(obj[option == 1?'fname': option == 2? 'lname':'age']);
// option = 3;
// console.log(obj[option == 1?'fname': option == 2? 'lname':'age']);



/**
 * How to check if an object is an array or not?
 */

// Creating some variables
// var v1 = {name: "John", age: 22};   
// var v2 = ["red", "green", "blue", "yellow"];
// var v3 = [10, 20, 30, 40, 50];
// var v4 = null;

// Testing the variables data type
// console.log(typeof(v1)); // Returns: "object"
// console.log(typeof(v2)); // Returns: "object"
// console.log(typeof(v3)); // Returns: "object"
// console.log(typeof(v3)); // Returns: "object"

// Testing if the variable is an array
// console.log(Array.isArray(v1));  // Returns: false
// console.log(Array.isArray(v2));  // Returns: true
// console.log(Array.isArray(v3));  // Returns: true
// console.log(Array.isArray(v4));  // Returns: false

// console.log(v1 instanceof Array);  // Returns: false
// console.log(v2 instanceof Array);  // Returns: true
// console.log(v3 instanceof Array);  // Returns: true
// console.log(v4 instanceof Array);  // Returns: false

/**
 * What is destructuring an object?
 */

// let person = { fname: "Shivang", country: "India", job: "Developer" };

// Normal way
// let fname = person.fname;
// let country = person.country;
// let job = person.job;

// Destructuring assinment
// let {fname, country, jobName} = person;


// console.log(fname); // Shivang
// console.log(country); // India
// console.log(jobName); // Developer

/**
 * Clone an object in JavaScript?
 */

// Clone the Object Using Object.assign()

// const obj = { a: 10, b: 20, c: {x:30, y:40} }

// // cloning the object
// const cloneObj = Object.assign({}, obj);
// // console.log("Clone - ", cloneObj);
// cloneObj.a = 1;
// obj.b = 2;
// console.log("Clone - ", cloneObj);
// console.log("Original - ", obj);
// cloneObj.c.x = 3;
// obj.c.y = 4;
// console.log("Clone - ", cloneObj);
// console.log("Original - ", obj);



//Clone the Object Using Spread Syntax

// const obj = { a: 10, b: 20, c: {x:30, y:40} }
// const shallowClone = { ...obj }

// // console.log("Shallow - ", shallowClone);
// shallowClone.a = 1;
// obj.b = 2;
// // console.log("Shallow - ", shallowClone);
// // console.log("Original - ", obj);
// shallowClone.c.x = 3;
// obj.c.y = 4;
// console.log("Shallow - ", shallowClone);
// console.log("Original - ", obj);



// Clone the Object Using JSON.parse()
// const obj = { a: 10, b: 20, c: {x:30, y:40} }

// cloning the object
// const cloneObj = JSON.parse(JSON.stringify(obj));
// console.log("Clone - ", cloneObj);
// cloneObj.a = 1;
// obj.b = 2;
// console.log("Clone - ", cloneObj);
// console.log("Original - ", obj);
// cloneObj.c.x = 3;
// obj.c.y = 4;
// console.log("Clone - ", cloneObj);
// console.log("Original - ", obj);


/**
 * Copy properties from one object to another?
 */ 
// const target = { a: 1, b: 2 }; //a 
// const source = { b: 3, c: 4 }; //b 
 
// const returnedTarget = Object.assign(target, source);
 
// console.log(target);
// console.log(returnedTarget);

/**
 * Immutable object in javascript
 */

// 1. Object Constant Properties:
// By combining writable: false and configurable: false, 
// you can essentially create a constant (cannot be changed, 
// redefined or deleted) as an object property, like:


// let myObject = {};

// Object.defineProperty(myObject, 'number', {
//   value: 10,
//   writable: false,
//   configurable: false,
// });

// console.log(myObject.number); // 10  
// myObject.number = 20;          
// console.log(myObject.number); // 10


// 2. Prevent Extensions:
// This method prevents the addition of new properties to our existing object.
//  preventExtensions() is a irreversible operation. 
// We can never add extra properties to the object again.

// const myCar = {
//     maxSpeed: 250,
//     batteryLife: 300,
//     weight: 123
// };
  
// console.log(Object.isExtensible(myCar));
// console.log(Object.preventExtensions(myCar));
// console.log(Object.isExtensible(myCar));
// myCar.color = 'blue';
// console.log(myCar.color) // undefined
// myCar.maxSpeed = 300;
// console.log(myCar.maxSpeed) // undefined


// 3. Seal:
// It prevents additions or deletion of properties. 
// seal() also prevents the modification of property descriptors.

// const myCar = {
//     maxSpeed: 250,
//     batteryLife: 300,
//     weight: 123
//   };
  
// console.log(Object.isSealed(myCar)); // false
// console.log(Object.seal(myCar));
// console.log(Object.isSealed(myCar)); // true

// myCar.color = 'blue';
// console.log(myCar.color); // undefined
// delete myCar.batteryLife; // false
// console.log(myCar.batteryLife); // 300


// 4. Freeze:
// It does the same that Object.seal() plus it makes the properties non-writable.
// const myCar = {
//     maxSpeed: 250,
//     batteryLife: 300,
//     weight: 123
//   };
  
// console.log(Object.isFrozen(myCar)); // false
// console.log(Object.freeze(myCar));
// console.log(Object.isFrozen(myCar)); // true

// myCar.color = 'blue';
// console.log(myCar.color); // undefined

// delete myCar.batteryLife;
// console.log(myCar.batteryLife); // 300

// myCar.batteryLife = 400;
// console.log(myCar.batteryLife); // 300



/**
 * Drawback of declaring methods directly in JavaScript objects?
 * Here, each instance variable emp1, emp2 has own copy of formatSalary method.
 * However the formatSalary2 will only be added once to an object
 * Employee.prototype.
 */


// const Employee = function (name, company, salary) 
// {
//    this.name = name || "";
//    this.company = company || "";
//    this.salary = salary || 5000;
 
//    // We can create a method like this: 1kb
//    this.formatSalary = function () {
//      return "$ " + this.salary;
//    };
// };
 
//  // we can also create method in Employee's prototype: // 1kb memory allocation
//  Employee.prototype.formatSalary2 = function () {
//    return "$ " + this.salary;
//  };
 
// //  // Creating Objects
//  let emp1 = new Employee("Yuri Garagin", "Company 1", 1000); // 1kb memory allocation
//  let emp2 = new Employee("Dinesh Gupta", "Company 2", 2000); // 1kb memory allocation



/**
 * Compare Object and Map?
 */

// // Object
// let obj = {};

// // // adding properties to a object
// obj.prop = 10;
// obj[2] = 20;

// // // getting nr of properties of the object
// Object.keys(obj).length; // 2

// // // deleting a property
// delete obj[2];

// // obj; // {prop: 10}


// MAP

// const myMap = new Map();

// const keyString = "a string",
//   keyObj = {},
//   keyFunc = function () {};

// // // setting the values
// myMap.set(keyString, "value associated with 'a string'");
// myMap.set(keyObj, "value associated with keyObj");
// myMap.set(keyFunc, "value associated with keyFunc");

// myMap.size; // 3

// // // getting the values
// myMap.get(keyString); // "value associated with 'a string'"
// myMap.get(keyObj); // "value associated with keyObj"
// myMap.get(keyFunc); // "value associated with keyFunc"

// console.log(myMap.get("a string")); // "value associated with 'a string'"
// // because keyString === 'a string'
// console.log(myMap.get({})); // undefined, because keyObj !== {}
// myMap.get(function () {}); // undefined, because keyFunc !== function () {}

/**
 * Testing for empty object
 */

//  a.) Using Object keys(ECMA 5+): 
// You can use object keys length along with constructor type.
// let obj = {

// }
// console.log(Object.keys(obj).length === 0 && obj.constructor === Object);

//  b.) Using Object entries(ECMA 7+): 
// You can use object entries length along with constructor type.
 
// console.log(Object.entries(obj).length === 0 && obj.constructor === Object);


/**
 * How do you loop through or enumerate javascript object?
 * You can use the for-in loop to loop through javascript object.
 * You can also make sure that the key you get is an actual property of
 * an object, and doesn't come from the prototype using hasOwnProperty method.
 */

//  var object = {
//     "k1": "value1",
//     "k2": "value2",
//     "k3": "value3"
// };

// for (var key in object) {
//     if (object.hasOwnProperty(key)) {
//         console.log(key + " -> " + object[key]); // k1 -> value1 ...
//     }
// }


/**
 * Proxy Object
 * Syntax:
 * const proxy = new Proxy(target, handler)
 * In this syntax:
 * target: is an object to wrap.
 * handler: is an object that contains methods to control the behaviors of 
 * the target.
 */

// const user = {
//     firstName: "Aniket",
//     lastName: "Narula",
//     email: "aniket.narula@email.com"
// };
  
// const handler = {
//     get(target, property) {
//       console.log(`Property ${property} has been read.`);
//       return target[property];
//     }
// };
  
// const proxyUser = new Proxy(user, handler);

// console.log(proxyUser.firstName);
// console.log(proxyUser.lastName);

// user.firstName = 'Sonam';
// console.log(proxyUser.firstName);