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
 * @return {TreeNode}
 */
function inorderSuccessor(root, p) {
    let curr = root;
    let successor;
    while (curr !== p) {
        if (successor == null && curr.val > p.val ||
            successor !== null && curr.val > p.val && curr.val < successor.val
           ) {
            successor = curr;
        } 
        if (curr.val > p.val) {
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }
    if (!p.right) return successor;
    curr = p.right;
    successor = curr;
    while (curr.left) {
        curr = curr.left;
        successor = curr;
    }
    return successor;
};
