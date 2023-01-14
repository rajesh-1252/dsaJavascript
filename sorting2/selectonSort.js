// select the element and put it in the right spot
// select the largest element and put it at the last index

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let last = arr.length - 1 - i;
    let maxIndex = getMaxIndex(arr, 0, last);
    swap(maxIndex, last, arr);
  }
  return arr;
};

const getMaxIndex = (arr, start, end) => {
  let max = start;
  for (let i = start; i <= end; i++) {
    if (arr[max] < arr[i]) {
      max = i;
    }
  }
  return max;
};

const swap = (first, second, arr) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};
console.log(selectionSort([5, 4, 3, 2, 1]));

// selection sort day 2

// keep the element at the correct index either at the first or last
// in the first pass the largest element will be at the last index
const selectionSort2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let maxIndex;
    let maxVal = 0;
    let last = arr.length - 1 - i;
    for (let j = 0; j <= last; j++) {
      if (arr[j] > maxVal) {
        maxVal = arr[j];
        maxIndex = j;
      }
    }
    let temp = arr[maxIndex];
    arr[maxIndex] = arr[last];
    arr[last] = temp;
  }
  return arr;
};
console.log(selectionSort2([5, 4, 3, 2, 1]));
