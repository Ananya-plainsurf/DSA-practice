// 84. Largest Rectangle in Histogram
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:

// Input: heights = [2,4]
// Output: 4

function histogram(heights) {
  let stack = [];
  let maxArea = 0;

  heights.push(0); // 🔥 trick to flush stack

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      console.log({ stack });

      let height = heights[stack.pop()];
      console.log({ stack, height, i });
      let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      console.log({ width });

      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
}

console.log(histogram([2, 1, 5, 6, 2, 3, 1]));
console.log(histogram([2, 4]));
