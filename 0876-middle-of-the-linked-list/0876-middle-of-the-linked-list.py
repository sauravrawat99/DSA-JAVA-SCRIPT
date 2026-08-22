# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:

        self.slow=head
        self.fast=head

        while self.fast and self.fast.next:
            self.slow=self.slow.next
            self.fast=self.fast.next.next
        return self.slow    