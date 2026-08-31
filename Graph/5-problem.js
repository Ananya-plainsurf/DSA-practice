// DFS on Graph

function graphDFS(graph) {
  const set = new Set();
  function dfs(node) {
    if (set.has(node)) return;

    set.add(node);

    for (let neighbors of graph[node]) {
      dfs(neighbors);
    }
  }
  dfs(0);
  return set;
}

const graph = {
  0: [1, 2],
  1: [0, 3],
  2: [0, 3],
  3: [1, 2],
};

console.log(graphDFS(graph));
