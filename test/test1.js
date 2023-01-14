const findIndex = (arr, target, index) => {
  let list = [];
  if (index === arr.length) {
    return list;
  }
  if (arr[index] === target) {
    list.push(index);
  }
  const ansFromBellowCalls = findIndex(arr, target, index + 1);

  list.push(...ansFromBellowCalls);

  return list;
};

console.log(findIndex([4], 4, 0));
