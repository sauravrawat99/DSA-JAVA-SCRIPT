class Solution:
    def fib(self, n: int) -> int:

        # def fibbo(n):
        #     number=0
        #     if n==1 or n==0:
        #         return n

        #     number+= fibbo(n-1)+fibbo(n-2)

        #     return number    

        # return fibbo(n)    
# optimize

        def fibbo(n):
            memo={}
            if n==1 or n==0:
                return n

            if n in memo:
                return memo[n]

            memo[n]= fibbo(n-1)+fibbo(n-2)

            return memo[n]    

        return fibbo(n)        

        
        