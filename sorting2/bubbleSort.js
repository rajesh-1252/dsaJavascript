// function expression
// difference between function expression and function statement is hoisting
// function statement is hosited but function expression is undefined in case of var and in temporal dead zone in the case of const and let ;
const bubbleSort = (arr) => {
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
      console.log(arr);
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
};

const swap = (first, second, arr) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = arr[temp];
};
const arr = [5, 4, 3, 2, 1];

// second day
const bubbleSort1 = (arr) => {
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
};

// third day

// adjacent sort compare and at every pass largest element will be at the last index

const bubbleSort2 = (arr) => {
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      // if for this whole loop the arr is not swapped means the array is sorted so break
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
};
console.log(bubbleSort2([5, 4, 3, 2, 1]));
