## <center> JAVASCRIPT </center>

1. What is `javascript`
2. What are the data types available in JavaScript?
3. How do you create an object in JavaScript? show with example
4. What is a callback function in JavaScript? show with example
5. What is the difference between an event and event listener in javascript?
6. What is the difference between synchronous and asynchronous code in JavaScript?
7. What is a closure in JavaScript?
8. What are promises in JavaScript ?

---
# 1.No
  - JavaScript is a high-level, dynamic programming language that is commonly used for web development.
---
# 2.No
  - Primitive data and non-primitive data types.  
---
# 3.No
  - `Object literal notation`
  - `Constructor notation`  
---
# 5.No
   - A callback function is a function that is passed as an argument to another function and is executed later when the first function completes its task.
```
function greeting(name, callback) {
  const message = 'Hello, ' + name + '!';
  callback(message);
}

function printMessage(message) {
  console.log(message);
}

greeting('John', printMessage);

```   
---

# 5.No
   - An event is a thing that triggerred by the browser or by an user and an event listener is a function that listens for that event to occur and executes a specific action in response to the event.
---
# 6.No
   - Synchronous code executes sequentially and blocks the program, while asynchronous code allows the program to continue executing while it performs time-consuming operations in the background.  
---
# 7.No
  - A closure is a function that has the access to its parent scope .  
---
# 8.No
  - Promises represent eventual `completion or failure` of an asynchronous operation in JavaScript  

