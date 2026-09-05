// Number of connected components in an Undirected Graph - DSU problem

function connectedComponent(n, edges) {
  const parents = Array.from({ length: n }, (_, i) => i);
  let components = n;

  function find(x) {
    while (parents[x] !== x) {
      x = parents[x];
    }
    return x;
  }

  function union(a, b) {
    const rootA = find(a);
    const rootB = find(b);

    if (rootA === rootB) return false;

    parents[rootB] = rootA;
    return true;
  }

  for (let [a, b] of edges) {
    if (union(a, b)) {
      components--;
    }
  }
  return components;
}
console.log(
  connectedComponent(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ]),
);
console.log(
  connectedComponent(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ]),
);
console.log(
  connectedComponent(4, [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
  ]),
);

console.log(connectedComponent(4, []));
