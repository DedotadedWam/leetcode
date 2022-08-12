/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head.next === null) return null;
    
    let targetNode = head;
    let crtNode = head;
    counter = 1;
    
    while (crtNode.next) {
        if (counter > n) {
            targetNode = targetNode.next
        }
        crtNode = crtNode.next;
        counter++;
    }

    if (counter === n) {
        return head.next;
    }
    
    targetNode.next = targetNode.next.next;
    
    
    return head;
};