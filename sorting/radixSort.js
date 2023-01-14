class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // 1 => 2 => 3 => 4 => 5
  pop() {
    if (!this.head) return undefined;
    let start = this.head;
    let newTail = start;
    while (start.next) {
      newTail = start;
      start = start.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    let newHead = oldHead.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) this.tail = null;
    return this;
  }
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
    this.length++;
  }
  get(index) {
    let current = this.head;
    let result;
    let count = index + 1;
    while (count && index < this.length - 1) {
      result = current;
      current = current.next;
      count--;
    }
    return result;
  }
  insert(index, val) {
    let newNode = new Node(val);
    if (index === 0) {
      this.unShift(val);
      return this;
    }
    if (index < 0 || index > this.length) return null;

    let pervNode = this.get(index - 1);
    let nextNode = this.get(index + 1);

    pervNode.next = newNode;
    newNode.next = nextNode;
    return this;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  remove(index) {
    if (this.length === 0) {
      this.unShift();
      return this;
    }
    let prevNode = this.get(index - 1);
    let nextNode = this.get(index + 1);

    prevNode.next = nextNode;
    this.length--;
    return this;
  }
  reverse1() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}
let list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.reverse1();
// console.log(list.remove(1));

console.log(list);
