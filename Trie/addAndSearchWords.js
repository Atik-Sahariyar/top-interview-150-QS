var TrieNode = function(char) {
    this.char = char;
    this.children = new Map();
    this.terminator = false;
}

TrieNode.prototype.toString = function() {
    return `[TrieNode] ${this.char}`;
}

var WordDictionary = function() {
    this.root = new TrieNode("*");
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word = "") {
    var node = this.root;

    for (var char of word) {
        if (! node.children.has(char)) {
            node.children.set(char, new TrieNode(char));
        }
        node = node.children.get(char);
    }

    node.terminator = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word, node = this.root) {
    for (var i = 0; i < word.length; i ++) {
        var char = word[i];
        if (char == ".") {
            for (var child of node.children.values()) {
                if (this.search(word.substring(i+1), child)) {
                    return true;
                }
            }
            return false;
        }
        else if (node.children.has(char)) {
            node = node.children.get(char);
        } else {
            return false;
        }
    }

    return node.terminator;
};