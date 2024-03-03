/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this._capacity = capacity;
    this._values = new Map(); 
    this._numKeysInStore = 0;
};

LRUCache.prototype._markMostRecentlyUsed = function(key) {
    const originalValue = this._values.get(key);
    this._values.delete(key);
    this._values.set(key, originalValue); 
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const keyValue = this._values.get(key);

    if (typeof keyValue !== 'undefined') {
        this._markMostRecentlyUsed(key);
        return keyValue;
    }

    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this._values.has(key)) {
        this._values.delete(key);
        this._values.set(key, value); // We do remove and set so this is marked as last inserted
        return;
    }


    if (this._numKeysInStore === this._capacity) {
        let oldestKey;
        for (let [key, value] of this._values) {
            oldestKey = key;
            break;
        }

        this._values.delete(oldestKey);
        this._numKeysInStore--;
    }

    this._values.set(key, value);
    this._numKeysInStore++;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */