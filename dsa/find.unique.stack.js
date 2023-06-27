// print unique numbers  from an array using stack

let duplicateArray = [1, 2, 7, 1, 2];
let stack = [];
let uniqueArray = [];

for (let i = 0; i < duplicateArray.length; i++) {
  let element = duplicateArray[i];
  if (!stack.includes(element)) {
    stack.push(element);
    uniqueArray.push(element);
  }
}

uniqueArray.sort((a, b) => a - b);

for (let i = 0; i < uniqueArray.length; i++) {
  console.log(uniqueArray[i]);
}
