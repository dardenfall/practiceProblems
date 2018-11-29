/* eslint-disable no-console */
"use strict";
// 4.7 You have two very large binary trees: T1, with millions of nodes, and T2, with hundreds of nodes. 
//     Create an algorithm to decide if T2 is a subtree of T1.

class Node {
  constructor (val){
    this._left = null;
    this._right = null;
    this._val = val;
  }
}

class BST {
  constructor (){
    this._root = null;
  }

  static dfsNode(n, traversalNode){
    if(traversalNode === null){
      return false;
    }

    if(traversalNode._val === n){
      return traversalNode;
    }

    return (this.dfsNode(n, traversalNode._left) || 
            this.dfsNode(n, traversalNode._right));
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
    return this.depth();
  }

  minDepth(){
    return this.depthHelper(this._root, Math.min);
  }

  balanced(){
    return this.maxDepth() - this.minDepth() < 2;
  }

  isSubTree(potentialSubTree){
    
    if(!potentialSubTree || !potentialSubTree._root){
      return false;
    }
    
    var foundNode = BST.dfsNode(potentialSubTree._root._val, this._root);

    if(!foundNode){
      return false;
    }

    const helper = function(potentialSubTreeNode, largerTreeNode){
      if(potentialSubTreeNode === null){
        return true;
      }
      
      if(largerTreeNode === null){
        return false;
      }

      if(potentialSubTreeNode._val !== largerTreeNode._val ){
        return false;
      }

      return helper(potentialSubTreeNode._left, largerTreeNode._left) && 
             helper(potentialSubTreeNode._right, largerTreeNode._right);
    };

    return helper(potentialSubTree._root, foundNode);
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

let t = new BST();
t.insert(4);
t.insert(2);
t.insert(6);
t.insert(1);
t.insert(3);
t.insert(5);
t.insert(7);

let t2 = new BST();
t2.insert(6);
t2.insert(7);
t2.insert(5);

let t3 = new BST();
t3.insert(7);
t3.insert(6);
t3.insert(5);

let t4 = new BST();

assert(t.isSubTree(t2), "t.isSubTree(t2)");
assert(!t.isSubTree(t3), "!t.isSubTree(t3)");
assert(!t.isSubTree(t4), "!t.isSubTree(t4)");