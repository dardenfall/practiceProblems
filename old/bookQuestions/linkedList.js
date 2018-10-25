

  class Node {
    constructor(val){
      this._val = val;
      this._next = null;
    }
  }

  class LList{
    constructor(){
      this._head = null;
    }

    add(val){
      let tmp = this._head;
      let n = new Node(val);
      this._head = n;
      n._next = tmp;
    }
  }


