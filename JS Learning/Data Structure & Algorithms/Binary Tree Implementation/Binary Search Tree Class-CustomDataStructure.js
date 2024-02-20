// node
class Node {
  constructor(value) {
    this.value = value;
    this.left = this.left;
    this.right = this.right;
  }
}

// initial part of node
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }
}

const bts = new BinarySearchTree();

console.log(bts.isEmpty());
