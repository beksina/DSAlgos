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
function diameterOfBinaryTree(root) {
    let res = -Infinity;
    
    function dfs(node) {
        if (node === null) return -1;
        
        let left = dfs(node.left);
        let right = dfs(node.right);
        res = Math.max(res, left + right + 2);
        
        return 1 + Math.max(left, right);
    }
    
    dfs(root);
    return res;
};

