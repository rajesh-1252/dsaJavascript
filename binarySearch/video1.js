const binarySearch = (arr, target) => {
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let middle = Math.floor(e - s / 2);
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

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));

// binary search recursion

const binarySearchRecursion = (arr, target, s, e) => {
  let mid = Math.floor(e - s / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] > target) {
    return binarySearchRecursion(arr, target, s, mid - 1);
  } else if (arr[mid] < target) {
    return binarySearchRecursion(arr, target, mid + 1, e);
  } else {
    return -1;
  }
};
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(binarySearchRecursion(arr, 4, 0, arr.length - 1));

// orderAgnostic binary search

const orderAgnosticBs = (arr, target) => {
  let s = 0;
  let e = arr.length - 1;
  isAscending = arr[s] < arr[e];

  if (isAscending) {
    return binarySearch(arr, target);
  } else {
    return binarySearchDes(arr, target);
  }
};
const binarySearchDes = (arr, target) => {
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor(e - s / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return -1;
};
let ascenArr = [1, 2, 3, 4, 5];
let desArr = [5, 4, 3, 2, 1];
// console.log(orderAgnosticBs(desArr, 1));
// console.log(orderAgnosticBs(ascenArr, 1));

// binary search
// sorted arr
// we need to search
// condition to search while(s <= e)
// how ? start by taking the middle elem
// if mid == target ? found :
// if the target is greater than mid decrease the search space by move the start s = mid + 1
// if the target is lesser than mid move the end e = mid - 1
// if not found return 'not found'

const binarySearch3 = (arr, target) => {
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor(e - s / 2);
    if (arr[mid] === target) return mid;
    if (target > arr[mid]) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return -1;
};
const binarySearch3Rec = (arr, target, s, e) => {
  // base condition is the answer we already know
  // so
  let mid = Math.floor(e - s / 2);
  if (arr[mid] === target) return mid;
  // if (s > e) {
  //   return -1;
  // }
  if (target > arr[mid]) {
    return binarySearch3Rec(arr, target, (s = mid + 1), e);
  } else if (target < arr[mid]) {
    return binarySearch3Rec(arr, target, s, (e = mid - 1));
  } else {
    return -1;
  }
};
console.log(binarySearch3Rec([1, 2, 3, 4, 5], 1, 0, 4));
