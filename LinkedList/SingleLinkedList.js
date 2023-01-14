// node next null
// each node element will have reference to the next node and the  last node will point to the null
//   node  link   next
// [ 'a'    =>    'b' => 'c' => 'd' => null]
//   head                       tail

class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // this will point to the next node
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newnode = new Node(val);
    if (!this.head) {
      this.head = newnode;
      this.tail = this.head;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.length++;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let newNode = this.head.next;
    this.head = newNode;
    this.length--;
  }
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let prevHead = this.head;
      let currentNode = newNode;
      this.head = currentNode;
      currentNode.next = prevHead;
    }
    this.length++;
  }
  get(index) {
    // if (index < 0 || index >= this.length) return undefined;

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  set(val, index) {
    this.get(index).data = val;
  }
  remove(index) {
    let removedNode = this.get(index);
    let prevNode = this.head;
    let afterNode = removedNode.next;
    removedNode.next = null;
    let counter = 0;
    while (prevNode.next) {
      counter++;
    }
    prevNode.next = afterNode;
  }
  reverse() {
    // a => b => c => d => e
    // a <= b <= c <= d <= e
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    while (current.next) {
      current.next = current;
      let next = this.head;
      next.next = prev;
      prev = current;
    }
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.reverse();
console.log(list);
