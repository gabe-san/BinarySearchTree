import Node from './node';
import { deleteHelper, checkHelper } from './helperfunctions';
import queue from './queue';

export default class Tree {
  constructor(arr) {
    this.arr = arr;
    this.root = null;
  }

  sortFilter() {
    const unsortedFilteredArray = this.arr;
    const sortedUnfinishedArray = unsortedFilteredArray.sort((a, b) => a - b);
    const fixedArray = checkHelper(sortedUnfinishedArray)
    this.arr = fixedArray
    return this.arr
  }

  buildTree(array = this.sortFilter()) {
    if (array.length === 0) return null;
    const mid = Math.floor(array.length / 2)
    const node = new Node(array[mid])

    node.left = this.buildTree(array.slice(0, mid))
    node.right = this.buildTree(array.slice(mid + 1)) // middle index is reserved as root, +1 needed when using .slice()
    return node
  }

  // accepts value of new node and root node as parameter
  insert(value, node) {
    const root = node;
    if (!Number.isInteger(value)) {
      return null;
    }
    if (this.root === null) {
      this.root = new Node(value);
      return this.root
    }
    if (root.data === value) {
      console.log(`Duplicate Value: ${root.data}`)
      return node
    }

    if (value < root.data) {
      if (root.left === null) {
        root.left = new Node(value);
      } else {
        root.left = this.insert(value, root.left)
      }
    }
    else if (value > root.data) {
      if (root.right === null) {
        root.right = new Node(value)
      } else {
        root.right = this.insert(value, root.right)
      }
    }
    return root
  }

  // recursive
  deleteItem(value, node) {
    const root = node;
    if (root === null) return root;

    // call similar to insert(), traverse down tree until exists if block
    if (value < root.data) {
      root.left = this.deleteItem(value, root.left)
    } else if (value > root.data) {
      root.right = this.deleteItem(value, root.right)
    } else {
      // Leaf node
      if (root.left === null && root.right === null) {
        // remove parent root pointer to node of interest
        return null;
      }
      // One child
      if (root.left === null) {
        return root.right
      } // returns pointer of the base case's child to be the pointer of the previous recursive call's root
      if (root.right === null) {
        return root.left
      }
      // Two children
      // find min of right subtree
      const minSibling = deleteHelper(root.right);
      root.data = minSibling.data;
      root.right = this.deleteItem(minSibling.data, root.right)
    }
    return root
  }

  find(value, node = this.root) {
    let root = node;

    while (root.data !== value) {
      if (value < root.data) {
        root = root.left
      }
      if (value > root.data) {
        root = root.right
      }
      if (root === null) {
        return null
      }
    }
    return root;
  }

  levelOrder() {
    if (this.root === null) return;
    queue.enqueue(this.root)
    while (!queue.isEmpty()) {
      const current = queue.dequeue();
      console.log(current);
      if (current.left !== null) queue.enqueue(current.left)
      if (current.right !== null) queue.enqueue(current.right)
    }
    // BFS

    // implement queue
    // throw error if callback is not provided
    // similar to forEach, when you traverse using BFS, do callback function on each node before moving to next one
  }
}