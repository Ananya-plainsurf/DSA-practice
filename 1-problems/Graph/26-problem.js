// Min cost to connect all points

function minCost(points) {
  const graph = [];
  const n = points.length;

  for (let i = 0; i < n - 1; i++) {
    const [xi, yi] = points[i];
    for (let j = i + 1; j < n; j++) {
      const [xj, yj] = points[j];
      const cost = Math.abs(xi - xj) + Math.abs(yi - yj);
      graph.push([cost, i, j]);
    }
  }
  graph.sort((a, b) => a[0] - b[0]);

  let edgesUsed = 0;
  let totalCost = 0;
  const parents = Array.from({ length: n }, (_, i) => i);

  function find(x) {
    while (parents[x] !== x) {
      x = parents[x];
    }
    return x;
  }

  function union(a, b) {
    const pointA = find(a);
    const pointB = find(b);

    if (pointA === pointB) return false;

    parents[pointB] = pointA;
    return true;
  }

  for (let [cost, a, b] of graph) {
    if (union(a, b)) {
      totalCost += cost;
      edgesUsed += 1;
    }
    if (edgesUsed === n - 1) break;
  }
  return n - 1 === edgesUsed ? totalCost : -1;
}
console.log(
  minCost([
    [0, 0],
    [1, 0],
    [3, 0],
  ]),
);
console.log(
  minCost([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ]),
);
console.log(
  minCost([
    [3, 12],
    [-2, 5],
    [-4, 1],
  ]),
);
