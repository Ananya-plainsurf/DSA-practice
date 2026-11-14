// 🟢 EASY #4 — First Unique Character in String
// 🧩 Problem
// s = "leetcode"

// 👉 Return index of first non-repeating char

// 0

function uniqueCharIdx(s) {
  const map = new Map();
  for (let ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}

console.log(uniqueCharIdx("leetcode")); // 0
console.log(uniqueCharIdx("Loveleetcode")); //0
console.log(uniqueCharIdx("loveLeetcodel")); //2
console.log(uniqueCharIdx("aabbc")); // 4
