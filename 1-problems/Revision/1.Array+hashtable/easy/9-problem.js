// 🟢 EASY #3 — Intersection of Two Arrays
// 🧩 Problem
// nums1 = [1,2,2,1]
// nums2 = [2,2]

// 👉 Output unique intersection

// [2]

function intersectionOfArr(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  const seen = new Set(Array.from(nums1));
  const result = [];
  for (let num of nums2) {
    if (seen.has(num)) {
      result.push(num);
      seen.delete(num);
    }
  }
  return result;
}
console.log(intersectionOfArr([1, 2, 2, 1], [2, 2]));
console.log(intersectionOfArr([1, 1, 2, 2, 3, 3], [2, 2, 3, 3, 4, 4]));
console.log(intersectionOfArr([], [1, 2, 3]));
console.log(intersectionOfArr([-1, -2, 3], [3, -1, 5]));
