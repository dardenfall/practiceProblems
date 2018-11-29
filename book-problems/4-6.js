/* eslint-disable no-console */
/* eslint-disable indent */
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

  dfsNode(n, traversalNode){
    if(traversalNode === null){
      return false;
    }

    if(traversalNode === n){
      return true;
    }

    return (this.dfsNode(n, traversalNode._left) || 
            this.dfsNode(n, traversalNode._right));
  }

  findCommonAncestor(node1, node2){
    let q = [];
    let result = null;

    q.push(this._root);
  
    while(q.length !== 0){
      let tmp = q.shift();

      if(this.dfsNode(node1, tmp) && this.dfsNode(node2, tmp)){
        result = tmp;
      }

      if(tmp._left !== null) {
        q.push(tmp._left);
      }
      if(tmp._right !== null) {
        q.push(tmp._right);
      }
      
    }

    return result;
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

const t = new Tree();
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
 //TODO - not working need to fix      
assert(t.findCommonAncestor(t._root._left,t._root._left._right) === t._root,
       "t.findCommonAncestor(t._root._left,t._root._left._right) === t._root");       
