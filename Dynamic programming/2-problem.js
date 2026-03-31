function maxSubArr(arr) {
  let currSum = arr[0];
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    currSum = Math.max(arr[i], currSum + arr[i]);
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
}
console.log(maxSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
