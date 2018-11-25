"use strict";
// 4.7 You have two very large binary trees: T1, with millions of nodes, and T2, with hundreds of nodes. 
//     Create an algorithm to decide if T2 is a subtree of T1.

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
  
  dfs(n, traversalNode){
    if(traversalNode === null){
      return false;
    }

    if(traversalNode._val === n){
      return true;
    }

    return (this.dfsNode(n, traversalNode._left) || 
            this.dfsNode(n, traversalNode._right));
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

let t = new BST();
t.insert(4);
t.insert(2);
t.insert(6);
t.insert(1);
t.insert(3);
t.insert(5);
t.insert(7);

let t2 = new BST();
t2.insert(5);
t2.insert(7);
t2.insert(6);