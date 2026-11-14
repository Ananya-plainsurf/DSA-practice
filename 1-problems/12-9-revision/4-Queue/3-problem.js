//    Dota2 Senate

function senate(sen) {
  let n = sen.length;
  const rQueue = [];
  const dQueue = [];

  for (let i = 0; i < sen.length; i++) {
    if (sen[i] === "R") {
      rQueue.push(i);
    } else {
      dQueue.push(i);
    }
  }

  let rFront = 0;
  let dFront = 0;

  while (rFront < rQueue.length && dFront < dQueue.length) {
    let r = rQueue[rFront];
    let d = dQueue[dFront];

    if (r < d) {
      rQueue.push(r + n);
      dFront++;
      rFront++;
    } else {
      dQueue.push(r + n);
      dFront++;
      rFront++;
    }
  }

  if (rFront < rQueue.length) {
    return "Radiant";
  }
  return "Dire";
}
console.log(senate("RR")); // R
console.log(senate("DRRD")); // D
console.log(senate("RDDR"));
