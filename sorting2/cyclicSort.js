// if the given number range from 0 => n then use cyclic sort
// put the number at the correct index
//  the correct index is arr[i] -1 ;

const cyclicSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (arr[i] !== i) {
      let correctIndex = arr[i] - 1;
      let temp = arr[i];
      arr[i] = arr[correctIndex];
      arr[correctIndex] = temp;
    }
  }
  return arr;
};

console.log(cyclicSort([5, 4, 3, 2, 1]));
