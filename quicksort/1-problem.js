// sort array using quick sort

// ⏱️ Complexity
// Case	Time
// Best / Avg	O(n log n)
// Worst	O(n²)
// 📦 Space
// O(n) (because of new arrays)
// function quickSort(arr) {
//   if (arr.length <= 1) return arr;

//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

//  trying in-place
// ⏱️ Complexity
// Case	Time
// Avg	O(n log n)
// Worst	O(n²)
// 📦 Space
// O(log n) (recursion stack)
function quickSort(arr, left, right) {
  if (left >= right) return;

  let pivotIndex = partition(arr, left, right);

  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // part pivot
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
}
let arr = [5, 2, 4, 1];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
let arr1 = [10, 40, 12, 4, -1];
quickSort(arr1, 0, arr1.length - 1);
console.log(arr1);
console.log(Math.floor(0 / 2));

// step1:
// quickSort([5,2,4,1],0, 3)
// if(0>=3) x
// pivotIndex = part(arr, 0, 3)
//       pivot = arr[r] = arr[3] = 1
//       i = left -1 = 0 -1 = -1
//       j = 0
//         (arr[0] < arr[pivot]) = (5<1) no
//       j = 1
//         (2 < 1) NO
//       j = 2
//         (4 < 1) NO
//       j = 3 terminalt

//       // place pivot
//       [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
//       [arr[-1+1 = 0], arr[3]] = [arr[3] , arr[-1+1]]
//       [arr[0],arr[3]] = [1,5]

//       arr = [1,2,4,5]
//       return i+1 = -1+1 = 0
// pivotIndex = part(arr, 0, 3)   = 0
// quickSort(arr, 0, 0-1 = -1)
// quickSort(arr, 0+1 = 1, 3)

// step2: quickSort(arr, 0, 0-1 = -1)
//   if(left >= right ) = (0 >= -1) = yes return

// step3: quickSort(arr, 0+1 = 1, 3)
//   if(left >= right) = (1 >= 3) no
//   pivotIndex = part([1,2,4,5], 1,3)
//       pivot = a[r] = a[3] = 5
//       i =left -1 = 1- 1 = 0
//       j = left = 1

//       j = 1
//          (arr[1] < arr[pivot]) = (2<5) yes
//          i = 1
//          [arr[i], arr[j]] = [arr[j], arr[i]];
//          [arr[1], arr[1]] = [arr[1]],arr[1];
//          [arr[1], arr[1]] = [2,2]
//          arr = [1,2,4,5]
//       j = 2
//         (arr[2] < arr[pivot]) = (4<5) yes
//         i = 2
//          [arr[i], arr[j]] = [arr[j], arr[i]];
//          [arr[2], arr[2]] = [arr[2]],arr[2];
//          [arr[2], arr[2]] = [4,4]
//          arr = [1,2,4,5]
//       j = 3 (j < right) (3 < 3) no

//           // place pivot
//       [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
//       [arr[2 + 1], arr[3]] = [arr[3], arr[2 + 1]];
//       [arr[3], arr[3]] = [5, 5];

//       return i +1 = 3

//   pivotIndex = part([1,2,4,5], 1,3) = 3
// quickSort(arr,  1, 3-1 = 2)
// quickSort(arr,  3+1 = 4, 3)

// step4: quickSort(arr,  3+1 = 4, 3)
//  (left >= right) (4 >= 3) return

// step5: quickSort(arr,  1, 3-1 = 2)
//  (1 >= 2) no
//  pivotIndex = part([1,2,4,5], 1,2)
//       pivot = arr[r] = arr[2] = 4
//       i = left -1 = 1-1 0

//       j = left = 1
//         if(arr[j] < arr[pivot]) = (arr[1] < arr[2]) = (2 < 4) yes
//         i = 1
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         [arr[1], arr[1]] = [arr[1], arr[1]];
//         [arr[1], arr[1]] = [2,2];
//       j =  2  (j < right) = (2 < 2)

//           // place pivot
//       [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
//       [arr[1 + 1], arr[2]] = [arr[2], arr[1 + 1]];
//       [arr[2], arr[2]] = [4, 4];

//       return i + 1 = 2

//   pivotIndex = part([1,2,4,5], 1,2)  = 2

//   quickSort([1,2,3,4,5], 1, 1)
//   quickSort([1,2,3,4,5], 3, 2)

// step6: quickSort([1,2,3,4,5], 1, 1)
//   (left >= right) (1 >= 1) return

// step7: quickSort([1,2,3,4,5], 3, 2)
// (left >= right) (3>=2) return

// result = [1,2,3,4,5]
