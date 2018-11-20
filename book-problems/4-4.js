"use strict";
// 4.4 Given a binary search tree, design an algorithm which creates a linked list of all the nodes at
//     each depth (i.e., if you have a tree with depth D, you’ll have D linked lists)

class LLNode {

  constructor(val){
    this._val = val;
    this._next = null;
  }
}

class LinkedList {
  constructor(){
    this._head = null;  
  }

  prepend(val){
    let currNode = new LLNode(val);

    currNode._next = this._head;
    this._head = currNode;
  }

  length(){
    let currNode = this._head;
    let len = 0;
    while(currNode !== null){
      len++;
      currNode = currNode._next;
    }
    return len;
  }
}

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

  static depthOfNode(node, currentNode, depth){

    if(currentNode === null){
      return null;
    }

    if(currentNode === node){
      return depth;
    }
    else{
      let leftResult = BST.depthOfNode(node,currentNode._left, depth+1);
      let rightResult = BST.depthOfNode(node,currentNode._right, depth+1);
      
      if(leftResult){
        return leftResult;
      }
      else if(rightResult){
        return rightResult;
      }
      else{
        return null
      }
    }
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

  listify(){
    let depth = this.depth();
    let lists = new Array(depth)
    for(let i=0; i < depth; i++){
      lists[i] = new LinkedList();
    }

    let q = new Array();
    q.push(this._root);
    while(q.length !== 0){

      let tmpNode = q.pop()

      let tmpNodeDepth = BST.depthOfNode(tmpNode, b._root, 1);
      debugger;
      lists[tmpNodeDepth - 1].prepend(tmpNode);

      if(tmpNode._left){
        q.push(tmpNode._left);
      }
      if(tmpNode._right){
        q.push(tmpNode._right);
      }
    }

    return lists;
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
b.insert(5);
b.insert(4);
b.insert(3);
b.insert(6);
assert( BST.depthOfNode(b._root._left ,b._root ,1) === 2, 'BST.depthOfNode(b._root._left ,b._root ,1) === 2' );
assert( BST.depthOfNode(b._root._left._left ,b._root ,1) === 3, 'BST.depthOfNode(b._root._left._left ,b._root ,1)');
let lists = b.listify();
assert(lists[0]._head._val._val === 5, 'lists[0]._head._val._val === 5');
assert(lists[1]._head._val._val === 4, 'lists[1]._head._val._val === 4');
assert(lists[1]._head._next._val._val === 6, 'lists[1]._head._val._val === 6');
assert(lists[2]._head._val._val === 3, 'lists[2]._head._val === 3');

