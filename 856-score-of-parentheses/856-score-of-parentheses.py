class Solution:
    def scoreOfParentheses(self, s: str) -> int:
        mult = 1
        total = 0
        i = 1
        while i < len(s):
            if (s[i] == "("):
                mult *= 2
                i += 1
            else:
                total += mult
                while i < len(s) and s[i] == ")":
                    mult /= 2
                    i += 1
        return int(total)
