/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

function lowestCommonAncestor(p, q) {
    let pH = findHeight(p);
    let qH = findHeight(q);
    let currP = p;
    let currQ = q;
    
    if (pH > qH) {
        currP = levelHeight(currP, pH - qH)
    } else {
        currQ = levelHeight(currQ, qH - pH);
    }
    
    while (currP !== currQ) {
        currP = currP.parent;
        currQ = currQ.parent;
    }
    
    return currP;
};

function levelHeight(n, diff) {
    while (diff > 0) {
        n = n.parent;
        diff--;
    }
    return n;
}

function findHeight(n) {
    let h = 0;
    while (n.parent) {
        h++;
        n = n.parent;
    }
    return h;
}

/*
find the height of each and start to move up when they are at the same level
*/