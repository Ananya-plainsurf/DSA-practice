// ReOrder list

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
function reOrderList(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let prev = null;
  let current = slow.next;
  slow.next = null;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  let first = head;
  let second = prev;
  while (second) {
    let firstNext = first.next;
    let secondNext = second.next;
    first.next = second;
    first.next.next = firstNext;
    second = secondNext;
    first = first.next.next;
  }

  let result = [];
  let curr = head;
  while (curr) {
    result.push(curr.value);
    curr = curr.next;
  }
  return result;
}
const list1 = new linkedList(1);
list1.append(2);
list1.append(3);
list1.append(4);
list1.append(5);

console.log(reOrderList(list1.head));
