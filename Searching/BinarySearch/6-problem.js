// Capacity to ship packages within D day

function shipPackage(weights, day) {
  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b, 0);
  let capacity = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let startDay = 1;
    let currentWeight = 0;

    for (let i = 0; i < weights.length; i++) {
      if (currentWeight + weights[i] > mid) {
        startDay++;
        currentWeight = weights[i];
      } else {
        currentWeight += weights[i];
      }
    }
    if (startDay <= day) {
      capacity = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return capacity;
}
console.log(shipPackage([1, 2, 3, 4, 5], 3));
console.log(shipPackage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(shipPackage([3, 2, 2, 4, 1, 4], 3));
