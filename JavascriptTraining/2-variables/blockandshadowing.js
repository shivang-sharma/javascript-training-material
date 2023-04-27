// {
//     var a = 7;
//     console.log(a);
// }

/**
 * If-Else example
 */
//Case-1
// if (true)

// //Case-2
// if (true) console.log(1);

//Case-3
// if (true) var b = 2; console.log(b);
// else console.log(3);

// //Case-4
// if (true) 
//     var b = 2;
//     console.log(b);
// else
//     console.log(b);

//Case-5
// if (true) {
//     var b = 2
//     console.log(b);
// } else {
//     console.log(4);
// }



/**
 * let and const are block scope
 */

// {
//     var a = 7;
//     let b = 3;
//     const c = 4;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

/**
 * Shadowing of var
 */
// var a = 100; // Global scope
// {
//     var a = 10; 
//     let b = 20;
//     const c = 30;
//     console.log(a); // 10
//     console.log(b); //20
//     console.log(c); //30
// }
// console.log(a); //10



/**
 * Shadowing of let
 */
//  let b = 100;
//  {
//      var a = 10;
//      let b = 20;
//      const c = 30;
//      console.log(a); // 10
//      console.log(b); // 20
//      console.log(c); // 30
//  }
//  console.log(b); // 100
 



/**
 * Shadowing of const
 */
//  const c = 100;
//  {
//      var a = 10;
//      let b = 20;
//      const c = 30;
//      console.log(a);
//      console.log(b);
//      console.log(c);
//  }
//  console.log(c);
 
/**
 * Shadowing of var using const, let, var
 *  {
 *  
 *  }
 */
    //  let b = 100;
    //  {
    //      const a = 10;
    //      const b = 20;
    //      const c = 30;
    //      console.log(a);
    //      console.log(b);
    //      console.log(c);
    //  }
    //  console.log(a);