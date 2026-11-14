// Non-overlapping intervals

function eraseOverlappingIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  result.push(intervals[0]);
  let front = 1;
  while (front < intervals.length) {
    const last = result[result.length - 1];
    const current = intervals[front++];
    if (last[1] > current[0]) {
      if (current[1] < last[1]) {
        result[result.length - 1] = current;
      }
      continue;
    } else {
      result.push(current);
    }
  }
  return intervals.length - result.length;
}
console.log(
  eraseOverlappingIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]),
);
console.log(
  eraseOverlappingIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ]),
);
console.log(
  eraseOverlappingIntervals([
    [1, 2],
    [2, 3],
  ]),
);
console.log(
  eraseOverlappingIntervals([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ]),
);
