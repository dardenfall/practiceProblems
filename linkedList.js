class Node {
  constructor(val){
    this._val = val;
    this._next = null;
  }
}

class LinkedList {
  constructor(){
    this._head = null;  
  }

  append(val){
    let currNode = new Node(val);

    currNode._next = this._head;
    this._head = currNode;
  }
}