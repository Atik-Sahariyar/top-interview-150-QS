/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords =  (board, words) => {
    let result = [];
    let trie = new Trie();
    for (let i = 0; i < words.length; i++) {
        trie.insert(words[i]);
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            dfs(board, i, j, trie.root, result);
        }
    }
    return result;
};

const dfs = (board, i, j, trie, result) => {
    let c = board[i][j];
    if (c == '#' || !trie.next[c]) {
        return;
    }
    trie = trie.next[c];
    if (trie.word) {
        result.push(trie.word);
        trie.word = null;
    }
    board[i][j] = '#';
    if (i > 0) {
        dfs(board, i - 1, j, trie, result);
    }
    if (j > 0) {
        dfs(board, i, j - 1, trie, result);
    }
    if (i < board.length - 1) {
        dfs(board, i + 1, j, trie, result);
    }
    if (j < board[0].length - 1) {
        dfs(board, i, j + 1, trie, result);
    }
    board[i][j] = c;
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.next[word[i]]) {
                node.next[word[i]] = new TrieNode();
            }
            node = node.next[word[i]];
        }
        node.word = word;
    }
}

class TrieNode {
    constructor() {
        this.next = {};
        this.word = null;
    }
}