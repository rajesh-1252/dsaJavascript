function searchInsert(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  let temp = nums;
  nums.push(target);
  // return { nums[start] nums[end] };
  return nums[start];
}
console.log(searchInsert([1, 2, 3, 5, 6], 4));
