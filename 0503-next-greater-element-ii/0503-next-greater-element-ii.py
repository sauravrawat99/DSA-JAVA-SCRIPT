class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        n=len(nums)
        result=[-1]*n

        for i in range(n):
            for j in range(i+1,i+n):
                idx=j%n
                if nums[idx]>nums[i]:
                    result[i]=nums[idx]
                    break
        return result


        