//    Circular Queue

class CircularQueue {
  constructor(k) {
    this.queue = Array.from({ length: k }, () => Infinity);
    this.front = 0;
    this.rear = -1;
    this.k = k;
    this.empty = k;
  }

  enqueue(val) {
    let idx = (this.rear + 1) % this.queue.length;
    if (this.empty > 0) {
      this.queue[idx] = val;
      this.rear = idx;
      this.empty--;
      return true;
    }
    return false;
  }

  dequeue() {
    if (this.isEmpty()) return false;
    let idx = this.front;
    this.queue[idx] = Infinity;
    this.front = (idx + 1) % this.queue.length;
    this.empty++;
    return true;
  }

  print() {
    return this.queue;
  }

  frontAndRear() {
    return {
      idxFront: this.front,
      idxRear: this.rear,
      front: this.queue[this.front],
      rear: this.queue[this.rear],
    };
  }

  front() {
    return this.queue[this.front];
  }

  rear() {
    return this.queue[this.rear];
  }

  isEmpty() {
    return this.empty === this.k;
  }

  isFull() {
    return this.empty === 0;
  }
}

const circular = new CircularQueue(3);
console.log(circular.enqueue(1)); //true
console.log(circular.enqueue(2)); //true
console.log(circular.enqueue(3)); //true
console.log(circular.enqueue(4)); //false
console.log(circular.print()); //[1,2,3]
console.log(circular.dequeue()); // 1
console.log("empty ", circular.isEmpty()); // true
console.log(circular.dequeue()); // 2 -> [I, I, 3]
console.log("is FUll", circular.isFull());
console.log(circular.enqueue(4)); //true -> [4,I,3]
console.log(circular.print());
console.log(circular.frontAndRear()); //{front: 3, rear: 4}
console.log(circular.enqueue(5));
console.log(circular.print()); // -> [4,5,3]
console.log(circular.frontAndRear()); //{front: 2, rear: 1}
console.log("empty ", circular.isEmpty()); // false
console.log("is FUll", circular.isFull());
