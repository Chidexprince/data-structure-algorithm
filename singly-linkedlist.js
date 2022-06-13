class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        //this.prev = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        if(typeof index !== 'number') return

        if(index > this.length) return this.append(value)

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;

    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
           currentNode = currentNode.next;
           counter++; 
        }

        return currentNode;
    }

    reverse() {
        if(!this.head.next) {
            return this.head;
        }

        let first  = this.head;
        this.tail = this.head;
        let second = first.next;

        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }
}

const myLinkList = new LinkedList(10);
myLinkList.prepend(5);
myLinkList.append(30);
myLinkList.reverse();


/*
21. Merge Two Sorted Lists
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

*/

// Pseudo code

// Initialize a dummy head node
// Initialize a currentNode variable to keep track of the current node, start with the dummy    head node
// While there are still nodes to compare in the two lists
//  - If value of 2nd node is less than value of 1st node
//    * Set the current node's link to L2 node
//    * Set the L2 node to L2's next node
//  - Else 
//    * Set the current node's link to L1 node
//    * Set the L1 node to L1's next node
//  - Move on to the next node
// If one of the lists no longer have any nodes to compare, point current node's link to the remaining nodes in the other list
// If both sides are empty, point current node's link to null
// return merged linked list

/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) { 
    let mergedHead = new ListNode();
    let currentNode = mergedHead;

    while(list1 && list2) {
        if(list1.val > list2.val) {
            currentNode.next = list2;
            list2 = list2.next;
        } else {
            currentNode.next = list1;
            list1 = list1.next;
        }
        currentNode = currentNode.next;
    }
    currentNode.next = list1 || list2;

    return mergedHead.next;
}
 

/* 83. Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
*/
// Pseudo code
// create a current pointer to the head
// While it is exist
//  - if the current link is not null and current value is equal to current link next value
//    * Set the current link to 2 places ahead
//  - Else set the current link to the next 
// Return the head

var deleteDuplicates = function(head) {
    let currentNode = head;
    
    while (currentNode) {
        if(currentNode.next !== null && currentNode.val == currentNode.next.val) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    
    return head
};
