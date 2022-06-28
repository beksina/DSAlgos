# don't want to make this O(n) by search thru arrays
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        row = self.findRow(matrix, target)
        if row is None:
            return False
        left = 0
        right = len(row) - 1
        while left <= right:
            mid = (left + right) // 2
            if row[mid] == target:
                return True
            if row[mid] > target:
                right = mid - 1
            else:
                left = mid + 1
        return False
        
    def findRow(self, matrix, target):
        left = 0
        right = len(matrix) - 1
        cols = len(matrix[0])
        row = None
        while left <= right:
            mid = (left + right) // 2
            if target >= matrix[mid][0] and target <= matrix[mid][cols-1]:
                return matrix[mid]
            if target < matrix[mid][0]:
                right = mid - 1
            else:
                left = mid + 1
        return None

        
        
