// construct heap

class Heap {
  constructor() {
    this.heap = [];
  }

  add(val) {
    this.heap.push(val);
    if (this.heap.length > 1) {
      this.bubbleUp();
    }
  }

  bubbleUp() {
    let i = this.heap.length - 1;

    while (i > 0) {
      const parentIdx = Math.floor((i - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[i]) break;

      [this.heap[parentIdx], this.heap[i]] = [
        this.heap[i],
        this.heap[parentIdx],
      ];
      i = parentIdx;
    }
  }

  pop() {
    let min = this.heap[0];
    let last = this.heap.pop();

    if (this.heap.length === 0) return min;

    this.heap[0] = last;
    this.bubbleDown();
    return min;
  }

  bubbleDown() {
    let i = 0;
    const length = this.heap.length;

    while (i < this.heap.length) {
      let smallest = i;

      const left = Math.floor(i * 2 + 1);
      const right = Math.floor(i * 2 + 2);

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest === i) break;

      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      i = smallest;
    }
  }

  peek() {
    return this.heap[0];
  }
}

// const heap = new Heap();
// for (let num of [5, 7, 2, 3, 8, 1]) {
//   heap.add(num);
// }

// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());

function findKthElement(nums, k) {
  const heap2 = new Heap();
  for (let num of nums) {
    heap2.add(num);

    if (heap2.heap.length > k) {
      heap2.pop();
    }
  }

  return heap2.peek();
}

console.log(findKthElement([3, 2, 1, 5, 6, 4], 2));
console.log(findKthElement([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
console.log(findKthElement([2, 1], 1));
