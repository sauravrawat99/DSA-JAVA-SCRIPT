class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        n = len(digits)
        
        # Right se left traverse karo
        for i in range(n - 1, -1, -1):
            if digits[i] < 9:
                digits[i] += 1
                return digits   # no carry, seedha return kar do
            else:
                digits[i] = 0   # 9 tha, ab 0 ho gaya, carry aage jayega
        
        # Agar yahan tak pahunche, matlab sab digits 9 the (e.g. [9,9,9])
        # Isliye ek naya 1 aage add karna padega
        return [1] + digits