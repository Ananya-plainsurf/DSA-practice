// 21. Merge Two Sorted Lists
// -------------------------------------------
// --- Your existing code ---

import {
  createLinkedList,
  printLinkedList,
  ListNode,
} from "./helperFunctions.js";

// actual leet code solution
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1);
  let curr = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  curr.next = list1 || list2;
  return dummy.next;
};

// --- Test here ---
const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);
const merged = mergeTwoLists(list1, list2);
console.log(printLinkedList(merged)); // Expected output: [1, 1, 2, 3, 4, 4]
