// Given a string s, find the length of the longest substring without repeating characters.

// s = "abcabcbb"

// Output = 3

function maxSubstring(s) {
  const set = new Set();
  let left = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]); // go from 0 to the index of right to remove and make room for current val
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}
console.log(maxSubstring("abcabcbb"));
console.log(maxSubstring("pwwkew"));
console.log(maxSubstring("bbbbb"));
console.log(maxSubstring("okjhkhjoplmm"));
