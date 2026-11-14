// create simple linked list

class linkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  appendAtStart(value) {
    const temp = this.head;
    const newNode = {
      value,
      next: null,
    };
    this.head = newNode;
    newNode.next = temp;
    this.length++;
    return this;
  }

  insertAt(value, idx) {
    if (idx < 0 || idx >= this.length) {
      return `Invalid id: ${idx}! Cannot insert`;
    }
    if (this.length === 1) {
      return this.append(value);
    }
    if (this.length === 0 || idx === 0) {
      return this.appendAtStart(value);
    }
    const newNode = {
      value,
      next: null,
    };

    let prev = null;
    let curr = this.head;
    let i = 0;
    while (i < idx) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    prev.next = newNode;
    newNode.next = curr;
    this.length++;
    return this;
  }

  delete(idx) {
    if (idx < 0 || idx >= this.length) {
      return `Invalid id: ${idx}! Cannot insert`;
    }
    if (idx === 0) {
      let next = this.head.next;
      this.head = next;
      this.length--;
      return this;
    }
    let i = 0;
    let prev = null;
    let curr = this.head;

    while (i < idx) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    prev.next = curr?.next ?? null;
    if (idx === this.length - 1) {
      this.tail = prev;
    }
    this.length--;
    return this;
  }
}

const myLinkedList = new linkedList(10);
// console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.appendAtStart(11);
myLinkedList.appendAtStart(90);
myLinkedList.insertAt(54, 3);
myLinkedList.insertAt(44, -1);
myLinkedList.insertAt(33, 0);
myLinkedList.delete(0);
myLinkedList.delete(5);
console.log(JSON.stringify(myLinkedList, null, 2));
