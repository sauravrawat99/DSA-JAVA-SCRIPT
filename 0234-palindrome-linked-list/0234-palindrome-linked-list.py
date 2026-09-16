# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode | None) -> bool:
        # brute forece using extra space O(n)
        # temp=head
        # arr=[]
        # while temp:
        #     arr.append(temp.val)
        #     temp=temp.next

        # st=0
        # end=len(arr)-1

        # while st<end:
        #     if arr[st] != arr[end]:
        #         return False
        #     st +=1
        #     end -=1
        # return True      

        # optimize with constant space O(1)

        
        slow = fast = head

        # find middle
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # reverse second half
        prev = None
        curr = slow

        while curr:
            new_node = curr.next
            curr.next = prev
            prev = curr
            curr = new_node

        # compare left and right half
        left = head
        right = prev

        while right:
            if left.val != right.val:
                return False
            left = left.next
            right = right.next
        return True