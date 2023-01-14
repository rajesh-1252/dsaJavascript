const twoSum = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === target) {
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return [-1, -1];
};
console.log(twoSum([-4, -3, -2, -1, 0, 1, 2, 3, 10], 0));

const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let uniqueValue = 1;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      uniqueValue++;
      j++;
    } else if (arr[i] === arr[j]) {
      i++;
      j++;
    }
  }
  return uniqueValue;
};

console.log(countUniqueValues([]));
