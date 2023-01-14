class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let node = new Node(val);
    // for the first time
    if (this.root === null) {
      this.root = node;
      return this;
    }
    // to update the node that we are currently in
    let current = this.root;
    while (true) {
      if (current.value === val) return undefined;

      if (val > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else if (val < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }

  inOrderTraversal(tree) {
    if (tree === null) {
      return;
    }
    console.log(tree.value);
    this.inOrderTraversal(tree.left);
    this.inOrderTraversal(tree.right);
  }
  preOrderTraversal(tree) {
    
  }
  levelOrderTraversal(tree) {
    let q = [];
    let stack = [];
    if (tree === null) {
      return [];
    }
    q.push(tree.root);
    while (!(q.length === 0)) {
      let temp = [];
      let size = q.length;
      console.log(size);
      for (let i = 0; i < size; i++) {
        let node = q.shift();
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
        temp.push(node.value);
      }
      stack.push(...temp);
    }
    return stack;
  }
}

const tree = new Bst();
const node1 = new Node(1);
tree.insert(11);
tree.insert(12);
tree.insert(10);
let newArr = [];
// console.log(tree.levelOrderTraversal(tree));
console.log(tree.preOrderTraversal(tree));
// console.log(tree.inOrderTraversal(tree.root, newArr));
// tree.root = node1;
// tree.root.left = new Node(2);
// tree.root.left.left = new Node(2);

// tree.root.right = new Node(3);
