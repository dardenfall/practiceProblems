"use strict"
// 2.3
// Implement an algorithm to delete a node in the middle of a single linked list, given only access to that node.
// EXAMPLE
// Input: the node ‘c’ from the linked list a->b->c->d->e
// Result: nothing is returned, but the new linked list looks like a->b->d->e

class Node {
  constructor(val){
    this._val = val;
    this._next = null;
  }
}

class LinkedList {
  constructor(){
    this._head = null;  
  }

  prepend(val){
    let currNode = new Node(val);

    currNode._next = this._head;
    this._head = currNode;
  }

  length(){
    let currNode = this._head;
    let len = 0;
    while(currNode !== null){
      len++;
      currNode = currNode._next;
    }
    return len;
  }

  // get the nth node, for testing purposes
  getNode(n){
    let currNode = this._head;

    for(let i=0; i < n; i++){
      currNode = currNode._next;
    }

    return currNode;
  }
}

//Assumption - this can't be the last node in the list since we're being passed in a reference 
//  and we can't set the referent pointing to that node to be null
function deleteNodeWithAccessOnlyToTheNode(node){

  let nextNode = node._next;

  while(nextNode !== null){
    node._val = nextNode._val;
    node = node._next;
    nextNode = nextNode._next;
  }

  node._next = null;
}

