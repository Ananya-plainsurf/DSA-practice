// Design Add and Search Words Data Structure

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

  addWord(word) {
    let node = this.root;

    for (let ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TriesNode();
      }
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  search(word) {
    function dfs(node, idx) {
      if (idx === word.length) return node.isEnd;

      const ch = word[idx];

      if (ch === ".") {
        for (let ch in node.children) {
          if (dfs(node.children[ch], idx + 1)) {
            return true;
          }
        }

        return false;
      }

      if (!node.children[ch]) return false;

      return dfs(node.children[ch], idx + 1);
    }
    return dfs(this.root, 0);
  }
}

const trie = new Tries();
trie.addWord("cat");
trie.addWord("bat");
trie.addWord("hat");
trie.addWord("cart");
console.log(trie.search("cat"));
console.log(trie.search("part"));
console.log(trie.search(".at"));
console.log(trie.search("c.."));
