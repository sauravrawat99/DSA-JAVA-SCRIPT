class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy=prices[0]
        profit=0
        maxprofit=0

        for i in range(1,len(prices)):
            if buy > prices[i]:
                buy=prices[i]
            else:
                profit=prices[i]-buy 
                if profit>maxprofit:
                    maxprofit=profit
        return maxprofit              
        