/* Creation of a binary search tree */

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value); 
        if(this.root === null){
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    //left
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //right
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }

        }
    }

    lookUp(value) {
        if(!this.root) {
            return false;
        }
        let currentNode = this.root;
        while(currentNode) {
            if(value < currentNode.value){
                currentNode = currentNode.left;
            } else if(value > currentNode.value){
                currentNode = currentNode.right;
            } else if(currentNode.value === value) {
                return currentNode;
            }
        }
        return false
    }

    /* Breadth First Search */
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while(queue.length > 0){
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return list

    }

    /* Depth First Search */
    depthFirstSearchPreOrder(){
        return traversePreOrder(this.root, []);
    }

    depthFirstSearchInOrder(){
        return traverseInOrder(this.root, []);
    }

    depthFirstSearchPostOrder(){
        return traversePostOrder(this.root, []);
    }

}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(70);
tree.insert(1);
JSON.stringify(traverse(tree.root))

function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}


function traverseInOrder(node, list) {
    console.log(node.value)
    if(node.left) {
        traverseInOrder(node.left, list)
    }
    list.push(node.value);
    if(node.right) {
        traverseInOrder(node.right, list)
    }

    return list
}

function traversePreOrder(node, list) {
    list.push(node.value);
    console.log(node.value)
    if(node.left) {
        traversePreOrder(node.left, list)
    }
    
    if(node.right) {
        traversePreOrder(node.right, list)
    }

    return list
}

function traversePostOrder(node, list) {

    console.log(node.value)
    if(node.left) {
        traversePostOrder(node.left, list)
    }
    
    if(node.right) {
        traversePostOrder(node.right, list)
    }
    list.push(node.value);
    return list
}