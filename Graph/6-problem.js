// Interval List Intersection

function IntersectionList(listA, listB) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < listA.length && j < listB.length) {
    const a = listA[i];
    const b = listB[j];

    const start = Math.max(a[0], b[0]);
    const end = Math.min(a[1], b[1]);

    if (start <= end) {
      result.push([start, end]);
    }

    if (a[1] < b[1]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}

console.log(
  IntersectionList(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ],
  ),
);

console.log(
  IntersectionList(
    [
      [1, 3],
      [5, 9],
    ],
    [],
  ),
);
