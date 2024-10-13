export default function checkDuplicateSortedArray(array) {
  if (array.length === 0) return [];
  const noDuplicatesArray = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      noDuplicatesArray.push(array[i])
    }
  }
  return noDuplicatesArray
}