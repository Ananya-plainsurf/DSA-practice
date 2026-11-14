//    Valid Parentheses

function validatePar(s) {
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const stack = []; // LIFO

  for (let p of s) {
    if (map[p]) {
      stack.push(p);
    } else if (map[stack[stack.length - 1]] === p) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(validatePar("([{}])")); //true
console.log(validatePar("([{]})")); // false
console.log(validatePar("[")); // false
