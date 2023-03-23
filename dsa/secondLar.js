
// function findSecondLargest(a, n) {
//     let largest = 0;
//     let secondLargest = 0;

//     for (let i = 0; i < n; i++) {
//       if (a[i] > largest) {
//         secondLargest = largest;
//         largest = a[i];
//       } else if (a[i] > secondLargest && a[i] != largest) {
//         secondLargest = a[i];
//       }
//     }

//     return secondLargest;
//   }

//   const a = [1,3,2,4,5];
//   let n = a.length;
//   let answer = findSecondLargest(a, n);
//   console.log("The second largest element in the array is: " + answer);

// function findSecondLargest(a) {
//     console.log("Before sorting :- ", a)
//     const sorted = a.sort((x, y) => y - x);
//     console.log("After sorting :- ", a)
//     return sorted[1];
//   }

//   const a = [1, 3, 2, 4, 5,10,20];
//   const answer = findSecondLargest(a);
//   console.log(answer); 


// function SecondLargets(arr) {

//     let sortedArray = arr.sort((a, b) => a - b);

//     console.log('\n',"Expected output :- ",4,'\n')

//     console.log('\n', "Output:- ", sortedArray[sortedArray.length-2],'\n');
// }

// let arr = [2,3,4,1,5]

// SecondLargets(arr)

