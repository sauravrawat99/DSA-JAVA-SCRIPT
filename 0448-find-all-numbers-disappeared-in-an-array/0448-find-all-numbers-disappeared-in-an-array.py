class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        numset=set(nums)
        result=[]
        length=len(nums)

        for i in range(1,length+1):
            if i not in numset:
                result.append(i)
        return result    
          


