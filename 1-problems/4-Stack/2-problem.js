// perform Stack operations using array
// peek(), push(), pop(), lookup()

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(val) {
    this.array.push(val);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
console.log(myStack.push("google"));
console.log(myStack.push("udmey"));
console.log(myStack.push("tango"));
console.log(myStack.peek());
console.log(myStack.pop());
