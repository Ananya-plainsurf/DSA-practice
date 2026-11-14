function reduceString(s) {
  let seen = new Set();

  for (let ch of s) {
    if (!seen.has(ch)) {
      seen.add(ch);
    }
  }

  return seen.size;
}

console.log(reduceString("baadccab"));
console.log(reduceString("cbbd"));
