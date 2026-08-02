class Solution:
    def longestPalindrome(self, s: str) -> int:
        freq=Counter(s)
        length=0
        odd_number=False

        for count in freq.values():

            if count%2==0:
                length+=count
            else:
                length+=count-1
                odd_number=True
        if odd_number:
            length+=1            

        return length
        