// 🧩 Problem — Generate Parentheses

// Given n pairs of parentheses, generate all valid combinations.

// Example:

// n = 3

// Output:

// ((()))
// (()())
// (())()
// ()(())
// ()()()

function parentheses(n, str = "", open = 0, close = 0) {
  if (str.length === 2 * n) {
    console.log(str);
    return;
  }

  if (open < n) {
    parentheses(n, str + "(", open + 1, close);
  }
  //   console.log({ str });
  if (close < open) {
    parentheses(n, str + ")", open, close + 1);
  }
}
parentheses(3);
