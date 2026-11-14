// linked list cycle

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
}
const list1 = new linkedList(1);

list1.append(2);
list1.append(3);
list1.append(4);

// Create cycle:
// 4 → 2
list1.tail.next = list1.head.next;

function cycleDetection(head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}

console.log(cycleDetection(list1.head));
