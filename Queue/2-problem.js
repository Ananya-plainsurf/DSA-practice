// implement stack behave like queue

class StackBehaveLikeQueue {
  constructor() {
    this.q = [];
  }

  push(x) {
    const size = this.q.length;

    this.q.push(x);

    for (let i = 0; i < size; i++) {
      const removed = this.q.shift();
      this.q.push(removed);
    }

    return this;
  }

  pop() {
    return this.q.length === 0 ? null : this.q.shift();
  }

  peek() {
    return this.q.length === 0 ? null : this.q[0];
  }
}

const stack = new StackBehaveLikeQueue();
console.log(stack.push(10));
console.log(stack.push(16));
console.log(stack.push(17));
console.log(stack.pop());
console.log(stack.peek());
