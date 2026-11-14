// Subsequences of a String

// Input:

// "abc"

// Output:

// ""
// "a"
// "b"
// "c"
// "ab"
// "ac"
// "bc"
// "abc"

// function backTracking(s) {
//   let res = [];

//   let count = 0;
//   function tracking(n, slen, newArr) {
//     if (n === slen) {
//       res.push(newArr.join(""));
//       count++;
//       return;
//     }
//     newArr.push(s[n]);
//     tracking(n + 1, slen, newArr);
//     newArr.pop();
//     tracking(n + 1, slen, newArr);
//   }
//   tracking(0, s.length, []);
//   return { res, count };
// }
// console.log(backTracking("abc"));

// function backTracking(s, k) {
//   let res = [];

//   function tracking(n, slen, newArr) {
//     if (n === slen) {
//       if (newArr.length === k) {
//         res.push(newArr.join(""));
//       }
//       return;
//     }
//     newArr.push(s[n]);
//     tracking(n + 1, slen, newArr);
//     newArr.pop();
//     tracking(n + 1, slen, newArr);
//   }
//   tracking(0, s.length, []);
//   return { res };
// }

// console.log(backTracking("abc", 2));
// console.log(backTracking("abc", 3));

// function backTracking(s, k) {
//   let res = [];

//   function tracking(n, slen, newArr) {
//     if (n === slen) {
//       if (newArr.length === k) {
//         res.push(newArr.join(""));
//       }
//       return;
//     }
//     newArr.push(s[n]);
//     tracking(n + 1, slen, newArr);
//     if (newArr.length === k) {
//       return;
//     }
//     newArr.pop();
//     tracking(n + 1, slen, newArr);
//   }
//   tracking(0, s.length, []);
//   return { res };
// }

// console.log(backTracking("abc", 2));
// console.log(backTracking("abc", 3));
function backTracking(s, k) {
  let res = [];
  let target = k;
  function tracking(n, slen, newArr) {
    if (n === slen) {
      if (newArr.reduce((p, c) => (p += c), 0) === k) res.push([...newArr]);
      return;
    }
    if (res.length === 1) {
      // for problem 7
      return;
    }
    newArr.push(s[n]);

    tracking(n + 1, slen, newArr);

    newArr.pop();
    tracking(n + 1, slen, newArr);
  }
  tracking(0, s.length, []);
  return { res };
}

console.log(backTracking([1, 2, 1], 2));

// what is the complexity
