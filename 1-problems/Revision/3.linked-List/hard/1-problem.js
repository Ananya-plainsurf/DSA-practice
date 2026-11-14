// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Merge {
  mergeTwoList(l1, l2) {
    let dummy = new Node(-1);
    let curr = dummy;

    while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }
      curr = curr.next;
    }

    if (l1 !== null) {
      curr.next = l1;
    } else {
      curr.next = l2;
    }
    return this.print(dummy.next);
  }

  print(dummy) {
    let curr = dummy;
    const res = [];
    while (curr) {
      res.push(curr.val);
      curr = curr.next;
    }
    // res.push(curr.val);
    return res;
  }
}

const merge = new Merge();
console.log(
  merge.mergeTwoList(
    { val: 1, next: { val: 2, next: { val: 4, next: null } } },
    { val: 1, next: { val: 3, next: { val: 4, next: null } } },
  ),
);
