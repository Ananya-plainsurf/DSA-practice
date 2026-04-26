// 3️⃣ Insert at Beginning
// 🧠 What you need to do

// Add a new node at the start.

// 🔗 Visual
// Before:
// head → [2 | •] → [3 | •] → [4 | null]

// Insert: 1

// After:
// head → [1 | •] → [2 | •] → [3 | •] → [4 | null]

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class InsertAtStart {
  AddToFront(head, val) {
    let temp = new Node(val);
    temp.next = head;
    return temp;
  }
}

const insert = new InsertAtStart();
console.log(
  insert.AddToFront(
    { val: 4, next: { val: 7, next: { val: 9, next: null } } },
    3,
  ),
);
