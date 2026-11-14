// course schedule II

function courseSchedule(numCourses, prerequisites) {
  const queue = [];
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = Array(numCourses).fill(0);
  const result = [];
  let front = 0;
  let completed = 0;

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    inDegree[course]++;
  }

  for (let course = 0; course < numCourses; course++) {
    if (inDegree[course] === 0) queue.push(course);
  }

  while (front < queue.length) {
    const course = queue[front++];
    result.push(course);
    completed++;
    for (let neighbor of graph[course]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return completed === numCourses ? result : [];
}
console.log(courseSchedule(2, [[1, 0]]));
console.log(
  courseSchedule(2, [
    [1, 0],
    [0, 1],
  ]),
);
