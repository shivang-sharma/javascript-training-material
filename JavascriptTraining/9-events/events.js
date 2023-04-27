// function greeting() {
//     console.log();
//     alert("Hello! Good morning");
// }

/**
 * syntax:
 * document.addEventListener(event, function, phase)
 */
// document.addEventListener("click", function () {
//     console.log("You clicked inside the document");
// });
// document.getElementById("btn").addEventListener("click", function() {
//     alert("Hello! Good morning");  
// });


/**
 * What is an event delegation?
 */
// document.getElementById('buttons').addEventListener('click', event => {
//     if (event.target.className === 'buttonClass'){
//         console.log('Click!');
//     }
// });

/**
 * event capturing
 */
// for (let elem of document.querySelectorAll("*")) {
//     elem.addEventListener("click", (e) => console.log("Capturing:", elem.tagName), true);
// }

/**
 * Prevent Default
 */

//  document.getElementById("link").addEventListener("click", function(event) {
//     event.preventDefault();
//  });
 

/**
 * What is the use of stopPropagation method?
 */
// function firstFunc(event) {
//     alert("DIV 1");
//     event.stopPropagation();
// }

// function secondFunc() {
//     alert("DIV 2");
// }

/**
 * What is difference between 
 * stoppropagation, stopimmediatepropagation and preventdefault in javascript?
 */
let timeout  = setTimeout((a)=> {
    console.log(a);
    console.log("Hey! it's set timeout");
}, 1000, [1, 2]);
// let interval  = setInterval(()=> {
//     console.log("Hey! It's set interval");
// }, 2000);
document.getElementById("btn").addEventListener('click', ()=> {
    console.log(interval);
    clearInterval(interval);
    clearTimeout(timeout);
});
