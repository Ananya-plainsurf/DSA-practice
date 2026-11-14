// merge intervals

function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  result.push(intervals[0]);
  let count = 0;

  let front = 1;
  while (front < intervals.length) {
    const current = intervals[front++];
    const last = result[result.length - 1];
    if (current[0] <= last[1]) {
      // if (current[1] <= last[1]) {
      //         continue;
      //     } else {
      //         last[1] = current[1];
      //     }
      last[1] = Math.max(last[1], current[1]);
      count++;
    } else {
      result.push(current);
    }
  }
  return { result, count };
}
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [9, 12],
  ]),
);
