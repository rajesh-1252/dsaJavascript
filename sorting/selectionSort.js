const selectionSort = (arr) => {
  let minVal = arr[0];
  let minValIdx;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        minVal = arr[j + 1];
        minValIdx = j + 1;
        console.log(minVal);
      }
    }
    let temp = arr[i];
    arr[i] = minVal;
    arr[minValIdx] = temp;
  }
  return arr;
};

console.log(selectionSort([9, 7, 6, 5, 4, 3, 2]));
