// House robbery 2(circular)
// find max robbery amount, cannot rob adjacent house, first and last are adjacent (because circular)

// arr = [1,2,3,1]

// Max([2,3,1],[1,2,3])  = max(3,4) = 4
// [2,3,1]
// i = 0 = 2
//     p1 = 0 p2 = 0
//     c = Max(2+0,0) = 2
//     p2 = p1 = 0
//     p1 = c = 2
// i = 1 = 3
//     p1 = 2 p2 = 0
//     c = max(3+0,2) = 3
//     p2 = p1 = 2
//     p1 = c = 3
// i = 2 = 1
//     p1 = 3 p2 = 2
//     c = max(1+2,3) = 3
//     p2 = p1 = 3
//     p1 = c = 3
// [1,2,3]
// i = 0 = 1
//     p1 = 0 p2 = 0
//     c = max(1+0,0) = 1
//     p2 = p1 = 0
//     p1 = c = 1
// i = 1 = 2
//     p1 = 1 p2 = 0
//     c = max(2+0,1) = 2
//     p2 = p1 = 1
//     p1 = c = 2
// i = 2 = 3
//     c = max(3+1,2) = 4
//     p2 = p1 = 2
//     p1 = c = 4

function robberyHouse(arr) {
  if (arr.length === 1) return arr[0];

  function robbery(houses) {
    let p1 = 0;
    let p2 = 0;
    for (let num of houses) {
      let curr = Math.max(num + p2, p1);
      p2 = p1; // newPrev1 = oldPrev1
      p1 = curr; // newPrev2 = current
    }
    return p1;
  }

  return Math.max(robbery(arr.slice(0, arr.length - 1)), robbery(arr.slice(1)));
}

console.log(robberyHouse([2, 3, 2])); //3
console.log(robberyHouse([1, 2, 3, 1])); // 4
