/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let vals = {};
    let res = false;
    function search(n) {
        let diff = k - n.val;
        if (diff in vals) {
            res = true;
        } else {
            vals[n.val] = true;
            if (n.left) search(n.left);
            if (n.right) search(n.right);
        }
    }
    search(root);
    return res;
};