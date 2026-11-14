// search word II

class TriesNode {
  constructor() {
    this.children = {};
    this.word = null;
  }
}

class Trie {
  constructor() {
    this.root = new TriesNode();
  }

  addNode(words) {
    for (let word of words) {
      let node = this.root;

      for (let ch of word) {
        if (!node.children[ch]) {
          node.children[ch] = new TriesNode();
        }
        node = node.children[ch];
      }
      node.word = word;
    }
  }

  searchWord(board) {
    const rows = board.length;
    const cols = board[0].length;
    let result = [];

    function dfs(r, c, node) {
      const ch = board[r][c];

      if (!node.children[ch]) return;
      node = node.children[ch];

      if (node.word) {
        result.push(node.word);
        node.word = null;
      }

      board[r][c] = "#";

      const direction = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];

      for (let [dr, dc] of direction) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < rows &&
          nc < cols &&
          board[nr][nc] !== "#"
        ) {
          dfs(nr, nc, node);
        }
      }

      board[r][c] = ch;
    }

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dfs(r, c, this.root);
      }
    }
    return result;
  }
}

function searchWord2(board, words) {
  const trie = new Trie();
  trie.addNode(words);
  return trie.searchWord(board);
}

console.log(
  searchWord2(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"],
  ),
);
