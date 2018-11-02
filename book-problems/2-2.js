"use strict"
//2.2 Implement an algorithm to  nd the nth to last element of a singly linked list.
// 'nextToLast' below

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
      len++
      currNode = currNode._next;
    }
    return len;
  }

  //2.2
  nextToLast(){
    if(this._head === null){
      return null;
    }

    if(this._head._next === null){
      return null;
    }

    let prevNode = this._head;
    let currNode = this._head._next;

    while(currNode._next !== null){
      prevNode = currNode;
      currNode = currNode._next;
    }
    return prevNode;
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
assert(x.nextToLast()._val === "Petty", "second to last is Petty")