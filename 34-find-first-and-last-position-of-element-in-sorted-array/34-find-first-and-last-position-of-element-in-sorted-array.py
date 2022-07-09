# doing 3 binary searches -> find mid where nums[mid] == target
# use left side of mid to find earliest appearance of target
# use right side of mid to find last appearance of target
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        l = 0 
        r = len(nums) - 1
        start = None
        end = None
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target:
                print('hey')
                start = mid
                end = mid
                break
            if target < nums[mid]:
                r = mid - 1
            else:
                l = mid + 1
        if start == None:
            return [-1,-1]
        
        leftSide = [l, mid - 1]
        rightSide = [mid + 1, r]
        
        l, r = leftSide[0], leftSide[1]
        # left side
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target:
                start = mid
                r = mid - 1
            else:
                l = mid + 1
        
        l, r = rightSide[0], rightSide[1]
        # right side
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target:
                end = mid
                l = mid + 1
            else:
                r = mid - 1
        
        return [start, end]
        
        
                