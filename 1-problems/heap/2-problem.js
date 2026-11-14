// 🧩 Problem: Kth Smallest Element

// Given:

// arr = [7,10,4,3,20,15]
// k = 3

// 👉 Find 3rd smallest

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
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return;
    if (this.heap.length === 1) return this.heap[0];
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
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      i = smallest;
    }
  }
}

function kthElement(arr, k) {
  const heap = new minHeap();
  for (let ch of arr) {
    // O(n)
    heap.insert(ch); // O(log n)
  } // = O(n log n)
  let smallest = 0;
  for (let i = 0; i < k; i++) {
    // O(k)
    smallest = heap.extractMin(); // O(log n)
  } // = O(k log n)

  //   total = O(n log n)
  return {
    arr: heap.heap,
    smallest,
  };
}

console.log(kthElement([7, 10, 4, 3, 20, 15], 5));
console.log(kthElement([2, 5, 3, 8, 10, 7], 2));
