// celling of a number

// smallest element in an array that is greater than or equal to target

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
console.log(searchRange1([1, 2, 2, 2, 4, 5], 2));

console.log(searchRange1([1, 2, 3, 3, 3, 3, 4, 5], 3));
