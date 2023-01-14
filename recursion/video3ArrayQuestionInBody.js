const findIndex = (arr, target, i) => {
  let list = [];
  if (i > arr.length) {
    return list;
  }

  if (arr[i] === target) {
    list.push(i);
  }

  let ansFromPreviousCall = findIndex(arr, target, i + 1);
  list.push(...ansFromPreviousCall);

  return list;
};

let arr = [1, 2, 10, 4, 5, 10, 10, 10];
console.log(findIndex(arr, 10, 0));
