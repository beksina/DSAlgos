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
 * @return {number}
 */

function minDepth(root) {
    if (root === null) return 0;
    let min = Infinity;
    function dfs(n, depth) {
        if (!n.left && !n.right) {
            min = Math.min(min, depth);
        } else {
            if (n.left) dfs(n.left, depth + 1);
            if (n.right) dfs(n.right, depth + 1);
        }
    }
    
    dfs(root, 1);
    return min;
};