// Next Greater element I

function nextGreater(nums1, nums2) {
  const map = new Map();
  const result = Array.from({ length: nums1.length }, () => -1);
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], i);
  }
  const stack = [0];
  for (let i = 1; i < nums2.length; i++) {
    let curr = nums2[i];

    while (stack.length && curr > nums2[stack[stack.length - 1]]) {
      let idx = stack.pop();
      let value = nums2[idx];
      if (map.has(value)) {
        let num = map.get(value);
        result[num] = curr;
      }
    }
    stack.push(i);
  }
  return result;
}

console.log(nextGreater([2], [2, 3, 4]));
console.log(nextGreater([5], [5, 1, 2, 3, 6]));
console.log(nextGreater([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreater([4, 3, 2, 1], [4, 3, 2, 1]));
console.log(nextGreater([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
console.log(nextGreater([2, 4], [1, 2, 3, 4]));
