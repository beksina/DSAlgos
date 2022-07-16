class Solution:
    def knightDialer(self, n: int) -> int:
        paths = [[4,6], [6,8], [7,9], [4,8], [0,3,9], [], [0,1,7], [2,6], [1,3], [2,4]]
        mat = []
        
        for i in range(n):
            row = [0] * 10
            mat.append(row)
        
        for i in range(10):
            mat[0][i] = 1
                    
        for i in range(1, n):
            for j in range(10):
                for num in paths[j]:
                    mat[i][j] += mat[i-1][num]
        
        total = 0
        for i in range(10):
            total += mat[len(mat) - 1][i]
        
        return total % 1000000007