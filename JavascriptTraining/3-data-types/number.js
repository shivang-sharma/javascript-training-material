/**
 * Number:
 * Number represents integer and floating numbers (decimals and exponentials).
 * A number type can also be +Infinity, -Infinity, and NaN (not a number).
 */

const number1 = 3;
const number2 = 3.433;
const number3 = 3e5; // 3 * 10^5

const number4 = 3 / 0;
console.log(number4); // Infinity

const number5 = -3 / 0;
console.log(number5); // -Infinity

// strings can't be divided by numbers
const number6 = "abc" / 3;
console.log(number6); // NaN
// console.log(Number('q'));

/**
 * The isNaN() function determines whether a value is NaN ( Not a Number ) or not.
 * This function returns true if the value equates to NaN. 
 * The isNaN() method converts the value to a number before testing it.
 */

isNaN('Hello') // true

isNaN('100') // false

typeof NaN // Number

Number.isNaN('Hello'); // false

/**
 * The global isFinite() function determines whether the passed value is a finite number.
 * It returns false if the value is +infinity, -infinity, or NaN (Not-a-Number),
 * otherwise it returns true.
 */
isFinite(Infinity);  // false
isFinite(NaN);       // false
isFinite(-Infinity); // false

isFinite(100);  // true
isFinite(1/0); // false

Number.isFinite(0 / 0); // false
Number.isFinite(null); // false
Number.isFinite("123") // false

/**
 * The Number.NEGATIVE_INFINITY property represents the negative Infinity value.
 * Negative infinity is a number in javascript, which is derived 
 * by 'dividing negative number by zero'.
 * A number object needs not to be created to access this static property.
 * The value of negative infinity is the same as the negative value of the
 * infinity property of the global object.
 */

 console.log(-10/0); // -Infinity
 console.log(Number.NEGATIVE_INFINITY); // -Infinity
 console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
 console.log(-2 * Number.MAX_VALUE); // -Infinity
 
 console.log("Math.pow(10, 1000): " + Math.pow(10, 1000)); // Infinity 
 console.log("Math.log(0): " + Math.log(0)); // -Infinity
 
 console.log(Number.NEGATIVE_INFINITY === -2 * Number.MAX_VALUE); // true


 /**
  * Number Properties
  *    Name                Description
  * constructor	        Returns the function that created JavaScript's Number prototype
  * EPSILON	            Returns the difference between 1 and the smallest number
  * MAX_SAFE_INTEGER    Returns the maximum safe integer in JavaScript.
  * MIN_SAFE_INTEGER    Returns the minimum safe integer in JavaScript.
  * MAX_VALUE	        Returns the largest number possible in JavaScript
  * MIN_VALUE	        Returns the smallest number possible in JavaScript
  * NaN	                Represents a "Not-a-Number" value
  * NEGATIVE_INFINITY   Represents negative infinity (returned on overflow)
  * POSITIVE_INFINITY   Represents infinity (returned on overflow)
  * prototype	        Allows you to add properties and methods to an object
  * 
  * Number Methods
  *    Name	              Description
  * isFinite()	        Checks whether a value is a finite number
  * isInteger()	        Checks whether a value is an integer
  * isNaN()	            Checks whether a value is Number.NaN
  * isSafeInteger()	    Checks whether a value is a safe integer
  * parseFloat()	    Parses a string an returns a number
  * parseInt()	        Parses a string an returns a whole number
  * toExponential(x)    Converts a number into an exponential notation
  * toFixed(x)	        Formats a number with x numbers of digits after the decimal point
  * toLocaleString()    Converts a number into a string, based on the locale settings
  * toPrecision(x)	    Formats a number to x length
  * toString()	        Converts a number to a string
  * valueOf()	        Returns the primitive value of a number
  */