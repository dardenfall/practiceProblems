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
    this._depth = 1;
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
          node._right = new Node(val);
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

    return addHelper(val, this._root);
  }

}

