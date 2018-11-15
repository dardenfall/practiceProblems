"use strict";

class Node {
  constructor(val){
    this._val = val;
    this._connections = [];
  }
  
  connect(node){
    this._connections.push(node);
  }

}

class DirectedGraph {
  constructor(val){
    this._base = new Node(val);
  }

  add(val, connectingVal){

    let connection = this.breadthFirstSearch(connectingVal);
  
    if(!connection) throw "Unable to find node to connect to";

    connection.connect(new Node(val));
  }

  breadthFirstSearch(val){
    let q = new Array();
    let visitedArray = new Array();

    q.push(this._base);
    while(q.length !== 0){
      let searchNode = q.pop();

      if(visitedArray.indexOf(searchNode) === -1){

        if(val === searchNode._val){
          return searchNode;
        }

        for(let node of searchNode._connections){
          q.push(node);
        }

        visitedArray.push(searchNode);
      }
    }

    return null;
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

let dg = new DirectedGraph(1);
dg.add(2,1);
dg.add(3,1);
dg.add(4,2);
assert(dg._base._val === 1, "dg._base._val");
assert(dg._base._connections[0]._val === 2, "dg._base._connections[0]._val === 2");
assert(dg._base._connections[1]._val === 3, "dg._base._connections[0]._val === 3");
assert(dg._base._connections[0]._connections[0]._val === 4, "dg._base._connections[0]._val === 4");
//create a cyclic graph to test search
dg._base._connections[0]._connections[0]._connections[0] = dg._base._connections[0];
dg.add(5,4);
assert(dg._base._val === 1, "dg._base._val");
assert(dg.breadthFirstSearch(5)._val === 5, "dg.breadthFirstSearch(5)");
