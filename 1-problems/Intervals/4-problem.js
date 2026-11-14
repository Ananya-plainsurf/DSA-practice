// Meeting rooms

// [
//   [7,10],
//   [2,4]
// ]
// O/p = true

// [
//   [0, 30],
//   [5, 10],
//   [15, 20]
// ]
// o/p = false
function meetingRooms(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let prevMeetings = [intervals[0]];
  let front = 1;

  while (front < intervals.length) {
    const current = intervals[front++];
    const last = prevMeetings[prevMeetings.length - 1];
    if (last[1] > current[0]) {
      return false;
    }
    prevMeetings.push(current);
  }
  return true;
}
console.log(
  meetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
);
console.log(
  meetingRooms([
    [7, 10],
    [2, 4],
  ]),
);
console.log(
  meetingRooms([
    [2, 5],
    [5, 6],
  ]),
);
