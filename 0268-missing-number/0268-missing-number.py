class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        length = len(nums)
        expectedSum = length * (length + 1) // 2
        actualSum = 0

        for num in nums:
            actualSum += num

        return expectedSum - actualSum