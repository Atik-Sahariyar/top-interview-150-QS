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
const deleteDuplicates = (head) => {
    if (!head || !head.next) return head;

    const home = new ListNode(null);
    home.next = head;

    let conector = home;

    while (head && head.next) {
      if (head.val !== head.next.val) {
        conector = conector.next;
      } else {
        while (head.next && head.val === head.next.val) {
          head = head.next;
        }
        conector.next = head.next;
      }

      head = head.next;
    }

    return home.next;

};