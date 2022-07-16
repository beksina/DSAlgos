class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        quads = {}
        res = []
        for i in range(len(nums) - 3):
            for j in range(i+1, len(nums) - 2):
                l = j + 1
                r = len(nums) - 1
                while l < r:
                    currSum = nums[i] + nums[j] + nums[l] + nums[r]
                    if currSum > target:
                        r -= 1
                    elif currSum < target:
                        l += 1
                    else:
                        quad = str(nums[i]) + str(nums[j]) + str(nums[l]) + str(nums[r])
                        if quad not in quads:
                            res.append([nums[i], nums[j], nums[l], nums[r]])
                            quads[quad] = True
                        l += 1
                        while l < r and nums[l] == nums[l-1]:
                            l += 1
        return res
                            
                        
                    