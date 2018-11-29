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

assert(hasDuplicatesEs6("ttt"), "ttt");
assert(!hasDuplicatesEs6("waits"), "waits");

