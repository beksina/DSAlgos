# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# need to find node in each ROW that is furthest right
# dfs & keep track of ROW and COL to find greatest COL
# pos => row: [col, val]

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []
        pos = {}
        def dfs(node, r, c):
            pos[r] = [c, node.val]
            if node.left:
                dfs(node.left, r + 1, c - 1)
            if node.right:
                dfs(node.right, r + 1, c + 1)
        dfs(root, 0, 0)
        res = []
        for c in pos:
            res.append(pos[c][1])
        return res
        