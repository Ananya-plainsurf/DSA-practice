/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // const isBracketValid = {
  //     '(': ')',
  //     '[': ']',
  //     '{': '}'
  // }
  // const stack = [];
  // for (let char of s) {
  //     if (isBracketValid[char]) {
  //         stack.push(char)
  //     } else {
  //         const lastChar = stack.pop();
  //         if (isBracketValid[lastChar] !== char) {
  //             return false
  //         }
  //     }
  // }
  // return stack.length === 0

  if (s.length < 2) {
    return false;
  }
  const chars = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];

  for (let c of s) {
    if (chars[c]) {
      stack.push(c);
    } else {
      let elem = stack.pop();
      if (chars[elem] !== c) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("(("));
console.log(isValid("["));
console.log(isValid("[({]})]"));
console.log(isValid("()"));
