/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    let counter: number = nodeCounter(head, 0);
    
    console.log(counter)
    
    counter = Math.floor(counter / 2)
    
    console.log(counter)
    
    return getMiddle(head, counter)
};

function nodeCounter(node: ListNode | null, counter: number): number {
    if (!node) return counter;
    counter++;
    return nodeCounter(node.next, counter)
}

function getMiddle(node: ListNode, counter: number): ListNode {
    if(counter === 0) return node;
    counter--;
    return getMiddle(node.next, counter)
}