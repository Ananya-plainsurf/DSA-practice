// perform the stack operations
// peek(), push(), pop(), lookup()

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.length === 0) {
      return -1;
    }
    return this.top;
  }

  push(val) {
    let node = new Node(val);

    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      const holdingTop = this.top;
      this.top = node;
      this.top.next = holdingTop;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return this;
  }
}

const myStack = new Stack();
console.log(myStack.push("google"));
console.log(myStack.push("udmey"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log("peek after pop", myStack.peek());
console.log(myStack.pop());
console.log("peek after pop", myStack.peek());
