class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        r = s[::-1]
        mat = [[0 for j in range(len(s) + 1)] for i in range(len(s) + 1)]
        for i in range(len(s) - 1, -1, -1):
            for j in range(len(s) - 1, -1, -1):
                if s[i] == r[j]:
                    mat[i][j] = mat[i+1][j+1] + 1
                else:
                    mat[i][j] = max(mat[i+1][j], mat[i][j+1])
        return mat[0][0]