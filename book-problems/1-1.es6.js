"use strict";
//1.1) Implement an algorithm to determine if a string has all unique characters. 
// NOTE : not using c-like string
function hasDuplicatesEs6(str){
  let uniquesObj = {};

  return [...str].some(ch => {
    if(uniquesObj[ch]){
      return true;
    }
    uniquesObj[ch] = true;
    return false;
  })

}

function assert(x, msg){
  if(!x){
    throw x.toString() + " is not true!";
  }
  else if(msg){
    console.log("true: "  + msg);
  }
}

assert(hasDuplicatesEs6("ttt"), "ttt");
assert(!hasDuplicatesEs6("waits"), "waits");
