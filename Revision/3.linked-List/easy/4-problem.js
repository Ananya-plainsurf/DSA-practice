// 4️⃣ Insert at End
// 🧠 What you need to do

// Add a new node at the end of list.

// 🔗 Visual
// Before:
// head → [1 | •] → [2 | •] → [3 | null]

// Insert: 4

// After:
// head → [1 | •] → [2 | •] → [3 | •] → [4 | null]

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  unShift(val) {
    // insert at start
    let curr = this.head; // temporarily store store the head
    let temp = new Node(val);
    if (!this.head) {
      // if empty add the new node value
      this.head = temp;
      return;
    }
    this.head = temp; // store the first node at the head
    this.head.next = curr; // append rest of the list
    return;
  }

  push(val) {
    // insert at the end
    let curr = this.head;
    let temp = new Node(val);
    if (!this.head) {
      this.head = temp;
      return;
    }

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = temp;
    return;
  }

  search(sVal) {
    if (!this.head) {
      return "List is empty";
    }
    let curr = this.head;
    let idx = 0;
    while (curr) {
      if (curr.val === sVal) {
        return {
          val: curr.val,
          idx,
        };
      }
      curr = curr.next;
      idx++;
    }
    return {
      val: sVal,
      idx: "not found",
    };
  }

  insertInBetween(idx, val) {
    let temp = new Node(val);
    if (!this.head && idx === 0) {
      this.head = temp;
      return;
    } else if (!this.head && idx > 0) {
      return `List is empty hence cannot insert at ${idx} index`;
    }

    if (idx === 0) {
      this.unShift(val);
      return;
    }
    let curr = this.head;
    let prev = null;
    let i = 0;
    while (i < idx) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    if (!curr && i !== idx) {
      return "Index out of bound";
    }

    temp.next = curr;
    prev.next = temp;
    return console.log(`Inserted at ${idx}`);
  }

  deleteAtIdx(idx) {
    if (!this.head) {
      return console.log(`list is empty to delete`);
    }
    if (idx === 0) {
      this.shift();
      return;
    }
    let curr = this.head;
    let prev = null;
    let i = 0;
    while (curr && i < idx) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    if (!curr && i !== idx) {
      return console.log(`Index: ${idx} out of bound`);
    }
    prev.next = curr.next;
    return console.log(`Element deleted at Index: ${idx}`);
  }

  pop() {
    // delete from end
    if (!this.head) {
      return console.log(`list is empty to pop`);
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let curr = this.head;
    let prev = null;
    while (curr.next !== null) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;
    return;
  }

  shift() {
    // remove from start
    if (!this.head) {
      return console.log(`list is empty to shift`);
    } else if (!this.head.next) {
      this.head = null;
      return;
    }

    this.head = this.head.next;
    return;
  }

  print() {
    let cur = this.head;
    let str = "";
    while (cur) {
      str += ` ${cur.val} ->`;
      cur = cur.next;
    }
    return (str += " null");
  }
}
const linkedList = new LinkedList({
  val: 4,
  next: { val: 7, next: { val: 9, next: null } },
});
linkedList.unShift(1);
linkedList.push(10);
console.log(linkedList.print());
console.log(linkedList.search(3));
console.log(linkedList.search(10));
linkedList.insertInBetween(1, 11);
linkedList.insertInBetween(4, 8);
console.log(linkedList.print());
linkedList.deleteAtIdx(4);
console.log(linkedList.print());
linkedList.pop();
console.log(linkedList.print());
linkedList.shift();
console.log(linkedList.print());
