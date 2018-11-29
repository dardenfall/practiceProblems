"use strict";
//3.2 How would you design a stack which, in addition to push and pop, also has a function 
//min which returns the minimum element? Push, pop and min should all operate in O(1) time.

class Node {
  constructor(val, min){
    this._val = val;
    this._next = null;
    this._min = min;
  }
}

class Stack {

  constructor(){
    this._top = null;
  }

  push(val){

    if(this._top === null){
      let n = new Node(val, val);
      this._top = n;
    }
    else{
      let min = val;
      if(val > this._top._val){
        min = this._top._val;
      }
      let n = new Node(val, min);
      n._next = this._top;
      this._top = n;
    }
  }

  pop(){
    let retval = null;
    
    if(this._top !== null){
      retval = this._top._val;
      this._top = this._top._next;
    }

    return retval;
  }

  min(){
    return this._top._min;
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
assert(s.min() === 1, "min == 1");
assert(s.pop() === 1, "1");
s.push(2);
s.push(3);
assert(s.min() === 2, "min === 2");
assert(s.pop() === 3, "3");
s.push(1);
assert(s.min() === 1, "min === 1");
assert(s.pop() === 1, "1");
assert(s.min() === 2, "min === 2");
assert(s.pop() === 2, "2");


//push 1, top = (1,1)
//push 2, next = (2,1)

//push 2, top = (2,2)
//push 1, next = (1,1)
//push 3, next = (3,1)



