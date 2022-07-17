class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        
        # def helper(s, op, cl):
        #     if op == n and cl == n:
        #         res.append(s)
        #         return
        #     if op < n:
        #         s.append("()")
        #         helper(s + "(", op + 1, cl)
        #     if cl < op:
        #         helper(s + ")", op, cl + 1)
        # helper("", 0, 0)
        
        # cuts out the str concatenation, and uses arr instead
        def helper(s, op, cl):
            if op == n and cl == n:
                res.append("".join(s))
                return
            if op < n:
                s.append("(")
                helper(s, op + 1, cl)
                s.pop()
            if cl < op:
                s.append(")")
                helper(s, op, cl + 1)
                s.pop()
        
        helper([], 0, 0)
        return res