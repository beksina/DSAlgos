class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        l = 0
        r = 0
        stack = []
        for i in range(len(s)):
            char = s[i]
            if char == "(":
                stack.append(char)
                l += 1
            elif char == ")":
                if l != 0:
                    stack.append(char)
                    l -= 1
            else:
                stack.append(char)
        if l > 0:
            for i in range(len(stack) - 1, - 1, -1):
                if stack[i] == "(":
                    stack[i] = ""
                    l -= 1
                    if l == 0:
                        break
        return "".join(stack)

    
# l means amount of "("
# r means amount of ")"
# aka left / right
                
                    