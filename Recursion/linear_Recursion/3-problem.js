// validate parentheses

const item = {
  "(": ")",
  "[": "]",
  "{": "}",
};
function validateParentheses(s) {
  if (s.length % 2 !== 0) return `${s} - ${false}`; // because all should have pair
  const stack = []; // lifo
  for (let ch of s) {
    if (item[ch]) {
      stack.push(item[ch]); // push- keep getting added from back
    } else {
      const popVal = stack.pop(); // pop - remove from back LIFO
      if (ch !== popVal) {
        return `${s} - ${false}`;
      }
    }
  }
  if (stack.length > 0) return `${s} - ${false}`;
  return `${s} - ${true}`;
}

console.log(validateParentheses("()[]{}"));
console.log(validateParentheses("([{}])"));
console.log(validateParentheses("([{]})"));
console.log(validateParentheses("([{])"));
console.log(validateParentheses("(((("));
