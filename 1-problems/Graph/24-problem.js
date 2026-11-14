// Redundant Connection — DSU

function redundantConnect(edges) {
  let n = edges.length;
  const parents = Array.from({ length: n + 1 }, (_, i) => i);

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
    if (!union(a, b)) {
      return [a, b];
    }
  }
  return [];
}

console.log(
  redundantConnect([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 5],
  ]),
);
console.log(
  redundantConnect([
    [1, 2],
    [1, 3],
    [2, 3],
  ]),
);
