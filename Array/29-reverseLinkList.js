 class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

 class LinkList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      [curr.next, prev, curr] = [prev, curr, curr.next];
    }

    this.head = prev;
  }
}

const list = new LinkList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.print();
list.reverse();
list.print();
