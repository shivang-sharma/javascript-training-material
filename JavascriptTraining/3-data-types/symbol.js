/**
 * Symbol:
 * A value having the data type Symbol can be referred to as a symbol value. 
 * Symbol is an immutable primitive value that is unique.
 * Symbol is a built-in object whose constructor returns a symbol primitive 
 * also called a Symbol value or just a Symbol — that's guaranteed to be unique.
 * Symbols are often used to add unique property keys to an object that won't 
 * collide with keys any other code might add to the object, and which are hidden
 * from any mechanisms other code will typically use to access the object.
 * That enables a form of weak encapsulation, or a weak form of information hiding.
 * 
 * Every Symbol() call is guaranteed to return a unique Symbol. 
 * Every Symbol.for("key") call will always return the same Symbol for 
 * a given value of "key". When Symbol.for("key") is called, if a Symbol 
 * with the given key can be found in the global Symbol registry, that Symbol 
 * is returned. Otherwise, a new Symbol is created, added to the global Symbol
 * registry under the given key, and returned.
 */

// Two symbols with the same description

// const value1 = Symbol('hello');
// const value2 = Symbol('hello');

// let result = (value1 === value2) ? true : false;  // false;
// console.log(result);
// Note: Though value1 and value2 both contain 'hello', 
// they are different as they are of the Symbol type.


// To access the description of a symbol, we use the . operator. 
// For example,

// const x = Symbol('hey');
// console.log(x.description); // hey

/**
 * You can add symbols as a key in an object using square brackets []. 
 * For example,
 */

// let id = Symbol("id");

// let person = {
//     name: "Jack",

//     // adding symbol as a key
//     [id]: 123 // not "id": 123
// };
// // person[id] = 12; // can also be done like this
// console.log(person); // {name: "Jack", Symbol(id): 123}

/**
 * Symbols are not included in for...in Loop
 * The for...in loop does not iterate over Symbolic properties.
 * For example,
 */
//  let id = Symbol("id");

//  let person = {
//      name: "Jack",
//      age: 25,
//      [id]: 12
//  };
 
// //  using for...in
//  for (let key in person) {
//      console.log(key);
//  }
 /**
  * OUTPUT:
  * name
  * age
  */


 /**
  * If the same code snippet is used in various programs, then it is better 
  * to use Symbols in the object key. It's because you can use the same key 
  * name in different codes and avoid duplication issues. For example,
  * 
  */
// let person = {
//     name: "Jack"
// };

// // // creating Symbol
// let id = Symbol("id");

// // // adding symbol as a key
// person[id] = 12;
// let ids = Symbol('id');
// person[ids] = 11;
// console.log(person);
/**
 * In the above program, if the person object is also used by another program,
 * then you wouldn't want to add a property that can be accessed or changed by
 * another program. Hence by using Symbol, you create a unique property that you
 * can use. Now, if the other program also needs to use a property named id, 
 * just add a Symbol named id and there won't be duplication issues. 
 * For example,
 */

// let person = {
//     name: "Jack"
// };

// let id = Symbol("id");

// person[id] = "Another value";

/**
 * In the above program, even if the same name is used to store values, 
 * the Symbol data type will have a unique value. In the above program,
 * if the string key was used, then the later program would have changed 
 * the value of the property. For example:
 */

// let person = {
//     name: "Jack"
// };

// // using string as key
// person.id = 12;
// console.log(person.id); // 12
// console.log(person)
// // // Another program overwrites value
// person.id = 'Another value';
// console.log(person.id); // Another value
// console.log(person)

// In the above program, the second user.id overwrites the previous value.

/**
 * Whenever there are inheritance hierarchies in JavaScript, you have two
 * kinds of properties. 
 * Public properties are seen by clients of the code
 * Private properties are used internally within the pieces that make up the 
 * inheritance hierarchy (e.g. classes, objects).
 * For usability's sake, public properties usually have string keys.
 * But for private properties with string keys, accidental name clashes 
 * can become a problem. 
 * Therefore, symbols are a good choice.
 */

/**
 * Symbol Property
 *    Name                                Description
 * Symbol.hasInstance         It is used to determine if a constructor object recognizes an object 
 *                            as its instance.
 * Symbol.isConcatSpreadable  It is used to configure if an object should be flattened to its 
 *                            array elements.
 * Symbol.match               It is a method to identify the matching of a regular expression 
 *                            against a string.
 * Symbol.prototype           It is used for produce the prototype for the symbol constructor.
 * Symbol.replace             It replace matched substring of a string.
 * Symbol.search              It returns the index within a string that matches with the regular
 *                            expression.
 * Symbol.split               It splits a string at the indices that match the regular expression.
 * Symbol.toPrimitive	        It is used to convert an object to its equivalent primitive value.
 * Symbol.unscopables         It is a well-known object property whose property name are excluded
 *                            from with environment.
 * 
 * Symbol Methods
 *    Name                                Description
 * Symbol.for()               It is used to search for existing symbol in a runtime-wide symbol
 *                            registry with the provided key and returns if it is found. 
 *                            Otherwise new symbol gets created with this key.
 * Symbol.keyFor()            It uses the global symbol registry to look up the key for the symbol.
 *                            So it doesn't work for non-global symbols. If the symbol is not global,
 *                            it won't be able to find it and returns undefined.
 * Symbol.toString()          It is used to return a string representation of an object.
 */