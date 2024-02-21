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

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (newNode.value > root.value) {
        if (root.right === null) {
          root.right = newNode;
        } else {
          this.insertNode(root.left, newNode);
        }
      }
    }
  }
}

const bts = new BinarySearchTree();
console.log(bts.isEmpty());

bts.insert(10);
bts.insert(5);
bts.insert(15);
