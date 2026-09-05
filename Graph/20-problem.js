// course schedule - BFS

function courseSchedule(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const queue = [];
  const inDegree = Array(numCourses).fill(0);
  const result = [];
  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    inDegree[course]++;
  }

  for (let course = 0; course < numCourses; course++) {
    if (inDegree[course] === 0) queue.push(course);
  }

  let front = 0;
  let completed = 0;
  while (front < queue.length) {
    let course = queue[front++];
    completed++;
    result.push(course);
    for (let neighbor of graph[course]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  console.log(result);
  return completed === numCourses;
}
console.log(courseSchedule(2, [[1, 0]]));
console.log(
  courseSchedule(2, [
    [1, 0],
    [0, 1],
  ]),
);
