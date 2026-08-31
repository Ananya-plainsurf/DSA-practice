// is graph bipartite?

function isBipartite(graph) {
  const n = graph.length;
  const group = Array(n).fill(-1);
  const queue = [];
  let front = 0;

  for (let current = 0; current < n; current++) {
    if (group[current] === -1) {
      group[current] = 0;
      queue.push(current);
    }

    while (front < queue.length) {
      const node = queue[front++];

      for (let neighbor of graph[node]) {
        if (group[neighbor] === -1) {
          group[neighbor] = 1 - group[node];
          queue.push(neighbor);
        } else if (group[neighbor] === group[node]) {
          return false;
        }
      }
    }
  }
  return true;
}
console.log(
  isBipartite([
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ]),
);
console.log(
  isBipartite([
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
  ]),
);
