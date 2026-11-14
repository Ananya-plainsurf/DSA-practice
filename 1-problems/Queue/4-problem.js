// implement stack using queue using 2 queues.

class myStack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(x) {
    if (this.q1.length === 0) {
      this.q1.push(x);
      return;
    }

    this.q2.push(x);
    while (this.q1.length > 0) {
      this.q2.push(this.q1.shift());
    }

    // console.log(this.q2);
    this.q1 = this.q2;
    this.q2 = [];
    return this.q1;
  }

  pop() {
    return this.q1.shift();
  }

  top() {
    return this.q1[0];
  }

  isEmpty() {
    if (this.q1.length === 0) {
      return true;
    }

    return false;
  }

  overView() {
    return this.q1;
  }
}

const stack = new myStack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.push(5));
console.log(stack.push(6));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.overView());
console.log(stack.isEmpty());
console.log(stack.top());
