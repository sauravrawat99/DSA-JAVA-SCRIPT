class Solution:
    def myPow(self, x: float, n: int) -> float:
        # optimize time o(logn)
        # if n<0:
        #     x=1/x
        #     n=-n

        # result=1
        # while n>0:
        #     if n%2==1:
        #         result*=x
        #     x=x*x
        #     n=n//2    
        
        # return result
        def helper(x,n):
            if n<0:
                 x=1/x
                 n=-n

            if n==0:
                 return 1
            
            half=helper(x,n//2)

            if n%2==0:
                return half*half
            else:
                return half*half*x
                
        return helper(x,n)            