"use strict";
// 2-1 Write code to remove duplicates from an unsorted linked list.

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

  removeDuplicates(){
    let currNode = this._head;

    while(currNode !== null){
      let curVal = currNode._val;

      let searchNode = currNode._next;
      let previous = currNode;
      while(searchNode !== null){
        if(curVal === searchNode._val){
          //delete the node
          previous._next = searchNode._next;
        }
        else{
          previous = searchNode;
        }

        searchNode = searchNode._next;
      }

      currNode = currNode._next;
    }
  }
}

function assert(x, msg){
  if(!x){
    throw x.toString() + " is not true!";
  }
  else if(msg){
    console.log("true: "  + msg);
  }
}

let x = new LinkedList();
x.prepend("Tom");x.prepend("Petty");x.prepend("Tom");x.prepend("Waits");
x.removeDuplicates();
assert(x._head._val === "Waits", "Check root");
assert(x._head._next._val === "Tom", "Check Tom");
assert(x._head._next._next._val === "Petty", "Check Petty");
assert(x.length() === 3, "check length === 3");
