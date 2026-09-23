class Solution:
    def reverseString(self, s: List[str]) -> None:

        # i = 0
        # j = len(s) - 1

        # while i < j:
        #     s[i], s[j] = s[j], s[i]
        #     i += 1
        #     j -= 1

        # using recusion
        n=len(s)
        def rev(left,right):
            if left>=right:
                return 

            s[left],s[right]=s[right],s[left] 
            rev(left+1,right-1)   
        return rev(0,n-1)


        



        