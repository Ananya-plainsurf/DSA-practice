// KOKO can eat banana;

function canFinish(piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let result = right;
  while (left <= right) {
    let k = Math.floor((left + right) / 2);
    let sumH = 0;
    for (let pile of piles) {
      sumH += Math.ceil(pile / k);
    }
    // console.log({ left, right, k, sumH });

    if (sumH <= h) {
      result = k;
      right = k - 1;
    } else {
      left = k + 1;
    }
  }
  return result;
}

console.log(canFinish([3, 6, 7, 11], 8));
console.log(canFinish([30, 11, 23, 4, 20], 5));
