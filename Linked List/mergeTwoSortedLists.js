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
const mergeTwoLists = (list1, list2) => {
    // Create a dummy head for the merged linked list
    const dummyHead = new ListNode();
    let current = dummyHead;

    while (list1 !== null && list2 !== null) {
        // Compare the values of the current nodes
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        // Move to the next node in the merged list
        current = current.next;
    }

    // If one list is not fully processed, append the remaining nodes
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    
    const res = dummyHead.next;
    return res;
};
