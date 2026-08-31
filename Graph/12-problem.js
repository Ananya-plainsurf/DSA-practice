// Clone Graph
class Node {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node4];
node4.neighbors = [node1, node2];

function cloneGraph(node) {
  if (!node) return node;

  const mapHas = new Map();
  function dfs(node) {
    // 1. What happens if node is already in Map?
    if (mapHas.has(node)) {
      return mapHas.get(node);
    }

    // 2. Create clone
    let clone = new Node(node.val);

    // 3. Put clone in Map
    mapHas.set(node, clone);

    // 4. Loop through neighbors
    for (let neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    // 6. return clone
    return clone;
  }
  return dfs(node);
}

const cloned = cloneGraph(node1);

console.log(cloned);
