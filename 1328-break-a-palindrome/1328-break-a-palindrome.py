class Solution:
    def breakPalindrome(self, pal: str) -> str:
        if len(pal) == 1:
            return ""
        for i in range(len(pal) // 2):
            if pal[i] != "a":
                return pal[0:i] + "a" + pal[i+1:]
        return pal[0:len(pal) - 1] + "b"
        
        