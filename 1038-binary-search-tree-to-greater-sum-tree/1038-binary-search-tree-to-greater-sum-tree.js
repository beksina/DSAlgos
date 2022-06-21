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
 * @return {TreeNode}
 */

function bstToGst(root) {
    let sum = 0;
    
    function reverseTraverse(n) {
        if (n.right) reverseTraverse(n.right);
        sum += n.val;
        n.val = sum;
        if (n.left) reverseTraverse(n.left);
    }
    
    reverseTraverse(root);
    
    return root
};