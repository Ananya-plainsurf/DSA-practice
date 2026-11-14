// merge 2 sorted linked list

class linkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  print(head) {
    let current = head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

function mergeList(list1, list2) {
  let dummy = new linkedList(-1);
  let current = dummy;
  while (list1 && list2) {
    if (list1.value <= list2.value) {
      current.next = list1;
      current = current.next;
      list1 = list1.next;
    } else {
      current.next = list2;
      current = current.next;
      list2 = list2.next;
    }
  }
  current.next = list1 || list2;

  return dummy.print(dummy.next);
}

const list1 = new linkedList(1);
list1.append(2);
list1.append(4);

const list2 = new linkedList(1);
list2.append(3);
list2.append(4);

console.log(mergeList(list1.head, list2.head));
