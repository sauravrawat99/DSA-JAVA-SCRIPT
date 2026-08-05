class Solution:
    def reverseWords(self, s: str) -> str:
        words = s.split(" ")    
        result = []
        
        for word in words:
            chars = list(word)
            left, right = 0, len(chars) - 1
            
            while left < right:            
                chars[left], chars[right] = chars[right], chars[left]  
                left += 1
                right -= 1
            
            result.append("".join(chars)) 
        return " ".join(result)