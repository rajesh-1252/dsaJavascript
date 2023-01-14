class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = null;
    }
    this.lenght++;
  }
  isPalindrome() {
    //  two pointer method

    //  slow pointer and fast pointer
    // fast pointer will move 2 times the speed of slow pointer

    let fast = this.head;
    let slow = this.head;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    // now the linked list will look like this
    // m => a => d => a => m
    //          slow     fast

    // revers the node after the slow pointer

    let prev = null; // this is because we can set the d.next = null at the begining as we are changing the pointer direction

    while (slow) {
      let temp = slow.next;
      slow.next = prev;
      prev = slow;
      slow = temp;
    }
    // we need to compare

    let left = this.head;
    let right = prev;

    while (prev) {
      if (left.value != right.value) {
        return false;
      }
      left = left.next;
      right = right.next;
      return true;
    }
  }
}

let list = new SingleLinkedList();

list.push("m");
list.push("a");
list.push("d");
list.push("a");
list.push("ms");
console.log(list.isPalindrome());
console.log(list);
