// perform insert, delete and peak operation and create a min heap

class minHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;

      // swap
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
    }
  }

  extractMin() {
    // delete min
    let min = this.heap[0];

    this.heap[0] = this.heap.pop();

    this.bubbleDown();
    return min;
  }

  bubbleDown() {
    let i = 0;
    let length = this.heap.length;

    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest === i) break;

      // swap
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }

  peak() {
    return this.heap[0];
  }
}

const min = new minHeap();
min.insert(5);
min.insert(2);
min.insert(3);
min.insert(1);

console.log(min.heap);
console.log(min.peak());
min.extractMin();
console.log(min.heap);
console.log(min.peak());
min.extractMin();
console.log(min.heap);
console.log(min.peak());
