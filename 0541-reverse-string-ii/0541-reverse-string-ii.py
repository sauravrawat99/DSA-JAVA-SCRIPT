class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        chars = list(s)  # string ko list mein convert kiya, kyunki string immutable hai
        n = len(chars)
        
        for start in range(0, n, 2 * k):
            left = start
            right = min(start + k - 1, n - 1)  # ya to k characters aage, ya jo bhi bacha hai
            
            while left < right:
                chars[left], chars[right] = chars[right], chars[left]
                left += 1
                right -= 1
        
        return ''.join(chars)