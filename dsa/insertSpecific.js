const fruits = ["apple", "banana", "orange"];
fruits.splice(1,0,"grap");
console.log(fruits); // Output: ["apple", "grape", "banana", "orange"]


let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 5);
console.log(arr); // Output: [1, 2, 3, 5, 4, 5]
