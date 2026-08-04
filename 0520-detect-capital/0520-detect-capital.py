class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        if len(word) == 1:
            return True
        
        if word[1].isupper():
            # sab capital hone chahiye
            return word.isupper()
        else:
            # first letter chhod ke sab lowercase hone chahiye
            return word[1:].islower()