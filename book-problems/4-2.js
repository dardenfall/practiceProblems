"use strict";
// 4.2) Given a directed graph, design an algorithm to find out whether there is a route 
//    between two nodes.


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

    let connection = this.routeExists(connectingVal, this._base);
  
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

const dg = new DirectedGraph(1);
dg.add("The Killers",1);
dg.add("Weezer","The Killers");
dg.add("Bleachers","Weezer");
dg.add("Dark Souls",1);
dg.add("Bloodborne","Dark Souls");
assert(dg.routeExists("The Killers", dg._base), 'dg.routeExists("The Killers", dg._base)');
assert(dg.routeExists("Bleachers", dg._base._connections[0]), 
  'dg.routeExists("Bleachers", dg._base._connections[0])');
assert(!dg.routeExists("Bloodborne", dg._base._connections[0]), 
  '!dg.routeExists("Bloodborne", dg._base._connections[0])');
