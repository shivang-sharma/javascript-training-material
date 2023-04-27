const myNumbers = [1, 2, 3, 4];
const animals = ['Panda', 'Bear', 'Eagle']; // Not available directly outside the module

function myLogger() {
  console.log(myNumbers, animals);
}

class Alligator {
   constructor() {
     // ...
   }
}
export { myNumbers, myLogger as Logger, Alligator }