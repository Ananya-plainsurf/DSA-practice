// Jump Game II

function jumpGame2(nums) {
  let farthest = 0;
  let jumpCount = 0;

  let currentEnd = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumpCount++;
      currentEnd = farthest;
    }
  }
  return jumpCount;
}
console.log(jumpGame2([2, 3, 1, 1, 4]));
console.log(jumpGame2([2, 3, 0, 1, 4]));
console.log(jumpGame2([0]));
