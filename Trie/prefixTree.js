class TrieNode {
    constructor(child = {}, end = false) {

        // Our child is a hashmap of chars.
        // Which we will use to ask.
        // -  "Does this node have a child with this char?" and
        // -  "Is this the end of a word?"
        this.child = child;
        this.end   = end;
    }
}

var Trie = function () {

    // Set root node, just like Binary Trees
    this.root = new TrieNode();
};

Trie.prototype.insert = function (word) {

    // Get a handle on the root node
    // As we're inserting a word, we'll need to traverse the tree
    let current = this.root;

    // Fancy for loop, go over each word,
    // if it already exists, traverse it, if not
    // create it. 
    for (const char of word) {
        if (!current.child[char]) {
            current.child[char] = new TrieNode();
        }
        current = current.child[char];
    }

    current.end = true;
};

Trie.prototype.search = function (word) {

    // Get a handle on the root node
    let current = this.root;

    // Fancy for loop, go over each word,
    // if it already exists, traverse it, if not return false
    for (const char of word) {
        if (current.child[char]) {
            current = current.child[char];
        } else {
            return false;
        }
    }

    // Is this the end of a word?
    return current.end;
};

Trie.prototype.startsWith = function (prefix) {

    // Get a handle on the root node
    let current = this.root;

    // Fancy for loop, go over each word,
    // if it already exists, traverse it, if not return false
    for (const char of prefix) {
        if (current.child[char]) {
            current = current.child[char];
        } else {
            return false;
        }
    }

    // Well we made it this far, so it must be true. :D
    return true;
};