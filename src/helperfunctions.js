function checkHelper(array) {
  if (array.length === 0) return [];
  const noDuplicatesArray = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      noDuplicatesArray.push(array[i])
    }
  }
  return noDuplicatesArray
}

function deleteHelper(node) {
  let curr = node;
  while (curr.left !== null) {
    curr = curr.left;
  }
  return curr;
}

// callback function to test levelOrder() 
function printNode(node) {
  console.log(`Current node: ${node.data}`);
}

function createArray(node, array) {
  array.push(node.data)
}

export { deleteHelper, checkHelper, printNode, createArray }