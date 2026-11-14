// letter combination

let mapping = {
  2: "abc",
  3: "def",
};

function main(digits) {
  let res = [];

  function dfs(idx, curr) {
    if (curr.length === digits.length) {
      res.push(curr.join(""));
      return;
    }

    let digit = digits[idx];
    let letters = mapping[digit];

    for (let i = 0; i < letters.length; i++) {
      curr.push(letters[i]);

      dfs(idx + 1, curr);

      curr.pop();
    }
  }

  dfs(0, []);

  return res;
}

console.log(main("23"));
