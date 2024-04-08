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

const sortList = (head) => {
    const arr = []; //To store all the numbers
    let node = head; //helper node to iterate the linked list

    //Fill the array
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    //Sort the numbers
    arr.sort((a, b) => a - b);


    head = node; // We want to return the same head, and we already changed its value when filling the array

    for (const n of arr) {
        node.val = n; //Change list value
        node = node.next; //Go next
    }

    //Finally return the head of the new linked list
    return head;
};