// urlify

function urlify(str, trueLength) {
  let space = 0;
  for (let i = 0; i < trueLength; i++) {
    let ch = str[i];
    if (ch.charCodeAt(0) === 32) {
      space += 1;
    }
  }

  trueLength = trueLength + space * 2 - 1;
  let i = 0;
  let strArr = [...str];
  while (i < trueLength) {
    const ch = strArr[i];
    console.log({ ch, i, strArr });
    if (ch.charCodeAt(0) === 32) {
      strArr[i] = "%";
      strArr[i + 1] = "20";
      i += 2;
    } else {
      strArr[i] = ch;
      i++;
    }
  }
  return strArr.join("");
}
console.log(urlify("Mr John Smith  ", 13));
