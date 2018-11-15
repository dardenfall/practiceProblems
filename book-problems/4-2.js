"use strict"
// 4.2) Given a directed graph, design an algorithm to find out whether there is a route 
//    between two nodes.
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

  routeExists(val, startingNode){
    let q = new Array();
    let visitedArray = new Array();

    q.push(startingNode);
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

