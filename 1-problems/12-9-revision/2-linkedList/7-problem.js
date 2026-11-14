// Palindrome linked list

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

function Palindrome(head) {
  let dummy = new linkedList(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;

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
  let list1 = head;
  let list2 = prev;
  while (list1 && list2) {
    // console.log({ list1: list1.value, list2: list2.value });
    if (list1.value !== list2.value) {
      return false;
    }
    list1 = list1.next;
    list2 = list2.next;
  }
  return true;
}

const list1 = new linkedList(1);
list1.append(2);
list1.append(2);
list1.append(1);

console.log(Palindrome(list1.head));
const list2 = new linkedList(1);
list2.append(2);
console.log(Palindrome(list2.head));
