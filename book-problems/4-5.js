"use strict";
// 4.5 Write an algorithm to  nd the ‘next’ node (i.e., in-order successor) of a given node 
//     in a binary search tree where each node has a link to its parent.

class NodeWithParent {
  constructor (val, parent){
    this._parent = parent;
    this._left = null;
    this._right = null;
    this._val = val
  }
}

class BSTp {
  constructor (){
    this._root = null;
  }

  insert(x){
    if(this._root === null){
      this._root = new NodeWithParent(x,this._root);
      return;
    }

    let curr = this._root;

    while(curr !== null){
      if(x < curr._val){
        if(curr._left === null){
          curr._left = new NodeWithParent(x, curr);
          return;
        }
        curr = curr._left;
      }
      else if(x > curr._val){
        if(curr._right === null){
          curr._right = new NodeWithParent(x, curr);
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

1. If X has a right child, then the successor must be on the right side of X (because of the order in which we visit nodes). 
   Specically, the left-most child must be the  rst node visited in that subtree.
2. Else, we go to X’s parent (call it P).
2.a. If X was a left child (P.left = X), then P is the successor of X
2.b. If X was a right child (P.right = X), then we have fully visited P, so we call successor(P).

  findSuccessor(node){
    if(node === null){
      return null;
    }

    let currNode = null;
    if(node._right !== null){
      currNode = node._right;

      while(currNode._left !== null){
        currNode = currNode._left
      }

      return currNode;
    }

    currNode = node._parent;
    if(currNode._left === node){
      return currNode;
    }

    return findSuccessor(node);
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

let b = new BST();
