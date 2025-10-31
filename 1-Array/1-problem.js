// String
// create a function that reverses a string:
// 'Hi my name is Ananya' should be:
// 'aynanA si eman ym iH'

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }
  let newStr = str.split("");
  let l = 0;
  let r = newStr.length - 1;
  while (l < r) {
    let t = newStr[l];
    newStr[l] = newStr[r];
    newStr[r] = t;
    l++;
    r--;
  }
  return newStr.join("");
}
console.log(reverse("Hi my name is Ananya"));
