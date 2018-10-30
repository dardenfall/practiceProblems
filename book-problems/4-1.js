"use strict"
// 4.1) Implement a function to check if a tree is balanced. 
// For the purposes of this question, a balanced tree is de ned to be a tree 
// such that no two leaf nodes di er in distance from the root by more than one.

class Node {
  constructor (val){
    this._left = null;
    this._right = null;
    this._val = val
  }
}

class BST {
  constructor (){
    this._root = null;
  }

  insert(x){
    if(this._root === null){
      this._root = new Node(x);
      return;
    }

    let curr = this._root;

    while(curr !== null){
      if(x < curr._val){
        if(curr._left === null){
          curr._left = new Node(x);
          return;
        }
        curr = curr._left;
      }
      else if(x > curr._val){
        if(curr._right === null){
          curr._right = new Node(x);
          return;
        }
        curr = curr._right;
      }
      else{
        return;
      }
    }
  }

  depthHelper(node, reduceFunc){
    if(node === null){
      return 0;
    }

    return 1 + reduceFunc.call(null, 
      this.depthHelper(node._left, reduceFunc), 
      this.depthHelper(node._right, reduceFunc));
  }

  depth(){
    return this.depthHelper(this._root, Math.max);
  }

  maxDepth(){
    return this.depth()
  }

  minDepth(){
    return this.depthHelper(this._root, Math.min)
  }

  balanced(){
    return this.maxDepth() - this.minDepth() < 2;
  }
}

