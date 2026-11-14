// 206. Reverse Linked List
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Reverse {
  reverseLinkedList(head) {
    if (!head) return head;
    // let dummy = null;
    // let curr = head;

    // while (curr) {
    //   let newNode = new Node(curr.val);

    //   newNode.next = dummy;
    //   dummy = newNode;
    //   curr = curr.next;
    // }

    let prev = null;
    let curr = head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
}

const reverse = new Reverse();

console.log(
  reverse.reverseLinkedList({
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
    },
  }),
);
console.log(reverse.reverseLinkedList({}));
