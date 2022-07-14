class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x
        l = 0
        r = x
        while l <= r:
            mid = (l + r) // 2
            if mid * mid == x:
                return mid
            if mid * mid > x:
                r = mid - 1
            else: 
                l = mid + 1
        if r < l:
            return r
        return l