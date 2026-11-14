// 🟡 #1 Longest Substring Without Repeating Characters
// 🧩 Problem
// s = "abcabcbb"

// 👉 Output:

// 3  // "abc"
function longestReptChar(s) {
  const map = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    let ch = s[right];
    if (map.has(ch)) {
      left = Math.max(left, map.get(ch) + 1);
    }
    map.set(ch, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

console.log(longestReptChar("abcabcbb")); // 3
console.log(longestReptChar("pwwkew")); // 3
console.log(longestReptChar("abcdef")); // 6
console.log(longestReptChar("abba")); // 2
console.log(longestReptChar("tmmzuxt")); // 5
