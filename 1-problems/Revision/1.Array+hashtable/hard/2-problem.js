// trapping rain water

function trappingWater(height) {
  //   const n = height.length;
  //   const maxLeft = [];
  //   const maxRight = new Array(n);

  //   // going left -> right;
  //   for (let i = 0; i < n; i++) {
  //     maxLeft.push(Math.max(maxLeft[i - 1] || 0, height[i]));
  //   }

  //   //   going right <- left and computing min;

  //   for (let i = n - 1; i >= 0; i--) {
  //     maxRight[i] = Math.max(maxRight[i + 1] || 0, height[i]);
  //   }

  //   let water = 0;
  //   for (let i = 0; i < n; i++) {
  //     water += Math.min(maxLeft[i], maxRight[i]) - height[i];
  //   }
  //   return water;

  // ------------------------ TC = O(n) SC = O(1)-------------------------------

  const n = height.length;
  if (n === 0) return 0;
  let l = 0;
  let r = n - 1;
  let maxL = height[l];
  let maxR = height[r];
  let water = 0;

  while (l < r) {
    if (height[l] <= height[r]) {
      maxL = Math.max(maxL, height[l]); // first updating the maxL so that we don't have to apply (sum > 0) condition
      water += maxL - height[l]; // if we switch the order then we have to apply

      //   let sum = maxL - height[l];
      //   if (sum > 0) water += sum;
      //   maxL = Math.max(maxL, height[i]);
      l++;
    } else {
      maxR = Math.max(maxR, height[r]);
      water += maxR - height[r];
      r--;
    }
  }
  return water;
}
console.log(trappingWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
