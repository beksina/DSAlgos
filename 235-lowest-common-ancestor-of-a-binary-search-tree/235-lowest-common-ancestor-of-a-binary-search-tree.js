/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    let currQ = root;
    let currP = root;
    let res = root;
    while (currQ !== q && currP !== p) {
        if (q.val < currQ.val) {
            currQ = currQ.left;
        } else {
            currQ = currQ.right;
        }
        if (p.val < currP.val) {
            currP = currP.left;
        } else {
            currP = currP.right;
        }
        if (currQ === currP) {
            res = currQ;
        }
    }
    return res;
};


/* 
    track routes of both
*/