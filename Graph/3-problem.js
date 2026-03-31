// 🧩 Problem: Connected Components
// 📌 Problem Statement

// Given a graph:

// {
//   0: [1],
//   1: [0],
//   2: [3],
//   3: [2],
//   4: []
// }

// 👉 Find how many separate groups (components) exist

// 🧠 Visual
// 0 — 1      2 — 3      4

// 👉 Components:

// {0,1}
// {2,3}
// {4}
// ✅ Answer:
// 3

function ConnectedComponent(graph) {
  let visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return;

    visited.add(node);

    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  for (let key in graph) {
    const node = Number(key);
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }
  return count;
}
const graph = {
  0: [1],
  1: [0],
  2: [3],
  3: [2],
  4: [],
};

console.log(ConnectedComponent(graph));
