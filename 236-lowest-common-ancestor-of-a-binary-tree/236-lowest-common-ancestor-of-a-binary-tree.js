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
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// grab path of both
function lowestCommonAncestor(root, p, q) {
    if (p === root || q === root) return root;
    
    let paths = [];
    
    function dfs(n, path, target) {
        if (n.val === target.val) {
            paths.push([...path]);
        } else {
            if (n.left) {
                path.push("L");
                dfs(n.left, path, target);
                path.pop();
            }
            if (n.right) {
                path.push("R");
                dfs(n.right, path, target);
                path.pop();
            }
        }
    }
    dfs(root, [], p);
    dfs(root, [], q);
    
    const path1 = paths[0].join("");
    const path2 = paths[1].join("");
        
    let lca = root;
    let index = 0;
    while (index < path1.length && index < path2.length && path1[index] === path2[index]) {
        if (path1[index] === "R") {
            lca = lca.right;
        } else if (path1[index] === "L") {
            lca = lca.left;
        }
        index++;
    }
    return lca;
};