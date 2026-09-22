"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
"""

class Solution:
    def flatten(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return head

        nodes = []

        def fds(node):
            while node:
                nodes.append(node)
                if node.child:
                    fds(node.child)
                    node.child = None
                node = node.next

        fds(head)

        for i in range(len(nodes) - 1):
            nodes[i].next = nodes[i + 1]
            nodes[i + 1].prev = nodes[i]

        nodes[-1].next = None

        return head