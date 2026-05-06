// 232. Implement Queue using Stacks

class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(n) {
    this.s1.push(n);
  }
  pop() {
    if (this.s2.length === 0) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }
  peek() {
    if (this.s2.length === 0) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2[this.s2.length - 1];
  }

  print() {
    let result = [];

    // s2 → reverse (because top is front)
    for (let i = this.s2.length - 1; i >= 0; i--) {
      result.push(this.s2[i]);
    }

    // s1 → normal order
    for (let i = 0; i < this.s1.length; i++) {
      result.push(this.s1[i]);
    }

    console.log(result);
  }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.print();
console.log("=====pop=====");
queue.pop();
queue.print();
console.log("=====peek=====");
console.log(queue.peek());
queue.push(5);
queue.push(6);
queue.print();
