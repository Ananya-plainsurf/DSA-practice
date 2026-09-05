// // Network Delay time

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   insert(value) {
//     this.heap.push(value);
//     this.bubbleUp();
//   }

//   removeMin() {
//     const min = this.heap[0];
//     const last = this.heap.pop();
//     if (this.heap.length === 0) return min;
//     this.heap[0] = last;
//     this.bubbleDown();
//     return min;
//   }

//   bubbleUp() {
//     let i = this.heap.length - 1;

//     while (i > 0) {
//       const parentIdx = Math.floor((i - 1) / 2);
//       if (this.heap[parentIdx][0] <= this.heap[i][0]) break;

//       [this.heap[parentIdx], this.heap[i]] = [
//         this.heap[i],
//         this.heap[parentIdx],
//       ];

//       i = parentIdx;
//     }
//   }

//   bubbleDown() {
//     let i = 0;
//     while (i < this.heap.length) {
//       const left = Math.floor(2 * i + 1);
//       const right = Math.floor(2 * i + 2);

//       // No left child = no children at all
//       if (left >= this.heap.length) break;

//       let smallerChild = left;

//       if (
//         right < this.heap.length &&
//         this.heap[right][0] < this.heap[left][0]
//       ) {
//         smallerChild = right;
//       }

//       // swap with parent
//       if (this.heap[smallerChild][0] >= this.heap[i][0]) break;

//       [this.heap[smallerChild], this.heap[i]] = [
//         this.heap[i],
//         this.heap[smallerChild],
//       ];
//       i = smallerChild;
//     }
//   }
// }
// // function getMinDist(queue) {
// //   let minIdx = 0;

// //   for (let minDistIdx = 0; minDistIdx < queue.length; minDistIdx++) {
// //     if (queue[minDistIdx][0] < queue[minIdx][0]) {
// //       minIdx = minDistIdx;
// //     }
// //   }
// //   return queue.splice(minIdx, 1)[0]; // it says delete the item on "minIdx" and as it return array of array return the one on the 0th position
// // }

// // console.log(
// //   getMinDist([
// //     [1, 1],
// //     [2, 1],
// //     [3, 1],
// //     [0, 3],
// //   ]),
// // );
// function networkDelay(k, list, n) {
//   const graph = Array.from({ length: n + 1 }, () => []);
//   const distance = Array(n + 1).fill(Infinity);
//   distance[k] = 0;
//   //   const queue = [];
//   //   queue.push([0, k]);
//   const minHeap = new MinHeap();
//   minHeap.insert([0, k]);
//   //   console.log({ graph, distance });

//   for (let [from, to, dist] of list) {
//     graph[from].push([to, dist]);
//   }

//   while (minHeap.heap.length) {
//     // console.log({ queue });
//     // const [currentDist, node] = getMinDist(queue);
//     const [currentDist, node] = minHeap.removeMin();
//     // console.log("---", { queue });
//     for (const [neighbor, cost] of graph[node]) {
//       const newDist = currentDist + cost;
//       if (newDist < distance[neighbor]) {
//         distance[neighbor] = newDist;
//         // queue.push([newDist, neighbor]);
//         minHeap.insert([newDist, neighbor]);
//       }
//     }
//   }
//   let answer = 0;
//   for (let i = 1; i <= n; i++) {
//     if (distance[i] === Infinity) {
//       return -1;
//     }
//     answer = Math.max(distance[i], answer);
//   }
//   return answer;
// }
// console.log(
//   networkDelay(
//     2,
//     [
//       [2, 1, 1],
//       [2, 3, 1],
//       [3, 4, 1],
//     ],
//     4,
//   ),
// );

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let i = this.heap.length - 1;

    while (i > 0) {
      const parentIdx = Math.floor((i - 1) / 2);
      if (this.heap[parentIdx][0] <= this.heap[i][0]) break;

      [this.heap[parentIdx], this.heap[i]] = [
        this.heap[i],
        this.heap[parentIdx],
      ];
      i = parentIdx;
    }
  }

  pop() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length === 0) return min;

    this.heap[0] = last;
    this.bubbleDown();
    return min;
  }

  bubbleDown() {
    let i = 0;
    while (i < this.heap.length) {
      const left = Math.floor(2 * i + 1);
      const right = Math.floor(2 * i + 2);

      if (left >= this.heap.length) break;

      let smallIdx = left;

      if (
        right < this.heap.length &&
        this.heap[right][0] < this.heap[left][0]
      ) {
        smallIdx = right;
      }

      if (this.heap[smallIdx][0] >= this.heap[i][0]) break;

      [this.heap[smallIdx], this.heap[i]] = [this.heap[i], this.heap[smallIdx]];
      i = smallIdx;
    }
  }
}

function networkDelay(times, n, k) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const distance = Array(n + 1).fill(Infinity);
  const minHeap = new MinHeap();
  minHeap.push([0, k]); // [distance, node]
  distance[k] = 0;

  for (let [from, to, dist] of times) {
    graph[from].push([to, dist]);
  }

  while (minHeap.heap.length) {
    const [currentDist, node] = minHeap.pop(); // heap [distance, node]

    for (let [neighbor, cost] of graph[node]) {
      // graph = [node, dist]
      const newDistance = currentDist + cost;

      if (newDistance < distance[neighbor]) {
        distance[neighbor] = newDistance;
        minHeap.push([newDistance, neighbor]);
      }
    }
  }
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (distance[i] === Infinity) return -1;
    answer = Math.max(distance[i], answer);
  }
  return answer;
}

console.log(
  networkDelay(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2,
  ),
);
