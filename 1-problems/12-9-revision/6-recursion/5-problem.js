// decode string

function decode(s) {
  const stack = [];

  function dfs(i, letters) {
    let current = "";
    let num = 0;

    while (i < s.length) {
      const char = s[i];

      if (char >= "0" && char <= "9") {
        num = num * 10 + Number(char);
      } else if (char === "[") {
        const [decoded, nextIndex] = dfs(i + 1);

        current += decoded.repeat(num);
        num = 0;
        i = nextIndex - 1;
      } else if (char === "]") {
        return [current, i + 1];
      } else {
        current += char;
      }

      i++;
    }

    return [current, i];
  }

  return dfs(0)[0];
}

console.log(decode("3[a2[cd]]")); // "acdcdacdcdacdcd"
console.log(decode("3[a]2[bc]")); // "aaabcbc"
console.log(decode("2[abc]3[cd]ef")); // "abcabccdcdcdcdef"
