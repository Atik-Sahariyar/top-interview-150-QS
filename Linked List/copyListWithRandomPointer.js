/**
 * Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return null;
    }
    
    // Step 1: Create a new node for each original node and insert it after the original node
    let current = head;
    while (current) {
        let new_node = new Node(current.val);
        new_node.next = current.next;
        current.next = new_node;
        current = new_node.next;
    }
    
    // Step 2: Assign random pointers for the new nodes
    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }
    
    // Step 3: Separate the original list and the copied list
    let new_head = head.next;
    let current_original = head;
    let current_copied = new_head;
    
    while (current_original) {
        current_original.next = current_original.next.next;
        current_original = current_original.next;
        if (current_copied.next) {
            current_copied.next = current_copied.next.next;
            current_copied = current_copied.next;
        }
    }
    
    return new_head;
};
