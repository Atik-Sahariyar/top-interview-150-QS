
var RandomizedSet = function() {
    this.data = [];
    this.indexMap = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.indexMap.has(val)) return false;
    this.data.push(val);
    this.indexMap.set(val, this.data.length - 1);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.indexMap.has(val)) return false;

    const index = this.indexMap.get(val);
    const lastElement = this.data.pop();

    if(index !== this.data.length){
        this.data[index] = lastElement;
        this.indexMap.set(lastElement, index);
    }

    this.indexMap.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const index = Math.floor(Math.random() * this.data.length);

    return this.data[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */