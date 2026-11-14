// insert intervals

function insertIntervals(intervals, newInterval) {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    const current = intervals[i];

    if (current[1] < newInterval[0]) {
      result.push(current);
    } else if (current[0] > newInterval[1]) {
      result.push(newInterval);
      for (let j = i; j < intervals.length; j++) {
        result.push(intervals[j]);
      }

      return result;
    } else {
      newInterval[0] = Math.min(current[0], newInterval[0]);
      newInterval[1] = Math.max(current[1], newInterval[1]);
    }
  }
  return result;
}
console.log(
  insertIntervals(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8],
  ),
);
console.log(
  insertIntervals(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5],
  ),
);
