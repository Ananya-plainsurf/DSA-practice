function combinationSum(arr, target, i = 0, curr = []) {
  if (target === 0) {
    console.log(curr);
    return;
  }

  if (i === arr.length || target < 0) {
    return;
  }

  // choose element
  curr.push(arr[i]);
  combinationSum(arr, target - arr[i], i, curr);

  curr.pop();

  // skip element
  combinationSum(arr, target, i + 1, curr);
}
combinationSum([2, 3, 6, 7], 7);
