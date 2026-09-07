// Jump Game

function jumpGame(nums) {
  let maxJump = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxJump) {
      return false;
    }

    maxJump = Math.max(maxJump, i + nums[i]);
  }
  return true;
}
console.log(jumpGame([2, 3, 1, 1, 4])); // true
console.log(jumpGame([3, 2, 1, 0, 4])); // false
console.log(jumpGame([2, 0, 0])); // true
console.log(jumpGame([2, 5, 0, 0])); // true
console.log(jumpGame([2, 1, 0, 0])); //false
