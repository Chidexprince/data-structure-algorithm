/* Creating a stack */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
    }

    pop() {
        if(!this.top) {
            return null;
        }

        if(this.top === this.bottom) {
            this.bottom = null;
        }

        // const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

/* Creating a Queue */

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    dequeue() {
        if(this.length === 0) {
            return null
        }

        if(this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.length--;
        return this;
    }
}