"use strict";
// 4.6 Design an algorithm and write code to  find the  first common ancestor of two nodes in a binary tree. 
//    Avoid storing additional nodes in a data structure. 
//    NOTE: This is not necessarily a binary search tree.

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