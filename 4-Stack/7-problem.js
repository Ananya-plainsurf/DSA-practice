function removeDuplicates(s) {
  let stack = [];
  let i = 0;
  s = s.split("");

  while (i < s.length) {
    let elem = stack.pop();
    let seen = new Set();

    if (!seen.has(s[i])) {
      if (elem === s[i]) {
        seen.clear(s[i]);
        s.splice(i - 1, i);
        i = 0;
      } else {
        seen.add(s[i]);
        stack.push(s[i]);
        i++;
      }
    } else {
      s.splice(i);
    }
    console.log({ s, stack });
  }

  return s.join("");
}

console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));
