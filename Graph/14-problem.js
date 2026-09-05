// course Schedule II

function courseSchedule2(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const result = [];

  for (let [course, preReq] of prerequisites) {
    graph[preReq].push(course);
  }

  const state = Array(numCourses).fill(0);

  function dfs(course) {
    if (state[course] === 1) return true; // cycle
    if (state[course] === 2) return false; // no cycle

    state[course] = 1;

    for (let neighbor of graph[course]) {
      if (dfs(neighbor)) return true;
    }
    state[course] = 2;
    result.push(course);
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return [];
  }

  return result.reverse();
}

console.log(
  courseSchedule2(4, [
    [1, 0],
    [2, 1],
    [3, 2],
  ]),
);
console.log(
  courseSchedule2(4, [
    [2, 0],
    [3, 1],
  ]),
);
console.log(
  courseSchedule2(3, [
    [2, 0],
    [2, 1],
  ]),
);
console.log(
  courseSchedule2(20, [
    [0, 10],
    [3, 18],
    [5, 5],
    [6, 11],
    [11, 14],
    [13, 1],
    [15, 1],
    [17, 4],
  ]),
);
