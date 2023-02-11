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

  insertRec(index, value, node) {
    if (index === 0) {
      let temp = new Node(value, node);
      // temp.next = node;
      this.length++;
      return temp;
    }
    node.next = this.insertRec(index - 1, value, node.next);
    return node;
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
  delete(index) {
    // returns the deleted value
    let temp = this.head;
    if (index === 0) {
      this.shift();
    }
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    console.log(temp.value);
    let nextNode = temp.next.next;
    temp.next = nextNode;
  }
  get(index) {
    // return value aka int
    if (index > this.length - 1) {
      throw new Error("index out of bound");
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp.value;
  }
  find(value) {
    let temp = this.head;
    while (temp.next !== null) {
      if (temp.value === value) {
        return temp;
      }
      temp = temp.next;
    }
    return null;
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
linkedList.unshift("2");
linkedList.unshift("2");
linkedList.push("3");
linkedList.insert(0, "22");
linkedList.pop();
// console.log(linkedList.insertRec(0, "hello", linkedList.head));
// linkedList.display();

// linkedList.display2();

// linkedList.delete(0);
// console.log(linkedList.get(3));
// console.log(linkedList);

// hello this is my first how are you m
console.log("output");

export default LL;
