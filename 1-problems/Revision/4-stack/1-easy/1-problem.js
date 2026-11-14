// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

let parentheses = {
  "(": ")",
  "{": "}",
  "[": "]",
};
function validParentheses(s) {
  if (s.length < 2) {
    return false;
  }
  const n = [];
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (parentheses[ch]) {
      n.push(parentheses[ch]);
    } else {
      if (n.length === 0) return false;
      let top = n.pop();
      if (top !== ch) {
        return false;
      }
    }
  }

  return !Boolean(n.length); // only return true if array us empty
}

console.log(validParentheses("()"));
console.log(validParentheses("()[]{}"));
console.log(validParentheses("()[]{"));
console.log(validParentheses("()[{"));
console.log(validParentheses("("));
console.log(validParentheses(")("));
console.log(validParentheses("({[]})"));
console.log(validParentheses(""));
