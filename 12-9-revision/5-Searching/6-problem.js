//    Capacity to Ship Packages Within D Days

function maxCapacity(weights, days) {
  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b, 0);
  let result = 0;
  while (left <= right) {
    let k = Math.floor((left + right) / 2);
    let capacity = 0;
    let daysNeeded = 1;

    for (let weight of weights) {
      capacity += weight;
      if (capacity > k) {
        capacity = weight;
        daysNeeded++;
      }
    }

    if (daysNeeded <= days) {
      result = k;
      right = k - 1;
    } else {
      left = k + 1;
    }
  }
  return result;
}

console.log(maxCapacity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
