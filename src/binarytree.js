import Node from './node';
import checkDuplicateSortedArray from './checkduplicate';

export default class Tree {
  constructor(arr) {
    this.arr = arr;
    this.root = null;
  }

  sortFilter() {
    const unsortedFilteredArray = this.arr;
    const sortedUnfinishedArray = unsortedFilteredArray.sort((a, b) => a - b);
    const fixedArray = checkDuplicateSortedArray(sortedUnfinishedArray)
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
}