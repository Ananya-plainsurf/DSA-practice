// find the sum in the given array

// i/p: [1,2,3,9] = 8
// o/p: 0
// i/p: [2,4,1,4] = 8
// o/p: true or 4,4
// i/p: [5,2,1,3,6] = 8
// o/p: true or 5,3

function check_for_sums(nums, sum) {
  let obj1 = {};

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let rem = sum - curr;
    if (rem in obj1) {
      return [rem, curr];
    } else {
      obj1[curr] = curr;
    }
  }
  return 0;
}

console.log(check_for_sums([2, 4, 1, 4], 8));
console.log(check_for_sums([5, 2, 1, 3, 6], 8));
console.log(check_for_sums([1, 2, 3, 9], 8));
console.log(check_for_sums([1, 2, 3, 8], 8));
console.log(check_for_sums([0, 8], 8));
