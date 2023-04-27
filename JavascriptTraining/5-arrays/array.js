/**
 * In JavaScript, arrays aren't primitives but are instead Array objects with 
 * the following core characteristics:
 * JavaScript arrays are resizable and can contain a mix of different data types.
 * (When those characteristics are undesirable, use typed arrays instead.)
 * JavaScript arrays are not associative arrays and so, array elements cannot be accessed 
 * using arbitrary strings as indexes, but must be accessed using nonnegative integers 
 * (or their respective string form) as indexes.
 * JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second
 * is at index 1, and so on — and the last element is at the value of the array's length property
 * minus 1.
 * JavaScript array-copy operations create shallow copies. (All standard built-in copy operations 
 * with any JavaScript objects create shallow copies, rather than deep copies).
 * 
 * Syntax:
 * const array_name = [item-1, item-2, item-3, ...];    
 * 
 */

// array of numbers
// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers[1])
// // array of mix data types
// const mix = [10, '20', '30', {val:40}, 50];
// console.log(mix);
// console.log(mix.toString());

// // using new keyword
// const numbers = new Array(10, 20, 30, 40, 50);
// console.log(numbers);
// // array of strings
// let fruits = ["Apple", "Orange", "Plum", "Mango"];
// console.log(fruits);

/**
 * Accessing array element
 */

// let fruits = ["Apple", "Orange", "Plum", "Mango"];

//  console.log(fruits[0]); // Apple
//  console.log(fruits[fruits.length - 1]) // Mango

// Iterate array elements
//  for (let i = 0; i < fruits.length; i++) {
//    console.log(fruits[i]);
//  }

/**
 * Adding new element
 */
//   let fruits = ["Apple", "Orange", "Plum", "Mango"];
//   console.log(fruits);
//   fruits.push("Grapes");  // Adds a new element (Grapes) to fruits
//   console.log(fruits);
//   fruits[fruits.length] = "Banana";
//   console.log(fruits);


/**
 * length of the array
 */
// let fruits = ["Apple", "Orange", "Plum", "Mango"];
// console.log(fruits.length);

/**
 * associative arrays in javascript
 * syntax:
 * const array_name = { key1: 'value1', key2: 'value2', key3: 'value3' }   
 */
   const employee = {
    id: 12345,
    name: "Shivang Sharma",
    email: "shivang.sharma@email.com"
  };

//   // Accesing employee elements
//   console.log(employee.id); // 12345
//   console.log(employee.name); // Shivang Sharma

/**
 *  length of the associative array
 */

// console.log(Object.keys(employee).length); // Output 3

//   // Retrieve the elements
//   for (let key in employee) {
//     console.log(key + " = " + employee[key]);
//   }

//   // Output
// //   id = 12345 
// //   name = Shivang Sharma
// //   email = shivang.sharma@email.com 


/**
 * array.join():
 * The join() method creates and returns a new string by concatenating all of 
 * the elements in an array (or an array-like object), separated by commas 
 * or a specified separator string. 
 * If the array has only one item, then that item will be returned without using
 * the separator.
 */
// var elements = ['Array', 'In', 'Javascript'];

// console.log(elements.join()); 
// console.log(elements.join(''));
// console.log(elements.join('-'));

/**
 *  array.pop():
 * The pop() method removes the last element from an array and returns that element.
 * This method changes the length of the array.
 */
//  let fruits = ["Apple", "Orange", "Plum"];

//  console.log(fruits.pop()); 
//  console.log(fruits); 
//  console.log(fruits.pop());
//  console.log(fruits.pop());
//  console.log(fruits.pop());

/**
 * array.push():
 * The push() method adds one or more elements to the end of an array and returns the 
 * new length of the array.
 */
//  const animals = ['pigs', 'goats', 'sheep'];

//  const count = animals.push('cows');
//  console.log(count); 
//  console.log(animals);

/**
 * array.shift():
 * The shift() method removes the first element from an array and returns that removed element.
 * This method changes the length of the array.
 */
 
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)
// console.log(fruits.shift());
// console.log(fruits) // Output: Array ["Orange", "Apple", "Mango"]

/**
 * array.unshift():
 * The unshift() method adds one or more elements to the beginning of an array and returns 
 * the new length of the array.
 */
//  var fruits = ["Banana", "Orange", "Apple"];
//  console.log(fruits)
//  fruits.unshift("Mango","Pineapple");
//  console.log(fruits); // Output: Array ["Mango", "Pineapple", "Banana", "Orange", "Apple"]

/**
 * delete operator
 * Array elements can be deleted using the JavaScript operator delete.
 * Using delete leaves undefined holes in the array.
 * Use pop() or shift() instead.
 */
//  const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  console.log(fruits)
//  console.log(delete fruits[0]);
//  console.log(fruits)
//  console.log(fruits[0])


/**
 * array.concat():
 * The concat() method is used to merge two or more arrays.
 * This method does not change the existing arrays, 
 * but instead returns a new array.
 */

//  const array1 = ['a', 'b', 'c'];
//  const array2 = ['d', 'e', 'f'];
 
//  console.log(array1.concat(array2, array1)); // Output: Array ["a", "b", "c", "d", "e", "f"]
//  console.log(array1);
//  console.log(array2);

/**
 * array.map():
 * The map() method creates a new array with the results of calling a provided 
 * function on every element in the calling array. 
 */
//  var array1 = [1, 4, 9, 16];

//  // pass a function to map
//  const map1 = array1.map(x => x * 2); 
 
//  console.log(map1);
//  console.log(array1);

/**
 * array.filter()
 * The filter() method creates a new array with all elements that pass the 
 * test implemented by the provided function.
 */
//  var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction'];

//  const result = words.filter(word => word.length > 6);
 
//  console.log(result);
//  console.log(words);

/**
 * array.reduce():
 * The reduce() method executes a reducer function (that you provide) on each
 * element of the array, resulting in a single output value.
 * array.reduce(cllbck, initial)
 */
//  const array1 = [1, 2, 3, 4];
//  const reducer = (accumulator, currentValue) =>  {
//     console.log(currentValue);
//     accumulator += currentValue;
//     return accumulator
// };
 
// //  console.log(array1.reduce(reducer)); // Output: 10
//  console.log(array1.reduce(reducer, 5)); // Output: 15

/**
 * array.reduceRight():
 * The reduceRight() method applies a function against an accumulator and each 
 * value of the array (from right-to-left) to reduce it to a single value.
 */
// const array1 = [[0, 1], [2, 3], [4, 5]];
// console.log(array1);
// let reducedArray = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
// console.log(reducedArray);


/**
 * array.every():
 * The every() method tests whether all elements in the array pass the test implemented by 
 * the provided function. 
 * It returns a Boolean value.
 */
// function isBelowThreshold(currentValue) {
//     return currentValue < 40;
// }
  
// var array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every(isBelowThreshold)); // Output: true

/**
 * array.some():
 * The some() method tests whether at least one element in the array passes the test
 * implemented by the provided function. It returns a Boolean value.
 */
//  var array = [1, 2, 3, 4, 5];

//  var even = function(element) {
//    // checks whether an element is even
//    return element % 2 === 0;
//  };
 
//  console.log(array.some(even)); // Output: true

/**
 * array.indexOf():
 * The indexOf() method returns the first index at which a given element can be 
 * found in the array, or -1 if it is not present.
 */

//  let animals = ['cat', 'bison', 'camel', 'bison'];

//  console.log(animals.indexOf('bison'));
//  console.log(animals.indexOf('giraffe'));

/**
 * array.lastIndexOf():
 * The lastIndexOf() method returns the index within the calling String object of
 * the last occurrence of the specified value, searching backwards from fromIndex.
 * Returns -1 if the value is not found.
 */

// let animals = ['cat', 'bison', 'camel', 'bison'];
//  console.log(animals.lastIndexOf('bison'));
//  console.log(animals.lastIndexOf('giraffe'));
 

 /**
  *  array.find()
  * The find() method returns the value of the first element in the provided array 
  * that satisfies the provided testing function.
  */
//   var array1 = [5, 12, 8, 130, 44, 120];

//   var found = array1.find(function(element) {
//     return element > 100;
//   });
  
//   console.log(found); 

/**
 * array.findIndex()
 * The findIndex() method returns the index of the first element in the array 
 * that satisfies the provided testing function. Otherwise, it returns -1,
 * indicating that no element passed the test.
 */
// var array1 = [5, 12, 8, 130, 44];

// function isLargeNumber(element) {
//    return element > 20;
// }
 
// console.log(array1.findIndex(isLargeNumber)); // Output: 3

/**
 * array.includes()
 * The includes() method determines whether an array includes a certain value
 * among its entries, returning true or false as appropriate.
 */
//  var array1 = [1, 2, 3];
//  console.log(array1.includes(2)); 
 
//  var pets = ['cat', 'dog', 'bat'];
//  console.log(pets.includes('at'));

/**
 * array.splice(start)
 * start — The zero-based location in the array from which to start removing elements.
 * deleteCount — The number of elements to remove.
 * items — Elements to insert into the array in place of the deleted items
 * returns -  array containing the elements that were deleted.
 * The splice() method adds new items to an array.
 */
//  const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  console.log(fruits)
//  fruits.splice(2, 0, "Lemon", "Kiwi");
//  console.log(fruits)

// to remove
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.splice(0, 1, 'Kiwi'));
// console.log(fruits)

/**
 * array.slice()
 * start - The beginning index of the specified portion of the array. 
 * If start is undefined, then the slice begins at index 0.
 * end - The end index of the specified portion of the array. This is exclusive
 * of the element at the index 'end'. If end is undefined, then the slice extends to 
 * the end of the array.
 * The slice() method creates a new array.
 * The slice() method does not remove any elements from the source array.
 */
//  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//  const lessFruit = fruits.slice(1);
//  const lesserFruit = fruits.slice(0, 3);
//  console.log(lessFruit)
//  console.log(lesserFruit)


/**
 * array.sort()
 * compareFn - Function used to determine the order of the elements. 
 * It is expected to return a negative value if the first argument is less than 
 * the second argument, zero if they're equal, and a positive value otherwise. 
 * If omitted, the elements are sorted in ascending, ASCII character order.
 * The sort() method sorts an array alphabetically:
 */

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// const number = [40, 100, 1, 5, 25, 10];
// number.sort();
// number.sort(function(a, b){return a - b});
// console.log(fruits)
// console.log(number)
// /**
//  * array.reverse()
//  * reverse the array
//  */
// fruits.reverse();
// number.reverse();
// console.log(fruits)
// console.log(number)

/**
 * forEach()
 * The forEach() method calls a function (a callback function) once for each
 * array element.
 */
//  const numbers = [45, 4, 9, 16, 25];
//  numbers.forEach((number, index, array) => {
//     console.log(number + " " + index + " " + array );
//  });

/**
 * Array.from()
 * The Array.from() method returns an Array object from any object
 * with a length property or any iterable object.
 */
//  console.log(Array.from("ABCDEFG"));

/**
 * Array.key()
 * The Array.keys() method returns an Array Iterator object with the keys of an array.
 */
//  const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  const keys = fruits.keys();
 
//  for (let x of keys) {
//    console.log(x, fruits[x]);
//  }

/**
 * Array.entries()
 * 
 */
//  const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  const f = fruits.entries();
 
//  for (let x of f) {
//    console.log(x);
//  }
 
/**
 * array.fill()
 */
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.fill("Kiwi"));
// console.log(fruits);
 
// Fill the last two elements:
// console.log(fruits.fill("Kiwi", 2, 4));
// console.log(fruits);

/**
 * Spread vs Rest
 * The main difference between rest and spread is that the rest operator puts 
 * the rest of some specific user-supplied values into a JavaScript array. 
 * But the spread syntax expands iterables into individual elements.
 */

// function sum(x, y, z) {
//     return x + y + z;
// }

// const numbers = [1, 2, 3];
// console.log(sum(...numbers));

// ES-5 way
// console.log(sum.apply(null, numbers));

// Merge arrays
// const newBrands = ["Tesla", "Mahindra"];
// const brands = ["Ford", "Honda", ...newBrands, "BMW"];

// console.log(brands);

// Copy array/object

// let obj = { a: 10, b: 20, c: 30 };

// spread the object into a list of parameters
// let objCopy = { ...obj };
// console.log(objCopy);

// // add new
// obj.d = 40;

// console.log(JSON.stringify(obj)); // { "a":10, "b":20, "c":30, "d":40 }
// console.log(JSON.stringify(objCopy)); // { "a":10, "b":20, "c":30 }

/**
 * Rest
 * The rest parameter is used to represent an indefinite number of 
 * arguments as an array. The important point here is only the 
 * function's last parameter can be a "rest parameter".
 */
// function sum(...args) {
//     return args.reduce((previous, current) => {
//       return previous + current;
//     });
// }

// console.log(sum(10)); // 10
// console.log(sum(10, 20)); // 30
// console.log(sum(10, 20, 30)); // 60

/**
 * Destructuring
 */

// // Variable assignment.
// const numbers = [10, 20, 30];
// const [one, two, three] = numbers;

// console.log(one); // 10
// console.log(two); // 20
// console.log(three); // 30
// // Swapping variables
// let a = 100;
// let b = 200;

// [a, b] = [b, a];

// console.log(a); // 200
// console.log(b); // 100


/**
 * JSON Array
 */
// Empty JSON array
// const empty = [ ];


// // JSON Array of Numbers
// const numbers = [12, 34, 56, 43, 95];


// // JSON Array of Objects
// let json = 
//     `{
//         "employees": [
//           { "name": "Kabir Dixit", "email": "kabir.dixit@gmail.com", "age": 23 },
//           { "name": "Mukta Bhagat", "email": "mukta.bhagat@gmail.com", "age": 28 },
//           { "name": "Sakshi Ramakrishnan", "email": "sakshi.ramakrishnan@gmail.com", "age": 33 }
//          ]
//     }`
// javascriptObject = JSON.parse(json);
// console.log(javascriptObject);
// console.log(JSON.stringify(javascriptObject));
 // validate
// console.log(JSON.parse("{}")); // true
// console.log(JSON.parse("abc")); // false



/**
 * [] vs new Array()
 * There is a difference if you have only one item, and it's numeric. 
 * This will create an array with a single item:
 */
//  This will create an array with a single item:
// var myNumbers = [42];
// console.log(myNumbers);
//  but this will create an array with the length 42:
// var myNumbers = new Array(42, 21);
// console.log(myNumbers);
// myNumbers[43] = 10;
// console.log(myNumbers);


/**
 * Typed Arrays
 * 
 */
 const buffer = new ArrayBuffer(16);
 if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
  console.log(buffer)
} else {
  console.log("Oh no, it's the wrong size!");
}
/**
 * Before we can really work with this buffer, we need to create a view.
 * Let's create a view that treats the data in the buffer as an array of
 * 32-bit signed integers:
 */
const int32View = new Int32Array(buffer);
// Now we can access the fields in the array just like a normal array:

for (let i = 0; i < int32View.length; i++) {
  int32View[i] = 'a';
}
// This fills out the 4 entries in the array 
// (4 entries at 4 bytes each makes 16 total bytes) 
// with the values 0, 2, 4, and 6.

console.log(int32View);
