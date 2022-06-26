
var MinStack = function() {
    this.stack = [];
    this.length = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.length === 0) {
        this.stack[this.length] = [val, val];
    } else {
        this.stack[this.length] = [val, Math.min(this.stack[this.length-1][1], val)];
    }
    this.length++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.stack[this.length-1];
    this.length--;
    return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.length-1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.length-1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */