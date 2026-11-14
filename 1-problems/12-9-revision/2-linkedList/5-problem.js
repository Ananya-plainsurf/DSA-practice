//    Remove Nth Node

export class linkedList {
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
  print(head) {
    let current = head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

function removeN(head, n) {
  let dummy = new linkedList(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}

const list = new linkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
const list1 = new linkedList(1);

console.log(removeN(list1.head, 1));
