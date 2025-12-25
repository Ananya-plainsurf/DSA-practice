/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

import {
  createIntersectingLinkedLists,
  printLinkedList,
} from "./helperFunctions.js";

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const seen = new Map();

  while (headA) {
    seen.set(headA, headA.val);
    headA = headA.next;
  }

  while (headB) {
    if (seen.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }

  return null;
};

// 🧪 Example 1 — With Intersection (LeetCode example)
console.log("🔹 Example 1: Intersection expected");
const { headA, headB } = createIntersectingLinkedLists(
  [4, 1, 8, 4, 5],
  [5, 6, 1],
  2,
  3
);

console.log("List A:", printLinkedList(headA));
console.log("List B:", printLinkedList(headB));

const intersection1 = getIntersectionNode(headA, headB);
console.log(
  intersection1
    ? `✅ Intersected at '${intersection1.val}'\n`
    : "❌ No intersection\n"
);

// 🧪 Example 2 — No Intersection
console.log("🔹 Example 2: No intersection expected");
const { headA: headA2, headB: headB2 } = createIntersectingLinkedLists(
  [2, 6, 4],
  [1, 5],
  3, // skipA beyond length → no intersection
  2
);

console.log("List A:", printLinkedList(headA2));
console.log("List B:", printLinkedList(headB2));

const intersection2 = getIntersectionNode(headA2, headB2);
console.log(
  intersection2
    ? `✅ Intersected at '${intersection2.val}'\n`
    : "❌ No intersection\n"
);

// 🧪 Example 3 — Intersection at the Head Node
console.log("🔹 Example 3: Intersection at head");
const shared = new ListNode(7);
shared.next = new ListNode(9);

const headA3 = shared; // both start at same node
const headB3 = shared;

console.log("List A:", printLinkedList(headA3));
console.log("List B:", printLinkedList(headB3));

const intersection3 = getIntersectionNode(headA3, headB3);
console.log(
  intersection3
    ? `✅ Intersected at '${intersection3.val}' (head node)\n`
    : "❌ No intersection\n"
);
