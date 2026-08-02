// palindrome partitioning

function palindrome(str, l, r) {
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
}
function partition(s) {
  let result = [];
  function dfs(start, curr) {
    if (start === s.length) return result.push([...curr]);

    for (let end = start; end < s.length; end++) {
      if (!palindrome(s, start, end)) continue;
      curr.push(s.substring(start, end + 1));
      dfs(end + 1, curr);
      curr.pop();
    }
  }
  dfs(0, []);
  return result;
}

console.log(partition("aab"));
