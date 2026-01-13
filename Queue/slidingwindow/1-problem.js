// Maximum Average Subarray I (LeetCode 643)
// nums = [1,12,-5,-6,50,3], k = 4 Output = 12.75
function maxAverage(n, k) {
  //   let q = [];
  //   let avg = -Infinity;

  //   for (let i = 0; i < n.length; i++) {
  //     q.push(n[i]);

  //     if (q.length > k) {
  //       q.shift();
  //     }

  //     if (q.length === k) {
  //       let sum = q.reduce((p, c) => p + c, 0);
  //       avg = Math.max(avg, sum / k);
  //     }
  //   }
  //   return avg;

  let maxAvg = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += n[i];
  }
  maxAvg = sum;
  for (let i = k; i < n.length; i++) {
    sum += n[i];
    sum -= n[i - k];
    maxAvg = Math.max(maxAvg, sum / 4);
  }
  return maxAvg;
}

console.log(maxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(maxAverage([5, 5, 5, 5], 2));
