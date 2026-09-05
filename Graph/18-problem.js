// open lock

function openLock(deadEnd, target) {
  //   let start = "1234";
  let start = "0000";
  let queue = [[start, 0]];
  const dead = new Set(deadEnd);
  const visited = new Set();
  visited.add(start);

  let front = 0;
  while (front < queue.length) {
    const [val, dist] = queue[front++];
    if (val === target) return dist;

    for (let i = 0; i < 4; i++) {
      let digit = Number(val[i]);
      const next = (digit + 1) % 10;
      const prev = (digit + 9) % 10;
      let newForward = val.slice(0, i) + next + val.slice(i + 1);
      let newBack = val.slice(0, i) + prev + val.slice(i + 1);

      for (let neighbor of [newForward, newBack]) {
        if (dead.has(neighbor)) continue;
        if (visited.has(neighbor)) continue;
        visited.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  console.log({ neighbors, dead });
  return -1;
}
console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"));
