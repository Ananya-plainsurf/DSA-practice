async function findString(s, words) {
  let newWords = new Map();
  let wordLength = words[0].length;
  let l = words.length * wordLength;

  for (let i = 0; i <= s.length - l; i++) {
    let word = s.slice(i, i + l);
    newWords.set(word, i);
  }

  let result = [];
  let targetFreq = new Map();
  for (let w of words) {
    targetFreq.set(w, (targetFreq.get(w) || 0) + 1);
  }

  for (let [key, value] of newWords) {
    let seen = new Map();
    let j = 0;
    while (j < key.length) {
      let w = key.slice(j, j + wordLength);
      seen.set(w, (seen.get(w) || 0) + 1);
      j += wordLength;
    }
    // compare maps
    let valid = true;
    for (let [word, count] of targetFreq) {
      if (seen.get(word) !== count) {
        valid = false;
        break;
      }
    }

    if (valid) result.push(value);
  }

  console.log(result);
  return result;
}

findString("barfoofoobarthefoobarman", ["bar", "foo", "the"]);
findString("barfoothefoobarman", ["foo", "bar"]);
findString("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]);
