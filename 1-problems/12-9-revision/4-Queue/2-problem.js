//    Circular dequeue

class CircularDequeue {
  constructor(k) {
    this.k = k;
    this.queue = Array.from({ length: k }, () => Infinity);
    this.front = 0;
    this.rear = 0;
    this.empty = k;
  }
  insertLast(val) {
    if (this.isFull()) return false;

    // First element
    if (this.isEmpty()) {
      this.queue[this.rear] = val;
      this.empty--;
      return true;
    }

    this.rear = (this.rear + 1) % this.k;
    this.queue[this.rear] = val;
    this.empty--;
    return true;
  }
  insertFront(val) {
    if (this.isFull()) return false;
    // First element
    if (this.isEmpty()) {
      this.queue[this.front] = val;
      this.empty--;
      return true;
    }

    this.front = (this.front - 1 + this.k) % this.k;
    this.queue[this.front] = val;
    this.empty--;

    return true;
  }

  deleteLast() {
    if (this.isEmpty()) return false;
    this.queue[this.rear] = Infinity;
    this.empty++;
    if (this.isEmpty()) {
      return true;
    }
    this.rear = (this.rear - 1 + this.k) % this.k;
    return true;
  }

  deleteFront() {
    if (this.isEmpty()) return false;
    this.queue[this.front] = Infinity;
    this.empty++;

    if (this.isEmpty()) {
      return true;
    }

    this.front = (this.front + 1) % this.k;
    return true;
  }

  isEmpty() {
    return this.empty === this.k;
  }

  isFull() {
    return this.empty === 0;
  }

  getFront() {
    if (this.isEmpty()) return -1;

    return this.queue[this.front];
  }

  getRear() {
    if (this.isEmpty()) return -1;

    return this.queue[this.rear];
  }

  frontAndRear() {
    return {
      idxFront: this.front,
      front: this.queue[this.front],
      idxRear: this.rear,
      rear: this.queue[this.rear],
      dequeue: this.queue,
    };
  }
}

const circularDequeue = new CircularDequeue(3);
console.log(circularDequeue.insertLast(3)); // [3,I,I]
console.log(circularDequeue.insertLast(4)); // [3,4,I]
console.log(circularDequeue.insertFront(5)); // [5,3,4]
console.log(circularDequeue.frontAndRear());
console.log(circularDequeue.deleteLast());
console.log(circularDequeue.frontAndRear());
console.log(circularDequeue.insertFront(9));
console.log(circularDequeue.frontAndRear());
console.log(circularDequeue.deleteFront());
console.log(circularDequeue.frontAndRear());
