function nextGreater(n1, n2) {
  let stack = [];
  let seen = new Map();

  for (let ch of n2) {
    while (stack.length && ch > stack[stack.length - 1]) {
      seen.set(stack.pop(), ch);
    }
    stack.push(ch);
  }

  while (stack.length) {
    seen.set(stack.pop(), -1);
  }

  return n1.map((x) => seen.get(x));
}

console.log(nextGreater([2, 1, 3], [2, 1, 2, 4, 3]));
console.log(nextGreater([4, 1, 2], [1, 3, 4, 2]));
