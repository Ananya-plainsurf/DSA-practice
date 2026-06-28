function backTracking(s) {
  let res = [];
  function track(n, sLen, newArr) {
    if (n > sLen) {
      return res.push([...newArr]);
    }
    newArr.push(n);
    track(n + 1, sLen, newArr);
    newArr.pop();
    track(n + 1, sLen, newArr);
  }
  track(1, s.length, []);
  return res;
}

console.log(backTracking([1, 2]));
console.log(backTracking([1, 2, 3]));
console.log(backTracking([1, 2, 3, 4]));
