// Koko eating banana

function eatingBananas(piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let k = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let hoursNeeded = 0;

    for (let pile of piles) {
      hoursNeeded += Math.ceil(pile / mid);
    }

    if (hoursNeeded <= h) {
      k = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return k;
}

console.log(eatingBananas([3, 7, 6, 11], 8));
