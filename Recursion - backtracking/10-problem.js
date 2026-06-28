// subset II
// return all unique subset arr = [1,2,2] expected = [ [],[1],[2],[1,2],[2,2],[1,2,2] ]

// function subset(arr) {
//   let res = [];
//   function dfs(idx, curr, memo = new Map()) {
//     if (idx === arr.length) {
//       if (!memo.get(`${curr.join("")}`)) {
//         let samp = `${curr.join("")}`;
//         memo.set(samp, 1);

//         res.push([...curr]);
//       }
//       return;
//     }
//     curr.push(arr[idx]);
//     dfs(idx + 1, curr, memo);
//     curr.pop();
//     dfs(idx + 1, curr, memo);
//   }
//   dfs(0, []);
//   return res;
// }
function subset(arr) {
  let res = [];
  arr.sort((a, b) => a - b);
  function dfs(idx, curr) {
    res.push([...curr]);
    for (let i = idx; i < arr.length; i++) {
      if (i > idx && arr[i] === arr[i - 1]) continue;
      curr.push(arr[i]);
      dfs(i + 1, curr);

      curr.pop();
    }
  }
  dfs(0, []);
  return res;
}
console.log(subset([1, 2, 2]));
