/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.idx = 1;
    this.streams = {};
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.streams[idKey] = value;
    const res = [];
    
    if (idKey > this.idx) {
        return res;
    }
    
    while (this.streams[idKey]) {
        res.push(this.streams[idKey]);
        idKey++;
        this.idx = idKey;
    }
    return res;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */