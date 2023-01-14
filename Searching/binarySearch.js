const binarySearch = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== value) {
    if (value < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
    if (arr[middle] === value) {
      return middle;
    }
  }
};
// 1
// [1, 2, 3, 4, 5, 9],
//  l     m        r

const binarySearch2 = (arr, value) => {
  let l = 0;
  let r = arr.length - 1;

  let middle = Math.floor((l + r) / 2);

  while (l <= r) {
    if (value < arr[middle]) {
      r = middle - 1;
    } else if (value > arr[middle]) {
      l = middle + 1;
    }
    middle = Math.floor((l + r) / 2);
    if (arr[middle] === value) {
      return true;
    }
  }
  return false;
};

console.log(binarySearch2([1, 2, 3, 4, 5, 9], 8));
