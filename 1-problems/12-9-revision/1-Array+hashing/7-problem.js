//    Container With Most Water

function ContainerWater(heights) {
  let maxWater = 0;
  let l = 0;
  let r = heights.length - 1;

  while (l < r) {
    const left = heights[l];
    const right = heights[r];
    const height = Math.min(left, right);
    const width = l - r;
    maxWater = Math.max(maxWater, height * width);
    if (left <= right) {
      l++;
    } else {
      r--;
    }
  }
  return maxWater;
}

console.log(ContainerWater([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(ContainerWater([1, 1])); // 1
