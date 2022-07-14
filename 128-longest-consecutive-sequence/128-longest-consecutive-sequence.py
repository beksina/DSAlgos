# using a set to make unique vals as well as quick lookup 
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        vals = set(nums)
        maxConsec = 0
        for num in vals:
            if num - 1 not in vals:
                consec = 1
                curr = num
                while curr + 1 in vals:
                    consec += 1
                    curr += 1
                maxConsec = max(maxConsec, consec)
        return maxConsec
                    
