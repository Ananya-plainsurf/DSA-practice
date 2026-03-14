// find max in the arr using recursion

function max(arr, i = 0, mavVal = -Infinity) {
  if (i === arr.length) return mavVal;

  return max(arr, i + 1, arr[i] > mavVal ? arr[i] : mavVal);
}
console.log(max([3, 7, 2, 9]));
console.log(max([]));
console.log(max([3, 7]));

// 1. max([3,7,2,9],0,-Infinity)
//     if(0===4) - no
//     max([3,7,2,9],1,3)
// 2.  max([3,7,2,9],1,3)
//     if(1 === 4) - no
//      max([3,7,2,9],2,7)
// 3. max([3,7,2,9],2,7)
//     if(2 === 4) -no
//     max([3,7,2,9],3,7)
// 4. max([3,7,2,9],3,7)
//     if(3===4) - no
//     max([3,7,2,9],4,9)
// 5. max([3,7,2,9],4,9)
//     if(4===4) - yes -> 9
