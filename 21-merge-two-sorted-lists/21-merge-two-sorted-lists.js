/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    let head, tail;
    
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    
    const compareAndMerge = (l1, l2, head, tail) => {
        if (!l1) {
            tail.next = l2;
            return head;
        }
        
        if (!l2) {
            tail.next = l1;
            return head;
        }
        
        let temp;
        
        if (l1.val <= l2.val) {
            temp = l1;
            l1 = l1.next;
            temp.next = null;
        } else {
            temp = l2;
            l2 = l2.next;
            temp.next = null;
        }
        
        if (!head) {
            head = temp;
            tail = temp;
        } else {
            tail.next = temp;
            tail = temp;
        }
        
        return compareAndMerge(l1, l2, head, tail)
    }
    
    return compareAndMerge(list1, list2);
};
