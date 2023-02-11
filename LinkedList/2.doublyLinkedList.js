class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  unshift(value) {
    // add to the first
    let newNode = new Node(value);
    newNode.next = this.head;
    newNode.prev = null;
    if (this.head !== null) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length++;
  }
  shift() {
    // delete from first
    if (this.length === 0) {
      throw new Error("index out of bound");
    }
    let newHead = this.head.next;
    if (newHead != null) {
      newHead.prev = null;
    }
    this.head = newHead;
    this.length--;
  }
  push(value) {
    let newNode = new Node(value);
    let temp = this.head;
    newNode.next = null;
    if (head === null) {
      newNode.prev = null;
      this.head = newNode;
      return;
    }
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
    newNode.prev = temp;
  }
  display() {
    let temp = this.head;
    let str = "";
    while (temp !== null) {
      str += temp.value + " --> ";
      temp = temp.next;
    }
    str += "end";
    return str;
  }
}
let doublyLinkedList = new DLL();

doublyLinkedList.unshift("1");
doublyLinkedList.unshift("2");
// doublyLinkedList.shift("2");
// doublyLinkedList.shift("2");
console.log(doublyLinkedList.display());
