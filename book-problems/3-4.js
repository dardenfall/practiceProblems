  "use strict";
//3.4  Implement a MyQueue class which implements a queue using two stacks. 


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

  peek(){
    return this._top._val;
  }
}

class MyQueue {

  constructor(){
    this._activeStack = new Stack();
    this._auxStack = new Stack();
  }

  enqueue(val){
    this._activeStack.push(val);
  }

  dequeue(){
    if(this._activeStack.size() === 0){
      return null;
    }

    while(this._activeStack.size() > 1){
      this._auxStack.push( this._activeStack.pop() );
    }

    let retval = this._activeStack.pop();

    let tempStack = this._activeStack;
    this._activeStack = this._auxStack;
    this._auxStack = tempStack;

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

const q = new MyQueue();
q.enqueue(1);
q.enqueue(2);
assert(q.dequeue() === 1, "q.dequeue() === 1" );
assert(q.dequeue() === 2, "q.dequeue() === 2" );
q.enqueue("Bowie");
q.enqueue("Waits");
assert(q.dequeue() === "Bowie", "q.dequeue() === Bowie" );
assert(q._activeStack.size() === 1);
assert(q._auxStack.size() === 0);
q.enqueue("Killers");
assert(q.dequeue() === "Waits", "q.dequeue() === Waits" );
assert(q.dequeue() === "Killers", "q.dequeue() === Killers" );

