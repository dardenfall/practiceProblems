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

    while(s.size() > 0){
      let temp = s.pop();

      while(returnStack.size() > 0 && temp < returnStack.peek()){
        s.push(returnStack.pop())
      }
      returnStack.push(temp);
    }
    
    return returnStack;
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
s.push(5);s.push(1);s.push(7);s.push(2);
let n = Stack.sortAscending(s);
assert(n.pop() === 7, 'n.pop === 7');
assert(n.pop() === 5, 'n.pop === 5');
assert(n.pop() === 2, 'n.pop === 2');
assert(n.pop() === 1, 'n.pop === 1');

