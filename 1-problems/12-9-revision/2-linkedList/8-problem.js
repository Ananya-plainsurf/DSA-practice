// Intersection of two linked lists

function intersection(l1, l2) {
  let a = l1;
  let b = l2;
  while (a && b) {
    a = a === null ? l1 : a.next;
    b = a === null ? l2 : b.next;
  }
  return a;
}
