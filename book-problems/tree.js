"use strict";

// standard tree, in-order insertion
class Node {
  constructor(val){
    this._val = val;
    this._left = null;
    this._right = null;
  }  
}

class Tree{
  constructor(){
    this._root = null;
  }

  insert(val){
    let newNode = new Node(val);
    if(this._root === null){
      this._root = newNode;
      return;
    }

    let q = new Array();
    q.push(this._root);
    
    while(q.length !== 0){
      let tmpNode = q.shift();

      if(tmpNode._left === null){
        tmpNode._left = newNode;
        return;
      }
      else if(tmpNode._right === null){
        tmpNode._right = newNode;
        return;
      }
      else{
        q.push(tmpNode._left);
        q.push(tmpNode._right);
      }
    }
    throw "missed insertion on tree;"
  }

}

const assert = function(test, msg){
  let message = "";
  if(!test){
    message = "Test FAILED!  "
  }
  else{
    message = "test passed.  "
  }

  if(msg){
    message += msg;
  }
  console.log(message);
} 

console.log("foo")
let t = new Tree();
t.insert(5);
t.insert(6);
t.insert(7);
assert(t._root._val === 5,"t._root._val === 5");
assert(t._root._left._val === 6,"t._root._left._val === 6");
assert(t._root._right._val === 7,"t._root._right._val === 7");
t.insert(8);
assert(t._root._left._left._val === 8,"t._root._left._left._val === 8");
t.insert(9);
assert(t._root._left._right._val === 9,"t._root._left._right._val === 9");
t.insert(10);
assert(t._root._right._left._val === 10,"t._root._right._left._val === 10");
t.insert(11);
assert(t._root._right._right._val === 11,"t._root._right._right._val === 11");
