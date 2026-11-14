//    Min Stack

class MinStack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }

  push(val) {
    let min = this.length ? Math.min(this.stack[this.length - 1][1], val) : val;
    this.stack.push([val, min]);
    this.length++;
  }

  pop() {
    if (!this.length) return null;

    this.length--;
    return this.stack.pop();
  }

  top() {
    return this.stack[this.length - 1][0];
  }

  getMin() {
    return this.stack[this.length - 1][1];
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(-1);
minStack.push(-3);
minStack.push(0);
minStack.push(4);
minStack.push(5);
console.log("current stack -> ", minStack.stack);
minStack.pop();
console.log("current stack after pop -> ", minStack.stack);
minStack.pop();
console.log("current stack after pop -> ", minStack.stack);
console.log("min after pop -> ", minStack.getMin());
minStack.pop();
console.log("current stack after pop -> ", minStack.stack);
minStack.pop();
console.log("current stack after pop -> ", minStack.stack);
console.log("min after pop -> ", minStack.getMin());
console.log("what is top now ->", minStack.top());
