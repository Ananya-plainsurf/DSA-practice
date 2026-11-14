function bfs(start, graph) {
  const visited = new Set();
  const queue = [start];

  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();
    // console.log(node);

    for (let neighbor of graph[node]) {
      //   console.log({ neighbor });
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return Array.from(visited);
}

console.log(bfs(0, { 0: [1, 2], 1: [0, 3], 2: [0, 3], 3: [1, 2] }));
