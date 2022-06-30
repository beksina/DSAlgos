# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def validateHelper(node, maxVal, minVal) -> bool:
            if node is None:
                return True
            if node.val >= maxVal or node.val <= minVal:
                return False
            return validateHelper(node.left, node.val, minVal) and                                      validateHelper(node.right, maxVal, node.val)
        return validateHelper(root, float('inf'), float('-inf'))
        
    