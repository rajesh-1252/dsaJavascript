const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return arr[i];
    }
  }
  return -1;
};

console.log(linearSearch([1, 2, 3, 4, 5], 6));
