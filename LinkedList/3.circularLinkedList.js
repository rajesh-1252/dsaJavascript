class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    newNode.next = this.head;
    this.tail = newNode;
    this.length++;
  }
  display() {
    let temp = this.head;
    let str = "";
    for (let i = 0; i < this.length; i++) {
      str += temp.value + " --> ";
      temp = temp.next;
    }
    str += "End";
    return str;
  }
}

let circularLinkedList = new CLL();
circularLinkedList.push("hello");
console.log(circularLinkedList.display());
console.log(circularLinkedList);
