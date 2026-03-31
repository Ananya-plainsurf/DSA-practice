// merge sort practice

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
function divideArr(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = divideArr(arr.slice(0, mid));
  let right = divideArr(arr.slice(mid));

  return merge(left, right);
}

function mergeSort(arr) {
  return divideArr(arr);
}

console.log(mergeSort([5, 2, 4, 1]));
console.log(mergeSort([5, 2, 10, 0, 4, 1]));
