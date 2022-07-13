class Solution:
    def removeDuplicates(self, s: str) -> str:
        stack = []
        for i in range(len(s)):
            if len(stack) == 0 or s[i] != stack[-1]:
                stack.append(s[i])
            else:
                stack.pop()
        return "".join(stack)