// check if the array is sorted using recursion

function validateSorted(arr) {
  function isSorted(prev, curr, arr) {
    if (curr >= arr.length) return true;
    if (arr[prev] > arr[curr]) return false;
    return isSorted(prev + 1, curr + 1, arr);
  }
  return isSorted(0, 1, arr);
}

console.log(validateSorted([1, 2, 3, 4, 5]));
console.log(validateSorted([1]));
console.log(validateSorted([]));
console.log(validateSorted([1, 2, 4, 3]));

// 1 - isSorted(0,1,[1,2,4,3])
//     if(1>=3) - no
//     if(1>2) - no
//     isSorted(1,2,[1,2,4,3])
// 2 - isSorted(1,2,[1,2,4,3])
//     if(2>=3) - no
//     if(2>4) - no
//     isSorted(2,3,[1,2,4,3])
// 3 - isSorted(2,3,2,[1,2,4,3])
//     if(3>=3) - no
//     if(4>3) - yes -> termination condition
