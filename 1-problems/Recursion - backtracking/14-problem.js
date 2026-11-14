// longest nice subset

function main(s) {
  let res = "";
  function dfs(str, curr) {
    if (curr.length === str.length) {
      res = curr.length > res.length ? curr.join("") : res;
      return;
    }
    let set = new Set(str);

    for (let ch of str) {
      if (ch.charCodeAt() >= 97 && !set.has(ch.toLocaleUpperCase())) {
        dfs(curr.join(""), []);
      } else if (ch.charCodeAt() <= 90 && !set.has(ch.toLocaleLowerCase())) {
        dfs(curr.join(""), []);
      }
      curr.push(ch);
      console.log({ curr, set });
    }
  }
  dfs(s, []);
  console.log({ res });
  return res;
}
console.log(main("YazaAay"));
