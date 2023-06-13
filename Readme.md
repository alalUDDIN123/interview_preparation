## <center> JAVASCRIPT </center>
---

1. What is JavaScript?
    - JavaScript is a high-level, interpreted programming language primarily used for adding interactivity to web pages. It runs on the client side (in the browser) and allows dynamic content manipulation, form validation, and interaction with web APIs.

2. What are the data types available in JavaScript?
   JavaScript has several built-in data types:
   - `Number`: represents numeric values.
   - `String`: represents textual data.
   - `Boolean`: represents `true` or `false` values.
   - `Object`: represents a collection of key-value pairs.
   - `Array`: represents an ordered list of values.
   - `Null`: represents the intentional absence of any object value.
   - `Undefined`: represents variables that are declared but not initialized.
   - `Symbol` (added in ECMAScript 6): represents unique identifiers.

3. How do you create an object in JavaScript? Show with an example.
   There are multiple ways to create an object in JavaScript:
   - Using object literal notation:
     ```javascript
     const person = {
       name: 'John',
       age: 30,
     };
     ```
   - Using the `Object` constructor:
     ```javascript
     const person = new Object();
     person.name = 'John';
     person.age = 30;
     ```
   - Using a constructor function:
     ```javascript
     function Person(name, age) {
       this.name = name;
       this.age = age;
     }

     const person = new Person('John', 30);
     ```

4. What is a callback function in JavaScript? Show with an example.
   A callback function is a function that is passed as an argument to another function and is executed later when a certain event occurs or a specific condition is met. It allows asynchronous programming and is commonly used with functions like `setTimeout`, `setInterval`, and for handling asynchronous operations like AJAX requests.

   Example:
   ```javascript
   function greet(name, callback) {
     console.log('Hello, ' + name);
     callback();
   }

   function sayGoodbye() {
     console.log('Goodbye!');
   }

   greet('John', sayGoodbye);
   // Output:
   // Hello, John
   // Goodbye!
   ```

5. What is the difference between an event and an event listener in JavaScript?
   - An event is an action or occurrence, such as a button click, mouse movement, or key press, that happens in the browser.
   - An event listener is a function that is attached to an element and waits for a specific event to occur. It "listens" for the event and executes the associated code when the event occurs.

   Example:
   ```javascript
   const button = document.querySelector('button');

   // Event listener attached to the button
   button.addEventListener('click', () => {
     console.log('Button clicked!');
   });
   ```

6. What is the difference between synchronous and asynchronous code in JavaScript?
   - Synchronous code is executed sequentially, blocking the execution of subsequent code until the current operation completes.
   - Asynchronous code allows multiple operations to be executed concurrently. It doesn't block subsequent code and typically relies on callbacks, promises, or async/await to handle the results of asynchronous operations.

   **`Example`**:
   ```javascript
   // Synchronous code
    console.log('1');
    console.log('2');
    console.log('3');

    // Output:
    // 1
    // 2
    // 3

    // Asynchronous code
    console.log('1');
    setTimeout(() => {
    console.log('2');
    }, 2000);
    console.log('3');

    // Output:
    // 1
    // 3
    // 2 (after 2 seconds)


7. What is a closure in JavaScript?
   A closure is a combination of a function and the lexical environment within which that function was declared. It allows the function to access variables and parameters from its outer (enclosing) function scope even after the outer function has finished executing.

   **`Example`**:
   ```javascript
    function outerFunction() {
    const outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
    }

    const closure = outerFunction();
    closure(); // Output: I am outside!



8. What are promises in JavaScript?
   Promises are objects that represent the eventual completion (or failure) of

 an asynchronous operation and its resulting value. They provide a more structured way to handle asynchronous code compared to traditional callbacks. Promises have three states: `pending`, `fulfilled`, or `rejected`.

 **`Example`**
   ```javascript
    function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber);
        } else {
            reject('Error: Random number is too low');
        }
        }, 2000);
    });
    }

    asyncFunction()
    .then((result) => {
        console.log('Resolved:', result);
    })
    .catch((error) => {
        console.log('Rejected:', error);
    });

    // Output:
    // Resolved: (random number > 0.5) - after 2 seconds
    // or
    // Rejected: Error: Random number is too low - after 2 seconds

---

9. What is the difference between `null` and `undefined` in JavaScript?

   - `null` is an assignment value that represents the intentional absence of any object value. It is a primitive value.
   - `undefined` is a built-in value in JavaScript that is assigned to variables that are declared but not initialized.
   
   Example:
   ```javascript
   let a; // undefined
   let b = null; // null
   ```

10. How do you check if a variable is an array in JavaScript?

    You can use the `Array.isArray()` method to check if a variable is an array.

    Example:
    ```javascript
    const arr = [1, 2, 3];
    console.log(Array.isArray(arr)); // true

    const notArr = 'Hello';
    console.log(Array.isArray(notArr)); // false
    ```

11. What is the difference between `==` and `===` in JavaScript?

    - `==` (loose equality) compares two values for equality after converting their types if needed.
    - `===` (strict equality) compares two values for equality without performing type conversion.

    Example:
    ```javascript
    console.log(1 == '1'); // true (loose equality)
    console.log(1 === '1'); // false (strict equality)
    ```

12. How do you clone an object in JavaScript?

    You can use the `Object.assign()` method or the spread syntax (`...`) to clone an object.

    Example using `Object.assign()`:
    ```javascript
    const obj = { a: 1, b: 2 };
    const clone = Object.assign({}, obj);
    console.log(clone); // { a: 1, b: 2 }
    ```

    Example using spread syntax:
    ```javascript
    const obj = { a: 1, b: 2 };
    const clone = { ...obj };
    console.log(clone); // { a: 1, b: 2 }
    ```

13. What is the difference between `let`, `const`, and `var` in JavaScript?

    - `let` and `const` are block-scoped variables introduced in ECMAScript 6.
      - `let` allows reassigning the value.
      - `const` is a constant variable whose value cannot be reassigned.
    - `var` is a function-scoped variable that has been traditionally used in JavaScript.
      - It has some differences in behavior compared to `let` and `const`.

14. What is the difference between `setTimeout` and `setInterval` functions in JavaScript?

    - `setTimeout` executes a function once after a specified delay.
    - `setInterval` executes a function repeatedly with a fixed time delay between each execution until stopped.

    Example:
    ```javascript
    setTimeout(() => {
      console.log('Delayed message');
    }, 2000);

    const intervalId = setInterval(() => {
      console.log('Repeated message');
    }, 1000);

    // Stop the interval after 5 seconds
    setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);
    ```

15. How do you handle errors in JavaScript?

    In JavaScript, you can handle errors using `try...catch` blocks.

    Example:
    ```javascript
    try {
      // Code that might throw an error
      const result = 10 / 0;
      console.log(result);
    } catch (error) {
      // Code to handle the error
      console.error('An error occurred:', error);
    }
    ```

