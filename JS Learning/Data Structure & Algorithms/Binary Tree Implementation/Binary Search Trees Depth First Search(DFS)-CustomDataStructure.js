// node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  // Preorder:
  /*
  DFS explores paths as far as possible before backtracking. It can be done in three ways:
  Preorder (start, left, right), Inorder (left, start, right), and Postorder (left, right, start).

  Preorder Traversal:  
  1. Read the data of the node  
  2. Visit the left subtree  
  3. Visit the right subtree
  
  Visualization:

  root->  >10     root->  10     root->  10     root->  10     root->  10                                                                                        
          /  \           /  \           /  \           /  \           /  \                                                                                                
         5    15       >5    15        5    15        5    15        5   >15                                                                                                            
        / \            / \            / \            / \            / \                                                                                            
       3   7          3   7         >3   7          3  >7          3   7                                                                                                    

  Preorder Traversal: 10 5 3 7 15
  */
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  // Inorder:
  /*
  Inorder Traversal:  
  1. Visit the left subtree  
  2. Read the data of the node  
  3. Visit the right subtree
  
  Visualization:

  root->   10     root->  10     root->  10    root->  >10     root->  10                                                                                        
          /  \           /  \           /  \           /  \           /  \                                                                                                
         5    15       >5    15        5    15        5    15        5   >15                                                                                                            
        / \            / \            / \            / \            / \                                                                                            
      >3   7          3   7          3  >7          3   7          3   7                                                                                                    

  Inorder Traversal: 3 5 7 10 15
  */

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  // Postorder:
  /*
  Postorder Traversal:  
  1. Visit the left subtree  
  2. Read the data of the node  
  3. Visit the right subtree
  
  Visualization:

  root->   10     root->  10     root->  10    root->  >10     root->  10                                                                                        
          /  \           /  \           /  \           /  \           /  \                                                                                                
         5    15       >5    15        5    15        5    15        5   >15                                                                                                            
        / \            / \            / \            / \            / \                                                                                            
      >3   7          3   7          3  >7          3   7          3   7                                                                                                    

  Postorder Traversal: 3 5 7 10 15
  */

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}

const bts = new BinarySearchTree();
console.log(bts.isEmpty());

bts.insert(10);
bts.insert(5);
bts.insert(15);
bts.insert(3);
bts.insert(7);

console.log(bts.search(bts.root, 10));
console.log(bts.search(bts.root, 5));
console.log(bts.search(bts.root, 30));
bts.preOrder(bts.root);
bts.inOrder(bts.root);
bts.postOrder(bts.root);
