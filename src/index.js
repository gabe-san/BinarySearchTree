import Tree from './binarytree';

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const BSTree = new Tree(array)
BSTree.root = BSTree.buildTree();

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

prettyPrint(BSTree.root)
console.log(BSTree.isBalanced())

BSTree.insert(2, BSTree.root);
BSTree.insert(12, BSTree.root);
BSTree.insert(244, BSTree.root);
BSTree.insert(233, BSTree.root);
BSTree.insert(22, BSTree.root);
BSTree.insert(211, BSTree.root);

prettyPrint(BSTree.root)
console.log(BSTree.isBalanced())


await BSTree.rebalance();
prettyPrint(BSTree.root)
console.log(BSTree.isBalanced())