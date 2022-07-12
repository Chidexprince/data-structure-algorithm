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

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* 
700. Search in a Binary Search Tree
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

*/

function searchBST(root, val) {
    let current = root;
    
    while (current) {
        if(current.val === val) {
            return current;
        } 
        current = current.val > val ? current.left : current.right;
    }
    return null
}

/* 
2236. Root Equals Sum of Children

You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.

Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

*/

function checkTree(root) {
    return root.val === root.left.val + root.right.val
};