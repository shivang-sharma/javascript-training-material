// document.getElementById("btn1").addEventListener('click', function () {
//     console.log("btn1");
// });
// document.getElementById("btn2").addEventListener('click',  function () {
//     console.log("btn2");
// });
// 80 lines
// function complexTask() {
//     let result = 0;
//     for (let i =0;i<2000000000; i++) {
//         result = i;
//     }
//     return result;
// }
// console.log("Task");
// setTimeout(function () {
//     console.log("Yay");
// }, 5000);
// console.log(complexTask());
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
// task2(result); //   Task 2 done undefined


// function task1(callback) {
//     let result;
//     setTimeout(()=> {
//         // some processing
//         result = 20;
//         console.log("Task 1 done");
//         callback(result);
//     }, 3000);
// }
// function task2(result) {
//     console.log("Task 2 done ", result);
// }
// task1(task2);


/**
 * Drawbacks of callbacks
 * In a ecommerce app,
 * step-1 create a order
 * step-2 show order details before making payment
 * step-3 proceed to payment
 * step-4 place order
 */

// cart = ["item1", "item2"]

// let orderId = backendAPI.createOrder(cart); // 50ms 10 sec
// backendAPI.showOrderDetails(orderId);
// let paymentStatus = backendAPI.proceedPayment();
// backendAPI.placeOrder(paymentStatus);

// // Callback Hell
// backendAPI.createOrder(cart, function (orderId) {

//     backendAPI.showOrderDetails(orderId, function () {

//         backendAPI.proceedPayment(function (paymentStatus) {

//             backendAPI.placeOrder(paymentStatus, function () {

//                 backendAPI.someAPICall(function () {

//                     backendAPI.someOtherAPICall(function () {
                    
//                         backendAPI.anotherAPICall();                                                                             

//                     })

//                 })

//             })

//         });

//     })

// })

// // Inversion Of Control
// backendAPI.createOrder(cart, function (orderId) {
//     backendAPI.showOrderDetails(orderId);
// });