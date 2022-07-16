class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        ways = [0] * (amount + 1)
        ways[0] = 1
        for coin in coins:
            for i in range(1, amount + 1):
                if coin <= i:
                    ways[i] += ways[i - coin]
        return ways[-1]