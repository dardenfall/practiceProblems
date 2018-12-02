"use strict";
/// IN PROGRESS

// 4.8 You are given a binary tree in which each node contains a value. Design an algorithm to print 
//   all paths which sum up to that value. 
//   Note that it can be any path in the tree - it does not have to start at the root.

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

  getSummationPaths(val){
    let pathsArray = [];

    const getSummationPath = function(currentNode, pathArray, runningTotal, target){
      debugger;
      if(currentNode === null){
        return;
      }

      let newTotal = runningTotal + currentNode._val;
      pathArray.push(currentNode);
      if(newTotal === target){
        pathsArray.push(pathArray);
        return;
      }

      getSummationPath(currentNode._left, pathArray.slice(), newTotal, target) ||
      getSummationPath(currentNode._right, pathArray.slice(), newTotal, target);
    };

    let q = [];
    q.push(this._root);

    if(!this._root){
      return pathsArray;
    }

    while(q.length !== 0){
      let tmpNode = q.shift();

      if(tmpNode._val === val){
        pathsArray.push([tmpNode]); 
      }
      getSummationPath( tmpNode, [], 0, val);

      if(tmpNode._left !== null){
        q.push(tmpNode._left);
      }
      if(tmpNode._right !== null){
        q.push(tmpNode._right);
      }
      
    }

    return pathsArray;
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

let t = new Tree();
assert(t.getSummationPaths(3).length === 0, "t.getSummationPaths(3).length === 0" );
t.insert(1);
t.insert(2);
t.insert(3);
t.insert(-1);
t.insert(-2);
t.insert(-4);
t.insert(4);

let result = t.getSummationPaths(3);
result.forEach((nodesPath) => {
  console.log(nodesPath);
  assert(nodesPath.reduce( (sum, node) => sum + node._val, 0)  === 3, nodesPath );
})
