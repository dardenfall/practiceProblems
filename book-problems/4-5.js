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

    return this.findSuccessor(currNode);
  }
}

function assert(x, msg){
  if(!x){
    throw (msg || "false assertion");
  }
  else if(msg){
    console.log("true: "  + msg);
  }
}

let b = new BSTp();
b.insert(6);
b.insert(3);
assert(b.findSuccessor(b._root._left)._val === 6, "b.findSuccessor(b._root._left)._val === 6")
b.insert(10);
b.insert(11);
b.insert(9);
b.insert(8);
assert(b.findSuccessor(b._root._left)._val === 6, "b.findSuccessor(b._root._left)._val === 6")
assert(b.findSuccessor(b._root)._val === 8, "b.findSuccessor(b._root._left)._val === 8")
assert(b.findSuccessor(b._root._right)._val === 11, "b.findSuccessor(b._root._left)._val === 11")

