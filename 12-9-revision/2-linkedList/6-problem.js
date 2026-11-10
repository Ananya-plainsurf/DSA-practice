//       Cycle detection / entry - Linked List Cycle II — Find the Cycle Entry

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
list1.append(5);
list1.append(6);

// Create cycle:
// 4 → 2
list1.tail.next = list1.head.next;

function detectCycle(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      slow = head;

      while (slow !== fast) {
        fast = fast.next;
        slow = slow.next;
      }

      return slow;
    }
  }
}
console.log(detectCycle(list1.head));
