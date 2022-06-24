/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.currPage = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.currPage++;
    this.history[this.currPage] = url;
    this.history = this.history.slice(0, this.currPage + 1);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    if (steps >= this.currPage) {
        this.currPage = 0;
        return this.history[0];
    }
    this.currPage -= steps;
    return this.history[this.currPage];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    let rightSpace = this.history.length - 1 - this.currPage;
    if (steps >= rightSpace) {
        this.currPage = this.history.length - 1;
        return this.history[this.currPage];
    }
    this.currPage += steps;
    return this.history[this.currPage];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */