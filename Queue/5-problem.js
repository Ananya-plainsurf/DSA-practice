// Q2. First Unique Character in a Stream
// Input:  a a b c b
// Output: a -1 b b c

function uniqueChar(s) {
  const m = new Map();
  const q = [];
  let ns = "";

  for (let ch of s) {
    m.set(ch, (m.get(ch) || 0) + 1);
    if (m.get(ch) === 1) {
      q.push(ch);
    }
    // console.log("m.get(q[0])", m, q);
    // if (m.get(q[0]) === 1) {
    //   ns += q[0];
    // } else {
    //   q.shift();
    //   ns += q[0] || -1;
    // }

    while (q.length && m.get(q[0]) > 1) {
      q.shift();
    }
    ns += q[0] || -1;
  }

  return ns;
}

console.log(uniqueChar("aabcb")); // a -1 b b c
console.log(uniqueChar("abcd")); // a a a a
console.log(uniqueChar("ababcc")); // a a b -1 c -1
