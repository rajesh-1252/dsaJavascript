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

  // reverse() {
  //   let current = this.head;
  //   this.head = this.tail;
  //   this.tail = current;
  //   let prev = null;
  //   let next;

  //   //   a =>   b=>   c

  //   //  prev  curr   next

  //   // a <= b <= c

  //   while (next) {
  //     next = current.next;
  //     current.next = prev;
  //     prev = current;
  //     current = next;
  //   }
  // }
  isPalindrome() {
    // two pointer  one will move slow and another one will move fast
    // fast will move two times the speed of slow
    let fast = this.head;
    let slow = this.head;

    // shifting the pointers
    // find middle (slow pointer)

    while (fast && null) {
      fast = fast.next.next;
      slow = slow.next;
      console.log(fast);
      console.log(fast.next);
    }
    console.log(fast);
    // m => a => d => a => m
    // slow               fast

    // reverse the second half
    // reverse the node after the slow pointer

    //  setting prev as null because the center node i.e the slow pointer node doesn't point to the next node and its null
    // m => a => d    a => m
    //         prev  slow
    //  slow.next = prev
    // m => a => d <= a => m
    // prev = slow
    // slow = temp
    // m => a => d <= a <=  m
    //               prev  slow

    // m => a => d => a => m
    // m => a => d <= a <= m
    // reversing
    let prev = null;
    while (slow) {
      let temp = slow.next;
      slow.next = prev;
      prev = slow;
      slow = temp;
    }
    // check palindrome

    // m => a => d <= a <= m
    //  left                right

    let left = this.head;
    let right = prev;
    while (prev) {
      if (left.value != right.value) {
        // console.log(left.value != right.value);
        return false;
      } else {
        left = left.next;
        right = right.next;
      }
      return true;
    }
  }
}

let list = new SingleLinkedList();

list.isPalindrome();
list.push("m");
list.push("a");
list.push("d");
list.push("a");
list.push("m");
console.log(list.isPalindrome());
