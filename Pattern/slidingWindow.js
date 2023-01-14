const maxSumSubarray = (arr, k) => {
  let maxValue = Number.MIN_VALUE;
  let currentWindowAnswer = 0;
  let moveWindow = -1;

  for (let i = 0; i < arr.length; i++) {
    currentWindowAnswer += arr[i];
    if (i >= k - 1) {
      maxValue = Math.max(maxValue, currentWindowAnswer);
      moveWindow++;
      currentWindowAnswer -= arr[moveWindow];
    }
  }
  return maxValue;
};
console.log(maxSumSubarray([4, 2, 1, 7, 8, 1, 2, 8, 9, 0], 3));
// smallest subarray size that is greater than or equal to target
// >= target
const smallestSubArray = (arr, target) => {
  let size = Number.MAX_VALUE;
  let currentSubarrayVal = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentSubarrayVal += arr[windowEnd];

    while (currentSubarrayVal >= target) {
      size = Math.min(size, windowEnd - windowStart + 1);
      currentSubarrayVal -= arr[windowStart];
      windowStart++;
    }
  }
  return size;
};

console.log(smallestSubArray([4, 2, 2, 7, 8, 1, 2, 2, 2, 2, 2, 10], 8));
