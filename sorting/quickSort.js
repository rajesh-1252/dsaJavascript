// pseudo code

//  => first define a function that takes 3 argument (array , start , end ) where start is the begining of the array and end is the end of array

//  => next define two variable to track the index and value of the loop we are currently in

//  => next loop through the array and find the value which is less the the starting index i.e(index = 0)

//  if the value is less than the start increase the swapIndex and swap the swapIndex and the current iteration (i.e : i )

// then at the end of the loop swap the swapIndex and the start

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx);
  console.log(arr);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, (right = pivotIndex - 1));
    // right
    quickSort(arr, (left = pivotIndex + 1), right);
  }
  return arr;
}

quickSort([4, 6, 9, 1, 2, 5]);
