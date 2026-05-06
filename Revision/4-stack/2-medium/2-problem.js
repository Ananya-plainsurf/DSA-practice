// 155. Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

class Stack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.min.length === 0 || val <= this.min[this.min.length - 1]) {
      this.min.push(val);
      return;
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return;
    }
    let removed = this.stack.pop();
    if (removed === this.min[this.min.length - 1]) {
      this.min.pop();
      return;
    }
  }

  top() {
    if (this.stack.length === 0) {
      return;
    }
    return console.log("Top -> ", this.stack[this.stack.length - 1]);
  }

  getMin() {
    if (this.min.length === 0) {
      return;
    }
    return console.log(this.min[this.min.length - 1]);
  }
}

const stackM = new Stack();
stackM.push(-2);
stackM.push(-3);
stackM.push(-1);
stackM.push(-4);
console.log({ stackM: stackM.stack, min: stackM.min });
stackM.pop();
console.log({ stackM: stackM.stack, min: stackM.min });
stackM.top();
stackM.getMin();
