// shorted cycle in Graph

function shortestCycle(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  let shortest = Infinity;

  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let start = 0; start < n; start++) {
    const queue = [];
    const distance = Array(n).fill(-1);
    let front = 0;

    distance[start] = 0;
    queue.push([start, -1]);

    while (front < queue.length) {
      const [node, parent] = queue[front++];
      for (const neighbor of graph[node]) {
        // not visited

        if (distance[neighbor] === -1) {
          distance[neighbor] = distance[node] + 1;
          queue.push([neighbor, node]);
        } else if (neighbor !== parent) {
          let currentDist = distance[neighbor] + distance[node] + 1;
          shortest = Math.min(shortest, currentDist);
        }
      }
    }
  }
  return shortest !== Infinity ? shortest : -1;
}

console.log(
  shortestCycle(4, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ]),
);
