/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let crt = head;
    
    function innerFunk (crtNode){
        if(!crtNode) return null;
        let temp = crtNode;
        if (!crtNode.next) return crtNode;
        crtNode = crtNode.next;
        temp.next = crtNode.next;
        crtNode.next = temp;
        temp.next = innerFunk(temp.next)
        return crtNode;
    }
    
    head = innerFunk(crt);
    
    return head;
};