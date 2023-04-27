// function task1() {
//     return new Promise(function (resolve, reject) {
//         let result;
//         setTimeout(function () {
//             try {
//                 // some processing
//                 // throw "Rejected"
//                 result = 20;
//                 console.log("Task 1 done");
//                 resolve(result);
//             } catch(error) {
//                 reject(error);
//             }
//         }, 2000);
//     });
// }
// function task2(result) {
//     console.log("Task 2 done ", result);
// }
// task1()
// .then(task2)
// .catch((error) =>{
//     console.log(error);
// })
// .finally(() => {
//     console.log("Finally executed");
// })

// async function doWork() {
//     try {
//         let resultFromTask1 = await task1();
//         task2(resultFromTask1);
//     } catch(error) {
//         if(error) {

//         } else {
//             throw error;
//         }
//     }
// }
// doWork().then(function () {
//     console.log("Work is done");
// })
// .catch(function (error) {
//     console.log(error);
// })
// .finally(function () {
//     console.log("Finally.");
// })

// Using Async-Await




// // Async/Await

// async function asyncFunction() {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("resolved!"), 1000);
//     });
  
//     const result = await promise;
//     // wait till the promise resolves (*)
  
//     console.log(result); // "resolved!"
// }

// asyncFunction()



// // // // async() and await()
// async function fetchMethod() {
//     try {
//       let response = await fetch("https://api.github.com/users/1");
//       let data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
// }
  
// fetchMethod();