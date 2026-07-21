class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        length = len(nums)
        ans = [1] * length

        prefix = 1
        for i in range(length):
            ans[i] = prefix
            prefix = prefix * nums[i]

        suffix = 1
        for i in range(length - 1, -1, -1):
            ans[i] = ans[i] * suffix
            suffix = suffix * nums[i]

        return ans