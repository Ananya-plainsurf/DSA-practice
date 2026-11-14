// 3417. Zigzag Grid Traversal With Skip
// Easy
// Topics
// premium lock icon
// Companies
// You are given an m x n 2D array grid of positive integers.

// Your task is to traverse grid in a zigzag pattern while skipping every alternate cell.

// Zigzag pattern traversal is defined as following the below actions:

// Start at the top-left cell (0, 0).
// Move right within a row until the end of the row is reached.
// Drop down to the next row, then traverse left until the beginning of the row is reached.
// Continue alternating between right and left traversal until every row has been traversed.
// Note that you must skip every alternate cell during the traversal.

// Return an array of integers result containing, in order, the value of the cells visited during the zigzag traversal with skips.

// Example 1:

// Input: grid = [[1,2],[3,4]]

// Output: [1,4]

function zigzag(grid) {
  let res = [],
    L2R = true;
  for (let i = 0; i < grid.length; i++) {
    let size = grid[i].length;
    for (let j = 0; j < size; j++) {
      if (j % 2 === 0 && L2R) {
        res.push(grid[i][j]);
      }
      if (j % 2 !== 0 && !L2R) {
        res.push(grid[i][j]);
      }
    }
    L2R = !L2R;
  }
  return res;
}
console.log(
  zigzag([
    [1, 2],
    [3, 4],
  ]),
);

console.log(
  zigzag([
    [2, 1],
    [2, 1],
    [2, 1],
  ]),
);
