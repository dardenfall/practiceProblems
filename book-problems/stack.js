"use strict";

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

const s = new Stack();
s.push(1);
assert(s.size() === 1, "size === 1");
assert(s.pop() === 1, "1");
assert(s.size() === 0, "size === 0");
s.push("elite");s.push("starflight");s.push("no man's sky");
assert(s.size() === 3, "size === 3");
assert(s.pop() === "no man's sky","no man's sky");
assert(s.pop() === "starflight","starflight");
assert(s.pop() === "elite","elite");
assert(s.size() === 0, "size === 0");
assert(s.pop() === null, "null");
assert(s.pop() === null, "null");


