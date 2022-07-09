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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// preOrder traverse and use strings to keep track of routes
function isSubtree(root, subRoot) {
    // case where each only has a root node and the end numbers are the same e.g. 12 and 2
    if (!root.right && !root.left && !subRoot.left && !subRoot.right && root.val !== subRoot.val) return false;
    let strOne = "";
    let strTwo = "";
    function traverse(n, s) {
        if (n === null) {
            if (s == 1) strOne += "X"
            else strTwo += "X"
            return;
        }
        if (s == 1) strOne += n.val
        else strTwo += n.val
        traverse(n.left, s);
        traverse(n.right, s);
    }
    traverse(root, 1);
    traverse(subRoot, 2);
    if (strOne.includes(strTwo)) {
        return true;
    }
    return false;
};