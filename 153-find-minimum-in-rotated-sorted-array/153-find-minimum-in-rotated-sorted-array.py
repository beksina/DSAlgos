class Solution:
    def findMin(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1
        res = float('inf')
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] < res:
                res = nums[mid]
            if nums[mid] >= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
        return res
            
            