
// Creation of linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value),
        this.tail = this.head,
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
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
        // check params
        // If the index is equal or greater than the length, add to last spot
        if(index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value); // create new node
        const leader = this.traverseToIndex(index - 1); // get the index before the required spot for insert
        const follower = leader.next; //hold the next item temporarily in the reference
        leader.next = newNode; // move the pointer to the new 
        newNode.prev = leader;
        newNode.next = follower; //move the pointer of the new node to the holding reference
        follower.prev = newNode;
        this.length++;

    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const unWantedNode = leader.next;
        leader.next = unWantedNode.next;
        this.length--;
     }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

