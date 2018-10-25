'use strict'

function mergesort(a){

  if(a.length <= 1){
    return a;
  }

  var first = a.slice(0,Math.ceil(a.length/2));
  var second = a.slice(Math.ceil(a.length/2));

  return _merge(mergesort(first), mergesort(second))
}

function _merge(firsthalf, secondhalf)
{
  
  var result = [];

  while (firsthalf.length !== 0 && secondhalf.length !== 0){
    if(firsthalf[0] < secondhalf[0]){
      result.push(firsthalf.shift())
    }
    else{
      result.push(secondhalf.shift())
    }
  }

  return result.concat(firsthalf).concat(secondhalf);
}

Array.prototype.eq = function(target){
  if (this.length !== target.length){
    return false;
  }
  for(let x=0; x<this.length; x++){
    if(this[x] !== target[x]){
      //console.log(this[x], target[x])
      return false;
    }
  }
  return true;
}

var tests = [
  {test: [2,6,4,1], answer:[1,2,4,6]},
  {test: [4], answer:[4]},
  {test: [2,4,7], answer:[2,4,7]},  
  {test: [7,4,2], answer:[2,4,7]},
  {test: [], answer:[]}];

for(let t of tests){
  let result = mergesort(t.test);
  if(!result.eq( t.answer)){
    console.log(`FAIL!  ${result} !== ${t.answer}`);
  }
  else{
    console.log(`success:  ${result} == ${t.answer}`);
  }
}