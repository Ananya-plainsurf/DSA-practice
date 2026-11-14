// 92. Reverse Linked List II
// Medium
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
// Example 1:

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Reverse {
  reverseList(head, l, r) {
    let dummy = new Node(0);
    dummy.next = head;

    let prev = dummy;

    for (let i = 1; i < l; i++) {
      prev = prev.next;
    }

    let curr = prev.next;
    for (let i = 0; i < r - l; i++) {
      let next = curr.next;
      curr.next = next.next;
      next.next = prev.next;
      prev.next = next;
    }

    return dummy.next;
  }
}
const reverse = new Reverse();

console.log(
  reverse.reverseList(
    {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
      },
    },
    2,
    4,
  ),
);
console.log(reverse.reverseList({}));
