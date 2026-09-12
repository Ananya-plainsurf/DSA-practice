// Implement tries

class TriesNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}
class Tries {
  constructor() {
    this.root = new TriesNode();
  }

  insert(word) {
    let node = this.root;

    for (let ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TriesNode();
      }
      //   console.log(node.children[ch]);
      node = node.children[ch];
    }

    node.isEnd = true;
  }

  search(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }

    return node.isEnd;
  }

  searchWith(prefix) {
    let node = this.root;
    for (let ch of prefix) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return true;
  }
}

const tries = new Tries();
tries.insert("cat");
tries.insert("car");
console.log(tries.search("cat"));
console.log(tries.search("ca"));
console.log(tries.searchWith("do"));
console.log(tries.searchWith("ca"));
