// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Delete {
  deleteNthNode(head, n) {
    let dummy = new Node(-1);
    dummy.next = head;
    let left = dummy;
    let right = head;

    for (let i = 0; i <= n; i++) {
      right = right.next;
    }

    while (right) {
      right = right.next;
      left = left.next;
    }

    left.next = left.next.next;
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

const deleteNode = new Delete();

console.log(
  deleteNode.deleteNthNode(
    {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
      },
    },
    3,
  ),
);
console.log(
  deleteNode.deleteNthNode(
    {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
      },
    },
    2,
  ),
);
