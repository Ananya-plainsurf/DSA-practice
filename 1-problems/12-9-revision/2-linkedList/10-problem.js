// Copy list with random pointers

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}

function copyList(head) {
  let map = new Map();
  let current = head;

  while (current) {
    // console.log(current.random);
    let copy = new Node(current.val);
    map.set(current, copy);
    current = current.next;
  }

  current = head;
  while (current) {
    let copy = map.get(current);
    copy.next = map.get(current.next) || null;
    copy.random = map.get(current.random) || null;

    current = current.head;
  }

  return map.get(head) || null;
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);

n1.next = n2;
n2.next = n3;

n1.random = n3;
n2.random = n1;
n3.random = n2;

console.log(copyList(n1));
console.log(n1 === copyList(n1));
console.log(n1.next === copyList(n1).next); // false
console.log(n1.random === copyList(n1).random);
