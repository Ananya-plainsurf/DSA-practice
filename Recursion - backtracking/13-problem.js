// decode String

function decode(s) {
  let stack = [];
  for (let ch of s) {
    if (ch !== "]") {
      console.log({ ch });
      stack.push(ch);
    } else {
      let str = "";
      while (stack[stack.length - 1] !== "[") {
        str = stack.pop() + str;
      }
      if (stack[stack.length - 1] === "[") stack.pop();
      let dig = "";
      while (stack[stack.length - 1] >= 0 && stack[stack.length - 1] <= 9) {
        dig = stack.pop() + dig;
      }

      let encode = "";
      for (let i = 0; i < Number(dig); i++) {
        encode = str + encode;
      }
      stack.push(encode);
    }
  }
  return stack.join("");
}

console.log(decode("4[a3[cd]]")); // acdcdcd acdcdcd acdcdcd acdcdcd
// acdcdcd acdcdcd acdcdcd acdcdcd
console.log(decode("3[a2[cd] 3[ef]]")); // acdcdefefef acdcdefefef acdcdefefef
// acdcdefefef acdcdefefef acdcdefefef

console.log(decode("3[a]2[bc]"));
