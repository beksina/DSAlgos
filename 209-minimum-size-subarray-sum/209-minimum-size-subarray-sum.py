class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = 0
        right = 1
        minimum = 0
        curr = nums[left]
        while right < len(nums):
            if nums[left] >= target or nums[right] >= target:
                return 1
            curr += nums[right]
            if curr >= target:
                if minimum == 0:
                    minimum = right - left + 1
                else:
                    minimum = min(minimum, right - left + 1)
                while curr - nums[left] >= target:
                    curr -= nums[left]
                    left += 1
                    minimum = min(minimum, right - left + 1)
            right += 1
        return minimum
        
        
#         minimum = len(nums)
#         for i in range(0, len(nums) - 1):
#             current = nums[i]
#             for j in range(i+1, len(nums)):
#                 if nums[j] >= target:
#                     return 1
#                 current += nums[j]
#                 if current >= target:
#                     currLength = j - i + 1
#                     minimum = min(minimum, currLength)
#                     break
#         if minimum == len(nums):
#             return 0
#         return minimum
                    
                
