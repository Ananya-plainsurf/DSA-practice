// 141. Linked List Cycle
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Node definition
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Linked List with cycle detection
class LinkedList {
  detectCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
      slow = slow.next; // move 1 step
      fast = fast.next.next; // move 2 steps

      if (slow === fast) {
        return true; // cycle found
      }
    }

    return false; // no cycle
  }
}

// ---------------- TESTING ----------------

// Create nodes
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

// Link nodes: 1 → 2 → 3 → 4 → 5
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// ✅ Create a cycle: 5 → 2
node5.next = node2;

// Initialize
const list = new LinkedList();

// Test case 1 (Cycle exists)
console.log("Cycle exists:", list.detectCycle(node1)); // true

// ---------------- NO CYCLE TEST ----------------

// Break the cycle
node5.next = null;

// Test case 2 (No cycle)
console.log("Cycle exists:", list.detectCycle(node1)); // false
