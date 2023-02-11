import LL from "./1.singlylinkedlist.js";

class Problems extends LL {
  constructor() {
    super();
  }
  duplicates() {
    let node = this.head;
    // console.log(node);
    while (node.next !== null) {
      if (node.value === node.next.value) {
        node.next = node.next.next;
        this.length--;
      } else {
        node = node.next;
      }
    }
    this.tail = node;
    this.tail.next = null;
  }
  mergeLL(first, second) {
    let f = first.head;
    let s = second.head;
    let ans = new Problems();
    while (f !== null && s !== null) {
      if (f.value < s.value) {
        ans.push(f.value);
        f = f.next;
      } else {
        ans.push(s.value);
        s = s.next;
      }
    }
    while (f !== null) {
      ans.push(f.value);
      f = f.next;
    }
    while (s !== null) {
      ans.push(s.value);
      s = s.next;
    }
    return ans;
  }
}

const linkedList = new Problems();
const linkedList1 = new Problems();
const linkedList2 = new Problems();
linkedList2.push(4);
linkedList2.push(5);
linkedList2.push(6);
linkedList2.push(7);
linkedList1.push(1);
linkedList1.push(1);
linkedList1.push(2);
linkedList1.push(3);
linkedList1.push(3);
console.log(linkedList.mergeLL(linkedList1, linkedList2).display());

linkedList1.display();
