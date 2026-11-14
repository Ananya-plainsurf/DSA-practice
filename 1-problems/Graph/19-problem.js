// Word Ladder

function wordLadder(start, end, list) {
  const queue = [[start, 1]];
  const letters = new Set(list.join(""));
  const wordsList = new Set(list);
  const visited = new Set([start]);

  let front = 0;
  while (front < queue.length) {
    const [word, dist] = queue[front++];
    if (word === end) return dist;

    for (let i = 0; i < word.length; i++) {
      for (let ch of letters) {
        let val = word.slice(0, i) + ch + word.slice(i + 1);
        if (wordsList.has(val) && !visited.has(val)) {
          visited.add(val);
          queue.push([val, dist + 1]);
        }
      }
    }
  }
  return -1;
}
console.log(
  wordLadder("hit", "cog", ["hot", "dot", "dog", "log", "lot", "cog"]),
);
