// 206. Reverse Linked List
// -------------------------------------------------------

import {
  createLinkedList,
  printLinkedList,
  ListNode,
} from "./helperFunctions.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const dummy = new ListNode(-1);
  let cur = dummy;

  while (head) {
    const temp = cur.next; // store the already reversed part
    cur.next = head; // take current node from head
    head = head.next; // move head ahead
    cur.next.next = temp; // attach previously reversed nodes
  }

  return dummy.next;
};

// ✅ Example Tests
const head1 = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original:", printLinkedList(head1));

const reversed = reverseList(head1);
console.log("Reversed:", printLinkedList(reversed));

// Edge cases
const empty = createLinkedList([]);
console.log("Empty List:", printLinkedList(reverseList(empty)));

const single = createLinkedList([7]);
console.log("Single Node:", printLinkedList(reverseList(single)));
