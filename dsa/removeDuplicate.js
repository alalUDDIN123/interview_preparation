let dupArray = [1, 2, 3, 1, 2];
let uniqueArray = [];

for (let i = 0; i < dupArray.length; i++) {
  let isDuplicate = false;
  for (let j = i + 1; j < dupArray.length; j++) {
    if (dupArray[i] === dupArray[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    uniqueArray.push(dupArray[i]);
  }
}

console.log(uniqueArray.sort()); // [1, 2, 3]
``
