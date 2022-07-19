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

// BFS
function verticalOrder(root) {
    if (root === null) return [];
    const pos = {};
    let q = [[root, 0]];
    
    while (q.length) {
        let [n, c] = q.shift();
        if (c in pos) {
            pos[c].push(n.val)
        } else {
            pos[c] = [n.val]
        }
        if (n.left) q.push([n.left, c - 1]);
        if (n.right) q.push([n.right, c + 1]);
    }
    
    const res = [];
    const cols = Object.keys(pos).sort((a,b) => a - b);
    for (let c of cols) {
        res.push(pos[c]);
    }
    return res;
}


/* 
DFS 

function verticalOrder(root) {
    if (root === null) return []
    const pos = {};
    
    function inOrder(n, r, c) {
        if (n.left) inOrder(n.left, r + 1, c - 1);
        if (c in pos) {
            if (r in pos[c]) {
                pos[c][r].push(n.val);
            } else {
                pos[c][r] = [n.val];
            }
        } else {
            pos[c] = {[r]: [n.val]};
        }
        if (n.right) inOrder(n.right, r + 1, c + 1);
    }
    
    inOrder(root, 0, 0);
    const res = [];
    
    const cols = Object.keys(pos).sort((a,b) => a - b);
    for (let c of cols) {
        const rows = Object.keys(pos[c]).sort((a,b) => a - b);
        let thisCol = [];
         for (let r of rows) {
             thisCol = thisCol.concat(pos[c][r]);
         }
        res.push(thisCol);
    }
    return res;
};

*/

