// Google question
// find the first recurring number
// I/p = [2,5,1,2,3,5,1,2,4]
// o/p = 2
// I/P = [2,1,1,2,3,5,1,2,4]
// o/p = 1
// I/p = [2,3,4,5]
// o/p = undefined

function findRecurring(arr) {
  const obj = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (obj.has(arr[i])) {
      return arr[i];
    }
    obj.set(arr[i], 1);
  }
}

console.log(findRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(findRecurring([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(findRecurring([2, 3, 4, 5]));
