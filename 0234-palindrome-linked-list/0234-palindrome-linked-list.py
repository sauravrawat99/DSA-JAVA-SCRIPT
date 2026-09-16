# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode | None) -> bool:
        temp=head
        arr=[]
        while temp:
            arr.append(temp.val)
            temp=temp.next

        st=0
        end=len(arr)-1

        while st<end:
            if arr[st] != arr[end]:
                return False
            st +=1
            end -=1
        return True        

        