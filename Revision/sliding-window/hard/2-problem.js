// 🔴 Minimum Window Substring (BIG ONE)
// 🧩 Problem
// s = "ADOBECODEBANC"
// t = "ABC"

// 👉 Find smallest substring of s containing all chars of t

// ✅ Output:

// "BANC"

function minSubString(s, t) {
  let tMap = new Map();
  for (let ch of t) {
    tMap.set(ch, (tMap.get(ch) || 0) + 1);
  }

  let windowMap = new Map();
  let have = 0;
  let need = tMap.size;

  let left = 0;
  let minLen = Infinity;
  let res = [-1, -1];

  for (let right = 0; right < s.length; right++) {
    let ch = s[right];
    windowMap.set(ch, (windowMap.get(ch) || 0) + 1);

    if (tMap.has(ch) && windowMap.get(ch) === tMap.get(ch)) {
      have++;
    }

    // 🔥 THIS IS WHERE YOU TRIGGER RESULT
    while (have === need) {
      // update result
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        res = [left, right];
      }

      // shrink window
      let leftChar = s[left];
      windowMap.set(leftChar, windowMap.get(leftChar) - 1);

      if (tMap.has(leftChar) && windowMap.get(leftChar) < tMap.get(leftChar)) {
        have--;
      }

      left++;
    }
  }

  let [l, r] = res;
  return minLen === Infinity ? "" : s.slice(l, r + 1);
}
console.log(minSubString("ADOBECODEBANC", "ABC"));
