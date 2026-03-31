// Given your graph:

// {
//   0: [1,2],
//   1: [0,3],
//   2: [0,3],
//   3: [1,2]
// }

// 👉 If you start DFS from 0, what do you think the order could be?

function findPath(node, graph, visited, result) {
  if (visited.has(node)) return;

  visited.add(node);
  result.push(node);

  for (let neighbor of graph[node]) {
    findPath(neighbor, graph, visited, result);
  }
}

const visited = new Set();
const result = [];
const graph = {
  0: [1, 2],
  1: [0, 3],
  2: [0, 3],
  3: [1, 2],
};
findPath(
  0,
  {
    0: [1, 2],
    1: [0, 3],
    2: [0, 3],
    3: [1, 2],
  },
  visited,
  result,
);
console.log(result);
