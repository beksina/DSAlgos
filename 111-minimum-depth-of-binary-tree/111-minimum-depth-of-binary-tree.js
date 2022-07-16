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

// BFS
function minDepth(root) {
    if (root === null) return 0;
    let currDepth = 1;
    let q = [[root, currDepth]];
    while (q.length) {
        let [node, depth] = q.shift();
        if (!node.left && !node.right) return depth;
        if (node.left) q.push([node.left, depth + 1]);
        if (node.right) q.push([node.right, depth + 1]);
    }
}

/*
DFS

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
*/