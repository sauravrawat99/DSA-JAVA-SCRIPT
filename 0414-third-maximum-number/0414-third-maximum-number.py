class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        first=second=third=float("-inf")
        for num in nums:
            if num in (first,second,third):
                continue

            if num>first:
                first,second,third=num,first,second    
            
            elif second<num:
                second,third=num,second

            elif third<num:
                third=num
        return third if third!=float("-inf")else first            