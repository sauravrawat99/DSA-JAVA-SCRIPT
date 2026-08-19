class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        totalTime=0
        for i in range(len(tickets)):
            if i<=k:
                totalTime += min(tickets[i],tickets[k])
            else:
                totalTime+= min(tickets[i],tickets[k]-1)
        return totalTime            
        