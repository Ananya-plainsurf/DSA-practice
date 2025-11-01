// helperFunctions.js

/**
 * Definition for singly-linked list.
 */
export function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

/**
 * Creates a normal linked list from an array.
 * @param {number[]} arr - Array of values.
 * @returns {ListNode|null} Head of the linked list.
 */
export function createLinkedList(arr = []) {
  if (!arr.length) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

/**
 * Prints the linked list as an array (useful for debugging).
 * @param {ListNode} head - Head node of the linked list.
 * @param {number} [limit=100] - Optional safety limit to avoid infinite loops.
 * @returns {number[]} Array of node values.
 */
export function printLinkedList(head, limit = 100) {
  const result = [];
  let count = 0;

  while (head && count < limit) {
    result.push(head.val);
    head = head.next;
    count++;
  }

  if (count >= limit) result.push("...");
  return result;
}

/**
 * Creates a linked list with an optional cycle.
 * @param {number[]} arr - Array of values.
 * @param {number} pos - Index where the cycle begins (-1 for no cycle).
 * @returns {ListNode|null} Head of the linked list.
 */
export function createLinkedListWithCycle(arr = [], pos = -1) {
  if (!arr.length) return null;

  const head = new ListNode(arr[0]);
  let current = head;
  let cycleNode = null;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
    if (i === pos) cycleNode = current;
  }

  // If pos = 0, the head itself is the cycle node
  if (pos === 0) cycleNode = head;

  if (pos >= 0 && cycleNode) current.next = cycleNode;

  return head;
}
