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

// BFS
function isSymmetric(root) {
    const lQ = [root.left];
    const rQ = [root.right];
    
    while(lQ.length && rQ.length) {
        let rightNode = rQ.shift();
        let leftNode = lQ.shift();
        
        
        if (rightNode === null && leftNode === null) {
            continue;
        } else if (rightNode === null && leftNode !== null || rightNode !== null && leftNode === null || rightNode.val !== leftNode.val) {
            return false;
        }
        
        rQ.push(rightNode.right);
        rQ.push(rightNode.left);
        lQ.push(leftNode.left);
        lQ.push(leftNode.right);
    }
    return lQ.length === 0 && rQ.length === 0;
}


/*
DFS

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
*/