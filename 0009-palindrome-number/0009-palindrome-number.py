class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x<0:
            return False

        n=x
        new_num=0

        while n>0:
            riv=n%10
            new_num=new_num*10+riv

            n=n//10

        if new_num != x:
            return False        
        return True    