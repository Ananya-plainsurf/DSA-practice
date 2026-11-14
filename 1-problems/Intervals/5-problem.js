// Meeting Rooms II

// intervals = [
//   [1,5],
//   [2,6],
//   [3,7]
// ] = 3
// intervals = [
//   [7, 10],
//   [2, 4]
// ] = 1
// intervals = [
//   [0, 30],
//   [5, 10],
//   [15, 20]
// ] = 2

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
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
      if (right < this.heap.length && this.heap[right] < this.heap[left]) {
        smallIdx = right;
      }

      if (this.heap[smallIdx] >= this.heap[i]) break;
      [this.heap[smallIdx], this.heap[i]] = [this.heap[i], this.heap[smallIdx]];
      i = smallIdx;
    }
  }
}

function meetingRooms2(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const minHeap = new MinHeap();
  minHeap.push(intervals[0][1]);
  let front = 1;
  while (front < intervals.length) {
    const last = minHeap.heap[0];
    const [currentS, currentE] = intervals[front++];
    // console.log({ last, currentE, minHeap.heap });
    if (currentS >= last) {
      minHeap.pop();
    }
    minHeap.push(currentE);
  }
  return minHeap.heap.length;
}
console.log(
  meetingRooms2([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
);
console.log(
  meetingRooms2([
    [1, 5],
    [2, 6],
    [3, 7],
  ]),
);
console.log(
  meetingRooms2([
    [7, 10],
    [2, 4],
  ]),
);
