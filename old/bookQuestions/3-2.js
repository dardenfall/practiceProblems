(function(){
  "use strict";
  
  class Stack{
    constructor() {
      this._storage = [];
    }

    push(v){
      this._storage.push(v);
    }

    pop(){
      return this._storage.pop();
    }

    empty(){
      return this._storage.length === 0;
    }

    peek(){
      return this._storage[this._storage.length - 1];
    }

    static areEqual1(s1, s2){
      if(s1._storage.length !== s2._storage.length){
        return false;
      }
      for (var i = 0; i < s1._storage.length; i++) {
        if(s1._storage[0] !== s2._storage[0]){
          return false;
        }
      }
      return true;
    }
  }

  class MinStack extends Stack {
    constructor(){
      super();
      this._mins = new Stack();
    }
  
    push(val){
      if(this.min() == null){
        this._mins.push(val);
      }
      else{
        if(this.min() > val){
          this._mins.push(val);
        }
        else{
          this._mins.push(this.min());
        }
      }

      super.push(val);
    }

    pop(){
      this._mins.pop();
      return super.pop();
    }

    min(){
      if(this.empty()){
        return null;
      }
      else{
        return this._mins.peek();
      }
    }

    static areEqual(s1,s2){
      return (this.areEqual1(s1,s2) && this.areEqual1(s1._mins, s2._mins));
    }
  }

  function testFunc(func, tests){

    for(let test of tests){
      let result = func(test.q);

      if(result === test.a){
        console.log("SUCCESS", result, " equals ", test.a);
      }
      else{
        console.log("FAIL", result, " not equal to ", test.a);        
      }
    }

  }
  
  var testCases = [];
  var s1 = new MinStack();
  s1.push(2);
  s1.push(4);
  s1.push(-2);
  s1.push(6);

  testFunc(s1.min.bind(s1), [{q:0, a:-2}]);  
  testFunc(s1.pop.bind(s1), [{q:0, a:6}]);  
  testFunc(s1.pop.bind(s1), [{q:0, a:-2}]);  
  testFunc(s1.min.bind(s1), [{q:0, a:2}]);  



})()