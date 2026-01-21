// check permutation

function checkPermutation(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  let seen = new Map();

  for (let ch of s1) {
    seen.set(ch, (seen.get(ch) || 0) + 1);
  }

  for (let ch of s2) {
    if (seen.has(ch)) {
      if (seen.get(ch) === 1) {
        seen.delete(ch);
      } else {
        seen.set(ch, seen.get(ch) - 1);
      }
    } else {
      return false;
    }
  }

  return seen.size ? false : true;
}
console.log(checkPermutation("abc", "bca")); // true
console.log(checkPermutation("abc", "abcd")); // false
console.log(checkPermutation("abc", "abz")); // false
console.log(checkPermutation("aabb", "bbaa")); // true
console.log(checkPermutation("aabb", "abbb")); // false
console.log(checkPermutation(" abb", "abb ")); // true
console.log(checkPermutation(" abb", "abbc ")); // false

// function checkPermutationASCII(s1, s2) {
//   if (s1.length !== s2.length) return false;

//   const freq = new Array(128).fill(0);

//   for (let ch of s1) {
//     freq[ch.charCodeAt(0)]++;
//   }
//   console.log(freq);
//   for (let ch of s2) {
//     const idx = ch.charCodeAt(0);
//     freq[idx]--;
//     // console.log({ freq });
//     if (freq[idx] < 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(checkPermutationASCII("abc", "bca")); // true
// console.log(checkPermutationASCII("abc", "abcd")); // false
// console.log(checkPermutationASCII("abc", "abz")); // false
// console.log(checkPermutationASCII("aabb", "bbaa")); // true
// console.log(checkPermutationASCII("aabb", "abbb")); // false
// console.log(checkPermutationASCII(" abb", "abb ")); // true
// console.log(checkPermutationASCII(" abb", "abbc ")); // false
