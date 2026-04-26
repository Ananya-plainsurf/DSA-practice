// 🔗 1️⃣ Traverse Linked List
// 🧩 Problem

// You are given the head of a singly linked list.

// 👉 Print all elements in order.

function traverseLinkedList(nums) {
  let temp = nums;
  while (temp) {
    console.log(temp.val);
    temp = temp.next;
  }
}
traverseLinkedList({
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
});
