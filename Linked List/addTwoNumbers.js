/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    // Create a dummy head for the result linked list
    const dummyHead = new ListNode();
    let current = dummyHead;
    let carry = 0;

    while (l1 || l2 || carry) {
        // Get the values of the current nodes (if available)
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        // Calculate the sum and carry
        const totalSum = val1 + val2 + carry;
        carry = Math.floor(totalSum / 10);
        current.next = new ListNode(totalSum % 10);

        // Move to the next nodes (if available)
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

        current = current.next;
    }
    
    const result = dummyHead.next;
    return result;
};
