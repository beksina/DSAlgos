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
 * @return {number[][]}
 */

function verticalTraversal(root) {
    const pos = {};
    
    function traverse(n, c, r) {
        if (n.left) traverse(n.left, c - 1, r + 1);
        
        if (c in pos) {
            if (r in pos[c]) {
                pos[c][r].push(n.val);
            } else {
                pos[c][r] = [n.val];
            }
        } else {
            pos[c] = {[r]: [n.val]}
        }
        
        if (n.right) traverse(n.right, c + 1, r + 1);
    }
    
    traverse(root, 0, 0);
    const cols = Object.keys(pos).sort((a,b) => a - b);
    const res = [];
    
    for (let col of cols) {
        let rows = Object.keys(pos[col]).sort((a,b) => a - b);
        let curr = [];
        for (let r of rows) {
            curr = curr.concat(pos[col][r].sort((a,b) => a - b));
        }
        res.push(curr)
    }
    return res
};