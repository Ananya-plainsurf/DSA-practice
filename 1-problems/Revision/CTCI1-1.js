// is unique

function isUnique(str) {
  const seen = new Set();

  for (let ch of str) {
    if (seen.has(ch)) {
      return false;
    }
    seen.add(ch);
  }

  return true;
}

console.log(isUnique("abcd")); // true
console.log(isUnique("aabcd")); // false
console.log(isUnique("abcdsd")); // false
console.log(isUnique("")); // true
console.log(isUnique("Aa")); // true
