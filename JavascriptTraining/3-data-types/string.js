/**
 * String is used to store text. 
 * In JavaScript, strings are surrounded by quotes:
 * Single quotes: 'Hello'
 * Double quotes: "Hello"
 * Backticks: `Hello`
 */

// Strings
// const firstName = 'Shivang'; // Primitive type using literals
// const lastName = new String("Sharma");  // Object using new 
// const result = `Name: ${firstName} ${lastName}`;

// console.log(result); // Name: Shivang Sharma

/**
 * String Properties
 *   Name                           Description
 * constructor	        Returns the string's constructor function
 * length	            Returns the length of a string
 */

// constructor
// console.log(firstName.constructor);
// console.log(lastName.constructor);

// length
// console.log(firstName.length);

// COMPARING STRINGS
/**
 * String Pool
 *  Shivang => obj
 * a => obj
 * b => obj
 */
// const a = "Shivang";
// const b = "Shivang";
// const c = new String("Shivang");
// const d = new String("Shivang");
// console.log(`a == b : ${a == b}`); //a == b : true
// console.log(`a === b : ${a === b}`); // a == b : true
// console.log(`a == c : ${a == c}`); // true
// console.log(`a == d : ${a == d}`); // true
// console.log(`a === c : ${a === c}`); // false/
// console.log(`c == d : ${c == d}`); // false
// console.log(`c === d : ${c === d}`); // false
// console.log(`c.localCompare(d) : ${c.localeCompare(d)}`);
/**
 * localeCompare returns:
 * 1 if string1 is greater (higher in the alphabetical order) than string2
 * -1 if string1 is smaller (lower in the alphabetical order) than string2
 * 0 if string1 and string2 are equal in the alphabetical order
 */


/**
 * String methods
 *    Name	                        Description
 * charAt()	            Returns the character at a specified index (position)
 * charCodeAt()	        Returns the Unicode of the character at a specified index
 * concat()	            Returns two or more joined strings
 * endsWith()	        Returns if a string ends with a specified value
 * fromCharCode()       Returns Unicode values as characters
 * includes()	        Returns if a string contains a specified value
 * indexOf()	        Returns the index (position) of the first occurrence of a value in a string
 * lastIndexOf()        Returns the index (position) of the last occurrence of a value in a string
 * localeCompare()      Compares two strings in the current locale
 * match()	            Searches a string for a value, or a regular expression, and returns the matches
 * repeat()	            Returns a new string with a number of copies of a string
 * replace()	        Searches a string for a value, or a regular expression, and returns a string where the values are replaced
 * search()	            Searches a string for a value, or regular expression, and returns the index (position) of the match
 * slice()	            Extracts a part of a string and returns a new string
 * split()	            Splits a string into an array of substrings
 * startsWith()	        Checks whether a string begins with specified characters
 * substr()	            Extracts a number of characters from a string, from a start index (position)
 * substring()	        Extracts characters from a string, between two specified indices (positions)
 * toLocaleLowerCase()  Returns a string converted to lowercase letters, using the host's locale
 * toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
 * toLowerCase()	    Returns a string converted to lowercase letters
 * toString()	        Returns a string or a string object as a string
 * toUpperCase()	    Returns a string converted to uppercase letters
 * trim()	            Returns a string with removed whitespaces
 * trimEnd()	        Returns a string with removed whitespaces from the end
 * trimStart()	        Returns a string with removed whitespaces from the start
 * valueOf()	        Returns the primitive value of a string or a string object
 */

/**
 * charAt()
 * Returns the character at a specified index (position) 
 */

// console.log(firstName.charAt(0));
// console.log(firstName.charAt(firstName.length)); // Empty string
// console.log(typeof firstName.charAt(firstName.length));
// console.log(firstName.charAt(firstName.length-1)); //  g
/**
 * charCodeAt()
 * Returns the Unicode of the character at a specified index
 */
// console.log(firstName.charCodeAt(0)); // 83
// console.log(firstName.charCodeAt(firstName.length)); // NaN => Number
// console.log(firstName.charCodeAt(firstName.length-1)); // 103

/**
 * concat()
 * Returns two or more joined strings
 */
// console.log(firstName.concat(lastName));
// console.log(firstName);


/**
 * endsWith()
 * Returns if a string ends with a specified value
 */
// console.log(firstName.endsWith('g')); // true
// console.log(firstName.endsWith('ng')); // true
// console.log(firstName.endsWith('s')); // false

/**
 * fromCharCode()
 * Returns Unicode values as characters
 */
// console.log(String.fromCharCode(83));

/**
 * fromCodePoint()
 * Returns String in the same order with that of the order of
 * code points in the list.
 */
//  console.log(String.fromCodePoint(83, 67, 103));
//  console.log(String.fromCodePoint());

/**
 * includes()
 * Returns if a string contains a specified value
 */
// console.log(firstName.includes('S', 0));
// console.log(firstName.includes('Shi', 0));
// console.log(firstName.includes('S', 2));

/**
 * indexOf()
 * Returns the index (position) of the first occurrence of a value in a string
 */
// let str = "ShivangSharma"
// console.log(str.indexOf('S'));
// console.log(firstName.indexOf('q'));

/**
 * lastIndexOf()
 * Returns the index (position) of the last occurrence of a value in a string
 */
//  let str = "ShivangSharma"
// console.log(str.lastIndexOf('S'));
// console.log(firstName.lastIndexOf('q'));

/**
 * slice()
 * Extracts a part of a string and returns a new string
 */
// S  h  i  v  a   n   g
// 0  1  2  3  4   5   6
//-7 -6 -5 -4 -3  -2  -1
// console.log(firstName.slice(0, 2)); // Sh
// console.log(firstName.slice(2)); //ivang
// console.log(firstName.slice(-1, 2)); // 
// console.log(firstName.slice(-2)); // ng
// console.log(firstName.slice(2, -3)); //iv
// console.log(firstName.slice(-3, -1)); // an


/**
 * split()
 * Splits a string into an array of substrings
 */
// console.log(firstName.split());
// console.log(firstName.split(' '));
// console.log(firstName.split('a'));
// var a = "a,b,c,d,e,f"
// console.log(a.split(',', 3)) //
// console.log(a.split(',')) // ['a', 'b', 'c', 'd', 'e', 'f']

