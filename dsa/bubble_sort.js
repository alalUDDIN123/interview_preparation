// const bubbleSort = (arr, n) => {

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             console.log("array of j ::",arr[j]);
//             if (arr[j] > arr[j + 1]) {
//                 let tempArr = arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=tempArr
//             }
//         }
//     }
//     return arr
// }

// let arr = [1, 3, 2, 5, 4];
// let n = arr.length;
// let result = bubbleSort(arr, n);
// console.log("bubble sort::-", result);



const bubbleSort = (n, arr) => {
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temArray = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temArray;
            }
        }
    }
    return arr;
}

let arr = [1, 3, 2, 5, 4];
let n = arr.length;
let result = bubbleSort(n, arr);
console.log("bubble sort::-", result);
