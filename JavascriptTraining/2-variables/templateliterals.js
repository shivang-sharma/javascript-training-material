let firstName  = "Shivang";
let lastName = "Sharma"
console.log(`Hi ${firstName} ${lastName}.`);
console.log(`How are you?`);

/**
 * Template literals, preserve whatever spacing you add to them.
 */

console.log(`Hi ${firstName} ${lastName}.
How are you?`);

let a = 10;
function d () {
    let d = 9;
    console.log(d);
    console.log(window.a);
}

d();