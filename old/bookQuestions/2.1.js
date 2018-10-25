(function(){
  "use strict";
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
      let n = new Node(val);

      let tmp = this._head;
      if(tmp === null){
        this._head = n;
        return;
      }
      while(tmp._next !== null){
        tmp = tmp._next;
      }
      tmp._next = n;
    }

    static isEqualTo(list1, list2){
      let n1 = list1._head;
      let n2 = list2._head;

      while (n1 !== null){
        if(n2 === null){
          return false;
        }
        if(n1._val !== n2._val){
          return false;
        }
        n1 = n1._next;
        n2 = n2._next;
      }
      return true;
    }
  }

  function removeDuplicates(list){
    var s = {}
    var n = list._head;
    var p = null;

    if(n === null){
      return list;
    }

    var val = n._val;
    s[val] = val;
    p = n;
    n = n._next;

    while(n !== null){
      val = n._val;
      if(typeof s[val] !== 'undefined'){
        p._next = n._next;
      }
      else{
        s[val] = val;
        p = n;
      }

      n = n._next;
    }

    return list;
  }

  function testFunc(func, tests){
    for(let test of tests){
      let v = func(test.q);

      if(LList.isEqualTo(v,test.a)){
        console.log("SUCCESS - ", v, " equals ", test.a);
      }
      else{
        console.log("FAIL!!! - ", v, " not equal to ", test.a);        
      }
    }
  }

  var testCases = [];
  var l1 = new LList();
  l1.add(1);
  l1.add(2);
  l1.add(2);
  var l1a = new LList();
  l1a.add(1);
  l1a.add(2);
  testCases.push({q:l1, a:l1a});

  var l2 = new LList();
  l2.add(1);
  l2.add(2);
  l2.add(1);
  l2.add(2);
  var l2a = new LList();
  l2a.add(1);
  l2a.add(2);
  testCases.push({q:l2, a:l2a});

  var l3 = new LList();

  var l3a = new LList();

  testCases.push({q:l3, a:l3a});

  testFunc(removeDuplicates, testCases);  
})()