"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

# simple dfs solution 
# O(v + e) time / O(v) space 
class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        nodeTracker = {}
        def dfs(n):
            if n in nodeTracker:
                return nodeTracker[n]
            nodeCopy = Node(n.val)
            nodeTracker[n] = nodeCopy
            for neighbor in n.neighbors:
                nodeCopy.neighbors.append(dfs(neighbor))
            return nodeCopy
        return dfs(node) if node else None