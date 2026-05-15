// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List class
class LinkList {
  constructor() {
    this.head = null;
  }

  //   add karna
  append(data) {
    const newNode = new Node(data);

    // if empty
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

  //   print karna
  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }

    console.log(result + "null");
  }

  //   delete karna
  delete(data) {
    // if enpty
    if (!this.head) {
      return;
    }

    // if are you delete head
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  search(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }
    return -1; // nahi mila
  }
}

const list = new LinkList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log(list.search(3));

list.delete(2);

list.print();
