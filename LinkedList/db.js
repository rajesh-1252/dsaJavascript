const findOccurance = (arr) => {
  let ans = {};
  for (let i = 0; i < arr.length; i++) {
    if (!ans[arr[i]]) {
      ans[arr[i]] = 0;
    }
    if (ans[arr[i]] >= 0) {
      ans[arr[i]] += 1;
    }
  }
  return ans;
};

const input = ["a", "b", "a", "r", "r", "r", "n", "e", "e"];

console.log(input.filter((item) => item !== "r"));

console.log(findOccurance(input));
