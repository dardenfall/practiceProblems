function Node(val){
  this._val = val;
  this._left = null;
  this._right = null;
}

function add(val,n){
  var tempNode = n;

  if(n === null){
    n._val = val;
  }
  while(tempNode !== null){
    var v = tempNode._val;

    if (val === v){
      return;
    }
    else if (val < v){
      if(tempNode._left === null){
        tempNode._left = new Node(val);
      }
      else{
        tempNode = tempNode._left;
      }
    }
    else{
      if(tempNode._right === null){
        tempNode._right = new Node(val);
      }
      tempNode = tempNode._right;
    }
  }
}

function printTree(node){

  function treeToArray(node){
    var result = [];

    if(node === null){
      return;
    }

    result.push(node._val);
    result.push(treeToArray(node._left));
    result.push(treeToArray(node._right));    

    return result;
  }

  var treeArray = treeToArray(node);
  console.log(treeArray)

}

function print(node){

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

  printLevel(node, 0);
  console.log(strata)
};

function validate(node){

  function validateHelper(node, min, max){
    
    if(node === null){
      return true;
    }
    var val = node._val;

    if(val < min){
      return false;
    }
    if(val > max){
      return false;
    }

    return validateHelper(node._left, min, val) && 
      validateHelper(node._right, val, max)
  }

  return validateHelper(node, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

function search(val, node, isBreadthFirst){

  function depthSearch(node){

    if(node === null){
      return false;
    }
    else if(node._val === val){
      return true;
    }
    else{
      return depthSearch(node._left) ||
            depthSearch(node._right)
    }
  }

  function breadthFirst(node){
    var queue = [];

    queue.push(node);
    while(queue.length != 0){
      
      var tempNode = queue.shift();
      if(tempNode !== null && 
         val === tempNode._val){
        return true;
      }

      if(tempNode._left !== null){
        queue.push(tempNode._left);
      }
      if(tempNode._right !== null){
        queue.push(tempNode._right);
      }
      
    } 

    return false;
  }

  if(isBreadthFirst){
    console.log(breadthFirst)
    return breadthFirst(node);
  }
  else{
    return depthSearch(node);
  }  
}

(function(){
  var tree = new Node(8);
  add(3,tree);
  add(12,tree);
  add(1,tree);
  add(4,tree);
  add(9,tree);
  add(13,tree);
  add(18,tree);
  add(11,tree);

  print(tree);
  console.log(validate(tree));
  console.log(search(9, tree,true));
  console.log(search(29, tree,true));
})()