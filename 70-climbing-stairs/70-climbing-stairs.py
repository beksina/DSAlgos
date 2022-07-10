class Solution:
    def climbStairs(self, n: int) -> int:
        def takeSteps(n, tracker = {}):
            if n < 0:
                return 0
            if n == 0:
                return 1
            if n in tracker:
                return tracker[n]
            tracker[n] = takeSteps(n-1, tracker) + takeSteps(n-2, tracker)
            return tracker[n]
        return takeSteps(n)