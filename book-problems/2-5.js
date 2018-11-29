"use strict"
// 2.5  
// Given a circular linked list, implement an algorithm which returns node at the begin- ning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node’s next pointer points to an earlier node, so as to make a loop in the linked list.
// EXAMPLE
// input: A -> B -> C -> D -> E -> C [the same C as earlier]
// output: C

//note - works in javascript not node

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

  //if node is not null, then use that to attach to the end of the list.
  //  this is only for the question 2.5
  append(val,node){
    let n = new Node(val);

    if(this._head === null){
      this._head = n;
      return;
    }

    let prevNode = this._head;
    let currNode = prevNode._next;

    while(currNode !== null){
      prevNode = currNode;
      currNode = currNode._next;
    }
    if(node){
      prevNode._next = node;
    }
    else{
      prevNode._next = n;  
    }
    
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

  //brute force find node to be used in corrupt function for question 2.5
  find(val){
    let currNode = this._head;
    let retval = null;

    while (currNode !== null){
      if(currNode._val === val){
        retval = currNode;
        break;
      } 
      currNode = currNode._next;
    }
  
    return retval;
  }

  findCorruption(){
    var nodes = [];

    let currNode = this._head;
    let retval = null;

    while (currNode !== null){
      if(nodes.includes(currNode)){
        retval = currNode; 
        break;
      }
      nodes.push(currNode)
      currNode = currNode._next;
    }

    return retval;
  }
}

const assert = (test, msg) => {
  let message = "";
  if(!test){
    message = "Test FAILED!  ";
  }
  else{
    message = "test passed.  ";
  }

  if(msg){
    message += msg;
  }
  console.log(message);
};

const x = new LinkedList();x.append(1);x.append(5);x.append(2)
//set up corrupted look
x.append(null, x.find(5));
assert(x.findCorruption());

//assert no corruption
const y = new LinkedList();y.append(1);y.append(5);y.append(2);
assert(!y.findCorruption());
