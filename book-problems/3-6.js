  "use strict";
//3.6 Write a program to sort a stack in ascending order. You should not make any assumptions 
//  about how the stack is implemented. The following are the only functions that should be 
//  used to write this program: push | pop | peek | isEmpty.

class Node {
  constructor(val){
    this._val = val;
    this._next = null;
  }
}

class Stack {

  constructor(){
    this._top = null;
    this._size = 0;
  }

  static sortAscending(s){
    let returnStack = new Stack();

    return 
  }
  
  push(val){
    let n = new Node(val);

    if(this._top === null){
      this._top = n;
    }
    else{
      n._next = this._top;
      this._top = n;
    }
    this._size++;
  }

  pop(){
    let retval = null;
    
    if(this._top !== null){
      retval = this._top._val;
      this._top = this._top._next;
    }

    this._size--;
    return retval;
  }

  size(){
    return this._size;
  }

  peek(){
    return this._top._val;
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

let s = new Stack();
s.sortAscending()
