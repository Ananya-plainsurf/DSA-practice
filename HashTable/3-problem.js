// find the median
// we have a sorted array so we need to find median
// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function findMedian(nums1, nums2) {
  let total = nums1.length + nums2.length;
  let avgLen = Math.floor(total / 2);
  let newArr = [];
  let i = 0;
  let j = 0;
  while (newArr.length <= avgLen) {
    if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {
      // i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])
      newArr.push(nums1[i]);
      i++;
    } else {
      newArr.push(nums2[j]);
      j++;
    }
  }
  console.log({ newArr, avgLen });
  if (total % 2 === 0) {
    let sum = newArr[newArr.length - 1] + newArr[newArr.length - 2];
    return sum / 2;
  } else {
    return newArr[newArr.length - 1];
  }
}

console.log(findMedian([1, 3], [2]));
console.log(findMedian([1, 3], []));
console.log(findMedian([1, 2], [3, 4]));
console.log(findMedian([1, 2, 5], [3, 4, 6]));
console.log(findMedian([1, 2, 5, 6], [3, 4, 8]));
