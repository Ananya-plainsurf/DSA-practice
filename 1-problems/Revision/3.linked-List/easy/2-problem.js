// 2️⃣ Search in Linked List
// 🧠 What you need to do

// Check if a value exists in the list.

// 🔗 Visual
// head → [4 | •] → [7 | •] → [9 | null]
// 🧪 Example 1
// Input: 4 → 7 → 9, target = 7
// Output: true
// 🧪 Example 2
// Input: 4 → 7 → 9, target = 5
// Output: false

function searchLinkedList(head, target) {
  let curr = head;

  while (curr) {
    if (curr.val === target) {
      return true;
    }
    curr = curr.next;
  }
  return false;
}

console.log(
  searchLinkedList(
    { val: 4, next: { val: 7, next: { val: 9, next: null } } },
    7,
  ),
);
console.log(
  searchLinkedList(
    {
      val: 1,
      next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
    },
    5,
  ),
);
