// K closest points to origin

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  add(points, sqrt) {
    this.heap.push([points, sqrt]); // [[x,y],sqrt]
    if (this.heap.length > 1) this.bubbleUp();
  }

  bubbleUp() {
    let i = this.heap.length - 1;

    while (i > 0) {
      let parentIdx = Math.floor((i - 1) / 2);
      if (this.heap[parentIdx][1] >= this.heap[i][1]) break;

      [this.heap[parentIdx], this.heap[i]] = [
        this.heap[i],
        this.heap[parentIdx],
      ];
      i = parentIdx;
    }
  }

  pop() {
    const max = this.heap[0];
    const last = this.heap.pop();

    if (!this.heap.length) return max;
    this.heap[0] = last;
    this.bubbleDown();
    return max;
  }

  bubbleDown() {
    let i = 0;
    let length = this.heap.length;

    while (i < length) {
      const left = Math.floor(2 * i + 1);
      const right = Math.floor(2 * i + 2);
      let largest = i;

      if (left < length && this.heap[left][1] > this.heap[largest][1]) {
        largest = left;
      }
      if (right < length && this.heap[right][1] > this.heap[largest][1]) {
        largest = right;
      }

      if (largest === i) break;
      [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];
      i = largest;
    }
  }
}

function closestPoint(points, k) {
  const maxHeap = new MaxHeap();
  const result = [];
  for (let [x, y] of points) {
    let distance = x * x + y * y;
    if (maxHeap.heap.length < k) {
      maxHeap.add([x, y], distance);
    } else if (distance < maxHeap.heap[0][1]) {
      maxHeap.pop();
      maxHeap.add([x, y], distance);
    }
  }

  while (maxHeap.heap.length > 0) {
    result.push(maxHeap.pop()[0]);
  }
  return result;
}

console.log(
  closestPoint(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2,
  ),
);
