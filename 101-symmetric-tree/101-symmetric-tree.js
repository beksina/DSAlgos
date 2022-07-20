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
 * @return {boolean}
 */

function isSymmetric(root) {
    if (root.left === null && root.right === null) return true;
    let leftRoot = root.left;
    let rightRoot = root.right;
    
    function traverse(r, l) {
        if (r === null && l === null) return true;
        if (r === null && l !== null || r !== null && l === null || r.val !== l.val) {
            return false;
        }
        return true && traverse(r.right, l.left) && traverse(r.left, l.right);
    }
    
    return traverse(rightRoot, leftRoot);
};