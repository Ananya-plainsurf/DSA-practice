// top k frequent elements

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  add(num, val) {
    this.heap.push([num, val]);
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
    const length = this.heap.length;
    while (i < length) {
      const left = Math.floor(i * 2 + 1);
      const right = Math.floor(i * 2 + 2);
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

function topKElement(nums, k) {
  //   const heap = new MaxHeap();
  //   const hasItem = new Map();
  //   for (let num of nums) {
  //     hasItem.set(num, (hasItem.get(num) || 0) + 1);
  //   }

  //   for (let [num, val] of hasItem.entries()) {
  //     heap.add(num, val);
  //   }
  //   console.log(hasItem, heap.heap);
  //   const result = [];
  //   for (let i = 0; i < k; i++) {
  //     result.push(heap.pop()[0]);
  //   }
  //   return result;

  // const maxHeap = new MyMaxHeap();
  const hasItem = new Map();
  const sortedList = [];
  for (let num of nums) {
    hasItem.set(num, (hasItem.get(num) || 0) + 1);
  }

  // for (let [num, val] of hasItem.entries()) {
  //     maxHeap.add(num, val)
  // }

  // const result = [];
  // for (let i = 0; i < k; i++) {
  //     result.push(maxHeap.pop()[0])
  // }

  for (let item of hasItem.entries()) {
    sortedList.push(item);
  }
  sortedList.sort((a, b) => b[1] - a[1]);

  return sortedList.slice(0, k).map((item) => item[0]);
}

// console.log(topKElement([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));
// console.log(topKElement([1, 2, 1, 2, 1, 2, 3, 1, 3, 2, 5, 5, 5, 5, 5], 2));
// console.log(topKElement([1, 1, 1, 2, 2, 3], 2));

console.log(
  topKElement(
    [
      5, 1, -1, -8, -7, 8, -5, 0, 1, 10, 8, 0, -4, 3, -1, -1, 4, -5, 4, -3, 0,
      2, 2, 2, 4, -2, -4, 8, -7, -7, 2, -8, 0, -8, 10, 8, -8, -2, -9, 4, -7, 6,
      6, -1, 4, 2, 8, -3, 5, -9, -3, 6, -8, -5, 5, 10, 2, -5, -1, -5, 1, -3, 7,
      0, 8, -2, -3, -1, -5, 4, 7, -9, 0, 2, 10, 4, 4, -4, -1, -1, 6, -8, -9, -1,
      9, -9, 3, 5, 1, 6, -1, -2, 4, 2, 4, -6, 4, 4, 5, -5,
    ],
    7,
  ),
);
