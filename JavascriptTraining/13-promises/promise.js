// function task1() {
//     let result;
//     setTimeout(()=> {
//         // some processing
//         result = 20;
//         console.log("Task 1 done");
//     }, 3000);
//     return result;
// }
// function task2(result) {
//     console.log("Task 2 done ", result);
// }
// let result = task1();
// task2(result);




// function task1() {
//     return new Promise(function (resolve, reject) {
//         let result;
//         setTimeout(function () {
//             try {
//                 // some processing
//                 throw "Rejected"
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
// // console.log(task1());
// task1()
// .then(task2)
// .catch((error) =>{
//     console.log(error);
// })
// .finally(() => {
//     console.log("Finally executed");
// })



/**
 * Promise
 * In a ecommerce app,
 * step-1 create a order
 * step-2 show order details before making payment
 * step-3 proceed to payment
 * step-4 place order
 */
// cart = ["item1", "item2"]

// let orderId = backendAPI.createOrder(cart);
// backendAPI.showOrderDetails(orderId);
// let paymentStatus = backendAPI.proceedPayment();
// backendAPI.placeOrder(paymentStatus);
// backendAPI.createOrder(cart, function(orderId) {
//     backendAPI.showOrderDetails(orderId);
// });

/**
 * Solving  inversion of control, and callback hell
 * 
 */
// backendAPI.createOrder(cart)
// .then(function (orderId) {
//     return backendAPI.showOrderDetails(orderId);
// })
// .then(function () {
//     return backendAPI.proceedPayment();
// })
// .then(function (paymentStatus) {
//     backendAPI.placeOrder(paymentStatus);
// })
// .then(function (paymentStatus) {
//     backendAPI.placeOrder(paymentStatus);
// })
// .then(function (paymentStatus) {
//     backendAPI.placeOrder(paymentStatus);
// })
// .then(function (paymentStatus) {
//     backendAPI.placeOrder(paymentStatus);
// })
// .then(function (paymentStatus) {
//     backendAPI.placeOrder(paymentStatus);
// })
// .then(function (paymentStatus) {
//     backendAPI.placeOrder(paymentStatus);
// })
// .then(function (paymentStatus) {
//     backendAPI.placeOrder(paymentStatus);
// })
// .catch(function (error) {
//    console.log(error);
// })
// .finally(function () {
//     console.log("Finally");
// })


/**
 * Promise.all()
 */
// promise.all()

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(function(msg) {
//         console.log(msg)
//         resolve(msg);
//     }, 1000, "First Resolved");
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(function(msg) {
//         // resolve(msg)
//         reject(new Error("Second Rejected"));
//     }, 2000, "Second Resolvedd");
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "Third Resolved");
// });

  
// Promise.all([promise1, promise2, promise3])
// .then((values) => {
//     console.log(values);
// })
// .catch((error) => console.log(`Error in promises ${error}`));



/**
 * Race method
 */
// const promise1 = new Promise(function (resolve, reject) {
//     setTimeout(function (msg) {
//         resolve({a:'aa', msg:msg})
//     }, 500, "First");
// });
  
// const promise2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 1000, "Second");
// });
  
// Promise.race([promise1, promise2]).then(function (value) {
//     // "Second" // Both promises will resolve, but promise2 is faster
//     console.log(value);
// });