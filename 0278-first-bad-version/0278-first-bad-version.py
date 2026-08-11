class Solution:
    def firstBadVersion(self, n: int) -> int:
        low, high = 1, n
        
        while low < high:
            mid = low + (high - low) // 2
            
            if isBadVersion(mid):
                high = mid          # mid khud bad ho sakta hai, isliye high = mid (mid ko discard mat karo)
            else:
                low = mid + 1       # mid good hai, toh bad version definitely mid ke aage hai
        
        return low   # loop ke end mein low == high == first bad version