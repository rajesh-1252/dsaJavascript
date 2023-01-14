const mazeCount = (r, c) => {
  // we are going till the last col or row
  if (r === 1 || c === 1) {
    return 1;
  }
  let right = mazeCount(r - 1, c);
  let down = mazeCount(r, c - 1);
  return right + down;
};
// console.log(mazeCount(5, 5));
const mazePath = (p, r, c) => {
  // here we are going till last col and last row
  if (r === 1 && c === 1) {
    console.log(p);
    return;
  }
  if (r > 1) {
    mazePath(p + "r", r - 1, c);
  }
  if (c > 1) mazePath(p + "d", r, c - 1);
};

// mazePath("", 3, 3);
const mazePathDiagonolReturn = (p, r, c) => {
  let arr = [];
  if (r === 1 && c === 1) {
    arr.push(p);
    return arr;
  }
  if (r > 1 && c > 1) {
    let diagonal = mazePathDiagonolReturn(p + "D", r - 1, c - 1);
    arr.push(...diagonal);
  }
  if (r > 1) {
    let left = mazePathDiagonolReturn(p + "r", r - 1, c);
    arr.push(...left);
  }
  if (c > 1) {
    let right = mazePathDiagonolReturn(p + "d", r, c - 1);
    arr.push(...right);
  }

  return arr;
};
// console.log(mazePathDiagonolReturn("", 3, 3));

const mazeWithObstacle = (p, obstacleTable, r, c) => {
  if (r === obstacleTable[0].length - 1 && c === obstacleTable.length - 1) {
    console.log(p);
    return;
  }
  if (!obstacleTable[r][c]) {
    return;
  }
  obstacleTable[r][c] = false;
  if (r < obstacleTable.length - 1) {
    mazeWithObstacle(p + "D", obstacleTable, r + 1, c);
  }
  if (c < obstacleTable[0].length - 1) {
    mazeWithObstacle(p + "R", obstacleTable, r, c + 1);
  }
  if (r > 0) {
    mazeWithObstacle(p + "U", obstacleTable, r - 1, c);
  }
  if (c > 0) {
    mazeWithObstacle(p + "L", obstacleTable, r, c - 1);
  }

  obstacleTable[r][c] = true;
};

let obstacleTable = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
];

// back tarcking
const allPaths = (p, maze, r, c) => {
  // if ( )
  // what are we going to do ;
  // first => 0, 0
  // second => 2, 2 loop is over // i.e base condition

  if (r === maze[0].length - 1 && c === maze.length - 1) {
    console.log(p);
    return;
  }
  if (!maze[r][c]) {
    return;
  }
  // i am considering this block in my path
  maze[r][c] = false;

  if (r < maze[0].length - 1) {
    allPaths(p + "R", maze, r + 1, c);
  }
  if (c < maze.length - 1) {
    allPaths(p + "D", maze, r, c + 1);
  }
  if (r > 0) {
    allPaths(p + "U", maze, r - 1, c);
  }
  if (c > 0) {
    allPaths(p + "L", maze, r, c - 1);
  }
  // this line is where the function will be over
  // so before the functiongets removed , also remove the changes that were made by that function

  maze[r][c] = true;
};

// allPaths("", obstacleTable, 0, 0);

const allPathPrint = (p, maze, r, c, path, step) => {
  if (r === maze[0].length - 1 && c === maze.length - 1) {
    for (let item of path) {
      console.log(item);
    }
    path[r][c] = step;
    console.log(p);
    console.log("\n");
    return;
  }
  // if it is already visited break the loop
  if (!maze[r][c]) {
    return;
  }
  maze[r][c] = false;
  path[r][c] = step;
  if (r < maze.length - 1) {
    allPathPrint(p + "D", maze, r + 1, c, path, step + 1);
  }
  if (c < maze[0].length - 1) {
    allPathPrint(p + "R", maze, r, c + 1, path, step + 1);
  }
  if (r > 0) {
    allPathPrint(p + "U", maze, r - 1, c, path, step + 1);
  }
  if (c > 0) {
    allPathPrint(p + "L", maze, r, c - 1, path, step + 1);
  }
  maze[r][c] = true;
  path[r][c] = 0;
};
let path = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
allPathPrint("", obstacleTable, 0, 0, path, 1);
