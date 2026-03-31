// 🧩 Problem: Longest Increasing Subsequence (LIS)
// arr = [10,9,2,5,3,7,101,18]
// o/p = 4

function LIS(arr) {
  let tails = [];

  for (let num of arr) {
    let left = 0;
    let right = tails.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    tails[left] = num;
  }
  console.log({ tails });
  return tails.length;
}

console.log(LIS([10, 9, 2, 5, 3, 7, 101, 18])); //4
console.log(LIS([1, 2, 3, 4])); //4
console.log(LIS([4, 3, 2, 1])); //1
console.log(LIS([3, 1, 2])); //2
console.log(LIS([10, 9, 2, 5, 3, 7])); //3
console.log(LIS([4, 10, 4, 3, 8, 9])); //3
console.log(LIS([1, 3, 6, 7, 9, 4, 10, 5, 6])); //6
