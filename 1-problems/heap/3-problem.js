// 🧩 Top K Largest Elements
// arr = [3,2,1,5,6,4]
// k = 2

// Output → [6,5]

class MinHeap {
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

      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];

      i = parent;
    }
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleDown() {
    let i = 0;

    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];

      i = smallest;
    }
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

function kLargestElement(arr, k) {
  const heap = new MinHeap();

  for (let num of arr) {
    if (heap.size() < k) {
      heap.insert(num);
    } else if (num > heap.peek()) {
      heap.extractMin();
      heap.insert(num);
    }
  }

  return heap.heap;
}

console.log(kLargestElement([3, 2, 1, 5, 6, 4], 3));
console.log(kLargestElement([3, 2, 1, 5, 6, 4], 4));
console.log(kLargestElement([3, 2, 1, 5, 6, 4], 2));
