class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        n = {}
        counts =[[] for i in range(len(nums) + 1)]
        
        for num in nums:
            if num in n:
                n[num] += 1
            else:
                n[num] = 1
        
        for num, count in n.items():
            counts[count].append(num)
        
        res = []
        
        for i in range(len(counts) - 1, -1, -1):
            for num in counts[i]:
                res.append(num)
                if len(res) == k:
                    return res
                