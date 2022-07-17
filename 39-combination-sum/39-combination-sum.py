# seems like a backtracking problem, keep adding one num and then pop and try others
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        def checkCombos(start, remaining, curr):
            if remaining == 0:
                # need a copy of the curr list
                res.append(list(curr))
                return
            if remaining < 0:
                return
            
            for i in range(start, len(candidates)):
                curr.append(candidates[i])
                checkCombos(i, remaining - candidates[i], curr)
                curr.pop()
            
        checkCombos(0, target, [])
        return res