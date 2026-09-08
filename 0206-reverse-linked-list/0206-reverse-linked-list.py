# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # using recursion 
        def reverse(head):
            if head is None or head.next is None:
                return head

            new_node = reverse(head.next)

            head.next.next = head
            head.next = None
            return new_node

        return reverse(head)

        # using three pointer
        # prev=None
        # curr=head

        # while curr:
        #     new_node=curr.next
        #     curr.next=prev
        #     prev=curr
        #     curr=new_node
        # return prev  
    

        