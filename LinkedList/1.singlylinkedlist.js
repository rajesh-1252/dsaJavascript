class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next ? next : null;
  }
}
class LL {
  constructor() {
    this.head = null; // reference variable pointing to the nodes
    this.tail = null;
    this.length = 0;
  }
  shift() {
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.length--;
  }
  unshift(value) {
    // method
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.tail === null) {
      this.tail = this.head;
    }
    this.length++;
  }
  push(value) {
    if (this.tail === null) {
      this.unshift(value);
      return;
    }
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  pop() {
    let temp = this.head;
    for (let i = 0; i < this.length - 2; i++) {
      temp = temp.next;
    }
    this.tail = temp;
    temp.next = null;
    this.length--;
  }

  insert(index, value) {
    if (index === 0) {
      this.unshift(value);
      return;
    }
    if (index === this.length) {
      this.push(value);
      return;
    }
    let temp = this.head;

    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    let newNode = new Node(value, temp.next);
    temp.next = newNode;
    this.length++;
  }

  display() {
    let temp = this.head;
    let list = "";
    while (temp != null) {
      list += temp.value + " --> ";
      temp = temp.next;
    }
    list += "End";
    console.log(list);
  }
  display2() {
    let temp = this.head;
    let list = "";
    for (let i = 0; i < this.length; i++) {
      list += temp.value + " --> ";
      temp = temp.next;
    }
    list += "end";
    console.log(list);
  }
}

let linkedList = new LL();
linkedList.unshift("1");
linkedList.unshift("2");
linkedList.push("3");
linkedList.insert(0, "22");
linkedList.pop();
linkedList.display();
linkedList.display2();

// console.log(linkedList);
