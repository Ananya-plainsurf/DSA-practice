// Add two numbers

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

function addNumbers(list1, list2) {
  let l1 = list1;
  let l2 = list2;
  let carry = 0;
  let dummy = new linkedList(-1);
  let current = dummy.head;

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.value : 0) + (l2 ? l2.value : 0) + carry;
    carry = Math.floor(sum / 10);
    let newNode = {
      value: sum % 10,
      next: null,
    };
    current.next = newNode;
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.head.next;
}
// const list1 = new linkedList(2);
// list1.append(4);
// list1.append(3);
// const list2 = new linkedList(5);
// list2.append(6);
// list2.append(4);
// console.log(addNumbers(list1.head, list2.head));

const list1 = new linkedList(9);
list1.append(9);
list1.append(9);
list1.append(9);
list1.append(9);
list1.append(1);
const list2 = new linkedList(9);
list2.append(9);
list2.append(9);
list2.append(9);
list2.append(1);
console.log(addNumbers(list1.head, list2.head));
