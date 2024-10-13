import Node from '../node';
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
    node.right = this.buildTree(array.slice(mid + 1))
    return node
  }
}