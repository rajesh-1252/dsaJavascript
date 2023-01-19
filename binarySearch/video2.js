// celling of a number

// smallest element in an array that is greater than or equal to target
const binarySearch = (arr, target, s, e) => {
  while (s <= e) {
    let middle = Math.floor(s + (e - s) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (arr[middle] > target) {
      e = middle - 1;
    } else {
      s = middle + 1;
    }
  }
  return -1;
};

const celling = (arr, target) => {
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor(e - s / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return arr[s];
};
// console.log(celling([2, 3, 4, 9, 14, 16, 18], 15));

// flooring

const flooring = (arr, target) => {
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor(e - s / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return arr[e];
};
// console.log(flooring([2, 3, 4, 9, 14, 16, 18], 15));

// question 3
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// find the first occurence of the target and last.
// example
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

const searchRange = (arr, target) => {
  let range = [-1, -1];
  range[0] = firstOccurance(arr, target, (firstOccurance1 = true));
  range[1] = firstOccurance(arr, target, (firstOccurance1 = false));
  return range;
};
const firstOccurance = (arr, target, firstOccurance) => {
  let s = 0;
  let e = arr.length - 1;
  //   let ans;
  while (s <= e) {
    let mid = Math.floor(e - s / 2);
    if (arr[mid] === target) {
      ans = mid;
      if (firstOccurance) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    }
    if (target > arr[mid]) {
      s = mid + 1;
    } else if (target < arr[mid]) {
      e = mid - 1;
    }
  }
  return ans;
};

// console.log(searchRange([1, 2, 3, 3, 3, 3, 4, 5], 3));

// find first occurance and last occurance in a sorted array
// return the  index of first occurance and last occurance [2, 9]
// if not found i.e if there is no target element return [-1,-1]
// if there is only one target element return [2,2]

const searchRange1 = (arr, target) => {
  let ans = [-1, -1];
  ans[0] = firstOccurance2(arr, target, true);
  ans[1] = firstOccurance2(arr, target, false);
  return ans;
};

const firstOccurance2 = (arr, target, occurance) => {
  let s = 0;
  let e = arr.length - 1;
  // let ans;
  while (s <= e) {
    let mid = Math.floor(e - s / 2);
    if (arr[mid] === target) {
      ans = mid;
      if (occurance) {
        // find first occurance
        e = mid - 1;
      } else {
        // find last occurance
        s = mid + 1;
      }
    }
    if (target < arr[mid]) {
      e = mid - 1;
    } else if (target > arr[mid]) {
      s = mid + 1;
    }
  }
  return ans;
};
// console.log(searchRange1([1, 2, 2, 2, 2, 2, 5]));
// console.log(searchRange1([1, 2, 2, 2, 4, 5], 2));

// console.log(searchRange1([1, 2, 3, 3, 3, 3, 4, 5], 3));

// rotated binary search

// find the pivot ? pivot is the largest element & p > m + 1 & p < m-1

// findPivot

const findPivot = (arr) => {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    let mid = Math.floor((e - s) / 2);
    // if the mid is pivot
    if (arr[mid] > arr[mid + 1]) {
      // pivot
      return mid;
    } else if (arr[mid] < arr[mid - 1]) {
      // pivot
      return mid - 1;
    }
    // edge case: if the mid is not equal to pivot
    if (arr[s] >= arr[mid]) {
      e = mid - 1;
    } else if (arr[s] <= arr[mid]) {
      s = mid + 1;
    }
  }
  return -1;
};

// console.log(findPivot([7, 4, 5, 6, 0, 1, 2, 3]));

// search in pivoted array

// check weather the array is pivoted if not do simple binary search
// check if the target is less than start ? binarySearch(s: p + 1, e: arr.length -1) : binarySearch(s = 0 , e = p -1  )

const search = (arr, target) => {
  let pivot = findPivot(arr);
  // edge case
  if (pivot === -1) {
    return binarySearch(arr, target, 0, arr.length - 1);
  }
  if (arr[pivot] === target) {
    return pivot;
  }
  // target < arr[0] ; ie: target less than start
  if (target >= arr[0]) {
    return binarySearch(arr, target, 0, pivot - 1);
  } else if (target <= arr[0]) {
    return binarySearch(arr, target, pivot + 1, arr.length - 1);
  }
  return -1;
};

// console.log(search([4, 5, 6, 0, 1, 2, 3], 0));

// find pivot
// pivot is p > m + 1 || p < m -1  && pivot is the largest element

const findPivot1 = (arr) => {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    let mid = Math.floor((e - s) / 2);
    if (arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (arr[mid] < arr[mid - 1]) {
      return mid - 1;
    }
    if (arr[s] >= arr[mid]) {
      e = mid - 1;
    } else if (arr[s] <= arr[mid]) {
      s = mid + 1;
    }
  }
  return -1;
};
// console.log(findPivot1([10, 11, 1, 2, 3, 4]));
// if no pivot return - 1
// if the target is equal to pivot return pivot
// search in rotated array if the target is greater than start search between start and pivot if (target > start) s, pivot -1
// if the target is less than start search in pivot + 1 and arr.lenght - 1  if (target< start) (pivot + 1 , arr.length-1 )

const searchRange2 = (arr, target) => {
  let pivot = findPivot1(arr);
  let s = 0;
  let e = arr.length - 1;
  if (pivot === -1) {
    return pivot;
  }
  if (target === arr[pivot]) {
    return pivot;
  }
  if (target === arr[pivot]) {
    return pivot;
  }
  if (target >= arr[s]) {
    return binarySearch(arr, target, 0, pivot - 1);
  } else if (target <= arr[s]) {
    return binarySearch(arr, target, pivot + 1, arr.length - 1);
  }
  return -1;
};
console.log(searchRange2([10, 11, 2, 3, 4, 5], 523));
