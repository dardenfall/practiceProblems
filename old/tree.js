var Node = function(val){
  this._val = val;
  this._left = null;
  this._right = null;

  this.isLeaf = function(){
    return this._left ===null && this._right === null;
  }
}

var Bst = function(){

  var _root = null;

  this.add = function(val){

    if(_root === null){
      _root = new Node(val);
      return;
    }

    var nodeTraverse = _root;
    while (nodeTraverse !== null){

      if(val === nodeTraverse._val){
        return;
      }
      else if(val < nodeTraverse._val){
        if(nodeTraverse._left === null){
          nodeTraverse._left = new Node(val);
          return;
        }
        nodeTraverse = nodeTraverse._left;
      }
      else{
        if(nodeTraverse._right === null){
          nodeTraverse._right = new Node(val);
          return;
        }
        nodeTraverse = nodeTraverse._right;
      }

    }

  }

  this.print = function(){

    var strata = [];
    var printLevel = function(node, level){
      if(node === null){
        return;
      }
      else{
        if(typeof strata[level] === 'undefined'){
          strata[level] = [];          
        }
        strata[level].push(node._val);
        printLevel(node._left, level + 1);
        printLevel(node._right, level + 1);
      }
    }

    printLevel(_root, 0);
    console.log(strata)
  }

  this.verify = function(){

    var isBST = function(node, min, max){

      console.log(node, min, max)
      if(node === null){
        return true;
      }

      if(node._val < min){
        return false;
      }

      if(node._val > max){
        return false;
      }

      return isBST(node._left, min, node._val) &&
        isBST(node._right, node._val, max);
    }

    if(_root === null){
      return true;
    }

    return isBST(_root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
  }

  this._pushLeft = function(val){
    _root._left = new Node(val);
  }
  this._pushRight = function(val){
    _root._right = new Node(val);
  }
  this._pushRightLeft = function(val){
    _root._right._left = new Node(val);
  }  
  this._pushRightRight = function(val){
    _root._right._right = new Node(val);
  }
  this._pushLeftRight = function(val){
    _root._left._right = new Node(val);
  }
  this._pushLeftLeft = function(val){
    _root._left._left = new Node(val);
  }    
}


var binaryTree = new Bst();

binaryTree.add(8);
binaryTree.add(3);
binaryTree.add(12);
binaryTree.add(1);
binaryTree.add(4);
binaryTree.add(9);
binaryTree.add(13);
binaryTree.add(18);
binaryTree.add(11);

console.log( binaryTree.verify() )
binaryTree.print();


// var binaryTree = new Bst();
// binaryTree.add(9);
// binaryTree._pushLeft(1);
// binaryTree._pushLeftRight(10);

// console.log(binaryTree.verify())
