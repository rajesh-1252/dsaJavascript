// binary tree rules
// each node can't have more than two nodes
// greater than parent node will be at right
// lesser than parent node will be at left

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bts {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (current.value === val) return undefined;
        if (current.value > val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (current.value < val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  DFSPreOrderLeft(value) {
    let list2 = new Bts();
    let current = value;
    function traverse(current) {
      list2.insert(current.value);
      if (current.left) traverse(current.left);
    }
    traverse(current);
    return list2;
  }
  DFSPreOrderRight() {
    let list = new Bts();

    function traverse(current) {
      list.insert(current.value);
      if (current.right) traverse(current.right);
    }
    traverse(this.root);
    return list;
  }

  flattenBinaryTree() {
    // if (!this.root) {
    //   return null;
    // }
    // let leftTail = this.DFSPreOrderLeft(this.root.left);
    // let rightTail = this.DFSPreOrderRight(this.root.right);
  }
}

let list = new Bts();

list.insert(5);
list.insert(4);
list.insert(5);
list.insert(6);
list.insert(7);
list.insert(2);
list.insert(1);
list.insert(1);
list.insert(1);
console.log(list.DFSPreOrderRight());
// console.log(list.DFSPreOrderLeft());

// console.log(list);
