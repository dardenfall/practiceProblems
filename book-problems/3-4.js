  "use strict";
//3.4
// In the classic problem of the Towers of Hanoi, you have 3 rods and N disks of di erent sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom (e.g., each disk sits on top of an even larger one). You have the following constraints:
// (A) Only one disk can be moved at a time.
// (B) A disk is slid o  the top of one rod onto the next rod.
// (C) A disk can only be placed on top of a larger disk.
// Write a program to move the disks from the  rst rod to the last using Stacks.

// NOTE : woof - what a pain.  I had to look up the psuedo code to figure out the algorithm to 
//  do this

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

class Disk {
  constructor(size){
    this._size = size
  }

  size(){
    return _size;
  }
}

class Pole {
  constructor(){
    this._stack = new Stack();
  }

  canInsert(disk){
    return this._stack.peek() > disk._size;
  }

  insert(disk){
    if(!this.canInsert(disk)){
      throw `Trying to insert ${disk.size()} on ${this._stack.peek().size()}`  
    }
    this._stack.push(disk);
  }
}

class tohGame{
  constructor(nDisksOnFirstPole){

    this._stack1 = new Stack();
    this._stack2 = new Stack();
    this._stack3 = new Stack();

    //put all the disks on the first pole
    for (let i = nDisksOnFirstPole; i > 0; i--) {
      this._stack1.insert(new Disk(i)); 
    }
  }

    
  finishGame(){
    while(this._stack1.){

    }

    while(){

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





