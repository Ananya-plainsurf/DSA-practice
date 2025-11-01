// 141. Linked List Cycle
// ------------------------------------
import { createLinkedListWithCycle } from "./helperFunctions.js";

// Your LeetCode solution
var hasCycle = function (head) {
  const seen = new Map();
  while (head && head.next !== null) {
    if (seen.has(head)) {
      return true;
    }
    seen.set(head, 1);
    head = head.next;
  }
  return false;

  // --- Floyd’s Cycle Detection (Better) ---
  // let slow = head;
  // let fast = head;

  // while (fast && fast.next) {
  //   slow = slow.next;
  //   fast = fast.next.next;
  //   if (slow === fast) return true;
  // }
  // return false;
};

// --- Test Here ---
const head1 = createLinkedListWithCycle([3, 2, 0, -4], 1); // tail connects to index 1
const head2 = createLinkedListWithCycle([1, 2], 0); // tail connects to index 0
const head3 = createLinkedListWithCycle([1], -1); // no cycle

console.log("Test 1:", hasCycle(head1)); // Expected: true
console.log("Test 2:", hasCycle(head2)); // Expected: true
console.log("Test 3:", hasCycle(head3)); // Expected: false
