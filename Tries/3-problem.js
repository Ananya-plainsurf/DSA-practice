// Replace word

class TriesNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TriesNode();
  }

  addNode(word) {
    let node = this.root;

    for (let ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TriesNode();
      }
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  insertNode(Words) {
    for (let word of Words) {
      this.addNode(word);
    }
  }

  findRoot(word) {
    let root = "";
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) return word;
      node = node.children[ch];
      root += ch;

      if (node.isEnd) return root;
    }
    return word;
  }

  replaceWords(sentence) {
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let newWord = this.findRoot(word);
      if (newWord !== word) words[i] = newWord;
    }

    return words.join(" ");
  }
}

const trie = new Trie();
trie.insertNode(["cat", "bat", "rat"]);
console.log(trie.findRoot("cattle"));
console.log(trie.findRoot("pat"));
console.log(trie.findRoot("rat"));
console.log(trie.replaceWords("the cattle was rattled by the battery"));

const trie2 = new Trie();
trie2.insertNode(["a", "b", "c"]);
console.log(trie2.replaceWords("aadsfasf absbs bbab cadsfafs"));
