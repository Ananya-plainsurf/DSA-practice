// reverse the string using recursion

function reverseString(str) {
  if (str.length <= 1) return str;

  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("abc"));
console.log(reverseString("ananya"));
console.log(reverseString("hello world"));
console.log(reverseString("h"));
console.log(reverseString(""));
let s = "abcd";
let t = s.slice(s.length / 2);
console.log(t);
