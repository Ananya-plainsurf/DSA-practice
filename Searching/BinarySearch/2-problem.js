// First Occurrence / Last Occurrence

// Example:

// [1,2,2,2,3,4]

// Target:

// 2

// Normal binary search may return:

// index = 2

// But we want:

// first index → 1
// last index → 3

function Occurrence(arr, target) {
  function firstFind() {
    let left = 0;
    let right = arr.length - 1;
    let first = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      console.log({ left, right, mid });

      if (arr[mid] === target) {
        first = mid;
        right = mid - 1;
      }

      if (arr[mid] < target) {
        left = mid + 1;
      } else if (arr[mid] > target) {
        right = mid - 1;
      }
    }
    return first;
  }

  function lastFind() {
    let left = 0;
    let right = arr.length - 1;
    let last = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        last = mid;
        left = mid + 1;
      }

      if (arr[mid] < target) {
        left = mid + 1;
      } else if (arr[mid] > target) {
        right = mid - 1;
      }
    }
    return last;
  }

  return { first: firstFind(), last: lastFind() };
}

console.log(Occurrence([1, 2, 2, 2, 3, 4], 2));
console.log(Occurrence([1, 2, 2, 2, 3, 3, 3, 3, 3, 4], 3));
console.log(1 / 2);
