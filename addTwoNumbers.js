/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  const arr1 = arrayFromList(l1);
  const arr2 = arrayFromList(l2);

  const result = listFromArray(arrayAdder(arr1, arr2));
};

/*
-------------------------------------------------------------------
Helper Functions
-------------------------------------------------------------------
*/
function listFromArray(arr) {
  function ListNode(val, next) {
    const node = {};
    node.val = val === undefined ? 0 : val;
    node.next = next === undefined ? null : next;
    return node;
  }

  let currentNode = ListNode(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const nextNode = ListNode(arr[i], currentNode);
    currentNode = nextNode;
  }

  return currentNode;
}

function arrayFromList() {
  const number = [];
  while (list.next) {
    number.push(list.val);
    list = list.next;
  }
  number.push(list.val);
  return number;
}

function arrayAdder(arr1, arr2) {
  debugger;
  let leadArr = arr1;
  let otherArr = arr2;
  if (arr1.length <= arr2.length) {
    leadArr = arr2;
    otherArr = arr1;
  }

  const result = [];
  let carryOver = false;
  for (let i = 0; i < leadArr.length; i++) {
    if (otherArr[i] === undefined) {
      otherArr[i] = 0;
    }
    let num = leadArr[i] + otherArr[i];
    if (carryOver) {
      num += 1;
      carryOver = false;
    }
    if (num >= 10) {
      num -= 10;
      carryOver = true;
    }
    result.push(num);

    if (carryOver && i === leadArr.length - 1) {
      result.push(1);
    }
  }

  return result;
}

console.log(arrayAdder([5, 6], [5, 4, 9]));
