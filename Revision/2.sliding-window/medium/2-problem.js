// 🟡 Longest Repeating Character Replacement
// 🧩 Problem Recap
// s = "AABABBA"
// k = 1

// 👉 You can replace at most k characters
// 👉 Want longest substring where all chars can be made same

// O/p = 4

function longestReptChar(s, k) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;
  let maxFreq = 0;

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    map.set(ch, (map.get(ch) || 0) + 1);
    maxFreq = Math.max(maxFreq, map.get(ch));

    let window = i - left + 1;
    if (window - maxFreq > k) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
    maxLen = Math.max(maxLen, i - left + 1);
  }
  return maxLen;
}
console.log(longestReptChar("AABABBA", 1)); // 4
