class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        insertPos = 0  # jahan agla non-zero rakhna hai

        # Step 1: saare non-zero elements ko aage la ke rakh do
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[insertPos] = nums[i]
                insertPos += 1

        # Step 2: insertPos ke baad jo bacha hai, sab zero bhar do
        for i in range(insertPos, len(nums)):
            nums[i] = 0