// binary heap

// difference between heap and the binary tree
// maximum value in the root node and always fill the left first then right no node should be left empty

// pseduo code
// push the item to be arraged to the end of the list of maxbinaryheap
// bubble up to find the right spot
// compare between parent node and swap

// binary heap value greater than the parent node must be in the right side to the parent node and value less than the parent will be in the left side

class Maxbinaryheap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElemnt = this.values[parentIdx];
      if (element <= parentElemnt) break;
      // swap
      this.values[idx] = parentElemnt;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }
  ExtractMax() {
    let removedNode = this.values.shift();
    let lastItem = this.values.pop();
    this.values.unshift(lastItem);
    this.bubbleDown();
    return removedNode;
  }
  bubbleDown() {
    let idx = 0;
    let lenght = this.values.length;
    let element = this.values[0];
    let leftChildIdx = 2 * idx + 1;
    let rightChildIdx = 2 * idx + 2;
    let leftElement = this.values[leftChildIdx];
    let rightElement = this.values[rightChildIdx];

    if (leftElement > rightElement && element < leftElement) {
      let temp = this.values[idx];
      this.values[idx] = this.values[leftChildIdx];
      this.values[leftChildIdx] = temp;
      idx = leftChildIdx;
    } else if (element < rightElement) {
      let temp = this.values[idx];
      this.values[idx] = this.values[rightChildIdx];
      this.values[rightChildIdx] = temp;
      idx = rightChildIdx;
    }
  }
}
let heap = new Maxbinaryheap();

// return the indices of two number in the array that adds up together to give the target  value

// pscedo code
// going to do with bruttforce method
// making the first item in the array as reference compare with everything in the array
//  first item - target  = number to be found
// [1,2,3,4,5] target = 9
const findIndices = (arr, target) => {
  for (let p1 = 0; p1 < arr.length; p1++) {
    findNumber = target - arr[p1];
    for (let p2 = p1 + 1; p2 < arr.length; p2++) {
      if (findNumber === arr[p2]) {
        return [p1, p2];
      }
    }
  }
  return null;
};

const findIndices2 = (arr, target) => {
  for (let p1 = 0; p1 < arr.length; p1++) {
    let numberToFind = target - arr[p1];
    for (let p2 = p1 + 1; p2 < arr.length; p2++) {
      if (numberToFind === arr[p2]) {
        return [p1, p2];
      }
    }
  }
  return null;
};

console.log(findIndices2([1, 2, 3, 4, 5], 9));
//  [ 340, 2, 10, 0, 1 ]
//  [1 , 2, 10, 0,  ]
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(5);
// console.log(Object.values(heap)[0]);12
heap.ExtractMax();
heap.ExtractMax();

console.log(Object.values(heap)[0]);
