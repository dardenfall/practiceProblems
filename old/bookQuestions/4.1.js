"use strict";

class BinaryTreeNode {
  constructor(val){
    this._val = val;
    this._left = null;
    this._right = null;
  }
}

class BinaryTree {
  constructor(){
    this._root = null;
  }

  add(val){

    let addHelper = function(val, node){

      if(val < node._val){
        if(node._left === null){
          node._left = new BinaryTreeNode(val);
          return true;
        }
        else{
          return addHelper(val, node._left);
        }
      }
      else if( val > node._val){
        if(node._right === null){
          node._right = new BinaryTreeNode(val);
          return true;
        }
        else{
          return addHelper(val, node._right);
        }
      }
      else{ //nodes are equal
        return false;
      }

    }

    if(this._root == null){
      this._root = new BinaryTreeNode(val);
      return true;
    }
    return addHelper(val, this._root);
  }

  static depthHelper(node){

    if(node == null){ return 0;}

    if(node._left == null && node._right == null){
      return 0;
    }

    return 1 + Math.max(BinaryTree.depthHelper(node._left), BinaryTree.depthHelper(node._right));
  }

  depth(){

    return BinaryTree.depthHelper(this._root);
  }

  isBalanced(){

    if(this.depth() < 2){
      return true;
    }

    return(Math.abs(BinaryTree.depthHelper(this._root._left) - BinaryTree.depthHelper(this._root._right)) < 2);
  }
}

function testfunc(func, tests){

  for(let t of tests){
    let ans = func(t.q);
    if(ans !== t.a){
      console.log("FAIL!!! ", ans, " not equal to ", t.a);
    }
    else{
      console.log("SUCCESS. ", ans, " equals ", t.a);
    }
  }
}

let b2 = new BinaryTree();
b2.add(6);
console.log(b2.depth())
b2.add(2);
console.log(b2.depth())
b2.add(1);
console.log(b2.depth())

let tests = [
 {q: b2, a: false}
]

testfunc(b2.isBalanced.bind(b2), tests);
