Data structure:-

There are two types of Data structure.
1. Linear Data Structure 
2. Non Linear Data Structure 

Linear Data Structure:-
			1. Static Data Structure: Array
			2. Dynamic Data Structure: Stack, Queue and Link List
Non Linear Data Structure:-
			1. Tree 2. Graph 


Example of Code:-
---------------------------------------------------------------
Linked List (Linear Data Structure):

// Define a Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Create a linked list
let head = new Node(10);
let node1 = new Node(20);
let node2 = new Node(30);

// Connect nodes in the linked list
head.next = node1;
node1.next = node2;

// Traverse the linked list
let current = head;
while (current) {
  console.log(current.data);
  current = current.next;
}
----------------------------------------------------------------------
Trees (Non-Linear Data Structure):

// Define a Tree Node class
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Create a binary search tree
let root = new TreeNode(50);
root.left = new TreeNode(30);
root.right = new TreeNode(70);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(40);
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);

// Perform an inorder traversal
function inorderTraversal(node) {
  if (!node) return;
  inorderTraversal(node.left);
  console.log(node.data);
  inorderTraversal(node.right);
}

inorderTraversal(root); // Output: 20, 30, 40, 50, 60, 70, 80
-------------------------------------------------------------------------
Hash Table (Non-Linear Data Structure):

// Create a simple hash table
let hashTable = {};

// Insert key-value pairs
hashTable['apple'] = 5;
hashTable['banana'] = 3;
hashTable['orange'] = 8;

// Retrieve values by keys
console.log(hashTable['apple']); // Output: 5
console.log(hashTable['banana']); // Output: 3
console.log(hashTable['orange']); // Output: 8
-----------------------------------------------------------
