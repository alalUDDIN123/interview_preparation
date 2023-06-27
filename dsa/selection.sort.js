function selectionSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var min = i;
        for (var j = i + 1; j < len; j++) {
            console.log("array of j in ", arr[j], "array of min", arr[min])
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}


let arr = [1, 3, 2, 5, 4];

let result = selectionSort(arr);
console.log("selection sort::-", result);