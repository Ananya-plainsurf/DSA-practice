// implement queue behaving like stack;

class queueBehavingLikeStack {
  constructor() {
    this.inbox = [];
    this.outbox = [];
  }

  enqueue(x) {
    this.inbox.push(x);
  }

  dequeue() {
    if (this.outbox.length) {
      return this.outbox.pop();
    }

    while (this.inbox.length > 0) {
      this.outbox.push(this.inbox.pop());
    }
    return this.outbox.pop();
  }

  peek() {
    if (this.outbox.length) {
      return this.outbox[this.outbox.length - 1];
    }

    while (this.inbox.length > 0) {
      this.outbox.push(this.inbox.pop());
    }

    return this.outbox[this.outbox.length - 1];
  }

  isEmpty() {
    if (this.inbox.length === 0 && this.outbox.length === 0) {
      return true;
    }

    return false;
  }

  overView() {
    return { inbox: this.inbox, outbox: this.outbox };
  }
}

const queue = new queueBehavingLikeStack();
console.log(queue.enqueue(10));
console.log(queue.enqueue(16));
console.log(queue.enqueue(17));
console.log(queue.overView());
console.log(queue.dequeue());
console.log(queue.overView());
console.log(queue.peek());
console.log(queue.isEmpty());
