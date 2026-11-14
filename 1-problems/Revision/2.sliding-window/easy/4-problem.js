// 🟢 EASY #4 — Find All Anagrams in a String (Intro Level)
// 🧩 Problem
// s = "cbaebabacd"
// p = "abc"

// 👉 Find starting indices of anagrams

// ✅ Output:

// [0, 6]

function findAnagrams(s, p) {
  const pMap = new Map();
  const k = p.length;
  for (let ch of p) {
    pMap.set(ch, (pMap.get(ch) || 0) + 1);
  }
  let window = new Map();
  const res = [];

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    window.set(ch, (window.get(ch) || 0) + 1);
    if (i >= k) {
      let leftChar = s[i - k];
      if (window.get(leftChar) === 1) {
        window.delete(leftChar);
      } else {
        window.set(leftChar, window.get(leftChar) - 1);
      }
    }

    if (i >= k - 1 && isEquals(window, pMap)) {
      res.push(i - (k - 1));
    }
  }
  return res;
}

function isEquals(window, pMap) {
  if (window.size !== pMap.size) return false;
  for (let [key, val] of window) {
    if (pMap.get(key) !== val) return false;
  }
  return true;
}

console.log(findAnagrams("cbaebabacd", "abc"));
