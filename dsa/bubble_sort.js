function bubbleSort(arr, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tempArr = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tempArr;
            }
        }
    }
    return arr;
}

let arr = [1, 3, 2, 5, 4];
let n = arr.length;
let result = bubbleSort(arr, n);
console.log("result::-", result);
