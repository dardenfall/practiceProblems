"use strict";

class Node {
  constructor(val){
    this._val = val;
    this._next = null;
  }
}

class Stack {

  constructor(){
    this._root = null;
  }

  push(val){
    let n = new Node(val);

    if(this._root === null){
      this._root = n;
    }
    else{
      n._next = this._root;
    }
  }

  pop(){
    let retval = null;
    
    if(this._root !== null){
      retval = this._root;
      this._root = retval._next;
    }

    return retval;
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

assert(!hasDuplicatesEs6("waits"), "waits");

