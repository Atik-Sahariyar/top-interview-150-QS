/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


const mergeKLists = (lists) => {
    if(lists.length === 0){
        return null;
    }

    while(lists.length > 1){
       let list1 = lists.shift();
       let list2 = lists.shift();
       let merged = mergedSortedLists(list1, list2)

       lists.push(merged)
    }

    return lists[0]
};

function mergedSortedLists(list1, list2){
    const dummyNode = new ListNode(0);
    let currentNode = dummyNode;

    while(list1 && list2){
        if(list1.val <= list2.val){
            currentNode.next = list1;
            list1 = list1.next;
        }else{
            currentNode.next = list2;
            list2 = list2.next;
        }

        currentNode = currentNode.next;
    }

    if(list1){
        currentNode.next = list1;
    }

    if(list2){
        currentNode.next = list2;
    }

    return dummyNode.next;
}