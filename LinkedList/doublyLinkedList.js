class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(item) {
    let node = new Node(item);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  pop() {
    if (this.length === 0) return null;
    if (this.length === 1) return null;
    let currentTail = this.tail;
    const prev = this.tail.prev;
    prev.next = null;
    this.tail = prev;
    this.length--;
    return currentTail;
  }
  // removing from begining of the node
  shift() {
    if (this.length === 0) return null;
    if (this.length === 1) return null;
    else {
      let toBeRemoved = this.head;
      this.head = toBeRemoved.next;
      this.head.prev = null;
      this.length--;
      return toBeRemoved;
    }
  }
  // unshift adding node to the begining
  unShift(item) {
    let node = new Node(item);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.head.next = null;
      this.head.prev = null;
    }
    let prevNode = this.head;
    this.head = node;
    this.head.next = prevNode;
    prevNode.prev = this.head;
    this.length++;
    return this;
  }
  // get the node at the given position

  get(index) {
    if (index > this.length) return undefined;
    let counter;
    let currentNode;
    if (index <= this.length / 2) {
      counter = 0;
      currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      counter = this.length - 1;
      currentNode = this.tail;
    } else {
      while (counter !== index) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.unShift(0);
console.log(list.get(5));
console.log(list);
