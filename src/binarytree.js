import Node from '../node';

export default class Tree {
  constructor(arr) {
    this.arr = arr;
    this.root = null;
    // this.root = buildTree()
  }
}

function sortedDuplicateArray(array) {
  // mergesort array
  // check array[index] + array[index+1] if they are duplicate values, keep only 1 value in new array
  // return new modified array
  return array
}

function buildTree(array) {
  // const array = sortedDuplicateArray(array) 
  // create new Tree Object filled with nodes based on 
  // return base root of the newly create Tree object (level 0 or the node at the top before it splits left and righ)
}

// visualize buildTree()
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};
