class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        # going to move from the end of the arr 
        # adding zero to the end so i can make the first comparison 
        cost.append(0)
        for i in range(len(cost) - 3, -1, -1):
            cost[i] += min(cost[i+1], cost[i+2])
        return min(cost[0], cost[1])
        