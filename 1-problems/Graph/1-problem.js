// create graph

function createGraph(arr) {
  let graph = {};

  for (let [f, s] of arr) {
    if (f in graph) {
      graph[f].push(s);
    } else {
      graph[f] = [s];
    }
    if (s in graph) {
      graph[s].push(f);
    } else {
      graph[s] = [f];
    }
  }
  return graph;
}

console.log(
  createGraph([
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ]),
);
