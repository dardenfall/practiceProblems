"use strict";
// 4.3 Given a sorted (increasing order) array, write an algorithm to create a 
//     binary tree with minimal height.

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

  insertSortedArray(arr){
    
    if(arr.length === 0){
      return;
    }

    if(arr.length === 1){
      this.insert(arr[0]);
      return;
    }

    let mid = Math.floor(arr.length / 2);
      
    this.insert(arr[mid]);

    this.insertSortedArray(arr.slice(0,mid));
    this.insertSortedArray(arr.slice(mid+1,arr.length));
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
let arr1 = [2,7,8,10,12,15];
b.insertSortedArray(arr1);
assert(b.depth() === 3, "[2,7,8,10,12,15]");
b = new BST();
let arr2 = [1,2,3,4,5,6,7,8,10,12,15,18,19,21,25];
b.insertSortedArray(arr2);
assert(b.depth() === 4, "[1,2,3,4,5,6,7,8,10,12,15,18,19,21,25];");

