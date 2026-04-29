// 🟢 EASY #3 — Maximum Number of Vowels in Substring of Size K
// 🧩 Problem
// s = "abciiidef", k = 3

// 👉 Max vowels in any substring of size k

// ✅ Output:

// 3   // "iii"
const set = {
  a: "a",
  e: "e",
  i: "i",
  o: "o",
  u: "u",
};
function maxVowels(s, k) {
  let maxApl = 0;
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (set[s[i]]) {
      sum += 1;
    }
    if (i >= k && set[s[i - k]]) {
      sum -= 1;
    }
    if (i >= k - 1) {
      maxApl = Math.max(maxApl, sum);
    }
  }
  return maxApl;
}

console.log(maxVowels("abciiidef", 3)); // 3
console.log(maxVowels("tryhard", 4)); // 1
