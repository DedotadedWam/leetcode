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
    let counter: number = Math.floor(nodeCounter(head, 0) / 2);
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