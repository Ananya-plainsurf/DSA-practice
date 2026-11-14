// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1

function firstUnqChar(s) {
  const map = new Map();
  const qu = [];

  //   for (let ch of s) {
  //     map.set(ch, (map.get(ch) || 0) + 1);
  //     if (map.get(ch) === 1) {
  //       qu.push(s.indexOf(ch));
  //     }
  //   }

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    map.set(ch, (map.get(ch) || 0) + 1);
    if (map.get(ch) === 1) {
      qu.push(i);
    }
  }
  while (qu.length && map.get(s[qu[0]]) > 1) {
    qu.shift();
  }
  console.log({ map, qu, lastidx: qu.length ? qu[0] : -1 });

  return qu.length ? qu[0] : -1;
}

console.log(firstUnqChar("loveleetcode"));
console.log(firstUnqChar("leetcode"));
