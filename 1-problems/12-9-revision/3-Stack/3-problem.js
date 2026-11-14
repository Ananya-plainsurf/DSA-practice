// Daily temperature

function tempDaily(temp) {
  const stack = [];
  stack.push(0);
  const result = Array.from({ length: temp.length }, () => 0);
  for (let i = 1; i < temp.length; i++) {
    let current = temp[i];
    while (current > temp[stack[stack.length - 1]]) {
      let prev = stack.pop();
      result[prev] = i - prev;
    }
    stack.push(i);
  }
  return result;
}

console.log(tempDaily([73, 74, 75, 71, 69, 72, 76, 73]));
