class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        end = len(graph) - 1
        
        def dfs(n, path, output):
            if n == end:
                output.append(path)
            
            for nextNode in graph[n]:
                dfs(nextNode, path + [nextNode], output)
        
        output = []
        dfs(0, [0], output)
        
        return output