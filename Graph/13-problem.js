// course schedule

function courseSchedule(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
  }

  const state = Array(numCourses).fill(0);
  function dfs(course) {
    if (state[course] === 1) {
      return true; // cycle
    }
    if (state[course] === 2) {
      return false; // completed
    }

    state[course] = 1;

    for (const neighbor of graph[course]) {
      if (dfs(neighbor)) {
        return true;
      }
    }

    state[course] = 2;
    return false;
  }
  for (let course = 0; course < numCourses; course++) {
    if (dfs(course)) {
      return false;
    }
  }
  return true;
}

// function courseSchedule(numCourses, prerequisites) {
//   const graph = new Map();

//   for (let [course, preReq] of prerequisites) {
//     if (!graph.has(preReq)) {
//       graph.set(preReq, []);
//     }
//     graph.get(preReq).push(course);
//   }

//   const state = Array(numCourses).fill(0);
//   function dfs(course) {
//     if (state[course] === 1) return true; // cycle detected;
//     if (state[course] === 2) return false; // no cycle;

//     state[course] = 1;
//     const neighbors = graph.get(course) || [];
//     for (let neighbor of neighbors) {
//       if (dfs(neighbor)) {
//         return true;
//       }
//     }
//     state[course] = 2;
//     return false;
//   }
//   for (let course = 0; course < numCourses; course++) {
//     if (dfs(course)) {
//       return true;
//     }
//   }
//   return false;
// }
console.log(
  courseSchedule(4, [
    [1, 0],
    [2, 1],
    [3, 2],
  ]),
);
console.log(
  courseSchedule(20, [
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
