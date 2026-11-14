// shortest path in an unWeighted graph

function shortestPath(graph, start, target) {
  const queue = [[start, 0]];
  let front = 0;
  const visited = new Set();

  while (front < queue.length) {
    const [node, distance] = queue[front++];
    if (node === target) return distance;
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "F"],
  E: ["C", "F"],
  F: ["D", "E"],
};

const start = "A";
const target = "F";

console.log(shortestPath(graph, start, target));
