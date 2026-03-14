// Generate Subsets

// Input:

// [1,2,3]

// Output:

// []
// [1]
// [2]
// [3]
// [1,2]
// [1,3]
// [2,3]
// [1,2,3]

//                  []
//            /           \
//         [1]            []
//       /     \        /     \
//    [1,2]    [1]    [2]     []
//    /   \    / \    / \     / \
// [1,2,3][1,2][1,3][1] [2,3][2] [3] []

function subSet(arr, i = 0, curr = [], result = []) {
  if (i === arr.length) {
    result.push([...curr]);
    return;
  }

  curr.push(arr[i]);
  subSet(arr, i + 1, curr, result);

  curr.pop();
  subSet(arr, i + 1, curr, result);

  return result;
}

console.log(subSet([1, 2, 3]));
