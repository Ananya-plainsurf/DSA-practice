// class Queue {
//   constructor() {
//     this.arr = [];
//     this.front = 0;
//   }

//   enqueue(x) {
//     this.arr.push(x);
//     return this;
//   }

//   dequeue() {
//     if (this.arr.length === 0) return null;
//     return this.arr[this.front++];
//   }

//   peek() {
//     return this.arr[this.front];
//   }

//   isEmpty() {
//     if (this.arr.length === 0) return true;
//     return false;
//   }
// }

// const queue = new Queue();
// console.log(queue.enqueue(3));
// console.log(queue.enqueue(54));
// console.log(queue.enqueue(4));
// console.log(queue.enqueue(57));
// console.log(queue.peek());
// console.log(queue.dequeue());
// console.log(queue.enqueue(57));
// console.log(queue.peek());
// console.log(queue.isEmpty());

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(x) {
    const node = new Node(x);
    if (this.length === 0) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return null;

    const holding = this.front;
    this.front = holding.next;
    this.length--;

    if (this.length === 0) {
      this.back = null;
    }
    return holding;
  }

  peek() {
    return this.front;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const queueLinkedList = new QueueLinkedList();
console.log("starting");
console.log(queueLinkedList.enqueue(1));
console.log(queueLinkedList.enqueue(2));
console.log(queueLinkedList.enqueue(4));
console.log(queueLinkedList.enqueue(5));
console.log("removed element", queueLinkedList.dequeue());
console.log("new front", queueLinkedList.peek());
console.log("is Empty = ", queueLinkedList.isEmpty());
