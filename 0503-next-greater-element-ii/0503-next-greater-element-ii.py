class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        # brute force
        # n=len(nums)
        # result=[-1]*n

        # for i in range(n):
        #     for j in range(i+1,i+n):
        #         idx=j%n
        #         if nums[idx]>nums[i]:
        #             result[i]=nums[idx]
        #             break
        # return result

        stack=[]
        n=len(nums)
        result=[-1]*n

        for i in range(2*n-1):
            idx=i%n
            while stack and nums[stack[-1]]<nums[idx]:
                result[stack.pop()]=nums[idx]
            if i<n:
                stack.append(idx)
        return result            




        