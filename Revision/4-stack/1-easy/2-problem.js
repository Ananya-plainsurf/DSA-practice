// 225. Implement Stack using Queues
// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

class Stack {
  constructor() {
    this.q = [];
  }

  push(n) {
    this.q.push(n);

    for (let i = 0; i < this.q.length - 1; i++) {
      this.q.push(this.q.shift());
    }
  }

  pop() {
    return this.q.shift();
  }

  peek() {
    return console.log(this.q[0]);
  }

  isEmpty() {
    return console.log(this.q.length === 0);
  }

  print() {
    for (let ch of this.q) {
      console.log(ch);
    }
  }
}

const stack = new Stack([]);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
console.log("====pop===");
stack.pop();
stack.print();
console.log("=======peek=====");
stack.peek();
console.log("======== Is Empty=========");
stack.isEmpty();
