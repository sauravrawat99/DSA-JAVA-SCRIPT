class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        i = len(s) - 1
        # trailing spaces skip karo
        while i >= 0 and s[i] == " ":
            i -= 1
        
        count = 0
        # ab last word count karo
        while i >= 0 and s[i] != " ":
            count += 1
            i -= 1
        
        return count