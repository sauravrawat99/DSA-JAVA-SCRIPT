class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = [0] * n      # empty array bana liya, size n, sab 0 se fill
        left = 0               # left pointer, array ke start pe
        right = n - 1           # right pointer, array ke end pe
        i = n - 1               # result array ko end se bharne wala pointer

        while left <= right:
            left_sq = nums[left] * nums[left]
            right_sq = nums[right] * nums[right]

            if left_sq > right_sq:
                result[i] = left_sq
                left += 1
            else:
                result[i] = right_sq
                right -= 1

            i -= 1

        return result