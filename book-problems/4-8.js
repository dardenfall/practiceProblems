"use strict";
// 4.8 You are given a binary tree in which each node contains a value. Design an algorithm to print 
//   all paths which sum up to that value. 
//   Note that it can be any path in the tree - it does not have to start at the root.

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

  getSummationPaths(val){

    
    let pathArray = [];

    const helper = function(val) {

    };

    const getSummationPath = function(currentNode, runningTotal, target){
      if(currentNode === null){
        return false;
      }

      let newTotal = runningTotal + currentNode._val;
      if(newTotal === target){
        return currentNode;
      }

      return getSummationPath(currentNode._left, newTotal, target) ||
        getSummationPath(currentNode._right, newTotal, target);
    };

    return pathArray;
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
    throw "missed insertion on tree";
  }

}

const assert = function(test, msg){
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
} 

let t = new Tree();
t.insert(1);
t.insert(2);
t.insert(3);
t.insert(4);
t.insert(5);
t.insert(6);
t.insert(7);
assert(t.findCommonAncestor(t._root._left,t._root._right) === t._root,
       "t.findCommonAncestor(t._root._left,t._root._right) === t._root");
assert(t.findCommonAncestor(t._root._left._left,t._root._left._right) === t._root._left,
       "t.findCommonAncestor(t._root._left._left,t._root._left._right) === t._root._left");       
assert(t.findCommonAncestor(t._root._left,t._root._left._right) === t._root,
       "t.findCommonAncestor(t.findCommonAncestor(t._root._left,t._root._left._right) === t._root");       
