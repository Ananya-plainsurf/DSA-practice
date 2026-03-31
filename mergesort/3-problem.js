// Array:
// [2,4,1,3,5]

// We check all pairs 👇

// Start with 2:
// 2 vs 4 → OK
// 2 vs 1 → ❌ inversion
// 2 vs 3 → OK
// 2 vs 5 → OK

// 👉 Count = 1

// Now 4:
// 4 vs 1 → ❌ inversion
// 4 vs 3 → ❌ inversion
// 4 vs 5 → OK

// 👉 Count = 2 more

// Now 1:
// 1 vs 3 → OK
// 1 vs 5 → OK
// Now 3:
// 3 vs 5 → OK
// ✅ Total Inversions
// (2,1), (4,1), (4,3)

// 👉 Total = 3

function divideArr(arr) {
  if (arr.length <= 1) return { sorted: arr, count: 0 };

  let mid = Math.floor(arr.length / 2);
  let left = divideArr(arr.slice(0, mid));
  let right = divideArr(arr.slice(mid));

  let merge = mergeSort(left.sorted, right.sorted);
  return {
    sorted: merge.sorted,
    count: left.count + right.count + merge.count,
  };
}

function mergeSort(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  let count = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      count += left.length - i;
      j++;
    }
  }

  return {
    sorted: result.concat(left.slice(i)).concat(right.slice(j)),
    count,
  };
}
function countInversions(arr) {
  return divideArr(arr).count;
}

console.log(countInversions([2, 4, 1, 3, 5])); // 3
console.log(countInversions([3, 2, 1]));
