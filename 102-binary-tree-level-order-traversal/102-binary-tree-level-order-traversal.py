# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []
        levels = {}
        def dfs(n, r):
            if r in levels:
                levels[r].append(n.val)
            else:
                levels[r] = [n.val]
            if n.left:
                dfs(n.left, r + 1)
            if n.right:
                dfs(n.right, r + 1)
        dfs(root, 0)
        return levels.values()
            