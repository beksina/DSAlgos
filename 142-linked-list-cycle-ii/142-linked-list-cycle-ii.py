# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# starting a fastP at head.next.next and slowP at head.next
# if fastP becomes null => no loop
# when they do meet, reset slowP to head and move each node one at a time 
# the node they meet at is where the cycle occurs

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None or head.next.next is None:
            return None
        slowP = head.next
        fastP = head.next.next
        
        while slowP and fastP and slowP != fastP:
            slowP = slowP.next
            if fastP.next:
                fastP = fastP.next.next
            else:
                fastP = None
                
        if fastP is None:
            return None
        
        slowP = head
        while slowP != fastP:
            slowP = slowP.next
            fastP = fastP.next
        
        return slowP