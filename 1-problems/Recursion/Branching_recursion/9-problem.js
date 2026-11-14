// subSet

function subSet(arr, i = 0, curr = []) {
  if (i === arr.length) {
    console.log("Base case---------------", { i, curr });

    console.log(curr);
    return;
  }

  curr.push(arr[i]);
  console.log("include", { i, curr });
  subSet(arr, i + 1, curr);

  curr.pop();
  console.log("pop", { i, curr });
  subSet(arr, i + 1, curr);
  console.log("exclude", { i, curr });
}

subSet([1, 2, 3]);
