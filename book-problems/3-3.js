  "use strict";
  //3.3 Imagine a (literal) stack of plates. If the stack gets too high, it might topple. 
  //  Therefore, in real life, we would likely start a new stack when the previous stack 
  //  exceeds some threshold. Implement a data structure SetOfStacks that mimics this. 
  //  SetOfStacks should be composed of several stacks, and should create a new stack once 
  //  the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should 
  //  behave identically to a single stack (that is, pop() should return the same values 
  //  as it would if there were just a single stack).

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

  class SetOfStacks {

    constructor(setSize){
      this._setSize = setSize;
      this._stackOfStacks = new Stack();
    }

    _getTotalSize(){
      let totalSize = 0;

      for(let temp = this._stackOfStacks._top;  temp !== null; temp = temp._next){
        totalSize += temp._val.size();
      }

      return totalSize;
    }

    push(val){
      debugger;
      if(this._getTotalSize() % this._setSize === 0){
        let tmpStack = new Stack();
        tmpStack.push(val);
        this._stackOfStacks.push(tmpStack);
      }
      else{
        this._stackOfStacks._top._val.push(val);
      }
    }

    pop(){
      if(this._stackOfStacks.size() === 0){
        return null;
      }

      let retval = this._stackOfStacks._top._val.pop();

      if(this._stackOfStacks._top._val.size() === 0){
        this._stackOfStacks.pop();
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


  let s = new SetOfStacks(3);
  debugger;
  s.push(1);
  assert(s.pop() === 1, "1");
  s.push(1);s.push(2);s.push(3);s.push(4);
  console.log('s');
  assert(s.pop() === 4, "4");
  assert(s.pop() === 3, "3");
  assert(s.pop() === 2, "2");
  assert(s.pop() === 1, "1");
  assert(s.pop() === null, "null");



