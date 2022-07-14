# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        levels = {}
        def dfs(n, r):
            if r in levels:
                levels[r] += n.val
            else:
                levels[r] = n.val
            if n.right:
                dfs(n.right, r + 1)
            if n.left:
                dfs(n.left, r + 1)
        dfs(root, 1)
        maxVal = float('-inf')
        maxLevel = None
        for l in levels:
            if levels[l] > maxVal:
                maxLevel = l
                maxVal = levels[l]
        return maxLevel