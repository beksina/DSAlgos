class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        minCoins = [float('inf') for i in range(amount+1)]
        minCoins[0] = 0
        for coin in coins:
            for amount in range(1, len(minCoins)):
                if coin <= amount:
                    minCoins[amount] = min(minCoins[amount], minCoins[amount-coin] + 1)
        return minCoins[-1] if minCoins[-1] != float('inf') else -1