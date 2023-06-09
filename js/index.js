
// if(isNaN("l")){
//     alert("Not a mumber")
// }else{
//     alert("A number")
// }

// let i = 15;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);



// function greeting(name, callback) {
//     const message = 'Hello, ' + name + '!';
//     console.log("message;:-",message)
//     let age=20
//     callback(message,age);
//   }

//   function printMessage(message,age) {
//     console.log(message+ ", your age is ",age);
//   }

//   greeting('Ritish', printMessage);


// Synchronous code example
console.log('Start');
for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log('End');



// Asynchronous code example
console.log('Start');
setTimeout(function () {
    console.log('Async task completed');
}, 2000);
console.log('End');

