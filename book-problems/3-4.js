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
    return this._size;
  }
}

class Tower {
  constructor(){
    this._stack = new Stack();
  }

  canInsert(disk){

    if(this._stack.size() > 0){
      return this._stack.peek().size() > disk._size;
    }

    return true;
  }

  removeTop(){
    return this._stack.pop();
  }

  insert(disk){
    if(!this.canInsert(disk)){
      throw `Trying to insert ${disk.size()} on ${this._stack.peek().size()}`  
    }
    this._stack.push(disk);
  }
}

class TOHGame{
  constructor(nDisksOnFirstTower){

    this._tower1 = new Tower();
    this._tower2 = new Tower();
    this._tower3 = new Tower();

    //put all the disks on the first Tower
    for (let i = nDisksOnFirstTower; i > 0; i--) {
      this._tower1.insert(new Disk(i)); 
    }
  }

  moveTopDisk(startingTower, destTower){
    let top = startingTower.removeTop();
    destTower.insert(top);
  }

  //had to look up the algorithm for this one
  moveDisks(numDisks, startingTower, helperTower, destTower){
    if(numDisks > 0){
      this.moveDisks(numDisks-1, startingTower, destTower, helperTower);
      this.moveTopDisk(startingTower, destTower);
      this.moveDisks(numDisks-1, helperTower, startingTower, destTower);
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

const GAME_SIZE = 3;
let game = new TOHGame(GAME_SIZE);
game.moveDisks(GAME_SIZE, game._tower1, game._tower2, game._tower3);
game = new TOHGame(10);
game.moveDisks(10, game._tower1, game._tower2, game._tower3);

