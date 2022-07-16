# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        def reverseList(l):
            curr = l
            prev = None
            nxt = None
            while curr:
                nxt = curr.next
                curr.next = prev
                prev = curr 
                curr = nxt
            return prev
        
        rl1 = reverseList(l1)
        rl2 = reverseList(l2)
                
        newHead = None
        currNode = newHead
        
        rem = 0
        while rl1 or rl2:
            total = rem
            if rl1:
                total += rl1.val
            if rl2:
                total += rl2.val
            rem = total // 10
            currVal = total % 10
            if newHead is None:
                newHead = ListNode(currVal)
                currNode = newHead
            else:
                currNode.next = ListNode(currVal)
                currNode = currNode.next

            if rl1:
                rl1 = rl1.next
            if rl2:
                rl2 = rl2.next
        
        if rem > 0:
            currNode.next = ListNode(rem)
            
        return reverseList(newHead)
    
            
            
        
        
            
        
        