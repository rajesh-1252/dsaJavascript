// sorting the lhs of the array and inserting the element in the lhs
const insertionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      swap(arr, j, j - 1);
    }
  }
  return arr;
};
const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

console.log(insertionSort([5, 4, 3, 2, 1]));
