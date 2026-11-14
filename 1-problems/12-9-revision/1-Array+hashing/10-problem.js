//    Sliding Window problems
// longest substring without repeating characters

function longestSubstring(s) {
  let maxCount = 0;
  let left = 0;
  const set = new Set();
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxCount = Math.max(maxCount, right - left + 1);
  }
  return maxCount;
}
console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("pwwkew")); // 3
console.log(longestSubstring("bbbbb")); // 1
