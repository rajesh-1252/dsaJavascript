// tree traversal iterating every node in the tree
// breath first search  width
// depth first search  height
// inorder preorder postorder

// breath first search pseudo code
// initialize node queue and visited
// push the root to the queue and make the node as the node that is shifted from the queue
// push the updated node to the visited
// if the ndoe has left and right push that to the queue

// dfs preorder push the value that are visited
// dfs postorder push the value after visting all nodes
// dfs inorder
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
  insert(value) {
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (true) {
      if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }
  //   queue= []
  //  visited = []
  BFS() {
    let node = this.root,
      visited = [],
      queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  DFSPreorder() {
    let visited = [];
    let current = this.root;
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
  }
  DFSPreorder1() {
    let visited = [];
    let current = this.node;
    while (true) {
      visited.push(current);
      if (current.left) visited.push(current.left);
      if (current.right) visited.push(current.right);
      return;
    }
  }
  DFSPreorder2() {
    let visited = [];
    let current = this.root;
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
  }
  DFSPostorder() {
    let visited = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(current);
    return visited;
  }
  DFSInorder() {
    let visited = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
      // visited.push(node.value);
    }
    traverse(current);
    return visited;
  }
}

let list = new Bts();

list.insert(10);
list.insert(6);
list.insert(15);
list.insert(3);
list.insert(8);
list.insert(20);
console.log(list.DFSPreorder());
console.log(list.BFS());
console.log(list.DFSPreorder2());
console.log(list.DFSPostorder());
console.log(list.DFSInorder());
