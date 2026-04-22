// 🟢 EASY #2 — Valid Anagram
// 🧩 Problem
// s = "anagram"
// t = "nagaram"

// 👉 Check if t is an anagram of s

function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  let count = new Map();
  for (let i = 0; i < s.length; i++) {
    count.set(s[i], count.get(s[i]) + 1 || 1);
  }
  for (let char of t) {
    if (!count.has(char)) return false;

    count.set(char, count.get(char) - 1);

    if (count.get(char) === 0) {
      count.delete(char);
    }
  }

  return true;
}
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("anagram", "nagmram"));
console.log(validAnagram("aa", "bb"));
